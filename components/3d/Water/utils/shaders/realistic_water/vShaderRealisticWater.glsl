
uniform float iTime;

void main() {

    // Simple wave animation
    vec3 pos = position;
    pos.z += sin(pos.x * 2.0 + iTime) * 0.2;
    pos.z += cos(pos.y * 2.0 + iTime) * 0.2;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
