/**
 * Created by Vovka on 25.02.2017.
 */
function Rectangle()
{
    Shape.apply(this, arguments);
    
}

Rectangle.prototype = Object.create(Animal.prototype);

Rectangle.prototype.draw = function(ctx, radius, posX, posY)
{

};

Rectangle.prototype.calculatePerimeter = function()
{
    return  2 * Math_PI * this.radius;
};

Rectangle.prototype.calculateArea = function()
{
    return Math_PI * this.radius * this.radius;
};
