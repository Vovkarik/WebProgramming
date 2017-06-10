function Rectangle()
{
    Shape.apply(this, arguments);
    this.posX1 = 100;
    this.posY1 = 100;
    this.posX2 = 500;
    this.posY2 = 500;
    this.getWidth = function()
    {
        return Math.abs(this.posX2 - this.posX1);
    };
    this.getHeight = function()
    {
        return Math.abs(this.posY2 - this.posY1);
    };
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
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.fillStyle = this.getFillColor();
    ctx.fillRect(this.posX1, this.posY1, this.getWidth(), this.getHeight());
    ctx.strokeStyle = this.getBorderColor();
    ctx.lineWidth = 4;
    ctx.strokeRect(this.posX1, this.posY1, this.getWidth(), this.getHeight());
    ctx.closePath();
};

Rectangle.prototype.calculatePerimeter = function()
{
    return  2 * (this.getWidth() + this.getHeight());
};

Rectangle.prototype.calculateArea = function()
{
    return this.getWidth() * this.getHeight();
};
