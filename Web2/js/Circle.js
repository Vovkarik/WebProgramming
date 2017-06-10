function Circle()
{
    Shape.apply(this, arguments);
    this.radius = 50;
    this.centerX = 200;
    this.centerY = 200;
    this.setRadius = function(radius)
    {
        this.radius = radius;
    };
    this.setCenterX = function(centerX)
    {
        this.centerX = centerX;
    };
    this.setCenterY = function(centerY)
    {
        this.centerY = centerY;
    };
    this.getFillColor = function()
    {
        return this.fillColor
    }
    this.getBorderColor = function()
    {
        return this.borderColor
    }
}

Circle.prototype = Object.create(Animal.prototype);

Circle.prototype.draw = function(ctx)
{
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.getFillColor();
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.getBorderColor();
    ctx.stroke();
    ctx.closePath();
};

Circle.prototype.calculatePerimeter = function()
{
    return  2 * Math_PI * this.radius;
};

Circle.prototype.calculateArea = function()
{
    return Math_PI * this.radius * this.radius;
};

