# QR-Code-Generator-using-JS
Generate QR Code for the Text using Google Chart API

## What is QR?

QR code stands for Quick Response Code.

It is a two dimensional barcode typically made of black and white pixel patterns.

The QR code, which we are going to create using Google Chart API and can store up to four thousand alphanumeric characters of arbitrary text.

And this text can be anything, for example, an url , some text, telephone or mobile number or contact or a short story.



## Google Chart API

URL of Google Chart API - https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=250x250&chl=HelloWorld

Query parameters
cht=qr -> It specifies a QR code and it is required parameter.
chs=width x height -> It specifies Image's size, for example, chs=150x150
chl=data -> It is the data to encode. The data can be digits, alphanumeric characters or binary bytes.

### Demo

![](https://github.com/iamcharu18/QR-Code-Generator-using-JS/blob/main/Demo.gif)
