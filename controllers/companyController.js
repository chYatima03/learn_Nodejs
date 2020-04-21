
exports.index =  (req, res, next) => {
    res.status(200).json({ 
        data: {
            name: 'Yatima',
            address: {
                province: 'BKK'
            }
        } 
    });
}

