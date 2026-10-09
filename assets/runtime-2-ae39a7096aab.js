(()=>{var Bl=1;var Ol=3,pr=0,zl=1,nt=2;var Lo=1,ca=2;var Do=100;var Uo=204,No=205;var Fo=0,Bo=1,Oo=2,as=3,zo=4,ko=5,Vo=6,Go=7,ua=0,kl=1,Vl=2;var ha=1,fa=2,da=3,pa=4,ma=5,ga=6,xa=7;var ya=300,Gl=301,_a=302;var Hl=306,qt=1e3,ts=1001,Ho=1002,Wo=1003;var Wl=1006;var Xl=1008;var va=1009;var Ma=1015;var ql=1023;var Yl=1028;var ls=2300,mr=2301,fr=2302,Xo=2303,qo=2400,Yo=2401,Zo=2402;var Zl=0;var ba="",Ae="srgb",$o="srgb-linear",Jo="linear",dr="srgb";var fi=7680;var Ko=519;var jo=35044,Sa=35048;var Hn=2e3,cs=2001;function Mu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function bu(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Qo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var nl={},gr=null;function $l(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function et(...s){s=$l(s);let e="THREE."+s.shift();if(gr)gr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Je(...s){s=$l(s);let e="THREE."+s.shift();if(gr)gr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ni(...s){let e=s.join(" ");e in nl||(nl[e]=!0,et(...s))}var Su={[Fo]:Bo,[Oo]:Vo,[zo]:Go,[as]:ko,[Bo]:Fo,[Vo]:Oo,[Go]:zo,[ko]:as},Wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],il=1234567,is=Math.PI/180,us=180/Math.PI;function _i(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[s&255]+Mt[s>>8&255]+Mt[s>>16&255]+Mt[s>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function Fe(s,e,t){return Math.max(e,Math.min(t,s))}function Ta(s,e){return(s%e+e)%e}function Tu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function wu(s,e,t){return s!==e?(t-s)/(e-s):0}function ss(s,e,t){return(1-t)*s+t*e}function Au(s,e,t,n){return ss(s,e,1-Math.exp(-t*n))}function Eu(s,e=1){return e-Math.abs(Ta(s,e*2)-e)}function Cu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ru(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Pu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Iu(s,e){return s+Math.random()*(e-s)}function Lu(s){return s*(.5-Math.random())}function Du(s){s!==void 0&&(il=s);let e=il+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uu(s){return s*is}function Nu(s){return s*us}function Fu(s){return(s&s-1)===0&&s!==0}function Bu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ou(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zu(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*u,a*c);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ui(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function At(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ge={DEG2RAD:is,RAD2DEG:us,generateUUID:_i,clamp:Fe,euclideanModulo:Ta,mapLinear:Tu,inverseLerp:wu,lerp:ss,damp:Au,pingpong:Eu,smoothstep:Cu,smootherstep:Ru,randInt:Pu,randFloat:Iu,randFloatSpread:Lu,seededRandom:Du,degToRad:Uu,radToDeg:Nu,isPowerOfTwo:Fu,ceilPowerOfTwo:Bu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:zu,normalize:At,denormalize:Ui},Ca=class Ca{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ca.prototype.isVector2=!0;var he=Ca,be=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],g=r[o+3];if(h!==g||l!==f||c!==d||u!==p){let b=l*f+c*d+u*p+h*g;b<0&&(f=-f,d=-d,p=-p,g=-g,b=-b);let y=1-a;if(b<.9995){let C=Math.acos(b),v=Math.sin(C);y=Math.sin(y*C)/v,a=Math.sin(a*C)/v,l=l*y+f*a,c=c*y+d*a,u=u*y+p*a,h=h*y+g*a}else{l=l*y+f*a,c=c*y+d*a,u=u*y+p*a,h=h*y+g*a;let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ra=class Ra{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ra.prototype.isVector3=!0;var x=Ra,ro=new x,sl=new be,Pa=class Pa{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],g=i[0],b=i[3],y=i[6],C=i[1],v=i[4],m=i[7],T=i[2],P=i[5],_=i[8];return r[0]=o*g+a*C+l*T,r[3]=o*b+a*v+l*P,r[6]=o*y+a*m+l*_,r[1]=c*g+u*C+h*T,r[4]=c*b+u*v+h*P,r[7]=c*y+u*m+h*_,r[2]=f*g+d*C+p*T,r[5]=f*b+d*v+p*P,r[8]=f*y+d*m+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oo.makeScale(e,t)),this}rotate(e){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oo.makeRotation(-e)),this}translate(e,t){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pa.prototype.isMatrix3=!0;var Ue=Pa,oo=new Ue,rl=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){let s={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dr&&(i.r=Tn(i.r),i.g=Tn(i.g),i.b=Tn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dr&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ba?Jo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$o]:{primaries:e,whitePoint:n,transfer:Jo,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:e,whitePoint:n,transfer:dr,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),s}var Xt=ku();function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Si,xr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=Qo("canvas")),Si.width=e.width,Si.height=e.height;let i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Tn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vu=1e6,yr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ao(i[o].image)):r.push(ao(i[o]))}else r=ao(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var Gu=1e6,lo=new x,hn=class s extends Wn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ts,i=ts,r=Wl,o=Xl,a=ql,l=va,c=s.DEFAULT_ANISOTROPY,u=ba){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=_i(),this.name="",this.source=new yr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ya)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qt:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qt:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=ya;hn.DEFAULT_ANISOTROPY=1;var Ia=class Ia{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],g=l[2],b=l[6],y=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(p-b)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(p+b)<.1&&Math.abs(c+d+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,m=(d+1)/2,T=(y+1)/2,P=(u+f)/4,_=(h+g)/4,M=(p+b)/4;return v>m&&v>T?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=P/n,r=_/n):m>T?m<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(m),n=P/i,r=M/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=M/r),this.set(n,i,r,t),this}let C=Math.sqrt((b-p)*(b-p)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(b-p)/C,this.y=(h-g)/C,this.z=(f-u)/C,this.w=Math.acos((c+d+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ia.prototype.isVector4=!0;var di=Ia;var kr=class kr{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,p,g,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,p,g,b)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,p,g,b){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=r,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=u,y[10]=h,y[14]=f,y[3]=d,y[7]=p,y[11]=g,y[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kr().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),o=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,g=c*h;t[0]=f+g*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-g*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hu,e,Wu)}lookAt(e,t,n){let i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Fn.crossVectors(n,Ot),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Fn.crossVectors(n,Ot)),Fn.normalize(),zs.crossVectors(Ot,Fn),i[0]=Fn.x,i[4]=zs.x,i[8]=Ot.x,i[1]=Fn.y,i[5]=zs.y,i[9]=Ot.y,i[2]=Fn.z,i[6]=zs.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],g=n[6],b=n[10],y=n[14],C=n[3],v=n[7],m=n[11],T=n[15],P=i[0],_=i[4],M=i[8],R=i[12],L=i[1],A=i[5],I=i[9],O=i[13],B=i[2],F=i[6],U=i[10],H=i[14],w=i[3],$=i[7],D=i[11],E=i[15];return r[0]=o*P+a*L+l*B+c*w,r[4]=o*_+a*A+l*F+c*$,r[8]=o*M+a*I+l*U+c*D,r[12]=o*R+a*O+l*H+c*E,r[1]=u*P+h*L+f*B+d*w,r[5]=u*_+h*A+f*F+d*$,r[9]=u*M+h*I+f*U+d*D,r[13]=u*R+h*O+f*H+d*E,r[2]=p*P+g*L+b*B+y*w,r[6]=p*_+g*A+b*F+y*$,r[10]=p*M+g*I+b*U+y*D,r[14]=p*R+g*O+b*H+y*E,r[3]=C*P+v*L+m*B+T*w,r[7]=C*_+v*A+m*F+T*$,r[11]=C*M+v*I+m*U+T*D,r[15]=C*R+v*O+m*H+T*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],g=e[7],b=e[11],y=e[15],C=l*d-c*f,v=a*d-c*h,m=a*f-l*h,T=o*d-c*u,P=o*f-l*u,_=o*h-a*u;return t*(g*C-b*v+y*m)-n*(p*C-b*T+y*P)+i*(p*v-g*T+y*_)-r*(p*m-g*P+b*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],g=e[13],b=e[14],y=e[15],C=t*a-n*o,v=t*l-i*o,m=t*c-r*o,T=n*l-i*a,P=n*c-r*a,_=i*c-r*l,M=u*g-h*p,R=u*b-f*p,L=u*y-d*p,A=h*b-f*g,I=h*y-d*g,O=f*y-d*b,B=C*O-v*I+m*A+T*L-P*R+_*M;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/B;return e[0]=(a*O-l*I+c*A)*F,e[1]=(i*I-n*O-r*A)*F,e[2]=(g*_-b*P+y*T)*F,e[3]=(f*P-h*_-d*T)*F,e[4]=(l*L-o*O-c*R)*F,e[5]=(t*O-i*L+r*R)*F,e[6]=(b*m-p*_-y*v)*F,e[7]=(u*_-f*m+d*v)*F,e[8]=(o*I-a*L+c*M)*F,e[9]=(n*L-t*I-r*M)*F,e[10]=(p*P-g*m+y*C)*F,e[11]=(h*m-u*P-d*C)*F,e[12]=(a*R-o*A-l*M)*F,e[13]=(t*A-n*R+i*M)*F,e[14]=(g*v-p*T-b*C)*F,e[15]=(u*T-h*v+f*C)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,g=o*u,b=o*h,y=a*h,C=l*c,v=l*u,m=l*h,T=n.x,P=n.y,_=n.z;return i[0]=(1-(g+y))*T,i[1]=(d+m)*T,i[2]=(p-v)*T,i[3]=0,i[4]=(d-m)*P,i[5]=(1-(f+y))*P,i[6]=(b+C)*P,i[7]=0,i[8]=(p+v)*_,i[9]=(b-C)*_,i[10]=(1-(f+g))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ti.set(i[0],i[1],i[2]).length(),a=Ti.set(i[4],i[5],i[6]).length(),l=Ti.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Qt.copy(this);let c=1/o,u=1/a,h=1/l;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Hn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Hn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===cs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Hn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Hn)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===cs)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};kr.prototype.isMatrix4=!0;var We=kr,Ti=new x,Qt=new We,Hu=new x(0,0,0),Wu=new x(1,1,1),Fn=new x,zs=new x,Ot=new x,al=new We,ll=new be,nn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xu=1e6,cl=new x,wi=new be,yn=new We,ks=new x,Zi=new x,qu=new x,Yu=new be,ul=new x(1,0,0),hl=new x(0,1,0),fl=new x(0,0,1),dl={type:"added"},Zu={type:"removed"},Ai={type:"childadded",child:null},co={type:"childremoved",child:null},Xe=class s extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new x,t=new nn,n=new be,i=new x(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Ue}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(ul,e)}rotateY(e){return this.rotateOnAxis(hl,e)}rotateZ(e){return this.rotateOnAxis(fl,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ul,e)}translateY(e){return this.translateOnAxis(hl,e)}translateZ(e){return this.translateOnAxis(fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Zi,ks,this.up):yn.lookAt(ks,Zi,this.up),this.quaternion.setFromRotationMatrix(yn),i&&(yn.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(yn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zu),co.child=e,this.dispatchEvent(co),co.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dl),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,Yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Xe.DEFAULT_UP=new x(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pe=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function uo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xt.workingColorSpace){if(e=Ta(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=uo(o,r,e+1/3),this.g=uo(o,r,e),this.b=uo(o,r,e-1/3)}return Xt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){let n=Jl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return Xt.workingToColorSpace(bt.copy(this),e),Math.round(Fe(bt.r*255,0,255))*65536+Math.round(Fe(bt.g*255,0,255))*256+Math.round(Fe(bt.b*255,0,255))}getHexString(e=Ae){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.workingToColorSpace(bt.copy(this),t);let n=bt.r,i=bt.g,r=bt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xt.workingColorSpace){return Xt.workingToColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Ae){Xt.workingToColorSpace(bt.copy(this),e);let t=bt.r,n=bt.g,i=bt.b;return e!==Ae?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bn),this.setHSL(Bn.h+e,Bn.s+t,Bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bn),e.getHSL(Vs);let n=ss(Bn.h,Vs.h,t),i=ss(Bn.s,Vs.s,t),r=ss(Bn.l,Vs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bt=new Be;Be.NAMES=Jl;var en=new x,_n=new x,ho=new x,vn=new x,Ei=new x,Ci=new x,pl=new x,fo=new x,po=new x,mo=new x,go=new di,xo=new di,yo=new di,Gn=class s{constructor(e=new x,t=new x,n=new x){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),en.subVectors(e,t),i.cross(en);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){en.subVectors(i,t),_n.subVectors(n,t),ho.subVectors(e,t);let o=en.dot(en),a=en.dot(_n),l=en.dot(ho),c=_n.dot(_n),u=_n.dot(ho),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(o,vn.y),l.addScaledVector(a,vn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return go.setScalar(0),xo.setScalar(0),yo.setScalar(0),go.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,n),yo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(go,r.x),o.addScaledVector(xo,r.y),o.addScaledVector(yo,r.z),o}static isFrontFacing(e,t,n,i){return en.subVectors(n,t),_n.subVectors(e,t),en.cross(_n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),en.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ei.subVectors(i,n),Ci.subVectors(r,n),fo.subVectors(e,n);let l=Ei.dot(fo),c=Ci.dot(fo);if(l<=0&&c<=0)return t.copy(n);po.subVectors(e,i);let u=Ei.dot(po),h=Ci.dot(po);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ei,o);mo.subVectors(e,r);let d=Ei.dot(mo),p=Ci.dot(mo);if(p>=0&&d<=p)return t.copy(r);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ci,a);let b=u*p-d*h;if(b<=0&&h-u>=0&&d-p>=0)return pl.subVectors(r,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(pl,a);let y=1/(b+g+f);return o=g*y,a=f*y,t.copy(n).addScaledVector(Ei,o).addScaledVector(Ci,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ve=class{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(e.matrixWorld),this.expandByPoint(tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gs.copy(n.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tn),tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Hs.subVectors(this.max,$i),Ri.subVectors(e.a,$i),Pi.subVectors(e.b,$i),Ii.subVectors(e.c,$i),On.subVectors(Pi,Ri),zn.subVectors(Ii,Pi),li.subVectors(Ri,Ii);let t=[0,-On.z,On.y,0,-zn.z,zn.y,0,-li.z,li.y,On.z,0,-On.x,zn.z,0,-zn.x,li.z,0,-li.x,-On.y,On.x,0,-zn.y,zn.x,0,-li.y,li.x,0];return!_o(t,Ri,Pi,Ii,Hs)||(t=[1,0,0,0,1,0,0,0,1],!_o(t,Ri,Pi,Ii,Hs))?!1:(Ws.crossVectors(On,zn),t=[Ws.x,Ws.y,Ws.z],_o(t,Ri,Pi,Ii,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new x,new x,new x,new x,new x,new x,new x,new x],tn=new x,Gs=new Ve,Ri=new x,Pi=new x,Ii=new x,On=new x,zn=new x,li=new x,$i=new x,Hs=new x,Ws=new x,ci=new x;function _o(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ci.fromArray(s,r);let a=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),u=n.dot(ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ht=new x,Xs=new he,$u=1e6,gt=class extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$u++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jo,this.updateRanges=[],this.gpuType=Ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var _r=class extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var vr=class extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ju=new Ve,Ji=new x,vo=new x,Yt=class{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ju.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);let t=Ji.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ji,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(vo)),this.expandByPoint(Ji.copy(e.center).sub(vo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ku=1e6,Wt=new We,Mo=new Xe,Li=new x,zt=new Ve,Ki=new Ve,dt=new x,Oe=class s extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mu(e)?vr:_r)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Mo.lookAt(e),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ve);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(e){let n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ki.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(zt.min,Ki.min),zt.expandByPoint(dt),dt.addVectors(zt.max,Ki.max),zt.expandByPoint(dt)):(zt.expandByPoint(Ki.min),zt.expandByPoint(Ki.max))}zt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)dt.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(e,c),dt.add(Li)),i=Math.max(i,n.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new x,l[M]=new x;let c=new x,u=new x,h=new x,f=new he,d=new he,p=new he,g=new x,b=new x;function y(M,R,L){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,R),h.fromBufferAttribute(n,L),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,L),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let A=1/(d.x*p.y-p.x*d.y);isFinite(A)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(A),b.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(A),a[M].add(g),a[R].add(g),a[L].add(g),l[M].add(b),l[R].add(b),l[L].add(b))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let M=0,R=C.length;M<R;++M){let L=C[M],A=L.start,I=L.count;for(let O=A,B=A+I;O<B;O+=3)y(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new x,m=new x,T=new x,P=new x;function _(M){T.fromBufferAttribute(i,M),P.copy(T);let R=a[M];v.copy(R),v.sub(T.multiplyScalar(T.dot(R))).normalize(),m.crossVectors(P,R);let A=m.dot(l[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,A)}for(let M=0,R=C.length;M<R;++M){let L=C[M],A=L.start,I=L.count;for(let O=A,B=A+I;O<B;O+=3)_(e.getX(O+0)),_(e.getX(O+1)),_(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new x,r=new x,o=new x,a=new x,l=new x,c=new x,u=new x,h=new x;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),g=e.getX(f+1),b=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,b),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let g=0,b=l.length;g<b;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let y=0;y<u;y++)f[p++]=c[d++]}return new gt(f,u,h)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ju=1e6,pi=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Lo,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=No,this.blendEquation=Do,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(n.blending=this.blending),this.side!==pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Do&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ko&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var bn=new x,bo=new x,qs=new x,kn=new x,So=new x,Ys=new x,To=new x,tt=class{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bo.copy(e).add(t).multiplyScalar(.5),qs.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(bo);let r=e.distanceTo(t)*.5,o=-this.direction.dot(qs),a=kn.dot(this.direction),l=-kn.dot(qs),c=kn.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(bo).addScaledVector(qs,f),d}intersectSphere(e,t){bn.subVectors(e.center,this.origin);let n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,r){So.subVectors(t,e),Ys.subVectors(n,e),To.crossVectors(So,Ys);let o=this.direction.dot(To),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kn.subVectors(this.origin,e);let l=a*this.direction.dot(Ys.crossVectors(kn,Ys));if(l<0)return null;let c=a*this.direction.dot(So.cross(kn));if(c<0||l+c>o)return null;let u=-a*kn.dot(To);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ml=new We,ui=new tt,Zs=new Yt,gl=new x,$s=new x,Js=new x,Ks=new x,wo=new x,js=new x,xl=new x,Qs=new x,me=class extends Xe{constructor(e=new Oe,t=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){js.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(wo.fromBufferAttribute(h,e),o?js.addScaledVector(wo,u):js.addScaledVector(wo.sub(t),u))}t.add(js)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(r),ui.copy(e.ray).recast(e.near),!(Zs.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Zs,gl)===null||ui.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(r).invert(),ui.copy(e.ray).applyMatrix4(ml),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let b=f[p],y=o[b.materialIndex],C=Math.max(b.start,d.start),v=Math.min(a.count,Math.min(b.start+b.count,d.start+d.count));for(let m=C,T=v;m<T;m+=3){let P=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);i=er(this,y,e,n,c,u,h,P,_,M),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let b=p,y=g;b<y;b+=3){let C=a.getX(b),v=a.getX(b+1),m=a.getX(b+2);i=er(this,o,e,n,c,u,h,C,v,m),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let b=f[p],y=o[b.materialIndex],C=Math.max(b.start,d.start),v=Math.min(l.count,Math.min(b.start+b.count,d.start+d.count));for(let m=C,T=v;m<T;m+=3){let P=m,_=m+1,M=m+2;i=er(this,y,e,n,c,u,h,P,_,M),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let b=p,y=g;b<y;b+=3){let C=b,v=b+1,m=b+2;i=er(this,o,e,n,c,u,h,C,v,m),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}};function Qu(s,e,t,n,i,r,o,a){let l;if(e.side===zl?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===pr,a),l===null)return null;Qs.copy(a),Qs.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:s}}function er(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,$s),s.getVertexPosition(l,Js),s.getVertexPosition(c,Ks);let u=Qu(s,e,t,n,$s,Js,Ks,xl);if(u){let h=new x;Gn.getBarycoord(xl,$s,Js,Ks,h),i&&(u.uv=Gn.getInterpolatedAttribute(i,a,l,c,h,new he)),r&&(u.uv1=Gn.getInterpolatedAttribute(r,a,l,c,h,new he)),o&&(u.normal=Gn.getInterpolatedAttribute(o,a,l,c,h,new x),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new x,materialIndex:0};Gn.getNormal($s,Js,Ks,f.normal),u.face=f,u.barycoord=h}return u}var Mr=class extends hn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Wo,u=Wo,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xn=class extends gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Di=new We,yl=new We,tr=[],_l=new Ve,eh=new We,ji=new me,Qi=new Yt,xt=class extends me{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,eh)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ve),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),_l.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(_l)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Qi.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ji.geometry=this.geometry,ji.material=this.material,ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Di),yl.multiplyMatrices(n,Di),ji.matrixWorld=yl,ji.raycast(e,tr);for(let o=0,a=tr.length;o<a;o++){let l=tr[o];l.instanceId=r,l.object=this,t.push(l)}tr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mr(new Float32Array(i*this.count),i,this.count,Yl,Ma));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ao=new x,th=new x,nh=new Ue,Sn=class{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ao.subVectors(n,t).cross(th.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ao),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nh.getNormalMatrix(e),i=this.coplanarPoint(Ao).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},hi=new Yt,ih=new he(.5,.5),nr=new x,br=class{constructor(e=new Sn,t=new Sn,n=new Sn,i=new Sn,r=new Sn,o=new Sn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],b=r[10],y=r[11],C=r[12],v=r[13],m=r[14],T=r[15];if(i[0].setComponents(c-o,d-u,y-p,T-C).normalize(),i[1].setComponents(c+o,d+u,y+p,T+C).normalize(),i[2].setComponents(c+a,d+h,y+g,T+v).normalize(),i[3].setComponents(c-a,d-h,y-g,T-v).normalize(),n)i[4].setComponents(l,f,b,m).normalize(),i[5].setComponents(c-l,d-f,y-b,T-m).normalize();else if(i[4].setComponents(c-l,d-f,y-b,T-m).normalize(),t===Hn)i[5].setComponents(c+l,d+f,y+b,T+m).normalize();else if(t===cs)i[5].setComponents(l,f,b,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){hi.center.set(0,0,0);let t=ih.distanceTo(e.center);return hi.radius=.7071067811865476+t,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(nr.x=i.normal.x>0?e.max.x:e.min.x,nr.y=i.normal.y>0?e.max.y:e.min.y,nr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(nr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Et=class extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sr=new x,Tr=new x,vl=new We,es=new tt,ir=new Yt,Eo=new x,Ml=new x,Ct=class extends Xe{constructor(e=new Oe,t=new Et){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Sr.fromBufferAttribute(t,i-1),Tr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sr.distanceTo(Tr);e.setAttribute("lineDistance",new Re(n,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=r,e.ray.intersectsSphere(ir)===!1)return;vl.copy(i).invert(),es.copy(e.ray).applyMatrix4(vl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,b=p-1;g<b;g+=c){let y=u.getX(g),C=u.getX(g+1),v=sr(this,e,es,l,y,C,g);v&&t.push(v)}if(this.isLineLoop){let g=u.getX(p-1),b=u.getX(d),y=sr(this,e,es,l,g,b,p-1);y&&t.push(y)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,b=p-1;g<b;g+=c){let y=sr(this,e,es,l,g,g+1,g);y&&t.push(y)}if(this.isLineLoop){let g=sr(this,e,es,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sr(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Sr.fromBufferAttribute(a,i),Tr.fromBufferAttribute(a,r),t.distanceSqToSegment(Sr,Tr,Eo,Ml)>n)return;Eo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Eo);if(!(c<e.near||c>e.far))return{distance:c,point:Ml.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Bi=class extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bl=new We,ea=new tt,rr=new Yt,or=new x,fs=class extends Xe{constructor(e=new Oe,t=new Bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;bl.copy(i).invert(),ea.copy(e.ray).applyMatrix4(bl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,g=d;p<g;p++){let b=c.getX(p);or.fromBufferAttribute(h,b),Sl(or,b,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,g=d;p<g;p++)or.fromBufferAttribute(h,p),Sl(or,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Sl(s,e,t,n,i,r,o){let a=ea.distanceSqToPoint(s);if(a<t){let l=new x;ea.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ie=class extends hn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Me=class s extends Oe{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2));function p(g,b,y,C,v,m,T,P,_,M,R){let L=m/_,A=T/M,I=m/2,O=T/2,B=P/2,F=_+1,U=M+1,H=0,w=0,$=new x;for(let D=0;D<U;D++){let E=D*A-O;for(let N=0;N<F;N++){let z=N*L-I;$[g]=z*C,$[b]=E*v,$[y]=B,c.push($.x,$.y,$.z),$[g]=0,$[b]=0,$[y]=P>0?1:-1,u.push($.x,$.y,$.z),h.push(N/_),h.push(1-D/M),H+=1}}for(let D=0;D<M;D++)for(let E=0;E<_;E++){let N=f+E+F*D,z=f+E+F*(D+1),G=f+(E+1)+F*(D+1),S=f+(E+1)+F*D;l.push(N,z,S),l.push(z,G,S),w+=6}a.addGroup(d,w,R),d+=w,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var mi=class s extends Oe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new x,u=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ze=class s extends Oe{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,g=[],b=n/2,y=0;C(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function C(){let m=new x,T=new x,P=0,_=(t-e)/n;for(let M=0;M<=r;M++){let R=[],L=M/r,A=L*(t-e)+e;for(let I=0;I<=i;I++){let O=I/i,B=O*l+a,F=Math.sin(B),U=Math.cos(B);T.x=A*F,T.y=-L*n+b,T.z=A*U,h.push(T.x,T.y,T.z),m.set(F,_,U).normalize(),f.push(m.x,m.y,m.z),d.push(O,1-L),R.push(p++)}g.push(R)}for(let M=0;M<i;M++)for(let R=0;R<r;R++){let L=g[R][M],A=g[R+1][M],I=g[R+1][M+1],O=g[R][M+1];(e>0||R!==0)&&(u.push(L,A,O),P+=3),(t>0||R!==r-1)&&(u.push(A,I,O),P+=3)}c.addGroup(y,P,0),y+=P}function v(m){let T=p,P=new he,_=new x,M=0,R=m===!0?e:t,L=m===!0?1:-1;for(let I=1;I<=i;I++)h.push(0,b*L,0),f.push(0,L,0),d.push(.5,.5),p++;let A=p;for(let I=0;I<=i;I++){let B=I/i*l+a,F=Math.cos(B),U=Math.sin(B);_.x=R*U,_.y=b*L,_.z=R*F,h.push(_.x,_.y,_.z),f.push(0,L,0),P.x=F*.5+.5,P.y=U*.5*L+.5,d.push(P.x,P.y),p++}for(let I=0;I<i;I++){let O=T+I,B=A+I;m===!0?u.push(B,B+1,O):u.push(B+1,B,O),M+=3}c.addGroup(y,M,m===!0?1:2),y+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sn=class s extends ze{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new he:new x);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new x,i=[],r=[],o=[],a=new x,l=new We;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new x)}r[0]=new x,o[0]=new x;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Fe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Fe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oi=class extends kt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wr=class extends Oi{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wa(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Tl=new x,wl=new x,Co=new wa,Ro=new wa,Po=new wa,qn=class extends kt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new x){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(wl.subVectors(i[0],i[1]).add(i[0]),c=wl);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Tl.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Tl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),b=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),p<1e-4&&(p=g),b<1e-4&&(b=g),Co.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,g,b),Ro.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,g,b),Po.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,g,b)}else this.curveType==="catmullrom"&&(Co.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ro.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Po.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Co.calc(l),Ro.calc(l),Po.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new x().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Al(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function sh(s,e){let t=1-s;return t*t*e}function rh(s,e){return 2*(1-s)*s*e}function oh(s,e){return s*s*e}function rs(s,e,t,n){return sh(s,e)+rh(s,t)+oh(s,n)}function ah(s,e){let t=1-s;return t*t*t*e}function lh(s,e){let t=1-s;return 3*t*t*s*e}function ch(s,e){return 3*(1-s)*s*s*e}function uh(s,e){return s*s*s*e}function os(s,e,t,n,i){return ah(s,e)+lh(s,t)+ch(s,n)+uh(s,i)}var ds=class extends kt{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(os(e,i.x,r.x,o.x,a.x),os(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wn=class extends kt{constructor(e=new x,t=new x,n=new x,i=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new x){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(os(e,i.x,r.x,o.x,a.x),os(e,i.y,r.y,o.y,a.y),os(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ps=class extends kt{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yn=class extends kt{constructor(e=new x,t=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new x){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new x){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ms=class extends kt{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(rs(e,i.x,r.x,o.x),rs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gs=class extends kt{constructor(e=new x,t=new x,n=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new x){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(rs(e,i.x,r.x,o.x),rs(e,i.y,r.y,o.y),rs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xs=class extends kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Al(a,l.x,c.x,u.x,h.x),Al(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new he().fromArray(i))}return this}},Ar=Object.freeze({__proto__:null,ArcCurve:wr,CatmullRomCurve3:qn,CubicBezierCurve:ds,CubicBezierCurve3:wn,EllipseCurve:Oi,LineCurve:ps,LineCurve3:Yn,QuadraticBezierCurve:ms,QuadraticBezierCurve3:gs,SplineCurve:xs}),zi=class extends kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ar[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ar[i.type]().fromJSON(i))}return this}},gi=class extends zi{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ps(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ms(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new ds(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new xs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Oi(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ft=class extends gi{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new gi().fromJSON(i))}return this}};function hh(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Kl(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=gh(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let u=a,h=l;for(let f=t;f<i;f+=t){let d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ys(r,o,t,a,l,c,0),o}function Kl(s,e,t,n,i){let r;if(i===Eh(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=El(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=El(o/n|0,s[o],s[o+1],r);return r&&ki(r,r.next)&&(vs(r),r=r.next),r}function xi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ki(t,t.next)||Qe(t.prev,t,t.next)===0)){if(vs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ys(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Mh(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?dh(s,n,i,r):fh(s)){e.push(l.i,s.i,c.i),vs(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=ph(xi(s),e),ys(s,e,t,n,i,r,2)):o===2&&mh(s,e,t,n,i,r):ys(xi(s),e,t,n,i,r,1);break}}}function fh(s){let e=s.prev,t=s,n=s.next;if(Qe(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),h=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&ns(i,a,r,l,o,c,p.x,p.y)&&Qe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function dh(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Qe(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),g=Math.max(a,l,c),b=Math.max(u,h,f),y=ta(d,p,e,t,n),C=ta(g,b,e,t,n),v=s.prevZ,m=s.nextZ;for(;v&&v.z>=y&&m&&m.z<=C;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=b&&v!==i&&v!==o&&ns(a,u,l,h,c,f,v.x,v.y)&&Qe(v.prev,v,v.next)>=0||(v=v.prevZ,m.x>=d&&m.x<=g&&m.y>=p&&m.y<=b&&m!==i&&m!==o&&ns(a,u,l,h,c,f,m.x,m.y)&&Qe(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;v&&v.z>=y;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=b&&v!==i&&v!==o&&ns(a,u,l,h,c,f,v.x,v.y)&&Qe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;m&&m.z<=C;){if(m.x>=d&&m.x<=g&&m.y>=p&&m.y<=b&&m!==i&&m!==o&&ns(a,u,l,h,c,f,m.x,m.y)&&Qe(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function ph(s,e){let t=s;do{let n=t.prev,i=t.next.next;!ki(n,i)&&Ql(n,t,t.next,i)&&_s(n,i)&&_s(i,n)&&(e.push(n.i,t.i,i.i),vs(t),vs(t.next),t=s=i),t=t.next}while(t!==s);return xi(t)}function mh(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Th(o,a)){let l=ec(o,a);o=xi(o,o.next),l=xi(l,l.next),ys(o,e,t,n,i,r,0),ys(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function gh(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Kl(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Sh(c))}i.sort(xh);for(let r=0;r<i.length;r++)t=yh(i[r],t);return t}function xh(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function yh(s,e){let t=_h(s,e);if(!t)return e;let n=ec(t,s);return xi(n,n.next),xi(t,t.next)}function _h(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(ki(s,t))return t;do{if(ki(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&jl(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);_s(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&vh(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function vh(s,e){return Qe(s.prev,s,e.prev)<0&&Qe(e.next,s,s.next)<0}function Mh(s,e,t,n){let i=s;do i.z===0&&(i.z=ta(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,bh(i)}function bh(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function ta(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Sh(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function jl(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ns(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&jl(s,e,t,n,i,r,o,a)}function Th(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!wh(s,e)&&(_s(s,e)&&_s(e,s)&&Ah(s,e)&&(Qe(s.prev,s,e.prev)||Qe(s,e.prev,e))||ki(s,e)&&Qe(s.prev,s,s.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ki(s,e){return s.x===e.x&&s.y===e.y}function Ql(s,e,t,n){let i=lr(Qe(s,e,t)),r=lr(Qe(s,e,n)),o=lr(Qe(t,n,s)),a=lr(Qe(t,n,e));return!!(i!==r&&o!==a||i===0&&ar(s,t,e)||r===0&&ar(s,n,e)||o===0&&ar(t,s,n)||a===0&&ar(t,e,n))}function ar(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function lr(s){return s>0?1:s<0?-1:0}function wh(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ql(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function _s(s,e){return Qe(s.prev,s,s.next)<0?Qe(s,e,s.next)>=0&&Qe(s,s.prev,e)>=0:Qe(s,e,s.prev)<0||Qe(s,s.next,e)<0}function Ah(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ec(s,e){let t=na(s.i,s.x,s.y),n=na(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function El(s,e,t,n){let i=na(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function vs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function na(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Eh(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var ia=class{static triangulate(e,t,n=2){return hh(e,t,n)}},un=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Cl(e),Rl(n,e);let o=e.length;t.forEach(Cl);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Rl(n,t[l]);let a=ia.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Cl(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Rl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var rn=class s extends Oe{constructor(e=new ft([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:Ch,v,m=!1,T,P,_,M;if(y){v=y.getSpacedPoints(u),m=!0,f=!1;let X=y.isCatmullRomCurve3?y.closed:!1;T=y.computeFrenetFrames(u,X),P=new x,_=new x,M=new x}f||(b=0,d=0,p=0,g=0);let R=a.extractPoints(c),L=R.shape,A=R.holes;if(!un.isClockWise(L)){L=L.reverse();for(let X=0,ie=A.length;X<ie;X++){let Q=A[X];un.isClockWise(Q)&&(A[X]=Q.reverse())}}function O(X){let Q=10000000000000001e-36,ae=X[0];for(let te=1;te<=X.length;te++){let ge=te%X.length,fe=X[ge],we=fe.x-ae.x,_e=fe.y-ae.y,K=we*we+_e*_e,W=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(ae.x),Math.abs(ae.y)),se=Q*W*W;if(K<=se){X.splice(ge,1),te--;continue}ae=fe}}O(L),A.forEach(O);let B=A.length,F=L;for(let X=0;X<B;X++){let ie=A[X];L=L.concat(ie)}function U(X,ie,Q){return ie||Je("ExtrudeGeometry: vec does not exist"),X.clone().addScaledVector(ie,Q)}let H=L.length;function w(X,ie,Q){let ae,te,ge,fe=X.x-ie.x,we=X.y-ie.y,_e=Q.x-X.x,K=Q.y-X.y,W=fe*fe+we*we,se=fe*K-we*_e;if(Math.abs(se)>Number.EPSILON){let ue=Math.sqrt(W),ee=Math.sqrt(_e*_e+K*K),de=ie.x-we/ue,Pe=ie.y+fe/ue,xe=Q.x-K/ee,De=Q.y+_e/ee,Ne=((xe-de)*K-(De-Pe)*_e)/(fe*K-we*_e);ae=de+fe*Ne-X.x,te=Pe+we*Ne-X.y;let Ee=ae*ae+te*te;if(Ee<=2)return new he(ae,te);ge=Math.sqrt(Ee/2)}else{let ue=!1;fe>Number.EPSILON?_e>Number.EPSILON&&(ue=!0):fe<-Number.EPSILON?_e<-Number.EPSILON&&(ue=!0):Math.sign(we)===Math.sign(K)&&(ue=!0),ue?(ae=-we,te=fe,ge=Math.sqrt(W)):(ae=fe,te=we,ge=Math.sqrt(W/2))}return new he(ae/ge,te/ge)}let $=[];for(let X=0,ie=F.length,Q=ie-1,ae=X+1;X<ie;X++,Q++,ae++)Q===ie&&(Q=0),ae===ie&&(ae=0),$[X]=w(F[X],F[Q],F[ae]);let D=[],E,N=$.concat();for(let X=0,ie=B;X<ie;X++){let Q=A[X];E=[];for(let ae=0,te=Q.length,ge=te-1,fe=ae+1;ae<te;ae++,ge++,fe++)ge===te&&(ge=0),fe===te&&(fe=0),E[ae]=w(Q[ae],Q[ge],Q[fe]);D.push(E),N=N.concat(E)}let z;if(b===0)z=un.triangulateShape(F,A);else{let X=[],ie=[];for(let Q=0;Q<b;Q++){let ae=Q/b,te=d*Math.cos(ae*Math.PI/2),ge=p*Math.sin(ae*Math.PI/2)+g;for(let fe=0,we=F.length;fe<we;fe++){let _e=U(F[fe],$[fe],ge);Y(_e.x,_e.y,-te),ae===0&&X.push(_e)}for(let fe=0,we=B;fe<we;fe++){let _e=A[fe];E=D[fe];let K=[];for(let W=0,se=_e.length;W<se;W++){let ue=U(_e[W],E[W],ge);Y(ue.x,ue.y,-te),ae===0&&K.push(ue)}ae===0&&ie.push(K)}}z=un.triangulateShape(X,ie)}let G=z.length,S=p+g;for(let X=0;X<H;X++){let ie=f?U(L[X],N[X],S):L[X];m?(_.copy(T.normals[0]).multiplyScalar(ie.x),P.copy(T.binormals[0]).multiplyScalar(ie.y),M.copy(v[0]).add(_).add(P),Y(M.x,M.y,M.z)):Y(ie.x,ie.y,0)}for(let X=1;X<=u;X++)for(let ie=0;ie<H;ie++){let Q=f?U(L[ie],N[ie],S):L[ie];m?(_.copy(T.normals[X]).multiplyScalar(Q.x),P.copy(T.binormals[X]).multiplyScalar(Q.y),M.copy(v[X]).add(_).add(P),Y(M.x,M.y,M.z)):Y(Q.x,Q.y,h/u*X)}for(let X=b-1;X>=0;X--){let ie=X/b,Q=d*Math.cos(ie*Math.PI/2),ae=p*Math.sin(ie*Math.PI/2)+g;for(let te=0,ge=F.length;te<ge;te++){let fe=U(F[te],$[te],ae);Y(fe.x,fe.y,h+Q)}for(let te=0,ge=A.length;te<ge;te++){let fe=A[te];E=D[te];for(let we=0,_e=fe.length;we<_e;we++){let K=U(fe[we],E[we],ae);m?Y(K.x,K.y+v[u-1].y,v[u-1].x+Q):Y(K.x,K.y,h+Q)}}}V(),q();function V(){let X=i.length/3;if(f){let ie=0,Q=H*ie;for(let ae=0;ae<G;ae++){let te=z[ae];k(te[2]+Q,te[1]+Q,te[0]+Q)}ie=u+b*2,Q=H*ie;for(let ae=0;ae<G;ae++){let te=z[ae];k(te[0]+Q,te[1]+Q,te[2]+Q)}}else{for(let ie=0;ie<G;ie++){let Q=z[ie];k(Q[2],Q[1],Q[0])}for(let ie=0;ie<G;ie++){let Q=z[ie];k(Q[0]+H*u,Q[1]+H*u,Q[2]+H*u)}}n.addGroup(X,i.length/3-X,0)}function q(){let X=i.length/3,ie=0;Z(F,ie),ie+=F.length;for(let Q=0,ae=A.length;Q<ae;Q++){let te=A[Q];Z(te,ie),ie+=te.length}n.addGroup(X,i.length/3-X,1)}function Z(X,ie){let Q=X.length;for(;--Q>=0;){let ae=Q,te=Q-1;te<0&&(te=X.length-1);for(let ge=0,fe=u+b*2;ge<fe;ge++){let we=H*ge,_e=H*(ge+1),K=ie+ae+we,W=ie+te+we,se=ie+te+_e,ue=ie+ae+_e;ne(K,W,se,ue)}}}function Y(X,ie,Q){l.push(X),l.push(ie),l.push(Q)}function k(X,ie,Q){J(X),J(ie),J(Q);let ae=i.length/3,te=C.generateTopUV(n,i,ae-3,ae-2,ae-1);re(te[0]),re(te[1]),re(te[2])}function ne(X,ie,Q,ae){J(X),J(ie),J(ae),J(ie),J(Q),J(ae);let te=i.length/3,ge=C.generateSideWallUV(n,i,te-6,te-3,te-2,te-1);re(ge[0]),re(ge[1]),re(ge[3]),re(ge[1]),re(ge[2]),re(ge[3])}function J(X){i.push(l[X*3+0]),i.push(l[X*3+1]),i.push(l[X*3+2])}function re(X){r.push(X.x),r.push(X.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rh(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ar[i.type]().fromJSON(i)),new s(n,e.options)}},Ch={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new he(r,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],g=e[r*3],b=e[r*3+1],y=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-h),new he(f,1-p),new he(g,1-y)]:[new he(a,1-l),new he(u,1-h),new he(d,1-p),new he(b,1-y)]}};function Rh(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var yi=class s extends Oe{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Fe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new x,f=new he,d=new x,p=new x,g=new x,b=0,y=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:b=e[C+1].x-e[C].x,y=e[C+1].y-e[C].y,d.x=y*1,d.y=-b,d.z=y*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:b=e[C+1].x-e[C].x,y=e[C+1].y-e[C].y,d.x=y*1,d.y=-b,d.z=y*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(p)}for(let C=0;C<=t;C++){let v=n+C*u*i,m=Math.sin(v),T=Math.cos(v);for(let P=0;P<=e.length-1;P++){h.x=e[P].x*m,h.y=e[P].y,h.z=e[P].x*T,o.push(h.x,h.y,h.z),f.x=C/t,f.y=P/(e.length-1),a.push(f.x,f.y);let _=l[3*P+0]*m,M=l[3*P+1],R=l[3*P+0]*T;c.push(_,M,R)}}for(let C=0;C<t;C++)for(let v=0;v<e.length-1;v++){let m=v+C*e.length,T=m,P=m+e.length,_=m+e.length+1,M=m+1;r.push(T,P,M),r.push(_,M,P)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Le=class s extends Oe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],g=[],b=[];for(let y=0;y<u;y++){let C=y*f-o;for(let v=0;v<c;v++){let m=v*h-r;p.push(m,-C,0),g.push(0,0,1),b.push(v/a),b.push(1-y/l)}}for(let y=0;y<l;y++)for(let C=0;C<a;C++){let v=C+c*y,m=C+c*(y+1),T=C+1+c*(y+1),P=C+1+c*y;d.push(v,m,P),d.push(m,T,P)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},An=class s extends Oe{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/i,d=new x,p=new he;for(let g=0;g<=i;g++){for(let b=0;b<=n;b++){let y=r+b/n*o;d.x=h*Math.cos(y),d.y=h*Math.sin(y),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let g=0;g<i;g++){let b=g*(n+1);for(let y=0;y<n;y++){let C=y+b,v=C,m=C+n+1,T=C+n+2,P=C+1;a.push(v,m,P),a.push(m,T,P)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Vt=class s extends Oe{constructor(e=new ft([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(o,2));function c(u){let h=i.length/3,f=u.extractPoints(t),d=f.shape,p=f.holes;un.isClockWise(d)===!1&&(d=d.reverse());for(let b=0,y=p.length;b<y;b++){let C=p[b];un.isClockWise(C)===!0&&(p[b]=C.reverse())}let g=un.triangulateShape(d,p);for(let b=0,y=p.length;b<y;b++){let C=p[b];d=d.concat(C)}for(let b=0,y=d.length;b<y;b++){let C=d[b];i.push(C.x,C.y,0),r.push(0,0,1),o.push(C.x,C.y)}for(let b=0,y=g.length;b<y;b++){let C=g[b],v=C[0]+h,m=C[1]+h,T=C[2]+h;n.push(v,m,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ph(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function Ph(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var qe=class s extends Oe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new x,f=new x,d=[],p=[],g=[],b=[];for(let y=0;y<=n;y++){let C=[],v=y/n,m=o+v*a,T=e*Math.cos(m),P=Math.sqrt(e*e-T*T),_=0;y===0&&o===0?_=.5/t:y===n&&l===Math.PI&&(_=-.5/t);for(let M=0;M<=t;M++){let R=M/t,L=i+R*r;h.x=-P*Math.cos(L),h.y=T,h.z=P*Math.sin(L),p.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),b.push(R+_,1-v),C.push(c++)}u.push(C)}for(let y=0;y<n;y++)for(let C=0;C<t;C++){let v=u[y][C+1],m=u[y][C],T=u[y+1][C],P=u[y+1][C+1];(y!==0||o>0)&&d.push(v,m,P),(y!==n-1||l<Math.PI)&&d.push(m,T,P)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rt=class s extends Oe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],h=[],f=new x,d=new x,p=new x;for(let g=0;g<=n;g++){let b=o+g/n*a;for(let y=0;y<=i;y++){let C=y/i*r;d.x=(e+t*Math.cos(b))*Math.cos(C),d.y=(e+t*Math.cos(b))*Math.sin(C),d.z=t*Math.sin(b),c.push(d.x,d.y,d.z),f.x=e*Math.cos(C),f.y=e*Math.sin(C),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(y/i),h.push(g/n)}}for(let g=1;g<=n;g++)for(let b=1;b<=i;b++){let y=(i+1)*g+b-1,C=(i+1)*(g-1)+b-1,v=(i+1)*(g-1)+b,m=(i+1)*g+b;l.push(y,C,m),l.push(C,v,m)}this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Vi=class s extends Oe{constructor(e=new gs(new x(-1,-1,0),new x(-1,1,0),new x(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new x,l=new x,c=new he,u=new x,h=[],f=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function g(){for(let v=0;v<t;v++)b(v);b(r===!1?t:0),C(),y()}function b(v){u=e.getPointAt(v/t,u);let m=o.normals[v],T=o.binormals[v];for(let P=0;P<=i;P++){let _=P/i*Math.PI*2,M=Math.sin(_),R=-Math.cos(_);l.x=R*m.x+M*T.x,l.y=R*m.y+M*T.y,l.z=R*m.z+M*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function y(){for(let v=1;v<=t;v++)for(let m=1;m<=i;m++){let T=(i+1)*(v-1)+(m-1),P=(i+1)*v+(m-1),_=(i+1)*v+m,M=(i+1)*(v-1)+m;p.push(T,P,M),p.push(P,_,M)}}function C(){for(let v=0;v<=t;v++)for(let m=0;m<=i;m++)c.x=v/t,c.y=m/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Ar[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function tc(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Pl(i))i.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Pl(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Pt(s){let e={};for(let t=0;t<s.length;t++){let n=tc(s[t]);for(let i in n)e[i]=n[i]}return e}function Pl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}var Se=class extends pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ms=class extends Et{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function cr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var Zn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Er=class extends Zn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qo,endingEnd:qo}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yo:r=e,a=2*t-n;break;case Zo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yo:o=e,l=2*n-t;break;case Zo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),g=p*p,b=g*p,y=-f*b+2*f*g-f*p,C=(1+f)*b+(-1.5-2*f)*g+(-.5+f)*p+1,v=(-1-d)*b+(1.5+d)*g+.5*p,m=d*b-d*g;for(let T=0;T!==a;++T)r[T]=y*o[u+T]+C*o[c+T]+v*o[l+T]+m*o[h+T];return r}},Cr=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Rr=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Pr=class extends Zn{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(i-t),g=1-p;for(let b=0;b!==a;++b)r[b]=o[c+b]*g+o[l+b]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let g=o[c+p],b=o[l+p],y=d*f+p*2,C=h[y],v=h[y+1],m=e*f+p*2,T=u[m],P=u[m+1],_=(n-t)/(i-t),M,R,L,A,I;for(let O=0;O<8;O++){M=_*_,R=M*_,L=1-_,A=L*L,I=A*L;let F=I*t+3*A*_*C+3*L*M*T+R*i-n;if(Math.abs(F)<1e-10)break;let U=3*A*(C-t)+6*L*_*(T-C)+3*M*(i-T);if(Math.abs(U)<1e-10)break;_=_-F/U,_=Math.max(0,Math.min(1,_))}r[p]=I*g+3*A*_*v+3*L*M*P+R*b}return r}},Gt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Er(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ls:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case fr:t=this.InterpolantFactoryMethodSmooth;break;case Xo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return fr;case this.InterpolantFactoryMethodBezier:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&bu(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let g=t[h+p];if(g!==t[f+p]||g!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Gt.prototype.ValueTypeName="";Gt.prototype.TimeBufferType=Float32Array;Gt.prototype.ValueBufferType=Float32Array;Gt.prototype.DefaultInterpolation=mr;var $n=class extends Gt{constructor(e,t,n){super(e,t,n)}};$n.prototype.ValueTypeName="bool";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=ls;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends Gt{constructor(e,t,n,i){super(e,t,n,i)}};Ir.prototype.ValueTypeName="color";var Lr=class extends Gt{constructor(e,t,n,i){super(e,t,n,i)}};Lr.prototype.ValueTypeName="number";var Dr=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)be.slerpFlat(r,0,o,c-a,o,c,l);return r}},bs=class extends Gt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Dr(this.times,this.values,this.getValueSize(),e)}};bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Jn=class extends Gt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=ls;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Gt{constructor(e,t,n,i){super(e,t,n,i)}};Ur.prototype.ValueTypeName="vector";var Nr=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nc=new Nr,Fr=class{constructor(e){this.manager=e!==void 0?e:nc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Br=class extends Xe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Io=new We,Il=new x,Ll=new x,sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=va,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new di(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ll),t.updateMatrixWorld(),Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===cs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ur=new x,hr=new be,cn=new x,Or=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ur,hr,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,hr,cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ur,hr,cn),cn.x===1&&cn.y===1&&cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,hr,cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vn=new x,Dl=new he,Ul=new he,zr=class extends Or{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,Dl,Ul),t.subVectors(Ul,Dl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ra=class extends sa{constructor(){super(new zr(90,1,.5,500)),this.isPointLightShadow=!0}},Ss=class extends Br{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ra}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var Aa="\\[\\]\\.:\\/",Ih=new RegExp("["+Aa+"]","g"),Ea="[^"+Aa+"]",Lh="[^"+Aa.replace("\\.","")+"]",Dh=/((?:WC+[\/:])*)/.source.replace("WC",Ea),Uh=/(WCOD+)?/.source.replace("WCOD",Lh),Nh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ea),Fh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ea),Bh=new RegExp("^"+Dh+Uh+Nh+Fh+"$"),Oh=["material","materials","bones","map"],oa=class{constructor(e,t,n){let i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$e=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ih,"")}static parseTrackName(e){let t=Bh.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Oh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=oa;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pm=new Float32Array(1);var Nl=new We,En=class{constructor(e,t,n=0,i=1/0){this.ray=new tt(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nl),this}intersectObject(e,t=!0,n=[]){return aa(e,this,n,t),n.sort(Fl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)aa(e[i],this,n,t);return n.sort(Fl),n}};function Fl(s,e){return s.distance-e.distance}function aa(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)aa(r[o],e,t,!0)}}var La=class La{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};La.prototype.isMatrix2=!0;var la=La;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var Wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
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
#endif`,qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jh=`#ifdef USE_AOMAP
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
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
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
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sf=`#ifdef USE_IRIDESCENCE
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
#endif`,rf=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pf=`#define PI 3.141592653589793
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
} // validated`,mf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gf=`vec3 transformedNormal = objectNormal;
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
#endif`,xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,If=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bf=`#ifdef USE_ENVMAP
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
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Hf=`uniform sampler2D dfgLUT;
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
}`,Wf=`
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,td=`#if defined( USE_POINTS_UV )
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
#endif`,nd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ad=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pd=`#ifdef USE_NORMALMAP
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
#endif`,md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pd=`float getShadowMask() {
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
}`,Id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Dd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Od=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zd=`#ifdef USE_TRANSMISSION
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
#endif`,kd=`#ifdef USE_TRANSMISSION
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`#include <common>
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
}`,jd=`#if DEPTH_PACKING == 3200
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
}`,Qd=`#define DISTANCE
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
}`,ep=`#define DISTANCE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,np=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`uniform float scale;
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
}`,sp=`uniform vec3 diffuse;
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
}`,rp=`#include <common>
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
}`,op=`uniform vec3 diffuse;
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
}`,ap=`#define LAMBERT
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
}`,lp=`#define LAMBERT
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
}`,cp=`#define MATCAP
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
}`,up=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,fp=`#define NORMAL
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
}`,dp=`#define PHONG
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
}`,pp=`#define PHONG
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
}`,mp=`#define STANDARD
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
}`,gp=`#define STANDARD
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
}`,xp=`#define TOON
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
}`,yp=`#define TOON
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
}`,_p=`uniform float size;
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
}`,vp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,bp=`uniform vec3 color;
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
}`,Sp=`uniform float rotation;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Wh,alphahash_pars_fragment:Xh,alphamap_fragment:qh,alphamap_pars_fragment:Yh,alphatest_fragment:Zh,alphatest_pars_fragment:$h,aomap_fragment:Jh,aomap_pars_fragment:Kh,batching_pars_vertex:jh,batching_vertex:Qh,begin_vertex:ef,beginnormal_vertex:tf,bsdfs:nf,iridescence_fragment:sf,bumpmap_pars_fragment:rf,clipping_planes_fragment:of,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:lf,clipping_planes_vertex:cf,color_fragment:uf,color_pars_fragment:hf,color_pars_vertex:ff,color_vertex:df,common:pf,cube_uv_reflection_fragment:mf,defaultnormal_vertex:gf,displacementmap_pars_vertex:xf,displacementmap_vertex:yf,emissivemap_fragment:_f,emissivemap_pars_fragment:vf,colorspace_fragment:Mf,colorspace_pars_fragment:bf,envmap_fragment:Sf,envmap_common_pars_fragment:Tf,envmap_pars_fragment:wf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Ef,fog_vertex:Cf,fog_pars_vertex:Rf,fog_fragment:Pf,fog_pars_fragment:If,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Nf,lights_pars_begin:Ff,lights_toon_fragment:Of,lights_toon_pars_fragment:zf,lights_phong_fragment:kf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,lightprobes_pars_fragment:Yf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Jf,logdepthbuf_vertex:Kf,map_fragment:jf,map_pars_fragment:Qf,map_particle_fragment:ed,map_particle_pars_fragment:td,metalnessmap_fragment:nd,metalnessmap_pars_fragment:id,morphinstance_vertex:sd,morphcolor_vertex:rd,morphnormal_vertex:od,morphtarget_pars_vertex:ad,morphtarget_vertex:ld,normal_fragment_begin:cd,normal_fragment_maps:ud,normal_pars_fragment:hd,normal_pars_vertex:fd,normal_vertex:dd,normalmap_pars_fragment:pd,clearcoat_normal_fragment_begin:md,clearcoat_normal_fragment_maps:gd,clearcoat_pars_fragment:xd,iridescence_pars_fragment:yd,opaque_fragment:_d,packing:vd,premultiplied_alpha_fragment:Md,project_vertex:bd,dithering_fragment:Sd,dithering_pars_fragment:Td,roughnessmap_fragment:wd,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Ed,shadowmap_pars_vertex:Cd,shadowmap_vertex:Rd,shadowmask_pars_fragment:Pd,skinbase_vertex:Id,skinning_pars_vertex:Ld,skinning_vertex:Dd,skinnormal_vertex:Ud,specularmap_fragment:Nd,specularmap_pars_fragment:Fd,tonemapping_fragment:Bd,tonemapping_pars_fragment:Od,transmission_fragment:zd,transmission_pars_fragment:kd,uv_pars_fragment:Vd,uv_pars_vertex:Gd,uv_vertex:Hd,worldpos_vertex:Wd,background_vert:Xd,background_frag:qd,backgroundCube_vert:Yd,backgroundCube_frag:Zd,cube_vert:$d,cube_frag:Jd,depth_vert:Kd,depth_frag:jd,distance_vert:Qd,distance_frag:ep,equirect_vert:tp,equirect_frag:np,linedashed_vert:ip,linedashed_frag:sp,meshbasic_vert:rp,meshbasic_frag:op,meshlambert_vert:ap,meshlambert_frag:lp,meshmatcap_vert:cp,meshmatcap_frag:up,meshnormal_vert:hp,meshnormal_frag:fp,meshphong_vert:dp,meshphong_frag:pp,meshphysical_vert:mp,meshphysical_frag:gp,meshtoon_vert:xp,meshtoon_frag:yp,points_vert:_p,points_frag:vp,shadow_vert:Mp,shadow_frag:bp,sprite_vert:Sp,sprite_frag:Tp},ye={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ic={basic:{uniforms:Pt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Pt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Pt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Pt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Pt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Be(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Pt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Pt([ye.points,ye.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Pt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Pt([ye.common,ye.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Pt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Pt([ye.sprite,ye.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Pt([ye.common,ye.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Pt([ye.lights,ye.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ic.physical={uniforms:Pt([ic.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var wp=new Ue;wp.set(-1,0,0,0,1,0,0,0,1);var k_={[ha]:"LINEAR_TONE_MAPPING",[fa]:"REINHARD_TONE_MAPPING",[da]:"CINEON_TONE_MAPPING",[pa]:"ACES_FILMIC_TONE_MAPPING",[ga]:"AGX_TONE_MAPPING",[xa]:"NEUTRAL_TONE_MAPPING",[ma]:"CUSTOM_TONE_MAPPING"};var V_=new Float32Array(16),G_=new Float32Array(9),H_=new Float32Array(4);var W_={[ha]:"Linear",[fa]:"Reinhard",[da]:"Cineon",[pa]:"ACESFilmic",[ga]:"AgX",[xa]:"Neutral",[ma]:"Custom"};var X_={[Bl]:"SHADOWMAP_TYPE_PCF",[Ol]:"SHADOWMAP_TYPE_VSM"};var q_={[Gl]:"ENVMAP_TYPE_CUBE",[_a]:"ENVMAP_TYPE_CUBE",[Hl]:"ENVMAP_TYPE_CUBE_UV"};var Y_={[_a]:"ENVMAP_MODE_REFRACTION"};var Z_={[ua]:"ENVMAP_BLENDING_MULTIPLY",[kl]:"ENVMAP_BLENDING_MIX",[Vl]:"ENVMAP_BLENDING_ADD"};var Ap=new Ue;Ap.set(-1,0,0,0,1,0,0,0,1);var $_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var j={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function vi(s,e,t,n,i,r=16){r=Math.min(r,n/2,i/2),s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.quadraticCurveTo(e+n,t,e+n,t+r),s.lineTo(e+n,t+i-r),s.quadraticCurveTo(e+n,t+i,e+n-r,t+i),s.lineTo(e+r,t+i),s.quadraticCurveTo(e,t+i,e,t+i-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath()}function Ke(s,e,t,n,i,{top:r="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=s.createLinearGradient(e,t,e,t+i);c.addColorStop(0,r),c.addColorStop(1,o),s.fillStyle=c,vi(s,e,t,n,i,l),s.fill(),s.strokeStyle=a,s.lineWidth=1.5,s.stroke()}function St(s,e,t){let n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),s.fillStyle=n,s.fillRect(0,0,e,t),s.save(),s.globalAlpha=.13,s.strokeStyle="#79b3d1",s.lineWidth=1;for(let i=0;i<8;i++)s.beginPath(),s.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),s.stroke();s.restore(),s.fillStyle=j.gold,s.fillRect(32,0,96,4)}function oe(s,e,t,n,i=28,r=j.ink,o="600",a){s.font=`${o} ${i}px Arial`,s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Number.isFinite(a)?s.fillText(e,t,n,a):s.fillText(e,t,n)}function Cn(s,e,t,n,i,r=j.gold){if(s.save(),s.translate(t,n),s.scale(i/48,i/48),s.lineWidth=2.8,s.lineCap="round",s.lineJoin="round",s.strokeStyle=r,s.fillStyle=r,e==="ball")s.beginPath(),s.arc(0,0,18,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-18,0),s.lineTo(18,0),s.stroke(),s.fillStyle="#183a51",s.beginPath(),s.arc(0,0,6,0,Math.PI*2),s.fill(),s.stroke();else if(e==="puff"){s.beginPath(),s.arc(0,3,16,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-14,-5),s.lineTo(-15,-19),s.lineTo(-5,-11),s.moveTo(14,-5),s.lineTo(15,-19),s.lineTo(5,-11),s.stroke(),s.beginPath(),s.arc(0,-8,5,0,Math.PI*1.5),s.stroke();for(let o of[-6,6])s.beginPath(),s.arc(o,3,2,0,Math.PI*2),s.fill();s.beginPath(),s.arc(0,7,5,.2,Math.PI-.2),s.stroke()}else if(e==="book")vi(s,-20,-15,40,32,4),s.stroke(),s.beginPath(),s.moveTo(0,-15),s.lineTo(0,17),s.moveTo(-14,-6),s.lineTo(-5,-6),s.moveTo(5,-6),s.lineTo(14,-6),s.stroke();else if(e==="trophy")s.beginPath(),s.moveTo(-13,-17),s.lineTo(13,-17),s.lineTo(9,-3),s.quadraticCurveTo(0,8,-9,-3),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(0,5),s.lineTo(0,16),s.moveTo(-10,18),s.lineTo(10,18),s.moveTo(-13,-13),s.quadraticCurveTo(-25,-16,-19,-5),s.lineTo(-9,0),s.moveTo(13,-13),s.quadraticCurveTo(25,-16,19,-5),s.lineTo(9,0),s.stroke();else if(e==="golf")s.beginPath(),s.ellipse(0,13,18,6,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-3,13),s.lineTo(-3,-20),s.lineTo(15,-14),s.lineTo(-3,-7),s.stroke(),s.beginPath(),s.arc(10,8,3,0,Math.PI*2),s.fill();else if(e==="car"){vi(s,-19,-15,38,30,5),s.stroke(),vi(s,-11,-9,22,14,3),s.stroke();for(let o of[-22,18])for(let a of[-13,7])vi(s,o,a,4,7,1),s.fill();s.beginPath(),s.moveTo(-12,10),s.lineTo(12,10),s.moveTo(0,-15),s.lineTo(0,-23),s.stroke()}else if(e==="target"){for(let o of[19,12,4])s.beginPath(),s.arc(0,0,o,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(0,0),s.lineTo(20,-20),s.moveTo(12,-20),s.lineTo(20,-20),s.lineTo(20,-12),s.stroke()}else s.beginPath(),s.moveTo(-6,-12),s.lineTo(12,0),s.lineTo(-6,12),s.closePath(),s.fill();s.restore()}function sc(s,e,t,n,i,r){let o=e==="RC car racing"?{title:"RC car racing",sub:"Three laps \xB7 steer, race and beat your best",icon:"car",accent:j.blue}:e==="Arcade wall of fame"?{title:"Arcade wall of fame",sub:"Personal bests \xB7 medals \xB7 trophy shelf",icon:"trophy",accent:j.gold}:e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:j.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:j.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:j.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:j.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:j.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:j.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:j.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:j.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:j.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:j.pink}:null;if(o)Ke(s,t,n,i,72,{top:r?"#365c70":"#21465e",bottom:r?"#25465a":"#19364b",stroke:r?o.accent:"#3b5c71"}),s.fillStyle=o.accent,vi(s,t+1,n+15,4,42,2),s.fill(),Cn(s,o.icon,t+41,n+36,42,o.accent),oe(s,o.title,t+82,n+31,i<600?26:29,j.ink,"700"),oe(s,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,j.muted,"400",i-125),oe(s,"\u203A",t+i-35,n+47,42,r?o.accent:j.muted,"400");else{let a=e==="Resume";Ke(s,t,n,i,72,{top:a?r?"#fff0c2":"#f8df9e":r?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":r?j.gold:"#496379"}),a&&Cn(s,"play",t+33,n+36,25,"#173247"),oe(s,e,t+(a?60:24),n+46,28,a?"#122c40":j.ink,"700")}}function rc(s,e){St(s,1024,768),oe(s,"TF JONES  /  PLAY IN THE YARD",44,37,19,j.blue,"700"),oe(s,"Mollie\u2019s adventures",44,93,48,j.ink,"700"),oe(s,"Point with your right hand, then pull the trigger.",44,132,24,j.muted,"400"),Ke(s,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),oe(s,e,60,172,23,j.mint,"500",900)}function Da(s,e,t,n,i){Ke(s,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),oe(s,e,n+9,i,21,j.gold,"700"),oe(s,t,n+45,i,21,j.muted,"400")}function oc(s,e=!1){Da(s,"Y","Games menu",44,663),Da(s,"B","Back",325,663),Da(s,"A",e?"Rescue / replay":"Replay round",548,663),s.strokeStyle="#355168",s.beginPath(),s.moveTo(44,692),s.lineTo(980,692),s.stroke(),oe(s,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,j.blue,"700"),oe(s,e?"Race paused \xB7 grip brakes":"Right grip to teleport",674,731,21,j.muted,"400")}function ac(s,e){s.clearRect(0,0,768,192),Ke(s,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),s.fillStyle=j.gold,vi(s,23,27,5,138,2),s.fill(),s.font="600 32px Arial";let t=[],n="";for(let r of e.split(/\s+/)){let o=n?n+" "+r:r;s.measureText(o).width>660&&n?(t.push(n),n=r):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((r,o)=>oe(s,r,47,i+o*42,32,j.ink,"600"))}function lc(s,{total:e,throws:t,best:n,last:i}){St(s,1024,640),Cn(s,"target",72,66,55,j.mint),oe(s,"STAFF-ROOM DARTS",119,79,40,j.ink,"700"),oe(s,"NINE DART CHALLENGE",39,136,24,j.muted,"700"),oe(s,String(e),36,281,142,j.gold,"700"),oe(s,"POINTS",280,277,32,j.muted,"700"),Ke(s,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),oe(s,"PERSONAL BEST",721,203,24,j.muted,"600"),oe(s,String(n),721,264,52,j.mint,"700");for(let r=0;r<9;r++){let o=r<t;Ke(s,40+r*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),oe(s,String(r+1),72+r*104,358,28,o?"#132e41":j.muted,"700")}Ke(s,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),oe(s,i,61,458,36,j.ink,"600",890),oe(s,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,j.mint,"600"),oe(s,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,j.muted,"400")}var cc=new Map;function Ut(s,e,t="target",n=j.gold,i=1.7){let r=[s,e,t,n].join("|"),o=cc.get(r);if(!o){let u=document.createElement("canvas");u.width=1024,u.height=256;let h=u.getContext("2d");h.fillStyle="#0a1b2c",h.fillRect(0,0,1024,256),Ke(h,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),h.fillStyle=n,h.fillRect(32,36,5,182),Cn(h,t,110,128,88,n),oe(h,s,192,123,58,j.ink,"700",790),oe(h,e,194,186,26,n,"600",775),o=new Ie(u),o.colorSpace=Ae,cc.set(r,o)}let a=new pe;a.name=s+" \xB7 activity sign";let l=new me(new Le(i,i/4),new ve({map:o}));a.add(l);let c=new me(new Me(i+.055,i/4+.055,.04),new Se({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var Ts;function Gi(){if(!Ts){let s=document.createElement("canvas");s.width=512,s.height=1024;let e=s.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let r=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(r,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(r,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=r+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(r,Math.floor((l+n())*341),o,1)}Ts=new Ie(s),Ts.colorSpace=Ae,Ts.anisotropy=4}return new Se({map:Ts,color:16777215,roughness:.28,metalness:.04})}var Ua;function on(s=.5,e=.32){if(!Ua){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,64);r.addColorStop(0,"rgba(4,12,20,.48)"),r.addColorStop(.55,"rgba(4,12,20,.2)"),r.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),Ua=new Ie(n)}let t=new me(new Le(s,e),new ve({map:Ua,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function Kn(s=1.4){let e=new pe;e.name="Warm arcade light fitting";let t=new me(new Me(s,.09,.17),new Se({color:2504518,roughness:.6}));e.add(t);let n=new me(new Le(s-.1,.115),new ve({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function uc(s){let e=new Ss(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,s.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new x(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new x(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var yt={left:-1.03,right:1.03,front:.08,back:6.95},ws=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function jn(s,e,t){let n=.033,i=0,r=0;for(let o of t.ramps){let a=s-o.x,l=e-o.z,c=o.w/2,u=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=u)continue;let h=Math.min(.16,c*.3),f=Math.min(1,(c-Math.abs(a))/h),d=1-Math.abs(l)/u,p=o.h*f*d;.033+p>n&&(n=.033+p,i=f<1?-Math.sign(a)*o.h*d/h:0,r=-Math.sign(l||1e-4)*o.h*f/u)}return{height:n,gx:i,gz:r}}function Ep(s,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,s.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,s.z)),i=s.x-t,r=s.z-n,o=Math.hypot(i,r);if(o>=.038)return;if(o<1e-9){let l=[[s.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-s.x,1,0],[s.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-s.z,0,1]].sort((c,u)=>c[0]-u[0]);[,i,r]=l[0],s.x+=i*(l[0][0]+.038+1e-4),s.z+=r*(l[0][0]+.038+1e-4)}else i/=o,r/=o,s.x+=i*(.038-o+1e-4),s.z+=r*(.038-o+1e-4);let a=s.vx*i+s.vz*r;a<0&&(s.vx-=1.68*a*i,s.vz-=1.68*a*r)}function Cp(s,e,t,n,i,r){let o=i-t,a=r-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((s-t)*o+(e-n)*a)/l)):0;return Math.hypot(s-t-o*c,e-n-a*c)}function fc(s,e,t){if(s.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),r=n/i;for(let o=0;o<i;o++){let a=s.x,l=s.z,c=jn(s.x,s.z,e);s.vx-=7*c.gx*r,s.vz-=7*c.gz*r;let u=Math.hypot(s.vx,s.vz),h=Math.max(0,u-.4*r);u&&(s.vx*=h/u,s.vz*=h/u),s.x+=s.vx*r,s.z+=s.vz*r;for(let[f,d,p,g]of[["x","vx",yt.left+.038,yt.right-.038],["z","vz",yt.front+.038,yt.back-.038]])s[f]<p&&(s[f]=p,s[d]<0&&(s[d]*=-.72)),s[f]>g&&(s[f]=g,s[d]>0&&(s[d]*=-.72));for(let f of[...e.crates,...e.walls||[]])Ep(s,f);if(s.distance=(s.distance||0)+Math.hypot(s.x-a,s.z-l),s.y=jn(s.x,s.z,e).height+.038,Math.hypot(s.vx,s.vz)<=1.15&&Cp(e.cup.x,e.cup.z,a,l,s.x,s.z)<.115-.038*.6){s.sunk=!0,s.x=e.cup.x,s.z=e.cup.z,s.vx=s.vz=0;break}Math.hypot(s.vx,s.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(s.vx=s.vz=0)}}var Vr=s=>{let e=Math.hypot(s.x,s.y,s.z);return e>1e-5?{x:s.x/e,y:s.y/e,z:s.z/e}:null},Na=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),Gr=(s,e)=>s.x*e.x+s.y*e.y+s.z*e.z,hc=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x});function dc(s,e,t,n,i=null){if(n<=0||n>.1)return null;let r=(e.x-s.x)/n,o=(e.y-s.y)/n,a=(e.z-s.z)/n;if(Math.hypot(r,o,a)>8||Gr(s.forward,e.forward)<.4)return null;let l=i||{x:r,y:o,z:a};if(Math.hypot(l.x,l.y,l.z)>8)return null;let c=Math.hypot(e.x-s.x,e.y-s.y,e.z-s.z),u=Math.hypot(e.forward.x-s.forward.x,e.forward.y-s.forward.y,e.forward.z-s.forward.z),h=Math.max(1,Math.ceil((c+u*.12)/.008));for(let f=0;f<=h;f++){let d=f/h,p=Na(s,e,d),g=Vr(Na(s.forward,e.forward,d)),b=Vr(Na(s.side,e.side,d));if(!g||!b)continue;let y=Vr(hc(b,g)),C=y&&Vr(hc(g,y));if(!C)continue;let v={x:t.x-p.x,y:t.y-p.y,z:t.z-p.z},m=Gr(v,C),T=Gr(v,y),P=Gr(v,g);if(Math.hypot(Math.max(0,Math.abs(m)-.104),Math.max(0,Math.abs(T)-.027),Math.max(0,Math.abs(P)-.058))>.038+.01)continue;let M=P>=0?1:-1,R={x:g.x*M,z:g.z*M},L=Math.hypot(R.x,R.z);if(L<.65)continue;R.x/=L,R.z/=L;let A=l.x*R.x+l.z*R.z;if(A<.07)continue;let I=Math.min(3.6,A*.92);return{vx:R.x*I,vz:R.z*I}}return null}var Rp=new be().setFromAxisAngle(new x(1,0,0),-Math.PI/2);function pc(s){let e=s.rightGripController,t=e&&e!==s.controller?e:s.controller;if(!t||t.visible===!1)return null;let n=t.getWorldPosition(new x),i=t.getWorldQuaternion(new be);return e&&e!==s.controller&&i.multiply(Rp),{position:n,quaternion:i,down:new x(0,-1,0).applyQuaternion(i)}}function mc(s){let e=new pe;e.name="Controller putter",s.add(e);let t=new Se({color:12964307,metalness:.72,roughness:.23}),n=new Se({color:1518388,roughness:.9}),i=(b,y,C=e)=>{let v=new me(b,y);return C.add(v),v},r=i(new ze(.008,.009,1,10),t),o=i(new ze(.017,.02,.17,14),n);o.position.y=-.025;for(let b=0;b<5;b++){let y=i(new Rt(.018,.0011,4,12),new Se({color:5005926,roughness:.8}),o);y.rotation.x=Math.PI/2,y.position.y=-.065+b*.03}let a=new pe;a.name="Mallet putter head",e.add(a);let l=new ft;l.moveTo(-.083,-.05),l.lineTo(.083,-.05),l.quadraticCurveTo(.099,-.05,.099,-.03),l.lineTo(.099,.035),l.quadraticCurveTo(.099,.053,.077,.053),l.lineTo(-.077,.053),l.quadraticCurveTo(-.099,.053,-.099,.035),l.lineTo(-.099,-.03),l.quadraticCurveTo(-.099,-.05,-.083,-.05);let c=i(new rn(l,{depth:.041,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:6}),t,a);c.rotation.x=Math.PI/2,c.position.y=.0205;let u=i(new Me(.18,.032,.004),new Se({color:3432035,roughness:.65}),a);u.position.z=-.055,i(new Me(.085,.003,.073),n,a).position.set(0,.026,.006);for(let b of[-.021,.021])i(new Me(.005,.002,.068),new ve({color:16248017}),a).position.set(b,.028,.004);i(new ze(.012,.014,.046,10),t,a).position.set(-.055,.026,.014);let d=.86;e.visible=!1;function p(b){d=Ge.clamp(b,.3,1.6),a.position.set(0,-d,0);let y=new x(-.055,-d+.044,.014);r.position.copy(y).multiplyScalar(.5),r.scale.y=y.length(),r.quaternion.setFromUnitVectors(new x(0,1,0),y.clone().normalize())}p(d);function g(b){e.position.copy(b.position),e.quaternion.copy(b.quaternion),e.updateMatrixWorld(!0);let y=a.getWorldPosition(new x),C=a.getWorldQuaternion(new be);return{x:y.x,y:y.y,z:y.z,forward:new x(0,0,-1).applyQuaternion(C),side:new x(1,0,0).applyQuaternion(C),up:new x(0,1,0).applyQuaternion(C)}}return{root:e,head:a,face:u,size:p,update:g,get length(){return d}}}var Rn;function Pp(){if(!Rn){let s=document.createElement("canvas");s.width=256,s.height=512;let e=s.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,r,1,2)}Rn=new Ie(s),Rn.colorSpace=Ae,Rn.wrapS=Rn.wrapT=qt,Rn.repeat.set(1/(yt.right-yt.left),1/(yt.back-yt.front)),Rn.offset.set(.5,1.02),Rn.anisotropy=4}return new Se({map:Rn,roughness:.95})}function gc(s,e,t,n){let i=new pe;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let r=new pe;r.name="Six-hole warehouse course",i.add(r);let o=W=>new Se({color:W,roughness:.65}),a=(W,se,ue,ee,de,Pe=r)=>{let xe=new me(W,se);return xe.position.set(ue,ee,de),Pe.add(xe),xe},l=a(new qe(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=on(.16,.16);i.add(c);let u=mc(i),h=u.root,f=u.head,d=new ve({color:16766588,transparent:!0,opacity:.78,depthWrite:!1,side:nt}),p=a(new An(.13,.142,40),d,0,0,0,i);p.name="Putter contact guide",p.rotation.x=-Math.PI/2,p.visible=!1;let g=new Ct(new Oe().setFromPoints([new x,new x]),new Et({color:8645568,transparent:!0,opacity:.7,depthWrite:!1}));g.name="Putter face direction",g.visible=!1,i.add(g);let b=document.createElement("canvas");b.width=1024,b.height=640;let y=b.getContext("2d"),C=new Ie(b);C.colorSpace=Ae;let v=a(new Le(2.2,1.375),new ve({map:C}),0,0,0,i);v.name="Mini-golf scorecard";let m=null,T=!1,P=0,_=0,M=[],R=null,L=!1,A=!1,I=null,O=!1,B=!1,F=!1,U=0,H="Hold trigger and brush the putter through the ball.",w=null,$=!0,D=[],E=0,N=new be,z=()=>M.reduce((W,se)=>W+se,0),G=ws.reduce((W,se)=>W+se.par,0),S=()=>ws[P];try{let W=localStorage.getItem("tfj-mini-golf-best-v1"),se=Number(W);W!==null&&Number.isFinite(se)&&se>=6&&(R=se)}catch{}function V(){St(y,1024,640),oe(y,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,j.mint,"700"),oe(y,F?"COURSE COMPLETE":`${P+1} / 6  \xB7  ${S().name.toUpperCase()}`,32,117,42,j.ink,"700",954),oe(y,F?`${z()} strokes  \xB7  Par ${G}`:`${_} strokes  \xB7  Par ${S().par}`,32,190,43,j.gold,"700");for(let W=0;W<6;W++){let se=32+W*161,ue=W===P;Ke(y,se,227,151,177,{top:ue?"#26594a":"#183d43",bottom:"#0d2934",stroke:ue?j.gold:"#527779"}),oe(y,`HOLE ${W+1}`,se+13,260,24,ue?j.gold:j.muted),oe(y,M[W]===void 0?"\u2014":String(M[W]),se+18,334,58,j.ink,"700"),oe(y,`PAR ${ws[W].par}`,se+13,382,22,j.muted)}oe(y,`TOTAL ${z()+(B?0:_)}  \xB7  BEST ${R??"\u2014"}`,32,459,32,j.mint,"700"),oe(y,H,32,513,26,j.ink,"600",954),oe(y,F?"A  PLAY AGAIN":B?"A  NEXT HOLE":"A  MOVE & FIT CLUB",32,578,27,j.gold,"700"),oe(y,"Y  PAUSE / MENU",684,578,26,j.muted),C.needsUpdate=!0}function q(){for(let W of[3,2,1.5,4,5,6])for(let se of[-30,-29,-28,-27]){let ue=!0;for(let ee=-1.1;ee<=1.1;ee+=.275)for(let de=0;de<=7.8;de+=.25)(s.blocked(W+ee,se+de,0)||Math.abs(s.groundAt(W+ee,se+de,.1))>.1)&&(ue=!1);if(ue)return new x(W,0,se)}return null}function Z(){let W=Gi();return W.roughness=.78,W}function Y(W){let se=a(new Me(W.w,.25,W.d),Z(),W.x,.155,W.z);se.name="Pallet obstacle";for(let ue=0;ue<4;ue++)a(new Me(W.w/4-.018,.026,W.d+.01),Z(),W.x+(ue-1.5)*W.w/4,.293,W.z);for(let ue of[-1,1])a(new Me(.025,.18,W.d+.018),o("#8d724d"),W.x+ue*(W.w/2-.018),.165,W.z)}function k(W){let ee=[],de=[],Pe=[];for(let Ee=0;Ee<=20;Ee++)for(let ce=0;ce<=12;ce++){let Ye=W.x-W.w/2+W.w*ce/12,Ze=W.z-W.d/2+W.d*Ee/20;ee.push(Ye,jn(Ye,Ze,S()).height+.002,Ze),de.push(Ye,-Ze)}for(let Ee=0;Ee<20;Ee++)for(let ce=0;ce<12;ce++){let Ye=Ee*13+ce,Ze=Ye+1,mt=Ye+12+1,rt=mt+1;Pe.push(Ye,mt,Ze,Ze,mt,rt)}let xe=new Oe;xe.setAttribute("position",new Re(ee,3)),xe.setAttribute("uv",new Re(de,2)),xe.setIndex(Pe),xe.computeVertexNormals();let De=Z();De.side=nt;let Ne=new me(xe,De);Ne.name="Loading ramp",r.add(Ne)}function ne(){for(let ce of[...r.children])ce.traverse(Ye=>{Ye.geometry?.dispose(),Ye.material?.dispose()}),r.remove(ce);r.position.copy(m);let W=S(),se=new ft;se.moveTo(yt.left,-yt.front),se.lineTo(yt.right,-yt.front),se.lineTo(yt.right,-yt.back),se.lineTo(yt.left,-yt.back),se.closePath();let ue=new gi;ue.absarc(W.cup.x,-W.cup.z,.115,0,Math.PI*2,!1),se.holes.push(ue),a(new Me(2.2,.027,7),o("#173848"),0,.016,3.51);let ee=a(new Vt(se,40),Pp(),0,.033,0);ee.rotation.x=-Math.PI/2,ee.name="Putting green";for(let ce of[-1.065,1.065])a(new Me(.07,.14,7),o("#203c4b"),ce,.099,3.51),a(new Me(.045,.006,7),new Se({color:15320952,emissive:11770199,emissiveIntensity:.25}),ce,.172,3.51);for(let ce of[.045,6.985])a(new Me(2.2,.14,.07),o("#203c4b"),0,.099,ce);let de=a(new mi(.115,40),new ve({color:398620}),W.cup.x,.034,W.cup.z);de.rotation.x=-Math.PI/2;let Pe=a(new An(.115,.115+.015,40),new ve({color:16768133,side:nt}),W.cup.x,.035,W.cup.z);Pe.rotation.x=-Math.PI/2,a(new ze(.009,.009,.68,8),o("#e2e7d7"),W.cup.x,.37,W.cup.z);let xe=new Oe;xe.setAttribute("position",new Re([0,0,0,.23,-.035,0,0,-.14,0],3)),xe.computeVertexNormals();let De=a(xe,new ve({color:16176260,side:nt}),W.cup.x,.7,W.cup.z);De.name="Hole flag";let Ne=a(new An(.105,.123,32),new ve({color:16049069,side:nt}),W.tee.x,.035,W.tee.z);if(Ne.rotation.x=-Math.PI/2,W.crates.forEach(Y),W.ramps.forEach(k),W.pipe){let ce=new ft;for(let Ze=0;Ze<=32;Ze++){let mt=Math.PI-Ze*Math.PI/32,rt=Math.cos(mt)*.43,qi=Math.sin(mt)*.43;Ze?ce.lineTo(rt,qi):ce.moveTo(rt,qi)}for(let Ze=0;Ze<=32;Ze++){let mt=Ze*Math.PI/32;ce.lineTo(Math.cos(mt)*.34,Math.sin(mt)*.34)}ce.closePath();let Ye=a(new rn(ce,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);Ye.name="Warehouse pipe tunnel"}v.position.copy(m).add(new x(0,2.42,.3)),a(new Me(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let ce of[-1.09,1.09])a(new Me(.035,3.55,.035),o("#254252"),ce,1.78,.26);let Ee=Ut("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",j.mint,2.05);Ee.position.set(0,3.5,.3),r.add(Ee)}function J(){return w&&!w.sunk&&Math.hypot(w.vx,w.vz)>.04}function re(W,se){return!s.blocked(m.x+W,m.z+se,0)&&Math.abs(s.groundAt(m.x+W,m.z+se,.1))<.1&&![...S().crates,...S().walls||[]].some(ue=>Math.abs(W-ue.x)<ue.w/2+.2&&Math.abs(se-ue.z)<ue.d/2+.2)}function X(){if(!w||J()||B)return!1;let W=[[-.28,.78],[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[se,ue]of W){let ee=w.x+se,de=w.z+ue;if(re(ee,de)&&s.xrTeleport(m.x+ee,0,m.z+de))return s.xrFace?.(0),ae(),$=!0,!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function ie(){_=0,B=F=!1,U=0,L=A=!1,I=null,D=[],$=!0;let W=S();w={x:W.tee.x,z:W.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,ne(),fe(),H="Hold your hand comfortably. A moves and fits your club.",X(),V()}function Q(){let W=q();return!W||!s.xrTeleport(W.x,0,W.z+7.03)?!1:(m=W,P=0,M=[],T=i.visible=!0,O=!1,N.identity(),ie(),t("Mini-golf! Hold your controller comfortably and look down the green. A moves and fits the club. Hold trigger to putt."),!0)}function ae(){L=A=!1,I=null,D=[],h.visible=p.visible=g.visible=!1}function te(){T=i.visible=!1,ae()}function ge(W){if(B)return;B=!0,ae(),M.push(_),U=W?.8:0;let se=S(),ue=W?_===1?"Hole in one!":_<se.par?"Under par!":_===se.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(F=P===ws.length-1,F){let ee=z(),de=ee<=G?"Gold":ee<=G+6?"Silver":"Bronze";R=R===null?ee:Math.min(R,ee);try{localStorage.setItem("tfj-mini-golf-best-v1",String(R))}catch{}H=`${de} medal! ${ee} strokes across six holes.`,t(H)}else H=`${ue} ${_} strokes. A for hole ${P+2}.`,t(H);n(W?.7:.2),V()}function fe(){l.position.set(m.x+w.x,m.y+w.y,m.z+w.z),c.position.set(m.x+w.x,m.y+jn(w.x,w.z,S()).height+.003,m.z+w.z)}function we(W){let se=pc(W);if(!se)return ae(),null;if($){let ee=W.forward.clone();ee.y=0,ee.lengthSq()<.01&&ee.set(0,0,-1),ee.normalize();let de=new be().setFromAxisAngle(new x(0,1,0),Math.atan2(-ee.x,-ee.z)),Pe=jn(se.position.x-m.x,se.position.z-m.z,S()).height,xe=se.position.y-m.y-Pe-.028;if(xe<.3||xe>1.6)return ae(),null;N.copy(se.quaternion).invert().multiply(de),u.size(xe),$=!1,I=null,D=[],H="Club fitted. Mint guide = level face. Hold trigger to putt.",V()}se.quaternion.multiply(N);let ue=u.update(se);return ue.x-=m.x,ue.y-=m.y,ue.z-=m.z,h.visible=!B,ue}function _e(W){if(p.visible=!!W&&!J()&&!B,g.visible=!1,!p.visible)return;p.position.set(m.x+w.x,m.y+jn(w.x,w.z,S()).height+.004,m.z+w.z);let se=Math.hypot(W.x-w.x,W.z-w.z)<.7,ue=Math.hypot(W.forward.x,W.forward.z),ee=Math.abs(W.y-w.y)<.07&&Math.abs(W.up.y)>.8&&ue>.8;if(d.color.set(se&&ee?8645568:16766588),u.face.material.color.set(se&&ee?8636851:3432035),!se||!ee)return;g.visible=!0;let de=W.forward.x/ue,Pe=W.forward.z/ue,xe=g.geometry.attributes.position;for(let De=0;De<2;De++){let Ne=De?.52:.07,Ee=W.x+de*Ne,ce=W.z+Pe*Ne;xe.setXYZ(De,m.x+Ee,m.y+jn(Ee,ce,S()).height+.005,m.z+ce)}xe.needsUpdate=!0,g.geometry.computeBoundingSphere()}function K(W,se){if(!T)return;let ue=Math.max(0,Math.min(.1,W.dt)),ee=!!W.right?.gamepad?.buttons[0]?.pressed,de=!!W.right?.gamepad?.buttons[4]?.pressed,Pe=de&&!O;if(O=de,E+=ue,se){ae();return}if(Pe){if(B){F?(P=0,M=[]):P++,ie();return}else if(!J()){X();return}}ee?L=!B:(L=!1,A=!0,I=null,D=[]);let xe=we(W);if(_e(xe),ee&&A&&!B&&!J()&&xe&&I){for(D.push({time:E,p:xe});D.length>2&&E-D[1].time>.045;)D.shift();let De=D[0],Ne=E-De.time,Ee=Ne>0?{x:(xe.x-De.p.x)/Ne,y:(xe.y-De.p.y)/Ne,z:(xe.z-De.p.z)/Ne}:null,ce=dc(I,xe,w,ue,Ee);ce&&(w.vx=ce.vx,w.vz=ce.vz,_++,A=!1,n(.3),H=`Putt ${_} \xB7 wait for the ball to stop.`,V())}if(I=ee&&xe?xe:null,ee&&xe&&!D.length&&D.push({time:E,p:xe}),!B){let De=w.x,Ne=w.z;fc(w,S(),ue);let Ee=w.x-De,ce=w.z-Ne,Ye=Math.hypot(Ee,ce);Ye&&l.rotateOnWorldAxis(new x(ce,0,-Ee).normalize(),Ye/.038),fe(),w.sunk?ge(!0):!J()&&_>=8?ge(!1):!J()&&H.startsWith("Putt")&&(H="Ball stopped. A moves beside it and refits your club.",V())}U>0&&(U=Math.max(0,U-ue),l.position.y=m.y+.033+.038-(.8-U)*.2,l.scale.setScalar(Math.max(.12,U/.8)),c.visible=!1,U||(l.visible=!1))}return{root:i,course:r,putter:h,head:f,board:v,ball:l,ballGuide:p,aimLine:g,start:Q,stop:te,cancel:ae,tick:K,moveBesideBall:X,get clubLength(){return u.length},get active(){return T},get origin(){return m},get held(){return L},get state(){return w},get hole(){return P},get strokes(){return _},get scores(){return M},get total(){return z()},get holeReady(){return B},get complete(){return F},get best(){return R},get layout(){return S()}}}function Hi(s,e=.18){return Math.abs(s)<=e?0:Math.sign(s)*(Math.abs(s)-e)/(1-e)}function As(s){let e=s?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function xc(s,e,t,n){Math.abs(s)<.25&&(n=!1);let i=0;return e==="smooth"?i=-Hi(s)*Math.PI/3*t:Math.abs(s)>.65&&!n&&(i=-Math.sign(s)*Math.PI/6,n=!0),{angle:i,latched:n}}function Fa(s,e,t){return{x:s*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-s*Math.sin(t)}}var Tt={bounds:{minX:-2.05,maxX:2.05,minZ:-3.3,maxZ:3.3},obstacles:[{x:0,z:0,halfX:.68,halfZ:1.75}],start:{x:-1.37,z:1.62,yaw:0},checkpoints:[{x:-1.37,z:1.95,nx:0,nz:-1,halfWidth:.66},{x:-1.37,z:-1.35,nx:0,nz:-1,halfWidth:.66},{x:0,z:-2.52,nx:1,nz:0,halfWidth:.77},{x:1.37,z:-1.35,nx:0,nz:1,halfWidth:.66},{x:1.37,z:1.35,nx:0,nz:1,halfWidth:.66},{x:0,z:2.52,nx:-1,nz:0,halfWidth:.77}]},Ba=1/240,Ip=.29,Lp=.49,Cs=(s,e,t)=>Math.max(e,Math.min(t,s)),Oa=(s,e,t)=>Number.isFinite(s)?Cs(s,e,t):0,Dp=s=>Math.atan2(Math.sin(s),Math.cos(s));function za(){return{...Tt.start,speed:0,wheelAngle:0,completedLaps:0,nextCheckpoint:1,lastCheckpoint:0,lapTime:0,elapsed:0,laps:[],finished:!1,collisions:0,rescues:0,distance:0,justLap:null,justFinished:!1,checkpointPassed:null,justCollision:!1,_accumulator:0,_contactCooldown:0}}function Es(s,e,t){let n=-Math.sin(s.yaw),i=-Math.cos(s.yaw),r=s.speed*(n*e+i*t);r>=-.015||(s.speed=Cs(s.speed-1.25*r*(n*e+i*t),-1.1,2.8),s._contactCooldown<=0&&(s.collisions++,s.justCollision=!0,s._contactCooldown=.18))}function Up(s){let e=Tt.bounds,t=.28;s.x<e.minX+t&&(s.x=e.minX+t,Es(s,1,0)),s.x>e.maxX-t&&(s.x=e.maxX-t,Es(s,-1,0)),s.z<e.minZ+t&&(s.z=e.minZ+t,Es(s,0,1)),s.z>e.maxZ-t&&(s.z=e.maxZ-t,Es(s,0,-1));for(let n of Tt.obstacles){let i=Cs(s.x,n.x-n.halfX,n.x+n.halfX),r=Cs(s.z,n.z-n.halfZ,n.z+n.halfZ),o=s.x-i,a=s.z-r,l=Math.hypot(o,a);if(!(l>=t)){if(l<1e-9){let c=[[s.x-n.x+n.halfX,-1,0],[n.x+n.halfX-s.x,1,0],[s.z-n.z+n.halfZ,0,-1],[n.z+n.halfZ-s.z,0,1]].sort((d,p)=>d[0]-p[0]),[u,h,f]=c[0];o=h,a=f,s.x+=o*(u+t+1e-5),s.z+=a*(u+t+1e-5)}else o/=l,a/=l,s.x+=o*(t-l+1e-5),s.z+=a*(t-l+1e-5);Es(s,o,a)}}}function Np(s,e,t){let n=Tt.checkpoints[s.nextCheckpoint],i=(e-n.x)*n.nx+(t-n.z)*n.nz,r=(s.x-n.x)*n.nx+(s.z-n.z)*n.nz;if(i>0||r<=0||r-i<1e-9)return null;let o=-i/(r-i),a=e+(s.x-e)*o,l=t+(s.z-t)*o;return Math.abs((a-n.x)*-n.nz+(l-n.z)*n.nx)>n.halfWidth?null:{fraction:o,x:a,z:l}}function Fp(s,e,t){s._contactCooldown=Math.max(0,s._contactCooldown-t),s.wheelAngle+=(-e.steer*Lp-s.wheelAngle)*(1-Math.exp(-12*t));let n=s.speed,i=.32+.15*Math.abs(s.speed);e.brake>.01?s.speed>.025?s.speed=Math.max(0,s.speed-(5.8*e.brake+i)*t):s.speed=Math.min(0,Math.max(-1.1,s.speed-(2.4*e.brake-i)*t)):e.throttle>.01?s.speed<0?s.speed=Math.min(0,s.speed+(3.6*e.throttle+i)*t):s.speed=Math.max(0,Math.min(2.8,s.speed+(3.6*e.throttle-i)*t)):s.speed=Math.sign(s.speed)*Math.max(0,Math.abs(s.speed)-i*t),s.speed=Cs(s.speed,-1.1,2.8);let r=(n+s.speed)/2,o=r*Math.tan(s.wheelAngle)/Ip,a=s.yaw+o*t/2,l=s.x,c=s.z;s.x-=Math.sin(a)*r*t,s.z-=Math.cos(a)*r*t,s.yaw=Dp(s.yaw+o*t),Up(s),s.distance+=Math.hypot(s.x-l,s.z-c);let u=Np(s,l,c);if(u){let h=s.nextCheckpoint;if(s.checkpointPassed=h,s.lastCheckpoint=h,s.nextCheckpoint=(h+1)%Tt.checkpoints.length,h===0){let f=s.lapTime+t*u.fraction;if(s.laps.push(f),s.completedLaps++,s.justLap=f,s.lapTime=-t*u.fraction,s.completedLaps>=3){s.finished=!0,s.justFinished=!0,s.x=u.x,s.z=u.z,s.speed=0,s.elapsed+=t*u.fraction,s.lapTime=0;return}}}s.elapsed+=t,s.lapTime+=t}function yc(s,e={},t=0){if(s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,s.finished||!Number.isFinite(t)||t<=0)return s;let n={steer:Oa(e.steer,-1,1),throttle:Oa(e.throttle,0,1),brake:Oa(e.brake,0,1)};for(s._accumulator+=Math.min(.1,t);s._accumulator>=Ba-1e-12&&!s.finished;)s._accumulator=Math.max(0,s._accumulator-Ba),Fp(s,n,Ba);return s.finished&&(s._accumulator=0),s}function _c(s){if(s.finished)return!1;let e=Tt.checkpoints[s.lastCheckpoint];return s.x=e.x+e.nx*.25,s.z=e.z+e.nz*.25,s.yaw=Math.atan2(-e.nx,-e.nz),s.speed=0,s.wheelAngle=0,s.elapsed+=2,s.lapTime+=2,s.rescues++,s._accumulator=0,s._contactCooldown=0,s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,!0}function fn(s){if(!Number.isFinite(s)||s<0)return"\u2014";let e=Math.floor(s*100),t=Math.floor(e/6e3),n=e%6e3;return`${t}:${String(Math.floor(n/100)).padStart(2,"0")}.${String(n%100).padStart(2,"0")}`}var at=.025,Nt=(s,e=.6,t=0)=>new Se({color:s,roughness:e,metalness:t}),vc=(s,e,t,n=10)=>s+(e-s)*(1-Math.exp(-Math.max(0,t)*n));function Zt(s,e,t,n=0,i=0,r=0){let o=new me(e,t);return o.position.set(n,i,r),s.add(o),o}function it(s,e,t,n,i,r,o,a){return Zt(s,new Me(t,n,i),e,r,o,a)}function Rs(s,e,t,n){let i=new xt(new Me(1,1,1),e,t.length),r=new Xe;i.name=n;for(let o=0;o<t.length;o++){let[a,l,c,u,h,f,d=0]=t[o];r.position.set(u,h,f),r.scale.set(a,l,c),r.rotation.set(d,0,0),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}return i.instanceMatrix.needsUpdate=!0,i.computeBoundingSphere(),s.add(i),i}function Qn(s,e,t,n,i=.005){let r=new x(...t),o=new x(...n),a=Zt(s,new ze(i,i,r.distanceTo(o),6),e);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new x(0,1,0),o.sub(r).normalize()),a}function Yr(s,e,t,n,i,r=at+.001){let o=Zt(s,e,t,n,r,i);return o.rotation.x=-Math.PI/2,o}var qr,ei;function Bp(){if(!qr){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d");e.fillStyle="#f8e6aa",e.beginPath(),e.arc(64,64,59,0,Math.PI*2),e.fill(),e.strokeStyle="#16364a",e.lineWidth=7,e.stroke(),e.fillStyle="#133348",e.font="bold 94px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("7",64,71),qr=new Ie(s),qr.colorSpace=Ae}return new ve({map:qr,transparent:!0,depthWrite:!1})}function Op(){if(!ei){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#334b5b",e.fillRect(0,0,256,256);let t=47;for(let n=0;n<7e3;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%256;e.fillStyle=n%2?"rgba(175,204,211,.065)":"rgba(10,26,42,.15)",e.fillRect(i,r,1,1)}ei=new Ie(s),ei.colorSpace=Ae,ei.wrapS=ei.wrapT=qt,ei.repeat.set(4,6),ei.anisotropy=2}return new Se({map:ei,roughness:.9})}function Mc(s){let e=new pe;e.name="TF Jones seven \xB7 RC rally buggy",s.add(e);let t=new pe;t.name="Sprung rally body",e.add(t);let n=Nt("#217db6",.32,.16),i=Nt("#0f2d3d",.52),r=Nt("#0c1720",.85),o=Nt("#e4edf2",.3,.55),a=Nt("#ffd66b",.38,.1),l=Nt("#244e68",.18,.55),c=document.querySelector?.(".brand img"),u=[];function h(F,U=.5,H=""){let w=document.createElement("canvas");w.width=1024,w.height=F;let $=new Ie(w);$.colorSpace=Ae,$.anisotropy=2;function D(){let E=w.getContext("2d");E.clearRect(0,0,1024,F),E.fillStyle="#0f2d3d",E.fillRect(0,0,1024,F),F>=224&&(E.fillStyle="#ffd66b",E.fillRect(24,16,976,9),E.fillRect(24,F-25,976,9));let N=F*U-85;if(c?.naturalWidth>0&&c?.naturalHeight>0){let z=document.createElement("canvas");z.width=1024,z.height=192;let G=z.getContext("2d");G.drawImage(c,0,0,c.naturalWidth,c.naturalHeight*.53,62,11,900,171),G.globalCompositeOperation="source-in",G.fillStyle="#fff",G.fillRect(0,0,1024,192),G.globalCompositeOperation="source-over",E.drawImage(z,0,N-11)}else E.fillStyle="#fff",E.font="italic 900 162px Arial",E.textAlign="center",E.textBaseline="middle",E.fillText("TFJONES",512,N+85,900);H&&(E.fillStyle="#ffd66b",E.font="bold 60px Arial",E.textAlign="center",E.textBaseline="middle",E.fillText(H,512,F*.84,900)),$.needsUpdate=!0}return u.push(D),D(),new Se({map:$,roughness:.4,metalness:.05})}function f(F,U,H,w,$,D,E){let N=it(t,F,U,H,w,$,D,E),z=N.geometry,G=[...z.groups],S=[...new Set(F)],V=[];z.clearGroups();for(let q=0;q<S.length;q++){let Z=V.length;for(let Y of G)if(F[Y.materialIndex]===S[q])for(let k=Y.start;k<Y.start+Y.count;k++)V.push(z.index.array[k]);z.addGroup(Z,V.length-Z,q)}return z.setIndex(V),N.material=S,N}let d=h(512,.44,"RACING 07"),p=h(720,.73),g=h(192),b=h(224);c&&!c.complete&&c.addEventListener?.("load",()=>u.forEach(F=>F()),{once:!0});let y=new Se({color:"#fff1bb",emissive:"#ffe3a0",emissiveIntensity:.75,roughness:.28}),C=new Se({color:"#ff4156",emissive:"#e62347",emissiveIntensity:.55,roughness:.3}),v=on(.49,.59);v.position.y=.002,e.add(v),it(t,i,.252,.029,.382,0,.111,0).name="Buggy chassis";let m=new ft;for(let[F,[U,H]]of[[-.081,-.204],[.081,-.204],[.123,-.122],[.12,.161],[.091,.19],[-.091,.19],[-.12,.161],[-.123,-.122]].entries())F===0?m.moveTo(U,-H):m.lineTo(U,-H);m.closePath();let T=Zt(t,new rn(m,{depth:.054,bevelEnabled:!0,bevelSize:.009,bevelThickness:.006,bevelSegments:2,steps:1}),n,0,.122,0);T.rotation.x=-Math.PI/2,T.name="Blue rally body shell",f([i,i,p,i,i,i],.17,.017,.12,0,.185,-.128).name="TF Jones branded bonnet";for(let F of[-.071,.071])it(t,a,.015,.002,.12,F,.194,-.13);it(t,i,.284,.038,.027,0,.108,-.211).name="Front crash bumper",it(t,i,.26,.03,.026,0,.108,.211);for(let F of[-1,1])f([g,g,a,a,i,i],.016,.034,.18,F*.128,.157,.033).name=F<0?"TF Jones left side panel":"TF Jones right side panel",Qn(t,o,[F*.126,.14,-.1],[F*.126,.16,.13],.006),Qn(t,i,[F*.065,.113,-.13],[F*.146,.087,-.136],.011),Qn(t,i,[F*.065,.113,.13],[F*.146,.087,.136],.011);let P=it(t,l,.167,.085,.008,0,.226,-.037);P.rotation.x=-.34,it(t,l,.16,.07,.006,0,.224,.077).rotation.x=.12,it(t,i,.18,.008,.097,0,.269,.021);for(let F of[-.091,.091])Qn(t,a,[F,.177,-.054],[F,.272,-.008],.006),Qn(t,a,[F,.177,.09],[F,.272,.065],.006),Qn(t,a,[F,.272,-.008],[F,.272,.065],.006);f([n,n,d,i,n,n],.187,.01,.091,0,.279,.025).name="TF Jones racing roof";let _=Yr(t,new Le(.063,.063),Bp(),0,-.166,.195);_.name="Race number seven";for(let F of[-.069,.069]){Qn(t,i,[F,.174,.146],[F,.245,.195],.008);let U=Zt(t,new ze(.014,.014,.009,10),y,F,.16,-.202);U.rotation.x=Math.PI/2,it(t,C,.033,.014,.008,F,.158,.195)}f([i,i,b,i,i,i],.29,.016,.063,0,.249,.202).name="TF Jones rear rally spoiler";for(let F of[-.14,.14])it(t,a,.012,.03,.065,F,.257,.202);let M=Qn(t,i,[.072,.18,.094],[.085,.374,.118],.0018);M.name="RC receiver antenna",Zt(t,new qe(.005,6,4),a,.085,.375,.118);let R=[];for(let F of[-1,1])for(let U of[!0,!1]){let H=new pe;H.name=U?"Steering wheel pivot":"Rear axle",H.position.set(F*.146,.078,U?-.137:.137),e.add(H);let w=new pe;w.name=(U?"Front":"Rear")+(F<0?" left":" right")+" tire",H.add(w);let $=Zt(w,new ze(.077,.077,.055,16),r);$.rotation.z=Math.PI/2;let D=[],E=[];for(let N of[-1,1]){let z=Zt(w,new ze(.043,.043,.005,12),o,N*.028,0,0);z.rotation.z=Math.PI/2;let G=Zt(w,new ze(.015,.015,.007,10),a,N*.032,0,0);G.rotation.z=Math.PI/2;for(let S=0;S<5;S++){let V=S*Math.PI*2/5;D.push([.003,.011,.028,N*.032,Math.cos(V)*.024,Math.sin(V)*.024,-V])}}for(let N=0;N<10;N++){let z=N*Math.PI*2/10;E.push([.05,.006,.019,0,Math.cos(z)*.077,Math.sin(z)*.077,z])}Rs(w,i,D,"Rim spokes"),Rs(w,r,E,"Raised tire tread"),R.push({pivot:H,wheel:w,front:U})}let L=0,A=0,I=0,O=0;function B(F,U=0){e.position.set(F.x,F.y??at,F.z),e.rotation.y=F.yaw??0;let H=Number.isFinite(F.speed)?F.speed:0,w=Number.isFinite(F.wheelAngle)?F.wheelAngle:(F.steer||0)*.5;L=(L+H*Math.max(0,Math.min(.1,U))/.077)%(Math.PI*2);for(let D of R)D.pivot.rotation.y=D.front?w:0,D.wheel.rotation.x=-L;let $=U>.001?Ge.clamp((H-A)/U,-7,7):0;I=vc(I,Ge.clamp(-w*H*.075,-.11,.11),U),O=vc(O,$*.005,U),t.rotation.z=I,t.rotation.x=O,t.position.y=Math.abs(H)>.08?Math.sin(L*1.7)*.0015:0,A=H}return B({x:0,z:0,yaw:0,speed:0},0),{root:e,wheels:R,body:t,shadow:v,update:B}}function zp(s,e,t,n,i,r){let o=new ft;o.moveTo(0,.16),o.lineTo(.125,-.005),o.lineTo(.05,-.005),o.lineTo(.05,-.14),o.lineTo(-.05,-.14),o.lineTo(-.05,-.005),o.lineTo(-.125,-.005),o.closePath();let a=Yr(s,new Vt(o),r,e,t);return a.rotation.z=Math.atan2(-n,-i),a.name="Clockwise racing arrow",a}function kp(s,e,t){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d");i.fillStyle="#102638",i.fillRect(0,0,128,128),i.strokeStyle="#8fe1c3",i.lineWidth=6,i.strokeRect(5,5,118,118),i.fillStyle="#f7fafc",i.font="bold 81px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(String(e+1),64,70);let r=new Ie(n);r.colorSpace=Ae;let o=Yr(s,new Le(.21,.21),new ve({map:r}),t.x-t.nx*.33,t.z-t.nz*.33);return o.rotation.z=Math.atan2(-t.nx,-t.nz),o.name="Checkpoint "+(e+1)+" number",o}function bc(s){let e=new pe;e.name="Warehouse RC racing circuit",s.add(e);let{minX:t,maxX:n,minZ:i,maxZ:r}=Tt.bounds,o=n-t,a=r-i,l=(t+n)/2,c=(i+r)/2,u=Nt("#132e40",.72),h=Nt("#29495b"),f=Nt("#f4e6bc",.6),d=Nt("#dd6574",.62),p=Nt("#f6d484",.5),g=Nt("#162a34",.9),b=new Se({color:"#8fe1c3",emissive:"#438b7e",emissiveIntensity:.26,roughness:.4});it(e,u,o+.18,.021,a+.18,l,.0105,c).name="Raised circuit mat";let y=Yr(e,new Le(o,a),Op(),l,c,at);y.name="Asphalt racing surface";let C=[],v=[],m=[],T=[],P=[],_=[];for(let D of[t-.045,n+.045]){let E=it(e,h,.09,.092,a+.18,D,at+.046,c);E.name="RC boundary rail",C.push(E),it(e,b,.058,.006,a+.1,D,at+.095,c)}for(let D of[i-.045,r+.045]){let E=it(e,h,o,.092,.09,l,at+.046,D);E.name="RC boundary rail",C.push(E),it(e,b,o,.006,.058,l,at+.095,D)}for(let D of[t-.045,n+.045]){let E=Math.ceil(a/.22);for(let N=0;N<E;N++)(N%2?P:T).push([.085,.004,a/E-.003,D,at+.097,i+(N+.5)*a/E])}for(let D of[i-.045,r+.045]){let E=Math.ceil(o/.22);for(let N=0;N<E;N++)(N%2?P:T).push([o/E-.003,.004,.085,t+(N+.5)*o/E,at+.097,D])}let M=Gi();M.roughness=.85;for(let D of Tt.obstacles){let{x:E,z:N,halfX:z,halfZ:G}=D,S=z*2,V=G*2,q=new pe;q.name="Pallet shipping island",e.add(q),v.push(q),it(q,u,S,.125,V,E,at+.0625,N).name="Solid island barrier";for(let k of[-1,1]){let ne=Math.ceil(V/.22);for(let J=0;J<ne;J++)(J%2?P:T).push([.055,.018,V/ne-.003,E+k*(z-.0275),at+.13,N-G+(J+.5)*V/ne])}for(let k of[-1,1]){let ne=Math.ceil(S/.22);for(let J=0;J<ne;J++)(J%2?P:T).push([S/ne-.003,.018,.055,E-z+(J+.5)*S/ne,at+.13,N+k*(G-.0275)])}for(let k=0;k<7;k++)it(q,M,(S-.16)/7-.011,.025,V-.18,E+(k-3)*(S-.16)/7,at+.153,N);let Z=Nt("#c1a274",.94),Y=Nt("#917b5e",.9);for(let[k,ne]of[-.93,0,.93].entries()){let J=.28+k%2*.13,re=.68,X=.72,ie=at+.18+J/2;it(q,Z,re,J,X,E+(k===1?.1:-.09),ie,N+ne).name="Warehouse cargo crate",it(q,Y,.037,.004,X+.004,E+(k===1?.1:-.09),ie+J/2+.002,N+ne);for(let Q of[-1,1])it(q,Y,.007,J,.029,E+(k===1?.1:-.09)+Q*(re/2+.004),ie,N+ne)}for(let k of[-1,1])for(let ne of[-1,1]){let J=E+k*(z-.14),re=N+ne*(G-.16);it(q,g,.13,.015,.13,J,at+.167,re),Zt(q,new sn(.054,.15,8),p,J,at+.25,re),Zt(q,new ze(.032,.04,.022,8),f,J,at+.245,re)}}let R=Tt.checkpoints[0],L=Math.abs(R.nz)>.5,A=R.halfWidth*2;for(let D=0;D<2;D++)for(let E=0;E<12;E++){let N=-A/2+(E+.5)*A/12,z=(D-.5)*.085,G=R.x+(L?N:z),S=R.z+(L?z:N);((D+E)%2?_:P).push([L?A/12-.002:.083,.001,L?.083:A/12-.002,G,at+.002,S])}Rs(e,f,P,"Cream curb and starting line tiles"),Rs(e,d,T,"Coral curb tiles"),Rs(e,u,_,"Chequered starting line");let I=7903914,O=9429443;Tt.checkpoints.forEach((D,E)=>{let N=new pe;N.name="RC checkpoint "+(E+1),e.add(N);let z=new ve({color:I,transparent:!0,opacity:.58,depthWrite:!1}),G=zp(N,D.x+D.nx*.35,D.z+D.nz*.35,D.nx,D.nz,z),S=-D.nz,V=D.nx,q=[new x(D.x-S*D.halfWidth,at+.004,D.z-V*D.halfWidth),new x(D.x+S*D.halfWidth,at+.004,D.z+V*D.halfWidth)],Z=new Ct(new Oe().setFromPoints(q),new Ms({color:I,transparent:!0,opacity:.6,dashSize:.08,gapSize:.04}));Z.computeLineDistances(),N.add(Z),Z.name="Checkpoint crossing",Z.visible=E!==0,kp(N,E,D),m.push({root:N,arrow:G,line:Z,material:z})});let B=document.createElement("canvas");B.width=768,B.height=192;let F=B.getContext("2d");F.fillStyle="#102b40",F.fillRect(0,0,768,192),F.fillStyle="#8fe1c3",F.fillRect(0,0,768,9),F.fillStyle="#f7fafc",F.font="bold 73px Arial",F.textAlign="center",F.fillText("TFJ RC RACING",384,116),F.fillStyle="#f6d484",F.font="26px Arial",F.fillText("PALLET CIRCUIT \xB7 FOLLOW THE ARROWS",384,166);let U=new Ie(B);U.colorSpace=Ae;let H=Tt.obstacles[0].z+Tt.obstacles[0].halfZ;it(e,u,1.2,.31,.026,0,.31,H-.014);for(let D of[-.5,.5])it(e,h,.021,.21,.021,D,.205,H-.029);let w=Zt(e,new Le(1.18,.295),new ve({map:U}),0,.31,H+.002);w.name="Pallet circuit fascia";function $(D){for(let E=0;E<m.length;E++){let N=m[E],z=E===D;N.material.color.setHex(z?O:I),N.material.opacity=z?.95:.45,N.line.material.color.setHex(z?O:I),N.line.material.opacity=z?.92:.3}}return $(1),{root:e,rails:C,obstacles:v,checkpoints:m,road:y,setCheckpoint:$,surfaceY:at}}var Tc="tfj-rc-best-lap-v1",wc="tfj-rc-best-race-v1",Ac=s=>Ge.clamp(Number.isFinite(s?.value)?s.value:s?.pressed?1:0,0,1);function Ec(s,e,t,n){let i=new pe;i.name="Warehouse RC car racing",i.visible=!1,e.add(i);let r=bc(i),o=Mc(i),a=document.createElement("canvas");a.width=1280,a.height=768;let l=a.getContext("2d"),c=new Ie(a);c.colorSpace=Ae;let u=new me(new Le(2.7,1.62),new ve({map:c}));u.name="RC race scoreboard",u.position.set(0,2.05,Tt.bounds.minZ-.2),i.add(u);let h=new me(new Me(2.77,1.69,.055),new Se({color:1058613,roughness:.6}));h.position.copy(u.position),h.position.z-=.037,i.add(h);for(let E of[-1.34,1.34]){let N=new me(new Me(.038,2.92,.038),new Se({color:4019813,metalness:.3,roughness:.5}));N.position.set(E,1.46,u.position.z-.04),i.add(N)}let f=Ut("TFJ RC RACING","WAREHOUSE  /  THREE-LAP TIME TRIAL","play",j.blue,2.6);f.position.set(0,3.27,u.position.z),i.add(f);let d=[];for(let E=0;E<3;E++){let N=new me(new qe(.065,12,8),new ve({color:2307910}));N.position.set((E-1)*.21,1.13,u.position.z+.03),i.add(N),d.push(N)}let p=null,g=null,b=!1,y=za(),C=3,v=!1,m=!1,T=!1,P=null,_=null,M=0,R="Release trigger, then get ready!",L=!1;function A(E,N){try{let z=localStorage.getItem(E),G=z===null||!z.trim()?NaN:Number(z);return Number.isSafeInteger(G)&&G>=N&&G<=36e5?G:null}catch{return null}}P=A(Tc,1e3),_=A(wc,3e3);function I(){St(l,1280,768),oe(l,"TF JONES  /  PALLET CIRCUIT",36,46,26,j.blue,"700"),oe(l,y.finished?"RACE COMPLETE":"THREE-LAP TIME TRIAL",36,108,49,j.ink,"700"),Ke(l,885,29,356,135,{top:"#214b54",bottom:"#102e40",stroke:j.mint}),oe(l,"BEST LAP",909,73,26,j.mint,"700"),oe(l,P===null?"\u2014":fn(P/1e3),909,137,53,j.gold,"700"),oe(l,C>0?`READY  ${Math.ceil(C)}`:y.finished?"FINISH!":`LAP ${y.completedLaps+1} / ${3}`,36,210,55,j.gold,"700"),oe(l,fn(y.elapsed),693,215,66,j.ink,"700"),oe(l,`Current lap ${fn(y.lapTime)}`,37,263,32,j.mint,"600"),oe(l,`Best race ${_===null?"\u2014":fn(_/1e3)}`,692,263,30,j.muted,"500");for(let E=0;E<3;E++){let N=36+E*404,z=y.laps[E]!==void 0;Ke(l,N,296,385,156,{top:z?"#285749":"#1c3f55",bottom:"#102b3e",stroke:z?j.mint:"#496679"}),oe(l,`LAP ${E+1}`,N+22,337,25,z?j.mint:j.muted,"700"),oe(l,z?fn(y.laps[E]):"\u2014",N+22,410,54,j.ink,"700")}oe(l,R,37,503,30,j.ink,"600",1204),oe(l,"LEFT STICK  STEER",37,562,28,j.blue,"700"),oe(l,"RIGHT TRIGGER  GAS",638,562,28,j.gold,"700"),oe(l,"RIGHT GRIP  BRAKE / REVERSE",37,612,25,j.muted),oe(l,y.finished?"A  RACE AGAIN":"A  RESCUE CAR  (+2s)",638,612,25,j.mint,"700"),oe(l,"X  RETURN TO DRIVER SPOT",37,690,25,j.muted),oe(l,"Y  PAUSE / MENU   \xB7   B  LEAVE",638,690,25,j.muted),c.needsUpdate=!0,d.forEach((E,N)=>E.material.color.setHex(y.finished?9429443:C>2?N===0?15755368:2307910:C>1?N<=1?16176260:2307910:C>0?16176260:9429443))}function O(){let E=Tt.bounds;for(let N of[3,3.5,4,2.5,4.5])for(let z of[-26.5,-26,-27,-25.5]){let G=!0;for(let S=E.minX-.11;S<=E.maxX+.11;S+=.3)for(let V=E.minZ-.3;V<=E.maxZ+.12;V+=.3)(s.blocked(N+S,z+V,0)||Math.abs(s.groundAt(N+S,z+V,.1))>.1)&&(G=!1);if(G)for(let S of[0,-.75,.75,-1.5,1.5]){let V=new x(N+S,0,z+E.maxZ+1.05),q=!0;for(let Z of[-.25,0,.25])for(let Y of[-.25,0,.25])(s.blocked(V.x+Z,V.z+Y,0)||Math.abs(s.groundAt(V.x+Z,V.z+Y,.1))>.1)&&(q=!1);if(q)return{origin:new x(N,0,z),view:V}}}return null}function B(){y=za(),C=3,v=!1,R="Release trigger. Follow the mint arrows clockwise.",M=0,L=!1,o.update(y,0),r.setCheckpoint(y.nextCheckpoint),I()}function F(){let E=O();return!E||!s.xrTeleport(E.view.x,0,E.view.z)?!1:(p=E.origin,g=E.view,i.position.copy(p),s.xrFace?.(0),b=i.visible=!0,m=T=!1,B(),t("RC racing! Left stick steers, right trigger drives. Grip brakes and reverses. A rescues the car."),!0)}function U(){v=!1}function H(){b=i.visible=!1,U()}function w(){return!g||!s.xrTeleport(g.x,0,g.z)?!1:(s.xrFace?.(0),U(),!0)}function $(E){let N=Math.round(E*1e3);if(!(N<1e3||N>36e5)&&(P===null||N<P)){P=N;try{localStorage.setItem(Tc,String(N))}catch{}t(`New RC lap record! ${fn(N/1e3)}`)}}function D(E,N){if(!b)return;let z=Math.max(0,Math.min(.1,E.dt||0)),G=!!E.right?.gamepad?.buttons[4]?.pressed,S=!!E.left?.gamepad?.buttons[4]?.pressed,V=G&&!m,q=S&&!T;if(m=G,T=S,N){U();return}if(!E.right?.gamepad||!E.left?.gamepad){U(),L||(L=!0,R="Reconnect both controllers. Race paused.",I());return}if(L&&(L=!1,R="Controller ready. Release trigger to resume.",I()),q&&(R=w()?"Driver viewpoint restored. Release trigger to drive.":"Driver spot is blocked. Use B to leave the race.",I()),V)if(y.finished){B();return}else C<=0&&_c(y)&&(R="Car rescued at your last gate. +2 seconds.",n(.2),I());let Z=Ac(E.right.gamepad.buttons[0]),Y=Ac(E.right.gamepad.buttons[1]);Z<.1&&Y<.1&&(v=!0);let k=z;if(C>0){let re=Math.min(C,z);if(C-=re,k-=re,C<=0&&(R="GO! Drive through the mint gates in order.",n(.4)),M+=z,(M>=.1||C<=0)&&(M=0,I()),C>0)return}if(y.finished)return;let ne=Hi(As(E.left)[0]),J=y.collisions;if(yc(y,{steer:ne,throttle:v?Z:0,brake:v?Y:0},k),o.update(y,k),r.setCheckpoint(y.nextCheckpoint),y.collisions!==J&&(n(.12),R="Bump! Ease off, reverse, or use A to rescue."),y.checkpointPassed!==null&&(R=`Gate ${y.checkpointPassed+1} cleared. Follow the mint arrow.`),y.justLap!==null&&($(y.justLap),n(.4),R=`Lap ${y.completedLaps}: ${fn(y.justLap)}`,I()),y.justFinished){let re=Math.round(y.elapsed*1e3);if(re>=3e3&&re<=36e5&&(_===null||re<_)){_=re;try{localStorage.setItem(wc,String(re))}catch{}}let X=Math.min(...y.laps);R=`${X<=14?"Gold":X<=20?"Silver":"Bronze"} lap medal! Race ${fn(y.elapsed)}. A to replay.`,r.setCheckpoint(null),t(`RC race complete! ${fn(y.elapsed)} \xB7 A to race again.`),n(.7),I()}M+=z,M>=.1&&(M=0,I())}return I(),{root:i,track:r,car:o,board:u,start:F,stop:H,cancel:U,tick:D,returnToView:w,get active(){return b},get origin(){return p},get view(){return g},get state(){return y},get countdown(){return C},get bestLapMs(){return P},get bestRaceMs(){return _}}}var Jr="tfj-memory-bests-v1",Zr=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>{if(!["string","number"].includes(typeof s)||typeof s=="string"&&!s.trim())return null;let n=Number(s);return Number.isSafeInteger(n)&&n>=e&&n<=t?n:null};function $r(s){let e=s;try{typeof e=="string"&&(e=JSON.parse(e))}catch{return{}}if(!e||typeof e!="object"||Array.isArray(e))return{};let t={};for(let n=2;n<=6;n++){let i=Zr(e[n],n,1e4);i!==null&&(t[n]=i)}return t}function Cc(s,e=0,t={}){let n=v=>{try{return s?.getItem(v)??null}catch{return null}},i=(v,m,T,P=0,_=!1)=>{let M=Zr(n(v),P,T),R=Zr(t[m],P,T),L=[M,R].filter(A=>A!==null);return L.length?_?Math.min(...L):Math.max(...L):null},r=(v,m,T,P)=>v===null?0:v>=P?3:v>=T?2:v>=m?1:0,o=[],a=(v,m,T,P,_,M,R,L,A)=>{let I=i(T,v,P);o.push({id:v,title:m,value:I,score:I===null?"\u2014":String(I),detail:I===null?"Play a complete round":R,medal:r(I,..._),goal:`Gold: ${_[2]} ${M}`,icon:L,accent:A})};a("bowling","WAREHOUSE BOWLING","tfj-bowling-best-10-v1",100,[10,50,80],"pins","pins / 100 \xB7 ten frames","target","#8bc8f3"),a("darts","STAFF-ROOM DARTS","tfj-vr-darts-best-v1",540,[50,150,300],"points","points \xB7 nine darts","target","#8fe1c3");let l=i("tfj-mini-golf-best-v1","golf",48,6,!0);o.push({id:"golf",title:"WAREHOUSE MINI-GOLF",value:l,score:l===null?"\u2014":String(l),detail:l===null?"Finish all six holes":"strokes \xB7 six holes \xB7 lower wins",medal:l===null?0:l<=18?3:l<=24?2:1,goal:"Gold: 18 strokes or fewer",icon:"golf",accent:"#8fe1c3"}),a("basketball","BASKETBALL","tfj-basket-best",10,[2,5,8],"baskets","baskets / 10 throws","target","#f6d484"),a("planes","PAPER PLANES","tfj-planes-best-v1",150,[10,50,100],"points","points \xB7 five flights","play","#8bc8f3");let c=i("tfj-rc-best-lap-v1","rc",36e5,1e3,!0),u=c===null?0:Math.floor(c/6e4),h=c===null?0:Math.floor(c/1e3)%60,f=c===null?0:Math.floor(c/10)%100;o.push({id:"rc",title:"RC CAR RACING",value:c,score:c===null?"\u2014":`${u}:${String(h).padStart(2,"0")}.${String(f).padStart(2,"0")}`,detail:c===null?"Complete a lap":"best lap \xB7 lower wins",medal:c===null?0:c<=14e3?3:c<=2e4?2:1,goal:"Gold: lap in 14 seconds",icon:"car",accent:"#8bc8f3"});let d=$r(n(Jr)),p=$r(t.memory);for(let[v,m]of Object.entries(p))d[v]=Math.min(d[v]??1/0,m);let g=Object.keys(d).map(Number).sort((v,m)=>m-v)[0]??null,b=g===null?null:d[g];o.push({id:"memory",title:"MEMORY MATCH",value:b,pairs:g,score:b===null?"\u2014":String(b),detail:b===null?"Use your collected cards":`turns \xB7 ${g}-pair deck \xB7 lower wins`,medal:b===null?0:b===g?3:b<=g+2?2:1,goal:g===null?"Practice rounds do not count":`Gold: ${g} turns \xB7 perfect match`,icon:"book",accent:"#f3b2cf"});let y=Zr(e,0,18)??0;o.push({id:"cards",title:"MOLLIE\u2019S CARD ALBUM",value:y,score:`${y} / 18`,detail:y===18?"Collection complete!":"Cards found around the yard",medal:r(y,6,12,18),goal:"Gold: collect all 18 cards",icon:"book",accent:"#f6d484"});let C=i("tfj-vr-jigglypuff-rounds-v1","hide",Number.MAX_SAFE_INTEGER)??0;return o.push({id:"hide",title:"JIGGLYPUFF SEEKER",value:C,score:String(C),detail:"complete hide-and-seek rounds",medal:r(C,1,3,5),goal:"Gold: complete five hunts",icon:"puff",accent:"#f3b2cf"}),o}var ka=s=>["TO EARN","BRONZE","SILVER","GOLD"][s];var Wi=[5465977,12025936,13359585,16176260];function Vp(s){let e=s.colliders.map(t=>new Ve(new x(t.min.x,t.min.y,t.min.z),new x(t.max.x,t.max.y,t.max.z)));for(let t of s.colliders){let{min:n,max:i}=t;if(n.x<7.5||i.x>9||i.x-n.x>.3||i.z-n.z<3.9||n.y>.1||i.y<2.78)continue;let r=(n.z+i.z)/2;for(let o of[r,r-.45,r+.45]){if(o-1.86<n.z||o+1.86>i.z)continue;let a=new x(n.x-.045,0,o),l=a.clone().add(new x(-2.45,0,0)),c=!0;for(let h of[-.3,0,.3])for(let f of[-.4,0,.4])(s.blocked(l.x+h,l.z+f,0)||Math.abs(s.groundAt(l.x+h,l.z+f,.1))>.1)&&(c=!1);let u=l.clone().add(new x(0,1.68,0));for(let h of[-1.7,-.6,.6,1.7])for(let f of[.8,1.7,2.65]){let d=a.clone().add(new x(-.052,f,h)),p=d.clone().sub(u),g=p.length(),b=new tt(u,p.normalize()),y=new x;e.some(C=>b.intersectBox(C,y)&&y.distanceTo(u)<g-.015)&&(c=!1)}if(c)return{mount:a,view:l,heading:-Math.PI/2}}}return null}function Rc(s,e,t,n){let i=new pe;i.name="Arcade wall of fame",e.add(i);let r=Vp(s);i.visible=!!r,r&&(i.position.copy(r.mount),i.rotation.y=-Math.PI/2);let o=document.createElement("canvas");o.width=2048,o.height=1152;let a=o.getContext("2d"),l=new Ie(o);l.colorSpace=Ae,l.anisotropy=4;let c=new me(new Le(3.6,2.025),new ve({map:l}));c.name="Mollie\u2019s personal records",c.position.set(0,1.7,.052),i.add(c);let u=(M,R,L,A,I)=>{let O=new me(M,R);return O.position.set(L,A,I),i.add(O),O},h=new Se({color:1058612,roughness:.7}),f=new Se({color:9215391,metalness:.6,roughness:.35});u(new Me(3.72,2.14,.075),h,0,1.7,0);let d=new ve({color:16176260});for(let M of[.626,2.774])u(new Me(3.74,.024,.045),d,0,M,.031);for(let M of[-1.862,1.862])u(new Me(.024,2.16,.045),d,M,1.7,.031);u(new Me(3.74,.045,.24),f,0,.32,.13);let p=[];for(let M=1;M<=3;M++){let R=new pe;R.name=`${ka(M)} trophy`,R.position.set((M-2)*1.05,.346,.14),i.add(R);let L=new Se({color:Wi[0],metalness:.68,roughness:.32}),A=[new me(new Me(.24,.044,.16),h),new me(new ze(.069,.088,.052,16),L),new me(new ze(.018,.029,.072,12),L),new me(new yi([new he(.025,0),new he(.06,.045),new he(.089,.12),new he(.078,.13),new he(.049,.052),new he(.014,.021)],20),L)];A[0].position.y=.022,A[1].position.y=.069,A[2].position.y=.12,A[3].position.y=.15,R.add(...A);for(let I of[-.092,.092]){let O=new me(new Rt(.042,.008,6,14),L);O.position.set(I,.233,0),R.add(O)}p.push({trophy:R,material:L,tier:M})}let g=[],b=null,y=0,C=0,v=0;function m(){St(a,2048,1152),oe(a,"TF JONES  /  WAREHOUSE ARCADE",54,64,27,j.blue,"700"),oe(a,"WALL OF FAME",52,154,86,j.ink,"700"),oe(a,"Mollie\u2019s personal bests",54,213,35,j.gold,"600");let M=g.filter(L=>L.medal).length,R=g.filter(L=>L.medal===3).length;Ke(a,1535,46,456,174,{top:"#254f54",bottom:"#142f43",stroke:j.gold,radius:20}),oe(a,`${M} / ${g.length}`,1567,145,67,j.gold,"700"),oe(a,`MEDALS EARNED  \xB7  ${R} GOLD`,1567,191,26,j.ink,"700"),g.forEach((L,A)=>{let I=54+A%3*650,O=253+Math.floor(A/3)*256,B=638;Ke(a,I,O,B,244,{top:"#234955",bottom:"#0d2639",stroke:L.medal?`#${Wi[L.medal].toString(16).padStart(6,"0")}`:"#466374",radius:18}),Cn(a,L.icon,I+39,O+36,40,L.accent),oe(a,L.title,I+77,O+43,30,j.ink,"700",B-98),oe(a,L.score,I+28,O+119,76,j.gold,"700",B-56),oe(a,L.detail,I+28,O+153,25,j.muted,"500",B-56);let U=`#${Wi[L.medal].toString(16).padStart(6,"0")}`;Ke(a,I+27,O+167,B-54,36,{top:L.medal?"#24474d":"#162c3c",bottom:"#172f3c",stroke:U,radius:10}),oe(a,ka(L.medal),I+44,O+194,26,L.medal?U:j.muted,"700"),oe(a,L.goal,I+28,O+229,25,L.accent,"500",B-56)}),oe(a,"YOUR SCORES \xB7 THIS BROWSER",54,1091,30,j.blue,"700"),oe(a,"Play. Beat your best. Earn your place.",1160,1091,30,j.muted,"500"),l.needsUpdate=!0,v++;for(let L of p){let A=g.some(I=>I.medal>=L.tier);L.material.color.set(A?Wi[L.tier]:Wi[0]),L.material.emissive.set(A?Wi[L.tier]:0),L.material.emissiveIntensity=A?.09:0}}function T(){let M;try{M=globalThis.localStorage}catch{}let R=Cc(M,s.mollie.found.size,t()),L=JSON.stringify(R);if(L===b)return!1;let A=b!==null&&R.some((I,O)=>I.value!==null&&(g[O].value===null||I.id==="memory"&&I.pairs>g[O].pairs||(["golf","memory","rc"].includes(I.id)?I.value<g[O].value:I.value>g[O].value)||I.medal>g[O].medal));return g=R,b=L,A&&(C=2.5),m(),!0}function P(M){y-=M,y<=0&&(y=.75,T()),C=Math.max(0,C-M),d.color.set(C>0&&Math.sin(C*7)>0?9429443:16176260)}function _(){return T(),!r||!s.xrTeleport(r.view.x,0,r.view.z)?(n("The wall approach is blocked. Walk to the Unit 9 office divider."),!1):(s.xrFace?.(r.heading),n("Welcome to the wall of fame! Your personal records update as you play."),!0)}return T(),{root:i,panel:c,cups:p,site:r,refresh:T,tick:P,visit:_,get records(){return g},get draws(){return v},get celebrating(){return C>0}}}function Gp(s,e,t,n=.48){if(s.z<=t.z||e.z>t.z)return!1;let i=(s.z-t.z)/(s.z-e.z);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.y+(e.y-s.y)*i-t.y)<n}function Hp(s,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let r=-.25-1.1/Math.max(.5,i);return n.y+=(r-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:s.clone().addScaledVector(n,t),v:n}}function Pc(s,e,t,n){let i=new pe;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let r=new pe;i.add(r);let o=z=>new Se({color:z,roughness:.7,side:nt}),a=new Oe;a.setAttribute("position",new Re([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new me(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new Ct(new Oe().setFromPoints([new x(0,0,-.28),new x(0,.056,.1)]),new Et({color:7576243}));l.add(c);let u=s.colliders.map(z=>new Ve(new x(z.min.x,z.min.y,z.min.z),new x(z.max.x,z.max.y,z.max.z)).expandByScalar(.06)),h=document.createElement("canvas");h.width=1024,h.height=640;let f=h.getContext("2d"),d=new Ie(h);d.colorSpace=Ae;let p=new me(new Le(1.6,1),new ve({map:d}));p.name="Paper-plane scoreboard",i.add(p);let g=!1,b=!1,y=null,C=null,v=[],m=[],T=0,P=!1,_=!1,M=!1,R=0,L=0,A=0,I=0,O="Five planes. Aim through the hoops!";try{A=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function B(){St(f,1024,640),oe(f,"PAPER-PLANE CHALLENGE",35,68,44,j.gold),oe(f,`${L} points`,35,190,72),oe(f,`BEST ${A}`,660,180,35,j.mint),oe(f,`${R} / 5 planes`,35,280,44),oe(f,`Longest glide: ${I.toFixed(1)} m`,35,349,32,j.mint),oe(f,O,35,428,29,j.ink,"600",950),oe(f,R===5&&!y?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),oe(f,"10 points per hoop \xB7 Y: pause/menu",35,590,27,j.muted),d.needsUpdate=!0}function F(){for(let z of[3,2,1.5,4,5])for(let G of[-30,-29,-28]){let S=!0;for(let V=-1;V<=1;V+=.5)for(let q=0;q<=7.8;q+=.4)(s.blocked(z+V,G+q,0)||Math.abs(s.groundAt(z+V,G+q,.1))>.1)&&(S=!1);if(S)return new x(z,0,G)}return null}function U(){for(let S of[...r.children])S.traverse(V=>{V.geometry?.dispose(),V.material?.dispose()}),r.remove(S);v=[];for(let S=0;S<3;S++){let V=C.clone().add(new x(0,1.5-S*.22,5-S*1.8)),q=new me(new Rt(.6,.035,12,48),o(S===0?"#f6d484":S===1?"#8fe1c3":"#8bc8f3"));q.position.copy(V),r.add(q),v.push({center:V,mesh:q});let Z=new me(new ze(.018,.018,V.y,8),o("#36576a"));Z.position.set(V.x-.64,V.y/2,V.z),r.add(Z)}p.position.copy(C).add(new x(0,2.3,-.5));let z=Ut("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);z.position.copy(C).add(new x(0,3.18,-.5)),r.add(z);for(let S of[2,5]){let V=Kn(1.3);V.position.copy(C).add(new x(0,4.2,S)),r.add(V)}let G=new me(new Me(2,.02,.045),o("#f6d484"));G.position.copy(C).add(new x(0,.02,6.7)),r.add(G)}function H(){R=L=I=0,y=null,b=!1,m=[],l.visible=!1,O="Five planes. Aim through the hoops!",v.forEach(z=>z.mesh.material.emissive?.set(0)),B()}function w(){let z=F();return!z||!s.xrTeleport(z.x,0,z.z+7.4)?!1:(C=z,U(),g=i.visible=!0,s.xrFace?.(0),P=!1,_=!0,H(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function $(){g=i.visible=b=l.visible=!1,y=null,m=[],P=!1}function D(){b=!1,m=[],P=!1,_=!0,y||(l.visible=!1)}function E(z){if(y){if(I=Math.max(I,y.distance),O=`${z} \xB7 ${y.hits.size} hoops \xB7 ${y.distance.toFixed(1)} m`,y=null,R===5){A=Math.max(A,L);try{localStorage.setItem("tfj-planes-best-v1",String(A))}catch{}t(`Paper planes complete! ${L} points. A to replay.`)}B()}}function N(z,G){if(!g)return;let{dt:S,right:V,controller:q}=z;T+=S;let Z=!!V?.gamepad?.buttons[0]?.pressed,Y=!!V?.gamepad?.buttons[4]?.pressed;if(G){D();return}Z||(P=!0),Y&&!M&&R===5&&!y&&H(),M=Y;let k=q&&q.visible!==!1?q.getWorldPosition(new x):null;if(k&&Z&&!_&&P&&!y&&R<5){let ne=s.stats();Math.abs(ne.x-C.x)>1.2||ne.z<C.z+6.7||ne.z>C.z+8.2||ne.y>.15?t("Return behind the paper-plane launch line."):(b=!0,m=[],l.visible=!0)}if(b){if(!k)D();else if(l.position.copy(k),l.quaternion.copy(q.getWorldQuaternion(new be)),m.push({time:T,p:k.clone()}),m=m.filter(ne=>T-ne.time<.14),!Z&&_){let ne=m.find(re=>T-re.time>=.04),J=ne?k.clone().sub(ne.p).divideScalar(T-ne.time).clampLength(0,10):new x;b=!1,J.length()<.8||J.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(R++,y={p:k.clone(),v:J,start:k.clone(),distance:0,age:0,hits:new Set},v.forEach(re=>re.mesh.material.emissive?.set(0)),O="In flight\u2026",B())}}if(y){let ne=Math.max(1,Math.ceil(S/.012)),J=S/ne;for(let re=0;re<ne&&y;re++){let X=y,ie=Hp(X.p,X.v,J),Q=ie.p.clone().sub(X.p),ae=Q.length(),te=new tt(X.p,Q.normalize()),ge=new x,fe=!1;for(let we of u)if(we.containsPoint(X.p)||te.intersectBox(we,ge)&&ge.distanceTo(X.p)<=ae){fe=!0;break}if(fe){E("Hit scenery");break}for(let we=0;we<v.length;we++)!X.hits.has(we)&&Gp(X.p,ie.p,v[we].center)&&(X.hits.add(we),L+=10,v[we].mesh.material.emissive.set("#3ca58b"),n(.45),B());X.p.copy(ie.p),X.v.copy(ie.v),X.age+=J,X.distance=Math.max(X.distance,Math.hypot(X.p.x-X.start.x,X.p.z-X.start.z)),l.position.copy(X.p),l.quaternion.setFromUnitVectors(new x(0,0,-1),X.v.clone().normalize()),l.rotateZ(Math.sin(X.age*3)*.04),X.p.y<.07?(l.position.y=.07,l.rotation.x=0,E("Landed")):(X.age>10||X.distance>20)&&E("Glide complete")}}_=Z}return{root:i,get best(){return A},start:w,stop:$,cancel:D,tick:N,get held(){return b},get flight(){return y},get origin(){return C},get rings(){return v},get throws(){return R},get score(){return L},get longest(){return I}}}function Ic(s,e){let t=new pe;t.name="Bowling supporters",e.add(t);let n=[],i=0,r=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(g){t.visible=!0,i=0,r=0;for(let y of n)y.group.visible=!1,y.shadow&&(y.shadow.visible=!1);let b=[];for(let y of[5.2,3.8,6])for(let C of[-1.9,1.9,-2.4,2.4]){if(b.length===4)break;let v=g.clone().add(new x(C,0,y));s.blocked(v.x,v.z,0)||Math.abs(s.groundAt(v.x,v.z,.1))>.1||b.some(m=>m.distanceTo(v)<1)||b.push(v)}for(let y=0;y<b.length;y++){if(!n[y]){let m=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][y]});m.group.name=`Bowling supporter ${y+1}`,m.group.scale.setScalar(.91+y*.025),m.bones=Object.fromEntries(l.map(T=>[T,m.model.getObjectByName(T)])),m.rest=Object.fromEntries(l.map(T=>[T,m.bones[T]?.quaternion.clone()])),m.shadow=on(.9,.6),t.add(m.shadow,m.group),n.push(m)}let C=n[y];C.group.visible=!0,C.group.position.copy(b[y]),C.base=b[y].clone(),C.shadow.visible=!0,C.shadow.position.copy(b[y]).add(new x(0,.012,0));let v=s.stats();C.group.rotation.y=Math.atan2(v.x-b[y].x,v.z-b[y].z),C.gesture="idle",C.target=new x(v.x,v.y+1.6,v.z),C.mixer.setTime(y*.73)}}function u(g=!1){i=g?3.6:2.2,o=g,a=!1}function h(){i=1.8,o=!1,a=!0}function f(g,b,y){let C=g.bones[b];if(!C)return;let v=C.parent.getWorldQuaternion(new be),m=C.getWorldQuaternion(new be),T=new x(0,1,0).applyQuaternion(m),P=new x(...y).normalize().applyQuaternion(g.group.getWorldQuaternion(new be));C.quaternion.copy(v.invert().multiply(new be().setFromUnitVectors(T,P).multiply(m))),g.model.updateMatrixWorld(!0)}function d(g,b,y={}){if(b||!t.visible)return;r+=g,i=Math.max(0,i-g);let C=s.stats();n.forEach((v,m)=>{if(!v.group.visible)return;let T=r+m*1.4,P=(o?3.6:a?1.8:2.2)-i,_=i>0&&P>=m*.11,M=!y.ball&&!y.held&&!i&&Math.sin(T*.43)>.85,R=n[(m+1)%n.length],L=y.ball||y.eye||new x(C.x,C.y+1.6,C.z);M&&R?.group.visible&&(L=R.base.clone().add(new x(0,1.5,0))),_&&(L=y.eye||new x(C.x,C.y+1.6,C.z)),v.target.copy(L);let A=Math.atan2(L.x-v.base.x,L.z-v.base.z);v.group.rotation.y+=Math.atan2(Math.sin(A-v.group.rotation.y),Math.cos(A-v.group.rotation.y))*Math.min(1,g*2.8);let I=_?a?"wave":["clap","arms-up","fist-pump","wave"][m%4]:y.held?"anticipate":M?"chat":"idle";v.gesture=I;for(let B of l)v.bones[B]&&v.bones[B].quaternion.copy(v.rest[B]);if(v.animate(g,I==="wave"?"wave":"idle"),v.group.position.set(v.base.x,v.base.y+(_?Math.max(0,Math.sin(T*7))*(o?.11:.055):0),v.base.z),v.group.rotation.z=Math.sin(T*1.2)*.012,v.shadow.material.opacity=1-(v.group.position.y-v.base.y)*3,v.model.updateMatrixWorld(!0),I==="clap"){let B=Math.sin(T*13)*.25;f(v,"UpperArmL",[-.25,-.3,.65]),f(v,"UpperArmR",[.25,-.3,.65]),f(v,"LowerArmL",[.4+B,.35,.4]),f(v,"LowerArmR",[-.4-B,.35,.4])}if(I==="arms-up"&&(f(v,"UpperArmL",[-.65,.9,0]),f(v,"UpperArmR",[.65,.9,0]),f(v,"LowerArmL",[.15,1,.12]),f(v,"LowerArmR",[-.15,1,.12])),I==="fist-pump"){let B=.65+Math.sin(T*9)*.3;f(v,"UpperArmR",[.5,B,.3]),f(v,"LowerArmR",[-.2,1,.2])}I==="anticipate"&&(f(v,"UpperArmL",[-.2,-.6,.35]),f(v,"UpperArmR",[.2,-.6,.35]),f(v,"LowerArmL",[.3,.1,.6]),f(v,"LowerArmR",[-.3,.1,.6]));let O=v.bones.Head;if(O){let B=L.x-v.base.x,F=L.z-v.base.z,U=Math.atan2(Math.sin(A-v.group.rotation.y),Math.cos(A-v.group.rotation.y)),H=Math.atan2(L.y-(v.base.y+1.6),Math.hypot(B,F));O.rotateY(Ge.clamp(U,-.65,.65)),O.rotateX(-Ge.clamp(H,-.4,.3)+Math.sin(T*(M?3:1.1))*.035)}v.bones.Chest&&v.bones.Chest.rotateX(y.held?.065:Math.sin(T*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:u,encourage:h,tick:d,stop:p,get cheering(){return i>0},get people(){return n.filter(g=>g.group.visible)}}}function Lc(s,e,t,n,i=()=>{}){let r=new pe;r.name="Warehouse bowling",r.visible=!1,e.add(r);let o=Ic(s,r),a=K=>new Se({color:K,roughness:.55}),l=(K,W,se,ue,ee,de=r)=>{let Pe=new me(K,W);return Pe.position.set(se,ue,ee),de.add(Pe),Pe},c=new pe;r.add(c);let u=null,h=[],f=!1,d=!1,p=null,g=[],b=0,y=!1,C=!1,v=!1,m=0,T=0,P=[],_=Array.from({length:10},()=>[]),M=0,R=0,L=0,A=!1;try{L=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let I=l(new qe(.14,24,20),a("#5147b5"),0,.17,0);for(let[K,W,se]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new qe(.023,8,8),a("#12162d"),K,W,se,I);I.visible=!1;let O=document.createElement("canvas");O.width=1536,O.height=1024;let B=O.getContext("2d"),F=new Ie(O);F.colorSpace=Ae;let U=l(new Le(3.2,3.2*2/3),new ve({map:F}),0,2,0);U.name="Warehouse bowling scoreboard";let H=()=>P.reduce((K,W)=>K+W,0)+M,w=new pe;w.name="Bowling scoring computer",r.add(w);let $=l(new Le(.96,.64),new ve({map:F}),0,0,.046,w);$.name="Bowling computer screen",l(new Me(1.02,.7,.08),a("#101a26"),0,0,0,w);let D=120,E=new Float32Array(D*3),N=new Float32Array(D*3),z=[],G=new Oe;G.setAttribute("position",new gt(E,3)),G.setAttribute("color",new gt(N,3));let S=new Bi({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:ca}),V=new fs(G,S);V.name="Strike fireworks",V.visible=!1,V.frustumCulled=!1,r.add(V);let q=0,Z=0;function Y(){i(!0),o.cheer(!0),Z++,q=2.6,V.visible=!0,S.opacity=1;for(let K=0;K<D;K++){let W=K%3,se=K*2.39996,ue=.65+K%11*.08,ee=Math.sqrt(1-(K%17/8-1)**2);E.set([u.x+(W-1)*.65,1.35+W*.22,u.z+1.2],K*3),z[K]=new x(Math.cos(se)*ee*ue,.7+Math.abs(Math.sin(se))*1.2,Math.sin(se)*ee*ue);let de=new Be([16765286,7401417,16745144,9026559][K%4]);N.set([de.r,de.g,de.b],K*3)}G.attributes.position.needsUpdate=!0,G.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function k(K){if(!(q<=0)){q=Math.max(0,q-K),V.visible=q>0,S.opacity=Math.min(1,q/.9);for(let W=0;W<D;W++){let se=z[W];se.y-=1.5*K,E[W*3]+=se.x*K,E[W*3+1]+=se.y*K,E[W*3+2]+=se.z*K}G.attributes.position.needsUpdate=!0}}function ne(){St(B,1536,1024),oe(B,"TFJ BOWL  /  LANE 01",48,72,38,j.blue,"700"),oe(B,"WAREHOUSE BOWLING",48,143,61,j.ink,"700"),Ke(B,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:j.mint,radius:22}),oe(B,"TOTAL PINS",1120,86,34,j.mint),oe(B,String(H()),1120,237,125,j.ink,"700"),oe(B,"/ 100",1320,233,42,j.muted),oe(B,m===10?"ROUND COMPLETE":`FRAME ${m+1}  \u2022  BOWL ${T+1}`,48,230,51,j.gold,"700");let K=0;for(let W=0;W<10;W++){let se=48+W%5*288,ue=290+Math.floor(W/5)*244,ee=W===m&&m<10,de=_[W],Pe=de.length>0;Ke(B,se,ue,272,225,{top:ee?"#225568":"#142e43",bottom:"#0b2032",stroke:ee?j.gold:"#55758c",radius:14}),oe(B,String(W+1),se+18,ue+45,37,ee?j.gold:j.muted,"700");let xe=de[0]===10?"X":de[0]===0?"\u2013":de[0]??"",De=de.length>1?de[0]+de[1]===10?"/":de[1]===0?"\u2013":de[1]:"";B.strokeStyle="#5c7b90",B.lineWidth=2,B.strokeRect(se+78,ue+8,89,77),B.strokeRect(se+167,ue+8,97,77),oe(B,String(xe),se+96,ue+67,53,j.ink,"700"),oe(B,String(De),se+190,ue+67,53,j.ink,"700"),K+=W<P.length?P[W]:W===m?M:0,oe(B,Pe?String(K):"\u2014",se+30,ue+189,89,ee?j.gold:j.ink,"700")}oe(B,`PERSONAL BEST  ${L} / 100`,48,837,38,j.mint,"700"),oe(B,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,j.muted,"600"),oe(B,m===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,j.gold,"700"),oe(B,"Y  MENU",1270,957,34,j.ink,"700"),F.needsUpdate=!0}function J(){for(let K of[3,2,1.5,4,5,6])for(let W of[-30,-29,-28,-27]){let se=!0;for(let ue=-1.1;ue<=1.1;ue+=.55)for(let ee=0;ee<=7.8;ee+=.3)(s.blocked(K+ue,W+ee,0)||Math.abs(s.groundAt(K+ue,W+ee,.1))>.1)&&(se=!1);if(se)return new x(K,0,W)}return null}function re(){for(let ee of[...c.children])ee.traverse(de=>{de.geometry?.dispose(),de.material&&de.material.dispose()}),c.remove(ee);c.position.copy(u),h=[],l(new Me(2.1,.025,7.3),Gi(),0,.018,3.25,c);for(let ee=-4;ee<=4;ee++)l(new Me(.009,.003,7.3),a("#9c805f"),ee*.22,.032,3.25,c);for(let ee of[-1.15,1.15])l(new Me(.15,.05,7.3),a("#223747"),ee,.02,3.25,c);for(let ee of[-1.045,1.045]){let de=l(new Me(.028,.025,7.3),new Se({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),ee,.045,3.25,c);de.name="Illuminated bowling edge"}let K=Ut("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",j.gold,2.8);K.position.set(0,4.38,2.5),c.add(K);for(let ee of[1,4.8]){let de=Kn(1.8);de.position.set(0,4.8,ee),c.add(de)}l(new Me(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new Me(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let ee of[-.5,0,.5]){let de=l(new sn(.065,.16,3),a("#30485a"),ee,.04,4.7,c);de.rotation.x=-Math.PI/2}let W=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([ee,de])=>new he(ee,de)),se=0;for(let ee=0;ee<4;ee++)for(let de=0;de<=ee;de++){let Pe=on(.29,.27);Pe.position.set((de-ee/2)*.3,.034,1.1-ee*.29),c.add(Pe);let xe=new pe;xe.position.set((de-ee/2)*.3,.248,1.1-ee*.29),c.add(xe),l(new yi(W,20),a("#f8f6ea"),0,-.215,0,xe),l(new ze(.035,.039,.045,16),a("#dc4459"),0,.07,0,xe),h.push({mesh:xe,start:xe.position.clone(),v:new x,spin:new x,shadow:Pe,down:!1,id:se++})}U.position.copy(u).add(new x(0,2.95,2.5)),l(new Me(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let ee of[-1.62,1.62])l(new Me(.06,3.92,.06),a("#223747"),ee,1.96,2.42,c);let ue=[-1.4,1.4].find(ee=>!s.blocked(u.x+ee,u.z+7.1,0))??-1.2;w.position.copy(u).add(new x(ue,1.27,7.1)),w.lookAt(u.clone().add(new x(0,1.68,7.5))),l(new Me(.16,1.12,.16),a("#223747"),ue,.56,7.1,c),l(new Me(.65,.06,.48),a("#101a26"),ue,.03,7.1,c)}function X(){for(let K of h)K.mesh.position.copy(K.start),K.mesh.rotation.set(0,0,0),K.mesh.visible=!0,K.shadow.visible=!0,K.shadow.position.set(K.start.x,.034,K.start.z),K.shadow.material.opacity=1,K.down=!1,K.v.set(0,0,0),K.spin.set(0,0,0)}function ie(){q=0,V.visible=!1,m=T=M=0,P=[],_=Array.from({length:10},()=>[]),p=null,R=0,d=!1,I.visible=!1,X(),ne()}function Q(){let K=J();return!K||!s.xrTeleport(K.x,0,K.z+7.4)?!1:(u=K,re(),o.setup(u),f=r.visible=!0,s.xrFace?.(0),ie(),C=!1,y=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function ae(){o.stop(),q=0,V.visible=!1,f=r.visible=d=I.visible=!1,p=null,R=0,g=[],C=!1}function te(){d=!1,g=[],C=!1,y=!0,p||(I.visible=!1)}function ge(K,W){A||(A=!0,o.cheer(!1));let se=W.length();K.down=!0,K.v.add(W).clampLength(0,7),K.v.y=Math.max(K.v.y,Math.min(3.4,.7+se*.42)),K.spin.add(new x(W.z*2.8,(K.id%2?1:-1)*se*.8,-W.x*2.8)).clampLength(0,18)}function fe(K){let W=new x,se=new x,ue=new be;for(let ee of h)if(ee.down&&ee.mesh.visible){ee.v.y-=9.81*K,ee.mesh.position.addScaledVector(ee.v,K);let de=ee.spin.length();de>.001&&(se.copy(ee.spin).divideScalar(de),ue.setFromAxisAngle(se,de*K),ee.mesh.quaternion.premultiply(ue).normalize()),W.set(0,1,0).applyQuaternion(ee.mesh.quaternion);let Pe=.033+.08+.135*Math.abs(W.y);ee.mesh.position.y<Pe?(ee.mesh.position.y=Pe,ee.v.y=ee.v.y<-.65?-ee.v.y*.32:0,ee.v.x*=Math.exp(-4*K),ee.v.z*=Math.exp(-4*K),ee.spin.multiplyScalar(Math.exp(-5*K))):ee.spin.multiplyScalar(Math.exp(-.3*K));for(let[xe,De,Ne]of[["x",-1.02,1.02],["z",-.35,2.2]])(ee.mesh.position[xe]<De||ee.mesh.position[xe]>Ne)&&(ee.mesh.position[xe]=Ge.clamp(ee.mesh.position[xe],De,Ne),ee.v[xe]*=-.38)}for(let ee=0;ee<h.length;ee++)for(let de=ee+1;de<h.length;de++){let Pe=h[ee],xe=h[de];if(!Pe.mesh.visible||!xe.mesh.visible||!Pe.down&&!xe.down)continue;let De=xe.mesh.position.clone().sub(Pe.mesh.position),Ne=De.length();if(Ne>=.29||Ne<.001)continue;let Ee=De.divideScalar(Ne),ce=Pe.v.clone().sub(xe.v).dot(Ee);if(ce>.18){let Ze=Ee.clone().multiplyScalar(ce*.7);xe.down?xe.v.add(Ze):ge(xe,Ze),Pe.down?Pe.v.sub(Ze):ge(Pe,Ze.clone().negate()),Pe.spin.x+=Ee.z*ce,xe.spin.z-=Ee.x*ce}let Ye=.29-Ne;Pe.down&&Pe.mesh.position.addScaledVector(Ee,-Ye*.5),xe.down&&xe.mesh.position.addScaledVector(Ee,Ye*.5)}}function we(){p=null,I.visible=!1;let K=h.filter(se=>se.down).length,W=K-M;if(K===10&&T===0&&Y(),_[m].push(W),M=K,T++,W===0&&o.encourage(),W>0&&!(K===10&&T===1)&&(o.cheer(K===10),i(K===10)),n(K===10?.8:.25),K===10||T===2){let se=K===10?T===1?"Strike!":"Spare!":`${K} pins.`;if(P.push(K),m++,T=M=0,t(m===10?`Bowling complete! ${H()} / 100 pins.`:`${se} Next frame.`),m===10){L=Math.max(L,H());try{localStorage.setItem("tfj-bowling-best-10-v1",String(L))}catch{}}else X()}else{for(let se of h)se.down&&(se.mesh.visible=!1,se.shadow.visible=!1);t(`${W} pins! One more bowl this frame.`)}ne()}function _e(K,W){if(!f)return;let{dt:se,right:ue,controller:ee}=K;b+=se,o.tick(se,W,{eye:K.eye,held:d,ball:p?I.position:null});let de=!!ue?.gamepad?.buttons[0]?.pressed,Pe=!!ue?.gamepad?.buttons[4]?.pressed;if(W){te();return}k(se),de||(C=!0),Pe&&!v&&m===10&&ie(),v=Pe;let xe=ee&&ee.visible!==!1?ee.getWorldPosition(new x):null;if(de&&!y&&C&&!p&&!R&&m<10&&xe){let De=s.stats();Math.abs(De.x-u.x)>1.1||De.z<u.z+6.7||De.z>u.z+8.2||De.y>.15?t("Return behind the yellow bowling line."):(d=!0,g=[],I.visible=!0)}if(d){if(!xe)te();else if(I.position.copy(xe),g.push({time:b,p:xe.clone()}),g=g.filter(De=>b-De.time<.14),!de&&y){let De=g.find(Ee=>b-Ee.time>=.04),Ne=De?xe.clone().sub(De.p).divideScalar(b-De.time).clampLength(0,10):new x;d=!1,Ne.length()<.6||Ne.z>-.25?(I.visible=!1,t("Swing towards the pins before releasing.")):(A=!1,p={p:xe.clone().sub(u),v:Ne,age:0,gutter:!1})}}if(p||R){let De=Math.max(1,Math.ceil(se/.008)),Ne=se/De;for(let Ee=0;Ee<De;Ee++){if(p){let ce=p;ce.age+=Ne,ce.v.y-=9.81*Ne,ce.p.addScaledVector(ce.v,Ne),ce.p.y<.174&&(ce.p.y=.174,ce.v.y=Math.abs(ce.v.y)>.8?Math.abs(ce.v.y)*.18:0,ce.v.x*=Math.exp(-.25*Ne),ce.v.z*=Math.exp(-.25*Ne)),Math.abs(ce.p.x)>1&&(ce.gutter=!0,ce.p.x=Math.sign(ce.p.x)*1.15,ce.v.x=0),I.position.copy(ce.p).add(u),I.rotation.x+=ce.v.z*Ne/.14;for(let Ye of h)if(!Ye.down&&!ce.gutter&&ce.p.y<.6){let Ze=Ye.mesh.position.x-ce.p.x,mt=Ye.mesh.position.z-ce.p.z;Math.hypot(Ze,mt)<.23&&(ge(Ye,new x(ce.v.x,0,ce.v.z).multiplyScalar(.65)),ce.v.x*=.8,ce.v.z*=.84)}(ce.p.z<-.6||ce.age>7||Math.hypot(ce.v.x,ce.v.z)<.15)&&(p=null,R=2.6)}fe(Ne);for(let ce of h)ce.shadow.position.x=ce.mesh.position.x,ce.shadow.position.z=ce.mesh.position.z,ce.shadow.material.opacity=Ge.clamp(1-(ce.mesh.position.y-.25),.15,1);if(R&&(R=Math.max(0,R-Ne),!R)){we();break}}}y=de}return{root:r,get best(){return L},crowd:o,fireworks:V,get celebrations(){return Z},start:Q,stop:ae,cancel:te,tick:_e,get held(){return d},get flight(){return p},get pins(){return h},get origin(){return u},get frame(){return m},get roll(){return T},get total(){return H()},get totals(){return P},get frameRolls(){return _}}}function Wp(s,e,t,n=.34){if(s.y<=t.y||e.y>t.y)return!1;let i=(s.y-t.y)/(s.y-e.y);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.z+(e.z-s.z)*i-t.z)<n}function Dc(s,e,t,n,i){let r=s.colliders.map(Y=>new Ve(new x(Y.min.x,Y.min.y,Y.min.z),new x(Y.max.x,Y.max.y,Y.max.z))),o=new pe;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=Y=>new Se({color:Y,roughness:.6}),l=(Y,k,ne,J=o)=>{let re=new me(Y,k);return re.position.copy(ne),J.add(re),re},c=new x,u=null,h=!1,f=!1,d=!1,p=null,g=[],b=0,y=!1,C=!1,v=0,m=0,T=0,P=0,_=!1;try{T=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let M=s.mollie.balls[0].ball.clone();M.scale.setScalar(.48),M.visible=!1,e.add(M);let R=l(new qe(.065,16,12),a("#ee528c"),new x,e);R.visible=!1,l(new qe(.03,8,6),a("#6ac68d"),new x(0,.06,0),R).scale.set(1,.4,1.7);let A=new ft;A.moveTo(0,.02),A.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),A.bezierCurveTo(.23,-.03,.16,.18,0,.02);let I=new me(new Vt(A),new ve({color:16742315,side:nt,transparent:!0}));I.visible=!1,e.add(I);let O=0,B=0,F=0,U=document.createElement("canvas");U.width=768,U.height=384;let H=U.getContext("2d"),w=new Ie(U);w.colorSpace=Ae;let $=l(new Le(1.5,.75),new ve({map:w}),new x);function D(){St(H,768,384),oe(H,"POK\xC9 BALL BASKETBALL",30,62,38,j.gold),oe(H,`${m} baskets \xB7 ${v}/10 throws`,30,139,46),oe(H,`Best: ${T} baskets`,30,204,32,j.mint),oe(H,v>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),oe(H,"Y: games menu \xB7 B: leave",30,337,25,j.muted),w.needsUpdate=!0}function E(){for(let[Y,k]of[[-4,8],[5,9],[-8,8],[12,8]]){let ne=!0;for(let J=-1.5;J<=1.5;J+=.5)for(let re=-2;re<=2;re+=.5)(s.blocked(Y+J,k+re,0)||Math.abs(s.groundAt(Y+J,k+re,.1))>.1)&&(ne=!1);if(ne)return new x(Y,0,k)}return null}function N(Y){if(c.set(Y.x,2.35,Y.z-1.5),$.position.set(Y.x+1.35,2,Y.z-1.75),o.children.length>1)for(let X of[...o.children])X!==$&&(o.remove(X),X.traverse(ie=>{ie.geometry?.dispose(),ie.material?.dispose()}));let k=Ut("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);k.position.set(Y.x,3.7,Y.z-1.93),o.add(k);let ne=Kn(1.1);ne.position.set(Y.x,4.1,Y.z-1.5),o.add(ne),l(new Me(.12,4.15,.12),a("#173d56"),new x(Y.x,2.075,Y.z-2)),l(new Me(.08,.08,.55),a("#173d56"),new x(Y.x,4.1,Y.z-1.75)),l(new Me(1.5,.95,.07),a("#e4f1f2"),new x(Y.x,2.65,Y.z-1.93));let J=l(new Rt(.42,.025,10,48),a("#f5ab44"),c);J.rotation.x=Math.PI/2;for(let X=0;X<12;X++){let ie=X/12*Math.PI*2,Q=new x(c.x+Math.cos(ie)*.41,c.y,c.z+Math.sin(ie)*.41),ae=new x(c.x+Math.cos(ie+.2)*.23,c.y-.48,c.z+Math.sin(ie+.2)*.23),te=new Ct(new Oe().setFromPoints([Q,ae]),new Et({color:16777215}));o.add(te)}l(new Me(.06,2.4,.06),a("#173d56"),new x(Y.x+1.35,1.2,Y.z-1.78)),l(new Me(1.56,.81,.045),a("#122538"),new x(Y.x+1.35,2,Y.z-1.78));let re=l(new Me(2,.015,.04),a("#f6d484"),new x(Y.x,.012,Y.z+1.45))}function z(Y){if(G(),Y==="friend")return f=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let k=E();return!k||!s.xrTeleport(k.x,0,k.z+1.9)?!1:(u=k,N(k),s.xrFace?.(0),h=o.visible=!0,v=m=0,D(),!0)}function G(){h=f=d=!1,o.visible=M.visible=R.visible=I.visible=!1,p=null,g=[],C=!1,y=!1,O=0}function S(){d=!1,M.visible=R.visible=!1,g=[],C=!1,y=!0}function V(){if(p=null,M.visible=!1,v===10){T=Math.max(T,m);try{localStorage.setItem("tfj-basket-best",String(T))}catch{}n(`Basketball complete! ${m} baskets from 10 throws.`)}D()}function q(Y,k){t.react(k),O=1.5,I.visible=!0,P=2,i(.6),n(Y)}function Z(Y,k){let{dt:ne,eye:J,controller:re,right:X,leftController:ie}=Y;b+=ne,P=Math.max(0,P-ne);let Q=!!X?.gamepad?.buttons[0]?.pressed,ae=!!X?.gamepad?.buttons[4]?.pressed;if(k){S(),I.visible=!1;return}Q||(C=!0);let te=re?.visible!==!1&&re?re.getWorldPosition(new x):null;if(f){if(t.group.updateMatrixWorld(!0),R.visible=!!te&&Q&&C,R.visible){R.position.copy(te);let fe=t.group.localToWorld(new x(0,.43,.4));!P&&R.position.distanceTo(fe)<.22&&(B++,q(`Yum! Jigglypuff loved berry ${B}.`,"feed"),C=!1,R.visible=!1)}t.group.updateMatrixWorld(!0);let ge=t.group.localToWorld(new x(.46,.58,.03));for(let fe of[re,ie])if(fe&&fe.visible!==!1&&!Q&&!P&&fe.getWorldPosition(new x).distanceTo(ge)<.24){F++,q(`High-five! ${F} happy high-fives.`,"five");break}}else R.visible=!1;if(O>0?(O-=ne,I.visible=!0,I.position.copy(t.group.position).add(new x(0,1.3+(1.5-O)*.22,0)),I.lookAt(J),I.material.opacity=Math.min(1,O*2)):I.visible=!1,!h){y=Q;return}if(ae&&!_&&v===10&&!p&&(v=m=0,D()),_=ae,te&&Q&&!y&&C&&!p&&v<10&&(d=!0,g=[],M.visible=!0),d){if(!te)S();else if(M.position.copy(te),g.push({time:b,p:te.clone()}),g=g.filter(ge=>b-ge.time<.14),!Q&&y){let ge=g.find(we=>b-we.time>=.04),fe=ge?te.clone().sub(ge.p).divideScalar(b-ge.time).clampLength(0,12):new x;d=!1,fe.length()<.6?(M.visible=!1,n("Swing your hand upwards, then release.")):(v++,p={p:te.clone(),v:fe,age:0,scored:!1},D())}}if(p){let ge=Math.max(1,Math.ceil(ne/.008)),fe=ne/ge;for(let we=0;we<ge&&p;we++){let _e=p,K=_e.p.clone().addScaledVector(_e.v,fe);K.y-=4.9*fe*fe,_e.v.y-=9.8*fe;let W=K.clone().sub(_e.p),se=W.length(),ue=new tt(_e.p,W.normalize()),ee=new x;if(r.some(xe=>!xe.containsPoint(_e.p)&&ue.intersectBox(xe,ee)&&ee.distanceTo(_e.p)<=se)){V();break}!_e.scored&&Wp(_e.p,K,c)&&(_e.scored=!0,m++,i(.8),D());let de=c.z-.4;(_e.p.z-de)*(K.z-de)<0&&Math.abs(K.x-c.x)<.8&&K.y>2.17&&K.y<3.15&&(K.z=de+Math.sign(_e.p.z-de)*.1,_e.v.z*=-.65);let Pe=Math.hypot(K.x-c.x,K.z-c.z);Math.abs(K.y-c.y)<.1&&Pe>.33&&Pe<.53&&(_e.v.x+=(K.x-c.x)*3,_e.v.z+=(K.z-c.z)*3,_e.v.y=Math.abs(_e.v.y)*.45,K.y=c.y+.11),_e.p.copy(K),_e.age+=fe,M.position.copy(K),M.rotation.x+=fe*5,(K.y<.09||_e.age>5)&&V()}}y=Q}return{root:o,get best(){return T},start:z,stop:G,cancel:S,tick:Z,get origin(){return u},get held(){return d},get shots(){return v},get score(){return m},get flight(){return p},get feeds(){return B},get fives(){return F},get berry(){return R},get hoop(){return c}}}function Uc(s,e,t){let n=new pe;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new pe;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d"),a=new Ie(r);a.colorSpace=Ae;let l=new me(new Le(1.75,.4375),new ve({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=Ut("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let u=s.colliders.map(U=>new Ve(new x(U.min.x,U.min.y,U.min.z),new x(U.max.x,U.max.y,U.max.z))),h=[],f=[],d=[],p=[],g=new Set,b=0,y=0,C=!1,v=!1,m=[],T=null,P={};try{P=$r(localStorage.getItem(Jr))}catch{}function _(){let U=f.length/2;if(!(v||b<U||b>=(P[U]??1/0))){P[U]=b;try{localStorage.setItem(Jr,JSON.stringify(P))}catch{}}}function M(){St(o,1024,256),oe(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,j.gold,"700"),oe(o,`${g.size/2} / ${f.length/2} pairs  \xB7  ${b} turns`,28,101,38,j.ink,"700"),oe(o,g.size===f.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,j.mint,"500"),oe(o,v?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,j.muted,"400"),a.needsUpdate=!0}function R(){for(let U of h)U.geometry.dispose(),U.material.dispose();h=[];for(let U of d)for(let H of U.material)H.userData.memoryOwned&&H.dispose();i.clear(),d=[],T=null}function L(){R();let U=[...s.mollie.found];v=U.length<2,v&&(U=[0,1,2,3]);for(let w=U.length-1;w>0;w--){let $=Math.floor(Math.random()*(w+1));[U[w],U[$]]=[U[$],U[w]]}U=U.slice(0,6),f=[...U,...U];for(let w=f.length-1;w>0;w--){let $=Math.floor(Math.random()*(w+1));[f[w],f[$]]=[f[$],f[w]]}p=[],g.clear(),b=y=0;let H=Math.ceil(f.length/4);d=f.map((w,$)=>{let D=s.mollie.cards[w].clone();D.userData={index:$},D.material=D.material.map(N=>{let z=new ve(N.map?{map:N.map}:{color:15258527});return z.userData.memoryOwned=!0,z}),D.position.set(($%4-1.5)*.43,((H-1)/2-Math.floor($/4))*.39,.012),D.rotation.set(0,Math.PI,0),D.scale.setScalar(.34/.62),D.visible=!0;let E=new me(new Le(.268,.36),new ve({color:2508378}));return E.position.copy(D.position),E.position.z=.003,h.push(E),i.add(E,D),D}),m=d.map(()=>Math.PI),M()}function A(){return s.xrTeleport(-21.8,0,-10.78)?(s.xrFace?.(0),C=n.visible=!0,L(),!0):!1}function I(){C=n.visible=!1,p=[],y=0}function O(U){return!C||y||!Number.isInteger(U)||U<0||U>=f.length||g.has(U)||p.includes(U)||g.size===f.length?!1:(p.push(U),m[U]=0,t(.18),p.length===2&&(b++,y=.85),M(),!0)}function B(U,H=!1){if(C){for(let w=0;w<d.length;w++)d[w].rotation.y=Ge.damp(d[w].rotation.y,m[w],16,U);if(!H&&y&&(y=Math.max(0,y-U),!y)){let[w,$]=p;f[w]===f[$]?(g.add(w),g.add($),h[w].material.color.set(9429443),h[$].material.color.set(9429443),t(.55),g.size===f.length&&_()):m[w]=m[$]=Math.PI,p=[],M()}}}function F(U){if(T!==null&&h[T]&&h[T].material.color.set(g.has(T)?9429443:2508378),T=null,!C||!U)return null;n.updateMatrixWorld(!0);let H=new En(U.position,U.direction,0,3.8).intersectObjects(d)[0];if(!H)return null;let w=new tt(U.position,U.direction),$=new x;for(let E of u)if(w.intersectBox(E,$)&&$.distanceTo(U.position)<H.distance-.025)return null;let D=H.object.userData.index;return T=D,g.has(D)||h[D].material.color.set(16176260),{point:H.point,action:()=>O(D)}}return{root:n,start:A,stop:I,reset:L,tick:B,point:F,select:O,get records(){return{...P}},get deck(){return f},get cards(){return d},get moves(){return b},get matched(){return g},get waiting(){return y},get active(){return C},get complete(){return C&&g.size===f.length},get practice(){return v}}}function Kr(){let s=new pe;s.name="Jigglypuff \xB7 3D";let e=v=>new Se({color:v,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),r=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(v,m,T,P=s)=>{let _=new me(v,m);return _.name=T,_.castShadow=_.receiveShadow=!0,P.add(_),_},c=(v,m,T,P,_,M,R,L,A=s)=>{let I=l(new qe(1,32,24),R,L,A);return I.position.set(v,m,T),I.scale.set(P,_,M),I};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let v of[-1,1]){let m=new pe;m.position.set(v*.27,.86,-.005),m.rotation.z=-v*.21,s.add(m);let T=new ft;T.moveTo(-.135,0),T.quadraticCurveTo(-.115,.16,-.025,.34),T.quadraticCurveTo(0,.39,.025,.34),T.quadraticCurveTo(.12,.13,.135,0),T.quadraticCurveTo(0,-.07,-.135,0);let P=l(new rn(T,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",m);P.position.z=-.04;let _=new ft;_.moveTo(-.085,.025),_.quadraticCurveTo(-.06,.16,0,.29),_.quadraticCurveTo(.06,.16,.085,.025),_.quadraticCurveTo(0,-.005,-.085,.025);let M=l(new Vt(_,16),i,"Dark inner ear",m);M.position.z=.047,c(v*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let u=[];for(let v of[-1,1]){let m=new pe;m.position.set(v*.172,.625,.347),m.rotation.y=v*.24,s.add(m),u.push(m),c(0,0,0,.123,.153,.053,r,"Eye white",m),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",m),c(0,-.003,.063,.042,.079,.01,a,"Pupil",m),c(-.025,.045,.077,.024,.033,.007,r,"Eye sparkle",m),c(.022,-.045,.075,.011,.015,.005,r,"Small sparkle",m)}((v,m,T,P)=>l(new Vi(new qn(v.map(_=>new x(..._))),40,m,8,!1),T,P))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let f=[];for(let v=0;v<=36;v++){let m=v/36,T=Math.PI-m*Math.PI*2,P=.126*(1-.88*m);f.push(new x(.018+Math.cos(T)*P,.961+Math.sin(T)*P,.295+.035*m))}let d=new Vi(new qn(f),72,.042,12,!1),p=d.attributes.position,g=new qn(f);for(let v=0;v<=72;v++){let m=g.getPointAt(v/72),T=1-.66*(v/72)**2;for(let P=0;P<=12;P++){let _=v*13+P,M=new x().fromBufferAttribute(p,_).sub(m).multiplyScalar(T).add(m);p.setXYZ(_,M.x,M.y,M.z)}}d.computeVertexNormals(),l(d,n,"Curled fringe");let b=[];for(let v of[-1,1]){let m=new pe;m.position.set(v*.37,.48,.015),m.rotation.z=v*.6,s.add(m),c(v*.075,0,0,.14,.075,.075,t,"Little arm",m),b.push(m)}let y=0;function C(v,m=!1){y+=v,s.position.y=Math.max(0,Math.sin(y*2.5))*.028;let T=y%4.4>4.2?.09:1;u.forEach(P=>P.scale.y=T),b[1].rotation.z=.6+(m?Math.sin(y*4)*.25:Math.sin(y*2)*.04)}return{group:s,animate:C}}function Nc(s,e){let t=Kr(),n=new pe;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,r=.52,o=[],a=null,l=!0,c=0,u=null,h=0,f=0,d="",p=(C,v)=>Math.hypot(C.x-v.x,C.z-v.z);function g(C,v){let m=new x(-v.z,0,v.x);for(let[T,P]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let _=C.x+v.x*T+m.x*P,M=C.z+v.z*T+m.z*P,R=s.groundAt(_,M,C.y+.2);if(Math.abs(R-C.y)<.35&&!s.blocked(_,M,R))return n.position.set(_,R,M),o=[],a=new x(C.x,C.y,C.z),c=0,u=null,h=.15,!0}return!1}function b(C,v,m,T=!1){C=Math.min(C,.05);let P=s.stats(),_=new x(P.x,P.y,P.z);if(m){n.visible=!1,l=!0,u=null;return}let M=new x(v.x,0,v.z).normalize();if(M.lengthSq()<.01&&M.set(0,0,-1),l||n.position.distanceTo(_)>8||a&&a.distanceTo(_)>3||p(n.position,_)<.9){if(!g(P,M)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(_)>.18)&&(o.push(_.clone()),a=_.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let R=T?1.05:i;h=Math.max(0,h-C);let L=p(n.position,_);if(!u&&h===0){let B=null,F=0;if(L<R?(B=n.position.clone().sub(_),B.y=0,B.normalize(),F=Math.min(.8,R+.2-L)):L>R+.35&&(o.length||T)&&(B=(T?_:o[0]).clone().sub(n.position),B.y=0,F=Math.min(.8,B.length(),L-R),B.normalize()),B&&F>.04){let U=n.position.clone(),H=U.clone().addScaledVector(B,F),w=!0,$=U.y;for(let D=1;D<=8;D++){let E=U.clone().lerp(H,D/8),N=s.groundAt(E.x,E.z,$+.22);if(Math.abs(N-$)>.35||s.blocked(E.x,E.z,N)||p(E,_)<Math.min(R,L)-.01){w=!1;break}$=N}H.y=$,w?(u={from:U,to:H,time:0},c=0):(c+=C,c>2.5&&g(P,M))}else c=0}let A=0,I=0;if(u){u.time+=C;let B=Math.min(1,u.time/r),F=u.from.clone().lerp(u.to,B),U=p(n.position,_);p(F,_)>=Math.min(R,U)-.001&&!s.blocked(F.x,F.z,F.y)&&n.position.copy(F),A=Math.sin(Math.PI*B)*.3,I=Math.sin(Math.PI*B)*.08,B===1&&(u=null,h=.14)}else h>0&&(I=-Math.sin(Math.PI*Math.min(1,h/.14))*.1);let O=Math.atan2(P.x-n.position.x,P.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(O-n.rotation.y),Math.cos(O-n.rotation.y))*Math.min(1,C*5),t.animate(C,L<3),t.group.position.y=A,t.group.scale.set(1-I*.5,1+I,1-I*.5),f>0){f=Math.max(0,f-C);let B=Math.abs(Math.sin(f*9));t.group.position.y+=B*(d==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(f*20)*.06}}function y(){l=!0,n.visible=!1,o=[],a=null,u=null}return{group:n,tick:b,summon:y,radius:i,react(C){f=1.3,d=C},get hopping(){return!!u},get trail(){return o},get hidden(){return l}}}function Fc(s,e,t){let n=new pe;n.name="Mollie\u2019s VR book",s.add(n),n.visible=!1;let i=new pe;n.add(i);let r=[],o=-1,a=null,l=!1,c=1,u=null,h=null,f=null,d=null,p=new be,g=new ve({color:16446169}),b=new ve({color:1455692}),y=new ve({color:13944999}),C=new ve({color:15386989});function v(w,$,D,E,N,z,G=0){let S=new me(new Me(w,$,D),E);return S.position.set(N,z,G),i.add(S),S}function m(w,$,D,E,N,z=44,G=null,S="#17364b",V=null){let q=document.createElement("canvas");q.width=1024,q.height=Math.round(1024*D/$);let Z=q.getContext("2d"),Y;function k(re=!1){if(Z.clearRect(0,0,q.width,q.height),G){let X=G==="#eac96d";Ke(Z,4,4,1016,q.height-8,{top:X?"#ffe8ac":re?"#365e76":"#24475f",bottom:X?"#d9b66c":"#142e43",stroke:re?"#ffe09a":X?"#fff0c7":"#597b91",radius:Math.min(28,q.height/5)})}Z.textAlign="center",Z.textBaseline="middle",Z.fillStyle=G==="#eac96d"?"#17364b":re?j.gold:S,Z.font=`bold ${z}px Arial`,w.forEach((X,ie)=>Z.fillText(X,512,q.height*(ie+1)/(w.length+1),944)),Y&&(Y.needsUpdate=!0)}k(),Y=new Ie(q),Y.colorSpace=Ae;let ne=new ve({map:Y,transparent:!0,side:nt}),J=new me(new Le($,D),ne);return J.position.set(E,N,.06),i.add(J),V&&(J.userData.action=V,J.userData.paint=k,r.push(J)),J}function T(){let w=document.createElement("canvas");w.width=w.height=256;let $=w.getContext("2d");$.fillStyle="#203f53",$.beginPath(),$.arc(128,128,112,0,Math.PI*2),$.fill(),$.strokeStyle="#b99b5c",$.lineWidth=3,$.stroke(),Cn($,"ball",128,128,185,j.gold);let D=new Ie(w);D.colorSpace=Ae;let E=new me(new Le(.2,.2),new ve({map:D,transparent:!0}));E.position.set(.02,.015,.061),i.add(E)}function P(){i.traverse(w=>{w.userData.borrowed||(w.geometry&&w.geometry.dispose(),w.material&&!Array.isArray(w.material)&&![g,b,y,C].includes(w.material)&&(w.material.map?.dispose(),w.material.dispose()))}),i.clear(),r.length=0,h=null}function _(w,$,D,E,N){let z=e.mollie.cards[w].clone();return z.userData={borrowed:!0},z.material=z.material.map(G=>{if(!G.map)return G;let S=new ve({map:G.map});return S.userData.albumOwned=!0,S}),z.position.set($,D,.085),z.scale.setScalar(E/.62),z.rotation.set(0,0,0),z.visible=!0,N&&(z.userData.action=N,r.push(z)),i.add(z),z}function M(){i.traverse(w=>{if(w.userData.borrowed)for(let $ of w.material)$.userData.albumOwned&&$.dispose()}),P()}function R(){if(M(),d=null,n.position.z=a!==null?.38:0,a!==null){m([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),h=_(a,-.28,0,1.05*c),h.rotation.y=l?Math.PI:0,p.copy(h.quaternion),m(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new x(0,1,0),l?Math.PI:0)}),m(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>L(.12)),m(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>L(-.12)),m(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",O),m(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){v(1.04,1.33,.06,b,0,0),v(.038,1.29,.07,C,-.47,0,.025),m(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),m([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),T(),m(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>A(0)),m(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}v(2.1,1.37,.055,b,0,0,-.02),v(2.02,1.3,.045,y,0,0,.005),v(.98,1.26,.018,g,-.502,0,.036),v(.98,1.26,.018,g,.502,0,.036),v(.025,1.29,.02,y,0,0,.055);for(let w of[-1,1]){let $=o*2+(w===1?1:0),D=w*.5;m([e.mollie.found.has($)?e.xrGames.names[$]:`Mystery card ${$+1}`],.88,.12,D,.53,56),e.mollie.found.has($)?_($,D,-.005,.8,()=>I($)):(v(.58,.8,.006,new ve({color:14476515}),D,-.005,.062),m(["?"],.5,.6,D,-.005,300,null,"#89a2ab")),m([`${$+1} / 18`],.7,.09,D,-.54,52)}m(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>A(o-1)),m([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),m(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>A(Math.min(8,o+1))),m(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),m(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function L(w){c=Ge.clamp(c+w,.72,1.12),h.scale.setScalar(1.05*c/.62)}function A(w){if(u||w===o)return;w=Ge.clamp(w,-1,8);let $=new pe;$.name="Turning album page",n.add($);let D=new me(new Me(.99,1.27,.012),g);if(D.position.x=w>o?.495:-.495,D.userData.pageTurnOwned=!0,$.add(D),o>=0){for(let E of i.children)if(E.position.z>.045&&Math.abs(E.position.y)<.64&&(w>o?E.position.x>.05:E.position.x<-.05)){let N=E.clone();N.userData={},$.add(N)}}$.position.z=.16,u={leaf:$,next:w,elapsed:0,direction:w>o?-1:1}}function I(w){return e.mollie.found.has(w)?(a=w,l=!1,c=1,f=null,R(),!0):!1}function O(){a!==null?(a=null,f=null,R()):t()}function B(){o=-1,a=null,n.visible=!0,R()}function F(){u&&(u.leaf.traverse(w=>{w.userData.pageTurnOwned&&w.geometry?.dispose()}),n.remove(u.leaf),u=null),f=null,n.visible=!1}function U(w){var E;if(!w||u)return null;n.updateMatrixWorld(!0);let $=new En(w.position,w.direction,0,5).intersectObjects(r)[0],D=$?.object||null;return D!==d&&(d&&(d.userData.paint?.(!1),d.userData.restScale&&d.scale.copy(d.userData.restScale)),d=D,d&&(d.userData.paint?.(!0),(E=d.userData).restScale??(E.restScale=d.scale.clone()),d.scale.copy(d.userData.restScale).multiplyScalar(1.025))),$?{point:$.point,action:$.object.userData.action}:null}function H(w,$,D){if(u){u.elapsed+=w;let E=Math.min(1,u.elapsed/.48);u.leaf.rotation.y=u.direction*Math.PI*(E*E*(3-2*E)),E>=1&&(n.remove(u.leaf),u.leaf.traverse(N=>{N.userData.pageTurnOwned&&N.geometry?.dispose()}),o=u.next,u=null,R())}if(h)if($&&D){f||(f={hand:D.clone().invert(),start:h.quaternion.clone()});let E=D.clone().multiply(f.hand),N=i.getWorldQuaternion(new be);h.quaternion.copy(N.clone().invert().multiply(E).multiply(N).multiply(f.start))}else f?(f=null,p.copy(h.quaternion)):h.quaternion.slerp(p,1-Math.exp(-10*w))}return{root:n,open:B,close:F,point:U,tick:H,back:O,inspect:I,change:A,get page(){return o},get inspected(){return a},get card(){return h},get turning(){return!!u}}}var _t={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},Xp=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function qp(s,e){let t=Math.hypot(s,e)*384/_t.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(s,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=Xp[Math.floor(n/(Math.PI/10))],r=t>=268?2:t>=163&&t<=184?3:1;return{score:i*r,label:`${r===3?"Triple ":r===2?"Double ":""}${i} \xB7 ${i*r}`}}function Yp(s){let e=s.at(-1);if(!e)return new x;let t=s.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new x}function Zp(s,e,t){let n=s.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function $p(s,e){if(s.x<=_t.x||e.x>_t.x)return null;let t=(_t.x-s.x)/(e.x-s.x),n=s.clone().lerp(e,t);return Math.hypot(n.y-_t.y,n.z-_t.z)<=.47?{point:n,...qp(-(n.z-_t.z),n.y-_t.y)}:null}function Bc(s,e,t){let n=new pe;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new Se({color:12044498,metalness:.75,roughness:.28}),r=new Se({color:2112336,roughness:.45}),o=new Se({color:16764759,side:nt,roughness:.8}),a=[];function l(G,S){return a.push(G),new me(G,S)}function c(){let G=new pe;G.name="3D dart";let S=l(new sn(.004,.035,8),i);S.rotation.x=-Math.PI/2,S.position.z=.0175,G.add(S);let V=l(new ze(.006,.007,.045,10),i);V.rotation.x=Math.PI/2,V.position.z=.0575,G.add(V);for(let Z=0;Z<5;Z++){let Y=l(new Rt(.007,8e-4,4,10),r);Y.position.z=.043+Z*.007,G.add(Y)}let q=l(new ze(.003,.003,.06,8),r);q.rotation.x=Math.PI/2,q.position.z=.11,G.add(q);for(let Z=0;Z<2;Z++){let Y=l(new Me(.044,.001,.05),o);Y.rotation.z=Z*Math.PI/2,Y.position.z=.15,G.add(Y)}return G}let u=c();n.add(u),u.visible=!1;let h=document.createElement("canvas");h.width=1024,h.height=640;let f=h.getContext("2d"),d=new Ie(h);d.colorSpace=Ae;let p=new me(new Le(.95,.594),new ve({map:d}));p.name="Wall-mounted darts scoreboard",p.position.set(_t.x+.05,1.8,_t.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let g=new me(new Me(1.01,.654,.035),new Se({color:1517105,roughness:.7}));g.name="Darts scoreboard frame",g.position.copy(p.position),g.position.x-=.022,g.rotation.copy(p.rotation),n.add(g);let b=Ut("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);b.position.set(_t.x+.065,2.43,_t.z),b.rotation.y=Math.PI/2,n.add(b);let y=Kn(.9);y.position.set(_t.x+.55,2.75,_t.z),n.add(y);let C=s.colliders.map(G=>new Ve(new x(G.min.x,G.min.y,G.min.z),new x(G.max.x,G.max.y,G.max.z))),v=!1,m=!1,T=null,P=[],_=0,M=!1,R=!1,L=!1,A=0,I=0,O="Hold trigger, throw, release.",B=0,F=[];try{B=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function U(){lc(f,{total:A,throws:I,best:B,last:O}),d.needsUpdate=!0}function H(G=!1){m=!1,P=[],u.visible=!1,T&&!G&&(n.remove(T.mesh),T=null),M=!0,R=!1}function w(){H();for(let G of F)n.remove(G);F=[],I=A=0,O="Nine darts. Make them count!",U()}function $(){let S=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([V,q])=>!s.blocked(V,q,0));return!S||!s.xrTeleport(S[0],0,S[1])?!1:(s.xrFace?.(Math.PI/2),n.visible=v=!0,w(),!0)}function D(){H(),v=!1,n.visible=!1}function E(G,S){let V=T;if(V){if(V.mesh.position.copy(S),F.push(V.mesh),T=null,I++,A+=G.score,O=G.label,t(G.score>0?.6:.12),I===9&&A>B){B=A;try{localStorage.setItem("tfj-vr-darts-best-v1",String(B))}catch{}}U()}}function N(G,S){let V=u.clone();V.visible=!0,V.position.copy(G),V.quaternion.setFromUnitVectors(new x(0,0,-1),S.clone().normalize()),n.add(V),T={mesh:V,position:G.clone(),velocity:S.clone(),age:0},u.visible=!1,m=!1,P=[]}function z(G,S,V,q,Z=!1){if(_+=G,!!v){if(Z){m&&H();return}if(V||(R=!0),q&&!L&&I===9&&w(),L=q,S&&V&&!M&&R&&!T&&I<9){let Y=s.stats();Y.x<_t.ocheX-.04||Y.x>_t.ocheX+1.6||Math.abs(Y.z-_t.z)>1||Y.y>.15?(O="Stand behind the yellow line.",U()):(m=!0,P=[],u.visible=!0,t(.12))}if(m&&S&&(u.position.copy(S.position).addScaledVector(S.direction,.07),u.quaternion.setFromUnitVectors(new x(0,0,-1),S.direction),P.push({time:_,position:S.position.clone()}),P=P.filter(Y=>_-Y.time<.15),!V&&M)){let Y=Yp(P);Y.length()<.6?(m=!1,u.visible=!1,O="Swing your hand before releasing.",U()):N(u.position,Y)}if(m&&!S&&H(),M=V,T){let Y=Math.max(1,Math.ceil(G/.004166666666666667)),k=G/Y;for(let ne=0;ne<Y&&T;ne++){let J=T,re=Zp(J.position,J.velocity,k),X=$p(J.position,re.position),ie=re.position.clone().sub(J.position),Q=ie.length(),ae=new tt(J.position,ie.clone().normalize()),te=new x,ge=null,fe=Q+1e-8;for(let we of C){if(we.containsPoint(J.position)){ge=J.position.clone(),fe=0;break}if(ae.intersectBox(we,te)){let _e=te.distanceTo(J.position);_e<=fe&&(fe=_e,ge=te.clone())}}if(X&&(!ge||X.point.distanceTo(J.position)<=fe)){E(X,X.point);break}if(ge){E({score:0,label:"Miss \xB7 hit scenery"},ge);break}if(re.position.y<=.025){let we=Ge.clamp((J.position.y-.025)/(J.position.y-re.position.y),0,1),_e=J.position.clone().lerp(re.position,we);J.mesh.quaternion.setFromUnitVectors(new x(0,0,-1),new x(J.velocity.x,0,J.velocity.z).normalize()),E({score:0,label:"Miss \xB7 floor"},_e);break}if(J.position.copy(re.position),J.velocity.copy(re.velocity),J.mesh.position.copy(J.position),J.mesh.quaternion.slerp(new be().setFromUnitVectors(new x(0,0,-1),J.velocity.clone().normalize()),1-Math.exp(-18*k)),J.age+=k,J.age>4){E({score:0,label:"Miss"},J.position);break}}}}}return{root:n,get best(){return B},start:$,stop:D,cancel:H,reset:w,update:z,launch:N,get active(){return v},get held(){return m},get flight(){return T},get total(){return A},get throws(){return I},get last(){return O},get resting(){return F}}}function Oc(s,e,t,n,i=.35){let r=e.clone().sub(s),o=r.length();if(o<1e-7)return null;let a=new tt(s,r.multiplyScalar(1/o)),l=new x,c=o+1e-6,u=null;for(let h of t){let f=h.clone().expandByScalar(.045);if(f.containsPoint(s))return{type:"wall",point:s.clone(),distance:0};if(a.intersectBox(f,l)){let d=l.distanceTo(s);d<=c&&(c=d,u={type:"wall",point:l.clone(),distance:d})}}for(let h of n)if(a.intersectSphere(new Yt(h.position,i),l)){let f=l.distanceTo(s);f<c&&(c=f,u={type:"target",id:h.id,point:l.clone(),distance:f})}return u}function Jp(s,e){let t=s.at(-1),n=s.find(r=>t.time-r.time<=.12&&t.time-r.time>=.045),i=new x;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new x(0,1.3,0)),i.clampLength(0,9)}function zc(s){let e=s.worldScene,t=new pe;t.name="VR games",t.visible=!1,e.add(t);let n=uc(t),i=new pe;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let le of[...s.mollie.balls.map(Te=>Te.ball),...s.mollie.cards,s.mollie.thrownBall])le?.isObject3D&&i.attach(le);let r=s.colliders.map(le=>new Ve(new x(le.min.x,le.min.y,le.min.z),new x(le.max.x,le.max.y,le.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new Ie(o);l.colorSpace=Ae;let c=new pe;t.add(c);let u=new me(new Le(1.6,1.2),new ve({map:l,side:nt}));c.add(u),c.visible=!1;let h=new me(new Me(1.64,1.24,.035),new ve({color:3561833}));h.position.z=-.025,c.add(h);let f=new pe;c.add(f);let d=new Ct(new Oe().setFromPoints([new x,new x(0,0,-1)]),new Et({color:16769946}));d.visible=!1,t.add(d);let p=new me(new qe(.012,8,6),new ve({color:16769946}));p.visible=!1,t.add(p);let g=s.mollie.balls[0].ball.clone();g.scale.setScalar(.43),g.visible=!1,t.add(g);let b=Kr();b.group.visible=!1,t.add(b.group);let y=document.createElement("canvas");y.width=768,y.height=192;let C=y.getContext("2d"),v=new Ie(y);v.colorSpace=Ae;let m=new me(new Le(.95,.2375),new ve({map:v,transparent:!0,depthTest:!1,depthWrite:!1}));m.name="Adventure notification",m.renderOrder=1e3,t.add(m),m.visible=!1;let T="explore",P="menu",_=[],M=null,R=null,L=0,A=!1,I=null,O=!1,B=null,F=[],U=0,H=!1,w=!1,$=!1,D=!0,E=[],N=0,z=0,G="Welcome, Mollie!",S="",V=0,q=!1,Z=null,Y=0,k=0;try{k=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let ne=(le,Te=.3)=>{try{le?.gamepad?.hapticActuators?.[0]?.pulse(Te,70)?.catch?.(()=>{})}catch{}},J=Fc(c,s,()=>{P="menu",J.close(),u.visible=h.visible=!0,D=!0,ce()}),re=Bc(s,t,le=>ne(I?.right,le)),X=Uc(s,t,le=>ne(I?.right,le)),ie=Nc(s,t),Q=Pc(s,t,Bt,le=>ne(I?.right,le)),ae=gc(s,t,Bt,le=>ne(I?.right,le)),te=Ec(s,t,Bt,le=>ne(I?.right,le)),ge=0,fe=!0;try{fe=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function we(le){fe=!!le;try{localStorage.setItem("tfj-companion-enabled",String(fe))}catch{}fe?ie.summon():(T==="friend"&&oi(),ie.group.visible=!1),ce()}let _e=Lc(s,t,Bt,le=>ne(I?.right,le),xe),K=Dc(s,t,ie,Bt,le=>ne(I?.right,le)),W=Rc(s,e,()=>({bowling:_e.best||null,darts:re.best||null,golf:ae.best,rc:te.bestLapMs,basketball:K.best||null,planes:Q.best||null,memory:X.records,hide:k}),Bt),se=!1,ue=!1;function ee(){if(T==="jigglypuff"){G="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",mt();return}ie.summon(),rt()}function de(){ri(),P="album",u.visible=h.visible=!1,f.clear(),J.open(),D=!0}function Pe(){try{Z??(Z=new(window.AudioContext||window.webkitAudioContext)),Z.resume()?.catch(()=>{})}catch{}}function xe(le){if(!(!Z||Z.state!=="running"))try{let Te=Math.floor(Z.sampleRate*.07),He=Z.createBuffer(1,Te,Z.sampleRate),ut=He.getChannelData(0);for(let Ce=0;Ce<Te;Ce++)ut[Ce]=(Math.random()*2-1)*Math.exp(-Ce/Te*5);for(let Ce=0;Ce<(le?12:7);Ce++){let vt=Z.createBufferSource(),ot=Z.createGain(),xn=Z.createBiquadFilter();vt.buffer=He,xn.type="highpass",xn.frequency.value=650,ot.gain.value=.055+Ce%3*.012,vt.connect(xn),xn.connect(ot),ot.connect(Z.destination),vt.start(Z.currentTime+Ce*.095+Ce%2*.025),vt.onended=()=>{vt.disconnect(),xn.disconnect(),ot.disconnect()}}}catch{}}function De(){if(!Z||Z.state!=="running")return;let le=b.group.position;try{let Te=Z.createPanner();Te.panningModel="HRTF",Te.distanceModel="inverse",Te.refDistance=2,Te.maxDistance=25,Te.positionX.value=le.x,Te.positionY.value=le.y+.6,Te.positionZ.value=le.z,Te.connect(Z.destination),[523.25,659.25,587.33].forEach((He,ut)=>{let Ce=Z.createOscillator(),vt=Z.createGain(),ot=Z.currentTime+ut*.18;Ce.type="sine",Ce.frequency.value=He,vt.gain.setValueAtTime(0,ot),vt.gain.linearRampToValueAtTime(.09,ot+.025),vt.gain.exponentialRampToValueAtTime(.001,ot+.17),Ce.connect(vt),vt.connect(Te),Ce.start(ot),Ce.stop(ot+.18),Ce.onended=()=>{Ce.disconnect(),vt.disconnect()}}),setTimeout(()=>Te.disconnect(),1200)}catch{}}function Ne(le,Te,He,ut=32,Ce="#fff"){a.font=`${ut>=40?"bold ":""}${ut}px Arial`,a.fillStyle=Ce,a.fillText(le,Te,He)}function Ee(le,Te,He,ut,Ce){_.push({label:le,x:Te,y:He,w:ut,h:72,action:Ce}),sc(a,le,Te,He,ut,M===le)}function ce(){P!=="album"&&(_=[],rc(a,ja()),ge===0?(Ee("Pok\xE9mon throwing hunt",44,196,455,()=>Kt("hunt")),Ee("Jigglypuff hide-and-seek",519,196,461,()=>Kt("jigglypuff")),Ee("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>Kt("darts")),Ee("Memory match \xB7 staff-room table",519,280,461,()=>Kt("memory")),Ee(`Open the card album \xB7 ${s.mollie.found.size} / 18`,44,364,455,de),Ee("Play with Jigglypuff",519,364,461,()=>Kt("friend")),Ee("Pok\xE9 Ball basketball",44,448,455,()=>Kt("basketball")),Ee("Warehouse bowling",519,448,461,()=>Kt("bowling"))):(Ee("Paper-plane challenge",44,196,455,()=>Kt("planes")),Ee("RC car racing",519,196,461,()=>Kt("rc")),Ee("Warehouse mini-golf",44,280,936,()=>Kt("golf")),Ee("Arcade wall of fame",44,364,455,qi),Ee("Back to exploring",519,364,461,()=>{oi(),rt()}),Ee(fe?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>we(!fe))),Ee("Resume",44,548,445,rt),Ee(ge===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{ge=1-ge,ce()}),oc(a,T==="rc"),l.needsUpdate=!0)}function Ye(){f.clear()}function Ze(){if(!I){q=!0;return}q=!1;let le=I.forward.clone();le.y=0,le.normalize(),c.position.copy(I.eye).addScaledVector(le,1.9),c.position.y=Math.max(I.eye.y-.1,s.stats().y+.85),c.rotation.set(0,Math.atan2(-le.x,-le.z),0)}function mt(){ge=0,V=0,m.visible=!1,ri(),J.close(),u.visible=h.visible=!0,P="menu",Ye(),c.visible=!0,D=!0,M=null,Ze(),ce()}function rt(){J.close(),P="menu",u.visible=h.visible=!0,c.visible=!1,d.visible=p.visible=!1,D=!0,M=null}function qi(){oi(),rt();let le=W.visit();return le&&(T="fame",ue=!0),le}function ri(le=!1){te.cancel(),ae.cancel(),Q.cancel(),_e.cancel(),K.cancel(),re.cancel(le),O=!1,B=null,F=[],g.visible=!1}function oi(){n.update("explore",null),i.visible=!0,te.stop(),ae.stop(),Q.stop(),_e.stop(),K.stop(),V=0,m.visible=!1,X.stop(),re.stop(),T="explore",b.group.visible=!1,z=0,ri(),G="Choose an adventure whenever you like."}function Ja(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([Te,He,ut])=>{for(let[Ce,vt]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let ot=new x(Te+Ce,0,He+vt);if(!s.blocked(ot.x,ot.z,0)&&s.groundAt(ot.x,ot.z,.1)===0&&s.mollie.balls.every(xn=>xn.ball.position.distanceTo(ot)>1.3))return[{point:ot,clue:ut}]}return[]})}function Ka(){b.group.position.copy(E[N].point),b.group.visible=!0,Y=U+1,G=`Try ${E[N].clue}.`,Bt(G)}function Kt(le){if(oi(),T=le,T==="rc"){if(!te.start()){T="explore",G="No clear warehouse circuit available.",ce();return}i.visible=!1,rt();return}if(T==="golf"){if(!ae.start()){T="explore",G="No clear warehouse green available.",ce();return}i.visible=!1,rt();return}if(T==="friend"&&!fe&&we(!0),T==="planes"){if(!Q.start()){T="explore",G="The plane course is blocked. Try again.",ce();return}rt();return}if(T==="bowling"){if(!_e.start()){T="explore",G="The warehouse lane is blocked. Try again.",ce();return}i.visible=!1,rt();return}if(T==="friend"||T==="basketball"){if(!K.start(T)){T="explore",G="No clear basketball space available.",ce();return}rt();return}if(T==="memory"){if(!X.start()){T="explore",G="The table is not accessible. Try again.",ce();return}rt();return}if(T==="darts"){if(!re.start()){T="explore",G="The throwing line is blocked. Try again.",ce();return}G="Nine darts. Hold trigger, throw and release.",rt();return}if(T==="hunt")s.xrGames.start(),G="Hold trigger, swing gently and release!";else{E=Ja();for(let Te=E.length-1;Te>0;Te--){let He=Math.floor(Math.random()*(Te+1));[E[Te],E[He]]=[E[He],E[Te]]}if(E=E.slice(0,3),N=0,E.length<3){T="explore",G="No clear hiding spots. Please try again.",ce();return}Ka()}rt()}function cu(){if(T!=="jigglypuff"||z||!b.group.visible)return!1;if(N++,b.group.visible=!1,ne(I?.right,.6),N===3){k++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(k))}catch{}T="explore",G="You found Jigglypuff 3 times! Champion!",Bt(G)}else z=1.5,G=`Found ${N} / 3! Finding a new hiding spot\u2026`,Bt(G);return!0}function ja(){return T==="rc"?te.state.finished?"RC race complete \xB7 A to race again":`RC racing: lap ${te.state.completedLaps+1}/3 \xB7 ${te.state.elapsed.toFixed(1)}s \xB7 A rescues car`:T==="fame"?`Wall of fame: ${W.records.filter(le=>le.medal).length} / ${W.records.length} medals earned`:T==="golf"?ae.complete?`Mini-golf complete: ${ae.total} strokes \xB7 Best ${ae.best}`:`Mini-golf: hole ${ae.hole+1}/6 \xB7 ${ae.strokes} strokes \xB7 Par ${ae.layout.par}`:T==="planes"?`Paper planes: ${Q.score} points \xB7 ${Q.throws}/5 throws \xB7 Longest ${Q.longest.toFixed(1)} m`:T==="bowling"?`Bowling: ${_e.total} / 100 pins \xB7 ${_e.frame===10?"Complete":`Frame ${_e.frame+1} \xB7 Bowl ${_e.roll+1}`}`:T==="basketball"?`Basketball: ${K.score} baskets \xB7 ${K.shots}/10 throws`:T==="friend"?`Berries: ${K.feeds} \xB7 High-fives: ${K.fives} \xB7 Offer a berry or touch her raised hand`:T==="hunt"?`Pok\xE9mon: ${s.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:T==="jigglypuff"?z?G:`Found ${N}/3 \xB7 Try ${E[N].clue}`:T==="darts"?`Darts: ${re.total} points \xB7 ${re.throws}/9 darts \xB7 ${re.last}`:T==="memory"?`Memory: ${X.matched.size/2}/${X.deck.length/2} pairs \xB7 ${X.moves} turns`:G}function Bt(le){S=le,ac(C,le),v.needsUpdate=!0,V=3}function uu(le){if(m.visible=!c.visible&&V>0,!m.visible)return;let Te=le.headOrientation||new be().setFromUnitVectors(new x(0,0,-1),le.forward.clone().normalize());m.position.set(0,-.28,-2.1).applyQuaternion(Te).add(le.eye),m.quaternion.copy(Te),m.material.opacity=Math.min(1,V/.5),V=Math.max(0,V-le.dt)}function hu(le){return!le||le.visible===!1?null:{position:le.getWorldPosition(new x),direction:new x(0,0,-1).applyQuaternion(le.getWorldQuaternion(new be))}}function fu(le){if(!le)return null;if(P==="album"){let Ce=J.point(le);return d.geometry.setFromPoints([le.position,Ce?Ce.point:le.position.clone().addScaledVector(le.direction,2)]),d.visible=!0,p.visible=!!Ce,Ce&&p.position.copy(Ce.point),Ce?{...Ce,label:"album"}:null}c.updateMatrixWorld(!0);let Te=new En(le.position,le.direction,0,4).intersectObject(u)[0];if(d.geometry.setFromPoints([le.position,Te?Te.point:le.position.clone().addScaledVector(le.direction,2)]),d.visible=!0,p.visible=!!Te,Te&&p.position.copy(Te.point),!Te)return null;let He=Te.uv.x*1024,ut=(1-Te.uv.y)*768;return _.find(Ce=>He>=Ce.x&&He<=Ce.x+Ce.w&&ut>=Ce.y&&ut<=Ce.y+Ce.h)}function du(le){if(!le||!b.group.visible)return!1;let Te=b.group.position.clone().add(new x(0,.58,0)),He=le.position.clone().addScaledVector(le.direction,4);return Oc(le.position,He,r,[{id:0,position:Te}],.5)?.type==="target"&&le.position.distanceTo(Te)<3.3}function pu(le){I=le,q&&Ze();let{dt:Te,eye:He,forward:ut,right:Ce,left:vt,controller:ot}=le,xn=re.throws,yu=X.complete;U+=Te;let Nn=!!Ce?.gamepad?.buttons[0]?.pressed,Qa=!!vt?.gamepad?.buttons[5]?.pressed,el=!!Ce?.gamepad?.buttons[5]?.pressed,jt=hu(ot);if(Qa&&!w&&(c.visible?rt():mt()),el&&!$&&(c.visible&&P==="album"?(J.back(),D=!0):c.visible?rt():(oi(),mt())),w=Qa,$=el,Nn||(D=!1),c.visible){P==="album"&&J.tick(Te,!!Ce?.gamepad?.buttons[1]?.pressed,ot?.getWorldQuaternion(new be));let wt=fu(jt);M=wt?.label||null,M!==R&&(R=M,ce()),Nn&&!H&&!D&&wt&&(ne(Ce),wt.action(),D=!0),m.visible=!1}else d.visible=p.visible=!1,T==="darts"&&re.update(Te,D?null:jt,!D&&Nn,!!Ce?.gamepad?.buttons[4]?.pressed),T==="hunt"&&jt&&(Nn&&!H&&!D&&!B&&(O=!0,F=[],g.visible=!0,ne(Ce,.15)),O&&(g.position.copy(jt.position).addScaledVector(jt.direction,.09),F.push({time:U,position:jt.position.clone()}),F=F.filter(wt=>U-wt.time<.16),!Nn&&H&&(B={position:g.position.clone(),velocity:Jp(F,jt.direction),life:0},O=!1,F=[],ne(Ce,.2)))),T==="jigglypuff"&&(b.animate(Te,!1),z?(z-=Te,z<=0&&(z=0,Ka())):b.group.visible&&(b.group.rotation.y=Math.atan2(He.x-b.group.position.x,He.z-b.group.position.z),du(jt)&&(d.geometry.setFromPoints([jt.position,b.group.position.clone().add(new x(0,.6,0))]),d.visible=!0,Nn&&!H&&!D&&cu()),U>Y&&(De(),Y=U+6)));if(T==="memory"){X.tick(Te,c.visible);let wt=!!Ce?.gamepad?.buttons[4]?.pressed;if(wt&&!se&&X.complete&&!c.visible&&X.reset(),se=wt,!c.visible){let Dt=X.point(jt);Dt&&(d.geometry.setFromPoints([jt.position,Dt.point]),d.visible=!0,p.position.copy(Dt.point),p.visible=!0,Nn&&!H&&!D&&Dt.action())}}if(n.update(T,T==="rc"?te.origin:T==="golf"?ae.origin:T==="bowling"?_e.origin:T==="planes"?Q.origin:T==="basketball"?K.origin:null),i.visible=!["bowling","golf","rc"].includes(T),T==="fame"&&!ue&&W.site&&Math.hypot(He.x-W.site.view.x,He.z-W.site.view.z)>7&&(T="explore"),ue=!1,ie.tick(Te,ut,!fe||["fame","jigglypuff","darts","basketball","bowling","planes","memory","golf","rc"].includes(T),T==="friend"),K.tick(le,c.visible),_e.tick(le,c.visible),Q.tick(le,c.visible),ae.tick(le,c.visible),te.tick(le,c.visible),W.tick(Te),!ot&&O&&ri(),B&&!c.visible){let wt=Math.max(1,Math.ceil(Te/.012)),Dt=Te/wt;for(let Bs=0;Bs<wt&&B;Bs++){let ai=B,Yi=ai.position.clone().addScaledVector(ai.velocity,Dt);Yi.y-=4.9*Dt*Dt;let _u=s.mollie.balls.flatMap((vu,tl)=>s.mollie.found.has(tl)?[]:[{id:tl,position:vu.ball.position}]),Os=Oc(ai.position,Yi,r,_u);if(Os){Os.type==="target"&&s.xrGames.collect(Os.id)&&(G=`${s.xrGames.names[Os.id]} found! ${s.mollie.found.size}/18 cards.`,Bt(G),ne(Ce,.8),s.mollie.found.size===18&&(G="All 18 cards found! Brilliant, Mollie!",Bt(G))),ri();break}ai.position.copy(Yi),ai.velocity.y-=9.8*Dt,ai.life+=Dt,g.position.copy(Yi),g.rotation.x+=Dt*7,(Yi.y<0||ai.life>3)&&ri()}}if(Z?.listener)try{let wt=Z.listener;for(let[Dt,Bs]of Object.entries({positionX:He.x,positionY:He.y,positionZ:He.z,forwardX:ut.x,forwardY:ut.y,forwardZ:ut.z,upX:0,upY:1,upZ:0}))wt[Dt]&&(wt[Dt].value=Bs)}catch{}return T==="darts"&&xn<9&&re.throws===9&&Bt(`Round complete! ${re.total} points. A to play again.`),T==="memory"&&!yu&&X.complete&&Bt(`All pairs matched in ${X.moves} turns!`),uu(le),H=Nn,{consumeTrigger:c.visible||T!=="explore"||D,blockTeleport:ae.held||T==="rc",blockMovement:T==="rc"||c.visible||O||re.held||K.held||_e.held||Q.held||ae.held}}function mu(){ie.summon(),t.visible=!0,T="explore",H=w=$=!1,D=!0,G="Choose a game, or resume exploring.",mt()}function gu(){oi(),rt(),m.visible=!1,t.visible=!1,I=null,Z?.suspend()?.catch(()=>{})}function xu(){ri(!0),H=!0,D=!0}return{pokemonLayer:i,setCompanionEnabled:we,get companionEnabled(){return fe},fame:W,visitFame:qi,rc:te,golf:ae,planes:Q,bowling:_e,play:K,memory:X,companion:ie,progress:ja,callCompanion:ee,album:J,darts:re,showAlbum:de,tick:pu,begin:mu,end:gu,enableAudio:Pe,open:mt,close:rt,start:Kt,stop:oi,interrupt:xu,chooseSpots:Ja,get mode(){return T},get driving(){return T==="rc"&&te.active},get menuOpen(){return c.visible},get found(){return N},get route(){return E},get held(){return O||re.held||K.held||_e.held||Q.held||ae.held},get flight(){return B},get board(){return c},get root(){return t},puff:b.group,ball:g}}var It={};function Qr(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Kp(s){let e=2166136261;for(let t of String(s))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function jp(s){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=Qr(813+s*431),i=[["#456840","#66884e","#355b38","#789353"],["#3e613c","#587747","#304f34","#70884e"],["#516d3e","#738c4b","#405c37","#8b9b56"]][s];t.clearRect(0,0,256,256),t.lineCap="round",t.lineJoin="round";function r(a,l,c,u,h){t.save(),t.translate(a,l),t.rotate(u),t.fillStyle=i[h%4],t.beginPath(),t.moveTo(0,-c),t.bezierCurveTo(c*.74,-c*.5,c*.82,c*.3,0,c*.83),t.bezierCurveTo(-c*.6,c*.24,-c*.68,-c*.58,0,-c),t.fill(),t.strokeStyle=h%2?"rgba(186,194,129,.26)":"rgba(166,184,115,.22)",t.lineWidth=.7,t.beginPath(),t.moveTo(0,c*.67),t.lineTo(0,-c*.74),t.stroke(),t.restore()}for(let a=0;a<5;a++){let l=103+n()*34,c=218+n()*20,u=38+a*41+(n()-.5)*22,h=35+n()*53;t.strokeStyle="rgba(66,61,41,.92)",t.lineWidth=1.5+n(),t.beginPath(),t.moveTo(l,c),t.quadraticCurveTo((l+u)*.5+(n()-.5)*20,(c+h)*.5,u,h),t.stroke();for(let f=0;f<8;f++){let d=.14+f*.103,p=l+(u-l)*d,g=c+(h-c)*d,b=f%2?1:-1,y=7+n()*11,C=9+n()*8;t.strokeStyle="rgba(82,76,43,.72)",t.lineWidth=1,t.beginPath(),t.moveTo(p,g),t.lineTo(p+b*y,g-3),t.stroke(),r(p+b*y,g-7,C,b*(.4+n()*.55),f+a+s)}}let o=new Ie(e);return o.colorSpace=Ae,o.anisotropy=2,o}function Qp(){let s=document.createElement("canvas");s.width=128,s.height=256;let e=s.getContext("2d"),t=Qr(731);e.fillStyle="#726f59",e.fillRect(0,0,128,256);for(let i=0;i<125;i++){let r=t()*128,o=t()*256,a=14+t()*116;e.strokeStyle=i%3?"rgba(33,39,30,.34)":"rgba(174,169,137,.26)",e.lineWidth=.6+t()*2.5,e.beginPath(),e.moveTo(r,o),e.bezierCurveTo(r+(t()-.5)*7,o+a*.3,r+(t()-.5)*8,o+a*.65,r+(t()-.5)*7,o+a),e.stroke()}let n=new Ie(s);return n.colorSpace=Ae,n.wrapS=n.wrapT=qt,n.repeat.set(1,2),n}function em(s){let e=document.createElement("canvas"),t=document.createElement("canvas");e.width=e.height=t.width=t.height=512;let n=e.getContext("2d"),i=t.getContext("2d"),r=Qr(9147+s*319),o=[["#4e7146","#3a5b38","#789155","#597e48"],["#486843","#345536","#738c53","#58774a"],["#577342","#405e37","#8a995b","#66814a"]][s];n.fillStyle=o[0],n.fillRect(0,0,512,512),i.fillStyle="#777777",i.fillRect(0,0,512,512);for(let c=0;c<180;c++){let u=r()*512,h=r()*512,f=10+r()*36;n.fillStyle=c%2?"rgba(21,45,28,.14)":"rgba(172,179,118,.12)",n.beginPath(),n.ellipse(u,h,f,f*.7,r()*Math.PI,0,Math.PI*2),n.fill()}for(let c=0;c<1450;c++){let u=r()*512,h=r()*512,f=3+r()*5,d=r()*Math.PI*2;for(let[p,g]of[[n,o[c%4]],[i,c%2?"#9a9a9a":"#555555"]])p.save(),p.translate(u,h),p.rotate(d),p.fillStyle=g,p.beginPath(),p.moveTo(0,-f),p.bezierCurveTo(f*.7,-f*.4,f*.8,f*.3,0,f*.85),p.bezierCurveTo(-f*.6,f*.2,-f*.6,-f*.5,0,-f),p.fill(),p.restore()}let a=new Ie(e),l=new Ie(t);a.colorSpace=Ae;for(let c of[a,l])c.wrapS=c.wrapT=qt,c.repeat.set(3,2),c.anisotropy=2;return{texture:a,height:l}}function tm(){if(!It.trunk){It.trunk=new ze(.38,1,1,8,2,!1);let s=It.trunk.attributes.position;for(let n=0;n<s.count;n++){let i=s.getX(n),r=s.getY(n),o=s.getZ(n),a=Math.atan2(o,i),l=1+.045*Math.sin(a*5+r*9)+.025*Math.cos(a*3-r*11);s.setXYZ(n,i*l,r,o*l)}It.trunk.computeVertexNormals(),It.branch=new ze(.24,1,1,5,1,!0),It.leaf=new Le(1,1),It.crown=new qe(1,8,5);let e=It.crown.attributes.position;for(let n=0;n<e.count;n++){let i=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.atan2(o,i),l=Math.sqrt(i*i+o*o),c=.94+.085*Math.sin(a*3+r*2)*l+.045*Math.cos(a*5-r*4)*l;e.setXYZ(n,i*c,r*(1+.04*Math.sin(a*3)*l),o*c)}It.crown.computeVertexNormals(),It.crown.computeBoundingBox(),It.crown.computeBoundingSphere();let t=Qp();It.wood=new Se({map:t,color:16777215,roughness:1,metalness:0}),It.leaves=[0,1,2].map(n=>new Se({map:jp(n),color:16777215,alphaTest:.38,transparent:!1,side:nt,roughness:.96,metalness:0})),It.crowns=[0,1,2].map(n=>{let{texture:i,height:r}=em(n);return new Se({map:i,bumpMap:r,bumpScale:.035,color:16777215,transparent:!1,roughness:.96,metalness:0})})}return It}var nm=`
uniform float tfjWindTime;
attribute vec2 tfjTreeWind;
vec3 tfjTreeWindOffset( vec3 point ) {
 float rise = clamp( ( point.y / tfjTreeWind.x - 0.56 ) / 0.44, 0.0, 1.0 );
 float phase = tfjTreeWind.y;
 float gust = 0.65 + 0.35 * sin( tfjWindTime * 0.3 + phase * 0.4 );
 float wave = 0.7 * sin( tfjWindTime * 0.8 + phase ) + 0.3 * sin( tfjWindTime * 1.4 + phase * 1.7 );
 float bend = tfjTreeWind.x * 0.014 * rise * rise * gust * wave;
 float flutter = tfjTreeWind.x * 0.002 * rise * TFJ_LEAF_FLUTTER * sin( tfjWindTime * 3.2 + phase + point.x * 2.7 + point.z * 2.1 );
 return vec3( bend + flutter, 0.0, bend * 0.45 - flutter * 0.6 );
}
`,im=`
#include <begin_vertex>
#ifdef USE_INSTANCING
 vec3 tfjWorld = ( instanceMatrix * vec4( transformed, 1.0 ) ).xyz;
 vec3 tfjOffset = tfjTreeWindOffset( tfjWorld );
 mat3 tfjBasis = mat3( instanceMatrix );
 transformed += vec3(
  dot( tfjBasis[0], tfjOffset ) / dot( tfjBasis[0], tfjBasis[0] ),
  dot( tfjBasis[1], tfjOffset ) / dot( tfjBasis[1], tfjBasis[1] ),
  dot( tfjBasis[2], tfjOffset ) / dot( tfjBasis[2], tfjBasis[2] )
 );
#endif
`;function Va(s,e,t){let n=s.clone();return n.onBeforeCompile=i=>{i.vertexShader.includes("#include <begin_vertex>")&&(i.uniforms.tfjWindTime=e,i.vertexShader=`#define TFJ_LEAF_FLUTTER ${t.toFixed(2)}
`+nm+i.vertexShader.replace("#include <begin_vertex>",im))},n.customProgramCacheKey=()=>`tfj-tree-wind-v1-${t}`,n}function jr(s,e,t,n,i,r=!1){if(!i.length)return null;if(r){t=t.clone();let l=new Float32Array(i.length*2);for(let c=0;c<i.length;c++)l.set(i[c].wind,c*2);t.setAttribute("tfjTreeWind",new Xn(l,2))}let o=new xt(t,n,i.length);o.name=e,o.castShadow=o.receiveShadow=!1;let a=new Xe;for(let l=0;l<i.length;l++){let c=i[l];a.position.copy(c.position),a.quaternion.copy(c.quaternion),a.scale.copy(c.scale),a.updateMatrix(),o.setMatrixAt(l,a.matrix),o.setColorAt(l,c.color)}if(o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,o.computeBoundingBox(),o.computeBoundingSphere(),r){let l=i.reduce((u,h)=>Math.max(u,h.wind[0]),0),c=new x(l*.016,0,l*.0075);o.boundingBox.expandByVector(c),o.boundingSphere.radius+=c.length(),o.userData.windPadding=c}return s.add(o),o}function kc(s,e=[]){let t=new pe;t.name="Natural exterior trees",s.add(t);let n=tm(),i=[],r=[],o=[[],[],[]],a=[[],[],[]],l=new x(0,1,0),c=new x,u=[],h={value:0},f=0,d,p=e.filter(m=>Number.isFinite(m?.x)&&Number.isFinite(m?.z)).length,g=p>64,b=g?15:22,y=4,C=Math.max(8,Math.min(g?96:144,Math.floor((99e3/Math.max(1,p)-n.trunk.index.count/3-b*n.branch.index.count/3-y*n.crown.index.count/3)/2)));function v(m,T,P,_,M){let R=P.clone().sub(T);m.push({position:T.clone().add(P).multiplyScalar(.5),quaternion:new be().setFromUnitVectors(l,R.clone().normalize()),scale:new x(_,R.length(),_),color:M,wind:d})}for(let m=0;m<e.length;m++){let T=e[m];if(!Number.isFinite(T?.x)||!Number.isFinite(T?.z))continue;let P=Kp(T.seed??`${T.x},${T.z}`),_=Qr(P),M=Number.isFinite(T.height)&&T.height>0?T.height:6,R=Number.isFinite(T.width)&&T.width>0?T.width:4,L=T.x,A=T.z,I=(_()-.5)*M*.075,O=(_()-.5)*M*.065,B=M*(.027+_()*.006),F=new Be().setRGB(.72+_()*.16,.73+_()*.12,.69+_()*.13);d=[M,P/4294967296*Math.PI*2];let U=new x(L,0,A),H=new x(L+I,M*.56,A+O),w=new x(L+I*.95,M*.84,A+O*.95);v(i,U,H,B,F),v(r,H,w,B*.4,F);let $=g?2:3;for(let S=0;S<$;S++){let V=S*Math.PI*2/$+_()*.5,q=B*(1.8+_());v(r,new x(L,B*1.3,A),new x(L+Math.cos(V)*q,-.025,A+Math.sin(V)*q),B*.48,F)}let D=[{center:w,radiusX:R*.2,radiusY:M*.135,radiusZ:R*.2}],E=_()*Math.PI*2,N=.8+_()*.26;for(let S=0;S<6;S++){let V=E+S*Math.PI*2/6+(_()-.5)*.45,q=R*(.21+_()*.09),Z=new x(L+I*.75+Math.cos(V)*q*N,M*(.55+S%3*.085+_()*.055),A+O*.75+Math.sin(V)*q),Y=M*(.23+_()*.29),k=new x(L+I*Y/(M*.56),Y,A+O*Y/(M*.56));v(r,k,Z,B*(.24+_()*.1),F);for(let ne of g?[S%2?1:-1]:[-1,1]){let J=V+ne*(.38+_()*.35),re=Z.clone().add(new x(Math.cos(J)*R*.095,M*(.045+_()*.075),Math.sin(J)*R*.095));v(r,k.clone().lerp(Z,.66),re,B*.1,F)}D.push({center:Z,radiusX:R*(.16+_()*.07),radiusY:M*(.105+_()*.055),radiusZ:R*(.17+_()*.05)})}let z=.9+_()*.1;for(let S=0;S<y;S++){let V=S===0?D[0]:D[1+(S-1)*2],q=V.center.clone(),Z=R*(S===0?.275:.245+_()*.025),Y=M*(S===0?.158:.16+_()*.015),k=R*(.235+_()*.035),ne=R*.5-Math.max(Z,k)*1.04,J=q.x-L,re=q.z-A,X=Math.hypot(J,re);X>ne&&(q.x=L+J*ne/X,q.z=A+re*ne/X),a[S%3].push({position:q,quaternion:new be().setFromEuler(new nn((_()-.5)*.16,_()*Math.PI*2,(_()-.5)*.14)),scale:new x(Z,Y,k),color:new Be().setRGB(z*(.94+_()*.06),z,z*(.92+_()*.06)),wind:d})}let G=Math.max(8,C-Math.floor(_()*(g?12:20)));for(let S=0;S<G;S++){let V=D[S%D.length],q=_()*Math.PI*2,Z=_()*2-1,Y=Math.cbrt(_()),k=Math.sqrt(1-Z*Z),ne=V.center.clone().add(new x(Math.cos(q)*k*Y*V.radiusX,Z*Y*V.radiusY,Math.sin(q)*k*Y*V.radiusZ)),J=R*((g?.115:.092)+_()*.035),re=J*(.9+_()*.24),X=ne.x-L,ie=ne.z-A,Q=Math.hypot(X,ie),ae=Math.max(R*.1,R*.5-Math.hypot(J,re)*.5);Q>ae&&(ne.x=L+X*ae/Q,ne.z=A+ie*ae/Q),ne.y=Ge.clamp(ne.y,M*.34,M*.965),ne.y=Math.min(ne.y,M-re*.55),c.set(Math.cos(q),(.5-_())*1.35,Math.sin(q)).normalize();let te=new be().setFromUnitVectors(new x(0,0,1),c);te.multiply(new be().setFromAxisAngle(new x(0,0,1),(_()-.5)*1.4));let ge=z*(.83+_()*.17),fe=new Be().setRGB(ge*(.94+_()*.06),ge,ge*(.91+_()*.08));o[S%3].push({position:ne,quaternion:te,scale:new x(J,re,1),color:fe,wind:d})}u.push({x:L,z:A,height:M,width:R,seed:P,leafCount:G})}return jr(t,"Tapered bark trunks",n.trunk,n.wood,i),jr(t,"Forked branches and root flares",n.branch,Va(n.wood,h,0),r,!0),a.forEach((m,T)=>jr(t,"Opaque leaf crowns "+(T+1),n.crown,Va(n.crowns[T],h,.2),m,!0)),o.forEach((m,T)=>jr(t,"Leaf sprays "+(T+1),n.leaf,Va(n.leaves[T],h,1),m,!0)),t.userData.treeCount=i.length,t.userData.foliageInstances=o.reduce((m,T)=>m+T.length,0),t.userData.branchInstances=r.length,t.userData.crownInstances=a.reduce((m,T)=>m+T.length,0),t.userData.opaqueCrownCoverage=1,t.userData.triangles=i.length*n.trunk.index.count/3+r.length*n.branch.index.count/3+t.userData.crownInstances*n.crown.index.count/3+t.userData.foliageInstances*2,t.userData.drawCalls=t.children.length,t.userData.placements=u,t.update=m=>{!Number.isFinite(m)||m<=0||(f+=Math.min(m,.1),h.value=f%(Math.PI*20))},t.userData.wind={gpu:!0,animatedMeshes:t.children.filter(m=>m.geometry.hasAttribute("tfjTreeWind")).length,cpuMatrixUpdates:0,get elapsed(){return f},get shaderTime(){return h.value},maxHorizontalFraction:.016},t}var Lt=32,Ht=26,lt=6.5,sm=26.35,Vc=[{name:"Neighbour workshop",left:-60,right:-24,door:-40,office:-53,ridge:.64,muted:!0},{name:"A&M Ceramics Ltd",left:-24,right:8,door:-3.5,office:-18,ridge:.82,brand:"am"},{name:"Neil Signs",left:8,right:40,door:19.5,office:34,ridge:.82,brand:"neil"},{name:"Neighbour warehouse",left:40,right:60,door:54,office:44,ridge:.55,muted:!0}];function rm(s){let e=document.createElement("canvas");e.width=s==="neil"?1536:1792,e.height=256;let t=e.getContext("2d");if(t.fillStyle="#f7f7f2",t.fillRect(0,0,e.width,256),s==="neil"){let i="#852477",r="#b5d735";for(let[a,l,c]of[[105,44,i],[162,44,r],[219,44,i],[105,101,r],[162,101,i],[219,101,r],[162,158,r],[219,158,i]])t.save(),t.translate(a,l),t.rotate(Math.PI/4),t.fillStyle=c,t.fillRect(-19,-19,38,38),t.restore();t.textAlign="left",t.fillStyle=i,t.font="italic 600 158px Arial",t.fillText("neil",315,165);let o=t.measureText("neil").width;t.fillStyle=r,t.font="italic 700 149px Arial",t.fillText("signs",325+o,164),t.fillStyle="#626267",t.font="39px Arial",t.fillText("signmakers & vehicle graphics",322,225)}else t.fillStyle="#26789e",t.fillRect(38,51,113,122),t.fillStyle="#a8c9d7",t.fillRect(47,60,44,99),t.fillStyle="#f7f7f2",t.fillRect(98,60,43,45),t.fillStyle="#1a3456",t.textAlign="left",t.font="italic 700 108px Arial",t.fillText("A&M Ceramics Ltd",222,145,1330),t.font="36px Arial",t.fillText("UNIT 4  \xB7  KETTERER COURT",225,213),t.fillStyle="#146cba",t.fillRect(1612,0,180,256),t.fillStyle="#ffffff",t.textAlign="center",t.font="italic 700 175px Arial",t.fillText("4",1702,193);let n=new Ie(e);return n.colorSpace=Ae,n.anisotropy=4,new ve({map:n,color:16777215,side:nt})}function Gc(s){let e=new pe;e.name="Ketterer Court \xB7 opposite industrial units",s.add(e);let t=(_,M=.8,R=0)=>new Se({color:_,roughness:M,metalness:R}),n={cladding:t("#b0b7bc",.82,.18),muted:t("#97a4ae",.9,.12),ribs:t("#c0c5c7",.8,.17),blue:t("#095d9e",.6,.22),mutedBlue:t("#416880",.74,.2),door:t("#116caf",.7,.17),roof:t("#6a7b84",.83,.26),roofRib:t("#82909a",.79,.25),tan:t("#a99883",.96),dark:t("#263b49",.7,.28),steel:t("#697d87",.65,.5),glass:t("#28485c",.2,.52),glassReflection:t("#728c98",.36,.3),white:t("#eceade",.95),concrete:t("#8d9494",1),black:t("#273032",.95),lamp:new Se({color:"#e4e8df",emissive:"#bcc8c7",emissiveIntensity:.2,roughness:.5})},i=document.createElement("canvas");i.width=256,i.height=8;let r=i.getContext("2d"),o=r.createImageData(256,8);for(let _=0;_<8;_++)for(let M=0;M<256;M++){let R=Math.sin(M/8*Math.PI*2)*.6,L=Math.sqrt(1-R*R),A=(_*256+M)*4;o.data[A]=(R*.5+.5)*255,o.data[A+1]=128,o.data[A+2]=(L*.5+.5)*255,o.data[A+3]=255}r.putImageData(o,0,0);let a=new Ie(i);a.wrapS=a.wrapT=qt,a.repeat.set(8,1),a.anisotropy=4;for(let _ of[n.cladding,n.muted])_.normalMap=a,_.normalScale.set(.7,.7);let l=new Map,c=new Xe,u=new Me(1,1,1),h=[];function f(_,M,R,L,A,I,O,B=0,F=0,U=0){l.has(_)||l.set(_,[]),l.get(_).push({w:M,h:R,d:L,x:A,y:I,z:O,rx:B,ry:F,rz:U})}function d(_,M,R,L,A=L){let I=new x(...M),O=new x(...R),B=O.clone().sub(I),F=I.clone().add(O).multiplyScalar(.5),U=new be().setFromUnitVectors(new x(1,0,0),B.clone().normalize());l.has(_)||l.set(_,[]),l.get(_).push({w:B.length(),h:L,d:A,x:F.x,y:F.y,z:F.z,quaternion:U})}function p(_,M,R){let L=(_+M)/2;for(let A of[Lt-.006,Lt+Ht+.006])A<Lt?h.push(_,lt,A,L,lt+R,A,M,lt,A):h.push(M,lt,A,L,lt+R,A,_,lt,A)}function g(_,M,R,L){let A=Lt-.2;f(n.dark,M+.37,R+.18,.13,_,R/2,A+.025),f(L,M,R,.08,_,R/2+.035,A-.06);for(let I=.15;I<R;I+=.2)f(n.blue,M-.035,.022,.026,_,I,A-.12);for(let I of[-1,1])f(n.blue,.18,R+.25,.24,_+I*(M/2+.11),(R+.25)/2,A-.08);f(n.blue,M+.58,.37,.42,_,R+.22,A-.1),f(n.dark,M,.07,.15,_,.055,A-.08),f(n.steel,.3,.055,.035,_,.93,A-.13),f(n.black,M+.6,.018,.24,_,.017,30.72);for(let I=0;I<18;I++)f(n.steel,.035,.011,.2,_-(M+.4)/2+(I+.5)*(M+.4)/18,.031,30.72)}function b(_,M,R){let L=Lt-.22,A=.78,I=2.9,O=_-M*.25;f(n.tan,M,.78,.16,_,.39,L),f(n.dark,M,I-A,.1,_,(I+A)/2,L-.035),f(n.glass,M-.12,I-A-.14,.033,_,(I+A)/2,L-.095),f(n.glassReflection,M-.17,.31,.01,_,2.52,L-.116);for(let B=0;B<=6;B++)f(R,.065,I-A+.06,.075,_-M/2+B*M/6,(I+A)/2,L-.135);for(let B of[A,1.82,I])f(R,M+.1,.077,.088,_,B,L-.145);f(n.dark,1.02,2.29,.055,O,1.145,L-.155),f(n.glass,.87,2.13,.014,O,1.135,L-.191);for(let B of[-1,1])f(R,.066,2.36,.052,O+B*.53,1.18,L-.2);f(R,1.12,.075,.059,O,2.36,L-.2),f(n.steel,.028,.43,.065,O+.37,1.1,L-.232),f(R,M+.37,.24,.92,_,3.045,L-.26),f(n.tan,M+.1,.055,.43,_,.041,L-.24)}function y(_,M){f(n.dark,.43,.28,.2,_,M,31.57,.13),f(n.lamp,.355,.185,.016,_,M-.007,31.455,.13),d(n.steel,[_,M,31.93],[_,M,31.64],.045)}function C(_,M,R,L,A){f(n.dark,L+.13,A+.13,.085,M,R,31.57);let I=new me(new Le(L,A),rm(_));return I.name=_==="neil"?"Neil Signs \xB7 reference wordmark":"A&M Ceramics Ltd \xB7 unit 4",I.position.set(M,R,31.51),I.rotation.y=Math.PI,e.add(I),{name:I.name,x:M,y:R,z:31.51,yaw:Math.PI,width:L,height:A}}let v=[];for(let _ of Vc){let{left:M,right:R,ridge:L}=_,A=R-M,I=(M+R)/2,O=_.muted?n.mutedBlue:n.blue;f(_.muted?n.muted:n.cladding,A,lt,Ht,I,lt/2,Lt+Ht/2),f(n.tan,A,.78,.08,I,.39,Lt-.045);for(let B=M+.22;B<R;B+=.49)f(_.muted?n.muted:n.ribs,.035,lt-.83,.036,B,(lt+.83)/2,Lt-.04);p(M,R,L);for(let B of[-1,1]){let F=A/2+.22,U=L+.02,H=Math.hypot(F,U),w=-B*Math.atan2(U,F),$=I+B*A/4;f(n.roof,H,.095,Ht+.54,$,lt+L/2+.05,Lt+Ht/2,0,0,w),d(O,[I+B*(A/2+.25),lt+.08,31.71],[I,lt+L+.11,31.71],.13,.18);for(let D=I+B*.45;B>0?D<R:D>M;D+=B*.88){let E=lt+L*(1-Math.abs(D-I)/(A/2))+.12;f(n.roofRib,.025,.035,Ht+.38,D,E,Lt+Ht/2,0,0,w)}}f(O,.15,.15,Ht+.6,I,lt+L+.13,Lt+Ht/2);for(let B of[M+.09,R-.09]){f(O,.19,lt,.17,B,lt/2,31.87),f(n.dark,.16,.15,Ht+.2,B,lt-.01,Lt+Ht/2),f(n.dark,.11,5.92,.11,B,.23+5.92/2,31.73);for(let F of[.4,2.2,4.1,5.8])f(n.steel,.17,.07,.15,B,F,31.73);f(n.dark,.14,.14,.37,B,.19,31.62)}f(O,A+.22,.32,.14,I,6.22,31.87),g(_.door,_.muted?5.5:6.2,4.45,_.muted?n.mutedBlue:n.door),b(_.office,_.muted?4.2:8.8,O),y(M+A*.12,5.65),y(M+A*.88,5.65),_.brand==="neil"&&v.push(C("neil",26.45,5.62,9.15,1.52)),_.brand==="am"&&v.push(C("am",-12,5.62,10.65,1.52))}for(let _ of[-60.03,60.03])for(let M=Lt+.3;M<Lt+Ht;M+=.7)f(n.ribs,.035,lt-.83,.035,_,(lt+.83)/2,M);f(n.concrete,120,.012,5.4,0,.003,29.08);for(let _ of[-58,-54,-50,-22,-18,-14,12,16,20,30,34,38,46,50,54,58])f(n.white,.065,.007,3,_,.016,28.65);for(let[_,M]of[[-54,8],[-18,8],[16,8],[34,8],[52,12]])f(n.white,M,.007,.065,_,.016,27.15);for(let _ of[-18,34])for(let M=0;M<7;M++)f(n.white,2.2,.007,.1,_,.017,29.72+M*.19);let m=[];for(let _ of[-58,-25,7,39,59])f(n.steel,.085,7.78,.085,_,3.89,27.25),f(n.steel,.09,.09,.68,_,7.77,26.97),f(n.dark,.24,.125,.55,_,7.8,26.69),f(n.lamp,.185,.016,.47,_,7.735,26.69),f(n.dark,.17,.2,.17,_,.1,27.25),m.push({x:_,z:27.25,height:7.86});if(h.length){let _=new Oe;_.setAttribute("position",new Re(h,3)),_.computeVertexNormals();let M=new me(_,n.cladding);M.name="Shallow pitched facade gables",e.add(M)}for(let[_,M]of l){let R=new xt(u,_,M.length);R.name="Estate detail batch \xB7 "+Object.keys(n).find(L=>n[L]===_);for(let L=0;L<M.length;L++){let A=M[L];c.position.set(A.x,A.y,A.z),c.scale.set(A.w,A.h,A.d),A.quaternion?c.quaternion.copy(A.quaternion):c.rotation.set(A.rx,A.ry,A.rz),c.updateMatrix(),R.setMatrixAt(L,c.matrix)}R.instanceMatrix.needsUpdate=!0,R.computeBoundingBox(),R.computeBoundingSphere(),R.castShadow=!1,R.receiveShadow=!0,e.add(R)}let T=0,P=0;return e.traverse(_=>{_.isMesh&&(P++,T+=(_.geometry.index?.count||_.geometry.attributes.position.count)/3*(_.isInstancedMesh?_.count:1))}),e.userData={...e.userData,frontZ:Lt,minZ:sm,depth:Ht,eaves:lt,units:Vc.map(_=>({..._})),signs:v,lampPosts:m,triangles:T,drawCalls:P,collidersAdded:0},e.updateMatrixWorld(!0),e}function Mi(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Oe,c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Hc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let g=0;g<o[u].length;++g)d.push(o[u][g][f]);let p=Hc(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Hc(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new gt(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let g=u.getComponent(f,p);a.setComponent(f+h,p,g)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}var om=Math.PI*2,am=[{x:-20,y:7.3651,z:-8.42,yaw:Math.PI},{x:-7,y:7.9067,z:-8.42,yaw:Math.PI},{x:18,y:7.4484,z:-10.82,yaw:Math.PI},{x:-8,y:7.525,z:32,yaw:0},{x:24,y:7.525,z:32,yaw:0},{x:50,y:7.255,z:32,yaw:0}],Wc=[{x:-17,y:15.5,z:6,radiusX:19,radiusZ:11,count:6,speed:7.5,phase:.3,heightVariation:.8},{x:20,y:18,z:12,radiusX:21,radiusZ:14,count:6,speed:8.4,phase:2.6,heightVariation:1},{x:0,y:21,z:18,radiusX:35,radiusZ:16.6,count:6,speed:9.2,phase:4.3,heightVariation:.9}],Ps=s=>new Be(s);function Is(s,e,t,n=0,i=0,r=0,o=8,a=5){return new qe(1,o,a).scale(s,e,t).translate(n,i,r)}function Xc(s,e,t=.004){let n=new x(...s),i=new x(...e),r=i.clone().sub(n),o=new ze(t,t,r.length(),3,1,!0);return o.applyQuaternion(new be().setFromUnitVectors(new x(0,1,0),r.normalize())),o.translate((n.x+i.x)*.5,(n.y+i.y)*.5,(n.z+i.z)*.5)}function Ga(s,e=!1){let t=new ft;s.forEach(([o,a],l)=>l?t.lineTo(o,-a):t.moveTo(o,-a)),t.closePath();let n=new Vt(t);n.rotateX(-Math.PI/2);let i=n.attributes.position,r=[];for(let o=0;o<i.count;o++){let a=e&&i.getX(o)>.17?.22:1;r.push(a,a,a)}return n.setAttribute("color",new Re(r,3)),n}function lm(){let s=Mi([Is(.077,.073,.155),Is(.043,.06,.07,0,.053,-.114,6,4)]),e=Is(.052,.047,.055,0,0,0,6,5),t=new sn(.012,.055,5,1);t.rotateX(-Math.PI/2),t.translate(0,-.006,-.073);let n=Mi([Is(.0048,.0048,.0048,-.0495,.01,-.019,5,3),Is(.0048,.0048,.0048,.0495,.01,-.019,5,3)]),i=Ga([[0,-.072],[.135,-.087],[.22,-.05],[.215,.062],[.09,.106],[0,.077]]),r=Ga([[0,-.05],[.13,-.069],[.232,-.025],[.27,.014],[.212,.04],[.251,.06],[.161,.069],[.225,.095],[.113,.103],[.178,.126],[.075,.115],[0,.071]],!0),o=Ga([[-.035,.12],[.035,.12],[.071,.255],[.024,.239],[0,.268],[-.024,.239],[-.071,.255]]),a=[];for(let l of[-1,1]){let c=l*.028;a.push(Xc([c,-.052,.025],[c,-.112,.023],.004));for(let u of[-1,0,1])a.push(Xc([c,-.112,.023],[c+u*.014,-.118,-.01-Math.abs(u)*.01],.0025))}return{body:s,head:e,beak:t,eyes:n,inner:i,outer:r,tail:o,feet:Mi(a)}}function ti(s,e,t,n,i){let r=new xt(t,n,i);return r.name=e,r.castShadow=r.receiveShadow=!1,r.frustumCulled=!1,r.instanceMatrix.setUsage(Sa),s.add(r),r}function an(s,e){return Number.isFinite(s)?s:e}function qc(s,{perches:e=am,routes:t=Wc}={}){let n=new pe;n.name="Yard birds \xB7 roof visitors and small flocks",s.add(n);let i=[],r=t.map((U,H)=>({x:an(U.x??U.center?.x,Wc[H%3].x),y:Math.max(13.5,an(U.y??U.center?.y,18)),z:an(U.z??U.center?.z,12),radiusX:Math.max(4,an(U.radiusX,20)),radiusZ:Math.max(4,an(U.radiusZ,12)),speed:Ge.clamp(an(U.speed,8),3,13),phase:an(U.phase,H*2.2),heightVariation:Ge.clamp(an(U.heightVariation,.9),0,1.5),count:Math.max(0,Math.min(12,Math.floor(an(U.count,6))))}));for(let U of r){let H=U.z+U.radiusZ+3.5>50;U.y=Math.max(U.y,(H?24:12.5)+U.heightVariation+.25)}let o=e.filter(U=>Number.isFinite(U?.x)&&Number.isFinite(U?.y)&&Number.isFinite(U?.z)).map(U=>({x:U.x,y:U.y+.003,z:U.z,yaw:an(U.yaw,0)}));function a(U,H,w,$){let D=i.length,E=U?D%3!==0:D%5===0,N=E?.77:.92,z=D*2.399963229728653,G=H?(H.radiusX+H.radiusZ)*.5:0,S=Math.ceil(w/2),V=w===0?0:(w%2?-1:1)*S*.58,q={id:D,perched:U,species:E?"pigeon":"gull",position:new x,velocity:new x,quaternion:new be,headQuaternion:new be,wingAngles:[0,0],gliding:!1,headTurn:0,hop:0,scale:N,phase:z,route:H,perch:$,lane:V,trail:S*.9,omega:H?H.speed/G:0,flapHz:E?4.6:3.1,bodyColor:Ps(E?"#9ca7ad":"#e7e9e1"),headColor:Ps(E?"#818f99":"#f3f2e9"),wingColor:Ps(E?"#727f8b":"#dfe3dc"),beakColor:Ps(E?"#696660":"#d6b966"),feetColor:Ps(E?"#a66f69":"#a99e78"),_previous:new x};i.push(q)}r.forEach(U=>{for(let H=0;H<U.count;H++)a(!1,U,H,null)}),o.forEach(U=>a(!0,null,0,U));let l=lm(),c=i.length,u=new Se({color:16777215,roughness:.93}),h=new Se({color:16777215,roughness:.93,side:nt,vertexColors:!0}),f=new ve({color:1514013}),d={body:ti(n,"Bird bodies and necks",l.body,u,c),head:ti(n,"Turning bird heads",l.head,u,c),beak:ti(n,"Bird beaks",l.beak,u,c),eyes:ti(n,"Bird eyes",l.eyes,f,c),inner:ti(n,"Articulated inner wings",l.inner,h,c*2),outer:ti(n,"Feather-tipped outer wings",l.outer,h,c*2),tail:ti(n,"Bird tail feathers",l.tail,h,c),feet:ti(n,"Bird feet and tucked legs",l.feet,u,c)},p=Object.values(d);i.forEach((U,H)=>{d.body.setColorAt(H,U.bodyColor),d.head.setColorAt(H,U.headColor),d.beak.setColorAt(H,U.beakColor),d.feet.setColorAt(H,U.feetColor),d.tail.setColorAt(H,U.wingColor);for(let w=0;w<2;w++)d.inner.setColorAt(H*2+w,U.wingColor),d.outer.setColorAt(H*2+w,U.wingColor)});for(let U of p)U.instanceColor&&(U.instanceColor.needsUpdate=!0);let g=new Xe,b=new x,y=new x,C=new x,v=new x,m=new be,T=new be,P=new be,_=new nn(0,0,0,"YXZ"),M=new x(0,0,1),R=new x(0,1,0),L=new x(1,0,0),A=0;function I(U,H,w,$,D,E=D,N=D){g.position.copy(w),g.quaternion.copy($),g.scale.set(D,E,N),g.updateMatrix(),U.setMatrixAt(H,g.matrix)}function O(U=0){let H=Math.max(0,Math.min(.1,an(U,0)));A+=H;for(let w of i){w._previous.copy(w.position);let $=0,D=0,E=0;if(w.perched){let N=w.perch,z=(A+w.phase*2)%17;w.hop=z<.42?Math.sin(z/.42*Math.PI)*.055:0,w.position.set(N.x+Math.sin(A*.17+w.phase)*.025,N.y+.118*w.scale+w.hop,N.z+Math.sin(A*.13+w.phase)*.018),$=N.yaw+Math.sin(A*.15+w.phase)*.14,w.headTurn=Math.sin(A*.47+w.phase)*.56+Math.sin(A*.93+w.phase)*.15,w.gliding=!1,w.wingAngles[0]=-.16,w.wingAngles[1]=0,w.velocity.copy(w.position).sub(w._previous),H?w.velocity.divideScalar(H):w.velocity.set(0,0,0)}else{let N=w.route,z=A*w.omega+N.phase-w.trail/((N.radiusX+N.radiusZ)*.5),G=N.radiusX+w.lane,S=N.radiusZ+w.lane,V=Math.sin(z),q=Math.cos(z),Z=z*.63+w.phase;w.position.set(N.x+V*G,N.y+Math.sin(Z)*N.heightVariation+Math.sin(w.phase)*.22,N.z+q*S),w.position.y=Math.max(w.position.z>50?24:12.5,w.position.y),w.velocity.set(q*G*w.omega,Math.cos(Z)*N.heightVariation*w.omega*.63,-V*S*w.omega);let Y=Math.hypot(w.velocity.x,w.velocity.z),k=-V*G*w.omega*w.omega,ne=-q*S*w.omega*w.omega,J=(w.velocity.z*k-w.velocity.x*ne)/(Y*Y);$=Math.atan2(-w.velocity.x,-w.velocity.z),D=Math.atan2(w.velocity.y,Y),E=Ge.clamp(Math.atan2(Y*J,9.81),-.43,.43),w.gliding=(A*.075+w.phase*.14)%1>.46;let re=A*w.flapHz*om+w.phase;w.wingAngles[0]=w.gliding?.08:Math.sin(re)*.63,w.wingAngles[1]=w.gliding?.015:Math.sin(re+.58)*.2,w.headTurn=Math.sin(A*.39+w.phase)*.07,w.hop=0}w.quaternion.setFromEuler(_.set(D,$,E,"YXZ")),I(d.body,w.id,w.position,w.quaternion,w.scale),b.set(0,.104,-.183).multiplyScalar(w.scale).applyQuaternion(w.quaternion),y.copy(w.position).add(b),w.headQuaternion.copy(w.quaternion).multiply(P.setFromAxisAngle(R,w.headTurn)),w.headQuaternion.multiply(P.setFromAxisAngle(L,w.perched?Math.sin(A*.7+w.phase)*.09:0)),I(d.head,w.id,y,w.headQuaternion,w.scale),I(d.beak,w.id,y,w.headQuaternion,w.scale,w.scale,w.scale*(w.species==="pigeon"?.72:1)),I(d.eyes,w.id,y,w.headQuaternion,w.scale),I(d.tail,w.id,w.position,w.quaternion,w.scale),P.copy(w.quaternion),w.perched||P.multiply(T.setFromAxisAngle(L,-.9)),I(d.feet,w.id,w.position,P,w.scale);for(let N=0;N<2;N++){let z=N===0?1:-1,G=w.id*2+N,S=w.scale*(w.species==="gull"?1.13:1.03);b.set(z*.062,.025,-.018).multiplyScalar(w.scale).applyQuaternion(w.quaternion),v.copy(w.position).add(b),m.copy(w.quaternion),w.perched?(m.multiply(P.setFromAxisAngle(R,-z*1.3)),m.multiply(P.setFromAxisAngle(M,z>0?-.16:Math.PI+.16))):m.multiply(P.setFromAxisAngle(M,z>0?w.wingAngles[0]:Math.PI-w.wingAngles[0])),I(d.inner,G,v,m,S),b.set(.215*S,0,0).applyQuaternion(m),C.copy(v).add(b),T.copy(m),w.perched?T.multiply(P.setFromAxisAngle(R,-z*2.55)):T.multiply(P.setFromAxisAngle(M,z*w.wingAngles[1])),I(d.outer,G,C,T,S)}}for(let w of p)w.instanceMatrix.needsUpdate=!0;F.clock=A}let B=Object.entries(l).reduce((U,[H,w])=>U+(w.index?.count||w.attributes.position.count)/3*(H==="inner"||H==="outer"?c*2:c),0),F={flying:i.filter(U=>!U.perched).length,perched:o.length,triangles:B,drawCalls:n.children.length,clock:0};return O(0),{root:n,states:i,update:O,stats:F,meshes:d,routes:r,perches:o}}var cm=()=>{let s=globalThis.AudioContext||globalThis.webkitAudioContext;return s?new s:null},Ls=s=>s&&[s.x,s.y,s.z].every(Number.isFinite)?{x:s.x,y:s.y,z:s.z}:null,Ha=(s,e)=>(s.x-e.x)**2+(s.y-e.y)**2+(s.z-e.z)**2;function Yc({isMuted:s=()=>!1,listener:e=()=>null,contextFactory:t=cm,random:n=Math.random}={}){let i=null,r=null,o=null,a=!1,l=!1,c=!1,u=0,h=0,f=null,d=new Set,p=()=>{let A=n();return Number.isFinite(A)?Math.max(0,Math.min(.999999,A)):.5},g=()=>{try{return!!s()}catch{return!0}};function b(){if(r&&i)try{r.gain.cancelScheduledValues(i.currentTime),r.gain.setValueAtTime(0,i.currentTime)}catch{}for(let A of[...d])A.cleanup(!0);c=!1,u=0}function y(A,I,O){let B=!1,F=O.length,U={kind:A,nodes:I,sources:O,cleanup(H=!1){if(!B){B=!0,d.delete(U);for(let w of O)if(w.onended=null,H)try{w.stop()}catch{}for(let w of I)try{w.disconnect()}catch{}}}};for(let H of O)H.onended=()=>{--F<=0&&U.cleanup()};return d.add(U),U}function C(A,I){if(A.positionX&&A.positionY&&A.positionZ)for(let O of["x","y","z"])A["position"+O.toUpperCase()].setValueAtTime(I[O],i.currentTime);else A.setPosition?.(I.x,I.y,I.z)}function v(A){if(!i.createPanner)return null;let I=i.createPanner();return I.panningModel="HRTF",I.distanceModel="inverse",I.refDistance=5,I.maxDistance=80,I.rolloffFactor=.65,C(I,A),I.connect(r),I}function m(A,I){let O=i.listener;if(!O)return;if(O.positionX)for(let U of["x","y","z"])O["position"+U.toUpperCase()].setValueAtTime(A[U],i.currentTime);else O.setPosition?.(A.x,A.y,A.z);let B=Math.hypot(I.x,I.y,I.z)||1,F={x:I.x/B,y:I.y/B,z:I.z/B};if(O.forwardX)for(let U of["x","y","z"])O["forward"+U.toUpperCase()].setValueAtTime(F[U],i.currentTime),O["up"+U.toUpperCase()].setValueAtTime(U==="y"?1:0,i.currentTime);else O.setOrientation?.(F.x,F.y,F.z,0,1,0)}function T(){if([...d].some(O=>O.kind==="breeze"))return;if(!o){o=i.createBuffer(1,Math.round(i.sampleRate*2),i.sampleRate);let O=o.getChannelData(0),B=0;for(let F=0;F<O.length;F++)B=B*.965+(p()*2-1)*.035,O[F]=B}let A=i.createBufferSource(),I=i.createGain();A.buffer=o,A.loop=!0,I.gain.setValueAtTime(0,i.currentTime),I.gain.linearRampToValueAtTime(.009,i.currentTime+1.5),A.connect(I),I.connect(r),y("breeze",[A,I],[A]),A.start()}function P(A,I){if([...d].filter(S=>S.kind==="bird").length>=2)return;let O=(Array.isArray(I)?I:[]).map(S=>Ls(S?.position||S)).filter(S=>S&&Ha(S,A)<=80**2).sort((S,V)=>Ha(S,A)-Ha(V,A)),B=p()*Math.PI*2,F=9+p()*11,U=O.length?O[Math.floor(p()*Math.min(3,O.length))]:{x:A.x+Math.sin(B)*F,y:A.y+2+p()*4,z:A.z+Math.cos(B)*F},H=i.createOscillator(),w=i.createGain(),$=v(U),D=i.currentTime+.015,E=2+Math.floor(p()*2),N=2200+p()*900,z=.07+p()*.035;H.type="sine",H.connect(w),w.connect($||r),w.gain.setValueAtTime(1e-4,i.currentTime);let G=D;for(let S=0;S<E;S++){let V=G+(S?.025+p()*.045:0),q=.07+p()*.065,Z=N*(.94+p()*.12);H.frequency.setValueAtTime(Z,V),H.frequency.exponentialRampToValueAtTime(Z*(1.17+p()*.19),V+.025),H.frequency.exponentialRampToValueAtTime(Z*(.88+p()*.1),V+q),w.gain.setValueAtTime(1e-4,V),w.gain.linearRampToValueAtTime(z,V+.015),w.gain.exponentialRampToValueAtTime(1e-4,V+q),G=V+q}y("bird",[H,w,...$?[$]:[]],[H]),H.start(D),H.stop(G+.02),h++,f={...U}}async function _(){if(l||g())return!1;try{if(!i||i.state==="closed"){if(i=t(),!i)return!1;r=i.createGain(),r.gain.setValueAtTime(0,i.currentTime),r.connect(i.destination),o=null}let A=i.state==="suspended"?i.resume():null;return a=!0,A&&await A,a}catch{return a=!1,b(),!1}}function M(A,I={}){if(!a||!i||i.state!=="running"||!I.outside||!I.active||I.muted||g()||globalThis.document?.hidden){(c||d.size)&&b();return}try{let O=e()||{},B=Ls(I.eye)||Ls(O.eye)||{x:0,y:1.7,z:0},F=Ls(I.forward)||Ls(O.forward)||{x:0,y:0,z:-1};m(B,F),c||(c=!0,u=2.5+p()*3.5,r.gain.setTargetAtTime(.16,i.currentTime,.15),T());let U=Number.isFinite(A)?Math.max(0,Math.min(.1,A)):0;u-=U,u<=0&&(P(B,I.sources),u=6+p()*9)}catch{a=!1,b()}}function R(){a=!1,b()}function L(){if(!l){R(),l=!0;try{r?.disconnect()}catch{}try{i?.close()?.catch?.(()=>{})}catch{}i=r=o=null}}return{enableAudio:_,update:M,disable:R,dispose:L,get enabled(){return a},get stats(){return{enabled:a,audible:c,disposed:l,contextState:i?.state??"unavailable",voiceCount:d.size,nodeCount:[...d].reduce((A,I)=>A+I.nodes.length,r?1:0),birdVoices:[...d].filter(A=>A.kind==="bird").length,breezeActive:[...d].some(A=>A.kind==="breeze"),birdsPlayed:h,lastBirdPosition:f&&{...f}}}}}function um(s){if(!s||![s.x,s.y,s.z].every(Number.isFinite))return!1;let e=s.x>=-26&&s.x<=-2&&s.z>=-38&&s.z<=-8,t=s.x>=-2&&s.x<=28&&s.z>=-38&&s.z<=-10.5;return!(e||t)||s.y>9}function Zc(s){let e=new pe;e.name="Ketterer Court exterior",s.worldScene.add(e);let t=window.yardExteriorTreeSites||[],n=t.map(h=>{let f=h.z>50&&Math.abs(h.x)<65,d=f?Math.max(18,h.height+7):h.height;return{...h,height:d,width:d*.88,z:f?Math.max(61,h.z+5):h.z}}),i=kc(e,n),r=Gc(e),o=new Se({color:6450762,roughness:1});for(let[h,f,d,p]of[[0,-52,195,26],[-83,10,22,116],[88,10,20,116],[0,71,195,24]]){let g=new me(new Le(d,p),o);g.rotation.x=-Math.PI/2,g.position.set(h,.004,f),g.name="Exterior grass verge",e.add(g)}let a=qc(e),l=()=>document.querySelector("#soundBtn")?.getAttribute?.("aria-pressed")==="false",c=Yc({isMuted:l}),u=a.states.map(h=>h.position);return{root:e,trees:i,buildings:r,birds:a,audio:c,enableAudio:()=>c.enableAudio(),update(h,f={}){if(f.hidden)return c.update(h,{active:!1,outside:!1});i.update(h),a.update(h),c.update(h,{...f,outside:um(f.eye),muted:l(),sources:u})}}}var Ds=.3,$c=1.15,hm=1.1,fm=.9,dm=.48,pm=[{minX:-1,maxX:9,minZ:-34,maxZ:-18,minY:0,maxY:2.8},{minX:-25,maxX:-17,minZ:-15,maxZ:-8,minY:0,maxY:2.8}],mm={Lee:{offsets:[[0,.9]],activity:"frontage",yaw:0},"Stores team":{offsets:[[0,-.75],[-.65,-.75]],activity:"inspection",yaw:Math.PI/2},"Workshop team":{offsets:[[-.55,-.55]],activity:"inspection",yaw:-Math.PI/2},Dan:{offsets:[[.55,.13]],activity:"coffee",yaw:Math.PI,partner:"Sam"},Sam:{offsets:[[-.4,.2]],activity:"chat",yaw:-Math.PI/2,partner:"Dan"}},gm=["Head","Chest","Torso","UpperArmL","UpperArmR","LowerArmL","LowerArmR","WristL","WristR","Middle1R"],Us=s=>Math.atan2(Math.sin(s),Math.cos(s)),ni=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),eo=s=>s&&Number.isFinite(s.x)&&Number.isFinite(s.y)&&Number.isFinite(s.z),xm=(s,e,t)=>s.max.y>e.y+.08&&s.min.y<e.y+1.82&&Math.hypot(Math.max(s.min.x-e.x,0,e.x-s.max.x),Math.max(s.min.z-e.z,0,e.z-s.max.z))<t;function ym(s,e){let t=e.y||0;return s.colliders.find(n=>Math.abs(n.min.x-(e.x-.3))<1e-4&&Math.abs(n.max.x-(e.x+.3))<1e-4&&Math.abs(n.min.z-(e.z-.3))<1e-4&&Math.abs(n.max.z-(e.z+.3))<1e-4&&Math.abs(n.min.y-t)<1e-4&&Math.abs(n.max.y-t-(e.seated?1.5:1.95))<1e-4)}function Jc(s,e=s.worldScene){let t=new pe;t.name="TF Jones staff routines",e?.add(t);let n=(s.staff||[]).filter(S=>S.person?.group&&S.person?.model&&typeof S.person.animate=="function").map((S,V)=>{let q=S.person,Z=q.group.position.clone(),Y=Object.fromEntries(gm.map(ne=>[ne,q.model.getObjectByName(ne)])),k={...S,record:S,index:V,name:S.spec.name,home:Z,position:Z.clone(),yaw:q.group.rotation.y,collider:ym(s,S.spec),seated:!!S.spec.seated,routine:mm[S.spec.name],route:[],routeIndex:0,wait:3+V*1.6,speed:0,state:S.spec.seated?"typing":"idle",activity:"idle",wave:0,cooldown:0,near:!1,bones:Y,basePose:new Map,originalAnimate:q.animate,originalLabelOffset:S.label.position.clone().sub(Z)};return k.restore=()=>{for(let[ne,J]of k.basePose)ne.quaternion.copy(J)},k.capture=()=>{for(let ne of Object.values(Y))ne&&(k.basePose.has(ne)?k.basePose.get(ne).copy(ne.quaternion):k.basePose.set(ne,ne.quaternion.clone()))},k.capture(),k.wrapper=()=>{},q.animate=k.wrapper,k.animate=(ne,J="idle")=>k.originalAnimate.call(q,ne,J,2.9),k}),i=new Set(n.map(S=>S.collider).filter(Boolean)),r=s.colliders.filter(S=>!i.has(S)),o=0,a=!1,l=!1,c=0,u=0,h=n.find(S=>S.name==="Dan"),f=new pe;f.name="Dan's coffee mug",f.visible=!1;let d=new ze(.043,.036,.095,10,1,!0),p=new Rt(.027,.007,5,10),g=new mi(.035,10),b=new Se({color:15265264,roughness:.5}),y=new Se({color:3745307,roughness:.7}),C=new me(d,b),v=new me(p,b),m=new me(g,y);v.position.x=-.054,m.rotation.x=-Math.PI/2,m.position.y=.039,f.add(C,v,m),h?.bones.WristR&&t.add(f);let T={actorCount:n.length,seated:n.filter(S=>S.seated).length,drawCalls:t.children.length?3:0,triangles:t.children.length?130:0,get time(){return o},get moving(){return n.filter(S=>S.speed>0).length},get greetings(){return c},get distance(){return u},get routes(){return n.filter(S=>S.route.length>1).length},get active(){return a}};function P(S){return pm.some(V=>S.y<V.maxY&&S.y+1.82>V.minY&&S.x>V.minX-Ds&&S.x<V.maxX+Ds&&S.z>V.minZ-Ds&&S.z<V.maxZ+Ds)}function _(S){if(!eo(S)||P(S))return!1;let V=s.bounds;return V&&(S.x<V.minX||S.x>V.maxX||S.z<V.minZ||S.z>V.maxZ)||Math.abs(s.groundAt(S.x,S.z,S.y+.12)-S.y)>.12?!1:!r.some(q=>xm(q,S,Ds))}function M(S,V){let q=Math.max(1,Math.ceil(ni(S,V)/.05)),Z=new x;for(let Y=0;Y<=q;Y++)if(!_(Z.copy(S).lerp(V,Y/q)))return!1;return!0}for(let S of n){if(S.seated||!S.routine||!S.collider||!_(S.home))continue;let V=[S.home.clone()];for(let[q,Z]of S.routine.offsets){let Y=S.home.clone().add(new x(q,0,Z));if(!M(V.at(-1),Y))break;V.push(Y)}V.length>1&&(S.route=[...V,...V.slice(0,-1).reverse().map(q=>q.clone())]),S.routeIndex=1}let R=new x,L=new x,A=new x,I=new x,O=new tt,B=new Ve,F=new x;function U(S,V,q=!1){return Math.abs(V.y-S.home.y-(q?1.65:0))<1.35}function H(S){if(eo(S.companion))return S.companion;let V=s.vrGames?.companion?.group;if(!V?.visible)return null;for(let q=V;q;q=q.parent)if(!q.visible)return null;return V.getWorldPosition(new x)}function w(S,V,q){if(L.y<=S.home.y+2.4&&L.y+1.75>S.home.y&&ni(V,L)<$c||U(S,R,!0)&&ni(V,R)<$c)return!1;let Z=H(q);return Z&&U(S,Z)&&ni(V,Z)<hm?!1:!n.some(Y=>Y!==S&&Math.abs(Y.home.y-S.home.y)<1.35&&ni(V,Y.position)<fm)}function $(S){if(!U(S,R,!0)||ni(S.position,R)>2.8)return!1;S.person.group.updateMatrixWorld(!0),S.bones.Head?.getWorldPosition(A),S.bones.Head||A.copy(S.position).add(new x(0,1.55,0));let V=A.distanceTo(R);return O.set(A,I.copy(R).sub(A).normalize()),!r.some(q=>(B.min.copy(q.min),B.max.copy(q.max),B.containsPoint(A)?!1:O.intersectBox(B,F)&&A.distanceTo(F)<V-.08))}function D(S){S.person.group.position.copy(S.position),S.person.group.rotation.set(0,S.yaw,0),S.spec.x=S.position.x,S.spec.y=S.position.y,S.spec.z=S.position.z,S.label.position.copy(S.position).add(S.originalLabelOffset),eo(R)&&S.label.lookAt(R),S.collider&&!S.seated&&(S.collider.min.set(S.position.x-.3,S.position.y,S.position.z-.3),S.collider.max.set(S.position.x+.3,S.position.y+1.95,S.position.z+.3))}function E(S,V,q){let Z=S.bones[V];if(!Z)return;let Y=Z.parent.getWorldQuaternion(new be),k=Z.getWorldQuaternion(new be),ne=new x(0,1,0).applyQuaternion(k),J=new x(...q).normalize().applyQuaternion(S.person.group.getWorldQuaternion(new be));Z.quaternion.copy(Y.invert().multiply(new be().setFromUnitVectors(ne,J).multiply(k))),S.person.model.updateMatrixWorld(!0)}function N(S,V){let q=o+S.index*.73,Z=S.bones.Head,Y=S.bones.Chest||S.bones.Torso;if(S.seated){for(let k of["L","R"])S.bones["LowerArm"+k]?.rotateX(Math.sin(q*8+(k==="L"?0:2))*.026),S.bones["Wrist"+k]?.rotateZ(Math.sin(q*11+(k==="L"?0:2))*.018);Y?.rotateX(.018+Math.sin(q*.9)*.008)}else S.activity==="coffee"&&!S.speed&&!S.wave?(E(S,"UpperArmR",[.18,-.4,.45]),E(S,"LowerArmR",[-.18,.7,.35])):S.activity==="inspection"&&!S.speed&&!S.wave?(Y?.rotateX(.055),S.bones.LowerArmR?.rotateX(Math.sin(q*1.4)*.045)):S.activity==="chat"&&!S.speed&&!S.wave&&S.bones.LowerArmL?.rotateZ(Math.sin(q*1.7)*.06);if(Z)if(V){S.person.model.updateMatrixWorld(!0),Z.getWorldPosition(A);let k=Math.atan2(R.x-S.position.x,R.z-S.position.z),ne=Math.atan2(R.y-A.y,ni(S.position,R));Z.rotateY(Ge.clamp(Us(k-S.yaw),-.5,.5)),Z.rotateX(-Ge.clamp(ne,-.28,.28))}else Z.rotateX(Math.sin(q*(S.activity==="chat"?2.3:.8))*.018+(S.seated?.06:S.activity==="inspection"?.08:0))}function z(S,V={}){if(l)return;let q=s.stats(),Z=V.active??q.playing,Y=Z&&!V.hidden&&(!V.mode||V.mode==="explore");if(L.set(q.x,q.y,q.z),R.copy(eo(V.eye)?V.eye:new x(q.x,q.y+1.65,q.z)),!Y){if(a)for(let k of n)k.speed=0;a=!1;for(let k of n)D(k);return}if(a=!0,!Number.isFinite(S)||S<=0){for(let k of n)D(k);return}S=Math.min(S,.1),o+=S;for(let k of n){k.restore();let ne=$(k);if(k.cooldown=Math.max(0,k.cooldown-S),ne&&!k.near&&!k.cooldown&&!k.seated&&(k.wave=1.6,k.cooldown=14,c++),k.near=ne,k.wave=Math.max(0,k.wave-S),k.speed=0,k.wave)k.state="greeting",k.activity="greeting",k.yaw+=Us(Math.atan2(R.x-k.position.x,R.z-k.position.z)-k.yaw)*Math.min(1,S*4);else if(k.seated)k.state="typing",k.activity="typing";else if(k.route.length>1)if(k.wait=Math.max(0,k.wait-S),k.wait){k.state=k.activity;let J=k.activity==="chat"&&n.find(X=>X.name===k.routine.partner),re=J?Math.atan2(J.position.x-k.position.x,J.position.z-k.position.z):k.routine.yaw??k.spec.rot??0;k.yaw+=Us(re-k.yaw)*Math.min(1,S*2)}else{let J=k.route[k.routeIndex],re=ni(k.position,J),X=Math.atan2(J.x-k.position.x,J.z-k.position.z);if(re<.015)k.position.copy(J),k.activity=k.routeIndex===k.route.length-1?"chat":k.routine.activity,k.wait=k.routeIndex===k.route.length-1?9:k.routine.activity==="coffee"?6:4,k.routeIndex=k.routeIndex===k.route.length-1?1:k.routeIndex+1,k.state=k.activity;else if(k.yaw+=Us(X-k.yaw)*Math.min(1,S*5),k.state="waiting",Math.abs(Us(X-k.yaw))<.2){let ie=Math.min(re,dm*S),Q=k.position.clone().lerp(J,ie/re);M(k.position,Q)&&w(k,Q,V)&&(k.position.copy(Q),k.speed=ie/S,k.state="walking",k.activity="walking",u+=ie)}}else k.state="idle",k.activity="idle";D(k),k.animate(k.speed?S*k.speed/1.2:S,k.wave?"wave":k.speed?"walk":"idle"),k.capture(),k.person.group.updateMatrixWorld(!0),N(k,ne)}f.visible=!!h?.bones.WristR&&h.activity==="coffee"&&!h.speed&&!h.wave,f.visible&&(h.person.group.updateMatrixWorld(!0),(h.bones.Middle1R||h.bones.WristR).getWorldPosition(A),A.add(I.set(.054,-.012,0).applyQuaternion(h.person.group.getWorldQuaternion(new be))),t.updateMatrixWorld(!0),f.position.copy(t.worldToLocal(A)),f.quaternion.copy(t.getWorldQuaternion(new be).invert().multiply(h.person.group.getWorldQuaternion(new be))))}function G(){if(!l){l=!0;for(let S of n)S.restore(),S.person.animate===S.wrapper&&(S.person.animate=S.originalAnimate);t.removeFromParent();for(let S of[d,p,g])S.dispose();b.dispose(),y.dispose()}}return t.userData={actors:n.length,addedModels:0,drawCalls:T.drawCalls},{root:t,update:z,stats:T,actors:n,dispose:G,clear:_,segmentClear:M,mug:f}}var ii=1391958,Ya=16765794,ct=15791089,pt=2107441,pn=9016987,Wa=13080691,_m=.002,Jt=-.019,ln=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),Ft=s=>s*s*(3-2*s),io=new Me(1,1,1),eu=new qe(1,10,6),tu=new Se({vertexColors:!0,roughness:.72,metalness:.04}),Kc=new Se({color:2639705,roughness:.24,metalness:.16}),jc=3439/1235,si;function vm(){if(si)return si;let s=globalThis.document?.querySelector?.("img[data-delivery-logo]");!s&&globalThis.Image&&(s=new Image,s.src="./assets/tfj-delivery-logo.png");let e=new hn(s);e.colorSpace=Ae,si={texture:e,image:s,ready:!!(s?.complete&&s.naturalWidth>0),panels:[]};let t=()=>{if(s?.naturalWidth>0){si.ready=!0,e.needsUpdate=!0;for(let n of si.panels)n.visible=!0}};return si.ready?e.needsUpdate=!0:s?.addEventListener?.("load",t,{once:!0}),si}function nu(s,e){let t=new Float32Array(s.attributes.position.count*3),n=new Be(e);for(let i=0;i<t.length;i+=3)t[i]=n.r,t[i+1]=n.g,t[i+2]=n.b;return s.setAttribute("color",new gt(t,3)),s}function Dn(s,e,t=tu){let n=[],i=new Xe;return{add(r,o,a,l,c,u,h,f,d=0,p=0,g=0){i.position.set(o,a,l),i.rotation.set(d,p,g),i.scale.set(c,u,h),i.updateMatrix(),n.push(nu(r.clone().applyMatrix4(i.matrix),f))},box(r,o,a,l,c,u,h,f=0,d=0,p=0){this.add(io,r,o,a,l,c,u,h,f,d,p)},finish(){let r=Mi(n);for(let a of n)a.dispose();let o=new me(r,t);return o.name=e,o.castShadow=o.receiveShadow=!1,s.add(o),o}}}function Xa(s,e,t,n,i,r=0){let o=vm(),a=Math.abs(Math.sin(r))>.9,l=new ve({map:o.texture,color:16777215,alphaTest:.03,polygonOffset:!0,polygonOffsetFactor:-1}),c=new me(new Le(a?i:i/.9,i/jc),l);return c.position.set(e,t,n),c.rotation.y=r,c.name="Full official TF Jones delivery logo",c.visible=o.ready,c.userData.logoRatio=jc,o.panels.push(c),s.add(c),c}function Mm(s){let e=new pe;e.name="TF Jones delivery van",e.scale.x=.9,s.add(e);let t=Dn(e,"Delivery van body, trim and fittings");t.box(0,.48,-.07,1.87,.24,4.9,pt),t.box(0,.91,-2.11,1.9,.42,.95,ct),t.box(0,.63,-1.54,1.9,.12,1.74,pt),t.box(0,1.18,-2.35,1.9,.61,.1,ct),t.box(0,1.52,-.85,1.9,1.54,.08,ct),t.box(0,2.32,-1.45,1.93,.14,1.75,ct),t.box(-.94,1.49,.55,.07,1.91,3.37,ct),t.box(.94,1.49,.55,.07,1.91,3.37,ct),t.box(0,2.43,.55,1.94,.1,3.37,ct),t.box(0,.59,.55,1.94,.12,3.37,pn),t.box(0,1.49,-1.1,1.87,1.9,.08,pt);for(let P of[-1,1])t.box(P*.94,1.7,-2.18,.069,1.19,.077,ct,.17),t.box(P*.94,1.69,-.895,.069,1.18,.08,ct),t.box(P*1.04,1.71,-2.04,.21,.16,.15,pt),t.box(P*1.015,.49,-1.43,.16,.1,.64,pn),t.box(P*.44,1.11,-1.43,.4,.16,.46,pt),t.box(P*.44,1.47,-1.13,.39,.62,.1,pt),t.box(P*.44,1.88,-1.12,.23,.19,.11,pt);t.box(0,1.26,-2.08,1.81,.24,.29,pt),t.box(0,.55,-2.64,1.96,.22,.16,pt),t.box(0,.89,-2.597,.98,.24,.015,pt);for(let P=0;P<4;P++)t.box(0,.805+P*.047,-2.612,.88,.017,.022,pn);t.box(0,.63,2.37,1.96,.16,.26,pt),t.box(0,.57,2.47,.91,.065,.22,pn),t.box(0,2.31,2.259,1.86,.12,.04,ct),t.box(0,.565,-2.729,.4,.105,.012,ct),t.box(0,.515,2.512,.4,.105,.012,Ya),t.finish();let n=Dn(e,"Van glazed cab",Kc);n.box(0,1.91,-2.388,1.69,.73,.028,ct,.17),n.finish(),Xa(e,-.981,1.64,.54,2.65,-Math.PI/2),Xa(e,.981,1.64,.54,2.65,Math.PI/2);let i=[];for(let P of[-1,1]){let _=new pe;_.name=P===1?"Driver cab door":"Passenger cab door",_.position.set(P*.953,1.33,-2.12),e.add(_);let M=Dn(_,"White cab door and window frame");M.box(0,-.085,.565,.063,.83,1.18,ct),M.box(0,.315,.565,.07,.044,1.18,pt),M.box(0,.97,.565,.064,.075,1.18,ct),M.box(0,.635,.032,.064,.64,.06,ct),M.box(0,.635,1.105,.064,.64,.06,ct),M.box(P*.047,.02,.86,.023,.038,.22,pn),M.finish();let R=Dn(_,"Cab door glass",Kc);R.box(0,.635,.565,.026,.6,1.02,ct),R.finish(),i.push({pivot:_,side:P})}let r=[];for(let P of[-1,1]){let _=new pe;_.position.set(P*.94,1.5,2.247),e.add(_);let M=Dn(_,"Hinged delivery cargo door");M.box(-P*.47,0,0,.928,1.84,.053,ct),M.box(-P*.08,.04,.037,.048,.29,.04,pt);for(let R of[-.66,.65])M.box(0,R,.025,.051,.18,.082,pn);M.finish(),Xa(_,-P*.47,.37,.042,.78),r.push({pivot:_,side:P})}let o=new xt(new ze(.36,.36,.24,14,1),new Se({color:pt,roughness:.94}),4),a=[],l=new Xe,c=(P,_,M,R,L,A,I,O)=>{l.position.set(_,M,R),l.scale.set(L,A,I),l.rotation.set(0,0,0),l.updateMatrix(),a.push(nu(P.applyMatrix4(l.matrix),O))};c(new ze(.22,.22,.245,12),0,0,0,1,1,1,pn);for(let P of[-1,1])for(let _=0;_<6;_++){let M=_*Math.PI/3;c(io.clone(),Math.sin(M)*.125,P*.125,Math.cos(M)*.125,.055,.022,.055,pt)}let u=new xt(Mi(a),tu,4);for(let P of a)P.dispose();o.name="Delivery tyres",u.name="Delivery wheel hubs",e.add(o,u);let h=[];for(let P of[-1.61,1.52])for(let _ of[-1,1]){let M=new Xe;M.position.set(_*.97,.36,P),e.add(M),h.push(M)}let f=Dn(e,"Van headlights and tail lamps",new ve({vertexColors:!0}));for(let P of[-1,1])f.box(P*.69,1.013,-2.604,.41,.18,.035,16772550),f.box(P*.88,1.43,2.275,.13,.42,.035,14959159);f.finish();let d=new xt(io,new ve({color:16777215}),4),p=[[-.89,1.014,-2.61],[.89,1.014,-2.61],[-.88,1.71,2.28],[.88,1.71,2.28]];for(let P=0;P<4;P++)l.position.set(...p[P]),l.rotation.set(0,0,0),l.scale.set(.1,.09,.042),l.updateMatrix(),d.setMatrixAt(P,l.matrix);e.add(d),d.name="Delivery indicators";let g=on(3.5,6.2);g.position.y=.009,e.add(g);let b=new We,y=new be,C=new be().setFromAxisAngle(new x(0,0,1),Math.PI/2),v=new Be(16758062),m=new Be(8411438),T=0;return{root:e,doors:r,cabDoors:i,tires:o,rims:u,indicators:d,wheelNodes:h,update(P,_,M,R,L=0){T-=P/.36;for(let A=0;A<4;A++)y.setFromAxisAngle(new x(1,0,0),T).multiply(C),b.compose(h[A].position,y,new x(1,1,1)),o.setMatrixAt(A,b),u.setMatrixAt(A,b),d.setColorAt(A,M&&Math.sin(R*9)>0?v:m);o.instanceMatrix.needsUpdate=u.instanceMatrix.needsUpdate=!0,d.instanceColor.needsUpdate=!0;for(let A of r)A.pivot.rotation.y=A.side*_*1.48;for(let A of i)A.pivot.rotation.y=A.side*(A.side===1?L*1.35:0)},get wheelAngle(){return T}}}function Za(s,e){let t=new pe;t.name=e,s.add(t);let n=Dn(t,e+" cardboard and tape");return n.box(0,0,0,.36,.31,.29,11701334),n.box(0,.159,0,.057,.011,.291,14862744),n.box(0,0,-.15,.058,.31,.011,14862744),n.box(.093,.065,-.158,.091,.056,.005,ct),n.finish(),t}function bm(s){let e=new pe;e.name="TF Jones delivery courier",s.add(e);let t=[],n=[],i={},r=[];function o(P,_,M,R,L){let A=new Xe;return A.position.set(M,R,L),_.add(A),i[P]=A,A}function a(P,_,M,R,L,A,I,O,B){let F=new Xe;return F.position.set(M,R,L),F.scale.set(A,I,O),P.add(F),(_==="round"?n:t).push({p:F,color:B}),F}let l=o("hips",e,0,.9,0),c=o("spine",e,0,1.02,0),u=o("head",c,0,.59,0);a(l,"box",0,.01,0,.31,.2,.19,ii),a(c,"box",0,.19,0,.38,.48,.22,ii),a(c,"box",-.127,.21,-.12,.077,.43,.025,Ya),a(c,"box",.127,.21,-.12,.077,.43,.025,Ya),a(c,"box",0,.09,-.132,.37,.047,.014,ct),a(c,"box",0,.3,.124,.37,.047,.014,ct),a(u,"round",0,.015,0,.113,.135,.103,Wa),a(u,"box",0,.121,0,.226,.06,.211,ii),a(u,"box",0,.102,-.11,.22,.019,.104,ii),a(u,"round",0,.015,-.099,.025,.024,.029,Wa);for(let P of[-1,1]){a(u,"box",P*.045,.047,-.102,.019,.017,.012,pt);let _=o("thigh"+P,l,P*.095,-.035,0),M=o("knee"+P,_,0,-.4,0),R=o("ankle"+P,M,0,-.4,0);a(_,"box",0,-.2,0,.135,.41,.16,ii),a(M,"box",0,-.2,0,.119,.41,.136,ii),r.push({ankle:R,part:a(R,"box",0,-.015,-.049,.145,.1,.24,pt)});let L=o("shoulder"+P,c,P*.22,.36,0),A=o("elbow"+P,L,0,-.28,0);a(L,"box",0,-.14,0,.125,.29,.135,ii),a(A,"box",0,-.13,0,.105,.27,.115,ii),a(A,"round",0,-.285,0,.064,.075,.049,Wa)}let h=new xt(io,new Se({vertexColors:!1,roughness:.9}),t.length),f=new xt(eu,h.material,n.length);for(let[P,_]of[[t,h],[n,f]])for(let M=0;M<P.length;M++)_.setColorAt(M,new Be(P[M].color));e.add(h,f),h.name="Courier uniform and limbs",f.name="Courier face and hands";let d=Za(e,"Carried delivery parcel");d.position.set(0,1.14,-.35);let p=new We,g=new We,b=new Ve,y=new Ve,C=new Ve,v=new x,m=new Ve(new x(-.5,-.5,-.5),new x(.5,.5,.5)),T=on(.55,.48);return T.position.y=.008,e.add(T),{root:e,held:d,bones:i,obstacle:b,update(P,_,M,R,L=0,A=.35,I=.987){let O=P!==0,B=R*8;L=ln(L);let F=ln((A-.35)/.4),U=_?1:F;l.position.y=.9-L*.235+(O?Math.abs(Math.sin(B))*.015:0)*(1-L),c.position.y=1.02-L*.26-M*.02+(O?Math.abs(Math.sin(B))*.015:0)*(1-L),c.position.z=-F*.12-M*.03,c.rotation.x=-M*.18-F*.24,u.rotation.y=O?Math.sin(R*.7)*.08:Math.sin(R*.8)*.12;for(let H of[-1,1]){let w=O?Math.sin(B)*H*.33:0;i["thigh"+H].rotation.x=w*(1-L)+1.3*L,i["knee"+H].rotation.x=(O?Math.max(0,-w)*.8:0)*(1-L)-.95*L,i["shoulder"+H].rotation.x=(-w*.8*(1-U)+(.64-M*.17+F*.38)*U)*(1-L)+.75*L,i["elbow"+H].rotation.x=(.12*(1-U)+(.91-M*.23-F*.12)*U)*(1-L)+.75*L}d.visible=_,d.position.set(0,1.14+(I-1.14)*M,-A);for(let H of r)H.ankle.position.set(0,-.4,0);e.updateMatrixWorld(!0);for(let H of r)C.copy(m).applyMatrix4(H.part.matrixWorld),C.max.x>-80&&C.min.x<80&&C.max.z>16.275&&C.min.z<16.525&&C.min.y<.123&&C.max.y>-.15&&(H.ankle.getWorldPosition(v),v.y+=.123-C.min.y,H.ankle.position.copy(H.ankle.parent.worldToLocal(v)));e.updateMatrixWorld(!0),p.copy(e.matrixWorld).invert();for(let[H,w]of[[t,h],[n,f]]){for(let $=0;$<H.length;$++)g.multiplyMatrices(p,H[$].p.matrixWorld),w.setMatrixAt($,g);w.instanceMatrix.needsUpdate=!0}h.computeBoundingSphere(),f.computeBoundingSphere(),h.computeBoundingBox(),f.computeBoundingBox(),b.setFromObject(h).union(y.setFromObject(f)),d.visible&&b.union(y.setFromObject(d))}}}var to=s=>(s=ln(s),s*s*s*(6*s*s-15*s+10));function Xi(s){return s>39?20.2+1.4*to((s-39)/10)-1.2*to((s-73)/10):s>-4?20.2:s>-14?18.3+1.9*to((s+14)/10):s>-21?18.3:s>-33?18.3+1.9*to((-21-s)/12):20.2}function Qc(s){return Math.atan2(1,(Xi(s+.002)-Xi(s-.002))/.004)}function Sm(s,e){return new x(s,Jt,e)}function Tm(){let s=new zi,e=(t,n)=>Sm(t,n);return s.add(new wn(e(-110,20.2),e(-120,20.2),e(-120,34),e(-120,45))),s.add(new Yn(e(-120,45),e(-120,73))),s.add(new wn(e(-120,73),e(-120,89),e(-115,89),e(-104,89))),s.add(new Yn(e(-104,89),e(104,89))),s.add(new wn(e(104,89),e(115,89),e(120,89),e(120,73))),s.add(new Yn(e(120,73),e(120,45))),s.add(new wn(e(120,45),e(120,34),e(120,20.4),e(110,20.4))),s}var Pn={x:-14,y:Jt,z:18.3,yaw:Math.PI/2},In={x:-10.6,y:.83,z:-12.9},dn={x:-10.45,y:.988,z:-12.9},je=(s,e,t=_m)=>new x(s,t,e),wm=je(-15.43,17.904,Jt+.61),bi=[wm,je(-15.25,17.1,Jt+.62),je(-15.25,16.94,Jt+.25),je(-15.25,16.94,.122),je(-15.25,16.9,.122),je(-15.25,15.75,.122),je(-15.25,15.7)],$a=[bi.at(-1),je(-10.2,15.7),je(-10.2,15.75,.122),je(-10.2,16.96,.122),je(-10.2,17.12,Jt),je(-10.2,18.3,Jt)],no=je(-11.17,18.3,Jt),Ns=$a.at(-1),Ln=[Ns,je(-10.2,17.12,Jt),je(-10.2,16.96,.122),je(-10.2,15.75,.122),je(-10.2,15.7),je(-10,15.4),je(-10,7),je(-10,0),je(-8.5,-2),je(-8.5,-9.5),je(-9.5,-12.8),je(-9.75,-12.8)],iu=[...Ln.slice(4).reverse(),bi.at(-1)];function Fs(s){let e=[0];for(let t=1;t<s.length;t++)e.push(e[t-1]+s[t].distanceTo(s[t-1]));return{points:s,length:e.at(-1),sample(t,n){let i=ln(t)*e.at(-1),r=1;for(;r<e.length-1&&i>e[r];)r++;let o=s[r-1],a=s[r];return n.lerpVectors(o,a,(i-e[r-1])/(e[r]-e[r-1])),Math.atan2(o.x-a.x,o.z-a.z)}}}var Am=Fs(bi),su=Fs($a),ru=Fs(Ln),ou=Fs(iu),Em=Fs([...bi].reverse()),$t=[["arriving",24],["parked",1],["cab opening",1.2],["driver exiting",3.7],["cab closing",1.1],["walking to rear",su.length/1.05],["cargo opening",1.6],["taking parcel",3.2],["cargo closing",1.3],["delivering",ru.length/1.05],["dropping",2.1],["returning",ou.length/1.05],["cab reopening",1.2],["driver entering",3.7],["cab shutting",1.1],["departing",24],["estate loop",68],["waiting",92]],qa=s=>s&&[s.x,s.y,s.z].every(Number.isFinite);function au(s,e){let t=new pe;t.name="TF Jones road delivery to Unit 8",e.add(t);let n=Mm(t),i=bm(t),r=Za(t,"Delivered Unit 8 parcel"),o=Za(n.root,"Parcel in delivery van");r.visible=!1,r.position.set(dn.x,dn.y,dn.z),o.position.set(0,1.14,2.08),o.scale.x=1/.9;let a=Dn(n.root,"Cargo supporting carton");a.box(0,.812,2.08,.28,.335,.33,11701334),a.finish();let l=new pe;l.name="Unit 8 stores delivery bench",l.position.set(In.x,0,In.z),t.add(l);let c=Dn(l,"Stores parcel bench");c.box(0,.8,0,.7,.06,.6,pn);for(let E of[-.29,.29])for(let N of[-.24,.24])c.box(E,.41,N,.037,.78,.037,pn),c.add(eu,E,.033,N,.032,.032,.032,pt);c.box(0,.15,0,.64,.037,.54,pn),c.finish();let u={min:{x:In.x-.35,y:0,z:In.z-.3},max:{x:In.x+.35,y:In.y,z:In.z+.3}},h=s.colliders?.find(E=>["x","y","z"].every(N=>E.min?.[N]===u.min[N]&&E.max?.[N]===u.max[N]))||u;Array.isArray(s.colliders)&&!s.colliders.includes(h)&&s.colliders.push(h);let f=Tm(),d=new x,p=new x,g=new x,b=new x,y=new x,C=Math.hypot(dn.x-Ln.at(-1).x,dn.z-Ln.at(-1).z),v=Math.atan2(Ln.at(-1).x-dn.x,Ln.at(-1).z-dn.z);r.rotation.y=v;let m=0,T=0,P=0,_=0,M=0,R=!1,L=0,A=0,I=!1,O=!1,B=0,F={clock:0,phase:$t[0][0],cycles:0,deliveries:0,yielding:!1,doorOpen:0,cabOpen:0,carrying:!1,seated:1,drawCalls:0,triangles:0,get logoReady(){return!!si?.ready}};function U(E,N,z,G=N){let S=Z=>qa(Z)&&Math.abs(Z.y-E.y)<3.3,V=(Z,Y)=>S(Z)&&Math.hypot(Z.x-E.x,Z.z-E.z)<Y;if(V(z.eye,N)||V(b,N))return!0;let q=s.vrGames?.companion?.group;if(q&&q.visible){let Z=!0;for(let Y=q;Y;Y=Y.parent)Y.visible||(Z=!1);if(Z&&V(q.getWorldPosition(y),N))return!0}for(let Z of s.staff||[]){let Y=Z.person?.group;if(Y?.visible&&V(Y.getWorldPosition(y),G))return!0}return!1}function H(E){let N=E.eye;if(!qa(N))return!1;g.subVectors(r.position,N);let z=g.length();if(z>45)return!1;let G=E.forward;return qa(G)?g.normalize().dot(G)>.2:z<30}function w(E,N,z){if(E===0){let G=110-124*Ft(N);return z.set(G,Jt,Xi(G)),Qc(G)}if(E===15){let G=-14-96*Ft(N);return z.set(G,Jt,Xi(G)),Qc(G)}return E===16?(f.getPointAt(Ft(N),z),f.getTangentAt(Ft(N),g),Math.atan2(-g.x,-g.z)):E===17?(z.set(110,Jt,20.4),Math.PI/2):(z.set(Pn.x,Pn.y,Pn.z),Pn.yaw)}function $(E,N,z){let G=Pn.yaw,S=0,V=0,q=O&&!I,Z=0,Y=.35;return E===0||E===1||E===2||E>=14?(n.root.updateMatrix(),z.set(.44,.61,-1.43).applyMatrix4(n.root.matrix),G=n.root.rotation.y,V=1,q=!1):E===3?(G=Am.sample(N,z),S=1,V=1-Ft(ln(N/.62))):E===4?(z.copy(bi.at(-1)),G=0):E===5?(G=su.sample(N,z),S=1):E===6?z.copy(Ns):E===7?(N<.3?(z.lerpVectors(Ns,no,N/.3),S=1):N>.78?(z.lerpVectors(no,Ns,(N-.78)/.22),S=1):z.copy(no),Y=.35+.4*Ft(ln(N<.5?(N-.3)/.18:(.78-N)/.23))):E===8?z.copy(Ns):E===9?(G=ru.sample(N,z),S=1):E===10?(z.copy(Ln.at(-1)),G=v,Z=Ft(ln((N-.12)/.65)),Y=.35+(C-.35)*Z,q=!0):E===11?(G=ou.sample(N,z),S=1,q=!1):E===12?(z.copy(bi.at(-1)),G=0,q=!1):E===13&&(G=Em.sample(N,z),S=1,V=Ft(ln((N-.38)/.62)),G+=Math.atan2(Math.sin(Pn.yaw-G),Math.cos(Pn.yaw-G))*V,q=!1),{yaw:G,walking:S,seated:V,carry:q,drop:Z,reach:Y}}function D(E=0){let N=ln(T/$t[m][1]);n.root.rotation.y=w(m,N,n.root.position),L=m===6?Ft(N):m===7?1:m===8?1-Ft(N):0,A=m===2?Ft(N):m===3?1:m===4?1-Ft(N):m===12?Ft(N):m===13?1:m===14?1-Ft(N):0,i.root.visible=!0;let z=$(m,N,i.root.position),G=Math.atan2(Math.sin(z.yaw-i.root.rotation.y),Math.cos(z.yaw-i.root.rotation.y));m<=2||m>=14?i.root.rotation.y=z.yaw:i.root.rotation.y+=E?G*(1-Math.exp(-E*12)):G;let S=R?0:z.walking;S&&(B+=E),i.update(S,z.carry,z.drop,B,z.seated,z.reach,dn.y-Ln.at(-1).y),m===10&&I&&(i.held.visible=!1),F.phase=$t[m][0],F.clock=P,F.cycles=_,F.deliveries=M,F.yielding=R,F.doorOpen=L,F.cabOpen=A,F.carrying=i.held.visible,F.seated=z.seated}return D(),n.update(0,0,!1,0,0),t.traverse(E=>{E.isMesh&&(E.castShadow=E.receiveShadow=!1,F.drawCalls++,F.triangles+=(E.geometry.index?.count||E.geometry.attributes.position.count)/3*(E.isInstancedMesh?E.count:1))}),t.userData.delivery={park:{...Pn},station:{...In},drop:{...dn},gate:{x:-10,z:12},destination:"Unit 8 stores / workshop",noMovingColliders:!0},{root:t,van:n,courier:i,parcel:r,cargoParcel:o,stand:l,benchCollider:h,stats:F,route:{lane:Xi,approach:Xi,loop:f,walk:Ln.map(E=>E.clone()),cabExit:bi.map(E=>E.clone()),toRear:$a.map(E=>E.clone()),return:iu.map(E=>E.clone()),pickup:no.clone(),phases:$t.map(E=>[...E]),park:{...Pn},station:{...In},drop:{...dn}},update(E,N={}){if(N.hidden||N.active===!1||N.mode&&N.mode!=="explore"||!Number.isFinite(E)||E<=0)return;let z=typeof s.stats=="function"?s.stats():null;b.set(z?.x??NaN,z?.y??NaN,z?.z??NaN),E=Math.min(E,.1),p.copy(n.root.position),R=!1;let G=m===0||m===15||m===16;if(G?(w(m,ln((T+E)/$t[m][1]),d),R=U(n.root.position,5.5,N)||U(d,5.5,N)):m>=2&&m<=13&&($(m,ln((T+E)/$t[m][1]),d),R=U(i.root.position,1.15,N,.95)||U(d,1.15,N,.95)),m===17&&r.visible&&!H(N)&&(r.visible=!1),m===17&&r.visible&&T+E>=$t[m][1]&&(R=!0),P+=E,!R)for(T+=E,m===7&&!O&&T/$t[m][1]>=.5&&(O=!0,o.visible=!1),m===10&&!I&&T/$t[m][1]>=.8&&(I=!0,r.visible=!0,M++);T>=$t[m][1];)T-=$t[m][1],m++,m===$t.length&&(m=0,_++,I=!1,O=!1,o.visible=!0);D(E);let S=n.root.position.distanceTo(p);n.update(G&&!R?S:0,L,m>0&&m<15||R,P,A)}}}var gn=s=>document.querySelector(s),mn=gn("#questEnter"),Un=gn("#questStatus"),so=gn("#questPanel");gn("#questPreview").onclick=()=>{so.hidden=!0,gn("#questReturn").hidden=!1};gn("#questReturn").onclick=()=>{window.yardDebug?.pause(),so.hidden=!1};async function Cm(s){let e=s.renderer,t=s.worldScene,n=s.worldCamera;s.exterior=Zc(s);let i=zc(s);s.vrGames=i;let r=au(s,s.exterior.root),o=Jc(s,t);s.life={staff:o,deliveries:r},gn("#enter").addEventListener("click",()=>s.exterior.enableAudio()),gn("#soundBtn").addEventListener("click",()=>s.exterior.enableAudio());let a=new x,l=new x,c=new x(0,1,0),u={eye:a,forward:l,active:!1,hidden:!1,mode:"explore"};e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let h=new pe;h.name="Quest player rig",t.add(h);let f=[e.xr.getController(0),e.xr.getController(1)],d=f.map((D,E)=>e.xr.getControllerGrip?.(E)||D);for(let D of d)f.includes(D)||h.add(D);let p=new Map;f.forEach(D=>{h.add(D),D.addEventListener("connected",N=>p.set(D,N.data)),D.addEventListener("disconnected",()=>p.delete(D));let E=new me(new qe(.018,8,6),new ve({color:16769946}));D.add(E)});let g=new Ct(new Oe,new Et({color:8645568}));g.frustumCulled=!1,g.visible=!1,t.add(g);let b=new me(new An(.22,.3,32),new ve({color:8645568,side:2,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.visible=!1,t.add(b);let y=s.colliders.map(D=>new Ve(new x(D.min.x,D.min.y,D.min.z),new x(D.max.x,D.max.y,D.max.z))),C=o.actors.filter(D=>D.collider).map(D=>({source:D.collider,box:y[s.colliders.indexOf(D.collider)]})).filter(D=>D.box),v=new Ve,m=[...y,v],T=new Set([...C.map(D=>D.box),v]),P=0,_=new x,M=new be,R=null,L=!1,A=!1,I=!1,O=null,B,F,U=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),H=()=>{let D=s.stats(),E=Fa(_.x,_.z,P);h.position.set(D.x-E.x,D.y+(window.yardFloorOffset||0),D.z-E.z),h.rotation.y=P,n.position.set(0,0,0),n.quaternion.identity(),h.updateMatrixWorld(!0)};s.xrFace=D=>{let E=new x(0,0,-1).applyQuaternion(M);P=D-Math.atan2(-E.x,-E.z),R=null,H()};function w(D){for(let{source:k,box:ne}of C)ne.min.copy(k.min),ne.max.copy(k.max);let E=r.courier;if(E.root.visible&&E.obstacle?v.copy(E.obstacle):v.makeEmpty(),O=null,!D){g.visible=b.visible=!1;return}let N=D.getWorldPosition(new x),G=new x(0,0,-1).applyQuaternion(D.getWorldQuaternion(new be)).multiplyScalar(6);G.y+=2;let S=[N.clone()],V=new tt,q=new x,Z=N.clone(),Y=null;for(let k=1;k<=32;k++){let ne=k*.05,J=N.clone().addScaledVector(G,ne);J.y-=4.9*ne*ne;let re=J.clone().sub(Z),X=re.length();V.set(Z,re.normalize());let ie=X,Q=null,ae=!1;for(let te of m){if(te.isEmpty()||te.containsPoint(Z))continue;let ge=V.intersectBox(te,q);if(ge){let fe=ge.distanceTo(Z);fe<ie&&(ie=fe,Q=ge.clone(),ae=!T.has(te)&&Math.abs(ge.y-te.max.y)<.015)}}if(Z.y>=0&&J.y<=0){let te=Z.clone().lerp(J,Z.y/(Z.y-J.y));te.distanceTo(Z)<ie&&(Q=te,ae=!0)}if(Q){S.push(Q),Y=Q;let te=!E.root.visible||Math.abs(Q.y-E.root.position.y)>2.3||Math.hypot(Q.x-E.root.position.x,Q.z-E.root.position.z)>.9;ae&&te&&!s.blocked(Q.x,Q.z,Q.y)&&Math.abs(s.groundAt(Q.x,Q.z,Q.y+.05)-Q.y)<.12&&(O=Q);break}S.push(J),Z=J}g.geometry.dispose(),g.geometry=new Oe().setFromPoints(S),g.visible=!0,g.material.color.set(O?8645568:16746618),b.visible=!!O,O&&b.position.copy(O).add(new x(0,.025,0))}let $=window.questBridge={frame:null,sample(D){let E=e.xr.getSession(),N=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!N||E?.visibilityState==="hidden")return R=null,i.interrupt(),U();if(_.set(N.transform.position.x,N.transform.position.y,N.transform.position.z),M.copy(N.transform.orientation),R){let te=Fa(_.x-R.x,_.z-R.z,P);Math.hypot(te.x,te.z)<.8&&s.xrPhysical(te.x,te.z)}R=_.clone();let z,G;for(let te of E.inputSources)te.handedness==="left"&&(z=te),te.handedness==="right"&&(G=te);let[S,V]=As(z),[q]=As(G),Z=xc(q,gn("#questTurning").value,D,L);!i.menuOpen&&!i.held&&!i.driving&&(P+=Z.angle,Z.angle&&i.interrupt()),L=Z.latched;let Y=!!z?.gamepad?.buttons[4]?.pressed;Y&&!I&&!i.driving&&(i.interrupt(),s.resetPosition(),P=0,R=null,i.close()),I=Y,H();let k=f.find(te=>p.get(te)?.handedness==="right"),ne=new x(0,0,-1).applyQuaternion(M),J=ne.clone().applyAxisAngle(new x(0,1,0),P),re=i.tick({dt:D,eye:_.clone().applyMatrix4(h.matrixWorld),forward:J,headOrientation:h.getWorldQuaternion(new be).multiply(M),left:z,right:G,controller:k,rightGripController:d[f.findIndex(te=>p.get(te)?.handedness==="right")],leftController:d[f.findIndex(te=>p.get(te)?.handedness==="left")]}),X=!re.blockTeleport&&!i.menuOpen&&(!!G?.gamepad?.buttons[1]?.pressed||!re.consumeTrigger&&!!G?.gamepad?.buttons[0]?.pressed);X&&(i.interrupt(),w(k)),!X&&A&&(O&&!i.menuOpen&&!re.blockTeleport&&s.xrTeleport(O.x,O.y,O.z),O=null,g.visible=b.visible=!1),A=X;let ie=P+Math.atan2(-ne.x,-ne.z);s.xrHeading(ie);let Q=U(),ae=Number(gn("#questSpeed").value)/2.9;return Q.fwd=-Hi(V)*ae,Q.strafe=Hi(S)*ae,(X||re.blockMovement)&&(Q.fwd=Q.strafe=0),Q},beforeRender(D,E){e.xr.isPresenting?(H(),a.copy(_).applyMatrix4(h.matrixWorld),l.set(0,0,-1).applyQuaternion(M).applyAxisAngle(c,P)):(n.getWorldPosition(a),n.getWorldDirection(l));let N=e.xr.isPresenting?e.xr.getSession():null;u.active=s.stats().playing&&!i.menuOpen,u.hidden=document.hidden||N?.visibilityState==="hidden",u.mode=i.mode,s.exterior.update(E,u),o.update(E,{...u,active:u.active&&!s.truck?.driving}),r.update(E,{...u,active:u.active&&!s.truck?.driving})}};if(e.xr.addEventListener("sessionstart",()=>{F=n.parent,B=e.shadowMap.enabled,e.shadowMap.enabled=!1,h.add(n),P=0,_.set(0,0,0),R=null,L=A=I=!1,s.xrBegin(),H(),i.begin(),document.body.classList.add("questActive"),so.hidden=!0,Un.textContent="VR is running. Use the Meta menu to exit.",mn.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),h.remove(n),F&&F.add(n),e.shadowMap.enabled=B,g.visible=b.visible=!1,R=null,s.xrEnd(),document.body.classList.remove("questActive"),so.hidden=!1,mn.disabled=!1,mn.textContent="Enter VR again",Un.textContent="You have left VR."}),mn.onclick=async()=>{mn.disabled=!0;let D;try{i.enableAudio(),s.exterior.enableAudio(),D=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),D.addEventListener("visibilitychange",()=>{R=null}),await e.xr.setSession(D)}catch(E){D&&await D.end().catch(()=>{}),mn.disabled=!1,Un.textContent="Could not enter VR: "+E.message}},!window.isSecureContext){mn.textContent="HTTPS hosting needed",Un.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){mn.textContent="Open in your Quest browser",Un.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let D=await navigator.xr.isSessionSupported("immersive-vr");mn.disabled=!D,mn.textContent=D?"Enter VR":"VR headset not detected",Un.textContent=D?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(D){Un.textContent="VR availability check failed: "+D.message}}var Rm=0,lu=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(lu),Cm(window.yardDebug).catch(s=>{Un.textContent="VR setup failed: "+s.message,console.error(s)})):++Rm>1200&&(clearInterval(lu),Un.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
