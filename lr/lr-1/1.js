function rectA(a, b, c, d)
{

ctx.moveTo(c*0+a,c*50+b);
ctx.bezierCurveTo((c*0+a)+d,   (c*0+b)+d,   (c*0+a)+d,   (c*0+b)+d,   c*50+a,  c*0+b);

ctx.bezierCurveTo((c*100+a)-d, (c*0+b)+d,   (c*100+a)-d, (c*0+b)+d,   c*100+a, c*50+b);

ctx.bezierCurveTo((c*100+a)-d, (c*100+b)-d, (c*100+a)-d, (c*100+b)-d, c*50+a,  c*100+b);

ctx.bezierCurveTo((c*0+a)+d,   (c*100+b)-d, (c*0+a)+d,   (c*100+b)-d, c*0+a,   c*50+b);
}