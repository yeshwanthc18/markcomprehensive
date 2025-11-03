uniform mat4 textureMatrix;
uniform float time;

varying vec4 mirrorCoord;
varying vec4 worldPosition;

#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>

void main() {
    vec3 pos = position;
pos.x += sin(pos.x * 0.5 + time*5.0) * 0.02;
mirrorCoord = modelMatrix * vec4( pos, 1.0 );
worldPosition = mirrorCoord.xyzw;
mirrorCoord = textureMatrix * mirrorCoord;


//pos.x += cos(pos.y * 0.5 + time*5.0) * 0.02;
pos.z += sin(pos.x * 0.5 + time*5.0) * 0.02;
pos.z += cos(pos.y * 0.5 + time*5.0) * 0.02;
// pos.y += sin(pos.x * 0.5 + time*5.0) * 0.02;
// pos.y += cos(pos.y * 0.5 + time*5.0) * 0.02;

vec4 mvPosition =  modelViewMatrix * vec4( pos, 1.0 );
//mvPosition.z += sin(mvPosition.x + time)*0.5 + sin(mvPosition.y  + time)*0.5;

gl_Position = projectionMatrix * mvPosition;

#include <beginnormal_vertex>
#include <defaultnormal_vertex>
#include <logdepthbuf_vertex>
#include <fog_vertex>
#include <shadowmap_vertex>
}