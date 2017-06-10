function Triangle()
{
    Shape.apply(this, arguments);
    this.posX1 = 200;
    this.posY1 = 200;
    this.posX2 = 100;
    this.posY2 = 100;
    this.posX3 = 500;
    this.posY3 = 500;
    this.getLength = function (x1, y1, x2, y2)
    {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    };
    this.length1 = this.getLength(this.posX1, this.posY1, this.posX2, this.posY2);
    this.length2 = this.getLength(this.posX2, this.posY2, this.posX3, this.posY3);
    this.length3 = this.getLength(this.posX1, this.posY1, this.posX3, this.posY3);

    this.setX1 = function (x)
    {
        this.posX1 = x;
    };
    this.setY1 = function (y)
    {
        this.posY1 = y;
    };
    this.setX2 = function (x)
    {
        this.posX2 = x;
    };
    this.setY2 = function (y)
    {
        this.posY2 = y;
    };
    this.setX3 = function (x)
    {
        this.posX3 = x;
    };
    this.setY3 = function (y)
    {
        this.posY3 = y;
    };
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.moveTo(this.posX1, this.posY1);
    ctx.lineTo(this.posX2, this.posY2);
    ctx.lineTo(this.posX3, this.posY3);
    ctx.lineTo(this.posX1, this.posY1);
    ctx.fillStyle = this.getFillColor();
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
    ctx.closePath();
};

Triangle.prototype.calculatePerimeter = function()
{
    return this.length1 + this.length2 + this.length3;
};

Triangle.prototype.calculateArea = function ()
{
    var semiperimeter = this.calculatePerimeter() / 2;
    return Math.round(Math.sqrt(semiperimeter * (semiperimeter - this.length1) * (semiperimeter - this.length2) *
        (semiperimeter - this.length3)));
};