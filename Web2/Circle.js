/**
 * Created by Vovka on 23.02.2017.
 */
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
}

Circle.prototype = Object.create(Animal.prototype);

Circle.prototype.draw = function(ctx, radius, centerX, centerY)
{
    this.setRadius(radius);
    this.setCenterX(centerX);
    this.setCenterY(centerY);
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2* Math_PI, false);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = 5;
    ctx.fill();
    ctx.stroke();
};

Circle.prototype.calculatePerimeter = function()
{
    return  2 * Math_PI * this.radius;
};

Circle.prototype.calculateArea = function()
{
    return Math_PI * this.radius * this.radius;
};

