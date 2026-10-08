(()=>{var Ha=1;var Wa=3,Ds=0,Xa=1,ct=2;var Yr=1,wo=2;var $r=100;var Zr=204,Jr=205;var Kr=0,jr=1,Qr=2,Pi=3,eo=4,to=5,no=6,io=7,Ao=0,qa=1,Ya=2;var Eo=1,Co=2,Ro=3,Po=4,Io=5,Lo=6,Do=7;var No=300,$a=301,Uo=302;var Za=306,zn=1e3,Ti=1001,so=1002,ro=1003;var Ja=1006;var Ka=1008;var Fo=1009;var Bo=1015;var ja=1023;var Qa=1028;var Ii=2300,Ns=2301,Is=2302,oo=2303,ao=2400,lo=2401,co=2402;var el=0;var Oo="",Ee="srgb",ho="srgb-linear",uo="linear",Ls="srgb";var On=7680;var fo=519;var po=35044;var _n=2e3,Li=2001;function rc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var la={},Us=null;function tl(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ze(...s){s=tl(s);let e="THREE."+s.shift();if(Us)Us("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xe(...s){s=tl(s);let e="THREE."+s.shift();if(Us)Us("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function oi(...s){let e=s.join(" ");e in la||(la[e]=!0,Ze(...s))}var ac={[Kr]:jr,[Qr]:no,[eo]:io,[Pi]:to,[jr]:Kr,[no]:Qr,[io]:eo,[to]:Pi},vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=1234567,Ai=Math.PI/180,Di=180/Math.PI;function qn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[s&255]+ft[s>>8&255]+ft[s>>16&255]+ft[s>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function De(s,e,t){return Math.max(e,Math.min(t,s))}function zo(s,e){return(s%e+e)%e}function lc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function cc(s,e,t){return s!==e?(t-s)/(e-s):0}function Ei(s,e,t){return(1-t)*s+t*e}function hc(s,e,t,n){return Ei(s,e,1-Math.exp(-t*n))}function uc(s,e=1){return e-Math.abs(zo(s,e*2)-e)}function dc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function fc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function pc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function mc(s,e){return s+Math.random()*(e-s)}function gc(s){return s*(.5-Math.random())}function xc(s){s!==void 0&&(ca=s);let e=ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _c(s){return s*Ai}function vc(s){return s*Di}function yc(s){return(s&s-1)===0&&s!==0}function Mc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sc(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var nt={DEG2RAD:Ai,RAD2DEG:Di,generateUUID:qn,clamp:De,euclideanModulo:zo,mapLinear:lc,inverseLerp:cc,lerp:Ei,damp:hc,pingpong:uc,smoothstep:dc,smootherstep:fc,randInt:pc,randFloat:mc,randFloatSpread:gc,seededRandom:xc,degToRad:_c,radToDeg:vc,isPowerOfTwo:yc,ceilPowerOfTwo:Mc,floorPowerOfTwo:bc,setQuaternionFromProperEuler:Sc,normalize:vt,denormalize:ri},Ho=class Ho{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(De(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ho.prototype.isVector2=!0;var le=Ho,Ne=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],m=r[o+3];if(u!==m||l!==f||c!==d||h!==p){let y=l*f+c*d+h*p+u*m;y<0&&(f=-f,d=-d,p=-p,m=-m,y=-y);let x=1-a;if(y<.9995){let b=Math.acos(y),_=Math.sin(b);x=Math.sin(x*b)/_,a=Math.sin(a*b)/_,l=l*x+f*a,c=c*x+d*a,h=h*x+p*a,u=u*x+m*a}else{l=l*x+f*a,c=c*x+d*a,h=h*x+p*a,u=u*x+m*a;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(De(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wo=class Wo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ha.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this.z=De(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this.z=De(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mr.copy(this).projectOnVector(e),this.sub(Mr)}reflect(e){return this.sub(Mr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(De(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wo.prototype.isVector3=!0;var v=Wo,Mr=new v,ha=new Ne,Xo=class Xo{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],m=i[0],y=i[3],x=i[6],b=i[1],_=i[4],g=i[7],M=i[2],A=i[5],E=i[8];return r[0]=o*m+a*b+l*M,r[3]=o*y+a*_+l*A,r[6]=o*x+a*g+l*E,r[1]=c*m+h*b+u*M,r[4]=c*y+h*_+u*A,r[7]=c*x+h*g+u*E,r[2]=f*m+d*b+p*M,r[5]=f*y+d*_+p*A,r[8]=f*x+d*g+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=f*m,e[4]=(h*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(br.makeScale(e,t)),this}rotate(e){return oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(br.makeRotation(-e)),this}translate(e,t){return oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xo.prototype.isMatrix3=!0;var Ie=Xo,br=new Ie,ua=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),da=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tc(){let s={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ls&&(i.r=nn(i.r),i.g=nn(i.g),i.b=nn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ls&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Oo?uo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ho]:{primaries:e,whitePoint:n,transfer:uo,toXYZ:ua,fromXYZ:da,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:e,whitePoint:n,transfer:Ls,toXYZ:ua,fromXYZ:da,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),s}var Ut=Tc();function nn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ai(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var $n,Fs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$n===void 0&&($n=mo("canvas")),$n.width=e.width,$n.height=e.height;let i=$n.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$n}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=nn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nn(t[n]/255)*255):t[n]=nn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wc=0,Bs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Sr(i[o].image)):r.push(Sr(i[o]))}else r=Sr(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Sr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fs.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var Ac=0,Tr=new v,yn=class s extends vn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ti,i=Ti,r=Ja,o=Ka,a=ja,l=Fo,c=s.DEFAULT_ANISOTROPY,h=Oo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=qn(),this.name="",this.source=new Bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tr).x}get height(){return this.source.getSize(Tr).y}get depth(){return this.source.getSize(Tr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==No)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zn:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zn:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=No;yn.DEFAULT_ANISOTROPY=1;var qo=class qo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],m=l[2],y=l[6],x=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(p-y)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(p+y)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,g=(d+1)/2,M=(x+1)/2,A=(h+f)/4,E=(u+m)/4,w=(p+y)/4;return _>g&&_>M?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=A/n,r=E/n):g>M?g<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(g),n=A/i,r=w/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=E/r,i=w/r),this.set(n,i,r,t),this}let b=Math.sqrt((y-p)*(y-p)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(y-p)/b,this.y=(u-m)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=De(this.x,e.x,t.x),this.y=De(this.y,e.y,t.y),this.z=De(this.z,e.z,t.z),this.w=De(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=De(this.x,e,t),this.y=De(this.y,e,t),this.z=De(this.z,e,t),this.w=De(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(De(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qo.prototype.isVector4=!0;var kn=qo;var lr=class lr{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,p,m,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,m,y)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,m,y){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=f,x[3]=d,x[7]=p,x[11]=m,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lr().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),r=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,m=c*u;t[0]=f+m*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,m=c*u;t[0]=f-m*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,m=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+m,t[1]=l*u,t[5]=m*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,m=a*c;t[0]=l*h,t[4]=m-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-m*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+m,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ec,e,Cc)}lookAt(e,t,n){let i=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),un.crossVectors(n,Ct),un.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),un.crossVectors(n,Ct)),un.normalize(),ss.crossVectors(Ct,un),i[0]=un.x,i[4]=ss.x,i[8]=Ct.x,i[1]=un.y,i[5]=ss.y,i[9]=Ct.y,i[2]=un.z,i[6]=ss.z,i[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],m=n[6],y=n[10],x=n[14],b=n[3],_=n[7],g=n[11],M=n[15],A=i[0],E=i[4],w=i[8],P=i[12],S=i[1],N=i[5],C=i[9],H=i[13],F=i[2],D=i[6],B=i[10],Y=i[14],I=i[3],W=i[7],L=i[11],T=i[15];return r[0]=o*A+a*S+l*F+c*I,r[4]=o*E+a*N+l*D+c*W,r[8]=o*w+a*C+l*B+c*L,r[12]=o*P+a*H+l*Y+c*T,r[1]=h*A+u*S+f*F+d*I,r[5]=h*E+u*N+f*D+d*W,r[9]=h*w+u*C+f*B+d*L,r[13]=h*P+u*H+f*Y+d*T,r[2]=p*A+m*S+y*F+x*I,r[6]=p*E+m*N+y*D+x*W,r[10]=p*w+m*C+y*B+x*L,r[14]=p*P+m*H+y*Y+x*T,r[3]=b*A+_*S+g*F+M*I,r[7]=b*E+_*N+g*D+M*W,r[11]=b*w+_*C+g*B+M*L,r[15]=b*P+_*H+g*Y+M*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],m=e[7],y=e[11],x=e[15],b=l*d-c*f,_=a*d-c*u,g=a*f-l*u,M=o*d-c*h,A=o*f-l*h,E=o*u-a*h;return t*(m*b-y*_+x*g)-n*(p*b-y*M+x*A)+i*(p*_-m*M+x*E)-r*(p*g-m*A+y*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],m=e[13],y=e[14],x=e[15],b=t*a-n*o,_=t*l-i*o,g=t*c-r*o,M=n*l-i*a,A=n*c-r*a,E=i*c-r*l,w=h*m-u*p,P=h*y-f*p,S=h*x-d*p,N=u*y-f*m,C=u*x-d*m,H=f*x-d*y,F=b*H-_*C+g*N+M*S-A*P+E*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/F;return e[0]=(a*H-l*C+c*N)*D,e[1]=(i*C-n*H-r*N)*D,e[2]=(m*E-y*A+x*M)*D,e[3]=(f*A-u*E-d*M)*D,e[4]=(l*S-o*H-c*P)*D,e[5]=(t*H-i*S+r*P)*D,e[6]=(y*g-p*E-x*_)*D,e[7]=(h*E-f*g+d*_)*D,e[8]=(o*C-a*S+c*w)*D,e[9]=(n*S-t*C-r*w)*D,e[10]=(p*A-m*g+x*b)*D,e[11]=(u*g-h*A-d*b)*D,e[12]=(a*P-o*N-l*w)*D,e[13]=(t*N-n*P+i*w)*D,e[14]=(m*_-p*M-y*b)*D,e[15]=(h*M-u*_+f*b)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,m=o*h,y=o*u,x=a*u,b=l*c,_=l*h,g=l*u,M=n.x,A=n.y,E=n.z;return i[0]=(1-(m+x))*M,i[1]=(d+g)*M,i[2]=(p-_)*M,i[3]=0,i[4]=(d-g)*A,i[5]=(1-(f+x))*A,i[6]=(y+b)*A,i[7]=0,i[8]=(p+_)*E,i[9]=(y-b)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Zn.set(i[0],i[1],i[2]).length(),a=Zn.set(i[4],i[5],i[6]).length(),l=Zn.set(i[8],i[9],i[10]).length();r<0&&(o=-o),kt.copy(this);let c=1/o,h=1/a,u=1/l;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=h,kt.elements[5]*=h,kt.elements[6]*=h,kt.elements[8]*=u,kt.elements[9]*=u,kt.elements[10]*=u,t.setFromRotationMatrix(kt),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=_n,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,m;if(l)p=r/(o-r),m=o*r/(o-r);else if(a===_n)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Li)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=_n,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,m;if(l)p=1/(o-r),m=o/(o-r);else if(a===_n)p=-2/(o-r),m=-(o+r)/(o-r);else if(a===Li)p=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};lr.prototype.isMatrix4=!0;var Je=lr,Zn=new v,kt=new Je,Ec=new v(0,0,0),Cc=new v(1,1,1),un=new v,ss=new v,Ct=new v,fa=new Je,pa=new Ne,Vn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pa.setFromEuler(this),this.setFromQuaternion(pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Ni=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rc=0,ma=new v,Jn=new Ne,Jt=new Je,rs=new v,xi=new v,Pc=new v,Ic=new Ne,ga=new v(1,0,0),xa=new v(0,1,0),_a=new v(0,0,1),va={type:"added"},Lc={type:"removed"},Kn={type:"childadded",child:null},wr={type:"childremoved",child:null},yt=class s extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new v,t=new Vn,n=new Ne,i=new v(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ie}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ni,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(ga,e)}rotateY(e){return this.rotateOnAxis(xa,e)}rotateZ(e){return this.rotateOnAxis(_a,e)}translateOnAxis(e,t){return ma.copy(e).applyQuaternion(this.quaternion),this.position.add(ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ga,e)}translateY(e){return this.translateOnAxis(xa,e)}translateZ(e){return this.translateOnAxis(_a,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(xi,rs,this.up):Jt.lookAt(rs,xi,this.up),this.quaternion.setFromRotationMatrix(Jt),i&&(Jt.extractRotation(i.matrixWorld),Jn.setFromRotationMatrix(Jt),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(va),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lc),wr.child=e,this.dispatchEvent(wr),wr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(va),Kn.child=e,this.dispatchEvent(Kn),Kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,Pc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Ic,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yt.DEFAULT_UP=new v(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ve=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},os={h:0,s:0,l:0};function Ar(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ee){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ut.workingColorSpace){if(e=zo(e,1),t=De(t,0,1),n=De(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ar(o,r,e+1/3),this.g=Ar(o,r,e),this.b=Ar(o,r,e-1/3)}return Ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ee){let n=nl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nn(e.r),this.g=nn(e.g),this.b=nn(e.b),this}copyLinearToSRGB(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ee){return Ut.workingToColorSpace(pt.copy(this),e),Math.round(De(pt.r*255,0,255))*65536+Math.round(De(pt.g*255,0,255))*256+Math.round(De(pt.b*255,0,255))}getHexString(e=Ee){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(pt.copy(this),t);let n=pt.r,i=pt.g,r=pt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Ee){Ut.workingToColorSpace(pt.copy(this),e);let t=pt.r,n=pt.g,i=pt.b;return e!==Ee?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(os);let n=Ei(dn.h,os.h,t),i=Ei(dn.s,os.s,t),r=Ei(dn.l,os.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pt=new ze;ze.NAMES=nl;var Vt=new v,Kt=new v,Er=new v,jt=new v,jn=new v,Qn=new v,ya=new v,Cr=new v,Rr=new v,Pr=new v,Ir=new kn,Lr=new kn,Dr=new kn,xn=class s{constructor(e=new v,t=new v,n=new v){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Vt.subVectors(i,t),Kt.subVectors(n,t),Er.subVectors(e,t);let o=Vt.dot(Vt),a=Vt.dot(Kt),l=Vt.dot(Er),c=Kt.dot(Kt),h=Kt.dot(Er),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jt)===null?!1:jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,jt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jt.x),l.addScaledVector(o,jt.y),l.addScaledVector(a,jt.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ir.setScalar(0),Lr.setScalar(0),Dr.setScalar(0),Ir.fromBufferAttribute(e,t),Lr.fromBufferAttribute(e,n),Dr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ir,r.x),o.addScaledVector(Lr,r.y),o.addScaledVector(Dr,r.z),o}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),Kt.subVectors(e,t),Vt.cross(Kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),Kt.subVectors(this.a,this.b),Vt.cross(Kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;jn.subVectors(i,n),Qn.subVectors(r,n),Cr.subVectors(e,n);let l=jn.dot(Cr),c=Qn.dot(Cr);if(l<=0&&c<=0)return t.copy(n);Rr.subVectors(e,i);let h=jn.dot(Rr),u=Qn.dot(Rr);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(jn,o);Pr.subVectors(e,r);let d=jn.dot(Pr),p=Qn.dot(Pr);if(p>=0&&d<=p)return t.copy(r);let m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Qn,a);let y=h*p-d*u;if(y<=0&&u-h>=0&&d-p>=0)return ya.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(ya,a);let x=1/(y+m+f);return o=m*x,a=f*x,t.copy(n).addScaledVector(jn,o).addScaledVector(Qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qe=class{constructor(e=new v(1/0,1/0,1/0),t=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(r,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),as.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(e.matrixWorld),this.union(as)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_i),ls.subVectors(this.max,_i),ei.subVectors(e.a,_i),ti.subVectors(e.b,_i),ni.subVectors(e.c,_i),fn.subVectors(ti,ei),pn.subVectors(ni,ti),Nn.subVectors(ei,ni);let t=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-Nn.z,Nn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,Nn.z,0,-Nn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-Nn.y,Nn.x,0];return!Nr(t,ei,ti,ni,ls)||(t=[1,0,0,0,1,0,0,0,1],!Nr(t,ei,ti,ni,ls))?!1:(cs.crossVectors(fn,pn),t=[cs.x,cs.y,cs.z],Nr(t,ei,ti,ni,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qt=[new v,new v,new v,new v,new v,new v,new v,new v],Gt=new v,as=new qe,ei=new v,ti=new v,ni=new v,fn=new v,pn=new v,Nn=new v,_i=new v,ls=new v,cs=new v,Un=new v;function Nr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Un.fromArray(s,r);let a=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var rt=new v,hs=new le,Dc=0,Pt=class extends vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=po,this.updateRanges=[],this.gpuType=Bo,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Os=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zs=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nc=new qe,vi=new v,Ur=new v,Ft=class{constructor(e=new v,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);let t=vi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(vi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Ur)),this.expandByPoint(vi.copy(e.center).sub(Ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Uc=0,Nt=new Je,Fr=new yt,ii=new v,Rt=new qe,yi=new qe,ot=new v,Oe=class s extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rc(e)?zs:Os)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Fr.lookAt(e),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Rt.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(e){let n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];yi.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Rt.min,yi.min),Rt.expandByPoint(ot),ot.addVectors(Rt.max,yi.max),Rt.expandByPoint(ot)):(Rt.expandByPoint(yi.min),Rt.expandByPoint(yi.max))}Rt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ot.fromBufferAttribute(a,c),l&&(ii.fromBufferAttribute(e,c),ot.add(ii)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let w=0;w<n.count;w++)a[w]=new v,l[w]=new v;let c=new v,h=new v,u=new v,f=new le,d=new le,p=new le,m=new v,y=new v;function x(w,P,S){c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let N=1/(d.x*p.y-p.x*d.y);isFinite(N)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(N),y.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(N),a[w].add(m),a[P].add(m),a[S].add(m),l[w].add(y),l[P].add(y),l[S].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,P=b.length;w<P;++w){let S=b[w],N=S.start,C=S.count;for(let H=N,F=N+C;H<F;H+=3)x(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let _=new v,g=new v,M=new v,A=new v;function E(w){M.fromBufferAttribute(i,w),A.copy(M);let P=a[w];_.copy(P),_.sub(M.multiplyScalar(M.dot(P))).normalize(),g.crossVectors(A,P);let N=g.dot(l[w])<0?-1:1;o.setXYZW(w,_.x,_.y,_.z,N)}for(let w=0,P=b.length;w<P;++w){let S=b[w],N=S.start,C=S.count;for(let H=N,F=N+C;H<F;H+=3)E(e.getX(H+0)),E(e.getX(H+1)),E(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new v,r=new v,o=new v,a=new v,l=new v,c=new v,h=new v,u=new v;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),m=e.getX(f+1),y=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,y),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,y),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let m=0,y=l.length;m<y;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let x=0;x<h;x++)f[p++]=c[d++]}return new Pt(f,h,u)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fc=0,Gn=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Yr,this.side=Ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Jr,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==Ds&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Jr&&(n.blendDst=this.blendDst),this.blendEquation!==$r&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(n.stencilFail=this.stencilFail),this.stencilZFail!==On&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var en=new v,Br=new v,us=new v,mn=new v,Or=new v,ds=new v,zr=new v,et=class{constructor(e=new v,t=new v(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Br.copy(e).add(t).multiplyScalar(.5),us.copy(t).sub(e).normalize(),mn.copy(this.origin).sub(Br);let r=e.distanceTo(t)*.5,o=-this.direction.dot(us),a=mn.dot(this.direction),l=-mn.dot(us),c=mn.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let m=1/h;u*=m,f*=m,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Br).addScaledVector(us,f),d}intersectSphere(e,t){en.subVectors(e.center,this.origin);let n=en.dot(this.direction),i=en.dot(en)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,i,r){Or.subVectors(t,e),ds.subVectors(n,e),zr.crossVectors(Or,ds);let o=this.direction.dot(zr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mn.subVectors(this.origin,e);let l=a*this.direction.dot(ds.crossVectors(mn,ds));if(l<0)return null;let c=a*this.direction.dot(Or.cross(mn));if(c<0||l+c>o)return null;let h=-a*mn.dot(zr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ma=new Je,Fn=new et,fs=new Ft,ba=new v,ps=new v,ms=new v,gs=new v,kr=new v,xs=new v,Sa=new v,_s=new v,_e=class extends yt{constructor(e=new Oe,t=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){xs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(kr.fromBufferAttribute(u,e),o?xs.addScaledVector(kr,h):xs.addScaledVector(kr.sub(t),h))}t.add(xs)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),Fn.copy(e.ray).recast(e.near),!(fs.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(fs,ba)===null||Fn.origin.distanceToSquared(ba)>(e.far-e.near)**2))&&(Ma.copy(r).invert(),Fn.copy(e.ray).applyMatrix4(Ma),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fn)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){let y=f[p],x=o[y.materialIndex],b=Math.max(y.start,d.start),_=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let g=b,M=_;g<M;g+=3){let A=a.getX(g),E=a.getX(g+1),w=a.getX(g+2);i=vs(this,x,e,n,c,h,u,A,E,w),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let y=p,x=m;y<x;y+=3){let b=a.getX(y),_=a.getX(y+1),g=a.getX(y+2);i=vs(this,o,e,n,c,h,u,b,_,g),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){let y=f[p],x=o[y.materialIndex],b=Math.max(y.start,d.start),_=Math.min(l.count,Math.min(y.start+y.count,d.start+d.count));for(let g=b,M=_;g<M;g+=3){let A=g,E=g+1,w=g+2;i=vs(this,x,e,n,c,h,u,A,E,w),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let y=p,x=m;y<x;y+=3){let b=y,_=y+1,g=y+2;i=vs(this,o,e,n,c,h,u,b,_,g),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}};function Bc(s,e,t,n,i,r,o,a){let l;if(e.side===Xa?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ds,a),l===null)return null;_s.copy(a),_s.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(_s);return c<t.near||c>t.far?null:{distance:c,point:_s.clone(),object:s}}function vs(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ps),s.getVertexPosition(l,ms),s.getVertexPosition(c,gs);let h=Bc(s,e,t,n,ps,ms,gs,Sa);if(h){let u=new v;xn.getBarycoord(Sa,ps,ms,gs,u),i&&(h.uv=xn.getInterpolatedAttribute(i,a,l,c,u,new le)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new le)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new v),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new v,materialIndex:0};xn.getNormal(ps,ms,gs,f.normal),h.face=f,h.barycoord=u}return h}var ks=class extends yn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=ro,h=ro,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ui=class extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},si=new Je,Ta=new Je,ys=[],wa=new qe,Oc=new Je,Mi=new _e,bi=new Ft,Fi=class extends _e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Oc)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qe),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),wa.copy(e.boundingBox).applyMatrix4(si),this.boundingBox.union(wa)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ft),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),bi.copy(e.boundingSphere).applyMatrix4(si),this.boundingSphere.union(bi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Mi.geometry=this.geometry,Mi.material=this.material,Mi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bi.copy(this.boundingSphere),bi.applyMatrix4(n),e.ray.intersectsSphere(bi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,si),Ta.multiplyMatrices(n,si),Mi.matrixWorld=Ta,Mi.raycast(e,ys);for(let o=0,a=ys.length;o<a;o++){let l=ys[o];l.instanceId=r,l.object=this,t.push(l)}ys.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ks(new Float32Array(i*this.count),i,this.count,Qa,Bo));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vr=new v,zc=new v,kc=new Ie,tn=class{constructor(e=new v(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Vr.subVectors(n,t).cross(zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Vr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kc.getNormalMatrix(e),i=this.coplanarPoint(Vr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bn=new Ft,Vc=new le(.5,.5),Ms=new v,Vs=class{constructor(e=new tn,t=new tn,n=new tn,i=new tn,r=new tn,o=new tn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],m=r[9],y=r[10],x=r[11],b=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(c-o,d-h,x-p,M-b).normalize(),i[1].setComponents(c+o,d+h,x+p,M+b).normalize(),i[2].setComponents(c+a,d+u,x+m,M+_).normalize(),i[3].setComponents(c-a,d-u,x-m,M-_).normalize(),n)i[4].setComponents(l,f,y,g).normalize(),i[5].setComponents(c-l,d-f,x-y,M-g).normalize();else if(i[4].setComponents(c-l,d-f,x-y,M-g).normalize(),t===_n)i[5].setComponents(c+l,d+f,x+y,M+g).normalize();else if(t===Li)i[5].setComponents(l,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){Bn.center.set(0,0,0);let t=Vc.distanceTo(e.center);return Bn.radius=.7071067811865476+t,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ms.x=i.normal.x>0?e.max.x:e.min.x,Ms.y=i.normal.y>0?e.max.y:e.min.y,Ms.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mt=class extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gs=new v,Hs=new v,Aa=new Je,Si=new et,bs=new Ft,Gr=new v,Ea=new v,bt=class extends yt{constructor(e=new Oe,t=new Mt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Gs.fromBufferAttribute(t,i-1),Hs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Gs.distanceTo(Hs);e.setAttribute("lineDistance",new Re(n,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;Aa.copy(i).invert(),Si.copy(e.ray).applyMatrix4(Aa);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=d,y=p-1;m<y;m+=c){let x=h.getX(m),b=h.getX(m+1),_=Ss(this,e,Si,l,x,b,m);_&&t.push(_)}if(this.isLineLoop){let m=h.getX(p-1),y=h.getX(d),x=Ss(this,e,Si,l,m,y,p-1);x&&t.push(x)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let m=d,y=p-1;m<y;m+=c){let x=Ss(this,e,Si,l,m,m+1,m);x&&t.push(x)}if(this.isLineLoop){let m=Ss(this,e,Si,l,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ss(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Gs.fromBufferAttribute(a,i),Hs.fromBufferAttribute(a,r),t.distanceSqToSegment(Gs,Hs,Gr,Ea)>n)return;Gr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Gr);if(!(c<e.near||c>e.far))return{distance:c,point:Ea.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var li=class extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ca=new Je,go=new et,Ts=new Ft,ws=new v,Bi=class extends yt{constructor(e=new Oe,t=new li){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=r,e.ray.intersectsSphere(Ts)===!1)return;Ca.copy(i).invert(),go.copy(e.ray).applyMatrix4(Ca);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,m=d;p<m;p++){let y=c.getX(p);ws.fromBufferAttribute(u,y),Ra(ws,y,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,m=d;p<m;p++)ws.fromBufferAttribute(u,p),Ra(ws,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ra(s,e,t,n,i,r,o){let a=go.distanceSqToPoint(s);if(a<t){let l=new v;go.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ue=class extends yn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ye=class s extends Oe{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2));function p(m,y,x,b,_,g,M,A,E,w,P){let S=g/E,N=M/w,C=g/2,H=M/2,F=A/2,D=E+1,B=w+1,Y=0,I=0,W=new v;for(let L=0;L<B;L++){let T=L*N-H;for(let O=0;O<D;O++){let z=O*S-C;W[m]=z*b,W[y]=T*_,W[x]=F,c.push(W.x,W.y,W.z),W[m]=0,W[y]=0,W[x]=A>0?1:-1,h.push(W.x,W.y,W.z),u.push(O/E),u.push(1-L/w),Y+=1}}for(let L=0;L<w;L++)for(let T=0;T<E;T++){let O=f+T+D*L,z=f+T+D*(L+1),k=f+(T+1)+D*(L+1),X=f+(T+1)+D*L;l.push(O,z,X),l.push(z,k,X),I+=6}a.addGroup(d,I,P),d+=I,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Oi=class s extends Oe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new v,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ve=class s extends Oe{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,m=[],y=n/2,x=0;b(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function b(){let g=new v,M=new v,A=0,E=(t-e)/n;for(let w=0;w<=r;w++){let P=[],S=w/r,N=S*(t-e)+e;for(let C=0;C<=i;C++){let H=C/i,F=H*l+a,D=Math.sin(F),B=Math.cos(F);M.x=N*D,M.y=-S*n+y,M.z=N*B,u.push(M.x,M.y,M.z),g.set(D,E,B).normalize(),f.push(g.x,g.y,g.z),d.push(H,1-S),P.push(p++)}m.push(P)}for(let w=0;w<i;w++)for(let P=0;P<r;P++){let S=m[P][w],N=m[P+1][w],C=m[P+1][w+1],H=m[P][w+1];(e>0||P!==0)&&(h.push(S,N,H),A+=3),(t>0||P!==r-1)&&(h.push(N,C,H),A+=3)}c.addGroup(x,A,0),x+=A}function _(g){let M=p,A=new le,E=new v,w=0,P=g===!0?e:t,S=g===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,y*S,0),f.push(0,S,0),d.push(.5,.5),p++;let N=p;for(let C=0;C<=i;C++){let F=C/i*l+a,D=Math.cos(F),B=Math.sin(F);E.x=P*B,E.y=y*S,E.z=P*D,u.push(E.x,E.y,E.z),f.push(0,S,0),A.x=D*.5+.5,A.y=B*.5*S+.5,d.push(A.x,A.y),p++}for(let C=0;C<i;C++){let H=M+C,F=N+C;g===!0?h.push(F,F+1,H):h.push(F+1,F,H),w+=3}c.addGroup(x,w,g===!0?1:2),x+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sn=class s extends Ve{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var It=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new le:new v);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new v,i=[],r=[],o=[],a=new v,l=new Je;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new v)}r[0]=new v,o[0]=new v;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(De(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(De(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ci=class extends It{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ws=class extends ci{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ko(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Pa=new v,Ia=new v,Hr=new ko,Wr=new ko,Xr=new ko,Mn=class extends It{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new v){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ia.subVectors(i[0],i[1]).add(i[0]),c=Ia);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Pa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Pa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),p<1e-4&&(p=m),y<1e-4&&(y=m),Hr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,m,y),Wr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,m,y),Xr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,m,y)}else this.curveType==="catmullrom"&&(Hr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Wr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Xr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Hr.calc(l),Wr.calc(l),Xr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new v().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function La(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Gc(s,e){let t=1-s;return t*t*e}function Hc(s,e){return 2*(1-s)*s*e}function Wc(s,e){return s*s*e}function Ci(s,e,t,n){return Gc(s,e)+Hc(s,t)+Wc(s,n)}function Xc(s,e){let t=1-s;return t*t*t*e}function qc(s,e){let t=1-s;return 3*t*t*s*e}function Yc(s,e){return 3*(1-s)*s*s*e}function $c(s,e){return s*s*s*e}function Ri(s,e,t,n,i){return Xc(s,e)+qc(s,t)+Yc(s,n)+$c(s,i)}var zi=class extends It{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ri(e,i.x,r.x,o.x,a.x),Ri(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xs=class extends It{constructor(e=new v,t=new v,n=new v,i=new v){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new v){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ri(e,i.x,r.x,o.x,a.x),Ri(e,i.y,r.y,o.y,a.y),Ri(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ki=class extends It{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qs=class extends It{constructor(e=new v,t=new v){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new v){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new v){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vi=class extends It{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ci(e,i.x,r.x,o.x),Ci(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gi=class extends It{constructor(e=new v,t=new v,n=new v){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new v){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ci(e,i.x,r.x,o.x),Ci(e,i.y,r.y,o.y),Ci(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hi=class extends It{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(La(a,l.x,c.x,h.x,u.x),La(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new le().fromArray(i))}return this}},Ys=Object.freeze({__proto__:null,ArcCurve:Ws,CatmullRomCurve3:Mn,CubicBezierCurve:zi,CubicBezierCurve3:Xs,EllipseCurve:ci,LineCurve:ki,LineCurve3:qs,QuadraticBezierCurve:Vi,QuadraticBezierCurve3:Gi,SplineCurve:Hi}),$s=class extends It{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ys[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ys[i.type]().fromJSON(i))}return this}},Hn=class extends $s{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ki(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Vi(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new zi(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Hi(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new ci(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},at=class extends Hn{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Hn().fromJSON(i))}return this}};function Zc(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=il(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=eh(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Wi(r,o,t,a,l,c,0),o}function il(s,e,t,n,i){let r;if(i===uh(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Da(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Da(o/n|0,s[o],s[o+1],r);return r&&hi(r,r.next)&&(qi(r),r=r.next),r}function Wn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(hi(t,t.next)||$e(t.prev,t,t.next)===0)){if(qi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Wi(s,e,t,n,i,r,o){if(!s)return;!o&&r&&rh(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Kc(s,n,i,r):Jc(s)){e.push(l.i,s.i,c.i),qi(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=jc(Wn(s),e),Wi(s,e,t,n,i,r,2)):o===2&&Qc(s,e,t,n,i,r):Wi(Wn(s),e,t,n,i,r,1);break}}}function Jc(s){let e=s.prev,t=s,n=s.next;if($e(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&wi(i,a,r,l,o,c,p.x,p.y)&&$e(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Kc(s,e,t,n){let i=s.prev,r=s,o=s.next;if($e(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),m=Math.max(a,l,c),y=Math.max(h,u,f),x=xo(d,p,e,t,n),b=xo(m,y,e,t,n),_=s.prevZ,g=s.nextZ;for(;_&&_.z>=x&&g&&g.z<=b;){if(_.x>=d&&_.x<=m&&_.y>=p&&_.y<=y&&_!==i&&_!==o&&wi(a,h,l,u,c,f,_.x,_.y)&&$e(_.prev,_,_.next)>=0||(_=_.prevZ,g.x>=d&&g.x<=m&&g.y>=p&&g.y<=y&&g!==i&&g!==o&&wi(a,h,l,u,c,f,g.x,g.y)&&$e(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;_&&_.z>=x;){if(_.x>=d&&_.x<=m&&_.y>=p&&_.y<=y&&_!==i&&_!==o&&wi(a,h,l,u,c,f,_.x,_.y)&&$e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;g&&g.z<=b;){if(g.x>=d&&g.x<=m&&g.y>=p&&g.y<=y&&g!==i&&g!==o&&wi(a,h,l,u,c,f,g.x,g.y)&&$e(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function jc(s,e){let t=s;do{let n=t.prev,i=t.next.next;!hi(n,i)&&rl(n,t,t.next,i)&&Xi(n,i)&&Xi(i,n)&&(e.push(n.i,t.i,i.i),qi(t),qi(t.next),t=s=i),t=t.next}while(t!==s);return Wn(t)}function Qc(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lh(o,a)){let l=ol(o,a);o=Wn(o,o.next),l=Wn(l,l.next),Wi(o,e,t,n,i,r,0),Wi(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function eh(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=il(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(ah(c))}i.sort(th);for(let r=0;r<i.length;r++)t=nh(i[r],t);return t}function th(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function nh(s,e){let t=ih(s,e);if(!t)return e;let n=ol(t,s);return Wn(n,n.next),Wn(t,t.next)}function ih(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(hi(s,t))return t;do{if(hi(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sl(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Xi(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&sh(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function sh(s,e){return $e(s.prev,s,e.prev)<0&&$e(e.next,s,s.next)<0}function rh(s,e,t,n){let i=s;do i.z===0&&(i.z=xo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,oh(i)}function oh(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function xo(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ah(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function sl(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function wi(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&sl(s,e,t,n,i,r,o,a)}function lh(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ch(s,e)&&(Xi(s,e)&&Xi(e,s)&&hh(s,e)&&($e(s.prev,s,e.prev)||$e(s,e.prev,e))||hi(s,e)&&$e(s.prev,s,s.next)>0&&$e(e.prev,e,e.next)>0)}function $e(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function hi(s,e){return s.x===e.x&&s.y===e.y}function rl(s,e,t,n){let i=Es($e(s,e,t)),r=Es($e(s,e,n)),o=Es($e(t,n,s)),a=Es($e(t,n,e));return!!(i!==r&&o!==a||i===0&&As(s,t,e)||r===0&&As(s,n,e)||o===0&&As(t,s,n)||a===0&&As(t,e,n))}function As(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Es(s){return s>0?1:s<0?-1:0}function ch(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&rl(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Xi(s,e){return $e(s.prev,s,s.next)<0?$e(s,e,s.next)>=0&&$e(s,s.prev,e)>=0:$e(s,e,s.prev)<0||$e(s,s.next,e)<0}function hh(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ol(s,e){let t=_o(s.i,s.x,s.y),n=_o(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Da(s,e,t,n){let i=_o(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _o(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uh(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var vo=class{static triangulate(e,t,n=2){return Zc(e,t,n)}},qt=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Na(e),Ua(n,e);let o=e.length;t.forEach(Na);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Ua(n,t[l]);let a=vo.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Na(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ua(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ht=class s extends Oe{constructor(e=new at([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:dh,_,g=!1,M,A,E,w;if(x){_=x.getSpacedPoints(h),g=!0,f=!1;let U=x.isCatmullRomCurve3?x.closed:!1;M=x.computeFrenetFrames(h,U),A=new v,E=new v,w=new v}f||(y=0,d=0,p=0,m=0);let P=a.extractPoints(c),S=P.shape,N=P.holes;if(!qt.isClockWise(S)){S=S.reverse();for(let U=0,K=N.length;U<K;U++){let te=N[U];qt.isClockWise(te)&&(N[U]=te.reverse())}}function H(U){let te=10000000000000001e-36,re=U[0];for(let ie=1;ie<=U.length;ie++){let xe=ie%U.length,ue=U[xe],Se=ue.x-re.x,ge=ue.y-re.y,V=Se*Se+ge*ge,R=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(re.x),Math.abs(re.y)),Z=te*R*R;if(V<=Z){U.splice(xe,1),ie--;continue}re=ue}}H(S),N.forEach(H);let F=N.length,D=S;for(let U=0;U<F;U++){let K=N[U];S=S.concat(K)}function B(U,K,te){return K||Xe("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(K,te)}let Y=S.length;function I(U,K,te){let re,ie,xe,ue=U.x-K.x,Se=U.y-K.y,ge=te.x-U.x,V=te.y-U.y,R=ue*ue+Se*Se,Z=ue*V-Se*ge;if(Math.abs(Z)>Number.EPSILON){let oe=Math.sqrt(R),q=Math.sqrt(ge*ge+V*V),ce=K.x-Se/oe,Ae=K.y+ue/oe,de=te.x-V/q,Pe=te.y+ge/q,Le=((de-ce)*V-(Pe-Ae)*ge)/(ue*V-Se*ge);re=ce+ue*Le-U.x,ie=Ae+Se*Le-U.y;let Te=re*re+ie*ie;if(Te<=2)return new le(re,ie);xe=Math.sqrt(Te/2)}else{let oe=!1;ue>Number.EPSILON?ge>Number.EPSILON&&(oe=!0):ue<-Number.EPSILON?ge<-Number.EPSILON&&(oe=!0):Math.sign(Se)===Math.sign(V)&&(oe=!0),oe?(re=-Se,ie=ue,xe=Math.sqrt(R)):(re=ue,ie=Se,xe=Math.sqrt(R/2))}return new le(re/xe,ie/xe)}let W=[];for(let U=0,K=D.length,te=K-1,re=U+1;U<K;U++,te++,re++)te===K&&(te=0),re===K&&(re=0),W[U]=I(D[U],D[te],D[re]);let L=[],T,O=W.concat();for(let U=0,K=F;U<K;U++){let te=N[U];T=[];for(let re=0,ie=te.length,xe=ie-1,ue=re+1;re<ie;re++,xe++,ue++)xe===ie&&(xe=0),ue===ie&&(ue=0),T[re]=I(te[re],te[xe],te[ue]);L.push(T),O=O.concat(T)}let z;if(y===0)z=qt.triangulateShape(D,N);else{let U=[],K=[];for(let te=0;te<y;te++){let re=te/y,ie=d*Math.cos(re*Math.PI/2),xe=p*Math.sin(re*Math.PI/2)+m;for(let ue=0,Se=D.length;ue<Se;ue++){let ge=B(D[ue],W[ue],xe);J(ge.x,ge.y,-ie),re===0&&U.push(ge)}for(let ue=0,Se=F;ue<Se;ue++){let ge=N[ue];T=L[ue];let V=[];for(let R=0,Z=ge.length;R<Z;R++){let oe=B(ge[R],T[R],xe);J(oe.x,oe.y,-ie),re===0&&V.push(oe)}re===0&&K.push(V)}}z=qt.triangulateShape(U,K)}let k=z.length,X=p+m;for(let U=0;U<Y;U++){let K=f?B(S[U],O[U],X):S[U];g?(E.copy(M.normals[0]).multiplyScalar(K.x),A.copy(M.binormals[0]).multiplyScalar(K.y),w.copy(_[0]).add(E).add(A),J(w.x,w.y,w.z)):J(K.x,K.y,0)}for(let U=1;U<=h;U++)for(let K=0;K<Y;K++){let te=f?B(S[K],O[K],X):S[K];g?(E.copy(M.normals[U]).multiplyScalar(te.x),A.copy(M.binormals[U]).multiplyScalar(te.y),w.copy(_[U]).add(E).add(A),J(w.x,w.y,w.z)):J(te.x,te.y,u/h*U)}for(let U=y-1;U>=0;U--){let K=U/y,te=d*Math.cos(K*Math.PI/2),re=p*Math.sin(K*Math.PI/2)+m;for(let ie=0,xe=D.length;ie<xe;ie++){let ue=B(D[ie],W[ie],re);J(ue.x,ue.y,u+te)}for(let ie=0,xe=N.length;ie<xe;ie++){let ue=N[ie];T=L[ie];for(let Se=0,ge=ue.length;Se<ge;Se++){let V=B(ue[Se],T[Se],re);g?J(V.x,V.y+_[h-1].y,_[h-1].x+te):J(V.x,V.y,u+te)}}}$(),ae();function $(){let U=i.length/3;if(f){let K=0,te=Y*K;for(let re=0;re<k;re++){let ie=z[re];pe(ie[2]+te,ie[1]+te,ie[0]+te)}K=h+y*2,te=Y*K;for(let re=0;re<k;re++){let ie=z[re];pe(ie[0]+te,ie[1]+te,ie[2]+te)}}else{for(let K=0;K<k;K++){let te=z[K];pe(te[2],te[1],te[0])}for(let K=0;K<k;K++){let te=z[K];pe(te[0]+Y*h,te[1]+Y*h,te[2]+Y*h)}}n.addGroup(U,i.length/3-U,0)}function ae(){let U=i.length/3,K=0;Q(D,K),K+=D.length;for(let te=0,re=N.length;te<re;te++){let ie=N[te];Q(ie,K),K+=ie.length}n.addGroup(U,i.length/3-U,1)}function Q(U,K){let te=U.length;for(;--te>=0;){let re=te,ie=te-1;ie<0&&(ie=U.length-1);for(let xe=0,ue=h+y*2;xe<ue;xe++){let Se=Y*xe,ge=Y*(xe+1),V=K+re+Se,R=K+ie+Se,Z=K+ie+ge,oe=K+re+ge;me(V,R,Z,oe)}}}function J(U,K,te){l.push(U),l.push(K),l.push(te)}function pe(U,K,te){ee(U),ee(K),ee(te);let re=i.length/3,ie=b.generateTopUV(n,i,re-3,re-2,re-1);he(ie[0]),he(ie[1]),he(ie[2])}function me(U,K,te,re){ee(U),ee(K),ee(re),ee(K),ee(te),ee(re);let ie=i.length/3,xe=b.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);he(xe[0]),he(xe[1]),he(xe[3]),he(xe[1]),he(xe[2]),he(xe[3])}function ee(U){i.push(l[U*3+0]),i.push(l[U*3+1]),i.push(l[U*3+2])}function he(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fh(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ys[i.type]().fromJSON(i)),new s(n,e.options)}},dh={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],m=e[r*3],y=e[r*3+1],x=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-u),new le(f,1-p),new le(m,1-x)]:[new le(a,1-l),new le(h,1-u),new le(d,1-p),new le(y,1-x)]}};function fh(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Xn=class s extends Oe{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=De(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new v,f=new le,d=new v,p=new v,m=new v,y=0,x=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:y=e[b+1].x-e[b].x,x=e[b+1].y-e[b].y,d.x=x*1,d.y=-y,d.z=x*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:y=e[b+1].x-e[b].x,x=e[b+1].y-e[b].y,d.x=x*1,d.y=-y,d.z=x*0,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(p)}for(let b=0;b<=t;b++){let _=n+b*h*i,g=Math.sin(_),M=Math.cos(_);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*g,u.y=e[A].y,u.z=e[A].x*M,o.push(u.x,u.y,u.z),f.x=b/t,f.y=A/(e.length-1),a.push(f.x,f.y);let E=l[3*A+0]*g,w=l[3*A+1],P=l[3*A+0]*M;c.push(E,w,P)}}for(let b=0;b<t;b++)for(let _=0;_<e.length-1;_++){let g=_+b*e.length,M=g,A=g+e.length,E=g+e.length+1,w=g+1;r.push(M,A,w),r.push(E,w,A)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Fe=class s extends Oe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],m=[],y=[];for(let x=0;x<h;x++){let b=x*f-o;for(let _=0;_<c;_++){let g=_*u-r;p.push(g,-b,0),m.push(0,0,1),y.push(_/a),y.push(1-x/l)}}for(let x=0;x<l;x++)for(let b=0;b<a;b++){let _=b+c*x,g=b+c*(x+1),M=b+1+c*(x+1),A=b+1+c*x;d.push(_,g,A),d.push(g,M,A)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(m,3)),this.setAttribute("uv",new Re(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},rn=class s extends Oe{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new v,p=new le;for(let m=0;m<=i;m++){for(let y=0;y<=n;y++){let x=r+y/n*o;d.x=u*Math.cos(x),d.y=u*Math.sin(x),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let m=0;m<i;m++){let y=m*(n+1);for(let x=0;x<n;x++){let b=x+y,_=b,g=b+n+1,M=b+n+2,A=b+1;a.push(_,g,A),a.push(g,M,A)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Wt=class s extends Oe{constructor(e=new at([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;qt.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,x=p.length;y<x;y++){let b=p[y];qt.isClockWise(b)===!0&&(p[y]=b.reverse())}let m=qt.triangulateShape(d,p);for(let y=0,x=p.length;y<x;y++){let b=p[y];d=d.concat(b)}for(let y=0,x=d.length;y<x;y++){let b=d[y];i.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let y=0,x=m.length;y<x;y++){let b=m[y],_=b[0]+u,g=b[1]+u,M=b[2]+u;n.push(_,g,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ph(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function ph(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var tt=class s extends Oe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new v,f=new v,d=[],p=[],m=[],y=[];for(let x=0;x<=n;x++){let b=[],_=x/n,g=o+_*a,M=e*Math.cos(g),A=Math.sqrt(e*e-M*M),E=0;x===0&&o===0?E=.5/t:x===n&&l===Math.PI&&(E=-.5/t);for(let w=0;w<=t;w++){let P=w/t,S=i+P*r;u.x=-A*Math.cos(S),u.y=M,u.z=A*Math.sin(S),p.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),y.push(P+E,1-_),b.push(c++)}h.push(b)}for(let x=0;x<n;x++)for(let b=0;b<t;b++){let _=h[x][b+1],g=h[x][b],M=h[x+1][b],A=h[x+1][b+1];(x!==0||o>0)&&d.push(_,g,A),(x!==n-1||l<Math.PI)&&d.push(g,M,A)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(m,3)),this.setAttribute("uv",new Re(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Lt=class s extends Oe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new v,d=new v,p=new v;for(let m=0;m<=n;m++){let y=o+m/n*a;for(let x=0;x<=i;x++){let b=x/i*r;d.x=(e+t*Math.cos(y))*Math.cos(b),d.y=(e+t*Math.cos(y))*Math.sin(b),d.z=t*Math.sin(y),c.push(d.x,d.y,d.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(x/i),u.push(m/n)}}for(let m=1;m<=n;m++)for(let y=1;y<=i;y++){let x=(i+1)*m+y-1,b=(i+1)*(m-1)+y-1,_=(i+1)*(m-1)+y,g=(i+1)*m+y;l.push(x,b,g),l.push(b,_,g)}this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ui=class s extends Oe{constructor(e=new Gi(new v(-1,-1,0),new v(-1,1,0),new v(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new v,l=new v,c=new le,h=new v,u=[],f=[],d=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function m(){for(let _=0;_<t;_++)y(_);y(r===!1?t:0),b(),x()}function y(_){h=e.getPointAt(_/t,h);let g=o.normals[_],M=o.binormals[_];for(let A=0;A<=i;A++){let E=A/i*Math.PI*2,w=Math.sin(E),P=-Math.cos(E);l.x=P*g.x+w*M.x,l.y=P*g.y+w*M.y,l.z=P*g.z+w*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function x(){for(let _=1;_<=t;_++)for(let g=1;g<=i;g++){let M=(i+1)*(_-1)+(g-1),A=(i+1)*_+(g-1),E=(i+1)*_+g,w=(i+1)*(_-1)+g;p.push(M,A,w),p.push(A,E,w)}}function b(){for(let _=0;_<=t;_++)for(let g=0;g<=i;g++)c.x=_/t,c.y=g/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Ys[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function al(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Fa(i))i.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Fa(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function St(s){let e={};for(let t=0;t<s.length;t++){let n=al(s[t]);for(let i in n)e[i]=n[i]}return e}function Fa(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}var Ce=class extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Yi=class extends Mt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Cs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var bn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Zs=class extends bn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ao,endingEnd:ao}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case lo:r=e,a=2*t-n;break;case co:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case lo:o=e,l=2*n-t;break;case co:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),m=p*p,y=m*p,x=-f*y+2*f*m-f*p,b=(1+f)*y+(-1.5-2*f)*m+(-.5+f)*p+1,_=(-1-d)*y+(1.5+d)*m+.5*p,g=d*y-d*m;for(let M=0;M!==a;++M)r[M]=x*o[h+M]+b*o[c+M]+_*o[l+M]+g*o[u+M];return r}},Js=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Ks=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},js=class extends bn{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),m=1-p;for(let y=0;y!==a;++y)r[y]=o[c+y]*m+o[l+y]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let m=o[c+p],y=o[l+p],x=d*f+p*2,b=u[x],_=u[x+1],g=e*f+p*2,M=h[g],A=h[g+1],E=(n-t)/(i-t),w,P,S,N,C;for(let H=0;H<8;H++){w=E*E,P=w*E,S=1-E,N=S*S,C=N*S;let D=C*t+3*N*E*b+3*S*w*M+P*i-n;if(Math.abs(D)<1e-10)break;let B=3*N*(b-t)+6*S*E*(M-b)+3*w*(i-M);if(Math.abs(B)<1e-10)break;E=E-D/B,E=Math.max(0,Math.min(1,E))}r[p]=C*m+3*N*E*_+3*S*w*A+P*y}return r}},Dt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cs(t,this.TimeBufferType),this.values=Cs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cs(e.times,Array),values:Cs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ks(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Js(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new js(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ii:t=this.InterpolantFactoryMethodDiscrete;break;case Ns:t=this.InterpolantFactoryMethodLinear;break;case Is:t=this.InterpolantFactoryMethodSmooth;break;case oo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ii;case this.InterpolantFactoryMethodLinear:return Ns;case this.InterpolantFactoryMethodSmooth:return Is;case this.InterpolantFactoryMethodBezier:return oo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&oc(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Is,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let m=t[u+p];if(m!==t[f+p]||m!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Dt.prototype.ValueTypeName="";Dt.prototype.TimeBufferType=Float32Array;Dt.prototype.ValueBufferType=Float32Array;Dt.prototype.DefaultInterpolation=Ns;var Sn=class extends Dt{constructor(e,t,n){super(e,t,n)}};Sn.prototype.ValueTypeName="bool";Sn.prototype.ValueBufferType=Array;Sn.prototype.DefaultInterpolation=Ii;Sn.prototype.InterpolantFactoryMethodLinear=void 0;Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qs=class extends Dt{constructor(e,t,n,i){super(e,t,n,i)}};Qs.prototype.ValueTypeName="color";var er=class extends Dt{constructor(e,t,n,i){super(e,t,n,i)}};er.prototype.ValueTypeName="number";var tr=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ne.slerpFlat(r,0,o,c-a,o,c,l);return r}},$i=class extends Dt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new tr(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Tn=class extends Dt{constructor(e,t,n){super(e,t,n)}};Tn.prototype.ValueTypeName="string";Tn.prototype.ValueBufferType=Array;Tn.prototype.DefaultInterpolation=Ii;Tn.prototype.InterpolantFactoryMethodLinear=void 0;Tn.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends Dt{constructor(e,t,n,i){super(e,t,n,i)}};nr.prototype.ValueTypeName="vector";var ir=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ll=new ir,sr=class{constructor(e){this.manager=e!==void 0?e:ll,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sr.DEFAULT_MATERIAL_NAME="__DEFAULT";var rr=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var qr=new Je,Ba=new v,Oa=new v,yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Fo,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new kn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ba.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ba),Oa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oa),t.updateMatrixWorld(),qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Li||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Rs=new v,Ps=new Ne,Xt=new v,or=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Rs,Ps,Xt),Xt.x===1&&Xt.y===1&&Xt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Ps,Xt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Rs,Ps,Xt),Xt.x===1&&Xt.y===1&&Xt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Rs,Ps,Xt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gn=new v,za=new le,ka=new le,ar=class extends or{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Di*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ai*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(Ai*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gn.x,gn.y).multiplyScalar(-e/gn.z),gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gn.x,gn.y).multiplyScalar(-e/gn.z)}getViewSize(e,t){return this.getViewBounds(e,za,ka),t.subVectors(ka,za)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ai*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Mo=class extends yo{constructor(){super(new ar(90,1,.5,500)),this.isPointLightShadow=!0}},Zi=class extends rr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var Vo="\\[\\]\\.:\\/",mh=new RegExp("["+Vo+"]","g"),Go="[^"+Vo+"]",gh="[^"+Vo.replace("\\.","")+"]",xh=/((?:WC+[\/:])*)/.source.replace("WC",Go),_h=/(WCOD+)?/.source.replace("WCOD",gh),vh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Go),yh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Go),Mh=new RegExp("^"+xh+_h+vh+yh+"$"),bh=["material","materials","bones","map"],bo=class{constructor(e,t,n){let i=n||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},We=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mh,"")}static parseTrackName(e){let t=Mh.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);bh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=bo;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lf=new Float32Array(1);var Va=new Je,on=class{constructor(e,t,n=0,i=1/0){this.ray=new et(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ni,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Va.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Va),this}intersectObject(e,t=!0,n=[]){return So(e,this,n,t),n.sort(Ga),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)So(e[i],this,n,t);return n.sort(Ga),n}};function Ga(s,e){return s.distance-e.distance}function So(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)So(r[o],e,t,!0)}}var Yo=class Yo{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Yo.prototype.isMatrix2=!0;var To=Yo;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var Sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Th=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Wh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$h=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,au=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,mu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Su=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wu=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Du=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$u=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_d=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Td=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Id=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$d=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Sh,alphahash_pars_fragment:Th,alphamap_fragment:wh,alphamap_pars_fragment:Ah,alphatest_fragment:Eh,alphatest_pars_fragment:Ch,aomap_fragment:Rh,aomap_pars_fragment:Ph,batching_pars_vertex:Ih,batching_vertex:Lh,begin_vertex:Dh,beginnormal_vertex:Nh,bsdfs:Uh,iridescence_fragment:Fh,bumpmap_pars_fragment:Bh,clipping_planes_fragment:Oh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Vh,color_fragment:Gh,color_pars_fragment:Hh,color_pars_vertex:Wh,color_vertex:Xh,common:qh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:$h,displacementmap_pars_vertex:Zh,displacementmap_vertex:Jh,emissivemap_fragment:Kh,emissivemap_pars_fragment:jh,colorspace_fragment:Qh,colorspace_pars_fragment:eu,envmap_fragment:tu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:su,envmap_physical_pars_fragment:mu,envmap_vertex:ru,fog_vertex:ou,fog_pars_vertex:au,fog_fragment:lu,fog_pars_fragment:cu,gradientmap_pars_fragment:hu,lightmap_pars_fragment:uu,lights_lambert_fragment:du,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:xu,lights_phong_fragment:_u,lights_phong_pars_fragment:vu,lights_physical_fragment:yu,lights_physical_pars_fragment:Mu,lights_fragment_begin:bu,lights_fragment_maps:Su,lights_fragment_end:Tu,lightprobes_pars_fragment:wu,logdepthbuf_fragment:Au,logdepthbuf_pars_fragment:Eu,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:Ru,map_fragment:Pu,map_pars_fragment:Iu,map_particle_fragment:Lu,map_particle_pars_fragment:Du,metalnessmap_fragment:Nu,metalnessmap_pars_fragment:Uu,morphinstance_vertex:Fu,morphcolor_vertex:Bu,morphnormal_vertex:Ou,morphtarget_pars_vertex:zu,morphtarget_vertex:ku,normal_fragment_begin:Vu,normal_fragment_maps:Gu,normal_pars_fragment:Hu,normal_pars_vertex:Wu,normal_vertex:Xu,normalmap_pars_fragment:qu,clearcoat_normal_fragment_begin:Yu,clearcoat_normal_fragment_maps:$u,clearcoat_pars_fragment:Zu,iridescence_pars_fragment:Ju,opaque_fragment:Ku,packing:ju,premultiplied_alpha_fragment:Qu,project_vertex:ed,dithering_fragment:td,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:od,shadowmap_vertex:ad,shadowmask_pars_fragment:ld,skinbase_vertex:cd,skinning_pars_vertex:hd,skinning_vertex:ud,skinnormal_vertex:dd,specularmap_fragment:fd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:xd,transmission_pars_fragment:_d,uv_pars_fragment:vd,uv_pars_vertex:yd,uv_vertex:Md,worldpos_vertex:bd,background_vert:Sd,background_frag:Td,backgroundCube_vert:wd,backgroundCube_frag:Ad,cube_vert:Ed,cube_frag:Cd,depth_vert:Rd,depth_frag:Pd,distance_vert:Id,distance_frag:Ld,equirect_vert:Dd,equirect_frag:Nd,linedashed_vert:Ud,linedashed_frag:Fd,meshbasic_vert:Bd,meshbasic_frag:Od,meshlambert_vert:zd,meshlambert_frag:kd,meshmatcap_vert:Vd,meshmatcap_frag:Gd,meshnormal_vert:Hd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:qd,meshphysical_vert:Yd,meshphysical_frag:$d,meshtoon_vert:Zd,meshtoon_frag:Jd,points_vert:Kd,points_frag:jd,shadow_vert:Qd,shadow_frag:ef,sprite_vert:tf,sprite_frag:nf},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new v},probesMax:{value:new v},probesResolution:{value:new v}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},cl={basic:{uniforms:St([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:St([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:St([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:St([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:St([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:St([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:St([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:St([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:St([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:St([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:St([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:St([fe.common,fe.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:St([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};cl.physical={uniforms:St([cl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var sf=new Ie;sf.set(-1,0,0,0,1,0,0,0,1);var $x={[Eo]:"LINEAR_TONE_MAPPING",[Co]:"REINHARD_TONE_MAPPING",[Ro]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[Lo]:"AGX_TONE_MAPPING",[Do]:"NEUTRAL_TONE_MAPPING",[Io]:"CUSTOM_TONE_MAPPING"};var Zx=new Float32Array(16),Jx=new Float32Array(9),Kx=new Float32Array(4);var jx={[Eo]:"Linear",[Co]:"Reinhard",[Ro]:"Cineon",[Po]:"ACESFilmic",[Lo]:"AgX",[Do]:"Neutral",[Io]:"Custom"};var Qx={[Ha]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};var e_={[$a]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};var t_={[Uo]:"ENVMAP_MODE_REFRACTION"};var n_={[Ao]:"ENVMAP_BLENDING_MULTIPLY",[qa]:"ENVMAP_BLENDING_MIX",[Ya]:"ENVMAP_BLENDING_ADD"};var rf=new Ie;rf.set(-1,0,0,0,1,0,0,0,1);var i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var G={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function Yn(s,e,t,n,i,r=16){r=Math.min(r,n/2,i/2),s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.quadraticCurveTo(e+n,t,e+n,t+r),s.lineTo(e+n,t+i-r),s.quadraticCurveTo(e+n,t+i,e+n-r,t+i),s.lineTo(e+r,t+i),s.quadraticCurveTo(e,t+i,e,t+i-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath()}function Ye(s,e,t,n,i,{top:r="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=s.createLinearGradient(e,t,e,t+i);c.addColorStop(0,r),c.addColorStop(1,o),s.fillStyle=c,Yn(s,e,t,n,i,l),s.fill(),s.strokeStyle=a,s.lineWidth=1.5,s.stroke()}function gt(s,e,t){let n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),s.fillStyle=n,s.fillRect(0,0,e,t),s.save(),s.globalAlpha=.13,s.strokeStyle="#79b3d1",s.lineWidth=1;for(let i=0;i<8;i++)s.beginPath(),s.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),s.stroke();s.restore(),s.fillStyle=G.gold,s.fillRect(32,0,96,4)}function j(s,e,t,n,i=28,r=G.ink,o="600",a){s.font=`${o} ${i}px Arial`,s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Number.isFinite(a)?s.fillText(e,t,n,a):s.fillText(e,t,n)}function an(s,e,t,n,i,r=G.gold){if(s.save(),s.translate(t,n),s.scale(i/48,i/48),s.lineWidth=2.8,s.lineCap="round",s.lineJoin="round",s.strokeStyle=r,s.fillStyle=r,e==="ball")s.beginPath(),s.arc(0,0,18,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-18,0),s.lineTo(18,0),s.stroke(),s.fillStyle="#183a51",s.beginPath(),s.arc(0,0,6,0,Math.PI*2),s.fill(),s.stroke();else if(e==="puff"){s.beginPath(),s.arc(0,3,16,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-14,-5),s.lineTo(-15,-19),s.lineTo(-5,-11),s.moveTo(14,-5),s.lineTo(15,-19),s.lineTo(5,-11),s.stroke(),s.beginPath(),s.arc(0,-8,5,0,Math.PI*1.5),s.stroke();for(let o of[-6,6])s.beginPath(),s.arc(o,3,2,0,Math.PI*2),s.fill();s.beginPath(),s.arc(0,7,5,.2,Math.PI-.2),s.stroke()}else if(e==="book")Yn(s,-20,-15,40,32,4),s.stroke(),s.beginPath(),s.moveTo(0,-15),s.lineTo(0,17),s.moveTo(-14,-6),s.lineTo(-5,-6),s.moveTo(5,-6),s.lineTo(14,-6),s.stroke();else if(e==="trophy")s.beginPath(),s.moveTo(-13,-17),s.lineTo(13,-17),s.lineTo(9,-3),s.quadraticCurveTo(0,8,-9,-3),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(0,5),s.lineTo(0,16),s.moveTo(-10,18),s.lineTo(10,18),s.moveTo(-13,-13),s.quadraticCurveTo(-25,-16,-19,-5),s.lineTo(-9,0),s.moveTo(13,-13),s.quadraticCurveTo(25,-16,19,-5),s.lineTo(9,0),s.stroke();else if(e==="golf")s.beginPath(),s.ellipse(0,13,18,6,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-3,13),s.lineTo(-3,-20),s.lineTo(15,-14),s.lineTo(-3,-7),s.stroke(),s.beginPath(),s.arc(10,8,3,0,Math.PI*2),s.fill();else if(e==="car"){Yn(s,-19,-15,38,30,5),s.stroke(),Yn(s,-11,-9,22,14,3),s.stroke();for(let o of[-22,18])for(let a of[-13,7])Yn(s,o,a,4,7,1),s.fill();s.beginPath(),s.moveTo(-12,10),s.lineTo(12,10),s.moveTo(0,-15),s.lineTo(0,-23),s.stroke()}else if(e==="target"){for(let o of[19,12,4])s.beginPath(),s.arc(0,0,o,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(0,0),s.lineTo(20,-20),s.moveTo(12,-20),s.lineTo(20,-20),s.lineTo(20,-12),s.stroke()}else s.beginPath(),s.moveTo(-6,-12),s.lineTo(12,0),s.lineTo(-6,12),s.closePath(),s.fill();s.restore()}function hl(s,e,t,n,i,r){let o=e==="RC car racing"?{title:"RC car racing",sub:"Three laps \xB7 steer, race and beat your best",icon:"car",accent:G.blue}:e==="Arcade wall of fame"?{title:"Arcade wall of fame",sub:"Personal bests \xB7 medals \xB7 trophy shelf",icon:"trophy",accent:G.gold}:e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:G.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:G.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:G.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:G.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:G.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:G.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:G.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:G.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:G.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:G.pink}:null;if(o)Ye(s,t,n,i,72,{top:r?"#365c70":"#21465e",bottom:r?"#25465a":"#19364b",stroke:r?o.accent:"#3b5c71"}),s.fillStyle=o.accent,Yn(s,t+1,n+15,4,42,2),s.fill(),an(s,o.icon,t+41,n+36,42,o.accent),j(s,o.title,t+82,n+31,i<600?26:29,G.ink,"700"),j(s,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,G.muted,"400",i-125),j(s,"\u203A",t+i-35,n+47,42,r?o.accent:G.muted,"400");else{let a=e==="Resume";Ye(s,t,n,i,72,{top:a?r?"#fff0c2":"#f8df9e":r?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":r?G.gold:"#496379"}),a&&an(s,"play",t+33,n+36,25,"#173247"),j(s,e,t+(a?60:24),n+46,28,a?"#122c40":G.ink,"700")}}function ul(s,e){gt(s,1024,768),j(s,"TF JONES  /  PLAY IN THE YARD",44,37,19,G.blue,"700"),j(s,"Mollie\u2019s adventures",44,93,48,G.ink,"700"),j(s,"Point with your right hand, then pull the trigger.",44,132,24,G.muted,"400"),Ye(s,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),j(s,e,60,172,23,G.mint,"500",900)}function $o(s,e,t,n,i){Ye(s,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),j(s,e,n+9,i,21,G.gold,"700"),j(s,t,n+45,i,21,G.muted,"400")}function dl(s,e=!1){$o(s,"Y","Games menu",44,663),$o(s,"B","Back",325,663),$o(s,"A",e?"Rescue / replay":"Replay round",548,663),s.strokeStyle="#355168",s.beginPath(),s.moveTo(44,692),s.lineTo(980,692),s.stroke(),j(s,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,G.blue,"700"),j(s,e?"Race paused \xB7 grip brakes":"Right grip to teleport",674,731,21,G.muted,"400")}function fl(s,e){s.clearRect(0,0,768,192),Ye(s,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),s.fillStyle=G.gold,Yn(s,23,27,5,138,2),s.fill(),s.font="600 32px Arial";let t=[],n="";for(let r of e.split(/\s+/)){let o=n?n+" "+r:r;s.measureText(o).width>660&&n?(t.push(n),n=r):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((r,o)=>j(s,r,47,i+o*42,32,G.ink,"600"))}function pl(s,{total:e,throws:t,best:n,last:i}){gt(s,1024,640),an(s,"target",72,66,55,G.mint),j(s,"STAFF-ROOM DARTS",119,79,40,G.ink,"700"),j(s,"NINE DART CHALLENGE",39,136,24,G.muted,"700"),j(s,String(e),36,281,142,G.gold,"700"),j(s,"POINTS",280,277,32,G.muted,"700"),Ye(s,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),j(s,"PERSONAL BEST",721,203,24,G.muted,"600"),j(s,String(n),721,264,52,G.mint,"700");for(let r=0;r<9;r++){let o=r<t;Ye(s,40+r*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),j(s,String(r+1),72+r*104,358,28,o?"#132e41":G.muted,"700")}Ye(s,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),j(s,i,61,458,36,G.ink,"600",890),j(s,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,G.mint,"600"),j(s,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,G.muted,"400")}var ml=new Map;function wt(s,e,t="target",n=G.gold,i=1.7){let r=[s,e,t,n].join("|"),o=ml.get(r);if(!o){let h=document.createElement("canvas");h.width=1024,h.height=256;let u=h.getContext("2d");u.fillStyle="#0a1b2c",u.fillRect(0,0,1024,256),Ye(u,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),u.fillStyle=n,u.fillRect(32,36,5,182),an(u,t,110,128,88,n),j(u,s,192,123,58,G.ink,"700",790),j(u,e,194,186,26,n,"600",775),o=new Ue(h),o.colorSpace=Ee,ml.set(r,o)}let a=new ve;a.name=s+" \xB7 activity sign";let l=new _e(new Fe(i,i/4),new Me({map:o}));a.add(l);let c=new _e(new ye(i+.055,i/4+.055,.04),new Ce({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var Ji;function di(){if(!Ji){let s=document.createElement("canvas");s.width=512,s.height=1024;let e=s.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let r=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(r,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(r,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=r+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(r,Math.floor((l+n())*341),o,1)}Ji=new Ue(s),Ji.colorSpace=Ee,Ji.anisotropy=4}return new Ce({map:Ji,color:16777215,roughness:.28,metalness:.04})}var Zo;function wn(s=.5,e=.32){if(!Zo){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,64);r.addColorStop(0,"rgba(4,12,20,.48)"),r.addColorStop(.55,"rgba(4,12,20,.2)"),r.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),Zo=new Ue(n)}let t=new _e(new Fe(s,e),new Me({map:Zo,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function An(s=1.4){let e=new ve;e.name="Warm arcade light fitting";let t=new _e(new ye(s,.09,.17),new Ce({color:2504518,roughness:.6}));e.add(t);let n=new _e(new Fe(s-.1,.115),new Me({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function gl(s){let e=new Zi(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,s.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new v(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new v(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var ht={left:-1.03,right:1.03,front:.08,back:6.95},Ki=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function En(s,e,t){let n=.033,i=0,r=0;for(let o of t.ramps){let a=s-o.x,l=e-o.z,c=o.w/2,h=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=h)continue;let u=Math.min(.16,c*.3),f=Math.min(1,(c-Math.abs(a))/u),d=1-Math.abs(l)/h,p=o.h*f*d;.033+p>n&&(n=.033+p,i=f<1?-Math.sign(a)*o.h*d/u:0,r=-Math.sign(l||1e-4)*o.h*f/h)}return{height:n,gx:i,gz:r}}function of(s,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,s.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,s.z)),i=s.x-t,r=s.z-n,o=Math.hypot(i,r);if(o>=.038)return;if(o<1e-9){let l=[[s.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-s.x,1,0],[s.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-s.z,0,1]].sort((c,h)=>c[0]-h[0]);[,i,r]=l[0],s.x+=i*(l[0][0]+.038+1e-4),s.z+=r*(l[0][0]+.038+1e-4)}else i/=o,r/=o,s.x+=i*(.038-o+1e-4),s.z+=r*(.038-o+1e-4);let a=s.vx*i+s.vz*r;a<0&&(s.vx-=1.68*a*i,s.vz-=1.68*a*r)}function af(s,e,t,n,i,r){let o=i-t,a=r-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((s-t)*o+(e-n)*a)/l)):0;return Math.hypot(s-t-o*c,e-n-a*c)}function _l(s,e,t){if(s.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),r=n/i;for(let o=0;o<i;o++){let a=s.x,l=s.z,c=En(s.x,s.z,e);s.vx-=7*c.gx*r,s.vz-=7*c.gz*r;let h=Math.hypot(s.vx,s.vz),u=Math.max(0,h-.4*r);h&&(s.vx*=u/h,s.vz*=u/h),s.x+=s.vx*r,s.z+=s.vz*r;for(let[f,d,p,m]of[["x","vx",ht.left+.038,ht.right-.038],["z","vz",ht.front+.038,ht.back-.038]])s[f]<p&&(s[f]=p,s[d]<0&&(s[d]*=-.72)),s[f]>m&&(s[f]=m,s[d]>0&&(s[d]*=-.72));for(let f of[...e.crates,...e.walls||[]])of(s,f);if(s.distance=(s.distance||0)+Math.hypot(s.x-a,s.z-l),s.y=En(s.x,s.z,e).height+.038,Math.hypot(s.vx,s.vz)<=1.15&&af(e.cup.x,e.cup.z,a,l,s.x,s.z)<.115-.038*.6){s.sunk=!0,s.x=e.cup.x,s.z=e.cup.z,s.vx=s.vz=0;break}Math.hypot(s.vx,s.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(s.vx=s.vz=0)}}var cr=s=>{let e=Math.hypot(s.x,s.y,s.z);return e>1e-5?{x:s.x/e,y:s.y/e,z:s.z/e}:null},Jo=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),hr=(s,e)=>s.x*e.x+s.y*e.y+s.z*e.z,xl=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x});function vl(s,e,t,n,i=null){if(n<=0||n>.1)return null;let r=(e.x-s.x)/n,o=(e.y-s.y)/n,a=(e.z-s.z)/n;if(Math.hypot(r,o,a)>8||hr(s.forward,e.forward)<.4)return null;let l=i||{x:r,y:o,z:a};if(Math.hypot(l.x,l.y,l.z)>8)return null;let c=Math.hypot(e.x-s.x,e.y-s.y,e.z-s.z),h=Math.hypot(e.forward.x-s.forward.x,e.forward.y-s.forward.y,e.forward.z-s.forward.z),u=Math.max(1,Math.ceil((c+h*.12)/.008));for(let f=0;f<=u;f++){let d=f/u,p=Jo(s,e,d),m=cr(Jo(s.forward,e.forward,d)),y=cr(Jo(s.side,e.side,d));if(!m||!y)continue;let x=cr(xl(y,m)),b=x&&cr(xl(m,x));if(!b)continue;let _={x:t.x-p.x,y:t.y-p.y,z:t.z-p.z},g=hr(_,b),M=hr(_,x),A=hr(_,m);if(Math.hypot(Math.max(0,Math.abs(g)-.104),Math.max(0,Math.abs(M)-.027),Math.max(0,Math.abs(A)-.058))>.038+.01)continue;let w=A>=0?1:-1,P={x:m.x*w,z:m.z*w},S=Math.hypot(P.x,P.z);if(S<.65)continue;P.x/=S,P.z/=S;let N=l.x*P.x+l.z*P.z;if(N<.07)continue;let C=Math.min(3.6,N*.92);return{vx:P.x*C,vz:P.z*C}}return null}var lf=new Ne().setFromAxisAngle(new v(1,0,0),-Math.PI/2);function yl(s){let e=s.rightGripController,t=e&&e!==s.controller?e:s.controller;if(!t||t.visible===!1)return null;let n=t.getWorldPosition(new v),i=t.getWorldQuaternion(new Ne);return e&&e!==s.controller&&i.multiply(lf),{position:n,quaternion:i,down:new v(0,-1,0).applyQuaternion(i)}}function Ml(s){let e=new ve;e.name="Controller putter",s.add(e);let t=new Ce({color:12964307,metalness:.72,roughness:.23}),n=new Ce({color:1518388,roughness:.9}),i=(y,x,b=e)=>{let _=new _e(y,x);return b.add(_),_},r=i(new Ve(.008,.009,1,10),t),o=i(new Ve(.017,.02,.17,14),n);o.position.y=-.025;for(let y=0;y<5;y++){let x=i(new Lt(.018,.0011,4,12),new Ce({color:5005926,roughness:.8}),o);x.rotation.x=Math.PI/2,x.position.y=-.065+y*.03}let a=new ve;a.name="Mallet putter head",e.add(a);let l=new at;l.moveTo(-.083,-.05),l.lineTo(.083,-.05),l.quadraticCurveTo(.099,-.05,.099,-.03),l.lineTo(.099,.035),l.quadraticCurveTo(.099,.053,.077,.053),l.lineTo(-.077,.053),l.quadraticCurveTo(-.099,.053,-.099,.035),l.lineTo(-.099,-.03),l.quadraticCurveTo(-.099,-.05,-.083,-.05);let c=i(new Ht(l,{depth:.041,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:6}),t,a);c.rotation.x=Math.PI/2,c.position.y=.0205;let h=i(new ye(.18,.032,.004),new Ce({color:3432035,roughness:.65}),a);h.position.z=-.055,i(new ye(.085,.003,.073),n,a).position.set(0,.026,.006);for(let y of[-.021,.021])i(new ye(.005,.002,.068),new Me({color:16248017}),a).position.set(y,.028,.004);i(new Ve(.012,.014,.046,10),t,a).position.set(-.055,.026,.014);let d=.86;e.visible=!1;function p(y){d=nt.clamp(y,.3,1.6),a.position.set(0,-d,0);let x=new v(-.055,-d+.044,.014);r.position.copy(x).multiplyScalar(.5),r.scale.y=x.length(),r.quaternion.setFromUnitVectors(new v(0,1,0),x.clone().normalize())}p(d);function m(y){e.position.copy(y.position),e.quaternion.copy(y.quaternion),e.updateMatrixWorld(!0);let x=a.getWorldPosition(new v),b=a.getWorldQuaternion(new Ne);return{x:x.x,y:x.y,z:x.z,forward:new v(0,0,-1).applyQuaternion(b),side:new v(1,0,0).applyQuaternion(b),up:new v(0,1,0).applyQuaternion(b)}}return{root:e,head:a,face:h,size:p,update:m,get length(){return d}}}var ln;function cf(){if(!ln){let s=document.createElement("canvas");s.width=256,s.height=512;let e=s.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,r,1,2)}ln=new Ue(s),ln.colorSpace=Ee,ln.wrapS=ln.wrapT=zn,ln.repeat.set(1/(ht.right-ht.left),1/(ht.back-ht.front)),ln.offset.set(.5,1.02),ln.anisotropy=4}return new Ce({map:ln,roughness:.95})}function bl(s,e,t,n){let i=new ve;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let r=new ve;r.name="Six-hole warehouse course",i.add(r);let o=R=>new Ce({color:R,roughness:.65}),a=(R,Z,oe,q,ce,Ae=r)=>{let de=new _e(R,Z);return de.position.set(oe,q,ce),Ae.add(de),de},l=a(new tt(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=wn(.16,.16);i.add(c);let h=Ml(i),u=h.root,f=h.head,d=new Me({color:16766588,transparent:!0,opacity:.78,depthWrite:!1,side:ct}),p=a(new rn(.13,.142,40),d,0,0,0,i);p.name="Putter contact guide",p.rotation.x=-Math.PI/2,p.visible=!1;let m=new bt(new Oe().setFromPoints([new v,new v]),new Mt({color:8645568,transparent:!0,opacity:.7,depthWrite:!1}));m.name="Putter face direction",m.visible=!1,i.add(m);let y=document.createElement("canvas");y.width=1024,y.height=640;let x=y.getContext("2d"),b=new Ue(y);b.colorSpace=Ee;let _=a(new Fe(2.2,1.375),new Me({map:b}),0,0,0,i);_.name="Mini-golf scorecard";let g=null,M=!1,A=0,E=0,w=[],P=null,S=!1,N=!1,C=null,H=!1,F=!1,D=!1,B=0,Y="Hold trigger and brush the putter through the ball.",I=null,W=!0,L=[],T=0,O=new Ne,z=()=>w.reduce((R,Z)=>R+Z,0),k=Ki.reduce((R,Z)=>R+Z.par,0),X=()=>Ki[A];try{let R=localStorage.getItem("tfj-mini-golf-best-v1"),Z=Number(R);R!==null&&Number.isFinite(Z)&&Z>=6&&(P=Z)}catch{}function $(){gt(x,1024,640),j(x,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,G.mint,"700"),j(x,D?"COURSE COMPLETE":`${A+1} / 6  \xB7  ${X().name.toUpperCase()}`,32,117,42,G.ink,"700",954),j(x,D?`${z()} strokes  \xB7  Par ${k}`:`${E} strokes  \xB7  Par ${X().par}`,32,190,43,G.gold,"700");for(let R=0;R<6;R++){let Z=32+R*161,oe=R===A;Ye(x,Z,227,151,177,{top:oe?"#26594a":"#183d43",bottom:"#0d2934",stroke:oe?G.gold:"#527779"}),j(x,`HOLE ${R+1}`,Z+13,260,24,oe?G.gold:G.muted),j(x,w[R]===void 0?"\u2014":String(w[R]),Z+18,334,58,G.ink,"700"),j(x,`PAR ${Ki[R].par}`,Z+13,382,22,G.muted)}j(x,`TOTAL ${z()+(F?0:E)}  \xB7  BEST ${P??"\u2014"}`,32,459,32,G.mint,"700"),j(x,Y,32,513,26,G.ink,"600",954),j(x,D?"A  PLAY AGAIN":F?"A  NEXT HOLE":"A  MOVE & FIT CLUB",32,578,27,G.gold,"700"),j(x,"Y  PAUSE / MENU",684,578,26,G.muted),b.needsUpdate=!0}function ae(){for(let R of[3,2,1.5,4,5,6])for(let Z of[-30,-29,-28,-27]){let oe=!0;for(let q=-1.1;q<=1.1;q+=.275)for(let ce=0;ce<=7.8;ce+=.25)(s.blocked(R+q,Z+ce,0)||Math.abs(s.groundAt(R+q,Z+ce,.1))>.1)&&(oe=!1);if(oe)return new v(R,0,Z)}return null}function Q(){let R=di();return R.roughness=.78,R}function J(R){let Z=a(new ye(R.w,.25,R.d),Q(),R.x,.155,R.z);Z.name="Pallet obstacle";for(let oe=0;oe<4;oe++)a(new ye(R.w/4-.018,.026,R.d+.01),Q(),R.x+(oe-1.5)*R.w/4,.293,R.z);for(let oe of[-1,1])a(new ye(.025,.18,R.d+.018),o("#8d724d"),R.x+oe*(R.w/2-.018),.165,R.z)}function pe(R){let q=[],ce=[],Ae=[];for(let Te=0;Te<=20;Te++)for(let se=0;se<=12;se++){let Ge=R.x-R.w/2+R.w*se/12,He=R.z-R.d/2+R.d*Te/20;q.push(Ge,En(Ge,He,X()).height+.002,He),ce.push(Ge,-He)}for(let Te=0;Te<20;Te++)for(let se=0;se<12;se++){let Ge=Te*13+se,He=Ge+1,lt=Ge+12+1,je=lt+1;Ae.push(Ge,lt,He,He,lt,je)}let de=new Oe;de.setAttribute("position",new Re(q,3)),de.setAttribute("uv",new Re(ce,2)),de.setIndex(Ae),de.computeVertexNormals();let Pe=Q();Pe.side=ct;let Le=new _e(de,Pe);Le.name="Loading ramp",r.add(Le)}function me(){for(let se of[...r.children])se.traverse(Ge=>{Ge.geometry?.dispose(),Ge.material?.dispose()}),r.remove(se);r.position.copy(g);let R=X(),Z=new at;Z.moveTo(ht.left,-ht.front),Z.lineTo(ht.right,-ht.front),Z.lineTo(ht.right,-ht.back),Z.lineTo(ht.left,-ht.back),Z.closePath();let oe=new Hn;oe.absarc(R.cup.x,-R.cup.z,.115,0,Math.PI*2,!1),Z.holes.push(oe),a(new ye(2.2,.027,7),o("#173848"),0,.016,3.51);let q=a(new Wt(Z,40),cf(),0,.033,0);q.rotation.x=-Math.PI/2,q.name="Putting green";for(let se of[-1.065,1.065])a(new ye(.07,.14,7),o("#203c4b"),se,.099,3.51),a(new ye(.045,.006,7),new Ce({color:15320952,emissive:11770199,emissiveIntensity:.25}),se,.172,3.51);for(let se of[.045,6.985])a(new ye(2.2,.14,.07),o("#203c4b"),0,.099,se);let ce=a(new Oi(.115,40),new Me({color:398620}),R.cup.x,.034,R.cup.z);ce.rotation.x=-Math.PI/2;let Ae=a(new rn(.115,.115+.015,40),new Me({color:16768133,side:ct}),R.cup.x,.035,R.cup.z);Ae.rotation.x=-Math.PI/2,a(new Ve(.009,.009,.68,8),o("#e2e7d7"),R.cup.x,.37,R.cup.z);let de=new Oe;de.setAttribute("position",new Re([0,0,0,.23,-.035,0,0,-.14,0],3)),de.computeVertexNormals();let Pe=a(de,new Me({color:16176260,side:ct}),R.cup.x,.7,R.cup.z);Pe.name="Hole flag";let Le=a(new rn(.105,.123,32),new Me({color:16049069,side:ct}),R.tee.x,.035,R.tee.z);if(Le.rotation.x=-Math.PI/2,R.crates.forEach(J),R.ramps.forEach(pe),R.pipe){let se=new at;for(let He=0;He<=32;He++){let lt=Math.PI-He*Math.PI/32,je=Math.cos(lt)*.43,mi=Math.sin(lt)*.43;He?se.lineTo(je,mi):se.moveTo(je,mi)}for(let He=0;He<=32;He++){let lt=He*Math.PI/32;se.lineTo(Math.cos(lt)*.34,Math.sin(lt)*.34)}se.closePath();let Ge=a(new Ht(se,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);Ge.name="Warehouse pipe tunnel"}_.position.copy(g).add(new v(0,2.42,.3)),a(new ye(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let se of[-1.09,1.09])a(new ye(.035,3.55,.035),o("#254252"),se,1.78,.26);let Te=wt("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",G.mint,2.05);Te.position.set(0,3.5,.3),r.add(Te)}function ee(){return I&&!I.sunk&&Math.hypot(I.vx,I.vz)>.04}function he(R,Z){return!s.blocked(g.x+R,g.z+Z,0)&&Math.abs(s.groundAt(g.x+R,g.z+Z,.1))<.1&&![...X().crates,...X().walls||[]].some(oe=>Math.abs(R-oe.x)<oe.w/2+.2&&Math.abs(Z-oe.z)<oe.d/2+.2)}function U(){if(!I||ee()||F)return!1;let R=[[-.28,.78],[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[Z,oe]of R){let q=I.x+Z,ce=I.z+oe;if(he(q,ce)&&s.xrTeleport(g.x+q,0,g.z+ce))return s.xrFace?.(0),re(),W=!0,!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function K(){E=0,F=D=!1,B=0,S=N=!1,C=null,L=[],W=!0;let R=X();I={x:R.tee.x,z:R.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,me(),ue(),Y="Hold your hand comfortably. A moves and fits your club.",U(),$()}function te(){let R=ae();return!R||!s.xrTeleport(R.x,0,R.z+7.03)?!1:(g=R,A=0,w=[],M=i.visible=!0,H=!1,O.identity(),K(),t("Mini-golf! Hold your controller comfortably and look down the green. A moves and fits the club. Hold trigger to putt."),!0)}function re(){S=N=!1,C=null,L=[],u.visible=p.visible=m.visible=!1}function ie(){M=i.visible=!1,re()}function xe(R){if(F)return;F=!0,re(),w.push(E),B=R?.8:0;let Z=X(),oe=R?E===1?"Hole in one!":E<Z.par?"Under par!":E===Z.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(D=A===Ki.length-1,D){let q=z(),ce=q<=k?"Gold":q<=k+6?"Silver":"Bronze";P=P===null?q:Math.min(P,q);try{localStorage.setItem("tfj-mini-golf-best-v1",String(P))}catch{}Y=`${ce} medal! ${q} strokes across six holes.`,t(Y)}else Y=`${oe} ${E} strokes. A for hole ${A+2}.`,t(Y);n(R?.7:.2),$()}function ue(){l.position.set(g.x+I.x,g.y+I.y,g.z+I.z),c.position.set(g.x+I.x,g.y+En(I.x,I.z,X()).height+.003,g.z+I.z)}function Se(R){let Z=yl(R);if(!Z)return re(),null;if(W){let q=R.forward.clone();q.y=0,q.lengthSq()<.01&&q.set(0,0,-1),q.normalize();let ce=new Ne().setFromAxisAngle(new v(0,1,0),Math.atan2(-q.x,-q.z)),Ae=En(Z.position.x-g.x,Z.position.z-g.z,X()).height,de=Z.position.y-g.y-Ae-.028;if(de<.3||de>1.6)return re(),null;O.copy(Z.quaternion).invert().multiply(ce),h.size(de),W=!1,C=null,L=[],Y="Club fitted. Mint guide = level face. Hold trigger to putt.",$()}Z.quaternion.multiply(O);let oe=h.update(Z);return oe.x-=g.x,oe.y-=g.y,oe.z-=g.z,u.visible=!F,oe}function ge(R){if(p.visible=!!R&&!ee()&&!F,m.visible=!1,!p.visible)return;p.position.set(g.x+I.x,g.y+En(I.x,I.z,X()).height+.004,g.z+I.z);let Z=Math.hypot(R.x-I.x,R.z-I.z)<.7,oe=Math.hypot(R.forward.x,R.forward.z),q=Math.abs(R.y-I.y)<.07&&Math.abs(R.up.y)>.8&&oe>.8;if(d.color.set(Z&&q?8645568:16766588),h.face.material.color.set(Z&&q?8636851:3432035),!Z||!q)return;m.visible=!0;let ce=R.forward.x/oe,Ae=R.forward.z/oe,de=m.geometry.attributes.position;for(let Pe=0;Pe<2;Pe++){let Le=Pe?.52:.07,Te=R.x+ce*Le,se=R.z+Ae*Le;de.setXYZ(Pe,g.x+Te,g.y+En(Te,se,X()).height+.005,g.z+se)}de.needsUpdate=!0,m.geometry.computeBoundingSphere()}function V(R,Z){if(!M)return;let oe=Math.max(0,Math.min(.1,R.dt)),q=!!R.right?.gamepad?.buttons[0]?.pressed,ce=!!R.right?.gamepad?.buttons[4]?.pressed,Ae=ce&&!H;if(H=ce,T+=oe,Z){re();return}if(Ae){if(F){D?(A=0,w=[]):A++,K();return}else if(!ee()){U();return}}q?S=!F:(S=!1,N=!0,C=null,L=[]);let de=Se(R);if(ge(de),q&&N&&!F&&!ee()&&de&&C){for(L.push({time:T,p:de});L.length>2&&T-L[1].time>.045;)L.shift();let Pe=L[0],Le=T-Pe.time,Te=Le>0?{x:(de.x-Pe.p.x)/Le,y:(de.y-Pe.p.y)/Le,z:(de.z-Pe.p.z)/Le}:null,se=vl(C,de,I,oe,Te);se&&(I.vx=se.vx,I.vz=se.vz,E++,N=!1,n(.3),Y=`Putt ${E} \xB7 wait for the ball to stop.`,$())}if(C=q&&de?de:null,q&&de&&!L.length&&L.push({time:T,p:de}),!F){let Pe=I.x,Le=I.z;_l(I,X(),oe);let Te=I.x-Pe,se=I.z-Le,Ge=Math.hypot(Te,se);Ge&&l.rotateOnWorldAxis(new v(se,0,-Te).normalize(),Ge/.038),ue(),I.sunk?xe(!0):!ee()&&E>=8?xe(!1):!ee()&&Y.startsWith("Putt")&&(Y="Ball stopped. A moves beside it and refits your club.",$())}B>0&&(B=Math.max(0,B-oe),l.position.y=g.y+.033+.038-(.8-B)*.2,l.scale.setScalar(Math.max(.12,B/.8)),c.visible=!1,B||(l.visible=!1))}return{root:i,course:r,putter:u,head:f,board:_,ball:l,ballGuide:p,aimLine:m,start:te,stop:ie,cancel:re,tick:V,moveBesideBall:U,get clubLength(){return h.length},get active(){return M},get origin(){return g},get held(){return S},get state(){return I},get hole(){return A},get strokes(){return E},get scores(){return w},get total(){return z()},get holeReady(){return F},get complete(){return D},get best(){return P},get layout(){return X()}}}function fi(s,e=.18){return Math.abs(s)<=e?0:Math.sign(s)*(Math.abs(s)-e)/(1-e)}function ji(s){let e=s?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function Sl(s,e,t,n){Math.abs(s)<.25&&(n=!1);let i=0;return e==="smooth"?i=-fi(s)*Math.PI/3*t:Math.abs(s)>.65&&!n&&(i=-Math.sign(s)*Math.PI/6,n=!0),{angle:i,latched:n}}function Ko(s,e,t){return{x:s*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-s*Math.sin(t)}}var xt={bounds:{minX:-2.05,maxX:2.05,minZ:-3.3,maxZ:3.3},obstacles:[{x:0,z:0,halfX:.68,halfZ:1.75}],start:{x:-1.37,z:1.62,yaw:0},checkpoints:[{x:-1.37,z:1.95,nx:0,nz:-1,halfWidth:.66},{x:-1.37,z:-1.35,nx:0,nz:-1,halfWidth:.66},{x:0,z:-2.52,nx:1,nz:0,halfWidth:.77},{x:1.37,z:-1.35,nx:0,nz:1,halfWidth:.66},{x:1.37,z:1.35,nx:0,nz:1,halfWidth:.66},{x:0,z:2.52,nx:-1,nz:0,halfWidth:.77}]},jo=1/240,hf=.29,uf=.49,es=(s,e,t)=>Math.max(e,Math.min(t,s)),Qo=(s,e,t)=>Number.isFinite(s)?es(s,e,t):0,df=s=>Math.atan2(Math.sin(s),Math.cos(s));function ea(){return{...xt.start,speed:0,wheelAngle:0,completedLaps:0,nextCheckpoint:1,lastCheckpoint:0,lapTime:0,elapsed:0,laps:[],finished:!1,collisions:0,rescues:0,distance:0,justLap:null,justFinished:!1,checkpointPassed:null,justCollision:!1,_accumulator:0,_contactCooldown:0}}function Qi(s,e,t){let n=-Math.sin(s.yaw),i=-Math.cos(s.yaw),r=s.speed*(n*e+i*t);r>=-.015||(s.speed=es(s.speed-1.25*r*(n*e+i*t),-1.1,2.8),s._contactCooldown<=0&&(s.collisions++,s.justCollision=!0,s._contactCooldown=.18))}function ff(s){let e=xt.bounds,t=.28;s.x<e.minX+t&&(s.x=e.minX+t,Qi(s,1,0)),s.x>e.maxX-t&&(s.x=e.maxX-t,Qi(s,-1,0)),s.z<e.minZ+t&&(s.z=e.minZ+t,Qi(s,0,1)),s.z>e.maxZ-t&&(s.z=e.maxZ-t,Qi(s,0,-1));for(let n of xt.obstacles){let i=es(s.x,n.x-n.halfX,n.x+n.halfX),r=es(s.z,n.z-n.halfZ,n.z+n.halfZ),o=s.x-i,a=s.z-r,l=Math.hypot(o,a);if(!(l>=t)){if(l<1e-9){let c=[[s.x-n.x+n.halfX,-1,0],[n.x+n.halfX-s.x,1,0],[s.z-n.z+n.halfZ,0,-1],[n.z+n.halfZ-s.z,0,1]].sort((d,p)=>d[0]-p[0]),[h,u,f]=c[0];o=u,a=f,s.x+=o*(h+t+1e-5),s.z+=a*(h+t+1e-5)}else o/=l,a/=l,s.x+=o*(t-l+1e-5),s.z+=a*(t-l+1e-5);Qi(s,o,a)}}}function pf(s,e,t){let n=xt.checkpoints[s.nextCheckpoint],i=(e-n.x)*n.nx+(t-n.z)*n.nz,r=(s.x-n.x)*n.nx+(s.z-n.z)*n.nz;if(i>0||r<=0||r-i<1e-9)return null;let o=-i/(r-i),a=e+(s.x-e)*o,l=t+(s.z-t)*o;return Math.abs((a-n.x)*-n.nz+(l-n.z)*n.nx)>n.halfWidth?null:{fraction:o,x:a,z:l}}function mf(s,e,t){s._contactCooldown=Math.max(0,s._contactCooldown-t),s.wheelAngle+=(-e.steer*uf-s.wheelAngle)*(1-Math.exp(-12*t));let n=s.speed,i=.32+.15*Math.abs(s.speed);e.brake>.01?s.speed>.025?s.speed=Math.max(0,s.speed-(5.8*e.brake+i)*t):s.speed=Math.min(0,Math.max(-1.1,s.speed-(2.4*e.brake-i)*t)):e.throttle>.01?s.speed<0?s.speed=Math.min(0,s.speed+(3.6*e.throttle+i)*t):s.speed=Math.max(0,Math.min(2.8,s.speed+(3.6*e.throttle-i)*t)):s.speed=Math.sign(s.speed)*Math.max(0,Math.abs(s.speed)-i*t),s.speed=es(s.speed,-1.1,2.8);let r=(n+s.speed)/2,o=r*Math.tan(s.wheelAngle)/hf,a=s.yaw+o*t/2,l=s.x,c=s.z;s.x-=Math.sin(a)*r*t,s.z-=Math.cos(a)*r*t,s.yaw=df(s.yaw+o*t),ff(s),s.distance+=Math.hypot(s.x-l,s.z-c);let h=pf(s,l,c);if(h){let u=s.nextCheckpoint;if(s.checkpointPassed=u,s.lastCheckpoint=u,s.nextCheckpoint=(u+1)%xt.checkpoints.length,u===0){let f=s.lapTime+t*h.fraction;if(s.laps.push(f),s.completedLaps++,s.justLap=f,s.lapTime=-t*h.fraction,s.completedLaps>=3){s.finished=!0,s.justFinished=!0,s.x=h.x,s.z=h.z,s.speed=0,s.elapsed+=t*h.fraction,s.lapTime=0;return}}}s.elapsed+=t,s.lapTime+=t}function Tl(s,e={},t=0){if(s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,s.finished||!Number.isFinite(t)||t<=0)return s;let n={steer:Qo(e.steer,-1,1),throttle:Qo(e.throttle,0,1),brake:Qo(e.brake,0,1)};for(s._accumulator+=Math.min(.1,t);s._accumulator>=jo-1e-12&&!s.finished;)s._accumulator=Math.max(0,s._accumulator-jo),mf(s,n,jo);return s.finished&&(s._accumulator=0),s}function wl(s){if(s.finished)return!1;let e=xt.checkpoints[s.lastCheckpoint];return s.x=e.x+e.nx*.25,s.z=e.z+e.nz*.25,s.yaw=Math.atan2(-e.nx,-e.nz),s.speed=0,s.wheelAngle=0,s.elapsed+=2,s.lapTime+=2,s.rescues++,s._accumulator=0,s._contactCooldown=0,s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,!0}function Yt(s){if(!Number.isFinite(s)||s<0)return"\u2014";let e=Math.floor(s*100),t=Math.floor(e/6e3),n=e%6e3;return`${t}:${String(Math.floor(n/100)).padStart(2,"0")}.${String(n%100).padStart(2,"0")}`}var it=.025,At=(s,e=.6,t=0)=>new Ce({color:s,roughness:e,metalness:t}),Al=(s,e,t,n=10)=>s+(e-s)*(1-Math.exp(-Math.max(0,t)*n));function Bt(s,e,t,n=0,i=0,r=0){let o=new _e(e,t);return o.position.set(n,i,r),s.add(o),o}function Ke(s,e,t,n,i,r,o,a){return Bt(s,new ye(t,n,i),e,r,o,a)}function ts(s,e,t,n){let i=new Fi(new ye(1,1,1),e,t.length),r=new yt;i.name=n;for(let o=0;o<t.length;o++){let[a,l,c,h,u,f,d=0]=t[o];r.position.set(h,u,f),r.scale.set(a,l,c),r.rotation.set(d,0,0),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}return i.instanceMatrix.needsUpdate=!0,i.computeBoundingSphere(),s.add(i),i}function Cn(s,e,t,n,i=.005){let r=new v(...t),o=new v(...n),a=Bt(s,new Ve(i,i,r.distanceTo(o),6),e);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new v(0,1,0),o.sub(r).normalize()),a}function mr(s,e,t,n,i,r=it+.001){let o=Bt(s,e,t,n,r,i);return o.rotation.x=-Math.PI/2,o}var pr,Rn;function gf(){if(!pr){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d");e.fillStyle="#f8e6aa",e.beginPath(),e.arc(64,64,59,0,Math.PI*2),e.fill(),e.strokeStyle="#16364a",e.lineWidth=7,e.stroke(),e.fillStyle="#133348",e.font="bold 94px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("7",64,71),pr=new Ue(s),pr.colorSpace=Ee}return new Me({map:pr,transparent:!0,depthWrite:!1})}function xf(){if(!Rn){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#334b5b",e.fillRect(0,0,256,256);let t=47;for(let n=0;n<7e3;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%256;e.fillStyle=n%2?"rgba(175,204,211,.065)":"rgba(10,26,42,.15)",e.fillRect(i,r,1,1)}Rn=new Ue(s),Rn.colorSpace=Ee,Rn.wrapS=Rn.wrapT=zn,Rn.repeat.set(4,6),Rn.anisotropy=2}return new Ce({map:Rn,roughness:.9})}function El(s){let e=new ve;e.name="TF Jones seven \xB7 RC rally buggy",s.add(e);let t=new ve;t.name="Sprung rally body",e.add(t);let n=At("#217db6",.32,.16),i=At("#0f2d3d",.52),r=At("#0c1720",.85),o=At("#e4edf2",.3,.55),a=At("#ffd66b",.38,.1),l=At("#244e68",.18,.55),c=document.querySelector?.(".brand img"),h=[];function u(D,B=.5,Y=""){let I=document.createElement("canvas");I.width=1024,I.height=D;let W=new Ue(I);W.colorSpace=Ee,W.anisotropy=2;function L(){let T=I.getContext("2d");T.clearRect(0,0,1024,D),T.fillStyle="#0f2d3d",T.fillRect(0,0,1024,D),D>=224&&(T.fillStyle="#ffd66b",T.fillRect(24,16,976,9),T.fillRect(24,D-25,976,9));let O=D*B-85;if(c?.naturalWidth>0&&c?.naturalHeight>0){let z=document.createElement("canvas");z.width=1024,z.height=192;let k=z.getContext("2d");k.drawImage(c,0,0,c.naturalWidth,c.naturalHeight*.53,62,11,900,171),k.globalCompositeOperation="source-in",k.fillStyle="#fff",k.fillRect(0,0,1024,192),k.globalCompositeOperation="source-over",T.drawImage(z,0,O-11)}else T.fillStyle="#fff",T.font="italic 900 162px Arial",T.textAlign="center",T.textBaseline="middle",T.fillText("TFJONES",512,O+85,900);Y&&(T.fillStyle="#ffd66b",T.font="bold 60px Arial",T.textAlign="center",T.textBaseline="middle",T.fillText(Y,512,D*.84,900)),W.needsUpdate=!0}return h.push(L),L(),new Ce({map:W,roughness:.4,metalness:.05})}function f(D,B,Y,I,W,L,T){let O=Ke(t,D,B,Y,I,W,L,T),z=O.geometry,k=[...z.groups],X=[...new Set(D)],$=[];z.clearGroups();for(let ae=0;ae<X.length;ae++){let Q=$.length;for(let J of k)if(D[J.materialIndex]===X[ae])for(let pe=J.start;pe<J.start+J.count;pe++)$.push(z.index.array[pe]);z.addGroup(Q,$.length-Q,ae)}return z.setIndex($),O.material=X,O}let d=u(512,.44,"RACING 07"),p=u(720,.73),m=u(192),y=u(224);c&&!c.complete&&c.addEventListener?.("load",()=>h.forEach(D=>D()),{once:!0});let x=new Ce({color:"#fff1bb",emissive:"#ffe3a0",emissiveIntensity:.75,roughness:.28}),b=new Ce({color:"#ff4156",emissive:"#e62347",emissiveIntensity:.55,roughness:.3}),_=wn(.49,.59);_.position.y=.002,e.add(_),Ke(t,i,.252,.029,.382,0,.111,0).name="Buggy chassis";let g=new at;for(let[D,[B,Y]]of[[-.081,-.204],[.081,-.204],[.123,-.122],[.12,.161],[.091,.19],[-.091,.19],[-.12,.161],[-.123,-.122]].entries())D===0?g.moveTo(B,-Y):g.lineTo(B,-Y);g.closePath();let M=Bt(t,new Ht(g,{depth:.054,bevelEnabled:!0,bevelSize:.009,bevelThickness:.006,bevelSegments:2,steps:1}),n,0,.122,0);M.rotation.x=-Math.PI/2,M.name="Blue rally body shell",f([i,i,p,i,i,i],.17,.017,.12,0,.185,-.128).name="TF Jones branded bonnet";for(let D of[-.071,.071])Ke(t,a,.015,.002,.12,D,.194,-.13);Ke(t,i,.284,.038,.027,0,.108,-.211).name="Front crash bumper",Ke(t,i,.26,.03,.026,0,.108,.211);for(let D of[-1,1])f([m,m,a,a,i,i],.016,.034,.18,D*.128,.157,.033).name=D<0?"TF Jones left side panel":"TF Jones right side panel",Cn(t,o,[D*.126,.14,-.1],[D*.126,.16,.13],.006),Cn(t,i,[D*.065,.113,-.13],[D*.146,.087,-.136],.011),Cn(t,i,[D*.065,.113,.13],[D*.146,.087,.136],.011);let A=Ke(t,l,.167,.085,.008,0,.226,-.037);A.rotation.x=-.34,Ke(t,l,.16,.07,.006,0,.224,.077).rotation.x=.12,Ke(t,i,.18,.008,.097,0,.269,.021);for(let D of[-.091,.091])Cn(t,a,[D,.177,-.054],[D,.272,-.008],.006),Cn(t,a,[D,.177,.09],[D,.272,.065],.006),Cn(t,a,[D,.272,-.008],[D,.272,.065],.006);f([n,n,d,i,n,n],.187,.01,.091,0,.279,.025).name="TF Jones racing roof";let E=mr(t,new Fe(.063,.063),gf(),0,-.166,.195);E.name="Race number seven";for(let D of[-.069,.069]){Cn(t,i,[D,.174,.146],[D,.245,.195],.008);let B=Bt(t,new Ve(.014,.014,.009,10),x,D,.16,-.202);B.rotation.x=Math.PI/2,Ke(t,b,.033,.014,.008,D,.158,.195)}f([i,i,y,i,i,i],.29,.016,.063,0,.249,.202).name="TF Jones rear rally spoiler";for(let D of[-.14,.14])Ke(t,a,.012,.03,.065,D,.257,.202);let w=Cn(t,i,[.072,.18,.094],[.085,.374,.118],.0018);w.name="RC receiver antenna",Bt(t,new tt(.005,6,4),a,.085,.375,.118);let P=[];for(let D of[-1,1])for(let B of[!0,!1]){let Y=new ve;Y.name=B?"Steering wheel pivot":"Rear axle",Y.position.set(D*.146,.078,B?-.137:.137),e.add(Y);let I=new ve;I.name=(B?"Front":"Rear")+(D<0?" left":" right")+" tire",Y.add(I);let W=Bt(I,new Ve(.077,.077,.055,16),r);W.rotation.z=Math.PI/2;let L=[],T=[];for(let O of[-1,1]){let z=Bt(I,new Ve(.043,.043,.005,12),o,O*.028,0,0);z.rotation.z=Math.PI/2;let k=Bt(I,new Ve(.015,.015,.007,10),a,O*.032,0,0);k.rotation.z=Math.PI/2;for(let X=0;X<5;X++){let $=X*Math.PI*2/5;L.push([.003,.011,.028,O*.032,Math.cos($)*.024,Math.sin($)*.024,-$])}}for(let O=0;O<10;O++){let z=O*Math.PI*2/10;T.push([.05,.006,.019,0,Math.cos(z)*.077,Math.sin(z)*.077,z])}ts(I,i,L,"Rim spokes"),ts(I,r,T,"Raised tire tread"),P.push({pivot:Y,wheel:I,front:B})}let S=0,N=0,C=0,H=0;function F(D,B=0){e.position.set(D.x,D.y??it,D.z),e.rotation.y=D.yaw??0;let Y=Number.isFinite(D.speed)?D.speed:0,I=Number.isFinite(D.wheelAngle)?D.wheelAngle:(D.steer||0)*.5;S=(S+Y*Math.max(0,Math.min(.1,B))/.077)%(Math.PI*2);for(let L of P)L.pivot.rotation.y=L.front?I:0,L.wheel.rotation.x=-S;let W=B>.001?nt.clamp((Y-N)/B,-7,7):0;C=Al(C,nt.clamp(-I*Y*.075,-.11,.11),B),H=Al(H,W*.005,B),t.rotation.z=C,t.rotation.x=H,t.position.y=Math.abs(Y)>.08?Math.sin(S*1.7)*.0015:0,N=Y}return F({x:0,z:0,yaw:0,speed:0},0),{root:e,wheels:P,body:t,shadow:_,update:F}}function _f(s,e,t,n,i,r){let o=new at;o.moveTo(0,.16),o.lineTo(.125,-.005),o.lineTo(.05,-.005),o.lineTo(.05,-.14),o.lineTo(-.05,-.14),o.lineTo(-.05,-.005),o.lineTo(-.125,-.005),o.closePath();let a=mr(s,new Wt(o),r,e,t);return a.rotation.z=Math.atan2(-n,-i),a.name="Clockwise racing arrow",a}function vf(s,e,t){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d");i.fillStyle="#102638",i.fillRect(0,0,128,128),i.strokeStyle="#8fe1c3",i.lineWidth=6,i.strokeRect(5,5,118,118),i.fillStyle="#f7fafc",i.font="bold 81px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(String(e+1),64,70);let r=new Ue(n);r.colorSpace=Ee;let o=mr(s,new Fe(.21,.21),new Me({map:r}),t.x-t.nx*.33,t.z-t.nz*.33);return o.rotation.z=Math.atan2(-t.nx,-t.nz),o.name="Checkpoint "+(e+1)+" number",o}function Cl(s){let e=new ve;e.name="Warehouse RC racing circuit",s.add(e);let{minX:t,maxX:n,minZ:i,maxZ:r}=xt.bounds,o=n-t,a=r-i,l=(t+n)/2,c=(i+r)/2,h=At("#132e40",.72),u=At("#29495b"),f=At("#f4e6bc",.6),d=At("#dd6574",.62),p=At("#f6d484",.5),m=At("#162a34",.9),y=new Ce({color:"#8fe1c3",emissive:"#438b7e",emissiveIntensity:.26,roughness:.4});Ke(e,h,o+.18,.021,a+.18,l,.0105,c).name="Raised circuit mat";let x=mr(e,new Fe(o,a),xf(),l,c,it);x.name="Asphalt racing surface";let b=[],_=[],g=[],M=[],A=[],E=[];for(let L of[t-.045,n+.045]){let T=Ke(e,u,.09,.092,a+.18,L,it+.046,c);T.name="RC boundary rail",b.push(T),Ke(e,y,.058,.006,a+.1,L,it+.095,c)}for(let L of[i-.045,r+.045]){let T=Ke(e,u,o,.092,.09,l,it+.046,L);T.name="RC boundary rail",b.push(T),Ke(e,y,o,.006,.058,l,it+.095,L)}for(let L of[t-.045,n+.045]){let T=Math.ceil(a/.22);for(let O=0;O<T;O++)(O%2?A:M).push([.085,.004,a/T-.003,L,it+.097,i+(O+.5)*a/T])}for(let L of[i-.045,r+.045]){let T=Math.ceil(o/.22);for(let O=0;O<T;O++)(O%2?A:M).push([o/T-.003,.004,.085,t+(O+.5)*o/T,it+.097,L])}let w=di();w.roughness=.85;for(let L of xt.obstacles){let{x:T,z:O,halfX:z,halfZ:k}=L,X=z*2,$=k*2,ae=new ve;ae.name="Pallet shipping island",e.add(ae),_.push(ae),Ke(ae,h,X,.125,$,T,it+.0625,O).name="Solid island barrier";for(let pe of[-1,1]){let me=Math.ceil($/.22);for(let ee=0;ee<me;ee++)(ee%2?A:M).push([.055,.018,$/me-.003,T+pe*(z-.0275),it+.13,O-k+(ee+.5)*$/me])}for(let pe of[-1,1]){let me=Math.ceil(X/.22);for(let ee=0;ee<me;ee++)(ee%2?A:M).push([X/me-.003,.018,.055,T-z+(ee+.5)*X/me,it+.13,O+pe*(k-.0275)])}for(let pe=0;pe<7;pe++)Ke(ae,w,(X-.16)/7-.011,.025,$-.18,T+(pe-3)*(X-.16)/7,it+.153,O);let Q=At("#c1a274",.94),J=At("#917b5e",.9);for(let[pe,me]of[-.93,0,.93].entries()){let ee=.28+pe%2*.13,he=.68,U=.72,K=it+.18+ee/2;Ke(ae,Q,he,ee,U,T+(pe===1?.1:-.09),K,O+me).name="Warehouse cargo crate",Ke(ae,J,.037,.004,U+.004,T+(pe===1?.1:-.09),K+ee/2+.002,O+me);for(let te of[-1,1])Ke(ae,J,.007,ee,.029,T+(pe===1?.1:-.09)+te*(he/2+.004),K,O+me)}for(let pe of[-1,1])for(let me of[-1,1]){let ee=T+pe*(z-.14),he=O+me*(k-.16);Ke(ae,m,.13,.015,.13,ee,it+.167,he),Bt(ae,new sn(.054,.15,8),p,ee,it+.25,he),Bt(ae,new Ve(.032,.04,.022,8),f,ee,it+.245,he)}}let P=xt.checkpoints[0],S=Math.abs(P.nz)>.5,N=P.halfWidth*2;for(let L=0;L<2;L++)for(let T=0;T<12;T++){let O=-N/2+(T+.5)*N/12,z=(L-.5)*.085,k=P.x+(S?O:z),X=P.z+(S?z:O);((L+T)%2?E:A).push([S?N/12-.002:.083,.001,S?.083:N/12-.002,k,it+.002,X])}ts(e,f,A,"Cream curb and starting line tiles"),ts(e,d,M,"Coral curb tiles"),ts(e,h,E,"Chequered starting line");let C=7903914,H=9429443;xt.checkpoints.forEach((L,T)=>{let O=new ve;O.name="RC checkpoint "+(T+1),e.add(O);let z=new Me({color:C,transparent:!0,opacity:.58,depthWrite:!1}),k=_f(O,L.x+L.nx*.35,L.z+L.nz*.35,L.nx,L.nz,z),X=-L.nz,$=L.nx,ae=[new v(L.x-X*L.halfWidth,it+.004,L.z-$*L.halfWidth),new v(L.x+X*L.halfWidth,it+.004,L.z+$*L.halfWidth)],Q=new bt(new Oe().setFromPoints(ae),new Yi({color:C,transparent:!0,opacity:.6,dashSize:.08,gapSize:.04}));Q.computeLineDistances(),O.add(Q),Q.name="Checkpoint crossing",Q.visible=T!==0,vf(O,T,L),g.push({root:O,arrow:k,line:Q,material:z})});let F=document.createElement("canvas");F.width=768,F.height=192;let D=F.getContext("2d");D.fillStyle="#102b40",D.fillRect(0,0,768,192),D.fillStyle="#8fe1c3",D.fillRect(0,0,768,9),D.fillStyle="#f7fafc",D.font="bold 73px Arial",D.textAlign="center",D.fillText("TFJ RC RACING",384,116),D.fillStyle="#f6d484",D.font="26px Arial",D.fillText("PALLET CIRCUIT \xB7 FOLLOW THE ARROWS",384,166);let B=new Ue(F);B.colorSpace=Ee;let Y=xt.obstacles[0].z+xt.obstacles[0].halfZ;Ke(e,h,1.2,.31,.026,0,.31,Y-.014);for(let L of[-.5,.5])Ke(e,u,.021,.21,.021,L,.205,Y-.029);let I=Bt(e,new Fe(1.18,.295),new Me({map:B}),0,.31,Y+.002);I.name="Pallet circuit fascia";function W(L){for(let T=0;T<g.length;T++){let O=g[T],z=T===L;O.material.color.setHex(z?H:C),O.material.opacity=z?.95:.45,O.line.material.color.setHex(z?H:C),O.line.material.opacity=z?.92:.3}}return W(1),{root:e,rails:b,obstacles:_,checkpoints:g,road:x,setCheckpoint:W,surfaceY:it}}var Pl="tfj-rc-best-lap-v1",Il="tfj-rc-best-race-v1",Ll=s=>nt.clamp(Number.isFinite(s?.value)?s.value:s?.pressed?1:0,0,1);function Dl(s,e,t,n){let i=new ve;i.name="Warehouse RC car racing",i.visible=!1,e.add(i);let r=Cl(i),o=El(i),a=document.createElement("canvas");a.width=1280,a.height=768;let l=a.getContext("2d"),c=new Ue(a);c.colorSpace=Ee;let h=new _e(new Fe(2.7,1.62),new Me({map:c}));h.name="RC race scoreboard",h.position.set(0,2.05,xt.bounds.minZ-.2),i.add(h);let u=new _e(new ye(2.77,1.69,.055),new Ce({color:1058613,roughness:.6}));u.position.copy(h.position),u.position.z-=.037,i.add(u);for(let T of[-1.34,1.34]){let O=new _e(new ye(.038,2.92,.038),new Ce({color:4019813,metalness:.3,roughness:.5}));O.position.set(T,1.46,h.position.z-.04),i.add(O)}let f=wt("TFJ RC RACING","WAREHOUSE  /  THREE-LAP TIME TRIAL","play",G.blue,2.6);f.position.set(0,3.27,h.position.z),i.add(f);let d=[];for(let T=0;T<3;T++){let O=new _e(new tt(.065,12,8),new Me({color:2307910}));O.position.set((T-1)*.21,1.13,h.position.z+.03),i.add(O),d.push(O)}let p=null,m=null,y=!1,x=ea(),b=3,_=!1,g=!1,M=!1,A=null,E=null,w=0,P="Release trigger, then get ready!",S=!1;function N(T,O){try{let z=localStorage.getItem(T),k=z===null||!z.trim()?NaN:Number(z);return Number.isSafeInteger(k)&&k>=O&&k<=36e5?k:null}catch{return null}}A=N(Pl,1e3),E=N(Il,3e3);function C(){gt(l,1280,768),j(l,"TF JONES  /  PALLET CIRCUIT",36,46,26,G.blue,"700"),j(l,x.finished?"RACE COMPLETE":"THREE-LAP TIME TRIAL",36,108,49,G.ink,"700"),Ye(l,885,29,356,135,{top:"#214b54",bottom:"#102e40",stroke:G.mint}),j(l,"BEST LAP",909,73,26,G.mint,"700"),j(l,A===null?"\u2014":Yt(A/1e3),909,137,53,G.gold,"700"),j(l,b>0?`READY  ${Math.ceil(b)}`:x.finished?"FINISH!":`LAP ${x.completedLaps+1} / ${3}`,36,210,55,G.gold,"700"),j(l,Yt(x.elapsed),693,215,66,G.ink,"700"),j(l,`Current lap ${Yt(x.lapTime)}`,37,263,32,G.mint,"600"),j(l,`Best race ${E===null?"\u2014":Yt(E/1e3)}`,692,263,30,G.muted,"500");for(let T=0;T<3;T++){let O=36+T*404,z=x.laps[T]!==void 0;Ye(l,O,296,385,156,{top:z?"#285749":"#1c3f55",bottom:"#102b3e",stroke:z?G.mint:"#496679"}),j(l,`LAP ${T+1}`,O+22,337,25,z?G.mint:G.muted,"700"),j(l,z?Yt(x.laps[T]):"\u2014",O+22,410,54,G.ink,"700")}j(l,P,37,503,30,G.ink,"600",1204),j(l,"LEFT STICK  STEER",37,562,28,G.blue,"700"),j(l,"RIGHT TRIGGER  GAS",638,562,28,G.gold,"700"),j(l,"RIGHT GRIP  BRAKE / REVERSE",37,612,25,G.muted),j(l,x.finished?"A  RACE AGAIN":"A  RESCUE CAR  (+2s)",638,612,25,G.mint,"700"),j(l,"X  RETURN TO DRIVER SPOT",37,690,25,G.muted),j(l,"Y  PAUSE / MENU   \xB7   B  LEAVE",638,690,25,G.muted),c.needsUpdate=!0,d.forEach((T,O)=>T.material.color.setHex(x.finished?9429443:b>2?O===0?15755368:2307910:b>1?O<=1?16176260:2307910:b>0?16176260:9429443))}function H(){let T=xt.bounds;for(let O of[3,3.5,4,2.5,4.5])for(let z of[-26.5,-26,-27,-25.5]){let k=!0;for(let X=T.minX-.11;X<=T.maxX+.11;X+=.3)for(let $=T.minZ-.3;$<=T.maxZ+.12;$+=.3)(s.blocked(O+X,z+$,0)||Math.abs(s.groundAt(O+X,z+$,.1))>.1)&&(k=!1);if(k)for(let X of[0,-.75,.75,-1.5,1.5]){let $=new v(O+X,0,z+T.maxZ+1.05),ae=!0;for(let Q of[-.25,0,.25])for(let J of[-.25,0,.25])(s.blocked($.x+Q,$.z+J,0)||Math.abs(s.groundAt($.x+Q,$.z+J,.1))>.1)&&(ae=!1);if(ae)return{origin:new v(O,0,z),view:$}}}return null}function F(){x=ea(),b=3,_=!1,P="Release trigger. Follow the mint arrows clockwise.",w=0,S=!1,o.update(x,0),r.setCheckpoint(x.nextCheckpoint),C()}function D(){let T=H();return!T||!s.xrTeleport(T.view.x,0,T.view.z)?!1:(p=T.origin,m=T.view,i.position.copy(p),s.xrFace?.(0),y=i.visible=!0,g=M=!1,F(),t("RC racing! Left stick steers, right trigger drives. Grip brakes and reverses. A rescues the car."),!0)}function B(){_=!1}function Y(){y=i.visible=!1,B()}function I(){return!m||!s.xrTeleport(m.x,0,m.z)?!1:(s.xrFace?.(0),B(),!0)}function W(T){let O=Math.round(T*1e3);if(!(O<1e3||O>36e5)&&(A===null||O<A)){A=O;try{localStorage.setItem(Pl,String(O))}catch{}t(`New RC lap record! ${Yt(O/1e3)}`)}}function L(T,O){if(!y)return;let z=Math.max(0,Math.min(.1,T.dt||0)),k=!!T.right?.gamepad?.buttons[4]?.pressed,X=!!T.left?.gamepad?.buttons[4]?.pressed,$=k&&!g,ae=X&&!M;if(g=k,M=X,O){B();return}if(!T.right?.gamepad||!T.left?.gamepad){B(),S||(S=!0,P="Reconnect both controllers. Race paused.",C());return}if(S&&(S=!1,P="Controller ready. Release trigger to resume.",C()),ae&&(P=I()?"Driver viewpoint restored. Release trigger to drive.":"Driver spot is blocked. Use B to leave the race.",C()),$)if(x.finished){F();return}else b<=0&&wl(x)&&(P="Car rescued at your last gate. +2 seconds.",n(.2),C());let Q=Ll(T.right.gamepad.buttons[0]),J=Ll(T.right.gamepad.buttons[1]);Q<.1&&J<.1&&(_=!0);let pe=z;if(b>0){let he=Math.min(b,z);if(b-=he,pe-=he,b<=0&&(P="GO! Drive through the mint gates in order.",n(.4)),w+=z,(w>=.1||b<=0)&&(w=0,C()),b>0)return}if(x.finished)return;let me=fi(ji(T.left)[0]),ee=x.collisions;if(Tl(x,{steer:me,throttle:_?Q:0,brake:_?J:0},pe),o.update(x,pe),r.setCheckpoint(x.nextCheckpoint),x.collisions!==ee&&(n(.12),P="Bump! Ease off, reverse, or use A to rescue."),x.checkpointPassed!==null&&(P=`Gate ${x.checkpointPassed+1} cleared. Follow the mint arrow.`),x.justLap!==null&&(W(x.justLap),n(.4),P=`Lap ${x.completedLaps}: ${Yt(x.justLap)}`,C()),x.justFinished){let he=Math.round(x.elapsed*1e3);if(he>=3e3&&he<=36e5&&(E===null||he<E)){E=he;try{localStorage.setItem(Il,String(he))}catch{}}let U=Math.min(...x.laps);P=`${U<=14?"Gold":U<=20?"Silver":"Bronze"} lap medal! Race ${Yt(x.elapsed)}. A to replay.`,r.setCheckpoint(null),t(`RC race complete! ${Yt(x.elapsed)} \xB7 A to race again.`),n(.7),C()}w+=z,w>=.1&&(w=0,C())}return C(),{root:i,track:r,car:o,board:h,start:D,stop:Y,cancel:B,tick:L,returnToView:I,get active(){return y},get origin(){return p},get view(){return m},get state(){return x},get countdown(){return b},get bestLapMs(){return A},get bestRaceMs(){return E}}}var _r="tfj-memory-bests-v1",gr=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>{if(!["string","number"].includes(typeof s)||typeof s=="string"&&!s.trim())return null;let n=Number(s);return Number.isSafeInteger(n)&&n>=e&&n<=t?n:null};function xr(s){let e=s;try{typeof e=="string"&&(e=JSON.parse(e))}catch{return{}}if(!e||typeof e!="object"||Array.isArray(e))return{};let t={};for(let n=2;n<=6;n++){let i=gr(e[n],n,1e4);i!==null&&(t[n]=i)}return t}function Nl(s,e=0,t={}){let n=_=>{try{return s?.getItem(_)??null}catch{return null}},i=(_,g,M,A=0,E=!1)=>{let w=gr(n(_),A,M),P=gr(t[g],A,M),S=[w,P].filter(N=>N!==null);return S.length?E?Math.min(...S):Math.max(...S):null},r=(_,g,M,A)=>_===null?0:_>=A?3:_>=M?2:_>=g?1:0,o=[],a=(_,g,M,A,E,w,P,S,N)=>{let C=i(M,_,A);o.push({id:_,title:g,value:C,score:C===null?"\u2014":String(C),detail:C===null?"Play a complete round":P,medal:r(C,...E),goal:`Gold: ${E[2]} ${w}`,icon:S,accent:N})};a("bowling","WAREHOUSE BOWLING","tfj-bowling-best-10-v1",100,[10,50,80],"pins","pins / 100 \xB7 ten frames","target","#8bc8f3"),a("darts","STAFF-ROOM DARTS","tfj-vr-darts-best-v1",540,[50,150,300],"points","points \xB7 nine darts","target","#8fe1c3");let l=i("tfj-mini-golf-best-v1","golf",48,6,!0);o.push({id:"golf",title:"WAREHOUSE MINI-GOLF",value:l,score:l===null?"\u2014":String(l),detail:l===null?"Finish all six holes":"strokes \xB7 six holes \xB7 lower wins",medal:l===null?0:l<=18?3:l<=24?2:1,goal:"Gold: 18 strokes or fewer",icon:"golf",accent:"#8fe1c3"}),a("basketball","BASKETBALL","tfj-basket-best",10,[2,5,8],"baskets","baskets / 10 throws","target","#f6d484"),a("planes","PAPER PLANES","tfj-planes-best-v1",150,[10,50,100],"points","points \xB7 five flights","play","#8bc8f3");let c=i("tfj-rc-best-lap-v1","rc",36e5,1e3,!0),h=c===null?0:Math.floor(c/6e4),u=c===null?0:Math.floor(c/1e3)%60,f=c===null?0:Math.floor(c/10)%100;o.push({id:"rc",title:"RC CAR RACING",value:c,score:c===null?"\u2014":`${h}:${String(u).padStart(2,"0")}.${String(f).padStart(2,"0")}`,detail:c===null?"Complete a lap":"best lap \xB7 lower wins",medal:c===null?0:c<=14e3?3:c<=2e4?2:1,goal:"Gold: lap in 14 seconds",icon:"car",accent:"#8bc8f3"});let d=xr(n(_r)),p=xr(t.memory);for(let[_,g]of Object.entries(p))d[_]=Math.min(d[_]??1/0,g);let m=Object.keys(d).map(Number).sort((_,g)=>g-_)[0]??null,y=m===null?null:d[m];o.push({id:"memory",title:"MEMORY MATCH",value:y,pairs:m,score:y===null?"\u2014":String(y),detail:y===null?"Use your collected cards":`turns \xB7 ${m}-pair deck \xB7 lower wins`,medal:y===null?0:y===m?3:y<=m+2?2:1,goal:m===null?"Practice rounds do not count":`Gold: ${m} turns \xB7 perfect match`,icon:"book",accent:"#f3b2cf"});let x=gr(e,0,18)??0;o.push({id:"cards",title:"MOLLIE\u2019S CARD ALBUM",value:x,score:`${x} / 18`,detail:x===18?"Collection complete!":"Cards found around the yard",medal:r(x,6,12,18),goal:"Gold: collect all 18 cards",icon:"book",accent:"#f6d484"});let b=i("tfj-vr-jigglypuff-rounds-v1","hide",Number.MAX_SAFE_INTEGER)??0;return o.push({id:"hide",title:"JIGGLYPUFF SEEKER",value:b,score:String(b),detail:"complete hide-and-seek rounds",medal:r(b,1,3,5),goal:"Gold: complete five hunts",icon:"puff",accent:"#f3b2cf"}),o}var ta=s=>["TO EARN","BRONZE","SILVER","GOLD"][s];var pi=[5465977,12025936,13359585,16176260];function yf(s){let e=s.colliders.map(t=>new qe(new v(t.min.x,t.min.y,t.min.z),new v(t.max.x,t.max.y,t.max.z)));for(let t of s.colliders){let{min:n,max:i}=t;if(n.x<7.5||i.x>9||i.x-n.x>.3||i.z-n.z<3.9||n.y>.1||i.y<2.78)continue;let r=(n.z+i.z)/2;for(let o of[r,r-.45,r+.45]){if(o-1.86<n.z||o+1.86>i.z)continue;let a=new v(n.x-.045,0,o),l=a.clone().add(new v(-2.45,0,0)),c=!0;for(let u of[-.3,0,.3])for(let f of[-.4,0,.4])(s.blocked(l.x+u,l.z+f,0)||Math.abs(s.groundAt(l.x+u,l.z+f,.1))>.1)&&(c=!1);let h=l.clone().add(new v(0,1.68,0));for(let u of[-1.7,-.6,.6,1.7])for(let f of[.8,1.7,2.65]){let d=a.clone().add(new v(-.052,f,u)),p=d.clone().sub(h),m=p.length(),y=new et(h,p.normalize()),x=new v;e.some(b=>y.intersectBox(b,x)&&x.distanceTo(h)<m-.015)&&(c=!1)}if(c)return{mount:a,view:l,heading:-Math.PI/2}}}return null}function Ul(s,e,t,n){let i=new ve;i.name="Arcade wall of fame",e.add(i);let r=yf(s);i.visible=!!r,r&&(i.position.copy(r.mount),i.rotation.y=-Math.PI/2);let o=document.createElement("canvas");o.width=2048,o.height=1152;let a=o.getContext("2d"),l=new Ue(o);l.colorSpace=Ee,l.anisotropy=4;let c=new _e(new Fe(3.6,2.025),new Me({map:l}));c.name="Mollie\u2019s personal records",c.position.set(0,1.7,.052),i.add(c);let h=(w,P,S,N,C)=>{let H=new _e(w,P);return H.position.set(S,N,C),i.add(H),H},u=new Ce({color:1058612,roughness:.7}),f=new Ce({color:9215391,metalness:.6,roughness:.35});h(new ye(3.72,2.14,.075),u,0,1.7,0);let d=new Me({color:16176260});for(let w of[.626,2.774])h(new ye(3.74,.024,.045),d,0,w,.031);for(let w of[-1.862,1.862])h(new ye(.024,2.16,.045),d,w,1.7,.031);h(new ye(3.74,.045,.24),f,0,.32,.13);let p=[];for(let w=1;w<=3;w++){let P=new ve;P.name=`${ta(w)} trophy`,P.position.set((w-2)*1.05,.346,.14),i.add(P);let S=new Ce({color:pi[0],metalness:.68,roughness:.32}),N=[new _e(new ye(.24,.044,.16),u),new _e(new Ve(.069,.088,.052,16),S),new _e(new Ve(.018,.029,.072,12),S),new _e(new Xn([new le(.025,0),new le(.06,.045),new le(.089,.12),new le(.078,.13),new le(.049,.052),new le(.014,.021)],20),S)];N[0].position.y=.022,N[1].position.y=.069,N[2].position.y=.12,N[3].position.y=.15,P.add(...N);for(let C of[-.092,.092]){let H=new _e(new Lt(.042,.008,6,14),S);H.position.set(C,.233,0),P.add(H)}p.push({trophy:P,material:S,tier:w})}let m=[],y=null,x=0,b=0,_=0;function g(){gt(a,2048,1152),j(a,"TF JONES  /  WAREHOUSE ARCADE",54,64,27,G.blue,"700"),j(a,"WALL OF FAME",52,154,86,G.ink,"700"),j(a,"Mollie\u2019s personal bests",54,213,35,G.gold,"600");let w=m.filter(S=>S.medal).length,P=m.filter(S=>S.medal===3).length;Ye(a,1535,46,456,174,{top:"#254f54",bottom:"#142f43",stroke:G.gold,radius:20}),j(a,`${w} / ${m.length}`,1567,145,67,G.gold,"700"),j(a,`MEDALS EARNED  \xB7  ${P} GOLD`,1567,191,26,G.ink,"700"),m.forEach((S,N)=>{let C=54+N%3*650,H=253+Math.floor(N/3)*256,F=638;Ye(a,C,H,F,244,{top:"#234955",bottom:"#0d2639",stroke:S.medal?`#${pi[S.medal].toString(16).padStart(6,"0")}`:"#466374",radius:18}),an(a,S.icon,C+39,H+36,40,S.accent),j(a,S.title,C+77,H+43,30,G.ink,"700",F-98),j(a,S.score,C+28,H+119,76,G.gold,"700",F-56),j(a,S.detail,C+28,H+153,25,G.muted,"500",F-56);let B=`#${pi[S.medal].toString(16).padStart(6,"0")}`;Ye(a,C+27,H+167,F-54,36,{top:S.medal?"#24474d":"#162c3c",bottom:"#172f3c",stroke:B,radius:10}),j(a,ta(S.medal),C+44,H+194,26,S.medal?B:G.muted,"700"),j(a,S.goal,C+28,H+229,25,S.accent,"500",F-56)}),j(a,"YOUR SCORES \xB7 THIS BROWSER",54,1091,30,G.blue,"700"),j(a,"Play. Beat your best. Earn your place.",1160,1091,30,G.muted,"500"),l.needsUpdate=!0,_++;for(let S of p){let N=m.some(C=>C.medal>=S.tier);S.material.color.set(N?pi[S.tier]:pi[0]),S.material.emissive.set(N?pi[S.tier]:0),S.material.emissiveIntensity=N?.09:0}}function M(){let w;try{w=globalThis.localStorage}catch{}let P=Nl(w,s.mollie.found.size,t()),S=JSON.stringify(P);if(S===y)return!1;let N=y!==null&&P.some((C,H)=>C.value!==null&&(m[H].value===null||C.id==="memory"&&C.pairs>m[H].pairs||(["golf","memory","rc"].includes(C.id)?C.value<m[H].value:C.value>m[H].value)||C.medal>m[H].medal));return m=P,y=S,N&&(b=2.5),g(),!0}function A(w){x-=w,x<=0&&(x=.75,M()),b=Math.max(0,b-w),d.color.set(b>0&&Math.sin(b*7)>0?9429443:16176260)}function E(){return M(),!r||!s.xrTeleport(r.view.x,0,r.view.z)?(n("The wall approach is blocked. Walk to the Unit 9 office divider."),!1):(s.xrFace?.(r.heading),n("Welcome to the wall of fame! Your personal records update as you play."),!0)}return M(),{root:i,panel:c,cups:p,site:r,refresh:M,tick:A,visit:E,get records(){return m},get draws(){return _},get celebrating(){return b>0}}}function Mf(s,e,t,n=.48){if(s.z<=t.z||e.z>t.z)return!1;let i=(s.z-t.z)/(s.z-e.z);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.y+(e.y-s.y)*i-t.y)<n}function bf(s,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let r=-.25-1.1/Math.max(.5,i);return n.y+=(r-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:s.clone().addScaledVector(n,t),v:n}}function Fl(s,e,t,n){let i=new ve;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let r=new ve;i.add(r);let o=z=>new Ce({color:z,roughness:.7,side:ct}),a=new Oe;a.setAttribute("position",new Re([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new _e(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new bt(new Oe().setFromPoints([new v(0,0,-.28),new v(0,.056,.1)]),new Mt({color:7576243}));l.add(c);let h=s.colliders.map(z=>new qe(new v(z.min.x,z.min.y,z.min.z),new v(z.max.x,z.max.y,z.max.z)).expandByScalar(.06)),u=document.createElement("canvas");u.width=1024,u.height=640;let f=u.getContext("2d"),d=new Ue(u);d.colorSpace=Ee;let p=new _e(new Fe(1.6,1),new Me({map:d}));p.name="Paper-plane scoreboard",i.add(p);let m=!1,y=!1,x=null,b=null,_=[],g=[],M=0,A=!1,E=!1,w=!1,P=0,S=0,N=0,C=0,H="Five planes. Aim through the hoops!";try{N=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function F(){gt(f,1024,640),j(f,"PAPER-PLANE CHALLENGE",35,68,44,G.gold),j(f,`${S} points`,35,190,72),j(f,`BEST ${N}`,660,180,35,G.mint),j(f,`${P} / 5 planes`,35,280,44),j(f,`Longest glide: ${C.toFixed(1)} m`,35,349,32,G.mint),j(f,H,35,428,29,G.ink,"600",950),j(f,P===5&&!x?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),j(f,"10 points per hoop \xB7 Y: pause/menu",35,590,27,G.muted),d.needsUpdate=!0}function D(){for(let z of[3,2,1.5,4,5])for(let k of[-30,-29,-28]){let X=!0;for(let $=-1;$<=1;$+=.5)for(let ae=0;ae<=7.8;ae+=.4)(s.blocked(z+$,k+ae,0)||Math.abs(s.groundAt(z+$,k+ae,.1))>.1)&&(X=!1);if(X)return new v(z,0,k)}return null}function B(){for(let X of[...r.children])X.traverse($=>{$.geometry?.dispose(),$.material?.dispose()}),r.remove(X);_=[];for(let X=0;X<3;X++){let $=b.clone().add(new v(0,1.5-X*.22,5-X*1.8)),ae=new _e(new Lt(.6,.035,12,48),o(X===0?"#f6d484":X===1?"#8fe1c3":"#8bc8f3"));ae.position.copy($),r.add(ae),_.push({center:$,mesh:ae});let Q=new _e(new Ve(.018,.018,$.y,8),o("#36576a"));Q.position.set($.x-.64,$.y/2,$.z),r.add(Q)}p.position.copy(b).add(new v(0,2.3,-.5));let z=wt("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);z.position.copy(b).add(new v(0,3.18,-.5)),r.add(z);for(let X of[2,5]){let $=An(1.3);$.position.copy(b).add(new v(0,4.2,X)),r.add($)}let k=new _e(new ye(2,.02,.045),o("#f6d484"));k.position.copy(b).add(new v(0,.02,6.7)),r.add(k)}function Y(){P=S=C=0,x=null,y=!1,g=[],l.visible=!1,H="Five planes. Aim through the hoops!",_.forEach(z=>z.mesh.material.emissive?.set(0)),F()}function I(){let z=D();return!z||!s.xrTeleport(z.x,0,z.z+7.4)?!1:(b=z,B(),m=i.visible=!0,s.xrFace?.(0),A=!1,E=!0,Y(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function W(){m=i.visible=y=l.visible=!1,x=null,g=[],A=!1}function L(){y=!1,g=[],A=!1,E=!0,x||(l.visible=!1)}function T(z){if(x){if(C=Math.max(C,x.distance),H=`${z} \xB7 ${x.hits.size} hoops \xB7 ${x.distance.toFixed(1)} m`,x=null,P===5){N=Math.max(N,S);try{localStorage.setItem("tfj-planes-best-v1",String(N))}catch{}t(`Paper planes complete! ${S} points. A to replay.`)}F()}}function O(z,k){if(!m)return;let{dt:X,right:$,controller:ae}=z;M+=X;let Q=!!$?.gamepad?.buttons[0]?.pressed,J=!!$?.gamepad?.buttons[4]?.pressed;if(k){L();return}Q||(A=!0),J&&!w&&P===5&&!x&&Y(),w=J;let pe=ae&&ae.visible!==!1?ae.getWorldPosition(new v):null;if(pe&&Q&&!E&&A&&!x&&P<5){let me=s.stats();Math.abs(me.x-b.x)>1.2||me.z<b.z+6.7||me.z>b.z+8.2||me.y>.15?t("Return behind the paper-plane launch line."):(y=!0,g=[],l.visible=!0)}if(y){if(!pe)L();else if(l.position.copy(pe),l.quaternion.copy(ae.getWorldQuaternion(new Ne)),g.push({time:M,p:pe.clone()}),g=g.filter(me=>M-me.time<.14),!Q&&E){let me=g.find(he=>M-he.time>=.04),ee=me?pe.clone().sub(me.p).divideScalar(M-me.time).clampLength(0,10):new v;y=!1,ee.length()<.8||ee.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(P++,x={p:pe.clone(),v:ee,start:pe.clone(),distance:0,age:0,hits:new Set},_.forEach(he=>he.mesh.material.emissive?.set(0)),H="In flight\u2026",F())}}if(x){let me=Math.max(1,Math.ceil(X/.012)),ee=X/me;for(let he=0;he<me&&x;he++){let U=x,K=bf(U.p,U.v,ee),te=K.p.clone().sub(U.p),re=te.length(),ie=new et(U.p,te.normalize()),xe=new v,ue=!1;for(let Se of h)if(Se.containsPoint(U.p)||ie.intersectBox(Se,xe)&&xe.distanceTo(U.p)<=re){ue=!0;break}if(ue){T("Hit scenery");break}for(let Se=0;Se<_.length;Se++)!U.hits.has(Se)&&Mf(U.p,K.p,_[Se].center)&&(U.hits.add(Se),S+=10,_[Se].mesh.material.emissive.set("#3ca58b"),n(.45),F());U.p.copy(K.p),U.v.copy(K.v),U.age+=ee,U.distance=Math.max(U.distance,Math.hypot(U.p.x-U.start.x,U.p.z-U.start.z)),l.position.copy(U.p),l.quaternion.setFromUnitVectors(new v(0,0,-1),U.v.clone().normalize()),l.rotateZ(Math.sin(U.age*3)*.04),U.p.y<.07?(l.position.y=.07,l.rotation.x=0,T("Landed")):(U.age>10||U.distance>20)&&T("Glide complete")}}E=Q}return{root:i,get best(){return N},start:I,stop:W,cancel:L,tick:O,get held(){return y},get flight(){return x},get origin(){return b},get rings(){return _},get throws(){return P},get score(){return S},get longest(){return C}}}function Bl(s,e){let t=new ve;t.name="Bowling supporters",e.add(t);let n=[],i=0,r=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(m){t.visible=!0,i=0,r=0;for(let x of n)x.group.visible=!1,x.shadow&&(x.shadow.visible=!1);let y=[];for(let x of[5.2,3.8,6])for(let b of[-1.9,1.9,-2.4,2.4]){if(y.length===4)break;let _=m.clone().add(new v(b,0,x));s.blocked(_.x,_.z,0)||Math.abs(s.groundAt(_.x,_.z,.1))>.1||y.some(g=>g.distanceTo(_)<1)||y.push(_)}for(let x=0;x<y.length;x++){if(!n[x]){let g=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][x]});g.group.name=`Bowling supporter ${x+1}`,g.group.scale.setScalar(.91+x*.025),g.bones=Object.fromEntries(l.map(M=>[M,g.model.getObjectByName(M)])),g.rest=Object.fromEntries(l.map(M=>[M,g.bones[M]?.quaternion.clone()])),g.shadow=wn(.9,.6),t.add(g.shadow,g.group),n.push(g)}let b=n[x];b.group.visible=!0,b.group.position.copy(y[x]),b.base=y[x].clone(),b.shadow.visible=!0,b.shadow.position.copy(y[x]).add(new v(0,.012,0));let _=s.stats();b.group.rotation.y=Math.atan2(_.x-y[x].x,_.z-y[x].z),b.gesture="idle",b.target=new v(_.x,_.y+1.6,_.z),b.mixer.setTime(x*.73)}}function h(m=!1){i=m?3.6:2.2,o=m,a=!1}function u(){i=1.8,o=!1,a=!0}function f(m,y,x){let b=m.bones[y];if(!b)return;let _=b.parent.getWorldQuaternion(new Ne),g=b.getWorldQuaternion(new Ne),M=new v(0,1,0).applyQuaternion(g),A=new v(...x).normalize().applyQuaternion(m.group.getWorldQuaternion(new Ne));b.quaternion.copy(_.invert().multiply(new Ne().setFromUnitVectors(M,A).multiply(g))),m.model.updateMatrixWorld(!0)}function d(m,y,x={}){if(y||!t.visible)return;r+=m,i=Math.max(0,i-m);let b=s.stats();n.forEach((_,g)=>{if(!_.group.visible)return;let M=r+g*1.4,A=(o?3.6:a?1.8:2.2)-i,E=i>0&&A>=g*.11,w=!x.ball&&!x.held&&!i&&Math.sin(M*.43)>.85,P=n[(g+1)%n.length],S=x.ball||x.eye||new v(b.x,b.y+1.6,b.z);w&&P?.group.visible&&(S=P.base.clone().add(new v(0,1.5,0))),E&&(S=x.eye||new v(b.x,b.y+1.6,b.z)),_.target.copy(S);let N=Math.atan2(S.x-_.base.x,S.z-_.base.z);_.group.rotation.y+=Math.atan2(Math.sin(N-_.group.rotation.y),Math.cos(N-_.group.rotation.y))*Math.min(1,m*2.8);let C=E?a?"wave":["clap","arms-up","fist-pump","wave"][g%4]:x.held?"anticipate":w?"chat":"idle";_.gesture=C;for(let F of l)_.bones[F]&&_.bones[F].quaternion.copy(_.rest[F]);if(_.animate(m,C==="wave"?"wave":"idle"),_.group.position.set(_.base.x,_.base.y+(E?Math.max(0,Math.sin(M*7))*(o?.11:.055):0),_.base.z),_.group.rotation.z=Math.sin(M*1.2)*.012,_.shadow.material.opacity=1-(_.group.position.y-_.base.y)*3,_.model.updateMatrixWorld(!0),C==="clap"){let F=Math.sin(M*13)*.25;f(_,"UpperArmL",[-.25,-.3,.65]),f(_,"UpperArmR",[.25,-.3,.65]),f(_,"LowerArmL",[.4+F,.35,.4]),f(_,"LowerArmR",[-.4-F,.35,.4])}if(C==="arms-up"&&(f(_,"UpperArmL",[-.65,.9,0]),f(_,"UpperArmR",[.65,.9,0]),f(_,"LowerArmL",[.15,1,.12]),f(_,"LowerArmR",[-.15,1,.12])),C==="fist-pump"){let F=.65+Math.sin(M*9)*.3;f(_,"UpperArmR",[.5,F,.3]),f(_,"LowerArmR",[-.2,1,.2])}C==="anticipate"&&(f(_,"UpperArmL",[-.2,-.6,.35]),f(_,"UpperArmR",[.2,-.6,.35]),f(_,"LowerArmL",[.3,.1,.6]),f(_,"LowerArmR",[-.3,.1,.6]));let H=_.bones.Head;if(H){let F=S.x-_.base.x,D=S.z-_.base.z,B=Math.atan2(Math.sin(N-_.group.rotation.y),Math.cos(N-_.group.rotation.y)),Y=Math.atan2(S.y-(_.base.y+1.6),Math.hypot(F,D));H.rotateY(nt.clamp(B,-.65,.65)),H.rotateX(-nt.clamp(Y,-.4,.3)+Math.sin(M*(w?3:1.1))*.035)}_.bones.Chest&&_.bones.Chest.rotateX(x.held?.065:Math.sin(M*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:h,encourage:u,tick:d,stop:p,get cheering(){return i>0},get people(){return n.filter(m=>m.group.visible)}}}function Ol(s,e,t,n,i=()=>{}){let r=new ve;r.name="Warehouse bowling",r.visible=!1,e.add(r);let o=Bl(s,r),a=V=>new Ce({color:V,roughness:.55}),l=(V,R,Z,oe,q,ce=r)=>{let Ae=new _e(V,R);return Ae.position.set(Z,oe,q),ce.add(Ae),Ae},c=new ve;r.add(c);let h=null,u=[],f=!1,d=!1,p=null,m=[],y=0,x=!1,b=!1,_=!1,g=0,M=0,A=[],E=Array.from({length:10},()=>[]),w=0,P=0,S=0,N=!1;try{S=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let C=l(new tt(.14,24,20),a("#5147b5"),0,.17,0);for(let[V,R,Z]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new tt(.023,8,8),a("#12162d"),V,R,Z,C);C.visible=!1;let H=document.createElement("canvas");H.width=1536,H.height=1024;let F=H.getContext("2d"),D=new Ue(H);D.colorSpace=Ee;let B=l(new Fe(3.2,3.2*2/3),new Me({map:D}),0,2,0);B.name="Warehouse bowling scoreboard";let Y=()=>A.reduce((V,R)=>V+R,0)+w,I=new ve;I.name="Bowling scoring computer",r.add(I);let W=l(new Fe(.96,.64),new Me({map:D}),0,0,.046,I);W.name="Bowling computer screen",l(new ye(1.02,.7,.08),a("#101a26"),0,0,0,I);let L=120,T=new Float32Array(L*3),O=new Float32Array(L*3),z=[],k=new Oe;k.setAttribute("position",new Pt(T,3)),k.setAttribute("color",new Pt(O,3));let X=new li({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:wo}),$=new Bi(k,X);$.name="Strike fireworks",$.visible=!1,$.frustumCulled=!1,r.add($);let ae=0,Q=0;function J(){i(!0),o.cheer(!0),Q++,ae=2.6,$.visible=!0,X.opacity=1;for(let V=0;V<L;V++){let R=V%3,Z=V*2.39996,oe=.65+V%11*.08,q=Math.sqrt(1-(V%17/8-1)**2);T.set([h.x+(R-1)*.65,1.35+R*.22,h.z+1.2],V*3),z[V]=new v(Math.cos(Z)*q*oe,.7+Math.abs(Math.sin(Z))*1.2,Math.sin(Z)*q*oe);let ce=new ze([16765286,7401417,16745144,9026559][V%4]);O.set([ce.r,ce.g,ce.b],V*3)}k.attributes.position.needsUpdate=!0,k.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function pe(V){if(!(ae<=0)){ae=Math.max(0,ae-V),$.visible=ae>0,X.opacity=Math.min(1,ae/.9);for(let R=0;R<L;R++){let Z=z[R];Z.y-=1.5*V,T[R*3]+=Z.x*V,T[R*3+1]+=Z.y*V,T[R*3+2]+=Z.z*V}k.attributes.position.needsUpdate=!0}}function me(){gt(F,1536,1024),j(F,"TFJ BOWL  /  LANE 01",48,72,38,G.blue,"700"),j(F,"WAREHOUSE BOWLING",48,143,61,G.ink,"700"),Ye(F,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:G.mint,radius:22}),j(F,"TOTAL PINS",1120,86,34,G.mint),j(F,String(Y()),1120,237,125,G.ink,"700"),j(F,"/ 100",1320,233,42,G.muted),j(F,g===10?"ROUND COMPLETE":`FRAME ${g+1}  \u2022  BOWL ${M+1}`,48,230,51,G.gold,"700");let V=0;for(let R=0;R<10;R++){let Z=48+R%5*288,oe=290+Math.floor(R/5)*244,q=R===g&&g<10,ce=E[R],Ae=ce.length>0;Ye(F,Z,oe,272,225,{top:q?"#225568":"#142e43",bottom:"#0b2032",stroke:q?G.gold:"#55758c",radius:14}),j(F,String(R+1),Z+18,oe+45,37,q?G.gold:G.muted,"700");let de=ce[0]===10?"X":ce[0]===0?"\u2013":ce[0]??"",Pe=ce.length>1?ce[0]+ce[1]===10?"/":ce[1]===0?"\u2013":ce[1]:"";F.strokeStyle="#5c7b90",F.lineWidth=2,F.strokeRect(Z+78,oe+8,89,77),F.strokeRect(Z+167,oe+8,97,77),j(F,String(de),Z+96,oe+67,53,G.ink,"700"),j(F,String(Pe),Z+190,oe+67,53,G.ink,"700"),V+=R<A.length?A[R]:R===g?w:0,j(F,Ae?String(V):"\u2014",Z+30,oe+189,89,q?G.gold:G.ink,"700")}j(F,`PERSONAL BEST  ${S} / 100`,48,837,38,G.mint,"700"),j(F,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,G.muted,"600"),j(F,g===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,G.gold,"700"),j(F,"Y  MENU",1270,957,34,G.ink,"700"),D.needsUpdate=!0}function ee(){for(let V of[3,2,1.5,4,5,6])for(let R of[-30,-29,-28,-27]){let Z=!0;for(let oe=-1.1;oe<=1.1;oe+=.55)for(let q=0;q<=7.8;q+=.3)(s.blocked(V+oe,R+q,0)||Math.abs(s.groundAt(V+oe,R+q,.1))>.1)&&(Z=!1);if(Z)return new v(V,0,R)}return null}function he(){for(let q of[...c.children])q.traverse(ce=>{ce.geometry?.dispose(),ce.material&&ce.material.dispose()}),c.remove(q);c.position.copy(h),u=[],l(new ye(2.1,.025,7.3),di(),0,.018,3.25,c);for(let q=-4;q<=4;q++)l(new ye(.009,.003,7.3),a("#9c805f"),q*.22,.032,3.25,c);for(let q of[-1.15,1.15])l(new ye(.15,.05,7.3),a("#223747"),q,.02,3.25,c);for(let q of[-1.045,1.045]){let ce=l(new ye(.028,.025,7.3),new Ce({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),q,.045,3.25,c);ce.name="Illuminated bowling edge"}let V=wt("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",G.gold,2.8);V.position.set(0,4.38,2.5),c.add(V);for(let q of[1,4.8]){let ce=An(1.8);ce.position.set(0,4.8,q),c.add(ce)}l(new ye(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new ye(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let q of[-.5,0,.5]){let ce=l(new sn(.065,.16,3),a("#30485a"),q,.04,4.7,c);ce.rotation.x=-Math.PI/2}let R=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([q,ce])=>new le(q,ce)),Z=0;for(let q=0;q<4;q++)for(let ce=0;ce<=q;ce++){let Ae=wn(.29,.27);Ae.position.set((ce-q/2)*.3,.034,1.1-q*.29),c.add(Ae);let de=new ve;de.position.set((ce-q/2)*.3,.248,1.1-q*.29),c.add(de),l(new Xn(R,20),a("#f8f6ea"),0,-.215,0,de),l(new Ve(.035,.039,.045,16),a("#dc4459"),0,.07,0,de),u.push({mesh:de,start:de.position.clone(),v:new v,spin:new v,shadow:Ae,down:!1,id:Z++})}B.position.copy(h).add(new v(0,2.95,2.5)),l(new ye(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let q of[-1.62,1.62])l(new ye(.06,3.92,.06),a("#223747"),q,1.96,2.42,c);let oe=[-1.4,1.4].find(q=>!s.blocked(h.x+q,h.z+7.1,0))??-1.2;I.position.copy(h).add(new v(oe,1.27,7.1)),I.lookAt(h.clone().add(new v(0,1.68,7.5))),l(new ye(.16,1.12,.16),a("#223747"),oe,.56,7.1,c),l(new ye(.65,.06,.48),a("#101a26"),oe,.03,7.1,c)}function U(){for(let V of u)V.mesh.position.copy(V.start),V.mesh.rotation.set(0,0,0),V.mesh.visible=!0,V.shadow.visible=!0,V.shadow.position.set(V.start.x,.034,V.start.z),V.shadow.material.opacity=1,V.down=!1,V.v.set(0,0,0),V.spin.set(0,0,0)}function K(){ae=0,$.visible=!1,g=M=w=0,A=[],E=Array.from({length:10},()=>[]),p=null,P=0,d=!1,C.visible=!1,U(),me()}function te(){let V=ee();return!V||!s.xrTeleport(V.x,0,V.z+7.4)?!1:(h=V,he(),o.setup(h),f=r.visible=!0,s.xrFace?.(0),K(),b=!1,x=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function re(){o.stop(),ae=0,$.visible=!1,f=r.visible=d=C.visible=!1,p=null,P=0,m=[],b=!1}function ie(){d=!1,m=[],b=!1,x=!0,p||(C.visible=!1)}function xe(V,R){N||(N=!0,o.cheer(!1));let Z=R.length();V.down=!0,V.v.add(R).clampLength(0,7),V.v.y=Math.max(V.v.y,Math.min(3.4,.7+Z*.42)),V.spin.add(new v(R.z*2.8,(V.id%2?1:-1)*Z*.8,-R.x*2.8)).clampLength(0,18)}function ue(V){let R=new v,Z=new v,oe=new Ne;for(let q of u)if(q.down&&q.mesh.visible){q.v.y-=9.81*V,q.mesh.position.addScaledVector(q.v,V);let ce=q.spin.length();ce>.001&&(Z.copy(q.spin).divideScalar(ce),oe.setFromAxisAngle(Z,ce*V),q.mesh.quaternion.premultiply(oe).normalize()),R.set(0,1,0).applyQuaternion(q.mesh.quaternion);let Ae=.033+.08+.135*Math.abs(R.y);q.mesh.position.y<Ae?(q.mesh.position.y=Ae,q.v.y=q.v.y<-.65?-q.v.y*.32:0,q.v.x*=Math.exp(-4*V),q.v.z*=Math.exp(-4*V),q.spin.multiplyScalar(Math.exp(-5*V))):q.spin.multiplyScalar(Math.exp(-.3*V));for(let[de,Pe,Le]of[["x",-1.02,1.02],["z",-.35,2.2]])(q.mesh.position[de]<Pe||q.mesh.position[de]>Le)&&(q.mesh.position[de]=nt.clamp(q.mesh.position[de],Pe,Le),q.v[de]*=-.38)}for(let q=0;q<u.length;q++)for(let ce=q+1;ce<u.length;ce++){let Ae=u[q],de=u[ce];if(!Ae.mesh.visible||!de.mesh.visible||!Ae.down&&!de.down)continue;let Pe=de.mesh.position.clone().sub(Ae.mesh.position),Le=Pe.length();if(Le>=.29||Le<.001)continue;let Te=Pe.divideScalar(Le),se=Ae.v.clone().sub(de.v).dot(Te);if(se>.18){let He=Te.clone().multiplyScalar(se*.7);de.down?de.v.add(He):xe(de,He),Ae.down?Ae.v.sub(He):xe(Ae,He.clone().negate()),Ae.spin.x+=Te.z*se,de.spin.z-=Te.x*se}let Ge=.29-Le;Ae.down&&Ae.mesh.position.addScaledVector(Te,-Ge*.5),de.down&&de.mesh.position.addScaledVector(Te,Ge*.5)}}function Se(){p=null,C.visible=!1;let V=u.filter(Z=>Z.down).length,R=V-w;if(V===10&&M===0&&J(),E[g].push(R),w=V,M++,R===0&&o.encourage(),R>0&&!(V===10&&M===1)&&(o.cheer(V===10),i(V===10)),n(V===10?.8:.25),V===10||M===2){let Z=V===10?M===1?"Strike!":"Spare!":`${V} pins.`;if(A.push(V),g++,M=w=0,t(g===10?`Bowling complete! ${Y()} / 100 pins.`:`${Z} Next frame.`),g===10){S=Math.max(S,Y());try{localStorage.setItem("tfj-bowling-best-10-v1",String(S))}catch{}}else U()}else{for(let Z of u)Z.down&&(Z.mesh.visible=!1,Z.shadow.visible=!1);t(`${R} pins! One more bowl this frame.`)}me()}function ge(V,R){if(!f)return;let{dt:Z,right:oe,controller:q}=V;y+=Z,o.tick(Z,R,{eye:V.eye,held:d,ball:p?C.position:null});let ce=!!oe?.gamepad?.buttons[0]?.pressed,Ae=!!oe?.gamepad?.buttons[4]?.pressed;if(R){ie();return}pe(Z),ce||(b=!0),Ae&&!_&&g===10&&K(),_=Ae;let de=q&&q.visible!==!1?q.getWorldPosition(new v):null;if(ce&&!x&&b&&!p&&!P&&g<10&&de){let Pe=s.stats();Math.abs(Pe.x-h.x)>1.1||Pe.z<h.z+6.7||Pe.z>h.z+8.2||Pe.y>.15?t("Return behind the yellow bowling line."):(d=!0,m=[],C.visible=!0)}if(d){if(!de)ie();else if(C.position.copy(de),m.push({time:y,p:de.clone()}),m=m.filter(Pe=>y-Pe.time<.14),!ce&&x){let Pe=m.find(Te=>y-Te.time>=.04),Le=Pe?de.clone().sub(Pe.p).divideScalar(y-Pe.time).clampLength(0,10):new v;d=!1,Le.length()<.6||Le.z>-.25?(C.visible=!1,t("Swing towards the pins before releasing.")):(N=!1,p={p:de.clone().sub(h),v:Le,age:0,gutter:!1})}}if(p||P){let Pe=Math.max(1,Math.ceil(Z/.008)),Le=Z/Pe;for(let Te=0;Te<Pe;Te++){if(p){let se=p;se.age+=Le,se.v.y-=9.81*Le,se.p.addScaledVector(se.v,Le),se.p.y<.174&&(se.p.y=.174,se.v.y=Math.abs(se.v.y)>.8?Math.abs(se.v.y)*.18:0,se.v.x*=Math.exp(-.25*Le),se.v.z*=Math.exp(-.25*Le)),Math.abs(se.p.x)>1&&(se.gutter=!0,se.p.x=Math.sign(se.p.x)*1.15,se.v.x=0),C.position.copy(se.p).add(h),C.rotation.x+=se.v.z*Le/.14;for(let Ge of u)if(!Ge.down&&!se.gutter&&se.p.y<.6){let He=Ge.mesh.position.x-se.p.x,lt=Ge.mesh.position.z-se.p.z;Math.hypot(He,lt)<.23&&(xe(Ge,new v(se.v.x,0,se.v.z).multiplyScalar(.65)),se.v.x*=.8,se.v.z*=.84)}(se.p.z<-.6||se.age>7||Math.hypot(se.v.x,se.v.z)<.15)&&(p=null,P=2.6)}ue(Le);for(let se of u)se.shadow.position.x=se.mesh.position.x,se.shadow.position.z=se.mesh.position.z,se.shadow.material.opacity=nt.clamp(1-(se.mesh.position.y-.25),.15,1);if(P&&(P=Math.max(0,P-Le),!P)){Se();break}}}x=ce}return{root:r,get best(){return S},crowd:o,fireworks:$,get celebrations(){return Q},start:te,stop:re,cancel:ie,tick:ge,get held(){return d},get flight(){return p},get pins(){return u},get origin(){return h},get frame(){return g},get roll(){return M},get total(){return Y()},get totals(){return A},get frameRolls(){return E}}}function Sf(s,e,t,n=.34){if(s.y<=t.y||e.y>t.y)return!1;let i=(s.y-t.y)/(s.y-e.y);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.z+(e.z-s.z)*i-t.z)<n}function zl(s,e,t,n,i){let r=s.colliders.map(J=>new qe(new v(J.min.x,J.min.y,J.min.z),new v(J.max.x,J.max.y,J.max.z))),o=new ve;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=J=>new Ce({color:J,roughness:.6}),l=(J,pe,me,ee=o)=>{let he=new _e(J,pe);return he.position.copy(me),ee.add(he),he},c=new v,h=null,u=!1,f=!1,d=!1,p=null,m=[],y=0,x=!1,b=!1,_=0,g=0,M=0,A=0,E=!1;try{M=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let w=s.mollie.balls[0].ball.clone();w.scale.setScalar(.48),w.visible=!1,e.add(w);let P=l(new tt(.065,16,12),a("#ee528c"),new v,e);P.visible=!1,l(new tt(.03,8,6),a("#6ac68d"),new v(0,.06,0),P).scale.set(1,.4,1.7);let N=new at;N.moveTo(0,.02),N.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),N.bezierCurveTo(.23,-.03,.16,.18,0,.02);let C=new _e(new Wt(N),new Me({color:16742315,side:ct,transparent:!0}));C.visible=!1,e.add(C);let H=0,F=0,D=0,B=document.createElement("canvas");B.width=768,B.height=384;let Y=B.getContext("2d"),I=new Ue(B);I.colorSpace=Ee;let W=l(new Fe(1.5,.75),new Me({map:I}),new v);function L(){gt(Y,768,384),j(Y,"POK\xC9 BALL BASKETBALL",30,62,38,G.gold),j(Y,`${g} baskets \xB7 ${_}/10 throws`,30,139,46),j(Y,`Best: ${M} baskets`,30,204,32,G.mint),j(Y,_>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),j(Y,"Y: games menu \xB7 B: leave",30,337,25,G.muted),I.needsUpdate=!0}function T(){for(let[J,pe]of[[-4,8],[5,9],[-8,8],[12,8]]){let me=!0;for(let ee=-1.5;ee<=1.5;ee+=.5)for(let he=-2;he<=2;he+=.5)(s.blocked(J+ee,pe+he,0)||Math.abs(s.groundAt(J+ee,pe+he,.1))>.1)&&(me=!1);if(me)return new v(J,0,pe)}return null}function O(J){if(c.set(J.x,2.35,J.z-1.5),W.position.set(J.x+1.35,2,J.z-1.75),o.children.length>1)for(let U of[...o.children])U!==W&&(o.remove(U),U.traverse(K=>{K.geometry?.dispose(),K.material?.dispose()}));let pe=wt("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);pe.position.set(J.x,3.7,J.z-1.93),o.add(pe);let me=An(1.1);me.position.set(J.x,4.1,J.z-1.5),o.add(me),l(new ye(.12,4.15,.12),a("#173d56"),new v(J.x,2.075,J.z-2)),l(new ye(.08,.08,.55),a("#173d56"),new v(J.x,4.1,J.z-1.75)),l(new ye(1.5,.95,.07),a("#e4f1f2"),new v(J.x,2.65,J.z-1.93));let ee=l(new Lt(.42,.025,10,48),a("#f5ab44"),c);ee.rotation.x=Math.PI/2;for(let U=0;U<12;U++){let K=U/12*Math.PI*2,te=new v(c.x+Math.cos(K)*.41,c.y,c.z+Math.sin(K)*.41),re=new v(c.x+Math.cos(K+.2)*.23,c.y-.48,c.z+Math.sin(K+.2)*.23),ie=new bt(new Oe().setFromPoints([te,re]),new Mt({color:16777215}));o.add(ie)}l(new ye(.06,2.4,.06),a("#173d56"),new v(J.x+1.35,1.2,J.z-1.78)),l(new ye(1.56,.81,.045),a("#122538"),new v(J.x+1.35,2,J.z-1.78));let he=l(new ye(2,.015,.04),a("#f6d484"),new v(J.x,.012,J.z+1.45))}function z(J){if(k(),J==="friend")return f=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let pe=T();return!pe||!s.xrTeleport(pe.x,0,pe.z+1.9)?!1:(h=pe,O(pe),s.xrFace?.(0),u=o.visible=!0,_=g=0,L(),!0)}function k(){u=f=d=!1,o.visible=w.visible=P.visible=C.visible=!1,p=null,m=[],b=!1,x=!1,H=0}function X(){d=!1,w.visible=P.visible=!1,m=[],b=!1,x=!0}function $(){if(p=null,w.visible=!1,_===10){M=Math.max(M,g);try{localStorage.setItem("tfj-basket-best",String(M))}catch{}n(`Basketball complete! ${g} baskets from 10 throws.`)}L()}function ae(J,pe){t.react(pe),H=1.5,C.visible=!0,A=2,i(.6),n(J)}function Q(J,pe){let{dt:me,eye:ee,controller:he,right:U,leftController:K}=J;y+=me,A=Math.max(0,A-me);let te=!!U?.gamepad?.buttons[0]?.pressed,re=!!U?.gamepad?.buttons[4]?.pressed;if(pe){X(),C.visible=!1;return}te||(b=!0);let ie=he?.visible!==!1&&he?he.getWorldPosition(new v):null;if(f){if(t.group.updateMatrixWorld(!0),P.visible=!!ie&&te&&b,P.visible){P.position.copy(ie);let ue=t.group.localToWorld(new v(0,.43,.4));!A&&P.position.distanceTo(ue)<.22&&(F++,ae(`Yum! Jigglypuff loved berry ${F}.`,"feed"),b=!1,P.visible=!1)}t.group.updateMatrixWorld(!0);let xe=t.group.localToWorld(new v(.46,.58,.03));for(let ue of[he,K])if(ue&&ue.visible!==!1&&!te&&!A&&ue.getWorldPosition(new v).distanceTo(xe)<.24){D++,ae(`High-five! ${D} happy high-fives.`,"five");break}}else P.visible=!1;if(H>0?(H-=me,C.visible=!0,C.position.copy(t.group.position).add(new v(0,1.3+(1.5-H)*.22,0)),C.lookAt(ee),C.material.opacity=Math.min(1,H*2)):C.visible=!1,!u){x=te;return}if(re&&!E&&_===10&&!p&&(_=g=0,L()),E=re,ie&&te&&!x&&b&&!p&&_<10&&(d=!0,m=[],w.visible=!0),d){if(!ie)X();else if(w.position.copy(ie),m.push({time:y,p:ie.clone()}),m=m.filter(xe=>y-xe.time<.14),!te&&x){let xe=m.find(Se=>y-Se.time>=.04),ue=xe?ie.clone().sub(xe.p).divideScalar(y-xe.time).clampLength(0,12):new v;d=!1,ue.length()<.6?(w.visible=!1,n("Swing your hand upwards, then release.")):(_++,p={p:ie.clone(),v:ue,age:0,scored:!1},L())}}if(p){let xe=Math.max(1,Math.ceil(me/.008)),ue=me/xe;for(let Se=0;Se<xe&&p;Se++){let ge=p,V=ge.p.clone().addScaledVector(ge.v,ue);V.y-=4.9*ue*ue,ge.v.y-=9.8*ue;let R=V.clone().sub(ge.p),Z=R.length(),oe=new et(ge.p,R.normalize()),q=new v;if(r.some(de=>!de.containsPoint(ge.p)&&oe.intersectBox(de,q)&&q.distanceTo(ge.p)<=Z)){$();break}!ge.scored&&Sf(ge.p,V,c)&&(ge.scored=!0,g++,i(.8),L());let ce=c.z-.4;(ge.p.z-ce)*(V.z-ce)<0&&Math.abs(V.x-c.x)<.8&&V.y>2.17&&V.y<3.15&&(V.z=ce+Math.sign(ge.p.z-ce)*.1,ge.v.z*=-.65);let Ae=Math.hypot(V.x-c.x,V.z-c.z);Math.abs(V.y-c.y)<.1&&Ae>.33&&Ae<.53&&(ge.v.x+=(V.x-c.x)*3,ge.v.z+=(V.z-c.z)*3,ge.v.y=Math.abs(ge.v.y)*.45,V.y=c.y+.11),ge.p.copy(V),ge.age+=ue,w.position.copy(V),w.rotation.x+=ue*5,(V.y<.09||ge.age>5)&&$()}}x=te}return{root:o,get best(){return M},start:z,stop:k,cancel:X,tick:Q,get origin(){return h},get held(){return d},get shots(){return _},get score(){return g},get flight(){return p},get feeds(){return F},get fives(){return D},get berry(){return P},get hoop(){return c}}}function kl(s,e,t){let n=new ve;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new ve;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d"),a=new Ue(r);a.colorSpace=Ee;let l=new _e(new Fe(1.75,.4375),new Me({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=wt("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let h=s.colliders.map(B=>new qe(new v(B.min.x,B.min.y,B.min.z),new v(B.max.x,B.max.y,B.max.z))),u=[],f=[],d=[],p=[],m=new Set,y=0,x=0,b=!1,_=!1,g=[],M=null,A={};try{A=xr(localStorage.getItem(_r))}catch{}function E(){let B=f.length/2;if(!(_||y<B||y>=(A[B]??1/0))){A[B]=y;try{localStorage.setItem(_r,JSON.stringify(A))}catch{}}}function w(){gt(o,1024,256),j(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,G.gold,"700"),j(o,`${m.size/2} / ${f.length/2} pairs  \xB7  ${y} turns`,28,101,38,G.ink,"700"),j(o,m.size===f.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,G.mint,"500"),j(o,_?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,G.muted,"400"),a.needsUpdate=!0}function P(){for(let B of u)B.geometry.dispose(),B.material.dispose();u=[];for(let B of d)for(let Y of B.material)Y.userData.memoryOwned&&Y.dispose();i.clear(),d=[],M=null}function S(){P();let B=[...s.mollie.found];_=B.length<2,_&&(B=[0,1,2,3]);for(let I=B.length-1;I>0;I--){let W=Math.floor(Math.random()*(I+1));[B[I],B[W]]=[B[W],B[I]]}B=B.slice(0,6),f=[...B,...B];for(let I=f.length-1;I>0;I--){let W=Math.floor(Math.random()*(I+1));[f[I],f[W]]=[f[W],f[I]]}p=[],m.clear(),y=x=0;let Y=Math.ceil(f.length/4);d=f.map((I,W)=>{let L=s.mollie.cards[I].clone();L.userData={index:W},L.material=L.material.map(O=>{let z=new Me(O.map?{map:O.map}:{color:15258527});return z.userData.memoryOwned=!0,z}),L.position.set((W%4-1.5)*.43,((Y-1)/2-Math.floor(W/4))*.39,.012),L.rotation.set(0,Math.PI,0),L.scale.setScalar(.34/.62),L.visible=!0;let T=new _e(new Fe(.268,.36),new Me({color:2508378}));return T.position.copy(L.position),T.position.z=.003,u.push(T),i.add(T,L),L}),g=d.map(()=>Math.PI),w()}function N(){return s.xrTeleport(-21.8,0,-10.78)?(s.xrFace?.(0),b=n.visible=!0,S(),!0):!1}function C(){b=n.visible=!1,p=[],x=0}function H(B){return!b||x||!Number.isInteger(B)||B<0||B>=f.length||m.has(B)||p.includes(B)||m.size===f.length?!1:(p.push(B),g[B]=0,t(.18),p.length===2&&(y++,x=.85),w(),!0)}function F(B,Y=!1){if(b){for(let I=0;I<d.length;I++)d[I].rotation.y=nt.damp(d[I].rotation.y,g[I],16,B);if(!Y&&x&&(x=Math.max(0,x-B),!x)){let[I,W]=p;f[I]===f[W]?(m.add(I),m.add(W),u[I].material.color.set(9429443),u[W].material.color.set(9429443),t(.55),m.size===f.length&&E()):g[I]=g[W]=Math.PI,p=[],w()}}}function D(B){if(M!==null&&u[M]&&u[M].material.color.set(m.has(M)?9429443:2508378),M=null,!b||!B)return null;n.updateMatrixWorld(!0);let Y=new on(B.position,B.direction,0,3.8).intersectObjects(d)[0];if(!Y)return null;let I=new et(B.position,B.direction),W=new v;for(let T of h)if(I.intersectBox(T,W)&&W.distanceTo(B.position)<Y.distance-.025)return null;let L=Y.object.userData.index;return M=L,m.has(L)||u[L].material.color.set(16176260),{point:Y.point,action:()=>H(L)}}return{root:n,start:N,stop:C,reset:S,tick:F,point:D,select:H,get records(){return{...A}},get deck(){return f},get cards(){return d},get moves(){return y},get matched(){return m},get waiting(){return x},get active(){return b},get complete(){return b&&m.size===f.length},get practice(){return _}}}function vr(){let s=new ve;s.name="Jigglypuff \xB7 3D";let e=_=>new Ce({color:_,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),r=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(_,g,M,A=s)=>{let E=new _e(_,g);return E.name=M,E.castShadow=E.receiveShadow=!0,A.add(E),E},c=(_,g,M,A,E,w,P,S,N=s)=>{let C=l(new tt(1,32,24),P,S,N);return C.position.set(_,g,M),C.scale.set(A,E,w),C};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let _ of[-1,1]){let g=new ve;g.position.set(_*.27,.86,-.005),g.rotation.z=-_*.21,s.add(g);let M=new at;M.moveTo(-.135,0),M.quadraticCurveTo(-.115,.16,-.025,.34),M.quadraticCurveTo(0,.39,.025,.34),M.quadraticCurveTo(.12,.13,.135,0),M.quadraticCurveTo(0,-.07,-.135,0);let A=l(new Ht(M,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",g);A.position.z=-.04;let E=new at;E.moveTo(-.085,.025),E.quadraticCurveTo(-.06,.16,0,.29),E.quadraticCurveTo(.06,.16,.085,.025),E.quadraticCurveTo(0,-.005,-.085,.025);let w=l(new Wt(E,16),i,"Dark inner ear",g);w.position.z=.047,c(_*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let h=[];for(let _ of[-1,1]){let g=new ve;g.position.set(_*.172,.625,.347),g.rotation.y=_*.24,s.add(g),h.push(g),c(0,0,0,.123,.153,.053,r,"Eye white",g),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",g),c(0,-.003,.063,.042,.079,.01,a,"Pupil",g),c(-.025,.045,.077,.024,.033,.007,r,"Eye sparkle",g),c(.022,-.045,.075,.011,.015,.005,r,"Small sparkle",g)}((_,g,M,A)=>l(new ui(new Mn(_.map(E=>new v(...E))),40,g,8,!1),M,A))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let f=[];for(let _=0;_<=36;_++){let g=_/36,M=Math.PI-g*Math.PI*2,A=.126*(1-.88*g);f.push(new v(.018+Math.cos(M)*A,.961+Math.sin(M)*A,.295+.035*g))}let d=new ui(new Mn(f),72,.042,12,!1),p=d.attributes.position,m=new Mn(f);for(let _=0;_<=72;_++){let g=m.getPointAt(_/72),M=1-.66*(_/72)**2;for(let A=0;A<=12;A++){let E=_*13+A,w=new v().fromBufferAttribute(p,E).sub(g).multiplyScalar(M).add(g);p.setXYZ(E,w.x,w.y,w.z)}}d.computeVertexNormals(),l(d,n,"Curled fringe");let y=[];for(let _ of[-1,1]){let g=new ve;g.position.set(_*.37,.48,.015),g.rotation.z=_*.6,s.add(g),c(_*.075,0,0,.14,.075,.075,t,"Little arm",g),y.push(g)}let x=0;function b(_,g=!1){x+=_,s.position.y=Math.max(0,Math.sin(x*2.5))*.028;let M=x%4.4>4.2?.09:1;h.forEach(A=>A.scale.y=M),y[1].rotation.z=.6+(g?Math.sin(x*4)*.25:Math.sin(x*2)*.04)}return{group:s,animate:b}}function Vl(s,e){let t=vr(),n=new ve;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,r=.52,o=[],a=null,l=!0,c=0,h=null,u=0,f=0,d="",p=(b,_)=>Math.hypot(b.x-_.x,b.z-_.z);function m(b,_){let g=new v(-_.z,0,_.x);for(let[M,A]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let E=b.x+_.x*M+g.x*A,w=b.z+_.z*M+g.z*A,P=s.groundAt(E,w,b.y+.2);if(Math.abs(P-b.y)<.35&&!s.blocked(E,w,P))return n.position.set(E,P,w),o=[],a=new v(b.x,b.y,b.z),c=0,h=null,u=.15,!0}return!1}function y(b,_,g,M=!1){b=Math.min(b,.05);let A=s.stats(),E=new v(A.x,A.y,A.z);if(g){n.visible=!1,l=!0,h=null;return}let w=new v(_.x,0,_.z).normalize();if(w.lengthSq()<.01&&w.set(0,0,-1),l||n.position.distanceTo(E)>8||a&&a.distanceTo(E)>3||p(n.position,E)<.9){if(!m(A,w)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(E)>.18)&&(o.push(E.clone()),a=E.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let P=M?1.05:i;u=Math.max(0,u-b);let S=p(n.position,E);if(!h&&u===0){let F=null,D=0;if(S<P?(F=n.position.clone().sub(E),F.y=0,F.normalize(),D=Math.min(.8,P+.2-S)):S>P+.35&&(o.length||M)&&(F=(M?E:o[0]).clone().sub(n.position),F.y=0,D=Math.min(.8,F.length(),S-P),F.normalize()),F&&D>.04){let B=n.position.clone(),Y=B.clone().addScaledVector(F,D),I=!0,W=B.y;for(let L=1;L<=8;L++){let T=B.clone().lerp(Y,L/8),O=s.groundAt(T.x,T.z,W+.22);if(Math.abs(O-W)>.35||s.blocked(T.x,T.z,O)||p(T,E)<Math.min(P,S)-.01){I=!1;break}W=O}Y.y=W,I?(h={from:B,to:Y,time:0},c=0):(c+=b,c>2.5&&m(A,w))}else c=0}let N=0,C=0;if(h){h.time+=b;let F=Math.min(1,h.time/r),D=h.from.clone().lerp(h.to,F),B=p(n.position,E);p(D,E)>=Math.min(P,B)-.001&&!s.blocked(D.x,D.z,D.y)&&n.position.copy(D),N=Math.sin(Math.PI*F)*.3,C=Math.sin(Math.PI*F)*.08,F===1&&(h=null,u=.14)}else u>0&&(C=-Math.sin(Math.PI*Math.min(1,u/.14))*.1);let H=Math.atan2(A.x-n.position.x,A.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(H-n.rotation.y),Math.cos(H-n.rotation.y))*Math.min(1,b*5),t.animate(b,S<3),t.group.position.y=N,t.group.scale.set(1-C*.5,1+C,1-C*.5),f>0){f=Math.max(0,f-b);let F=Math.abs(Math.sin(f*9));t.group.position.y+=F*(d==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(f*20)*.06}}function x(){l=!0,n.visible=!1,o=[],a=null,h=null}return{group:n,tick:y,summon:x,radius:i,react(b){f=1.3,d=b},get hopping(){return!!h},get trail(){return o},get hidden(){return l}}}function Gl(s,e,t){let n=new ve;n.name="Mollie\u2019s VR book",s.add(n),n.visible=!1;let i=new ve;n.add(i);let r=[],o=-1,a=null,l=!1,c=1,h=null,u=null,f=null,d=null,p=new Ne,m=new Me({color:16446169}),y=new Me({color:1455692}),x=new Me({color:13944999}),b=new Me({color:15386989});function _(I,W,L,T,O,z,k=0){let X=new _e(new ye(I,W,L),T);return X.position.set(O,z,k),i.add(X),X}function g(I,W,L,T,O,z=44,k=null,X="#17364b",$=null){let ae=document.createElement("canvas");ae.width=1024,ae.height=Math.round(1024*L/W);let Q=ae.getContext("2d"),J;function pe(he=!1){if(Q.clearRect(0,0,ae.width,ae.height),k){let U=k==="#eac96d";Ye(Q,4,4,1016,ae.height-8,{top:U?"#ffe8ac":he?"#365e76":"#24475f",bottom:U?"#d9b66c":"#142e43",stroke:he?"#ffe09a":U?"#fff0c7":"#597b91",radius:Math.min(28,ae.height/5)})}Q.textAlign="center",Q.textBaseline="middle",Q.fillStyle=k==="#eac96d"?"#17364b":he?G.gold:X,Q.font=`bold ${z}px Arial`,I.forEach((U,K)=>Q.fillText(U,512,ae.height*(K+1)/(I.length+1),944)),J&&(J.needsUpdate=!0)}pe(),J=new Ue(ae),J.colorSpace=Ee;let me=new Me({map:J,transparent:!0,side:ct}),ee=new _e(new Fe(W,L),me);return ee.position.set(T,O,.06),i.add(ee),$&&(ee.userData.action=$,ee.userData.paint=pe,r.push(ee)),ee}function M(){let I=document.createElement("canvas");I.width=I.height=256;let W=I.getContext("2d");W.fillStyle="#203f53",W.beginPath(),W.arc(128,128,112,0,Math.PI*2),W.fill(),W.strokeStyle="#b99b5c",W.lineWidth=3,W.stroke(),an(W,"ball",128,128,185,G.gold);let L=new Ue(I);L.colorSpace=Ee;let T=new _e(new Fe(.2,.2),new Me({map:L,transparent:!0}));T.position.set(.02,.015,.061),i.add(T)}function A(){i.traverse(I=>{I.userData.borrowed||(I.geometry&&I.geometry.dispose(),I.material&&!Array.isArray(I.material)&&![m,y,x,b].includes(I.material)&&(I.material.map?.dispose(),I.material.dispose()))}),i.clear(),r.length=0,u=null}function E(I,W,L,T,O){let z=e.mollie.cards[I].clone();return z.userData={borrowed:!0},z.material=z.material.map(k=>{if(!k.map)return k;let X=new Me({map:k.map});return X.userData.albumOwned=!0,X}),z.position.set(W,L,.085),z.scale.setScalar(T/.62),z.rotation.set(0,0,0),z.visible=!0,O&&(z.userData.action=O,r.push(z)),i.add(z),z}function w(){i.traverse(I=>{if(I.userData.borrowed)for(let W of I.material)W.userData.albumOwned&&W.dispose()}),A()}function P(){if(w(),d=null,n.position.z=a!==null?.38:0,a!==null){g([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),u=E(a,-.28,0,1.05*c),u.rotation.y=l?Math.PI:0,p.copy(u.quaternion),g(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new v(0,1,0),l?Math.PI:0)}),g(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>S(.12)),g(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>S(-.12)),g(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",H),g(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){_(1.04,1.33,.06,y,0,0),_(.038,1.29,.07,b,-.47,0,.025),g(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),g([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),M(),g(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>N(0)),g(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}_(2.1,1.37,.055,y,0,0,-.02),_(2.02,1.3,.045,x,0,0,.005),_(.98,1.26,.018,m,-.502,0,.036),_(.98,1.26,.018,m,.502,0,.036),_(.025,1.29,.02,x,0,0,.055);for(let I of[-1,1]){let W=o*2+(I===1?1:0),L=I*.5;g([e.mollie.found.has(W)?e.xrGames.names[W]:`Mystery card ${W+1}`],.88,.12,L,.53,56),e.mollie.found.has(W)?E(W,L,-.005,.8,()=>C(W)):(_(.58,.8,.006,new Me({color:14476515}),L,-.005,.062),g(["?"],.5,.6,L,-.005,300,null,"#89a2ab")),g([`${W+1} / 18`],.7,.09,L,-.54,52)}g(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>N(o-1)),g([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),g(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>N(Math.min(8,o+1))),g(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),g(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function S(I){c=nt.clamp(c+I,.72,1.12),u.scale.setScalar(1.05*c/.62)}function N(I){if(h||I===o)return;I=nt.clamp(I,-1,8);let W=new ve;W.name="Turning album page",n.add(W);let L=new _e(new ye(.99,1.27,.012),m);if(L.position.x=I>o?.495:-.495,L.userData.pageTurnOwned=!0,W.add(L),o>=0){for(let T of i.children)if(T.position.z>.045&&Math.abs(T.position.y)<.64&&(I>o?T.position.x>.05:T.position.x<-.05)){let O=T.clone();O.userData={},W.add(O)}}W.position.z=.16,h={leaf:W,next:I,elapsed:0,direction:I>o?-1:1}}function C(I){return e.mollie.found.has(I)?(a=I,l=!1,c=1,f=null,P(),!0):!1}function H(){a!==null?(a=null,f=null,P()):t()}function F(){o=-1,a=null,n.visible=!0,P()}function D(){h&&(h.leaf.traverse(I=>{I.userData.pageTurnOwned&&I.geometry?.dispose()}),n.remove(h.leaf),h=null),f=null,n.visible=!1}function B(I){var T;if(!I||h)return null;n.updateMatrixWorld(!0);let W=new on(I.position,I.direction,0,5).intersectObjects(r)[0],L=W?.object||null;return L!==d&&(d&&(d.userData.paint?.(!1),d.userData.restScale&&d.scale.copy(d.userData.restScale)),d=L,d&&(d.userData.paint?.(!0),(T=d.userData).restScale??(T.restScale=d.scale.clone()),d.scale.copy(d.userData.restScale).multiplyScalar(1.025))),W?{point:W.point,action:W.object.userData.action}:null}function Y(I,W,L){if(h){h.elapsed+=I;let T=Math.min(1,h.elapsed/.48);h.leaf.rotation.y=h.direction*Math.PI*(T*T*(3-2*T)),T>=1&&(n.remove(h.leaf),h.leaf.traverse(O=>{O.userData.pageTurnOwned&&O.geometry?.dispose()}),o=h.next,h=null,P())}if(u)if(W&&L){f||(f={hand:L.clone().invert(),start:u.quaternion.clone()});let T=L.clone().multiply(f.hand),O=i.getWorldQuaternion(new Ne);u.quaternion.copy(O.clone().invert().multiply(T).multiply(O).multiply(f.start))}else f?(f=null,p.copy(u.quaternion)):u.quaternion.slerp(p,1-Math.exp(-10*I))}return{root:n,open:F,close:D,point:B,tick:Y,back:H,inspect:C,change:N,get page(){return o},get inspected(){return a},get card(){return u},get turning(){return!!h}}}var ut={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},Tf=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function wf(s,e){let t=Math.hypot(s,e)*384/ut.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(s,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=Tf[Math.floor(n/(Math.PI/10))],r=t>=268?2:t>=163&&t<=184?3:1;return{score:i*r,label:`${r===3?"Triple ":r===2?"Double ":""}${i} \xB7 ${i*r}`}}function Af(s){let e=s.at(-1);if(!e)return new v;let t=s.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new v}function Ef(s,e,t){let n=s.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function Cf(s,e){if(s.x<=ut.x||e.x>ut.x)return null;let t=(ut.x-s.x)/(e.x-s.x),n=s.clone().lerp(e,t);return Math.hypot(n.y-ut.y,n.z-ut.z)<=.47?{point:n,...wf(-(n.z-ut.z),n.y-ut.y)}:null}function Hl(s,e,t){let n=new ve;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new Ce({color:12044498,metalness:.75,roughness:.28}),r=new Ce({color:2112336,roughness:.45}),o=new Ce({color:16764759,side:ct,roughness:.8}),a=[];function l(k,X){return a.push(k),new _e(k,X)}function c(){let k=new ve;k.name="3D dart";let X=l(new sn(.004,.035,8),i);X.rotation.x=-Math.PI/2,X.position.z=.0175,k.add(X);let $=l(new Ve(.006,.007,.045,10),i);$.rotation.x=Math.PI/2,$.position.z=.0575,k.add($);for(let Q=0;Q<5;Q++){let J=l(new Lt(.007,8e-4,4,10),r);J.position.z=.043+Q*.007,k.add(J)}let ae=l(new Ve(.003,.003,.06,8),r);ae.rotation.x=Math.PI/2,ae.position.z=.11,k.add(ae);for(let Q=0;Q<2;Q++){let J=l(new ye(.044,.001,.05),o);J.rotation.z=Q*Math.PI/2,J.position.z=.15,k.add(J)}return k}let h=c();n.add(h),h.visible=!1;let u=document.createElement("canvas");u.width=1024,u.height=640;let f=u.getContext("2d"),d=new Ue(u);d.colorSpace=Ee;let p=new _e(new Fe(.95,.594),new Me({map:d}));p.name="Wall-mounted darts scoreboard",p.position.set(ut.x+.05,1.8,ut.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let m=new _e(new ye(1.01,.654,.035),new Ce({color:1517105,roughness:.7}));m.name="Darts scoreboard frame",m.position.copy(p.position),m.position.x-=.022,m.rotation.copy(p.rotation),n.add(m);let y=wt("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);y.position.set(ut.x+.065,2.43,ut.z),y.rotation.y=Math.PI/2,n.add(y);let x=An(.9);x.position.set(ut.x+.55,2.75,ut.z),n.add(x);let b=s.colliders.map(k=>new qe(new v(k.min.x,k.min.y,k.min.z),new v(k.max.x,k.max.y,k.max.z))),_=!1,g=!1,M=null,A=[],E=0,w=!1,P=!1,S=!1,N=0,C=0,H="Hold trigger, throw, release.",F=0,D=[];try{F=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function B(){pl(f,{total:N,throws:C,best:F,last:H}),d.needsUpdate=!0}function Y(k=!1){g=!1,A=[],h.visible=!1,M&&!k&&(n.remove(M.mesh),M=null),w=!0,P=!1}function I(){Y();for(let k of D)n.remove(k);D=[],C=N=0,H="Nine darts. Make them count!",B()}function W(){let X=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([$,ae])=>!s.blocked($,ae,0));return!X||!s.xrTeleport(X[0],0,X[1])?!1:(s.xrFace?.(Math.PI/2),n.visible=_=!0,I(),!0)}function L(){Y(),_=!1,n.visible=!1}function T(k,X){let $=M;if($){if($.mesh.position.copy(X),D.push($.mesh),M=null,C++,N+=k.score,H=k.label,t(k.score>0?.6:.12),C===9&&N>F){F=N;try{localStorage.setItem("tfj-vr-darts-best-v1",String(F))}catch{}}B()}}function O(k,X){let $=h.clone();$.visible=!0,$.position.copy(k),$.quaternion.setFromUnitVectors(new v(0,0,-1),X.clone().normalize()),n.add($),M={mesh:$,position:k.clone(),velocity:X.clone(),age:0},h.visible=!1,g=!1,A=[]}function z(k,X,$,ae,Q=!1){if(E+=k,!!_){if(Q){g&&Y();return}if($||(P=!0),ae&&!S&&C===9&&I(),S=ae,X&&$&&!w&&P&&!M&&C<9){let J=s.stats();J.x<ut.ocheX-.04||J.x>ut.ocheX+1.6||Math.abs(J.z-ut.z)>1||J.y>.15?(H="Stand behind the yellow line.",B()):(g=!0,A=[],h.visible=!0,t(.12))}if(g&&X&&(h.position.copy(X.position).addScaledVector(X.direction,.07),h.quaternion.setFromUnitVectors(new v(0,0,-1),X.direction),A.push({time:E,position:X.position.clone()}),A=A.filter(J=>E-J.time<.15),!$&&w)){let J=Af(A);J.length()<.6?(g=!1,h.visible=!1,H="Swing your hand before releasing.",B()):O(h.position,J)}if(g&&!X&&Y(),w=$,M){let J=Math.max(1,Math.ceil(k/.004166666666666667)),pe=k/J;for(let me=0;me<J&&M;me++){let ee=M,he=Ef(ee.position,ee.velocity,pe),U=Cf(ee.position,he.position),K=he.position.clone().sub(ee.position),te=K.length(),re=new et(ee.position,K.clone().normalize()),ie=new v,xe=null,ue=te+1e-8;for(let Se of b){if(Se.containsPoint(ee.position)){xe=ee.position.clone(),ue=0;break}if(re.intersectBox(Se,ie)){let ge=ie.distanceTo(ee.position);ge<=ue&&(ue=ge,xe=ie.clone())}}if(U&&(!xe||U.point.distanceTo(ee.position)<=ue)){T(U,U.point);break}if(xe){T({score:0,label:"Miss \xB7 hit scenery"},xe);break}if(he.position.y<=.025){let Se=nt.clamp((ee.position.y-.025)/(ee.position.y-he.position.y),0,1),ge=ee.position.clone().lerp(he.position,Se);ee.mesh.quaternion.setFromUnitVectors(new v(0,0,-1),new v(ee.velocity.x,0,ee.velocity.z).normalize()),T({score:0,label:"Miss \xB7 floor"},ge);break}if(ee.position.copy(he.position),ee.velocity.copy(he.velocity),ee.mesh.position.copy(ee.position),ee.mesh.quaternion.slerp(new Ne().setFromUnitVectors(new v(0,0,-1),ee.velocity.clone().normalize()),1-Math.exp(-18*pe)),ee.age+=pe,ee.age>4){T({score:0,label:"Miss"},ee.position);break}}}}}return{root:n,get best(){return F},start:W,stop:L,cancel:Y,reset:I,update:z,launch:O,get active(){return _},get held(){return g},get flight(){return M},get total(){return N},get throws(){return C},get last(){return H},get resting(){return D}}}function Wl(s,e,t,n,i=.35){let r=e.clone().sub(s),o=r.length();if(o<1e-7)return null;let a=new et(s,r.multiplyScalar(1/o)),l=new v,c=o+1e-6,h=null;for(let u of t){let f=u.clone().expandByScalar(.045);if(f.containsPoint(s))return{type:"wall",point:s.clone(),distance:0};if(a.intersectBox(f,l)){let d=l.distanceTo(s);d<=c&&(c=d,h={type:"wall",point:l.clone(),distance:d})}}for(let u of n)if(a.intersectSphere(new Ft(u.position,i),l)){let f=l.distanceTo(s);f<c&&(c=f,h={type:"target",id:u.id,point:l.clone(),distance:f})}return h}function Rf(s,e){let t=s.at(-1),n=s.find(r=>t.time-r.time<=.12&&t.time-r.time>=.045),i=new v;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new v(0,1.3,0)),i.clampLength(0,9)}function Xl(s){let e=s.worldScene,t=new ve;t.name="VR games",t.visible=!1,e.add(t);let n=gl(t),i=new ve;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let ne of[...s.mollie.balls.map(be=>be.ball),...s.mollie.cards,s.mollie.thrownBall])ne?.isObject3D&&i.attach(ne);let r=s.colliders.map(ne=>new qe(new v(ne.min.x,ne.min.y,ne.min.z),new v(ne.max.x,ne.max.y,ne.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new Ue(o);l.colorSpace=Ee;let c=new ve;t.add(c);let h=new _e(new Fe(1.6,1.2),new Me({map:l,side:ct}));c.add(h),c.visible=!1;let u=new _e(new ye(1.64,1.24,.035),new Me({color:3561833}));u.position.z=-.025,c.add(u);let f=new ve;c.add(f);let d=new bt(new Oe().setFromPoints([new v,new v(0,0,-1)]),new Mt({color:16769946}));d.visible=!1,t.add(d);let p=new _e(new tt(.012,8,6),new Me({color:16769946}));p.visible=!1,t.add(p);let m=s.mollie.balls[0].ball.clone();m.scale.setScalar(.43),m.visible=!1,t.add(m);let y=vr();y.group.visible=!1,t.add(y.group);let x=document.createElement("canvas");x.width=768,x.height=192;let b=x.getContext("2d"),_=new Ue(x);_.colorSpace=Ee;let g=new _e(new Fe(.95,.2375),new Me({map:_,transparent:!0,depthTest:!1,depthWrite:!1}));g.name="Adventure notification",g.renderOrder=1e3,t.add(g),g.visible=!1;let M="explore",A="menu",E=[],w=null,P=null,S=0,N=!1,C=null,H=!1,F=null,D=[],B=0,Y=!1,I=!1,W=!1,L=!0,T=[],O=0,z=0,k="Welcome, Mollie!",X="",$=0,ae=!1,Q=null,J=0,pe=0;try{pe=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let me=(ne,be=.3)=>{try{ne?.gamepad?.hapticActuators?.[0]?.pulse(be,70)?.catch?.(()=>{})}catch{}},ee=Gl(c,s,()=>{A="menu",ee.close(),h.visible=u.visible=!0,L=!0,se()}),he=Hl(s,t,ne=>me(C?.right,ne)),U=kl(s,t,ne=>me(C?.right,ne)),K=Vl(s,t),te=Fl(s,t,Et,ne=>me(C?.right,ne)),re=bl(s,t,Et,ne=>me(C?.right,ne)),ie=Dl(s,t,Et,ne=>me(C?.right,ne)),xe=0,ue=!0;try{ue=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function Se(ne){ue=!!ne;try{localStorage.setItem("tfj-companion-enabled",String(ue))}catch{}ue?K.summon():(M==="friend"&&Ln(),K.group.visible=!1),se()}let ge=Ol(s,t,Et,ne=>me(C?.right,ne),de),V=zl(s,t,K,Et,ne=>me(C?.right,ne)),R=Ul(s,e,()=>({bowling:ge.best||null,darts:he.best||null,golf:re.best,rc:ie.bestLapMs,basketball:V.best||null,planes:te.best||null,memory:U.records,hide:pe}),Et),Z=!1,oe=!1;function q(){if(M==="jigglypuff"){k="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",lt();return}K.summon(),je()}function ce(){In(),A="album",h.visible=u.visible=!1,f.clear(),ee.open(),L=!0}function Ae(){try{Q??(Q=new(window.AudioContext||window.webkitAudioContext)),Q.resume()?.catch(()=>{})}catch{}}function de(ne){if(!(!Q||Q.state!=="running"))try{let be=Math.floor(Q.sampleRate*.07),ke=Q.createBuffer(1,be,Q.sampleRate),st=ke.getChannelData(0);for(let we=0;we<be;we++)st[we]=(Math.random()*2-1)*Math.exp(-we/be*5);for(let we=0;we<(ne?12:7);we++){let dt=Q.createBufferSource(),Qe=Q.createGain(),Zt=Q.createBiquadFilter();dt.buffer=ke,Zt.type="highpass",Zt.frequency.value=650,Qe.gain.value=.055+we%3*.012,dt.connect(Zt),Zt.connect(Qe),Qe.connect(Q.destination),dt.start(Q.currentTime+we*.095+we%2*.025),dt.onended=()=>{dt.disconnect(),Zt.disconnect(),Qe.disconnect()}}}catch{}}function Pe(){if(!Q||Q.state!=="running")return;let ne=y.group.position;try{let be=Q.createPanner();be.panningModel="HRTF",be.distanceModel="inverse",be.refDistance=2,be.maxDistance=25,be.positionX.value=ne.x,be.positionY.value=ne.y+.6,be.positionZ.value=ne.z,be.connect(Q.destination),[523.25,659.25,587.33].forEach((ke,st)=>{let we=Q.createOscillator(),dt=Q.createGain(),Qe=Q.currentTime+st*.18;we.type="sine",we.frequency.value=ke,dt.gain.setValueAtTime(0,Qe),dt.gain.linearRampToValueAtTime(.09,Qe+.025),dt.gain.exponentialRampToValueAtTime(.001,Qe+.17),we.connect(dt),dt.connect(be),we.start(Qe),we.stop(Qe+.18),we.onended=()=>{we.disconnect(),dt.disconnect()}}),setTimeout(()=>be.disconnect(),1200)}catch{}}function Le(ne,be,ke,st=32,we="#fff"){a.font=`${st>=40?"bold ":""}${st}px Arial`,a.fillStyle=we,a.fillText(ne,be,ke)}function Te(ne,be,ke,st,we){E.push({label:ne,x:be,y:ke,w:st,h:72,action:we}),hl(a,ne,be,ke,st,w===ne)}function se(){A!=="album"&&(E=[],ul(a,sa()),xe===0?(Te("Pok\xE9mon throwing hunt",44,196,455,()=>Ot("hunt")),Te("Jigglypuff hide-and-seek",519,196,461,()=>Ot("jigglypuff")),Te("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>Ot("darts")),Te("Memory match \xB7 staff-room table",519,280,461,()=>Ot("memory")),Te(`Open the card album \xB7 ${s.mollie.found.size} / 18`,44,364,455,ce),Te("Play with Jigglypuff",519,364,461,()=>Ot("friend")),Te("Pok\xE9 Ball basketball",44,448,455,()=>Ot("basketball")),Te("Warehouse bowling",519,448,461,()=>Ot("bowling"))):(Te("Paper-plane challenge",44,196,455,()=>Ot("planes")),Te("RC car racing",519,196,461,()=>Ot("rc")),Te("Warehouse mini-golf",44,280,936,()=>Ot("golf")),Te("Arcade wall of fame",44,364,455,mi),Te("Back to exploring",519,364,461,()=>{Ln(),je()}),Te(ue?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>Se(!ue))),Te("Resume",44,548,445,je),Te(xe===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{xe=1-xe,se()}),dl(a,M==="rc"),l.needsUpdate=!0)}function Ge(){f.clear()}function He(){if(!C){ae=!0;return}ae=!1;let ne=C.forward.clone();ne.y=0,ne.normalize(),c.position.copy(C.eye).addScaledVector(ne,1.9),c.position.y=Math.max(C.eye.y-.1,s.stats().y+.85),c.rotation.set(0,Math.atan2(-ne.x,-ne.z),0)}function lt(){xe=0,$=0,g.visible=!1,In(),ee.close(),h.visible=u.visible=!0,A="menu",Ge(),c.visible=!0,L=!0,w=null,He(),se()}function je(){ee.close(),A="menu",h.visible=u.visible=!0,c.visible=!1,d.visible=p.visible=!1,L=!0,w=null}function mi(){Ln(),je();let ne=R.visit();return ne&&(M="fame",oe=!0),ne}function In(ne=!1){ie.cancel(),re.cancel(),te.cancel(),ge.cancel(),V.cancel(),he.cancel(ne),H=!1,F=null,D=[],m.visible=!1}function Ln(){n.update("explore",null),i.visible=!0,ie.stop(),re.stop(),te.stop(),ge.stop(),V.stop(),$=0,g.visible=!1,U.stop(),he.stop(),M="explore",y.group.visible=!1,z=0,In(),k="Choose an adventure whenever you like."}function na(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([be,ke,st])=>{for(let[we,dt]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let Qe=new v(be+we,0,ke+dt);if(!s.blocked(Qe.x,Qe.z,0)&&s.groundAt(Qe.x,Qe.z,.1)===0&&s.mollie.balls.every(Zt=>Zt.ball.position.distanceTo(Qe)>1.3))return[{point:Qe,clue:st}]}return[]})}function ia(){y.group.position.copy(T[O].point),y.group.visible=!0,J=B+1,k=`Try ${T[O].clue}.`,Et(k)}function Ot(ne){if(Ln(),M=ne,M==="rc"){if(!ie.start()){M="explore",k="No clear warehouse circuit available.",se();return}i.visible=!1,je();return}if(M==="golf"){if(!re.start()){M="explore",k="No clear warehouse green available.",se();return}i.visible=!1,je();return}if(M==="friend"&&!ue&&Se(!0),M==="planes"){if(!te.start()){M="explore",k="The plane course is blocked. Try again.",se();return}je();return}if(M==="bowling"){if(!ge.start()){M="explore",k="The warehouse lane is blocked. Try again.",se();return}i.visible=!1,je();return}if(M==="friend"||M==="basketball"){if(!V.start(M)){M="explore",k="No clear basketball space available.",se();return}je();return}if(M==="memory"){if(!U.start()){M="explore",k="The table is not accessible. Try again.",se();return}je();return}if(M==="darts"){if(!he.start()){M="explore",k="The throwing line is blocked. Try again.",se();return}k="Nine darts. Hold trigger, throw and release.",je();return}if(M==="hunt")s.xrGames.start(),k="Hold trigger, swing gently and release!";else{T=na();for(let be=T.length-1;be>0;be--){let ke=Math.floor(Math.random()*(be+1));[T[be],T[ke]]=[T[ke],T[be]]}if(T=T.slice(0,3),O=0,T.length<3){M="explore",k="No clear hiding spots. Please try again.",se();return}ia()}je()}function Yl(){if(M!=="jigglypuff"||z||!y.group.visible)return!1;if(O++,y.group.visible=!1,me(C?.right,.6),O===3){pe++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(pe))}catch{}M="explore",k="You found Jigglypuff 3 times! Champion!",Et(k)}else z=1.5,k=`Found ${O} / 3! Finding a new hiding spot\u2026`,Et(k);return!0}function sa(){return M==="rc"?ie.state.finished?"RC race complete \xB7 A to race again":`RC racing: lap ${ie.state.completedLaps+1}/3 \xB7 ${ie.state.elapsed.toFixed(1)}s \xB7 A rescues car`:M==="fame"?`Wall of fame: ${R.records.filter(ne=>ne.medal).length} / ${R.records.length} medals earned`:M==="golf"?re.complete?`Mini-golf complete: ${re.total} strokes \xB7 Best ${re.best}`:`Mini-golf: hole ${re.hole+1}/6 \xB7 ${re.strokes} strokes \xB7 Par ${re.layout.par}`:M==="planes"?`Paper planes: ${te.score} points \xB7 ${te.throws}/5 throws \xB7 Longest ${te.longest.toFixed(1)} m`:M==="bowling"?`Bowling: ${ge.total} / 100 pins \xB7 ${ge.frame===10?"Complete":`Frame ${ge.frame+1} \xB7 Bowl ${ge.roll+1}`}`:M==="basketball"?`Basketball: ${V.score} baskets \xB7 ${V.shots}/10 throws`:M==="friend"?`Berries: ${V.feeds} \xB7 High-fives: ${V.fives} \xB7 Offer a berry or touch her raised hand`:M==="hunt"?`Pok\xE9mon: ${s.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:M==="jigglypuff"?z?k:`Found ${O}/3 \xB7 Try ${T[O].clue}`:M==="darts"?`Darts: ${he.total} points \xB7 ${he.throws}/9 darts \xB7 ${he.last}`:M==="memory"?`Memory: ${U.matched.size/2}/${U.deck.length/2} pairs \xB7 ${U.moves} turns`:k}function Et(ne){X=ne,fl(b,ne),_.needsUpdate=!0,$=3}function $l(ne){if(g.visible=!c.visible&&$>0,!g.visible)return;let be=ne.headOrientation||new Ne().setFromUnitVectors(new v(0,0,-1),ne.forward.clone().normalize());g.position.set(0,-.28,-2.1).applyQuaternion(be).add(ne.eye),g.quaternion.copy(be),g.material.opacity=Math.min(1,$/.5),$=Math.max(0,$-ne.dt)}function Zl(ne){return!ne||ne.visible===!1?null:{position:ne.getWorldPosition(new v),direction:new v(0,0,-1).applyQuaternion(ne.getWorldQuaternion(new Ne))}}function Jl(ne){if(!ne)return null;if(A==="album"){let we=ee.point(ne);return d.geometry.setFromPoints([ne.position,we?we.point:ne.position.clone().addScaledVector(ne.direction,2)]),d.visible=!0,p.visible=!!we,we&&p.position.copy(we.point),we?{...we,label:"album"}:null}c.updateMatrixWorld(!0);let be=new on(ne.position,ne.direction,0,4).intersectObject(h)[0];if(d.geometry.setFromPoints([ne.position,be?be.point:ne.position.clone().addScaledVector(ne.direction,2)]),d.visible=!0,p.visible=!!be,be&&p.position.copy(be.point),!be)return null;let ke=be.uv.x*1024,st=(1-be.uv.y)*768;return E.find(we=>ke>=we.x&&ke<=we.x+we.w&&st>=we.y&&st<=we.y+we.h)}function Kl(ne){if(!ne||!y.group.visible)return!1;let be=y.group.position.clone().add(new v(0,.58,0)),ke=ne.position.clone().addScaledVector(ne.direction,4);return Wl(ne.position,ke,r,[{id:0,position:be}],.5)?.type==="target"&&ne.position.distanceTo(be)<3.3}function jl(ne){C=ne,ae&&He();let{dt:be,eye:ke,forward:st,right:we,left:dt,controller:Qe}=ne,Zt=he.throws,nc=U.complete;B+=be;let hn=!!we?.gamepad?.buttons[0]?.pressed,ra=!!dt?.gamepad?.buttons[5]?.pressed,oa=!!we?.gamepad?.buttons[5]?.pressed,zt=Zl(Qe);if(ra&&!I&&(c.visible?je():lt()),oa&&!W&&(c.visible&&A==="album"?(ee.back(),L=!0):c.visible?je():(Ln(),lt())),I=ra,W=oa,hn||(L=!1),c.visible){A==="album"&&ee.tick(be,!!we?.gamepad?.buttons[1]?.pressed,Qe?.getWorldQuaternion(new Ne));let _t=Jl(zt);w=_t?.label||null,w!==P&&(P=w,se()),hn&&!Y&&!L&&_t&&(me(we),_t.action(),L=!0),g.visible=!1}else d.visible=p.visible=!1,M==="darts"&&he.update(be,L?null:zt,!L&&hn,!!we?.gamepad?.buttons[4]?.pressed),M==="hunt"&&zt&&(hn&&!Y&&!L&&!F&&(H=!0,D=[],m.visible=!0,me(we,.15)),H&&(m.position.copy(zt.position).addScaledVector(zt.direction,.09),D.push({time:B,position:zt.position.clone()}),D=D.filter(_t=>B-_t.time<.16),!hn&&Y&&(F={position:m.position.clone(),velocity:Rf(D,zt.direction),life:0},H=!1,D=[],me(we,.2)))),M==="jigglypuff"&&(y.animate(be,!1),z?(z-=be,z<=0&&(z=0,ia())):y.group.visible&&(y.group.rotation.y=Math.atan2(ke.x-y.group.position.x,ke.z-y.group.position.z),Kl(zt)&&(d.geometry.setFromPoints([zt.position,y.group.position.clone().add(new v(0,.6,0))]),d.visible=!0,hn&&!Y&&!L&&Yl()),B>J&&(Pe(),J=B+6)));if(M==="memory"){U.tick(be,c.visible);let _t=!!we?.gamepad?.buttons[4]?.pressed;if(_t&&!Z&&U.complete&&!c.visible&&U.reset(),Z=_t,!c.visible){let Tt=U.point(zt);Tt&&(d.geometry.setFromPoints([zt.position,Tt.point]),d.visible=!0,p.position.copy(Tt.point),p.visible=!0,hn&&!Y&&!L&&Tt.action())}}if(n.update(M,M==="rc"?ie.origin:M==="golf"?re.origin:M==="bowling"?ge.origin:M==="planes"?te.origin:M==="basketball"?V.origin:null),i.visible=!["bowling","golf","rc"].includes(M),M==="fame"&&!oe&&R.site&&Math.hypot(ke.x-R.site.view.x,ke.z-R.site.view.z)>7&&(M="explore"),oe=!1,K.tick(be,st,!ue||["fame","jigglypuff","darts","basketball","bowling","planes","memory","golf","rc"].includes(M),M==="friend"),V.tick(ne,c.visible),ge.tick(ne,c.visible),te.tick(ne,c.visible),re.tick(ne,c.visible),ie.tick(ne,c.visible),R.tick(be),!Qe&&H&&In(),F&&!c.visible){let _t=Math.max(1,Math.ceil(be/.012)),Tt=be/_t;for(let ns=0;ns<_t&&F;ns++){let Dn=F,gi=Dn.position.clone().addScaledVector(Dn.velocity,Tt);gi.y-=4.9*Tt*Tt;let ic=s.mollie.balls.flatMap((sc,aa)=>s.mollie.found.has(aa)?[]:[{id:aa,position:sc.ball.position}]),is=Wl(Dn.position,gi,r,ic);if(is){is.type==="target"&&s.xrGames.collect(is.id)&&(k=`${s.xrGames.names[is.id]} found! ${s.mollie.found.size}/18 cards.`,Et(k),me(we,.8),s.mollie.found.size===18&&(k="All 18 cards found! Brilliant, Mollie!",Et(k))),In();break}Dn.position.copy(gi),Dn.velocity.y-=9.8*Tt,Dn.life+=Tt,m.position.copy(gi),m.rotation.x+=Tt*7,(gi.y<0||Dn.life>3)&&In()}}if(Q?.listener)try{let _t=Q.listener;for(let[Tt,ns]of Object.entries({positionX:ke.x,positionY:ke.y,positionZ:ke.z,forwardX:st.x,forwardY:st.y,forwardZ:st.z,upX:0,upY:1,upZ:0}))_t[Tt]&&(_t[Tt].value=ns)}catch{}return M==="darts"&&Zt<9&&he.throws===9&&Et(`Round complete! ${he.total} points. A to play again.`),M==="memory"&&!nc&&U.complete&&Et(`All pairs matched in ${U.moves} turns!`),$l(ne),Y=hn,{consumeTrigger:c.visible||M!=="explore"||L,blockTeleport:re.held||M==="rc",blockMovement:M==="rc"||c.visible||H||he.held||V.held||ge.held||te.held||re.held}}function Ql(){K.summon(),t.visible=!0,M="explore",Y=I=W=!1,L=!0,k="Choose a game, or resume exploring.",lt()}function ec(){Ln(),je(),g.visible=!1,t.visible=!1,C=null,Q?.suspend()?.catch(()=>{})}function tc(){In(!0),Y=!0,L=!0}return{pokemonLayer:i,setCompanionEnabled:Se,get companionEnabled(){return ue},fame:R,visitFame:mi,rc:ie,golf:re,planes:te,bowling:ge,play:V,memory:U,companion:K,progress:sa,callCompanion:q,album:ee,darts:he,showAlbum:ce,tick:jl,begin:Ql,end:ec,enableAudio:Ae,open:lt,close:je,start:Ot,stop:Ln,interrupt:tc,chooseSpots:na,get mode(){return M},get driving(){return M==="rc"&&ie.active},get menuOpen(){return c.visible},get found(){return O},get route(){return T},get held(){return H||he.held||V.held||ge.held||te.held||re.held},get flight(){return F},get board(){return c},get root(){return t},puff:y.group,ball:m}}var Pn=s=>document.querySelector(s),$t=Pn("#questEnter"),cn=Pn("#questStatus"),yr=Pn("#questPanel");Pn("#questPreview").onclick=()=>{yr.hidden=!0,Pn("#questReturn").hidden=!1};Pn("#questReturn").onclick=()=>{window.yardDebug?.pause(),yr.hidden=!1};async function Pf(s){let e=s.renderer,t=s.worldScene,n=s.worldCamera,i=Xl(s);s.vrGames=i,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let r=new ve;r.name="Quest player rig",t.add(r);let o=[e.xr.getController(0),e.xr.getController(1)],a=o.map((S,N)=>e.xr.getControllerGrip?.(N)||S);for(let S of a)o.includes(S)||r.add(S);let l=new Map;o.forEach(S=>{r.add(S),S.addEventListener("connected",C=>l.set(S,C.data)),S.addEventListener("disconnected",()=>l.delete(S));let N=new _e(new tt(.018,8,6),new Me({color:16769946}));S.add(N)});let c=new bt(new Oe,new Mt({color:8645568}));c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new _e(new rn(.22,.3,32),new Me({color:8645568,side:2,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.visible=!1,t.add(h);let u=s.colliders.map(S=>new qe(new v(S.min.x,S.min.y,S.min.z),new v(S.max.x,S.max.y,S.max.z))),f=0,d=new v,p=new Ne,m=null,y=!1,x=!1,b=!1,_=null,g,M,A=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),E=()=>{let S=s.stats(),N=Ko(d.x,d.z,f);r.position.set(S.x-N.x,S.y+(window.yardFloorOffset||0),S.z-N.z),r.rotation.y=f,n.position.set(0,0,0),n.quaternion.identity(),r.updateMatrixWorld(!0)};s.xrFace=S=>{let N=new v(0,0,-1).applyQuaternion(p);f=S-Math.atan2(-N.x,-N.z),m=null,E()};function w(S){if(_=null,!S){c.visible=h.visible=!1;return}let N=S.getWorldPosition(new v),H=new v(0,0,-1).applyQuaternion(S.getWorldQuaternion(new Ne)).multiplyScalar(6);H.y+=2;let F=[N.clone()],D=new et,B=new v,Y=N.clone(),I=null;for(let W=1;W<=32;W++){let L=W*.05,T=N.clone().addScaledVector(H,L);T.y-=4.9*L*L;let O=T.clone().sub(Y),z=O.length();D.set(Y,O.normalize());let k=z,X=null,$=!1;for(let ae of u){if(ae.containsPoint(Y))continue;let Q=D.intersectBox(ae,B);if(Q){let J=Q.distanceTo(Y);J<k&&(k=J,X=Q.clone(),$=Math.abs(Q.y-ae.max.y)<.015)}}if(Y.y>=0&&T.y<=0){let ae=Y.clone().lerp(T,Y.y/(Y.y-T.y));ae.distanceTo(Y)<k&&(X=ae,$=!0)}if(X){F.push(X),I=X,$&&!s.blocked(X.x,X.z,X.y)&&Math.abs(s.groundAt(X.x,X.z,X.y+.05)-X.y)<.12&&(_=X);break}F.push(T),Y=T}c.geometry.dispose(),c.geometry=new Oe().setFromPoints(F),c.visible=!0,c.material.color.set(_?8645568:16746618),h.visible=!!_,_&&h.position.copy(_).add(new v(0,.025,0))}let P=window.questBridge={frame:null,sample(S){let N=e.xr.getSession(),C=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!C||N?.visibilityState==="hidden")return m=null,i.interrupt(),A();if(d.set(C.transform.position.x,C.transform.position.y,C.transform.position.z),p.copy(C.transform.orientation),m){let Q=Ko(d.x-m.x,d.z-m.z,f);Math.hypot(Q.x,Q.z)<.8&&s.xrPhysical(Q.x,Q.z)}m=d.clone();let H,F;for(let Q of N.inputSources)Q.handedness==="left"&&(H=Q),Q.handedness==="right"&&(F=Q);let[D,B]=ji(H),[Y]=ji(F),I=Sl(Y,Pn("#questTurning").value,S,y);!i.menuOpen&&!i.held&&!i.driving&&(f+=I.angle,I.angle&&i.interrupt()),y=I.latched;let W=!!H?.gamepad?.buttons[4]?.pressed;W&&!b&&!i.driving&&(i.interrupt(),s.resetPosition(),f=0,m=null,i.close()),b=W,E();let L=o.find(Q=>l.get(Q)?.handedness==="right"),T=new v(0,0,-1).applyQuaternion(p),O=T.clone().applyAxisAngle(new v(0,1,0),f),z=i.tick({dt:S,eye:d.clone().applyMatrix4(r.matrixWorld),forward:O,headOrientation:r.getWorldQuaternion(new Ne).multiply(p),left:H,right:F,controller:L,rightGripController:a[o.findIndex(Q=>l.get(Q)?.handedness==="right")],leftController:a[o.findIndex(Q=>l.get(Q)?.handedness==="left")]}),k=!z.blockTeleport&&!i.menuOpen&&(!!F?.gamepad?.buttons[1]?.pressed||!z.consumeTrigger&&!!F?.gamepad?.buttons[0]?.pressed);k&&(i.interrupt(),w(L)),!k&&x&&(_&&!i.menuOpen&&!z.blockTeleport&&s.xrTeleport(_.x,_.y,_.z),_=null,c.visible=h.visible=!1),x=k;let X=f+Math.atan2(-T.x,-T.z);s.xrHeading(X);let $=A(),ae=Number(Pn("#questSpeed").value)/2.9;return $.fwd=-fi(B)*ae,$.strafe=fi(D)*ae,(k||z.blockMovement)&&($.fwd=$.strafe=0),$},beforeRender(){e.xr.isPresenting&&E()}};if(e.xr.addEventListener("sessionstart",()=>{M=n.parent,g=e.shadowMap.enabled,e.shadowMap.enabled=!1,r.add(n),f=0,d.set(0,0,0),m=null,y=x=b=!1,s.xrBegin(),E(),i.begin(),document.body.classList.add("questActive"),yr.hidden=!0,cn.textContent="VR is running. Use the Meta menu to exit.",$t.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),r.remove(n),M&&M.add(n),e.shadowMap.enabled=g,c.visible=h.visible=!1,m=null,s.xrEnd(),document.body.classList.remove("questActive"),yr.hidden=!1,$t.disabled=!1,$t.textContent="Enter VR again",cn.textContent="You have left VR."}),$t.onclick=async()=>{$t.disabled=!0;let S;try{i.enableAudio(),S=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),S.addEventListener("visibilitychange",()=>{m=null}),await e.xr.setSession(S)}catch(N){S&&await S.end().catch(()=>{}),$t.disabled=!1,cn.textContent="Could not enter VR: "+N.message}},!window.isSecureContext){$t.textContent="HTTPS hosting needed",cn.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){$t.textContent="Open in your Quest browser",cn.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let S=await navigator.xr.isSessionSupported("immersive-vr");$t.disabled=!S,$t.textContent=S?"Enter VR":"VR headset not detected",cn.textContent=S?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(S){cn.textContent="VR availability check failed: "+S.message}}var If=0,ql=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(ql),Pf(window.yardDebug).catch(s=>{cn.textContent="VR setup failed: "+s.message,console.error(s)})):++If>1200&&(clearInterval(ql),cn.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
