uniform float progress;
attribute vec3 toPosition;
attribute float speed;
attribute float size;
attribute vec3 color;
attribute vec3 toColor;
varying vec3 vColor;
void main() {

    vec3 dis = toPosition - position;
    vec3 disColor = toColor - color;

    float percent = progress / speed;

    vec3 pos;
    if(percent <= 1.){
        pos= position + dis * percent;
        vColor = color + disColor * percent;
    }else{
        pos = toPosition;
        vColor = toColor;
    }




    vec4 viewPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = size;
    gl_PointSize *= 100. / -(modelViewMatrix * vec4(pos, 1.0)).z;

}