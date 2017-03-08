/**
 * Created by Vovka on 19.02.2017.
 */
function Shape()
{
    this.fillColor = "#FF0000";
    this.borderColor = "#00FF00";
    this.setFillColor = function(fillColor)
    {
        this.fillColor = fillColor;
    };
    this.setBorderColor = function(borderColor)
    {
        this.borderColor = borderColor;
    };
}

Shape.prototype.draw = function()
{

};

Shape.prototype.calculateArea = function()
{

};

Shape.prototype.calculatePerimeter = function()
{

};


