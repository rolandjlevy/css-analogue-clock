### Dividing circle into segments

https://stackoverflow.com/questions/56036195/create-svg-circle-using-path-with-6-segments/56039943

The circle can be divided into 6 segments using the attribute stroke-dasharray

The full circumference with a radius r = "100px" is equal to 2 x 3.14159 x 100 = 628.318px
The length of one sector 628.318 / 6 = 104.72px
Parameters for attribute stroke-dasharray = "100 4.72"

The full circumference with a radius r = "150px" is equal to 2 x 3.14159 x 150 = 942.477px
The length of one sector 942.477 / 6 = 157.1px
Parameters for attribute stroke-dasharray = "150 7.1"