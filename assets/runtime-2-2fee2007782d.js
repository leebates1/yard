(()=>{var Za=1;var Ja=3,Bs=0,Ka=1,lt=2;var Kr=1,Ro=2;var Qr=100;var jr=204,eo=205;var to=0,no=1,io=2,Ui=3,so=4,ro=5,oo=6,ao=7,Po=0,Qa=1,ja=2;var Io=1,Lo=2,Do=3,No=4,Uo=5,Fo=6,Bo=7;var Oo=300,el=301,zo=302;var tl=306,qt=1e3,Ri=1001,lo=1002,co=1003;var nl=1006;var il=1008;var ko=1009;var Vo=1015;var sl=1023;var rl=1028;var Fi=2300,Os=2301,Us=2302,ho=2303,uo=2400,fo=2401,po=2402;var ol=0;var Go="",Ee="srgb",mo="srgb-linear",go="linear",Fs="srgb";var Wn=7680;var xo=519;var _o=35044;var Tn=2e3,Bi=2001;function mc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var pa={},zs=null;function al(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ze(...s){s=al(s);let e="THREE."+s.shift();if(zs)zs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xe(...s){s=al(s);let e="THREE."+s.shift();if(zs)zs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ui(...s){let e=s.join(" ");e in pa||(pa[e]=!0,Ze(...s))}var xc={[to]:no,[io]:oo,[so]:ao,[Ui]:ro,[no]:to,[oo]:io,[ao]:so,[ro]:Ui},wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=1234567,Ii=Math.PI/180,Oi=180/Math.PI;function Kn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[s&255]+gt[s>>8&255]+gt[s>>16&255]+gt[s>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Fe(s,e,t){return Math.max(e,Math.min(t,s))}function Ho(s,e){return(s%e+e)%e}function _c(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yc(s,e,t){return s!==e?(t-s)/(e-s):0}function Li(s,e,t){return(1-t)*s+t*e}function vc(s,e,t,n){return Li(s,e,1-Math.exp(-t*n))}function Mc(s,e=1){return e-Math.abs(Ho(s,e*2)-e)}function bc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Sc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Tc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wc(s,e){return s+Math.random()*(e-s)}function Ac(s){return s*(.5-Math.random())}function Ec(s){s!==void 0&&(ma=s);let e=ma+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cc(s){return s*Ii}function Rc(s){return s*Oi}function Pc(s){return(s&s-1)===0&&s!==0}function Ic(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dc(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*f,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ke={DEG2RAD:Ii,RAD2DEG:Oi,generateUUID:Kn,clamp:Fe,euclideanModulo:Ho,mapLinear:_c,inverseLerp:yc,lerp:Li,damp:vc,pingpong:Mc,smoothstep:bc,smootherstep:Sc,randInt:Tc,randFloat:wc,randFloatSpread:Ac,seededRandom:Ec,degToRad:Cc,radToDeg:Rc,isPowerOfTwo:Pc,ceilPowerOfTwo:Ic,floorPowerOfTwo:Lc,setQuaternionFromProperEuler:Dc,normalize:Mt,denormalize:hi},Yo=class Yo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yo.prototype.isVector2=!0;var le=Yo,Pe=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[o+0],d=r[o+1],p=r[o+2],m=r[o+3];if(f!==m||l!==u||c!==d||h!==p){let v=l*u+c*d+h*p+f*m;v<0&&(u=-u,d=-d,p=-p,m=-m,v=-v);let _=1-a;if(v<.9995){let M=Math.acos(v),x=Math.sin(M);_=Math.sin(_*M)/x,a=Math.sin(a*M)/x,l=l*_+u*a,c=c*_+d*a,h=h*_+p*a,f=f*_+m*a}else{l=l*_+u*a,c=c*_+d*a,h=h*_+p*a,f=f*_+m*a;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-a*d,e[t+2]=c*p+h*d+a*u-l*f,e[t+3]=h*p-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$o=class $o{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$o.prototype.isVector3=!0;var y=$o,wr=new y,ga=new Pe,Zo=class Zo{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],m=i[0],v=i[3],_=i[6],M=i[1],x=i[4],g=i[7],b=i[2],R=i[5],S=i[8];return r[0]=o*m+a*M+l*b,r[3]=o*v+a*x+l*R,r[6]=o*_+a*g+l*S,r[1]=c*m+h*M+f*b,r[4]=c*v+h*x+f*R,r[7]=c*_+h*g+f*S,r[2]=u*m+d*M+p*b,r[5]=u*v+d*x+p*R,r[8]=u*_+d*g+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=t*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=f*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=u*m,e[4]=(h*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zo.prototype.isMatrix3=!0;var Le=Zo,Ar=new Le,xa=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_a=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nc(){let s={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fs&&(i.r=an(i.r),i.g=an(i.g),i.b=an(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fs&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Go?go:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mo]:{primaries:e,whitePoint:n,transfer:go,toXYZ:xa,fromXYZ:_a,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:xa,fromXYZ:_a,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),s}var Ot=Nc();function an(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var jn,ks=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jn===void 0&&(jn=yo("canvas")),jn.width=e.width,jn.height=e.height;let i=jn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=an(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(an(t[n]/255)*255):t[n]=an(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uc=0,Vs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Er(i[o].image)):r.push(Er(i[o]))}else r=Er(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Er(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ks.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var Fc=0,Cr=new y,An=class s extends wn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ri,i=Ri,r=nl,o=il,a=sl,l=ko,c=s.DEFAULT_ANISOTROPY,h=Go){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Kn(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Cr).x}get height(){return this.source.getSize(Cr).y}get depth(){return this.source.getSize(Cr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qt:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qt:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Oo;An.DEFAULT_ANISOTROPY=1;var Jo=class Jo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],m=l[2],v=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-m)<.01&&Math.abs(p-v)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+m)<.1&&Math.abs(p+v)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,g=(d+1)/2,b=(_+1)/2,R=(h+u)/4,S=(f+m)/4,T=(p+v)/4;return x>g&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=R/n,r=S/n):g>b?g<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(g),n=R/i,r=T/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=S/r,i=T/r),this.set(n,i,r,t),this}let M=Math.sqrt((v-p)*(v-p)+(f-m)*(f-m)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(v-p)/M,this.y=(f-m)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jo.prototype.isVector4=!0;var Xn=Jo;var fr=class fr{constructor(e,t,n,i,r,o,a,l,c,h,f,u,d,p,m,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,f,u,d,p,m,v)}set(e,t,n,i,r,o,a,l,c,h,f,u,d,p,m,v){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=f,_[14]=u,_[3]=d,_[7]=p,_[11]=m,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fr().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ei.setFromMatrixColumn(e,0).length(),r=1/ei.setFromMatrixColumn(e,1).length(),o=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,p=a*h,m=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-m*c,t[9]=-a*l,t[2]=m-u*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,m=c*f;t[0]=u+m*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=m+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,m=c*f;t[0]=u-m*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=m-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,p=a*h,m=a*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+m,t[1]=l*f,t[5]=m*c+u,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,p=a*l,m=a*c;t[0]=l*h,t[4]=m-u*f,t[8]=p*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-m*f}else if(e.order==="XZY"){let u=o*l,d=o*c,p=a*l,m=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+m,t[5]=o*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*h,t[10]=m*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bc,e,Oc)}lookAt(e,t,n){let i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),xn.crossVectors(n,Pt),xn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),xn.crossVectors(n,Pt)),xn.normalize(),ls.crossVectors(Pt,xn),i[0]=xn.x,i[4]=ls.x,i[8]=Pt.x,i[1]=xn.y,i[5]=ls.y,i[9]=Pt.y,i[2]=xn.z,i[6]=ls.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],m=n[6],v=n[10],_=n[14],M=n[3],x=n[7],g=n[11],b=n[15],R=i[0],S=i[4],T=i[8],A=i[12],w=i[1],P=i[5],E=i[9],z=i[13],D=i[2],L=i[6],B=i[10],$=i[14],N=i[3],W=i[7],I=i[11],C=i[15];return r[0]=o*R+a*w+l*D+c*N,r[4]=o*S+a*P+l*L+c*W,r[8]=o*T+a*E+l*B+c*I,r[12]=o*A+a*z+l*$+c*C,r[1]=h*R+f*w+u*D+d*N,r[5]=h*S+f*P+u*L+d*W,r[9]=h*T+f*E+u*B+d*I,r[13]=h*A+f*z+u*$+d*C,r[2]=p*R+m*w+v*D+_*N,r[6]=p*S+m*P+v*L+_*W,r[10]=p*T+m*E+v*B+_*I,r[14]=p*A+m*z+v*$+_*C,r[3]=M*R+x*w+g*D+b*N,r[7]=M*S+x*P+g*L+b*W,r[11]=M*T+x*E+g*B+b*I,r[15]=M*A+x*z+g*$+b*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],m=e[7],v=e[11],_=e[15],M=l*d-c*u,x=a*d-c*f,g=a*u-l*f,b=o*d-c*h,R=o*u-l*h,S=o*f-a*h;return t*(m*M-v*x+_*g)-n*(p*M-v*b+_*R)+i*(p*x-m*b+_*S)-r*(p*g-m*R+v*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],m=e[13],v=e[14],_=e[15],M=t*a-n*o,x=t*l-i*o,g=t*c-r*o,b=n*l-i*a,R=n*c-r*a,S=i*c-r*l,T=h*m-f*p,A=h*v-u*p,w=h*_-d*p,P=f*v-u*m,E=f*_-d*m,z=u*_-d*v,D=M*z-x*E+g*P+b*w-R*A+S*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/D;return e[0]=(a*z-l*E+c*P)*L,e[1]=(i*E-n*z-r*P)*L,e[2]=(m*S-v*R+_*b)*L,e[3]=(u*R-f*S-d*b)*L,e[4]=(l*w-o*z-c*A)*L,e[5]=(t*z-i*w+r*A)*L,e[6]=(v*g-p*S-_*x)*L,e[7]=(h*S-u*g+d*x)*L,e[8]=(o*E-a*w+c*T)*L,e[9]=(n*w-t*E-r*T)*L,e[10]=(p*R-m*g+_*M)*L,e[11]=(f*g-h*R-d*M)*L,e[12]=(a*A-o*P-l*T)*L,e[13]=(t*P-n*A+i*T)*L,e[14]=(m*x-p*b-v*M)*L,e[15]=(h*b-f*x+u*M)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,m=o*h,v=o*f,_=a*f,M=l*c,x=l*h,g=l*f,b=n.x,R=n.y,S=n.z;return i[0]=(1-(m+_))*b,i[1]=(d+g)*b,i[2]=(p-x)*b,i[3]=0,i[4]=(d-g)*R,i[5]=(1-(u+_))*R,i[6]=(v+M)*R,i[7]=0,i[8]=(p+x)*S,i[9]=(v-M)*S,i[10]=(1-(u+m))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ei.set(i[0],i[1],i[2]).length(),a=ei.set(i[4],i[5],i[6]).length(),l=ei.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ht.copy(this);let c=1/o,h=1/a,f=1/l;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=h,Ht.elements[5]*=h,Ht.elements[6]*=h,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Tn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,m;if(l)p=r/(o-r),m=o*r/(o-r);else if(a===Tn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Bi)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Tn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i),p,m;if(l)p=1/(o-r),m=o/(o-r);else if(a===Tn)p=-2/(o-r),m=-(o+r)/(o-r);else if(a===Bi)p=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fr.prototype.isMatrix4=!0;var Je=fr,ei=new y,Ht=new Je,Bc=new y(0,0,0),Oc=new y(1,1,1),xn=new y,ls=new y,Pt=new y,ya=new Je,va=new Pe,qn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return va.setFromEuler(this),this.setFromQuaternion(va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var zi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zc=0,Ma=new y,ti=new Pe,en=new Je,cs=new y,bi=new y,kc=new y,Vc=new Pe,ba=new y(1,0,0),Sa=new y(0,1,0),Ta=new y(0,0,1),wa={type:"added"},Gc={type:"removed"},ni={type:"childadded",child:null},Rr={type:"childremoved",child:null},at=class s extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new y,t=new qn,n=new Pe,i=new y(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Le}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(ba,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(Ta,e)}translateOnAxis(e,t){return Ma.copy(e).applyQuaternion(this.quaternion),this.position.add(Ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ba,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(Ta,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(bi,cs,this.up):en.lookAt(cs,bi,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(en),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wa),ni.child=e,this.dispatchEvent(ni),ni.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gc),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wa),ni.child=e,this.dispatchEvent(ni),ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};at.DEFAULT_UP=new y(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _e=class extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}};var ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Pr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ee){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ot.workingColorSpace){if(e=Ho(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Pr(o,r,e+1/3),this.g=Pr(o,r,e),this.b=Pr(o,r,e-1/3)}return Ot.colorSpaceToWorking(this,i),this}setStyle(e,t=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ee){let n=ll[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}copyLinearToSRGB(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ee){return Ot.workingToColorSpace(xt.copy(this),e),Math.round(Fe(xt.r*255,0,255))*65536+Math.round(Fe(xt.g*255,0,255))*256+Math.round(Fe(xt.b*255,0,255))}getHexString(e=Ee){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(xt.copy(this),t);let n=xt.r,i=xt.g,r=xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Ee){Ot.workingToColorSpace(xt.copy(this),e);let t=xt.r,n=xt.g,i=xt.b;return e!==Ee?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(hs);let n=Li(_n.h,hs.h,t),i=Li(_n.s,hs.s,t),r=Li(_n.l,hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xt=new ze;ze.NAMES=ll;var Wt=new y,tn=new y,Ir=new y,nn=new y,ii=new y,si=new y,Aa=new y,Lr=new y,Dr=new y,Nr=new y,Ur=new Xn,Fr=new Xn,Br=new Xn,Sn=class s{constructor(e=new y,t=new y,n=new y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wt.subVectors(i,t),tn.subVectors(n,t),Ir.subVectors(e,t);let o=Wt.dot(Wt),a=Wt.dot(tn),l=Wt.dot(Ir),c=tn.dot(tn),h=tn.dot(Ir),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,nn.x),l.addScaledVector(o,nn.y),l.addScaledVector(a,nn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ur.setScalar(0),Fr.setScalar(0),Br.setScalar(0),Ur.fromBufferAttribute(e,t),Fr.fromBufferAttribute(e,n),Br.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ur,r.x),o.addScaledVector(Fr,r.y),o.addScaledVector(Br,r.z),o}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),tn.subVectors(e,t),Wt.cross(tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Wt.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ii.subVectors(i,n),si.subVectors(r,n),Lr.subVectors(e,n);let l=ii.dot(Lr),c=si.dot(Lr);if(l<=0&&c<=0)return t.copy(n);Dr.subVectors(e,i);let h=ii.dot(Dr),f=si.dot(Dr);if(h>=0&&f<=h)return t.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ii,o);Nr.subVectors(e,r);let d=ii.dot(Nr),p=si.dot(Nr);if(p>=0&&d<=p)return t.copy(r);let m=d*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(si,a);let v=h*p-d*f;if(v<=0&&f-h>=0&&d-p>=0)return Aa.subVectors(r,i),a=(f-h)/(f-h+(d-p)),t.copy(i).addScaledVector(Aa,a);let _=1/(v+m+u);return o=m*_,a=u*_,t.copy(n).addScaledVector(ii,o).addScaledVector(si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qe=class{constructor(e=new y(1/0,1/0,1/0),t=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xt):Xt.fromBufferAttribute(r,o),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),fs.subVectors(this.max,Si),ri.subVectors(e.a,Si),oi.subVectors(e.b,Si),ai.subVectors(e.c,Si),yn.subVectors(oi,ri),vn.subVectors(ai,oi),kn.subVectors(ri,ai);let t=[0,-yn.z,yn.y,0,-vn.z,vn.y,0,-kn.z,kn.y,yn.z,0,-yn.x,vn.z,0,-vn.x,kn.z,0,-kn.x,-yn.y,yn.x,0,-vn.y,vn.x,0,-kn.y,kn.x,0];return!Or(t,ri,oi,ai,fs)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,ri,oi,ai,fs))?!1:(ds.crossVectors(yn,vn),t=[ds.x,ds.y,ds.z],Or(t,ri,oi,ai,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},sn=[new y,new y,new y,new y,new y,new y,new y,new y],Xt=new y,us=new qe,ri=new y,oi=new y,ai=new y,yn=new y,vn=new y,kn=new y,Si=new y,fs=new y,ds=new y,Vn=new y;function Or(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vn.fromArray(s,r);let a=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ot=new y,ps=new le,Hc=0,Lt=class extends wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=Vo,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Gs=class extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hs=class extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wc=new qe,Ti=new y,zr=new y,zt=class{constructor(e=new y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ti.subVectors(e,this.center);let t=Ti.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ti,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ti.copy(e.center).add(zr)),this.expandByPoint(Ti.copy(e.center).sub(zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xc=0,Bt=new Je,kr=new at,li=new y,It=new qe,wi=new qe,ht=new y,Be=class s extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?Hs:Gs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(e){let n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(It.min,wi.min),It.expandByPoint(ht),ht.addVectors(It.max,wi.max),It.expandByPoint(ht)):(It.expandByPoint(wi.min),It.expandByPoint(wi.max))}It.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ht.fromBufferAttribute(a,c),l&&(li.fromBufferAttribute(e,c),ht.add(li)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Lt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new y,l[T]=new y;let c=new y,h=new y,f=new y,u=new le,d=new le,p=new le,m=new y,v=new y;function _(T,A,w){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,w),u.fromBufferAttribute(r,T),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,w),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),v.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[T].add(m),a[A].add(m),a[w].add(m),l[T].add(v),l[A].add(v),l[w].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let T=0,A=M.length;T<A;++T){let w=M[T],P=w.start,E=w.count;for(let z=P,D=P+E;z<D;z+=3)_(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let x=new y,g=new y,b=new y,R=new y;function S(T){b.fromBufferAttribute(i,T),R.copy(b);let A=a[T];x.copy(A),x.sub(b.multiplyScalar(b.dot(A))).normalize(),g.crossVectors(R,A);let P=g.dot(l[T])<0?-1:1;o.setXYZW(T,x.x,x.y,x.z,P)}for(let T=0,A=M.length;T<A;++T){let w=M[T],P=w.start,E=w.count;for(let z=P,D=P+E;z<D;z+=3)S(e.getX(z+0)),S(e.getX(z+1)),S(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new y,r=new y,o=new y,a=new y,l=new y,c=new y,h=new y,f=new y;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),m=e.getX(u+1),v=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,v),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let m=0,v=l.length;m<v;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let _=0;_<h;_++)u[p++]=c[d++]}return new Lt(u,h,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qc=0,Yn=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Kr,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=eo,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(n.blending=this.blending),this.side!==Bs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jr&&(n.blendSrc=this.blendSrc),this.blendDst!==eo&&(n.blendDst=this.blendDst),this.blendEquation!==Qr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var rn=new y,Vr=new y,ms=new y,Mn=new y,Gr=new y,gs=new y,Hr=new y,tt=class{constructor(e=new y,t=new y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vr.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(Vr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ms),a=Mn.dot(this.direction),l=-Mn.dot(ms),c=Mn.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let m=1/h;f*=m,u*=m,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Vr).addScaledVector(ms,u),d}intersectSphere(e,t){rn.subVectors(e.center,this.origin);let n=rn.dot(this.direction),i=rn.dot(rn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,i,r){Gr.subVectors(t,e),gs.subVectors(n,e),Hr.crossVectors(Gr,gs);let o=this.direction.dot(Hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,e);let l=a*this.direction.dot(gs.crossVectors(Mn,gs));if(l<0)return null;let c=a*this.direction.dot(Gr.cross(Mn));if(c<0||l+c>o)return null;let h=-a*Mn.dot(Hr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ea=new Je,Gn=new tt,xs=new zt,Ca=new y,_s=new y,ys=new y,vs=new y,Wr=new y,Ms=new y,Ra=new y,bs=new y,ge=class extends at{constructor(e=new Be,t=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Wr.fromBufferAttribute(f,e),o?Ms.addScaledVector(Wr,h):Ms.addScaledVector(Wr.sub(t),h))}t.add(Ms)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),Gn.copy(e.ray).recast(e.near),!(xs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(xs,Ca)===null||Gn.origin.distanceToSquared(Ca)>(e.far-e.near)**2))&&(Ea.copy(r).invert(),Gn.copy(e.ray).applyMatrix4(Ea),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=u.length;p<m;p++){let v=u[p],_=o[v.materialIndex],M=Math.max(v.start,d.start),x=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let g=M,b=x;g<b;g+=3){let R=a.getX(g),S=a.getX(g+1),T=a.getX(g+2);i=Ss(this,_,e,n,c,h,f,R,S,T),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let v=p,_=m;v<_;v+=3){let M=a.getX(v),x=a.getX(v+1),g=a.getX(v+2);i=Ss(this,o,e,n,c,h,f,M,x,g),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=u.length;p<m;p++){let v=u[p],_=o[v.materialIndex],M=Math.max(v.start,d.start),x=Math.min(l.count,Math.min(v.start+v.count,d.start+d.count));for(let g=M,b=x;g<b;g+=3){let R=g,S=g+1,T=g+2;i=Ss(this,_,e,n,c,h,f,R,S,T),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let v=p,_=m;v<_;v+=3){let M=v,x=v+1,g=v+2;i=Ss(this,o,e,n,c,h,f,M,x,g),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};function Yc(s,e,t,n,i,r,o,a){let l;if(e.side===Ka?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bs,a),l===null)return null;bs.copy(a),bs.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:s}}function Ss(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,_s),s.getVertexPosition(l,ys),s.getVertexPosition(c,vs);let h=Yc(s,e,t,n,_s,ys,vs,Ra);if(h){let f=new y;Sn.getBarycoord(Ra,_s,ys,vs,f),i&&(h.uv=Sn.getInterpolatedAttribute(i,a,l,c,f,new le)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,f,new le)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,f,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new y,materialIndex:0};Sn.getNormal(_s,ys,vs,u.normal),h.face=u,h.barycoord=f}return h}var Ws=class extends An{constructor(e=null,t=1,n=1,i,r,o,a,l,c=co,h=co,f,u){super(null,o,a,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=class extends Lt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ci=new Je,Pa=new Je,Ts=[],Ia=new qe,$c=new Je,Ai=new ge,Ei=new zt,ln=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$c)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qe),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),Ia.copy(e.boundingBox).applyMatrix4(ci),this.boundingBox.union(Ia)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),Ei.copy(e.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(Ei)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ai.geometry=this.geometry,Ai.material=this.material,Ai.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ei.copy(this.boundingSphere),Ei.applyMatrix4(n),e.ray.intersectsSphere(Ei)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ci),Pa.multiplyMatrices(n,ci),Ai.matrixWorld=Pa,Ai.raycast(e,Ts);for(let o=0,a=Ts.length;o<a;o++){let l=Ts[o];l.instanceId=r,l.object=this,t.push(l)}Ts.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(i*this.count),i,this.count,rl,Vo));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Xr=new y,Zc=new y,Jc=new Le,on=class{constructor(e=new y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Xr.subVectors(n,t).cross(Zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Xr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jc.getNormalMatrix(e),i=this.coplanarPoint(Xr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hn=new zt,Kc=new le(.5,.5),ws=new y,Xs=class{constructor(e=new on,t=new on,n=new on,i=new on,r=new on,o=new on){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],m=r[9],v=r[10],_=r[11],M=r[12],x=r[13],g=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,_-p,b-M).normalize(),i[1].setComponents(c+o,d+h,_+p,b+M).normalize(),i[2].setComponents(c+a,d+f,_+m,b+x).normalize(),i[3].setComponents(c-a,d-f,_-m,b-x).normalize(),n)i[4].setComponents(l,u,v,g).normalize(),i[5].setComponents(c-l,d-u,_-v,b-g).normalize();else if(i[4].setComponents(c-l,d-u,_-v,b-g).normalize(),t===Tn)i[5].setComponents(c+l,d+u,_+v,b+g).normalize();else if(t===Bi)i[5].setComponents(l,u,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);let t=Kc.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ws.x=i.normal.x>0?e.max.x:e.min.x,ws.y=i.normal.y>0?e.max.y:e.min.y,ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bt=class extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qs=new y,Ys=new y,La=new Je,Ci=new tt,As=new zt,qr=new y,Da=new y,St=class extends at{constructor(e=new Be,t=new bt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)qs.fromBufferAttribute(t,i-1),Ys.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qs.distanceTo(Ys);e.setAttribute("lineDistance",new Re(n,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;La.copy(i).invert(),Ci.copy(e.ray).applyMatrix4(La);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let m=d,v=p-1;m<v;m+=c){let _=h.getX(m),M=h.getX(m+1),x=Es(this,e,Ci,l,_,M,m);x&&t.push(x)}if(this.isLineLoop){let m=h.getX(p-1),v=h.getX(d),_=Es(this,e,Ci,l,m,v,p-1);_&&t.push(_)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,v=p-1;m<v;m+=c){let _=Es(this,e,Ci,l,m,m+1,m);_&&t.push(_)}if(this.isLineLoop){let m=Es(this,e,Ci,l,p-1,d,p-1);m&&t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Es(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(qs.fromBufferAttribute(a,i),Ys.fromBufferAttribute(a,r),t.distanceSqToSegment(qs,Ys,qr,Da)>n)return;qr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(qr);if(!(c<e.near||c>e.far))return{distance:c,point:Da.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var di=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Na=new Je,vo=new tt,Cs=new zt,Rs=new y,Vi=class extends at{constructor(e=new Be,t=new di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;Na.copy(i).invert(),vo.copy(e.ray).applyMatrix4(Na);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,m=d;p<m;p++){let v=c.getX(p);Rs.fromBufferAttribute(f,v),Ua(Rs,v,l,i,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,m=d;p<m;p++)Rs.fromBufferAttribute(f,p),Ua(Rs,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ua(s,e,t,n,i,r,o){let a=vo.distanceSqToPoint(s);if(a<t){let l=new y;vo.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var De=class extends An{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ve=class s extends Be{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(f,2));function p(m,v,_,M,x,g,b,R,S,T,A){let w=g/S,P=b/T,E=g/2,z=b/2,D=R/2,L=S+1,B=T+1,$=0,N=0,W=new y;for(let I=0;I<B;I++){let C=I*P-z;for(let O=0;O<L;O++){let k=O*w-E;W[m]=k*M,W[v]=C*x,W[_]=D,c.push(W.x,W.y,W.z),W[m]=0,W[v]=0,W[_]=R>0?1:-1,h.push(W.x,W.y,W.z),f.push(O/S),f.push(1-I/T),$+=1}}for(let I=0;I<T;I++)for(let C=0;C<S;C++){let O=u+C+L*I,k=u+C+L*(I+1),V=u+(C+1)+L*(I+1),H=u+(C+1)+L*I;l.push(O,k,H),l.push(k,V,H),N+=6}a.addGroup(d,N,A),d+=N,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gi=class s extends Be{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new y,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ke=class s extends Be{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,m=[],v=n/2,_=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(d,2));function M(){let g=new y,b=new y,R=0,S=(t-e)/n;for(let T=0;T<=r;T++){let A=[],w=T/r,P=w*(t-e)+e;for(let E=0;E<=i;E++){let z=E/i,D=z*l+a,L=Math.sin(D),B=Math.cos(D);b.x=P*L,b.y=-w*n+v,b.z=P*B,f.push(b.x,b.y,b.z),g.set(L,S,B).normalize(),u.push(g.x,g.y,g.z),d.push(z,1-w),A.push(p++)}m.push(A)}for(let T=0;T<i;T++)for(let A=0;A<r;A++){let w=m[A][T],P=m[A+1][T],E=m[A+1][T+1],z=m[A][T+1];(e>0||A!==0)&&(h.push(w,P,z),R+=3),(t>0||A!==r-1)&&(h.push(P,E,z),R+=3)}c.addGroup(_,R,0),_+=R}function x(g){let b=p,R=new le,S=new y,T=0,A=g===!0?e:t,w=g===!0?1:-1;for(let E=1;E<=i;E++)f.push(0,v*w,0),u.push(0,w,0),d.push(.5,.5),p++;let P=p;for(let E=0;E<=i;E++){let D=E/i*l+a,L=Math.cos(D),B=Math.sin(D);S.x=A*B,S.y=v*w,S.z=A*L,f.push(S.x,S.y,S.z),u.push(0,w,0),R.x=L*.5+.5,R.y=B*.5*w+.5,d.push(R.x,R.y),p++}for(let E=0;E<i;E++){let z=b+E,D=P+E;g===!0?h.push(D,D+1,z):h.push(D+1,D,z),T+=3}c.addGroup(_,T,g===!0?1:2),_+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cn=class s extends ke{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Dt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new le:new y);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new y,i=[],r=[],o=[],a=new y,l=new Je;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new y)}r[0]=new y,o[0]=new y;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Fe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Fe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},pi=class extends Dt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$s=class extends pi{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wo(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Fa=new y,Ba=new y,Yr=new Wo,$r=new Wo,Zr=new Wo,En=class extends Dt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new y){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ba.subVectors(i[0],i[1]).add(i[0]),c=Ba);let f=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Fa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);m<1e-4&&(m=1),p<1e-4&&(p=m),v<1e-4&&(v=m),Yr.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,m,v),$r.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,m,v),Zr.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,m,v)}else this.curveType==="catmullrom"&&(Yr.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),$r.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Zr.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Yr.calc(l),$r.calc(l),Zr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Oa(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Qc(s,e){let t=1-s;return t*t*e}function jc(s,e){return 2*(1-s)*s*e}function eh(s,e){return s*s*e}function Di(s,e,t,n){return Qc(s,e)+jc(s,t)+eh(s,n)}function th(s,e){let t=1-s;return t*t*t*e}function nh(s,e){let t=1-s;return 3*t*t*s*e}function ih(s,e){return 3*(1-s)*s*s*e}function sh(s,e){return s*s*s*e}function Ni(s,e,t,n,i){return th(s,e)+nh(s,t)+ih(s,n)+sh(s,i)}var Hi=class extends Dt{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ni(e,i.x,r.x,o.x,a.x),Ni(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zs=class extends Dt{constructor(e=new y,t=new y,n=new y,i=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new y){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ni(e,i.x,r.x,o.x,a.x),Ni(e,i.y,r.y,o.y,a.y),Ni(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wi=class extends Dt{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Js=class extends Dt{constructor(e=new y,t=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xi=class extends Dt{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Di(e,i.x,r.x,o.x),Di(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qi=class extends Dt{constructor(e=new y,t=new y,n=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new y){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Di(e,i.x,r.x,o.x),Di(e,i.y,r.y,o.y),Di(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yi=class extends Dt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Oa(a,l.x,c.x,h.x,f.x),Oa(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new le().fromArray(i))}return this}},Ks=Object.freeze({__proto__:null,ArcCurve:$s,CatmullRomCurve3:En,CubicBezierCurve:Hi,CubicBezierCurve3:Zs,EllipseCurve:pi,LineCurve:Wi,LineCurve3:Js,QuadraticBezierCurve:Xi,QuadraticBezierCurve3:qi,SplineCurve:Yi}),Qs=class extends Dt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ks[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ks[i.type]().fromJSON(i))}return this}},$n=class extends Qs{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wi(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Xi(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Hi(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Yi(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new pi(e,t,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ut=class extends $n{constructor(e){super(e),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new $n().fromJSON(i))}return this}};function rh(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=cl(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=hh(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,f=l;for(let u=t;u<i;u+=t){let d=s[u],p=s[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return $i(r,o,t,a,l,c,0),o}function cl(s,e,t,n,i){let r;if(i===Mh(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=za(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=za(o/n|0,s[o],s[o+1],r);return r&&mi(r,r.next)&&(Ji(r),r=r.next),r}function Zn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(mi(t,t.next)||$e(t.prev,t,t.next)===0)){if(Ji(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $i(s,e,t,n,i,r,o){if(!s)return;!o&&r&&mh(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?ah(s,n,i,r):oh(s)){e.push(l.i,s.i,c.i),Ji(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=lh(Zn(s),e),$i(s,e,t,n,i,r,2)):o===2&&ch(s,e,t,n,i,r):$i(Zn(s),e,t,n,i,r,1);break}}}function oh(s){let e=s.prev,t=s,n=s.next;if($e(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),f=Math.min(a,l,c),u=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Pi(i,a,r,l,o,c,p.x,p.y)&&$e(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ah(s,e,t,n){let i=s.prev,r=s,o=s.next;if($e(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),m=Math.max(a,l,c),v=Math.max(h,f,u),_=Mo(d,p,e,t,n),M=Mo(m,v,e,t,n),x=s.prevZ,g=s.nextZ;for(;x&&x.z>=_&&g&&g.z<=M;){if(x.x>=d&&x.x<=m&&x.y>=p&&x.y<=v&&x!==i&&x!==o&&Pi(a,h,l,f,c,u,x.x,x.y)&&$e(x.prev,x,x.next)>=0||(x=x.prevZ,g.x>=d&&g.x<=m&&g.y>=p&&g.y<=v&&g!==i&&g!==o&&Pi(a,h,l,f,c,u,g.x,g.y)&&$e(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;x&&x.z>=_;){if(x.x>=d&&x.x<=m&&x.y>=p&&x.y<=v&&x!==i&&x!==o&&Pi(a,h,l,f,c,u,x.x,x.y)&&$e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;g&&g.z<=M;){if(g.x>=d&&g.x<=m&&g.y>=p&&g.y<=v&&g!==i&&g!==o&&Pi(a,h,l,f,c,u,g.x,g.y)&&$e(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function lh(s,e){let t=s;do{let n=t.prev,i=t.next.next;!mi(n,i)&&ul(n,t,t.next,i)&&Zi(n,i)&&Zi(i,n)&&(e.push(n.i,t.i,i.i),Ji(t),Ji(t.next),t=s=i),t=t.next}while(t!==s);return Zn(t)}function ch(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_h(o,a)){let l=fl(o,a);o=Zn(o,o.next),l=Zn(l,l.next),$i(o,e,t,n,i,r,0),$i(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function hh(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=cl(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(xh(c))}i.sort(uh);for(let r=0;r<i.length;r++)t=fh(i[r],t);return t}function uh(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function fh(s,e){let t=dh(s,e);if(!t)return e;let n=fl(t,s);return Zn(n,n.next),Zn(t,t.next)}function dh(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(mi(s,t))return t;do{if(mi(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hl(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let f=Math.abs(i-t.y)/(n-t.x);Zi(t,s)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&ph(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function ph(s,e){return $e(s.prev,s,e.prev)<0&&$e(e.next,s,s.next)<0}function mh(s,e,t,n){let i=s;do i.z===0&&(i.z=Mo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,gh(i)}function gh(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Mo(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function xh(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function hl(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Pi(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&hl(s,e,t,n,i,r,o,a)}function _h(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!yh(s,e)&&(Zi(s,e)&&Zi(e,s)&&vh(s,e)&&($e(s.prev,s,e.prev)||$e(s,e.prev,e))||mi(s,e)&&$e(s.prev,s,s.next)>0&&$e(e.prev,e,e.next)>0)}function $e(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function mi(s,e){return s.x===e.x&&s.y===e.y}function ul(s,e,t,n){let i=Is($e(s,e,t)),r=Is($e(s,e,n)),o=Is($e(t,n,s)),a=Is($e(t,n,e));return!!(i!==r&&o!==a||i===0&&Ps(s,t,e)||r===0&&Ps(s,n,e)||o===0&&Ps(t,s,n)||a===0&&Ps(t,e,n))}function Ps(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Is(s){return s>0?1:s<0?-1:0}function yh(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ul(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Zi(s,e){return $e(s.prev,s,s.next)<0?$e(s,e,s.next)>=0&&$e(s,s.prev,e)>=0:$e(s,e,s.prev)<0||$e(s,s.next,e)<0}function vh(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function fl(s,e){let t=bo(s.i,s.x,s.y),n=bo(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function za(s,e,t,n){let i=bo(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ji(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bo(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mh(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var So=class{static triangulate(e,t,n=2){return rh(e,t,n)}},Jt=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];ka(e),Va(n,e);let o=e.length;t.forEach(ka);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Va(n,t[l]);let a=So.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ka(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Va(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Yt=class s extends Be{constructor(e=new ut([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:bh,x,g=!1,b,R,S,T;if(_){x=_.getSpacedPoints(h),g=!0,u=!1;let F=_.isCatmullRomCurve3?_.closed:!1;b=_.computeFrenetFrames(h,F),R=new y,S=new y,T=new y}u||(v=0,d=0,p=0,m=0);let A=a.extractPoints(c),w=A.shape,P=A.holes;if(!Jt.isClockWise(w)){w=w.reverse();for(let F=0,K=P.length;F<K;F++){let te=P[F];Jt.isClockWise(te)&&(P[F]=te.reverse())}}function z(F){let te=10000000000000001e-36,oe=F[0];for(let se=1;se<=F.length;se++){let ye=se%F.length,ue=F[ye],Te=ue.x-oe.x,xe=ue.y-oe.y,G=Te*Te+xe*xe,U=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(oe.x),Math.abs(oe.y)),Z=te*U*U;if(G<=Z){F.splice(ye,1),se--;continue}oe=ue}}z(w),P.forEach(z);let D=P.length,L=w;for(let F=0;F<D;F++){let K=P[F];w=w.concat(K)}function B(F,K,te){return K||Xe("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(K,te)}let $=w.length;function N(F,K,te){let oe,se,ye,ue=F.x-K.x,Te=F.y-K.y,xe=te.x-F.x,G=te.y-F.y,U=ue*ue+Te*Te,Z=ue*G-Te*xe;if(Math.abs(Z)>Number.EPSILON){let ae=Math.sqrt(U),Y=Math.sqrt(xe*xe+G*G),he=K.x-Te/ae,Ce=K.y+ue/ae,pe=te.x-G/Y,Ie=te.y+xe/Y,Ue=((pe-he)*G-(Ie-Ce)*xe)/(ue*G-Te*xe);oe=he+ue*Ue-F.x,se=Ce+Te*Ue-F.y;let we=oe*oe+se*se;if(we<=2)return new le(oe,se);ye=Math.sqrt(we/2)}else{let ae=!1;ue>Number.EPSILON?xe>Number.EPSILON&&(ae=!0):ue<-Number.EPSILON?xe<-Number.EPSILON&&(ae=!0):Math.sign(Te)===Math.sign(G)&&(ae=!0),ae?(oe=-Te,se=ue,ye=Math.sqrt(U)):(oe=ue,se=Te,ye=Math.sqrt(U/2))}return new le(oe/ye,se/ye)}let W=[];for(let F=0,K=L.length,te=K-1,oe=F+1;F<K;F++,te++,oe++)te===K&&(te=0),oe===K&&(oe=0),W[F]=N(L[F],L[te],L[oe]);let I=[],C,O=W.concat();for(let F=0,K=D;F<K;F++){let te=P[F];C=[];for(let oe=0,se=te.length,ye=se-1,ue=oe+1;oe<se;oe++,ye++,ue++)ye===se&&(ye=0),ue===se&&(ue=0),C[oe]=N(te[oe],te[ye],te[ue]);I.push(C),O=O.concat(C)}let k;if(v===0)k=Jt.triangulateShape(L,P);else{let F=[],K=[];for(let te=0;te<v;te++){let oe=te/v,se=d*Math.cos(oe*Math.PI/2),ye=p*Math.sin(oe*Math.PI/2)+m;for(let ue=0,Te=L.length;ue<Te;ue++){let xe=B(L[ue],W[ue],ye);J(xe.x,xe.y,-se),oe===0&&F.push(xe)}for(let ue=0,Te=D;ue<Te;ue++){let xe=P[ue];C=I[ue];let G=[];for(let U=0,Z=xe.length;U<Z;U++){let ae=B(xe[U],C[U],ye);J(ae.x,ae.y,-se),oe===0&&G.push(ae)}oe===0&&K.push(G)}}k=Jt.triangulateShape(F,K)}let V=k.length,H=p+m;for(let F=0;F<$;F++){let K=u?B(w[F],O[F],H):w[F];g?(S.copy(b.normals[0]).multiplyScalar(K.x),R.copy(b.binormals[0]).multiplyScalar(K.y),T.copy(x[0]).add(S).add(R),J(T.x,T.y,T.z)):J(K.x,K.y,0)}for(let F=1;F<=h;F++)for(let K=0;K<$;K++){let te=u?B(w[K],O[K],H):w[K];g?(S.copy(b.normals[F]).multiplyScalar(te.x),R.copy(b.binormals[F]).multiplyScalar(te.y),T.copy(x[F]).add(S).add(R),J(T.x,T.y,T.z)):J(te.x,te.y,f/h*F)}for(let F=v-1;F>=0;F--){let K=F/v,te=d*Math.cos(K*Math.PI/2),oe=p*Math.sin(K*Math.PI/2)+m;for(let se=0,ye=L.length;se<ye;se++){let ue=B(L[se],W[se],oe);J(ue.x,ue.y,f+te)}for(let se=0,ye=P.length;se<ye;se++){let ue=P[se];C=I[se];for(let Te=0,xe=ue.length;Te<xe;Te++){let G=B(ue[Te],C[Te],oe);g?J(G.x,G.y+x[h-1].y,x[h-1].x+te):J(G.x,G.y,f+te)}}}q(),ie();function q(){let F=i.length/3;if(u){let K=0,te=$*K;for(let oe=0;oe<V;oe++){let se=k[oe];fe(se[2]+te,se[1]+te,se[0]+te)}K=h+v*2,te=$*K;for(let oe=0;oe<V;oe++){let se=k[oe];fe(se[0]+te,se[1]+te,se[2]+te)}}else{for(let K=0;K<V;K++){let te=k[K];fe(te[2],te[1],te[0])}for(let K=0;K<V;K++){let te=k[K];fe(te[0]+$*h,te[1]+$*h,te[2]+$*h)}}n.addGroup(F,i.length/3-F,0)}function ie(){let F=i.length/3,K=0;Q(L,K),K+=L.length;for(let te=0,oe=P.length;te<oe;te++){let se=P[te];Q(se,K),K+=se.length}n.addGroup(F,i.length/3-F,1)}function Q(F,K){let te=F.length;for(;--te>=0;){let oe=te,se=te-1;se<0&&(se=F.length-1);for(let ye=0,ue=h+v*2;ye<ue;ye++){let Te=$*ye,xe=$*(ye+1),G=K+oe+Te,U=K+se+Te,Z=K+se+xe,ae=K+oe+xe;de(G,U,Z,ae)}}}function J(F,K,te){l.push(F),l.push(K),l.push(te)}function fe(F,K,te){ee(F),ee(K),ee(te);let oe=i.length/3,se=M.generateTopUV(n,i,oe-3,oe-2,oe-1);ce(se[0]),ce(se[1]),ce(se[2])}function de(F,K,te,oe){ee(F),ee(K),ee(oe),ee(K),ee(te),ee(oe);let se=i.length/3,ye=M.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);ce(ye[0]),ce(ye[1]),ce(ye[3]),ce(ye[1]),ce(ye[2]),ce(ye[3])}function ee(F){i.push(l[F*3+0]),i.push(l[F*3+1]),i.push(l[F*3+2])}function ce(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sh(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ks[i.type]().fromJSON(i)),new s(n,e.options)}},bh={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[i*3],d=e[i*3+1],p=e[i*3+2],m=e[r*3],v=e[r*3+1],_=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-f),new le(u,1-p),new le(m,1-_)]:[new le(a,1-l),new le(h,1-f),new le(d,1-p),new le(v,1-_)]}};function Sh(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jn=class s extends Be{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Fe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new y,u=new le,d=new y,p=new y,m=new y,v=0,_=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:v=e[M+1].x-e[M].x,_=e[M+1].y-e[M].y,d.x=_*1,d.y=-v,d.z=_*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:v=e[M+1].x-e[M].x,_=e[M+1].y-e[M].y,d.x=_*1,d.y=-v,d.z=_*0,p.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(p)}for(let M=0;M<=t;M++){let x=n+M*h*i,g=Math.sin(x),b=Math.cos(x);for(let R=0;R<=e.length-1;R++){f.x=e[R].x*g,f.y=e[R].y,f.z=e[R].x*b,o.push(f.x,f.y,f.z),u.x=M/t,u.y=R/(e.length-1),a.push(u.x,u.y);let S=l[3*R+0]*g,T=l[3*R+1],A=l[3*R+0]*b;c.push(S,T,A)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){let g=x+M*e.length,b=g,R=g+e.length,S=g+e.length+1,T=g+1;r.push(b,R,T),r.push(S,T,R)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ne=class s extends Be{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,u=t/l,d=[],p=[],m=[],v=[];for(let _=0;_<h;_++){let M=_*u-o;for(let x=0;x<c;x++){let g=x*f-r;p.push(g,-M,0),m.push(0,0,1),v.push(x/a),v.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){let x=M+c*_,g=M+c*(_+1),b=M+1+c*(_+1),R=M+1+c*_;d.push(x,g,R),d.push(g,b,R)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(m,3)),this.setAttribute("uv",new Re(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},hn=class s extends Be{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],f=e,u=(t-e)/i,d=new y,p=new le;for(let m=0;m<=i;m++){for(let v=0;v<=n;v++){let _=r+v/n*o;d.x=f*Math.cos(_),d.y=f*Math.sin(_),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}f+=u}for(let m=0;m<i;m++){let v=m*(n+1);for(let _=0;_<n;_++){let M=_+v,x=M,g=M+n+1,b=M+n+2,R=M+1;a.push(x,g,R),a.push(g,b,R)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},$t=class s extends Be{constructor(e=new ut([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(o,2));function c(h){let f=i.length/3,u=h.extractPoints(t),d=u.shape,p=u.holes;Jt.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,_=p.length;v<_;v++){let M=p[v];Jt.isClockWise(M)===!0&&(p[v]=M.reverse())}let m=Jt.triangulateShape(d,p);for(let v=0,_=p.length;v<_;v++){let M=p[v];d=d.concat(M)}for(let v=0,_=d.length;v<_;v++){let M=d[v];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let v=0,_=m.length;v<_;v++){let M=m[v],x=M[0]+f,g=M[1]+f,b=M[2]+f;n.push(x,g,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Th(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function Th(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var nt=class s extends Be{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new y,u=new y,d=[],p=[],m=[],v=[];for(let _=0;_<=n;_++){let M=[],x=_/n,g=o+x*a,b=e*Math.cos(g),R=Math.sqrt(e*e-b*b),S=0;_===0&&o===0?S=.5/t:_===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){let A=T/t,w=i+A*r;f.x=-R*Math.cos(w),f.y=b,f.z=R*Math.sin(w),p.push(f.x,f.y,f.z),u.copy(f).normalize(),m.push(u.x,u.y,u.z),v.push(A+S,1-x),M.push(c++)}h.push(M)}for(let _=0;_<n;_++)for(let M=0;M<t;M++){let x=h[_][M+1],g=h[_][M],b=h[_+1][M],R=h[_+1][M+1];(_!==0||o>0)&&d.push(x,g,R),(_!==n-1||l<Math.PI)&&d.push(g,b,R)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(m,3)),this.setAttribute("uv",new Re(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Nt=class s extends Be{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],u=new y,d=new y,p=new y;for(let m=0;m<=n;m++){let v=o+m/n*a;for(let _=0;_<=i;_++){let M=_/i*r;d.x=(e+t*Math.cos(v))*Math.cos(M),d.y=(e+t*Math.cos(v))*Math.sin(M),d.z=t*Math.sin(v),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(_/i),f.push(m/n)}}for(let m=1;m<=n;m++)for(let v=1;v<=i;v++){let _=(i+1)*m+v-1,M=(i+1)*(m-1)+v-1,x=(i+1)*(m-1)+v,g=(i+1)*m+v;l.push(_,M,g),l.push(M,x,g)}this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var gi=class s extends Be{constructor(e=new qi(new y(-1,-1,0),new y(-1,1,0),new y(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new y,l=new y,c=new le,h=new y,f=[],u=[],d=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(d,2));function m(){for(let x=0;x<t;x++)v(x);v(r===!1?t:0),M(),_()}function v(x){h=e.getPointAt(x/t,h);let g=o.normals[x],b=o.binormals[x];for(let R=0;R<=i;R++){let S=R/i*Math.PI*2,T=Math.sin(S),A=-Math.cos(S);l.x=A*g.x+T*b.x,l.y=A*g.y+T*b.y,l.z=A*g.z+T*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function _(){for(let x=1;x<=t;x++)for(let g=1;g<=i;g++){let b=(i+1)*(x-1)+(g-1),R=(i+1)*x+(g-1),S=(i+1)*x+g,T=(i+1)*(x-1)+g;p.push(b,R,T),p.push(R,S,T)}}function M(){for(let x=0;x<=t;x++)for(let g=0;g<=i;g++)c.x=x/t,c.y=g/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Ks[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function dl(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Ga(i))i.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Ga(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Tt(s){let e={};for(let t=0;t<s.length;t++){let n=dl(s[t]);for(let i in n)e[i]=n[i]}return e}function Ga(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}var Se=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ki=class extends bt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ls(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var Cn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},js=class extends Cn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uo,endingEnd:uo}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case fo:r=e,a=2*t-n;break;case po:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fo:o=e,l=2*n-t;break;case po:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),m=p*p,v=m*p,_=-u*v+2*u*m-u*p,M=(1+u)*v+(-1.5-2*u)*m+(-.5+u)*p+1,x=(-1-d)*v+(1.5+d)*m+.5*p,g=d*v-d*m;for(let b=0;b!==a;++b)r[b]=_*o[h+b]+M*o[c+b]+x*o[l+b]+g*o[f+b];return r}},er=class extends Cn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},tr=class extends Cn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},nr=class extends Cn{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(i-t),m=1-p;for(let v=0;v!==a;++v)r[v]=o[c+v]*m+o[l+v]*p;return r}let u=a*2,d=e-1;for(let p=0;p!==a;++p){let m=o[c+p],v=o[l+p],_=d*u+p*2,M=f[_],x=f[_+1],g=e*u+p*2,b=h[g],R=h[g+1],S=(n-t)/(i-t),T,A,w,P,E;for(let z=0;z<8;z++){T=S*S,A=T*S,w=1-S,P=w*w,E=P*w;let L=E*t+3*P*S*M+3*w*T*b+A*i-n;if(Math.abs(L)<1e-10)break;let B=3*P*(M-t)+6*w*S*(b-M)+3*T*(i-b);if(Math.abs(B)<1e-10)break;S=S-L/B,S=Math.max(0,Math.min(1,S))}r[p]=E*m+3*P*S*x+3*w*T*R+A*v}return r}},Ut=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new er(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new js(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fi:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case Us:t=this.InterpolantFactoryMethodSmooth;break;case ho:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fi;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return Us;case this.InterpolantFactoryMethodBezier:return ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&gc(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Us,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let m=t[f+p];if(m!==t[u+p]||m!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ut.prototype.ValueTypeName="";Ut.prototype.TimeBufferType=Float32Array;Ut.prototype.ValueBufferType=Float32Array;Ut.prototype.DefaultInterpolation=Os;var Rn=class extends Ut{constructor(e,t,n){super(e,t,n)}};Rn.prototype.ValueTypeName="bool";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=Fi;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends Ut{constructor(e,t,n,i){super(e,t,n,i)}};ir.prototype.ValueTypeName="color";var sr=class extends Ut{constructor(e,t,n,i){super(e,t,n,i)}};sr.prototype.ValueTypeName="number";var rr=class extends Cn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Pe.slerpFlat(r,0,o,c-a,o,c,l);return r}},Qi=class extends Ut{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new rr(this.times,this.values,this.getValueSize(),e)}};Qi.prototype.ValueTypeName="quaternion";Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pn=class extends Ut{constructor(e,t,n){super(e,t,n)}};Pn.prototype.ValueTypeName="string";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=Fi;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Ut{constructor(e,t,n,i){super(e,t,n,i)}};or.prototype.ValueTypeName="vector";var ar=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pl=new ar,lr=class{constructor(e){this.manager=e!==void 0?e:pl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};lr.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Jr=new Je,Ha=new y,Wa=new y,To=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=ko,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ha.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ha),Wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wa),t.updateMatrixWorld(),Jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Bi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ds=new y,Ns=new Pe,Zt=new y,hr=class extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ds,Ns,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Ns,Zt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ds,Ns,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Ns,Zt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bn=new y,Xa=new le,qa=new le,ur=class extends hr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bn.x,bn.y).multiplyScalar(-e/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-e/bn.z)}getViewSize(e,t){return this.getViewBounds(e,Xa,qa),t.subVectors(qa,Xa)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ii*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var wo=class extends To{constructor(){super(new ur(90,1,.5,500)),this.isPointLightShadow=!0}},ji=class extends cr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var Xo="\\[\\]\\.:\\/",wh=new RegExp("["+Xo+"]","g"),qo="[^"+Xo+"]",Ah="[^"+Xo.replace("\\.","")+"]",Eh=/((?:WC+[\/:])*)/.source.replace("WC",qo),Ch=/(WCOD+)?/.source.replace("WCOD",Ah),Rh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qo),Ph=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qo),Ih=new RegExp("^"+Eh+Ch+Rh+Ph+"$"),Lh=["material","materials","bones","map"],Ao=class{constructor(e,t,n){let i=n||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},We=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wh,"")}static parseTrackName(e){let t=Ih.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Lh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Ao;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $d=new Float32Array(1);var Ya=new Je,un=class{constructor(e,t,n=0,i=1/0){this.ray=new tt(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new zi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ya.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ya),this}intersectObject(e,t=!0,n=[]){return Eo(e,this,n,t),n.sort($a),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Eo(e[i],this,n,t);return n.sort($a),n}};function $a(s,e){return s.distance-e.distance}function Eo(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Eo(r[o],e,t,!0)}}var Ko=class Ko{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Ko.prototype.isMatrix2=!0;var Co=Ko;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var Dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nh=`#ifdef USE_ALPHAHASH
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
#endif`,Uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zh=`#ifdef USE_AOMAP
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
#endif`,kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh=`#ifdef USE_BATCHING
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
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qh=`#ifdef USE_IRIDESCENCE
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
#endif`,Yh=`#ifdef USE_BUMPMAP
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
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,nu=`#define PI 3.141592653589793
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
} // validated`,iu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,su=`vec3 transformedNormal = objectNormal;
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
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uu=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vu=`#ifdef USE_GRADIENTMAP
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
}`,Mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tu=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wu=`#ifdef USE_ENVMAP
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
#endif`,Au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pu=`PhysicalMaterial material;
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
#endif`,Iu=`uniform sampler2D dfgLUT;
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
}`,Lu=`
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
#endif`,Du=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uu=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ou=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hu=`#if defined( USE_POINTS_UV )
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
#endif`,Wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nf=`#ifdef USE_NORMALMAP
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
#endif`,sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,of=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_f=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yf=`float getShadowMask() {
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
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mf=`#ifdef USE_SKINNING
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
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`#include <common>
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
}`,Vf=`#if DEPTH_PACKING == 3200
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
}`,Gf=`#define DISTANCE
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
}`,Hf=`#define DISTANCE
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`uniform float scale;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Jf=`#define LAMBERT
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
}`,Kf=`#define LAMBERT
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
}`,Qf=`#define MATCAP
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
}`,jf=`#define MATCAP
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
}`,ed=`#define NORMAL
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
}`,td=`#define NORMAL
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
}`,nd=`#define PHONG
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
}`,id=`#define PHONG
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
}`,sd=`#define STANDARD
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
}`,rd=`#define STANDARD
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
}`,od=`#define TOON
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
}`,ad=`#define TOON
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
}`,ld=`uniform float size;
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
}`,cd=`uniform vec3 diffuse;
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
}`,hd=`#include <common>
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
}`,ud=`uniform vec3 color;
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
}`,fd=`uniform float rotation;
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
}`,dd=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Dh,alphahash_pars_fragment:Nh,alphamap_fragment:Uh,alphamap_pars_fragment:Fh,alphatest_fragment:Bh,alphatest_pars_fragment:Oh,aomap_fragment:zh,aomap_pars_fragment:kh,batching_pars_vertex:Vh,batching_vertex:Gh,begin_vertex:Hh,beginnormal_vertex:Wh,bsdfs:Xh,iridescence_fragment:qh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Kh,color_fragment:Qh,color_pars_fragment:jh,color_pars_vertex:eu,color_vertex:tu,common:nu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:su,displacementmap_pars_vertex:ru,displacementmap_vertex:ou,emissivemap_fragment:au,emissivemap_pars_fragment:lu,colorspace_fragment:cu,colorspace_pars_fragment:hu,envmap_fragment:uu,envmap_common_pars_fragment:fu,envmap_pars_fragment:du,envmap_pars_vertex:pu,envmap_physical_pars_fragment:wu,envmap_vertex:mu,fog_vertex:gu,fog_pars_vertex:xu,fog_fragment:_u,fog_pars_fragment:yu,gradientmap_pars_fragment:vu,lightmap_pars_fragment:Mu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:Su,lights_pars_begin:Tu,lights_toon_fragment:Au,lights_toon_pars_fragment:Eu,lights_phong_fragment:Cu,lights_phong_pars_fragment:Ru,lights_physical_fragment:Pu,lights_physical_pars_fragment:Iu,lights_fragment_begin:Lu,lights_fragment_maps:Du,lights_fragment_end:Nu,lightprobes_pars_fragment:Uu,logdepthbuf_fragment:Fu,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:Ou,logdepthbuf_vertex:zu,map_fragment:ku,map_pars_fragment:Vu,map_particle_fragment:Gu,map_particle_pars_fragment:Hu,metalnessmap_fragment:Wu,metalnessmap_pars_fragment:Xu,morphinstance_vertex:qu,morphcolor_vertex:Yu,morphnormal_vertex:$u,morphtarget_pars_vertex:Zu,morphtarget_vertex:Ju,normal_fragment_begin:Ku,normal_fragment_maps:Qu,normal_pars_fragment:ju,normal_pars_vertex:ef,normal_vertex:tf,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:sf,clearcoat_normal_fragment_maps:rf,clearcoat_pars_fragment:of,iridescence_pars_fragment:af,opaque_fragment:lf,packing:cf,premultiplied_alpha_fragment:hf,project_vertex:uf,dithering_fragment:ff,dithering_pars_fragment:df,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:gf,shadowmap_pars_vertex:xf,shadowmap_vertex:_f,shadowmask_pars_fragment:yf,skinbase_vertex:vf,skinning_pars_vertex:Mf,skinning_vertex:bf,skinnormal_vertex:Sf,specularmap_fragment:Tf,specularmap_pars_fragment:wf,tonemapping_fragment:Af,tonemapping_pars_fragment:Ef,transmission_fragment:Cf,transmission_pars_fragment:Rf,uv_pars_fragment:Pf,uv_pars_vertex:If,uv_vertex:Lf,worldpos_vertex:Df,background_vert:Nf,background_frag:Uf,backgroundCube_vert:Ff,backgroundCube_frag:Bf,cube_vert:Of,cube_frag:zf,depth_vert:kf,depth_frag:Vf,distance_vert:Gf,distance_frag:Hf,equirect_vert:Wf,equirect_frag:Xf,linedashed_vert:qf,linedashed_frag:Yf,meshbasic_vert:$f,meshbasic_frag:Zf,meshlambert_vert:Jf,meshlambert_frag:Kf,meshmatcap_vert:Qf,meshmatcap_frag:jf,meshnormal_vert:ed,meshnormal_frag:td,meshphong_vert:nd,meshphong_frag:id,meshphysical_vert:sd,meshphysical_frag:rd,meshtoon_vert:od,meshtoon_frag:ad,points_vert:ld,points_frag:cd,shadow_vert:hd,shadow_frag:ud,sprite_vert:fd,sprite_frag:dd},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new y},probesMax:{value:new y},probesResolution:{value:new y}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},ml={basic:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Tt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Tt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Tt([me.points,me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Tt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Tt([me.common,me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Tt([me.sprite,me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Tt([me.common,me.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Tt([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ml.physical={uniforms:Tt([ml.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var pd=new Le;pd.set(-1,0,0,0,1,0,0,0,1);var h_={[Io]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[Do]:"CINEON_TONE_MAPPING",[No]:"ACES_FILMIC_TONE_MAPPING",[Fo]:"AGX_TONE_MAPPING",[Bo]:"NEUTRAL_TONE_MAPPING",[Uo]:"CUSTOM_TONE_MAPPING"};var u_=new Float32Array(16),f_=new Float32Array(9),d_=new Float32Array(4);var p_={[Io]:"Linear",[Lo]:"Reinhard",[Do]:"Cineon",[No]:"ACESFilmic",[Fo]:"AgX",[Bo]:"Neutral",[Uo]:"Custom"};var m_={[Za]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};var g_={[el]:"ENVMAP_TYPE_CUBE",[zo]:"ENVMAP_TYPE_CUBE",[tl]:"ENVMAP_TYPE_CUBE_UV"};var x_={[zo]:"ENVMAP_MODE_REFRACTION"};var __={[Po]:"ENVMAP_BLENDING_MULTIPLY",[Qa]:"ENVMAP_BLENDING_MIX",[ja]:"ENVMAP_BLENDING_ADD"};var md=new Le;md.set(-1,0,0,0,1,0,0,0,1);var y_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var X={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function Qn(s,e,t,n,i,r=16){r=Math.min(r,n/2,i/2),s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.quadraticCurveTo(e+n,t,e+n,t+r),s.lineTo(e+n,t+i-r),s.quadraticCurveTo(e+n,t+i,e+n-r,t+i),s.lineTo(e+r,t+i),s.quadraticCurveTo(e,t+i,e,t+i-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath()}function Ye(s,e,t,n,i,{top:r="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=s.createLinearGradient(e,t,e,t+i);c.addColorStop(0,r),c.addColorStop(1,o),s.fillStyle=c,Qn(s,e,t,n,i,l),s.fill(),s.strokeStyle=a,s.lineWidth=1.5,s.stroke()}function _t(s,e,t){let n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),s.fillStyle=n,s.fillRect(0,0,e,t),s.save(),s.globalAlpha=.13,s.strokeStyle="#79b3d1",s.lineWidth=1;for(let i=0;i<8;i++)s.beginPath(),s.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),s.stroke();s.restore(),s.fillStyle=X.gold,s.fillRect(32,0,96,4)}function j(s,e,t,n,i=28,r=X.ink,o="600",a){s.font=`${o} ${i}px Arial`,s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Number.isFinite(a)?s.fillText(e,t,n,a):s.fillText(e,t,n)}function fn(s,e,t,n,i,r=X.gold){if(s.save(),s.translate(t,n),s.scale(i/48,i/48),s.lineWidth=2.8,s.lineCap="round",s.lineJoin="round",s.strokeStyle=r,s.fillStyle=r,e==="ball")s.beginPath(),s.arc(0,0,18,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-18,0),s.lineTo(18,0),s.stroke(),s.fillStyle="#183a51",s.beginPath(),s.arc(0,0,6,0,Math.PI*2),s.fill(),s.stroke();else if(e==="puff"){s.beginPath(),s.arc(0,3,16,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-14,-5),s.lineTo(-15,-19),s.lineTo(-5,-11),s.moveTo(14,-5),s.lineTo(15,-19),s.lineTo(5,-11),s.stroke(),s.beginPath(),s.arc(0,-8,5,0,Math.PI*1.5),s.stroke();for(let o of[-6,6])s.beginPath(),s.arc(o,3,2,0,Math.PI*2),s.fill();s.beginPath(),s.arc(0,7,5,.2,Math.PI-.2),s.stroke()}else if(e==="book")Qn(s,-20,-15,40,32,4),s.stroke(),s.beginPath(),s.moveTo(0,-15),s.lineTo(0,17),s.moveTo(-14,-6),s.lineTo(-5,-6),s.moveTo(5,-6),s.lineTo(14,-6),s.stroke();else if(e==="trophy")s.beginPath(),s.moveTo(-13,-17),s.lineTo(13,-17),s.lineTo(9,-3),s.quadraticCurveTo(0,8,-9,-3),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(0,5),s.lineTo(0,16),s.moveTo(-10,18),s.lineTo(10,18),s.moveTo(-13,-13),s.quadraticCurveTo(-25,-16,-19,-5),s.lineTo(-9,0),s.moveTo(13,-13),s.quadraticCurveTo(25,-16,19,-5),s.lineTo(9,0),s.stroke();else if(e==="golf")s.beginPath(),s.ellipse(0,13,18,6,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-3,13),s.lineTo(-3,-20),s.lineTo(15,-14),s.lineTo(-3,-7),s.stroke(),s.beginPath(),s.arc(10,8,3,0,Math.PI*2),s.fill();else if(e==="car"){Qn(s,-19,-15,38,30,5),s.stroke(),Qn(s,-11,-9,22,14,3),s.stroke();for(let o of[-22,18])for(let a of[-13,7])Qn(s,o,a,4,7,1),s.fill();s.beginPath(),s.moveTo(-12,10),s.lineTo(12,10),s.moveTo(0,-15),s.lineTo(0,-23),s.stroke()}else if(e==="target"){for(let o of[19,12,4])s.beginPath(),s.arc(0,0,o,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(0,0),s.lineTo(20,-20),s.moveTo(12,-20),s.lineTo(20,-20),s.lineTo(20,-12),s.stroke()}else s.beginPath(),s.moveTo(-6,-12),s.lineTo(12,0),s.lineTo(-6,12),s.closePath(),s.fill();s.restore()}function gl(s,e,t,n,i,r){let o=e==="RC car racing"?{title:"RC car racing",sub:"Three laps \xB7 steer, race and beat your best",icon:"car",accent:X.blue}:e==="Arcade wall of fame"?{title:"Arcade wall of fame",sub:"Personal bests \xB7 medals \xB7 trophy shelf",icon:"trophy",accent:X.gold}:e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:X.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:X.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:X.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:X.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:X.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:X.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:X.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:X.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:X.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:X.pink}:null;if(o)Ye(s,t,n,i,72,{top:r?"#365c70":"#21465e",bottom:r?"#25465a":"#19364b",stroke:r?o.accent:"#3b5c71"}),s.fillStyle=o.accent,Qn(s,t+1,n+15,4,42,2),s.fill(),fn(s,o.icon,t+41,n+36,42,o.accent),j(s,o.title,t+82,n+31,i<600?26:29,X.ink,"700"),j(s,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,X.muted,"400",i-125),j(s,"\u203A",t+i-35,n+47,42,r?o.accent:X.muted,"400");else{let a=e==="Resume";Ye(s,t,n,i,72,{top:a?r?"#fff0c2":"#f8df9e":r?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":r?X.gold:"#496379"}),a&&fn(s,"play",t+33,n+36,25,"#173247"),j(s,e,t+(a?60:24),n+46,28,a?"#122c40":X.ink,"700")}}function xl(s,e){_t(s,1024,768),j(s,"TF JONES  /  PLAY IN THE YARD",44,37,19,X.blue,"700"),j(s,"Mollie\u2019s adventures",44,93,48,X.ink,"700"),j(s,"Point with your right hand, then pull the trigger.",44,132,24,X.muted,"400"),Ye(s,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),j(s,e,60,172,23,X.mint,"500",900)}function Qo(s,e,t,n,i){Ye(s,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),j(s,e,n+9,i,21,X.gold,"700"),j(s,t,n+45,i,21,X.muted,"400")}function _l(s,e=!1){Qo(s,"Y","Games menu",44,663),Qo(s,"B","Back",325,663),Qo(s,"A",e?"Rescue / replay":"Replay round",548,663),s.strokeStyle="#355168",s.beginPath(),s.moveTo(44,692),s.lineTo(980,692),s.stroke(),j(s,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,X.blue,"700"),j(s,e?"Race paused \xB7 grip brakes":"Right grip to teleport",674,731,21,X.muted,"400")}function yl(s,e){s.clearRect(0,0,768,192),Ye(s,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),s.fillStyle=X.gold,Qn(s,23,27,5,138,2),s.fill(),s.font="600 32px Arial";let t=[],n="";for(let r of e.split(/\s+/)){let o=n?n+" "+r:r;s.measureText(o).width>660&&n?(t.push(n),n=r):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((r,o)=>j(s,r,47,i+o*42,32,X.ink,"600"))}function vl(s,{total:e,throws:t,best:n,last:i}){_t(s,1024,640),fn(s,"target",72,66,55,X.mint),j(s,"STAFF-ROOM DARTS",119,79,40,X.ink,"700"),j(s,"NINE DART CHALLENGE",39,136,24,X.muted,"700"),j(s,String(e),36,281,142,X.gold,"700"),j(s,"POINTS",280,277,32,X.muted,"700"),Ye(s,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),j(s,"PERSONAL BEST",721,203,24,X.muted,"600"),j(s,String(n),721,264,52,X.mint,"700");for(let r=0;r<9;r++){let o=r<t;Ye(s,40+r*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),j(s,String(r+1),72+r*104,358,28,o?"#132e41":X.muted,"700")}Ye(s,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),j(s,i,61,458,36,X.ink,"600",890),j(s,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,X.mint,"600"),j(s,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,X.muted,"400")}var Ml=new Map;function Et(s,e,t="target",n=X.gold,i=1.7){let r=[s,e,t,n].join("|"),o=Ml.get(r);if(!o){let h=document.createElement("canvas");h.width=1024,h.height=256;let f=h.getContext("2d");f.fillStyle="#0a1b2c",f.fillRect(0,0,1024,256),Ye(f,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),f.fillStyle=n,f.fillRect(32,36,5,182),fn(f,t,110,128,88,n),j(f,s,192,123,58,X.ink,"700",790),j(f,e,194,186,26,n,"600",775),o=new De(h),o.colorSpace=Ee,Ml.set(r,o)}let a=new _e;a.name=s+" \xB7 activity sign";let l=new ge(new Ne(i,i/4),new Me({map:o}));a.add(l);let c=new ge(new ve(i+.055,i/4+.055,.04),new Se({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var es;function xi(){if(!es){let s=document.createElement("canvas");s.width=512,s.height=1024;let e=s.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let r=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(r,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(r,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=r+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(r,Math.floor((l+n())*341),o,1)}es=new De(s),es.colorSpace=Ee,es.anisotropy=4}return new Se({map:es,color:16777215,roughness:.28,metalness:.04})}var jo;function In(s=.5,e=.32){if(!jo){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,64);r.addColorStop(0,"rgba(4,12,20,.48)"),r.addColorStop(.55,"rgba(4,12,20,.2)"),r.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),jo=new De(n)}let t=new ge(new Ne(s,e),new Me({map:jo,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function Ln(s=1.4){let e=new _e;e.name="Warm arcade light fitting";let t=new ge(new ve(s,.09,.17),new Se({color:2504518,roughness:.6}));e.add(t);let n=new ge(new Ne(s-.1,.115),new Me({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function bl(s){let e=new ji(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,s.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new y(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new y(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var dt={left:-1.03,right:1.03,front:.08,back:6.95},ts=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function Dn(s,e,t){let n=.033,i=0,r=0;for(let o of t.ramps){let a=s-o.x,l=e-o.z,c=o.w/2,h=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=h)continue;let f=Math.min(.16,c*.3),u=Math.min(1,(c-Math.abs(a))/f),d=1-Math.abs(l)/h,p=o.h*u*d;.033+p>n&&(n=.033+p,i=u<1?-Math.sign(a)*o.h*d/f:0,r=-Math.sign(l||1e-4)*o.h*u/h)}return{height:n,gx:i,gz:r}}function gd(s,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,s.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,s.z)),i=s.x-t,r=s.z-n,o=Math.hypot(i,r);if(o>=.038)return;if(o<1e-9){let l=[[s.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-s.x,1,0],[s.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-s.z,0,1]].sort((c,h)=>c[0]-h[0]);[,i,r]=l[0],s.x+=i*(l[0][0]+.038+1e-4),s.z+=r*(l[0][0]+.038+1e-4)}else i/=o,r/=o,s.x+=i*(.038-o+1e-4),s.z+=r*(.038-o+1e-4);let a=s.vx*i+s.vz*r;a<0&&(s.vx-=1.68*a*i,s.vz-=1.68*a*r)}function xd(s,e,t,n,i,r){let o=i-t,a=r-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((s-t)*o+(e-n)*a)/l)):0;return Math.hypot(s-t-o*c,e-n-a*c)}function Tl(s,e,t){if(s.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),r=n/i;for(let o=0;o<i;o++){let a=s.x,l=s.z,c=Dn(s.x,s.z,e);s.vx-=7*c.gx*r,s.vz-=7*c.gz*r;let h=Math.hypot(s.vx,s.vz),f=Math.max(0,h-.4*r);h&&(s.vx*=f/h,s.vz*=f/h),s.x+=s.vx*r,s.z+=s.vz*r;for(let[u,d,p,m]of[["x","vx",dt.left+.038,dt.right-.038],["z","vz",dt.front+.038,dt.back-.038]])s[u]<p&&(s[u]=p,s[d]<0&&(s[d]*=-.72)),s[u]>m&&(s[u]=m,s[d]>0&&(s[d]*=-.72));for(let u of[...e.crates,...e.walls||[]])gd(s,u);if(s.distance=(s.distance||0)+Math.hypot(s.x-a,s.z-l),s.y=Dn(s.x,s.z,e).height+.038,Math.hypot(s.vx,s.vz)<=1.15&&xd(e.cup.x,e.cup.z,a,l,s.x,s.z)<.115-.038*.6){s.sunk=!0,s.x=e.cup.x,s.z=e.cup.z,s.vx=s.vz=0;break}Math.hypot(s.vx,s.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(s.vx=s.vz=0)}}var dr=s=>{let e=Math.hypot(s.x,s.y,s.z);return e>1e-5?{x:s.x/e,y:s.y/e,z:s.z/e}:null},ea=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),pr=(s,e)=>s.x*e.x+s.y*e.y+s.z*e.z,Sl=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x});function wl(s,e,t,n,i=null){if(n<=0||n>.1)return null;let r=(e.x-s.x)/n,o=(e.y-s.y)/n,a=(e.z-s.z)/n;if(Math.hypot(r,o,a)>8||pr(s.forward,e.forward)<.4)return null;let l=i||{x:r,y:o,z:a};if(Math.hypot(l.x,l.y,l.z)>8)return null;let c=Math.hypot(e.x-s.x,e.y-s.y,e.z-s.z),h=Math.hypot(e.forward.x-s.forward.x,e.forward.y-s.forward.y,e.forward.z-s.forward.z),f=Math.max(1,Math.ceil((c+h*.12)/.008));for(let u=0;u<=f;u++){let d=u/f,p=ea(s,e,d),m=dr(ea(s.forward,e.forward,d)),v=dr(ea(s.side,e.side,d));if(!m||!v)continue;let _=dr(Sl(v,m)),M=_&&dr(Sl(m,_));if(!M)continue;let x={x:t.x-p.x,y:t.y-p.y,z:t.z-p.z},g=pr(x,M),b=pr(x,_),R=pr(x,m);if(Math.hypot(Math.max(0,Math.abs(g)-.104),Math.max(0,Math.abs(b)-.027),Math.max(0,Math.abs(R)-.058))>.038+.01)continue;let T=R>=0?1:-1,A={x:m.x*T,z:m.z*T},w=Math.hypot(A.x,A.z);if(w<.65)continue;A.x/=w,A.z/=w;let P=l.x*A.x+l.z*A.z;if(P<.07)continue;let E=Math.min(3.6,P*.92);return{vx:A.x*E,vz:A.z*E}}return null}var _d=new Pe().setFromAxisAngle(new y(1,0,0),-Math.PI/2);function Al(s){let e=s.rightGripController,t=e&&e!==s.controller?e:s.controller;if(!t||t.visible===!1)return null;let n=t.getWorldPosition(new y),i=t.getWorldQuaternion(new Pe);return e&&e!==s.controller&&i.multiply(_d),{position:n,quaternion:i,down:new y(0,-1,0).applyQuaternion(i)}}function El(s){let e=new _e;e.name="Controller putter",s.add(e);let t=new Se({color:12964307,metalness:.72,roughness:.23}),n=new Se({color:1518388,roughness:.9}),i=(v,_,M=e)=>{let x=new ge(v,_);return M.add(x),x},r=i(new ke(.008,.009,1,10),t),o=i(new ke(.017,.02,.17,14),n);o.position.y=-.025;for(let v=0;v<5;v++){let _=i(new Nt(.018,.0011,4,12),new Se({color:5005926,roughness:.8}),o);_.rotation.x=Math.PI/2,_.position.y=-.065+v*.03}let a=new _e;a.name="Mallet putter head",e.add(a);let l=new ut;l.moveTo(-.083,-.05),l.lineTo(.083,-.05),l.quadraticCurveTo(.099,-.05,.099,-.03),l.lineTo(.099,.035),l.quadraticCurveTo(.099,.053,.077,.053),l.lineTo(-.077,.053),l.quadraticCurveTo(-.099,.053,-.099,.035),l.lineTo(-.099,-.03),l.quadraticCurveTo(-.099,-.05,-.083,-.05);let c=i(new Yt(l,{depth:.041,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:6}),t,a);c.rotation.x=Math.PI/2,c.position.y=.0205;let h=i(new ve(.18,.032,.004),new Se({color:3432035,roughness:.65}),a);h.position.z=-.055,i(new ve(.085,.003,.073),n,a).position.set(0,.026,.006);for(let v of[-.021,.021])i(new ve(.005,.002,.068),new Me({color:16248017}),a).position.set(v,.028,.004);i(new ke(.012,.014,.046,10),t,a).position.set(-.055,.026,.014);let d=.86;e.visible=!1;function p(v){d=Ke.clamp(v,.3,1.6),a.position.set(0,-d,0);let _=new y(-.055,-d+.044,.014);r.position.copy(_).multiplyScalar(.5),r.scale.y=_.length(),r.quaternion.setFromUnitVectors(new y(0,1,0),_.clone().normalize())}p(d);function m(v){e.position.copy(v.position),e.quaternion.copy(v.quaternion),e.updateMatrixWorld(!0);let _=a.getWorldPosition(new y),M=a.getWorldQuaternion(new Pe);return{x:_.x,y:_.y,z:_.z,forward:new y(0,0,-1).applyQuaternion(M),side:new y(1,0,0).applyQuaternion(M),up:new y(0,1,0).applyQuaternion(M)}}return{root:e,head:a,face:h,size:p,update:m,get length(){return d}}}var dn;function yd(){if(!dn){let s=document.createElement("canvas");s.width=256,s.height=512;let e=s.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,r,1,2)}dn=new De(s),dn.colorSpace=Ee,dn.wrapS=dn.wrapT=qt,dn.repeat.set(1/(dt.right-dt.left),1/(dt.back-dt.front)),dn.offset.set(.5,1.02),dn.anisotropy=4}return new Se({map:dn,roughness:.95})}function Cl(s,e,t,n){let i=new _e;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let r=new _e;r.name="Six-hole warehouse course",i.add(r);let o=U=>new Se({color:U,roughness:.65}),a=(U,Z,ae,Y,he,Ce=r)=>{let pe=new ge(U,Z);return pe.position.set(ae,Y,he),Ce.add(pe),pe},l=a(new nt(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=In(.16,.16);i.add(c);let h=El(i),f=h.root,u=h.head,d=new Me({color:16766588,transparent:!0,opacity:.78,depthWrite:!1,side:lt}),p=a(new hn(.13,.142,40),d,0,0,0,i);p.name="Putter contact guide",p.rotation.x=-Math.PI/2,p.visible=!1;let m=new St(new Be().setFromPoints([new y,new y]),new bt({color:8645568,transparent:!0,opacity:.7,depthWrite:!1}));m.name="Putter face direction",m.visible=!1,i.add(m);let v=document.createElement("canvas");v.width=1024,v.height=640;let _=v.getContext("2d"),M=new De(v);M.colorSpace=Ee;let x=a(new Ne(2.2,1.375),new Me({map:M}),0,0,0,i);x.name="Mini-golf scorecard";let g=null,b=!1,R=0,S=0,T=[],A=null,w=!1,P=!1,E=null,z=!1,D=!1,L=!1,B=0,$="Hold trigger and brush the putter through the ball.",N=null,W=!0,I=[],C=0,O=new Pe,k=()=>T.reduce((U,Z)=>U+Z,0),V=ts.reduce((U,Z)=>U+Z.par,0),H=()=>ts[R];try{let U=localStorage.getItem("tfj-mini-golf-best-v1"),Z=Number(U);U!==null&&Number.isFinite(Z)&&Z>=6&&(A=Z)}catch{}function q(){_t(_,1024,640),j(_,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,X.mint,"700"),j(_,L?"COURSE COMPLETE":`${R+1} / 6  \xB7  ${H().name.toUpperCase()}`,32,117,42,X.ink,"700",954),j(_,L?`${k()} strokes  \xB7  Par ${V}`:`${S} strokes  \xB7  Par ${H().par}`,32,190,43,X.gold,"700");for(let U=0;U<6;U++){let Z=32+U*161,ae=U===R;Ye(_,Z,227,151,177,{top:ae?"#26594a":"#183d43",bottom:"#0d2934",stroke:ae?X.gold:"#527779"}),j(_,`HOLE ${U+1}`,Z+13,260,24,ae?X.gold:X.muted),j(_,T[U]===void 0?"\u2014":String(T[U]),Z+18,334,58,X.ink,"700"),j(_,`PAR ${ts[U].par}`,Z+13,382,22,X.muted)}j(_,`TOTAL ${k()+(D?0:S)}  \xB7  BEST ${A??"\u2014"}`,32,459,32,X.mint,"700"),j(_,$,32,513,26,X.ink,"600",954),j(_,L?"A  PLAY AGAIN":D?"A  NEXT HOLE":"A  MOVE & FIT CLUB",32,578,27,X.gold,"700"),j(_,"Y  PAUSE / MENU",684,578,26,X.muted),M.needsUpdate=!0}function ie(){for(let U of[3,2,1.5,4,5,6])for(let Z of[-30,-29,-28,-27]){let ae=!0;for(let Y=-1.1;Y<=1.1;Y+=.275)for(let he=0;he<=7.8;he+=.25)(s.blocked(U+Y,Z+he,0)||Math.abs(s.groundAt(U+Y,Z+he,.1))>.1)&&(ae=!1);if(ae)return new y(U,0,Z)}return null}function Q(){let U=xi();return U.roughness=.78,U}function J(U){let Z=a(new ve(U.w,.25,U.d),Q(),U.x,.155,U.z);Z.name="Pallet obstacle";for(let ae=0;ae<4;ae++)a(new ve(U.w/4-.018,.026,U.d+.01),Q(),U.x+(ae-1.5)*U.w/4,.293,U.z);for(let ae of[-1,1])a(new ve(.025,.18,U.d+.018),o("#8d724d"),U.x+ae*(U.w/2-.018),.165,U.z)}function fe(U){let Y=[],he=[],Ce=[];for(let we=0;we<=20;we++)for(let re=0;re<=12;re++){let Ge=U.x-U.w/2+U.w*re/12,He=U.z-U.d/2+U.d*we/20;Y.push(Ge,Dn(Ge,He,H()).height+.002,He),he.push(Ge,-He)}for(let we=0;we<20;we++)for(let re=0;re<12;re++){let Ge=we*13+re,He=Ge+1,ft=Ge+12+1,je=ft+1;Ce.push(Ge,ft,He,He,ft,je)}let pe=new Be;pe.setAttribute("position",new Re(Y,3)),pe.setAttribute("uv",new Re(he,2)),pe.setIndex(Ce),pe.computeVertexNormals();let Ie=Q();Ie.side=lt;let Ue=new ge(pe,Ie);Ue.name="Loading ramp",r.add(Ue)}function de(){for(let re of[...r.children])re.traverse(Ge=>{Ge.geometry?.dispose(),Ge.material?.dispose()}),r.remove(re);r.position.copy(g);let U=H(),Z=new ut;Z.moveTo(dt.left,-dt.front),Z.lineTo(dt.right,-dt.front),Z.lineTo(dt.right,-dt.back),Z.lineTo(dt.left,-dt.back),Z.closePath();let ae=new $n;ae.absarc(U.cup.x,-U.cup.z,.115,0,Math.PI*2,!1),Z.holes.push(ae),a(new ve(2.2,.027,7),o("#173848"),0,.016,3.51);let Y=a(new $t(Z,40),yd(),0,.033,0);Y.rotation.x=-Math.PI/2,Y.name="Putting green";for(let re of[-1.065,1.065])a(new ve(.07,.14,7),o("#203c4b"),re,.099,3.51),a(new ve(.045,.006,7),new Se({color:15320952,emissive:11770199,emissiveIntensity:.25}),re,.172,3.51);for(let re of[.045,6.985])a(new ve(2.2,.14,.07),o("#203c4b"),0,.099,re);let he=a(new Gi(.115,40),new Me({color:398620}),U.cup.x,.034,U.cup.z);he.rotation.x=-Math.PI/2;let Ce=a(new hn(.115,.115+.015,40),new Me({color:16768133,side:lt}),U.cup.x,.035,U.cup.z);Ce.rotation.x=-Math.PI/2,a(new ke(.009,.009,.68,8),o("#e2e7d7"),U.cup.x,.37,U.cup.z);let pe=new Be;pe.setAttribute("position",new Re([0,0,0,.23,-.035,0,0,-.14,0],3)),pe.computeVertexNormals();let Ie=a(pe,new Me({color:16176260,side:lt}),U.cup.x,.7,U.cup.z);Ie.name="Hole flag";let Ue=a(new hn(.105,.123,32),new Me({color:16049069,side:lt}),U.tee.x,.035,U.tee.z);if(Ue.rotation.x=-Math.PI/2,U.crates.forEach(J),U.ramps.forEach(fe),U.pipe){let re=new ut;for(let He=0;He<=32;He++){let ft=Math.PI-He*Math.PI/32,je=Math.cos(ft)*.43,vi=Math.sin(ft)*.43;He?re.lineTo(je,vi):re.moveTo(je,vi)}for(let He=0;He<=32;He++){let ft=He*Math.PI/32;re.lineTo(Math.cos(ft)*.34,Math.sin(ft)*.34)}re.closePath();let Ge=a(new Yt(re,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);Ge.name="Warehouse pipe tunnel"}x.position.copy(g).add(new y(0,2.42,.3)),a(new ve(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let re of[-1.09,1.09])a(new ve(.035,3.55,.035),o("#254252"),re,1.78,.26);let we=Et("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",X.mint,2.05);we.position.set(0,3.5,.3),r.add(we)}function ee(){return N&&!N.sunk&&Math.hypot(N.vx,N.vz)>.04}function ce(U,Z){return!s.blocked(g.x+U,g.z+Z,0)&&Math.abs(s.groundAt(g.x+U,g.z+Z,.1))<.1&&![...H().crates,...H().walls||[]].some(ae=>Math.abs(U-ae.x)<ae.w/2+.2&&Math.abs(Z-ae.z)<ae.d/2+.2)}function F(){if(!N||ee()||D)return!1;let U=[[-.28,.78],[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[Z,ae]of U){let Y=N.x+Z,he=N.z+ae;if(ce(Y,he)&&s.xrTeleport(g.x+Y,0,g.z+he))return s.xrFace?.(0),oe(),W=!0,!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function K(){S=0,D=L=!1,B=0,w=P=!1,E=null,I=[],W=!0;let U=H();N={x:U.tee.x,z:U.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,de(),ue(),$="Hold your hand comfortably. A moves and fits your club.",F(),q()}function te(){let U=ie();return!U||!s.xrTeleport(U.x,0,U.z+7.03)?!1:(g=U,R=0,T=[],b=i.visible=!0,z=!1,O.identity(),K(),t("Mini-golf! Hold your controller comfortably and look down the green. A moves and fits the club. Hold trigger to putt."),!0)}function oe(){w=P=!1,E=null,I=[],f.visible=p.visible=m.visible=!1}function se(){b=i.visible=!1,oe()}function ye(U){if(D)return;D=!0,oe(),T.push(S),B=U?.8:0;let Z=H(),ae=U?S===1?"Hole in one!":S<Z.par?"Under par!":S===Z.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(L=R===ts.length-1,L){let Y=k(),he=Y<=V?"Gold":Y<=V+6?"Silver":"Bronze";A=A===null?Y:Math.min(A,Y);try{localStorage.setItem("tfj-mini-golf-best-v1",String(A))}catch{}$=`${he} medal! ${Y} strokes across six holes.`,t($)}else $=`${ae} ${S} strokes. A for hole ${R+2}.`,t($);n(U?.7:.2),q()}function ue(){l.position.set(g.x+N.x,g.y+N.y,g.z+N.z),c.position.set(g.x+N.x,g.y+Dn(N.x,N.z,H()).height+.003,g.z+N.z)}function Te(U){let Z=Al(U);if(!Z)return oe(),null;if(W){let Y=U.forward.clone();Y.y=0,Y.lengthSq()<.01&&Y.set(0,0,-1),Y.normalize();let he=new Pe().setFromAxisAngle(new y(0,1,0),Math.atan2(-Y.x,-Y.z)),Ce=Dn(Z.position.x-g.x,Z.position.z-g.z,H()).height,pe=Z.position.y-g.y-Ce-.028;if(pe<.3||pe>1.6)return oe(),null;O.copy(Z.quaternion).invert().multiply(he),h.size(pe),W=!1,E=null,I=[],$="Club fitted. Mint guide = level face. Hold trigger to putt.",q()}Z.quaternion.multiply(O);let ae=h.update(Z);return ae.x-=g.x,ae.y-=g.y,ae.z-=g.z,f.visible=!D,ae}function xe(U){if(p.visible=!!U&&!ee()&&!D,m.visible=!1,!p.visible)return;p.position.set(g.x+N.x,g.y+Dn(N.x,N.z,H()).height+.004,g.z+N.z);let Z=Math.hypot(U.x-N.x,U.z-N.z)<.7,ae=Math.hypot(U.forward.x,U.forward.z),Y=Math.abs(U.y-N.y)<.07&&Math.abs(U.up.y)>.8&&ae>.8;if(d.color.set(Z&&Y?8645568:16766588),h.face.material.color.set(Z&&Y?8636851:3432035),!Z||!Y)return;m.visible=!0;let he=U.forward.x/ae,Ce=U.forward.z/ae,pe=m.geometry.attributes.position;for(let Ie=0;Ie<2;Ie++){let Ue=Ie?.52:.07,we=U.x+he*Ue,re=U.z+Ce*Ue;pe.setXYZ(Ie,g.x+we,g.y+Dn(we,re,H()).height+.005,g.z+re)}pe.needsUpdate=!0,m.geometry.computeBoundingSphere()}function G(U,Z){if(!b)return;let ae=Math.max(0,Math.min(.1,U.dt)),Y=!!U.right?.gamepad?.buttons[0]?.pressed,he=!!U.right?.gamepad?.buttons[4]?.pressed,Ce=he&&!z;if(z=he,C+=ae,Z){oe();return}if(Ce){if(D){L?(R=0,T=[]):R++,K();return}else if(!ee()){F();return}}Y?w=!D:(w=!1,P=!0,E=null,I=[]);let pe=Te(U);if(xe(pe),Y&&P&&!D&&!ee()&&pe&&E){for(I.push({time:C,p:pe});I.length>2&&C-I[1].time>.045;)I.shift();let Ie=I[0],Ue=C-Ie.time,we=Ue>0?{x:(pe.x-Ie.p.x)/Ue,y:(pe.y-Ie.p.y)/Ue,z:(pe.z-Ie.p.z)/Ue}:null,re=wl(E,pe,N,ae,we);re&&(N.vx=re.vx,N.vz=re.vz,S++,P=!1,n(.3),$=`Putt ${S} \xB7 wait for the ball to stop.`,q())}if(E=Y&&pe?pe:null,Y&&pe&&!I.length&&I.push({time:C,p:pe}),!D){let Ie=N.x,Ue=N.z;Tl(N,H(),ae);let we=N.x-Ie,re=N.z-Ue,Ge=Math.hypot(we,re);Ge&&l.rotateOnWorldAxis(new y(re,0,-we).normalize(),Ge/.038),ue(),N.sunk?ye(!0):!ee()&&S>=8?ye(!1):!ee()&&$.startsWith("Putt")&&($="Ball stopped. A moves beside it and refits your club.",q())}B>0&&(B=Math.max(0,B-ae),l.position.y=g.y+.033+.038-(.8-B)*.2,l.scale.setScalar(Math.max(.12,B/.8)),c.visible=!1,B||(l.visible=!1))}return{root:i,course:r,putter:f,head:u,board:x,ball:l,ballGuide:p,aimLine:m,start:te,stop:se,cancel:oe,tick:G,moveBesideBall:F,get clubLength(){return h.length},get active(){return b},get origin(){return g},get held(){return w},get state(){return N},get hole(){return R},get strokes(){return S},get scores(){return T},get total(){return k()},get holeReady(){return D},get complete(){return L},get best(){return A},get layout(){return H()}}}function _i(s,e=.18){return Math.abs(s)<=e?0:Math.sign(s)*(Math.abs(s)-e)/(1-e)}function ns(s){let e=s?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function Rl(s,e,t,n){Math.abs(s)<.25&&(n=!1);let i=0;return e==="smooth"?i=-_i(s)*Math.PI/3*t:Math.abs(s)>.65&&!n&&(i=-Math.sign(s)*Math.PI/6,n=!0),{angle:i,latched:n}}function ta(s,e,t){return{x:s*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-s*Math.sin(t)}}var yt={bounds:{minX:-2.05,maxX:2.05,minZ:-3.3,maxZ:3.3},obstacles:[{x:0,z:0,halfX:.68,halfZ:1.75}],start:{x:-1.37,z:1.62,yaw:0},checkpoints:[{x:-1.37,z:1.95,nx:0,nz:-1,halfWidth:.66},{x:-1.37,z:-1.35,nx:0,nz:-1,halfWidth:.66},{x:0,z:-2.52,nx:1,nz:0,halfWidth:.77},{x:1.37,z:-1.35,nx:0,nz:1,halfWidth:.66},{x:1.37,z:1.35,nx:0,nz:1,halfWidth:.66},{x:0,z:2.52,nx:-1,nz:0,halfWidth:.77}]},na=1/240,vd=.29,Md=.49,ss=(s,e,t)=>Math.max(e,Math.min(t,s)),ia=(s,e,t)=>Number.isFinite(s)?ss(s,e,t):0,bd=s=>Math.atan2(Math.sin(s),Math.cos(s));function sa(){return{...yt.start,speed:0,wheelAngle:0,completedLaps:0,nextCheckpoint:1,lastCheckpoint:0,lapTime:0,elapsed:0,laps:[],finished:!1,collisions:0,rescues:0,distance:0,justLap:null,justFinished:!1,checkpointPassed:null,justCollision:!1,_accumulator:0,_contactCooldown:0}}function is(s,e,t){let n=-Math.sin(s.yaw),i=-Math.cos(s.yaw),r=s.speed*(n*e+i*t);r>=-.015||(s.speed=ss(s.speed-1.25*r*(n*e+i*t),-1.1,2.8),s._contactCooldown<=0&&(s.collisions++,s.justCollision=!0,s._contactCooldown=.18))}function Sd(s){let e=yt.bounds,t=.28;s.x<e.minX+t&&(s.x=e.minX+t,is(s,1,0)),s.x>e.maxX-t&&(s.x=e.maxX-t,is(s,-1,0)),s.z<e.minZ+t&&(s.z=e.minZ+t,is(s,0,1)),s.z>e.maxZ-t&&(s.z=e.maxZ-t,is(s,0,-1));for(let n of yt.obstacles){let i=ss(s.x,n.x-n.halfX,n.x+n.halfX),r=ss(s.z,n.z-n.halfZ,n.z+n.halfZ),o=s.x-i,a=s.z-r,l=Math.hypot(o,a);if(!(l>=t)){if(l<1e-9){let c=[[s.x-n.x+n.halfX,-1,0],[n.x+n.halfX-s.x,1,0],[s.z-n.z+n.halfZ,0,-1],[n.z+n.halfZ-s.z,0,1]].sort((d,p)=>d[0]-p[0]),[h,f,u]=c[0];o=f,a=u,s.x+=o*(h+t+1e-5),s.z+=a*(h+t+1e-5)}else o/=l,a/=l,s.x+=o*(t-l+1e-5),s.z+=a*(t-l+1e-5);is(s,o,a)}}}function Td(s,e,t){let n=yt.checkpoints[s.nextCheckpoint],i=(e-n.x)*n.nx+(t-n.z)*n.nz,r=(s.x-n.x)*n.nx+(s.z-n.z)*n.nz;if(i>0||r<=0||r-i<1e-9)return null;let o=-i/(r-i),a=e+(s.x-e)*o,l=t+(s.z-t)*o;return Math.abs((a-n.x)*-n.nz+(l-n.z)*n.nx)>n.halfWidth?null:{fraction:o,x:a,z:l}}function wd(s,e,t){s._contactCooldown=Math.max(0,s._contactCooldown-t),s.wheelAngle+=(-e.steer*Md-s.wheelAngle)*(1-Math.exp(-12*t));let n=s.speed,i=.32+.15*Math.abs(s.speed);e.brake>.01?s.speed>.025?s.speed=Math.max(0,s.speed-(5.8*e.brake+i)*t):s.speed=Math.min(0,Math.max(-1.1,s.speed-(2.4*e.brake-i)*t)):e.throttle>.01?s.speed<0?s.speed=Math.min(0,s.speed+(3.6*e.throttle+i)*t):s.speed=Math.max(0,Math.min(2.8,s.speed+(3.6*e.throttle-i)*t)):s.speed=Math.sign(s.speed)*Math.max(0,Math.abs(s.speed)-i*t),s.speed=ss(s.speed,-1.1,2.8);let r=(n+s.speed)/2,o=r*Math.tan(s.wheelAngle)/vd,a=s.yaw+o*t/2,l=s.x,c=s.z;s.x-=Math.sin(a)*r*t,s.z-=Math.cos(a)*r*t,s.yaw=bd(s.yaw+o*t),Sd(s),s.distance+=Math.hypot(s.x-l,s.z-c);let h=Td(s,l,c);if(h){let f=s.nextCheckpoint;if(s.checkpointPassed=f,s.lastCheckpoint=f,s.nextCheckpoint=(f+1)%yt.checkpoints.length,f===0){let u=s.lapTime+t*h.fraction;if(s.laps.push(u),s.completedLaps++,s.justLap=u,s.lapTime=-t*h.fraction,s.completedLaps>=3){s.finished=!0,s.justFinished=!0,s.x=h.x,s.z=h.z,s.speed=0,s.elapsed+=t*h.fraction,s.lapTime=0;return}}}s.elapsed+=t,s.lapTime+=t}function Pl(s,e={},t=0){if(s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,s.finished||!Number.isFinite(t)||t<=0)return s;let n={steer:ia(e.steer,-1,1),throttle:ia(e.throttle,0,1),brake:ia(e.brake,0,1)};for(s._accumulator+=Math.min(.1,t);s._accumulator>=na-1e-12&&!s.finished;)s._accumulator=Math.max(0,s._accumulator-na),wd(s,n,na);return s.finished&&(s._accumulator=0),s}function Il(s){if(s.finished)return!1;let e=yt.checkpoints[s.lastCheckpoint];return s.x=e.x+e.nx*.25,s.z=e.z+e.nz*.25,s.yaw=Math.atan2(-e.nx,-e.nz),s.speed=0,s.wheelAngle=0,s.elapsed+=2,s.lapTime+=2,s.rescues++,s._accumulator=0,s._contactCooldown=0,s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,!0}function Kt(s){if(!Number.isFinite(s)||s<0)return"\u2014";let e=Math.floor(s*100),t=Math.floor(e/6e3),n=e%6e3;return`${t}:${String(Math.floor(n/100)).padStart(2,"0")}.${String(n%100).padStart(2,"0")}`}var it=.025,Ct=(s,e=.6,t=0)=>new Se({color:s,roughness:e,metalness:t}),Ll=(s,e,t,n=10)=>s+(e-s)*(1-Math.exp(-Math.max(0,t)*n));function kt(s,e,t,n=0,i=0,r=0){let o=new ge(e,t);return o.position.set(n,i,r),s.add(o),o}function Qe(s,e,t,n,i,r,o,a){return kt(s,new ve(t,n,i),e,r,o,a)}function rs(s,e,t,n){let i=new ln(new ve(1,1,1),e,t.length),r=new at;i.name=n;for(let o=0;o<t.length;o++){let[a,l,c,h,f,u,d=0]=t[o];r.position.set(h,f,u),r.scale.set(a,l,c),r.rotation.set(d,0,0),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}return i.instanceMatrix.needsUpdate=!0,i.computeBoundingSphere(),s.add(i),i}function Nn(s,e,t,n,i=.005){let r=new y(...t),o=new y(...n),a=kt(s,new ke(i,i,r.distanceTo(o),6),e);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new y(0,1,0),o.sub(r).normalize()),a}function yr(s,e,t,n,i,r=it+.001){let o=kt(s,e,t,n,r,i);return o.rotation.x=-Math.PI/2,o}var _r,Un;function Ad(){if(!_r){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d");e.fillStyle="#f8e6aa",e.beginPath(),e.arc(64,64,59,0,Math.PI*2),e.fill(),e.strokeStyle="#16364a",e.lineWidth=7,e.stroke(),e.fillStyle="#133348",e.font="bold 94px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("7",64,71),_r=new De(s),_r.colorSpace=Ee}return new Me({map:_r,transparent:!0,depthWrite:!1})}function Ed(){if(!Un){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#334b5b",e.fillRect(0,0,256,256);let t=47;for(let n=0;n<7e3;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%256;e.fillStyle=n%2?"rgba(175,204,211,.065)":"rgba(10,26,42,.15)",e.fillRect(i,r,1,1)}Un=new De(s),Un.colorSpace=Ee,Un.wrapS=Un.wrapT=qt,Un.repeat.set(4,6),Un.anisotropy=2}return new Se({map:Un,roughness:.9})}function Dl(s){let e=new _e;e.name="TF Jones seven \xB7 RC rally buggy",s.add(e);let t=new _e;t.name="Sprung rally body",e.add(t);let n=Ct("#217db6",.32,.16),i=Ct("#0f2d3d",.52),r=Ct("#0c1720",.85),o=Ct("#e4edf2",.3,.55),a=Ct("#ffd66b",.38,.1),l=Ct("#244e68",.18,.55),c=document.querySelector?.(".brand img"),h=[];function f(L,B=.5,$=""){let N=document.createElement("canvas");N.width=1024,N.height=L;let W=new De(N);W.colorSpace=Ee,W.anisotropy=2;function I(){let C=N.getContext("2d");C.clearRect(0,0,1024,L),C.fillStyle="#0f2d3d",C.fillRect(0,0,1024,L),L>=224&&(C.fillStyle="#ffd66b",C.fillRect(24,16,976,9),C.fillRect(24,L-25,976,9));let O=L*B-85;if(c?.naturalWidth>0&&c?.naturalHeight>0){let k=document.createElement("canvas");k.width=1024,k.height=192;let V=k.getContext("2d");V.drawImage(c,0,0,c.naturalWidth,c.naturalHeight*.53,62,11,900,171),V.globalCompositeOperation="source-in",V.fillStyle="#fff",V.fillRect(0,0,1024,192),V.globalCompositeOperation="source-over",C.drawImage(k,0,O-11)}else C.fillStyle="#fff",C.font="italic 900 162px Arial",C.textAlign="center",C.textBaseline="middle",C.fillText("TFJONES",512,O+85,900);$&&(C.fillStyle="#ffd66b",C.font="bold 60px Arial",C.textAlign="center",C.textBaseline="middle",C.fillText($,512,L*.84,900)),W.needsUpdate=!0}return h.push(I),I(),new Se({map:W,roughness:.4,metalness:.05})}function u(L,B,$,N,W,I,C){let O=Qe(t,L,B,$,N,W,I,C),k=O.geometry,V=[...k.groups],H=[...new Set(L)],q=[];k.clearGroups();for(let ie=0;ie<H.length;ie++){let Q=q.length;for(let J of V)if(L[J.materialIndex]===H[ie])for(let fe=J.start;fe<J.start+J.count;fe++)q.push(k.index.array[fe]);k.addGroup(Q,q.length-Q,ie)}return k.setIndex(q),O.material=H,O}let d=f(512,.44,"RACING 07"),p=f(720,.73),m=f(192),v=f(224);c&&!c.complete&&c.addEventListener?.("load",()=>h.forEach(L=>L()),{once:!0});let _=new Se({color:"#fff1bb",emissive:"#ffe3a0",emissiveIntensity:.75,roughness:.28}),M=new Se({color:"#ff4156",emissive:"#e62347",emissiveIntensity:.55,roughness:.3}),x=In(.49,.59);x.position.y=.002,e.add(x),Qe(t,i,.252,.029,.382,0,.111,0).name="Buggy chassis";let g=new ut;for(let[L,[B,$]]of[[-.081,-.204],[.081,-.204],[.123,-.122],[.12,.161],[.091,.19],[-.091,.19],[-.12,.161],[-.123,-.122]].entries())L===0?g.moveTo(B,-$):g.lineTo(B,-$);g.closePath();let b=kt(t,new Yt(g,{depth:.054,bevelEnabled:!0,bevelSize:.009,bevelThickness:.006,bevelSegments:2,steps:1}),n,0,.122,0);b.rotation.x=-Math.PI/2,b.name="Blue rally body shell",u([i,i,p,i,i,i],.17,.017,.12,0,.185,-.128).name="TF Jones branded bonnet";for(let L of[-.071,.071])Qe(t,a,.015,.002,.12,L,.194,-.13);Qe(t,i,.284,.038,.027,0,.108,-.211).name="Front crash bumper",Qe(t,i,.26,.03,.026,0,.108,.211);for(let L of[-1,1])u([m,m,a,a,i,i],.016,.034,.18,L*.128,.157,.033).name=L<0?"TF Jones left side panel":"TF Jones right side panel",Nn(t,o,[L*.126,.14,-.1],[L*.126,.16,.13],.006),Nn(t,i,[L*.065,.113,-.13],[L*.146,.087,-.136],.011),Nn(t,i,[L*.065,.113,.13],[L*.146,.087,.136],.011);let R=Qe(t,l,.167,.085,.008,0,.226,-.037);R.rotation.x=-.34,Qe(t,l,.16,.07,.006,0,.224,.077).rotation.x=.12,Qe(t,i,.18,.008,.097,0,.269,.021);for(let L of[-.091,.091])Nn(t,a,[L,.177,-.054],[L,.272,-.008],.006),Nn(t,a,[L,.177,.09],[L,.272,.065],.006),Nn(t,a,[L,.272,-.008],[L,.272,.065],.006);u([n,n,d,i,n,n],.187,.01,.091,0,.279,.025).name="TF Jones racing roof";let S=yr(t,new Ne(.063,.063),Ad(),0,-.166,.195);S.name="Race number seven";for(let L of[-.069,.069]){Nn(t,i,[L,.174,.146],[L,.245,.195],.008);let B=kt(t,new ke(.014,.014,.009,10),_,L,.16,-.202);B.rotation.x=Math.PI/2,Qe(t,M,.033,.014,.008,L,.158,.195)}u([i,i,v,i,i,i],.29,.016,.063,0,.249,.202).name="TF Jones rear rally spoiler";for(let L of[-.14,.14])Qe(t,a,.012,.03,.065,L,.257,.202);let T=Nn(t,i,[.072,.18,.094],[.085,.374,.118],.0018);T.name="RC receiver antenna",kt(t,new nt(.005,6,4),a,.085,.375,.118);let A=[];for(let L of[-1,1])for(let B of[!0,!1]){let $=new _e;$.name=B?"Steering wheel pivot":"Rear axle",$.position.set(L*.146,.078,B?-.137:.137),e.add($);let N=new _e;N.name=(B?"Front":"Rear")+(L<0?" left":" right")+" tire",$.add(N);let W=kt(N,new ke(.077,.077,.055,16),r);W.rotation.z=Math.PI/2;let I=[],C=[];for(let O of[-1,1]){let k=kt(N,new ke(.043,.043,.005,12),o,O*.028,0,0);k.rotation.z=Math.PI/2;let V=kt(N,new ke(.015,.015,.007,10),a,O*.032,0,0);V.rotation.z=Math.PI/2;for(let H=0;H<5;H++){let q=H*Math.PI*2/5;I.push([.003,.011,.028,O*.032,Math.cos(q)*.024,Math.sin(q)*.024,-q])}}for(let O=0;O<10;O++){let k=O*Math.PI*2/10;C.push([.05,.006,.019,0,Math.cos(k)*.077,Math.sin(k)*.077,k])}rs(N,i,I,"Rim spokes"),rs(N,r,C,"Raised tire tread"),A.push({pivot:$,wheel:N,front:B})}let w=0,P=0,E=0,z=0;function D(L,B=0){e.position.set(L.x,L.y??it,L.z),e.rotation.y=L.yaw??0;let $=Number.isFinite(L.speed)?L.speed:0,N=Number.isFinite(L.wheelAngle)?L.wheelAngle:(L.steer||0)*.5;w=(w+$*Math.max(0,Math.min(.1,B))/.077)%(Math.PI*2);for(let I of A)I.pivot.rotation.y=I.front?N:0,I.wheel.rotation.x=-w;let W=B>.001?Ke.clamp(($-P)/B,-7,7):0;E=Ll(E,Ke.clamp(-N*$*.075,-.11,.11),B),z=Ll(z,W*.005,B),t.rotation.z=E,t.rotation.x=z,t.position.y=Math.abs($)>.08?Math.sin(w*1.7)*.0015:0,P=$}return D({x:0,z:0,yaw:0,speed:0},0),{root:e,wheels:A,body:t,shadow:x,update:D}}function Cd(s,e,t,n,i,r){let o=new ut;o.moveTo(0,.16),o.lineTo(.125,-.005),o.lineTo(.05,-.005),o.lineTo(.05,-.14),o.lineTo(-.05,-.14),o.lineTo(-.05,-.005),o.lineTo(-.125,-.005),o.closePath();let a=yr(s,new $t(o),r,e,t);return a.rotation.z=Math.atan2(-n,-i),a.name="Clockwise racing arrow",a}function Rd(s,e,t){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d");i.fillStyle="#102638",i.fillRect(0,0,128,128),i.strokeStyle="#8fe1c3",i.lineWidth=6,i.strokeRect(5,5,118,118),i.fillStyle="#f7fafc",i.font="bold 81px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(String(e+1),64,70);let r=new De(n);r.colorSpace=Ee;let o=yr(s,new Ne(.21,.21),new Me({map:r}),t.x-t.nx*.33,t.z-t.nz*.33);return o.rotation.z=Math.atan2(-t.nx,-t.nz),o.name="Checkpoint "+(e+1)+" number",o}function Nl(s){let e=new _e;e.name="Warehouse RC racing circuit",s.add(e);let{minX:t,maxX:n,minZ:i,maxZ:r}=yt.bounds,o=n-t,a=r-i,l=(t+n)/2,c=(i+r)/2,h=Ct("#132e40",.72),f=Ct("#29495b"),u=Ct("#f4e6bc",.6),d=Ct("#dd6574",.62),p=Ct("#f6d484",.5),m=Ct("#162a34",.9),v=new Se({color:"#8fe1c3",emissive:"#438b7e",emissiveIntensity:.26,roughness:.4});Qe(e,h,o+.18,.021,a+.18,l,.0105,c).name="Raised circuit mat";let _=yr(e,new Ne(o,a),Ed(),l,c,it);_.name="Asphalt racing surface";let M=[],x=[],g=[],b=[],R=[],S=[];for(let I of[t-.045,n+.045]){let C=Qe(e,f,.09,.092,a+.18,I,it+.046,c);C.name="RC boundary rail",M.push(C),Qe(e,v,.058,.006,a+.1,I,it+.095,c)}for(let I of[i-.045,r+.045]){let C=Qe(e,f,o,.092,.09,l,it+.046,I);C.name="RC boundary rail",M.push(C),Qe(e,v,o,.006,.058,l,it+.095,I)}for(let I of[t-.045,n+.045]){let C=Math.ceil(a/.22);for(let O=0;O<C;O++)(O%2?R:b).push([.085,.004,a/C-.003,I,it+.097,i+(O+.5)*a/C])}for(let I of[i-.045,r+.045]){let C=Math.ceil(o/.22);for(let O=0;O<C;O++)(O%2?R:b).push([o/C-.003,.004,.085,t+(O+.5)*o/C,it+.097,I])}let T=xi();T.roughness=.85;for(let I of yt.obstacles){let{x:C,z:O,halfX:k,halfZ:V}=I,H=k*2,q=V*2,ie=new _e;ie.name="Pallet shipping island",e.add(ie),x.push(ie),Qe(ie,h,H,.125,q,C,it+.0625,O).name="Solid island barrier";for(let fe of[-1,1]){let de=Math.ceil(q/.22);for(let ee=0;ee<de;ee++)(ee%2?R:b).push([.055,.018,q/de-.003,C+fe*(k-.0275),it+.13,O-V+(ee+.5)*q/de])}for(let fe of[-1,1]){let de=Math.ceil(H/.22);for(let ee=0;ee<de;ee++)(ee%2?R:b).push([H/de-.003,.018,.055,C-k+(ee+.5)*H/de,it+.13,O+fe*(V-.0275)])}for(let fe=0;fe<7;fe++)Qe(ie,T,(H-.16)/7-.011,.025,q-.18,C+(fe-3)*(H-.16)/7,it+.153,O);let Q=Ct("#c1a274",.94),J=Ct("#917b5e",.9);for(let[fe,de]of[-.93,0,.93].entries()){let ee=.28+fe%2*.13,ce=.68,F=.72,K=it+.18+ee/2;Qe(ie,Q,ce,ee,F,C+(fe===1?.1:-.09),K,O+de).name="Warehouse cargo crate",Qe(ie,J,.037,.004,F+.004,C+(fe===1?.1:-.09),K+ee/2+.002,O+de);for(let te of[-1,1])Qe(ie,J,.007,ee,.029,C+(fe===1?.1:-.09)+te*(ce/2+.004),K,O+de)}for(let fe of[-1,1])for(let de of[-1,1]){let ee=C+fe*(k-.14),ce=O+de*(V-.16);Qe(ie,m,.13,.015,.13,ee,it+.167,ce),kt(ie,new cn(.054,.15,8),p,ee,it+.25,ce),kt(ie,new ke(.032,.04,.022,8),u,ee,it+.245,ce)}}let A=yt.checkpoints[0],w=Math.abs(A.nz)>.5,P=A.halfWidth*2;for(let I=0;I<2;I++)for(let C=0;C<12;C++){let O=-P/2+(C+.5)*P/12,k=(I-.5)*.085,V=A.x+(w?O:k),H=A.z+(w?k:O);((I+C)%2?S:R).push([w?P/12-.002:.083,.001,w?.083:P/12-.002,V,it+.002,H])}rs(e,u,R,"Cream curb and starting line tiles"),rs(e,d,b,"Coral curb tiles"),rs(e,h,S,"Chequered starting line");let E=7903914,z=9429443;yt.checkpoints.forEach((I,C)=>{let O=new _e;O.name="RC checkpoint "+(C+1),e.add(O);let k=new Me({color:E,transparent:!0,opacity:.58,depthWrite:!1}),V=Cd(O,I.x+I.nx*.35,I.z+I.nz*.35,I.nx,I.nz,k),H=-I.nz,q=I.nx,ie=[new y(I.x-H*I.halfWidth,it+.004,I.z-q*I.halfWidth),new y(I.x+H*I.halfWidth,it+.004,I.z+q*I.halfWidth)],Q=new St(new Be().setFromPoints(ie),new Ki({color:E,transparent:!0,opacity:.6,dashSize:.08,gapSize:.04}));Q.computeLineDistances(),O.add(Q),Q.name="Checkpoint crossing",Q.visible=C!==0,Rd(O,C,I),g.push({root:O,arrow:V,line:Q,material:k})});let D=document.createElement("canvas");D.width=768,D.height=192;let L=D.getContext("2d");L.fillStyle="#102b40",L.fillRect(0,0,768,192),L.fillStyle="#8fe1c3",L.fillRect(0,0,768,9),L.fillStyle="#f7fafc",L.font="bold 73px Arial",L.textAlign="center",L.fillText("TFJ RC RACING",384,116),L.fillStyle="#f6d484",L.font="26px Arial",L.fillText("PALLET CIRCUIT \xB7 FOLLOW THE ARROWS",384,166);let B=new De(D);B.colorSpace=Ee;let $=yt.obstacles[0].z+yt.obstacles[0].halfZ;Qe(e,h,1.2,.31,.026,0,.31,$-.014);for(let I of[-.5,.5])Qe(e,f,.021,.21,.021,I,.205,$-.029);let N=kt(e,new Ne(1.18,.295),new Me({map:B}),0,.31,$+.002);N.name="Pallet circuit fascia";function W(I){for(let C=0;C<g.length;C++){let O=g[C],k=C===I;O.material.color.setHex(k?z:E),O.material.opacity=k?.95:.45,O.line.material.color.setHex(k?z:E),O.line.material.opacity=k?.92:.3}}return W(1),{root:e,rails:M,obstacles:x,checkpoints:g,road:_,setCheckpoint:W,surfaceY:it}}var Fl="tfj-rc-best-lap-v1",Bl="tfj-rc-best-race-v1",Ol=s=>Ke.clamp(Number.isFinite(s?.value)?s.value:s?.pressed?1:0,0,1);function zl(s,e,t,n){let i=new _e;i.name="Warehouse RC car racing",i.visible=!1,e.add(i);let r=Nl(i),o=Dl(i),a=document.createElement("canvas");a.width=1280,a.height=768;let l=a.getContext("2d"),c=new De(a);c.colorSpace=Ee;let h=new ge(new Ne(2.7,1.62),new Me({map:c}));h.name="RC race scoreboard",h.position.set(0,2.05,yt.bounds.minZ-.2),i.add(h);let f=new ge(new ve(2.77,1.69,.055),new Se({color:1058613,roughness:.6}));f.position.copy(h.position),f.position.z-=.037,i.add(f);for(let C of[-1.34,1.34]){let O=new ge(new ve(.038,2.92,.038),new Se({color:4019813,metalness:.3,roughness:.5}));O.position.set(C,1.46,h.position.z-.04),i.add(O)}let u=Et("TFJ RC RACING","WAREHOUSE  /  THREE-LAP TIME TRIAL","play",X.blue,2.6);u.position.set(0,3.27,h.position.z),i.add(u);let d=[];for(let C=0;C<3;C++){let O=new ge(new nt(.065,12,8),new Me({color:2307910}));O.position.set((C-1)*.21,1.13,h.position.z+.03),i.add(O),d.push(O)}let p=null,m=null,v=!1,_=sa(),M=3,x=!1,g=!1,b=!1,R=null,S=null,T=0,A="Release trigger, then get ready!",w=!1;function P(C,O){try{let k=localStorage.getItem(C),V=k===null||!k.trim()?NaN:Number(k);return Number.isSafeInteger(V)&&V>=O&&V<=36e5?V:null}catch{return null}}R=P(Fl,1e3),S=P(Bl,3e3);function E(){_t(l,1280,768),j(l,"TF JONES  /  PALLET CIRCUIT",36,46,26,X.blue,"700"),j(l,_.finished?"RACE COMPLETE":"THREE-LAP TIME TRIAL",36,108,49,X.ink,"700"),Ye(l,885,29,356,135,{top:"#214b54",bottom:"#102e40",stroke:X.mint}),j(l,"BEST LAP",909,73,26,X.mint,"700"),j(l,R===null?"\u2014":Kt(R/1e3),909,137,53,X.gold,"700"),j(l,M>0?`READY  ${Math.ceil(M)}`:_.finished?"FINISH!":`LAP ${_.completedLaps+1} / ${3}`,36,210,55,X.gold,"700"),j(l,Kt(_.elapsed),693,215,66,X.ink,"700"),j(l,`Current lap ${Kt(_.lapTime)}`,37,263,32,X.mint,"600"),j(l,`Best race ${S===null?"\u2014":Kt(S/1e3)}`,692,263,30,X.muted,"500");for(let C=0;C<3;C++){let O=36+C*404,k=_.laps[C]!==void 0;Ye(l,O,296,385,156,{top:k?"#285749":"#1c3f55",bottom:"#102b3e",stroke:k?X.mint:"#496679"}),j(l,`LAP ${C+1}`,O+22,337,25,k?X.mint:X.muted,"700"),j(l,k?Kt(_.laps[C]):"\u2014",O+22,410,54,X.ink,"700")}j(l,A,37,503,30,X.ink,"600",1204),j(l,"LEFT STICK  STEER",37,562,28,X.blue,"700"),j(l,"RIGHT TRIGGER  GAS",638,562,28,X.gold,"700"),j(l,"RIGHT GRIP  BRAKE / REVERSE",37,612,25,X.muted),j(l,_.finished?"A  RACE AGAIN":"A  RESCUE CAR  (+2s)",638,612,25,X.mint,"700"),j(l,"X  RETURN TO DRIVER SPOT",37,690,25,X.muted),j(l,"Y  PAUSE / MENU   \xB7   B  LEAVE",638,690,25,X.muted),c.needsUpdate=!0,d.forEach((C,O)=>C.material.color.setHex(_.finished?9429443:M>2?O===0?15755368:2307910:M>1?O<=1?16176260:2307910:M>0?16176260:9429443))}function z(){let C=yt.bounds;for(let O of[3,3.5,4,2.5,4.5])for(let k of[-26.5,-26,-27,-25.5]){let V=!0;for(let H=C.minX-.11;H<=C.maxX+.11;H+=.3)for(let q=C.minZ-.3;q<=C.maxZ+.12;q+=.3)(s.blocked(O+H,k+q,0)||Math.abs(s.groundAt(O+H,k+q,.1))>.1)&&(V=!1);if(V)for(let H of[0,-.75,.75,-1.5,1.5]){let q=new y(O+H,0,k+C.maxZ+1.05),ie=!0;for(let Q of[-.25,0,.25])for(let J of[-.25,0,.25])(s.blocked(q.x+Q,q.z+J,0)||Math.abs(s.groundAt(q.x+Q,q.z+J,.1))>.1)&&(ie=!1);if(ie)return{origin:new y(O,0,k),view:q}}}return null}function D(){_=sa(),M=3,x=!1,A="Release trigger. Follow the mint arrows clockwise.",T=0,w=!1,o.update(_,0),r.setCheckpoint(_.nextCheckpoint),E()}function L(){let C=z();return!C||!s.xrTeleport(C.view.x,0,C.view.z)?!1:(p=C.origin,m=C.view,i.position.copy(p),s.xrFace?.(0),v=i.visible=!0,g=b=!1,D(),t("RC racing! Left stick steers, right trigger drives. Grip brakes and reverses. A rescues the car."),!0)}function B(){x=!1}function $(){v=i.visible=!1,B()}function N(){return!m||!s.xrTeleport(m.x,0,m.z)?!1:(s.xrFace?.(0),B(),!0)}function W(C){let O=Math.round(C*1e3);if(!(O<1e3||O>36e5)&&(R===null||O<R)){R=O;try{localStorage.setItem(Fl,String(O))}catch{}t(`New RC lap record! ${Kt(O/1e3)}`)}}function I(C,O){if(!v)return;let k=Math.max(0,Math.min(.1,C.dt||0)),V=!!C.right?.gamepad?.buttons[4]?.pressed,H=!!C.left?.gamepad?.buttons[4]?.pressed,q=V&&!g,ie=H&&!b;if(g=V,b=H,O){B();return}if(!C.right?.gamepad||!C.left?.gamepad){B(),w||(w=!0,A="Reconnect both controllers. Race paused.",E());return}if(w&&(w=!1,A="Controller ready. Release trigger to resume.",E()),ie&&(A=N()?"Driver viewpoint restored. Release trigger to drive.":"Driver spot is blocked. Use B to leave the race.",E()),q)if(_.finished){D();return}else M<=0&&Il(_)&&(A="Car rescued at your last gate. +2 seconds.",n(.2),E());let Q=Ol(C.right.gamepad.buttons[0]),J=Ol(C.right.gamepad.buttons[1]);Q<.1&&J<.1&&(x=!0);let fe=k;if(M>0){let ce=Math.min(M,k);if(M-=ce,fe-=ce,M<=0&&(A="GO! Drive through the mint gates in order.",n(.4)),T+=k,(T>=.1||M<=0)&&(T=0,E()),M>0)return}if(_.finished)return;let de=_i(ns(C.left)[0]),ee=_.collisions;if(Pl(_,{steer:de,throttle:x?Q:0,brake:x?J:0},fe),o.update(_,fe),r.setCheckpoint(_.nextCheckpoint),_.collisions!==ee&&(n(.12),A="Bump! Ease off, reverse, or use A to rescue."),_.checkpointPassed!==null&&(A=`Gate ${_.checkpointPassed+1} cleared. Follow the mint arrow.`),_.justLap!==null&&(W(_.justLap),n(.4),A=`Lap ${_.completedLaps}: ${Kt(_.justLap)}`,E()),_.justFinished){let ce=Math.round(_.elapsed*1e3);if(ce>=3e3&&ce<=36e5&&(S===null||ce<S)){S=ce;try{localStorage.setItem(Bl,String(ce))}catch{}}let F=Math.min(..._.laps);A=`${F<=14?"Gold":F<=20?"Silver":"Bronze"} lap medal! Race ${Kt(_.elapsed)}. A to replay.`,r.setCheckpoint(null),t(`RC race complete! ${Kt(_.elapsed)} \xB7 A to race again.`),n(.7),E()}T+=k,T>=.1&&(T=0,E())}return E(),{root:i,track:r,car:o,board:h,start:L,stop:$,cancel:B,tick:I,returnToView:N,get active(){return v},get origin(){return p},get view(){return m},get state(){return _},get countdown(){return M},get bestLapMs(){return R},get bestRaceMs(){return S}}}var br="tfj-memory-bests-v1",vr=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>{if(!["string","number"].includes(typeof s)||typeof s=="string"&&!s.trim())return null;let n=Number(s);return Number.isSafeInteger(n)&&n>=e&&n<=t?n:null};function Mr(s){let e=s;try{typeof e=="string"&&(e=JSON.parse(e))}catch{return{}}if(!e||typeof e!="object"||Array.isArray(e))return{};let t={};for(let n=2;n<=6;n++){let i=vr(e[n],n,1e4);i!==null&&(t[n]=i)}return t}function kl(s,e=0,t={}){let n=x=>{try{return s?.getItem(x)??null}catch{return null}},i=(x,g,b,R=0,S=!1)=>{let T=vr(n(x),R,b),A=vr(t[g],R,b),w=[T,A].filter(P=>P!==null);return w.length?S?Math.min(...w):Math.max(...w):null},r=(x,g,b,R)=>x===null?0:x>=R?3:x>=b?2:x>=g?1:0,o=[],a=(x,g,b,R,S,T,A,w,P)=>{let E=i(b,x,R);o.push({id:x,title:g,value:E,score:E===null?"\u2014":String(E),detail:E===null?"Play a complete round":A,medal:r(E,...S),goal:`Gold: ${S[2]} ${T}`,icon:w,accent:P})};a("bowling","WAREHOUSE BOWLING","tfj-bowling-best-10-v1",100,[10,50,80],"pins","pins / 100 \xB7 ten frames","target","#8bc8f3"),a("darts","STAFF-ROOM DARTS","tfj-vr-darts-best-v1",540,[50,150,300],"points","points \xB7 nine darts","target","#8fe1c3");let l=i("tfj-mini-golf-best-v1","golf",48,6,!0);o.push({id:"golf",title:"WAREHOUSE MINI-GOLF",value:l,score:l===null?"\u2014":String(l),detail:l===null?"Finish all six holes":"strokes \xB7 six holes \xB7 lower wins",medal:l===null?0:l<=18?3:l<=24?2:1,goal:"Gold: 18 strokes or fewer",icon:"golf",accent:"#8fe1c3"}),a("basketball","BASKETBALL","tfj-basket-best",10,[2,5,8],"baskets","baskets / 10 throws","target","#f6d484"),a("planes","PAPER PLANES","tfj-planes-best-v1",150,[10,50,100],"points","points \xB7 five flights","play","#8bc8f3");let c=i("tfj-rc-best-lap-v1","rc",36e5,1e3,!0),h=c===null?0:Math.floor(c/6e4),f=c===null?0:Math.floor(c/1e3)%60,u=c===null?0:Math.floor(c/10)%100;o.push({id:"rc",title:"RC CAR RACING",value:c,score:c===null?"\u2014":`${h}:${String(f).padStart(2,"0")}.${String(u).padStart(2,"0")}`,detail:c===null?"Complete a lap":"best lap \xB7 lower wins",medal:c===null?0:c<=14e3?3:c<=2e4?2:1,goal:"Gold: lap in 14 seconds",icon:"car",accent:"#8bc8f3"});let d=Mr(n(br)),p=Mr(t.memory);for(let[x,g]of Object.entries(p))d[x]=Math.min(d[x]??1/0,g);let m=Object.keys(d).map(Number).sort((x,g)=>g-x)[0]??null,v=m===null?null:d[m];o.push({id:"memory",title:"MEMORY MATCH",value:v,pairs:m,score:v===null?"\u2014":String(v),detail:v===null?"Use your collected cards":`turns \xB7 ${m}-pair deck \xB7 lower wins`,medal:v===null?0:v===m?3:v<=m+2?2:1,goal:m===null?"Practice rounds do not count":`Gold: ${m} turns \xB7 perfect match`,icon:"book",accent:"#f3b2cf"});let _=vr(e,0,18)??0;o.push({id:"cards",title:"MOLLIE\u2019S CARD ALBUM",value:_,score:`${_} / 18`,detail:_===18?"Collection complete!":"Cards found around the yard",medal:r(_,6,12,18),goal:"Gold: collect all 18 cards",icon:"book",accent:"#f6d484"});let M=i("tfj-vr-jigglypuff-rounds-v1","hide",Number.MAX_SAFE_INTEGER)??0;return o.push({id:"hide",title:"JIGGLYPUFF SEEKER",value:M,score:String(M),detail:"complete hide-and-seek rounds",medal:r(M,1,3,5),goal:"Gold: complete five hunts",icon:"puff",accent:"#f3b2cf"}),o}var ra=s=>["TO EARN","BRONZE","SILVER","GOLD"][s];var yi=[5465977,12025936,13359585,16176260];function Pd(s){let e=s.colliders.map(t=>new qe(new y(t.min.x,t.min.y,t.min.z),new y(t.max.x,t.max.y,t.max.z)));for(let t of s.colliders){let{min:n,max:i}=t;if(n.x<7.5||i.x>9||i.x-n.x>.3||i.z-n.z<3.9||n.y>.1||i.y<2.78)continue;let r=(n.z+i.z)/2;for(let o of[r,r-.45,r+.45]){if(o-1.86<n.z||o+1.86>i.z)continue;let a=new y(n.x-.045,0,o),l=a.clone().add(new y(-2.45,0,0)),c=!0;for(let f of[-.3,0,.3])for(let u of[-.4,0,.4])(s.blocked(l.x+f,l.z+u,0)||Math.abs(s.groundAt(l.x+f,l.z+u,.1))>.1)&&(c=!1);let h=l.clone().add(new y(0,1.68,0));for(let f of[-1.7,-.6,.6,1.7])for(let u of[.8,1.7,2.65]){let d=a.clone().add(new y(-.052,u,f)),p=d.clone().sub(h),m=p.length(),v=new tt(h,p.normalize()),_=new y;e.some(M=>v.intersectBox(M,_)&&_.distanceTo(h)<m-.015)&&(c=!1)}if(c)return{mount:a,view:l,heading:-Math.PI/2}}}return null}function Vl(s,e,t,n){let i=new _e;i.name="Arcade wall of fame",e.add(i);let r=Pd(s);i.visible=!!r,r&&(i.position.copy(r.mount),i.rotation.y=-Math.PI/2);let o=document.createElement("canvas");o.width=2048,o.height=1152;let a=o.getContext("2d"),l=new De(o);l.colorSpace=Ee,l.anisotropy=4;let c=new ge(new Ne(3.6,2.025),new Me({map:l}));c.name="Mollie\u2019s personal records",c.position.set(0,1.7,.052),i.add(c);let h=(T,A,w,P,E)=>{let z=new ge(T,A);return z.position.set(w,P,E),i.add(z),z},f=new Se({color:1058612,roughness:.7}),u=new Se({color:9215391,metalness:.6,roughness:.35});h(new ve(3.72,2.14,.075),f,0,1.7,0);let d=new Me({color:16176260});for(let T of[.626,2.774])h(new ve(3.74,.024,.045),d,0,T,.031);for(let T of[-1.862,1.862])h(new ve(.024,2.16,.045),d,T,1.7,.031);h(new ve(3.74,.045,.24),u,0,.32,.13);let p=[];for(let T=1;T<=3;T++){let A=new _e;A.name=`${ra(T)} trophy`,A.position.set((T-2)*1.05,.346,.14),i.add(A);let w=new Se({color:yi[0],metalness:.68,roughness:.32}),P=[new ge(new ve(.24,.044,.16),f),new ge(new ke(.069,.088,.052,16),w),new ge(new ke(.018,.029,.072,12),w),new ge(new Jn([new le(.025,0),new le(.06,.045),new le(.089,.12),new le(.078,.13),new le(.049,.052),new le(.014,.021)],20),w)];P[0].position.y=.022,P[1].position.y=.069,P[2].position.y=.12,P[3].position.y=.15,A.add(...P);for(let E of[-.092,.092]){let z=new ge(new Nt(.042,.008,6,14),w);z.position.set(E,.233,0),A.add(z)}p.push({trophy:A,material:w,tier:T})}let m=[],v=null,_=0,M=0,x=0;function g(){_t(a,2048,1152),j(a,"TF JONES  /  WAREHOUSE ARCADE",54,64,27,X.blue,"700"),j(a,"WALL OF FAME",52,154,86,X.ink,"700"),j(a,"Mollie\u2019s personal bests",54,213,35,X.gold,"600");let T=m.filter(w=>w.medal).length,A=m.filter(w=>w.medal===3).length;Ye(a,1535,46,456,174,{top:"#254f54",bottom:"#142f43",stroke:X.gold,radius:20}),j(a,`${T} / ${m.length}`,1567,145,67,X.gold,"700"),j(a,`MEDALS EARNED  \xB7  ${A} GOLD`,1567,191,26,X.ink,"700"),m.forEach((w,P)=>{let E=54+P%3*650,z=253+Math.floor(P/3)*256,D=638;Ye(a,E,z,D,244,{top:"#234955",bottom:"#0d2639",stroke:w.medal?`#${yi[w.medal].toString(16).padStart(6,"0")}`:"#466374",radius:18}),fn(a,w.icon,E+39,z+36,40,w.accent),j(a,w.title,E+77,z+43,30,X.ink,"700",D-98),j(a,w.score,E+28,z+119,76,X.gold,"700",D-56),j(a,w.detail,E+28,z+153,25,X.muted,"500",D-56);let B=`#${yi[w.medal].toString(16).padStart(6,"0")}`;Ye(a,E+27,z+167,D-54,36,{top:w.medal?"#24474d":"#162c3c",bottom:"#172f3c",stroke:B,radius:10}),j(a,ra(w.medal),E+44,z+194,26,w.medal?B:X.muted,"700"),j(a,w.goal,E+28,z+229,25,w.accent,"500",D-56)}),j(a,"YOUR SCORES \xB7 THIS BROWSER",54,1091,30,X.blue,"700"),j(a,"Play. Beat your best. Earn your place.",1160,1091,30,X.muted,"500"),l.needsUpdate=!0,x++;for(let w of p){let P=m.some(E=>E.medal>=w.tier);w.material.color.set(P?yi[w.tier]:yi[0]),w.material.emissive.set(P?yi[w.tier]:0),w.material.emissiveIntensity=P?.09:0}}function b(){let T;try{T=globalThis.localStorage}catch{}let A=kl(T,s.mollie.found.size,t()),w=JSON.stringify(A);if(w===v)return!1;let P=v!==null&&A.some((E,z)=>E.value!==null&&(m[z].value===null||E.id==="memory"&&E.pairs>m[z].pairs||(["golf","memory","rc"].includes(E.id)?E.value<m[z].value:E.value>m[z].value)||E.medal>m[z].medal));return m=A,v=w,P&&(M=2.5),g(),!0}function R(T){_-=T,_<=0&&(_=.75,b()),M=Math.max(0,M-T),d.color.set(M>0&&Math.sin(M*7)>0?9429443:16176260)}function S(){return b(),!r||!s.xrTeleport(r.view.x,0,r.view.z)?(n("The wall approach is blocked. Walk to the Unit 9 office divider."),!1):(s.xrFace?.(r.heading),n("Welcome to the wall of fame! Your personal records update as you play."),!0)}return b(),{root:i,panel:c,cups:p,site:r,refresh:b,tick:R,visit:S,get records(){return m},get draws(){return x},get celebrating(){return M>0}}}function Id(s,e,t,n=.48){if(s.z<=t.z||e.z>t.z)return!1;let i=(s.z-t.z)/(s.z-e.z);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.y+(e.y-s.y)*i-t.y)<n}function Ld(s,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let r=-.25-1.1/Math.max(.5,i);return n.y+=(r-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:s.clone().addScaledVector(n,t),v:n}}function Gl(s,e,t,n){let i=new _e;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let r=new _e;i.add(r);let o=k=>new Se({color:k,roughness:.7,side:lt}),a=new Be;a.setAttribute("position",new Re([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new ge(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new St(new Be().setFromPoints([new y(0,0,-.28),new y(0,.056,.1)]),new bt({color:7576243}));l.add(c);let h=s.colliders.map(k=>new qe(new y(k.min.x,k.min.y,k.min.z),new y(k.max.x,k.max.y,k.max.z)).expandByScalar(.06)),f=document.createElement("canvas");f.width=1024,f.height=640;let u=f.getContext("2d"),d=new De(f);d.colorSpace=Ee;let p=new ge(new Ne(1.6,1),new Me({map:d}));p.name="Paper-plane scoreboard",i.add(p);let m=!1,v=!1,_=null,M=null,x=[],g=[],b=0,R=!1,S=!1,T=!1,A=0,w=0,P=0,E=0,z="Five planes. Aim through the hoops!";try{P=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function D(){_t(u,1024,640),j(u,"PAPER-PLANE CHALLENGE",35,68,44,X.gold),j(u,`${w} points`,35,190,72),j(u,`BEST ${P}`,660,180,35,X.mint),j(u,`${A} / 5 planes`,35,280,44),j(u,`Longest glide: ${E.toFixed(1)} m`,35,349,32,X.mint),j(u,z,35,428,29,X.ink,"600",950),j(u,A===5&&!_?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),j(u,"10 points per hoop \xB7 Y: pause/menu",35,590,27,X.muted),d.needsUpdate=!0}function L(){for(let k of[3,2,1.5,4,5])for(let V of[-30,-29,-28]){let H=!0;for(let q=-1;q<=1;q+=.5)for(let ie=0;ie<=7.8;ie+=.4)(s.blocked(k+q,V+ie,0)||Math.abs(s.groundAt(k+q,V+ie,.1))>.1)&&(H=!1);if(H)return new y(k,0,V)}return null}function B(){for(let H of[...r.children])H.traverse(q=>{q.geometry?.dispose(),q.material?.dispose()}),r.remove(H);x=[];for(let H=0;H<3;H++){let q=M.clone().add(new y(0,1.5-H*.22,5-H*1.8)),ie=new ge(new Nt(.6,.035,12,48),o(H===0?"#f6d484":H===1?"#8fe1c3":"#8bc8f3"));ie.position.copy(q),r.add(ie),x.push({center:q,mesh:ie});let Q=new ge(new ke(.018,.018,q.y,8),o("#36576a"));Q.position.set(q.x-.64,q.y/2,q.z),r.add(Q)}p.position.copy(M).add(new y(0,2.3,-.5));let k=Et("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);k.position.copy(M).add(new y(0,3.18,-.5)),r.add(k);for(let H of[2,5]){let q=Ln(1.3);q.position.copy(M).add(new y(0,4.2,H)),r.add(q)}let V=new ge(new ve(2,.02,.045),o("#f6d484"));V.position.copy(M).add(new y(0,.02,6.7)),r.add(V)}function $(){A=w=E=0,_=null,v=!1,g=[],l.visible=!1,z="Five planes. Aim through the hoops!",x.forEach(k=>k.mesh.material.emissive?.set(0)),D()}function N(){let k=L();return!k||!s.xrTeleport(k.x,0,k.z+7.4)?!1:(M=k,B(),m=i.visible=!0,s.xrFace?.(0),R=!1,S=!0,$(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function W(){m=i.visible=v=l.visible=!1,_=null,g=[],R=!1}function I(){v=!1,g=[],R=!1,S=!0,_||(l.visible=!1)}function C(k){if(_){if(E=Math.max(E,_.distance),z=`${k} \xB7 ${_.hits.size} hoops \xB7 ${_.distance.toFixed(1)} m`,_=null,A===5){P=Math.max(P,w);try{localStorage.setItem("tfj-planes-best-v1",String(P))}catch{}t(`Paper planes complete! ${w} points. A to replay.`)}D()}}function O(k,V){if(!m)return;let{dt:H,right:q,controller:ie}=k;b+=H;let Q=!!q?.gamepad?.buttons[0]?.pressed,J=!!q?.gamepad?.buttons[4]?.pressed;if(V){I();return}Q||(R=!0),J&&!T&&A===5&&!_&&$(),T=J;let fe=ie&&ie.visible!==!1?ie.getWorldPosition(new y):null;if(fe&&Q&&!S&&R&&!_&&A<5){let de=s.stats();Math.abs(de.x-M.x)>1.2||de.z<M.z+6.7||de.z>M.z+8.2||de.y>.15?t("Return behind the paper-plane launch line."):(v=!0,g=[],l.visible=!0)}if(v){if(!fe)I();else if(l.position.copy(fe),l.quaternion.copy(ie.getWorldQuaternion(new Pe)),g.push({time:b,p:fe.clone()}),g=g.filter(de=>b-de.time<.14),!Q&&S){let de=g.find(ce=>b-ce.time>=.04),ee=de?fe.clone().sub(de.p).divideScalar(b-de.time).clampLength(0,10):new y;v=!1,ee.length()<.8||ee.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(A++,_={p:fe.clone(),v:ee,start:fe.clone(),distance:0,age:0,hits:new Set},x.forEach(ce=>ce.mesh.material.emissive?.set(0)),z="In flight\u2026",D())}}if(_){let de=Math.max(1,Math.ceil(H/.012)),ee=H/de;for(let ce=0;ce<de&&_;ce++){let F=_,K=Ld(F.p,F.v,ee),te=K.p.clone().sub(F.p),oe=te.length(),se=new tt(F.p,te.normalize()),ye=new y,ue=!1;for(let Te of h)if(Te.containsPoint(F.p)||se.intersectBox(Te,ye)&&ye.distanceTo(F.p)<=oe){ue=!0;break}if(ue){C("Hit scenery");break}for(let Te=0;Te<x.length;Te++)!F.hits.has(Te)&&Id(F.p,K.p,x[Te].center)&&(F.hits.add(Te),w+=10,x[Te].mesh.material.emissive.set("#3ca58b"),n(.45),D());F.p.copy(K.p),F.v.copy(K.v),F.age+=ee,F.distance=Math.max(F.distance,Math.hypot(F.p.x-F.start.x,F.p.z-F.start.z)),l.position.copy(F.p),l.quaternion.setFromUnitVectors(new y(0,0,-1),F.v.clone().normalize()),l.rotateZ(Math.sin(F.age*3)*.04),F.p.y<.07?(l.position.y=.07,l.rotation.x=0,C("Landed")):(F.age>10||F.distance>20)&&C("Glide complete")}}S=Q}return{root:i,get best(){return P},start:N,stop:W,cancel:I,tick:O,get held(){return v},get flight(){return _},get origin(){return M},get rings(){return x},get throws(){return A},get score(){return w},get longest(){return E}}}function Hl(s,e){let t=new _e;t.name="Bowling supporters",e.add(t);let n=[],i=0,r=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(m){t.visible=!0,i=0,r=0;for(let _ of n)_.group.visible=!1,_.shadow&&(_.shadow.visible=!1);let v=[];for(let _ of[5.2,3.8,6])for(let M of[-1.9,1.9,-2.4,2.4]){if(v.length===4)break;let x=m.clone().add(new y(M,0,_));s.blocked(x.x,x.z,0)||Math.abs(s.groundAt(x.x,x.z,.1))>.1||v.some(g=>g.distanceTo(x)<1)||v.push(x)}for(let _=0;_<v.length;_++){if(!n[_]){let g=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][_]});g.group.name=`Bowling supporter ${_+1}`,g.group.scale.setScalar(.91+_*.025),g.bones=Object.fromEntries(l.map(b=>[b,g.model.getObjectByName(b)])),g.rest=Object.fromEntries(l.map(b=>[b,g.bones[b]?.quaternion.clone()])),g.shadow=In(.9,.6),t.add(g.shadow,g.group),n.push(g)}let M=n[_];M.group.visible=!0,M.group.position.copy(v[_]),M.base=v[_].clone(),M.shadow.visible=!0,M.shadow.position.copy(v[_]).add(new y(0,.012,0));let x=s.stats();M.group.rotation.y=Math.atan2(x.x-v[_].x,x.z-v[_].z),M.gesture="idle",M.target=new y(x.x,x.y+1.6,x.z),M.mixer.setTime(_*.73)}}function h(m=!1){i=m?3.6:2.2,o=m,a=!1}function f(){i=1.8,o=!1,a=!0}function u(m,v,_){let M=m.bones[v];if(!M)return;let x=M.parent.getWorldQuaternion(new Pe),g=M.getWorldQuaternion(new Pe),b=new y(0,1,0).applyQuaternion(g),R=new y(..._).normalize().applyQuaternion(m.group.getWorldQuaternion(new Pe));M.quaternion.copy(x.invert().multiply(new Pe().setFromUnitVectors(b,R).multiply(g))),m.model.updateMatrixWorld(!0)}function d(m,v,_={}){if(v||!t.visible)return;r+=m,i=Math.max(0,i-m);let M=s.stats();n.forEach((x,g)=>{if(!x.group.visible)return;let b=r+g*1.4,R=(o?3.6:a?1.8:2.2)-i,S=i>0&&R>=g*.11,T=!_.ball&&!_.held&&!i&&Math.sin(b*.43)>.85,A=n[(g+1)%n.length],w=_.ball||_.eye||new y(M.x,M.y+1.6,M.z);T&&A?.group.visible&&(w=A.base.clone().add(new y(0,1.5,0))),S&&(w=_.eye||new y(M.x,M.y+1.6,M.z)),x.target.copy(w);let P=Math.atan2(w.x-x.base.x,w.z-x.base.z);x.group.rotation.y+=Math.atan2(Math.sin(P-x.group.rotation.y),Math.cos(P-x.group.rotation.y))*Math.min(1,m*2.8);let E=S?a?"wave":["clap","arms-up","fist-pump","wave"][g%4]:_.held?"anticipate":T?"chat":"idle";x.gesture=E;for(let D of l)x.bones[D]&&x.bones[D].quaternion.copy(x.rest[D]);if(x.animate(m,E==="wave"?"wave":"idle"),x.group.position.set(x.base.x,x.base.y+(S?Math.max(0,Math.sin(b*7))*(o?.11:.055):0),x.base.z),x.group.rotation.z=Math.sin(b*1.2)*.012,x.shadow.material.opacity=1-(x.group.position.y-x.base.y)*3,x.model.updateMatrixWorld(!0),E==="clap"){let D=Math.sin(b*13)*.25;u(x,"UpperArmL",[-.25,-.3,.65]),u(x,"UpperArmR",[.25,-.3,.65]),u(x,"LowerArmL",[.4+D,.35,.4]),u(x,"LowerArmR",[-.4-D,.35,.4])}if(E==="arms-up"&&(u(x,"UpperArmL",[-.65,.9,0]),u(x,"UpperArmR",[.65,.9,0]),u(x,"LowerArmL",[.15,1,.12]),u(x,"LowerArmR",[-.15,1,.12])),E==="fist-pump"){let D=.65+Math.sin(b*9)*.3;u(x,"UpperArmR",[.5,D,.3]),u(x,"LowerArmR",[-.2,1,.2])}E==="anticipate"&&(u(x,"UpperArmL",[-.2,-.6,.35]),u(x,"UpperArmR",[.2,-.6,.35]),u(x,"LowerArmL",[.3,.1,.6]),u(x,"LowerArmR",[-.3,.1,.6]));let z=x.bones.Head;if(z){let D=w.x-x.base.x,L=w.z-x.base.z,B=Math.atan2(Math.sin(P-x.group.rotation.y),Math.cos(P-x.group.rotation.y)),$=Math.atan2(w.y-(x.base.y+1.6),Math.hypot(D,L));z.rotateY(Ke.clamp(B,-.65,.65)),z.rotateX(-Ke.clamp($,-.4,.3)+Math.sin(b*(T?3:1.1))*.035)}x.bones.Chest&&x.bones.Chest.rotateX(_.held?.065:Math.sin(b*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:h,encourage:f,tick:d,stop:p,get cheering(){return i>0},get people(){return n.filter(m=>m.group.visible)}}}function Wl(s,e,t,n,i=()=>{}){let r=new _e;r.name="Warehouse bowling",r.visible=!1,e.add(r);let o=Hl(s,r),a=G=>new Se({color:G,roughness:.55}),l=(G,U,Z,ae,Y,he=r)=>{let Ce=new ge(G,U);return Ce.position.set(Z,ae,Y),he.add(Ce),Ce},c=new _e;r.add(c);let h=null,f=[],u=!1,d=!1,p=null,m=[],v=0,_=!1,M=!1,x=!1,g=0,b=0,R=[],S=Array.from({length:10},()=>[]),T=0,A=0,w=0,P=!1;try{w=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let E=l(new nt(.14,24,20),a("#5147b5"),0,.17,0);for(let[G,U,Z]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new nt(.023,8,8),a("#12162d"),G,U,Z,E);E.visible=!1;let z=document.createElement("canvas");z.width=1536,z.height=1024;let D=z.getContext("2d"),L=new De(z);L.colorSpace=Ee;let B=l(new Ne(3.2,3.2*2/3),new Me({map:L}),0,2,0);B.name="Warehouse bowling scoreboard";let $=()=>R.reduce((G,U)=>G+U,0)+T,N=new _e;N.name="Bowling scoring computer",r.add(N);let W=l(new Ne(.96,.64),new Me({map:L}),0,0,.046,N);W.name="Bowling computer screen",l(new ve(1.02,.7,.08),a("#101a26"),0,0,0,N);let I=120,C=new Float32Array(I*3),O=new Float32Array(I*3),k=[],V=new Be;V.setAttribute("position",new Lt(C,3)),V.setAttribute("color",new Lt(O,3));let H=new di({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Ro}),q=new Vi(V,H);q.name="Strike fireworks",q.visible=!1,q.frustumCulled=!1,r.add(q);let ie=0,Q=0;function J(){i(!0),o.cheer(!0),Q++,ie=2.6,q.visible=!0,H.opacity=1;for(let G=0;G<I;G++){let U=G%3,Z=G*2.39996,ae=.65+G%11*.08,Y=Math.sqrt(1-(G%17/8-1)**2);C.set([h.x+(U-1)*.65,1.35+U*.22,h.z+1.2],G*3),k[G]=new y(Math.cos(Z)*Y*ae,.7+Math.abs(Math.sin(Z))*1.2,Math.sin(Z)*Y*ae);let he=new ze([16765286,7401417,16745144,9026559][G%4]);O.set([he.r,he.g,he.b],G*3)}V.attributes.position.needsUpdate=!0,V.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function fe(G){if(!(ie<=0)){ie=Math.max(0,ie-G),q.visible=ie>0,H.opacity=Math.min(1,ie/.9);for(let U=0;U<I;U++){let Z=k[U];Z.y-=1.5*G,C[U*3]+=Z.x*G,C[U*3+1]+=Z.y*G,C[U*3+2]+=Z.z*G}V.attributes.position.needsUpdate=!0}}function de(){_t(D,1536,1024),j(D,"TFJ BOWL  /  LANE 01",48,72,38,X.blue,"700"),j(D,"WAREHOUSE BOWLING",48,143,61,X.ink,"700"),Ye(D,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:X.mint,radius:22}),j(D,"TOTAL PINS",1120,86,34,X.mint),j(D,String($()),1120,237,125,X.ink,"700"),j(D,"/ 100",1320,233,42,X.muted),j(D,g===10?"ROUND COMPLETE":`FRAME ${g+1}  \u2022  BOWL ${b+1}`,48,230,51,X.gold,"700");let G=0;for(let U=0;U<10;U++){let Z=48+U%5*288,ae=290+Math.floor(U/5)*244,Y=U===g&&g<10,he=S[U],Ce=he.length>0;Ye(D,Z,ae,272,225,{top:Y?"#225568":"#142e43",bottom:"#0b2032",stroke:Y?X.gold:"#55758c",radius:14}),j(D,String(U+1),Z+18,ae+45,37,Y?X.gold:X.muted,"700");let pe=he[0]===10?"X":he[0]===0?"\u2013":he[0]??"",Ie=he.length>1?he[0]+he[1]===10?"/":he[1]===0?"\u2013":he[1]:"";D.strokeStyle="#5c7b90",D.lineWidth=2,D.strokeRect(Z+78,ae+8,89,77),D.strokeRect(Z+167,ae+8,97,77),j(D,String(pe),Z+96,ae+67,53,X.ink,"700"),j(D,String(Ie),Z+190,ae+67,53,X.ink,"700"),G+=U<R.length?R[U]:U===g?T:0,j(D,Ce?String(G):"\u2014",Z+30,ae+189,89,Y?X.gold:X.ink,"700")}j(D,`PERSONAL BEST  ${w} / 100`,48,837,38,X.mint,"700"),j(D,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,X.muted,"600"),j(D,g===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,X.gold,"700"),j(D,"Y  MENU",1270,957,34,X.ink,"700"),L.needsUpdate=!0}function ee(){for(let G of[3,2,1.5,4,5,6])for(let U of[-30,-29,-28,-27]){let Z=!0;for(let ae=-1.1;ae<=1.1;ae+=.55)for(let Y=0;Y<=7.8;Y+=.3)(s.blocked(G+ae,U+Y,0)||Math.abs(s.groundAt(G+ae,U+Y,.1))>.1)&&(Z=!1);if(Z)return new y(G,0,U)}return null}function ce(){for(let Y of[...c.children])Y.traverse(he=>{he.geometry?.dispose(),he.material&&he.material.dispose()}),c.remove(Y);c.position.copy(h),f=[],l(new ve(2.1,.025,7.3),xi(),0,.018,3.25,c);for(let Y=-4;Y<=4;Y++)l(new ve(.009,.003,7.3),a("#9c805f"),Y*.22,.032,3.25,c);for(let Y of[-1.15,1.15])l(new ve(.15,.05,7.3),a("#223747"),Y,.02,3.25,c);for(let Y of[-1.045,1.045]){let he=l(new ve(.028,.025,7.3),new Se({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),Y,.045,3.25,c);he.name="Illuminated bowling edge"}let G=Et("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",X.gold,2.8);G.position.set(0,4.38,2.5),c.add(G);for(let Y of[1,4.8]){let he=Ln(1.8);he.position.set(0,4.8,Y),c.add(he)}l(new ve(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new ve(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let Y of[-.5,0,.5]){let he=l(new cn(.065,.16,3),a("#30485a"),Y,.04,4.7,c);he.rotation.x=-Math.PI/2}let U=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([Y,he])=>new le(Y,he)),Z=0;for(let Y=0;Y<4;Y++)for(let he=0;he<=Y;he++){let Ce=In(.29,.27);Ce.position.set((he-Y/2)*.3,.034,1.1-Y*.29),c.add(Ce);let pe=new _e;pe.position.set((he-Y/2)*.3,.248,1.1-Y*.29),c.add(pe),l(new Jn(U,20),a("#f8f6ea"),0,-.215,0,pe),l(new ke(.035,.039,.045,16),a("#dc4459"),0,.07,0,pe),f.push({mesh:pe,start:pe.position.clone(),v:new y,spin:new y,shadow:Ce,down:!1,id:Z++})}B.position.copy(h).add(new y(0,2.95,2.5)),l(new ve(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let Y of[-1.62,1.62])l(new ve(.06,3.92,.06),a("#223747"),Y,1.96,2.42,c);let ae=[-1.4,1.4].find(Y=>!s.blocked(h.x+Y,h.z+7.1,0))??-1.2;N.position.copy(h).add(new y(ae,1.27,7.1)),N.lookAt(h.clone().add(new y(0,1.68,7.5))),l(new ve(.16,1.12,.16),a("#223747"),ae,.56,7.1,c),l(new ve(.65,.06,.48),a("#101a26"),ae,.03,7.1,c)}function F(){for(let G of f)G.mesh.position.copy(G.start),G.mesh.rotation.set(0,0,0),G.mesh.visible=!0,G.shadow.visible=!0,G.shadow.position.set(G.start.x,.034,G.start.z),G.shadow.material.opacity=1,G.down=!1,G.v.set(0,0,0),G.spin.set(0,0,0)}function K(){ie=0,q.visible=!1,g=b=T=0,R=[],S=Array.from({length:10},()=>[]),p=null,A=0,d=!1,E.visible=!1,F(),de()}function te(){let G=ee();return!G||!s.xrTeleport(G.x,0,G.z+7.4)?!1:(h=G,ce(),o.setup(h),u=r.visible=!0,s.xrFace?.(0),K(),M=!1,_=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function oe(){o.stop(),ie=0,q.visible=!1,u=r.visible=d=E.visible=!1,p=null,A=0,m=[],M=!1}function se(){d=!1,m=[],M=!1,_=!0,p||(E.visible=!1)}function ye(G,U){P||(P=!0,o.cheer(!1));let Z=U.length();G.down=!0,G.v.add(U).clampLength(0,7),G.v.y=Math.max(G.v.y,Math.min(3.4,.7+Z*.42)),G.spin.add(new y(U.z*2.8,(G.id%2?1:-1)*Z*.8,-U.x*2.8)).clampLength(0,18)}function ue(G){let U=new y,Z=new y,ae=new Pe;for(let Y of f)if(Y.down&&Y.mesh.visible){Y.v.y-=9.81*G,Y.mesh.position.addScaledVector(Y.v,G);let he=Y.spin.length();he>.001&&(Z.copy(Y.spin).divideScalar(he),ae.setFromAxisAngle(Z,he*G),Y.mesh.quaternion.premultiply(ae).normalize()),U.set(0,1,0).applyQuaternion(Y.mesh.quaternion);let Ce=.033+.08+.135*Math.abs(U.y);Y.mesh.position.y<Ce?(Y.mesh.position.y=Ce,Y.v.y=Y.v.y<-.65?-Y.v.y*.32:0,Y.v.x*=Math.exp(-4*G),Y.v.z*=Math.exp(-4*G),Y.spin.multiplyScalar(Math.exp(-5*G))):Y.spin.multiplyScalar(Math.exp(-.3*G));for(let[pe,Ie,Ue]of[["x",-1.02,1.02],["z",-.35,2.2]])(Y.mesh.position[pe]<Ie||Y.mesh.position[pe]>Ue)&&(Y.mesh.position[pe]=Ke.clamp(Y.mesh.position[pe],Ie,Ue),Y.v[pe]*=-.38)}for(let Y=0;Y<f.length;Y++)for(let he=Y+1;he<f.length;he++){let Ce=f[Y],pe=f[he];if(!Ce.mesh.visible||!pe.mesh.visible||!Ce.down&&!pe.down)continue;let Ie=pe.mesh.position.clone().sub(Ce.mesh.position),Ue=Ie.length();if(Ue>=.29||Ue<.001)continue;let we=Ie.divideScalar(Ue),re=Ce.v.clone().sub(pe.v).dot(we);if(re>.18){let He=we.clone().multiplyScalar(re*.7);pe.down?pe.v.add(He):ye(pe,He),Ce.down?Ce.v.sub(He):ye(Ce,He.clone().negate()),Ce.spin.x+=we.z*re,pe.spin.z-=we.x*re}let Ge=.29-Ue;Ce.down&&Ce.mesh.position.addScaledVector(we,-Ge*.5),pe.down&&pe.mesh.position.addScaledVector(we,Ge*.5)}}function Te(){p=null,E.visible=!1;let G=f.filter(Z=>Z.down).length,U=G-T;if(G===10&&b===0&&J(),S[g].push(U),T=G,b++,U===0&&o.encourage(),U>0&&!(G===10&&b===1)&&(o.cheer(G===10),i(G===10)),n(G===10?.8:.25),G===10||b===2){let Z=G===10?b===1?"Strike!":"Spare!":`${G} pins.`;if(R.push(G),g++,b=T=0,t(g===10?`Bowling complete! ${$()} / 100 pins.`:`${Z} Next frame.`),g===10){w=Math.max(w,$());try{localStorage.setItem("tfj-bowling-best-10-v1",String(w))}catch{}}else F()}else{for(let Z of f)Z.down&&(Z.mesh.visible=!1,Z.shadow.visible=!1);t(`${U} pins! One more bowl this frame.`)}de()}function xe(G,U){if(!u)return;let{dt:Z,right:ae,controller:Y}=G;v+=Z,o.tick(Z,U,{eye:G.eye,held:d,ball:p?E.position:null});let he=!!ae?.gamepad?.buttons[0]?.pressed,Ce=!!ae?.gamepad?.buttons[4]?.pressed;if(U){se();return}fe(Z),he||(M=!0),Ce&&!x&&g===10&&K(),x=Ce;let pe=Y&&Y.visible!==!1?Y.getWorldPosition(new y):null;if(he&&!_&&M&&!p&&!A&&g<10&&pe){let Ie=s.stats();Math.abs(Ie.x-h.x)>1.1||Ie.z<h.z+6.7||Ie.z>h.z+8.2||Ie.y>.15?t("Return behind the yellow bowling line."):(d=!0,m=[],E.visible=!0)}if(d){if(!pe)se();else if(E.position.copy(pe),m.push({time:v,p:pe.clone()}),m=m.filter(Ie=>v-Ie.time<.14),!he&&_){let Ie=m.find(we=>v-we.time>=.04),Ue=Ie?pe.clone().sub(Ie.p).divideScalar(v-Ie.time).clampLength(0,10):new y;d=!1,Ue.length()<.6||Ue.z>-.25?(E.visible=!1,t("Swing towards the pins before releasing.")):(P=!1,p={p:pe.clone().sub(h),v:Ue,age:0,gutter:!1})}}if(p||A){let Ie=Math.max(1,Math.ceil(Z/.008)),Ue=Z/Ie;for(let we=0;we<Ie;we++){if(p){let re=p;re.age+=Ue,re.v.y-=9.81*Ue,re.p.addScaledVector(re.v,Ue),re.p.y<.174&&(re.p.y=.174,re.v.y=Math.abs(re.v.y)>.8?Math.abs(re.v.y)*.18:0,re.v.x*=Math.exp(-.25*Ue),re.v.z*=Math.exp(-.25*Ue)),Math.abs(re.p.x)>1&&(re.gutter=!0,re.p.x=Math.sign(re.p.x)*1.15,re.v.x=0),E.position.copy(re.p).add(h),E.rotation.x+=re.v.z*Ue/.14;for(let Ge of f)if(!Ge.down&&!re.gutter&&re.p.y<.6){let He=Ge.mesh.position.x-re.p.x,ft=Ge.mesh.position.z-re.p.z;Math.hypot(He,ft)<.23&&(ye(Ge,new y(re.v.x,0,re.v.z).multiplyScalar(.65)),re.v.x*=.8,re.v.z*=.84)}(re.p.z<-.6||re.age>7||Math.hypot(re.v.x,re.v.z)<.15)&&(p=null,A=2.6)}ue(Ue);for(let re of f)re.shadow.position.x=re.mesh.position.x,re.shadow.position.z=re.mesh.position.z,re.shadow.material.opacity=Ke.clamp(1-(re.mesh.position.y-.25),.15,1);if(A&&(A=Math.max(0,A-Ue),!A)){Te();break}}}_=he}return{root:r,get best(){return w},crowd:o,fireworks:q,get celebrations(){return Q},start:te,stop:oe,cancel:se,tick:xe,get held(){return d},get flight(){return p},get pins(){return f},get origin(){return h},get frame(){return g},get roll(){return b},get total(){return $()},get totals(){return R},get frameRolls(){return S}}}function Dd(s,e,t,n=.34){if(s.y<=t.y||e.y>t.y)return!1;let i=(s.y-t.y)/(s.y-e.y);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.z+(e.z-s.z)*i-t.z)<n}function Xl(s,e,t,n,i){let r=s.colliders.map(J=>new qe(new y(J.min.x,J.min.y,J.min.z),new y(J.max.x,J.max.y,J.max.z))),o=new _e;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=J=>new Se({color:J,roughness:.6}),l=(J,fe,de,ee=o)=>{let ce=new ge(J,fe);return ce.position.copy(de),ee.add(ce),ce},c=new y,h=null,f=!1,u=!1,d=!1,p=null,m=[],v=0,_=!1,M=!1,x=0,g=0,b=0,R=0,S=!1;try{b=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let T=s.mollie.balls[0].ball.clone();T.scale.setScalar(.48),T.visible=!1,e.add(T);let A=l(new nt(.065,16,12),a("#ee528c"),new y,e);A.visible=!1,l(new nt(.03,8,6),a("#6ac68d"),new y(0,.06,0),A).scale.set(1,.4,1.7);let P=new ut;P.moveTo(0,.02),P.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),P.bezierCurveTo(.23,-.03,.16,.18,0,.02);let E=new ge(new $t(P),new Me({color:16742315,side:lt,transparent:!0}));E.visible=!1,e.add(E);let z=0,D=0,L=0,B=document.createElement("canvas");B.width=768,B.height=384;let $=B.getContext("2d"),N=new De(B);N.colorSpace=Ee;let W=l(new Ne(1.5,.75),new Me({map:N}),new y);function I(){_t($,768,384),j($,"POK\xC9 BALL BASKETBALL",30,62,38,X.gold),j($,`${g} baskets \xB7 ${x}/10 throws`,30,139,46),j($,`Best: ${b} baskets`,30,204,32,X.mint),j($,x>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),j($,"Y: games menu \xB7 B: leave",30,337,25,X.muted),N.needsUpdate=!0}function C(){for(let[J,fe]of[[-4,8],[5,9],[-8,8],[12,8]]){let de=!0;for(let ee=-1.5;ee<=1.5;ee+=.5)for(let ce=-2;ce<=2;ce+=.5)(s.blocked(J+ee,fe+ce,0)||Math.abs(s.groundAt(J+ee,fe+ce,.1))>.1)&&(de=!1);if(de)return new y(J,0,fe)}return null}function O(J){if(c.set(J.x,2.35,J.z-1.5),W.position.set(J.x+1.35,2,J.z-1.75),o.children.length>1)for(let F of[...o.children])F!==W&&(o.remove(F),F.traverse(K=>{K.geometry?.dispose(),K.material?.dispose()}));let fe=Et("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);fe.position.set(J.x,3.7,J.z-1.93),o.add(fe);let de=Ln(1.1);de.position.set(J.x,4.1,J.z-1.5),o.add(de),l(new ve(.12,4.15,.12),a("#173d56"),new y(J.x,2.075,J.z-2)),l(new ve(.08,.08,.55),a("#173d56"),new y(J.x,4.1,J.z-1.75)),l(new ve(1.5,.95,.07),a("#e4f1f2"),new y(J.x,2.65,J.z-1.93));let ee=l(new Nt(.42,.025,10,48),a("#f5ab44"),c);ee.rotation.x=Math.PI/2;for(let F=0;F<12;F++){let K=F/12*Math.PI*2,te=new y(c.x+Math.cos(K)*.41,c.y,c.z+Math.sin(K)*.41),oe=new y(c.x+Math.cos(K+.2)*.23,c.y-.48,c.z+Math.sin(K+.2)*.23),se=new St(new Be().setFromPoints([te,oe]),new bt({color:16777215}));o.add(se)}l(new ve(.06,2.4,.06),a("#173d56"),new y(J.x+1.35,1.2,J.z-1.78)),l(new ve(1.56,.81,.045),a("#122538"),new y(J.x+1.35,2,J.z-1.78));let ce=l(new ve(2,.015,.04),a("#f6d484"),new y(J.x,.012,J.z+1.45))}function k(J){if(V(),J==="friend")return u=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let fe=C();return!fe||!s.xrTeleport(fe.x,0,fe.z+1.9)?!1:(h=fe,O(fe),s.xrFace?.(0),f=o.visible=!0,x=g=0,I(),!0)}function V(){f=u=d=!1,o.visible=T.visible=A.visible=E.visible=!1,p=null,m=[],M=!1,_=!1,z=0}function H(){d=!1,T.visible=A.visible=!1,m=[],M=!1,_=!0}function q(){if(p=null,T.visible=!1,x===10){b=Math.max(b,g);try{localStorage.setItem("tfj-basket-best",String(b))}catch{}n(`Basketball complete! ${g} baskets from 10 throws.`)}I()}function ie(J,fe){t.react(fe),z=1.5,E.visible=!0,R=2,i(.6),n(J)}function Q(J,fe){let{dt:de,eye:ee,controller:ce,right:F,leftController:K}=J;v+=de,R=Math.max(0,R-de);let te=!!F?.gamepad?.buttons[0]?.pressed,oe=!!F?.gamepad?.buttons[4]?.pressed;if(fe){H(),E.visible=!1;return}te||(M=!0);let se=ce?.visible!==!1&&ce?ce.getWorldPosition(new y):null;if(u){if(t.group.updateMatrixWorld(!0),A.visible=!!se&&te&&M,A.visible){A.position.copy(se);let ue=t.group.localToWorld(new y(0,.43,.4));!R&&A.position.distanceTo(ue)<.22&&(D++,ie(`Yum! Jigglypuff loved berry ${D}.`,"feed"),M=!1,A.visible=!1)}t.group.updateMatrixWorld(!0);let ye=t.group.localToWorld(new y(.46,.58,.03));for(let ue of[ce,K])if(ue&&ue.visible!==!1&&!te&&!R&&ue.getWorldPosition(new y).distanceTo(ye)<.24){L++,ie(`High-five! ${L} happy high-fives.`,"five");break}}else A.visible=!1;if(z>0?(z-=de,E.visible=!0,E.position.copy(t.group.position).add(new y(0,1.3+(1.5-z)*.22,0)),E.lookAt(ee),E.material.opacity=Math.min(1,z*2)):E.visible=!1,!f){_=te;return}if(oe&&!S&&x===10&&!p&&(x=g=0,I()),S=oe,se&&te&&!_&&M&&!p&&x<10&&(d=!0,m=[],T.visible=!0),d){if(!se)H();else if(T.position.copy(se),m.push({time:v,p:se.clone()}),m=m.filter(ye=>v-ye.time<.14),!te&&_){let ye=m.find(Te=>v-Te.time>=.04),ue=ye?se.clone().sub(ye.p).divideScalar(v-ye.time).clampLength(0,12):new y;d=!1,ue.length()<.6?(T.visible=!1,n("Swing your hand upwards, then release.")):(x++,p={p:se.clone(),v:ue,age:0,scored:!1},I())}}if(p){let ye=Math.max(1,Math.ceil(de/.008)),ue=de/ye;for(let Te=0;Te<ye&&p;Te++){let xe=p,G=xe.p.clone().addScaledVector(xe.v,ue);G.y-=4.9*ue*ue,xe.v.y-=9.8*ue;let U=G.clone().sub(xe.p),Z=U.length(),ae=new tt(xe.p,U.normalize()),Y=new y;if(r.some(pe=>!pe.containsPoint(xe.p)&&ae.intersectBox(pe,Y)&&Y.distanceTo(xe.p)<=Z)){q();break}!xe.scored&&Dd(xe.p,G,c)&&(xe.scored=!0,g++,i(.8),I());let he=c.z-.4;(xe.p.z-he)*(G.z-he)<0&&Math.abs(G.x-c.x)<.8&&G.y>2.17&&G.y<3.15&&(G.z=he+Math.sign(xe.p.z-he)*.1,xe.v.z*=-.65);let Ce=Math.hypot(G.x-c.x,G.z-c.z);Math.abs(G.y-c.y)<.1&&Ce>.33&&Ce<.53&&(xe.v.x+=(G.x-c.x)*3,xe.v.z+=(G.z-c.z)*3,xe.v.y=Math.abs(xe.v.y)*.45,G.y=c.y+.11),xe.p.copy(G),xe.age+=ue,T.position.copy(G),T.rotation.x+=ue*5,(G.y<.09||xe.age>5)&&q()}}_=te}return{root:o,get best(){return b},start:k,stop:V,cancel:H,tick:Q,get origin(){return h},get held(){return d},get shots(){return x},get score(){return g},get flight(){return p},get feeds(){return D},get fives(){return L},get berry(){return A},get hoop(){return c}}}function ql(s,e,t){let n=new _e;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new _e;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d"),a=new De(r);a.colorSpace=Ee;let l=new ge(new Ne(1.75,.4375),new Me({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=Et("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let h=s.colliders.map(B=>new qe(new y(B.min.x,B.min.y,B.min.z),new y(B.max.x,B.max.y,B.max.z))),f=[],u=[],d=[],p=[],m=new Set,v=0,_=0,M=!1,x=!1,g=[],b=null,R={};try{R=Mr(localStorage.getItem(br))}catch{}function S(){let B=u.length/2;if(!(x||v<B||v>=(R[B]??1/0))){R[B]=v;try{localStorage.setItem(br,JSON.stringify(R))}catch{}}}function T(){_t(o,1024,256),j(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,X.gold,"700"),j(o,`${m.size/2} / ${u.length/2} pairs  \xB7  ${v} turns`,28,101,38,X.ink,"700"),j(o,m.size===u.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,X.mint,"500"),j(o,x?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,X.muted,"400"),a.needsUpdate=!0}function A(){for(let B of f)B.geometry.dispose(),B.material.dispose();f=[];for(let B of d)for(let $ of B.material)$.userData.memoryOwned&&$.dispose();i.clear(),d=[],b=null}function w(){A();let B=[...s.mollie.found];x=B.length<2,x&&(B=[0,1,2,3]);for(let N=B.length-1;N>0;N--){let W=Math.floor(Math.random()*(N+1));[B[N],B[W]]=[B[W],B[N]]}B=B.slice(0,6),u=[...B,...B];for(let N=u.length-1;N>0;N--){let W=Math.floor(Math.random()*(N+1));[u[N],u[W]]=[u[W],u[N]]}p=[],m.clear(),v=_=0;let $=Math.ceil(u.length/4);d=u.map((N,W)=>{let I=s.mollie.cards[N].clone();I.userData={index:W},I.material=I.material.map(O=>{let k=new Me(O.map?{map:O.map}:{color:15258527});return k.userData.memoryOwned=!0,k}),I.position.set((W%4-1.5)*.43,(($-1)/2-Math.floor(W/4))*.39,.012),I.rotation.set(0,Math.PI,0),I.scale.setScalar(.34/.62),I.visible=!0;let C=new ge(new Ne(.268,.36),new Me({color:2508378}));return C.position.copy(I.position),C.position.z=.003,f.push(C),i.add(C,I),I}),g=d.map(()=>Math.PI),T()}function P(){return s.xrTeleport(-21.8,0,-10.78)?(s.xrFace?.(0),M=n.visible=!0,w(),!0):!1}function E(){M=n.visible=!1,p=[],_=0}function z(B){return!M||_||!Number.isInteger(B)||B<0||B>=u.length||m.has(B)||p.includes(B)||m.size===u.length?!1:(p.push(B),g[B]=0,t(.18),p.length===2&&(v++,_=.85),T(),!0)}function D(B,$=!1){if(M){for(let N=0;N<d.length;N++)d[N].rotation.y=Ke.damp(d[N].rotation.y,g[N],16,B);if(!$&&_&&(_=Math.max(0,_-B),!_)){let[N,W]=p;u[N]===u[W]?(m.add(N),m.add(W),f[N].material.color.set(9429443),f[W].material.color.set(9429443),t(.55),m.size===u.length&&S()):g[N]=g[W]=Math.PI,p=[],T()}}}function L(B){if(b!==null&&f[b]&&f[b].material.color.set(m.has(b)?9429443:2508378),b=null,!M||!B)return null;n.updateMatrixWorld(!0);let $=new un(B.position,B.direction,0,3.8).intersectObjects(d)[0];if(!$)return null;let N=new tt(B.position,B.direction),W=new y;for(let C of h)if(N.intersectBox(C,W)&&W.distanceTo(B.position)<$.distance-.025)return null;let I=$.object.userData.index;return b=I,m.has(I)||f[I].material.color.set(16176260),{point:$.point,action:()=>z(I)}}return{root:n,start:P,stop:E,reset:w,tick:D,point:L,select:z,get records(){return{...R}},get deck(){return u},get cards(){return d},get moves(){return v},get matched(){return m},get waiting(){return _},get active(){return M},get complete(){return M&&m.size===u.length},get practice(){return x}}}function Sr(){let s=new _e;s.name="Jigglypuff \xB7 3D";let e=x=>new Se({color:x,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),r=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(x,g,b,R=s)=>{let S=new ge(x,g);return S.name=b,S.castShadow=S.receiveShadow=!0,R.add(S),S},c=(x,g,b,R,S,T,A,w,P=s)=>{let E=l(new nt(1,32,24),A,w,P);return E.position.set(x,g,b),E.scale.set(R,S,T),E};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let x of[-1,1]){let g=new _e;g.position.set(x*.27,.86,-.005),g.rotation.z=-x*.21,s.add(g);let b=new ut;b.moveTo(-.135,0),b.quadraticCurveTo(-.115,.16,-.025,.34),b.quadraticCurveTo(0,.39,.025,.34),b.quadraticCurveTo(.12,.13,.135,0),b.quadraticCurveTo(0,-.07,-.135,0);let R=l(new Yt(b,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",g);R.position.z=-.04;let S=new ut;S.moveTo(-.085,.025),S.quadraticCurveTo(-.06,.16,0,.29),S.quadraticCurveTo(.06,.16,.085,.025),S.quadraticCurveTo(0,-.005,-.085,.025);let T=l(new $t(S,16),i,"Dark inner ear",g);T.position.z=.047,c(x*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let h=[];for(let x of[-1,1]){let g=new _e;g.position.set(x*.172,.625,.347),g.rotation.y=x*.24,s.add(g),h.push(g),c(0,0,0,.123,.153,.053,r,"Eye white",g),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",g),c(0,-.003,.063,.042,.079,.01,a,"Pupil",g),c(-.025,.045,.077,.024,.033,.007,r,"Eye sparkle",g),c(.022,-.045,.075,.011,.015,.005,r,"Small sparkle",g)}((x,g,b,R)=>l(new gi(new En(x.map(S=>new y(...S))),40,g,8,!1),b,R))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let u=[];for(let x=0;x<=36;x++){let g=x/36,b=Math.PI-g*Math.PI*2,R=.126*(1-.88*g);u.push(new y(.018+Math.cos(b)*R,.961+Math.sin(b)*R,.295+.035*g))}let d=new gi(new En(u),72,.042,12,!1),p=d.attributes.position,m=new En(u);for(let x=0;x<=72;x++){let g=m.getPointAt(x/72),b=1-.66*(x/72)**2;for(let R=0;R<=12;R++){let S=x*13+R,T=new y().fromBufferAttribute(p,S).sub(g).multiplyScalar(b).add(g);p.setXYZ(S,T.x,T.y,T.z)}}d.computeVertexNormals(),l(d,n,"Curled fringe");let v=[];for(let x of[-1,1]){let g=new _e;g.position.set(x*.37,.48,.015),g.rotation.z=x*.6,s.add(g),c(x*.075,0,0,.14,.075,.075,t,"Little arm",g),v.push(g)}let _=0;function M(x,g=!1){_+=x,s.position.y=Math.max(0,Math.sin(_*2.5))*.028;let b=_%4.4>4.2?.09:1;h.forEach(R=>R.scale.y=b),v[1].rotation.z=.6+(g?Math.sin(_*4)*.25:Math.sin(_*2)*.04)}return{group:s,animate:M}}function Yl(s,e){let t=Sr(),n=new _e;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,r=.52,o=[],a=null,l=!0,c=0,h=null,f=0,u=0,d="",p=(M,x)=>Math.hypot(M.x-x.x,M.z-x.z);function m(M,x){let g=new y(-x.z,0,x.x);for(let[b,R]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let S=M.x+x.x*b+g.x*R,T=M.z+x.z*b+g.z*R,A=s.groundAt(S,T,M.y+.2);if(Math.abs(A-M.y)<.35&&!s.blocked(S,T,A))return n.position.set(S,A,T),o=[],a=new y(M.x,M.y,M.z),c=0,h=null,f=.15,!0}return!1}function v(M,x,g,b=!1){M=Math.min(M,.05);let R=s.stats(),S=new y(R.x,R.y,R.z);if(g){n.visible=!1,l=!0,h=null;return}let T=new y(x.x,0,x.z).normalize();if(T.lengthSq()<.01&&T.set(0,0,-1),l||n.position.distanceTo(S)>8||a&&a.distanceTo(S)>3||p(n.position,S)<.9){if(!m(R,T)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(S)>.18)&&(o.push(S.clone()),a=S.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let A=b?1.05:i;f=Math.max(0,f-M);let w=p(n.position,S);if(!h&&f===0){let D=null,L=0;if(w<A?(D=n.position.clone().sub(S),D.y=0,D.normalize(),L=Math.min(.8,A+.2-w)):w>A+.35&&(o.length||b)&&(D=(b?S:o[0]).clone().sub(n.position),D.y=0,L=Math.min(.8,D.length(),w-A),D.normalize()),D&&L>.04){let B=n.position.clone(),$=B.clone().addScaledVector(D,L),N=!0,W=B.y;for(let I=1;I<=8;I++){let C=B.clone().lerp($,I/8),O=s.groundAt(C.x,C.z,W+.22);if(Math.abs(O-W)>.35||s.blocked(C.x,C.z,O)||p(C,S)<Math.min(A,w)-.01){N=!1;break}W=O}$.y=W,N?(h={from:B,to:$,time:0},c=0):(c+=M,c>2.5&&m(R,T))}else c=0}let P=0,E=0;if(h){h.time+=M;let D=Math.min(1,h.time/r),L=h.from.clone().lerp(h.to,D),B=p(n.position,S);p(L,S)>=Math.min(A,B)-.001&&!s.blocked(L.x,L.z,L.y)&&n.position.copy(L),P=Math.sin(Math.PI*D)*.3,E=Math.sin(Math.PI*D)*.08,D===1&&(h=null,f=.14)}else f>0&&(E=-Math.sin(Math.PI*Math.min(1,f/.14))*.1);let z=Math.atan2(R.x-n.position.x,R.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(z-n.rotation.y),Math.cos(z-n.rotation.y))*Math.min(1,M*5),t.animate(M,w<3),t.group.position.y=P,t.group.scale.set(1-E*.5,1+E,1-E*.5),u>0){u=Math.max(0,u-M);let D=Math.abs(Math.sin(u*9));t.group.position.y+=D*(d==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(u*20)*.06}}function _(){l=!0,n.visible=!1,o=[],a=null,h=null}return{group:n,tick:v,summon:_,radius:i,react(M){u=1.3,d=M},get hopping(){return!!h},get trail(){return o},get hidden(){return l}}}function $l(s,e,t){let n=new _e;n.name="Mollie\u2019s VR book",s.add(n),n.visible=!1;let i=new _e;n.add(i);let r=[],o=-1,a=null,l=!1,c=1,h=null,f=null,u=null,d=null,p=new Pe,m=new Me({color:16446169}),v=new Me({color:1455692}),_=new Me({color:13944999}),M=new Me({color:15386989});function x(N,W,I,C,O,k,V=0){let H=new ge(new ve(N,W,I),C);return H.position.set(O,k,V),i.add(H),H}function g(N,W,I,C,O,k=44,V=null,H="#17364b",q=null){let ie=document.createElement("canvas");ie.width=1024,ie.height=Math.round(1024*I/W);let Q=ie.getContext("2d"),J;function fe(ce=!1){if(Q.clearRect(0,0,ie.width,ie.height),V){let F=V==="#eac96d";Ye(Q,4,4,1016,ie.height-8,{top:F?"#ffe8ac":ce?"#365e76":"#24475f",bottom:F?"#d9b66c":"#142e43",stroke:ce?"#ffe09a":F?"#fff0c7":"#597b91",radius:Math.min(28,ie.height/5)})}Q.textAlign="center",Q.textBaseline="middle",Q.fillStyle=V==="#eac96d"?"#17364b":ce?X.gold:H,Q.font=`bold ${k}px Arial`,N.forEach((F,K)=>Q.fillText(F,512,ie.height*(K+1)/(N.length+1),944)),J&&(J.needsUpdate=!0)}fe(),J=new De(ie),J.colorSpace=Ee;let de=new Me({map:J,transparent:!0,side:lt}),ee=new ge(new Ne(W,I),de);return ee.position.set(C,O,.06),i.add(ee),q&&(ee.userData.action=q,ee.userData.paint=fe,r.push(ee)),ee}function b(){let N=document.createElement("canvas");N.width=N.height=256;let W=N.getContext("2d");W.fillStyle="#203f53",W.beginPath(),W.arc(128,128,112,0,Math.PI*2),W.fill(),W.strokeStyle="#b99b5c",W.lineWidth=3,W.stroke(),fn(W,"ball",128,128,185,X.gold);let I=new De(N);I.colorSpace=Ee;let C=new ge(new Ne(.2,.2),new Me({map:I,transparent:!0}));C.position.set(.02,.015,.061),i.add(C)}function R(){i.traverse(N=>{N.userData.borrowed||(N.geometry&&N.geometry.dispose(),N.material&&!Array.isArray(N.material)&&![m,v,_,M].includes(N.material)&&(N.material.map?.dispose(),N.material.dispose()))}),i.clear(),r.length=0,f=null}function S(N,W,I,C,O){let k=e.mollie.cards[N].clone();return k.userData={borrowed:!0},k.material=k.material.map(V=>{if(!V.map)return V;let H=new Me({map:V.map});return H.userData.albumOwned=!0,H}),k.position.set(W,I,.085),k.scale.setScalar(C/.62),k.rotation.set(0,0,0),k.visible=!0,O&&(k.userData.action=O,r.push(k)),i.add(k),k}function T(){i.traverse(N=>{if(N.userData.borrowed)for(let W of N.material)W.userData.albumOwned&&W.dispose()}),R()}function A(){if(T(),d=null,n.position.z=a!==null?.38:0,a!==null){g([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),f=S(a,-.28,0,1.05*c),f.rotation.y=l?Math.PI:0,p.copy(f.quaternion),g(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new y(0,1,0),l?Math.PI:0)}),g(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>w(.12)),g(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>w(-.12)),g(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",z),g(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){x(1.04,1.33,.06,v,0,0),x(.038,1.29,.07,M,-.47,0,.025),g(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),g([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),b(),g(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>P(0)),g(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}x(2.1,1.37,.055,v,0,0,-.02),x(2.02,1.3,.045,_,0,0,.005),x(.98,1.26,.018,m,-.502,0,.036),x(.98,1.26,.018,m,.502,0,.036),x(.025,1.29,.02,_,0,0,.055);for(let N of[-1,1]){let W=o*2+(N===1?1:0),I=N*.5;g([e.mollie.found.has(W)?e.xrGames.names[W]:`Mystery card ${W+1}`],.88,.12,I,.53,56),e.mollie.found.has(W)?S(W,I,-.005,.8,()=>E(W)):(x(.58,.8,.006,new Me({color:14476515}),I,-.005,.062),g(["?"],.5,.6,I,-.005,300,null,"#89a2ab")),g([`${W+1} / 18`],.7,.09,I,-.54,52)}g(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>P(o-1)),g([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),g(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>P(Math.min(8,o+1))),g(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),g(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function w(N){c=Ke.clamp(c+N,.72,1.12),f.scale.setScalar(1.05*c/.62)}function P(N){if(h||N===o)return;N=Ke.clamp(N,-1,8);let W=new _e;W.name="Turning album page",n.add(W);let I=new ge(new ve(.99,1.27,.012),m);if(I.position.x=N>o?.495:-.495,I.userData.pageTurnOwned=!0,W.add(I),o>=0){for(let C of i.children)if(C.position.z>.045&&Math.abs(C.position.y)<.64&&(N>o?C.position.x>.05:C.position.x<-.05)){let O=C.clone();O.userData={},W.add(O)}}W.position.z=.16,h={leaf:W,next:N,elapsed:0,direction:N>o?-1:1}}function E(N){return e.mollie.found.has(N)?(a=N,l=!1,c=1,u=null,A(),!0):!1}function z(){a!==null?(a=null,u=null,A()):t()}function D(){o=-1,a=null,n.visible=!0,A()}function L(){h&&(h.leaf.traverse(N=>{N.userData.pageTurnOwned&&N.geometry?.dispose()}),n.remove(h.leaf),h=null),u=null,n.visible=!1}function B(N){var C;if(!N||h)return null;n.updateMatrixWorld(!0);let W=new un(N.position,N.direction,0,5).intersectObjects(r)[0],I=W?.object||null;return I!==d&&(d&&(d.userData.paint?.(!1),d.userData.restScale&&d.scale.copy(d.userData.restScale)),d=I,d&&(d.userData.paint?.(!0),(C=d.userData).restScale??(C.restScale=d.scale.clone()),d.scale.copy(d.userData.restScale).multiplyScalar(1.025))),W?{point:W.point,action:W.object.userData.action}:null}function $(N,W,I){if(h){h.elapsed+=N;let C=Math.min(1,h.elapsed/.48);h.leaf.rotation.y=h.direction*Math.PI*(C*C*(3-2*C)),C>=1&&(n.remove(h.leaf),h.leaf.traverse(O=>{O.userData.pageTurnOwned&&O.geometry?.dispose()}),o=h.next,h=null,A())}if(f)if(W&&I){u||(u={hand:I.clone().invert(),start:f.quaternion.clone()});let C=I.clone().multiply(u.hand),O=i.getWorldQuaternion(new Pe);f.quaternion.copy(O.clone().invert().multiply(C).multiply(O).multiply(u.start))}else u?(u=null,p.copy(f.quaternion)):f.quaternion.slerp(p,1-Math.exp(-10*N))}return{root:n,open:D,close:L,point:B,tick:$,back:z,inspect:E,change:P,get page(){return o},get inspected(){return a},get card(){return f},get turning(){return!!h}}}var pt={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},Nd=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function Ud(s,e){let t=Math.hypot(s,e)*384/pt.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(s,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=Nd[Math.floor(n/(Math.PI/10))],r=t>=268?2:t>=163&&t<=184?3:1;return{score:i*r,label:`${r===3?"Triple ":r===2?"Double ":""}${i} \xB7 ${i*r}`}}function Fd(s){let e=s.at(-1);if(!e)return new y;let t=s.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new y}function Bd(s,e,t){let n=s.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function Od(s,e){if(s.x<=pt.x||e.x>pt.x)return null;let t=(pt.x-s.x)/(e.x-s.x),n=s.clone().lerp(e,t);return Math.hypot(n.y-pt.y,n.z-pt.z)<=.47?{point:n,...Ud(-(n.z-pt.z),n.y-pt.y)}:null}function Zl(s,e,t){let n=new _e;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new Se({color:12044498,metalness:.75,roughness:.28}),r=new Se({color:2112336,roughness:.45}),o=new Se({color:16764759,side:lt,roughness:.8}),a=[];function l(V,H){return a.push(V),new ge(V,H)}function c(){let V=new _e;V.name="3D dart";let H=l(new cn(.004,.035,8),i);H.rotation.x=-Math.PI/2,H.position.z=.0175,V.add(H);let q=l(new ke(.006,.007,.045,10),i);q.rotation.x=Math.PI/2,q.position.z=.0575,V.add(q);for(let Q=0;Q<5;Q++){let J=l(new Nt(.007,8e-4,4,10),r);J.position.z=.043+Q*.007,V.add(J)}let ie=l(new ke(.003,.003,.06,8),r);ie.rotation.x=Math.PI/2,ie.position.z=.11,V.add(ie);for(let Q=0;Q<2;Q++){let J=l(new ve(.044,.001,.05),o);J.rotation.z=Q*Math.PI/2,J.position.z=.15,V.add(J)}return V}let h=c();n.add(h),h.visible=!1;let f=document.createElement("canvas");f.width=1024,f.height=640;let u=f.getContext("2d"),d=new De(f);d.colorSpace=Ee;let p=new ge(new Ne(.95,.594),new Me({map:d}));p.name="Wall-mounted darts scoreboard",p.position.set(pt.x+.05,1.8,pt.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let m=new ge(new ve(1.01,.654,.035),new Se({color:1517105,roughness:.7}));m.name="Darts scoreboard frame",m.position.copy(p.position),m.position.x-=.022,m.rotation.copy(p.rotation),n.add(m);let v=Et("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);v.position.set(pt.x+.065,2.43,pt.z),v.rotation.y=Math.PI/2,n.add(v);let _=Ln(.9);_.position.set(pt.x+.55,2.75,pt.z),n.add(_);let M=s.colliders.map(V=>new qe(new y(V.min.x,V.min.y,V.min.z),new y(V.max.x,V.max.y,V.max.z))),x=!1,g=!1,b=null,R=[],S=0,T=!1,A=!1,w=!1,P=0,E=0,z="Hold trigger, throw, release.",D=0,L=[];try{D=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function B(){vl(u,{total:P,throws:E,best:D,last:z}),d.needsUpdate=!0}function $(V=!1){g=!1,R=[],h.visible=!1,b&&!V&&(n.remove(b.mesh),b=null),T=!0,A=!1}function N(){$();for(let V of L)n.remove(V);L=[],E=P=0,z="Nine darts. Make them count!",B()}function W(){let H=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([q,ie])=>!s.blocked(q,ie,0));return!H||!s.xrTeleport(H[0],0,H[1])?!1:(s.xrFace?.(Math.PI/2),n.visible=x=!0,N(),!0)}function I(){$(),x=!1,n.visible=!1}function C(V,H){let q=b;if(q){if(q.mesh.position.copy(H),L.push(q.mesh),b=null,E++,P+=V.score,z=V.label,t(V.score>0?.6:.12),E===9&&P>D){D=P;try{localStorage.setItem("tfj-vr-darts-best-v1",String(D))}catch{}}B()}}function O(V,H){let q=h.clone();q.visible=!0,q.position.copy(V),q.quaternion.setFromUnitVectors(new y(0,0,-1),H.clone().normalize()),n.add(q),b={mesh:q,position:V.clone(),velocity:H.clone(),age:0},h.visible=!1,g=!1,R=[]}function k(V,H,q,ie,Q=!1){if(S+=V,!!x){if(Q){g&&$();return}if(q||(A=!0),ie&&!w&&E===9&&N(),w=ie,H&&q&&!T&&A&&!b&&E<9){let J=s.stats();J.x<pt.ocheX-.04||J.x>pt.ocheX+1.6||Math.abs(J.z-pt.z)>1||J.y>.15?(z="Stand behind the yellow line.",B()):(g=!0,R=[],h.visible=!0,t(.12))}if(g&&H&&(h.position.copy(H.position).addScaledVector(H.direction,.07),h.quaternion.setFromUnitVectors(new y(0,0,-1),H.direction),R.push({time:S,position:H.position.clone()}),R=R.filter(J=>S-J.time<.15),!q&&T)){let J=Fd(R);J.length()<.6?(g=!1,h.visible=!1,z="Swing your hand before releasing.",B()):O(h.position,J)}if(g&&!H&&$(),T=q,b){let J=Math.max(1,Math.ceil(V/.004166666666666667)),fe=V/J;for(let de=0;de<J&&b;de++){let ee=b,ce=Bd(ee.position,ee.velocity,fe),F=Od(ee.position,ce.position),K=ce.position.clone().sub(ee.position),te=K.length(),oe=new tt(ee.position,K.clone().normalize()),se=new y,ye=null,ue=te+1e-8;for(let Te of M){if(Te.containsPoint(ee.position)){ye=ee.position.clone(),ue=0;break}if(oe.intersectBox(Te,se)){let xe=se.distanceTo(ee.position);xe<=ue&&(ue=xe,ye=se.clone())}}if(F&&(!ye||F.point.distanceTo(ee.position)<=ue)){C(F,F.point);break}if(ye){C({score:0,label:"Miss \xB7 hit scenery"},ye);break}if(ce.position.y<=.025){let Te=Ke.clamp((ee.position.y-.025)/(ee.position.y-ce.position.y),0,1),xe=ee.position.clone().lerp(ce.position,Te);ee.mesh.quaternion.setFromUnitVectors(new y(0,0,-1),new y(ee.velocity.x,0,ee.velocity.z).normalize()),C({score:0,label:"Miss \xB7 floor"},xe);break}if(ee.position.copy(ce.position),ee.velocity.copy(ce.velocity),ee.mesh.position.copy(ee.position),ee.mesh.quaternion.slerp(new Pe().setFromUnitVectors(new y(0,0,-1),ee.velocity.clone().normalize()),1-Math.exp(-18*fe)),ee.age+=fe,ee.age>4){C({score:0,label:"Miss"},ee.position);break}}}}}return{root:n,get best(){return D},start:W,stop:I,cancel:$,reset:N,update:k,launch:O,get active(){return x},get held(){return g},get flight(){return b},get total(){return P},get throws(){return E},get last(){return z},get resting(){return L}}}function Jl(s,e,t,n,i=.35){let r=e.clone().sub(s),o=r.length();if(o<1e-7)return null;let a=new tt(s,r.multiplyScalar(1/o)),l=new y,c=o+1e-6,h=null;for(let f of t){let u=f.clone().expandByScalar(.045);if(u.containsPoint(s))return{type:"wall",point:s.clone(),distance:0};if(a.intersectBox(u,l)){let d=l.distanceTo(s);d<=c&&(c=d,h={type:"wall",point:l.clone(),distance:d})}}for(let f of n)if(a.intersectSphere(new zt(f.position,i),l)){let u=l.distanceTo(s);u<c&&(c=u,h={type:"target",id:f.id,point:l.clone(),distance:u})}return h}function zd(s,e){let t=s.at(-1),n=s.find(r=>t.time-r.time<=.12&&t.time-r.time>=.045),i=new y;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new y(0,1.3,0)),i.clampLength(0,9)}function Kl(s){let e=s.worldScene,t=new _e;t.name="VR games",t.visible=!1,e.add(t);let n=bl(t),i=new _e;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let ne of[...s.mollie.balls.map(be=>be.ball),...s.mollie.cards,s.mollie.thrownBall])ne?.isObject3D&&i.attach(ne);let r=s.colliders.map(ne=>new qe(new y(ne.min.x,ne.min.y,ne.min.z),new y(ne.max.x,ne.max.y,ne.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new De(o);l.colorSpace=Ee;let c=new _e;t.add(c);let h=new ge(new Ne(1.6,1.2),new Me({map:l,side:lt}));c.add(h),c.visible=!1;let f=new ge(new ve(1.64,1.24,.035),new Me({color:3561833}));f.position.z=-.025,c.add(f);let u=new _e;c.add(u);let d=new St(new Be().setFromPoints([new y,new y(0,0,-1)]),new bt({color:16769946}));d.visible=!1,t.add(d);let p=new ge(new nt(.012,8,6),new Me({color:16769946}));p.visible=!1,t.add(p);let m=s.mollie.balls[0].ball.clone();m.scale.setScalar(.43),m.visible=!1,t.add(m);let v=Sr();v.group.visible=!1,t.add(v.group);let _=document.createElement("canvas");_.width=768,_.height=192;let M=_.getContext("2d"),x=new De(_);x.colorSpace=Ee;let g=new ge(new Ne(.95,.2375),new Me({map:x,transparent:!0,depthTest:!1,depthWrite:!1}));g.name="Adventure notification",g.renderOrder=1e3,t.add(g),g.visible=!1;let b="explore",R="menu",S=[],T=null,A=null,w=0,P=!1,E=null,z=!1,D=null,L=[],B=0,$=!1,N=!1,W=!1,I=!0,C=[],O=0,k=0,V="Welcome, Mollie!",H="",q=0,ie=!1,Q=null,J=0,fe=0;try{fe=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let de=(ne,be=.3)=>{try{ne?.gamepad?.hapticActuators?.[0]?.pulse(be,70)?.catch?.(()=>{})}catch{}},ee=$l(c,s,()=>{R="menu",ee.close(),h.visible=f.visible=!0,I=!0,re()}),ce=Zl(s,t,ne=>de(E?.right,ne)),F=ql(s,t,ne=>de(E?.right,ne)),K=Yl(s,t),te=Gl(s,t,Rt,ne=>de(E?.right,ne)),oe=Cl(s,t,Rt,ne=>de(E?.right,ne)),se=zl(s,t,Rt,ne=>de(E?.right,ne)),ye=0,ue=!0;try{ue=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function Te(ne){ue=!!ne;try{localStorage.setItem("tfj-companion-enabled",String(ue))}catch{}ue?K.summon():(b==="friend"&&On(),K.group.visible=!1),re()}let xe=Wl(s,t,Rt,ne=>de(E?.right,ne),pe),G=Xl(s,t,K,Rt,ne=>de(E?.right,ne)),U=Vl(s,e,()=>({bowling:xe.best||null,darts:ce.best||null,golf:oe.best,rc:se.bestLapMs,basketball:G.best||null,planes:te.best||null,memory:F.records,hide:fe}),Rt),Z=!1,ae=!1;function Y(){if(b==="jigglypuff"){V="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",ft();return}K.summon(),je()}function he(){Bn(),R="album",h.visible=f.visible=!1,u.clear(),ee.open(),I=!0}function Ce(){try{Q??(Q=new(window.AudioContext||window.webkitAudioContext)),Q.resume()?.catch(()=>{})}catch{}}function pe(ne){if(!(!Q||Q.state!=="running"))try{let be=Math.floor(Q.sampleRate*.07),Ve=Q.createBuffer(1,be,Q.sampleRate),rt=Ve.getChannelData(0);for(let Ae=0;Ae<be;Ae++)rt[Ae]=(Math.random()*2-1)*Math.exp(-Ae/be*5);for(let Ae=0;Ae<(ne?12:7);Ae++){let mt=Q.createBufferSource(),et=Q.createGain(),jt=Q.createBiquadFilter();mt.buffer=Ve,jt.type="highpass",jt.frequency.value=650,et.gain.value=.055+Ae%3*.012,mt.connect(jt),jt.connect(et),et.connect(Q.destination),mt.start(Q.currentTime+Ae*.095+Ae%2*.025),mt.onended=()=>{mt.disconnect(),jt.disconnect(),et.disconnect()}}}catch{}}function Ie(){if(!Q||Q.state!=="running")return;let ne=v.group.position;try{let be=Q.createPanner();be.panningModel="HRTF",be.distanceModel="inverse",be.refDistance=2,be.maxDistance=25,be.positionX.value=ne.x,be.positionY.value=ne.y+.6,be.positionZ.value=ne.z,be.connect(Q.destination),[523.25,659.25,587.33].forEach((Ve,rt)=>{let Ae=Q.createOscillator(),mt=Q.createGain(),et=Q.currentTime+rt*.18;Ae.type="sine",Ae.frequency.value=Ve,mt.gain.setValueAtTime(0,et),mt.gain.linearRampToValueAtTime(.09,et+.025),mt.gain.exponentialRampToValueAtTime(.001,et+.17),Ae.connect(mt),mt.connect(be),Ae.start(et),Ae.stop(et+.18),Ae.onended=()=>{Ae.disconnect(),mt.disconnect()}}),setTimeout(()=>be.disconnect(),1200)}catch{}}function Ue(ne,be,Ve,rt=32,Ae="#fff"){a.font=`${rt>=40?"bold ":""}${rt}px Arial`,a.fillStyle=Ae,a.fillText(ne,be,Ve)}function we(ne,be,Ve,rt,Ae){S.push({label:ne,x:be,y:Ve,w:rt,h:72,action:Ae}),gl(a,ne,be,Ve,rt,T===ne)}function re(){R!=="album"&&(S=[],xl(a,ha()),ye===0?(we("Pok\xE9mon throwing hunt",44,196,455,()=>Vt("hunt")),we("Jigglypuff hide-and-seek",519,196,461,()=>Vt("jigglypuff")),we("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>Vt("darts")),we("Memory match \xB7 staff-room table",519,280,461,()=>Vt("memory")),we(`Open the card album \xB7 ${s.mollie.found.size} / 18`,44,364,455,he),we("Play with Jigglypuff",519,364,461,()=>Vt("friend")),we("Pok\xE9 Ball basketball",44,448,455,()=>Vt("basketball")),we("Warehouse bowling",519,448,461,()=>Vt("bowling"))):(we("Paper-plane challenge",44,196,455,()=>Vt("planes")),we("RC car racing",519,196,461,()=>Vt("rc")),we("Warehouse mini-golf",44,280,936,()=>Vt("golf")),we("Arcade wall of fame",44,364,455,vi),we("Back to exploring",519,364,461,()=>{On(),je()}),we(ue?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>Te(!ue))),we("Resume",44,548,445,je),we(ye===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{ye=1-ye,re()}),_l(a,b==="rc"),l.needsUpdate=!0)}function Ge(){u.clear()}function He(){if(!E){ie=!0;return}ie=!1;let ne=E.forward.clone();ne.y=0,ne.normalize(),c.position.copy(E.eye).addScaledVector(ne,1.9),c.position.y=Math.max(E.eye.y-.1,s.stats().y+.85),c.rotation.set(0,Math.atan2(-ne.x,-ne.z),0)}function ft(){ye=0,q=0,g.visible=!1,Bn(),ee.close(),h.visible=f.visible=!0,R="menu",Ge(),c.visible=!0,I=!0,T=null,He(),re()}function je(){ee.close(),R="menu",h.visible=f.visible=!0,c.visible=!1,d.visible=p.visible=!1,I=!0,T=null}function vi(){On(),je();let ne=U.visit();return ne&&(b="fame",ae=!0),ne}function Bn(ne=!1){se.cancel(),oe.cancel(),te.cancel(),xe.cancel(),G.cancel(),ce.cancel(ne),z=!1,D=null,L=[],m.visible=!1}function On(){n.update("explore",null),i.visible=!0,se.stop(),oe.stop(),te.stop(),xe.stop(),G.stop(),q=0,g.visible=!1,F.stop(),ce.stop(),b="explore",v.group.visible=!1,k=0,Bn(),V="Choose an adventure whenever you like."}function la(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([be,Ve,rt])=>{for(let[Ae,mt]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let et=new y(be+Ae,0,Ve+mt);if(!s.blocked(et.x,et.z,0)&&s.groundAt(et.x,et.z,.1)===0&&s.mollie.balls.every(jt=>jt.ball.position.distanceTo(et)>1.3))return[{point:et,clue:rt}]}return[]})}function ca(){v.group.position.copy(C[O].point),v.group.visible=!0,J=B+1,V=`Try ${C[O].clue}.`,Rt(V)}function Vt(ne){if(On(),b=ne,b==="rc"){if(!se.start()){b="explore",V="No clear warehouse circuit available.",re();return}i.visible=!1,je();return}if(b==="golf"){if(!oe.start()){b="explore",V="No clear warehouse green available.",re();return}i.visible=!1,je();return}if(b==="friend"&&!ue&&Te(!0),b==="planes"){if(!te.start()){b="explore",V="The plane course is blocked. Try again.",re();return}je();return}if(b==="bowling"){if(!xe.start()){b="explore",V="The warehouse lane is blocked. Try again.",re();return}i.visible=!1,je();return}if(b==="friend"||b==="basketball"){if(!G.start(b)){b="explore",V="No clear basketball space available.",re();return}je();return}if(b==="memory"){if(!F.start()){b="explore",V="The table is not accessible. Try again.",re();return}je();return}if(b==="darts"){if(!ce.start()){b="explore",V="The throwing line is blocked. Try again.",re();return}V="Nine darts. Hold trigger, throw and release.",je();return}if(b==="hunt")s.xrGames.start(),V="Hold trigger, swing gently and release!";else{C=la();for(let be=C.length-1;be>0;be--){let Ve=Math.floor(Math.random()*(be+1));[C[be],C[Ve]]=[C[Ve],C[be]]}if(C=C.slice(0,3),O=0,C.length<3){b="explore",V="No clear hiding spots. Please try again.",re();return}ca()}je()}function ic(){if(b!=="jigglypuff"||k||!v.group.visible)return!1;if(O++,v.group.visible=!1,de(E?.right,.6),O===3){fe++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(fe))}catch{}b="explore",V="You found Jigglypuff 3 times! Champion!",Rt(V)}else k=1.5,V=`Found ${O} / 3! Finding a new hiding spot\u2026`,Rt(V);return!0}function ha(){return b==="rc"?se.state.finished?"RC race complete \xB7 A to race again":`RC racing: lap ${se.state.completedLaps+1}/3 \xB7 ${se.state.elapsed.toFixed(1)}s \xB7 A rescues car`:b==="fame"?`Wall of fame: ${U.records.filter(ne=>ne.medal).length} / ${U.records.length} medals earned`:b==="golf"?oe.complete?`Mini-golf complete: ${oe.total} strokes \xB7 Best ${oe.best}`:`Mini-golf: hole ${oe.hole+1}/6 \xB7 ${oe.strokes} strokes \xB7 Par ${oe.layout.par}`:b==="planes"?`Paper planes: ${te.score} points \xB7 ${te.throws}/5 throws \xB7 Longest ${te.longest.toFixed(1)} m`:b==="bowling"?`Bowling: ${xe.total} / 100 pins \xB7 ${xe.frame===10?"Complete":`Frame ${xe.frame+1} \xB7 Bowl ${xe.roll+1}`}`:b==="basketball"?`Basketball: ${G.score} baskets \xB7 ${G.shots}/10 throws`:b==="friend"?`Berries: ${G.feeds} \xB7 High-fives: ${G.fives} \xB7 Offer a berry or touch her raised hand`:b==="hunt"?`Pok\xE9mon: ${s.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:b==="jigglypuff"?k?V:`Found ${O}/3 \xB7 Try ${C[O].clue}`:b==="darts"?`Darts: ${ce.total} points \xB7 ${ce.throws}/9 darts \xB7 ${ce.last}`:b==="memory"?`Memory: ${F.matched.size/2}/${F.deck.length/2} pairs \xB7 ${F.moves} turns`:V}function Rt(ne){H=ne,yl(M,ne),x.needsUpdate=!0,q=3}function sc(ne){if(g.visible=!c.visible&&q>0,!g.visible)return;let be=ne.headOrientation||new Pe().setFromUnitVectors(new y(0,0,-1),ne.forward.clone().normalize());g.position.set(0,-.28,-2.1).applyQuaternion(be).add(ne.eye),g.quaternion.copy(be),g.material.opacity=Math.min(1,q/.5),q=Math.max(0,q-ne.dt)}function rc(ne){return!ne||ne.visible===!1?null:{position:ne.getWorldPosition(new y),direction:new y(0,0,-1).applyQuaternion(ne.getWorldQuaternion(new Pe))}}function oc(ne){if(!ne)return null;if(R==="album"){let Ae=ee.point(ne);return d.geometry.setFromPoints([ne.position,Ae?Ae.point:ne.position.clone().addScaledVector(ne.direction,2)]),d.visible=!0,p.visible=!!Ae,Ae&&p.position.copy(Ae.point),Ae?{...Ae,label:"album"}:null}c.updateMatrixWorld(!0);let be=new un(ne.position,ne.direction,0,4).intersectObject(h)[0];if(d.geometry.setFromPoints([ne.position,be?be.point:ne.position.clone().addScaledVector(ne.direction,2)]),d.visible=!0,p.visible=!!be,be&&p.position.copy(be.point),!be)return null;let Ve=be.uv.x*1024,rt=(1-be.uv.y)*768;return S.find(Ae=>Ve>=Ae.x&&Ve<=Ae.x+Ae.w&&rt>=Ae.y&&rt<=Ae.y+Ae.h)}function ac(ne){if(!ne||!v.group.visible)return!1;let be=v.group.position.clone().add(new y(0,.58,0)),Ve=ne.position.clone().addScaledVector(ne.direction,4);return Jl(ne.position,Ve,r,[{id:0,position:be}],.5)?.type==="target"&&ne.position.distanceTo(be)<3.3}function lc(ne){E=ne,ie&&He();let{dt:be,eye:Ve,forward:rt,right:Ae,left:mt,controller:et}=ne,jt=ce.throws,fc=F.complete;B+=be;let gn=!!Ae?.gamepad?.buttons[0]?.pressed,ua=!!mt?.gamepad?.buttons[5]?.pressed,fa=!!Ae?.gamepad?.buttons[5]?.pressed,Gt=rc(et);if(ua&&!N&&(c.visible?je():ft()),fa&&!W&&(c.visible&&R==="album"?(ee.back(),I=!0):c.visible?je():(On(),ft())),N=ua,W=fa,gn||(I=!1),c.visible){R==="album"&&ee.tick(be,!!Ae?.gamepad?.buttons[1]?.pressed,et?.getWorldQuaternion(new Pe));let vt=oc(Gt);T=vt?.label||null,T!==A&&(A=T,re()),gn&&!$&&!I&&vt&&(de(Ae),vt.action(),I=!0),g.visible=!1}else d.visible=p.visible=!1,b==="darts"&&ce.update(be,I?null:Gt,!I&&gn,!!Ae?.gamepad?.buttons[4]?.pressed),b==="hunt"&&Gt&&(gn&&!$&&!I&&!D&&(z=!0,L=[],m.visible=!0,de(Ae,.15)),z&&(m.position.copy(Gt.position).addScaledVector(Gt.direction,.09),L.push({time:B,position:Gt.position.clone()}),L=L.filter(vt=>B-vt.time<.16),!gn&&$&&(D={position:m.position.clone(),velocity:zd(L,Gt.direction),life:0},z=!1,L=[],de(Ae,.2)))),b==="jigglypuff"&&(v.animate(be,!1),k?(k-=be,k<=0&&(k=0,ca())):v.group.visible&&(v.group.rotation.y=Math.atan2(Ve.x-v.group.position.x,Ve.z-v.group.position.z),ac(Gt)&&(d.geometry.setFromPoints([Gt.position,v.group.position.clone().add(new y(0,.6,0))]),d.visible=!0,gn&&!$&&!I&&ic()),B>J&&(Ie(),J=B+6)));if(b==="memory"){F.tick(be,c.visible);let vt=!!Ae?.gamepad?.buttons[4]?.pressed;if(vt&&!Z&&F.complete&&!c.visible&&F.reset(),Z=vt,!c.visible){let At=F.point(Gt);At&&(d.geometry.setFromPoints([Gt.position,At.point]),d.visible=!0,p.position.copy(At.point),p.visible=!0,gn&&!$&&!I&&At.action())}}if(n.update(b,b==="rc"?se.origin:b==="golf"?oe.origin:b==="bowling"?xe.origin:b==="planes"?te.origin:b==="basketball"?G.origin:null),i.visible=!["bowling","golf","rc"].includes(b),b==="fame"&&!ae&&U.site&&Math.hypot(Ve.x-U.site.view.x,Ve.z-U.site.view.z)>7&&(b="explore"),ae=!1,K.tick(be,rt,!ue||["fame","jigglypuff","darts","basketball","bowling","planes","memory","golf","rc"].includes(b),b==="friend"),G.tick(ne,c.visible),xe.tick(ne,c.visible),te.tick(ne,c.visible),oe.tick(ne,c.visible),se.tick(ne,c.visible),U.tick(be),!et&&z&&Bn(),D&&!c.visible){let vt=Math.max(1,Math.ceil(be/.012)),At=be/vt;for(let os=0;os<vt&&D;os++){let zn=D,Mi=zn.position.clone().addScaledVector(zn.velocity,At);Mi.y-=4.9*At*At;let dc=s.mollie.balls.flatMap((pc,da)=>s.mollie.found.has(da)?[]:[{id:da,position:pc.ball.position}]),as=Jl(zn.position,Mi,r,dc);if(as){as.type==="target"&&s.xrGames.collect(as.id)&&(V=`${s.xrGames.names[as.id]} found! ${s.mollie.found.size}/18 cards.`,Rt(V),de(Ae,.8),s.mollie.found.size===18&&(V="All 18 cards found! Brilliant, Mollie!",Rt(V))),Bn();break}zn.position.copy(Mi),zn.velocity.y-=9.8*At,zn.life+=At,m.position.copy(Mi),m.rotation.x+=At*7,(Mi.y<0||zn.life>3)&&Bn()}}if(Q?.listener)try{let vt=Q.listener;for(let[At,os]of Object.entries({positionX:Ve.x,positionY:Ve.y,positionZ:Ve.z,forwardX:rt.x,forwardY:rt.y,forwardZ:rt.z,upX:0,upY:1,upZ:0}))vt[At]&&(vt[At].value=os)}catch{}return b==="darts"&&jt<9&&ce.throws===9&&Rt(`Round complete! ${ce.total} points. A to play again.`),b==="memory"&&!fc&&F.complete&&Rt(`All pairs matched in ${F.moves} turns!`),sc(ne),$=gn,{consumeTrigger:c.visible||b!=="explore"||I,blockTeleport:oe.held||b==="rc",blockMovement:b==="rc"||c.visible||z||ce.held||G.held||xe.held||te.held||oe.held}}function cc(){K.summon(),t.visible=!0,b="explore",$=N=W=!1,I=!0,V="Choose a game, or resume exploring.",ft()}function hc(){On(),je(),g.visible=!1,t.visible=!1,E=null,Q?.suspend()?.catch(()=>{})}function uc(){Bn(!0),$=!0,I=!0}return{pokemonLayer:i,setCompanionEnabled:Te,get companionEnabled(){return ue},fame:U,visitFame:vi,rc:se,golf:oe,planes:te,bowling:xe,play:G,memory:F,companion:K,progress:ha,callCompanion:Y,album:ee,darts:ce,showAlbum:he,tick:lc,begin:cc,end:hc,enableAudio:Ce,open:ft,close:je,start:Vt,stop:On,interrupt:uc,chooseSpots:la,get mode(){return b},get driving(){return b==="rc"&&se.active},get menuOpen(){return c.visible},get found(){return O},get route(){return C},get held(){return z||ce.held||G.held||xe.held||te.held||oe.held},get flight(){return D},get board(){return c},get root(){return t},puff:v.group,ball:m}}var pn={};function aa(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function kd(s){let e=2166136261;for(let t of String(s))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function Vd(s){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=aa(813+s*431),i=[["#456840","#66884e","#355b38","#789353"],["#3e613c","#587747","#304f34","#70884e"],["#516d3e","#738c4b","#405c37","#8b9b56"]][s];t.clearRect(0,0,256,256),t.lineCap="round",t.lineJoin="round";function r(a,l,c,h,f){t.save(),t.translate(a,l),t.rotate(h),t.fillStyle=i[f%4],t.beginPath(),t.moveTo(0,-c),t.bezierCurveTo(c*.74,-c*.5,c*.82,c*.3,0,c*.83),t.bezierCurveTo(-c*.6,c*.24,-c*.68,-c*.58,0,-c),t.fill(),t.strokeStyle=f%2?"rgba(186,194,129,.26)":"rgba(166,184,115,.22)",t.lineWidth=.7,t.beginPath(),t.moveTo(0,c*.67),t.lineTo(0,-c*.74),t.stroke(),t.restore()}for(let a=0;a<5;a++){let l=103+n()*34,c=218+n()*20,h=38+a*41+(n()-.5)*22,f=35+n()*53;t.strokeStyle="rgba(66,61,41,.92)",t.lineWidth=1.5+n(),t.beginPath(),t.moveTo(l,c),t.quadraticCurveTo((l+h)*.5+(n()-.5)*20,(c+f)*.5,h,f),t.stroke();for(let u=0;u<8;u++){let d=.14+u*.103,p=l+(h-l)*d,m=c+(f-c)*d,v=u%2?1:-1,_=7+n()*11,M=9+n()*8;t.strokeStyle="rgba(82,76,43,.72)",t.lineWidth=1,t.beginPath(),t.moveTo(p,m),t.lineTo(p+v*_,m-3),t.stroke(),r(p+v*_,m-7,M,v*(.4+n()*.55),u+a+s)}}let o=new De(e);return o.colorSpace=Ee,o.anisotropy=2,o}function Gd(){let s=document.createElement("canvas");s.width=128,s.height=256;let e=s.getContext("2d"),t=aa(731);e.fillStyle="#726f59",e.fillRect(0,0,128,256);for(let i=0;i<125;i++){let r=t()*128,o=t()*256,a=14+t()*116;e.strokeStyle=i%3?"rgba(33,39,30,.34)":"rgba(174,169,137,.26)",e.lineWidth=.6+t()*2.5,e.beginPath(),e.moveTo(r,o),e.bezierCurveTo(r+(t()-.5)*7,o+a*.3,r+(t()-.5)*8,o+a*.65,r+(t()-.5)*7,o+a),e.stroke()}let n=new De(s);return n.colorSpace=Ee,n.wrapS=n.wrapT=qt,n.repeat.set(1,2),n}function Hd(){if(!pn.trunk){pn.trunk=new ke(.38,1,1,9,3,!1);let s=pn.trunk.attributes.position;for(let t=0;t<s.count;t++){let n=s.getX(t),i=s.getY(t),r=s.getZ(t),o=Math.atan2(r,n),a=1+.045*Math.sin(o*5+i*9)+.025*Math.cos(o*3-i*11);s.setXYZ(t,n*a,i,r*a)}pn.trunk.computeVertexNormals(),pn.branch=new ke(.24,1,1,5,1,!0),pn.leaf=new Ne(1,1);let e=Gd();pn.wood=new Se({map:e,color:16777215,roughness:1,metalness:0}),pn.leaves=[0,1,2].map(t=>new Se({map:Vd(t),color:16777215,alphaTest:.38,transparent:!1,side:lt,roughness:.96,metalness:0}))}return pn}function oa(s,e,t,n,i){if(!i.length)return null;let r=new ln(t,n,i.length);r.name=e,r.castShadow=r.receiveShadow=!1;let o=new at;for(let a=0;a<i.length;a++){let l=i[a];o.position.copy(l.position),o.quaternion.copy(l.quaternion),o.scale.copy(l.scale),o.updateMatrix(),r.setMatrixAt(a,o.matrix),r.setColorAt(a,l.color)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,r.computeBoundingBox(),r.computeBoundingSphere(),s.add(r),r}function Ql(s,e=[]){let t=new _e;t.name="Natural exterior trees",s.add(t);let n=Hd(),i=[],r=[],o=[[],[],[]],a=new y(0,1,0),l=new y,c=[],h=e.filter(m=>Number.isFinite(m?.x)&&Number.isFinite(m?.z)).length,f=h>64,u=f?15:22,d=Math.max(40,Math.min(180,Math.floor((39500/Math.max(1,h)-n.trunk.index.count/3-u*n.branch.index.count/3)/2)));function p(m,v,_,M,x){let g=_.clone().sub(v);m.push({position:v.clone().add(_).multiplyScalar(.5),quaternion:new Pe().setFromUnitVectors(a,g.clone().normalize()),scale:new y(M,g.length(),M),color:x})}for(let m=0;m<e.length;m++){let v=e[m];if(!Number.isFinite(v?.x)||!Number.isFinite(v?.z))continue;let _=kd(v.seed??`${v.x},${v.z}`),M=aa(_),x=Number.isFinite(v.height)&&v.height>0?v.height:6,g=Number.isFinite(v.width)&&v.width>0?v.width:4,b=v.x,R=v.z,S=(M()-.5)*x*.075,T=(M()-.5)*x*.065,A=x*(.027+M()*.006),w=new ze().setRGB(.72+M()*.16,.73+M()*.12,.69+M()*.13),P=new y(b,0,R),E=new y(b+S,x*.56,R+T),z=new y(b+S*.95,x*.84,R+T*.95);p(i,P,E,A,w),p(r,E,z,A*.4,w);let D=f?2:3;for(let I=0;I<D;I++){let C=I*Math.PI*2/D+M()*.5,O=A*(1.8+M());p(r,new y(b,A*1.3,R),new y(b+Math.cos(C)*O,-.025,R+Math.sin(C)*O),A*.48,w)}let L=[{center:z,radiusX:g*.2,radiusY:x*.135,radiusZ:g*.2}],B=M()*Math.PI*2,$=.8+M()*.26;for(let I=0;I<6;I++){let C=B+I*Math.PI*2/6+(M()-.5)*.45,O=g*(.21+M()*.09),k=new y(b+S*.75+Math.cos(C)*O*$,x*(.55+I%3*.085+M()*.055),R+T*.75+Math.sin(C)*O),V=x*(.23+M()*.29),H=new y(b+S*V/(x*.56),V,R+T*V/(x*.56));p(r,H,k,A*(.24+M()*.1),w);for(let q of f?[I%2?1:-1]:[-1,1]){let ie=C+q*(.38+M()*.35),Q=k.clone().add(new y(Math.cos(ie)*g*.095,x*(.045+M()*.075),Math.sin(ie)*g*.095));p(r,H.clone().lerp(k,.66),Q,A*.1,w)}L.push({center:k,radiusX:g*(.16+M()*.07),radiusY:x*(.105+M()*.055),radiusZ:g*(.17+M()*.05)})}let N=d-Math.floor(M()*(f?15:25)),W=.84+M()*.16;for(let I=0;I<N;I++){let C=L[I%L.length],O=M()*Math.PI*2,k=M()*2-1,V=Math.cbrt(M()),H=Math.sqrt(1-k*k),q=C.center.clone().add(new y(Math.cos(O)*H*V*C.radiusX,k*V*C.radiusY,Math.sin(O)*H*V*C.radiusZ)),ie=g*((f?.115:.092)+M()*.035),Q=ie*(.9+M()*.24),J=q.x-b,fe=q.z-R,de=Math.hypot(J,fe),ee=Math.max(g*.1,g*.5-Math.hypot(ie,Q)*.5);de>ee&&(q.x=b+J*ee/de,q.z=R+fe*ee/de),q.y=Ke.clamp(q.y,x*.34,x*.965),q.y=Math.min(q.y,x-Q*.55),l.set(Math.cos(O),(.5-M())*1.35,Math.sin(O)).normalize();let ce=new Pe().setFromUnitVectors(new y(0,0,1),l);ce.multiply(new Pe().setFromAxisAngle(new y(0,0,1),(M()-.5)*1.4));let F=W*(.83+M()*.17),K=new ze().setRGB(F*(.94+M()*.06),F,F*(.91+M()*.08));o[I%3].push({position:q,quaternion:ce,scale:new y(ie,Q,1),color:K})}c.push({x:b,z:R,height:x,width:g,seed:_,leafCount:N})}return oa(t,"Tapered bark trunks",n.trunk,n.wood,i),oa(t,"Forked branches and root flares",n.branch,n.wood,r),o.forEach((m,v)=>oa(t,"Leaf sprays "+(v+1),n.leaf,n.leaves[v],m)),t.userData.treeCount=i.length,t.userData.foliageInstances=o.reduce((m,v)=>m+v.length,0),t.userData.branchInstances=r.length,t.userData.triangles=i.length*n.trunk.index.count/3+r.length*n.branch.index.count/3+t.userData.foliageInstances*2,t.userData.drawCalls=t.children.length,t.userData.placements=c,t}var wt=32,Ft=26,st=6.5,Wd=26.35,jl=[{name:"Neighbour workshop",left:-60,right:-24,door:-40,office:-53,ridge:.64,muted:!0},{name:"A&M Ceramics Ltd",left:-24,right:8,door:-3.5,office:-18,ridge:.82,brand:"am"},{name:"Neil Signs",left:8,right:40,door:19.5,office:34,ridge:.82,brand:"neil"},{name:"Neighbour warehouse",left:40,right:60,door:54,office:44,ridge:.55,muted:!0}];function Xd(s){let e=document.createElement("canvas");e.width=s==="neil"?1536:1792,e.height=256;let t=e.getContext("2d");if(t.fillStyle="#f7f7f2",t.fillRect(0,0,e.width,256),s==="neil"){let i="#852477",r="#b5d735";for(let[a,l,c]of[[105,44,i],[162,44,r],[219,44,i],[105,101,r],[162,101,i],[219,101,r],[162,158,r],[219,158,i]])t.save(),t.translate(a,l),t.rotate(Math.PI/4),t.fillStyle=c,t.fillRect(-19,-19,38,38),t.restore();t.textAlign="left",t.fillStyle=i,t.font="italic 600 158px Arial",t.fillText("neil",315,165);let o=t.measureText("neil").width;t.fillStyle=r,t.font="italic 700 149px Arial",t.fillText("signs",325+o,164),t.fillStyle="#626267",t.font="39px Arial",t.fillText("signmakers & vehicle graphics",322,225)}else t.fillStyle="#26789e",t.fillRect(38,51,113,122),t.fillStyle="#a8c9d7",t.fillRect(47,60,44,99),t.fillStyle="#f7f7f2",t.fillRect(98,60,43,45),t.fillStyle="#1a3456",t.textAlign="left",t.font="italic 700 108px Arial",t.fillText("A&M Ceramics Ltd",222,145,1330),t.font="36px Arial",t.fillText("UNIT 4  \xB7  KETTERER COURT",225,213),t.fillStyle="#146cba",t.fillRect(1612,0,180,256),t.fillStyle="#ffffff",t.textAlign="center",t.font="italic 700 175px Arial",t.fillText("4",1702,193);let n=new De(e);return n.colorSpace=Ee,n.anisotropy=4,new Se({map:n,color:16777215,roughness:.88,metalness:0})}function ec(s){let e=new _e;e.name="Ketterer Court \xB7 opposite industrial units",s.add(e);let t=(S,T=.8,A=0)=>new Se({color:S,roughness:T,metalness:A}),n={cladding:t("#b0b7bc",.82,.18),muted:t("#97a4ae",.9,.12),ribs:t("#c0c5c7",.8,.17),blue:t("#095d9e",.6,.22),mutedBlue:t("#416880",.74,.2),door:t("#116caf",.7,.17),roof:t("#6a7b84",.83,.26),roofRib:t("#82909a",.79,.25),tan:t("#a99883",.96),dark:t("#263b49",.7,.28),steel:t("#697d87",.65,.5),glass:t("#28485c",.2,.52),glassReflection:t("#728c98",.36,.3),white:t("#eceade",.95),concrete:t("#8d9494",1),black:t("#273032",.95),lamp:new Se({color:"#e4e8df",emissive:"#bcc8c7",emissiveIntensity:.2,roughness:.5})},i=document.createElement("canvas");i.width=256,i.height=8;let r=i.getContext("2d"),o=r.createImageData(256,8);for(let S=0;S<8;S++)for(let T=0;T<256;T++){let A=Math.sin(T/8*Math.PI*2)*.6,w=Math.sqrt(1-A*A),P=(S*256+T)*4;o.data[P]=(A*.5+.5)*255,o.data[P+1]=128,o.data[P+2]=(w*.5+.5)*255,o.data[P+3]=255}r.putImageData(o,0,0);let a=new De(i);a.wrapS=a.wrapT=qt,a.repeat.set(8,1),a.anisotropy=4;for(let S of[n.cladding,n.muted])S.normalMap=a,S.normalScale.set(.7,.7);let l=new Map,c=new at,h=new ve(1,1,1),f=[];function u(S,T,A,w,P,E,z,D=0,L=0,B=0){l.has(S)||l.set(S,[]),l.get(S).push({w:T,h:A,d:w,x:P,y:E,z,rx:D,ry:L,rz:B})}function d(S,T,A,w,P=w){let E=new y(...T),z=new y(...A),D=z.clone().sub(E),L=E.clone().add(z).multiplyScalar(.5),B=new Pe().setFromUnitVectors(new y(1,0,0),D.clone().normalize());l.has(S)||l.set(S,[]),l.get(S).push({w:D.length(),h:w,d:P,x:L.x,y:L.y,z:L.z,quaternion:B})}function p(S,T,A){let w=(S+T)/2;for(let P of[wt-.006,wt+Ft+.006])P<wt?f.push(S,st,P,w,st+A,P,T,st,P):f.push(T,st,P,w,st+A,P,S,st,P)}function m(S,T,A,w){let P=wt-.2;u(n.dark,T+.37,A+.18,.13,S,A/2,P+.025),u(w,T,A,.08,S,A/2+.035,P-.06);for(let E=.15;E<A;E+=.2)u(n.blue,T-.035,.022,.026,S,E,P-.12);for(let E of[-1,1])u(n.blue,.18,A+.25,.24,S+E*(T/2+.11),(A+.25)/2,P-.08);u(n.blue,T+.58,.37,.42,S,A+.22,P-.1),u(n.dark,T,.07,.15,S,.055,P-.08),u(n.steel,.3,.055,.035,S,.93,P-.13),u(n.black,T+.6,.018,.24,S,.017,30.72);for(let E=0;E<18;E++)u(n.steel,.035,.011,.2,S-(T+.4)/2+(E+.5)*(T+.4)/18,.031,30.72)}function v(S,T,A){let w=wt-.22,P=.78,E=2.9,z=S-T*.25;u(n.tan,T,.78,.16,S,.39,w),u(n.dark,T,E-P,.1,S,(E+P)/2,w-.035),u(n.glass,T-.12,E-P-.14,.033,S,(E+P)/2,w-.095),u(n.glassReflection,T-.17,.31,.01,S,2.52,w-.116);for(let D=0;D<=6;D++)u(A,.065,E-P+.06,.075,S-T/2+D*T/6,(E+P)/2,w-.135);for(let D of[P,1.82,E])u(A,T+.1,.077,.088,S,D,w-.145);u(n.dark,1.02,2.29,.055,z,1.145,w-.155),u(n.glass,.87,2.13,.014,z,1.135,w-.191);for(let D of[-1,1])u(A,.066,2.36,.052,z+D*.53,1.18,w-.2);u(A,1.12,.075,.059,z,2.36,w-.2),u(n.steel,.028,.43,.065,z+.37,1.1,w-.232),u(A,T+.37,.24,.92,S,3.045,w-.26),u(n.tan,T+.1,.055,.43,S,.041,w-.24)}function _(S,T){u(n.dark,.43,.28,.2,S,T,31.57,.13),u(n.lamp,.355,.185,.016,S,T-.007,31.455,.13),d(n.steel,[S,T,31.93],[S,T,31.64],.045)}function M(S,T,A,w,P){u(n.dark,w+.13,P+.13,.085,T,A,31.57);let E=new ge(new Ne(w,P),Xd(S));return E.name=S==="neil"?"Neil Signs \xB7 reference wordmark":"A&M Ceramics Ltd \xB7 unit 4",E.position.set(T,A,31.51),E.rotation.y=Math.PI,e.add(E),{name:E.name,x:T,y:A,z:31.51,yaw:Math.PI,width:w,height:P}}let x=[];for(let S of jl){let{left:T,right:A,ridge:w}=S,P=A-T,E=(T+A)/2,z=S.muted?n.mutedBlue:n.blue;u(S.muted?n.muted:n.cladding,P,st,Ft,E,st/2,wt+Ft/2),u(n.tan,P,.78,.08,E,.39,wt-.045);for(let D=T+.22;D<A;D+=.49)u(S.muted?n.muted:n.ribs,.035,st-.83,.036,D,(st+.83)/2,wt-.04);p(T,A,w);for(let D of[-1,1]){let L=P/2+.22,B=w+.02,$=Math.hypot(L,B),N=-D*Math.atan2(B,L),W=E+D*P/4;u(n.roof,$,.095,Ft+.54,W,st+w/2+.05,wt+Ft/2,0,0,N),d(z,[E+D*(P/2+.25),st+.08,31.71],[E,st+w+.11,31.71],.13,.18);for(let I=E+D*.45;D>0?I<A:I>T;I+=D*.88){let C=st+w*(1-Math.abs(I-E)/(P/2))+.12;u(n.roofRib,.025,.035,Ft+.38,I,C,wt+Ft/2,0,0,N)}}u(z,.15,.15,Ft+.6,E,st+w+.13,wt+Ft/2);for(let D of[T+.09,A-.09]){u(z,.19,st,.17,D,st/2,31.87),u(n.dark,.16,.15,Ft+.2,D,st-.01,wt+Ft/2),u(n.dark,.11,5.92,.11,D,.23+5.92/2,31.73);for(let L of[.4,2.2,4.1,5.8])u(n.steel,.17,.07,.15,D,L,31.73);u(n.dark,.14,.14,.37,D,.19,31.62)}u(z,P+.22,.32,.14,E,6.22,31.87),m(S.door,S.muted?5.5:6.2,4.45,S.muted?n.mutedBlue:n.door),v(S.office,S.muted?4.2:8.8,z),_(T+P*.12,5.65),_(T+P*.88,5.65),S.brand==="neil"&&x.push(M("neil",26.45,5.62,9.15,1.52)),S.brand==="am"&&x.push(M("am",-12,5.62,10.65,1.52))}for(let S of[-60.03,60.03])for(let T=wt+.3;T<wt+Ft;T+=.7)u(n.ribs,.035,st-.83,.035,S,(st+.83)/2,T);u(n.concrete,120,.012,5.4,0,.003,29.08);for(let S of[-58,-54,-50,-22,-18,-14,12,16,20,30,34,38,46,50,54,58])u(n.white,.065,.007,3,S,.016,28.65);for(let[S,T]of[[-54,8],[-18,8],[16,8],[34,8],[52,12]])u(n.white,T,.007,.065,S,.016,27.15);for(let S of[-18,34])for(let T=0;T<7;T++)u(n.white,2.2,.007,.1,S,.017,29.72+T*.19);let g=[];for(let S of[-58,-25,7,39,59])u(n.steel,.085,7.78,.085,S,3.89,27.25),u(n.steel,.09,.09,.68,S,7.77,26.97),u(n.dark,.24,.125,.55,S,7.8,26.69),u(n.lamp,.185,.016,.47,S,7.735,26.69),u(n.dark,.17,.2,.17,S,.1,27.25),g.push({x:S,z:27.25,height:7.86});if(f.length){let S=new Be;S.setAttribute("position",new Re(f,3)),S.computeVertexNormals();let T=new ge(S,n.cladding);T.name="Shallow pitched facade gables",e.add(T)}for(let[S,T]of l){let A=new ln(h,S,T.length);A.name="Estate detail batch \xB7 "+Object.keys(n).find(w=>n[w]===S);for(let w=0;w<T.length;w++){let P=T[w];c.position.set(P.x,P.y,P.z),c.scale.set(P.w,P.h,P.d),P.quaternion?c.quaternion.copy(P.quaternion):c.rotation.set(P.rx,P.ry,P.rz),c.updateMatrix(),A.setMatrixAt(w,c.matrix)}A.instanceMatrix.needsUpdate=!0,A.computeBoundingBox(),A.computeBoundingSphere(),A.castShadow=!1,A.receiveShadow=!0,e.add(A)}let b=0,R=0;return e.traverse(S=>{S.isMesh&&(R++,b+=(S.geometry.index?.count||S.geometry.attributes.position.count)/3*(S.isInstancedMesh?S.count:1))}),e.userData={...e.userData,frontZ:wt,minZ:Wd,depth:Ft,eaves:st,units:jl.map(S=>({...S})),signs:x,lampPosts:g,triangles:b,drawCalls:R,collidersAdded:0},e.updateMatrixWorld(!0),e}function tc(s){let e=new _e;e.name="Ketterer Court exterior",s.worldScene.add(e);let t=window.yardExteriorTreeSites||[],n=t.filter((a,l)=>l%2===0||a.x>=49&&a.x<=67&&a.z>=16&&a.z<=20).map(a=>({...a,z:a.z>50&&Math.abs(a.x)<65?Math.max(61,a.z+5):a.z})),i=Ql(e,n),r=ec(e),o=new Se({color:6450762,roughness:1});for(let[a,l,c,h]of[[0,-52,195,26],[-83,10,22,116],[88,10,20,116],[0,71,195,24]]){let f=new ge(new Ne(c,h),o);f.rotation.x=-Math.PI/2,f.position.set(a,.004,l),f.name="Exterior grass verge",e.add(f)}return{root:e,trees:i,buildings:r}}var Fn=s=>document.querySelector(s),Qt=Fn("#questEnter"),mn=Fn("#questStatus"),Tr=Fn("#questPanel");Fn("#questPreview").onclick=()=>{Tr.hidden=!0,Fn("#questReturn").hidden=!1};Fn("#questReturn").onclick=()=>{window.yardDebug?.pause(),Tr.hidden=!1};async function qd(s){let e=s.renderer,t=s.worldScene,n=s.worldCamera;s.exterior=tc(s);let i=Kl(s);s.vrGames=i,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let r=new _e;r.name="Quest player rig",t.add(r);let o=[e.xr.getController(0),e.xr.getController(1)],a=o.map((w,P)=>e.xr.getControllerGrip?.(P)||w);for(let w of a)o.includes(w)||r.add(w);let l=new Map;o.forEach(w=>{r.add(w),w.addEventListener("connected",E=>l.set(w,E.data)),w.addEventListener("disconnected",()=>l.delete(w));let P=new ge(new nt(.018,8,6),new Me({color:16769946}));w.add(P)});let c=new St(new Be,new bt({color:8645568}));c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new ge(new hn(.22,.3,32),new Me({color:8645568,side:2,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.visible=!1,t.add(h);let f=s.colliders.map(w=>new qe(new y(w.min.x,w.min.y,w.min.z),new y(w.max.x,w.max.y,w.max.z))),u=0,d=new y,p=new Pe,m=null,v=!1,_=!1,M=!1,x=null,g,b,R=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),S=()=>{let w=s.stats(),P=ta(d.x,d.z,u);r.position.set(w.x-P.x,w.y+(window.yardFloorOffset||0),w.z-P.z),r.rotation.y=u,n.position.set(0,0,0),n.quaternion.identity(),r.updateMatrixWorld(!0)};s.xrFace=w=>{let P=new y(0,0,-1).applyQuaternion(p);u=w-Math.atan2(-P.x,-P.z),m=null,S()};function T(w){if(x=null,!w){c.visible=h.visible=!1;return}let P=w.getWorldPosition(new y),z=new y(0,0,-1).applyQuaternion(w.getWorldQuaternion(new Pe)).multiplyScalar(6);z.y+=2;let D=[P.clone()],L=new tt,B=new y,$=P.clone(),N=null;for(let W=1;W<=32;W++){let I=W*.05,C=P.clone().addScaledVector(z,I);C.y-=4.9*I*I;let O=C.clone().sub($),k=O.length();L.set($,O.normalize());let V=k,H=null,q=!1;for(let ie of f){if(ie.containsPoint($))continue;let Q=L.intersectBox(ie,B);if(Q){let J=Q.distanceTo($);J<V&&(V=J,H=Q.clone(),q=Math.abs(Q.y-ie.max.y)<.015)}}if($.y>=0&&C.y<=0){let ie=$.clone().lerp(C,$.y/($.y-C.y));ie.distanceTo($)<V&&(H=ie,q=!0)}if(H){D.push(H),N=H,q&&!s.blocked(H.x,H.z,H.y)&&Math.abs(s.groundAt(H.x,H.z,H.y+.05)-H.y)<.12&&(x=H);break}D.push(C),$=C}c.geometry.dispose(),c.geometry=new Be().setFromPoints(D),c.visible=!0,c.material.color.set(x?8645568:16746618),h.visible=!!x,x&&h.position.copy(x).add(new y(0,.025,0))}let A=window.questBridge={frame:null,sample(w){let P=e.xr.getSession(),E=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!E||P?.visibilityState==="hidden")return m=null,i.interrupt(),R();if(d.set(E.transform.position.x,E.transform.position.y,E.transform.position.z),p.copy(E.transform.orientation),m){let Q=ta(d.x-m.x,d.z-m.z,u);Math.hypot(Q.x,Q.z)<.8&&s.xrPhysical(Q.x,Q.z)}m=d.clone();let z,D;for(let Q of P.inputSources)Q.handedness==="left"&&(z=Q),Q.handedness==="right"&&(D=Q);let[L,B]=ns(z),[$]=ns(D),N=Rl($,Fn("#questTurning").value,w,v);!i.menuOpen&&!i.held&&!i.driving&&(u+=N.angle,N.angle&&i.interrupt()),v=N.latched;let W=!!z?.gamepad?.buttons[4]?.pressed;W&&!M&&!i.driving&&(i.interrupt(),s.resetPosition(),u=0,m=null,i.close()),M=W,S();let I=o.find(Q=>l.get(Q)?.handedness==="right"),C=new y(0,0,-1).applyQuaternion(p),O=C.clone().applyAxisAngle(new y(0,1,0),u),k=i.tick({dt:w,eye:d.clone().applyMatrix4(r.matrixWorld),forward:O,headOrientation:r.getWorldQuaternion(new Pe).multiply(p),left:z,right:D,controller:I,rightGripController:a[o.findIndex(Q=>l.get(Q)?.handedness==="right")],leftController:a[o.findIndex(Q=>l.get(Q)?.handedness==="left")]}),V=!k.blockTeleport&&!i.menuOpen&&(!!D?.gamepad?.buttons[1]?.pressed||!k.consumeTrigger&&!!D?.gamepad?.buttons[0]?.pressed);V&&(i.interrupt(),T(I)),!V&&_&&(x&&!i.menuOpen&&!k.blockTeleport&&s.xrTeleport(x.x,x.y,x.z),x=null,c.visible=h.visible=!1),_=V;let H=u+Math.atan2(-C.x,-C.z);s.xrHeading(H);let q=R(),ie=Number(Fn("#questSpeed").value)/2.9;return q.fwd=-_i(B)*ie,q.strafe=_i(L)*ie,(V||k.blockMovement)&&(q.fwd=q.strafe=0),q},beforeRender(){e.xr.isPresenting&&S()}};if(e.xr.addEventListener("sessionstart",()=>{b=n.parent,g=e.shadowMap.enabled,e.shadowMap.enabled=!1,r.add(n),u=0,d.set(0,0,0),m=null,v=_=M=!1,s.xrBegin(),S(),i.begin(),document.body.classList.add("questActive"),Tr.hidden=!0,mn.textContent="VR is running. Use the Meta menu to exit.",Qt.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),r.remove(n),b&&b.add(n),e.shadowMap.enabled=g,c.visible=h.visible=!1,m=null,s.xrEnd(),document.body.classList.remove("questActive"),Tr.hidden=!1,Qt.disabled=!1,Qt.textContent="Enter VR again",mn.textContent="You have left VR."}),Qt.onclick=async()=>{Qt.disabled=!0;let w;try{i.enableAudio(),w=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),w.addEventListener("visibilitychange",()=>{m=null}),await e.xr.setSession(w)}catch(P){w&&await w.end().catch(()=>{}),Qt.disabled=!1,mn.textContent="Could not enter VR: "+P.message}},!window.isSecureContext){Qt.textContent="HTTPS hosting needed",mn.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){Qt.textContent="Open in your Quest browser",mn.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let w=await navigator.xr.isSessionSupported("immersive-vr");Qt.disabled=!w,Qt.textContent=w?"Enter VR":"VR headset not detected",mn.textContent=w?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(w){mn.textContent="VR availability check failed: "+w.message}}var Yd=0,nc=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(nc),qd(window.yardDebug).catch(s=>{mn.textContent="VR setup failed: "+s.message,console.error(s)})):++Yd>1200&&(clearInterval(nc),mn.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
