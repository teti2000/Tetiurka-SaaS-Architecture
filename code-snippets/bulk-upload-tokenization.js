/**
 * ============================================================================
 * BULK UPLOAD MATCHING ALGORITHM
 * Analyzes incoming filenames, tokenizes them, and matches them 
 * against database entities using a scoring system.
 * ============================================================================
 */

const tokenize = (str) => {
    if (!str) return [];
    // Clean string from special characters and split into keywords
    return str.toLowerCase()
        .replace(/[-_.,()]/g, ' ')
        .replace(/[^a-z0-9åäö ]/g, '')
        .split(/\s+/)
        .filter(w => w.length > 1);
};

const matchImageToProduct = (file, products) => {
    const fileNameBase = file.originalname ? file.originalname.split('.')[0] : 'unknown';
    const fileWords = tokenize(fileNameBase);
    
    let bestMatch = null;
    let highestScore = 0;

    for (const product of products) {
        const prodWords = tokenize(`${product.name} ${product.category} ${product.room}`);
        let matches = 0;

        // Calculate relevance score
        for (const fWord of fileWords) {
            const hasMatch = prodWords.some(pWord => {
                if (fWord === pWord) return true;
                if (fWord.length > 3 && pWord.length > 3) {
                    return pWord.includes(fWord) || fWord.includes(pWord);
                }
                return false;
            });
            if (hasMatch) matches++;
        }

        if (matches > highestScore) {
            highestScore = matches;
            bestMatch = product;
        }
    }

    return bestMatch; // Returns the dynamically mapped product
};
