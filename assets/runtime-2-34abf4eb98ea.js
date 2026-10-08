(()=>{var Za=1;var Ja=3,Bs=0,Ka=1,it=2;var jr=1,Io=2;var eo=100;var to=204,no=205;var io=0,so=1,ro=2,Ui=3,oo=4,ao=5,lo=6,co=7,Lo=0,Qa=1,ja=2;var Do=1,No=2,Uo=3,Fo=4,Bo=5,Oo=6,zo=7;var ko=300,el=301,Vo=302;var tl=306,kt=1e3,Ri=1001,ho=1002,uo=1003;var nl=1006;var il=1008;var Go=1009;var Ho=1015;var sl=1023;var rl=1028;var Fi=2300,Os=2301,Us=2302,fo=2303,po=2400,mo=2401,go=2402;var ol=0;var Wo="",Ae="srgb",xo="srgb-linear",_o="linear",Fs="srgb";var Xn=7680;var yo=519;var vo=35044;var wn=2e3,Bi=2001;function mc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var pa={},zs=null;function al(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ze(...s){s=al(s);let e="THREE."+s.shift();if(zs)zs("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xe(...s){s=al(s);let e="THREE."+s.shift();if(zs)zs("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ui(...s){let e=s.join(" ");e in pa||(pa[e]=!0,Ze(...s))}var xc={[io]:so,[ro]:lo,[oo]:co,[Ui]:ao,[so]:io,[lo]:ro,[co]:oo,[ao]:Ui},An=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ma=1234567,Ii=Math.PI/180,Oi=180/Math.PI;function Kn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[s&255]+gt[s>>8&255]+gt[s>>16&255]+gt[s>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Fe(s,e,t){return Math.max(e,Math.min(t,s))}function Xo(s,e){return(s%e+e)%e}function _c(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yc(s,e,t){return s!==e?(t-s)/(e-s):0}function Li(s,e,t){return(1-t)*s+t*e}function vc(s,e,t,n){return Li(s,e,1-Math.exp(-t*n))}function Mc(s,e=1){return e-Math.abs(Xo(s,e*2)-e)}function bc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Sc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Tc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wc(s,e){return s+Math.random()*(e-s)}function Ac(s){return s*(.5-Math.random())}function Ec(s){s!==void 0&&(ma=s);let e=ma+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cc(s){return s*Ii}function Rc(s){return s*Oi}function Pc(s){return(s&s-1)===0&&s!==0}function Ic(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dc(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*f,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*h,a*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Qe={DEG2RAD:Ii,RAD2DEG:Oi,generateUUID:Kn,clamp:Fe,euclideanModulo:Xo,mapLinear:_c,inverseLerp:yc,lerp:Li,damp:vc,pingpong:Mc,smoothstep:bc,smootherstep:Sc,randInt:Tc,randFloat:wc,randFloatSpread:Ac,seededRandom:Ec,degToRad:Cc,radToDeg:Rc,isPowerOfTwo:Pc,ceilPowerOfTwo:Ic,floorPowerOfTwo:Lc,setQuaternionFromProperEuler:Dc,normalize:Mt,denormalize:hi},Zo=class Zo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zo.prototype.isVector2=!0;var le=Zo,Re=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[o+0],d=r[o+1],p=r[o+2],g=r[o+3];if(f!==g||l!==u||c!==d||h!==p){let v=l*u+c*d+h*p+f*g;v<0&&(u=-u,d=-d,p=-p,g=-g,v=-v);let x=1-a;if(v<.9995){let M=Math.acos(v),_=Math.sin(M);x=Math.sin(x*M)/_,a=Math.sin(a*M)/_,l=l*x+u*a,c=c*x+d*a,h=h*x+p*a,f=f*x+g*a}else{l=l*x+u*a,c=c*x+d*a,h=h*x+p*a,f=f*x+g*a;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],u=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*f+l*d-c*u,e[t+1]=l*p+h*u+c*f-a*d,e[t+2]=c*p+h*d+a*u-l*f,e[t+3]=h*p-a*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Jo=class Jo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jo.prototype.isVector3=!0;var y=Jo,Er=new y,ga=new Re,Ko=class Ko{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],g=i[0],v=i[3],x=i[6],M=i[1],_=i[4],m=i[7],b=i[2],C=i[5],S=i[8];return r[0]=o*g+a*M+l*b,r[3]=o*v+a*_+l*C,r[6]=o*x+a*m+l*S,r[1]=c*g+h*M+f*b,r[4]=c*v+h*_+f*C,r[7]=c*x+h*m+f*S,r[2]=u*g+d*M+p*b,r[5]=u*v+d*_+p*C,r[8]=u*x+d*m+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,p=t*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=f*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=u*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cr.makeScale(e,t)),this}rotate(e){return ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cr.makeRotation(-e)),this}translate(e,t){return ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ko.prototype.isMatrix3=!0;var De=Ko,Cr=new De,xa=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_a=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nc(){let s={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Fs&&(i.r=ln(i.r),i.g=ln(i.g),i.b=ln(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Fs&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wo?_o:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[xo]:{primaries:e,whitePoint:n,transfer:_o,toXYZ:xa,fromXYZ:_a,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:e,whitePoint:n,transfer:Fs,toXYZ:xa,fromXYZ:_a,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),s}var zt=Nc();function ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var jn,ks=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jn===void 0&&(jn=Mo("canvas")),jn.width=e.width,jn.height=e.height;let i=jn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ln(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ln(t[n]/255)*255):t[n]=ln(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uc=1e6,Vs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=Kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Rr(i[o].image)):r.push(Rr(i[o]))}else r=Rr(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Rr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ks.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var Fc=1e6,Pr=new y,En=class s extends An{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ri,i=Ri,r=nl,o=il,a=sl,l=Go,c=s.DEFAULT_ANISOTROPY,h=Wo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Kn(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pr).x}get height(){return this.source.getSize(Pr).y}get depth(){return this.source.getSize(Pr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ko)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kt:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kt:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=ko;En.DEFAULT_ANISOTROPY=1;var Qo=class Qo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],g=l[2],v=l[6],x=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(p-v)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(p+v)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,m=(d+1)/2,b=(x+1)/2,C=(h+u)/4,S=(f+g)/4,T=(p+v)/4;return _>m&&_>b?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=C/n,r=S/n):m>b?m<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(m),n=C/i,r=T/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=S/r,i=T/r),this.set(n,i,r,t),this}let M=Math.sqrt((v-p)*(v-p)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(v-p)/M,this.y=(f-g)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qo.prototype.isVector4=!0;var qn=Qo;var fr=class fr{constructor(e,t,n,i,r,o,a,l,c,h,f,u,d,p,g,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,f,u,d,p,g,v)}set(e,t,n,i,r,o,a,l,c,h,f,u,d,p,g,v){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=f,x[14]=u,x[3]=d,x[7]=p,x[11]=g,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fr().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ei.setFromMatrixColumn(e,0).length(),r=1/ei.setFromMatrixColumn(e,1).length(),o=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,p=a*h,g=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=u-g*c,t[9]=-a*l,t[2]=g-u*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,p=c*h,g=c*f;t[0]=u+g*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=g+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,p=c*h,g=c*f;t[0]=u-g*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=g-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,d=o*f,p=a*h,g=a*f;t[0]=l*h,t[4]=p*c-d,t[8]=u*c+g,t[1]=l*f,t[5]=g*c+u,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=g-u*f,t[8]=p*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*f+p,t[10]=u-g*f}else if(e.order==="XZY"){let u=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+g,t[5]=o*h,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*h,t[10]=g*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bc,e,Oc)}lookAt(e,t,n){let i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),_n.crossVectors(n,It),_n.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),_n.crossVectors(n,It)),_n.normalize(),ls.crossVectors(It,_n),i[0]=_n.x,i[4]=ls.x,i[8]=It.x,i[1]=_n.y,i[5]=ls.y,i[9]=It.y,i[2]=_n.z,i[6]=ls.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],g=n[6],v=n[10],x=n[14],M=n[3],_=n[7],m=n[11],b=n[15],C=i[0],S=i[4],T=i[8],A=i[12],w=i[1],R=i[5],E=i[9],V=i[13],D=i[2],I=i[6],B=i[10],q=i[14],N=i[3],W=i[7],L=i[11],P=i[15];return r[0]=o*C+a*w+l*D+c*N,r[4]=o*S+a*R+l*I+c*W,r[8]=o*T+a*E+l*B+c*L,r[12]=o*A+a*V+l*q+c*P,r[1]=h*C+f*w+u*D+d*N,r[5]=h*S+f*R+u*I+d*W,r[9]=h*T+f*E+u*B+d*L,r[13]=h*A+f*V+u*q+d*P,r[2]=p*C+g*w+v*D+x*N,r[6]=p*S+g*R+v*I+x*W,r[10]=p*T+g*E+v*B+x*L,r[14]=p*A+g*V+v*q+x*P,r[3]=M*C+_*w+m*D+b*N,r[7]=M*S+_*R+m*I+b*W,r[11]=M*T+_*E+m*B+b*L,r[15]=M*A+_*V+m*q+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],p=e[3],g=e[7],v=e[11],x=e[15],M=l*d-c*u,_=a*d-c*f,m=a*u-l*f,b=o*d-c*h,C=o*u-l*h,S=o*f-a*h;return t*(g*M-v*_+x*m)-n*(p*M-v*b+x*C)+i*(p*_-g*b+x*S)-r*(p*m-g*C+v*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],p=e[12],g=e[13],v=e[14],x=e[15],M=t*a-n*o,_=t*l-i*o,m=t*c-r*o,b=n*l-i*a,C=n*c-r*a,S=i*c-r*l,T=h*g-f*p,A=h*v-u*p,w=h*x-d*p,R=f*v-u*g,E=f*x-d*g,V=u*x-d*v,D=M*V-_*E+m*R+b*w-C*A+S*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/D;return e[0]=(a*V-l*E+c*R)*I,e[1]=(i*E-n*V-r*R)*I,e[2]=(g*S-v*C+x*b)*I,e[3]=(u*C-f*S-d*b)*I,e[4]=(l*w-o*V-c*A)*I,e[5]=(t*V-i*w+r*A)*I,e[6]=(v*m-p*S-x*_)*I,e[7]=(h*S-u*m+d*_)*I,e[8]=(o*E-a*w+c*T)*I,e[9]=(n*w-t*E-r*T)*I,e[10]=(p*C-g*m+x*M)*I,e[11]=(f*m-h*C-d*M)*I,e[12]=(a*A-o*R-l*T)*I,e[13]=(t*R-n*A+i*T)*I,e[14]=(g*_-p*b-v*M)*I,e[15]=(h*b-f*_+u*M)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,p=r*f,g=o*h,v=o*f,x=a*f,M=l*c,_=l*h,m=l*f,b=n.x,C=n.y,S=n.z;return i[0]=(1-(g+x))*b,i[1]=(d+m)*b,i[2]=(p-_)*b,i[3]=0,i[4]=(d-m)*C,i[5]=(1-(u+x))*C,i[6]=(v+M)*C,i[7]=0,i[8]=(p+_)*S,i[9]=(v-M)*S,i[10]=(1-(u+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ei.set(i[0],i[1],i[2]).length(),a=ei.set(i[4],i[5],i[6]).length(),l=ei.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Xt.copy(this);let c=1/o,h=1/a,f=1/l;return Xt.elements[0]*=c,Xt.elements[1]*=c,Xt.elements[2]*=c,Xt.elements[4]*=h,Xt.elements[5]*=h,Xt.elements[6]*=h,Xt.elements[8]*=f,Xt.elements[9]*=f,Xt.elements[10]*=f,t.setFromRotationMatrix(Xt),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=wn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===wn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Bi)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=wn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===wn)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Bi)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};fr.prototype.isMatrix4=!0;var Je=fr,ei=new y,Xt=new Je,Bc=new y(0,0,0),Oc=new y(1,1,1),_n=new y,ls=new y,It=new y,ya=new Je,va=new Re,cn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return va.setFromEuler(this),this.setFromQuaternion(va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var zi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zc=1e6,Ma=new y,ti=new Re,tn=new Je,cs=new y,bi=new y,kc=new y,Vc=new Re,ba=new y(1,0,0),Sa=new y(0,1,0),Ta=new y(0,0,1),wa={type:"added"},Gc={type:"removed"},ni={type:"childadded",child:null},Ir={type:"childremoved",child:null},lt=class s extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new y,t=new cn,n=new Re,i=new y(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new De}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(ba,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(Ta,e)}translateOnAxis(e,t){return Ma.copy(e).applyQuaternion(this.quaternion),this.position.add(Ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ba,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(Ta,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(bi,cs,this.up):tn.lookAt(cs,bi,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(tn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wa),ni.child=e,this.dispatchEvent(ni),ni.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gc),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wa),ni.child=e,this.dispatchEvent(ni),ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};lt.DEFAULT_UP=new y(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _e=class extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function Lr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=zt.workingColorSpace){if(e=Xo(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lr(o,r,e+1/3),this.g=Lr(o,r,e),this.b=Lr(o,r,e-1/3)}return zt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){let n=ll[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ln(e.r),this.g=ln(e.g),this.b=ln(e.b),this}copyLinearToSRGB(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return zt.workingToColorSpace(xt.copy(this),e),Math.round(Fe(xt.r*255,0,255))*65536+Math.round(Fe(xt.g*255,0,255))*256+Math.round(Fe(xt.b*255,0,255))}getHexString(e=Ae){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(xt.copy(this),t);let n=xt.r,i=xt.g,r=xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Ae){zt.workingToColorSpace(xt.copy(this),e);let t=xt.r,n=xt.g,i=xt.b;return e!==Ae?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(hs);let n=Li(yn.h,hs.h,t),i=Li(yn.s,hs.s,t),r=Li(yn.l,hs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xt=new ze;ze.NAMES=ll;var qt=new y,nn=new y,Dr=new y,sn=new y,ii=new y,si=new y,Aa=new y,Nr=new y,Ur=new y,Fr=new y,Br=new qn,Or=new qn,zr=new qn,Tn=class s{constructor(e=new y,t=new y,n=new y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qt.subVectors(e,t),i.cross(qt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qt.subVectors(i,t),nn.subVectors(n,t),Dr.subVectors(e,t);let o=qt.dot(qt),a=qt.dot(nn),l=qt.dot(Dr),c=nn.dot(nn),h=nn.dot(Dr),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,sn.x),l.addScaledVector(o,sn.y),l.addScaledVector(a,sn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Br.setScalar(0),Or.setScalar(0),zr.setScalar(0),Br.fromBufferAttribute(e,t),Or.fromBufferAttribute(e,n),zr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Br,r.x),o.addScaledVector(Or,r.y),o.addScaledVector(zr,r.z),o}static isFrontFacing(e,t,n,i){return qt.subVectors(n,t),nn.subVectors(e,t),qt.cross(nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),qt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ii.subVectors(i,n),si.subVectors(r,n),Nr.subVectors(e,n);let l=ii.dot(Nr),c=si.dot(Nr);if(l<=0&&c<=0)return t.copy(n);Ur.subVectors(e,i);let h=ii.dot(Ur),f=si.dot(Ur);if(h>=0&&f<=h)return t.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ii,o);Fr.subVectors(e,r);let d=ii.dot(Fr),p=si.dot(Fr);if(p>=0&&d<=p)return t.copy(r);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(si,a);let v=h*p-d*f;if(v<=0&&f-h>=0&&d-p>=0)return Aa.subVectors(r,i),a=(f-h)/(f-h+(d-p)),t.copy(i).addScaledVector(Aa,a);let x=1/(v+g+u);return o=g*x,a=u*x,t.copy(n).addScaledVector(ii,o).addScaledVector(si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qe=class{constructor(e=new y(1/0,1/0,1/0),t=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yt):Yt.fromBufferAttribute(r,o),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Si),fs.subVectors(this.max,Si),ri.subVectors(e.a,Si),oi.subVectors(e.b,Si),ai.subVectors(e.c,Si),vn.subVectors(oi,ri),Mn.subVectors(ai,oi),Vn.subVectors(ri,ai);let t=[0,-vn.z,vn.y,0,-Mn.z,Mn.y,0,-Vn.z,Vn.y,vn.z,0,-vn.x,Mn.z,0,-Mn.x,Vn.z,0,-Vn.x,-vn.y,vn.x,0,-Mn.y,Mn.x,0,-Vn.y,Vn.x,0];return!kr(t,ri,oi,ai,fs)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,ri,oi,ai,fs))?!1:(ds.crossVectors(vn,Mn),t=[ds.x,ds.y,ds.z],kr(t,ri,oi,ai,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rn=[new y,new y,new y,new y,new y,new y,new y,new y],Yt=new y,us=new qe,ri=new y,oi=new y,ai=new y,vn=new y,Mn=new y,Vn=new y,Si=new y,fs=new y,ds=new y,Gn=new y;function kr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gn.fromArray(s,r);let a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var at=new y,ps=new le,Hc=1e6,Dt=class extends An{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vo,this.updateRanges=[],this.gpuType=Ho,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Gs=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hs=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pe=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wc=new qe,Ti=new y,Vr=new y,Vt=class{constructor(e=new y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ti.subVectors(e,this.center);let t=Ti.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ti,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ti.copy(e.center).add(Vr)),this.expandByPoint(Ti.copy(e.center).sub(Vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xc=1e6,Ot=new Je,Gr=new lt,li=new y,Lt=new qe,wi=new qe,ht=new y,Be=class s extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?Hs:Gs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Pe(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Lt.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(e){let n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Lt.min,wi.min),Lt.expandByPoint(ht),ht.addVectors(Lt.max,wi.max),Lt.expandByPoint(ht)):(Lt.expandByPoint(wi.min),Lt.expandByPoint(wi.max))}Lt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ht.fromBufferAttribute(a,c),l&&(li.fromBufferAttribute(e,c),ht.add(li)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new y,l[T]=new y;let c=new y,h=new y,f=new y,u=new le,d=new le,p=new le,g=new y,v=new y;function x(T,A,w){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,w),u.fromBufferAttribute(r,T),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,w),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(R),v.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(R),a[T].add(g),a[A].add(g),a[w].add(g),l[T].add(v),l[A].add(v),l[w].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let T=0,A=M.length;T<A;++T){let w=M[T],R=w.start,E=w.count;for(let V=R,D=R+E;V<D;V+=3)x(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let _=new y,m=new y,b=new y,C=new y;function S(T){b.fromBufferAttribute(i,T),C.copy(b);let A=a[T];_.copy(A),_.sub(b.multiplyScalar(b.dot(A))).normalize(),m.crossVectors(C,A);let R=m.dot(l[T])<0?-1:1;o.setXYZW(T,_.x,_.y,_.z,R)}for(let T=0,A=M.length;T<A;++T){let w=M[T],R=w.start,E=w.count;for(let V=R,D=R+E;V<D;V+=3)S(e.getX(V+0)),S(e.getX(V+1)),S(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new y,r=new y,o=new y,a=new y,l=new y,c=new y,h=new y,f=new y;if(e)for(let u=0,d=e.count;u<d;u+=3){let p=e.getX(u+0),g=e.getX(u+1),v=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let g=0,v=l.length;g<v;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let x=0;x<h;x++)u[p++]=c[d++]}return new Dt(u,h,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qc=1e6,Yn=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=jr,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(n.blending=this.blending),this.side!==Bs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==no&&(n.blendDst=this.blendDst),this.blendEquation!==eo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var on=new y,Hr=new y,ms=new y,bn=new y,Wr=new y,gs=new y,Xr=new y,nt=class{constructor(e=new y,t=new y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Hr.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Hr);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ms),a=bn.dot(this.direction),l=-bn.dot(ms),c=bn.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let g=1/h;f*=g,u*=g,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Hr).addScaledVector(ms,u),d}intersectSphere(e,t){on.subVectors(e.center,this.origin);let n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){Wr.subVectors(t,e),gs.subVectors(n,e),Xr.crossVectors(Wr,gs);let o=this.direction.dot(Xr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,e);let l=a*this.direction.dot(gs.crossVectors(bn,gs));if(l<0)return null;let c=a*this.direction.dot(Wr.cross(bn));if(c<0||l+c>o)return null;let h=-a*bn.dot(Xr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ea=new Je,Hn=new nt,xs=new Vt,Ca=new y,_s=new y,ys=new y,vs=new y,qr=new y,Ms=new y,Ra=new y,bs=new y,ge=class extends lt{constructor(e=new Be,t=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ms.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(qr.fromBufferAttribute(f,e),o?Ms.addScaledVector(qr,h):Ms.addScaledVector(qr.sub(t),h))}t.add(Ms)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(xs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(xs,Ca)===null||Hn.origin.distanceToSquared(Ca)>(e.far-e.near)**2))&&(Ea.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(Ea),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let v=u[p],x=o[v.materialIndex],M=Math.max(v.start,d.start),_=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let m=M,b=_;m<b;m+=3){let C=a.getX(m),S=a.getX(m+1),T=a.getX(m+2);i=Ss(this,x,e,n,c,h,f,C,S,T),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let v=p,x=g;v<x;v+=3){let M=a.getX(v),_=a.getX(v+1),m=a.getX(v+2);i=Ss(this,o,e,n,c,h,f,M,_,m),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let v=u[p],x=o[v.materialIndex],M=Math.max(v.start,d.start),_=Math.min(l.count,Math.min(v.start+v.count,d.start+d.count));for(let m=M,b=_;m<b;m+=3){let C=m,S=m+1,T=m+2;i=Ss(this,x,e,n,c,h,f,C,S,T),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let v=p,x=g;v<x;v+=3){let M=v,_=v+1,m=v+2;i=Ss(this,o,e,n,c,h,f,M,_,m),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};function Yc(s,e,t,n,i,r,o,a){let l;if(e.side===Ka?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Bs,a),l===null)return null;bs.copy(a),bs.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:s}}function Ss(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,_s),s.getVertexPosition(l,ys),s.getVertexPosition(c,vs);let h=Yc(s,e,t,n,_s,ys,vs,Ra);if(h){let f=new y;Tn.getBarycoord(Ra,_s,ys,vs,f),i&&(h.uv=Tn.getInterpolatedAttribute(i,a,l,c,f,new le)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,f,new le)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,f,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new y,materialIndex:0};Tn.getNormal(_s,ys,vs,u.normal),h.face=u,h.barycoord=f}return h}var Ws=class extends En{constructor(e=null,t=1,n=1,i,r,o,a,l,c=uo,h=uo,f,u){super(null,o,a,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=class extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ci=new Je,Pa=new Je,Ts=[],Ia=new qe,$c=new Je,Ai=new ge,Ei=new Vt,hn=class extends ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ki(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$c)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qe),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),Ia.copy(e.boundingBox).applyMatrix4(ci),this.boundingBox.union(Ia)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),Ei.copy(e.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(Ei)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ai.geometry=this.geometry,Ai.material=this.material,Ai.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ei.copy(this.boundingSphere),Ei.applyMatrix4(n),e.ray.intersectsSphere(Ei)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ci),Pa.multiplyMatrices(n,ci),Ai.matrixWorld=Pa,Ai.raycast(e,Ts);for(let o=0,a=Ts.length;o<a;o++){let l=Ts[o];l.instanceId=r,l.object=this,t.push(l)}Ts.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ki(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(i*this.count),i,this.count,rl,Ho));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Yr=new y,Zc=new y,Jc=new De,an=class{constructor(e=new y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Yr.subVectors(n,t).cross(Zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Yr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jc.getNormalMatrix(e),i=this.coplanarPoint(Yr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wn=new Vt,Kc=new le(.5,.5),ws=new y,Xs=class{constructor(e=new an,t=new an,n=new an,i=new an,r=new an,o=new an){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],g=r[9],v=r[10],x=r[11],M=r[12],_=r[13],m=r[14],b=r[15];if(i[0].setComponents(c-o,d-h,x-p,b-M).normalize(),i[1].setComponents(c+o,d+h,x+p,b+M).normalize(),i[2].setComponents(c+a,d+f,x+g,b+_).normalize(),i[3].setComponents(c-a,d-f,x-g,b-_).normalize(),n)i[4].setComponents(l,u,v,m).normalize(),i[5].setComponents(c-l,d-u,x-v,b-m).normalize();else if(i[4].setComponents(c-l,d-u,x-v,b-m).normalize(),t===wn)i[5].setComponents(c+l,d+u,x+v,b+m).normalize();else if(t===Bi)i[5].setComponents(l,u,v,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){Wn.center.set(0,0,0);let t=Kc.distanceTo(e.center);return Wn.radius=.7071067811865476+t,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ws.x=i.normal.x>0?e.max.x:e.min.x,ws.y=i.normal.y>0?e.max.y:e.min.y,ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bt=class extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},qs=new y,Ys=new y,La=new Je,Ci=new nt,As=new Vt,$r=new y,Da=new y,St=class extends lt{constructor(e=new Be,t=new bt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)qs.fromBufferAttribute(t,i-1),Ys.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qs.distanceTo(Ys);e.setAttribute("lineDistance",new Pe(n,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=r,e.ray.intersectsSphere(As)===!1)return;La.copy(i).invert(),Ci.copy(e.ray).applyMatrix4(La);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,v=p-1;g<v;g+=c){let x=h.getX(g),M=h.getX(g+1),_=Es(this,e,Ci,l,x,M,g);_&&t.push(_)}if(this.isLineLoop){let g=h.getX(p-1),v=h.getX(d),x=Es(this,e,Ci,l,g,v,p-1);x&&t.push(x)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p-1;g<v;g+=c){let x=Es(this,e,Ci,l,g,g+1,g);x&&t.push(x)}if(this.isLineLoop){let g=Es(this,e,Ci,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Es(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(qs.fromBufferAttribute(a,i),Ys.fromBufferAttribute(a,r),t.distanceSqToSegment(qs,Ys,$r,Da)>n)return;$r.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo($r);if(!(c<e.near||c>e.far))return{distance:c,point:Da.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var di=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Na=new Je,bo=new nt,Cs=new Vt,Rs=new y,Vi=class extends lt{constructor(e=new Be,t=new di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;Na.copy(i).invert(),bo.copy(e.ray).applyMatrix4(Na);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,g=d;p<g;p++){let v=c.getX(p);Rs.fromBufferAttribute(f,v),Ua(Rs,v,l,i,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,g=d;p<g;p++)Rs.fromBufferAttribute(f,p),Ua(Rs,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ua(s,e,t,n,i,r,o){let a=bo.distanceSqToPoint(s);if(a<t){let l=new y;bo.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ie=class extends En{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ve=class s extends Be{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(f,2));function p(g,v,x,M,_,m,b,C,S,T,A){let w=m/S,R=b/T,E=m/2,V=b/2,D=C/2,I=S+1,B=T+1,q=0,N=0,W=new y;for(let L=0;L<B;L++){let P=L*R-V;for(let F=0;F<I;F++){let k=F*w-E;W[g]=k*M,W[v]=P*_,W[x]=D,c.push(W.x,W.y,W.z),W[g]=0,W[v]=0,W[x]=C>0?1:-1,h.push(W.x,W.y,W.z),f.push(F/S),f.push(1-L/T),q+=1}}for(let L=0;L<T;L++)for(let P=0;P<S;P++){let F=u+P+I*L,k=u+P+I*(L+1),z=u+(P+1)+I*(L+1),G=u+(P+1)+I*L;l.push(F,k,G),l.push(k,z,G),N+=6}a.addGroup(d,N,A),d+=N,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Gi=class s extends Be{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new y,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("normal",new Pe(a,3)),this.setAttribute("uv",new Pe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ke=class s extends Be{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,g=[],v=n/2,x=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(d,2));function M(){let m=new y,b=new y,C=0,S=(t-e)/n;for(let T=0;T<=r;T++){let A=[],w=T/r,R=w*(t-e)+e;for(let E=0;E<=i;E++){let V=E/i,D=V*l+a,I=Math.sin(D),B=Math.cos(D);b.x=R*I,b.y=-w*n+v,b.z=R*B,f.push(b.x,b.y,b.z),m.set(I,S,B).normalize(),u.push(m.x,m.y,m.z),d.push(V,1-w),A.push(p++)}g.push(A)}for(let T=0;T<i;T++)for(let A=0;A<r;A++){let w=g[A][T],R=g[A+1][T],E=g[A+1][T+1],V=g[A][T+1];(e>0||A!==0)&&(h.push(w,R,V),C+=3),(t>0||A!==r-1)&&(h.push(R,E,V),C+=3)}c.addGroup(x,C,0),x+=C}function _(m){let b=p,C=new le,S=new y,T=0,A=m===!0?e:t,w=m===!0?1:-1;for(let E=1;E<=i;E++)f.push(0,v*w,0),u.push(0,w,0),d.push(.5,.5),p++;let R=p;for(let E=0;E<=i;E++){let D=E/i*l+a,I=Math.cos(D),B=Math.sin(D);S.x=A*B,S.y=v*w,S.z=A*I,f.push(S.x,S.y,S.z),u.push(0,w,0),C.x=I*.5+.5,C.y=B*.5*w+.5,d.push(C.x,C.y),p++}for(let E=0;E<i;E++){let V=b+E,D=R+E;m===!0?h.push(D,D+1,V):h.push(D+1,D,V),T+=3}c.addGroup(x,T,m===!0?1:2),x+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},un=class s extends ke{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Nt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new le:new y);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new y,i=[],r=[],o=[],a=new y,l=new Je;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new y)}r[0]=new y,o[0]=new y;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Fe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Fe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},pi=class extends Nt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$s=class extends pi{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function qo(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Fa=new y,Ba=new y,Zr=new qo,Jr=new qo,Kr=new qo,Cn=class extends Nt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new y){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Ba.subVectors(i[0],i[1]).add(i[0]),c=Ba);let f=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Fa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),Zr.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,g,v),Jr.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,g,v),Kr.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(Zr.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Jr.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Kr.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Zr.calc(l),Jr.calc(l),Kr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Oa(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Qc(s,e){let t=1-s;return t*t*e}function jc(s,e){return 2*(1-s)*s*e}function eh(s,e){return s*s*e}function Di(s,e,t,n){return Qc(s,e)+jc(s,t)+eh(s,n)}function th(s,e){let t=1-s;return t*t*t*e}function nh(s,e){let t=1-s;return 3*t*t*s*e}function ih(s,e){return 3*(1-s)*s*s*e}function sh(s,e){return s*s*s*e}function Ni(s,e,t,n,i){return th(s,e)+nh(s,t)+ih(s,n)+sh(s,i)}var Hi=class extends Nt{constructor(e=new le,t=new le,n=new le,i=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new le){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ni(e,i.x,r.x,o.x,a.x),Ni(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zs=class extends Nt{constructor(e=new y,t=new y,n=new y,i=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new y){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ni(e,i.x,r.x,o.x,a.x),Ni(e,i.y,r.y,o.y,a.y),Ni(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wi=class extends Nt{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Js=class extends Nt{constructor(e=new y,t=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xi=class extends Nt{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Di(e,i.x,r.x,o.x),Di(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qi=class extends Nt{constructor(e=new y,t=new y,n=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new y){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Di(e,i.x,r.x,o.x),Di(e,i.y,r.y,o.y),Di(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yi=class extends Nt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Oa(a,l.x,c.x,h.x,f.x),Oa(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new le().fromArray(i))}return this}},Ks=Object.freeze({__proto__:null,ArcCurve:$s,CatmullRomCurve3:Cn,CubicBezierCurve:Hi,CubicBezierCurve3:Zs,EllipseCurve:pi,LineCurve:Wi,LineCurve3:Js,QuadraticBezierCurve:Xi,QuadraticBezierCurve3:qi,SplineCurve:Yi}),Qs=class extends Nt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ks[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ks[i.type]().fromJSON(i))}return this}},$n=class extends Qs{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wi(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Xi(this.currentPoint.clone(),new le(e,t),new le(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Hi(this.currentPoint.clone(),new le(e,t),new le(n,i),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Yi(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new pi(e,t,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ut=class extends $n{constructor(e){super(e),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new $n().fromJSON(i))}return this}};function rh(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=cl(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=hh(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,f=l;for(let u=t;u<i;u+=t){let d=s[u],p=s[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return $i(r,o,t,a,l,c,0),o}function cl(s,e,t,n,i){let r;if(i===Mh(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=za(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=za(o/n|0,s[o],s[o+1],r);return r&&mi(r,r.next)&&(Ji(r),r=r.next),r}function Zn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(mi(t,t.next)||$e(t.prev,t,t.next)===0)){if(Ji(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $i(s,e,t,n,i,r,o){if(!s)return;!o&&r&&mh(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?ah(s,n,i,r):oh(s)){e.push(l.i,s.i,c.i),Ji(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=lh(Zn(s),e),$i(s,e,t,n,i,r,2)):o===2&&ch(s,e,t,n,i,r):$i(Zn(s),e,t,n,i,r,1);break}}}function oh(s){let e=s.prev,t=s,n=s.next;if($e(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),f=Math.min(a,l,c),u=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&Pi(i,a,r,l,o,c,p.x,p.y)&&$e(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ah(s,e,t,n){let i=s.prev,r=s,o=s.next;if($e(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,f=r.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),g=Math.max(a,l,c),v=Math.max(h,f,u),x=So(d,p,e,t,n),M=So(g,v,e,t,n),_=s.prevZ,m=s.nextZ;for(;_&&_.z>=x&&m&&m.z<=M;){if(_.x>=d&&_.x<=g&&_.y>=p&&_.y<=v&&_!==i&&_!==o&&Pi(a,h,l,f,c,u,_.x,_.y)&&$e(_.prev,_,_.next)>=0||(_=_.prevZ,m.x>=d&&m.x<=g&&m.y>=p&&m.y<=v&&m!==i&&m!==o&&Pi(a,h,l,f,c,u,m.x,m.y)&&$e(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;_&&_.z>=x;){if(_.x>=d&&_.x<=g&&_.y>=p&&_.y<=v&&_!==i&&_!==o&&Pi(a,h,l,f,c,u,_.x,_.y)&&$e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;m&&m.z<=M;){if(m.x>=d&&m.x<=g&&m.y>=p&&m.y<=v&&m!==i&&m!==o&&Pi(a,h,l,f,c,u,m.x,m.y)&&$e(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function lh(s,e){let t=s;do{let n=t.prev,i=t.next.next;!mi(n,i)&&ul(n,t,t.next,i)&&Zi(n,i)&&Zi(i,n)&&(e.push(n.i,t.i,i.i),Ji(t),Ji(t.next),t=s=i),t=t.next}while(t!==s);return Zn(t)}function ch(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_h(o,a)){let l=fl(o,a);o=Zn(o,o.next),l=Zn(l,l.next),$i(o,e,t,n,i,r,0),$i(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function hh(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=cl(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(xh(c))}i.sort(uh);for(let r=0;r<i.length;r++)t=fh(i[r],t);return t}function uh(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function fh(s,e){let t=dh(s,e);if(!t)return e;let n=fl(t,s);return Zn(n,n.next),Zn(t,t.next)}function dh(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(mi(s,t))return t;do{if(mi(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hl(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let f=Math.abs(i-t.y)/(n-t.x);Zi(t,s)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&ph(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function ph(s,e){return $e(s.prev,s,e.prev)<0&&$e(e.next,s,s.next)<0}function mh(s,e,t,n){let i=s;do i.z===0&&(i.z=So(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,gh(i)}function gh(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function So(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function xh(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function hl(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Pi(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&hl(s,e,t,n,i,r,o,a)}function _h(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!yh(s,e)&&(Zi(s,e)&&Zi(e,s)&&vh(s,e)&&($e(s.prev,s,e.prev)||$e(s,e.prev,e))||mi(s,e)&&$e(s.prev,s,s.next)>0&&$e(e.prev,e,e.next)>0)}function $e(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function mi(s,e){return s.x===e.x&&s.y===e.y}function ul(s,e,t,n){let i=Is($e(s,e,t)),r=Is($e(s,e,n)),o=Is($e(t,n,s)),a=Is($e(t,n,e));return!!(i!==r&&o!==a||i===0&&Ps(s,t,e)||r===0&&Ps(s,n,e)||o===0&&Ps(t,s,n)||a===0&&Ps(t,e,n))}function Ps(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Is(s){return s>0?1:s<0?-1:0}function yh(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ul(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Zi(s,e){return $e(s.prev,s,s.next)<0?$e(s,e,s.next)>=0&&$e(s,s.prev,e)>=0:$e(s,e,s.prev)<0||$e(s,s.next,e)<0}function vh(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function fl(s,e){let t=To(s.i,s.x,s.y),n=To(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function za(s,e,t,n){let i=To(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ji(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function To(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mh(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var wo=class{static triangulate(e,t,n=2){return rh(e,t,n)}},Kt=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];ka(e),Va(n,e);let o=e.length;t.forEach(ka);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Va(n,t[l]);let a=wo.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function ka(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Va(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var $t=class s extends Be{constructor(e=new ut([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Pe(i,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:bh,_,m=!1,b,C,S,T;if(x){_=x.getSpacedPoints(h),m=!0,u=!1;let O=x.isCatmullRomCurve3?x.closed:!1;b=x.computeFrenetFrames(h,O),C=new y,S=new y,T=new y}u||(v=0,d=0,p=0,g=0);let A=a.extractPoints(c),w=A.shape,R=A.holes;if(!Kt.isClockWise(w)){w=w.reverse();for(let O=0,Q=R.length;O<Q;O++){let ee=R[O];Kt.isClockWise(ee)&&(R[O]=ee.reverse())}}function V(O){let ee=10000000000000001e-36,se=O[0];for(let re=1;re<=O.length;re++){let ye=re%O.length,fe=O[ye],Te=fe.x-se.x,xe=fe.y-se.y,H=Te*Te+xe*xe,U=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(se.x),Math.abs(se.y)),K=ee*U*U;if(H<=K){O.splice(ye,1),re--;continue}se=fe}}V(w),R.forEach(V);let D=R.length,I=w;for(let O=0;O<D;O++){let Q=R[O];w=w.concat(Q)}function B(O,Q,ee){return Q||Xe("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(Q,ee)}let q=w.length;function N(O,Q,ee){let se,re,ye,fe=O.x-Q.x,Te=O.y-Q.y,xe=ee.x-O.x,H=ee.y-O.y,U=fe*fe+Te*Te,K=fe*H-Te*xe;if(Math.abs(K)>Number.EPSILON){let ae=Math.sqrt(U),$=Math.sqrt(xe*xe+H*H),he=Q.x-Te/ae,Ce=Q.y+fe/ae,pe=ee.x-H/$,Le=ee.y+xe/$,Ue=((pe-he)*H-(Le-Ce)*xe)/(fe*H-Te*xe);se=he+fe*Ue-O.x,re=Ce+Te*Ue-O.y;let we=se*se+re*re;if(we<=2)return new le(se,re);ye=Math.sqrt(we/2)}else{let ae=!1;fe>Number.EPSILON?xe>Number.EPSILON&&(ae=!0):fe<-Number.EPSILON?xe<-Number.EPSILON&&(ae=!0):Math.sign(Te)===Math.sign(H)&&(ae=!0),ae?(se=-Te,re=fe,ye=Math.sqrt(U)):(se=fe,re=Te,ye=Math.sqrt(U/2))}return new le(se/ye,re/ye)}let W=[];for(let O=0,Q=I.length,ee=Q-1,se=O+1;O<Q;O++,ee++,se++)ee===Q&&(ee=0),se===Q&&(se=0),W[O]=N(I[O],I[ee],I[se]);let L=[],P,F=W.concat();for(let O=0,Q=D;O<Q;O++){let ee=R[O];P=[];for(let se=0,re=ee.length,ye=re-1,fe=se+1;se<re;se++,ye++,fe++)ye===re&&(ye=0),fe===re&&(fe=0),P[se]=N(ee[se],ee[ye],ee[fe]);L.push(P),F=F.concat(P)}let k;if(v===0)k=Kt.triangulateShape(I,R);else{let O=[],Q=[];for(let ee=0;ee<v;ee++){let se=ee/v,re=d*Math.cos(se*Math.PI/2),ye=p*Math.sin(se*Math.PI/2)+g;for(let fe=0,Te=I.length;fe<Te;fe++){let xe=B(I[fe],W[fe],ye);J(xe.x,xe.y,-re),se===0&&O.push(xe)}for(let fe=0,Te=D;fe<Te;fe++){let xe=R[fe];P=L[fe];let H=[];for(let U=0,K=xe.length;U<K;U++){let ae=B(xe[U],P[U],ye);J(ae.x,ae.y,-re),se===0&&H.push(ae)}se===0&&Q.push(H)}}k=Kt.triangulateShape(O,Q)}let z=k.length,G=p+g;for(let O=0;O<q;O++){let Q=u?B(w[O],F[O],G):w[O];m?(S.copy(b.normals[0]).multiplyScalar(Q.x),C.copy(b.binormals[0]).multiplyScalar(Q.y),T.copy(_[0]).add(S).add(C),J(T.x,T.y,T.z)):J(Q.x,Q.y,0)}for(let O=1;O<=h;O++)for(let Q=0;Q<q;Q++){let ee=u?B(w[Q],F[Q],G):w[Q];m?(S.copy(b.normals[O]).multiplyScalar(ee.x),C.copy(b.binormals[O]).multiplyScalar(ee.y),T.copy(_[O]).add(S).add(C),J(T.x,T.y,T.z)):J(ee.x,ee.y,f/h*O)}for(let O=v-1;O>=0;O--){let Q=O/v,ee=d*Math.cos(Q*Math.PI/2),se=p*Math.sin(Q*Math.PI/2)+g;for(let re=0,ye=I.length;re<ye;re++){let fe=B(I[re],W[re],se);J(fe.x,fe.y,f+ee)}for(let re=0,ye=R.length;re<ye;re++){let fe=R[re];P=L[re];for(let Te=0,xe=fe.length;Te<xe;Te++){let H=B(fe[Te],P[Te],se);m?J(H.x,H.y+_[h-1].y,_[h-1].x+ee):J(H.x,H.y,f+ee)}}}Y(),ne();function Y(){let O=i.length/3;if(u){let Q=0,ee=q*Q;for(let se=0;se<z;se++){let re=k[se];ue(re[2]+ee,re[1]+ee,re[0]+ee)}Q=h+v*2,ee=q*Q;for(let se=0;se<z;se++){let re=k[se];ue(re[0]+ee,re[1]+ee,re[2]+ee)}}else{for(let Q=0;Q<z;Q++){let ee=k[Q];ue(ee[2],ee[1],ee[0])}for(let Q=0;Q<z;Q++){let ee=k[Q];ue(ee[0]+q*h,ee[1]+q*h,ee[2]+q*h)}}n.addGroup(O,i.length/3-O,0)}function ne(){let O=i.length/3,Q=0;Z(I,Q),Q+=I.length;for(let ee=0,se=R.length;ee<se;ee++){let re=R[ee];Z(re,Q),Q+=re.length}n.addGroup(O,i.length/3-O,1)}function Z(O,Q){let ee=O.length;for(;--ee>=0;){let se=ee,re=ee-1;re<0&&(re=O.length-1);for(let ye=0,fe=h+v*2;ye<fe;ye++){let Te=q*ye,xe=q*(ye+1),H=Q+se+Te,U=Q+re+Te,K=Q+re+xe,ae=Q+se+xe;de(H,U,K,ae)}}}function J(O,Q,ee){l.push(O),l.push(Q),l.push(ee)}function ue(O,Q,ee){te(O),te(Q),te(ee);let se=i.length/3,re=M.generateTopUV(n,i,se-3,se-2,se-1);ce(re[0]),ce(re[1]),ce(re[2])}function de(O,Q,ee,se){te(O),te(Q),te(se),te(Q),te(ee),te(se);let re=i.length/3,ye=M.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);ce(ye[0]),ce(ye[1]),ce(ye[3]),ce(ye[1]),ce(ye[2]),ce(ye[3])}function te(O){i.push(l[O*3+0]),i.push(l[O*3+1]),i.push(l[O*3+2])}function ce(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sh(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ks[i.type]().fromJSON(i)),new s(n,e.options)}},bh={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new le(r,o),new le(a,l),new le(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[i*3],d=e[i*3+1],p=e[i*3+2],g=e[r*3],v=e[r*3+1],x=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new le(o,1-l),new le(c,1-f),new le(u,1-p),new le(g,1-x)]:[new le(a,1-l),new le(h,1-f),new le(d,1-p),new le(v,1-x)]}};function Sh(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jn=class s extends Be{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Fe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new y,u=new le,d=new y,p=new y,g=new y,v=0,x=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:v=e[M+1].x-e[M].x,x=e[M+1].y-e[M].y,d.x=x*1,d.y=-v,d.z=x*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:v=e[M+1].x-e[M].x,x=e[M+1].y-e[M].y,d.x=x*1,d.y=-v,d.z=x*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(p)}for(let M=0;M<=t;M++){let _=n+M*h*i,m=Math.sin(_),b=Math.cos(_);for(let C=0;C<=e.length-1;C++){f.x=e[C].x*m,f.y=e[C].y,f.z=e[C].x*b,o.push(f.x,f.y,f.z),u.x=M/t,u.y=C/(e.length-1),a.push(u.x,u.y);let S=l[3*C+0]*m,T=l[3*C+1],A=l[3*C+0]*b;c.push(S,T,A)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){let m=_+M*e.length,b=m,C=m+e.length,S=m+e.length+1,T=m+1;r.push(b,C,T),r.push(S,T,C)}this.setIndex(r),this.setAttribute("position",new Pe(o,3)),this.setAttribute("uv",new Pe(a,2)),this.setAttribute("normal",new Pe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ne=class s extends Be{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,u=t/l,d=[],p=[],g=[],v=[];for(let x=0;x<h;x++){let M=x*u-o;for(let _=0;_<c;_++){let m=_*f-r;p.push(m,-M,0),g.push(0,0,1),v.push(_/a),v.push(1-x/l)}}for(let x=0;x<l;x++)for(let M=0;M<a;M++){let _=M+c*x,m=M+c*(x+1),b=M+1+c*(x+1),C=M+1+c*x;d.push(_,m,C),d.push(m,b,C)}this.setIndex(d),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},fn=class s extends Be{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],f=e,u=(t-e)/i,d=new y,p=new le;for(let g=0;g<=i;g++){for(let v=0;v<=n;v++){let x=r+v/n*o;d.x=f*Math.cos(x),d.y=f*Math.sin(x),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}f+=u}for(let g=0;g<i;g++){let v=g*(n+1);for(let x=0;x<n;x++){let M=x+v,_=M,m=M+n+1,b=M+n+2,C=M+1;a.push(_,m,C),a.push(m,b,C)}}this.setIndex(a),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(c,3)),this.setAttribute("uv",new Pe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Zt=class s extends Be{constructor(e=new ut([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Pe(i,3)),this.setAttribute("normal",new Pe(r,3)),this.setAttribute("uv",new Pe(o,2));function c(h){let f=i.length/3,u=h.extractPoints(t),d=u.shape,p=u.holes;Kt.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,x=p.length;v<x;v++){let M=p[v];Kt.isClockWise(M)===!0&&(p[v]=M.reverse())}let g=Kt.triangulateShape(d,p);for(let v=0,x=p.length;v<x;v++){let M=p[v];d=d.concat(M)}for(let v=0,x=d.length;v<x;v++){let M=d[v];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let v=0,x=g.length;v<x;v++){let M=g[v],_=M[0]+f,m=M[1]+f,b=M[2]+f;n.push(_,m,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Th(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function Th(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Ke=class s extends Be{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new y,u=new y,d=[],p=[],g=[],v=[];for(let x=0;x<=n;x++){let M=[],_=x/n,m=o+_*a,b=e*Math.cos(m),C=Math.sqrt(e*e-b*b),S=0;x===0&&o===0?S=.5/t:x===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){let A=T/t,w=i+A*r;f.x=-C*Math.cos(w),f.y=b,f.z=C*Math.sin(w),p.push(f.x,f.y,f.z),u.copy(f).normalize(),g.push(u.x,u.y,u.z),v.push(A+S,1-_),M.push(c++)}h.push(M)}for(let x=0;x<n;x++)for(let M=0;M<t;M++){let _=h[x][M+1],m=h[x][M],b=h[x+1][M],C=h[x+1][M+1];(x!==0||o>0)&&d.push(_,m,C),(x!==n-1||l<Math.PI)&&d.push(m,b,C)}this.setIndex(d),this.setAttribute("position",new Pe(p,3)),this.setAttribute("normal",new Pe(g,3)),this.setAttribute("uv",new Pe(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ut=class s extends Be{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],f=[],u=new y,d=new y,p=new y;for(let g=0;g<=n;g++){let v=o+g/n*a;for(let x=0;x<=i;x++){let M=x/i*r;d.x=(e+t*Math.cos(v))*Math.cos(M),d.y=(e+t*Math.cos(v))*Math.sin(M),d.z=t*Math.sin(v),c.push(d.x,d.y,d.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(x/i),f.push(g/n)}}for(let g=1;g<=n;g++)for(let v=1;v<=i;v++){let x=(i+1)*g+v-1,M=(i+1)*(g-1)+v-1,_=(i+1)*(g-1)+v,m=(i+1)*g+v;l.push(x,M,m),l.push(M,_,m)}this.setIndex(l),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var gi=class s extends Be{constructor(e=new qi(new y(-1,-1,0),new y(-1,1,0),new y(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new y,l=new y,c=new le,h=new y,f=[],u=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Pe(f,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(d,2));function g(){for(let _=0;_<t;_++)v(_);v(r===!1?t:0),M(),x()}function v(_){h=e.getPointAt(_/t,h);let m=o.normals[_],b=o.binormals[_];for(let C=0;C<=i;C++){let S=C/i*Math.PI*2,T=Math.sin(S),A=-Math.cos(S);l.x=A*m.x+T*b.x,l.y=A*m.y+T*b.y,l.z=A*m.z+T*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function x(){for(let _=1;_<=t;_++)for(let m=1;m<=i;m++){let b=(i+1)*(_-1)+(m-1),C=(i+1)*_+(m-1),S=(i+1)*_+m,T=(i+1)*(_-1)+m;p.push(b,C,T),p.push(C,S,T)}}function M(){for(let _=0;_<=t;_++)for(let m=0;m<=i;m++)c.x=_/t,c.y=m/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Ks[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function dl(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Ga(i))i.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Ga(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Tt(s){let e={};for(let t=0;t<s.length;t++){let n=dl(s[t]);for(let i in n)e[i]=n[i]}return e}function Ga(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}var Se=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ki=class extends bt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ls(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var Rn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},js=class extends Rn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:po,endingEnd:po}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case mo:r=e,a=2*t-n;break;case go:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mo:o=e,l=2*n-t;break;case go:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),g=p*p,v=g*p,x=-u*v+2*u*g-u*p,M=(1+u)*v+(-1.5-2*u)*g+(-.5+u)*p+1,_=(-1-d)*v+(1.5+d)*g+.5*p,m=d*v-d*g;for(let b=0;b!==a;++b)r[b]=x*o[h+b]+M*o[c+b]+_*o[l+b]+m*o[f+b];return r}},er=class extends Rn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},tr=class extends Rn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},nr=class extends Rn{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-t)/(i-t),g=1-p;for(let v=0;v!==a;++v)r[v]=o[c+v]*g+o[l+v]*p;return r}let u=a*2,d=e-1;for(let p=0;p!==a;++p){let g=o[c+p],v=o[l+p],x=d*u+p*2,M=f[x],_=f[x+1],m=e*u+p*2,b=h[m],C=h[m+1],S=(n-t)/(i-t),T,A,w,R,E;for(let V=0;V<8;V++){T=S*S,A=T*S,w=1-S,R=w*w,E=R*w;let I=E*t+3*R*S*M+3*w*T*b+A*i-n;if(Math.abs(I)<1e-10)break;let B=3*R*(M-t)+6*w*S*(b-M)+3*T*(i-b);if(Math.abs(B)<1e-10)break;S=S-I/B,S=Math.max(0,Math.min(1,S))}r[p]=E*g+3*R*S*_+3*w*T*C+A*v}return r}},Ft=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ls(t,this.TimeBufferType),this.values=Ls(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ls(e.times,Array),values:Ls(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new er(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new js(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fi:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case Us:t=this.InterpolantFactoryMethodSmooth;break;case fo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fi;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return Us;case this.InterpolantFactoryMethodBezier:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Xe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&gc(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Us,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let g=t[f+p];if(g!==t[u+p]||g!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ft.prototype.ValueTypeName="";Ft.prototype.TimeBufferType=Float32Array;Ft.prototype.ValueBufferType=Float32Array;Ft.prototype.DefaultInterpolation=Os;var Pn=class extends Ft{constructor(e,t,n){super(e,t,n)}};Pn.prototype.ValueTypeName="bool";Pn.prototype.ValueBufferType=Array;Pn.prototype.DefaultInterpolation=Fi;Pn.prototype.InterpolantFactoryMethodLinear=void 0;Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var ir=class extends Ft{constructor(e,t,n,i){super(e,t,n,i)}};ir.prototype.ValueTypeName="color";var sr=class extends Ft{constructor(e,t,n,i){super(e,t,n,i)}};sr.prototype.ValueTypeName="number";var rr=class extends Rn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Re.slerpFlat(r,0,o,c-a,o,c,l);return r}},Qi=class extends Ft{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new rr(this.times,this.values,this.getValueSize(),e)}};Qi.prototype.ValueTypeName="quaternion";Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends Ft{constructor(e,t,n){super(e,t,n)}};In.prototype.ValueTypeName="string";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=Fi;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends Ft{constructor(e,t,n,i){super(e,t,n,i)}};or.prototype.ValueTypeName="vector";var ar=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},pl=new ar,lr=class{constructor(e){this.manager=e!==void 0?e:pl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};lr.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Qr=new Je,Ha=new y,Wa=new y,Ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Go,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new qn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ha.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ha),Wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wa),t.updateMatrixWorld(),Qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Bi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ds=new y,Ns=new Re,Jt=new y,hr=class extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ds,Ns,Jt),Jt.x===1&&Jt.y===1&&Jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Ns,Jt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ds,Ns,Jt),Jt.x===1&&Jt.y===1&&Jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ds,Ns,Jt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sn=new y,Xa=new le,qa=new le,ur=class extends hr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,t){return this.getViewBounds(e,Xa,qa),t.subVectors(qa,Xa)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ii*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Eo=class extends Ao{constructor(){super(new ur(90,1,.5,500)),this.isPointLightShadow=!0}},ji=class extends cr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Eo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var Yo="\\[\\]\\.:\\/",wh=new RegExp("["+Yo+"]","g"),$o="[^"+Yo+"]",Ah="[^"+Yo.replace("\\.","")+"]",Eh=/((?:WC+[\/:])*)/.source.replace("WC",$o),Ch=/(WCOD+)?/.source.replace("WCOD",Ah),Rh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$o),Ph=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$o),Ih=new RegExp("^"+Eh+Ch+Rh+Ph+"$"),Lh=["material","materials","bones","map"],Co=class{constructor(e,t,n){let i=n||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},We=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wh,"")}static parseTrackName(e){let t=Ih.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Lh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=Co;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zd=new Float32Array(1);var Ya=new Je,dn=class{constructor(e,t,n=0,i=1/0){this.ray=new nt(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new zi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ya.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ya),this}intersectObject(e,t=!0,n=[]){return Ro(e,this,n,t),n.sort($a),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ro(e[i],this,n,t);return n.sort($a),n}};function $a(s,e){return s.distance-e.distance}function Ro(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Ro(r[o],e,t,!0)}}var jo=class jo{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};jo.prototype.isMatrix2=!0;var Po=jo;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var Dh=`#ifdef USE_ALPHAHASH
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
}`,Oe={alphahash_fragment:Dh,alphahash_pars_fragment:Nh,alphamap_fragment:Uh,alphamap_pars_fragment:Fh,alphatest_fragment:Bh,alphatest_pars_fragment:Oh,aomap_fragment:zh,aomap_pars_fragment:kh,batching_pars_vertex:Vh,batching_vertex:Gh,begin_vertex:Hh,beginnormal_vertex:Wh,bsdfs:Xh,iridescence_fragment:qh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Jh,clipping_planes_vertex:Kh,color_fragment:Qh,color_pars_fragment:jh,color_pars_vertex:eu,color_vertex:tu,common:nu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:su,displacementmap_pars_vertex:ru,displacementmap_vertex:ou,emissivemap_fragment:au,emissivemap_pars_fragment:lu,colorspace_fragment:cu,colorspace_pars_fragment:hu,envmap_fragment:uu,envmap_common_pars_fragment:fu,envmap_pars_fragment:du,envmap_pars_vertex:pu,envmap_physical_pars_fragment:wu,envmap_vertex:mu,fog_vertex:gu,fog_pars_vertex:xu,fog_fragment:_u,fog_pars_fragment:yu,gradientmap_pars_fragment:vu,lightmap_pars_fragment:Mu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:Su,lights_pars_begin:Tu,lights_toon_fragment:Au,lights_toon_pars_fragment:Eu,lights_phong_fragment:Cu,lights_phong_pars_fragment:Ru,lights_physical_fragment:Pu,lights_physical_pars_fragment:Iu,lights_fragment_begin:Lu,lights_fragment_maps:Du,lights_fragment_end:Nu,lightprobes_pars_fragment:Uu,logdepthbuf_fragment:Fu,logdepthbuf_pars_fragment:Bu,logdepthbuf_pars_vertex:Ou,logdepthbuf_vertex:zu,map_fragment:ku,map_pars_fragment:Vu,map_particle_fragment:Gu,map_particle_pars_fragment:Hu,metalnessmap_fragment:Wu,metalnessmap_pars_fragment:Xu,morphinstance_vertex:qu,morphcolor_vertex:Yu,morphnormal_vertex:$u,morphtarget_pars_vertex:Zu,morphtarget_vertex:Ju,normal_fragment_begin:Ku,normal_fragment_maps:Qu,normal_pars_fragment:ju,normal_pars_vertex:ef,normal_vertex:tf,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:sf,clearcoat_normal_fragment_maps:rf,clearcoat_pars_fragment:of,iridescence_pars_fragment:af,opaque_fragment:lf,packing:cf,premultiplied_alpha_fragment:hf,project_vertex:uf,dithering_fragment:ff,dithering_pars_fragment:df,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:gf,shadowmap_pars_vertex:xf,shadowmap_vertex:_f,shadowmask_pars_fragment:yf,skinbase_vertex:vf,skinning_pars_vertex:Mf,skinning_vertex:bf,skinnormal_vertex:Sf,specularmap_fragment:Tf,specularmap_pars_fragment:wf,tonemapping_fragment:Af,tonemapping_pars_fragment:Ef,transmission_fragment:Cf,transmission_pars_fragment:Rf,uv_pars_fragment:Pf,uv_pars_vertex:If,uv_vertex:Lf,worldpos_vertex:Df,background_vert:Nf,background_frag:Uf,backgroundCube_vert:Ff,backgroundCube_frag:Bf,cube_vert:Of,cube_frag:zf,depth_vert:kf,depth_frag:Vf,distance_vert:Gf,distance_frag:Hf,equirect_vert:Wf,equirect_frag:Xf,linedashed_vert:qf,linedashed_frag:Yf,meshbasic_vert:$f,meshbasic_frag:Zf,meshlambert_vert:Jf,meshlambert_frag:Kf,meshmatcap_vert:Qf,meshmatcap_frag:jf,meshnormal_vert:ed,meshnormal_frag:td,meshphong_vert:nd,meshphong_frag:id,meshphysical_vert:sd,meshphysical_frag:rd,meshtoon_vert:od,meshtoon_frag:ad,points_vert:ld,points_frag:cd,shadow_vert:hd,shadow_frag:ud,sprite_vert:fd,sprite_frag:dd},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new y},probesMax:{value:new y},probesResolution:{value:new y}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},ml={basic:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Tt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Tt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Tt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Tt([me.points,me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Tt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Tt([me.common,me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Tt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Tt([me.sprite,me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Tt([me.common,me.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Tt([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ml.physical={uniforms:Tt([ml.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var pd=new De;pd.set(-1,0,0,0,1,0,0,0,1);var u_={[Do]:"LINEAR_TONE_MAPPING",[No]:"REINHARD_TONE_MAPPING",[Uo]:"CINEON_TONE_MAPPING",[Fo]:"ACES_FILMIC_TONE_MAPPING",[Oo]:"AGX_TONE_MAPPING",[zo]:"NEUTRAL_TONE_MAPPING",[Bo]:"CUSTOM_TONE_MAPPING"};var f_=new Float32Array(16),d_=new Float32Array(9),p_=new Float32Array(4);var m_={[Do]:"Linear",[No]:"Reinhard",[Uo]:"Cineon",[Fo]:"ACESFilmic",[Oo]:"AgX",[zo]:"Neutral",[Bo]:"Custom"};var g_={[Za]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};var x_={[el]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE",[tl]:"ENVMAP_TYPE_CUBE_UV"};var __={[Vo]:"ENVMAP_MODE_REFRACTION"};var y_={[Lo]:"ENVMAP_BLENDING_MULTIPLY",[Qa]:"ENVMAP_BLENDING_MIX",[ja]:"ENVMAP_BLENDING_ADD"};var md=new De;md.set(-1,0,0,0,1,0,0,0,1);var v_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var X={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function Qn(s,e,t,n,i,r=16){r=Math.min(r,n/2,i/2),s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.quadraticCurveTo(e+n,t,e+n,t+r),s.lineTo(e+n,t+i-r),s.quadraticCurveTo(e+n,t+i,e+n-r,t+i),s.lineTo(e+r,t+i),s.quadraticCurveTo(e,t+i,e,t+i-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath()}function Ye(s,e,t,n,i,{top:r="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=s.createLinearGradient(e,t,e,t+i);c.addColorStop(0,r),c.addColorStop(1,o),s.fillStyle=c,Qn(s,e,t,n,i,l),s.fill(),s.strokeStyle=a,s.lineWidth=1.5,s.stroke()}function _t(s,e,t){let n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),s.fillStyle=n,s.fillRect(0,0,e,t),s.save(),s.globalAlpha=.13,s.strokeStyle="#79b3d1",s.lineWidth=1;for(let i=0;i<8;i++)s.beginPath(),s.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),s.stroke();s.restore(),s.fillStyle=X.gold,s.fillRect(32,0,96,4)}function j(s,e,t,n,i=28,r=X.ink,o="600",a){s.font=`${o} ${i}px Arial`,s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Number.isFinite(a)?s.fillText(e,t,n,a):s.fillText(e,t,n)}function pn(s,e,t,n,i,r=X.gold){if(s.save(),s.translate(t,n),s.scale(i/48,i/48),s.lineWidth=2.8,s.lineCap="round",s.lineJoin="round",s.strokeStyle=r,s.fillStyle=r,e==="ball")s.beginPath(),s.arc(0,0,18,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-18,0),s.lineTo(18,0),s.stroke(),s.fillStyle="#183a51",s.beginPath(),s.arc(0,0,6,0,Math.PI*2),s.fill(),s.stroke();else if(e==="puff"){s.beginPath(),s.arc(0,3,16,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-14,-5),s.lineTo(-15,-19),s.lineTo(-5,-11),s.moveTo(14,-5),s.lineTo(15,-19),s.lineTo(5,-11),s.stroke(),s.beginPath(),s.arc(0,-8,5,0,Math.PI*1.5),s.stroke();for(let o of[-6,6])s.beginPath(),s.arc(o,3,2,0,Math.PI*2),s.fill();s.beginPath(),s.arc(0,7,5,.2,Math.PI-.2),s.stroke()}else if(e==="book")Qn(s,-20,-15,40,32,4),s.stroke(),s.beginPath(),s.moveTo(0,-15),s.lineTo(0,17),s.moveTo(-14,-6),s.lineTo(-5,-6),s.moveTo(5,-6),s.lineTo(14,-6),s.stroke();else if(e==="trophy")s.beginPath(),s.moveTo(-13,-17),s.lineTo(13,-17),s.lineTo(9,-3),s.quadraticCurveTo(0,8,-9,-3),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(0,5),s.lineTo(0,16),s.moveTo(-10,18),s.lineTo(10,18),s.moveTo(-13,-13),s.quadraticCurveTo(-25,-16,-19,-5),s.lineTo(-9,0),s.moveTo(13,-13),s.quadraticCurveTo(25,-16,19,-5),s.lineTo(9,0),s.stroke();else if(e==="golf")s.beginPath(),s.ellipse(0,13,18,6,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-3,13),s.lineTo(-3,-20),s.lineTo(15,-14),s.lineTo(-3,-7),s.stroke(),s.beginPath(),s.arc(10,8,3,0,Math.PI*2),s.fill();else if(e==="car"){Qn(s,-19,-15,38,30,5),s.stroke(),Qn(s,-11,-9,22,14,3),s.stroke();for(let o of[-22,18])for(let a of[-13,7])Qn(s,o,a,4,7,1),s.fill();s.beginPath(),s.moveTo(-12,10),s.lineTo(12,10),s.moveTo(0,-15),s.lineTo(0,-23),s.stroke()}else if(e==="target"){for(let o of[19,12,4])s.beginPath(),s.arc(0,0,o,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(0,0),s.lineTo(20,-20),s.moveTo(12,-20),s.lineTo(20,-20),s.lineTo(20,-12),s.stroke()}else s.beginPath(),s.moveTo(-6,-12),s.lineTo(12,0),s.lineTo(-6,12),s.closePath(),s.fill();s.restore()}function gl(s,e,t,n,i,r){let o=e==="RC car racing"?{title:"RC car racing",sub:"Three laps \xB7 steer, race and beat your best",icon:"car",accent:X.blue}:e==="Arcade wall of fame"?{title:"Arcade wall of fame",sub:"Personal bests \xB7 medals \xB7 trophy shelf",icon:"trophy",accent:X.gold}:e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:X.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:X.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:X.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:X.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:X.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:X.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:X.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:X.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:X.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:X.pink}:null;if(o)Ye(s,t,n,i,72,{top:r?"#365c70":"#21465e",bottom:r?"#25465a":"#19364b",stroke:r?o.accent:"#3b5c71"}),s.fillStyle=o.accent,Qn(s,t+1,n+15,4,42,2),s.fill(),pn(s,o.icon,t+41,n+36,42,o.accent),j(s,o.title,t+82,n+31,i<600?26:29,X.ink,"700"),j(s,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,X.muted,"400",i-125),j(s,"\u203A",t+i-35,n+47,42,r?o.accent:X.muted,"400");else{let a=e==="Resume";Ye(s,t,n,i,72,{top:a?r?"#fff0c2":"#f8df9e":r?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":r?X.gold:"#496379"}),a&&pn(s,"play",t+33,n+36,25,"#173247"),j(s,e,t+(a?60:24),n+46,28,a?"#122c40":X.ink,"700")}}function xl(s,e){_t(s,1024,768),j(s,"TF JONES  /  PLAY IN THE YARD",44,37,19,X.blue,"700"),j(s,"Mollie\u2019s adventures",44,93,48,X.ink,"700"),j(s,"Point with your right hand, then pull the trigger.",44,132,24,X.muted,"400"),Ye(s,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),j(s,e,60,172,23,X.mint,"500",900)}function ea(s,e,t,n,i){Ye(s,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),j(s,e,n+9,i,21,X.gold,"700"),j(s,t,n+45,i,21,X.muted,"400")}function _l(s,e=!1){ea(s,"Y","Games menu",44,663),ea(s,"B","Back",325,663),ea(s,"A",e?"Rescue / replay":"Replay round",548,663),s.strokeStyle="#355168",s.beginPath(),s.moveTo(44,692),s.lineTo(980,692),s.stroke(),j(s,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,X.blue,"700"),j(s,e?"Race paused \xB7 grip brakes":"Right grip to teleport",674,731,21,X.muted,"400")}function yl(s,e){s.clearRect(0,0,768,192),Ye(s,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),s.fillStyle=X.gold,Qn(s,23,27,5,138,2),s.fill(),s.font="600 32px Arial";let t=[],n="";for(let r of e.split(/\s+/)){let o=n?n+" "+r:r;s.measureText(o).width>660&&n?(t.push(n),n=r):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((r,o)=>j(s,r,47,i+o*42,32,X.ink,"600"))}function vl(s,{total:e,throws:t,best:n,last:i}){_t(s,1024,640),pn(s,"target",72,66,55,X.mint),j(s,"STAFF-ROOM DARTS",119,79,40,X.ink,"700"),j(s,"NINE DART CHALLENGE",39,136,24,X.muted,"700"),j(s,String(e),36,281,142,X.gold,"700"),j(s,"POINTS",280,277,32,X.muted,"700"),Ye(s,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),j(s,"PERSONAL BEST",721,203,24,X.muted,"600"),j(s,String(n),721,264,52,X.mint,"700");for(let r=0;r<9;r++){let o=r<t;Ye(s,40+r*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),j(s,String(r+1),72+r*104,358,28,o?"#132e41":X.muted,"700")}Ye(s,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),j(s,i,61,458,36,X.ink,"600",890),j(s,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,X.mint,"600"),j(s,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,X.muted,"400")}var Ml=new Map;function Ct(s,e,t="target",n=X.gold,i=1.7){let r=[s,e,t,n].join("|"),o=Ml.get(r);if(!o){let h=document.createElement("canvas");h.width=1024,h.height=256;let f=h.getContext("2d");f.fillStyle="#0a1b2c",f.fillRect(0,0,1024,256),Ye(f,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),f.fillStyle=n,f.fillRect(32,36,5,182),pn(f,t,110,128,88,n),j(f,s,192,123,58,X.ink,"700",790),j(f,e,194,186,26,n,"600",775),o=new Ie(h),o.colorSpace=Ae,Ml.set(r,o)}let a=new _e;a.name=s+" \xB7 activity sign";let l=new ge(new Ne(i,i/4),new Me({map:o}));a.add(l);let c=new ge(new ve(i+.055,i/4+.055,.04),new Se({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var es;function xi(){if(!es){let s=document.createElement("canvas");s.width=512,s.height=1024;let e=s.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let r=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(r,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(r,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=r+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(r,Math.floor((l+n())*341),o,1)}es=new Ie(s),es.colorSpace=Ae,es.anisotropy=4}return new Se({map:es,color:16777215,roughness:.28,metalness:.04})}var ta;function Ln(s=.5,e=.32){if(!ta){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,64);r.addColorStop(0,"rgba(4,12,20,.48)"),r.addColorStop(.55,"rgba(4,12,20,.2)"),r.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),ta=new Ie(n)}let t=new ge(new Ne(s,e),new Me({map:ta,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function Dn(s=1.4){let e=new _e;e.name="Warm arcade light fitting";let t=new ge(new ve(s,.09,.17),new Se({color:2504518,roughness:.6}));e.add(t);let n=new ge(new Ne(s-.1,.115),new Me({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function bl(s){let e=new ji(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,s.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new y(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new y(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var dt={left:-1.03,right:1.03,front:.08,back:6.95},ts=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function Nn(s,e,t){let n=.033,i=0,r=0;for(let o of t.ramps){let a=s-o.x,l=e-o.z,c=o.w/2,h=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=h)continue;let f=Math.min(.16,c*.3),u=Math.min(1,(c-Math.abs(a))/f),d=1-Math.abs(l)/h,p=o.h*u*d;.033+p>n&&(n=.033+p,i=u<1?-Math.sign(a)*o.h*d/f:0,r=-Math.sign(l||1e-4)*o.h*u/h)}return{height:n,gx:i,gz:r}}function gd(s,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,s.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,s.z)),i=s.x-t,r=s.z-n,o=Math.hypot(i,r);if(o>=.038)return;if(o<1e-9){let l=[[s.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-s.x,1,0],[s.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-s.z,0,1]].sort((c,h)=>c[0]-h[0]);[,i,r]=l[0],s.x+=i*(l[0][0]+.038+1e-4),s.z+=r*(l[0][0]+.038+1e-4)}else i/=o,r/=o,s.x+=i*(.038-o+1e-4),s.z+=r*(.038-o+1e-4);let a=s.vx*i+s.vz*r;a<0&&(s.vx-=1.68*a*i,s.vz-=1.68*a*r)}function xd(s,e,t,n,i,r){let o=i-t,a=r-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((s-t)*o+(e-n)*a)/l)):0;return Math.hypot(s-t-o*c,e-n-a*c)}function Tl(s,e,t){if(s.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),r=n/i;for(let o=0;o<i;o++){let a=s.x,l=s.z,c=Nn(s.x,s.z,e);s.vx-=7*c.gx*r,s.vz-=7*c.gz*r;let h=Math.hypot(s.vx,s.vz),f=Math.max(0,h-.4*r);h&&(s.vx*=f/h,s.vz*=f/h),s.x+=s.vx*r,s.z+=s.vz*r;for(let[u,d,p,g]of[["x","vx",dt.left+.038,dt.right-.038],["z","vz",dt.front+.038,dt.back-.038]])s[u]<p&&(s[u]=p,s[d]<0&&(s[d]*=-.72)),s[u]>g&&(s[u]=g,s[d]>0&&(s[d]*=-.72));for(let u of[...e.crates,...e.walls||[]])gd(s,u);if(s.distance=(s.distance||0)+Math.hypot(s.x-a,s.z-l),s.y=Nn(s.x,s.z,e).height+.038,Math.hypot(s.vx,s.vz)<=1.15&&xd(e.cup.x,e.cup.z,a,l,s.x,s.z)<.115-.038*.6){s.sunk=!0,s.x=e.cup.x,s.z=e.cup.z,s.vx=s.vz=0;break}Math.hypot(s.vx,s.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(s.vx=s.vz=0)}}var dr=s=>{let e=Math.hypot(s.x,s.y,s.z);return e>1e-5?{x:s.x/e,y:s.y/e,z:s.z/e}:null},na=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),pr=(s,e)=>s.x*e.x+s.y*e.y+s.z*e.z,Sl=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x});function wl(s,e,t,n,i=null){if(n<=0||n>.1)return null;let r=(e.x-s.x)/n,o=(e.y-s.y)/n,a=(e.z-s.z)/n;if(Math.hypot(r,o,a)>8||pr(s.forward,e.forward)<.4)return null;let l=i||{x:r,y:o,z:a};if(Math.hypot(l.x,l.y,l.z)>8)return null;let c=Math.hypot(e.x-s.x,e.y-s.y,e.z-s.z),h=Math.hypot(e.forward.x-s.forward.x,e.forward.y-s.forward.y,e.forward.z-s.forward.z),f=Math.max(1,Math.ceil((c+h*.12)/.008));for(let u=0;u<=f;u++){let d=u/f,p=na(s,e,d),g=dr(na(s.forward,e.forward,d)),v=dr(na(s.side,e.side,d));if(!g||!v)continue;let x=dr(Sl(v,g)),M=x&&dr(Sl(g,x));if(!M)continue;let _={x:t.x-p.x,y:t.y-p.y,z:t.z-p.z},m=pr(_,M),b=pr(_,x),C=pr(_,g);if(Math.hypot(Math.max(0,Math.abs(m)-.104),Math.max(0,Math.abs(b)-.027),Math.max(0,Math.abs(C)-.058))>.038+.01)continue;let T=C>=0?1:-1,A={x:g.x*T,z:g.z*T},w=Math.hypot(A.x,A.z);if(w<.65)continue;A.x/=w,A.z/=w;let R=l.x*A.x+l.z*A.z;if(R<.07)continue;let E=Math.min(3.6,R*.92);return{vx:A.x*E,vz:A.z*E}}return null}var _d=new Re().setFromAxisAngle(new y(1,0,0),-Math.PI/2);function Al(s){let e=s.rightGripController,t=e&&e!==s.controller?e:s.controller;if(!t||t.visible===!1)return null;let n=t.getWorldPosition(new y),i=t.getWorldQuaternion(new Re);return e&&e!==s.controller&&i.multiply(_d),{position:n,quaternion:i,down:new y(0,-1,0).applyQuaternion(i)}}function El(s){let e=new _e;e.name="Controller putter",s.add(e);let t=new Se({color:12964307,metalness:.72,roughness:.23}),n=new Se({color:1518388,roughness:.9}),i=(v,x,M=e)=>{let _=new ge(v,x);return M.add(_),_},r=i(new ke(.008,.009,1,10),t),o=i(new ke(.017,.02,.17,14),n);o.position.y=-.025;for(let v=0;v<5;v++){let x=i(new Ut(.018,.0011,4,12),new Se({color:5005926,roughness:.8}),o);x.rotation.x=Math.PI/2,x.position.y=-.065+v*.03}let a=new _e;a.name="Mallet putter head",e.add(a);let l=new ut;l.moveTo(-.083,-.05),l.lineTo(.083,-.05),l.quadraticCurveTo(.099,-.05,.099,-.03),l.lineTo(.099,.035),l.quadraticCurveTo(.099,.053,.077,.053),l.lineTo(-.077,.053),l.quadraticCurveTo(-.099,.053,-.099,.035),l.lineTo(-.099,-.03),l.quadraticCurveTo(-.099,-.05,-.083,-.05);let c=i(new $t(l,{depth:.041,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:6}),t,a);c.rotation.x=Math.PI/2,c.position.y=.0205;let h=i(new ve(.18,.032,.004),new Se({color:3432035,roughness:.65}),a);h.position.z=-.055,i(new ve(.085,.003,.073),n,a).position.set(0,.026,.006);for(let v of[-.021,.021])i(new ve(.005,.002,.068),new Me({color:16248017}),a).position.set(v,.028,.004);i(new ke(.012,.014,.046,10),t,a).position.set(-.055,.026,.014);let d=.86;e.visible=!1;function p(v){d=Qe.clamp(v,.3,1.6),a.position.set(0,-d,0);let x=new y(-.055,-d+.044,.014);r.position.copy(x).multiplyScalar(.5),r.scale.y=x.length(),r.quaternion.setFromUnitVectors(new y(0,1,0),x.clone().normalize())}p(d);function g(v){e.position.copy(v.position),e.quaternion.copy(v.quaternion),e.updateMatrixWorld(!0);let x=a.getWorldPosition(new y),M=a.getWorldQuaternion(new Re);return{x:x.x,y:x.y,z:x.z,forward:new y(0,0,-1).applyQuaternion(M),side:new y(1,0,0).applyQuaternion(M),up:new y(0,1,0).applyQuaternion(M)}}return{root:e,head:a,face:h,size:p,update:g,get length(){return d}}}var mn;function yd(){if(!mn){let s=document.createElement("canvas");s.width=256,s.height=512;let e=s.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,r,1,2)}mn=new Ie(s),mn.colorSpace=Ae,mn.wrapS=mn.wrapT=kt,mn.repeat.set(1/(dt.right-dt.left),1/(dt.back-dt.front)),mn.offset.set(.5,1.02),mn.anisotropy=4}return new Se({map:mn,roughness:.95})}function Cl(s,e,t,n){let i=new _e;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let r=new _e;r.name="Six-hole warehouse course",i.add(r);let o=U=>new Se({color:U,roughness:.65}),a=(U,K,ae,$,he,Ce=r)=>{let pe=new ge(U,K);return pe.position.set(ae,$,he),Ce.add(pe),pe},l=a(new Ke(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=Ln(.16,.16);i.add(c);let h=El(i),f=h.root,u=h.head,d=new Me({color:16766588,transparent:!0,opacity:.78,depthWrite:!1,side:it}),p=a(new fn(.13,.142,40),d,0,0,0,i);p.name="Putter contact guide",p.rotation.x=-Math.PI/2,p.visible=!1;let g=new St(new Be().setFromPoints([new y,new y]),new bt({color:8645568,transparent:!0,opacity:.7,depthWrite:!1}));g.name="Putter face direction",g.visible=!1,i.add(g);let v=document.createElement("canvas");v.width=1024,v.height=640;let x=v.getContext("2d"),M=new Ie(v);M.colorSpace=Ae;let _=a(new Ne(2.2,1.375),new Me({map:M}),0,0,0,i);_.name="Mini-golf scorecard";let m=null,b=!1,C=0,S=0,T=[],A=null,w=!1,R=!1,E=null,V=!1,D=!1,I=!1,B=0,q="Hold trigger and brush the putter through the ball.",N=null,W=!0,L=[],P=0,F=new Re,k=()=>T.reduce((U,K)=>U+K,0),z=ts.reduce((U,K)=>U+K.par,0),G=()=>ts[C];try{let U=localStorage.getItem("tfj-mini-golf-best-v1"),K=Number(U);U!==null&&Number.isFinite(K)&&K>=6&&(A=K)}catch{}function Y(){_t(x,1024,640),j(x,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,X.mint,"700"),j(x,I?"COURSE COMPLETE":`${C+1} / 6  \xB7  ${G().name.toUpperCase()}`,32,117,42,X.ink,"700",954),j(x,I?`${k()} strokes  \xB7  Par ${z}`:`${S} strokes  \xB7  Par ${G().par}`,32,190,43,X.gold,"700");for(let U=0;U<6;U++){let K=32+U*161,ae=U===C;Ye(x,K,227,151,177,{top:ae?"#26594a":"#183d43",bottom:"#0d2934",stroke:ae?X.gold:"#527779"}),j(x,`HOLE ${U+1}`,K+13,260,24,ae?X.gold:X.muted),j(x,T[U]===void 0?"\u2014":String(T[U]),K+18,334,58,X.ink,"700"),j(x,`PAR ${ts[U].par}`,K+13,382,22,X.muted)}j(x,`TOTAL ${k()+(D?0:S)}  \xB7  BEST ${A??"\u2014"}`,32,459,32,X.mint,"700"),j(x,q,32,513,26,X.ink,"600",954),j(x,I?"A  PLAY AGAIN":D?"A  NEXT HOLE":"A  MOVE & FIT CLUB",32,578,27,X.gold,"700"),j(x,"Y  PAUSE / MENU",684,578,26,X.muted),M.needsUpdate=!0}function ne(){for(let U of[3,2,1.5,4,5,6])for(let K of[-30,-29,-28,-27]){let ae=!0;for(let $=-1.1;$<=1.1;$+=.275)for(let he=0;he<=7.8;he+=.25)(s.blocked(U+$,K+he,0)||Math.abs(s.groundAt(U+$,K+he,.1))>.1)&&(ae=!1);if(ae)return new y(U,0,K)}return null}function Z(){let U=xi();return U.roughness=.78,U}function J(U){let K=a(new ve(U.w,.25,U.d),Z(),U.x,.155,U.z);K.name="Pallet obstacle";for(let ae=0;ae<4;ae++)a(new ve(U.w/4-.018,.026,U.d+.01),Z(),U.x+(ae-1.5)*U.w/4,.293,U.z);for(let ae of[-1,1])a(new ve(.025,.18,U.d+.018),o("#8d724d"),U.x+ae*(U.w/2-.018),.165,U.z)}function ue(U){let $=[],he=[],Ce=[];for(let we=0;we<=20;we++)for(let oe=0;oe<=12;oe++){let Ge=U.x-U.w/2+U.w*oe/12,He=U.z-U.d/2+U.d*we/20;$.push(Ge,Nn(Ge,He,G()).height+.002,He),he.push(Ge,-He)}for(let we=0;we<20;we++)for(let oe=0;oe<12;oe++){let Ge=we*13+oe,He=Ge+1,ft=Ge+12+1,et=ft+1;Ce.push(Ge,ft,He,He,ft,et)}let pe=new Be;pe.setAttribute("position",new Pe($,3)),pe.setAttribute("uv",new Pe(he,2)),pe.setIndex(Ce),pe.computeVertexNormals();let Le=Z();Le.side=it;let Ue=new ge(pe,Le);Ue.name="Loading ramp",r.add(Ue)}function de(){for(let oe of[...r.children])oe.traverse(Ge=>{Ge.geometry?.dispose(),Ge.material?.dispose()}),r.remove(oe);r.position.copy(m);let U=G(),K=new ut;K.moveTo(dt.left,-dt.front),K.lineTo(dt.right,-dt.front),K.lineTo(dt.right,-dt.back),K.lineTo(dt.left,-dt.back),K.closePath();let ae=new $n;ae.absarc(U.cup.x,-U.cup.z,.115,0,Math.PI*2,!1),K.holes.push(ae),a(new ve(2.2,.027,7),o("#173848"),0,.016,3.51);let $=a(new Zt(K,40),yd(),0,.033,0);$.rotation.x=-Math.PI/2,$.name="Putting green";for(let oe of[-1.065,1.065])a(new ve(.07,.14,7),o("#203c4b"),oe,.099,3.51),a(new ve(.045,.006,7),new Se({color:15320952,emissive:11770199,emissiveIntensity:.25}),oe,.172,3.51);for(let oe of[.045,6.985])a(new ve(2.2,.14,.07),o("#203c4b"),0,.099,oe);let he=a(new Gi(.115,40),new Me({color:398620}),U.cup.x,.034,U.cup.z);he.rotation.x=-Math.PI/2;let Ce=a(new fn(.115,.115+.015,40),new Me({color:16768133,side:it}),U.cup.x,.035,U.cup.z);Ce.rotation.x=-Math.PI/2,a(new ke(.009,.009,.68,8),o("#e2e7d7"),U.cup.x,.37,U.cup.z);let pe=new Be;pe.setAttribute("position",new Pe([0,0,0,.23,-.035,0,0,-.14,0],3)),pe.computeVertexNormals();let Le=a(pe,new Me({color:16176260,side:it}),U.cup.x,.7,U.cup.z);Le.name="Hole flag";let Ue=a(new fn(.105,.123,32),new Me({color:16049069,side:it}),U.tee.x,.035,U.tee.z);if(Ue.rotation.x=-Math.PI/2,U.crates.forEach(J),U.ramps.forEach(ue),U.pipe){let oe=new ut;for(let He=0;He<=32;He++){let ft=Math.PI-He*Math.PI/32,et=Math.cos(ft)*.43,vi=Math.sin(ft)*.43;He?oe.lineTo(et,vi):oe.moveTo(et,vi)}for(let He=0;He<=32;He++){let ft=He*Math.PI/32;oe.lineTo(Math.cos(ft)*.34,Math.sin(ft)*.34)}oe.closePath();let Ge=a(new $t(oe,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);Ge.name="Warehouse pipe tunnel"}_.position.copy(m).add(new y(0,2.42,.3)),a(new ve(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let oe of[-1.09,1.09])a(new ve(.035,3.55,.035),o("#254252"),oe,1.78,.26);let we=Ct("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",X.mint,2.05);we.position.set(0,3.5,.3),r.add(we)}function te(){return N&&!N.sunk&&Math.hypot(N.vx,N.vz)>.04}function ce(U,K){return!s.blocked(m.x+U,m.z+K,0)&&Math.abs(s.groundAt(m.x+U,m.z+K,.1))<.1&&![...G().crates,...G().walls||[]].some(ae=>Math.abs(U-ae.x)<ae.w/2+.2&&Math.abs(K-ae.z)<ae.d/2+.2)}function O(){if(!N||te()||D)return!1;let U=[[-.28,.78],[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[K,ae]of U){let $=N.x+K,he=N.z+ae;if(ce($,he)&&s.xrTeleport(m.x+$,0,m.z+he))return s.xrFace?.(0),se(),W=!0,!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function Q(){S=0,D=I=!1,B=0,w=R=!1,E=null,L=[],W=!0;let U=G();N={x:U.tee.x,z:U.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,de(),fe(),q="Hold your hand comfortably. A moves and fits your club.",O(),Y()}function ee(){let U=ne();return!U||!s.xrTeleport(U.x,0,U.z+7.03)?!1:(m=U,C=0,T=[],b=i.visible=!0,V=!1,F.identity(),Q(),t("Mini-golf! Hold your controller comfortably and look down the green. A moves and fits the club. Hold trigger to putt."),!0)}function se(){w=R=!1,E=null,L=[],f.visible=p.visible=g.visible=!1}function re(){b=i.visible=!1,se()}function ye(U){if(D)return;D=!0,se(),T.push(S),B=U?.8:0;let K=G(),ae=U?S===1?"Hole in one!":S<K.par?"Under par!":S===K.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(I=C===ts.length-1,I){let $=k(),he=$<=z?"Gold":$<=z+6?"Silver":"Bronze";A=A===null?$:Math.min(A,$);try{localStorage.setItem("tfj-mini-golf-best-v1",String(A))}catch{}q=`${he} medal! ${$} strokes across six holes.`,t(q)}else q=`${ae} ${S} strokes. A for hole ${C+2}.`,t(q);n(U?.7:.2),Y()}function fe(){l.position.set(m.x+N.x,m.y+N.y,m.z+N.z),c.position.set(m.x+N.x,m.y+Nn(N.x,N.z,G()).height+.003,m.z+N.z)}function Te(U){let K=Al(U);if(!K)return se(),null;if(W){let $=U.forward.clone();$.y=0,$.lengthSq()<.01&&$.set(0,0,-1),$.normalize();let he=new Re().setFromAxisAngle(new y(0,1,0),Math.atan2(-$.x,-$.z)),Ce=Nn(K.position.x-m.x,K.position.z-m.z,G()).height,pe=K.position.y-m.y-Ce-.028;if(pe<.3||pe>1.6)return se(),null;F.copy(K.quaternion).invert().multiply(he),h.size(pe),W=!1,E=null,L=[],q="Club fitted. Mint guide = level face. Hold trigger to putt.",Y()}K.quaternion.multiply(F);let ae=h.update(K);return ae.x-=m.x,ae.y-=m.y,ae.z-=m.z,f.visible=!D,ae}function xe(U){if(p.visible=!!U&&!te()&&!D,g.visible=!1,!p.visible)return;p.position.set(m.x+N.x,m.y+Nn(N.x,N.z,G()).height+.004,m.z+N.z);let K=Math.hypot(U.x-N.x,U.z-N.z)<.7,ae=Math.hypot(U.forward.x,U.forward.z),$=Math.abs(U.y-N.y)<.07&&Math.abs(U.up.y)>.8&&ae>.8;if(d.color.set(K&&$?8645568:16766588),h.face.material.color.set(K&&$?8636851:3432035),!K||!$)return;g.visible=!0;let he=U.forward.x/ae,Ce=U.forward.z/ae,pe=g.geometry.attributes.position;for(let Le=0;Le<2;Le++){let Ue=Le?.52:.07,we=U.x+he*Ue,oe=U.z+Ce*Ue;pe.setXYZ(Le,m.x+we,m.y+Nn(we,oe,G()).height+.005,m.z+oe)}pe.needsUpdate=!0,g.geometry.computeBoundingSphere()}function H(U,K){if(!b)return;let ae=Math.max(0,Math.min(.1,U.dt)),$=!!U.right?.gamepad?.buttons[0]?.pressed,he=!!U.right?.gamepad?.buttons[4]?.pressed,Ce=he&&!V;if(V=he,P+=ae,K){se();return}if(Ce){if(D){I?(C=0,T=[]):C++,Q();return}else if(!te()){O();return}}$?w=!D:(w=!1,R=!0,E=null,L=[]);let pe=Te(U);if(xe(pe),$&&R&&!D&&!te()&&pe&&E){for(L.push({time:P,p:pe});L.length>2&&P-L[1].time>.045;)L.shift();let Le=L[0],Ue=P-Le.time,we=Ue>0?{x:(pe.x-Le.p.x)/Ue,y:(pe.y-Le.p.y)/Ue,z:(pe.z-Le.p.z)/Ue}:null,oe=wl(E,pe,N,ae,we);oe&&(N.vx=oe.vx,N.vz=oe.vz,S++,R=!1,n(.3),q=`Putt ${S} \xB7 wait for the ball to stop.`,Y())}if(E=$&&pe?pe:null,$&&pe&&!L.length&&L.push({time:P,p:pe}),!D){let Le=N.x,Ue=N.z;Tl(N,G(),ae);let we=N.x-Le,oe=N.z-Ue,Ge=Math.hypot(we,oe);Ge&&l.rotateOnWorldAxis(new y(oe,0,-we).normalize(),Ge/.038),fe(),N.sunk?ye(!0):!te()&&S>=8?ye(!1):!te()&&q.startsWith("Putt")&&(q="Ball stopped. A moves beside it and refits your club.",Y())}B>0&&(B=Math.max(0,B-ae),l.position.y=m.y+.033+.038-(.8-B)*.2,l.scale.setScalar(Math.max(.12,B/.8)),c.visible=!1,B||(l.visible=!1))}return{root:i,course:r,putter:f,head:u,board:_,ball:l,ballGuide:p,aimLine:g,start:ee,stop:re,cancel:se,tick:H,moveBesideBall:O,get clubLength(){return h.length},get active(){return b},get origin(){return m},get held(){return w},get state(){return N},get hole(){return C},get strokes(){return S},get scores(){return T},get total(){return k()},get holeReady(){return D},get complete(){return I},get best(){return A},get layout(){return G()}}}function _i(s,e=.18){return Math.abs(s)<=e?0:Math.sign(s)*(Math.abs(s)-e)/(1-e)}function ns(s){let e=s?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function Rl(s,e,t,n){Math.abs(s)<.25&&(n=!1);let i=0;return e==="smooth"?i=-_i(s)*Math.PI/3*t:Math.abs(s)>.65&&!n&&(i=-Math.sign(s)*Math.PI/6,n=!0),{angle:i,latched:n}}function ia(s,e,t){return{x:s*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-s*Math.sin(t)}}var yt={bounds:{minX:-2.05,maxX:2.05,minZ:-3.3,maxZ:3.3},obstacles:[{x:0,z:0,halfX:.68,halfZ:1.75}],start:{x:-1.37,z:1.62,yaw:0},checkpoints:[{x:-1.37,z:1.95,nx:0,nz:-1,halfWidth:.66},{x:-1.37,z:-1.35,nx:0,nz:-1,halfWidth:.66},{x:0,z:-2.52,nx:1,nz:0,halfWidth:.77},{x:1.37,z:-1.35,nx:0,nz:1,halfWidth:.66},{x:1.37,z:1.35,nx:0,nz:1,halfWidth:.66},{x:0,z:2.52,nx:-1,nz:0,halfWidth:.77}]},sa=1/240,vd=.29,Md=.49,ss=(s,e,t)=>Math.max(e,Math.min(t,s)),ra=(s,e,t)=>Number.isFinite(s)?ss(s,e,t):0,bd=s=>Math.atan2(Math.sin(s),Math.cos(s));function oa(){return{...yt.start,speed:0,wheelAngle:0,completedLaps:0,nextCheckpoint:1,lastCheckpoint:0,lapTime:0,elapsed:0,laps:[],finished:!1,collisions:0,rescues:0,distance:0,justLap:null,justFinished:!1,checkpointPassed:null,justCollision:!1,_accumulator:0,_contactCooldown:0}}function is(s,e,t){let n=-Math.sin(s.yaw),i=-Math.cos(s.yaw),r=s.speed*(n*e+i*t);r>=-.015||(s.speed=ss(s.speed-1.25*r*(n*e+i*t),-1.1,2.8),s._contactCooldown<=0&&(s.collisions++,s.justCollision=!0,s._contactCooldown=.18))}function Sd(s){let e=yt.bounds,t=.28;s.x<e.minX+t&&(s.x=e.minX+t,is(s,1,0)),s.x>e.maxX-t&&(s.x=e.maxX-t,is(s,-1,0)),s.z<e.minZ+t&&(s.z=e.minZ+t,is(s,0,1)),s.z>e.maxZ-t&&(s.z=e.maxZ-t,is(s,0,-1));for(let n of yt.obstacles){let i=ss(s.x,n.x-n.halfX,n.x+n.halfX),r=ss(s.z,n.z-n.halfZ,n.z+n.halfZ),o=s.x-i,a=s.z-r,l=Math.hypot(o,a);if(!(l>=t)){if(l<1e-9){let c=[[s.x-n.x+n.halfX,-1,0],[n.x+n.halfX-s.x,1,0],[s.z-n.z+n.halfZ,0,-1],[n.z+n.halfZ-s.z,0,1]].sort((d,p)=>d[0]-p[0]),[h,f,u]=c[0];o=f,a=u,s.x+=o*(h+t+1e-5),s.z+=a*(h+t+1e-5)}else o/=l,a/=l,s.x+=o*(t-l+1e-5),s.z+=a*(t-l+1e-5);is(s,o,a)}}}function Td(s,e,t){let n=yt.checkpoints[s.nextCheckpoint],i=(e-n.x)*n.nx+(t-n.z)*n.nz,r=(s.x-n.x)*n.nx+(s.z-n.z)*n.nz;if(i>0||r<=0||r-i<1e-9)return null;let o=-i/(r-i),a=e+(s.x-e)*o,l=t+(s.z-t)*o;return Math.abs((a-n.x)*-n.nz+(l-n.z)*n.nx)>n.halfWidth?null:{fraction:o,x:a,z:l}}function wd(s,e,t){s._contactCooldown=Math.max(0,s._contactCooldown-t),s.wheelAngle+=(-e.steer*Md-s.wheelAngle)*(1-Math.exp(-12*t));let n=s.speed,i=.32+.15*Math.abs(s.speed);e.brake>.01?s.speed>.025?s.speed=Math.max(0,s.speed-(5.8*e.brake+i)*t):s.speed=Math.min(0,Math.max(-1.1,s.speed-(2.4*e.brake-i)*t)):e.throttle>.01?s.speed<0?s.speed=Math.min(0,s.speed+(3.6*e.throttle+i)*t):s.speed=Math.max(0,Math.min(2.8,s.speed+(3.6*e.throttle-i)*t)):s.speed=Math.sign(s.speed)*Math.max(0,Math.abs(s.speed)-i*t),s.speed=ss(s.speed,-1.1,2.8);let r=(n+s.speed)/2,o=r*Math.tan(s.wheelAngle)/vd,a=s.yaw+o*t/2,l=s.x,c=s.z;s.x-=Math.sin(a)*r*t,s.z-=Math.cos(a)*r*t,s.yaw=bd(s.yaw+o*t),Sd(s),s.distance+=Math.hypot(s.x-l,s.z-c);let h=Td(s,l,c);if(h){let f=s.nextCheckpoint;if(s.checkpointPassed=f,s.lastCheckpoint=f,s.nextCheckpoint=(f+1)%yt.checkpoints.length,f===0){let u=s.lapTime+t*h.fraction;if(s.laps.push(u),s.completedLaps++,s.justLap=u,s.lapTime=-t*h.fraction,s.completedLaps>=3){s.finished=!0,s.justFinished=!0,s.x=h.x,s.z=h.z,s.speed=0,s.elapsed+=t*h.fraction,s.lapTime=0;return}}}s.elapsed+=t,s.lapTime+=t}function Pl(s,e={},t=0){if(s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,s.finished||!Number.isFinite(t)||t<=0)return s;let n={steer:ra(e.steer,-1,1),throttle:ra(e.throttle,0,1),brake:ra(e.brake,0,1)};for(s._accumulator+=Math.min(.1,t);s._accumulator>=sa-1e-12&&!s.finished;)s._accumulator=Math.max(0,s._accumulator-sa),wd(s,n,sa);return s.finished&&(s._accumulator=0),s}function Il(s){if(s.finished)return!1;let e=yt.checkpoints[s.lastCheckpoint];return s.x=e.x+e.nx*.25,s.z=e.z+e.nz*.25,s.yaw=Math.atan2(-e.nx,-e.nz),s.speed=0,s.wheelAngle=0,s.elapsed+=2,s.lapTime+=2,s.rescues++,s._accumulator=0,s._contactCooldown=0,s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,!0}function Qt(s){if(!Number.isFinite(s)||s<0)return"\u2014";let e=Math.floor(s*100),t=Math.floor(e/6e3),n=e%6e3;return`${t}:${String(Math.floor(n/100)).padStart(2,"0")}.${String(n%100).padStart(2,"0")}`}var st=.025,Rt=(s,e=.6,t=0)=>new Se({color:s,roughness:e,metalness:t}),Ll=(s,e,t,n=10)=>s+(e-s)*(1-Math.exp(-Math.max(0,t)*n));function Gt(s,e,t,n=0,i=0,r=0){let o=new ge(e,t);return o.position.set(n,i,r),s.add(o),o}function je(s,e,t,n,i,r,o,a){return Gt(s,new ve(t,n,i),e,r,o,a)}function rs(s,e,t,n){let i=new hn(new ve(1,1,1),e,t.length),r=new lt;i.name=n;for(let o=0;o<t.length;o++){let[a,l,c,h,f,u,d=0]=t[o];r.position.set(h,f,u),r.scale.set(a,l,c),r.rotation.set(d,0,0),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}return i.instanceMatrix.needsUpdate=!0,i.computeBoundingSphere(),s.add(i),i}function Un(s,e,t,n,i=.005){let r=new y(...t),o=new y(...n),a=Gt(s,new ke(i,i,r.distanceTo(o),6),e);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new y(0,1,0),o.sub(r).normalize()),a}function yr(s,e,t,n,i,r=st+.001){let o=Gt(s,e,t,n,r,i);return o.rotation.x=-Math.PI/2,o}var _r,Fn;function Ad(){if(!_r){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d");e.fillStyle="#f8e6aa",e.beginPath(),e.arc(64,64,59,0,Math.PI*2),e.fill(),e.strokeStyle="#16364a",e.lineWidth=7,e.stroke(),e.fillStyle="#133348",e.font="bold 94px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("7",64,71),_r=new Ie(s),_r.colorSpace=Ae}return new Me({map:_r,transparent:!0,depthWrite:!1})}function Ed(){if(!Fn){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#334b5b",e.fillRect(0,0,256,256);let t=47;for(let n=0;n<7e3;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%256;e.fillStyle=n%2?"rgba(175,204,211,.065)":"rgba(10,26,42,.15)",e.fillRect(i,r,1,1)}Fn=new Ie(s),Fn.colorSpace=Ae,Fn.wrapS=Fn.wrapT=kt,Fn.repeat.set(4,6),Fn.anisotropy=2}return new Se({map:Fn,roughness:.9})}function Dl(s){let e=new _e;e.name="TF Jones seven \xB7 RC rally buggy",s.add(e);let t=new _e;t.name="Sprung rally body",e.add(t);let n=Rt("#217db6",.32,.16),i=Rt("#0f2d3d",.52),r=Rt("#0c1720",.85),o=Rt("#e4edf2",.3,.55),a=Rt("#ffd66b",.38,.1),l=Rt("#244e68",.18,.55),c=document.querySelector?.(".brand img"),h=[];function f(I,B=.5,q=""){let N=document.createElement("canvas");N.width=1024,N.height=I;let W=new Ie(N);W.colorSpace=Ae,W.anisotropy=2;function L(){let P=N.getContext("2d");P.clearRect(0,0,1024,I),P.fillStyle="#0f2d3d",P.fillRect(0,0,1024,I),I>=224&&(P.fillStyle="#ffd66b",P.fillRect(24,16,976,9),P.fillRect(24,I-25,976,9));let F=I*B-85;if(c?.naturalWidth>0&&c?.naturalHeight>0){let k=document.createElement("canvas");k.width=1024,k.height=192;let z=k.getContext("2d");z.drawImage(c,0,0,c.naturalWidth,c.naturalHeight*.53,62,11,900,171),z.globalCompositeOperation="source-in",z.fillStyle="#fff",z.fillRect(0,0,1024,192),z.globalCompositeOperation="source-over",P.drawImage(k,0,F-11)}else P.fillStyle="#fff",P.font="italic 900 162px Arial",P.textAlign="center",P.textBaseline="middle",P.fillText("TFJONES",512,F+85,900);q&&(P.fillStyle="#ffd66b",P.font="bold 60px Arial",P.textAlign="center",P.textBaseline="middle",P.fillText(q,512,I*.84,900)),W.needsUpdate=!0}return h.push(L),L(),new Se({map:W,roughness:.4,metalness:.05})}function u(I,B,q,N,W,L,P){let F=je(t,I,B,q,N,W,L,P),k=F.geometry,z=[...k.groups],G=[...new Set(I)],Y=[];k.clearGroups();for(let ne=0;ne<G.length;ne++){let Z=Y.length;for(let J of z)if(I[J.materialIndex]===G[ne])for(let ue=J.start;ue<J.start+J.count;ue++)Y.push(k.index.array[ue]);k.addGroup(Z,Y.length-Z,ne)}return k.setIndex(Y),F.material=G,F}let d=f(512,.44,"RACING 07"),p=f(720,.73),g=f(192),v=f(224);c&&!c.complete&&c.addEventListener?.("load",()=>h.forEach(I=>I()),{once:!0});let x=new Se({color:"#fff1bb",emissive:"#ffe3a0",emissiveIntensity:.75,roughness:.28}),M=new Se({color:"#ff4156",emissive:"#e62347",emissiveIntensity:.55,roughness:.3}),_=Ln(.49,.59);_.position.y=.002,e.add(_),je(t,i,.252,.029,.382,0,.111,0).name="Buggy chassis";let m=new ut;for(let[I,[B,q]]of[[-.081,-.204],[.081,-.204],[.123,-.122],[.12,.161],[.091,.19],[-.091,.19],[-.12,.161],[-.123,-.122]].entries())I===0?m.moveTo(B,-q):m.lineTo(B,-q);m.closePath();let b=Gt(t,new $t(m,{depth:.054,bevelEnabled:!0,bevelSize:.009,bevelThickness:.006,bevelSegments:2,steps:1}),n,0,.122,0);b.rotation.x=-Math.PI/2,b.name="Blue rally body shell",u([i,i,p,i,i,i],.17,.017,.12,0,.185,-.128).name="TF Jones branded bonnet";for(let I of[-.071,.071])je(t,a,.015,.002,.12,I,.194,-.13);je(t,i,.284,.038,.027,0,.108,-.211).name="Front crash bumper",je(t,i,.26,.03,.026,0,.108,.211);for(let I of[-1,1])u([g,g,a,a,i,i],.016,.034,.18,I*.128,.157,.033).name=I<0?"TF Jones left side panel":"TF Jones right side panel",Un(t,o,[I*.126,.14,-.1],[I*.126,.16,.13],.006),Un(t,i,[I*.065,.113,-.13],[I*.146,.087,-.136],.011),Un(t,i,[I*.065,.113,.13],[I*.146,.087,.136],.011);let C=je(t,l,.167,.085,.008,0,.226,-.037);C.rotation.x=-.34,je(t,l,.16,.07,.006,0,.224,.077).rotation.x=.12,je(t,i,.18,.008,.097,0,.269,.021);for(let I of[-.091,.091])Un(t,a,[I,.177,-.054],[I,.272,-.008],.006),Un(t,a,[I,.177,.09],[I,.272,.065],.006),Un(t,a,[I,.272,-.008],[I,.272,.065],.006);u([n,n,d,i,n,n],.187,.01,.091,0,.279,.025).name="TF Jones racing roof";let S=yr(t,new Ne(.063,.063),Ad(),0,-.166,.195);S.name="Race number seven";for(let I of[-.069,.069]){Un(t,i,[I,.174,.146],[I,.245,.195],.008);let B=Gt(t,new ke(.014,.014,.009,10),x,I,.16,-.202);B.rotation.x=Math.PI/2,je(t,M,.033,.014,.008,I,.158,.195)}u([i,i,v,i,i,i],.29,.016,.063,0,.249,.202).name="TF Jones rear rally spoiler";for(let I of[-.14,.14])je(t,a,.012,.03,.065,I,.257,.202);let T=Un(t,i,[.072,.18,.094],[.085,.374,.118],.0018);T.name="RC receiver antenna",Gt(t,new Ke(.005,6,4),a,.085,.375,.118);let A=[];for(let I of[-1,1])for(let B of[!0,!1]){let q=new _e;q.name=B?"Steering wheel pivot":"Rear axle",q.position.set(I*.146,.078,B?-.137:.137),e.add(q);let N=new _e;N.name=(B?"Front":"Rear")+(I<0?" left":" right")+" tire",q.add(N);let W=Gt(N,new ke(.077,.077,.055,16),r);W.rotation.z=Math.PI/2;let L=[],P=[];for(let F of[-1,1]){let k=Gt(N,new ke(.043,.043,.005,12),o,F*.028,0,0);k.rotation.z=Math.PI/2;let z=Gt(N,new ke(.015,.015,.007,10),a,F*.032,0,0);z.rotation.z=Math.PI/2;for(let G=0;G<5;G++){let Y=G*Math.PI*2/5;L.push([.003,.011,.028,F*.032,Math.cos(Y)*.024,Math.sin(Y)*.024,-Y])}}for(let F=0;F<10;F++){let k=F*Math.PI*2/10;P.push([.05,.006,.019,0,Math.cos(k)*.077,Math.sin(k)*.077,k])}rs(N,i,L,"Rim spokes"),rs(N,r,P,"Raised tire tread"),A.push({pivot:q,wheel:N,front:B})}let w=0,R=0,E=0,V=0;function D(I,B=0){e.position.set(I.x,I.y??st,I.z),e.rotation.y=I.yaw??0;let q=Number.isFinite(I.speed)?I.speed:0,N=Number.isFinite(I.wheelAngle)?I.wheelAngle:(I.steer||0)*.5;w=(w+q*Math.max(0,Math.min(.1,B))/.077)%(Math.PI*2);for(let L of A)L.pivot.rotation.y=L.front?N:0,L.wheel.rotation.x=-w;let W=B>.001?Qe.clamp((q-R)/B,-7,7):0;E=Ll(E,Qe.clamp(-N*q*.075,-.11,.11),B),V=Ll(V,W*.005,B),t.rotation.z=E,t.rotation.x=V,t.position.y=Math.abs(q)>.08?Math.sin(w*1.7)*.0015:0,R=q}return D({x:0,z:0,yaw:0,speed:0},0),{root:e,wheels:A,body:t,shadow:_,update:D}}function Cd(s,e,t,n,i,r){let o=new ut;o.moveTo(0,.16),o.lineTo(.125,-.005),o.lineTo(.05,-.005),o.lineTo(.05,-.14),o.lineTo(-.05,-.14),o.lineTo(-.05,-.005),o.lineTo(-.125,-.005),o.closePath();let a=yr(s,new Zt(o),r,e,t);return a.rotation.z=Math.atan2(-n,-i),a.name="Clockwise racing arrow",a}function Rd(s,e,t){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d");i.fillStyle="#102638",i.fillRect(0,0,128,128),i.strokeStyle="#8fe1c3",i.lineWidth=6,i.strokeRect(5,5,118,118),i.fillStyle="#f7fafc",i.font="bold 81px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(String(e+1),64,70);let r=new Ie(n);r.colorSpace=Ae;let o=yr(s,new Ne(.21,.21),new Me({map:r}),t.x-t.nx*.33,t.z-t.nz*.33);return o.rotation.z=Math.atan2(-t.nx,-t.nz),o.name="Checkpoint "+(e+1)+" number",o}function Nl(s){let e=new _e;e.name="Warehouse RC racing circuit",s.add(e);let{minX:t,maxX:n,minZ:i,maxZ:r}=yt.bounds,o=n-t,a=r-i,l=(t+n)/2,c=(i+r)/2,h=Rt("#132e40",.72),f=Rt("#29495b"),u=Rt("#f4e6bc",.6),d=Rt("#dd6574",.62),p=Rt("#f6d484",.5),g=Rt("#162a34",.9),v=new Se({color:"#8fe1c3",emissive:"#438b7e",emissiveIntensity:.26,roughness:.4});je(e,h,o+.18,.021,a+.18,l,.0105,c).name="Raised circuit mat";let x=yr(e,new Ne(o,a),Ed(),l,c,st);x.name="Asphalt racing surface";let M=[],_=[],m=[],b=[],C=[],S=[];for(let L of[t-.045,n+.045]){let P=je(e,f,.09,.092,a+.18,L,st+.046,c);P.name="RC boundary rail",M.push(P),je(e,v,.058,.006,a+.1,L,st+.095,c)}for(let L of[i-.045,r+.045]){let P=je(e,f,o,.092,.09,l,st+.046,L);P.name="RC boundary rail",M.push(P),je(e,v,o,.006,.058,l,st+.095,L)}for(let L of[t-.045,n+.045]){let P=Math.ceil(a/.22);for(let F=0;F<P;F++)(F%2?C:b).push([.085,.004,a/P-.003,L,st+.097,i+(F+.5)*a/P])}for(let L of[i-.045,r+.045]){let P=Math.ceil(o/.22);for(let F=0;F<P;F++)(F%2?C:b).push([o/P-.003,.004,.085,t+(F+.5)*o/P,st+.097,L])}let T=xi();T.roughness=.85;for(let L of yt.obstacles){let{x:P,z:F,halfX:k,halfZ:z}=L,G=k*2,Y=z*2,ne=new _e;ne.name="Pallet shipping island",e.add(ne),_.push(ne),je(ne,h,G,.125,Y,P,st+.0625,F).name="Solid island barrier";for(let ue of[-1,1]){let de=Math.ceil(Y/.22);for(let te=0;te<de;te++)(te%2?C:b).push([.055,.018,Y/de-.003,P+ue*(k-.0275),st+.13,F-z+(te+.5)*Y/de])}for(let ue of[-1,1]){let de=Math.ceil(G/.22);for(let te=0;te<de;te++)(te%2?C:b).push([G/de-.003,.018,.055,P-k+(te+.5)*G/de,st+.13,F+ue*(z-.0275)])}for(let ue=0;ue<7;ue++)je(ne,T,(G-.16)/7-.011,.025,Y-.18,P+(ue-3)*(G-.16)/7,st+.153,F);let Z=Rt("#c1a274",.94),J=Rt("#917b5e",.9);for(let[ue,de]of[-.93,0,.93].entries()){let te=.28+ue%2*.13,ce=.68,O=.72,Q=st+.18+te/2;je(ne,Z,ce,te,O,P+(ue===1?.1:-.09),Q,F+de).name="Warehouse cargo crate",je(ne,J,.037,.004,O+.004,P+(ue===1?.1:-.09),Q+te/2+.002,F+de);for(let ee of[-1,1])je(ne,J,.007,te,.029,P+(ue===1?.1:-.09)+ee*(ce/2+.004),Q,F+de)}for(let ue of[-1,1])for(let de of[-1,1]){let te=P+ue*(k-.14),ce=F+de*(z-.16);je(ne,g,.13,.015,.13,te,st+.167,ce),Gt(ne,new un(.054,.15,8),p,te,st+.25,ce),Gt(ne,new ke(.032,.04,.022,8),u,te,st+.245,ce)}}let A=yt.checkpoints[0],w=Math.abs(A.nz)>.5,R=A.halfWidth*2;for(let L=0;L<2;L++)for(let P=0;P<12;P++){let F=-R/2+(P+.5)*R/12,k=(L-.5)*.085,z=A.x+(w?F:k),G=A.z+(w?k:F);((L+P)%2?S:C).push([w?R/12-.002:.083,.001,w?.083:R/12-.002,z,st+.002,G])}rs(e,u,C,"Cream curb and starting line tiles"),rs(e,d,b,"Coral curb tiles"),rs(e,h,S,"Chequered starting line");let E=7903914,V=9429443;yt.checkpoints.forEach((L,P)=>{let F=new _e;F.name="RC checkpoint "+(P+1),e.add(F);let k=new Me({color:E,transparent:!0,opacity:.58,depthWrite:!1}),z=Cd(F,L.x+L.nx*.35,L.z+L.nz*.35,L.nx,L.nz,k),G=-L.nz,Y=L.nx,ne=[new y(L.x-G*L.halfWidth,st+.004,L.z-Y*L.halfWidth),new y(L.x+G*L.halfWidth,st+.004,L.z+Y*L.halfWidth)],Z=new St(new Be().setFromPoints(ne),new Ki({color:E,transparent:!0,opacity:.6,dashSize:.08,gapSize:.04}));Z.computeLineDistances(),F.add(Z),Z.name="Checkpoint crossing",Z.visible=P!==0,Rd(F,P,L),m.push({root:F,arrow:z,line:Z,material:k})});let D=document.createElement("canvas");D.width=768,D.height=192;let I=D.getContext("2d");I.fillStyle="#102b40",I.fillRect(0,0,768,192),I.fillStyle="#8fe1c3",I.fillRect(0,0,768,9),I.fillStyle="#f7fafc",I.font="bold 73px Arial",I.textAlign="center",I.fillText("TFJ RC RACING",384,116),I.fillStyle="#f6d484",I.font="26px Arial",I.fillText("PALLET CIRCUIT \xB7 FOLLOW THE ARROWS",384,166);let B=new Ie(D);B.colorSpace=Ae;let q=yt.obstacles[0].z+yt.obstacles[0].halfZ;je(e,h,1.2,.31,.026,0,.31,q-.014);for(let L of[-.5,.5])je(e,f,.021,.21,.021,L,.205,q-.029);let N=Gt(e,new Ne(1.18,.295),new Me({map:B}),0,.31,q+.002);N.name="Pallet circuit fascia";function W(L){for(let P=0;P<m.length;P++){let F=m[P],k=P===L;F.material.color.setHex(k?V:E),F.material.opacity=k?.95:.45,F.line.material.color.setHex(k?V:E),F.line.material.opacity=k?.92:.3}}return W(1),{root:e,rails:M,obstacles:_,checkpoints:m,road:x,setCheckpoint:W,surfaceY:st}}var Fl="tfj-rc-best-lap-v1",Bl="tfj-rc-best-race-v1",Ol=s=>Qe.clamp(Number.isFinite(s?.value)?s.value:s?.pressed?1:0,0,1);function zl(s,e,t,n){let i=new _e;i.name="Warehouse RC car racing",i.visible=!1,e.add(i);let r=Nl(i),o=Dl(i),a=document.createElement("canvas");a.width=1280,a.height=768;let l=a.getContext("2d"),c=new Ie(a);c.colorSpace=Ae;let h=new ge(new Ne(2.7,1.62),new Me({map:c}));h.name="RC race scoreboard",h.position.set(0,2.05,yt.bounds.minZ-.2),i.add(h);let f=new ge(new ve(2.77,1.69,.055),new Se({color:1058613,roughness:.6}));f.position.copy(h.position),f.position.z-=.037,i.add(f);for(let P of[-1.34,1.34]){let F=new ge(new ve(.038,2.92,.038),new Se({color:4019813,metalness:.3,roughness:.5}));F.position.set(P,1.46,h.position.z-.04),i.add(F)}let u=Ct("TFJ RC RACING","WAREHOUSE  /  THREE-LAP TIME TRIAL","play",X.blue,2.6);u.position.set(0,3.27,h.position.z),i.add(u);let d=[];for(let P=0;P<3;P++){let F=new ge(new Ke(.065,12,8),new Me({color:2307910}));F.position.set((P-1)*.21,1.13,h.position.z+.03),i.add(F),d.push(F)}let p=null,g=null,v=!1,x=oa(),M=3,_=!1,m=!1,b=!1,C=null,S=null,T=0,A="Release trigger, then get ready!",w=!1;function R(P,F){try{let k=localStorage.getItem(P),z=k===null||!k.trim()?NaN:Number(k);return Number.isSafeInteger(z)&&z>=F&&z<=36e5?z:null}catch{return null}}C=R(Fl,1e3),S=R(Bl,3e3);function E(){_t(l,1280,768),j(l,"TF JONES  /  PALLET CIRCUIT",36,46,26,X.blue,"700"),j(l,x.finished?"RACE COMPLETE":"THREE-LAP TIME TRIAL",36,108,49,X.ink,"700"),Ye(l,885,29,356,135,{top:"#214b54",bottom:"#102e40",stroke:X.mint}),j(l,"BEST LAP",909,73,26,X.mint,"700"),j(l,C===null?"\u2014":Qt(C/1e3),909,137,53,X.gold,"700"),j(l,M>0?`READY  ${Math.ceil(M)}`:x.finished?"FINISH!":`LAP ${x.completedLaps+1} / ${3}`,36,210,55,X.gold,"700"),j(l,Qt(x.elapsed),693,215,66,X.ink,"700"),j(l,`Current lap ${Qt(x.lapTime)}`,37,263,32,X.mint,"600"),j(l,`Best race ${S===null?"\u2014":Qt(S/1e3)}`,692,263,30,X.muted,"500");for(let P=0;P<3;P++){let F=36+P*404,k=x.laps[P]!==void 0;Ye(l,F,296,385,156,{top:k?"#285749":"#1c3f55",bottom:"#102b3e",stroke:k?X.mint:"#496679"}),j(l,`LAP ${P+1}`,F+22,337,25,k?X.mint:X.muted,"700"),j(l,k?Qt(x.laps[P]):"\u2014",F+22,410,54,X.ink,"700")}j(l,A,37,503,30,X.ink,"600",1204),j(l,"LEFT STICK  STEER",37,562,28,X.blue,"700"),j(l,"RIGHT TRIGGER  GAS",638,562,28,X.gold,"700"),j(l,"RIGHT GRIP  BRAKE / REVERSE",37,612,25,X.muted),j(l,x.finished?"A  RACE AGAIN":"A  RESCUE CAR  (+2s)",638,612,25,X.mint,"700"),j(l,"X  RETURN TO DRIVER SPOT",37,690,25,X.muted),j(l,"Y  PAUSE / MENU   \xB7   B  LEAVE",638,690,25,X.muted),c.needsUpdate=!0,d.forEach((P,F)=>P.material.color.setHex(x.finished?9429443:M>2?F===0?15755368:2307910:M>1?F<=1?16176260:2307910:M>0?16176260:9429443))}function V(){let P=yt.bounds;for(let F of[3,3.5,4,2.5,4.5])for(let k of[-26.5,-26,-27,-25.5]){let z=!0;for(let G=P.minX-.11;G<=P.maxX+.11;G+=.3)for(let Y=P.minZ-.3;Y<=P.maxZ+.12;Y+=.3)(s.blocked(F+G,k+Y,0)||Math.abs(s.groundAt(F+G,k+Y,.1))>.1)&&(z=!1);if(z)for(let G of[0,-.75,.75,-1.5,1.5]){let Y=new y(F+G,0,k+P.maxZ+1.05),ne=!0;for(let Z of[-.25,0,.25])for(let J of[-.25,0,.25])(s.blocked(Y.x+Z,Y.z+J,0)||Math.abs(s.groundAt(Y.x+Z,Y.z+J,.1))>.1)&&(ne=!1);if(ne)return{origin:new y(F,0,k),view:Y}}}return null}function D(){x=oa(),M=3,_=!1,A="Release trigger. Follow the mint arrows clockwise.",T=0,w=!1,o.update(x,0),r.setCheckpoint(x.nextCheckpoint),E()}function I(){let P=V();return!P||!s.xrTeleport(P.view.x,0,P.view.z)?!1:(p=P.origin,g=P.view,i.position.copy(p),s.xrFace?.(0),v=i.visible=!0,m=b=!1,D(),t("RC racing! Left stick steers, right trigger drives. Grip brakes and reverses. A rescues the car."),!0)}function B(){_=!1}function q(){v=i.visible=!1,B()}function N(){return!g||!s.xrTeleport(g.x,0,g.z)?!1:(s.xrFace?.(0),B(),!0)}function W(P){let F=Math.round(P*1e3);if(!(F<1e3||F>36e5)&&(C===null||F<C)){C=F;try{localStorage.setItem(Fl,String(F))}catch{}t(`New RC lap record! ${Qt(F/1e3)}`)}}function L(P,F){if(!v)return;let k=Math.max(0,Math.min(.1,P.dt||0)),z=!!P.right?.gamepad?.buttons[4]?.pressed,G=!!P.left?.gamepad?.buttons[4]?.pressed,Y=z&&!m,ne=G&&!b;if(m=z,b=G,F){B();return}if(!P.right?.gamepad||!P.left?.gamepad){B(),w||(w=!0,A="Reconnect both controllers. Race paused.",E());return}if(w&&(w=!1,A="Controller ready. Release trigger to resume.",E()),ne&&(A=N()?"Driver viewpoint restored. Release trigger to drive.":"Driver spot is blocked. Use B to leave the race.",E()),Y)if(x.finished){D();return}else M<=0&&Il(x)&&(A="Car rescued at your last gate. +2 seconds.",n(.2),E());let Z=Ol(P.right.gamepad.buttons[0]),J=Ol(P.right.gamepad.buttons[1]);Z<.1&&J<.1&&(_=!0);let ue=k;if(M>0){let ce=Math.min(M,k);if(M-=ce,ue-=ce,M<=0&&(A="GO! Drive through the mint gates in order.",n(.4)),T+=k,(T>=.1||M<=0)&&(T=0,E()),M>0)return}if(x.finished)return;let de=_i(ns(P.left)[0]),te=x.collisions;if(Pl(x,{steer:de,throttle:_?Z:0,brake:_?J:0},ue),o.update(x,ue),r.setCheckpoint(x.nextCheckpoint),x.collisions!==te&&(n(.12),A="Bump! Ease off, reverse, or use A to rescue."),x.checkpointPassed!==null&&(A=`Gate ${x.checkpointPassed+1} cleared. Follow the mint arrow.`),x.justLap!==null&&(W(x.justLap),n(.4),A=`Lap ${x.completedLaps}: ${Qt(x.justLap)}`,E()),x.justFinished){let ce=Math.round(x.elapsed*1e3);if(ce>=3e3&&ce<=36e5&&(S===null||ce<S)){S=ce;try{localStorage.setItem(Bl,String(ce))}catch{}}let O=Math.min(...x.laps);A=`${O<=14?"Gold":O<=20?"Silver":"Bronze"} lap medal! Race ${Qt(x.elapsed)}. A to replay.`,r.setCheckpoint(null),t(`RC race complete! ${Qt(x.elapsed)} \xB7 A to race again.`),n(.7),E()}T+=k,T>=.1&&(T=0,E())}return E(),{root:i,track:r,car:o,board:h,start:I,stop:q,cancel:B,tick:L,returnToView:N,get active(){return v},get origin(){return p},get view(){return g},get state(){return x},get countdown(){return M},get bestLapMs(){return C},get bestRaceMs(){return S}}}var br="tfj-memory-bests-v1",vr=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>{if(!["string","number"].includes(typeof s)||typeof s=="string"&&!s.trim())return null;let n=Number(s);return Number.isSafeInteger(n)&&n>=e&&n<=t?n:null};function Mr(s){let e=s;try{typeof e=="string"&&(e=JSON.parse(e))}catch{return{}}if(!e||typeof e!="object"||Array.isArray(e))return{};let t={};for(let n=2;n<=6;n++){let i=vr(e[n],n,1e4);i!==null&&(t[n]=i)}return t}function kl(s,e=0,t={}){let n=_=>{try{return s?.getItem(_)??null}catch{return null}},i=(_,m,b,C=0,S=!1)=>{let T=vr(n(_),C,b),A=vr(t[m],C,b),w=[T,A].filter(R=>R!==null);return w.length?S?Math.min(...w):Math.max(...w):null},r=(_,m,b,C)=>_===null?0:_>=C?3:_>=b?2:_>=m?1:0,o=[],a=(_,m,b,C,S,T,A,w,R)=>{let E=i(b,_,C);o.push({id:_,title:m,value:E,score:E===null?"\u2014":String(E),detail:E===null?"Play a complete round":A,medal:r(E,...S),goal:`Gold: ${S[2]} ${T}`,icon:w,accent:R})};a("bowling","WAREHOUSE BOWLING","tfj-bowling-best-10-v1",100,[10,50,80],"pins","pins / 100 \xB7 ten frames","target","#8bc8f3"),a("darts","STAFF-ROOM DARTS","tfj-vr-darts-best-v1",540,[50,150,300],"points","points \xB7 nine darts","target","#8fe1c3");let l=i("tfj-mini-golf-best-v1","golf",48,6,!0);o.push({id:"golf",title:"WAREHOUSE MINI-GOLF",value:l,score:l===null?"\u2014":String(l),detail:l===null?"Finish all six holes":"strokes \xB7 six holes \xB7 lower wins",medal:l===null?0:l<=18?3:l<=24?2:1,goal:"Gold: 18 strokes or fewer",icon:"golf",accent:"#8fe1c3"}),a("basketball","BASKETBALL","tfj-basket-best",10,[2,5,8],"baskets","baskets / 10 throws","target","#f6d484"),a("planes","PAPER PLANES","tfj-planes-best-v1",150,[10,50,100],"points","points \xB7 five flights","play","#8bc8f3");let c=i("tfj-rc-best-lap-v1","rc",36e5,1e3,!0),h=c===null?0:Math.floor(c/6e4),f=c===null?0:Math.floor(c/1e3)%60,u=c===null?0:Math.floor(c/10)%100;o.push({id:"rc",title:"RC CAR RACING",value:c,score:c===null?"\u2014":`${h}:${String(f).padStart(2,"0")}.${String(u).padStart(2,"0")}`,detail:c===null?"Complete a lap":"best lap \xB7 lower wins",medal:c===null?0:c<=14e3?3:c<=2e4?2:1,goal:"Gold: lap in 14 seconds",icon:"car",accent:"#8bc8f3"});let d=Mr(n(br)),p=Mr(t.memory);for(let[_,m]of Object.entries(p))d[_]=Math.min(d[_]??1/0,m);let g=Object.keys(d).map(Number).sort((_,m)=>m-_)[0]??null,v=g===null?null:d[g];o.push({id:"memory",title:"MEMORY MATCH",value:v,pairs:g,score:v===null?"\u2014":String(v),detail:v===null?"Use your collected cards":`turns \xB7 ${g}-pair deck \xB7 lower wins`,medal:v===null?0:v===g?3:v<=g+2?2:1,goal:g===null?"Practice rounds do not count":`Gold: ${g} turns \xB7 perfect match`,icon:"book",accent:"#f3b2cf"});let x=vr(e,0,18)??0;o.push({id:"cards",title:"MOLLIE\u2019S CARD ALBUM",value:x,score:`${x} / 18`,detail:x===18?"Collection complete!":"Cards found around the yard",medal:r(x,6,12,18),goal:"Gold: collect all 18 cards",icon:"book",accent:"#f6d484"});let M=i("tfj-vr-jigglypuff-rounds-v1","hide",Number.MAX_SAFE_INTEGER)??0;return o.push({id:"hide",title:"JIGGLYPUFF SEEKER",value:M,score:String(M),detail:"complete hide-and-seek rounds",medal:r(M,1,3,5),goal:"Gold: complete five hunts",icon:"puff",accent:"#f3b2cf"}),o}var aa=s=>["TO EARN","BRONZE","SILVER","GOLD"][s];var yi=[5465977,12025936,13359585,16176260];function Pd(s){let e=s.colliders.map(t=>new qe(new y(t.min.x,t.min.y,t.min.z),new y(t.max.x,t.max.y,t.max.z)));for(let t of s.colliders){let{min:n,max:i}=t;if(n.x<7.5||i.x>9||i.x-n.x>.3||i.z-n.z<3.9||n.y>.1||i.y<2.78)continue;let r=(n.z+i.z)/2;for(let o of[r,r-.45,r+.45]){if(o-1.86<n.z||o+1.86>i.z)continue;let a=new y(n.x-.045,0,o),l=a.clone().add(new y(-2.45,0,0)),c=!0;for(let f of[-.3,0,.3])for(let u of[-.4,0,.4])(s.blocked(l.x+f,l.z+u,0)||Math.abs(s.groundAt(l.x+f,l.z+u,.1))>.1)&&(c=!1);let h=l.clone().add(new y(0,1.68,0));for(let f of[-1.7,-.6,.6,1.7])for(let u of[.8,1.7,2.65]){let d=a.clone().add(new y(-.052,u,f)),p=d.clone().sub(h),g=p.length(),v=new nt(h,p.normalize()),x=new y;e.some(M=>v.intersectBox(M,x)&&x.distanceTo(h)<g-.015)&&(c=!1)}if(c)return{mount:a,view:l,heading:-Math.PI/2}}}return null}function Vl(s,e,t,n){let i=new _e;i.name="Arcade wall of fame",e.add(i);let r=Pd(s);i.visible=!!r,r&&(i.position.copy(r.mount),i.rotation.y=-Math.PI/2);let o=document.createElement("canvas");o.width=2048,o.height=1152;let a=o.getContext("2d"),l=new Ie(o);l.colorSpace=Ae,l.anisotropy=4;let c=new ge(new Ne(3.6,2.025),new Me({map:l}));c.name="Mollie\u2019s personal records",c.position.set(0,1.7,.052),i.add(c);let h=(T,A,w,R,E)=>{let V=new ge(T,A);return V.position.set(w,R,E),i.add(V),V},f=new Se({color:1058612,roughness:.7}),u=new Se({color:9215391,metalness:.6,roughness:.35});h(new ve(3.72,2.14,.075),f,0,1.7,0);let d=new Me({color:16176260});for(let T of[.626,2.774])h(new ve(3.74,.024,.045),d,0,T,.031);for(let T of[-1.862,1.862])h(new ve(.024,2.16,.045),d,T,1.7,.031);h(new ve(3.74,.045,.24),u,0,.32,.13);let p=[];for(let T=1;T<=3;T++){let A=new _e;A.name=`${aa(T)} trophy`,A.position.set((T-2)*1.05,.346,.14),i.add(A);let w=new Se({color:yi[0],metalness:.68,roughness:.32}),R=[new ge(new ve(.24,.044,.16),f),new ge(new ke(.069,.088,.052,16),w),new ge(new ke(.018,.029,.072,12),w),new ge(new Jn([new le(.025,0),new le(.06,.045),new le(.089,.12),new le(.078,.13),new le(.049,.052),new le(.014,.021)],20),w)];R[0].position.y=.022,R[1].position.y=.069,R[2].position.y=.12,R[3].position.y=.15,A.add(...R);for(let E of[-.092,.092]){let V=new ge(new Ut(.042,.008,6,14),w);V.position.set(E,.233,0),A.add(V)}p.push({trophy:A,material:w,tier:T})}let g=[],v=null,x=0,M=0,_=0;function m(){_t(a,2048,1152),j(a,"TF JONES  /  WAREHOUSE ARCADE",54,64,27,X.blue,"700"),j(a,"WALL OF FAME",52,154,86,X.ink,"700"),j(a,"Mollie\u2019s personal bests",54,213,35,X.gold,"600");let T=g.filter(w=>w.medal).length,A=g.filter(w=>w.medal===3).length;Ye(a,1535,46,456,174,{top:"#254f54",bottom:"#142f43",stroke:X.gold,radius:20}),j(a,`${T} / ${g.length}`,1567,145,67,X.gold,"700"),j(a,`MEDALS EARNED  \xB7  ${A} GOLD`,1567,191,26,X.ink,"700"),g.forEach((w,R)=>{let E=54+R%3*650,V=253+Math.floor(R/3)*256,D=638;Ye(a,E,V,D,244,{top:"#234955",bottom:"#0d2639",stroke:w.medal?`#${yi[w.medal].toString(16).padStart(6,"0")}`:"#466374",radius:18}),pn(a,w.icon,E+39,V+36,40,w.accent),j(a,w.title,E+77,V+43,30,X.ink,"700",D-98),j(a,w.score,E+28,V+119,76,X.gold,"700",D-56),j(a,w.detail,E+28,V+153,25,X.muted,"500",D-56);let B=`#${yi[w.medal].toString(16).padStart(6,"0")}`;Ye(a,E+27,V+167,D-54,36,{top:w.medal?"#24474d":"#162c3c",bottom:"#172f3c",stroke:B,radius:10}),j(a,aa(w.medal),E+44,V+194,26,w.medal?B:X.muted,"700"),j(a,w.goal,E+28,V+229,25,w.accent,"500",D-56)}),j(a,"YOUR SCORES \xB7 THIS BROWSER",54,1091,30,X.blue,"700"),j(a,"Play. Beat your best. Earn your place.",1160,1091,30,X.muted,"500"),l.needsUpdate=!0,_++;for(let w of p){let R=g.some(E=>E.medal>=w.tier);w.material.color.set(R?yi[w.tier]:yi[0]),w.material.emissive.set(R?yi[w.tier]:0),w.material.emissiveIntensity=R?.09:0}}function b(){let T;try{T=globalThis.localStorage}catch{}let A=kl(T,s.mollie.found.size,t()),w=JSON.stringify(A);if(w===v)return!1;let R=v!==null&&A.some((E,V)=>E.value!==null&&(g[V].value===null||E.id==="memory"&&E.pairs>g[V].pairs||(["golf","memory","rc"].includes(E.id)?E.value<g[V].value:E.value>g[V].value)||E.medal>g[V].medal));return g=A,v=w,R&&(M=2.5),m(),!0}function C(T){x-=T,x<=0&&(x=.75,b()),M=Math.max(0,M-T),d.color.set(M>0&&Math.sin(M*7)>0?9429443:16176260)}function S(){return b(),!r||!s.xrTeleport(r.view.x,0,r.view.z)?(n("The wall approach is blocked. Walk to the Unit 9 office divider."),!1):(s.xrFace?.(r.heading),n("Welcome to the wall of fame! Your personal records update as you play."),!0)}return b(),{root:i,panel:c,cups:p,site:r,refresh:b,tick:C,visit:S,get records(){return g},get draws(){return _},get celebrating(){return M>0}}}function Id(s,e,t,n=.48){if(s.z<=t.z||e.z>t.z)return!1;let i=(s.z-t.z)/(s.z-e.z);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.y+(e.y-s.y)*i-t.y)<n}function Ld(s,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let r=-.25-1.1/Math.max(.5,i);return n.y+=(r-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:s.clone().addScaledVector(n,t),v:n}}function Gl(s,e,t,n){let i=new _e;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let r=new _e;i.add(r);let o=k=>new Se({color:k,roughness:.7,side:it}),a=new Be;a.setAttribute("position",new Pe([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new ge(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new St(new Be().setFromPoints([new y(0,0,-.28),new y(0,.056,.1)]),new bt({color:7576243}));l.add(c);let h=s.colliders.map(k=>new qe(new y(k.min.x,k.min.y,k.min.z),new y(k.max.x,k.max.y,k.max.z)).expandByScalar(.06)),f=document.createElement("canvas");f.width=1024,f.height=640;let u=f.getContext("2d"),d=new Ie(f);d.colorSpace=Ae;let p=new ge(new Ne(1.6,1),new Me({map:d}));p.name="Paper-plane scoreboard",i.add(p);let g=!1,v=!1,x=null,M=null,_=[],m=[],b=0,C=!1,S=!1,T=!1,A=0,w=0,R=0,E=0,V="Five planes. Aim through the hoops!";try{R=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function D(){_t(u,1024,640),j(u,"PAPER-PLANE CHALLENGE",35,68,44,X.gold),j(u,`${w} points`,35,190,72),j(u,`BEST ${R}`,660,180,35,X.mint),j(u,`${A} / 5 planes`,35,280,44),j(u,`Longest glide: ${E.toFixed(1)} m`,35,349,32,X.mint),j(u,V,35,428,29,X.ink,"600",950),j(u,A===5&&!x?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),j(u,"10 points per hoop \xB7 Y: pause/menu",35,590,27,X.muted),d.needsUpdate=!0}function I(){for(let k of[3,2,1.5,4,5])for(let z of[-30,-29,-28]){let G=!0;for(let Y=-1;Y<=1;Y+=.5)for(let ne=0;ne<=7.8;ne+=.4)(s.blocked(k+Y,z+ne,0)||Math.abs(s.groundAt(k+Y,z+ne,.1))>.1)&&(G=!1);if(G)return new y(k,0,z)}return null}function B(){for(let G of[...r.children])G.traverse(Y=>{Y.geometry?.dispose(),Y.material?.dispose()}),r.remove(G);_=[];for(let G=0;G<3;G++){let Y=M.clone().add(new y(0,1.5-G*.22,5-G*1.8)),ne=new ge(new Ut(.6,.035,12,48),o(G===0?"#f6d484":G===1?"#8fe1c3":"#8bc8f3"));ne.position.copy(Y),r.add(ne),_.push({center:Y,mesh:ne});let Z=new ge(new ke(.018,.018,Y.y,8),o("#36576a"));Z.position.set(Y.x-.64,Y.y/2,Y.z),r.add(Z)}p.position.copy(M).add(new y(0,2.3,-.5));let k=Ct("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);k.position.copy(M).add(new y(0,3.18,-.5)),r.add(k);for(let G of[2,5]){let Y=Dn(1.3);Y.position.copy(M).add(new y(0,4.2,G)),r.add(Y)}let z=new ge(new ve(2,.02,.045),o("#f6d484"));z.position.copy(M).add(new y(0,.02,6.7)),r.add(z)}function q(){A=w=E=0,x=null,v=!1,m=[],l.visible=!1,V="Five planes. Aim through the hoops!",_.forEach(k=>k.mesh.material.emissive?.set(0)),D()}function N(){let k=I();return!k||!s.xrTeleport(k.x,0,k.z+7.4)?!1:(M=k,B(),g=i.visible=!0,s.xrFace?.(0),C=!1,S=!0,q(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function W(){g=i.visible=v=l.visible=!1,x=null,m=[],C=!1}function L(){v=!1,m=[],C=!1,S=!0,x||(l.visible=!1)}function P(k){if(x){if(E=Math.max(E,x.distance),V=`${k} \xB7 ${x.hits.size} hoops \xB7 ${x.distance.toFixed(1)} m`,x=null,A===5){R=Math.max(R,w);try{localStorage.setItem("tfj-planes-best-v1",String(R))}catch{}t(`Paper planes complete! ${w} points. A to replay.`)}D()}}function F(k,z){if(!g)return;let{dt:G,right:Y,controller:ne}=k;b+=G;let Z=!!Y?.gamepad?.buttons[0]?.pressed,J=!!Y?.gamepad?.buttons[4]?.pressed;if(z){L();return}Z||(C=!0),J&&!T&&A===5&&!x&&q(),T=J;let ue=ne&&ne.visible!==!1?ne.getWorldPosition(new y):null;if(ue&&Z&&!S&&C&&!x&&A<5){let de=s.stats();Math.abs(de.x-M.x)>1.2||de.z<M.z+6.7||de.z>M.z+8.2||de.y>.15?t("Return behind the paper-plane launch line."):(v=!0,m=[],l.visible=!0)}if(v){if(!ue)L();else if(l.position.copy(ue),l.quaternion.copy(ne.getWorldQuaternion(new Re)),m.push({time:b,p:ue.clone()}),m=m.filter(de=>b-de.time<.14),!Z&&S){let de=m.find(ce=>b-ce.time>=.04),te=de?ue.clone().sub(de.p).divideScalar(b-de.time).clampLength(0,10):new y;v=!1,te.length()<.8||te.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(A++,x={p:ue.clone(),v:te,start:ue.clone(),distance:0,age:0,hits:new Set},_.forEach(ce=>ce.mesh.material.emissive?.set(0)),V="In flight\u2026",D())}}if(x){let de=Math.max(1,Math.ceil(G/.012)),te=G/de;for(let ce=0;ce<de&&x;ce++){let O=x,Q=Ld(O.p,O.v,te),ee=Q.p.clone().sub(O.p),se=ee.length(),re=new nt(O.p,ee.normalize()),ye=new y,fe=!1;for(let Te of h)if(Te.containsPoint(O.p)||re.intersectBox(Te,ye)&&ye.distanceTo(O.p)<=se){fe=!0;break}if(fe){P("Hit scenery");break}for(let Te=0;Te<_.length;Te++)!O.hits.has(Te)&&Id(O.p,Q.p,_[Te].center)&&(O.hits.add(Te),w+=10,_[Te].mesh.material.emissive.set("#3ca58b"),n(.45),D());O.p.copy(Q.p),O.v.copy(Q.v),O.age+=te,O.distance=Math.max(O.distance,Math.hypot(O.p.x-O.start.x,O.p.z-O.start.z)),l.position.copy(O.p),l.quaternion.setFromUnitVectors(new y(0,0,-1),O.v.clone().normalize()),l.rotateZ(Math.sin(O.age*3)*.04),O.p.y<.07?(l.position.y=.07,l.rotation.x=0,P("Landed")):(O.age>10||O.distance>20)&&P("Glide complete")}}S=Z}return{root:i,get best(){return R},start:N,stop:W,cancel:L,tick:F,get held(){return v},get flight(){return x},get origin(){return M},get rings(){return _},get throws(){return A},get score(){return w},get longest(){return E}}}function Hl(s,e){let t=new _e;t.name="Bowling supporters",e.add(t);let n=[],i=0,r=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(g){t.visible=!0,i=0,r=0;for(let x of n)x.group.visible=!1,x.shadow&&(x.shadow.visible=!1);let v=[];for(let x of[5.2,3.8,6])for(let M of[-1.9,1.9,-2.4,2.4]){if(v.length===4)break;let _=g.clone().add(new y(M,0,x));s.blocked(_.x,_.z,0)||Math.abs(s.groundAt(_.x,_.z,.1))>.1||v.some(m=>m.distanceTo(_)<1)||v.push(_)}for(let x=0;x<v.length;x++){if(!n[x]){let m=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][x]});m.group.name=`Bowling supporter ${x+1}`,m.group.scale.setScalar(.91+x*.025),m.bones=Object.fromEntries(l.map(b=>[b,m.model.getObjectByName(b)])),m.rest=Object.fromEntries(l.map(b=>[b,m.bones[b]?.quaternion.clone()])),m.shadow=Ln(.9,.6),t.add(m.shadow,m.group),n.push(m)}let M=n[x];M.group.visible=!0,M.group.position.copy(v[x]),M.base=v[x].clone(),M.shadow.visible=!0,M.shadow.position.copy(v[x]).add(new y(0,.012,0));let _=s.stats();M.group.rotation.y=Math.atan2(_.x-v[x].x,_.z-v[x].z),M.gesture="idle",M.target=new y(_.x,_.y+1.6,_.z),M.mixer.setTime(x*.73)}}function h(g=!1){i=g?3.6:2.2,o=g,a=!1}function f(){i=1.8,o=!1,a=!0}function u(g,v,x){let M=g.bones[v];if(!M)return;let _=M.parent.getWorldQuaternion(new Re),m=M.getWorldQuaternion(new Re),b=new y(0,1,0).applyQuaternion(m),C=new y(...x).normalize().applyQuaternion(g.group.getWorldQuaternion(new Re));M.quaternion.copy(_.invert().multiply(new Re().setFromUnitVectors(b,C).multiply(m))),g.model.updateMatrixWorld(!0)}function d(g,v,x={}){if(v||!t.visible)return;r+=g,i=Math.max(0,i-g);let M=s.stats();n.forEach((_,m)=>{if(!_.group.visible)return;let b=r+m*1.4,C=(o?3.6:a?1.8:2.2)-i,S=i>0&&C>=m*.11,T=!x.ball&&!x.held&&!i&&Math.sin(b*.43)>.85,A=n[(m+1)%n.length],w=x.ball||x.eye||new y(M.x,M.y+1.6,M.z);T&&A?.group.visible&&(w=A.base.clone().add(new y(0,1.5,0))),S&&(w=x.eye||new y(M.x,M.y+1.6,M.z)),_.target.copy(w);let R=Math.atan2(w.x-_.base.x,w.z-_.base.z);_.group.rotation.y+=Math.atan2(Math.sin(R-_.group.rotation.y),Math.cos(R-_.group.rotation.y))*Math.min(1,g*2.8);let E=S?a?"wave":["clap","arms-up","fist-pump","wave"][m%4]:x.held?"anticipate":T?"chat":"idle";_.gesture=E;for(let D of l)_.bones[D]&&_.bones[D].quaternion.copy(_.rest[D]);if(_.animate(g,E==="wave"?"wave":"idle"),_.group.position.set(_.base.x,_.base.y+(S?Math.max(0,Math.sin(b*7))*(o?.11:.055):0),_.base.z),_.group.rotation.z=Math.sin(b*1.2)*.012,_.shadow.material.opacity=1-(_.group.position.y-_.base.y)*3,_.model.updateMatrixWorld(!0),E==="clap"){let D=Math.sin(b*13)*.25;u(_,"UpperArmL",[-.25,-.3,.65]),u(_,"UpperArmR",[.25,-.3,.65]),u(_,"LowerArmL",[.4+D,.35,.4]),u(_,"LowerArmR",[-.4-D,.35,.4])}if(E==="arms-up"&&(u(_,"UpperArmL",[-.65,.9,0]),u(_,"UpperArmR",[.65,.9,0]),u(_,"LowerArmL",[.15,1,.12]),u(_,"LowerArmR",[-.15,1,.12])),E==="fist-pump"){let D=.65+Math.sin(b*9)*.3;u(_,"UpperArmR",[.5,D,.3]),u(_,"LowerArmR",[-.2,1,.2])}E==="anticipate"&&(u(_,"UpperArmL",[-.2,-.6,.35]),u(_,"UpperArmR",[.2,-.6,.35]),u(_,"LowerArmL",[.3,.1,.6]),u(_,"LowerArmR",[-.3,.1,.6]));let V=_.bones.Head;if(V){let D=w.x-_.base.x,I=w.z-_.base.z,B=Math.atan2(Math.sin(R-_.group.rotation.y),Math.cos(R-_.group.rotation.y)),q=Math.atan2(w.y-(_.base.y+1.6),Math.hypot(D,I));V.rotateY(Qe.clamp(B,-.65,.65)),V.rotateX(-Qe.clamp(q,-.4,.3)+Math.sin(b*(T?3:1.1))*.035)}_.bones.Chest&&_.bones.Chest.rotateX(x.held?.065:Math.sin(b*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:h,encourage:f,tick:d,stop:p,get cheering(){return i>0},get people(){return n.filter(g=>g.group.visible)}}}function Wl(s,e,t,n,i=()=>{}){let r=new _e;r.name="Warehouse bowling",r.visible=!1,e.add(r);let o=Hl(s,r),a=H=>new Se({color:H,roughness:.55}),l=(H,U,K,ae,$,he=r)=>{let Ce=new ge(H,U);return Ce.position.set(K,ae,$),he.add(Ce),Ce},c=new _e;r.add(c);let h=null,f=[],u=!1,d=!1,p=null,g=[],v=0,x=!1,M=!1,_=!1,m=0,b=0,C=[],S=Array.from({length:10},()=>[]),T=0,A=0,w=0,R=!1;try{w=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let E=l(new Ke(.14,24,20),a("#5147b5"),0,.17,0);for(let[H,U,K]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new Ke(.023,8,8),a("#12162d"),H,U,K,E);E.visible=!1;let V=document.createElement("canvas");V.width=1536,V.height=1024;let D=V.getContext("2d"),I=new Ie(V);I.colorSpace=Ae;let B=l(new Ne(3.2,3.2*2/3),new Me({map:I}),0,2,0);B.name="Warehouse bowling scoreboard";let q=()=>C.reduce((H,U)=>H+U,0)+T,N=new _e;N.name="Bowling scoring computer",r.add(N);let W=l(new Ne(.96,.64),new Me({map:I}),0,0,.046,N);W.name="Bowling computer screen",l(new ve(1.02,.7,.08),a("#101a26"),0,0,0,N);let L=120,P=new Float32Array(L*3),F=new Float32Array(L*3),k=[],z=new Be;z.setAttribute("position",new Dt(P,3)),z.setAttribute("color",new Dt(F,3));let G=new di({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Io}),Y=new Vi(z,G);Y.name="Strike fireworks",Y.visible=!1,Y.frustumCulled=!1,r.add(Y);let ne=0,Z=0;function J(){i(!0),o.cheer(!0),Z++,ne=2.6,Y.visible=!0,G.opacity=1;for(let H=0;H<L;H++){let U=H%3,K=H*2.39996,ae=.65+H%11*.08,$=Math.sqrt(1-(H%17/8-1)**2);P.set([h.x+(U-1)*.65,1.35+U*.22,h.z+1.2],H*3),k[H]=new y(Math.cos(K)*$*ae,.7+Math.abs(Math.sin(K))*1.2,Math.sin(K)*$*ae);let he=new ze([16765286,7401417,16745144,9026559][H%4]);F.set([he.r,he.g,he.b],H*3)}z.attributes.position.needsUpdate=!0,z.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function ue(H){if(!(ne<=0)){ne=Math.max(0,ne-H),Y.visible=ne>0,G.opacity=Math.min(1,ne/.9);for(let U=0;U<L;U++){let K=k[U];K.y-=1.5*H,P[U*3]+=K.x*H,P[U*3+1]+=K.y*H,P[U*3+2]+=K.z*H}z.attributes.position.needsUpdate=!0}}function de(){_t(D,1536,1024),j(D,"TFJ BOWL  /  LANE 01",48,72,38,X.blue,"700"),j(D,"WAREHOUSE BOWLING",48,143,61,X.ink,"700"),Ye(D,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:X.mint,radius:22}),j(D,"TOTAL PINS",1120,86,34,X.mint),j(D,String(q()),1120,237,125,X.ink,"700"),j(D,"/ 100",1320,233,42,X.muted),j(D,m===10?"ROUND COMPLETE":`FRAME ${m+1}  \u2022  BOWL ${b+1}`,48,230,51,X.gold,"700");let H=0;for(let U=0;U<10;U++){let K=48+U%5*288,ae=290+Math.floor(U/5)*244,$=U===m&&m<10,he=S[U],Ce=he.length>0;Ye(D,K,ae,272,225,{top:$?"#225568":"#142e43",bottom:"#0b2032",stroke:$?X.gold:"#55758c",radius:14}),j(D,String(U+1),K+18,ae+45,37,$?X.gold:X.muted,"700");let pe=he[0]===10?"X":he[0]===0?"\u2013":he[0]??"",Le=he.length>1?he[0]+he[1]===10?"/":he[1]===0?"\u2013":he[1]:"";D.strokeStyle="#5c7b90",D.lineWidth=2,D.strokeRect(K+78,ae+8,89,77),D.strokeRect(K+167,ae+8,97,77),j(D,String(pe),K+96,ae+67,53,X.ink,"700"),j(D,String(Le),K+190,ae+67,53,X.ink,"700"),H+=U<C.length?C[U]:U===m?T:0,j(D,Ce?String(H):"\u2014",K+30,ae+189,89,$?X.gold:X.ink,"700")}j(D,`PERSONAL BEST  ${w} / 100`,48,837,38,X.mint,"700"),j(D,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,X.muted,"600"),j(D,m===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,X.gold,"700"),j(D,"Y  MENU",1270,957,34,X.ink,"700"),I.needsUpdate=!0}function te(){for(let H of[3,2,1.5,4,5,6])for(let U of[-30,-29,-28,-27]){let K=!0;for(let ae=-1.1;ae<=1.1;ae+=.55)for(let $=0;$<=7.8;$+=.3)(s.blocked(H+ae,U+$,0)||Math.abs(s.groundAt(H+ae,U+$,.1))>.1)&&(K=!1);if(K)return new y(H,0,U)}return null}function ce(){for(let $ of[...c.children])$.traverse(he=>{he.geometry?.dispose(),he.material&&he.material.dispose()}),c.remove($);c.position.copy(h),f=[],l(new ve(2.1,.025,7.3),xi(),0,.018,3.25,c);for(let $=-4;$<=4;$++)l(new ve(.009,.003,7.3),a("#9c805f"),$*.22,.032,3.25,c);for(let $ of[-1.15,1.15])l(new ve(.15,.05,7.3),a("#223747"),$,.02,3.25,c);for(let $ of[-1.045,1.045]){let he=l(new ve(.028,.025,7.3),new Se({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),$,.045,3.25,c);he.name="Illuminated bowling edge"}let H=Ct("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",X.gold,2.8);H.position.set(0,4.38,2.5),c.add(H);for(let $ of[1,4.8]){let he=Dn(1.8);he.position.set(0,4.8,$),c.add(he)}l(new ve(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new ve(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let $ of[-.5,0,.5]){let he=l(new un(.065,.16,3),a("#30485a"),$,.04,4.7,c);he.rotation.x=-Math.PI/2}let U=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([$,he])=>new le($,he)),K=0;for(let $=0;$<4;$++)for(let he=0;he<=$;he++){let Ce=Ln(.29,.27);Ce.position.set((he-$/2)*.3,.034,1.1-$*.29),c.add(Ce);let pe=new _e;pe.position.set((he-$/2)*.3,.248,1.1-$*.29),c.add(pe),l(new Jn(U,20),a("#f8f6ea"),0,-.215,0,pe),l(new ke(.035,.039,.045,16),a("#dc4459"),0,.07,0,pe),f.push({mesh:pe,start:pe.position.clone(),v:new y,spin:new y,shadow:Ce,down:!1,id:K++})}B.position.copy(h).add(new y(0,2.95,2.5)),l(new ve(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let $ of[-1.62,1.62])l(new ve(.06,3.92,.06),a("#223747"),$,1.96,2.42,c);let ae=[-1.4,1.4].find($=>!s.blocked(h.x+$,h.z+7.1,0))??-1.2;N.position.copy(h).add(new y(ae,1.27,7.1)),N.lookAt(h.clone().add(new y(0,1.68,7.5))),l(new ve(.16,1.12,.16),a("#223747"),ae,.56,7.1,c),l(new ve(.65,.06,.48),a("#101a26"),ae,.03,7.1,c)}function O(){for(let H of f)H.mesh.position.copy(H.start),H.mesh.rotation.set(0,0,0),H.mesh.visible=!0,H.shadow.visible=!0,H.shadow.position.set(H.start.x,.034,H.start.z),H.shadow.material.opacity=1,H.down=!1,H.v.set(0,0,0),H.spin.set(0,0,0)}function Q(){ne=0,Y.visible=!1,m=b=T=0,C=[],S=Array.from({length:10},()=>[]),p=null,A=0,d=!1,E.visible=!1,O(),de()}function ee(){let H=te();return!H||!s.xrTeleport(H.x,0,H.z+7.4)?!1:(h=H,ce(),o.setup(h),u=r.visible=!0,s.xrFace?.(0),Q(),M=!1,x=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function se(){o.stop(),ne=0,Y.visible=!1,u=r.visible=d=E.visible=!1,p=null,A=0,g=[],M=!1}function re(){d=!1,g=[],M=!1,x=!0,p||(E.visible=!1)}function ye(H,U){R||(R=!0,o.cheer(!1));let K=U.length();H.down=!0,H.v.add(U).clampLength(0,7),H.v.y=Math.max(H.v.y,Math.min(3.4,.7+K*.42)),H.spin.add(new y(U.z*2.8,(H.id%2?1:-1)*K*.8,-U.x*2.8)).clampLength(0,18)}function fe(H){let U=new y,K=new y,ae=new Re;for(let $ of f)if($.down&&$.mesh.visible){$.v.y-=9.81*H,$.mesh.position.addScaledVector($.v,H);let he=$.spin.length();he>.001&&(K.copy($.spin).divideScalar(he),ae.setFromAxisAngle(K,he*H),$.mesh.quaternion.premultiply(ae).normalize()),U.set(0,1,0).applyQuaternion($.mesh.quaternion);let Ce=.033+.08+.135*Math.abs(U.y);$.mesh.position.y<Ce?($.mesh.position.y=Ce,$.v.y=$.v.y<-.65?-$.v.y*.32:0,$.v.x*=Math.exp(-4*H),$.v.z*=Math.exp(-4*H),$.spin.multiplyScalar(Math.exp(-5*H))):$.spin.multiplyScalar(Math.exp(-.3*H));for(let[pe,Le,Ue]of[["x",-1.02,1.02],["z",-.35,2.2]])($.mesh.position[pe]<Le||$.mesh.position[pe]>Ue)&&($.mesh.position[pe]=Qe.clamp($.mesh.position[pe],Le,Ue),$.v[pe]*=-.38)}for(let $=0;$<f.length;$++)for(let he=$+1;he<f.length;he++){let Ce=f[$],pe=f[he];if(!Ce.mesh.visible||!pe.mesh.visible||!Ce.down&&!pe.down)continue;let Le=pe.mesh.position.clone().sub(Ce.mesh.position),Ue=Le.length();if(Ue>=.29||Ue<.001)continue;let we=Le.divideScalar(Ue),oe=Ce.v.clone().sub(pe.v).dot(we);if(oe>.18){let He=we.clone().multiplyScalar(oe*.7);pe.down?pe.v.add(He):ye(pe,He),Ce.down?Ce.v.sub(He):ye(Ce,He.clone().negate()),Ce.spin.x+=we.z*oe,pe.spin.z-=we.x*oe}let Ge=.29-Ue;Ce.down&&Ce.mesh.position.addScaledVector(we,-Ge*.5),pe.down&&pe.mesh.position.addScaledVector(we,Ge*.5)}}function Te(){p=null,E.visible=!1;let H=f.filter(K=>K.down).length,U=H-T;if(H===10&&b===0&&J(),S[m].push(U),T=H,b++,U===0&&o.encourage(),U>0&&!(H===10&&b===1)&&(o.cheer(H===10),i(H===10)),n(H===10?.8:.25),H===10||b===2){let K=H===10?b===1?"Strike!":"Spare!":`${H} pins.`;if(C.push(H),m++,b=T=0,t(m===10?`Bowling complete! ${q()} / 100 pins.`:`${K} Next frame.`),m===10){w=Math.max(w,q());try{localStorage.setItem("tfj-bowling-best-10-v1",String(w))}catch{}}else O()}else{for(let K of f)K.down&&(K.mesh.visible=!1,K.shadow.visible=!1);t(`${U} pins! One more bowl this frame.`)}de()}function xe(H,U){if(!u)return;let{dt:K,right:ae,controller:$}=H;v+=K,o.tick(K,U,{eye:H.eye,held:d,ball:p?E.position:null});let he=!!ae?.gamepad?.buttons[0]?.pressed,Ce=!!ae?.gamepad?.buttons[4]?.pressed;if(U){re();return}ue(K),he||(M=!0),Ce&&!_&&m===10&&Q(),_=Ce;let pe=$&&$.visible!==!1?$.getWorldPosition(new y):null;if(he&&!x&&M&&!p&&!A&&m<10&&pe){let Le=s.stats();Math.abs(Le.x-h.x)>1.1||Le.z<h.z+6.7||Le.z>h.z+8.2||Le.y>.15?t("Return behind the yellow bowling line."):(d=!0,g=[],E.visible=!0)}if(d){if(!pe)re();else if(E.position.copy(pe),g.push({time:v,p:pe.clone()}),g=g.filter(Le=>v-Le.time<.14),!he&&x){let Le=g.find(we=>v-we.time>=.04),Ue=Le?pe.clone().sub(Le.p).divideScalar(v-Le.time).clampLength(0,10):new y;d=!1,Ue.length()<.6||Ue.z>-.25?(E.visible=!1,t("Swing towards the pins before releasing.")):(R=!1,p={p:pe.clone().sub(h),v:Ue,age:0,gutter:!1})}}if(p||A){let Le=Math.max(1,Math.ceil(K/.008)),Ue=K/Le;for(let we=0;we<Le;we++){if(p){let oe=p;oe.age+=Ue,oe.v.y-=9.81*Ue,oe.p.addScaledVector(oe.v,Ue),oe.p.y<.174&&(oe.p.y=.174,oe.v.y=Math.abs(oe.v.y)>.8?Math.abs(oe.v.y)*.18:0,oe.v.x*=Math.exp(-.25*Ue),oe.v.z*=Math.exp(-.25*Ue)),Math.abs(oe.p.x)>1&&(oe.gutter=!0,oe.p.x=Math.sign(oe.p.x)*1.15,oe.v.x=0),E.position.copy(oe.p).add(h),E.rotation.x+=oe.v.z*Ue/.14;for(let Ge of f)if(!Ge.down&&!oe.gutter&&oe.p.y<.6){let He=Ge.mesh.position.x-oe.p.x,ft=Ge.mesh.position.z-oe.p.z;Math.hypot(He,ft)<.23&&(ye(Ge,new y(oe.v.x,0,oe.v.z).multiplyScalar(.65)),oe.v.x*=.8,oe.v.z*=.84)}(oe.p.z<-.6||oe.age>7||Math.hypot(oe.v.x,oe.v.z)<.15)&&(p=null,A=2.6)}fe(Ue);for(let oe of f)oe.shadow.position.x=oe.mesh.position.x,oe.shadow.position.z=oe.mesh.position.z,oe.shadow.material.opacity=Qe.clamp(1-(oe.mesh.position.y-.25),.15,1);if(A&&(A=Math.max(0,A-Ue),!A)){Te();break}}}x=he}return{root:r,get best(){return w},crowd:o,fireworks:Y,get celebrations(){return Z},start:ee,stop:se,cancel:re,tick:xe,get held(){return d},get flight(){return p},get pins(){return f},get origin(){return h},get frame(){return m},get roll(){return b},get total(){return q()},get totals(){return C},get frameRolls(){return S}}}function Dd(s,e,t,n=.34){if(s.y<=t.y||e.y>t.y)return!1;let i=(s.y-t.y)/(s.y-e.y);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.z+(e.z-s.z)*i-t.z)<n}function Xl(s,e,t,n,i){let r=s.colliders.map(J=>new qe(new y(J.min.x,J.min.y,J.min.z),new y(J.max.x,J.max.y,J.max.z))),o=new _e;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=J=>new Se({color:J,roughness:.6}),l=(J,ue,de,te=o)=>{let ce=new ge(J,ue);return ce.position.copy(de),te.add(ce),ce},c=new y,h=null,f=!1,u=!1,d=!1,p=null,g=[],v=0,x=!1,M=!1,_=0,m=0,b=0,C=0,S=!1;try{b=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let T=s.mollie.balls[0].ball.clone();T.scale.setScalar(.48),T.visible=!1,e.add(T);let A=l(new Ke(.065,16,12),a("#ee528c"),new y,e);A.visible=!1,l(new Ke(.03,8,6),a("#6ac68d"),new y(0,.06,0),A).scale.set(1,.4,1.7);let R=new ut;R.moveTo(0,.02),R.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),R.bezierCurveTo(.23,-.03,.16,.18,0,.02);let E=new ge(new Zt(R),new Me({color:16742315,side:it,transparent:!0}));E.visible=!1,e.add(E);let V=0,D=0,I=0,B=document.createElement("canvas");B.width=768,B.height=384;let q=B.getContext("2d"),N=new Ie(B);N.colorSpace=Ae;let W=l(new Ne(1.5,.75),new Me({map:N}),new y);function L(){_t(q,768,384),j(q,"POK\xC9 BALL BASKETBALL",30,62,38,X.gold),j(q,`${m} baskets \xB7 ${_}/10 throws`,30,139,46),j(q,`Best: ${b} baskets`,30,204,32,X.mint),j(q,_>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),j(q,"Y: games menu \xB7 B: leave",30,337,25,X.muted),N.needsUpdate=!0}function P(){for(let[J,ue]of[[-4,8],[5,9],[-8,8],[12,8]]){let de=!0;for(let te=-1.5;te<=1.5;te+=.5)for(let ce=-2;ce<=2;ce+=.5)(s.blocked(J+te,ue+ce,0)||Math.abs(s.groundAt(J+te,ue+ce,.1))>.1)&&(de=!1);if(de)return new y(J,0,ue)}return null}function F(J){if(c.set(J.x,2.35,J.z-1.5),W.position.set(J.x+1.35,2,J.z-1.75),o.children.length>1)for(let O of[...o.children])O!==W&&(o.remove(O),O.traverse(Q=>{Q.geometry?.dispose(),Q.material?.dispose()}));let ue=Ct("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);ue.position.set(J.x,3.7,J.z-1.93),o.add(ue);let de=Dn(1.1);de.position.set(J.x,4.1,J.z-1.5),o.add(de),l(new ve(.12,4.15,.12),a("#173d56"),new y(J.x,2.075,J.z-2)),l(new ve(.08,.08,.55),a("#173d56"),new y(J.x,4.1,J.z-1.75)),l(new ve(1.5,.95,.07),a("#e4f1f2"),new y(J.x,2.65,J.z-1.93));let te=l(new Ut(.42,.025,10,48),a("#f5ab44"),c);te.rotation.x=Math.PI/2;for(let O=0;O<12;O++){let Q=O/12*Math.PI*2,ee=new y(c.x+Math.cos(Q)*.41,c.y,c.z+Math.sin(Q)*.41),se=new y(c.x+Math.cos(Q+.2)*.23,c.y-.48,c.z+Math.sin(Q+.2)*.23),re=new St(new Be().setFromPoints([ee,se]),new bt({color:16777215}));o.add(re)}l(new ve(.06,2.4,.06),a("#173d56"),new y(J.x+1.35,1.2,J.z-1.78)),l(new ve(1.56,.81,.045),a("#122538"),new y(J.x+1.35,2,J.z-1.78));let ce=l(new ve(2,.015,.04),a("#f6d484"),new y(J.x,.012,J.z+1.45))}function k(J){if(z(),J==="friend")return u=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let ue=P();return!ue||!s.xrTeleport(ue.x,0,ue.z+1.9)?!1:(h=ue,F(ue),s.xrFace?.(0),f=o.visible=!0,_=m=0,L(),!0)}function z(){f=u=d=!1,o.visible=T.visible=A.visible=E.visible=!1,p=null,g=[],M=!1,x=!1,V=0}function G(){d=!1,T.visible=A.visible=!1,g=[],M=!1,x=!0}function Y(){if(p=null,T.visible=!1,_===10){b=Math.max(b,m);try{localStorage.setItem("tfj-basket-best",String(b))}catch{}n(`Basketball complete! ${m} baskets from 10 throws.`)}L()}function ne(J,ue){t.react(ue),V=1.5,E.visible=!0,C=2,i(.6),n(J)}function Z(J,ue){let{dt:de,eye:te,controller:ce,right:O,leftController:Q}=J;v+=de,C=Math.max(0,C-de);let ee=!!O?.gamepad?.buttons[0]?.pressed,se=!!O?.gamepad?.buttons[4]?.pressed;if(ue){G(),E.visible=!1;return}ee||(M=!0);let re=ce?.visible!==!1&&ce?ce.getWorldPosition(new y):null;if(u){if(t.group.updateMatrixWorld(!0),A.visible=!!re&&ee&&M,A.visible){A.position.copy(re);let fe=t.group.localToWorld(new y(0,.43,.4));!C&&A.position.distanceTo(fe)<.22&&(D++,ne(`Yum! Jigglypuff loved berry ${D}.`,"feed"),M=!1,A.visible=!1)}t.group.updateMatrixWorld(!0);let ye=t.group.localToWorld(new y(.46,.58,.03));for(let fe of[ce,Q])if(fe&&fe.visible!==!1&&!ee&&!C&&fe.getWorldPosition(new y).distanceTo(ye)<.24){I++,ne(`High-five! ${I} happy high-fives.`,"five");break}}else A.visible=!1;if(V>0?(V-=de,E.visible=!0,E.position.copy(t.group.position).add(new y(0,1.3+(1.5-V)*.22,0)),E.lookAt(te),E.material.opacity=Math.min(1,V*2)):E.visible=!1,!f){x=ee;return}if(se&&!S&&_===10&&!p&&(_=m=0,L()),S=se,re&&ee&&!x&&M&&!p&&_<10&&(d=!0,g=[],T.visible=!0),d){if(!re)G();else if(T.position.copy(re),g.push({time:v,p:re.clone()}),g=g.filter(ye=>v-ye.time<.14),!ee&&x){let ye=g.find(Te=>v-Te.time>=.04),fe=ye?re.clone().sub(ye.p).divideScalar(v-ye.time).clampLength(0,12):new y;d=!1,fe.length()<.6?(T.visible=!1,n("Swing your hand upwards, then release.")):(_++,p={p:re.clone(),v:fe,age:0,scored:!1},L())}}if(p){let ye=Math.max(1,Math.ceil(de/.008)),fe=de/ye;for(let Te=0;Te<ye&&p;Te++){let xe=p,H=xe.p.clone().addScaledVector(xe.v,fe);H.y-=4.9*fe*fe,xe.v.y-=9.8*fe;let U=H.clone().sub(xe.p),K=U.length(),ae=new nt(xe.p,U.normalize()),$=new y;if(r.some(pe=>!pe.containsPoint(xe.p)&&ae.intersectBox(pe,$)&&$.distanceTo(xe.p)<=K)){Y();break}!xe.scored&&Dd(xe.p,H,c)&&(xe.scored=!0,m++,i(.8),L());let he=c.z-.4;(xe.p.z-he)*(H.z-he)<0&&Math.abs(H.x-c.x)<.8&&H.y>2.17&&H.y<3.15&&(H.z=he+Math.sign(xe.p.z-he)*.1,xe.v.z*=-.65);let Ce=Math.hypot(H.x-c.x,H.z-c.z);Math.abs(H.y-c.y)<.1&&Ce>.33&&Ce<.53&&(xe.v.x+=(H.x-c.x)*3,xe.v.z+=(H.z-c.z)*3,xe.v.y=Math.abs(xe.v.y)*.45,H.y=c.y+.11),xe.p.copy(H),xe.age+=fe,T.position.copy(H),T.rotation.x+=fe*5,(H.y<.09||xe.age>5)&&Y()}}x=ee}return{root:o,get best(){return b},start:k,stop:z,cancel:G,tick:Z,get origin(){return h},get held(){return d},get shots(){return _},get score(){return m},get flight(){return p},get feeds(){return D},get fives(){return I},get berry(){return A},get hoop(){return c}}}function ql(s,e,t){let n=new _e;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new _e;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d"),a=new Ie(r);a.colorSpace=Ae;let l=new ge(new Ne(1.75,.4375),new Me({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=Ct("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let h=s.colliders.map(B=>new qe(new y(B.min.x,B.min.y,B.min.z),new y(B.max.x,B.max.y,B.max.z))),f=[],u=[],d=[],p=[],g=new Set,v=0,x=0,M=!1,_=!1,m=[],b=null,C={};try{C=Mr(localStorage.getItem(br))}catch{}function S(){let B=u.length/2;if(!(_||v<B||v>=(C[B]??1/0))){C[B]=v;try{localStorage.setItem(br,JSON.stringify(C))}catch{}}}function T(){_t(o,1024,256),j(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,X.gold,"700"),j(o,`${g.size/2} / ${u.length/2} pairs  \xB7  ${v} turns`,28,101,38,X.ink,"700"),j(o,g.size===u.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,X.mint,"500"),j(o,_?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,X.muted,"400"),a.needsUpdate=!0}function A(){for(let B of f)B.geometry.dispose(),B.material.dispose();f=[];for(let B of d)for(let q of B.material)q.userData.memoryOwned&&q.dispose();i.clear(),d=[],b=null}function w(){A();let B=[...s.mollie.found];_=B.length<2,_&&(B=[0,1,2,3]);for(let N=B.length-1;N>0;N--){let W=Math.floor(Math.random()*(N+1));[B[N],B[W]]=[B[W],B[N]]}B=B.slice(0,6),u=[...B,...B];for(let N=u.length-1;N>0;N--){let W=Math.floor(Math.random()*(N+1));[u[N],u[W]]=[u[W],u[N]]}p=[],g.clear(),v=x=0;let q=Math.ceil(u.length/4);d=u.map((N,W)=>{let L=s.mollie.cards[N].clone();L.userData={index:W},L.material=L.material.map(F=>{let k=new Me(F.map?{map:F.map}:{color:15258527});return k.userData.memoryOwned=!0,k}),L.position.set((W%4-1.5)*.43,((q-1)/2-Math.floor(W/4))*.39,.012),L.rotation.set(0,Math.PI,0),L.scale.setScalar(.34/.62),L.visible=!0;let P=new ge(new Ne(.268,.36),new Me({color:2508378}));return P.position.copy(L.position),P.position.z=.003,f.push(P),i.add(P,L),L}),m=d.map(()=>Math.PI),T()}function R(){return s.xrTeleport(-21.8,0,-10.78)?(s.xrFace?.(0),M=n.visible=!0,w(),!0):!1}function E(){M=n.visible=!1,p=[],x=0}function V(B){return!M||x||!Number.isInteger(B)||B<0||B>=u.length||g.has(B)||p.includes(B)||g.size===u.length?!1:(p.push(B),m[B]=0,t(.18),p.length===2&&(v++,x=.85),T(),!0)}function D(B,q=!1){if(M){for(let N=0;N<d.length;N++)d[N].rotation.y=Qe.damp(d[N].rotation.y,m[N],16,B);if(!q&&x&&(x=Math.max(0,x-B),!x)){let[N,W]=p;u[N]===u[W]?(g.add(N),g.add(W),f[N].material.color.set(9429443),f[W].material.color.set(9429443),t(.55),g.size===u.length&&S()):m[N]=m[W]=Math.PI,p=[],T()}}}function I(B){if(b!==null&&f[b]&&f[b].material.color.set(g.has(b)?9429443:2508378),b=null,!M||!B)return null;n.updateMatrixWorld(!0);let q=new dn(B.position,B.direction,0,3.8).intersectObjects(d)[0];if(!q)return null;let N=new nt(B.position,B.direction),W=new y;for(let P of h)if(N.intersectBox(P,W)&&W.distanceTo(B.position)<q.distance-.025)return null;let L=q.object.userData.index;return b=L,g.has(L)||f[L].material.color.set(16176260),{point:q.point,action:()=>V(L)}}return{root:n,start:R,stop:E,reset:w,tick:D,point:I,select:V,get records(){return{...C}},get deck(){return u},get cards(){return d},get moves(){return v},get matched(){return g},get waiting(){return x},get active(){return M},get complete(){return M&&g.size===u.length},get practice(){return _}}}function Sr(){let s=new _e;s.name="Jigglypuff \xB7 3D";let e=_=>new Se({color:_,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),r=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(_,m,b,C=s)=>{let S=new ge(_,m);return S.name=b,S.castShadow=S.receiveShadow=!0,C.add(S),S},c=(_,m,b,C,S,T,A,w,R=s)=>{let E=l(new Ke(1,32,24),A,w,R);return E.position.set(_,m,b),E.scale.set(C,S,T),E};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let _ of[-1,1]){let m=new _e;m.position.set(_*.27,.86,-.005),m.rotation.z=-_*.21,s.add(m);let b=new ut;b.moveTo(-.135,0),b.quadraticCurveTo(-.115,.16,-.025,.34),b.quadraticCurveTo(0,.39,.025,.34),b.quadraticCurveTo(.12,.13,.135,0),b.quadraticCurveTo(0,-.07,-.135,0);let C=l(new $t(b,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",m);C.position.z=-.04;let S=new ut;S.moveTo(-.085,.025),S.quadraticCurveTo(-.06,.16,0,.29),S.quadraticCurveTo(.06,.16,.085,.025),S.quadraticCurveTo(0,-.005,-.085,.025);let T=l(new Zt(S,16),i,"Dark inner ear",m);T.position.z=.047,c(_*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let h=[];for(let _ of[-1,1]){let m=new _e;m.position.set(_*.172,.625,.347),m.rotation.y=_*.24,s.add(m),h.push(m),c(0,0,0,.123,.153,.053,r,"Eye white",m),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",m),c(0,-.003,.063,.042,.079,.01,a,"Pupil",m),c(-.025,.045,.077,.024,.033,.007,r,"Eye sparkle",m),c(.022,-.045,.075,.011,.015,.005,r,"Small sparkle",m)}((_,m,b,C)=>l(new gi(new Cn(_.map(S=>new y(...S))),40,m,8,!1),b,C))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let u=[];for(let _=0;_<=36;_++){let m=_/36,b=Math.PI-m*Math.PI*2,C=.126*(1-.88*m);u.push(new y(.018+Math.cos(b)*C,.961+Math.sin(b)*C,.295+.035*m))}let d=new gi(new Cn(u),72,.042,12,!1),p=d.attributes.position,g=new Cn(u);for(let _=0;_<=72;_++){let m=g.getPointAt(_/72),b=1-.66*(_/72)**2;for(let C=0;C<=12;C++){let S=_*13+C,T=new y().fromBufferAttribute(p,S).sub(m).multiplyScalar(b).add(m);p.setXYZ(S,T.x,T.y,T.z)}}d.computeVertexNormals(),l(d,n,"Curled fringe");let v=[];for(let _ of[-1,1]){let m=new _e;m.position.set(_*.37,.48,.015),m.rotation.z=_*.6,s.add(m),c(_*.075,0,0,.14,.075,.075,t,"Little arm",m),v.push(m)}let x=0;function M(_,m=!1){x+=_,s.position.y=Math.max(0,Math.sin(x*2.5))*.028;let b=x%4.4>4.2?.09:1;h.forEach(C=>C.scale.y=b),v[1].rotation.z=.6+(m?Math.sin(x*4)*.25:Math.sin(x*2)*.04)}return{group:s,animate:M}}function Yl(s,e){let t=Sr(),n=new _e;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,r=.52,o=[],a=null,l=!0,c=0,h=null,f=0,u=0,d="",p=(M,_)=>Math.hypot(M.x-_.x,M.z-_.z);function g(M,_){let m=new y(-_.z,0,_.x);for(let[b,C]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let S=M.x+_.x*b+m.x*C,T=M.z+_.z*b+m.z*C,A=s.groundAt(S,T,M.y+.2);if(Math.abs(A-M.y)<.35&&!s.blocked(S,T,A))return n.position.set(S,A,T),o=[],a=new y(M.x,M.y,M.z),c=0,h=null,f=.15,!0}return!1}function v(M,_,m,b=!1){M=Math.min(M,.05);let C=s.stats(),S=new y(C.x,C.y,C.z);if(m){n.visible=!1,l=!0,h=null;return}let T=new y(_.x,0,_.z).normalize();if(T.lengthSq()<.01&&T.set(0,0,-1),l||n.position.distanceTo(S)>8||a&&a.distanceTo(S)>3||p(n.position,S)<.9){if(!g(C,T)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(S)>.18)&&(o.push(S.clone()),a=S.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let A=b?1.05:i;f=Math.max(0,f-M);let w=p(n.position,S);if(!h&&f===0){let D=null,I=0;if(w<A?(D=n.position.clone().sub(S),D.y=0,D.normalize(),I=Math.min(.8,A+.2-w)):w>A+.35&&(o.length||b)&&(D=(b?S:o[0]).clone().sub(n.position),D.y=0,I=Math.min(.8,D.length(),w-A),D.normalize()),D&&I>.04){let B=n.position.clone(),q=B.clone().addScaledVector(D,I),N=!0,W=B.y;for(let L=1;L<=8;L++){let P=B.clone().lerp(q,L/8),F=s.groundAt(P.x,P.z,W+.22);if(Math.abs(F-W)>.35||s.blocked(P.x,P.z,F)||p(P,S)<Math.min(A,w)-.01){N=!1;break}W=F}q.y=W,N?(h={from:B,to:q,time:0},c=0):(c+=M,c>2.5&&g(C,T))}else c=0}let R=0,E=0;if(h){h.time+=M;let D=Math.min(1,h.time/r),I=h.from.clone().lerp(h.to,D),B=p(n.position,S);p(I,S)>=Math.min(A,B)-.001&&!s.blocked(I.x,I.z,I.y)&&n.position.copy(I),R=Math.sin(Math.PI*D)*.3,E=Math.sin(Math.PI*D)*.08,D===1&&(h=null,f=.14)}else f>0&&(E=-Math.sin(Math.PI*Math.min(1,f/.14))*.1);let V=Math.atan2(C.x-n.position.x,C.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(V-n.rotation.y),Math.cos(V-n.rotation.y))*Math.min(1,M*5),t.animate(M,w<3),t.group.position.y=R,t.group.scale.set(1-E*.5,1+E,1-E*.5),u>0){u=Math.max(0,u-M);let D=Math.abs(Math.sin(u*9));t.group.position.y+=D*(d==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(u*20)*.06}}function x(){l=!0,n.visible=!1,o=[],a=null,h=null}return{group:n,tick:v,summon:x,radius:i,react(M){u=1.3,d=M},get hopping(){return!!h},get trail(){return o},get hidden(){return l}}}function $l(s,e,t){let n=new _e;n.name="Mollie\u2019s VR book",s.add(n),n.visible=!1;let i=new _e;n.add(i);let r=[],o=-1,a=null,l=!1,c=1,h=null,f=null,u=null,d=null,p=new Re,g=new Me({color:16446169}),v=new Me({color:1455692}),x=new Me({color:13944999}),M=new Me({color:15386989});function _(N,W,L,P,F,k,z=0){let G=new ge(new ve(N,W,L),P);return G.position.set(F,k,z),i.add(G),G}function m(N,W,L,P,F,k=44,z=null,G="#17364b",Y=null){let ne=document.createElement("canvas");ne.width=1024,ne.height=Math.round(1024*L/W);let Z=ne.getContext("2d"),J;function ue(ce=!1){if(Z.clearRect(0,0,ne.width,ne.height),z){let O=z==="#eac96d";Ye(Z,4,4,1016,ne.height-8,{top:O?"#ffe8ac":ce?"#365e76":"#24475f",bottom:O?"#d9b66c":"#142e43",stroke:ce?"#ffe09a":O?"#fff0c7":"#597b91",radius:Math.min(28,ne.height/5)})}Z.textAlign="center",Z.textBaseline="middle",Z.fillStyle=z==="#eac96d"?"#17364b":ce?X.gold:G,Z.font=`bold ${k}px Arial`,N.forEach((O,Q)=>Z.fillText(O,512,ne.height*(Q+1)/(N.length+1),944)),J&&(J.needsUpdate=!0)}ue(),J=new Ie(ne),J.colorSpace=Ae;let de=new Me({map:J,transparent:!0,side:it}),te=new ge(new Ne(W,L),de);return te.position.set(P,F,.06),i.add(te),Y&&(te.userData.action=Y,te.userData.paint=ue,r.push(te)),te}function b(){let N=document.createElement("canvas");N.width=N.height=256;let W=N.getContext("2d");W.fillStyle="#203f53",W.beginPath(),W.arc(128,128,112,0,Math.PI*2),W.fill(),W.strokeStyle="#b99b5c",W.lineWidth=3,W.stroke(),pn(W,"ball",128,128,185,X.gold);let L=new Ie(N);L.colorSpace=Ae;let P=new ge(new Ne(.2,.2),new Me({map:L,transparent:!0}));P.position.set(.02,.015,.061),i.add(P)}function C(){i.traverse(N=>{N.userData.borrowed||(N.geometry&&N.geometry.dispose(),N.material&&!Array.isArray(N.material)&&![g,v,x,M].includes(N.material)&&(N.material.map?.dispose(),N.material.dispose()))}),i.clear(),r.length=0,f=null}function S(N,W,L,P,F){let k=e.mollie.cards[N].clone();return k.userData={borrowed:!0},k.material=k.material.map(z=>{if(!z.map)return z;let G=new Me({map:z.map});return G.userData.albumOwned=!0,G}),k.position.set(W,L,.085),k.scale.setScalar(P/.62),k.rotation.set(0,0,0),k.visible=!0,F&&(k.userData.action=F,r.push(k)),i.add(k),k}function T(){i.traverse(N=>{if(N.userData.borrowed)for(let W of N.material)W.userData.albumOwned&&W.dispose()}),C()}function A(){if(T(),d=null,n.position.z=a!==null?.38:0,a!==null){m([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),f=S(a,-.28,0,1.05*c),f.rotation.y=l?Math.PI:0,p.copy(f.quaternion),m(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new y(0,1,0),l?Math.PI:0)}),m(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>w(.12)),m(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>w(-.12)),m(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",V),m(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){_(1.04,1.33,.06,v,0,0),_(.038,1.29,.07,M,-.47,0,.025),m(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),m([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),b(),m(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>R(0)),m(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}_(2.1,1.37,.055,v,0,0,-.02),_(2.02,1.3,.045,x,0,0,.005),_(.98,1.26,.018,g,-.502,0,.036),_(.98,1.26,.018,g,.502,0,.036),_(.025,1.29,.02,x,0,0,.055);for(let N of[-1,1]){let W=o*2+(N===1?1:0),L=N*.5;m([e.mollie.found.has(W)?e.xrGames.names[W]:`Mystery card ${W+1}`],.88,.12,L,.53,56),e.mollie.found.has(W)?S(W,L,-.005,.8,()=>E(W)):(_(.58,.8,.006,new Me({color:14476515}),L,-.005,.062),m(["?"],.5,.6,L,-.005,300,null,"#89a2ab")),m([`${W+1} / 18`],.7,.09,L,-.54,52)}m(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>R(o-1)),m([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),m(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>R(Math.min(8,o+1))),m(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),m(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function w(N){c=Qe.clamp(c+N,.72,1.12),f.scale.setScalar(1.05*c/.62)}function R(N){if(h||N===o)return;N=Qe.clamp(N,-1,8);let W=new _e;W.name="Turning album page",n.add(W);let L=new ge(new ve(.99,1.27,.012),g);if(L.position.x=N>o?.495:-.495,L.userData.pageTurnOwned=!0,W.add(L),o>=0){for(let P of i.children)if(P.position.z>.045&&Math.abs(P.position.y)<.64&&(N>o?P.position.x>.05:P.position.x<-.05)){let F=P.clone();F.userData={},W.add(F)}}W.position.z=.16,h={leaf:W,next:N,elapsed:0,direction:N>o?-1:1}}function E(N){return e.mollie.found.has(N)?(a=N,l=!1,c=1,u=null,A(),!0):!1}function V(){a!==null?(a=null,u=null,A()):t()}function D(){o=-1,a=null,n.visible=!0,A()}function I(){h&&(h.leaf.traverse(N=>{N.userData.pageTurnOwned&&N.geometry?.dispose()}),n.remove(h.leaf),h=null),u=null,n.visible=!1}function B(N){var P;if(!N||h)return null;n.updateMatrixWorld(!0);let W=new dn(N.position,N.direction,0,5).intersectObjects(r)[0],L=W?.object||null;return L!==d&&(d&&(d.userData.paint?.(!1),d.userData.restScale&&d.scale.copy(d.userData.restScale)),d=L,d&&(d.userData.paint?.(!0),(P=d.userData).restScale??(P.restScale=d.scale.clone()),d.scale.copy(d.userData.restScale).multiplyScalar(1.025))),W?{point:W.point,action:W.object.userData.action}:null}function q(N,W,L){if(h){h.elapsed+=N;let P=Math.min(1,h.elapsed/.48);h.leaf.rotation.y=h.direction*Math.PI*(P*P*(3-2*P)),P>=1&&(n.remove(h.leaf),h.leaf.traverse(F=>{F.userData.pageTurnOwned&&F.geometry?.dispose()}),o=h.next,h=null,A())}if(f)if(W&&L){u||(u={hand:L.clone().invert(),start:f.quaternion.clone()});let P=L.clone().multiply(u.hand),F=i.getWorldQuaternion(new Re);f.quaternion.copy(F.clone().invert().multiply(P).multiply(F).multiply(u.start))}else u?(u=null,p.copy(f.quaternion)):f.quaternion.slerp(p,1-Math.exp(-10*N))}return{root:n,open:D,close:I,point:B,tick:q,back:V,inspect:E,change:R,get page(){return o},get inspected(){return a},get card(){return f},get turning(){return!!h}}}var pt={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},Nd=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function Ud(s,e){let t=Math.hypot(s,e)*384/pt.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(s,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=Nd[Math.floor(n/(Math.PI/10))],r=t>=268?2:t>=163&&t<=184?3:1;return{score:i*r,label:`${r===3?"Triple ":r===2?"Double ":""}${i} \xB7 ${i*r}`}}function Fd(s){let e=s.at(-1);if(!e)return new y;let t=s.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new y}function Bd(s,e,t){let n=s.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function Od(s,e){if(s.x<=pt.x||e.x>pt.x)return null;let t=(pt.x-s.x)/(e.x-s.x),n=s.clone().lerp(e,t);return Math.hypot(n.y-pt.y,n.z-pt.z)<=.47?{point:n,...Ud(-(n.z-pt.z),n.y-pt.y)}:null}function Zl(s,e,t){let n=new _e;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new Se({color:12044498,metalness:.75,roughness:.28}),r=new Se({color:2112336,roughness:.45}),o=new Se({color:16764759,side:it,roughness:.8}),a=[];function l(z,G){return a.push(z),new ge(z,G)}function c(){let z=new _e;z.name="3D dart";let G=l(new un(.004,.035,8),i);G.rotation.x=-Math.PI/2,G.position.z=.0175,z.add(G);let Y=l(new ke(.006,.007,.045,10),i);Y.rotation.x=Math.PI/2,Y.position.z=.0575,z.add(Y);for(let Z=0;Z<5;Z++){let J=l(new Ut(.007,8e-4,4,10),r);J.position.z=.043+Z*.007,z.add(J)}let ne=l(new ke(.003,.003,.06,8),r);ne.rotation.x=Math.PI/2,ne.position.z=.11,z.add(ne);for(let Z=0;Z<2;Z++){let J=l(new ve(.044,.001,.05),o);J.rotation.z=Z*Math.PI/2,J.position.z=.15,z.add(J)}return z}let h=c();n.add(h),h.visible=!1;let f=document.createElement("canvas");f.width=1024,f.height=640;let u=f.getContext("2d"),d=new Ie(f);d.colorSpace=Ae;let p=new ge(new Ne(.95,.594),new Me({map:d}));p.name="Wall-mounted darts scoreboard",p.position.set(pt.x+.05,1.8,pt.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let g=new ge(new ve(1.01,.654,.035),new Se({color:1517105,roughness:.7}));g.name="Darts scoreboard frame",g.position.copy(p.position),g.position.x-=.022,g.rotation.copy(p.rotation),n.add(g);let v=Ct("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);v.position.set(pt.x+.065,2.43,pt.z),v.rotation.y=Math.PI/2,n.add(v);let x=Dn(.9);x.position.set(pt.x+.55,2.75,pt.z),n.add(x);let M=s.colliders.map(z=>new qe(new y(z.min.x,z.min.y,z.min.z),new y(z.max.x,z.max.y,z.max.z))),_=!1,m=!1,b=null,C=[],S=0,T=!1,A=!1,w=!1,R=0,E=0,V="Hold trigger, throw, release.",D=0,I=[];try{D=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function B(){vl(u,{total:R,throws:E,best:D,last:V}),d.needsUpdate=!0}function q(z=!1){m=!1,C=[],h.visible=!1,b&&!z&&(n.remove(b.mesh),b=null),T=!0,A=!1}function N(){q();for(let z of I)n.remove(z);I=[],E=R=0,V="Nine darts. Make them count!",B()}function W(){let G=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([Y,ne])=>!s.blocked(Y,ne,0));return!G||!s.xrTeleport(G[0],0,G[1])?!1:(s.xrFace?.(Math.PI/2),n.visible=_=!0,N(),!0)}function L(){q(),_=!1,n.visible=!1}function P(z,G){let Y=b;if(Y){if(Y.mesh.position.copy(G),I.push(Y.mesh),b=null,E++,R+=z.score,V=z.label,t(z.score>0?.6:.12),E===9&&R>D){D=R;try{localStorage.setItem("tfj-vr-darts-best-v1",String(D))}catch{}}B()}}function F(z,G){let Y=h.clone();Y.visible=!0,Y.position.copy(z),Y.quaternion.setFromUnitVectors(new y(0,0,-1),G.clone().normalize()),n.add(Y),b={mesh:Y,position:z.clone(),velocity:G.clone(),age:0},h.visible=!1,m=!1,C=[]}function k(z,G,Y,ne,Z=!1){if(S+=z,!!_){if(Z){m&&q();return}if(Y||(A=!0),ne&&!w&&E===9&&N(),w=ne,G&&Y&&!T&&A&&!b&&E<9){let J=s.stats();J.x<pt.ocheX-.04||J.x>pt.ocheX+1.6||Math.abs(J.z-pt.z)>1||J.y>.15?(V="Stand behind the yellow line.",B()):(m=!0,C=[],h.visible=!0,t(.12))}if(m&&G&&(h.position.copy(G.position).addScaledVector(G.direction,.07),h.quaternion.setFromUnitVectors(new y(0,0,-1),G.direction),C.push({time:S,position:G.position.clone()}),C=C.filter(J=>S-J.time<.15),!Y&&T)){let J=Fd(C);J.length()<.6?(m=!1,h.visible=!1,V="Swing your hand before releasing.",B()):F(h.position,J)}if(m&&!G&&q(),T=Y,b){let J=Math.max(1,Math.ceil(z/.004166666666666667)),ue=z/J;for(let de=0;de<J&&b;de++){let te=b,ce=Bd(te.position,te.velocity,ue),O=Od(te.position,ce.position),Q=ce.position.clone().sub(te.position),ee=Q.length(),se=new nt(te.position,Q.clone().normalize()),re=new y,ye=null,fe=ee+1e-8;for(let Te of M){if(Te.containsPoint(te.position)){ye=te.position.clone(),fe=0;break}if(se.intersectBox(Te,re)){let xe=re.distanceTo(te.position);xe<=fe&&(fe=xe,ye=re.clone())}}if(O&&(!ye||O.point.distanceTo(te.position)<=fe)){P(O,O.point);break}if(ye){P({score:0,label:"Miss \xB7 hit scenery"},ye);break}if(ce.position.y<=.025){let Te=Qe.clamp((te.position.y-.025)/(te.position.y-ce.position.y),0,1),xe=te.position.clone().lerp(ce.position,Te);te.mesh.quaternion.setFromUnitVectors(new y(0,0,-1),new y(te.velocity.x,0,te.velocity.z).normalize()),P({score:0,label:"Miss \xB7 floor"},xe);break}if(te.position.copy(ce.position),te.velocity.copy(ce.velocity),te.mesh.position.copy(te.position),te.mesh.quaternion.slerp(new Re().setFromUnitVectors(new y(0,0,-1),te.velocity.clone().normalize()),1-Math.exp(-18*ue)),te.age+=ue,te.age>4){P({score:0,label:"Miss"},te.position);break}}}}}return{root:n,get best(){return D},start:W,stop:L,cancel:q,reset:N,update:k,launch:F,get active(){return _},get held(){return m},get flight(){return b},get total(){return R},get throws(){return E},get last(){return V},get resting(){return I}}}function Jl(s,e,t,n,i=.35){let r=e.clone().sub(s),o=r.length();if(o<1e-7)return null;let a=new nt(s,r.multiplyScalar(1/o)),l=new y,c=o+1e-6,h=null;for(let f of t){let u=f.clone().expandByScalar(.045);if(u.containsPoint(s))return{type:"wall",point:s.clone(),distance:0};if(a.intersectBox(u,l)){let d=l.distanceTo(s);d<=c&&(c=d,h={type:"wall",point:l.clone(),distance:d})}}for(let f of n)if(a.intersectSphere(new Vt(f.position,i),l)){let u=l.distanceTo(s);u<c&&(c=u,h={type:"target",id:f.id,point:l.clone(),distance:u})}return h}function zd(s,e){let t=s.at(-1),n=s.find(r=>t.time-r.time<=.12&&t.time-r.time>=.045),i=new y;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new y(0,1.3,0)),i.clampLength(0,9)}function Kl(s){let e=s.worldScene,t=new _e;t.name="VR games",t.visible=!1,e.add(t);let n=bl(t),i=new _e;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let ie of[...s.mollie.balls.map(be=>be.ball),...s.mollie.cards,s.mollie.thrownBall])ie?.isObject3D&&i.attach(ie);let r=s.colliders.map(ie=>new qe(new y(ie.min.x,ie.min.y,ie.min.z),new y(ie.max.x,ie.max.y,ie.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new Ie(o);l.colorSpace=Ae;let c=new _e;t.add(c);let h=new ge(new Ne(1.6,1.2),new Me({map:l,side:it}));c.add(h),c.visible=!1;let f=new ge(new ve(1.64,1.24,.035),new Me({color:3561833}));f.position.z=-.025,c.add(f);let u=new _e;c.add(u);let d=new St(new Be().setFromPoints([new y,new y(0,0,-1)]),new bt({color:16769946}));d.visible=!1,t.add(d);let p=new ge(new Ke(.012,8,6),new Me({color:16769946}));p.visible=!1,t.add(p);let g=s.mollie.balls[0].ball.clone();g.scale.setScalar(.43),g.visible=!1,t.add(g);let v=Sr();v.group.visible=!1,t.add(v.group);let x=document.createElement("canvas");x.width=768,x.height=192;let M=x.getContext("2d"),_=new Ie(x);_.colorSpace=Ae;let m=new ge(new Ne(.95,.2375),new Me({map:_,transparent:!0,depthTest:!1,depthWrite:!1}));m.name="Adventure notification",m.renderOrder=1e3,t.add(m),m.visible=!1;let b="explore",C="menu",S=[],T=null,A=null,w=0,R=!1,E=null,V=!1,D=null,I=[],B=0,q=!1,N=!1,W=!1,L=!0,P=[],F=0,k=0,z="Welcome, Mollie!",G="",Y=0,ne=!1,Z=null,J=0,ue=0;try{ue=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let de=(ie,be=.3)=>{try{ie?.gamepad?.hapticActuators?.[0]?.pulse(be,70)?.catch?.(()=>{})}catch{}},te=$l(c,s,()=>{C="menu",te.close(),h.visible=f.visible=!0,L=!0,oe()}),ce=Zl(s,t,ie=>de(E?.right,ie)),O=ql(s,t,ie=>de(E?.right,ie)),Q=Yl(s,t),ee=Gl(s,t,Pt,ie=>de(E?.right,ie)),se=Cl(s,t,Pt,ie=>de(E?.right,ie)),re=zl(s,t,Pt,ie=>de(E?.right,ie)),ye=0,fe=!0;try{fe=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function Te(ie){fe=!!ie;try{localStorage.setItem("tfj-companion-enabled",String(fe))}catch{}fe?Q.summon():(b==="friend"&&zn(),Q.group.visible=!1),oe()}let xe=Wl(s,t,Pt,ie=>de(E?.right,ie),pe),H=Xl(s,t,Q,Pt,ie=>de(E?.right,ie)),U=Vl(s,e,()=>({bowling:xe.best||null,darts:ce.best||null,golf:se.best,rc:re.bestLapMs,basketball:H.best||null,planes:ee.best||null,memory:O.records,hide:ue}),Pt),K=!1,ae=!1;function $(){if(b==="jigglypuff"){z="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",ft();return}Q.summon(),et()}function he(){On(),C="album",h.visible=f.visible=!1,u.clear(),te.open(),L=!0}function Ce(){try{Z??(Z=new(window.AudioContext||window.webkitAudioContext)),Z.resume()?.catch(()=>{})}catch{}}function pe(ie){if(!(!Z||Z.state!=="running"))try{let be=Math.floor(Z.sampleRate*.07),Ve=Z.createBuffer(1,be,Z.sampleRate),ot=Ve.getChannelData(0);for(let Ee=0;Ee<be;Ee++)ot[Ee]=(Math.random()*2-1)*Math.exp(-Ee/be*5);for(let Ee=0;Ee<(ie?12:7);Ee++){let mt=Z.createBufferSource(),tt=Z.createGain(),en=Z.createBiquadFilter();mt.buffer=Ve,en.type="highpass",en.frequency.value=650,tt.gain.value=.055+Ee%3*.012,mt.connect(en),en.connect(tt),tt.connect(Z.destination),mt.start(Z.currentTime+Ee*.095+Ee%2*.025),mt.onended=()=>{mt.disconnect(),en.disconnect(),tt.disconnect()}}}catch{}}function Le(){if(!Z||Z.state!=="running")return;let ie=v.group.position;try{let be=Z.createPanner();be.panningModel="HRTF",be.distanceModel="inverse",be.refDistance=2,be.maxDistance=25,be.positionX.value=ie.x,be.positionY.value=ie.y+.6,be.positionZ.value=ie.z,be.connect(Z.destination),[523.25,659.25,587.33].forEach((Ve,ot)=>{let Ee=Z.createOscillator(),mt=Z.createGain(),tt=Z.currentTime+ot*.18;Ee.type="sine",Ee.frequency.value=Ve,mt.gain.setValueAtTime(0,tt),mt.gain.linearRampToValueAtTime(.09,tt+.025),mt.gain.exponentialRampToValueAtTime(.001,tt+.17),Ee.connect(mt),mt.connect(be),Ee.start(tt),Ee.stop(tt+.18),Ee.onended=()=>{Ee.disconnect(),mt.disconnect()}}),setTimeout(()=>be.disconnect(),1200)}catch{}}function Ue(ie,be,Ve,ot=32,Ee="#fff"){a.font=`${ot>=40?"bold ":""}${ot}px Arial`,a.fillStyle=Ee,a.fillText(ie,be,Ve)}function we(ie,be,Ve,ot,Ee){S.push({label:ie,x:be,y:Ve,w:ot,h:72,action:Ee}),gl(a,ie,be,Ve,ot,T===ie)}function oe(){C!=="album"&&(S=[],xl(a,ha()),ye===0?(we("Pok\xE9mon throwing hunt",44,196,455,()=>Ht("hunt")),we("Jigglypuff hide-and-seek",519,196,461,()=>Ht("jigglypuff")),we("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>Ht("darts")),we("Memory match \xB7 staff-room table",519,280,461,()=>Ht("memory")),we(`Open the card album \xB7 ${s.mollie.found.size} / 18`,44,364,455,he),we("Play with Jigglypuff",519,364,461,()=>Ht("friend")),we("Pok\xE9 Ball basketball",44,448,455,()=>Ht("basketball")),we("Warehouse bowling",519,448,461,()=>Ht("bowling"))):(we("Paper-plane challenge",44,196,455,()=>Ht("planes")),we("RC car racing",519,196,461,()=>Ht("rc")),we("Warehouse mini-golf",44,280,936,()=>Ht("golf")),we("Arcade wall of fame",44,364,455,vi),we("Back to exploring",519,364,461,()=>{zn(),et()}),we(fe?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>Te(!fe))),we("Resume",44,548,445,et),we(ye===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{ye=1-ye,oe()}),_l(a,b==="rc"),l.needsUpdate=!0)}function Ge(){u.clear()}function He(){if(!E){ne=!0;return}ne=!1;let ie=E.forward.clone();ie.y=0,ie.normalize(),c.position.copy(E.eye).addScaledVector(ie,1.9),c.position.y=Math.max(E.eye.y-.1,s.stats().y+.85),c.rotation.set(0,Math.atan2(-ie.x,-ie.z),0)}function ft(){ye=0,Y=0,m.visible=!1,On(),te.close(),h.visible=f.visible=!0,C="menu",Ge(),c.visible=!0,L=!0,T=null,He(),oe()}function et(){te.close(),C="menu",h.visible=f.visible=!0,c.visible=!1,d.visible=p.visible=!1,L=!0,T=null}function vi(){zn(),et();let ie=U.visit();return ie&&(b="fame",ae=!0),ie}function On(ie=!1){re.cancel(),se.cancel(),ee.cancel(),xe.cancel(),H.cancel(),ce.cancel(ie),V=!1,D=null,I=[],g.visible=!1}function zn(){n.update("explore",null),i.visible=!0,re.stop(),se.stop(),ee.stop(),xe.stop(),H.stop(),Y=0,m.visible=!1,O.stop(),ce.stop(),b="explore",v.group.visible=!1,k=0,On(),z="Choose an adventure whenever you like."}function la(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([be,Ve,ot])=>{for(let[Ee,mt]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let tt=new y(be+Ee,0,Ve+mt);if(!s.blocked(tt.x,tt.z,0)&&s.groundAt(tt.x,tt.z,.1)===0&&s.mollie.balls.every(en=>en.ball.position.distanceTo(tt)>1.3))return[{point:tt,clue:ot}]}return[]})}function ca(){v.group.position.copy(P[F].point),v.group.visible=!0,J=B+1,z=`Try ${P[F].clue}.`,Pt(z)}function Ht(ie){if(zn(),b=ie,b==="rc"){if(!re.start()){b="explore",z="No clear warehouse circuit available.",oe();return}i.visible=!1,et();return}if(b==="golf"){if(!se.start()){b="explore",z="No clear warehouse green available.",oe();return}i.visible=!1,et();return}if(b==="friend"&&!fe&&Te(!0),b==="planes"){if(!ee.start()){b="explore",z="The plane course is blocked. Try again.",oe();return}et();return}if(b==="bowling"){if(!xe.start()){b="explore",z="The warehouse lane is blocked. Try again.",oe();return}i.visible=!1,et();return}if(b==="friend"||b==="basketball"){if(!H.start(b)){b="explore",z="No clear basketball space available.",oe();return}et();return}if(b==="memory"){if(!O.start()){b="explore",z="The table is not accessible. Try again.",oe();return}et();return}if(b==="darts"){if(!ce.start()){b="explore",z="The throwing line is blocked. Try again.",oe();return}z="Nine darts. Hold trigger, throw and release.",et();return}if(b==="hunt")s.xrGames.start(),z="Hold trigger, swing gently and release!";else{P=la();for(let be=P.length-1;be>0;be--){let Ve=Math.floor(Math.random()*(be+1));[P[be],P[Ve]]=[P[Ve],P[be]]}if(P=P.slice(0,3),F=0,P.length<3){b="explore",z="No clear hiding spots. Please try again.",oe();return}ca()}et()}function ic(){if(b!=="jigglypuff"||k||!v.group.visible)return!1;if(F++,v.group.visible=!1,de(E?.right,.6),F===3){ue++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(ue))}catch{}b="explore",z="You found Jigglypuff 3 times! Champion!",Pt(z)}else k=1.5,z=`Found ${F} / 3! Finding a new hiding spot\u2026`,Pt(z);return!0}function ha(){return b==="rc"?re.state.finished?"RC race complete \xB7 A to race again":`RC racing: lap ${re.state.completedLaps+1}/3 \xB7 ${re.state.elapsed.toFixed(1)}s \xB7 A rescues car`:b==="fame"?`Wall of fame: ${U.records.filter(ie=>ie.medal).length} / ${U.records.length} medals earned`:b==="golf"?se.complete?`Mini-golf complete: ${se.total} strokes \xB7 Best ${se.best}`:`Mini-golf: hole ${se.hole+1}/6 \xB7 ${se.strokes} strokes \xB7 Par ${se.layout.par}`:b==="planes"?`Paper planes: ${ee.score} points \xB7 ${ee.throws}/5 throws \xB7 Longest ${ee.longest.toFixed(1)} m`:b==="bowling"?`Bowling: ${xe.total} / 100 pins \xB7 ${xe.frame===10?"Complete":`Frame ${xe.frame+1} \xB7 Bowl ${xe.roll+1}`}`:b==="basketball"?`Basketball: ${H.score} baskets \xB7 ${H.shots}/10 throws`:b==="friend"?`Berries: ${H.feeds} \xB7 High-fives: ${H.fives} \xB7 Offer a berry or touch her raised hand`:b==="hunt"?`Pok\xE9mon: ${s.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:b==="jigglypuff"?k?z:`Found ${F}/3 \xB7 Try ${P[F].clue}`:b==="darts"?`Darts: ${ce.total} points \xB7 ${ce.throws}/9 darts \xB7 ${ce.last}`:b==="memory"?`Memory: ${O.matched.size/2}/${O.deck.length/2} pairs \xB7 ${O.moves} turns`:z}function Pt(ie){G=ie,yl(M,ie),_.needsUpdate=!0,Y=3}function sc(ie){if(m.visible=!c.visible&&Y>0,!m.visible)return;let be=ie.headOrientation||new Re().setFromUnitVectors(new y(0,0,-1),ie.forward.clone().normalize());m.position.set(0,-.28,-2.1).applyQuaternion(be).add(ie.eye),m.quaternion.copy(be),m.material.opacity=Math.min(1,Y/.5),Y=Math.max(0,Y-ie.dt)}function rc(ie){return!ie||ie.visible===!1?null:{position:ie.getWorldPosition(new y),direction:new y(0,0,-1).applyQuaternion(ie.getWorldQuaternion(new Re))}}function oc(ie){if(!ie)return null;if(C==="album"){let Ee=te.point(ie);return d.geometry.setFromPoints([ie.position,Ee?Ee.point:ie.position.clone().addScaledVector(ie.direction,2)]),d.visible=!0,p.visible=!!Ee,Ee&&p.position.copy(Ee.point),Ee?{...Ee,label:"album"}:null}c.updateMatrixWorld(!0);let be=new dn(ie.position,ie.direction,0,4).intersectObject(h)[0];if(d.geometry.setFromPoints([ie.position,be?be.point:ie.position.clone().addScaledVector(ie.direction,2)]),d.visible=!0,p.visible=!!be,be&&p.position.copy(be.point),!be)return null;let Ve=be.uv.x*1024,ot=(1-be.uv.y)*768;return S.find(Ee=>Ve>=Ee.x&&Ve<=Ee.x+Ee.w&&ot>=Ee.y&&ot<=Ee.y+Ee.h)}function ac(ie){if(!ie||!v.group.visible)return!1;let be=v.group.position.clone().add(new y(0,.58,0)),Ve=ie.position.clone().addScaledVector(ie.direction,4);return Jl(ie.position,Ve,r,[{id:0,position:be}],.5)?.type==="target"&&ie.position.distanceTo(be)<3.3}function lc(ie){E=ie,ne&&He();let{dt:be,eye:Ve,forward:ot,right:Ee,left:mt,controller:tt}=ie,en=ce.throws,fc=O.complete;B+=be;let xn=!!Ee?.gamepad?.buttons[0]?.pressed,ua=!!mt?.gamepad?.buttons[5]?.pressed,fa=!!Ee?.gamepad?.buttons[5]?.pressed,Wt=rc(tt);if(ua&&!N&&(c.visible?et():ft()),fa&&!W&&(c.visible&&C==="album"?(te.back(),L=!0):c.visible?et():(zn(),ft())),N=ua,W=fa,xn||(L=!1),c.visible){C==="album"&&te.tick(be,!!Ee?.gamepad?.buttons[1]?.pressed,tt?.getWorldQuaternion(new Re));let vt=oc(Wt);T=vt?.label||null,T!==A&&(A=T,oe()),xn&&!q&&!L&&vt&&(de(Ee),vt.action(),L=!0),m.visible=!1}else d.visible=p.visible=!1,b==="darts"&&ce.update(be,L?null:Wt,!L&&xn,!!Ee?.gamepad?.buttons[4]?.pressed),b==="hunt"&&Wt&&(xn&&!q&&!L&&!D&&(V=!0,I=[],g.visible=!0,de(Ee,.15)),V&&(g.position.copy(Wt.position).addScaledVector(Wt.direction,.09),I.push({time:B,position:Wt.position.clone()}),I=I.filter(vt=>B-vt.time<.16),!xn&&q&&(D={position:g.position.clone(),velocity:zd(I,Wt.direction),life:0},V=!1,I=[],de(Ee,.2)))),b==="jigglypuff"&&(v.animate(be,!1),k?(k-=be,k<=0&&(k=0,ca())):v.group.visible&&(v.group.rotation.y=Math.atan2(Ve.x-v.group.position.x,Ve.z-v.group.position.z),ac(Wt)&&(d.geometry.setFromPoints([Wt.position,v.group.position.clone().add(new y(0,.6,0))]),d.visible=!0,xn&&!q&&!L&&ic()),B>J&&(Le(),J=B+6)));if(b==="memory"){O.tick(be,c.visible);let vt=!!Ee?.gamepad?.buttons[4]?.pressed;if(vt&&!K&&O.complete&&!c.visible&&O.reset(),K=vt,!c.visible){let Et=O.point(Wt);Et&&(d.geometry.setFromPoints([Wt.position,Et.point]),d.visible=!0,p.position.copy(Et.point),p.visible=!0,xn&&!q&&!L&&Et.action())}}if(n.update(b,b==="rc"?re.origin:b==="golf"?se.origin:b==="bowling"?xe.origin:b==="planes"?ee.origin:b==="basketball"?H.origin:null),i.visible=!["bowling","golf","rc"].includes(b),b==="fame"&&!ae&&U.site&&Math.hypot(Ve.x-U.site.view.x,Ve.z-U.site.view.z)>7&&(b="explore"),ae=!1,Q.tick(be,ot,!fe||["fame","jigglypuff","darts","basketball","bowling","planes","memory","golf","rc"].includes(b),b==="friend"),H.tick(ie,c.visible),xe.tick(ie,c.visible),ee.tick(ie,c.visible),se.tick(ie,c.visible),re.tick(ie,c.visible),U.tick(be),!tt&&V&&On(),D&&!c.visible){let vt=Math.max(1,Math.ceil(be/.012)),Et=be/vt;for(let os=0;os<vt&&D;os++){let kn=D,Mi=kn.position.clone().addScaledVector(kn.velocity,Et);Mi.y-=4.9*Et*Et;let dc=s.mollie.balls.flatMap((pc,da)=>s.mollie.found.has(da)?[]:[{id:da,position:pc.ball.position}]),as=Jl(kn.position,Mi,r,dc);if(as){as.type==="target"&&s.xrGames.collect(as.id)&&(z=`${s.xrGames.names[as.id]} found! ${s.mollie.found.size}/18 cards.`,Pt(z),de(Ee,.8),s.mollie.found.size===18&&(z="All 18 cards found! Brilliant, Mollie!",Pt(z))),On();break}kn.position.copy(Mi),kn.velocity.y-=9.8*Et,kn.life+=Et,g.position.copy(Mi),g.rotation.x+=Et*7,(Mi.y<0||kn.life>3)&&On()}}if(Z?.listener)try{let vt=Z.listener;for(let[Et,os]of Object.entries({positionX:Ve.x,positionY:Ve.y,positionZ:Ve.z,forwardX:ot.x,forwardY:ot.y,forwardZ:ot.z,upX:0,upY:1,upZ:0}))vt[Et]&&(vt[Et].value=os)}catch{}return b==="darts"&&en<9&&ce.throws===9&&Pt(`Round complete! ${ce.total} points. A to play again.`),b==="memory"&&!fc&&O.complete&&Pt(`All pairs matched in ${O.moves} turns!`),sc(ie),q=xn,{consumeTrigger:c.visible||b!=="explore"||L,blockTeleport:se.held||b==="rc",blockMovement:b==="rc"||c.visible||V||ce.held||H.held||xe.held||ee.held||se.held}}function cc(){Q.summon(),t.visible=!0,b="explore",q=N=W=!1,L=!0,z="Choose a game, or resume exploring.",ft()}function hc(){zn(),et(),m.visible=!1,t.visible=!1,E=null,Z?.suspend()?.catch(()=>{})}function uc(){On(!0),q=!0,L=!0}return{pokemonLayer:i,setCompanionEnabled:Te,get companionEnabled(){return fe},fame:U,visitFame:vi,rc:re,golf:se,planes:ee,bowling:xe,play:H,memory:O,companion:Q,progress:ha,callCompanion:$,album:te,darts:ce,showAlbum:he,tick:lc,begin:cc,end:hc,enableAudio:Ce,open:ft,close:et,start:Ht,stop:zn,interrupt:uc,chooseSpots:la,get mode(){return b},get driving(){return b==="rc"&&re.active},get menuOpen(){return c.visible},get found(){return F},get route(){return P},get held(){return V||ce.held||H.held||xe.held||ee.held||se.held},get flight(){return D},get board(){return c},get root(){return t},puff:v.group,ball:g}}var wt={};function wr(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function kd(s){let e=2166136261;for(let t of String(s))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function Vd(s){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=wr(813+s*431),i=[["#456840","#66884e","#355b38","#789353"],["#3e613c","#587747","#304f34","#70884e"],["#516d3e","#738c4b","#405c37","#8b9b56"]][s];t.clearRect(0,0,256,256),t.lineCap="round",t.lineJoin="round";function r(a,l,c,h,f){t.save(),t.translate(a,l),t.rotate(h),t.fillStyle=i[f%4],t.beginPath(),t.moveTo(0,-c),t.bezierCurveTo(c*.74,-c*.5,c*.82,c*.3,0,c*.83),t.bezierCurveTo(-c*.6,c*.24,-c*.68,-c*.58,0,-c),t.fill(),t.strokeStyle=f%2?"rgba(186,194,129,.26)":"rgba(166,184,115,.22)",t.lineWidth=.7,t.beginPath(),t.moveTo(0,c*.67),t.lineTo(0,-c*.74),t.stroke(),t.restore()}for(let a=0;a<5;a++){let l=103+n()*34,c=218+n()*20,h=38+a*41+(n()-.5)*22,f=35+n()*53;t.strokeStyle="rgba(66,61,41,.92)",t.lineWidth=1.5+n(),t.beginPath(),t.moveTo(l,c),t.quadraticCurveTo((l+h)*.5+(n()-.5)*20,(c+f)*.5,h,f),t.stroke();for(let u=0;u<8;u++){let d=.14+u*.103,p=l+(h-l)*d,g=c+(f-c)*d,v=u%2?1:-1,x=7+n()*11,M=9+n()*8;t.strokeStyle="rgba(82,76,43,.72)",t.lineWidth=1,t.beginPath(),t.moveTo(p,g),t.lineTo(p+v*x,g-3),t.stroke(),r(p+v*x,g-7,M,v*(.4+n()*.55),u+a+s)}}let o=new Ie(e);return o.colorSpace=Ae,o.anisotropy=2,o}function Gd(){let s=document.createElement("canvas");s.width=128,s.height=256;let e=s.getContext("2d"),t=wr(731);e.fillStyle="#726f59",e.fillRect(0,0,128,256);for(let i=0;i<125;i++){let r=t()*128,o=t()*256,a=14+t()*116;e.strokeStyle=i%3?"rgba(33,39,30,.34)":"rgba(174,169,137,.26)",e.lineWidth=.6+t()*2.5,e.beginPath(),e.moveTo(r,o),e.bezierCurveTo(r+(t()-.5)*7,o+a*.3,r+(t()-.5)*8,o+a*.65,r+(t()-.5)*7,o+a),e.stroke()}let n=new Ie(s);return n.colorSpace=Ae,n.wrapS=n.wrapT=kt,n.repeat.set(1,2),n}function Hd(s){let e=document.createElement("canvas"),t=document.createElement("canvas");e.width=e.height=t.width=t.height=512;let n=e.getContext("2d"),i=t.getContext("2d"),r=wr(9147+s*319),o=[["#4e7146","#3a5b38","#789155","#597e48"],["#486843","#345536","#738c53","#58774a"],["#577342","#405e37","#8a995b","#66814a"]][s];n.fillStyle=o[0],n.fillRect(0,0,512,512),i.fillStyle="#777777",i.fillRect(0,0,512,512);for(let c=0;c<180;c++){let h=r()*512,f=r()*512,u=10+r()*36;n.fillStyle=c%2?"rgba(21,45,28,.14)":"rgba(172,179,118,.12)",n.beginPath(),n.ellipse(h,f,u,u*.7,r()*Math.PI,0,Math.PI*2),n.fill()}for(let c=0;c<1450;c++){let h=r()*512,f=r()*512,u=3+r()*5,d=r()*Math.PI*2;for(let[p,g]of[[n,o[c%4]],[i,c%2?"#9a9a9a":"#555555"]])p.save(),p.translate(h,f),p.rotate(d),p.fillStyle=g,p.beginPath(),p.moveTo(0,-u),p.bezierCurveTo(u*.7,-u*.4,u*.8,u*.3,0,u*.85),p.bezierCurveTo(-u*.6,u*.2,-u*.6,-u*.5,0,-u),p.fill(),p.restore()}let a=new Ie(e),l=new Ie(t);a.colorSpace=Ae;for(let c of[a,l])c.wrapS=c.wrapT=kt,c.repeat.set(3,2),c.anisotropy=2;return{texture:a,height:l}}function Wd(){if(!wt.trunk){wt.trunk=new ke(.38,1,1,8,2,!1);let s=wt.trunk.attributes.position;for(let n=0;n<s.count;n++){let i=s.getX(n),r=s.getY(n),o=s.getZ(n),a=Math.atan2(o,i),l=1+.045*Math.sin(a*5+r*9)+.025*Math.cos(a*3-r*11);s.setXYZ(n,i*l,r,o*l)}wt.trunk.computeVertexNormals(),wt.branch=new ke(.24,1,1,5,1,!0),wt.leaf=new Ne(1,1),wt.crown=new Ke(1,8,5);let e=wt.crown.attributes.position;for(let n=0;n<e.count;n++){let i=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.atan2(o,i),l=Math.sqrt(i*i+o*o),c=.94+.085*Math.sin(a*3+r*2)*l+.045*Math.cos(a*5-r*4)*l;e.setXYZ(n,i*c,r*(1+.04*Math.sin(a*3)*l),o*c)}wt.crown.computeVertexNormals(),wt.crown.computeBoundingBox(),wt.crown.computeBoundingSphere();let t=Gd();wt.wood=new Se({map:t,color:16777215,roughness:1,metalness:0}),wt.leaves=[0,1,2].map(n=>new Se({map:Vd(n),color:16777215,alphaTest:.38,transparent:!1,side:it,roughness:.96,metalness:0})),wt.crowns=[0,1,2].map(n=>{let{texture:i,height:r}=Hd(n);return new Se({map:i,bumpMap:r,bumpScale:.035,color:16777215,transparent:!1,roughness:.96,metalness:0})})}return wt}function Tr(s,e,t,n,i){if(!i.length)return null;let r=new hn(t,n,i.length);r.name=e,r.castShadow=r.receiveShadow=!1;let o=new lt;for(let a=0;a<i.length;a++){let l=i[a];o.position.copy(l.position),o.quaternion.copy(l.quaternion),o.scale.copy(l.scale),o.updateMatrix(),r.setMatrixAt(a,o.matrix),r.setColorAt(a,l.color)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,r.computeBoundingBox(),r.computeBoundingSphere(),s.add(r),r}function Ql(s,e=[]){let t=new _e;t.name="Natural exterior trees",s.add(t);let n=Wd(),i=[],r=[],o=[[],[],[]],a=[[],[],[]],l=new y(0,1,0),c=new y,h=[],f=e.filter(x=>Number.isFinite(x?.x)&&Number.isFinite(x?.z)).length,u=f>64,d=u?15:22,p=4,g=Math.max(8,Math.min(u?96:144,Math.floor((99e3/Math.max(1,f)-n.trunk.index.count/3-d*n.branch.index.count/3-p*n.crown.index.count/3)/2)));function v(x,M,_,m,b){let C=_.clone().sub(M);x.push({position:M.clone().add(_).multiplyScalar(.5),quaternion:new Re().setFromUnitVectors(l,C.clone().normalize()),scale:new y(m,C.length(),m),color:b})}for(let x=0;x<e.length;x++){let M=e[x];if(!Number.isFinite(M?.x)||!Number.isFinite(M?.z))continue;let _=kd(M.seed??`${M.x},${M.z}`),m=wr(_),b=Number.isFinite(M.height)&&M.height>0?M.height:6,C=Number.isFinite(M.width)&&M.width>0?M.width:4,S=M.x,T=M.z,A=(m()-.5)*b*.075,w=(m()-.5)*b*.065,R=b*(.027+m()*.006),E=new ze().setRGB(.72+m()*.16,.73+m()*.12,.69+m()*.13),V=new y(S,0,T),D=new y(S+A,b*.56,T+w),I=new y(S+A*.95,b*.84,T+w*.95);v(i,V,D,R,E),v(r,D,I,R*.4,E);let B=u?2:3;for(let F=0;F<B;F++){let k=F*Math.PI*2/B+m()*.5,z=R*(1.8+m());v(r,new y(S,R*1.3,T),new y(S+Math.cos(k)*z,-.025,T+Math.sin(k)*z),R*.48,E)}let q=[{center:I,radiusX:C*.2,radiusY:b*.135,radiusZ:C*.2}],N=m()*Math.PI*2,W=.8+m()*.26;for(let F=0;F<6;F++){let k=N+F*Math.PI*2/6+(m()-.5)*.45,z=C*(.21+m()*.09),G=new y(S+A*.75+Math.cos(k)*z*W,b*(.55+F%3*.085+m()*.055),T+w*.75+Math.sin(k)*z),Y=b*(.23+m()*.29),ne=new y(S+A*Y/(b*.56),Y,T+w*Y/(b*.56));v(r,ne,G,R*(.24+m()*.1),E);for(let Z of u?[F%2?1:-1]:[-1,1]){let J=k+Z*(.38+m()*.35),ue=G.clone().add(new y(Math.cos(J)*C*.095,b*(.045+m()*.075),Math.sin(J)*C*.095));v(r,ne.clone().lerp(G,.66),ue,R*.1,E)}q.push({center:G,radiusX:C*(.16+m()*.07),radiusY:b*(.105+m()*.055),radiusZ:C*(.17+m()*.05)})}let L=.9+m()*.1;for(let F=0;F<p;F++){let k=F===0?q[0]:q[1+(F-1)*2],z=k.center.clone(),G=C*(F===0?.275:.245+m()*.025),Y=b*(F===0?.158:.16+m()*.015),ne=C*(.235+m()*.035),Z=C*.5-Math.max(G,ne)*1.04,J=z.x-S,ue=z.z-T,de=Math.hypot(J,ue);de>Z&&(z.x=S+J*Z/de,z.z=T+ue*Z/de),a[F%3].push({position:z,quaternion:new Re().setFromEuler(new cn((m()-.5)*.16,m()*Math.PI*2,(m()-.5)*.14)),scale:new y(G,Y,ne),color:new ze().setRGB(L*(.94+m()*.06),L,L*(.92+m()*.06))})}let P=Math.max(8,g-Math.floor(m()*(u?12:20)));for(let F=0;F<P;F++){let k=q[F%q.length],z=m()*Math.PI*2,G=m()*2-1,Y=Math.cbrt(m()),ne=Math.sqrt(1-G*G),Z=k.center.clone().add(new y(Math.cos(z)*ne*Y*k.radiusX,G*Y*k.radiusY,Math.sin(z)*ne*Y*k.radiusZ)),J=C*((u?.115:.092)+m()*.035),ue=J*(.9+m()*.24),de=Z.x-S,te=Z.z-T,ce=Math.hypot(de,te),O=Math.max(C*.1,C*.5-Math.hypot(J,ue)*.5);ce>O&&(Z.x=S+de*O/ce,Z.z=T+te*O/ce),Z.y=Qe.clamp(Z.y,b*.34,b*.965),Z.y=Math.min(Z.y,b-ue*.55),c.set(Math.cos(z),(.5-m())*1.35,Math.sin(z)).normalize();let Q=new Re().setFromUnitVectors(new y(0,0,1),c);Q.multiply(new Re().setFromAxisAngle(new y(0,0,1),(m()-.5)*1.4));let ee=L*(.83+m()*.17),se=new ze().setRGB(ee*(.94+m()*.06),ee,ee*(.91+m()*.08));o[F%3].push({position:Z,quaternion:Q,scale:new y(J,ue,1),color:se})}h.push({x:S,z:T,height:b,width:C,seed:_,leafCount:P})}return Tr(t,"Tapered bark trunks",n.trunk,n.wood,i),Tr(t,"Forked branches and root flares",n.branch,n.wood,r),a.forEach((x,M)=>Tr(t,"Opaque leaf crowns "+(M+1),n.crown,n.crowns[M],x)),o.forEach((x,M)=>Tr(t,"Leaf sprays "+(M+1),n.leaf,n.leaves[M],x)),t.userData.treeCount=i.length,t.userData.foliageInstances=o.reduce((x,M)=>x+M.length,0),t.userData.branchInstances=r.length,t.userData.crownInstances=a.reduce((x,M)=>x+M.length,0),t.userData.opaqueCrownCoverage=1,t.userData.triangles=i.length*n.trunk.index.count/3+r.length*n.branch.index.count/3+t.userData.crownInstances*n.crown.index.count/3+t.userData.foliageInstances*2,t.userData.drawCalls=t.children.length,t.userData.placements=h,t}var At=32,Bt=26,rt=6.5,Xd=26.35,jl=[{name:"Neighbour workshop",left:-60,right:-24,door:-40,office:-53,ridge:.64,muted:!0},{name:"A&M Ceramics Ltd",left:-24,right:8,door:-3.5,office:-18,ridge:.82,brand:"am"},{name:"Neil Signs",left:8,right:40,door:19.5,office:34,ridge:.82,brand:"neil"},{name:"Neighbour warehouse",left:40,right:60,door:54,office:44,ridge:.55,muted:!0}];function qd(s){let e=document.createElement("canvas");e.width=s==="neil"?1536:1792,e.height=256;let t=e.getContext("2d");if(t.fillStyle="#f7f7f2",t.fillRect(0,0,e.width,256),s==="neil"){let i="#852477",r="#b5d735";for(let[a,l,c]of[[105,44,i],[162,44,r],[219,44,i],[105,101,r],[162,101,i],[219,101,r],[162,158,r],[219,158,i]])t.save(),t.translate(a,l),t.rotate(Math.PI/4),t.fillStyle=c,t.fillRect(-19,-19,38,38),t.restore();t.textAlign="left",t.fillStyle=i,t.font="italic 600 158px Arial",t.fillText("neil",315,165);let o=t.measureText("neil").width;t.fillStyle=r,t.font="italic 700 149px Arial",t.fillText("signs",325+o,164),t.fillStyle="#626267",t.font="39px Arial",t.fillText("signmakers & vehicle graphics",322,225)}else t.fillStyle="#26789e",t.fillRect(38,51,113,122),t.fillStyle="#a8c9d7",t.fillRect(47,60,44,99),t.fillStyle="#f7f7f2",t.fillRect(98,60,43,45),t.fillStyle="#1a3456",t.textAlign="left",t.font="italic 700 108px Arial",t.fillText("A&M Ceramics Ltd",222,145,1330),t.font="36px Arial",t.fillText("UNIT 4  \xB7  KETTERER COURT",225,213),t.fillStyle="#146cba",t.fillRect(1612,0,180,256),t.fillStyle="#ffffff",t.textAlign="center",t.font="italic 700 175px Arial",t.fillText("4",1702,193);let n=new Ie(e);return n.colorSpace=Ae,n.anisotropy=4,new Me({map:n,color:16777215,side:it})}function ec(s){let e=new _e;e.name="Ketterer Court \xB7 opposite industrial units",s.add(e);let t=(S,T=.8,A=0)=>new Se({color:S,roughness:T,metalness:A}),n={cladding:t("#b0b7bc",.82,.18),muted:t("#97a4ae",.9,.12),ribs:t("#c0c5c7",.8,.17),blue:t("#095d9e",.6,.22),mutedBlue:t("#416880",.74,.2),door:t("#116caf",.7,.17),roof:t("#6a7b84",.83,.26),roofRib:t("#82909a",.79,.25),tan:t("#a99883",.96),dark:t("#263b49",.7,.28),steel:t("#697d87",.65,.5),glass:t("#28485c",.2,.52),glassReflection:t("#728c98",.36,.3),white:t("#eceade",.95),concrete:t("#8d9494",1),black:t("#273032",.95),lamp:new Se({color:"#e4e8df",emissive:"#bcc8c7",emissiveIntensity:.2,roughness:.5})},i=document.createElement("canvas");i.width=256,i.height=8;let r=i.getContext("2d"),o=r.createImageData(256,8);for(let S=0;S<8;S++)for(let T=0;T<256;T++){let A=Math.sin(T/8*Math.PI*2)*.6,w=Math.sqrt(1-A*A),R=(S*256+T)*4;o.data[R]=(A*.5+.5)*255,o.data[R+1]=128,o.data[R+2]=(w*.5+.5)*255,o.data[R+3]=255}r.putImageData(o,0,0);let a=new Ie(i);a.wrapS=a.wrapT=kt,a.repeat.set(8,1),a.anisotropy=4;for(let S of[n.cladding,n.muted])S.normalMap=a,S.normalScale.set(.7,.7);let l=new Map,c=new lt,h=new ve(1,1,1),f=[];function u(S,T,A,w,R,E,V,D=0,I=0,B=0){l.has(S)||l.set(S,[]),l.get(S).push({w:T,h:A,d:w,x:R,y:E,z:V,rx:D,ry:I,rz:B})}function d(S,T,A,w,R=w){let E=new y(...T),V=new y(...A),D=V.clone().sub(E),I=E.clone().add(V).multiplyScalar(.5),B=new Re().setFromUnitVectors(new y(1,0,0),D.clone().normalize());l.has(S)||l.set(S,[]),l.get(S).push({w:D.length(),h:w,d:R,x:I.x,y:I.y,z:I.z,quaternion:B})}function p(S,T,A){let w=(S+T)/2;for(let R of[At-.006,At+Bt+.006])R<At?f.push(S,rt,R,w,rt+A,R,T,rt,R):f.push(T,rt,R,w,rt+A,R,S,rt,R)}function g(S,T,A,w){let R=At-.2;u(n.dark,T+.37,A+.18,.13,S,A/2,R+.025),u(w,T,A,.08,S,A/2+.035,R-.06);for(let E=.15;E<A;E+=.2)u(n.blue,T-.035,.022,.026,S,E,R-.12);for(let E of[-1,1])u(n.blue,.18,A+.25,.24,S+E*(T/2+.11),(A+.25)/2,R-.08);u(n.blue,T+.58,.37,.42,S,A+.22,R-.1),u(n.dark,T,.07,.15,S,.055,R-.08),u(n.steel,.3,.055,.035,S,.93,R-.13),u(n.black,T+.6,.018,.24,S,.017,30.72);for(let E=0;E<18;E++)u(n.steel,.035,.011,.2,S-(T+.4)/2+(E+.5)*(T+.4)/18,.031,30.72)}function v(S,T,A){let w=At-.22,R=.78,E=2.9,V=S-T*.25;u(n.tan,T,.78,.16,S,.39,w),u(n.dark,T,E-R,.1,S,(E+R)/2,w-.035),u(n.glass,T-.12,E-R-.14,.033,S,(E+R)/2,w-.095),u(n.glassReflection,T-.17,.31,.01,S,2.52,w-.116);for(let D=0;D<=6;D++)u(A,.065,E-R+.06,.075,S-T/2+D*T/6,(E+R)/2,w-.135);for(let D of[R,1.82,E])u(A,T+.1,.077,.088,S,D,w-.145);u(n.dark,1.02,2.29,.055,V,1.145,w-.155),u(n.glass,.87,2.13,.014,V,1.135,w-.191);for(let D of[-1,1])u(A,.066,2.36,.052,V+D*.53,1.18,w-.2);u(A,1.12,.075,.059,V,2.36,w-.2),u(n.steel,.028,.43,.065,V+.37,1.1,w-.232),u(A,T+.37,.24,.92,S,3.045,w-.26),u(n.tan,T+.1,.055,.43,S,.041,w-.24)}function x(S,T){u(n.dark,.43,.28,.2,S,T,31.57,.13),u(n.lamp,.355,.185,.016,S,T-.007,31.455,.13),d(n.steel,[S,T,31.93],[S,T,31.64],.045)}function M(S,T,A,w,R){u(n.dark,w+.13,R+.13,.085,T,A,31.57);let E=new ge(new Ne(w,R),qd(S));return E.name=S==="neil"?"Neil Signs \xB7 reference wordmark":"A&M Ceramics Ltd \xB7 unit 4",E.position.set(T,A,31.51),E.rotation.y=Math.PI,e.add(E),{name:E.name,x:T,y:A,z:31.51,yaw:Math.PI,width:w,height:R}}let _=[];for(let S of jl){let{left:T,right:A,ridge:w}=S,R=A-T,E=(T+A)/2,V=S.muted?n.mutedBlue:n.blue;u(S.muted?n.muted:n.cladding,R,rt,Bt,E,rt/2,At+Bt/2),u(n.tan,R,.78,.08,E,.39,At-.045);for(let D=T+.22;D<A;D+=.49)u(S.muted?n.muted:n.ribs,.035,rt-.83,.036,D,(rt+.83)/2,At-.04);p(T,A,w);for(let D of[-1,1]){let I=R/2+.22,B=w+.02,q=Math.hypot(I,B),N=-D*Math.atan2(B,I),W=E+D*R/4;u(n.roof,q,.095,Bt+.54,W,rt+w/2+.05,At+Bt/2,0,0,N),d(V,[E+D*(R/2+.25),rt+.08,31.71],[E,rt+w+.11,31.71],.13,.18);for(let L=E+D*.45;D>0?L<A:L>T;L+=D*.88){let P=rt+w*(1-Math.abs(L-E)/(R/2))+.12;u(n.roofRib,.025,.035,Bt+.38,L,P,At+Bt/2,0,0,N)}}u(V,.15,.15,Bt+.6,E,rt+w+.13,At+Bt/2);for(let D of[T+.09,A-.09]){u(V,.19,rt,.17,D,rt/2,31.87),u(n.dark,.16,.15,Bt+.2,D,rt-.01,At+Bt/2),u(n.dark,.11,5.92,.11,D,.23+5.92/2,31.73);for(let I of[.4,2.2,4.1,5.8])u(n.steel,.17,.07,.15,D,I,31.73);u(n.dark,.14,.14,.37,D,.19,31.62)}u(V,R+.22,.32,.14,E,6.22,31.87),g(S.door,S.muted?5.5:6.2,4.45,S.muted?n.mutedBlue:n.door),v(S.office,S.muted?4.2:8.8,V),x(T+R*.12,5.65),x(T+R*.88,5.65),S.brand==="neil"&&_.push(M("neil",26.45,5.62,9.15,1.52)),S.brand==="am"&&_.push(M("am",-12,5.62,10.65,1.52))}for(let S of[-60.03,60.03])for(let T=At+.3;T<At+Bt;T+=.7)u(n.ribs,.035,rt-.83,.035,S,(rt+.83)/2,T);u(n.concrete,120,.012,5.4,0,.003,29.08);for(let S of[-58,-54,-50,-22,-18,-14,12,16,20,30,34,38,46,50,54,58])u(n.white,.065,.007,3,S,.016,28.65);for(let[S,T]of[[-54,8],[-18,8],[16,8],[34,8],[52,12]])u(n.white,T,.007,.065,S,.016,27.15);for(let S of[-18,34])for(let T=0;T<7;T++)u(n.white,2.2,.007,.1,S,.017,29.72+T*.19);let m=[];for(let S of[-58,-25,7,39,59])u(n.steel,.085,7.78,.085,S,3.89,27.25),u(n.steel,.09,.09,.68,S,7.77,26.97),u(n.dark,.24,.125,.55,S,7.8,26.69),u(n.lamp,.185,.016,.47,S,7.735,26.69),u(n.dark,.17,.2,.17,S,.1,27.25),m.push({x:S,z:27.25,height:7.86});if(f.length){let S=new Be;S.setAttribute("position",new Pe(f,3)),S.computeVertexNormals();let T=new ge(S,n.cladding);T.name="Shallow pitched facade gables",e.add(T)}for(let[S,T]of l){let A=new hn(h,S,T.length);A.name="Estate detail batch \xB7 "+Object.keys(n).find(w=>n[w]===S);for(let w=0;w<T.length;w++){let R=T[w];c.position.set(R.x,R.y,R.z),c.scale.set(R.w,R.h,R.d),R.quaternion?c.quaternion.copy(R.quaternion):c.rotation.set(R.rx,R.ry,R.rz),c.updateMatrix(),A.setMatrixAt(w,c.matrix)}A.instanceMatrix.needsUpdate=!0,A.computeBoundingBox(),A.computeBoundingSphere(),A.castShadow=!1,A.receiveShadow=!0,e.add(A)}let b=0,C=0;return e.traverse(S=>{S.isMesh&&(C++,b+=(S.geometry.index?.count||S.geometry.attributes.position.count)/3*(S.isInstancedMesh?S.count:1))}),e.userData={...e.userData,frontZ:At,minZ:Xd,depth:Bt,eaves:rt,units:jl.map(S=>({...S})),signs:_,lampPosts:m,triangles:b,drawCalls:C,collidersAdded:0},e.updateMatrixWorld(!0),e}function tc(s){let e=new _e;e.name="Ketterer Court exterior",s.worldScene.add(e);let t=window.yardExteriorTreeSites||[],n=t.map(a=>{let l=a.z>50&&Math.abs(a.x)<65,c=l?Math.max(18,a.height+7):a.height;return{...a,height:c,width:c*.88,z:l?Math.max(61,a.z+5):a.z}}),i=Ql(e,n),r=ec(e),o=new Se({color:6450762,roughness:1});for(let[a,l,c,h]of[[0,-52,195,26],[-83,10,22,116],[88,10,20,116],[0,71,195,24]]){let f=new ge(new Ne(c,h),o);f.rotation.x=-Math.PI/2,f.position.set(a,.004,l),f.name="Exterior grass verge",e.add(f)}return{root:e,trees:i,buildings:r}}var Bn=s=>document.querySelector(s),jt=Bn("#questEnter"),gn=Bn("#questStatus"),Ar=Bn("#questPanel");Bn("#questPreview").onclick=()=>{Ar.hidden=!0,Bn("#questReturn").hidden=!1};Bn("#questReturn").onclick=()=>{window.yardDebug?.pause(),Ar.hidden=!1};async function Yd(s){let e=s.renderer,t=s.worldScene,n=s.worldCamera;s.exterior=tc(s);let i=Kl(s);s.vrGames=i,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let r=new _e;r.name="Quest player rig",t.add(r);let o=[e.xr.getController(0),e.xr.getController(1)],a=o.map((w,R)=>e.xr.getControllerGrip?.(R)||w);for(let w of a)o.includes(w)||r.add(w);let l=new Map;o.forEach(w=>{r.add(w),w.addEventListener("connected",E=>l.set(w,E.data)),w.addEventListener("disconnected",()=>l.delete(w));let R=new ge(new Ke(.018,8,6),new Me({color:16769946}));w.add(R)});let c=new St(new Be,new bt({color:8645568}));c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new ge(new fn(.22,.3,32),new Me({color:8645568,side:2,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.visible=!1,t.add(h);let f=s.colliders.map(w=>new qe(new y(w.min.x,w.min.y,w.min.z),new y(w.max.x,w.max.y,w.max.z))),u=0,d=new y,p=new Re,g=null,v=!1,x=!1,M=!1,_=null,m,b,C=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),S=()=>{let w=s.stats(),R=ia(d.x,d.z,u);r.position.set(w.x-R.x,w.y+(window.yardFloorOffset||0),w.z-R.z),r.rotation.y=u,n.position.set(0,0,0),n.quaternion.identity(),r.updateMatrixWorld(!0)};s.xrFace=w=>{let R=new y(0,0,-1).applyQuaternion(p);u=w-Math.atan2(-R.x,-R.z),g=null,S()};function T(w){if(_=null,!w){c.visible=h.visible=!1;return}let R=w.getWorldPosition(new y),V=new y(0,0,-1).applyQuaternion(w.getWorldQuaternion(new Re)).multiplyScalar(6);V.y+=2;let D=[R.clone()],I=new nt,B=new y,q=R.clone(),N=null;for(let W=1;W<=32;W++){let L=W*.05,P=R.clone().addScaledVector(V,L);P.y-=4.9*L*L;let F=P.clone().sub(q),k=F.length();I.set(q,F.normalize());let z=k,G=null,Y=!1;for(let ne of f){if(ne.containsPoint(q))continue;let Z=I.intersectBox(ne,B);if(Z){let J=Z.distanceTo(q);J<z&&(z=J,G=Z.clone(),Y=Math.abs(Z.y-ne.max.y)<.015)}}if(q.y>=0&&P.y<=0){let ne=q.clone().lerp(P,q.y/(q.y-P.y));ne.distanceTo(q)<z&&(G=ne,Y=!0)}if(G){D.push(G),N=G,Y&&!s.blocked(G.x,G.z,G.y)&&Math.abs(s.groundAt(G.x,G.z,G.y+.05)-G.y)<.12&&(_=G);break}D.push(P),q=P}c.geometry.dispose(),c.geometry=new Be().setFromPoints(D),c.visible=!0,c.material.color.set(_?8645568:16746618),h.visible=!!_,_&&h.position.copy(_).add(new y(0,.025,0))}let A=window.questBridge={frame:null,sample(w){let R=e.xr.getSession(),E=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!E||R?.visibilityState==="hidden")return g=null,i.interrupt(),C();if(d.set(E.transform.position.x,E.transform.position.y,E.transform.position.z),p.copy(E.transform.orientation),g){let Z=ia(d.x-g.x,d.z-g.z,u);Math.hypot(Z.x,Z.z)<.8&&s.xrPhysical(Z.x,Z.z)}g=d.clone();let V,D;for(let Z of R.inputSources)Z.handedness==="left"&&(V=Z),Z.handedness==="right"&&(D=Z);let[I,B]=ns(V),[q]=ns(D),N=Rl(q,Bn("#questTurning").value,w,v);!i.menuOpen&&!i.held&&!i.driving&&(u+=N.angle,N.angle&&i.interrupt()),v=N.latched;let W=!!V?.gamepad?.buttons[4]?.pressed;W&&!M&&!i.driving&&(i.interrupt(),s.resetPosition(),u=0,g=null,i.close()),M=W,S();let L=o.find(Z=>l.get(Z)?.handedness==="right"),P=new y(0,0,-1).applyQuaternion(p),F=P.clone().applyAxisAngle(new y(0,1,0),u),k=i.tick({dt:w,eye:d.clone().applyMatrix4(r.matrixWorld),forward:F,headOrientation:r.getWorldQuaternion(new Re).multiply(p),left:V,right:D,controller:L,rightGripController:a[o.findIndex(Z=>l.get(Z)?.handedness==="right")],leftController:a[o.findIndex(Z=>l.get(Z)?.handedness==="left")]}),z=!k.blockTeleport&&!i.menuOpen&&(!!D?.gamepad?.buttons[1]?.pressed||!k.consumeTrigger&&!!D?.gamepad?.buttons[0]?.pressed);z&&(i.interrupt(),T(L)),!z&&x&&(_&&!i.menuOpen&&!k.blockTeleport&&s.xrTeleport(_.x,_.y,_.z),_=null,c.visible=h.visible=!1),x=z;let G=u+Math.atan2(-P.x,-P.z);s.xrHeading(G);let Y=C(),ne=Number(Bn("#questSpeed").value)/2.9;return Y.fwd=-_i(B)*ne,Y.strafe=_i(I)*ne,(z||k.blockMovement)&&(Y.fwd=Y.strafe=0),Y},beforeRender(){e.xr.isPresenting&&S()}};if(e.xr.addEventListener("sessionstart",()=>{b=n.parent,m=e.shadowMap.enabled,e.shadowMap.enabled=!1,r.add(n),u=0,d.set(0,0,0),g=null,v=x=M=!1,s.xrBegin(),S(),i.begin(),document.body.classList.add("questActive"),Ar.hidden=!0,gn.textContent="VR is running. Use the Meta menu to exit.",jt.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),r.remove(n),b&&b.add(n),e.shadowMap.enabled=m,c.visible=h.visible=!1,g=null,s.xrEnd(),document.body.classList.remove("questActive"),Ar.hidden=!1,jt.disabled=!1,jt.textContent="Enter VR again",gn.textContent="You have left VR."}),jt.onclick=async()=>{jt.disabled=!0;let w;try{i.enableAudio(),w=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),w.addEventListener("visibilitychange",()=>{g=null}),await e.xr.setSession(w)}catch(R){w&&await w.end().catch(()=>{}),jt.disabled=!1,gn.textContent="Could not enter VR: "+R.message}},!window.isSecureContext){jt.textContent="HTTPS hosting needed",gn.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){jt.textContent="Open in your Quest browser",gn.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let w=await navigator.xr.isSessionSupported("immersive-vr");jt.disabled=!w,jt.textContent=w?"Enter VR":"VR headset not detected",gn.textContent=w?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(w){gn.textContent="VR availability check failed: "+w.message}}var $d=0,nc=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(nc),Yd(window.yardDebug).catch(s=>{gn.textContent="VR setup failed: "+s.message,console.error(s)})):++$d>1200&&(clearInterval(nc),gn.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
