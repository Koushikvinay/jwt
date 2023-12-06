
const express = require("express");
const { createCanvas } = require('canvas');
const Barcode = require('jsbarcode');
const PORT = process.env.PORT || 3000;



app.get('/barcode/:text', (req, res) => {
    const canvas = createCanvas();
    Barcode(canvas, req.params.text, {
        format: 'Code128',
        displayValue: true,
        fontSize: 18,
        textMargin: 10
    });

    
    
    res.type('image/png');
    const stream = canvas.createPNGStream();
    stream.pipe(res);
});

app.listen(PORT, () =>console.log(`listening on ${PORT}`));