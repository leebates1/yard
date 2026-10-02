(()=>{var fa=1;var pa=3,cs=0,ma=1,it=2;var Sr=1,jr=2;var Tr=100;var wr=204,Ar=205;var Er=0,Cr=1,Rr=2,fi=3,Pr=4,Ir=5,Lr=6,Dr=7,eo=0,ga=1,xa=2;var to=1,no=2,io=3,so=4,ro=5,oo=6,ao=7;var lo=300,_a=301,co=302;var va=306,pi=1e3,ai=1001,Ur=1002;var ya=1006;var Ma=1008;var ho=1009;var ba=1015;var Sa=1023;var mi=2300,hs=2301,as=2302,Nr=2303,Fr=2400,Or=2401,Br=2402;var Ta=0;var uo="",De="srgb",zr="srgb-linear",kr="linear",ls="srgb";var An=7680;var Vr=519;var Gr=35044;var dn=2e3,gi=2001;function vl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function yl(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Hr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var Uo={},us=null;function wa(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qe(...s){s=wa(s);let e="THREE."+s.shift();if(us)us("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function We(...s){s=wa(s);let e="THREE."+s.shift();if(us)us("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Yn(...s){let e=s.join(" ");e in Uo||(Uo[e]=!0,qe(...s))}var Ml={[Er]:Cr,[Rr]:Lr,[Pr]:Dr,[fi]:Ir,[Cr]:Er,[Lr]:Rr,[Dr]:Pr,[Ir]:fi},fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},at=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],No=1234567,ci=Math.PI/180,xi=180/Math.PI;function Nn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[s&255]+at[s>>8&255]+at[s>>16&255]+at[s>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toLowerCase()}function Pe(s,e,t){return Math.max(e,Math.min(t,s))}function fo(s,e){return(s%e+e)%e}function bl(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Sl(s,e,t){return s!==e?(t-s)/(e-s):0}function hi(s,e,t){return(1-t)*s+t*e}function Tl(s,e,t,n){return hi(s,e,1-Math.exp(-t*n))}function wl(s,e=1){return e-Math.abs(fo(s,e*2)-e)}function Al(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function El(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Cl(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Rl(s,e){return s+Math.random()*(e-s)}function Pl(s){return s*(.5-Math.random())}function Il(s){s!==void 0&&(No=s);let e=No+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ll(s){return s*ci}function Dl(s){return s*xi}function Ul(s){return(s&s-1)===0&&s!==0}function Nl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Fl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ol(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ct={DEG2RAD:ci,RAD2DEG:xi,generateUUID:Nn,clamp:Pe,euclideanModulo:fo,mapLinear:bl,inverseLerp:Sl,lerp:hi,damp:Tl,pingpong:wl,smoothstep:Al,smootherstep:El,randInt:Cl,randFloat:Rl,randFloatSpread:Pl,seededRandom:Il,degToRad:Ll,radToDeg:Dl,isPowerOfTwo:Ul,ceilPowerOfTwo:Nl,floorPowerOfTwo:Fl,setQuaternionFromProperEuler:Ol,normalize:ut,denormalize:qn},xo=class xo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xo.prototype.isVector2=!0;var ee=xo,Ie=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],m=r[o+3];if(u!==m||l!==f||c!==d||h!==p){let y=l*f+c*d+h*p+u*m;y<0&&(f=-f,d=-d,p=-p,m=-m,y=-y);let v=1-a;if(y<.9995){let M=Math.acos(y),x=Math.sin(M);v=Math.sin(v*M)/x,a=Math.sin(a*M)/x,l=l*v+f*a,c=c*v+d*a,h=h*v+p*a,u=u*v+m*a}else{l=l*v+f*a,c=c*v+d*a,h=h*v+p*a,u=u*v+m*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_o=class _o{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ks.copy(this).projectOnVector(e),this.sub(Ks)}reflect(e){return this.sub(Ks.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_o.prototype.isVector3=!0;var _=_o,Ks=new _,Fo=new Ie,vo=class vo{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],m=i[0],y=i[3],v=i[6],M=i[1],x=i[4],g=i[7],b=i[2],w=i[5],E=i[8];return r[0]=o*m+a*M+l*b,r[3]=o*y+a*x+l*w,r[6]=o*v+a*g+l*E,r[1]=c*m+h*M+u*b,r[4]=c*y+h*x+u*w,r[7]=c*v+h*g+u*E,r[2]=f*m+d*M+p*b,r[5]=f*y+d*x+p*w,r[8]=f*v+d*g+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=f*m,e[4]=(h*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Yn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qs.makeScale(e,t)),this}rotate(e){return Yn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qs.makeRotation(-e)),this}translate(e,t){return Yn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vo.prototype.isMatrix3=!0;var Re=vo,Qs=new Re,Oo=new Re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new Re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bl(){let s={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ls&&(i.r=Zt(i.r),i.g=Zt(i.g),i.b=Zt(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ls&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===uo?kr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Yn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Yn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[zr]:{primaries:e,whitePoint:n,transfer:kr,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:e,whitePoint:n,transfer:ls,toXYZ:Oo,fromXYZ:Bo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),s}var Rt=Bl();function Zt(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $n(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fn,ds=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fn===void 0&&(Fn=Hr("canvas")),Fn.width=e.width,Fn.height=e.height;let i=Fn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zt(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zt(t[n]/255)*255):t[n]=Zt(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zl=0,fs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(js(i[o].image)):r.push(js(i[o]))}else r=js(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ds.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var kl=0,er=new _,En=class s extends fn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ai,i=ai,r=ya,o=Ma,a=Sa,l=ho,c=s.DEFAULT_ANISOTROPY,h=uo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=Nn(),this.name="",this.source=new fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(er).x}get height(){return this.source.getSize(er).y}get depth(){return this.source.getSize(er).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=lo;En.DEFAULT_ANISOTROPY=1;var yo=class yo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],m=l[2],y=l[6],v=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(p-y)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(p+y)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,g=(d+1)/2,b=(v+1)/2,w=(h+f)/4,E=(u+m)/4,T=(p+y)/4;return x>g&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=w/n,r=E/n):g>b?g<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(g),n=w/i,r=T/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=E/r,i=T/r),this.set(n,i,r,t),this}let M=Math.sqrt((y-p)*(y-p)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(y-p)/M,this.y=(u-m)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this.w=Pe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this.w=Pe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yo.prototype.isVector4=!0;var Cn=yo;var Os=class Os{constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,p,m,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,m,y)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,m,y){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=r,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=f,v[3]=d,v[7]=p,v[11]=m,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Os().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/On.setFromMatrixColumn(e,0).length(),r=1/On.setFromMatrixColumn(e,1).length(),o=1/On.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,m=c*u;t[0]=f+m*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,m=c*u;t[0]=f-m*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,m=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+m,t[1]=l*u,t[5]=m*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,m=a*c;t[0]=l*h,t[4]=m-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-m*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+m,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=m*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vl,e,Gl)}lookAt(e,t,n){let i=this.elements;return vt.subVectors(e,t),vt.lengthSq()===0&&(vt.z=1),vt.normalize(),rn.crossVectors(n,vt),rn.lengthSq()===0&&(Math.abs(n.z)===1?vt.x+=1e-4:vt.z+=1e-4,vt.normalize(),rn.crossVectors(n,vt)),rn.normalize(),Ni.crossVectors(vt,rn),i[0]=rn.x,i[4]=Ni.x,i[8]=vt.x,i[1]=rn.y,i[5]=Ni.y,i[9]=vt.y,i[2]=rn.z,i[6]=Ni.z,i[10]=vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],m=n[6],y=n[10],v=n[14],M=n[3],x=n[7],g=n[11],b=n[15],w=i[0],E=i[4],T=i[8],P=i[12],S=i[1],L=i[5],C=i[9],O=i[13],D=i[2],W=i[6],B=i[10],$=i[14],R=i[3],z=i[7],F=i[11],V=i[15];return r[0]=o*w+a*S+l*D+c*R,r[4]=o*E+a*L+l*W+c*z,r[8]=o*T+a*C+l*B+c*F,r[12]=o*P+a*O+l*$+c*V,r[1]=h*w+u*S+f*D+d*R,r[5]=h*E+u*L+f*W+d*z,r[9]=h*T+u*C+f*B+d*F,r[13]=h*P+u*O+f*$+d*V,r[2]=p*w+m*S+y*D+v*R,r[6]=p*E+m*L+y*W+v*z,r[10]=p*T+m*C+y*B+v*F,r[14]=p*P+m*O+y*$+v*V,r[3]=M*w+x*S+g*D+b*R,r[7]=M*E+x*L+g*W+b*z,r[11]=M*T+x*C+g*B+b*F,r[15]=M*P+x*O+g*$+b*V,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],m=e[7],y=e[11],v=e[15],M=l*d-c*f,x=a*d-c*u,g=a*f-l*u,b=o*d-c*h,w=o*f-l*h,E=o*u-a*h;return t*(m*M-y*x+v*g)-n*(p*M-y*b+v*w)+i*(p*x-m*b+v*E)-r*(p*g-m*w+y*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],m=e[13],y=e[14],v=e[15],M=t*a-n*o,x=t*l-i*o,g=t*c-r*o,b=n*l-i*a,w=n*c-r*a,E=i*c-r*l,T=h*m-u*p,P=h*y-f*p,S=h*v-d*p,L=u*y-f*m,C=u*v-d*m,O=f*v-d*y,D=M*O-x*C+g*L+b*S-w*P+E*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/D;return e[0]=(a*O-l*C+c*L)*W,e[1]=(i*C-n*O-r*L)*W,e[2]=(m*E-y*w+v*b)*W,e[3]=(f*w-u*E-d*b)*W,e[4]=(l*S-o*O-c*P)*W,e[5]=(t*O-i*S+r*P)*W,e[6]=(y*g-p*E-v*x)*W,e[7]=(h*E-f*g+d*x)*W,e[8]=(o*C-a*S+c*T)*W,e[9]=(n*S-t*C-r*T)*W,e[10]=(p*w-m*g+v*M)*W,e[11]=(u*g-h*w-d*M)*W,e[12]=(a*P-o*L-l*T)*W,e[13]=(t*L-n*P+i*T)*W,e[14]=(m*x-p*b-y*M)*W,e[15]=(h*b-u*x+f*M)*W,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,m=o*h,y=o*u,v=a*u,M=l*c,x=l*h,g=l*u,b=n.x,w=n.y,E=n.z;return i[0]=(1-(m+v))*b,i[1]=(d+g)*b,i[2]=(p-x)*b,i[3]=0,i[4]=(d-g)*w,i[5]=(1-(f+v))*w,i[6]=(y+M)*w,i[7]=0,i[8]=(p+x)*E,i[9]=(y-M)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=On.set(i[0],i[1],i[2]).length(),a=On.set(i[4],i[5],i[6]).length(),l=On.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Dt.copy(this);let c=1/o,h=1/a,u=1/l;return Dt.elements[0]*=c,Dt.elements[1]*=c,Dt.elements[2]*=c,Dt.elements[4]*=h,Dt.elements[5]*=h,Dt.elements[6]*=h,Dt.elements[8]*=u,Dt.elements[9]*=u,Dt.elements[10]*=u,t.setFromRotationMatrix(Dt),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=dn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,m;if(l)p=r/(o-r),m=o*r/(o-r);else if(a===dn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===gi)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=dn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,m;if(l)p=1/(o-r),m=o/(o-r);else if(a===dn)p=-2/(o-r),m=-(o+r)/(o-r);else if(a===gi)p=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Os.prototype.isMatrix4=!0;var je=Os,On=new _,Dt=new je,Vl=new _(0,0,0),Gl=new _(1,1,1),rn=new _,Ni=new _,vt=new _,zo=new je,ko=new Ie,Rn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ko.setFromEuler(this),this.setFromQuaternion(ko,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var _i=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hl=0,Vo=new _,Bn=new Ie,Ht=new je,Fi=new _,ni=new _,Wl=new _,Xl=new Ie,Go=new _(1,0,0),Ho=new _(0,1,0),Wo=new _(0,0,1),Xo={type:"added"},ql={type:"removed"},zn={type:"childadded",child:null},tr={type:"childremoved",child:null},Mt=class s extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new _,t=new Rn,n=new Ie,i=new _(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new je},normalMatrix:{value:new Re}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _i,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.multiply(Bn),this}rotateOnWorldAxis(e,t){return Bn.setFromAxisAngle(e,t),this.quaternion.premultiply(Bn),this}rotateX(e){return this.rotateOnAxis(Go,e)}rotateY(e){return this.rotateOnAxis(Ho,e)}rotateZ(e){return this.rotateOnAxis(Wo,e)}translateOnAxis(e,t){return Vo.copy(e).applyQuaternion(this.quaternion),this.position.add(Vo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Go,e)}translateY(e){return this.translateOnAxis(Ho,e)}translateZ(e){return this.translateOnAxis(Wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ht.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fi.copy(e):Fi.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ht.lookAt(ni,Fi,this.up):Ht.lookAt(Fi,ni,this.up),this.quaternion.setFromRotationMatrix(Ht),i&&(Ht.extractRotation(i.matrixWorld),Bn.setFromRotationMatrix(Ht),this.quaternion.premultiply(Bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xo),zn.child=e,this.dispatchEvent(zn),zn.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ql),tr.child=e,this.dispatchEvent(tr),tr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ht.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ht.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ht),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xo),zn.child=e,this.dispatchEvent(zn),zn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,e,Wl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ni,Xl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Mt.DEFAULT_UP=new _(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Se=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Aa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},Oi={h:0,s:0,l:0};function nr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=De){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Rt.workingColorSpace){if(e=fo(e,1),t=Pe(t,0,1),n=Pe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=nr(o,r,e+1/3),this.g=nr(o,r,e),this.b=nr(o,r,e-1/3)}return Rt.colorSpaceToWorking(this,i),this}setStyle(e,t=De){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=De){let n=Aa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zt(e.r),this.g=Zt(e.g),this.b=Zt(e.b),this}copyLinearToSRGB(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=De){return Rt.workingToColorSpace(lt.copy(this),e),Math.round(Pe(lt.r*255,0,255))*65536+Math.round(Pe(lt.g*255,0,255))*256+Math.round(Pe(lt.b*255,0,255))}getHexString(e=De){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(lt.copy(this),t);let n=lt.r,i=lt.g,r=lt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(lt.copy(this),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=De){Rt.workingToColorSpace(lt.copy(this),e);let t=lt.r,n=lt.g,i=lt.b;return e!==De?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(on),this.setHSL(on.h+e,on.s+t,on.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(Oi);let n=hi(on.h,Oi.h,t),i=hi(on.s,Oi.s,t),r=hi(on.l,Oi.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},lt=new ke;ke.NAMES=Aa;var Ut=new _,Wt=new _,ir=new _,Xt=new _,kn=new _,Vn=new _,qo=new _,sr=new _,rr=new _,or=new _,ar=new Cn,lr=new Cn,cr=new Cn,un=class s{constructor(e=new _,t=new _,n=new _){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ut.subVectors(e,t),i.cross(Ut);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ut.subVectors(i,t),Wt.subVectors(n,t),ir.subVectors(e,t);let o=Ut.dot(Ut),a=Ut.dot(Wt),l=Ut.dot(ir),c=Wt.dot(Wt),h=Wt.dot(ir),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xt)===null?!1:Xt.x>=0&&Xt.y>=0&&Xt.x+Xt.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Xt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xt.x),l.addScaledVector(o,Xt.y),l.addScaledVector(a,Xt.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ar.setScalar(0),lr.setScalar(0),cr.setScalar(0),ar.fromBufferAttribute(e,t),lr.fromBufferAttribute(e,n),cr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ar,r.x),o.addScaledVector(lr,r.y),o.addScaledVector(cr,r.z),o}static isFrontFacing(e,t,n,i){return Ut.subVectors(n,t),Wt.subVectors(e,t),Ut.cross(Wt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),Ut.cross(Wt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;kn.subVectors(i,n),Vn.subVectors(r,n),sr.subVectors(e,n);let l=kn.dot(sr),c=Vn.dot(sr);if(l<=0&&c<=0)return t.copy(n);rr.subVectors(e,i);let h=kn.dot(rr),u=Vn.dot(rr);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(kn,o);or.subVectors(e,r);let d=kn.dot(or),p=Vn.dot(or);if(p>=0&&d<=p)return t.copy(r);let m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Vn,a);let y=h*p-d*u;if(y<=0&&u-h>=0&&d-p>=0)return qo.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(qo,a);let v=1/(y+m+f);return o=m*v,a=f*v,t.copy(n).addScaledVector(kn,o).addScaledVector(Vn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ye=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nt):Nt.fromBufferAttribute(r,o),Nt.applyMatrix4(e.matrixWorld),this.expandByPoint(Nt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(e.matrixWorld),this.union(Bi)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nt),Nt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ii),zi.subVectors(this.max,ii),Gn.subVectors(e.a,ii),Hn.subVectors(e.b,ii),Wn.subVectors(e.c,ii),an.subVectors(Hn,Gn),ln.subVectors(Wn,Hn),bn.subVectors(Gn,Wn);let t=[0,-an.z,an.y,0,-ln.z,ln.y,0,-bn.z,bn.y,an.z,0,-an.x,ln.z,0,-ln.x,bn.z,0,-bn.x,-an.y,an.x,0,-ln.y,ln.x,0,-bn.y,bn.x,0];return!hr(t,Gn,Hn,Wn,zi)||(t=[1,0,0,0,1,0,0,0,1],!hr(t,Gn,Hn,Wn,zi))?!1:(ki.crossVectors(an,ln),t=[ki.x,ki.y,ki.z],hr(t,Gn,Hn,Wn,zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qt=[new _,new _,new _,new _,new _,new _,new _,new _],Nt=new _,Bi=new Ye,Gn=new _,Hn=new _,Wn=new _,an=new _,ln=new _,bn=new _,ii=new _,zi=new _,ki=new _,Sn=new _;function hr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Sn.fromArray(s,r);let a=i.x*Math.abs(Sn.x)+i.y*Math.abs(Sn.y)+i.z*Math.abs(Sn.z),l=e.dot(Sn),c=t.dot(Sn),h=n.dot(Sn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qe=new _,Vi=new ee,Yl=0,Pt=class extends fn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yl++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gr,this.updateRanges=[],this.gpuType=ba,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vi.fromBufferAttribute(this,t),Vi.applyMatrix3(e),this.setXY(t,Vi.x,Vi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gr&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ps=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ms=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ce=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},$l=new Ye,si=new _,ur=new _,kt=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$l.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;si.subVectors(e,this.center);let t=si.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(si,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(si.copy(e.center).add(ur)),this.expandByPoint(si.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zl=0,Ct=new je,dr=new Mt,Xn=new _,yt=new Ye,ri=new Ye,tt=new _,Oe=class s extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vl(e)?ms:ps)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Re().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ct.makeRotationFromQuaternion(e),this.applyMatrix4(Ct),this}rotateX(e){return Ct.makeRotationX(e),this.applyMatrix4(Ct),this}rotateY(e){return Ct.makeRotationY(e),this.applyMatrix4(Ct),this}rotateZ(e){return Ct.makeRotationZ(e),this.applyMatrix4(Ct),this}translate(e,t,n){return Ct.makeTranslation(e,t,n),this.applyMatrix4(Ct),this}scale(e,t,n){return Ct.makeScale(e,t,n),this.applyMatrix4(Ct),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];yt.setFromBufferAttribute(r),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ri.setFromBufferAttribute(a),this.morphTargetsRelative?(tt.addVectors(yt.min,ri.min),yt.expandByPoint(tt),tt.addVectors(yt.max,ri.max),yt.expandByPoint(tt)):(yt.expandByPoint(ri.min),yt.expandByPoint(ri.max))}yt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(tt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tt.fromBufferAttribute(a,c),l&&(Xn.fromBufferAttribute(e,c),tt.add(Xn)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new _,l[T]=new _;let c=new _,h=new _,u=new _,f=new ee,d=new ee,p=new ee,m=new _,y=new _;function v(T,P,S){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(L),y.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),a[T].add(m),a[P].add(m),a[S].add(m),l[T].add(y),l[P].add(y),l[S].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let T=0,P=M.length;T<P;++T){let S=M[T],L=S.start,C=S.count;for(let O=L,D=L+C;O<D;O+=3)v(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new _,g=new _,b=new _,w=new _;function E(T){b.fromBufferAttribute(i,T),w.copy(b);let P=a[T];x.copy(P),x.sub(b.multiplyScalar(b.dot(P))).normalize(),g.crossVectors(w,P);let L=g.dot(l[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,L)}for(let T=0,P=M.length;T<P;++T){let S=M[T],L=S.start,C=S.count;for(let O=L,D=L+C;O<D;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new _,r=new _,o=new _,a=new _,l=new _,c=new _,h=new _,u=new _;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),m=e.getX(f+1),y=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,y),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,y),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let m=0,y=l.length;m<y;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let v=0;v<h;v++)f[p++]=c[d++]}return new Pt(f,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Jl=0,Pn=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Sr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Ar,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=An,this.stencilZFail=An,this.stencilZPass=An,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==cs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ar&&(n.blendDst=this.blendDst),this.blendEquation!==Tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==An&&(n.stencilFail=this.stencilFail),this.stencilZFail!==An&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==An&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Yt=new _,fr=new _,Gi=new _,cn=new _,pr=new _,Hi=new _,mr=new _,Ze=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.origin).addScaledVector(this.direction,t),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fr.copy(e).add(t).multiplyScalar(.5),Gi.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(fr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Gi),a=cn.dot(this.direction),l=-cn.dot(Gi),c=cn.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let m=1/h;u*=m,f*=m,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fr).addScaledVector(Gi,f),d}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);let n=Yt.dot(this.direction),i=Yt.dot(Yt)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,n,i,r){pr.subVectors(t,e),Hi.subVectors(n,e),mr.crossVectors(pr,Hi);let o=this.direction.dot(mr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cn.subVectors(this.origin,e);let l=a*this.direction.dot(Hi.crossVectors(cn,Hi));if(l<0)return null;let c=a*this.direction.dot(pr.cross(cn));if(c<0||l+c>o)return null;let h=-a*cn.dot(mr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yo=new je,Tn=new Ze,Wi=new kt,$o=new _,Xi=new _,qi=new _,Yi=new _,gr=new _,$i=new _,Zo=new _,Zi=new _,ve=class extends Mt{constructor(e=new Oe,t=new Te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){$i.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(gr.fromBufferAttribute(u,e),o?$i.addScaledVector(gr,h):$i.addScaledVector(gr.sub(t),h))}t.add($i)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(r),Tn.copy(e.ray).recast(e.near),!(Wi.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Wi,$o)===null||Tn.origin.distanceToSquared($o)>(e.far-e.near)**2))&&(Yo.copy(r).invert(),Tn.copy(e.ray).applyMatrix4(Yo),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){let y=f[p],v=o[y.materialIndex],M=Math.max(y.start,d.start),x=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let g=M,b=x;g<b;g+=3){let w=a.getX(g),E=a.getX(g+1),T=a.getX(g+2);i=Ji(this,v,e,n,c,h,u,w,E,T),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let y=p,v=m;y<v;y+=3){let M=a.getX(y),x=a.getX(y+1),g=a.getX(y+2);i=Ji(this,o,e,n,c,h,u,M,x,g),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=f.length;p<m;p++){let y=f[p],v=o[y.materialIndex],M=Math.max(y.start,d.start),x=Math.min(l.count,Math.min(y.start+y.count,d.start+d.count));for(let g=M,b=x;g<b;g+=3){let w=g,E=g+1,T=g+2;i=Ji(this,v,e,n,c,h,u,w,E,T),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let y=p,v=m;y<v;y+=3){let M=y,x=y+1,g=y+2;i=Ji(this,o,e,n,c,h,u,M,x,g),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}};function Kl(s,e,t,n,i,r,o,a){let l;if(e.side===ma?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===cs,a),l===null)return null;Zi.copy(a),Zi.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Zi);return c<t.near||c>t.far?null:{distance:c,point:Zi.clone(),object:s}}function Ji(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Xi),s.getVertexPosition(l,qi),s.getVertexPosition(c,Yi);let h=Kl(s,e,t,n,Xi,qi,Yi,Zo);if(h){let u=new _;un.getBarycoord(Zo,Xi,qi,Yi,u),i&&(h.uv=un.getInterpolatedAttribute(i,a,l,c,u,new ee)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,l,c,u,new ee)),o&&(h.normal=un.getInterpolatedAttribute(o,a,l,c,u,new _),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new _,materialIndex:0};un.getNormal(Xi,qi,Yi,f.normal),h.face=f,h.barycoord=u}return h}var xr=new _,Ql=new _,jl=new Re,$t=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xr.subVectors(n,t).cross(Ql.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(xr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jl.getNormalMatrix(e),i=this.coplanarPoint(xr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},wn=new kt,ec=new ee(.5,.5),Ki=new _,gs=class{constructor(e=new $t,t=new $t,n=new $t,i=new $t,r=new $t,o=new $t){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],m=r[9],y=r[10],v=r[11],M=r[12],x=r[13],g=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,v-p,b-M).normalize(),i[1].setComponents(c+o,d+h,v+p,b+M).normalize(),i[2].setComponents(c+a,d+u,v+m,b+x).normalize(),i[3].setComponents(c-a,d-u,v-m,b-x).normalize(),n)i[4].setComponents(l,f,y,g).normalize(),i[5].setComponents(c-l,d-f,v-y,b-g).normalize();else if(i[4].setComponents(c-l,d-f,v-y,b-g).normalize(),t===dn)i[5].setComponents(c+l,d+f,v+y,b+g).normalize();else if(t===gi)i[5].setComponents(l,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){wn.center.set(0,0,0);let t=ec.distanceTo(e.center);return wn.radius=.7071067811865476+t,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ki.x=i.normal.x>0?e.max.x:e.min.x,Ki.y=i.normal.y>0?e.max.y:e.min.y,Ki.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ki)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gt=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xs=new _,_s=new _,Jo=new je,oi=new Ze,Qi=new kt,_r=new _,Ko=new _,bt=class extends Mt{constructor(e=new Oe,t=new gt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xs.fromBufferAttribute(t,i-1),_s.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xs.distanceTo(_s);e.setAttribute("lineDistance",new Ce(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(i),Qi.radius+=r,e.ray.intersectsSphere(Qi)===!1)return;Jo.copy(i).invert(),oi.copy(e.ray).applyMatrix4(Jo);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=d,y=p-1;m<y;m+=c){let v=h.getX(m),M=h.getX(m+1),x=ji(this,e,oi,l,v,M,m);x&&t.push(x)}if(this.isLineLoop){let m=h.getX(p-1),y=h.getX(d),v=ji(this,e,oi,l,m,y,p-1);v&&t.push(v)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let m=d,y=p-1;m<y;m+=c){let v=ji(this,e,oi,l,m,m+1,m);v&&t.push(v)}if(this.isLineLoop){let m=ji(this,e,oi,l,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ji(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(xs.fromBufferAttribute(a,i),_s.fromBufferAttribute(a,r),t.distanceSqToSegment(xs,_s,_r,Ko)>n)return;_r.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(_r);if(!(c<e.near||c>e.far))return{distance:c,point:Ko.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Zn=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qo=new je,Wr=new Ze,es=new kt,ts=new _,vi=class extends Mt{constructor(e=new Oe,t=new Zn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(i),es.radius+=r,e.ray.intersectsSphere(es)===!1)return;Qo.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(Qo);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,m=d;p<m;p++){let y=c.getX(p);ts.fromBufferAttribute(u,y),jo(ts,y,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,m=d;p<m;p++)ts.fromBufferAttribute(u,p),jo(ts,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jo(s,e,t,n,i,r,o){let a=Wr.distanceSqToPoint(s);if(a<t){let l=new _;Wr.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ve=class extends En{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ye=class s extends Oe{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function p(m,y,v,M,x,g,b,w,E,T,P){let S=g/E,L=b/T,C=g/2,O=b/2,D=w/2,W=E+1,B=T+1,$=0,R=0,z=new _;for(let F=0;F<B;F++){let V=F*L-O;for(let fe=0;fe<W;fe++){let j=fe*S-C;z[m]=j*M,z[y]=V*x,z[v]=D,c.push(z.x,z.y,z.z),z[m]=0,z[y]=0,z[v]=w>0?1:-1,h.push(z.x,z.y,z.z),u.push(fe/E),u.push(1-F/T),$+=1}}for(let F=0;F<T;F++)for(let V=0;V<E;V++){let fe=f+V+W*F,j=f+V+W*(F+1),H=f+(V+1)+W*(F+1),q=f+(V+1)+W*F;l.push(fe,j,q),l.push(j,H,q),R+=6}a.addGroup(d,R,P),d+=R,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var yi=class s extends Oe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new _,h=new ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(a,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},et=class s extends Oe{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,m=[],y=n/2,v=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(d,2));function M(){let g=new _,b=new _,w=0,E=(t-e)/n;for(let T=0;T<=r;T++){let P=[],S=T/r,L=S*(t-e)+e;for(let C=0;C<=i;C++){let O=C/i,D=O*l+a,W=Math.sin(D),B=Math.cos(D);b.x=L*W,b.y=-S*n+y,b.z=L*B,u.push(b.x,b.y,b.z),g.set(W,E,B).normalize(),f.push(g.x,g.y,g.z),d.push(O,1-S),P.push(p++)}m.push(P)}for(let T=0;T<i;T++)for(let P=0;P<r;P++){let S=m[P][T],L=m[P+1][T],C=m[P+1][T+1],O=m[P][T+1];(e>0||P!==0)&&(h.push(S,L,O),w+=3),(t>0||P!==r-1)&&(h.push(L,C,O),w+=3)}c.addGroup(v,w,0),v+=w}function x(g){let b=p,w=new ee,E=new _,T=0,P=g===!0?e:t,S=g===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,y*S,0),f.push(0,S,0),d.push(.5,.5),p++;let L=p;for(let C=0;C<=i;C++){let D=C/i*l+a,W=Math.cos(D),B=Math.sin(D);E.x=P*B,E.y=y*S,E.z=P*W,u.push(E.x,E.y,E.z),f.push(0,S,0),w.x=W*.5+.5,w.y=B*.5*S+.5,d.push(w.x,w.y),p++}for(let C=0;C<i;C++){let O=b+C,D=L+C;g===!0?h.push(D,D+1,O):h.push(D+1,D,O),T+=3}c.addGroup(v,T,g===!0?1:2),v+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},In=class s extends et{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var St=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ee:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new _,i=[],r=[],o=[],a=new _,l=new je;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new _)}r[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Pe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Pe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Jn=class extends St{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ee){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vs=class extends Jn{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function po(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var ea=new _,ta=new _,vr=new po,yr=new po,Mr=new po,pn=class extends St{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new _){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ta.subVectors(i[0],i[1]).add(i[0]),c=ta);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ea.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),p<1e-4&&(p=m),y<1e-4&&(y=m),vr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,m,y),yr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,m,y),Mr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,m,y)}else this.curveType==="catmullrom"&&(vr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),yr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Mr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(vr.calc(l),yr.calc(l),Mr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function na(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function tc(s,e){let t=1-s;return t*t*e}function nc(s,e){return 2*(1-s)*s*e}function ic(s,e){return s*s*e}function ui(s,e,t,n){return tc(s,e)+nc(s,t)+ic(s,n)}function sc(s,e){let t=1-s;return t*t*t*e}function rc(s,e){let t=1-s;return 3*t*t*s*e}function oc(s,e){return 3*(1-s)*s*s*e}function ac(s,e){return s*s*s*e}function di(s,e,t,n,i){return sc(s,e)+rc(s,t)+oc(s,n)+ac(s,i)}var Mi=class extends St{constructor(e=new ee,t=new ee,n=new ee,i=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ee){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(di(e,i.x,r.x,o.x,a.x),di(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ys=class extends St{constructor(e=new _,t=new _,n=new _,i=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(di(e,i.x,r.x,o.x,a.x),di(e,i.y,r.y,o.y,a.y),di(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bi=class extends St{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ms=class extends St{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Si=class extends St{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ui(e,i.x,r.x,o.x),ui(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ti=class extends St{constructor(e=new _,t=new _,n=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ui(e,i.x,r.x,o.x),ui(e,i.y,r.y,o.y),ui(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wi=class extends St{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(na(a,l.x,c.x,h.x,u.x),na(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ee().fromArray(i))}return this}},bs=Object.freeze({__proto__:null,ArcCurve:vs,CatmullRomCurve3:pn,CubicBezierCurve:Mi,CubicBezierCurve3:ys,EllipseCurve:Jn,LineCurve:bi,LineCurve3:Ms,QuadraticBezierCurve:Si,QuadraticBezierCurve3:Ti,SplineCurve:wi}),Ss=class extends St{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bs[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new bs[i.type]().fromJSON(i))}return this}},Ln=class extends Ss{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new bi(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Si(this.currentPoint.clone(),new ee(e,t),new ee(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Mi(this.currentPoint.clone(),new ee(e,t),new ee(n,i),new ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new wi(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Jn(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},dt=class extends Ln{constructor(e){super(e),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ln().fromJSON(i))}return this}};function lc(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Ea(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=fc(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ai(r,o,t,a,l,c,0),o}function Ea(s,e,t,n,i){let r;if(i===Tc(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=ia(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=ia(o/n|0,s[o],s[o+1],r);return r&&Kn(r,r.next)&&(Ci(r),r=r.next),r}function Dn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Kn(t,t.next)||Xe(t.prev,t,t.next)===0)){if(Ci(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ai(s,e,t,n,i,r,o){if(!s)return;!o&&r&&_c(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?hc(s,n,i,r):cc(s)){e.push(l.i,s.i,c.i),Ci(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=uc(Dn(s),e),Ai(s,e,t,n,i,r,2)):o===2&&dc(s,e,t,n,i,r):Ai(Dn(s),e,t,n,i,r,1);break}}}function cc(s){let e=s.prev,t=s,n=s.next;if(Xe(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&li(i,a,r,l,o,c,p.x,p.y)&&Xe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function hc(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Xe(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),m=Math.max(a,l,c),y=Math.max(h,u,f),v=Xr(d,p,e,t,n),M=Xr(m,y,e,t,n),x=s.prevZ,g=s.nextZ;for(;x&&x.z>=v&&g&&g.z<=M;){if(x.x>=d&&x.x<=m&&x.y>=p&&x.y<=y&&x!==i&&x!==o&&li(a,h,l,u,c,f,x.x,x.y)&&Xe(x.prev,x,x.next)>=0||(x=x.prevZ,g.x>=d&&g.x<=m&&g.y>=p&&g.y<=y&&g!==i&&g!==o&&li(a,h,l,u,c,f,g.x,g.y)&&Xe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;x&&x.z>=v;){if(x.x>=d&&x.x<=m&&x.y>=p&&x.y<=y&&x!==i&&x!==o&&li(a,h,l,u,c,f,x.x,x.y)&&Xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;g&&g.z<=M;){if(g.x>=d&&g.x<=m&&g.y>=p&&g.y<=y&&g!==i&&g!==o&&li(a,h,l,u,c,f,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function uc(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Kn(n,i)&&Ra(n,t,t.next,i)&&Ei(n,i)&&Ei(i,n)&&(e.push(n.i,t.i,i.i),Ci(t),Ci(t.next),t=s=i),t=t.next}while(t!==s);return Dn(t)}function dc(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mc(o,a)){let l=Pa(o,a);o=Dn(o,o.next),l=Dn(l,l.next),Ai(o,e,t,n,i,r,0),Ai(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function fc(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Ea(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(yc(c))}i.sort(pc);for(let r=0;r<i.length;r++)t=mc(i[r],t);return t}function pc(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function mc(s,e){let t=gc(s,e);if(!t)return e;let n=Pa(t,s);return Dn(n,n.next),Dn(t,t.next)}function gc(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Kn(s,t))return t;do{if(Kn(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ca(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Ei(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&xc(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function xc(s,e){return Xe(s.prev,s,e.prev)<0&&Xe(e.next,s,s.next)<0}function _c(s,e,t,n){let i=s;do i.z===0&&(i.z=Xr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,vc(i)}function vc(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Xr(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function yc(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ca(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function li(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Ca(s,e,t,n,i,r,o,a)}function Mc(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!bc(s,e)&&(Ei(s,e)&&Ei(e,s)&&Sc(s,e)&&(Xe(s.prev,s,e.prev)||Xe(s,e.prev,e))||Kn(s,e)&&Xe(s.prev,s,s.next)>0&&Xe(e.prev,e,e.next)>0)}function Xe(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Kn(s,e){return s.x===e.x&&s.y===e.y}function Ra(s,e,t,n){let i=is(Xe(s,e,t)),r=is(Xe(s,e,n)),o=is(Xe(t,n,s)),a=is(Xe(t,n,e));return!!(i!==r&&o!==a||i===0&&ns(s,t,e)||r===0&&ns(s,n,e)||o===0&&ns(t,s,n)||a===0&&ns(t,e,n))}function ns(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function is(s){return s>0?1:s<0?-1:0}function bc(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ra(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ei(s,e){return Xe(s.prev,s,s.next)<0?Xe(s,e,s.next)>=0&&Xe(s,s.prev,e)>=0:Xe(s,e,s.prev)<0||Xe(s,s.next,e)<0}function Sc(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Pa(s,e){let t=qr(s.i,s.x,s.y),n=qr(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ia(s,e,t,n){let i=qr(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ci(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qr(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tc(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Yr=class{static triangulate(e,t,n=2){return lc(e,t,n)}},zt=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];sa(e),ra(n,e);let o=e.length;t.forEach(sa);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,ra(n,t[l]);let a=Yr.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function sa(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ra(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Jt=class s extends Oe{constructor(e=new dt([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:wc,x,g=!1,b,w,E,T;if(v){x=v.getSpacedPoints(h),g=!0,f=!1;let I=v.isCatmullRomCurve3?v.closed:!1;b=v.computeFrenetFrames(h,I),w=new _,E=new _,T=new _}f||(y=0,d=0,p=0,m=0);let P=a.extractPoints(c),S=P.shape,L=P.holes;if(!zt.isClockWise(S)){S=S.reverse();for(let I=0,X=L.length;I<X;I++){let Y=L[I];zt.isClockWise(Y)&&(L[I]=Y.reverse())}}function O(I){let Y=10000000000000001e-36,K=I[0];for(let ne=1;ne<=I.length;ne++){let ue=ne%I.length,le=I[ue],ge=le.x-K.x,de=le.y-K.y,U=ge*ge+de*de,A=Math.max(Math.abs(le.x),Math.abs(le.y),Math.abs(K.x),Math.abs(K.y)),k=Y*A*A;if(U<=k){I.splice(ue,1),ne--;continue}K=le}}O(S),L.forEach(O);let D=L.length,W=S;for(let I=0;I<D;I++){let X=L[I];S=S.concat(X)}function B(I,X,Y){return X||We("ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(X,Y)}let $=S.length;function R(I,X,Y){let K,ne,ue,le=I.x-X.x,ge=I.y-X.y,de=Y.x-I.x,U=Y.y-I.y,A=le*le+ge*ge,k=le*U-ge*de;if(Math.abs(k)>Number.EPSILON){let Q=Math.sqrt(A),N=Math.sqrt(de*de+U*U),re=X.x-ge/Q,Ee=X.y+le/Q,ce=Y.x-U/N,_e=Y.y+de/N,be=((ce-re)*U-(_e-Ee)*de)/(le*U-ge*de);K=re+le*be-I.x,ne=Ee+ge*be-I.y;let Ne=K*K+ne*ne;if(Ne<=2)return new ee(K,ne);ue=Math.sqrt(Ne/2)}else{let Q=!1;le>Number.EPSILON?de>Number.EPSILON&&(Q=!0):le<-Number.EPSILON?de<-Number.EPSILON&&(Q=!0):Math.sign(ge)===Math.sign(U)&&(Q=!0),Q?(K=-ge,ne=le,ue=Math.sqrt(A)):(K=le,ne=ge,ue=Math.sqrt(A/2))}return new ee(K/ue,ne/ue)}let z=[];for(let I=0,X=W.length,Y=X-1,K=I+1;I<X;I++,Y++,K++)Y===X&&(Y=0),K===X&&(K=0),z[I]=R(W[I],W[Y],W[K]);let F=[],V,fe=z.concat();for(let I=0,X=D;I<X;I++){let Y=L[I];V=[];for(let K=0,ne=Y.length,ue=ne-1,le=K+1;K<ne;K++,ue++,le++)ue===ne&&(ue=0),le===ne&&(le=0),V[K]=R(Y[K],Y[ue],Y[le]);F.push(V),fe=fe.concat(V)}let j;if(y===0)j=zt.triangulateShape(W,L);else{let I=[],X=[];for(let Y=0;Y<y;Y++){let K=Y/y,ne=d*Math.cos(K*Math.PI/2),ue=p*Math.sin(K*Math.PI/2)+m;for(let le=0,ge=W.length;le<ge;le++){let de=B(W[le],z[le],ue);Z(de.x,de.y,-ne),K===0&&I.push(de)}for(let le=0,ge=D;le<ge;le++){let de=L[le];V=F[le];let U=[];for(let A=0,k=de.length;A<k;A++){let Q=B(de[A],V[A],ue);Z(Q.x,Q.y,-ne),K===0&&U.push(Q)}K===0&&X.push(U)}}j=zt.triangulateShape(I,X)}let H=j.length,q=p+m;for(let I=0;I<$;I++){let X=f?B(S[I],fe[I],q):S[I];g?(E.copy(b.normals[0]).multiplyScalar(X.x),w.copy(b.binormals[0]).multiplyScalar(X.y),T.copy(x[0]).add(E).add(w),Z(T.x,T.y,T.z)):Z(X.x,X.y,0)}for(let I=1;I<=h;I++)for(let X=0;X<$;X++){let Y=f?B(S[X],fe[X],q):S[X];g?(E.copy(b.normals[I]).multiplyScalar(Y.x),w.copy(b.binormals[I]).multiplyScalar(Y.y),T.copy(x[I]).add(E).add(w),Z(T.x,T.y,T.z)):Z(Y.x,Y.y,u/h*I)}for(let I=y-1;I>=0;I--){let X=I/y,Y=d*Math.cos(X*Math.PI/2),K=p*Math.sin(X*Math.PI/2)+m;for(let ne=0,ue=W.length;ne<ue;ne++){let le=B(W[ne],z[ne],K);Z(le.x,le.y,u+Y)}for(let ne=0,ue=L.length;ne<ue;ne++){let le=L[ne];V=F[ne];for(let ge=0,de=le.length;ge<de;ge++){let U=B(le[ge],V[ge],K);g?Z(U.x,U.y+x[h-1].y,x[h-1].x+Y):Z(U.x,U.y,u+Y)}}}ie(),pe();function ie(){let I=i.length/3;if(f){let X=0,Y=$*X;for(let K=0;K<H;K++){let ne=j[K];Ae(ne[2]+Y,ne[1]+Y,ne[0]+Y)}X=h+y*2,Y=$*X;for(let K=0;K<H;K++){let ne=j[K];Ae(ne[0]+Y,ne[1]+Y,ne[2]+Y)}}else{for(let X=0;X<H;X++){let Y=j[X];Ae(Y[2],Y[1],Y[0])}for(let X=0;X<H;X++){let Y=j[X];Ae(Y[0]+$*h,Y[1]+$*h,Y[2]+$*h)}}n.addGroup(I,i.length/3-I,0)}function pe(){let I=i.length/3,X=0;se(W,X),X+=W.length;for(let Y=0,K=L.length;Y<K;Y++){let ne=L[Y];se(ne,X),X+=ne.length}n.addGroup(I,i.length/3-I,1)}function se(I,X){let Y=I.length;for(;--Y>=0;){let K=Y,ne=Y-1;ne<0&&(ne=I.length-1);for(let ue=0,le=h+y*2;ue<le;ue++){let ge=$*ue,de=$*(ue+1),U=X+K+ge,A=X+ne+ge,k=X+ne+de,Q=X+K+de;Me(U,A,k,Q)}}}function Z(I,X,Y){l.push(I),l.push(X),l.push(Y)}function Ae(I,X,Y){ae(I),ae(X),ae(Y);let K=i.length/3,ne=M.generateTopUV(n,i,K-3,K-2,K-1);me(ne[0]),me(ne[1]),me(ne[2])}function Me(I,X,Y,K){ae(I),ae(X),ae(K),ae(X),ae(Y),ae(K);let ne=i.length/3,ue=M.generateSideWallUV(n,i,ne-6,ne-3,ne-2,ne-1);me(ue[0]),me(ue[1]),me(ue[3]),me(ue[1]),me(ue[2]),me(ue[3])}function ae(I){i.push(l[I*3+0]),i.push(l[I*3+1]),i.push(l[I*3+2])}function me(I){r.push(I.x),r.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ac(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new bs[i.type]().fromJSON(i)),new s(n,e.options)}},wc={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ee(r,o),new ee(a,l),new ee(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],m=e[r*3],y=e[r*3+1],v=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ee(o,1-l),new ee(c,1-u),new ee(f,1-p),new ee(m,1-v)]:[new ee(a,1-l),new ee(h,1-u),new ee(d,1-p),new ee(y,1-v)]}};function Ac(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Un=class s extends Oe{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Pe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new _,f=new ee,d=new _,p=new _,m=new _,y=0,v=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:y=e[M+1].x-e[M].x,v=e[M+1].y-e[M].y,d.x=v*1,d.y=-y,d.z=v*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:y=e[M+1].x-e[M].x,v=e[M+1].y-e[M].y,d.x=v*1,d.y=-y,d.z=v*0,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(p)}for(let M=0;M<=t;M++){let x=n+M*h*i,g=Math.sin(x),b=Math.cos(x);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*g,u.y=e[w].y,u.z=e[w].x*b,o.push(u.x,u.y,u.z),f.x=M/t,f.y=w/(e.length-1),a.push(f.x,f.y);let E=l[3*w+0]*g,T=l[3*w+1],P=l[3*w+0]*b;c.push(E,T,P)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){let g=x+M*e.length,b=g,w=g+e.length,E=g+e.length+1,T=g+1;r.push(b,w,T),r.push(E,T,w)}this.setIndex(r),this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(a,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var ze=class s extends Oe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],m=[],y=[];for(let v=0;v<h;v++){let M=v*f-o;for(let x=0;x<c;x++){let g=x*u-r;p.push(g,-M,0),m.push(0,0,1),y.push(x/a),y.push(1-v/l)}}for(let v=0;v<l;v++)for(let M=0;M<a;M++){let x=M+c*v,g=M+c*(v+1),b=M+1+c*(v+1),w=M+1+c*v;d.push(x,g,w),d.push(g,b,w)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(m,3)),this.setAttribute("uv",new Ce(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Kt=class s extends Oe{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new _,p=new ee;for(let m=0;m<=i;m++){for(let y=0;y<=n;y++){let v=r+y/n*o;d.x=u*Math.cos(v),d.y=u*Math.sin(v),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let m=0;m<i;m++){let y=m*(n+1);for(let v=0;v<n;v++){let M=v+y,x=M,g=M+n+1,b=M+n+2,w=M+1;a.push(x,g,w),a.push(g,b,w)}}this.setIndex(a),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Qt=class s extends Oe{constructor(e=new dt([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;zt.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,v=p.length;y<v;y++){let M=p[y];zt.isClockWise(M)===!0&&(p[y]=M.reverse())}let m=zt.triangulateShape(d,p);for(let y=0,v=p.length;y<v;y++){let M=p[y];d=d.concat(M)}for(let y=0,v=d.length;y<v;y++){let M=d[y];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let y=0,v=m.length;y<v;y++){let M=m[y],x=M[0]+u,g=M[1]+u,b=M[2]+u;n.push(x,g,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ec(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function Ec(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var nt=class s extends Oe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new _,f=new _,d=[],p=[],m=[],y=[];for(let v=0;v<=n;v++){let M=[],x=v/n,g=o+x*a,b=e*Math.cos(g),w=Math.sqrt(e*e-b*b),E=0;v===0&&o===0?E=.5/t:v===n&&l===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){let P=T/t,S=i+P*r;u.x=-w*Math.cos(S),u.y=b,u.z=w*Math.sin(S),p.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),y.push(P+E,1-x),M.push(c++)}h.push(M)}for(let v=0;v<n;v++)for(let M=0;M<t;M++){let x=h[v][M+1],g=h[v][M],b=h[v+1][M],w=h[v+1][M+1];(v!==0||o>0)&&d.push(x,g,w),(v!==n-1||l<Math.PI)&&d.push(g,b,w)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(m,3)),this.setAttribute("uv",new Ce(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tt=class s extends Oe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new _,d=new _,p=new _;for(let m=0;m<=n;m++){let y=o+m/n*a;for(let v=0;v<=i;v++){let M=v/i*r;d.x=(e+t*Math.cos(y))*Math.cos(M),d.y=(e+t*Math.cos(y))*Math.sin(M),d.z=t*Math.sin(y),c.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(v/i),u.push(m/n)}}for(let m=1;m<=n;m++)for(let y=1;y<=i;y++){let v=(i+1)*m+y-1,M=(i+1)*(m-1)+y-1,x=(i+1)*(m-1)+y,g=(i+1)*m+y;l.push(v,M,g),l.push(M,x,g)}this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Qn=class s extends Oe{constructor(e=new Ti(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new _,l=new _,c=new ee,h=new _,u=[],f=[],d=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(d,2));function m(){for(let x=0;x<t;x++)y(x);y(r===!1?t:0),M(),v()}function y(x){h=e.getPointAt(x/t,h);let g=o.normals[x],b=o.binormals[x];for(let w=0;w<=i;w++){let E=w/i*Math.PI*2,T=Math.sin(E),P=-Math.cos(E);l.x=P*g.x+T*b.x,l.y=P*g.y+T*b.y,l.z=P*g.z+T*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function v(){for(let x=1;x<=t;x++)for(let g=1;g<=i;g++){let b=(i+1)*(x-1)+(g-1),w=(i+1)*x+(g-1),E=(i+1)*x+g,T=(i+1)*(x-1)+g;p.push(b,w,T),p.push(w,E,T)}}function M(){for(let x=0;x<=t;x++)for(let g=0;g<=i;g++)c.x=x/t,c.y=g/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new bs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ia(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(oa(i))i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(oa(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function ft(s){let e={};for(let t=0;t<s.length;t++){let n=Ia(s[t]);for(let i in n)e[i]=n[i]}return e}function oa(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}var Fe=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ss(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var mn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ts=class extends mn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fr,endingEnd:Fr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Or:r=e,a=2*t-n;break;case Br:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Or:o=e,l=2*n-t;break;case Br:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),m=p*p,y=m*p,v=-f*y+2*f*m-f*p,M=(1+f)*y+(-1.5-2*f)*m+(-.5+f)*p+1,x=(-1-d)*y+(1.5+d)*m+.5*p,g=d*y-d*m;for(let b=0;b!==a;++b)r[b]=v*o[h+b]+M*o[c+b]+x*o[l+b]+g*o[u+b];return r}},ws=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},As=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Es=class extends mn{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),m=1-p;for(let y=0;y!==a;++y)r[y]=o[c+y]*m+o[l+y]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let m=o[c+p],y=o[l+p],v=d*f+p*2,M=u[v],x=u[v+1],g=e*f+p*2,b=h[g],w=h[g+1],E=(n-t)/(i-t),T,P,S,L,C;for(let O=0;O<8;O++){T=E*E,P=T*E,S=1-E,L=S*S,C=L*S;let W=C*t+3*L*E*M+3*S*T*b+P*i-n;if(Math.abs(W)<1e-10)break;let B=3*L*(M-t)+6*S*E*(b-M)+3*T*(i-b);if(Math.abs(B)<1e-10)break;E=E-W/B,E=Math.max(0,Math.min(1,E))}r[p]=C*m+3*L*E*x+3*S*T*w+P*y}return r}},wt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new As(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ws(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ts(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Es(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case mi:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case as:t=this.InterpolantFactoryMethodSmooth;break;case Nr:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mi;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return as;case this.InterpolantFactoryMethodBezier:return Nr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&yl(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===as,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let m=t[u+p];if(m!==t[f+p]||m!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};wt.prototype.ValueTypeName="";wt.prototype.TimeBufferType=Float32Array;wt.prototype.ValueBufferType=Float32Array;wt.prototype.DefaultInterpolation=hs;var gn=class extends wt{constructor(e,t,n){super(e,t,n)}};gn.prototype.ValueTypeName="bool";gn.prototype.ValueBufferType=Array;gn.prototype.DefaultInterpolation=mi;gn.prototype.InterpolantFactoryMethodLinear=void 0;gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends wt{constructor(e,t,n,i){super(e,t,n,i)}};Cs.prototype.ValueTypeName="color";var Rs=class extends wt{constructor(e,t,n,i){super(e,t,n,i)}};Rs.prototype.ValueTypeName="number";var Ps=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ie.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ri=class extends wt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ps(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var xn=class extends wt{constructor(e,t,n){super(e,t,n)}};xn.prototype.ValueTypeName="string";xn.prototype.ValueBufferType=Array;xn.prototype.DefaultInterpolation=mi;xn.prototype.InterpolantFactoryMethodLinear=void 0;xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends wt{constructor(e,t,n,i){super(e,t,n,i)}};Is.prototype.ValueTypeName="vector";var Ls=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},La=new Ls,Ds=class{constructor(e){this.manager=e!==void 0?e:La,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var br=new je,aa=new _,la=new _,$r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=ho,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(aa),la.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(la),t.updateMatrixWorld(),br.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(br,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===gi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(br)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rs=new _,os=new Ie,Bt=new _,Ns=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rs,os,Bt),Bt.x===1&&Bt.y===1&&Bt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rs,os,Bt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(rs,os,Bt),Bt.x===1&&Bt.y===1&&Bt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rs,os,Bt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hn=new _,ca=new ee,ha=new ee,Fs=class extends Ns{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ci*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xi*2*Math.atan(Math.tan(ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hn.x,hn.y).multiplyScalar(-e/hn.z),hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hn.x,hn.y).multiplyScalar(-e/hn.z)}getViewSize(e,t){return this.getViewBounds(e,ca,ha),t.subVectors(ha,ca)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ci*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Zr=class extends $r{constructor(){super(new Fs(90,1,.5,500)),this.isPointLightShadow=!0}},Pi=class extends Us{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Zr}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var mo="\\[\\]\\.:\\/",Cc=new RegExp("["+mo+"]","g"),go="[^"+mo+"]",Rc="[^"+mo.replace("\\.","")+"]",Pc=/((?:WC+[\/:])*)/.source.replace("WC",go),Ic=/(WCOD+)?/.source.replace("WCOD",Rc),Lc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",go),Dc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",go),Uc=new RegExp("^"+Pc+Ic+Lc+Dc+"$"),Nc=["material","materials","bones","map"],Jr=class{constructor(e,t,n){let i=n||He.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},He=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cc,"")}static parseTrackName(e){let t=Uc.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Nc.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=Jr;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ud=new Float32Array(1);var ua=new je,jt=class{constructor(e,t,n=0,i=1/0){this.ray=new Ze(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _i,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ua.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ua),this}intersectObject(e,t=!0,n=[]){return Kr(e,this,n,t),n.sort(da),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Kr(e[i],this,n,t);return n.sort(da),n}};function da(s,e){return s.distance-e.distance}function Kr(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Kr(r[o],e,t,!0)}}var Mo=class Mo{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Mo.prototype.isMatrix2=!0;var Qr=Mo;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var Fc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oc=`#ifdef USE_ALPHAHASH
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
#endif`,Bc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gc=`#ifdef USE_AOMAP
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
#endif`,Hc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wc=`#ifdef USE_BATCHING
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
#endif`,Xc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$c=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zc=`#ifdef USE_IRIDESCENCE
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
#endif`,Jc=`#ifdef USE_BUMPMAP
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
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,th=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ih=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rh=`#define PI 3.141592653589793
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
} // validated`,oh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ah=`vec3 transformedNormal = objectNormal;
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
#endif`,lh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_h=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sh=`#ifdef USE_GRADIENTMAP
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
}`,Th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Rh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ph=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dh=`PhysicalMaterial material;
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
#endif`,Uh=`uniform sampler2D dfgLUT;
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
}`,Nh=`
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
#endif`,Fh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Oh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qh=`#if defined( USE_POINTS_UV )
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
#endif`,Yh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qh=`#ifdef USE_MORPHTARGETS
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
#endif`,jh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ru=`#ifdef USE_NORMALMAP
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
#endif`,ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,du=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mu=`float getShadowMask() {
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
}`,bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Su=`#ifdef USE_SKINNING
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
#endif`,Tu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wu=`#ifdef USE_SKINNING
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
#endif`,Au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ru=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pu=`#ifdef USE_TRANSMISSION
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
#endif`,Iu=`#ifdef USE_TRANSMISSION
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
#endif`,Lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ou=`uniform sampler2D t2D;
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
}`,Bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gu=`#include <common>
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
}`,Hu=`#if DEPTH_PACKING == 3200
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
}`,Wu=`#define DISTANCE
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
}`,Xu=`#define DISTANCE
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
}`,qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$u=`uniform float scale;
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
}`,Zu=`uniform vec3 diffuse;
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
}`,Ju=`#include <common>
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
}`,Ku=`uniform vec3 diffuse;
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
}`,Qu=`#define LAMBERT
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
}`,ju=`#define LAMBERT
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
}`,ed=`#define MATCAP
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
}`,td=`#define MATCAP
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
}`,nd=`#define NORMAL
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
}`,id=`#define NORMAL
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
}`,sd=`#define PHONG
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
}`,rd=`#define PHONG
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
}`,od=`#define STANDARD
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
}`,ad=`#define STANDARD
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
}`,ld=`#define TOON
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
}`,cd=`#define TOON
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
}`,hd=`uniform float size;
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
}`,ud=`uniform vec3 diffuse;
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
}`,dd=`#include <common>
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
}`,fd=`uniform vec3 color;
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
}`,pd=`uniform float rotation;
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
}`,md=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Fc,alphahash_pars_fragment:Oc,alphamap_fragment:Bc,alphamap_pars_fragment:zc,alphatest_fragment:kc,alphatest_pars_fragment:Vc,aomap_fragment:Gc,aomap_pars_fragment:Hc,batching_pars_vertex:Wc,batching_vertex:Xc,begin_vertex:qc,beginnormal_vertex:Yc,bsdfs:$c,iridescence_fragment:Zc,bumpmap_pars_fragment:Jc,clipping_planes_fragment:Kc,clipping_planes_pars_fragment:Qc,clipping_planes_pars_vertex:jc,clipping_planes_vertex:eh,color_fragment:th,color_pars_fragment:nh,color_pars_vertex:ih,color_vertex:sh,common:rh,cube_uv_reflection_fragment:oh,defaultnormal_vertex:ah,displacementmap_pars_vertex:lh,displacementmap_vertex:ch,emissivemap_fragment:hh,emissivemap_pars_fragment:uh,colorspace_fragment:dh,colorspace_pars_fragment:fh,envmap_fragment:ph,envmap_common_pars_fragment:mh,envmap_pars_fragment:gh,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Ch,envmap_vertex:_h,fog_vertex:vh,fog_pars_vertex:yh,fog_fragment:Mh,fog_pars_fragment:bh,gradientmap_pars_fragment:Sh,lightmap_pars_fragment:Th,lights_lambert_fragment:wh,lights_lambert_pars_fragment:Ah,lights_pars_begin:Eh,lights_toon_fragment:Rh,lights_toon_pars_fragment:Ph,lights_phong_fragment:Ih,lights_phong_pars_fragment:Lh,lights_physical_fragment:Dh,lights_physical_pars_fragment:Uh,lights_fragment_begin:Nh,lights_fragment_maps:Fh,lights_fragment_end:Oh,lightprobes_pars_fragment:Bh,logdepthbuf_fragment:zh,logdepthbuf_pars_fragment:kh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Gh,map_fragment:Hh,map_pars_fragment:Wh,map_particle_fragment:Xh,map_particle_pars_fragment:qh,metalnessmap_fragment:Yh,metalnessmap_pars_fragment:$h,morphinstance_vertex:Zh,morphcolor_vertex:Jh,morphnormal_vertex:Kh,morphtarget_pars_vertex:Qh,morphtarget_vertex:jh,normal_fragment_begin:eu,normal_fragment_maps:tu,normal_pars_fragment:nu,normal_pars_vertex:iu,normal_vertex:su,normalmap_pars_fragment:ru,clearcoat_normal_fragment_begin:ou,clearcoat_normal_fragment_maps:au,clearcoat_pars_fragment:lu,iridescence_pars_fragment:cu,opaque_fragment:hu,packing:uu,premultiplied_alpha_fragment:du,project_vertex:fu,dithering_fragment:pu,dithering_pars_fragment:mu,roughnessmap_fragment:gu,roughnessmap_pars_fragment:xu,shadowmap_pars_fragment:_u,shadowmap_pars_vertex:vu,shadowmap_vertex:yu,shadowmask_pars_fragment:Mu,skinbase_vertex:bu,skinning_pars_vertex:Su,skinning_vertex:Tu,skinnormal_vertex:wu,specularmap_fragment:Au,specularmap_pars_fragment:Eu,tonemapping_fragment:Cu,tonemapping_pars_fragment:Ru,transmission_fragment:Pu,transmission_pars_fragment:Iu,uv_pars_fragment:Lu,uv_pars_vertex:Du,uv_vertex:Uu,worldpos_vertex:Nu,background_vert:Fu,background_frag:Ou,backgroundCube_vert:Bu,backgroundCube_frag:zu,cube_vert:ku,cube_frag:Vu,depth_vert:Gu,depth_frag:Hu,distance_vert:Wu,distance_frag:Xu,equirect_vert:qu,equirect_frag:Yu,linedashed_vert:$u,linedashed_frag:Zu,meshbasic_vert:Ju,meshbasic_frag:Ku,meshlambert_vert:Qu,meshlambert_frag:ju,meshmatcap_vert:ed,meshmatcap_frag:td,meshnormal_vert:nd,meshnormal_frag:id,meshphong_vert:sd,meshphong_frag:rd,meshphysical_vert:od,meshphysical_frag:ad,meshtoon_vert:ld,meshtoon_frag:cd,points_vert:hd,points_frag:ud,shadow_vert:dd,shadow_frag:fd,sprite_vert:pd,sprite_frag:md},he={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},envMapRotation:{value:new Re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new _},probesMax:{value:new _},probesResolution:{value:new _}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Da={basic:{uniforms:ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:ft([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:ft([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:ft([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:ft([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:ft([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:ft([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Re}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:ft([he.common,he.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:ft([he.lights,he.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Da.physical={uniforms:ft([Da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var gd=new Re;gd.set(-1,0,0,0,1,0,0,0,1);var ix={[to]:"LINEAR_TONE_MAPPING",[no]:"REINHARD_TONE_MAPPING",[io]:"CINEON_TONE_MAPPING",[so]:"ACES_FILMIC_TONE_MAPPING",[oo]:"AGX_TONE_MAPPING",[ao]:"NEUTRAL_TONE_MAPPING",[ro]:"CUSTOM_TONE_MAPPING"};var sx=new Float32Array(16),rx=new Float32Array(9),ox=new Float32Array(4);var ax={[to]:"Linear",[no]:"Reinhard",[io]:"Cineon",[so]:"ACESFilmic",[oo]:"AgX",[ao]:"Neutral",[ro]:"Custom"};var lx={[fa]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};var cx={[_a]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};var hx={[co]:"ENVMAP_MODE_REFRACTION"};var ux={[eo]:"ENVMAP_BLENDING_MULTIPLY",[ga]:"ENVMAP_BLENDING_MIX",[xa]:"ENVMAP_BLENDING_ADD"};var xd=new Re;xd.set(-1,0,0,0,1,0,0,0,1);var dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var G={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function Bs(s,e,t,n,i,r=16){r=Math.min(r,n/2,i/2),s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.quadraticCurveTo(e+n,t,e+n,t+r),s.lineTo(e+n,t+i-r),s.quadraticCurveTo(e+n,t+i,e+n-r,t+i),s.lineTo(e+r,t+i),s.quadraticCurveTo(e,t+i,e,t+i-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath()}function Je(s,e,t,n,i,{top:r="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=s.createLinearGradient(e,t,e,t+i);c.addColorStop(0,r),c.addColorStop(1,o),s.fillStyle=c,Bs(s,e,t,n,i,l),s.fill(),s.strokeStyle=a,s.lineWidth=1.5,s.stroke()}function _t(s,e,t){let n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),s.fillStyle=n,s.fillRect(0,0,e,t),s.save(),s.globalAlpha=.13,s.strokeStyle="#79b3d1",s.lineWidth=1;for(let i=0;i<8;i++)s.beginPath(),s.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),s.stroke();s.restore(),s.fillStyle=G.gold,s.fillRect(32,0,96,4)}function te(s,e,t,n,i=28,r=G.ink,o="600",a){s.font=`${o} ${i}px Arial`,s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Number.isFinite(a)?s.fillText(e,t,n,a):s.fillText(e,t,n)}function en(s,e,t,n,i,r=G.gold){if(s.save(),s.translate(t,n),s.scale(i/48,i/48),s.lineWidth=2.8,s.lineCap="round",s.lineJoin="round",s.strokeStyle=r,s.fillStyle=r,e==="ball")s.beginPath(),s.arc(0,0,18,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-18,0),s.lineTo(18,0),s.stroke(),s.fillStyle="#183a51",s.beginPath(),s.arc(0,0,6,0,Math.PI*2),s.fill(),s.stroke();else if(e==="puff"){s.beginPath(),s.arc(0,3,16,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-14,-5),s.lineTo(-15,-19),s.lineTo(-5,-11),s.moveTo(14,-5),s.lineTo(15,-19),s.lineTo(5,-11),s.stroke(),s.beginPath(),s.arc(0,-8,5,0,Math.PI*1.5),s.stroke();for(let o of[-6,6])s.beginPath(),s.arc(o,3,2,0,Math.PI*2),s.fill();s.beginPath(),s.arc(0,7,5,.2,Math.PI-.2),s.stroke()}else if(e==="book")Bs(s,-20,-15,40,32,4),s.stroke(),s.beginPath(),s.moveTo(0,-15),s.lineTo(0,17),s.moveTo(-14,-6),s.lineTo(-5,-6),s.moveTo(5,-6),s.lineTo(14,-6),s.stroke();else if(e==="trophy")s.beginPath(),s.moveTo(-13,-17),s.lineTo(13,-17),s.lineTo(9,-3),s.quadraticCurveTo(0,8,-9,-3),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(0,5),s.lineTo(0,16),s.moveTo(-10,18),s.lineTo(10,18),s.moveTo(-13,-13),s.quadraticCurveTo(-25,-16,-19,-5),s.lineTo(-9,0),s.moveTo(13,-13),s.quadraticCurveTo(25,-16,19,-5),s.lineTo(9,0),s.stroke();else if(e==="golf")s.beginPath(),s.ellipse(0,13,18,6,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-3,13),s.lineTo(-3,-20),s.lineTo(15,-14),s.lineTo(-3,-7),s.stroke(),s.beginPath(),s.arc(10,8,3,0,Math.PI*2),s.fill();else if(e==="target"){for(let o of[19,12,4])s.beginPath(),s.arc(0,0,o,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(0,0),s.lineTo(20,-20),s.moveTo(12,-20),s.lineTo(20,-20),s.lineTo(20,-12),s.stroke()}else s.beginPath(),s.moveTo(-6,-12),s.lineTo(12,0),s.lineTo(-6,12),s.closePath(),s.fill();s.restore()}function Ua(s,e,t,n,i,r){let o=e==="Arcade wall of fame"?{title:"Arcade wall of fame",sub:"Personal bests \xB7 medals \xB7 trophy shelf",icon:"trophy",accent:G.gold}:e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:G.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:G.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:G.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:G.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:G.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:G.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:G.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:G.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:G.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:G.pink}:null;if(o)Je(s,t,n,i,72,{top:r?"#365c70":"#21465e",bottom:r?"#25465a":"#19364b",stroke:r?o.accent:"#3b5c71"}),s.fillStyle=o.accent,Bs(s,t+1,n+15,4,42,2),s.fill(),en(s,o.icon,t+41,n+36,42,o.accent),te(s,o.title,t+82,n+31,i<600?26:29,G.ink,"700"),te(s,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,G.muted,"400",i-125),te(s,"\u203A",t+i-35,n+47,42,r?o.accent:G.muted,"400");else{let a=e==="Resume";Je(s,t,n,i,72,{top:a?r?"#fff0c2":"#f8df9e":r?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":r?G.gold:"#496379"}),a&&en(s,"play",t+33,n+36,25,"#173247"),te(s,e,t+(a?60:24),n+46,28,a?"#122c40":G.ink,"700")}}function Na(s,e){_t(s,1024,768),te(s,"TF JONES  /  PLAY IN THE YARD",44,37,19,G.blue,"700"),te(s,"Mollie\u2019s adventures",44,93,48,G.ink,"700"),te(s,"Point with your right hand, then pull the trigger.",44,132,24,G.muted,"400"),Je(s,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),te(s,e,60,172,23,G.mint,"500",900)}function bo(s,e,t,n,i){Je(s,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),te(s,e,n+9,i,21,G.gold,"700"),te(s,t,n+45,i,21,G.muted,"400")}function Fa(s){bo(s,"Y","Games menu",44,663),bo(s,"B","Back",325,663),bo(s,"A","Replay round",548,663),s.strokeStyle="#355168",s.beginPath(),s.moveTo(44,692),s.lineTo(980,692),s.stroke(),te(s,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,G.blue,"700"),te(s,"Right grip to teleport",704,731,21,G.muted,"400")}function Oa(s,e){s.clearRect(0,0,768,192),Je(s,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),s.fillStyle=G.gold,Bs(s,23,27,5,138,2),s.fill(),s.font="600 32px Arial";let t=[],n="";for(let r of e.split(/\s+/)){let o=n?n+" "+r:r;s.measureText(o).width>660&&n?(t.push(n),n=r):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((r,o)=>te(s,r,47,i+o*42,32,G.ink,"600"))}function Ba(s,{total:e,throws:t,best:n,last:i}){_t(s,1024,640),en(s,"target",72,66,55,G.mint),te(s,"STAFF-ROOM DARTS",119,79,40,G.ink,"700"),te(s,"NINE DART CHALLENGE",39,136,24,G.muted,"700"),te(s,String(e),36,281,142,G.gold,"700"),te(s,"POINTS",280,277,32,G.muted,"700"),Je(s,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),te(s,"PERSONAL BEST",721,203,24,G.muted,"600"),te(s,String(n),721,264,52,G.mint,"700");for(let r=0;r<9;r++){let o=r<t;Je(s,40+r*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),te(s,String(r+1),72+r*104,358,28,o?"#132e41":G.muted,"700")}Je(s,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),te(s,i,61,458,36,G.ink,"600",890),te(s,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,G.mint,"600"),te(s,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,G.muted,"400")}var za=new Map;function It(s,e,t="target",n=G.gold,i=1.7){let r=[s,e,t,n].join("|"),o=za.get(r);if(!o){let h=document.createElement("canvas");h.width=1024,h.height=256;let u=h.getContext("2d");u.fillStyle="#0a1b2c",u.fillRect(0,0,1024,256),Je(u,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),u.fillStyle=n,u.fillRect(32,36,5,182),en(u,t,110,128,88,n),te(u,s,192,123,58,G.ink,"700",790),te(u,e,194,186,26,n,"600",775),o=new Ve(h),o.colorSpace=De,za.set(r,o)}let a=new Se;a.name=s+" \xB7 activity sign";let l=new ve(new ze(i,i/4),new Te({map:o}));a.add(l);let c=new ve(new ye(i+.055,i/4+.055,.04),new Fe({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var Ii;function zs(){if(!Ii){let s=document.createElement("canvas");s.width=512,s.height=1024;let e=s.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let r=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(r,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(r,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=r+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(r,Math.floor((l+n())*341),o,1)}Ii=new Ve(s),Ii.colorSpace=De,Ii.anisotropy=4}return new Fe({map:Ii,color:16777215,roughness:.28,metalness:.04})}var So;function jn(s=.5,e=.32){if(!So){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,64);r.addColorStop(0,"rgba(4,12,20,.48)"),r.addColorStop(.55,"rgba(4,12,20,.2)"),r.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),So=new Ve(n)}let t=new ve(new ze(s,e),new Te({map:So,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function _n(s=1.4){let e=new Se;e.name="Warm arcade light fitting";let t=new ve(new ye(s,.09,.17),new Fe({color:2504518,roughness:.6}));e.add(t);let n=new ve(new ze(s-.1,.115),new Te({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function ka(s){let e=new Pi(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,s.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new _(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new _(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var st={left:-1.03,right:1.03,front:.08,back:6.95},Li=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function vn(s,e,t){let n=.033,i=0,r=0;for(let o of t.ramps){let a=s-o.x,l=e-o.z,c=o.w/2,h=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=h)continue;let u=Math.min(.16,c*.3),f=Math.min(1,(c-Math.abs(a))/u),d=1-Math.abs(l)/h,p=o.h*f*d;.033+p>n&&(n=.033+p,i=f<1?-Math.sign(a)*o.h*d/u:0,r=-Math.sign(l||1e-4)*o.h*f/h)}return{height:n,gx:i,gz:r}}function _d(s,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,s.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,s.z)),i=s.x-t,r=s.z-n,o=Math.hypot(i,r);if(o>=.038)return;if(o<1e-9){let l=[[s.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-s.x,1,0],[s.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-s.z,0,1]].sort((c,h)=>c[0]-h[0]);[,i,r]=l[0],s.x+=i*(l[0][0]+.038+1e-4),s.z+=r*(l[0][0]+.038+1e-4)}else i/=o,r/=o,s.x+=i*(.038-o+1e-4),s.z+=r*(.038-o+1e-4);let a=s.vx*i+s.vz*r;a<0&&(s.vx-=1.68*a*i,s.vz-=1.68*a*r)}function vd(s,e,t,n,i,r){let o=i-t,a=r-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((s-t)*o+(e-n)*a)/l)):0;return Math.hypot(s-t-o*c,e-n-a*c)}function Ga(s,e,t){if(s.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),r=n/i;for(let o=0;o<i;o++){let a=s.x,l=s.z,c=vn(s.x,s.z,e);s.vx-=7*c.gx*r,s.vz-=7*c.gz*r;let h=Math.hypot(s.vx,s.vz),u=Math.max(0,h-.4*r);h&&(s.vx*=u/h,s.vz*=u/h),s.x+=s.vx*r,s.z+=s.vz*r;for(let[f,d,p,m]of[["x","vx",st.left+.038,st.right-.038],["z","vz",st.front+.038,st.back-.038]])s[f]<p&&(s[f]=p,s[d]<0&&(s[d]*=-.72)),s[f]>m&&(s[f]=m,s[d]>0&&(s[d]*=-.72));for(let f of[...e.crates,...e.walls||[]])_d(s,f);if(s.distance=(s.distance||0)+Math.hypot(s.x-a,s.z-l),s.y=vn(s.x,s.z,e).height+.038,Math.hypot(s.vx,s.vz)<=1.15&&vd(e.cup.x,e.cup.z,a,l,s.x,s.z)<.115-.038*.6){s.sunk=!0,s.x=e.cup.x,s.z=e.cup.z,s.vx=s.vz=0;break}Math.hypot(s.vx,s.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(s.vx=s.vz=0)}}var ks=s=>{let e=Math.hypot(s.x,s.y,s.z);return e>1e-5?{x:s.x/e,y:s.y/e,z:s.z/e}:null},To=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),Vs=(s,e)=>s.x*e.x+s.y*e.y+s.z*e.z,Va=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x});function Ha(s,e,t,n,i=null){if(n<=0||n>.1)return null;let r=(e.x-s.x)/n,o=(e.y-s.y)/n,a=(e.z-s.z)/n;if(Math.hypot(r,o,a)>8||Vs(s.forward,e.forward)<.4)return null;let l=i||{x:r,y:o,z:a};if(Math.hypot(l.x,l.y,l.z)>8)return null;let c=Math.hypot(e.x-s.x,e.y-s.y,e.z-s.z),h=Math.hypot(e.forward.x-s.forward.x,e.forward.y-s.forward.y,e.forward.z-s.forward.z),u=Math.max(1,Math.ceil((c+h*.12)/.008));for(let f=0;f<=u;f++){let d=f/u,p=To(s,e,d),m=ks(To(s.forward,e.forward,d)),y=ks(To(s.side,e.side,d));if(!m||!y)continue;let v=ks(Va(y,m)),M=v&&ks(Va(m,v));if(!M)continue;let x={x:t.x-p.x,y:t.y-p.y,z:t.z-p.z},g=Vs(x,M),b=Vs(x,v),w=Vs(x,m);if(Math.hypot(Math.max(0,Math.abs(g)-.104),Math.max(0,Math.abs(b)-.027),Math.max(0,Math.abs(w)-.058))>.038+.01)continue;let T=w>=0?1:-1,P={x:m.x*T,z:m.z*T},S=Math.hypot(P.x,P.z);if(S<.65)continue;P.x/=S,P.z/=S;let L=l.x*P.x+l.z*P.z;if(L<.07)continue;let C=Math.min(3.6,L*.92);return{vx:P.x*C,vz:P.z*C}}return null}var yd=new Ie().setFromAxisAngle(new _(1,0,0),-Math.PI/2);function Wa(s){let e=s.rightGripController,t=e&&e!==s.controller?e:s.controller;if(!t||t.visible===!1)return null;let n=t.getWorldPosition(new _),i=t.getWorldQuaternion(new Ie);return e&&e!==s.controller&&i.multiply(yd),{position:n,quaternion:i,down:new _(0,-1,0).applyQuaternion(i)}}function Xa(s){let e=new Se;e.name="Controller putter",s.add(e);let t=new Fe({color:12964307,metalness:.72,roughness:.23}),n=new Fe({color:1518388,roughness:.9}),i=(y,v,M=e)=>{let x=new ve(y,v);return M.add(x),x},r=i(new et(.008,.009,1,10),t),o=i(new et(.017,.02,.17,14),n);o.position.y=-.025;for(let y=0;y<5;y++){let v=i(new Tt(.018,.0011,4,12),new Fe({color:5005926,roughness:.8}),o);v.rotation.x=Math.PI/2,v.position.y=-.065+y*.03}let a=new Se;a.name="Mallet putter head",e.add(a);let l=new dt;l.moveTo(-.083,-.05),l.lineTo(.083,-.05),l.quadraticCurveTo(.099,-.05,.099,-.03),l.lineTo(.099,.035),l.quadraticCurveTo(.099,.053,.077,.053),l.lineTo(-.077,.053),l.quadraticCurveTo(-.099,.053,-.099,.035),l.lineTo(-.099,-.03),l.quadraticCurveTo(-.099,-.05,-.083,-.05);let c=i(new Jt(l,{depth:.041,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:6}),t,a);c.rotation.x=Math.PI/2,c.position.y=.0205;let h=i(new ye(.18,.032,.004),new Fe({color:3432035,roughness:.65}),a);h.position.z=-.055,i(new ye(.085,.003,.073),n,a).position.set(0,.026,.006);for(let y of[-.021,.021])i(new ye(.005,.002,.068),new Te({color:16248017}),a).position.set(y,.028,.004);i(new et(.012,.014,.046,10),t,a).position.set(-.055,.026,.014);let d=.86;e.visible=!1;function p(y){d=ct.clamp(y,.3,1.6),a.position.set(0,-d,0);let v=new _(-.055,-d+.044,.014);r.position.copy(v).multiplyScalar(.5),r.scale.y=v.length(),r.quaternion.setFromUnitVectors(new _(0,1,0),v.clone().normalize())}p(d);function m(y){e.position.copy(y.position),e.quaternion.copy(y.quaternion),e.updateMatrixWorld(!0);let v=a.getWorldPosition(new _),M=a.getWorldQuaternion(new Ie);return{x:v.x,y:v.y,z:v.z,forward:new _(0,0,-1).applyQuaternion(M),side:new _(1,0,0).applyQuaternion(M),up:new _(0,1,0).applyQuaternion(M)}}return{root:e,head:a,face:h,size:p,update:m,get length(){return d}}}var tn;function Md(){if(!tn){let s=document.createElement("canvas");s.width=256,s.height=512;let e=s.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,r,1,2)}tn=new Ve(s),tn.colorSpace=De,tn.wrapS=tn.wrapT=pi,tn.repeat.set(1/(st.right-st.left),1/(st.back-st.front)),tn.offset.set(.5,1.02),tn.anisotropy=4}return new Fe({map:tn,roughness:.95})}function qa(s,e,t,n){let i=new Se;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let r=new Se;r.name="Six-hole warehouse course",i.add(r);let o=A=>new Fe({color:A,roughness:.65}),a=(A,k,Q,N,re,Ee=r)=>{let ce=new ve(A,k);return ce.position.set(Q,N,re),Ee.add(ce),ce},l=a(new nt(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=jn(.16,.16);i.add(c);let h=Xa(i),u=h.root,f=h.head,d=new Te({color:16766588,transparent:!0,opacity:.78,depthWrite:!1,side:it}),p=a(new Kt(.13,.142,40),d,0,0,0,i);p.name="Putter contact guide",p.rotation.x=-Math.PI/2,p.visible=!1;let m=new bt(new Oe().setFromPoints([new _,new _]),new gt({color:8645568,transparent:!0,opacity:.7,depthWrite:!1}));m.name="Putter face direction",m.visible=!1,i.add(m);let y=document.createElement("canvas");y.width=1024,y.height=640;let v=y.getContext("2d"),M=new Ve(y);M.colorSpace=De;let x=a(new ze(2.2,1.375),new Te({map:M}),0,0,0,i);x.name="Mini-golf scorecard";let g=null,b=!1,w=0,E=0,T=[],P=null,S=!1,L=!1,C=null,O=!1,D=!1,W=!1,B=0,$="Hold trigger and brush the putter through the ball.",R=null,z=!0,F=[],V=0,fe=new Ie,j=()=>T.reduce((A,k)=>A+k,0),H=Li.reduce((A,k)=>A+k.par,0),q=()=>Li[w];try{let A=localStorage.getItem("tfj-mini-golf-best-v1"),k=Number(A);A!==null&&Number.isFinite(k)&&k>=6&&(P=k)}catch{}function ie(){_t(v,1024,640),te(v,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,G.mint,"700"),te(v,W?"COURSE COMPLETE":`${w+1} / 6  \xB7  ${q().name.toUpperCase()}`,32,117,42,G.ink,"700",954),te(v,W?`${j()} strokes  \xB7  Par ${H}`:`${E} strokes  \xB7  Par ${q().par}`,32,190,43,G.gold,"700");for(let A=0;A<6;A++){let k=32+A*161,Q=A===w;Je(v,k,227,151,177,{top:Q?"#26594a":"#183d43",bottom:"#0d2934",stroke:Q?G.gold:"#527779"}),te(v,`HOLE ${A+1}`,k+13,260,24,Q?G.gold:G.muted),te(v,T[A]===void 0?"\u2014":String(T[A]),k+18,334,58,G.ink,"700"),te(v,`PAR ${Li[A].par}`,k+13,382,22,G.muted)}te(v,`TOTAL ${j()+(D?0:E)}  \xB7  BEST ${P??"\u2014"}`,32,459,32,G.mint,"700"),te(v,$,32,513,26,G.ink,"600",954),te(v,W?"A  PLAY AGAIN":D?"A  NEXT HOLE":"A  MOVE & FIT CLUB",32,578,27,G.gold,"700"),te(v,"Y  PAUSE / MENU",684,578,26,G.muted),M.needsUpdate=!0}function pe(){for(let A of[3,2,1.5,4,5,6])for(let k of[-30,-29,-28,-27]){let Q=!0;for(let N=-1.1;N<=1.1;N+=.275)for(let re=0;re<=7.8;re+=.25)(s.blocked(A+N,k+re,0)||Math.abs(s.groundAt(A+N,k+re,.1))>.1)&&(Q=!1);if(Q)return new _(A,0,k)}return null}function se(){let A=zs();return A.roughness=.78,A}function Z(A){let k=a(new ye(A.w,.25,A.d),se(),A.x,.155,A.z);k.name="Pallet obstacle";for(let Q=0;Q<4;Q++)a(new ye(A.w/4-.018,.026,A.d+.01),se(),A.x+(Q-1.5)*A.w/4,.293,A.z);for(let Q of[-1,1])a(new ye(.025,.18,A.d+.018),o("#8d724d"),A.x+Q*(A.w/2-.018),.165,A.z)}function Ae(A){let N=[],re=[],Ee=[];for(let Ne=0;Ne<=20;Ne++)for(let oe=0;oe<=12;oe++){let Be=A.x-A.w/2+A.w*oe/12,Le=A.z-A.d/2+A.d*Ne/20;N.push(Be,vn(Be,Le,q()).height+.002,Le),re.push(Be,-Le)}for(let Ne=0;Ne<20;Ne++)for(let oe=0;oe<12;oe++){let Be=Ne*13+oe,Le=Be+1,pt=Be+12+1,At=pt+1;Ee.push(Be,pt,Le,Le,pt,At)}let ce=new Oe;ce.setAttribute("position",new Ce(N,3)),ce.setAttribute("uv",new Ce(re,2)),ce.setIndex(Ee),ce.computeVertexNormals();let _e=se();_e.side=it;let be=new ve(ce,_e);be.name="Loading ramp",r.add(be)}function Me(){for(let oe of[...r.children])oe.traverse(Be=>{Be.geometry?.dispose(),Be.material?.dispose()}),r.remove(oe);r.position.copy(g);let A=q(),k=new dt;k.moveTo(st.left,-st.front),k.lineTo(st.right,-st.front),k.lineTo(st.right,-st.back),k.lineTo(st.left,-st.back),k.closePath();let Q=new Ln;Q.absarc(A.cup.x,-A.cup.z,.115,0,Math.PI*2,!1),k.holes.push(Q),a(new ye(2.2,.027,7),o("#173848"),0,.016,3.51);let N=a(new Qt(k,40),Md(),0,.033,0);N.rotation.x=-Math.PI/2,N.name="Putting green";for(let oe of[-1.065,1.065])a(new ye(.07,.14,7),o("#203c4b"),oe,.099,3.51),a(new ye(.045,.006,7),new Fe({color:15320952,emissive:11770199,emissiveIntensity:.25}),oe,.172,3.51);for(let oe of[.045,6.985])a(new ye(2.2,.14,.07),o("#203c4b"),0,.099,oe);let re=a(new yi(.115,40),new Te({color:398620}),A.cup.x,.034,A.cup.z);re.rotation.x=-Math.PI/2;let Ee=a(new Kt(.115,.115+.015,40),new Te({color:16768133,side:it}),A.cup.x,.035,A.cup.z);Ee.rotation.x=-Math.PI/2,a(new et(.009,.009,.68,8),o("#e2e7d7"),A.cup.x,.37,A.cup.z);let ce=new Oe;ce.setAttribute("position",new Ce([0,0,0,.23,-.035,0,0,-.14,0],3)),ce.computeVertexNormals();let _e=a(ce,new Te({color:16176260,side:it}),A.cup.x,.7,A.cup.z);_e.name="Hole flag";let be=a(new Kt(.105,.123,32),new Te({color:16049069,side:it}),A.tee.x,.035,A.tee.z);if(be.rotation.x=-Math.PI/2,A.crates.forEach(Z),A.ramps.forEach(Ae),A.pipe){let oe=new dt;for(let Le=0;Le<=32;Le++){let pt=Math.PI-Le*Math.PI/32,At=Math.cos(pt)*.43,Ft=Math.sin(pt)*.43;Le?oe.lineTo(At,Ft):oe.moveTo(At,Ft)}for(let Le=0;Le<=32;Le++){let pt=Le*Math.PI/32;oe.lineTo(Math.cos(pt)*.34,Math.sin(pt)*.34)}oe.closePath();let Be=a(new Jt(oe,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);Be.name="Warehouse pipe tunnel"}x.position.copy(g).add(new _(0,2.42,.3)),a(new ye(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let oe of[-1.09,1.09])a(new ye(.035,3.55,.035),o("#254252"),oe,1.78,.26);let Ne=It("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",G.mint,2.05);Ne.position.set(0,3.5,.3),r.add(Ne)}function ae(){return R&&!R.sunk&&Math.hypot(R.vx,R.vz)>.04}function me(A,k){return!s.blocked(g.x+A,g.z+k,0)&&Math.abs(s.groundAt(g.x+A,g.z+k,.1))<.1&&![...q().crates,...q().walls||[]].some(Q=>Math.abs(A-Q.x)<Q.w/2+.2&&Math.abs(k-Q.z)<Q.d/2+.2)}function I(){if(!R||ae()||D)return!1;let A=[[-.28,.78],[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[k,Q]of A){let N=R.x+k,re=R.z+Q;if(me(N,re)&&s.xrTeleport(g.x+N,0,g.z+re))return s.xrFace?.(0),K(),z=!0,!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function X(){E=0,D=W=!1,B=0,S=L=!1,C=null,F=[],z=!0;let A=q();R={x:A.tee.x,z:A.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,Me(),le(),$="Hold your hand comfortably. A moves and fits your club.",I(),ie()}function Y(){let A=pe();return!A||!s.xrTeleport(A.x,0,A.z+7.03)?!1:(g=A,w=0,T=[],b=i.visible=!0,O=!1,fe.identity(),X(),t("Mini-golf! Hold your controller comfortably and look down the green. A moves and fits the club. Hold trigger to putt."),!0)}function K(){S=L=!1,C=null,F=[],u.visible=p.visible=m.visible=!1}function ne(){b=i.visible=!1,K()}function ue(A){if(D)return;D=!0,K(),T.push(E),B=A?.8:0;let k=q(),Q=A?E===1?"Hole in one!":E<k.par?"Under par!":E===k.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(W=w===Li.length-1,W){let N=j(),re=N<=H?"Gold":N<=H+6?"Silver":"Bronze";P=P===null?N:Math.min(P,N);try{localStorage.setItem("tfj-mini-golf-best-v1",String(P))}catch{}$=`${re} medal! ${N} strokes across six holes.`,t($)}else $=`${Q} ${E} strokes. A for hole ${w+2}.`,t($);n(A?.7:.2),ie()}function le(){l.position.set(g.x+R.x,g.y+R.y,g.z+R.z),c.position.set(g.x+R.x,g.y+vn(R.x,R.z,q()).height+.003,g.z+R.z)}function ge(A){let k=Wa(A);if(!k)return K(),null;if(z){let N=A.forward.clone();N.y=0,N.lengthSq()<.01&&N.set(0,0,-1),N.normalize();let re=new Ie().setFromAxisAngle(new _(0,1,0),Math.atan2(-N.x,-N.z)),Ee=vn(k.position.x-g.x,k.position.z-g.z,q()).height,ce=k.position.y-g.y-Ee-.028;if(ce<.3||ce>1.6)return K(),null;fe.copy(k.quaternion).invert().multiply(re),h.size(ce),z=!1,C=null,F=[],$="Club fitted. Mint guide = level face. Hold trigger to putt.",ie()}k.quaternion.multiply(fe);let Q=h.update(k);return Q.x-=g.x,Q.y-=g.y,Q.z-=g.z,u.visible=!D,Q}function de(A){if(p.visible=!!A&&!ae()&&!D,m.visible=!1,!p.visible)return;p.position.set(g.x+R.x,g.y+vn(R.x,R.z,q()).height+.004,g.z+R.z);let k=Math.hypot(A.x-R.x,A.z-R.z)<.7,Q=Math.hypot(A.forward.x,A.forward.z),N=Math.abs(A.y-R.y)<.07&&Math.abs(A.up.y)>.8&&Q>.8;if(d.color.set(k&&N?8645568:16766588),h.face.material.color.set(k&&N?8636851:3432035),!k||!N)return;m.visible=!0;let re=A.forward.x/Q,Ee=A.forward.z/Q,ce=m.geometry.attributes.position;for(let _e=0;_e<2;_e++){let be=_e?.52:.07,Ne=A.x+re*be,oe=A.z+Ee*be;ce.setXYZ(_e,g.x+Ne,g.y+vn(Ne,oe,q()).height+.005,g.z+oe)}ce.needsUpdate=!0,m.geometry.computeBoundingSphere()}function U(A,k){if(!b)return;let Q=Math.max(0,Math.min(.1,A.dt)),N=!!A.right?.gamepad?.buttons[0]?.pressed,re=!!A.right?.gamepad?.buttons[4]?.pressed,Ee=re&&!O;if(O=re,V+=Q,k){K();return}if(Ee){if(D){W?(w=0,T=[]):w++,X();return}else if(!ae()){I();return}}N?S=!D:(S=!1,L=!0,C=null,F=[]);let ce=ge(A);if(de(ce),N&&L&&!D&&!ae()&&ce&&C){for(F.push({time:V,p:ce});F.length>2&&V-F[1].time>.045;)F.shift();let _e=F[0],be=V-_e.time,Ne=be>0?{x:(ce.x-_e.p.x)/be,y:(ce.y-_e.p.y)/be,z:(ce.z-_e.p.z)/be}:null,oe=Ha(C,ce,R,Q,Ne);oe&&(R.vx=oe.vx,R.vz=oe.vz,E++,L=!1,n(.3),$=`Putt ${E} \xB7 wait for the ball to stop.`,ie())}if(C=N&&ce?ce:null,N&&ce&&!F.length&&F.push({time:V,p:ce}),!D){let _e=R.x,be=R.z;Ga(R,q(),Q);let Ne=R.x-_e,oe=R.z-be,Be=Math.hypot(Ne,oe);Be&&l.rotateOnWorldAxis(new _(oe,0,-Ne).normalize(),Be/.038),le(),R.sunk?ue(!0):!ae()&&E>=8?ue(!1):!ae()&&$.startsWith("Putt")&&($="Ball stopped. A moves beside it and refits your club.",ie())}B>0&&(B=Math.max(0,B-Q),l.position.y=g.y+.033+.038-(.8-B)*.2,l.scale.setScalar(Math.max(.12,B/.8)),c.visible=!1,B||(l.visible=!1))}return{root:i,course:r,putter:u,head:f,board:x,ball:l,ballGuide:p,aimLine:m,start:Y,stop:ne,cancel:K,tick:U,moveBesideBall:I,get clubLength(){return h.length},get active(){return b},get origin(){return g},get held(){return S},get state(){return R},get hole(){return w},get strokes(){return E},get scores(){return T},get total(){return j()},get holeReady(){return D},get complete(){return W},get best(){return P},get layout(){return q()}}}var Ys="tfj-memory-bests-v1",Xs=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>{if(!["string","number"].includes(typeof s)||typeof s=="string"&&!s.trim())return null;let n=Number(s);return Number.isSafeInteger(n)&&n>=e&&n<=t?n:null};function qs(s){let e=s;try{typeof e=="string"&&(e=JSON.parse(e))}catch{return{}}if(!e||typeof e!="object"||Array.isArray(e))return{};let t={};for(let n=2;n<=6;n++){let i=Xs(e[n],n,1e4);i!==null&&(t[n]=i)}return t}function Ya(s,e=0,t={}){let n=m=>{try{return s?.getItem(m)??null}catch{return null}},i=(m,y,v,M=0,x=!1)=>{let g=Xs(n(m),M,v),b=Xs(t[y],M,v),w=[g,b].filter(E=>E!==null);return w.length?x?Math.min(...w):Math.max(...w):null},r=(m,y,v,M)=>m===null?0:m>=M?3:m>=v?2:m>=y?1:0,o=[],a=(m,y,v,M,x,g,b,w,E)=>{let T=i(v,m,M);o.push({id:m,title:y,value:T,score:T===null?"\u2014":String(T),detail:T===null?"Play a complete round":b,medal:r(T,...x),goal:`Gold: ${x[2]} ${g}`,icon:w,accent:E})};a("bowling","WAREHOUSE BOWLING","tfj-bowling-best-10-v1",100,[10,50,80],"pins","pins / 100 \xB7 ten frames","target","#8bc8f3"),a("darts","STAFF-ROOM DARTS","tfj-vr-darts-best-v1",540,[50,150,300],"points","points \xB7 nine darts","target","#8fe1c3");let l=i("tfj-mini-golf-best-v1","golf",48,6,!0);o.push({id:"golf",title:"WAREHOUSE MINI-GOLF",value:l,score:l===null?"\u2014":String(l),detail:l===null?"Finish all six holes":"strokes \xB7 six holes \xB7 lower wins",medal:l===null?0:l<=18?3:l<=24?2:1,goal:"Gold: 18 strokes or fewer",icon:"golf",accent:"#8fe1c3"}),a("basketball","BASKETBALL","tfj-basket-best",10,[2,5,8],"baskets","baskets / 10 throws","target","#f6d484"),a("planes","PAPER PLANES","tfj-planes-best-v1",150,[10,50,100],"points","points \xB7 five flights","play","#8bc8f3");let c=qs(n(Ys)),h=qs(t.memory);for(let[m,y]of Object.entries(h))c[m]=Math.min(c[m]??1/0,y);let u=Object.keys(c).map(Number).sort((m,y)=>y-m)[0]??null,f=u===null?null:c[u];o.push({id:"memory",title:"MEMORY MATCH",value:f,pairs:u,score:f===null?"\u2014":String(f),detail:f===null?"Use your collected cards":`turns \xB7 ${u}-pair deck \xB7 lower wins`,medal:f===null?0:f===u?3:f<=u+2?2:1,goal:u===null?"Practice rounds do not count":`Gold: ${u} turns \xB7 perfect match`,icon:"book",accent:"#f3b2cf"});let d=Xs(e,0,18)??0;o.push({id:"cards",title:"MOLLIE\u2019S CARD ALBUM",value:d,score:`${d} / 18`,detail:d===18?"Collection complete!":"Cards found around the yard",medal:r(d,6,12,18),goal:"Gold: collect all 18 cards",icon:"book",accent:"#f6d484"});let p=i("tfj-vr-jigglypuff-rounds-v1","hide",Number.MAX_SAFE_INTEGER)??0;return o.push({id:"hide",title:"JIGGLYPUFF SEEKER",value:p,score:String(p),detail:"complete hide-and-seek rounds",medal:r(p,1,3,5),goal:"Gold: complete five hunts",icon:"puff",accent:"#f3b2cf"}),o}var wo=s=>["TO EARN","BRONZE","SILVER","GOLD"][s];var ei=[5465977,12025936,13359585,16176260];function bd(s){let e=s.colliders.map(t=>new Ye(new _(t.min.x,t.min.y,t.min.z),new _(t.max.x,t.max.y,t.max.z)));for(let t of s.colliders){let{min:n,max:i}=t;if(n.x<7.5||i.x>9||i.x-n.x>.3||i.z-n.z<3.9||n.y>.1||i.y<2.78)continue;let r=(n.z+i.z)/2;for(let o of[r,r-.45,r+.45]){if(o-1.86<n.z||o+1.86>i.z)continue;let a=new _(n.x-.045,0,o),l=a.clone().add(new _(-2.45,0,0)),c=!0;for(let u of[-.3,0,.3])for(let f of[-.4,0,.4])(s.blocked(l.x+u,l.z+f,0)||Math.abs(s.groundAt(l.x+u,l.z+f,.1))>.1)&&(c=!1);let h=l.clone().add(new _(0,1.68,0));for(let u of[-1.7,-.6,.6,1.7])for(let f of[.8,1.7,2.65]){let d=a.clone().add(new _(-.052,f,u)),p=d.clone().sub(h),m=p.length(),y=new Ze(h,p.normalize()),v=new _;e.some(M=>y.intersectBox(M,v)&&v.distanceTo(h)<m-.015)&&(c=!1)}if(c)return{mount:a,view:l,heading:-Math.PI/2}}}return null}function $a(s,e,t,n){let i=new Se;i.name="Arcade wall of fame",e.add(i);let r=bd(s);i.visible=!!r,r&&(i.position.copy(r.mount),i.rotation.y=-Math.PI/2);let o=document.createElement("canvas");o.width=2048,o.height=1152;let a=o.getContext("2d"),l=new Ve(o);l.colorSpace=De,l.anisotropy=4;let c=new ve(new ze(3.6,2.025),new Te({map:l}));c.name="Mollie\u2019s personal records",c.position.set(0,1.7,.052),i.add(c);let h=(T,P,S,L,C)=>{let O=new ve(T,P);return O.position.set(S,L,C),i.add(O),O},u=new Fe({color:1058612,roughness:.7}),f=new Fe({color:9215391,metalness:.6,roughness:.35});h(new ye(3.72,2.14,.075),u,0,1.7,0);let d=new Te({color:16176260});for(let T of[.626,2.774])h(new ye(3.74,.024,.045),d,0,T,.031);for(let T of[-1.862,1.862])h(new ye(.024,2.16,.045),d,T,1.7,.031);h(new ye(3.74,.045,.24),f,0,.32,.13);let p=[];for(let T=1;T<=3;T++){let P=new Se;P.name=`${wo(T)} trophy`,P.position.set((T-2)*1.05,.346,.14),i.add(P);let S=new Fe({color:ei[0],metalness:.68,roughness:.32}),L=[new ve(new ye(.24,.044,.16),u),new ve(new et(.069,.088,.052,16),S),new ve(new et(.018,.029,.072,12),S),new ve(new Un([new ee(.025,0),new ee(.06,.045),new ee(.089,.12),new ee(.078,.13),new ee(.049,.052),new ee(.014,.021)],20),S)];L[0].position.y=.022,L[1].position.y=.069,L[2].position.y=.12,L[3].position.y=.15,P.add(...L);for(let C of[-.092,.092]){let O=new ve(new Tt(.042,.008,6,14),S);O.position.set(C,.233,0),P.add(O)}p.push({trophy:P,material:S,tier:T})}let m=[],y=null,v=0,M=0,x=0;function g(){_t(a,2048,1152),te(a,"TF JONES  /  WAREHOUSE ARCADE",54,64,27,G.blue,"700"),te(a,"WALL OF FAME",52,154,86,G.ink,"700"),te(a,"Mollie\u2019s personal bests",54,213,35,G.gold,"600");let T=m.filter(S=>S.medal).length,P=m.filter(S=>S.medal===3).length;Je(a,1535,46,456,174,{top:"#254f54",bottom:"#142f43",stroke:G.gold,radius:20}),te(a,`${T} / 8`,1567,145,67,G.gold,"700"),te(a,`MEDALS EARNED  \xB7  ${P} GOLD`,1567,191,26,G.ink,"700"),m.forEach((S,L)=>{let C=54+L%4*492,O=263+Math.floor(L/4)*386,D=470;Je(a,C,O,D,358,{top:"#234955",bottom:"#0d2639",stroke:S.medal?`#${ei[S.medal].toString(16).padStart(6,"0")}`:"#466374",radius:18}),en(a,S.icon,C+39,O+44,46,S.accent),te(a,S.title,C+77,O+52,25,G.ink,"700",D-98),te(a,S.score,C+28,O+157,S.score.length>5?66:88,G.gold,"700",D-56),te(a,S.detail,C+28,O+205,25,G.muted,"500",D-56);let B=`#${ei[S.medal].toString(16).padStart(6,"0")}`;Je(a,C+27,O+234,D-54,46,{top:S.medal?"#24474d":"#162c3c",bottom:"#172f3c",stroke:B,radius:10}),te(a,wo(S.medal),C+44,O+267,28,S.medal?B:G.muted,"700"),te(a,S.goal,C+28,O+325,25,S.accent,"500",D-56)}),te(a,"YOUR SCORES \xB7 THIS BROWSER",54,1091,30,G.blue,"700"),te(a,"Play. Beat your best. Earn your place.",1160,1091,30,G.muted,"500"),l.needsUpdate=!0,x++;for(let S of p){let L=m.some(C=>C.medal>=S.tier);S.material.color.set(L?ei[S.tier]:ei[0]),S.material.emissive.set(L?ei[S.tier]:0),S.material.emissiveIntensity=L?.09:0}}function b(){let T;try{T=globalThis.localStorage}catch{}let P=Ya(T,s.mollie.found.size,t()),S=JSON.stringify(P);if(S===y)return!1;let L=y!==null&&P.some((C,O)=>C.value!==null&&(m[O].value===null||C.id==="memory"&&C.pairs>m[O].pairs||(["golf","memory"].includes(C.id)?C.value<m[O].value:C.value>m[O].value)||C.medal>m[O].medal));return m=P,y=S,L&&(M=2.5),g(),!0}function w(T){v-=T,v<=0&&(v=.75,b()),M=Math.max(0,M-T),d.color.set(M>0&&Math.sin(M*7)>0?9429443:16176260)}function E(){return b(),!r||!s.xrTeleport(r.view.x,0,r.view.z)?(n("The wall approach is blocked. Walk to the Unit 9 office divider."),!1):(s.xrFace?.(r.heading),n("Welcome to the wall of fame! Your personal records update as you play."),!0)}return b(),{root:i,panel:c,cups:p,site:r,refresh:b,tick:w,visit:E,get records(){return m},get draws(){return x},get celebrating(){return M>0}}}function Sd(s,e,t,n=.48){if(s.z<=t.z||e.z>t.z)return!1;let i=(s.z-t.z)/(s.z-e.z);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.y+(e.y-s.y)*i-t.y)<n}function Td(s,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let r=-.25-1.1/Math.max(.5,i);return n.y+=(r-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:s.clone().addScaledVector(n,t),v:n}}function Za(s,e,t,n){let i=new Se;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let r=new Se;i.add(r);let o=j=>new Fe({color:j,roughness:.7,side:it}),a=new Oe;a.setAttribute("position",new Ce([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new ve(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new bt(new Oe().setFromPoints([new _(0,0,-.28),new _(0,.056,.1)]),new gt({color:7576243}));l.add(c);let h=s.colliders.map(j=>new Ye(new _(j.min.x,j.min.y,j.min.z),new _(j.max.x,j.max.y,j.max.z)).expandByScalar(.06)),u=document.createElement("canvas");u.width=1024,u.height=640;let f=u.getContext("2d"),d=new Ve(u);d.colorSpace=De;let p=new ve(new ze(1.6,1),new Te({map:d}));p.name="Paper-plane scoreboard",i.add(p);let m=!1,y=!1,v=null,M=null,x=[],g=[],b=0,w=!1,E=!1,T=!1,P=0,S=0,L=0,C=0,O="Five planes. Aim through the hoops!";try{L=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function D(){_t(f,1024,640),te(f,"PAPER-PLANE CHALLENGE",35,68,44,G.gold),te(f,`${S} points`,35,190,72),te(f,`BEST ${L}`,660,180,35,G.mint),te(f,`${P} / 5 planes`,35,280,44),te(f,`Longest glide: ${C.toFixed(1)} m`,35,349,32,G.mint),te(f,O,35,428,29,G.ink,"600",950),te(f,P===5&&!v?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),te(f,"10 points per hoop \xB7 Y: pause/menu",35,590,27,G.muted),d.needsUpdate=!0}function W(){for(let j of[3,2,1.5,4,5])for(let H of[-30,-29,-28]){let q=!0;for(let ie=-1;ie<=1;ie+=.5)for(let pe=0;pe<=7.8;pe+=.4)(s.blocked(j+ie,H+pe,0)||Math.abs(s.groundAt(j+ie,H+pe,.1))>.1)&&(q=!1);if(q)return new _(j,0,H)}return null}function B(){for(let q of[...r.children])q.traverse(ie=>{ie.geometry?.dispose(),ie.material?.dispose()}),r.remove(q);x=[];for(let q=0;q<3;q++){let ie=M.clone().add(new _(0,1.5-q*.22,5-q*1.8)),pe=new ve(new Tt(.6,.035,12,48),o(q===0?"#f6d484":q===1?"#8fe1c3":"#8bc8f3"));pe.position.copy(ie),r.add(pe),x.push({center:ie,mesh:pe});let se=new ve(new et(.018,.018,ie.y,8),o("#36576a"));se.position.set(ie.x-.64,ie.y/2,ie.z),r.add(se)}p.position.copy(M).add(new _(0,2.3,-.5));let j=It("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);j.position.copy(M).add(new _(0,3.18,-.5)),r.add(j);for(let q of[2,5]){let ie=_n(1.3);ie.position.copy(M).add(new _(0,4.2,q)),r.add(ie)}let H=new ve(new ye(2,.02,.045),o("#f6d484"));H.position.copy(M).add(new _(0,.02,6.7)),r.add(H)}function $(){P=S=C=0,v=null,y=!1,g=[],l.visible=!1,O="Five planes. Aim through the hoops!",x.forEach(j=>j.mesh.material.emissive?.set(0)),D()}function R(){let j=W();return!j||!s.xrTeleport(j.x,0,j.z+7.4)?!1:(M=j,B(),m=i.visible=!0,s.xrFace?.(0),w=!1,E=!0,$(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function z(){m=i.visible=y=l.visible=!1,v=null,g=[],w=!1}function F(){y=!1,g=[],w=!1,E=!0,v||(l.visible=!1)}function V(j){if(v){if(C=Math.max(C,v.distance),O=`${j} \xB7 ${v.hits.size} hoops \xB7 ${v.distance.toFixed(1)} m`,v=null,P===5){L=Math.max(L,S);try{localStorage.setItem("tfj-planes-best-v1",String(L))}catch{}t(`Paper planes complete! ${S} points. A to replay.`)}D()}}function fe(j,H){if(!m)return;let{dt:q,right:ie,controller:pe}=j;b+=q;let se=!!ie?.gamepad?.buttons[0]?.pressed,Z=!!ie?.gamepad?.buttons[4]?.pressed;if(H){F();return}se||(w=!0),Z&&!T&&P===5&&!v&&$(),T=Z;let Ae=pe&&pe.visible!==!1?pe.getWorldPosition(new _):null;if(Ae&&se&&!E&&w&&!v&&P<5){let Me=s.stats();Math.abs(Me.x-M.x)>1.2||Me.z<M.z+6.7||Me.z>M.z+8.2||Me.y>.15?t("Return behind the paper-plane launch line."):(y=!0,g=[],l.visible=!0)}if(y){if(!Ae)F();else if(l.position.copy(Ae),l.quaternion.copy(pe.getWorldQuaternion(new Ie)),g.push({time:b,p:Ae.clone()}),g=g.filter(Me=>b-Me.time<.14),!se&&E){let Me=g.find(me=>b-me.time>=.04),ae=Me?Ae.clone().sub(Me.p).divideScalar(b-Me.time).clampLength(0,10):new _;y=!1,ae.length()<.8||ae.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(P++,v={p:Ae.clone(),v:ae,start:Ae.clone(),distance:0,age:0,hits:new Set},x.forEach(me=>me.mesh.material.emissive?.set(0)),O="In flight\u2026",D())}}if(v){let Me=Math.max(1,Math.ceil(q/.012)),ae=q/Me;for(let me=0;me<Me&&v;me++){let I=v,X=Td(I.p,I.v,ae),Y=X.p.clone().sub(I.p),K=Y.length(),ne=new Ze(I.p,Y.normalize()),ue=new _,le=!1;for(let ge of h)if(ge.containsPoint(I.p)||ne.intersectBox(ge,ue)&&ue.distanceTo(I.p)<=K){le=!0;break}if(le){V("Hit scenery");break}for(let ge=0;ge<x.length;ge++)!I.hits.has(ge)&&Sd(I.p,X.p,x[ge].center)&&(I.hits.add(ge),S+=10,x[ge].mesh.material.emissive.set("#3ca58b"),n(.45),D());I.p.copy(X.p),I.v.copy(X.v),I.age+=ae,I.distance=Math.max(I.distance,Math.hypot(I.p.x-I.start.x,I.p.z-I.start.z)),l.position.copy(I.p),l.quaternion.setFromUnitVectors(new _(0,0,-1),I.v.clone().normalize()),l.rotateZ(Math.sin(I.age*3)*.04),I.p.y<.07?(l.position.y=.07,l.rotation.x=0,V("Landed")):(I.age>10||I.distance>20)&&V("Glide complete")}}E=se}return{root:i,get best(){return L},start:R,stop:z,cancel:F,tick:fe,get held(){return y},get flight(){return v},get origin(){return M},get rings(){return x},get throws(){return P},get score(){return S},get longest(){return C}}}function Ja(s,e){let t=new Se;t.name="Bowling supporters",e.add(t);let n=[],i=0,r=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(m){t.visible=!0,i=0,r=0;for(let v of n)v.group.visible=!1,v.shadow&&(v.shadow.visible=!1);let y=[];for(let v of[5.2,3.8,6])for(let M of[-1.9,1.9,-2.4,2.4]){if(y.length===4)break;let x=m.clone().add(new _(M,0,v));s.blocked(x.x,x.z,0)||Math.abs(s.groundAt(x.x,x.z,.1))>.1||y.some(g=>g.distanceTo(x)<1)||y.push(x)}for(let v=0;v<y.length;v++){if(!n[v]){let g=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][v]});g.group.name=`Bowling supporter ${v+1}`,g.group.scale.setScalar(.91+v*.025),g.bones=Object.fromEntries(l.map(b=>[b,g.model.getObjectByName(b)])),g.rest=Object.fromEntries(l.map(b=>[b,g.bones[b]?.quaternion.clone()])),g.shadow=jn(.9,.6),t.add(g.shadow,g.group),n.push(g)}let M=n[v];M.group.visible=!0,M.group.position.copy(y[v]),M.base=y[v].clone(),M.shadow.visible=!0,M.shadow.position.copy(y[v]).add(new _(0,.012,0));let x=s.stats();M.group.rotation.y=Math.atan2(x.x-y[v].x,x.z-y[v].z),M.gesture="idle",M.target=new _(x.x,x.y+1.6,x.z),M.mixer.setTime(v*.73)}}function h(m=!1){i=m?3.6:2.2,o=m,a=!1}function u(){i=1.8,o=!1,a=!0}function f(m,y,v){let M=m.bones[y];if(!M)return;let x=M.parent.getWorldQuaternion(new Ie),g=M.getWorldQuaternion(new Ie),b=new _(0,1,0).applyQuaternion(g),w=new _(...v).normalize().applyQuaternion(m.group.getWorldQuaternion(new Ie));M.quaternion.copy(x.invert().multiply(new Ie().setFromUnitVectors(b,w).multiply(g))),m.model.updateMatrixWorld(!0)}function d(m,y,v={}){if(y||!t.visible)return;r+=m,i=Math.max(0,i-m);let M=s.stats();n.forEach((x,g)=>{if(!x.group.visible)return;let b=r+g*1.4,w=(o?3.6:a?1.8:2.2)-i,E=i>0&&w>=g*.11,T=!v.ball&&!v.held&&!i&&Math.sin(b*.43)>.85,P=n[(g+1)%n.length],S=v.ball||v.eye||new _(M.x,M.y+1.6,M.z);T&&P?.group.visible&&(S=P.base.clone().add(new _(0,1.5,0))),E&&(S=v.eye||new _(M.x,M.y+1.6,M.z)),x.target.copy(S);let L=Math.atan2(S.x-x.base.x,S.z-x.base.z);x.group.rotation.y+=Math.atan2(Math.sin(L-x.group.rotation.y),Math.cos(L-x.group.rotation.y))*Math.min(1,m*2.8);let C=E?a?"wave":["clap","arms-up","fist-pump","wave"][g%4]:v.held?"anticipate":T?"chat":"idle";x.gesture=C;for(let D of l)x.bones[D]&&x.bones[D].quaternion.copy(x.rest[D]);if(x.animate(m,C==="wave"?"wave":"idle"),x.group.position.set(x.base.x,x.base.y+(E?Math.max(0,Math.sin(b*7))*(o?.11:.055):0),x.base.z),x.group.rotation.z=Math.sin(b*1.2)*.012,x.shadow.material.opacity=1-(x.group.position.y-x.base.y)*3,x.model.updateMatrixWorld(!0),C==="clap"){let D=Math.sin(b*13)*.25;f(x,"UpperArmL",[-.25,-.3,.65]),f(x,"UpperArmR",[.25,-.3,.65]),f(x,"LowerArmL",[.4+D,.35,.4]),f(x,"LowerArmR",[-.4-D,.35,.4])}if(C==="arms-up"&&(f(x,"UpperArmL",[-.65,.9,0]),f(x,"UpperArmR",[.65,.9,0]),f(x,"LowerArmL",[.15,1,.12]),f(x,"LowerArmR",[-.15,1,.12])),C==="fist-pump"){let D=.65+Math.sin(b*9)*.3;f(x,"UpperArmR",[.5,D,.3]),f(x,"LowerArmR",[-.2,1,.2])}C==="anticipate"&&(f(x,"UpperArmL",[-.2,-.6,.35]),f(x,"UpperArmR",[.2,-.6,.35]),f(x,"LowerArmL",[.3,.1,.6]),f(x,"LowerArmR",[-.3,.1,.6]));let O=x.bones.Head;if(O){let D=S.x-x.base.x,W=S.z-x.base.z,B=Math.atan2(Math.sin(L-x.group.rotation.y),Math.cos(L-x.group.rotation.y)),$=Math.atan2(S.y-(x.base.y+1.6),Math.hypot(D,W));O.rotateY(ct.clamp(B,-.65,.65)),O.rotateX(-ct.clamp($,-.4,.3)+Math.sin(b*(T?3:1.1))*.035)}x.bones.Chest&&x.bones.Chest.rotateX(v.held?.065:Math.sin(b*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:h,encourage:u,tick:d,stop:p,get cheering(){return i>0},get people(){return n.filter(m=>m.group.visible)}}}function Ka(s,e,t,n,i=()=>{}){let r=new Se;r.name="Warehouse bowling",r.visible=!1,e.add(r);let o=Ja(s,r),a=U=>new Fe({color:U,roughness:.55}),l=(U,A,k,Q,N,re=r)=>{let Ee=new ve(U,A);return Ee.position.set(k,Q,N),re.add(Ee),Ee},c=new Se;r.add(c);let h=null,u=[],f=!1,d=!1,p=null,m=[],y=0,v=!1,M=!1,x=!1,g=0,b=0,w=[],E=Array.from({length:10},()=>[]),T=0,P=0,S=0,L=!1;try{S=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let C=l(new nt(.14,24,20),a("#5147b5"),0,.17,0);for(let[U,A,k]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new nt(.023,8,8),a("#12162d"),U,A,k,C);C.visible=!1;let O=document.createElement("canvas");O.width=1536,O.height=1024;let D=O.getContext("2d"),W=new Ve(O);W.colorSpace=De;let B=l(new ze(3.2,3.2*2/3),new Te({map:W}),0,2,0);B.name="Warehouse bowling scoreboard";let $=()=>w.reduce((U,A)=>U+A,0)+T,R=new Se;R.name="Bowling scoring computer",r.add(R);let z=l(new ze(.96,.64),new Te({map:W}),0,0,.046,R);z.name="Bowling computer screen",l(new ye(1.02,.7,.08),a("#101a26"),0,0,0,R);let F=120,V=new Float32Array(F*3),fe=new Float32Array(F*3),j=[],H=new Oe;H.setAttribute("position",new Pt(V,3)),H.setAttribute("color",new Pt(fe,3));let q=new Zn({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:jr}),ie=new vi(H,q);ie.name="Strike fireworks",ie.visible=!1,ie.frustumCulled=!1,r.add(ie);let pe=0,se=0;function Z(){i(!0),o.cheer(!0),se++,pe=2.6,ie.visible=!0,q.opacity=1;for(let U=0;U<F;U++){let A=U%3,k=U*2.39996,Q=.65+U%11*.08,N=Math.sqrt(1-(U%17/8-1)**2);V.set([h.x+(A-1)*.65,1.35+A*.22,h.z+1.2],U*3),j[U]=new _(Math.cos(k)*N*Q,.7+Math.abs(Math.sin(k))*1.2,Math.sin(k)*N*Q);let re=new ke([16765286,7401417,16745144,9026559][U%4]);fe.set([re.r,re.g,re.b],U*3)}H.attributes.position.needsUpdate=!0,H.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function Ae(U){if(!(pe<=0)){pe=Math.max(0,pe-U),ie.visible=pe>0,q.opacity=Math.min(1,pe/.9);for(let A=0;A<F;A++){let k=j[A];k.y-=1.5*U,V[A*3]+=k.x*U,V[A*3+1]+=k.y*U,V[A*3+2]+=k.z*U}H.attributes.position.needsUpdate=!0}}function Me(){_t(D,1536,1024),te(D,"TFJ BOWL  /  LANE 01",48,72,38,G.blue,"700"),te(D,"WAREHOUSE BOWLING",48,143,61,G.ink,"700"),Je(D,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:G.mint,radius:22}),te(D,"TOTAL PINS",1120,86,34,G.mint),te(D,String($()),1120,237,125,G.ink,"700"),te(D,"/ 100",1320,233,42,G.muted),te(D,g===10?"ROUND COMPLETE":`FRAME ${g+1}  \u2022  BOWL ${b+1}`,48,230,51,G.gold,"700");let U=0;for(let A=0;A<10;A++){let k=48+A%5*288,Q=290+Math.floor(A/5)*244,N=A===g&&g<10,re=E[A],Ee=re.length>0;Je(D,k,Q,272,225,{top:N?"#225568":"#142e43",bottom:"#0b2032",stroke:N?G.gold:"#55758c",radius:14}),te(D,String(A+1),k+18,Q+45,37,N?G.gold:G.muted,"700");let ce=re[0]===10?"X":re[0]===0?"\u2013":re[0]??"",_e=re.length>1?re[0]+re[1]===10?"/":re[1]===0?"\u2013":re[1]:"";D.strokeStyle="#5c7b90",D.lineWidth=2,D.strokeRect(k+78,Q+8,89,77),D.strokeRect(k+167,Q+8,97,77),te(D,String(ce),k+96,Q+67,53,G.ink,"700"),te(D,String(_e),k+190,Q+67,53,G.ink,"700"),U+=A<w.length?w[A]:A===g?T:0,te(D,Ee?String(U):"\u2014",k+30,Q+189,89,N?G.gold:G.ink,"700")}te(D,`PERSONAL BEST  ${S} / 100`,48,837,38,G.mint,"700"),te(D,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,G.muted,"600"),te(D,g===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,G.gold,"700"),te(D,"Y  MENU",1270,957,34,G.ink,"700"),W.needsUpdate=!0}function ae(){for(let U of[3,2,1.5,4,5,6])for(let A of[-30,-29,-28,-27]){let k=!0;for(let Q=-1.1;Q<=1.1;Q+=.55)for(let N=0;N<=7.8;N+=.3)(s.blocked(U+Q,A+N,0)||Math.abs(s.groundAt(U+Q,A+N,.1))>.1)&&(k=!1);if(k)return new _(U,0,A)}return null}function me(){for(let N of[...c.children])N.traverse(re=>{re.geometry?.dispose(),re.material&&re.material.dispose()}),c.remove(N);c.position.copy(h),u=[],l(new ye(2.1,.025,7.3),zs(),0,.018,3.25,c);for(let N=-4;N<=4;N++)l(new ye(.009,.003,7.3),a("#9c805f"),N*.22,.032,3.25,c);for(let N of[-1.15,1.15])l(new ye(.15,.05,7.3),a("#223747"),N,.02,3.25,c);for(let N of[-1.045,1.045]){let re=l(new ye(.028,.025,7.3),new Fe({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),N,.045,3.25,c);re.name="Illuminated bowling edge"}let U=It("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",G.gold,2.8);U.position.set(0,4.38,2.5),c.add(U);for(let N of[1,4.8]){let re=_n(1.8);re.position.set(0,4.8,N),c.add(re)}l(new ye(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new ye(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let N of[-.5,0,.5]){let re=l(new In(.065,.16,3),a("#30485a"),N,.04,4.7,c);re.rotation.x=-Math.PI/2}let A=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([N,re])=>new ee(N,re)),k=0;for(let N=0;N<4;N++)for(let re=0;re<=N;re++){let Ee=jn(.29,.27);Ee.position.set((re-N/2)*.3,.034,1.1-N*.29),c.add(Ee);let ce=new Se;ce.position.set((re-N/2)*.3,.248,1.1-N*.29),c.add(ce),l(new Un(A,20),a("#f8f6ea"),0,-.215,0,ce),l(new et(.035,.039,.045,16),a("#dc4459"),0,.07,0,ce),u.push({mesh:ce,start:ce.position.clone(),v:new _,spin:new _,shadow:Ee,down:!1,id:k++})}B.position.copy(h).add(new _(0,2.95,2.5)),l(new ye(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let N of[-1.62,1.62])l(new ye(.06,3.92,.06),a("#223747"),N,1.96,2.42,c);let Q=[-1.4,1.4].find(N=>!s.blocked(h.x+N,h.z+7.1,0))??-1.2;R.position.copy(h).add(new _(Q,1.27,7.1)),R.lookAt(h.clone().add(new _(0,1.68,7.5))),l(new ye(.16,1.12,.16),a("#223747"),Q,.56,7.1,c),l(new ye(.65,.06,.48),a("#101a26"),Q,.03,7.1,c)}function I(){for(let U of u)U.mesh.position.copy(U.start),U.mesh.rotation.set(0,0,0),U.mesh.visible=!0,U.shadow.visible=!0,U.shadow.position.set(U.start.x,.034,U.start.z),U.shadow.material.opacity=1,U.down=!1,U.v.set(0,0,0),U.spin.set(0,0,0)}function X(){pe=0,ie.visible=!1,g=b=T=0,w=[],E=Array.from({length:10},()=>[]),p=null,P=0,d=!1,C.visible=!1,I(),Me()}function Y(){let U=ae();return!U||!s.xrTeleport(U.x,0,U.z+7.4)?!1:(h=U,me(),o.setup(h),f=r.visible=!0,s.xrFace?.(0),X(),M=!1,v=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function K(){o.stop(),pe=0,ie.visible=!1,f=r.visible=d=C.visible=!1,p=null,P=0,m=[],M=!1}function ne(){d=!1,m=[],M=!1,v=!0,p||(C.visible=!1)}function ue(U,A){L||(L=!0,o.cheer(!1));let k=A.length();U.down=!0,U.v.add(A).clampLength(0,7),U.v.y=Math.max(U.v.y,Math.min(3.4,.7+k*.42)),U.spin.add(new _(A.z*2.8,(U.id%2?1:-1)*k*.8,-A.x*2.8)).clampLength(0,18)}function le(U){let A=new _,k=new _,Q=new Ie;for(let N of u)if(N.down&&N.mesh.visible){N.v.y-=9.81*U,N.mesh.position.addScaledVector(N.v,U);let re=N.spin.length();re>.001&&(k.copy(N.spin).divideScalar(re),Q.setFromAxisAngle(k,re*U),N.mesh.quaternion.premultiply(Q).normalize()),A.set(0,1,0).applyQuaternion(N.mesh.quaternion);let Ee=.033+.08+.135*Math.abs(A.y);N.mesh.position.y<Ee?(N.mesh.position.y=Ee,N.v.y=N.v.y<-.65?-N.v.y*.32:0,N.v.x*=Math.exp(-4*U),N.v.z*=Math.exp(-4*U),N.spin.multiplyScalar(Math.exp(-5*U))):N.spin.multiplyScalar(Math.exp(-.3*U));for(let[ce,_e,be]of[["x",-1.02,1.02],["z",-.35,2.2]])(N.mesh.position[ce]<_e||N.mesh.position[ce]>be)&&(N.mesh.position[ce]=ct.clamp(N.mesh.position[ce],_e,be),N.v[ce]*=-.38)}for(let N=0;N<u.length;N++)for(let re=N+1;re<u.length;re++){let Ee=u[N],ce=u[re];if(!Ee.mesh.visible||!ce.mesh.visible||!Ee.down&&!ce.down)continue;let _e=ce.mesh.position.clone().sub(Ee.mesh.position),be=_e.length();if(be>=.29||be<.001)continue;let Ne=_e.divideScalar(be),oe=Ee.v.clone().sub(ce.v).dot(Ne);if(oe>.18){let Le=Ne.clone().multiplyScalar(oe*.7);ce.down?ce.v.add(Le):ue(ce,Le),Ee.down?Ee.v.sub(Le):ue(Ee,Le.clone().negate()),Ee.spin.x+=Ne.z*oe,ce.spin.z-=Ne.x*oe}let Be=.29-be;Ee.down&&Ee.mesh.position.addScaledVector(Ne,-Be*.5),ce.down&&ce.mesh.position.addScaledVector(Ne,Be*.5)}}function ge(){p=null,C.visible=!1;let U=u.filter(k=>k.down).length,A=U-T;if(U===10&&b===0&&Z(),E[g].push(A),T=U,b++,A===0&&o.encourage(),A>0&&!(U===10&&b===1)&&(o.cheer(U===10),i(U===10)),n(U===10?.8:.25),U===10||b===2){let k=U===10?b===1?"Strike!":"Spare!":`${U} pins.`;if(w.push(U),g++,b=T=0,t(g===10?`Bowling complete! ${$()} / 100 pins.`:`${k} Next frame.`),g===10){S=Math.max(S,$());try{localStorage.setItem("tfj-bowling-best-10-v1",String(S))}catch{}}else I()}else{for(let k of u)k.down&&(k.mesh.visible=!1,k.shadow.visible=!1);t(`${A} pins! One more bowl this frame.`)}Me()}function de(U,A){if(!f)return;let{dt:k,right:Q,controller:N}=U;y+=k,o.tick(k,A,{eye:U.eye,held:d,ball:p?C.position:null});let re=!!Q?.gamepad?.buttons[0]?.pressed,Ee=!!Q?.gamepad?.buttons[4]?.pressed;if(A){ne();return}Ae(k),re||(M=!0),Ee&&!x&&g===10&&X(),x=Ee;let ce=N&&N.visible!==!1?N.getWorldPosition(new _):null;if(re&&!v&&M&&!p&&!P&&g<10&&ce){let _e=s.stats();Math.abs(_e.x-h.x)>1.1||_e.z<h.z+6.7||_e.z>h.z+8.2||_e.y>.15?t("Return behind the yellow bowling line."):(d=!0,m=[],C.visible=!0)}if(d){if(!ce)ne();else if(C.position.copy(ce),m.push({time:y,p:ce.clone()}),m=m.filter(_e=>y-_e.time<.14),!re&&v){let _e=m.find(Ne=>y-Ne.time>=.04),be=_e?ce.clone().sub(_e.p).divideScalar(y-_e.time).clampLength(0,10):new _;d=!1,be.length()<.6||be.z>-.25?(C.visible=!1,t("Swing towards the pins before releasing.")):(L=!1,p={p:ce.clone().sub(h),v:be,age:0,gutter:!1})}}if(p||P){let _e=Math.max(1,Math.ceil(k/.008)),be=k/_e;for(let Ne=0;Ne<_e;Ne++){if(p){let oe=p;oe.age+=be,oe.v.y-=9.81*be,oe.p.addScaledVector(oe.v,be),oe.p.y<.174&&(oe.p.y=.174,oe.v.y=Math.abs(oe.v.y)>.8?Math.abs(oe.v.y)*.18:0,oe.v.x*=Math.exp(-.25*be),oe.v.z*=Math.exp(-.25*be)),Math.abs(oe.p.x)>1&&(oe.gutter=!0,oe.p.x=Math.sign(oe.p.x)*1.15,oe.v.x=0),C.position.copy(oe.p).add(h),C.rotation.x+=oe.v.z*be/.14;for(let Be of u)if(!Be.down&&!oe.gutter&&oe.p.y<.6){let Le=Be.mesh.position.x-oe.p.x,pt=Be.mesh.position.z-oe.p.z;Math.hypot(Le,pt)<.23&&(ue(Be,new _(oe.v.x,0,oe.v.z).multiplyScalar(.65)),oe.v.x*=.8,oe.v.z*=.84)}(oe.p.z<-.6||oe.age>7||Math.hypot(oe.v.x,oe.v.z)<.15)&&(p=null,P=2.6)}le(be);for(let oe of u)oe.shadow.position.x=oe.mesh.position.x,oe.shadow.position.z=oe.mesh.position.z,oe.shadow.material.opacity=ct.clamp(1-(oe.mesh.position.y-.25),.15,1);if(P&&(P=Math.max(0,P-be),!P)){ge();break}}}v=re}return{root:r,get best(){return S},crowd:o,fireworks:ie,get celebrations(){return se},start:Y,stop:K,cancel:ne,tick:de,get held(){return d},get flight(){return p},get pins(){return u},get origin(){return h},get frame(){return g},get roll(){return b},get total(){return $()},get totals(){return w},get frameRolls(){return E}}}function wd(s,e,t,n=.34){if(s.y<=t.y||e.y>t.y)return!1;let i=(s.y-t.y)/(s.y-e.y);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.z+(e.z-s.z)*i-t.z)<n}function Qa(s,e,t,n,i){let r=s.colliders.map(Z=>new Ye(new _(Z.min.x,Z.min.y,Z.min.z),new _(Z.max.x,Z.max.y,Z.max.z))),o=new Se;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=Z=>new Fe({color:Z,roughness:.6}),l=(Z,Ae,Me,ae=o)=>{let me=new ve(Z,Ae);return me.position.copy(Me),ae.add(me),me},c=new _,h=null,u=!1,f=!1,d=!1,p=null,m=[],y=0,v=!1,M=!1,x=0,g=0,b=0,w=0,E=!1;try{b=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let T=s.mollie.balls[0].ball.clone();T.scale.setScalar(.48),T.visible=!1,e.add(T);let P=l(new nt(.065,16,12),a("#ee528c"),new _,e);P.visible=!1,l(new nt(.03,8,6),a("#6ac68d"),new _(0,.06,0),P).scale.set(1,.4,1.7);let L=new dt;L.moveTo(0,.02),L.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),L.bezierCurveTo(.23,-.03,.16,.18,0,.02);let C=new ve(new Qt(L),new Te({color:16742315,side:it,transparent:!0}));C.visible=!1,e.add(C);let O=0,D=0,W=0,B=document.createElement("canvas");B.width=768,B.height=384;let $=B.getContext("2d"),R=new Ve(B);R.colorSpace=De;let z=l(new ze(1.5,.75),new Te({map:R}),new _);function F(){_t($,768,384),te($,"POK\xC9 BALL BASKETBALL",30,62,38,G.gold),te($,`${g} baskets \xB7 ${x}/10 throws`,30,139,46),te($,`Best: ${b} baskets`,30,204,32,G.mint),te($,x>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),te($,"Y: games menu \xB7 B: leave",30,337,25,G.muted),R.needsUpdate=!0}function V(){for(let[Z,Ae]of[[-4,8],[5,9],[-8,8],[12,8]]){let Me=!0;for(let ae=-1.5;ae<=1.5;ae+=.5)for(let me=-2;me<=2;me+=.5)(s.blocked(Z+ae,Ae+me,0)||Math.abs(s.groundAt(Z+ae,Ae+me,.1))>.1)&&(Me=!1);if(Me)return new _(Z,0,Ae)}return null}function fe(Z){if(c.set(Z.x,2.35,Z.z-1.5),z.position.set(Z.x+1.35,2,Z.z-1.75),o.children.length>1)for(let I of[...o.children])I!==z&&(o.remove(I),I.traverse(X=>{X.geometry?.dispose(),X.material?.dispose()}));let Ae=It("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);Ae.position.set(Z.x,3.7,Z.z-1.93),o.add(Ae);let Me=_n(1.1);Me.position.set(Z.x,4.1,Z.z-1.5),o.add(Me),l(new ye(.12,4.15,.12),a("#173d56"),new _(Z.x,2.075,Z.z-2)),l(new ye(.08,.08,.55),a("#173d56"),new _(Z.x,4.1,Z.z-1.75)),l(new ye(1.5,.95,.07),a("#e4f1f2"),new _(Z.x,2.65,Z.z-1.93));let ae=l(new Tt(.42,.025,10,48),a("#f5ab44"),c);ae.rotation.x=Math.PI/2;for(let I=0;I<12;I++){let X=I/12*Math.PI*2,Y=new _(c.x+Math.cos(X)*.41,c.y,c.z+Math.sin(X)*.41),K=new _(c.x+Math.cos(X+.2)*.23,c.y-.48,c.z+Math.sin(X+.2)*.23),ne=new bt(new Oe().setFromPoints([Y,K]),new gt({color:16777215}));o.add(ne)}l(new ye(.06,2.4,.06),a("#173d56"),new _(Z.x+1.35,1.2,Z.z-1.78)),l(new ye(1.56,.81,.045),a("#122538"),new _(Z.x+1.35,2,Z.z-1.78));let me=l(new ye(2,.015,.04),a("#f6d484"),new _(Z.x,.012,Z.z+1.45))}function j(Z){if(H(),Z==="friend")return f=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let Ae=V();return!Ae||!s.xrTeleport(Ae.x,0,Ae.z+1.9)?!1:(h=Ae,fe(Ae),s.xrFace?.(0),u=o.visible=!0,x=g=0,F(),!0)}function H(){u=f=d=!1,o.visible=T.visible=P.visible=C.visible=!1,p=null,m=[],M=!1,v=!1,O=0}function q(){d=!1,T.visible=P.visible=!1,m=[],M=!1,v=!0}function ie(){if(p=null,T.visible=!1,x===10){b=Math.max(b,g);try{localStorage.setItem("tfj-basket-best",String(b))}catch{}n(`Basketball complete! ${g} baskets from 10 throws.`)}F()}function pe(Z,Ae){t.react(Ae),O=1.5,C.visible=!0,w=2,i(.6),n(Z)}function se(Z,Ae){let{dt:Me,eye:ae,controller:me,right:I,leftController:X}=Z;y+=Me,w=Math.max(0,w-Me);let Y=!!I?.gamepad?.buttons[0]?.pressed,K=!!I?.gamepad?.buttons[4]?.pressed;if(Ae){q(),C.visible=!1;return}Y||(M=!0);let ne=me?.visible!==!1&&me?me.getWorldPosition(new _):null;if(f){if(t.group.updateMatrixWorld(!0),P.visible=!!ne&&Y&&M,P.visible){P.position.copy(ne);let le=t.group.localToWorld(new _(0,.43,.4));!w&&P.position.distanceTo(le)<.22&&(D++,pe(`Yum! Jigglypuff loved berry ${D}.`,"feed"),M=!1,P.visible=!1)}t.group.updateMatrixWorld(!0);let ue=t.group.localToWorld(new _(.46,.58,.03));for(let le of[me,X])if(le&&le.visible!==!1&&!Y&&!w&&le.getWorldPosition(new _).distanceTo(ue)<.24){W++,pe(`High-five! ${W} happy high-fives.`,"five");break}}else P.visible=!1;if(O>0?(O-=Me,C.visible=!0,C.position.copy(t.group.position).add(new _(0,1.3+(1.5-O)*.22,0)),C.lookAt(ae),C.material.opacity=Math.min(1,O*2)):C.visible=!1,!u){v=Y;return}if(K&&!E&&x===10&&!p&&(x=g=0,F()),E=K,ne&&Y&&!v&&M&&!p&&x<10&&(d=!0,m=[],T.visible=!0),d){if(!ne)q();else if(T.position.copy(ne),m.push({time:y,p:ne.clone()}),m=m.filter(ue=>y-ue.time<.14),!Y&&v){let ue=m.find(ge=>y-ge.time>=.04),le=ue?ne.clone().sub(ue.p).divideScalar(y-ue.time).clampLength(0,12):new _;d=!1,le.length()<.6?(T.visible=!1,n("Swing your hand upwards, then release.")):(x++,p={p:ne.clone(),v:le,age:0,scored:!1},F())}}if(p){let ue=Math.max(1,Math.ceil(Me/.008)),le=Me/ue;for(let ge=0;ge<ue&&p;ge++){let de=p,U=de.p.clone().addScaledVector(de.v,le);U.y-=4.9*le*le,de.v.y-=9.8*le;let A=U.clone().sub(de.p),k=A.length(),Q=new Ze(de.p,A.normalize()),N=new _;if(r.some(ce=>!ce.containsPoint(de.p)&&Q.intersectBox(ce,N)&&N.distanceTo(de.p)<=k)){ie();break}!de.scored&&wd(de.p,U,c)&&(de.scored=!0,g++,i(.8),F());let re=c.z-.4;(de.p.z-re)*(U.z-re)<0&&Math.abs(U.x-c.x)<.8&&U.y>2.17&&U.y<3.15&&(U.z=re+Math.sign(de.p.z-re)*.1,de.v.z*=-.65);let Ee=Math.hypot(U.x-c.x,U.z-c.z);Math.abs(U.y-c.y)<.1&&Ee>.33&&Ee<.53&&(de.v.x+=(U.x-c.x)*3,de.v.z+=(U.z-c.z)*3,de.v.y=Math.abs(de.v.y)*.45,U.y=c.y+.11),de.p.copy(U),de.age+=le,T.position.copy(U),T.rotation.x+=le*5,(U.y<.09||de.age>5)&&ie()}}v=Y}return{root:o,get best(){return b},start:j,stop:H,cancel:q,tick:se,get origin(){return h},get held(){return d},get shots(){return x},get score(){return g},get flight(){return p},get feeds(){return D},get fives(){return W},get berry(){return P},get hoop(){return c}}}function ja(s,e,t){let n=new Se;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new Se;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d"),a=new Ve(r);a.colorSpace=De;let l=new ve(new ze(1.75,.4375),new Te({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=It("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let h=s.colliders.map(B=>new Ye(new _(B.min.x,B.min.y,B.min.z),new _(B.max.x,B.max.y,B.max.z))),u=[],f=[],d=[],p=[],m=new Set,y=0,v=0,M=!1,x=!1,g=[],b=null,w={};try{w=qs(localStorage.getItem(Ys))}catch{}function E(){let B=f.length/2;if(!(x||y<B||y>=(w[B]??1/0))){w[B]=y;try{localStorage.setItem(Ys,JSON.stringify(w))}catch{}}}function T(){_t(o,1024,256),te(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,G.gold,"700"),te(o,`${m.size/2} / ${f.length/2} pairs  \xB7  ${y} turns`,28,101,38,G.ink,"700"),te(o,m.size===f.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,G.mint,"500"),te(o,x?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,G.muted,"400"),a.needsUpdate=!0}function P(){for(let B of u)B.geometry.dispose(),B.material.dispose();u=[];for(let B of d)for(let $ of B.material)$.userData.memoryOwned&&$.dispose();i.clear(),d=[],b=null}function S(){P();let B=[...s.mollie.found];x=B.length<2,x&&(B=[0,1,2,3]);for(let R=B.length-1;R>0;R--){let z=Math.floor(Math.random()*(R+1));[B[R],B[z]]=[B[z],B[R]]}B=B.slice(0,6),f=[...B,...B];for(let R=f.length-1;R>0;R--){let z=Math.floor(Math.random()*(R+1));[f[R],f[z]]=[f[z],f[R]]}p=[],m.clear(),y=v=0;let $=Math.ceil(f.length/4);d=f.map((R,z)=>{let F=s.mollie.cards[R].clone();F.userData={index:z},F.material=F.material.map(fe=>{let j=new Te(fe.map?{map:fe.map}:{color:15258527});return j.userData.memoryOwned=!0,j}),F.position.set((z%4-1.5)*.43,(($-1)/2-Math.floor(z/4))*.39,.012),F.rotation.set(0,Math.PI,0),F.scale.setScalar(.34/.62),F.visible=!0;let V=new ve(new ze(.268,.36),new Te({color:2508378}));return V.position.copy(F.position),V.position.z=.003,u.push(V),i.add(V,F),F}),g=d.map(()=>Math.PI),T()}function L(){return s.xrTeleport(-21.8,0,-10.78)?(s.xrFace?.(0),M=n.visible=!0,S(),!0):!1}function C(){M=n.visible=!1,p=[],v=0}function O(B){return!M||v||!Number.isInteger(B)||B<0||B>=f.length||m.has(B)||p.includes(B)||m.size===f.length?!1:(p.push(B),g[B]=0,t(.18),p.length===2&&(y++,v=.85),T(),!0)}function D(B,$=!1){if(M){for(let R=0;R<d.length;R++)d[R].rotation.y=ct.damp(d[R].rotation.y,g[R],16,B);if(!$&&v&&(v=Math.max(0,v-B),!v)){let[R,z]=p;f[R]===f[z]?(m.add(R),m.add(z),u[R].material.color.set(9429443),u[z].material.color.set(9429443),t(.55),m.size===f.length&&E()):g[R]=g[z]=Math.PI,p=[],T()}}}function W(B){if(b!==null&&u[b]&&u[b].material.color.set(m.has(b)?9429443:2508378),b=null,!M||!B)return null;n.updateMatrixWorld(!0);let $=new jt(B.position,B.direction,0,3.8).intersectObjects(d)[0];if(!$)return null;let R=new Ze(B.position,B.direction),z=new _;for(let V of h)if(R.intersectBox(V,z)&&z.distanceTo(B.position)<$.distance-.025)return null;let F=$.object.userData.index;return b=F,m.has(F)||u[F].material.color.set(16176260),{point:$.point,action:()=>O(F)}}return{root:n,start:L,stop:C,reset:S,tick:D,point:W,select:O,get records(){return{...w}},get deck(){return f},get cards(){return d},get moves(){return y},get matched(){return m},get waiting(){return v},get active(){return M},get complete(){return M&&m.size===f.length},get practice(){return x}}}function $s(){let s=new Se;s.name="Jigglypuff \xB7 3D";let e=x=>new Fe({color:x,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),r=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(x,g,b,w=s)=>{let E=new ve(x,g);return E.name=b,E.castShadow=E.receiveShadow=!0,w.add(E),E},c=(x,g,b,w,E,T,P,S,L=s)=>{let C=l(new nt(1,32,24),P,S,L);return C.position.set(x,g,b),C.scale.set(w,E,T),C};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let x of[-1,1]){let g=new Se;g.position.set(x*.27,.86,-.005),g.rotation.z=-x*.21,s.add(g);let b=new dt;b.moveTo(-.135,0),b.quadraticCurveTo(-.115,.16,-.025,.34),b.quadraticCurveTo(0,.39,.025,.34),b.quadraticCurveTo(.12,.13,.135,0),b.quadraticCurveTo(0,-.07,-.135,0);let w=l(new Jt(b,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",g);w.position.z=-.04;let E=new dt;E.moveTo(-.085,.025),E.quadraticCurveTo(-.06,.16,0,.29),E.quadraticCurveTo(.06,.16,.085,.025),E.quadraticCurveTo(0,-.005,-.085,.025);let T=l(new Qt(E,16),i,"Dark inner ear",g);T.position.z=.047,c(x*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let h=[];for(let x of[-1,1]){let g=new Se;g.position.set(x*.172,.625,.347),g.rotation.y=x*.24,s.add(g),h.push(g),c(0,0,0,.123,.153,.053,r,"Eye white",g),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",g),c(0,-.003,.063,.042,.079,.01,a,"Pupil",g),c(-.025,.045,.077,.024,.033,.007,r,"Eye sparkle",g),c(.022,-.045,.075,.011,.015,.005,r,"Small sparkle",g)}((x,g,b,w)=>l(new Qn(new pn(x.map(E=>new _(...E))),40,g,8,!1),b,w))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let f=[];for(let x=0;x<=36;x++){let g=x/36,b=Math.PI-g*Math.PI*2,w=.126*(1-.88*g);f.push(new _(.018+Math.cos(b)*w,.961+Math.sin(b)*w,.295+.035*g))}let d=new Qn(new pn(f),72,.042,12,!1),p=d.attributes.position,m=new pn(f);for(let x=0;x<=72;x++){let g=m.getPointAt(x/72),b=1-.66*(x/72)**2;for(let w=0;w<=12;w++){let E=x*13+w,T=new _().fromBufferAttribute(p,E).sub(g).multiplyScalar(b).add(g);p.setXYZ(E,T.x,T.y,T.z)}}d.computeVertexNormals(),l(d,n,"Curled fringe");let y=[];for(let x of[-1,1]){let g=new Se;g.position.set(x*.37,.48,.015),g.rotation.z=x*.6,s.add(g),c(x*.075,0,0,.14,.075,.075,t,"Little arm",g),y.push(g)}let v=0;function M(x,g=!1){v+=x,s.position.y=Math.max(0,Math.sin(v*2.5))*.028;let b=v%4.4>4.2?.09:1;h.forEach(w=>w.scale.y=b),y[1].rotation.z=.6+(g?Math.sin(v*4)*.25:Math.sin(v*2)*.04)}return{group:s,animate:M}}function el(s,e){let t=$s(),n=new Se;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,r=.52,o=[],a=null,l=!0,c=0,h=null,u=0,f=0,d="",p=(M,x)=>Math.hypot(M.x-x.x,M.z-x.z);function m(M,x){let g=new _(-x.z,0,x.x);for(let[b,w]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let E=M.x+x.x*b+g.x*w,T=M.z+x.z*b+g.z*w,P=s.groundAt(E,T,M.y+.2);if(Math.abs(P-M.y)<.35&&!s.blocked(E,T,P))return n.position.set(E,P,T),o=[],a=new _(M.x,M.y,M.z),c=0,h=null,u=.15,!0}return!1}function y(M,x,g,b=!1){M=Math.min(M,.05);let w=s.stats(),E=new _(w.x,w.y,w.z);if(g){n.visible=!1,l=!0,h=null;return}let T=new _(x.x,0,x.z).normalize();if(T.lengthSq()<.01&&T.set(0,0,-1),l||n.position.distanceTo(E)>8||a&&a.distanceTo(E)>3||p(n.position,E)<.9){if(!m(w,T)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(E)>.18)&&(o.push(E.clone()),a=E.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let P=b?1.05:i;u=Math.max(0,u-M);let S=p(n.position,E);if(!h&&u===0){let D=null,W=0;if(S<P?(D=n.position.clone().sub(E),D.y=0,D.normalize(),W=Math.min(.8,P+.2-S)):S>P+.35&&(o.length||b)&&(D=(b?E:o[0]).clone().sub(n.position),D.y=0,W=Math.min(.8,D.length(),S-P),D.normalize()),D&&W>.04){let B=n.position.clone(),$=B.clone().addScaledVector(D,W),R=!0,z=B.y;for(let F=1;F<=8;F++){let V=B.clone().lerp($,F/8),fe=s.groundAt(V.x,V.z,z+.22);if(Math.abs(fe-z)>.35||s.blocked(V.x,V.z,fe)||p(V,E)<Math.min(P,S)-.01){R=!1;break}z=fe}$.y=z,R?(h={from:B,to:$,time:0},c=0):(c+=M,c>2.5&&m(w,T))}else c=0}let L=0,C=0;if(h){h.time+=M;let D=Math.min(1,h.time/r),W=h.from.clone().lerp(h.to,D),B=p(n.position,E);p(W,E)>=Math.min(P,B)-.001&&!s.blocked(W.x,W.z,W.y)&&n.position.copy(W),L=Math.sin(Math.PI*D)*.3,C=Math.sin(Math.PI*D)*.08,D===1&&(h=null,u=.14)}else u>0&&(C=-Math.sin(Math.PI*Math.min(1,u/.14))*.1);let O=Math.atan2(w.x-n.position.x,w.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(O-n.rotation.y),Math.cos(O-n.rotation.y))*Math.min(1,M*5),t.animate(M,S<3),t.group.position.y=L,t.group.scale.set(1-C*.5,1+C,1-C*.5),f>0){f=Math.max(0,f-M);let D=Math.abs(Math.sin(f*9));t.group.position.y+=D*(d==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(f*20)*.06}}function v(){l=!0,n.visible=!1,o=[],a=null,h=null}return{group:n,tick:y,summon:v,radius:i,react(M){f=1.3,d=M},get hopping(){return!!h},get trail(){return o},get hidden(){return l}}}function tl(s,e,t){let n=new Se;n.name="Mollie\u2019s VR book",s.add(n),n.visible=!1;let i=new Se;n.add(i);let r=[],o=-1,a=null,l=!1,c=1,h=null,u=null,f=null,d=null,p=new Ie,m=new Te({color:16446169}),y=new Te({color:1455692}),v=new Te({color:13944999}),M=new Te({color:15386989});function x(R,z,F,V,fe,j,H=0){let q=new ve(new ye(R,z,F),V);return q.position.set(fe,j,H),i.add(q),q}function g(R,z,F,V,fe,j=44,H=null,q="#17364b",ie=null){let pe=document.createElement("canvas");pe.width=1024,pe.height=Math.round(1024*F/z);let se=pe.getContext("2d"),Z;function Ae(me=!1){if(se.clearRect(0,0,pe.width,pe.height),H){let I=H==="#eac96d";Je(se,4,4,1016,pe.height-8,{top:I?"#ffe8ac":me?"#365e76":"#24475f",bottom:I?"#d9b66c":"#142e43",stroke:me?"#ffe09a":I?"#fff0c7":"#597b91",radius:Math.min(28,pe.height/5)})}se.textAlign="center",se.textBaseline="middle",se.fillStyle=H==="#eac96d"?"#17364b":me?G.gold:q,se.font=`bold ${j}px Arial`,R.forEach((I,X)=>se.fillText(I,512,pe.height*(X+1)/(R.length+1),944)),Z&&(Z.needsUpdate=!0)}Ae(),Z=new Ve(pe),Z.colorSpace=De;let Me=new Te({map:Z,transparent:!0,side:it}),ae=new ve(new ze(z,F),Me);return ae.position.set(V,fe,.06),i.add(ae),ie&&(ae.userData.action=ie,ae.userData.paint=Ae,r.push(ae)),ae}function b(){let R=document.createElement("canvas");R.width=R.height=256;let z=R.getContext("2d");z.fillStyle="#203f53",z.beginPath(),z.arc(128,128,112,0,Math.PI*2),z.fill(),z.strokeStyle="#b99b5c",z.lineWidth=3,z.stroke(),en(z,"ball",128,128,185,G.gold);let F=new Ve(R);F.colorSpace=De;let V=new ve(new ze(.2,.2),new Te({map:F,transparent:!0}));V.position.set(.02,.015,.061),i.add(V)}function w(){i.traverse(R=>{R.userData.borrowed||(R.geometry&&R.geometry.dispose(),R.material&&!Array.isArray(R.material)&&![m,y,v,M].includes(R.material)&&(R.material.map?.dispose(),R.material.dispose()))}),i.clear(),r.length=0,u=null}function E(R,z,F,V,fe){let j=e.mollie.cards[R].clone();return j.userData={borrowed:!0},j.material=j.material.map(H=>{if(!H.map)return H;let q=new Te({map:H.map});return q.userData.albumOwned=!0,q}),j.position.set(z,F,.085),j.scale.setScalar(V/.62),j.rotation.set(0,0,0),j.visible=!0,fe&&(j.userData.action=fe,r.push(j)),i.add(j),j}function T(){i.traverse(R=>{if(R.userData.borrowed)for(let z of R.material)z.userData.albumOwned&&z.dispose()}),w()}function P(){if(T(),d=null,n.position.z=a!==null?.38:0,a!==null){g([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),u=E(a,-.28,0,1.05*c),u.rotation.y=l?Math.PI:0,p.copy(u.quaternion),g(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new _(0,1,0),l?Math.PI:0)}),g(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>S(.12)),g(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>S(-.12)),g(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",O),g(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){x(1.04,1.33,.06,y,0,0),x(.038,1.29,.07,M,-.47,0,.025),g(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),g([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),b(),g(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>L(0)),g(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}x(2.1,1.37,.055,y,0,0,-.02),x(2.02,1.3,.045,v,0,0,.005),x(.98,1.26,.018,m,-.502,0,.036),x(.98,1.26,.018,m,.502,0,.036),x(.025,1.29,.02,v,0,0,.055);for(let R of[-1,1]){let z=o*2+(R===1?1:0),F=R*.5;g([e.mollie.found.has(z)?e.xrGames.names[z]:`Mystery card ${z+1}`],.88,.12,F,.53,56),e.mollie.found.has(z)?E(z,F,-.005,.8,()=>C(z)):(x(.58,.8,.006,new Te({color:14476515}),F,-.005,.062),g(["?"],.5,.6,F,-.005,300,null,"#89a2ab")),g([`${z+1} / 18`],.7,.09,F,-.54,52)}g(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>L(o-1)),g([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),g(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>L(Math.min(8,o+1))),g(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),g(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function S(R){c=ct.clamp(c+R,.72,1.12),u.scale.setScalar(1.05*c/.62)}function L(R){if(h||R===o)return;R=ct.clamp(R,-1,8);let z=new Se;z.name="Turning album page",n.add(z);let F=new ve(new ye(.99,1.27,.012),m);if(F.position.x=R>o?.495:-.495,F.userData.pageTurnOwned=!0,z.add(F),o>=0){for(let V of i.children)if(V.position.z>.045&&Math.abs(V.position.y)<.64&&(R>o?V.position.x>.05:V.position.x<-.05)){let fe=V.clone();fe.userData={},z.add(fe)}}z.position.z=.16,h={leaf:z,next:R,elapsed:0,direction:R>o?-1:1}}function C(R){return e.mollie.found.has(R)?(a=R,l=!1,c=1,f=null,P(),!0):!1}function O(){a!==null?(a=null,f=null,P()):t()}function D(){o=-1,a=null,n.visible=!0,P()}function W(){h&&(h.leaf.traverse(R=>{R.userData.pageTurnOwned&&R.geometry?.dispose()}),n.remove(h.leaf),h=null),f=null,n.visible=!1}function B(R){var V;if(!R||h)return null;n.updateMatrixWorld(!0);let z=new jt(R.position,R.direction,0,5).intersectObjects(r)[0],F=z?.object||null;return F!==d&&(d&&(d.userData.paint?.(!1),d.userData.restScale&&d.scale.copy(d.userData.restScale)),d=F,d&&(d.userData.paint?.(!0),(V=d.userData).restScale??(V.restScale=d.scale.clone()),d.scale.copy(d.userData.restScale).multiplyScalar(1.025))),z?{point:z.point,action:z.object.userData.action}:null}function $(R,z,F){if(h){h.elapsed+=R;let V=Math.min(1,h.elapsed/.48);h.leaf.rotation.y=h.direction*Math.PI*(V*V*(3-2*V)),V>=1&&(n.remove(h.leaf),h.leaf.traverse(fe=>{fe.userData.pageTurnOwned&&fe.geometry?.dispose()}),o=h.next,h=null,P())}if(u)if(z&&F){f||(f={hand:F.clone().invert(),start:u.quaternion.clone()});let V=F.clone().multiply(f.hand),fe=i.getWorldQuaternion(new Ie);u.quaternion.copy(fe.clone().invert().multiply(V).multiply(fe).multiply(f.start))}else f?(f=null,p.copy(u.quaternion)):u.quaternion.slerp(p,1-Math.exp(-10*R))}return{root:n,open:D,close:W,point:B,tick:$,back:O,inspect:C,change:L,get page(){return o},get inspected(){return a},get card(){return u},get turning(){return!!h}}}var rt={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},Ad=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function Ed(s,e){let t=Math.hypot(s,e)*384/rt.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(s,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=Ad[Math.floor(n/(Math.PI/10))],r=t>=268?2:t>=163&&t<=184?3:1;return{score:i*r,label:`${r===3?"Triple ":r===2?"Double ":""}${i} \xB7 ${i*r}`}}function Cd(s){let e=s.at(-1);if(!e)return new _;let t=s.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new _}function Rd(s,e,t){let n=s.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function Pd(s,e){if(s.x<=rt.x||e.x>rt.x)return null;let t=(rt.x-s.x)/(e.x-s.x),n=s.clone().lerp(e,t);return Math.hypot(n.y-rt.y,n.z-rt.z)<=.47?{point:n,...Ed(-(n.z-rt.z),n.y-rt.y)}:null}function nl(s,e,t){let n=new Se;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new Fe({color:12044498,metalness:.75,roughness:.28}),r=new Fe({color:2112336,roughness:.45}),o=new Fe({color:16764759,side:it,roughness:.8}),a=[];function l(H,q){return a.push(H),new ve(H,q)}function c(){let H=new Se;H.name="3D dart";let q=l(new In(.004,.035,8),i);q.rotation.x=-Math.PI/2,q.position.z=.0175,H.add(q);let ie=l(new et(.006,.007,.045,10),i);ie.rotation.x=Math.PI/2,ie.position.z=.0575,H.add(ie);for(let se=0;se<5;se++){let Z=l(new Tt(.007,8e-4,4,10),r);Z.position.z=.043+se*.007,H.add(Z)}let pe=l(new et(.003,.003,.06,8),r);pe.rotation.x=Math.PI/2,pe.position.z=.11,H.add(pe);for(let se=0;se<2;se++){let Z=l(new ye(.044,.001,.05),o);Z.rotation.z=se*Math.PI/2,Z.position.z=.15,H.add(Z)}return H}let h=c();n.add(h),h.visible=!1;let u=document.createElement("canvas");u.width=1024,u.height=640;let f=u.getContext("2d"),d=new Ve(u);d.colorSpace=De;let p=new ve(new ze(.95,.594),new Te({map:d}));p.name="Wall-mounted darts scoreboard",p.position.set(rt.x+.05,1.8,rt.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let m=new ve(new ye(1.01,.654,.035),new Fe({color:1517105,roughness:.7}));m.name="Darts scoreboard frame",m.position.copy(p.position),m.position.x-=.022,m.rotation.copy(p.rotation),n.add(m);let y=It("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);y.position.set(rt.x+.065,2.43,rt.z),y.rotation.y=Math.PI/2,n.add(y);let v=_n(.9);v.position.set(rt.x+.55,2.75,rt.z),n.add(v);let M=s.colliders.map(H=>new Ye(new _(H.min.x,H.min.y,H.min.z),new _(H.max.x,H.max.y,H.max.z))),x=!1,g=!1,b=null,w=[],E=0,T=!1,P=!1,S=!1,L=0,C=0,O="Hold trigger, throw, release.",D=0,W=[];try{D=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function B(){Ba(f,{total:L,throws:C,best:D,last:O}),d.needsUpdate=!0}function $(H=!1){g=!1,w=[],h.visible=!1,b&&!H&&(n.remove(b.mesh),b=null),T=!0,P=!1}function R(){$();for(let H of W)n.remove(H);W=[],C=L=0,O="Nine darts. Make them count!",B()}function z(){let q=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([ie,pe])=>!s.blocked(ie,pe,0));return!q||!s.xrTeleport(q[0],0,q[1])?!1:(s.xrFace?.(Math.PI/2),n.visible=x=!0,R(),!0)}function F(){$(),x=!1,n.visible=!1}function V(H,q){let ie=b;if(ie){if(ie.mesh.position.copy(q),W.push(ie.mesh),b=null,C++,L+=H.score,O=H.label,t(H.score>0?.6:.12),C===9&&L>D){D=L;try{localStorage.setItem("tfj-vr-darts-best-v1",String(D))}catch{}}B()}}function fe(H,q){let ie=h.clone();ie.visible=!0,ie.position.copy(H),ie.quaternion.setFromUnitVectors(new _(0,0,-1),q.clone().normalize()),n.add(ie),b={mesh:ie,position:H.clone(),velocity:q.clone(),age:0},h.visible=!1,g=!1,w=[]}function j(H,q,ie,pe,se=!1){if(E+=H,!!x){if(se){g&&$();return}if(ie||(P=!0),pe&&!S&&C===9&&R(),S=pe,q&&ie&&!T&&P&&!b&&C<9){let Z=s.stats();Z.x<rt.ocheX-.04||Z.x>rt.ocheX+1.6||Math.abs(Z.z-rt.z)>1||Z.y>.15?(O="Stand behind the yellow line.",B()):(g=!0,w=[],h.visible=!0,t(.12))}if(g&&q&&(h.position.copy(q.position).addScaledVector(q.direction,.07),h.quaternion.setFromUnitVectors(new _(0,0,-1),q.direction),w.push({time:E,position:q.position.clone()}),w=w.filter(Z=>E-Z.time<.15),!ie&&T)){let Z=Cd(w);Z.length()<.6?(g=!1,h.visible=!1,O="Swing your hand before releasing.",B()):fe(h.position,Z)}if(g&&!q&&$(),T=ie,b){let Z=Math.max(1,Math.ceil(H/.004166666666666667)),Ae=H/Z;for(let Me=0;Me<Z&&b;Me++){let ae=b,me=Rd(ae.position,ae.velocity,Ae),I=Pd(ae.position,me.position),X=me.position.clone().sub(ae.position),Y=X.length(),K=new Ze(ae.position,X.clone().normalize()),ne=new _,ue=null,le=Y+1e-8;for(let ge of M){if(ge.containsPoint(ae.position)){ue=ae.position.clone(),le=0;break}if(K.intersectBox(ge,ne)){let de=ne.distanceTo(ae.position);de<=le&&(le=de,ue=ne.clone())}}if(I&&(!ue||I.point.distanceTo(ae.position)<=le)){V(I,I.point);break}if(ue){V({score:0,label:"Miss \xB7 hit scenery"},ue);break}if(me.position.y<=.025){let ge=ct.clamp((ae.position.y-.025)/(ae.position.y-me.position.y),0,1),de=ae.position.clone().lerp(me.position,ge);ae.mesh.quaternion.setFromUnitVectors(new _(0,0,-1),new _(ae.velocity.x,0,ae.velocity.z).normalize()),V({score:0,label:"Miss \xB7 floor"},de);break}if(ae.position.copy(me.position),ae.velocity.copy(me.velocity),ae.mesh.position.copy(ae.position),ae.mesh.quaternion.slerp(new Ie().setFromUnitVectors(new _(0,0,-1),ae.velocity.clone().normalize()),1-Math.exp(-18*Ae)),ae.age+=Ae,ae.age>4){V({score:0,label:"Miss"},ae.position);break}}}}}return{root:n,get best(){return D},start:z,stop:F,cancel:$,reset:R,update:j,launch:fe,get active(){return x},get held(){return g},get flight(){return b},get total(){return L},get throws(){return C},get last(){return O},get resting(){return W}}}function il(s,e,t,n,i=.35){let r=e.clone().sub(s),o=r.length();if(o<1e-7)return null;let a=new Ze(s,r.multiplyScalar(1/o)),l=new _,c=o+1e-6,h=null;for(let u of t){let f=u.clone().expandByScalar(.045);if(f.containsPoint(s))return{type:"wall",point:s.clone(),distance:0};if(a.intersectBox(f,l)){let d=l.distanceTo(s);d<=c&&(c=d,h={type:"wall",point:l.clone(),distance:d})}}for(let u of n)if(a.intersectSphere(new kt(u.position,i),l)){let f=l.distanceTo(s);f<c&&(c=f,h={type:"target",id:u.id,point:l.clone(),distance:f})}return h}function Id(s,e){let t=s.at(-1),n=s.find(r=>t.time-r.time<=.12&&t.time-r.time>=.045),i=new _;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new _(0,1.3,0)),i.clampLength(0,9)}function sl(s){let e=s.worldScene,t=new Se;t.name="VR games",t.visible=!1,e.add(t);let n=ka(t),i=new Se;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let J of[...s.mollie.balls.map(xe=>xe.ball),...s.mollie.cards,s.mollie.thrownBall])J?.isObject3D&&i.attach(J);let r=s.colliders.map(J=>new Ye(new _(J.min.x,J.min.y,J.min.z),new _(J.max.x,J.max.y,J.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new Ve(o);l.colorSpace=De;let c=new Se;t.add(c);let h=new ve(new ze(1.6,1.2),new Te({map:l,side:it}));c.add(h),c.visible=!1;let u=new ve(new ye(1.64,1.24,.035),new Te({color:3561833}));u.position.z=-.025,c.add(u);let f=new Se;c.add(f);let d=new bt(new Oe().setFromPoints([new _,new _(0,0,-1)]),new gt({color:16769946}));d.visible=!1,t.add(d);let p=new ve(new nt(.012,8,6),new Te({color:16769946}));p.visible=!1,t.add(p);let m=s.mollie.balls[0].ball.clone();m.scale.setScalar(.43),m.visible=!1,t.add(m);let y=$s();y.group.visible=!1,t.add(y.group);let v=document.createElement("canvas");v.width=768,v.height=192;let M=v.getContext("2d"),x=new Ve(v);x.colorSpace=De;let g=new ve(new ze(.95,.2375),new Te({map:x,transparent:!0,depthTest:!1,depthWrite:!1}));g.name="Adventure notification",g.renderOrder=1e3,t.add(g),g.visible=!1;let b="explore",w="menu",E=[],T=null,P=null,S=0,L=!1,C=null,O=!1,D=null,W=[],B=0,$=!1,R=!1,z=!1,F=!0,V=[],fe=0,j=0,H="Welcome, Mollie!",q="",ie=0,pe=!1,se=null,Z=0,Ae=0;try{Ae=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let Me=(J,xe=.3)=>{try{J?.gamepad?.hapticActuators?.[0]?.pulse(xe,70)?.catch?.(()=>{})}catch{}},ae=tl(c,s,()=>{w="menu",ae.close(),h.visible=u.visible=!0,F=!0,be()}),me=nl(s,t,J=>Me(C?.right,J)),I=ja(s,t,J=>Me(C?.right,J)),X=el(s,t),Y=Za(s,t,Et,J=>Me(C?.right,J)),K=qa(s,t,Et,J=>Me(C?.right,J)),ne=0,ue=!0;try{ue=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function le(J){ue=!!J;try{localStorage.setItem("tfj-companion-enabled",String(ue))}catch{}ue?X.summon():(b==="friend"&&Ft(),X.group.visible=!1),be()}let ge=Ka(s,t,Et,J=>Me(C?.right,J),re),de=Qa(s,t,X,Et,J=>Me(C?.right,J)),U=$a(s,e,()=>({bowling:ge.best||null,darts:me.best||null,golf:K.best,basketball:de.best||null,planes:Y.best||null,memory:I.records,hide:Ae}),Et),A=!1;function k(){if(b==="jigglypuff"){H="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",Be();return}X.summon(),Le()}function Q(){At(),w="album",h.visible=u.visible=!1,f.clear(),ae.open(),F=!0}function N(){try{se??(se=new(window.AudioContext||window.webkitAudioContext)),se.resume()?.catch(()=>{})}catch{}}function re(J){if(!(!se||se.state!=="running"))try{let xe=Math.floor(se.sampleRate*.07),Ge=se.createBuffer(1,xe,se.sampleRate),Ke=Ge.getChannelData(0);for(let we=0;we<xe;we++)Ke[we]=(Math.random()*2-1)*Math.exp(-we/xe*5);for(let we=0;we<(J?12:7);we++){let ot=se.createBufferSource(),$e=se.createGain(),Gt=se.createBiquadFilter();ot.buffer=Ge,Gt.type="highpass",Gt.frequency.value=650,$e.gain.value=.055+we%3*.012,ot.connect(Gt),Gt.connect($e),$e.connect(se.destination),ot.start(se.currentTime+we*.095+we%2*.025),ot.onended=()=>{ot.disconnect(),Gt.disconnect(),$e.disconnect()}}}catch{}}function Ee(){if(!se||se.state!=="running")return;let J=y.group.position;try{let xe=se.createPanner();xe.panningModel="HRTF",xe.distanceModel="inverse",xe.refDistance=2,xe.maxDistance=25,xe.positionX.value=J.x,xe.positionY.value=J.y+.6,xe.positionZ.value=J.z,xe.connect(se.destination),[523.25,659.25,587.33].forEach((Ge,Ke)=>{let we=se.createOscillator(),ot=se.createGain(),$e=se.currentTime+Ke*.18;we.type="sine",we.frequency.value=Ge,ot.gain.setValueAtTime(0,$e),ot.gain.linearRampToValueAtTime(.09,$e+.025),ot.gain.exponentialRampToValueAtTime(.001,$e+.17),we.connect(ot),ot.connect(xe),we.start($e),we.stop($e+.18),we.onended=()=>{we.disconnect(),ot.disconnect()}}),setTimeout(()=>xe.disconnect(),1200)}catch{}}function ce(J,xe,Ge,Ke=32,we="#fff"){a.font=`${Ke>=40?"bold ":""}${Ke}px Arial`,a.fillStyle=we,a.fillText(J,xe,Ge)}function _e(J,xe,Ge,Ke,we){E.push({label:J,x:xe,y:Ge,w:Ke,h:72,action:we}),Ua(a,J,xe,Ge,Ke,T===J)}function be(){w!=="album"&&(E=[],Na(a,Po()),ne===0?(_e("Pok\xE9mon throwing hunt",44,196,455,()=>Ot("hunt")),_e("Jigglypuff hide-and-seek",519,196,461,()=>Ot("jigglypuff")),_e("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>Ot("darts")),_e("Memory match \xB7 staff-room table",519,280,461,()=>Ot("memory")),_e(`Open the card album \xB7 ${s.mollie.found.size} / 18`,44,364,455,Q),_e("Play with Jigglypuff",519,364,461,()=>Ot("friend")),_e("Pok\xE9 Ball basketball",44,448,455,()=>Ot("basketball")),_e("Warehouse bowling",519,448,461,()=>Ot("bowling"))):(_e("Paper-plane challenge",44,196,936,()=>Ot("planes")),_e("Warehouse mini-golf",44,280,936,()=>Ot("golf")),_e("Arcade wall of fame",44,364,455,pt),_e("Back to exploring",519,364,461,()=>{Ft(),Le()}),_e(ue?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>le(!ue))),_e("Resume",44,548,445,Le),_e(ne===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{ne=1-ne,be()}),Fa(a),l.needsUpdate=!0)}function Ne(){f.clear()}function oe(){if(!C){pe=!0;return}pe=!1;let J=C.forward.clone();J.y=0,J.normalize(),c.position.copy(C.eye).addScaledVector(J,1.9),c.position.y=Math.max(C.eye.y-.1,s.stats().y+.85),c.rotation.set(0,Math.atan2(-J.x,-J.z),0)}function Be(){ne=0,ie=0,g.visible=!1,At(),ae.close(),h.visible=u.visible=!0,w="menu",Ne(),c.visible=!0,F=!0,T=null,oe(),be()}function Le(){ae.close(),w="menu",h.visible=u.visible=!0,c.visible=!1,d.visible=p.visible=!1,F=!0,T=null}function pt(){Ft(),Le();let J=U.visit();return J&&(b="fame"),J}function At(J=!1){K.cancel(),Y.cancel(),ge.cancel(),de.cancel(),me.cancel(J),O=!1,D=null,W=[],m.visible=!1}function Ft(){n.update("explore",null),i.visible=!0,K.stop(),Y.stop(),ge.stop(),de.stop(),ie=0,g.visible=!1,I.stop(),me.stop(),b="explore",y.group.visible=!1,j=0,At(),H="Choose an adventure whenever you like."}function Co(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([xe,Ge,Ke])=>{for(let[we,ot]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let $e=new _(xe+we,0,Ge+ot);if(!s.blocked($e.x,$e.z,0)&&s.groundAt($e.x,$e.z,.1)===0&&s.mollie.balls.every(Gt=>Gt.ball.position.distanceTo($e)>1.3))return[{point:$e,clue:Ke}]}return[]})}function Ro(){y.group.position.copy(V[fe].point),y.group.visible=!0,Z=B+1,H=`Try ${V[fe].clue}.`,Et(H)}function Ot(J){if(Ft(),b=J,b==="golf"){if(!K.start()){b="explore",H="No clear warehouse green available.",be();return}i.visible=!1,Le();return}if(b==="friend"&&!ue&&le(!0),b==="planes"){if(!Y.start()){b="explore",H="The plane course is blocked. Try again.",be();return}Le();return}if(b==="bowling"){if(!ge.start()){b="explore",H="The warehouse lane is blocked. Try again.",be();return}i.visible=!1,Le();return}if(b==="friend"||b==="basketball"){if(!de.start(b)){b="explore",H="No clear basketball space available.",be();return}Le();return}if(b==="memory"){if(!I.start()){b="explore",H="The table is not accessible. Try again.",be();return}Le();return}if(b==="darts"){if(!me.start()){b="explore",H="The throwing line is blocked. Try again.",be();return}H="Nine darts. Hold trigger, throw and release.",Le();return}if(b==="hunt")s.xrGames.start(),H="Hold trigger, swing gently and release!";else{V=Co();for(let xe=V.length-1;xe>0;xe--){let Ge=Math.floor(Math.random()*(xe+1));[V[xe],V[Ge]]=[V[Ge],V[xe]]}if(V=V.slice(0,3),fe=0,V.length<3){b="explore",H="No clear hiding spots. Please try again.",be();return}Ro()}Le()}function al(){if(b!=="jigglypuff"||j||!y.group.visible)return!1;if(fe++,y.group.visible=!1,Me(C?.right,.6),fe===3){Ae++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(Ae))}catch{}b="explore",H="You found Jigglypuff 3 times! Champion!",Et(H)}else j=1.5,H=`Found ${fe} / 3! Finding a new hiding spot\u2026`,Et(H);return!0}function Po(){return b==="fame"?`Wall of fame: ${U.records.filter(J=>J.medal).length} / 8 medals earned`:b==="golf"?K.complete?`Mini-golf complete: ${K.total} strokes \xB7 Best ${K.best}`:`Mini-golf: hole ${K.hole+1}/6 \xB7 ${K.strokes} strokes \xB7 Par ${K.layout.par}`:b==="planes"?`Paper planes: ${Y.score} points \xB7 ${Y.throws}/5 throws \xB7 Longest ${Y.longest.toFixed(1)} m`:b==="bowling"?`Bowling: ${ge.total} / 100 pins \xB7 ${ge.frame===10?"Complete":`Frame ${ge.frame+1} \xB7 Bowl ${ge.roll+1}`}`:b==="basketball"?`Basketball: ${de.score} baskets \xB7 ${de.shots}/10 throws`:b==="friend"?`Berries: ${de.feeds} \xB7 High-fives: ${de.fives} \xB7 Offer a berry or touch her raised hand`:b==="hunt"?`Pok\xE9mon: ${s.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:b==="jigglypuff"?j?H:`Found ${fe}/3 \xB7 Try ${V[fe].clue}`:b==="darts"?`Darts: ${me.total} points \xB7 ${me.throws}/9 darts \xB7 ${me.last}`:b==="memory"?`Memory: ${I.matched.size/2}/${I.deck.length/2} pairs \xB7 ${I.moves} turns`:H}function Et(J){q=J,Oa(M,J),x.needsUpdate=!0,ie=3}function ll(J){if(g.visible=!c.visible&&ie>0,!g.visible)return;let xe=J.headOrientation||new Ie().setFromUnitVectors(new _(0,0,-1),J.forward.clone().normalize());g.position.set(0,-.28,-2.1).applyQuaternion(xe).add(J.eye),g.quaternion.copy(xe),g.material.opacity=Math.min(1,ie/.5),ie=Math.max(0,ie-J.dt)}function cl(J){return!J||J.visible===!1?null:{position:J.getWorldPosition(new _),direction:new _(0,0,-1).applyQuaternion(J.getWorldQuaternion(new Ie))}}function hl(J){if(!J)return null;if(w==="album"){let we=ae.point(J);return d.geometry.setFromPoints([J.position,we?we.point:J.position.clone().addScaledVector(J.direction,2)]),d.visible=!0,p.visible=!!we,we&&p.position.copy(we.point),we?{...we,label:"album"}:null}c.updateMatrixWorld(!0);let xe=new jt(J.position,J.direction,0,4).intersectObject(h)[0];if(d.geometry.setFromPoints([J.position,xe?xe.point:J.position.clone().addScaledVector(J.direction,2)]),d.visible=!0,p.visible=!!xe,xe&&p.position.copy(xe.point),!xe)return null;let Ge=xe.uv.x*1024,Ke=(1-xe.uv.y)*768;return E.find(we=>Ge>=we.x&&Ge<=we.x+we.w&&Ke>=we.y&&Ke<=we.y+we.h)}function ul(J){if(!J||!y.group.visible)return!1;let xe=y.group.position.clone().add(new _(0,.58,0)),Ge=J.position.clone().addScaledVector(J.direction,4);return il(J.position,Ge,r,[{id:0,position:xe}],.5)?.type==="target"&&J.position.distanceTo(xe)<3.3}function dl(J){C=J,pe&&oe();let{dt:xe,eye:Ge,forward:Ke,right:we,left:ot,controller:$e}=J,Gt=me.throws,gl=I.complete;B+=xe;let sn=!!we?.gamepad?.buttons[0]?.pressed,Io=!!ot?.gamepad?.buttons[5]?.pressed,Lo=!!we?.gamepad?.buttons[5]?.pressed,Lt=cl($e);if(Io&&!R&&(c.visible?Le():Be()),Lo&&!z&&(c.visible&&w==="album"?(ae.back(),F=!0):c.visible?Le():(Ft(),Be())),R=Io,z=Lo,sn||(F=!1),c.visible){w==="album"&&ae.tick(xe,!!we?.gamepad?.buttons[1]?.pressed,$e?.getWorldQuaternion(new Ie));let ht=hl(Lt);T=ht?.label||null,T!==P&&(P=T,be()),sn&&!$&&!F&&ht&&(Me(we),ht.action(),F=!0),g.visible=!1}else d.visible=p.visible=!1,b==="darts"&&me.update(xe,F?null:Lt,!F&&sn,!!we?.gamepad?.buttons[4]?.pressed),b==="hunt"&&Lt&&(sn&&!$&&!F&&!D&&(O=!0,W=[],m.visible=!0,Me(we,.15)),O&&(m.position.copy(Lt.position).addScaledVector(Lt.direction,.09),W.push({time:B,position:Lt.position.clone()}),W=W.filter(ht=>B-ht.time<.16),!sn&&$&&(D={position:m.position.clone(),velocity:Id(W,Lt.direction),life:0},O=!1,W=[],Me(we,.2)))),b==="jigglypuff"&&(y.animate(xe,!1),j?(j-=xe,j<=0&&(j=0,Ro())):y.group.visible&&(y.group.rotation.y=Math.atan2(Ge.x-y.group.position.x,Ge.z-y.group.position.z),ul(Lt)&&(d.geometry.setFromPoints([Lt.position,y.group.position.clone().add(new _(0,.6,0))]),d.visible=!0,sn&&!$&&!F&&al()),B>Z&&(Ee(),Z=B+6)));if(b==="memory"){I.tick(xe,c.visible);let ht=!!we?.gamepad?.buttons[4]?.pressed;if(ht&&!A&&I.complete&&!c.visible&&I.reset(),A=ht,!c.visible){let mt=I.point(Lt);mt&&(d.geometry.setFromPoints([Lt.position,mt.point]),d.visible=!0,p.position.copy(mt.point),p.visible=!0,sn&&!$&&!F&&mt.action())}}if(n.update(b,b==="golf"?K.origin:b==="bowling"?ge.origin:b==="planes"?Y.origin:b==="basketball"?de.origin:null),i.visible=!["bowling","golf"].includes(b),b==="fame"&&U.site&&Math.hypot(Ge.x-U.site.view.x,Ge.z-U.site.view.z)>7&&(b="explore"),X.tick(xe,Ke,!ue||["fame","jigglypuff","darts","basketball","bowling","planes","memory","golf"].includes(b),b==="friend"),de.tick(J,c.visible),ge.tick(J,c.visible),Y.tick(J,c.visible),K.tick(J,c.visible),U.tick(xe),!$e&&O&&At(),D&&!c.visible){let ht=Math.max(1,Math.ceil(xe/.012)),mt=xe/ht;for(let Di=0;Di<ht&&D;Di++){let Mn=D,ti=Mn.position.clone().addScaledVector(Mn.velocity,mt);ti.y-=4.9*mt*mt;let xl=s.mollie.balls.flatMap((_l,Do)=>s.mollie.found.has(Do)?[]:[{id:Do,position:_l.ball.position}]),Ui=il(Mn.position,ti,r,xl);if(Ui){Ui.type==="target"&&s.xrGames.collect(Ui.id)&&(H=`${s.xrGames.names[Ui.id]} found! ${s.mollie.found.size}/18 cards.`,Et(H),Me(we,.8),s.mollie.found.size===18&&(H="All 18 cards found! Brilliant, Mollie!",Et(H))),At();break}Mn.position.copy(ti),Mn.velocity.y-=9.8*mt,Mn.life+=mt,m.position.copy(ti),m.rotation.x+=mt*7,(ti.y<0||Mn.life>3)&&At()}}if(se?.listener)try{let ht=se.listener;for(let[mt,Di]of Object.entries({positionX:Ge.x,positionY:Ge.y,positionZ:Ge.z,forwardX:Ke.x,forwardY:Ke.y,forwardZ:Ke.z,upX:0,upY:1,upZ:0}))ht[mt]&&(ht[mt].value=Di)}catch{}return b==="darts"&&Gt<9&&me.throws===9&&Et(`Round complete! ${me.total} points. A to play again.`),b==="memory"&&!gl&&I.complete&&Et(`All pairs matched in ${I.moves} turns!`),ll(J),$=sn,{consumeTrigger:c.visible||b!=="explore"||F,blockTeleport:K.held,blockMovement:c.visible||O||me.held||de.held||ge.held||Y.held||K.held}}function fl(){X.summon(),t.visible=!0,b="explore",$=R=z=!1,F=!0,H="Choose a game, or resume exploring.",Be()}function pl(){Ft(),Le(),g.visible=!1,t.visible=!1,C=null,se?.suspend()?.catch(()=>{})}function ml(){At(!0),$=!0,F=!0}return{pokemonLayer:i,setCompanionEnabled:le,get companionEnabled(){return ue},fame:U,visitFame:pt,golf:K,planes:Y,bowling:ge,play:de,memory:I,companion:X,progress:Po,callCompanion:k,album:ae,darts:me,showAlbum:Q,tick:dl,begin:fl,end:pl,enableAudio:N,open:Be,close:Le,start:Ot,stop:Ft,interrupt:ml,chooseSpots:Co,get mode(){return b},get menuOpen(){return c.visible},get found(){return fe},get route(){return V},get held(){return O||me.held||de.held||ge.held||Y.held||K.held},get flight(){return D},get board(){return c},get root(){return t},puff:y.group,ball:m}}function Zs(s,e=.18){return Math.abs(s)<=e?0:Math.sign(s)*(Math.abs(s)-e)/(1-e)}function Ao(s){let e=s?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function rl(s,e,t,n){Math.abs(s)<.25&&(n=!1);let i=0;return e==="smooth"?i=-Zs(s)*Math.PI/3*t:Math.abs(s)>.65&&!n&&(i=-Math.sign(s)*Math.PI/6,n=!0),{angle:i,latched:n}}function Eo(s,e,t){return{x:s*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-s*Math.sin(t)}}var yn=s=>document.querySelector(s),Vt=yn("#questEnter"),nn=yn("#questStatus"),Js=yn("#questPanel");yn("#questPreview").onclick=()=>{Js.hidden=!0,yn("#questReturn").hidden=!1};yn("#questReturn").onclick=()=>{window.yardDebug?.pause(),Js.hidden=!1};async function Ld(s){let e=s.renderer,t=s.worldScene,n=s.worldCamera,i=sl(s);s.vrGames=i,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let r=new Se;r.name="Quest player rig",t.add(r);let o=[e.xr.getController(0),e.xr.getController(1)],a=o.map((S,L)=>e.xr.getControllerGrip?.(L)||S);for(let S of a)o.includes(S)||r.add(S);let l=new Map;o.forEach(S=>{r.add(S),S.addEventListener("connected",C=>l.set(S,C.data)),S.addEventListener("disconnected",()=>l.delete(S));let L=new ve(new nt(.018,8,6),new Te({color:16769946}));S.add(L)});let c=new bt(new Oe,new gt({color:8645568}));c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new ve(new Kt(.22,.3,32),new Te({color:8645568,side:2,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.visible=!1,t.add(h);let u=s.colliders.map(S=>new Ye(new _(S.min.x,S.min.y,S.min.z),new _(S.max.x,S.max.y,S.max.z))),f=0,d=new _,p=new Ie,m=null,y=!1,v=!1,M=!1,x=null,g,b,w=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),E=()=>{let S=s.stats(),L=Eo(d.x,d.z,f);r.position.set(S.x-L.x,S.y+(window.yardFloorOffset||0),S.z-L.z),r.rotation.y=f,n.position.set(0,0,0),n.quaternion.identity(),r.updateMatrixWorld(!0)};s.xrFace=S=>{let L=new _(0,0,-1).applyQuaternion(p);f=S-Math.atan2(-L.x,-L.z),m=null,E()};function T(S){if(x=null,!S){c.visible=h.visible=!1;return}let L=S.getWorldPosition(new _),O=new _(0,0,-1).applyQuaternion(S.getWorldQuaternion(new Ie)).multiplyScalar(6);O.y+=2;let D=[L.clone()],W=new Ze,B=new _,$=L.clone(),R=null;for(let z=1;z<=32;z++){let F=z*.05,V=L.clone().addScaledVector(O,F);V.y-=4.9*F*F;let fe=V.clone().sub($),j=fe.length();W.set($,fe.normalize());let H=j,q=null,ie=!1;for(let pe of u){if(pe.containsPoint($))continue;let se=W.intersectBox(pe,B);if(se){let Z=se.distanceTo($);Z<H&&(H=Z,q=se.clone(),ie=Math.abs(se.y-pe.max.y)<.015)}}if($.y>=0&&V.y<=0){let pe=$.clone().lerp(V,$.y/($.y-V.y));pe.distanceTo($)<H&&(q=pe,ie=!0)}if(q){D.push(q),R=q,ie&&!s.blocked(q.x,q.z,q.y)&&Math.abs(s.groundAt(q.x,q.z,q.y+.05)-q.y)<.12&&(x=q);break}D.push(V),$=V}c.geometry.dispose(),c.geometry=new Oe().setFromPoints(D),c.visible=!0,c.material.color.set(x?8645568:16746618),h.visible=!!x,x&&h.position.copy(x).add(new _(0,.025,0))}let P=window.questBridge={frame:null,sample(S){let L=e.xr.getSession(),C=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!C||L?.visibilityState==="hidden")return m=null,i.interrupt(),w();if(d.set(C.transform.position.x,C.transform.position.y,C.transform.position.z),p.copy(C.transform.orientation),m){let se=Eo(d.x-m.x,d.z-m.z,f);Math.hypot(se.x,se.z)<.8&&s.xrPhysical(se.x,se.z)}m=d.clone();let O,D;for(let se of L.inputSources)se.handedness==="left"&&(O=se),se.handedness==="right"&&(D=se);let[W,B]=Ao(O),[$]=Ao(D),R=rl($,yn("#questTurning").value,S,y);!i.menuOpen&&!i.held&&(f+=R.angle,R.angle&&i.interrupt()),y=R.latched;let z=!!O?.gamepad?.buttons[4]?.pressed;z&&!M&&(i.interrupt(),s.resetPosition(),f=0,m=null,i.close()),M=z,E();let F=o.find(se=>l.get(se)?.handedness==="right"),V=new _(0,0,-1).applyQuaternion(p),fe=V.clone().applyAxisAngle(new _(0,1,0),f),j=i.tick({dt:S,eye:d.clone().applyMatrix4(r.matrixWorld),forward:fe,headOrientation:r.getWorldQuaternion(new Ie).multiply(p),left:O,right:D,controller:F,rightGripController:a[o.findIndex(se=>l.get(se)?.handedness==="right")],leftController:a[o.findIndex(se=>l.get(se)?.handedness==="left")]}),H=!j.blockTeleport&&!i.menuOpen&&(!!D?.gamepad?.buttons[1]?.pressed||!j.consumeTrigger&&!!D?.gamepad?.buttons[0]?.pressed);H&&(i.interrupt(),T(F)),!H&&v&&(x&&!i.menuOpen&&!j.blockTeleport&&s.xrTeleport(x.x,x.y,x.z),x=null,c.visible=h.visible=!1),v=H;let q=f+Math.atan2(-V.x,-V.z);s.xrHeading(q);let ie=w(),pe=Number(yn("#questSpeed").value)/2.9;return ie.fwd=-Zs(B)*pe,ie.strafe=Zs(W)*pe,(H||j.blockMovement)&&(ie.fwd=ie.strafe=0),ie},beforeRender(){e.xr.isPresenting&&E()}};if(e.xr.addEventListener("sessionstart",()=>{b=n.parent,g=e.shadowMap.enabled,e.shadowMap.enabled=!1,r.add(n),f=0,d.set(0,0,0),m=null,y=v=M=!1,s.xrBegin(),E(),i.begin(),document.body.classList.add("questActive"),Js.hidden=!0,nn.textContent="VR is running. Use the Meta menu to exit.",Vt.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),r.remove(n),b&&b.add(n),e.shadowMap.enabled=g,c.visible=h.visible=!1,m=null,s.xrEnd(),document.body.classList.remove("questActive"),Js.hidden=!1,Vt.disabled=!1,Vt.textContent="Enter VR again",nn.textContent="You have left VR."}),Vt.onclick=async()=>{Vt.disabled=!0;let S;try{i.enableAudio(),S=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),S.addEventListener("visibilitychange",()=>{m=null}),await e.xr.setSession(S)}catch(L){S&&await S.end().catch(()=>{}),Vt.disabled=!1,nn.textContent="Could not enter VR: "+L.message}},!window.isSecureContext){Vt.textContent="HTTPS hosting needed",nn.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){Vt.textContent="Open in your Quest browser",nn.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let S=await navigator.xr.isSessionSupported("immersive-vr");Vt.disabled=!S,Vt.textContent=S?"Enter VR":"VR headset not detected",nn.textContent=S?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(S){nn.textContent="VR availability check failed: "+S.message}}var Dd=0,ol=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(ol),Ld(window.yardDebug).catch(s=>{nn.textContent="VR setup failed: "+s.message,console.error(s)})):++Dd>1200&&(clearInterval(ol),nn.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
