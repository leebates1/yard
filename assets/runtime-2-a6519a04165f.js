(()=>{var El=1;var Cl=3,lr=0,Rl=1,tt=2;var Ao=1,ia=2;var Eo=100;var Co=204,Ro=205;var Po=0,Io=1,Lo=2,ns=3,Do=4,Uo=5,No=6,Fo=7,sa=0,Pl=1,Il=2;var ra=1,oa=2,aa=3,la=4,ca=5,ua=6,ha=7;var fa=300,Ll=301,da=302;var Dl=306,Wt=1e3,Ji=1001,Bo=1002,Oo=1003;var Ul=1006;var Nl=1008;var pa=1009;var ma=1015;var Fl=1023;var Bl=1028;var is=2300,cr=2301,or=2302,zo=2303,ko=2400,Vo=2401,Go=2402;var Ol=0;var ga="",Ae="srgb",Ho="srgb-linear",Wo="linear",ar="srgb";var ai=7680;var Xo=519;var qo=35044,xa=35048;var Fn=2e3,ss=2001;function ou(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function au(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Yo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var qa={},ur=null;function zl(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qe(...s){s=zl(s);let e="THREE."+s.shift();if(ur)ur("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Je(...s){s=zl(s);let e="THREE."+s.shift();if(ur)ur("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Pi(...s){let e=s.join(" ");e in qa||(qa[e]=!0,Qe(...s))}var lu={[Po]:Io,[Lo]:No,[Do]:Fo,[ns]:Uo,[Io]:Po,[No]:Lo,[Fo]:Do,[Uo]:ns},Bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ya=1234567,ji=Math.PI/180,rs=180/Math.PI;function pi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yt[s&255]+yt[s>>8&255]+yt[s>>16&255]+yt[s>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]).toLowerCase()}function Fe(s,e,t){return Math.max(e,Math.min(t,s))}function ya(s,e){return(s%e+e)%e}function cu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function uu(s,e,t){return s!==e?(t-s)/(e-s):0}function Qi(s,e,t){return(1-t)*s+t*e}function hu(s,e,t,n){return Qi(s,e,1-Math.exp(-t*n))}function fu(s,e=1){return e-Math.abs(ya(s,e*2)-e)}function du(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function pu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function mu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function gu(s,e){return s+Math.random()*(e-s)}function xu(s){return s*(.5-Math.random())}function yu(s){s!==void 0&&(Ya=s);let e=Ya+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _u(s){return s*ji}function vu(s){return s*rs}function Mu(s){return(s&s-1)===0&&s!==0}function bu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Su(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tu(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*u,a*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ve={DEG2RAD:ji,RAD2DEG:rs,generateUUID:pi,clamp:Fe,euclideanModulo:ya,mapLinear:cu,inverseLerp:uu,lerp:Qi,damp:hu,pingpong:fu,smoothstep:du,smootherstep:pu,randInt:mu,randFloat:gu,randFloatSpread:xu,seededRandom:yu,degToRad:_u,radToDeg:vu,isPowerOfTwo:Mu,ceilPowerOfTwo:bu,floorPowerOfTwo:Su,setQuaternionFromProperEuler:Tu,normalize:St,denormalize:Ri},ba=class ba{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ba.prototype.isVector2=!0;var he=ba,be=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],g=r[o+3];if(h!==g||l!==f||c!==d||u!==p){let M=l*f+c*d+u*p+h*g;M<0&&(f=-f,d=-d,p=-p,g=-g,M=-M);let _=1-a;if(M<.9995){let C=Math.acos(M),v=Math.sin(C);_=Math.sin(_*C)/v,a=Math.sin(a*C)/v,l=l*_+f*a,c=c*_+d*a,u=u*_+p*a,h=h*_+g*a}else{l=l*_+f*a,c=c*_+d*a,u=u*_+p*a,h=h*_+g*a;let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sa=class Sa{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Za.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Za.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sa.prototype.isVector3=!0;var y=Sa,Qr=new y,Za=new be,Ta=class Ta{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],g=i[0],M=i[3],_=i[6],C=i[1],v=i[4],m=i[7],x=i[2],I=i[5],S=i[8];return r[0]=o*g+a*C+l*x,r[3]=o*M+a*v+l*I,r[6]=o*_+a*m+l*S,r[1]=c*g+u*C+h*x,r[4]=c*M+u*v+h*I,r[7]=c*_+u*m+h*S,r[2]=f*g+d*C+p*x,r[5]=f*M+d*v+p*I,r[8]=f*_+d*m+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(eo.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ta.prototype.isMatrix3=!0;var Ue=Ta,eo=new Ue,$a=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ja=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wu(){let s={enabled:!0,workingColorSpace:Ho,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ar&&(i.r=vn(i.r),i.g=vn(i.g),i.b=vn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ar&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ga?Wo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ho]:{primaries:e,whitePoint:n,transfer:Wo,toXYZ:$a,fromXYZ:Ja,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:e,whitePoint:n,transfer:ar,toXYZ:$a,fromXYZ:Ja,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),s}var Ht=wu();function vn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ii(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var yi,hr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yi===void 0&&(yi=Yo("canvas")),yi.width=e.width,yi.height=e.height;let i=yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=vn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Au=1e6,fr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(to(i[o].image)):r.push(to(i[o]))}else r=to(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function to(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var Eu=1e6,no=new y,On=class s extends Bn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ji,i=Ji,r=Ul,o=Nl,a=Fl,l=pa,c=s.DEFAULT_ANISOTROPY,u=ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=pi(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wt:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wt:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=fa;On.DEFAULT_ANISOTROPY=1;var wa=class wa{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],g=l[2],M=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(p-M)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(p+M)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,m=(d+1)/2,x=(_+1)/2,I=(u+f)/4,S=(h+g)/4,T=(p+M)/4;return v>m&&v>x?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=I/n,r=S/n):m>x?m<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(m),n=I/i,r=T/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=S/r,i=T/r),this.set(n,i,r,t),this}let C=Math.sqrt((M-p)*(M-p)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(M-p)/C,this.y=(h-g)/C,this.z=(f-u)/C,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wa.prototype.isVector4=!0;var li=wa;var Ur=class Ur{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,p,g,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,p,g,M)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,p,g,M){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=p,_[11]=g,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ur().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,g=c*h;t[0]=f+g*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,g=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-g*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cu,e,Ru)}lookAt(e,t,n){let i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Rn.crossVectors(n,Nt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Rn.crossVectors(n,Nt)),Rn.normalize(),Ds.crossVectors(Nt,Rn),i[0]=Rn.x,i[4]=Ds.x,i[8]=Nt.x,i[1]=Rn.y,i[5]=Ds.y,i[9]=Nt.y,i[2]=Rn.z,i[6]=Ds.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],g=n[6],M=n[10],_=n[14],C=n[3],v=n[7],m=n[11],x=n[15],I=i[0],S=i[4],T=i[8],E=i[12],P=i[1],A=i[5],R=i[9],z=i[13],F=i[2],U=i[6],L=i[10],X=i[14],b=i[3],H=i[7],N=i[11],D=i[15];return r[0]=o*I+a*P+l*F+c*b,r[4]=o*S+a*A+l*U+c*H,r[8]=o*T+a*R+l*L+c*N,r[12]=o*E+a*z+l*X+c*D,r[1]=u*I+h*P+f*F+d*b,r[5]=u*S+h*A+f*U+d*H,r[9]=u*T+h*R+f*L+d*N,r[13]=u*E+h*z+f*X+d*D,r[2]=p*I+g*P+M*F+_*b,r[6]=p*S+g*A+M*U+_*H,r[10]=p*T+g*R+M*L+_*N,r[14]=p*E+g*z+M*X+_*D,r[3]=C*I+v*P+m*F+x*b,r[7]=C*S+v*A+m*U+x*H,r[11]=C*T+v*R+m*L+x*N,r[15]=C*E+v*z+m*X+x*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],g=e[7],M=e[11],_=e[15],C=l*d-c*f,v=a*d-c*h,m=a*f-l*h,x=o*d-c*u,I=o*f-l*u,S=o*h-a*u;return t*(g*C-M*v+_*m)-n*(p*C-M*x+_*I)+i*(p*v-g*x+_*S)-r*(p*m-g*I+M*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],g=e[13],M=e[14],_=e[15],C=t*a-n*o,v=t*l-i*o,m=t*c-r*o,x=n*l-i*a,I=n*c-r*a,S=i*c-r*l,T=u*g-h*p,E=u*M-f*p,P=u*_-d*p,A=h*M-f*g,R=h*_-d*g,z=f*_-d*M,F=C*z-v*R+m*A+x*P-I*E+S*T;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/F;return e[0]=(a*z-l*R+c*A)*U,e[1]=(i*R-n*z-r*A)*U,e[2]=(g*S-M*I+_*x)*U,e[3]=(f*I-h*S-d*x)*U,e[4]=(l*P-o*z-c*E)*U,e[5]=(t*z-i*P+r*E)*U,e[6]=(M*m-p*S-_*v)*U,e[7]=(u*S-f*m+d*v)*U,e[8]=(o*R-a*P+c*T)*U,e[9]=(n*P-t*R-r*T)*U,e[10]=(p*I-g*m+_*C)*U,e[11]=(h*m-u*I-d*C)*U,e[12]=(a*E-o*A-l*T)*U,e[13]=(t*A-n*E+i*T)*U,e[14]=(g*v-p*x-M*C)*U,e[15]=(u*x-h*v+f*C)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,g=o*u,M=o*h,_=a*h,C=l*c,v=l*u,m=l*h,x=n.x,I=n.y,S=n.z;return i[0]=(1-(g+_))*x,i[1]=(d+m)*x,i[2]=(p-v)*x,i[3]=0,i[4]=(d-m)*I,i[5]=(1-(f+_))*I,i[6]=(M+C)*I,i[7]=0,i[8]=(p+v)*S,i[9]=(M-C)*S,i[10]=(1-(f+g))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=_i.set(i[0],i[1],i[2]).length(),a=_i.set(i[4],i[5],i[6]).length(),l=_i.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Kt.copy(this);let c=1/o,u=1/a,h=1/l;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Fn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Fn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ss)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Fn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Fn)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===ss)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ur.prototype.isMatrix4=!0;var He=Ur,_i=new y,Kt=new He,Cu=new y(0,0,0),Ru=new y(1,1,1),Rn=new y,Ds=new y,Nt=new y,Ka=new He,ja=new be,en=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ka,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ja.setFromEuler(this),this.setFromQuaternion(ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pu=1e6,Qa=new y,vi=new be,pn=new He,Us=new y,Hi=new y,Iu=new y,Lu=new be,el=new y(1,0,0),tl=new y(0,1,0),nl=new y(0,0,1),il={type:"added"},Du={type:"removed"},Mi={type:"childadded",child:null},io={type:"childremoved",child:null},We=class s extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new y,t=new en,n=new be,i=new y(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Ue}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,t){return Qa.copy(e).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Us.copy(e):Us.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Hi,Us,this.up):pn.lookAt(Us,Hi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(pn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(il),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Du),io.child=e,this.dispatchEvent(io),io.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(il),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hi,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};We.DEFAULT_UP=new y(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pe=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}};var kl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function so(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ae){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ht.workingColorSpace){if(e=ya(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=so(o,r,e+1/3),this.g=so(o,r,e),this.b=so(o,r,e-1/3)}return Ht.colorSpaceToWorking(this,i),this}setStyle(e,t=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ae){let n=kl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ae){return Ht.workingToColorSpace(_t.copy(this),e),Math.round(Fe(_t.r*255,0,255))*65536+Math.round(Fe(_t.g*255,0,255))*256+Math.round(Fe(_t.b*255,0,255))}getHexString(e=Ae){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.workingToColorSpace(_t.copy(this),t);let n=_t.r,i=_t.g,r=_t.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ht.workingColorSpace){return Ht.workingToColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Ae){Ht.workingToColorSpace(_t.copy(this),e);let t=_t.r,n=_t.g,i=_t.b;return e!==Ae?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Ns);let n=Qi(Pn.h,Ns.h,t),i=Qi(Pn.s,Ns.s,t),r=Qi(Pn.l,Ns.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_t=new Be;Be.NAMES=kl;var jt=new y,mn=new y,ro=new y,gn=new y,bi=new y,Si=new y,sl=new y,oo=new y,ao=new y,lo=new y,co=new li,uo=new li,ho=new li,Nn=class s{constructor(e=new y,t=new y,n=new y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jt.subVectors(i,t),mn.subVectors(n,t),ro.subVectors(e,t);let o=jt.dot(jt),a=jt.dot(mn),l=jt.dot(ro),c=mn.dot(mn),u=mn.dot(ro),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return co.setScalar(0),uo.setScalar(0),ho.setScalar(0),co.fromBufferAttribute(e,t),uo.fromBufferAttribute(e,n),ho.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(co,r.x),o.addScaledVector(uo,r.y),o.addScaledVector(ho,r.z),o}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),mn.subVectors(e,t),jt.cross(mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),jt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;bi.subVectors(i,n),Si.subVectors(r,n),oo.subVectors(e,n);let l=bi.dot(oo),c=Si.dot(oo);if(l<=0&&c<=0)return t.copy(n);ao.subVectors(e,i);let u=bi.dot(ao),h=Si.dot(ao);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(bi,o);lo.subVectors(e,r);let d=bi.dot(lo),p=Si.dot(lo);if(p>=0&&d<=p)return t.copy(r);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Si,a);let M=u*p-d*h;if(M<=0&&h-u>=0&&d-p>=0)return sl.subVectors(r,i),a=(h-u)/(h-u+(d-p)),t.copy(i).addScaledVector(sl,a);let _=1/(M+g+f);return o=g*_,a=f*_,t.copy(n).addScaledVector(bi,o).addScaledVector(Si,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qe=class{constructor(e=new y(1/0,1/0,1/0),t=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(r,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),Bs.subVectors(this.max,Wi),Ti.subVectors(e.a,Wi),wi.subVectors(e.b,Wi),Ai.subVectors(e.c,Wi),In.subVectors(wi,Ti),Ln.subVectors(Ai,wi),ii.subVectors(Ti,Ai);let t=[0,-In.z,In.y,0,-Ln.z,Ln.y,0,-ii.z,ii.y,In.z,0,-In.x,Ln.z,0,-Ln.x,ii.z,0,-ii.x,-In.y,In.x,0,-Ln.y,Ln.x,0,-ii.y,ii.x,0];return!fo(t,Ti,wi,Ai,Bs)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,Ti,wi,Ai,Bs))?!1:(Os.crossVectors(In,Ln),t=[Os.x,Os.y,Os.z],fo(t,Ti,wi,Ai,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xn=[new y,new y,new y,new y,new y,new y,new y,new y],Qt=new y,Fs=new qe,Ti=new y,wi=new y,Ai=new y,In=new y,Ln=new y,ii=new y,Wi=new y,Bs=new y,Os=new y,si=new y;function fo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){si.fromArray(s,r);let a=i.x*Math.abs(si.x)+i.y*Math.abs(si.y)+i.z*Math.abs(si.z),l=e.dot(si),c=t.dot(si),u=n.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ct=new y,zs=new he,Uu=1e6,dt=class extends Bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var dr=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var pr=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nu=new qe,Xi=new y,po=new y,Xt=class{constructor(e=new y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xi.subVectors(e,this.center);let t=Xi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xi.copy(e.center).add(po)),this.expandByPoint(Xi.copy(e.center).sub(po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fu=1e6,Gt=new He,mo=new We,Ei=new y,Ft=new qe,qi=new qe,ht=new y,Oe=class s extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ou(e)?pr:dr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(e){let n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Ft.min,qi.min),Ft.expandByPoint(ht),ht.addVectors(Ft.max,qi.max),Ft.expandByPoint(ht)):(Ft.expandByPoint(qi.min),Ft.expandByPoint(qi.max))}Ft.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ht.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),ht.add(Ei)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new y,l[T]=new y;let c=new y,u=new y,h=new y,f=new he,d=new he,p=new he,g=new y,M=new y;function _(T,E,P){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,P),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,P),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let A=1/(d.x*p.y-p.x*d.y);isFinite(A)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(A),M.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(A),a[T].add(g),a[E].add(g),a[P].add(g),l[T].add(M),l[E].add(M),l[P].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,E=C.length;T<E;++T){let P=C[T],A=P.start,R=P.count;for(let z=A,F=A+R;z<F;z+=3)_(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let v=new y,m=new y,x=new y,I=new y;function S(T){x.fromBufferAttribute(i,T),I.copy(x);let E=a[T];v.copy(E),v.sub(x.multiplyScalar(x.dot(E))).normalize(),m.crossVectors(I,E);let A=m.dot(l[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,A)}for(let T=0,E=C.length;T<E;++T){let P=C[T],A=P.start,R=P.count;for(let z=A,F=A+R;z<F;z+=3)S(e.getX(z+0)),S(e.getX(z+1)),S(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new y,r=new y,o=new y,a=new y,l=new y,c=new y,u=new y,h=new y;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),g=e.getX(f+1),M=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,M),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(M,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let g=0,M=l.length;g<M;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let _=0;_<u;_++)f[p++]=c[d++]}return new dt(f,u,h)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Bu=1e6,ci=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=Ao,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Ro,this.blendEquation=Eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ao&&(n.blending=this.blending),this.side!==lr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==Eo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var yn=new y,go=new y,ks=new y,Dn=new y,xo=new y,Vs=new y,yo=new y,et=class{constructor(e=new y,t=new y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){go.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(go);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ks),a=Dn.dot(this.direction),l=-Dn.dot(ks),c=Dn.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(go).addScaledVector(ks,f),d}intersectSphere(e,t){yn.subVectors(e.center,this.origin);let n=yn.dot(this.direction),i=yn.dot(yn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,i,r){xo.subVectors(t,e),Vs.subVectors(n,e),yo.crossVectors(xo,Vs);let o=this.direction.dot(yo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);let l=a*this.direction.dot(Vs.crossVectors(Dn,Vs));if(l<0)return null;let c=a*this.direction.dot(xo.cross(Dn));if(c<0||l+c>o)return null;let u=-a*Dn.dot(yo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rl=new He,ri=new et,Gs=new Xt,ol=new y,Hs=new y,Ws=new y,Xs=new y,_o=new y,qs=new y,al=new y,Ys=new y,me=class extends We{constructor(e=new Oe,t=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(_o.fromBufferAttribute(h,e),o?qs.addScaledVector(_o,u):qs.addScaledVector(_o.sub(t),u))}t.add(qs)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(Gs.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Gs,ol)===null||ri.origin.distanceToSquared(ol)>(e.far-e.near)**2))&&(rl.copy(r).invert(),ri.copy(e.ray).applyMatrix4(rl),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let M=f[p],_=o[M.materialIndex],C=Math.max(M.start,d.start),v=Math.min(a.count,Math.min(M.start+M.count,d.start+d.count));for(let m=C,x=v;m<x;m+=3){let I=a.getX(m),S=a.getX(m+1),T=a.getX(m+2);i=Zs(this,_,e,n,c,u,h,I,S,T),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let M=p,_=g;M<_;M+=3){let C=a.getX(M),v=a.getX(M+1),m=a.getX(M+2);i=Zs(this,o,e,n,c,u,h,C,v,m),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let M=f[p],_=o[M.materialIndex],C=Math.max(M.start,d.start),v=Math.min(l.count,Math.min(M.start+M.count,d.start+d.count));for(let m=C,x=v;m<x;m+=3){let I=m,S=m+1,T=m+2;i=Zs(this,_,e,n,c,u,h,I,S,T),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let M=p,_=g;M<_;M+=3){let C=M,v=M+1,m=M+2;i=Zs(this,o,e,n,c,u,h,C,v,m),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}}};function Ou(s,e,t,n,i,r,o,a){let l;if(e.side===Rl?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===lr,a),l===null)return null;Ys.copy(a),Ys.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:s}}function Zs(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Hs),s.getVertexPosition(l,Ws),s.getVertexPosition(c,Xs);let u=Ou(s,e,t,n,Hs,Ws,Xs,al);if(u){let h=new y;Nn.getBarycoord(al,Hs,Ws,Xs,h),i&&(u.uv=Nn.getInterpolatedAttribute(i,a,l,c,h,new he)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,a,l,c,h,new he)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,h,new y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new y,materialIndex:0};Nn.getNormal(Hs,Ws,Xs,f.normal),u.face=f,u.barycoord=h}return u}var mr=class extends On{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Oo,u=Oo,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zn=class extends dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ci=new He,ll=new He,$s=[],cl=new qe,zu=new He,Yi=new me,Zi=new Xt,pt=class extends me{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,zu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qe),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),cl.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(cl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),Zi.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(Zi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Yi.geometry=this.geometry,Yi.material=this.material,Yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(n),e.ray.intersectsSphere(Zi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ci),ll.multiplyMatrices(n,Ci),Yi.matrixWorld=ll,Yi.raycast(e,$s);for(let o=0,a=$s.length;o<a;o++){let l=$s[o];l.instanceId=r,l.object=this,t.push(l)}$s.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mr(new Float32Array(i*this.count),i,this.count,Bl,ma));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vo=new y,ku=new y,Vu=new Ue,_n=class{constructor(e=new y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=vo.subVectors(n,t).cross(ku.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(vo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vu.getNormalMatrix(e),i=this.coplanarPoint(vo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},oi=new Xt,Gu=new he(.5,.5),Js=new y,gr=class{constructor(e=new _n,t=new _n,n=new _n,i=new _n,r=new _n,o=new _n){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],g=r[9],M=r[10],_=r[11],C=r[12],v=r[13],m=r[14],x=r[15];if(i[0].setComponents(c-o,d-u,_-p,x-C).normalize(),i[1].setComponents(c+o,d+u,_+p,x+C).normalize(),i[2].setComponents(c+a,d+h,_+g,x+v).normalize(),i[3].setComponents(c-a,d-h,_-g,x-v).normalize(),n)i[4].setComponents(l,f,M,m).normalize(),i[5].setComponents(c-l,d-f,_-M,x-m).normalize();else if(i[4].setComponents(c-l,d-f,_-M,x-m).normalize(),t===Fn)i[5].setComponents(c+l,d+f,_+M,x+m).normalize();else if(t===ss)i[5].setComponents(l,f,M,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);let t=Gu.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Js.x=i.normal.x>0?e.max.x:e.min.x,Js.y=i.normal.y>0?e.max.y:e.min.y,Js.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Tt=class extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xr=new y,yr=new y,ul=new He,$i=new et,Ks=new Xt,Mo=new y,hl=new y,wt=class extends We{constructor(e=new Oe,t=new Tt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xr.fromBufferAttribute(t,i-1),yr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xr.distanceTo(yr);e.setAttribute("lineDistance",new Re(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;ul.copy(i).invert(),$i.copy(e.ray).applyMatrix4(ul);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,M=p-1;g<M;g+=c){let _=u.getX(g),C=u.getX(g+1),v=js(this,e,$i,l,_,C,g);v&&t.push(v)}if(this.isLineLoop){let g=u.getX(p-1),M=u.getX(d),_=js(this,e,$i,l,g,M,p-1);_&&t.push(_)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,M=p-1;g<M;g+=c){let _=js(this,e,$i,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){let g=js(this,e,$i,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function js(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(xr.fromBufferAttribute(a,i),yr.fromBufferAttribute(a,r),t.distanceSqToSegment(xr,yr,Mo,hl)>n)return;Mo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Mo);if(!(c<e.near||c>e.far))return{distance:c,point:hl.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Li=class extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fl=new He,Zo=new et,Qs=new Xt,er=new y,as=class extends We{constructor(e=new Oe,t=new Li){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=r,e.ray.intersectsSphere(Qs)===!1)return;fl.copy(i).invert(),Zo.copy(e.ray).applyMatrix4(fl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,g=d;p<g;p++){let M=c.getX(p);er.fromBufferAttribute(h,M),dl(er,M,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,g=d;p<g;p++)er.fromBufferAttribute(h,p),dl(er,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function dl(s,e,t,n,i,r,o){let a=Zo.distanceSqToPoint(s);if(a<t){let l=new y;Zo.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ie=class extends On{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Me=class s extends Oe{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2));function p(g,M,_,C,v,m,x,I,S,T,E){let P=m/S,A=x/T,R=m/2,z=x/2,F=I/2,U=S+1,L=T+1,X=0,b=0,H=new y;for(let N=0;N<L;N++){let D=N*A-z;for(let k=0;k<U;k++){let W=k*P-R;H[g]=W*C,H[M]=D*v,H[_]=F,c.push(H.x,H.y,H.z),H[g]=0,H[M]=0,H[_]=I>0?1:-1,u.push(H.x,H.y,H.z),h.push(k/S),h.push(1-N/T),X+=1}}for(let N=0;N<T;N++)for(let D=0;D<S;D++){let k=f+D+U*N,W=f+D+U*(N+1),Y=f+(D+1)+U*(N+1),w=f+(D+1)+U*N;l.push(k,W,w),l.push(W,Y,w),b+=6}a.addGroup(d,b,E),d+=b,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ui=class s extends Oe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new y,u=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ze=class s extends Oe{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,g=[],M=n/2,_=0;C(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function C(){let m=new y,x=new y,I=0,S=(t-e)/n;for(let T=0;T<=r;T++){let E=[],P=T/r,A=P*(t-e)+e;for(let R=0;R<=i;R++){let z=R/i,F=z*l+a,U=Math.sin(F),L=Math.cos(F);x.x=A*U,x.y=-P*n+M,x.z=A*L,h.push(x.x,x.y,x.z),m.set(U,S,L).normalize(),f.push(m.x,m.y,m.z),d.push(z,1-P),E.push(p++)}g.push(E)}for(let T=0;T<i;T++)for(let E=0;E<r;E++){let P=g[E][T],A=g[E+1][T],R=g[E+1][T+1],z=g[E][T+1];(e>0||E!==0)&&(u.push(P,A,z),I+=3),(t>0||E!==r-1)&&(u.push(A,R,z),I+=3)}c.addGroup(_,I,0),_+=I}function v(m){let x=p,I=new he,S=new y,T=0,E=m===!0?e:t,P=m===!0?1:-1;for(let R=1;R<=i;R++)h.push(0,M*P,0),f.push(0,P,0),d.push(.5,.5),p++;let A=p;for(let R=0;R<=i;R++){let F=R/i*l+a,U=Math.cos(F),L=Math.sin(F);S.x=E*L,S.y=M*P,S.z=E*U,h.push(S.x,S.y,S.z),f.push(0,P,0),I.x=U*.5+.5,I.y=L*.5*P+.5,d.push(I.x,I.y),p++}for(let R=0;R<i;R++){let z=x+R,F=A+R;m===!0?u.push(F,F+1,z):u.push(F+1,F,z),T+=3}c.addGroup(_,T,m===!0?1:2),_+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tn=class s extends ze{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new he:new y);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new y,i=[],r=[],o=[],a=new y,l=new He;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new y)}r[0]=new y,o[0]=new y;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Fe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Fe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Di=class extends Bt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_r=class extends Di{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function _a(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var pl=new y,ml=new y,bo=new _a,So=new _a,To=new _a,kn=class extends Bt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new y){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(ml.subVectors(i[0],i[1]).add(i[0]),c=ml);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(pl.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=pl),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),p<1e-4&&(p=g),M<1e-4&&(M=g),bo.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,g,M),So.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,g,M),To.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,g,M)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),So.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),To.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(bo.calc(l),So.calc(l),To.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gl(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Hu(s,e){let t=1-s;return t*t*e}function Wu(s,e){return 2*(1-s)*s*e}function Xu(s,e){return s*s*e}function es(s,e,t,n){return Hu(s,e)+Wu(s,t)+Xu(s,n)}function qu(s,e){let t=1-s;return t*t*t*e}function Yu(s,e){let t=1-s;return 3*t*t*s*e}function Zu(s,e){return 3*(1-s)*s*s*e}function $u(s,e){return s*s*s*e}function ts(s,e,t,n,i){return qu(s,e)+Yu(s,t)+Zu(s,n)+$u(s,i)}var ls=class extends Bt{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ts(e,i.x,r.x,o.x,a.x),ts(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mn=class extends Bt{constructor(e=new y,t=new y,n=new y,i=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new y){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ts(e,i.x,r.x,o.x,a.x),ts(e,i.y,r.y,o.y,a.y),ts(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cs=class extends Bt{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vn=class extends Bt{constructor(e=new y,t=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},us=class extends Bt{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(es(e,i.x,r.x,o.x),es(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hs=class extends Bt{constructor(e=new y,t=new y,n=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new y){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(es(e,i.x,r.x,o.x),es(e,i.y,r.y,o.y),es(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fs=class extends Bt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(gl(a,l.x,c.x,u.x,h.x),gl(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new he().fromArray(i))}return this}},vr=Object.freeze({__proto__:null,ArcCurve:_r,CatmullRomCurve3:kn,CubicBezierCurve:ls,CubicBezierCurve3:Mn,EllipseCurve:Di,LineCurve:cs,LineCurve3:Vn,QuadraticBezierCurve:us,QuadraticBezierCurve3:hs,SplineCurve:fs}),Ui=class extends Bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new vr[i.type]().fromJSON(i))}return this}},hi=class extends Ui{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new cs(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new us(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new ls(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Di(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ut=class extends hi{constructor(e){super(e),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new hi().fromJSON(i))}return this}};function Ju(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Vl(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=th(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let u=a,h=l;for(let f=t;f<i;f+=t){let d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return ds(r,o,t,a,l,c,0),o}function Vl(s,e,t,n,i){let r;if(i===fh(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=xl(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=xl(o/n|0,s[o],s[o+1],r);return r&&Ni(r,r.next)&&(ms(r),r=r.next),r}function fi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ni(t,t.next)||je(t.prev,t,t.next)===0)){if(ms(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ds(s,e,t,n,i,r,o){if(!s)return;!o&&r&&oh(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?ju(s,n,i,r):Ku(s)){e.push(l.i,s.i,c.i),ms(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Qu(fi(s),e),ds(s,e,t,n,i,r,2)):o===2&&eh(s,e,t,n,i,r):ds(fi(s),e,t,n,i,r,1);break}}}function Ku(s){let e=s.prev,t=s,n=s.next;if(je(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),h=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=f&&p.y>=h&&p.y<=d&&Ki(i,a,r,l,o,c,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ju(s,e,t,n){let i=s.prev,r=s,o=s.next;if(je(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(u,h,f),g=Math.max(a,l,c),M=Math.max(u,h,f),_=$o(d,p,e,t,n),C=$o(g,M,e,t,n),v=s.prevZ,m=s.nextZ;for(;v&&v.z>=_&&m&&m.z<=C;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=M&&v!==i&&v!==o&&Ki(a,u,l,h,c,f,v.x,v.y)&&je(v.prev,v,v.next)>=0||(v=v.prevZ,m.x>=d&&m.x<=g&&m.y>=p&&m.y<=M&&m!==i&&m!==o&&Ki(a,u,l,h,c,f,m.x,m.y)&&je(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;v&&v.z>=_;){if(v.x>=d&&v.x<=g&&v.y>=p&&v.y<=M&&v!==i&&v!==o&&Ki(a,u,l,h,c,f,v.x,v.y)&&je(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;m&&m.z<=C;){if(m.x>=d&&m.x<=g&&m.y>=p&&m.y<=M&&m!==i&&m!==o&&Ki(a,u,l,h,c,f,m.x,m.y)&&je(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Qu(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Ni(n,i)&&Hl(n,t,t.next,i)&&ps(n,i)&&ps(i,n)&&(e.push(n.i,t.i,i.i),ms(t),ms(t.next),t=s=i),t=t.next}while(t!==s);return fi(t)}function eh(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ch(o,a)){let l=Wl(o,a);o=fi(o,o.next),l=fi(l,l.next),ds(o,e,t,n,i,r,0),ds(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function th(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Vl(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(lh(c))}i.sort(nh);for(let r=0;r<i.length;r++)t=ih(i[r],t);return t}function nh(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function ih(s,e){let t=sh(s,e);if(!t)return e;let n=Wl(t,s);return fi(n,n.next),fi(t,t.next)}function sh(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Ni(s,t))return t;do{if(Ni(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Gl(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);ps(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&rh(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function rh(s,e){return je(s.prev,s,e.prev)<0&&je(e.next,s,s.next)<0}function oh(s,e,t,n){let i=s;do i.z===0&&(i.z=$o(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ah(i)}function ah(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function $o(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function lh(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Gl(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Ki(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Gl(s,e,t,n,i,r,o,a)}function ch(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!uh(s,e)&&(ps(s,e)&&ps(e,s)&&hh(s,e)&&(je(s.prev,s,e.prev)||je(s,e.prev,e))||Ni(s,e)&&je(s.prev,s,s.next)>0&&je(e.prev,e,e.next)>0)}function je(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ni(s,e){return s.x===e.x&&s.y===e.y}function Hl(s,e,t,n){let i=nr(je(s,e,t)),r=nr(je(s,e,n)),o=nr(je(t,n,s)),a=nr(je(t,n,e));return!!(i!==r&&o!==a||i===0&&tr(s,t,e)||r===0&&tr(s,n,e)||o===0&&tr(t,s,n)||a===0&&tr(t,e,n))}function tr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function nr(s){return s>0?1:s<0?-1:0}function uh(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Hl(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ps(s,e){return je(s.prev,s,s.next)<0?je(s,e,s.next)>=0&&je(s,s.prev,e)>=0:je(s,e,s.prev)<0||je(s,s.next,e)<0}function hh(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Wl(s,e){let t=Jo(s.i,s.x,s.y),n=Jo(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function xl(s,e,t,n){let i=Jo(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ms(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Jo(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fh(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Ko=class{static triangulate(e,t,n=2){return Ju(e,t,n)}},ln=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];yl(e),_l(n,e);let o=e.length;t.forEach(yl);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,_l(n,t[l]);let a=Ko.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function yl(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function _l(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var nn=class s extends Oe{constructor(e=new ut([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:dh,v,m=!1,x,I,S,T;if(_){v=_.getSpacedPoints(u),m=!0,f=!1;let G=_.isCatmullRomCurve3?_.closed:!1;x=_.computeFrenetFrames(u,G),I=new y,S=new y,T=new y}f||(M=0,d=0,p=0,g=0);let E=a.extractPoints(c),P=E.shape,A=E.holes;if(!ln.isClockWise(P)){P=P.reverse();for(let G=0,ee=A.length;G<ee;G++){let Q=A[G];ln.isClockWise(Q)&&(A[G]=Q.reverse())}}function z(G){let Q=10000000000000001e-36,oe=G[0];for(let le=1;le<=G.length;le++){let ye=le%G.length,de=G[ye],we=de.x-oe.x,_e=de.y-oe.y,$=we*we+_e*_e,V=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(oe.x),Math.abs(oe.y)),se=Q*V*V;if($<=se){G.splice(ye,1),le--;continue}oe=de}}z(P),A.forEach(z);let F=A.length,U=P;for(let G=0;G<F;G++){let ee=A[G];P=P.concat(ee)}function L(G,ee,Q){return ee||Je("ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(ee,Q)}let X=P.length;function b(G,ee,Q){let oe,le,ye,de=G.x-ee.x,we=G.y-ee.y,_e=Q.x-G.x,$=Q.y-G.y,V=de*de+we*we,se=de*$-we*_e;if(Math.abs(se)>Number.EPSILON){let ue=Math.sqrt(V),te=Math.sqrt(_e*_e+$*$),fe=ee.x-we/ue,Pe=ee.y+de/ue,ge=Q.x-$/te,De=Q.y+_e/te,Ne=((ge-fe)*$-(De-Pe)*_e)/(de*$-we*_e);oe=fe+de*Ne-G.x,le=Pe+we*Ne-G.y;let Ee=oe*oe+le*le;if(Ee<=2)return new he(oe,le);ye=Math.sqrt(Ee/2)}else{let ue=!1;de>Number.EPSILON?_e>Number.EPSILON&&(ue=!0):de<-Number.EPSILON?_e<-Number.EPSILON&&(ue=!0):Math.sign(we)===Math.sign($)&&(ue=!0),ue?(oe=-we,le=de,ye=Math.sqrt(V)):(oe=de,le=we,ye=Math.sqrt(V/2))}return new he(oe/ye,le/ye)}let H=[];for(let G=0,ee=U.length,Q=ee-1,oe=G+1;G<ee;G++,Q++,oe++)Q===ee&&(Q=0),oe===ee&&(oe=0),H[G]=b(U[G],U[Q],U[oe]);let N=[],D,k=H.concat();for(let G=0,ee=F;G<ee;G++){let Q=A[G];D=[];for(let oe=0,le=Q.length,ye=le-1,de=oe+1;oe<le;oe++,ye++,de++)ye===le&&(ye=0),de===le&&(de=0),D[oe]=b(Q[oe],Q[ye],Q[de]);N.push(D),k=k.concat(D)}let W;if(M===0)W=ln.triangulateShape(U,A);else{let G=[],ee=[];for(let Q=0;Q<M;Q++){let oe=Q/M,le=d*Math.cos(oe*Math.PI/2),ye=p*Math.sin(oe*Math.PI/2)+g;for(let de=0,we=U.length;de<we;de++){let _e=L(U[de],H[de],ye);Z(_e.x,_e.y,-le),oe===0&&G.push(_e)}for(let de=0,we=F;de<we;de++){let _e=A[de];D=N[de];let $=[];for(let V=0,se=_e.length;V<se;V++){let ue=L(_e[V],D[V],ye);Z(ue.x,ue.y,-le),oe===0&&$.push(ue)}oe===0&&ee.push($)}}W=ln.triangulateShape(G,ee)}let Y=W.length,w=p+g;for(let G=0;G<X;G++){let ee=f?L(P[G],k[G],w):P[G];m?(S.copy(x.normals[0]).multiplyScalar(ee.x),I.copy(x.binormals[0]).multiplyScalar(ee.y),T.copy(v[0]).add(S).add(I),Z(T.x,T.y,T.z)):Z(ee.x,ee.y,0)}for(let G=1;G<=u;G++)for(let ee=0;ee<X;ee++){let Q=f?L(P[ee],k[ee],w):P[ee];m?(S.copy(x.normals[G]).multiplyScalar(Q.x),I.copy(x.binormals[G]).multiplyScalar(Q.y),T.copy(v[G]).add(S).add(I),Z(T.x,T.y,T.z)):Z(Q.x,Q.y,h/u*G)}for(let G=M-1;G>=0;G--){let ee=G/M,Q=d*Math.cos(ee*Math.PI/2),oe=p*Math.sin(ee*Math.PI/2)+g;for(let le=0,ye=U.length;le<ye;le++){let de=L(U[le],H[le],oe);Z(de.x,de.y,h+Q)}for(let le=0,ye=A.length;le<ye;le++){let de=A[le];D=N[le];for(let we=0,_e=de.length;we<_e;we++){let $=L(de[we],D[we],oe);m?Z($.x,$.y+v[u-1].y,v[u-1].x+Q):Z($.x,$.y,h+Q)}}}O(),q();function O(){let G=i.length/3;if(f){let ee=0,Q=X*ee;for(let oe=0;oe<Y;oe++){let le=W[oe];B(le[2]+Q,le[1]+Q,le[0]+Q)}ee=u+M*2,Q=X*ee;for(let oe=0;oe<Y;oe++){let le=W[oe];B(le[0]+Q,le[1]+Q,le[2]+Q)}}else{for(let ee=0;ee<Y;ee++){let Q=W[ee];B(Q[2],Q[1],Q[0])}for(let ee=0;ee<Y;ee++){let Q=W[ee];B(Q[0]+X*u,Q[1]+X*u,Q[2]+X*u)}}n.addGroup(G,i.length/3-G,0)}function q(){let G=i.length/3,ee=0;K(U,ee),ee+=U.length;for(let Q=0,oe=A.length;Q<oe;Q++){let le=A[Q];K(le,ee),ee+=le.length}n.addGroup(G,i.length/3-G,1)}function K(G,ee){let Q=G.length;for(;--Q>=0;){let oe=Q,le=Q-1;le<0&&(le=G.length-1);for(let ye=0,de=u+M*2;ye<de;ye++){let we=X*ye,_e=X*(ye+1),$=ee+oe+we,V=ee+le+we,se=ee+le+_e,ue=ee+oe+_e;ne($,V,se,ue)}}}function Z(G,ee,Q){l.push(G),l.push(ee),l.push(Q)}function B(G,ee,Q){J(G),J(ee),J(Q);let oe=i.length/3,le=C.generateTopUV(n,i,oe-3,oe-2,oe-1);ie(le[0]),ie(le[1]),ie(le[2])}function ne(G,ee,Q,oe){J(G),J(ee),J(oe),J(ee),J(Q),J(oe);let le=i.length/3,ye=C.generateSideWallUV(n,i,le-6,le-3,le-2,le-1);ie(ye[0]),ie(ye[1]),ie(ye[3]),ie(ye[1]),ie(ye[2]),ie(ye[3])}function J(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function ie(G){r.push(G.x),r.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ph(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new vr[i.type]().fromJSON(i)),new s(n,e.options)}},dh={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new he(r,o),new he(a,l),new he(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],g=e[r*3],M=e[r*3+1],_=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-h),new he(f,1-p),new he(g,1-_)]:[new he(a,1-l),new he(u,1-h),new he(d,1-p),new he(M,1-_)]}};function ph(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var di=class s extends Oe{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Fe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new y,f=new he,d=new y,p=new y,g=new y,M=0,_=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:M=e[C+1].x-e[C].x,_=e[C+1].y-e[C].y,d.x=_*1,d.y=-M,d.z=_*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:M=e[C+1].x-e[C].x,_=e[C+1].y-e[C].y,d.x=_*1,d.y=-M,d.z=_*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(p)}for(let C=0;C<=t;C++){let v=n+C*u*i,m=Math.sin(v),x=Math.cos(v);for(let I=0;I<=e.length-1;I++){h.x=e[I].x*m,h.y=e[I].y,h.z=e[I].x*x,o.push(h.x,h.y,h.z),f.x=C/t,f.y=I/(e.length-1),a.push(f.x,f.y);let S=l[3*I+0]*m,T=l[3*I+1],E=l[3*I+0]*x;c.push(S,T,E)}}for(let C=0;C<t;C++)for(let v=0;v<e.length-1;v++){let m=v+C*e.length,x=m,I=m+e.length,S=m+e.length+1,T=m+1;r.push(x,I,T),r.push(S,T,I)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Le=class s extends Oe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],g=[],M=[];for(let _=0;_<u;_++){let C=_*f-o;for(let v=0;v<c;v++){let m=v*h-r;p.push(m,-C,0),g.push(0,0,1),M.push(v/a),M.push(1-_/l)}}for(let _=0;_<l;_++)for(let C=0;C<a;C++){let v=C+c*_,m=C+c*(_+1),x=C+1+c*(_+1),I=C+1+c*_;d.push(v,m,I),d.push(m,x,I)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},bn=class s extends Oe{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/i,d=new y,p=new he;for(let g=0;g<=i;g++){for(let M=0;M<=n;M++){let _=r+M/n*o;d.x=h*Math.cos(_),d.y=h*Math.sin(_),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let g=0;g<i;g++){let M=g*(n+1);for(let _=0;_<n;_++){let C=_+M,v=C,m=C+n+1,x=C+n+2,I=C+1;a.push(v,m,I),a.push(m,x,I)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ot=class s extends Oe{constructor(e=new ut([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(o,2));function c(u){let h=i.length/3,f=u.extractPoints(t),d=f.shape,p=f.holes;ln.isClockWise(d)===!1&&(d=d.reverse());for(let M=0,_=p.length;M<_;M++){let C=p[M];ln.isClockWise(C)===!0&&(p[M]=C.reverse())}let g=ln.triangulateShape(d,p);for(let M=0,_=p.length;M<_;M++){let C=p[M];d=d.concat(C)}for(let M=0,_=d.length;M<_;M++){let C=d[M];i.push(C.x,C.y,0),r.push(0,0,1),o.push(C.x,C.y)}for(let M=0,_=g.length;M<_;M++){let C=g[M],v=C[0]+h,m=C[1]+h,x=C[2]+h;n.push(v,m,x),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return mh(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function mh(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Xe=class s extends Oe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new y,f=new y,d=[],p=[],g=[],M=[];for(let _=0;_<=n;_++){let C=[],v=_/n,m=o+v*a,x=e*Math.cos(m),I=Math.sqrt(e*e-x*x),S=0;_===0&&o===0?S=.5/t:_===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){let E=T/t,P=i+E*r;h.x=-I*Math.cos(P),h.y=x,h.z=I*Math.sin(P),p.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),M.push(E+S,1-v),C.push(c++)}u.push(C)}for(let _=0;_<n;_++)for(let C=0;C<t;C++){let v=u[_][C+1],m=u[_][C],x=u[_+1][C],I=u[_+1][C+1];(_!==0||o>0)&&d.push(v,m,I),(_!==n-1||l<Math.PI)&&d.push(m,x,I)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var At=class s extends Oe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],h=[],f=new y,d=new y,p=new y;for(let g=0;g<=n;g++){let M=o+g/n*a;for(let _=0;_<=i;_++){let C=_/i*r;d.x=(e+t*Math.cos(M))*Math.cos(C),d.y=(e+t*Math.cos(M))*Math.sin(C),d.z=t*Math.sin(M),c.push(d.x,d.y,d.z),f.x=e*Math.cos(C),f.y=e*Math.sin(C),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(_/i),h.push(g/n)}}for(let g=1;g<=n;g++)for(let M=1;M<=i;M++){let _=(i+1)*g+M-1,C=(i+1)*(g-1)+M-1,v=(i+1)*(g-1)+M,m=(i+1)*g+M;l.push(_,C,m),l.push(C,v,m)}this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Fi=class s extends Oe{constructor(e=new hs(new y(-1,-1,0),new y(-1,1,0),new y(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new y,l=new y,c=new he,u=new y,h=[],f=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(d,2));function g(){for(let v=0;v<t;v++)M(v);M(r===!1?t:0),C(),_()}function M(v){u=e.getPointAt(v/t,u);let m=o.normals[v],x=o.binormals[v];for(let I=0;I<=i;I++){let S=I/i*Math.PI*2,T=Math.sin(S),E=-Math.cos(S);l.x=E*m.x+T*x.x,l.y=E*m.y+T*x.y,l.z=E*m.z+T*x.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function _(){for(let v=1;v<=t;v++)for(let m=1;m<=i;m++){let x=(i+1)*(v-1)+(m-1),I=(i+1)*v+(m-1),S=(i+1)*v+m,T=(i+1)*(v-1)+m;p.push(x,I,T),p.push(I,S,T)}}function C(){for(let v=0;v<=t;v++)for(let m=0;m<=i;m++)c.x=v/t,c.y=m/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new vr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Xl(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(vl(i))i.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(vl(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Et(s){let e={};for(let t=0;t<s.length;t++){let n=Xl(s[t]);for(let i in n)e[i]=n[i]}return e}function vl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}var Se=class extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var gs=class extends Tt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ir(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var Gn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Mr=class extends Gn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ko,endingEnd:ko}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vo:r=e,a=2*t-n;break;case Go:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vo:o=e,l=2*n-t;break;case Go:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),g=p*p,M=g*p,_=-f*M+2*f*g-f*p,C=(1+f)*M+(-1.5-2*f)*g+(-.5+f)*p+1,v=(-1-d)*M+(1.5+d)*g+.5*p,m=d*M-d*g;for(let x=0;x!==a;++x)r[x]=_*o[u+x]+C*o[c+x]+v*o[l+x]+m*o[h+x];return r}},br=class extends Gn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Sr=class extends Gn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Tr=class extends Gn{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(i-t),g=1-p;for(let M=0;M!==a;++M)r[M]=o[c+M]*g+o[l+M]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let g=o[c+p],M=o[l+p],_=d*f+p*2,C=h[_],v=h[_+1],m=e*f+p*2,x=u[m],I=u[m+1],S=(n-t)/(i-t),T,E,P,A,R;for(let z=0;z<8;z++){T=S*S,E=T*S,P=1-S,A=P*P,R=A*P;let U=R*t+3*A*S*C+3*P*T*x+E*i-n;if(Math.abs(U)<1e-10)break;let L=3*A*(C-t)+6*P*S*(x-C)+3*T*(i-x);if(Math.abs(L)<1e-10)break;S=S-U/L,S=Math.max(0,Math.min(1,S))}r[p]=R*g+3*A*S*v+3*P*T*I+E*M}return r}},zt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ir(t,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ir(e.times,Array),values:ir(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new br(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Tr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case cr:t=this.InterpolantFactoryMethodLinear;break;case or:t=this.InterpolantFactoryMethodSmooth;break;case zo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return or;case this.InterpolantFactoryMethodBezier:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&au(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===or,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let g=t[h+p];if(g!==t[f+p]||g!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};zt.prototype.ValueTypeName="";zt.prototype.TimeBufferType=Float32Array;zt.prototype.ValueBufferType=Float32Array;zt.prototype.DefaultInterpolation=cr;var Hn=class extends zt{constructor(e,t,n){super(e,t,n)}};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=is;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var wr=class extends zt{constructor(e,t,n,i){super(e,t,n,i)}};wr.prototype.ValueTypeName="color";var Ar=class extends zt{constructor(e,t,n,i){super(e,t,n,i)}};Ar.prototype.ValueTypeName="number";var Er=class extends Gn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)be.slerpFlat(r,0,o,c-a,o,c,l);return r}},xs=class extends zt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Er(this.times,this.values,this.getValueSize(),e)}};xs.prototype.ValueTypeName="quaternion";xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends zt{constructor(e,t,n){super(e,t,n)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=is;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Cr=class extends zt{constructor(e,t,n,i){super(e,t,n,i)}};Cr.prototype.ValueTypeName="vector";var Rr=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ql=new Rr,Pr=class{constructor(e){this.manager=e!==void 0?e:ql,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends We{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var wo=new He,Ml=new y,bl=new y,jo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=pa,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new li(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ml),bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bl),t.updateMatrixWorld(),wo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ss||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sr=new y,rr=new be,an=new y,Lr=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sr,rr,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,an.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(sr,rr,an),an.x===1&&an.y===1&&an.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sr,rr,an.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Un=new y,Sl=new he,Tl=new he,Dr=class extends Lr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ji*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Un.x,Un.y).multiplyScalar(-e/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-e/Un.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,Tl),t.subVectors(Tl,Sl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ji*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Qo=class extends jo{constructor(){super(new Dr(90,1,.5,500)),this.isPointLightShadow=!0}},ys=class extends Ir{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var va="\\[\\]\\.:\\/",gh=new RegExp("["+va+"]","g"),Ma="[^"+va+"]",xh="[^"+va.replace("\\.","")+"]",yh=/((?:WC+[\/:])*)/.source.replace("WC",Ma),_h=/(WCOD+)?/.source.replace("WCOD",xh),vh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ma),Mh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ma),bh=new RegExp("^"+yh+_h+vh+Mh+"$"),Sh=["material","materials","bones","map"],ea=class{constructor(e,t,n){let i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$e=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gh,"")}static parseTrackName(e){let t=bh.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Sh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=ea;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mm=new Float32Array(1);var wl=new He,Sn=class{constructor(e,t,n=0,i=1/0){this.ray=new et(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(e,t=!0,n=[]){return ta(e,this,n,t),n.sort(Al),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ta(e[i],this,n,t);return n.sort(Al),n}};function Al(s,e){return s.distance-e.distance}function ta(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)ta(r[o],e,t,!0)}}var Aa=class Aa{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Aa.prototype.isMatrix2=!0;var na=Aa;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var Rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ph=`#ifdef USE_ALPHAHASH
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
#endif`,Ih=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nh=`#ifdef USE_AOMAP
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
#endif`,Fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bh=`#ifdef USE_BATCHING
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
#endif`,Oh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gh=`#ifdef USE_IRIDESCENCE
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
#endif`,Hh=`#ifdef USE_BUMPMAP
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
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Kh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,jh=`#define PI 3.141592653589793
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
} // validated`,Qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ef=`vec3 transformedNormal = objectNormal;
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
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
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
#endif`,Cf=`uniform sampler2D dfgLUT;
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
}`,Rf=`
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
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
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
#endif`,If=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Of=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
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
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ld=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,md=`float getShadowMask() {
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
}`,gd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xd=`#ifdef USE_SKINNING
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
#endif`,yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
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
#endif`,vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Td=`#ifdef USE_TRANSMISSION
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
#endif`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Id=`uniform sampler2D t2D;
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
}`,Ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`#include <common>
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
}`,Bd=`#if DEPTH_PACKING == 3200
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
}`,Od=`#define DISTANCE
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
}`,zd=`#define DISTANCE
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
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`uniform float scale;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Wd=`#include <common>
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#define LAMBERT
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
}`,Yd=`#define LAMBERT
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
}`,Zd=`#define MATCAP
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
}`,$d=`#define MATCAP
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
}`,Jd=`#define NORMAL
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
}`,Kd=`#define NORMAL
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
}`,jd=`#define PHONG
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
}`,Qd=`#define PHONG
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
}`,ep=`#define STANDARD
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
}`,tp=`#define STANDARD
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
}`,np=`#define TOON
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
}`,ip=`#define TOON
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
}`,sp=`uniform float size;
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
}`,rp=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,ap=`uniform vec3 color;
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
}`,lp=`uniform float rotation;
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
}`,cp=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Rh,alphahash_pars_fragment:Ph,alphamap_fragment:Ih,alphamap_pars_fragment:Lh,alphatest_fragment:Dh,alphatest_pars_fragment:Uh,aomap_fragment:Nh,aomap_pars_fragment:Fh,batching_pars_vertex:Bh,batching_vertex:Oh,begin_vertex:zh,beginnormal_vertex:kh,bsdfs:Vh,iridescence_fragment:Gh,bumpmap_pars_fragment:Hh,clipping_planes_fragment:Wh,clipping_planes_pars_fragment:Xh,clipping_planes_pars_vertex:qh,clipping_planes_vertex:Yh,color_fragment:Zh,color_pars_fragment:$h,color_pars_vertex:Jh,color_vertex:Kh,common:jh,cube_uv_reflection_fragment:Qh,defaultnormal_vertex:ef,displacementmap_pars_vertex:tf,displacementmap_vertex:nf,emissivemap_fragment:sf,emissivemap_pars_fragment:rf,colorspace_fragment:of,colorspace_pars_fragment:af,envmap_fragment:lf,envmap_common_pars_fragment:cf,envmap_pars_fragment:uf,envmap_pars_vertex:hf,envmap_physical_pars_fragment:bf,envmap_vertex:ff,fog_vertex:df,fog_pars_vertex:pf,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:xf,lightmap_pars_fragment:yf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:vf,lights_pars_begin:Mf,lights_toon_fragment:Sf,lights_toon_pars_fragment:Tf,lights_phong_fragment:wf,lights_phong_pars_fragment:Af,lights_physical_fragment:Ef,lights_physical_pars_fragment:Cf,lights_fragment_begin:Rf,lights_fragment_maps:Pf,lights_fragment_end:If,lightprobes_pars_fragment:Lf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Nf,logdepthbuf_vertex:Ff,map_fragment:Bf,map_pars_fragment:Of,map_particle_fragment:zf,map_particle_pars_fragment:kf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Hf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:qf,morphtarget_vertex:Yf,normal_fragment_begin:Zf,normal_fragment_maps:$f,normal_pars_fragment:Jf,normal_pars_vertex:Kf,normal_vertex:jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:ed,clearcoat_normal_fragment_maps:td,clearcoat_pars_fragment:nd,iridescence_pars_fragment:id,opaque_fragment:sd,packing:rd,premultiplied_alpha_fragment:od,project_vertex:ad,dithering_fragment:ld,dithering_pars_fragment:cd,roughnessmap_fragment:ud,roughnessmap_pars_fragment:hd,shadowmap_pars_fragment:fd,shadowmap_pars_vertex:dd,shadowmap_vertex:pd,shadowmask_pars_fragment:md,skinbase_vertex:gd,skinning_pars_vertex:xd,skinning_vertex:yd,skinnormal_vertex:_d,specularmap_fragment:vd,specularmap_pars_fragment:Md,tonemapping_fragment:bd,tonemapping_pars_fragment:Sd,transmission_fragment:Td,transmission_pars_fragment:wd,uv_pars_fragment:Ad,uv_pars_vertex:Ed,uv_vertex:Cd,worldpos_vertex:Rd,background_vert:Pd,background_frag:Id,backgroundCube_vert:Ld,backgroundCube_frag:Dd,cube_vert:Ud,cube_frag:Nd,depth_vert:Fd,depth_frag:Bd,distance_vert:Od,distance_frag:zd,equirect_vert:kd,equirect_frag:Vd,linedashed_vert:Gd,linedashed_frag:Hd,meshbasic_vert:Wd,meshbasic_frag:Xd,meshlambert_vert:qd,meshlambert_frag:Yd,meshmatcap_vert:Zd,meshmatcap_frag:$d,meshnormal_vert:Jd,meshnormal_frag:Kd,meshphong_vert:jd,meshphong_frag:Qd,meshphysical_vert:ep,meshphysical_frag:tp,meshtoon_vert:np,meshtoon_frag:ip,points_vert:sp,points_frag:rp,shadow_vert:op,shadow_frag:ap,sprite_vert:lp,sprite_frag:cp},xe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new y},probesMax:{value:new y},probesResolution:{value:new y}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Yl={basic:{uniforms:Et([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Et([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Et([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Et([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Et([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Be(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Et([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Et([xe.points,xe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Et([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Et([xe.common,xe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Et([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Et([xe.sprite,xe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Et([xe.common,xe.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Et([xe.lights,xe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yl.physical={uniforms:Et([Yl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var up=new Ue;up.set(-1,0,0,0,1,0,0,0,1);var w_={[ra]:"LINEAR_TONE_MAPPING",[oa]:"REINHARD_TONE_MAPPING",[aa]:"CINEON_TONE_MAPPING",[la]:"ACES_FILMIC_TONE_MAPPING",[ua]:"AGX_TONE_MAPPING",[ha]:"NEUTRAL_TONE_MAPPING",[ca]:"CUSTOM_TONE_MAPPING"};var A_=new Float32Array(16),E_=new Float32Array(9),C_=new Float32Array(4);var R_={[ra]:"Linear",[oa]:"Reinhard",[aa]:"Cineon",[la]:"ACESFilmic",[ua]:"AgX",[ha]:"Neutral",[ca]:"Custom"};var P_={[El]:"SHADOWMAP_TYPE_PCF",[Cl]:"SHADOWMAP_TYPE_VSM"};var I_={[Ll]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE",[Dl]:"ENVMAP_TYPE_CUBE_UV"};var L_={[da]:"ENVMAP_MODE_REFRACTION"};var D_={[sa]:"ENVMAP_BLENDING_MULTIPLY",[Pl]:"ENVMAP_BLENDING_MIX",[Il]:"ENVMAP_BLENDING_ADD"};var hp=new Ue;hp.set(-1,0,0,0,1,0,0,0,1);var U_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var j={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function mi(s,e,t,n,i,r=16){r=Math.min(r,n/2,i/2),s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.quadraticCurveTo(e+n,t,e+n,t+r),s.lineTo(e+n,t+i-r),s.quadraticCurveTo(e+n,t+i,e+n-r,t+i),s.lineTo(e+r,t+i),s.quadraticCurveTo(e,t+i,e,t+i-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath()}function Ke(s,e,t,n,i,{top:r="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=s.createLinearGradient(e,t,e,t+i);c.addColorStop(0,r),c.addColorStop(1,o),s.fillStyle=c,mi(s,e,t,n,i,l),s.fill(),s.strokeStyle=a,s.lineWidth=1.5,s.stroke()}function vt(s,e,t){let n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),s.fillStyle=n,s.fillRect(0,0,e,t),s.save(),s.globalAlpha=.13,s.strokeStyle="#79b3d1",s.lineWidth=1;for(let i=0;i<8;i++)s.beginPath(),s.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),s.stroke();s.restore(),s.fillStyle=j.gold,s.fillRect(32,0,96,4)}function re(s,e,t,n,i=28,r=j.ink,o="600",a){s.font=`${o} ${i}px Arial`,s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Number.isFinite(a)?s.fillText(e,t,n,a):s.fillText(e,t,n)}function Tn(s,e,t,n,i,r=j.gold){if(s.save(),s.translate(t,n),s.scale(i/48,i/48),s.lineWidth=2.8,s.lineCap="round",s.lineJoin="round",s.strokeStyle=r,s.fillStyle=r,e==="ball")s.beginPath(),s.arc(0,0,18,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-18,0),s.lineTo(18,0),s.stroke(),s.fillStyle="#183a51",s.beginPath(),s.arc(0,0,6,0,Math.PI*2),s.fill(),s.stroke();else if(e==="puff"){s.beginPath(),s.arc(0,3,16,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-14,-5),s.lineTo(-15,-19),s.lineTo(-5,-11),s.moveTo(14,-5),s.lineTo(15,-19),s.lineTo(5,-11),s.stroke(),s.beginPath(),s.arc(0,-8,5,0,Math.PI*1.5),s.stroke();for(let o of[-6,6])s.beginPath(),s.arc(o,3,2,0,Math.PI*2),s.fill();s.beginPath(),s.arc(0,7,5,.2,Math.PI-.2),s.stroke()}else if(e==="book")mi(s,-20,-15,40,32,4),s.stroke(),s.beginPath(),s.moveTo(0,-15),s.lineTo(0,17),s.moveTo(-14,-6),s.lineTo(-5,-6),s.moveTo(5,-6),s.lineTo(14,-6),s.stroke();else if(e==="trophy")s.beginPath(),s.moveTo(-13,-17),s.lineTo(13,-17),s.lineTo(9,-3),s.quadraticCurveTo(0,8,-9,-3),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(0,5),s.lineTo(0,16),s.moveTo(-10,18),s.lineTo(10,18),s.moveTo(-13,-13),s.quadraticCurveTo(-25,-16,-19,-5),s.lineTo(-9,0),s.moveTo(13,-13),s.quadraticCurveTo(25,-16,19,-5),s.lineTo(9,0),s.stroke();else if(e==="golf")s.beginPath(),s.ellipse(0,13,18,6,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-3,13),s.lineTo(-3,-20),s.lineTo(15,-14),s.lineTo(-3,-7),s.stroke(),s.beginPath(),s.arc(10,8,3,0,Math.PI*2),s.fill();else if(e==="car"){mi(s,-19,-15,38,30,5),s.stroke(),mi(s,-11,-9,22,14,3),s.stroke();for(let o of[-22,18])for(let a of[-13,7])mi(s,o,a,4,7,1),s.fill();s.beginPath(),s.moveTo(-12,10),s.lineTo(12,10),s.moveTo(0,-15),s.lineTo(0,-23),s.stroke()}else if(e==="target"){for(let o of[19,12,4])s.beginPath(),s.arc(0,0,o,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(0,0),s.lineTo(20,-20),s.moveTo(12,-20),s.lineTo(20,-20),s.lineTo(20,-12),s.stroke()}else s.beginPath(),s.moveTo(-6,-12),s.lineTo(12,0),s.lineTo(-6,12),s.closePath(),s.fill();s.restore()}function Zl(s,e,t,n,i,r){let o=e==="RC car racing"?{title:"RC car racing",sub:"Three laps \xB7 steer, race and beat your best",icon:"car",accent:j.blue}:e==="Arcade wall of fame"?{title:"Arcade wall of fame",sub:"Personal bests \xB7 medals \xB7 trophy shelf",icon:"trophy",accent:j.gold}:e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:j.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:j.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:j.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:j.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:j.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:j.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:j.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:j.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:j.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:j.pink}:null;if(o)Ke(s,t,n,i,72,{top:r?"#365c70":"#21465e",bottom:r?"#25465a":"#19364b",stroke:r?o.accent:"#3b5c71"}),s.fillStyle=o.accent,mi(s,t+1,n+15,4,42,2),s.fill(),Tn(s,o.icon,t+41,n+36,42,o.accent),re(s,o.title,t+82,n+31,i<600?26:29,j.ink,"700"),re(s,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,j.muted,"400",i-125),re(s,"\u203A",t+i-35,n+47,42,r?o.accent:j.muted,"400");else{let a=e==="Resume";Ke(s,t,n,i,72,{top:a?r?"#fff0c2":"#f8df9e":r?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":r?j.gold:"#496379"}),a&&Tn(s,"play",t+33,n+36,25,"#173247"),re(s,e,t+(a?60:24),n+46,28,a?"#122c40":j.ink,"700")}}function $l(s,e){vt(s,1024,768),re(s,"TF JONES  /  PLAY IN THE YARD",44,37,19,j.blue,"700"),re(s,"Mollie\u2019s adventures",44,93,48,j.ink,"700"),re(s,"Point with your right hand, then pull the trigger.",44,132,24,j.muted,"400"),Ke(s,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),re(s,e,60,172,23,j.mint,"500",900)}function Ea(s,e,t,n,i){Ke(s,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),re(s,e,n+9,i,21,j.gold,"700"),re(s,t,n+45,i,21,j.muted,"400")}function Jl(s,e=!1){Ea(s,"Y","Games menu",44,663),Ea(s,"B","Back",325,663),Ea(s,"A",e?"Rescue / replay":"Replay round",548,663),s.strokeStyle="#355168",s.beginPath(),s.moveTo(44,692),s.lineTo(980,692),s.stroke(),re(s,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,j.blue,"700"),re(s,e?"Race paused \xB7 grip brakes":"Right grip to teleport",674,731,21,j.muted,"400")}function Kl(s,e){s.clearRect(0,0,768,192),Ke(s,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),s.fillStyle=j.gold,mi(s,23,27,5,138,2),s.fill(),s.font="600 32px Arial";let t=[],n="";for(let r of e.split(/\s+/)){let o=n?n+" "+r:r;s.measureText(o).width>660&&n?(t.push(n),n=r):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((r,o)=>re(s,r,47,i+o*42,32,j.ink,"600"))}function jl(s,{total:e,throws:t,best:n,last:i}){vt(s,1024,640),Tn(s,"target",72,66,55,j.mint),re(s,"STAFF-ROOM DARTS",119,79,40,j.ink,"700"),re(s,"NINE DART CHALLENGE",39,136,24,j.muted,"700"),re(s,String(e),36,281,142,j.gold,"700"),re(s,"POINTS",280,277,32,j.muted,"700"),Ke(s,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),re(s,"PERSONAL BEST",721,203,24,j.muted,"600"),re(s,String(n),721,264,52,j.mint,"700");for(let r=0;r<9;r++){let o=r<t;Ke(s,40+r*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),re(s,String(r+1),72+r*104,358,28,o?"#132e41":j.muted,"700")}Ke(s,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),re(s,i,61,458,36,j.ink,"600",890),re(s,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,j.mint,"600"),re(s,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,j.muted,"400")}var Ql=new Map;function It(s,e,t="target",n=j.gold,i=1.7){let r=[s,e,t,n].join("|"),o=Ql.get(r);if(!o){let u=document.createElement("canvas");u.width=1024,u.height=256;let h=u.getContext("2d");h.fillStyle="#0a1b2c",h.fillRect(0,0,1024,256),Ke(h,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),h.fillStyle=n,h.fillRect(32,36,5,182),Tn(h,t,110,128,88,n),re(h,s,192,123,58,j.ink,"700",790),re(h,e,194,186,26,n,"600",775),o=new Ie(u),o.colorSpace=Ae,Ql.set(r,o)}let a=new pe;a.name=s+" \xB7 activity sign";let l=new me(new Le(i,i/4),new ve({map:o}));a.add(l);let c=new me(new Me(i+.055,i/4+.055,.04),new Se({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var _s;function Bi(){if(!_s){let s=document.createElement("canvas");s.width=512,s.height=1024;let e=s.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let r=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(r,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(r,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=r+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(r,Math.floor((l+n())*341),o,1)}_s=new Ie(s),_s.colorSpace=Ae,_s.anisotropy=4}return new Se({map:_s,color:16777215,roughness:.28,metalness:.04})}var Ca;function sn(s=.5,e=.32){if(!Ca){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,64);r.addColorStop(0,"rgba(4,12,20,.48)"),r.addColorStop(.55,"rgba(4,12,20,.2)"),r.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),Ca=new Ie(n)}let t=new me(new Le(s,e),new ve({map:Ca,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function Xn(s=1.4){let e=new pe;e.name="Warm arcade light fitting";let t=new me(new Me(s,.09,.17),new Se({color:2504518,roughness:.6}));e.add(t);let n=new me(new Le(s-.1,.115),new ve({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function ec(s){let e=new ys(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,s.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new y(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new y(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var mt={left:-1.03,right:1.03,front:.08,back:6.95},vs=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function qn(s,e,t){let n=.033,i=0,r=0;for(let o of t.ramps){let a=s-o.x,l=e-o.z,c=o.w/2,u=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=u)continue;let h=Math.min(.16,c*.3),f=Math.min(1,(c-Math.abs(a))/h),d=1-Math.abs(l)/u,p=o.h*f*d;.033+p>n&&(n=.033+p,i=f<1?-Math.sign(a)*o.h*d/h:0,r=-Math.sign(l||1e-4)*o.h*f/u)}return{height:n,gx:i,gz:r}}function fp(s,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,s.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,s.z)),i=s.x-t,r=s.z-n,o=Math.hypot(i,r);if(o>=.038)return;if(o<1e-9){let l=[[s.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-s.x,1,0],[s.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-s.z,0,1]].sort((c,u)=>c[0]-u[0]);[,i,r]=l[0],s.x+=i*(l[0][0]+.038+1e-4),s.z+=r*(l[0][0]+.038+1e-4)}else i/=o,r/=o,s.x+=i*(.038-o+1e-4),s.z+=r*(.038-o+1e-4);let a=s.vx*i+s.vz*r;a<0&&(s.vx-=1.68*a*i,s.vz-=1.68*a*r)}function dp(s,e,t,n,i,r){let o=i-t,a=r-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((s-t)*o+(e-n)*a)/l)):0;return Math.hypot(s-t-o*c,e-n-a*c)}function nc(s,e,t){if(s.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),r=n/i;for(let o=0;o<i;o++){let a=s.x,l=s.z,c=qn(s.x,s.z,e);s.vx-=7*c.gx*r,s.vz-=7*c.gz*r;let u=Math.hypot(s.vx,s.vz),h=Math.max(0,u-.4*r);u&&(s.vx*=h/u,s.vz*=h/u),s.x+=s.vx*r,s.z+=s.vz*r;for(let[f,d,p,g]of[["x","vx",mt.left+.038,mt.right-.038],["z","vz",mt.front+.038,mt.back-.038]])s[f]<p&&(s[f]=p,s[d]<0&&(s[d]*=-.72)),s[f]>g&&(s[f]=g,s[d]>0&&(s[d]*=-.72));for(let f of[...e.crates,...e.walls||[]])fp(s,f);if(s.distance=(s.distance||0)+Math.hypot(s.x-a,s.z-l),s.y=qn(s.x,s.z,e).height+.038,Math.hypot(s.vx,s.vz)<=1.15&&dp(e.cup.x,e.cup.z,a,l,s.x,s.z)<.115-.038*.6){s.sunk=!0,s.x=e.cup.x,s.z=e.cup.z,s.vx=s.vz=0;break}Math.hypot(s.vx,s.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(s.vx=s.vz=0)}}var Nr=s=>{let e=Math.hypot(s.x,s.y,s.z);return e>1e-5?{x:s.x/e,y:s.y/e,z:s.z/e}:null},Ra=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),Fr=(s,e)=>s.x*e.x+s.y*e.y+s.z*e.z,tc=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x});function ic(s,e,t,n,i=null){if(n<=0||n>.1)return null;let r=(e.x-s.x)/n,o=(e.y-s.y)/n,a=(e.z-s.z)/n;if(Math.hypot(r,o,a)>8||Fr(s.forward,e.forward)<.4)return null;let l=i||{x:r,y:o,z:a};if(Math.hypot(l.x,l.y,l.z)>8)return null;let c=Math.hypot(e.x-s.x,e.y-s.y,e.z-s.z),u=Math.hypot(e.forward.x-s.forward.x,e.forward.y-s.forward.y,e.forward.z-s.forward.z),h=Math.max(1,Math.ceil((c+u*.12)/.008));for(let f=0;f<=h;f++){let d=f/h,p=Ra(s,e,d),g=Nr(Ra(s.forward,e.forward,d)),M=Nr(Ra(s.side,e.side,d));if(!g||!M)continue;let _=Nr(tc(M,g)),C=_&&Nr(tc(g,_));if(!C)continue;let v={x:t.x-p.x,y:t.y-p.y,z:t.z-p.z},m=Fr(v,C),x=Fr(v,_),I=Fr(v,g);if(Math.hypot(Math.max(0,Math.abs(m)-.104),Math.max(0,Math.abs(x)-.027),Math.max(0,Math.abs(I)-.058))>.038+.01)continue;let T=I>=0?1:-1,E={x:g.x*T,z:g.z*T},P=Math.hypot(E.x,E.z);if(P<.65)continue;E.x/=P,E.z/=P;let A=l.x*E.x+l.z*E.z;if(A<.07)continue;let R=Math.min(3.6,A*.92);return{vx:E.x*R,vz:E.z*R}}return null}var pp=new be().setFromAxisAngle(new y(1,0,0),-Math.PI/2);function sc(s){let e=s.rightGripController,t=e&&e!==s.controller?e:s.controller;if(!t||t.visible===!1)return null;let n=t.getWorldPosition(new y),i=t.getWorldQuaternion(new be);return e&&e!==s.controller&&i.multiply(pp),{position:n,quaternion:i,down:new y(0,-1,0).applyQuaternion(i)}}function rc(s){let e=new pe;e.name="Controller putter",s.add(e);let t=new Se({color:12964307,metalness:.72,roughness:.23}),n=new Se({color:1518388,roughness:.9}),i=(M,_,C=e)=>{let v=new me(M,_);return C.add(v),v},r=i(new ze(.008,.009,1,10),t),o=i(new ze(.017,.02,.17,14),n);o.position.y=-.025;for(let M=0;M<5;M++){let _=i(new At(.018,.0011,4,12),new Se({color:5005926,roughness:.8}),o);_.rotation.x=Math.PI/2,_.position.y=-.065+M*.03}let a=new pe;a.name="Mallet putter head",e.add(a);let l=new ut;l.moveTo(-.083,-.05),l.lineTo(.083,-.05),l.quadraticCurveTo(.099,-.05,.099,-.03),l.lineTo(.099,.035),l.quadraticCurveTo(.099,.053,.077,.053),l.lineTo(-.077,.053),l.quadraticCurveTo(-.099,.053,-.099,.035),l.lineTo(-.099,-.03),l.quadraticCurveTo(-.099,-.05,-.083,-.05);let c=i(new nn(l,{depth:.041,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:6}),t,a);c.rotation.x=Math.PI/2,c.position.y=.0205;let u=i(new Me(.18,.032,.004),new Se({color:3432035,roughness:.65}),a);u.position.z=-.055,i(new Me(.085,.003,.073),n,a).position.set(0,.026,.006);for(let M of[-.021,.021])i(new Me(.005,.002,.068),new ve({color:16248017}),a).position.set(M,.028,.004);i(new ze(.012,.014,.046,10),t,a).position.set(-.055,.026,.014);let d=.86;e.visible=!1;function p(M){d=Ve.clamp(M,.3,1.6),a.position.set(0,-d,0);let _=new y(-.055,-d+.044,.014);r.position.copy(_).multiplyScalar(.5),r.scale.y=_.length(),r.quaternion.setFromUnitVectors(new y(0,1,0),_.clone().normalize())}p(d);function g(M){e.position.copy(M.position),e.quaternion.copy(M.quaternion),e.updateMatrixWorld(!0);let _=a.getWorldPosition(new y),C=a.getWorldQuaternion(new be);return{x:_.x,y:_.y,z:_.z,forward:new y(0,0,-1).applyQuaternion(C),side:new y(1,0,0).applyQuaternion(C),up:new y(0,1,0).applyQuaternion(C)}}return{root:e,head:a,face:u,size:p,update:g,get length(){return d}}}var wn;function mp(){if(!wn){let s=document.createElement("canvas");s.width=256,s.height=512;let e=s.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,r,1,2)}wn=new Ie(s),wn.colorSpace=Ae,wn.wrapS=wn.wrapT=Wt,wn.repeat.set(1/(mt.right-mt.left),1/(mt.back-mt.front)),wn.offset.set(.5,1.02),wn.anisotropy=4}return new Se({map:wn,roughness:.95})}function oc(s,e,t,n){let i=new pe;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let r=new pe;r.name="Six-hole warehouse course",i.add(r);let o=V=>new Se({color:V,roughness:.65}),a=(V,se,ue,te,fe,Pe=r)=>{let ge=new me(V,se);return ge.position.set(ue,te,fe),Pe.add(ge),ge},l=a(new Xe(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=sn(.16,.16);i.add(c);let u=rc(i),h=u.root,f=u.head,d=new ve({color:16766588,transparent:!0,opacity:.78,depthWrite:!1,side:tt}),p=a(new bn(.13,.142,40),d,0,0,0,i);p.name="Putter contact guide",p.rotation.x=-Math.PI/2,p.visible=!1;let g=new wt(new Oe().setFromPoints([new y,new y]),new Tt({color:8645568,transparent:!0,opacity:.7,depthWrite:!1}));g.name="Putter face direction",g.visible=!1,i.add(g);let M=document.createElement("canvas");M.width=1024,M.height=640;let _=M.getContext("2d"),C=new Ie(M);C.colorSpace=Ae;let v=a(new Le(2.2,1.375),new ve({map:C}),0,0,0,i);v.name="Mini-golf scorecard";let m=null,x=!1,I=0,S=0,T=[],E=null,P=!1,A=!1,R=null,z=!1,F=!1,U=!1,L=0,X="Hold trigger and brush the putter through the ball.",b=null,H=!0,N=[],D=0,k=new be,W=()=>T.reduce((V,se)=>V+se,0),Y=vs.reduce((V,se)=>V+se.par,0),w=()=>vs[I];try{let V=localStorage.getItem("tfj-mini-golf-best-v1"),se=Number(V);V!==null&&Number.isFinite(se)&&se>=6&&(E=se)}catch{}function O(){vt(_,1024,640),re(_,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,j.mint,"700"),re(_,U?"COURSE COMPLETE":`${I+1} / 6  \xB7  ${w().name.toUpperCase()}`,32,117,42,j.ink,"700",954),re(_,U?`${W()} strokes  \xB7  Par ${Y}`:`${S} strokes  \xB7  Par ${w().par}`,32,190,43,j.gold,"700");for(let V=0;V<6;V++){let se=32+V*161,ue=V===I;Ke(_,se,227,151,177,{top:ue?"#26594a":"#183d43",bottom:"#0d2934",stroke:ue?j.gold:"#527779"}),re(_,`HOLE ${V+1}`,se+13,260,24,ue?j.gold:j.muted),re(_,T[V]===void 0?"\u2014":String(T[V]),se+18,334,58,j.ink,"700"),re(_,`PAR ${vs[V].par}`,se+13,382,22,j.muted)}re(_,`TOTAL ${W()+(F?0:S)}  \xB7  BEST ${E??"\u2014"}`,32,459,32,j.mint,"700"),re(_,X,32,513,26,j.ink,"600",954),re(_,U?"A  PLAY AGAIN":F?"A  NEXT HOLE":"A  MOVE & FIT CLUB",32,578,27,j.gold,"700"),re(_,"Y  PAUSE / MENU",684,578,26,j.muted),C.needsUpdate=!0}function q(){for(let V of[3,2,1.5,4,5,6])for(let se of[-30,-29,-28,-27]){let ue=!0;for(let te=-1.1;te<=1.1;te+=.275)for(let fe=0;fe<=7.8;fe+=.25)(s.blocked(V+te,se+fe,0)||Math.abs(s.groundAt(V+te,se+fe,.1))>.1)&&(ue=!1);if(ue)return new y(V,0,se)}return null}function K(){let V=Bi();return V.roughness=.78,V}function Z(V){let se=a(new Me(V.w,.25,V.d),K(),V.x,.155,V.z);se.name="Pallet obstacle";for(let ue=0;ue<4;ue++)a(new Me(V.w/4-.018,.026,V.d+.01),K(),V.x+(ue-1.5)*V.w/4,.293,V.z);for(let ue of[-1,1])a(new Me(.025,.18,V.d+.018),o("#8d724d"),V.x+ue*(V.w/2-.018),.165,V.z)}function B(V){let te=[],fe=[],Pe=[];for(let Ee=0;Ee<=20;Ee++)for(let ce=0;ce<=12;ce++){let Ye=V.x-V.w/2+V.w*ce/12,Ze=V.z-V.d/2+V.d*Ee/20;te.push(Ye,qn(Ye,Ze,w()).height+.002,Ze),fe.push(Ye,-Ze)}for(let Ee=0;Ee<20;Ee++)for(let ce=0;ce<12;ce++){let Ye=Ee*13+ce,Ze=Ye+1,ft=Ye+12+1,st=ft+1;Pe.push(Ye,ft,Ze,Ze,ft,st)}let ge=new Oe;ge.setAttribute("position",new Re(te,3)),ge.setAttribute("uv",new Re(fe,2)),ge.setIndex(Pe),ge.computeVertexNormals();let De=K();De.side=tt;let Ne=new me(ge,De);Ne.name="Loading ramp",r.add(Ne)}function ne(){for(let ce of[...r.children])ce.traverse(Ye=>{Ye.geometry?.dispose(),Ye.material?.dispose()}),r.remove(ce);r.position.copy(m);let V=w(),se=new ut;se.moveTo(mt.left,-mt.front),se.lineTo(mt.right,-mt.front),se.lineTo(mt.right,-mt.back),se.lineTo(mt.left,-mt.back),se.closePath();let ue=new hi;ue.absarc(V.cup.x,-V.cup.z,.115,0,Math.PI*2,!1),se.holes.push(ue),a(new Me(2.2,.027,7),o("#173848"),0,.016,3.51);let te=a(new Ot(se,40),mp(),0,.033,0);te.rotation.x=-Math.PI/2,te.name="Putting green";for(let ce of[-1.065,1.065])a(new Me(.07,.14,7),o("#203c4b"),ce,.099,3.51),a(new Me(.045,.006,7),new Se({color:15320952,emissive:11770199,emissiveIntensity:.25}),ce,.172,3.51);for(let ce of[.045,6.985])a(new Me(2.2,.14,.07),o("#203c4b"),0,.099,ce);let fe=a(new ui(.115,40),new ve({color:398620}),V.cup.x,.034,V.cup.z);fe.rotation.x=-Math.PI/2;let Pe=a(new bn(.115,.115+.015,40),new ve({color:16768133,side:tt}),V.cup.x,.035,V.cup.z);Pe.rotation.x=-Math.PI/2,a(new ze(.009,.009,.68,8),o("#e2e7d7"),V.cup.x,.37,V.cup.z);let ge=new Oe;ge.setAttribute("position",new Re([0,0,0,.23,-.035,0,0,-.14,0],3)),ge.computeVertexNormals();let De=a(ge,new ve({color:16176260,side:tt}),V.cup.x,.7,V.cup.z);De.name="Hole flag";let Ne=a(new bn(.105,.123,32),new ve({color:16049069,side:tt}),V.tee.x,.035,V.tee.z);if(Ne.rotation.x=-Math.PI/2,V.crates.forEach(Z),V.ramps.forEach(B),V.pipe){let ce=new ut;for(let Ze=0;Ze<=32;Ze++){let ft=Math.PI-Ze*Math.PI/32,st=Math.cos(ft)*.43,Vi=Math.sin(ft)*.43;Ze?ce.lineTo(st,Vi):ce.moveTo(st,Vi)}for(let Ze=0;Ze<=32;Ze++){let ft=Ze*Math.PI/32;ce.lineTo(Math.cos(ft)*.34,Math.sin(ft)*.34)}ce.closePath();let Ye=a(new nn(ce,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);Ye.name="Warehouse pipe tunnel"}v.position.copy(m).add(new y(0,2.42,.3)),a(new Me(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let ce of[-1.09,1.09])a(new Me(.035,3.55,.035),o("#254252"),ce,1.78,.26);let Ee=It("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",j.mint,2.05);Ee.position.set(0,3.5,.3),r.add(Ee)}function J(){return b&&!b.sunk&&Math.hypot(b.vx,b.vz)>.04}function ie(V,se){return!s.blocked(m.x+V,m.z+se,0)&&Math.abs(s.groundAt(m.x+V,m.z+se,.1))<.1&&![...w().crates,...w().walls||[]].some(ue=>Math.abs(V-ue.x)<ue.w/2+.2&&Math.abs(se-ue.z)<ue.d/2+.2)}function G(){if(!b||J()||F)return!1;let V=[[-.28,.78],[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[se,ue]of V){let te=b.x+se,fe=b.z+ue;if(ie(te,fe)&&s.xrTeleport(m.x+te,0,m.z+fe))return s.xrFace?.(0),oe(),H=!0,!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function ee(){S=0,F=U=!1,L=0,P=A=!1,R=null,N=[],H=!0;let V=w();b={x:V.tee.x,z:V.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,ne(),de(),X="Hold your hand comfortably. A moves and fits your club.",G(),O()}function Q(){let V=q();return!V||!s.xrTeleport(V.x,0,V.z+7.03)?!1:(m=V,I=0,T=[],x=i.visible=!0,z=!1,k.identity(),ee(),t("Mini-golf! Hold your controller comfortably and look down the green. A moves and fits the club. Hold trigger to putt."),!0)}function oe(){P=A=!1,R=null,N=[],h.visible=p.visible=g.visible=!1}function le(){x=i.visible=!1,oe()}function ye(V){if(F)return;F=!0,oe(),T.push(S),L=V?.8:0;let se=w(),ue=V?S===1?"Hole in one!":S<se.par?"Under par!":S===se.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(U=I===vs.length-1,U){let te=W(),fe=te<=Y?"Gold":te<=Y+6?"Silver":"Bronze";E=E===null?te:Math.min(E,te);try{localStorage.setItem("tfj-mini-golf-best-v1",String(E))}catch{}X=`${fe} medal! ${te} strokes across six holes.`,t(X)}else X=`${ue} ${S} strokes. A for hole ${I+2}.`,t(X);n(V?.7:.2),O()}function de(){l.position.set(m.x+b.x,m.y+b.y,m.z+b.z),c.position.set(m.x+b.x,m.y+qn(b.x,b.z,w()).height+.003,m.z+b.z)}function we(V){let se=sc(V);if(!se)return oe(),null;if(H){let te=V.forward.clone();te.y=0,te.lengthSq()<.01&&te.set(0,0,-1),te.normalize();let fe=new be().setFromAxisAngle(new y(0,1,0),Math.atan2(-te.x,-te.z)),Pe=qn(se.position.x-m.x,se.position.z-m.z,w()).height,ge=se.position.y-m.y-Pe-.028;if(ge<.3||ge>1.6)return oe(),null;k.copy(se.quaternion).invert().multiply(fe),u.size(ge),H=!1,R=null,N=[],X="Club fitted. Mint guide = level face. Hold trigger to putt.",O()}se.quaternion.multiply(k);let ue=u.update(se);return ue.x-=m.x,ue.y-=m.y,ue.z-=m.z,h.visible=!F,ue}function _e(V){if(p.visible=!!V&&!J()&&!F,g.visible=!1,!p.visible)return;p.position.set(m.x+b.x,m.y+qn(b.x,b.z,w()).height+.004,m.z+b.z);let se=Math.hypot(V.x-b.x,V.z-b.z)<.7,ue=Math.hypot(V.forward.x,V.forward.z),te=Math.abs(V.y-b.y)<.07&&Math.abs(V.up.y)>.8&&ue>.8;if(d.color.set(se&&te?8645568:16766588),u.face.material.color.set(se&&te?8636851:3432035),!se||!te)return;g.visible=!0;let fe=V.forward.x/ue,Pe=V.forward.z/ue,ge=g.geometry.attributes.position;for(let De=0;De<2;De++){let Ne=De?.52:.07,Ee=V.x+fe*Ne,ce=V.z+Pe*Ne;ge.setXYZ(De,m.x+Ee,m.y+qn(Ee,ce,w()).height+.005,m.z+ce)}ge.needsUpdate=!0,g.geometry.computeBoundingSphere()}function $(V,se){if(!x)return;let ue=Math.max(0,Math.min(.1,V.dt)),te=!!V.right?.gamepad?.buttons[0]?.pressed,fe=!!V.right?.gamepad?.buttons[4]?.pressed,Pe=fe&&!z;if(z=fe,D+=ue,se){oe();return}if(Pe){if(F){U?(I=0,T=[]):I++,ee();return}else if(!J()){G();return}}te?P=!F:(P=!1,A=!0,R=null,N=[]);let ge=we(V);if(_e(ge),te&&A&&!F&&!J()&&ge&&R){for(N.push({time:D,p:ge});N.length>2&&D-N[1].time>.045;)N.shift();let De=N[0],Ne=D-De.time,Ee=Ne>0?{x:(ge.x-De.p.x)/Ne,y:(ge.y-De.p.y)/Ne,z:(ge.z-De.p.z)/Ne}:null,ce=ic(R,ge,b,ue,Ee);ce&&(b.vx=ce.vx,b.vz=ce.vz,S++,A=!1,n(.3),X=`Putt ${S} \xB7 wait for the ball to stop.`,O())}if(R=te&&ge?ge:null,te&&ge&&!N.length&&N.push({time:D,p:ge}),!F){let De=b.x,Ne=b.z;nc(b,w(),ue);let Ee=b.x-De,ce=b.z-Ne,Ye=Math.hypot(Ee,ce);Ye&&l.rotateOnWorldAxis(new y(ce,0,-Ee).normalize(),Ye/.038),de(),b.sunk?ye(!0):!J()&&S>=8?ye(!1):!J()&&X.startsWith("Putt")&&(X="Ball stopped. A moves beside it and refits your club.",O())}L>0&&(L=Math.max(0,L-ue),l.position.y=m.y+.033+.038-(.8-L)*.2,l.scale.setScalar(Math.max(.12,L/.8)),c.visible=!1,L||(l.visible=!1))}return{root:i,course:r,putter:h,head:f,board:v,ball:l,ballGuide:p,aimLine:g,start:Q,stop:le,cancel:oe,tick:$,moveBesideBall:G,get clubLength(){return u.length},get active(){return x},get origin(){return m},get held(){return P},get state(){return b},get hole(){return I},get strokes(){return S},get scores(){return T},get total(){return W()},get holeReady(){return F},get complete(){return U},get best(){return E},get layout(){return w()}}}function Oi(s,e=.18){return Math.abs(s)<=e?0:Math.sign(s)*(Math.abs(s)-e)/(1-e)}function Ms(s){let e=s?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function ac(s,e,t,n){Math.abs(s)<.25&&(n=!1);let i=0;return e==="smooth"?i=-Oi(s)*Math.PI/3*t:Math.abs(s)>.65&&!n&&(i=-Math.sign(s)*Math.PI/6,n=!0),{angle:i,latched:n}}function Pa(s,e,t){return{x:s*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-s*Math.sin(t)}}var Mt={bounds:{minX:-2.05,maxX:2.05,minZ:-3.3,maxZ:3.3},obstacles:[{x:0,z:0,halfX:.68,halfZ:1.75}],start:{x:-1.37,z:1.62,yaw:0},checkpoints:[{x:-1.37,z:1.95,nx:0,nz:-1,halfWidth:.66},{x:-1.37,z:-1.35,nx:0,nz:-1,halfWidth:.66},{x:0,z:-2.52,nx:1,nz:0,halfWidth:.77},{x:1.37,z:-1.35,nx:0,nz:1,halfWidth:.66},{x:1.37,z:1.35,nx:0,nz:1,halfWidth:.66},{x:0,z:2.52,nx:-1,nz:0,halfWidth:.77}]},Ia=1/240,gp=.29,xp=.49,Ss=(s,e,t)=>Math.max(e,Math.min(t,s)),La=(s,e,t)=>Number.isFinite(s)?Ss(s,e,t):0,yp=s=>Math.atan2(Math.sin(s),Math.cos(s));function Da(){return{...Mt.start,speed:0,wheelAngle:0,completedLaps:0,nextCheckpoint:1,lastCheckpoint:0,lapTime:0,elapsed:0,laps:[],finished:!1,collisions:0,rescues:0,distance:0,justLap:null,justFinished:!1,checkpointPassed:null,justCollision:!1,_accumulator:0,_contactCooldown:0}}function bs(s,e,t){let n=-Math.sin(s.yaw),i=-Math.cos(s.yaw),r=s.speed*(n*e+i*t);r>=-.015||(s.speed=Ss(s.speed-1.25*r*(n*e+i*t),-1.1,2.8),s._contactCooldown<=0&&(s.collisions++,s.justCollision=!0,s._contactCooldown=.18))}function _p(s){let e=Mt.bounds,t=.28;s.x<e.minX+t&&(s.x=e.minX+t,bs(s,1,0)),s.x>e.maxX-t&&(s.x=e.maxX-t,bs(s,-1,0)),s.z<e.minZ+t&&(s.z=e.minZ+t,bs(s,0,1)),s.z>e.maxZ-t&&(s.z=e.maxZ-t,bs(s,0,-1));for(let n of Mt.obstacles){let i=Ss(s.x,n.x-n.halfX,n.x+n.halfX),r=Ss(s.z,n.z-n.halfZ,n.z+n.halfZ),o=s.x-i,a=s.z-r,l=Math.hypot(o,a);if(!(l>=t)){if(l<1e-9){let c=[[s.x-n.x+n.halfX,-1,0],[n.x+n.halfX-s.x,1,0],[s.z-n.z+n.halfZ,0,-1],[n.z+n.halfZ-s.z,0,1]].sort((d,p)=>d[0]-p[0]),[u,h,f]=c[0];o=h,a=f,s.x+=o*(u+t+1e-5),s.z+=a*(u+t+1e-5)}else o/=l,a/=l,s.x+=o*(t-l+1e-5),s.z+=a*(t-l+1e-5);bs(s,o,a)}}}function vp(s,e,t){let n=Mt.checkpoints[s.nextCheckpoint],i=(e-n.x)*n.nx+(t-n.z)*n.nz,r=(s.x-n.x)*n.nx+(s.z-n.z)*n.nz;if(i>0||r<=0||r-i<1e-9)return null;let o=-i/(r-i),a=e+(s.x-e)*o,l=t+(s.z-t)*o;return Math.abs((a-n.x)*-n.nz+(l-n.z)*n.nx)>n.halfWidth?null:{fraction:o,x:a,z:l}}function Mp(s,e,t){s._contactCooldown=Math.max(0,s._contactCooldown-t),s.wheelAngle+=(-e.steer*xp-s.wheelAngle)*(1-Math.exp(-12*t));let n=s.speed,i=.32+.15*Math.abs(s.speed);e.brake>.01?s.speed>.025?s.speed=Math.max(0,s.speed-(5.8*e.brake+i)*t):s.speed=Math.min(0,Math.max(-1.1,s.speed-(2.4*e.brake-i)*t)):e.throttle>.01?s.speed<0?s.speed=Math.min(0,s.speed+(3.6*e.throttle+i)*t):s.speed=Math.max(0,Math.min(2.8,s.speed+(3.6*e.throttle-i)*t)):s.speed=Math.sign(s.speed)*Math.max(0,Math.abs(s.speed)-i*t),s.speed=Ss(s.speed,-1.1,2.8);let r=(n+s.speed)/2,o=r*Math.tan(s.wheelAngle)/gp,a=s.yaw+o*t/2,l=s.x,c=s.z;s.x-=Math.sin(a)*r*t,s.z-=Math.cos(a)*r*t,s.yaw=yp(s.yaw+o*t),_p(s),s.distance+=Math.hypot(s.x-l,s.z-c);let u=vp(s,l,c);if(u){let h=s.nextCheckpoint;if(s.checkpointPassed=h,s.lastCheckpoint=h,s.nextCheckpoint=(h+1)%Mt.checkpoints.length,h===0){let f=s.lapTime+t*u.fraction;if(s.laps.push(f),s.completedLaps++,s.justLap=f,s.lapTime=-t*u.fraction,s.completedLaps>=3){s.finished=!0,s.justFinished=!0,s.x=u.x,s.z=u.z,s.speed=0,s.elapsed+=t*u.fraction,s.lapTime=0;return}}}s.elapsed+=t,s.lapTime+=t}function lc(s,e={},t=0){if(s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,s.finished||!Number.isFinite(t)||t<=0)return s;let n={steer:La(e.steer,-1,1),throttle:La(e.throttle,0,1),brake:La(e.brake,0,1)};for(s._accumulator+=Math.min(.1,t);s._accumulator>=Ia-1e-12&&!s.finished;)s._accumulator=Math.max(0,s._accumulator-Ia),Mp(s,n,Ia);return s.finished&&(s._accumulator=0),s}function cc(s){if(s.finished)return!1;let e=Mt.checkpoints[s.lastCheckpoint];return s.x=e.x+e.nx*.25,s.z=e.z+e.nz*.25,s.yaw=Math.atan2(-e.nx,-e.nz),s.speed=0,s.wheelAngle=0,s.elapsed+=2,s.lapTime+=2,s.rescues++,s._accumulator=0,s._contactCooldown=0,s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,!0}function cn(s){if(!Number.isFinite(s)||s<0)return"\u2014";let e=Math.floor(s*100),t=Math.floor(e/6e3),n=e%6e3;return`${t}:${String(Math.floor(n/100)).padStart(2,"0")}.${String(n%100).padStart(2,"0")}`}var ot=.025,Lt=(s,e=.6,t=0)=>new Se({color:s,roughness:e,metalness:t}),uc=(s,e,t,n=10)=>s+(e-s)*(1-Math.exp(-Math.max(0,t)*n));function qt(s,e,t,n=0,i=0,r=0){let o=new me(e,t);return o.position.set(n,i,r),s.add(o),o}function nt(s,e,t,n,i,r,o,a){return qt(s,new Me(t,n,i),e,r,o,a)}function Ts(s,e,t,n){let i=new pt(new Me(1,1,1),e,t.length),r=new We;i.name=n;for(let o=0;o<t.length;o++){let[a,l,c,u,h,f,d=0]=t[o];r.position.set(u,h,f),r.scale.set(a,l,c),r.rotation.set(d,0,0),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}return i.instanceMatrix.needsUpdate=!0,i.computeBoundingSphere(),s.add(i),i}function Yn(s,e,t,n,i=.005){let r=new y(...t),o=new y(...n),a=qt(s,new ze(i,i,r.distanceTo(o),6),e);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new y(0,1,0),o.sub(r).normalize()),a}function Vr(s,e,t,n,i,r=ot+.001){let o=qt(s,e,t,n,r,i);return o.rotation.x=-Math.PI/2,o}var kr,Zn;function bp(){if(!kr){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d");e.fillStyle="#f8e6aa",e.beginPath(),e.arc(64,64,59,0,Math.PI*2),e.fill(),e.strokeStyle="#16364a",e.lineWidth=7,e.stroke(),e.fillStyle="#133348",e.font="bold 94px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("7",64,71),kr=new Ie(s),kr.colorSpace=Ae}return new ve({map:kr,transparent:!0,depthWrite:!1})}function Sp(){if(!Zn){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#334b5b",e.fillRect(0,0,256,256);let t=47;for(let n=0;n<7e3;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%256;e.fillStyle=n%2?"rgba(175,204,211,.065)":"rgba(10,26,42,.15)",e.fillRect(i,r,1,1)}Zn=new Ie(s),Zn.colorSpace=Ae,Zn.wrapS=Zn.wrapT=Wt,Zn.repeat.set(4,6),Zn.anisotropy=2}return new Se({map:Zn,roughness:.9})}function hc(s){let e=new pe;e.name="TF Jones seven \xB7 RC rally buggy",s.add(e);let t=new pe;t.name="Sprung rally body",e.add(t);let n=Lt("#217db6",.32,.16),i=Lt("#0f2d3d",.52),r=Lt("#0c1720",.85),o=Lt("#e4edf2",.3,.55),a=Lt("#ffd66b",.38,.1),l=Lt("#244e68",.18,.55),c=document.querySelector?.(".brand img"),u=[];function h(U,L=.5,X=""){let b=document.createElement("canvas");b.width=1024,b.height=U;let H=new Ie(b);H.colorSpace=Ae,H.anisotropy=2;function N(){let D=b.getContext("2d");D.clearRect(0,0,1024,U),D.fillStyle="#0f2d3d",D.fillRect(0,0,1024,U),U>=224&&(D.fillStyle="#ffd66b",D.fillRect(24,16,976,9),D.fillRect(24,U-25,976,9));let k=U*L-85;if(c?.naturalWidth>0&&c?.naturalHeight>0){let W=document.createElement("canvas");W.width=1024,W.height=192;let Y=W.getContext("2d");Y.drawImage(c,0,0,c.naturalWidth,c.naturalHeight*.53,62,11,900,171),Y.globalCompositeOperation="source-in",Y.fillStyle="#fff",Y.fillRect(0,0,1024,192),Y.globalCompositeOperation="source-over",D.drawImage(W,0,k-11)}else D.fillStyle="#fff",D.font="italic 900 162px Arial",D.textAlign="center",D.textBaseline="middle",D.fillText("TFJONES",512,k+85,900);X&&(D.fillStyle="#ffd66b",D.font="bold 60px Arial",D.textAlign="center",D.textBaseline="middle",D.fillText(X,512,U*.84,900)),H.needsUpdate=!0}return u.push(N),N(),new Se({map:H,roughness:.4,metalness:.05})}function f(U,L,X,b,H,N,D){let k=nt(t,U,L,X,b,H,N,D),W=k.geometry,Y=[...W.groups],w=[...new Set(U)],O=[];W.clearGroups();for(let q=0;q<w.length;q++){let K=O.length;for(let Z of Y)if(U[Z.materialIndex]===w[q])for(let B=Z.start;B<Z.start+Z.count;B++)O.push(W.index.array[B]);W.addGroup(K,O.length-K,q)}return W.setIndex(O),k.material=w,k}let d=h(512,.44,"RACING 07"),p=h(720,.73),g=h(192),M=h(224);c&&!c.complete&&c.addEventListener?.("load",()=>u.forEach(U=>U()),{once:!0});let _=new Se({color:"#fff1bb",emissive:"#ffe3a0",emissiveIntensity:.75,roughness:.28}),C=new Se({color:"#ff4156",emissive:"#e62347",emissiveIntensity:.55,roughness:.3}),v=sn(.49,.59);v.position.y=.002,e.add(v),nt(t,i,.252,.029,.382,0,.111,0).name="Buggy chassis";let m=new ut;for(let[U,[L,X]]of[[-.081,-.204],[.081,-.204],[.123,-.122],[.12,.161],[.091,.19],[-.091,.19],[-.12,.161],[-.123,-.122]].entries())U===0?m.moveTo(L,-X):m.lineTo(L,-X);m.closePath();let x=qt(t,new nn(m,{depth:.054,bevelEnabled:!0,bevelSize:.009,bevelThickness:.006,bevelSegments:2,steps:1}),n,0,.122,0);x.rotation.x=-Math.PI/2,x.name="Blue rally body shell",f([i,i,p,i,i,i],.17,.017,.12,0,.185,-.128).name="TF Jones branded bonnet";for(let U of[-.071,.071])nt(t,a,.015,.002,.12,U,.194,-.13);nt(t,i,.284,.038,.027,0,.108,-.211).name="Front crash bumper",nt(t,i,.26,.03,.026,0,.108,.211);for(let U of[-1,1])f([g,g,a,a,i,i],.016,.034,.18,U*.128,.157,.033).name=U<0?"TF Jones left side panel":"TF Jones right side panel",Yn(t,o,[U*.126,.14,-.1],[U*.126,.16,.13],.006),Yn(t,i,[U*.065,.113,-.13],[U*.146,.087,-.136],.011),Yn(t,i,[U*.065,.113,.13],[U*.146,.087,.136],.011);let I=nt(t,l,.167,.085,.008,0,.226,-.037);I.rotation.x=-.34,nt(t,l,.16,.07,.006,0,.224,.077).rotation.x=.12,nt(t,i,.18,.008,.097,0,.269,.021);for(let U of[-.091,.091])Yn(t,a,[U,.177,-.054],[U,.272,-.008],.006),Yn(t,a,[U,.177,.09],[U,.272,.065],.006),Yn(t,a,[U,.272,-.008],[U,.272,.065],.006);f([n,n,d,i,n,n],.187,.01,.091,0,.279,.025).name="TF Jones racing roof";let S=Vr(t,new Le(.063,.063),bp(),0,-.166,.195);S.name="Race number seven";for(let U of[-.069,.069]){Yn(t,i,[U,.174,.146],[U,.245,.195],.008);let L=qt(t,new ze(.014,.014,.009,10),_,U,.16,-.202);L.rotation.x=Math.PI/2,nt(t,C,.033,.014,.008,U,.158,.195)}f([i,i,M,i,i,i],.29,.016,.063,0,.249,.202).name="TF Jones rear rally spoiler";for(let U of[-.14,.14])nt(t,a,.012,.03,.065,U,.257,.202);let T=Yn(t,i,[.072,.18,.094],[.085,.374,.118],.0018);T.name="RC receiver antenna",qt(t,new Xe(.005,6,4),a,.085,.375,.118);let E=[];for(let U of[-1,1])for(let L of[!0,!1]){let X=new pe;X.name=L?"Steering wheel pivot":"Rear axle",X.position.set(U*.146,.078,L?-.137:.137),e.add(X);let b=new pe;b.name=(L?"Front":"Rear")+(U<0?" left":" right")+" tire",X.add(b);let H=qt(b,new ze(.077,.077,.055,16),r);H.rotation.z=Math.PI/2;let N=[],D=[];for(let k of[-1,1]){let W=qt(b,new ze(.043,.043,.005,12),o,k*.028,0,0);W.rotation.z=Math.PI/2;let Y=qt(b,new ze(.015,.015,.007,10),a,k*.032,0,0);Y.rotation.z=Math.PI/2;for(let w=0;w<5;w++){let O=w*Math.PI*2/5;N.push([.003,.011,.028,k*.032,Math.cos(O)*.024,Math.sin(O)*.024,-O])}}for(let k=0;k<10;k++){let W=k*Math.PI*2/10;D.push([.05,.006,.019,0,Math.cos(W)*.077,Math.sin(W)*.077,W])}Ts(b,i,N,"Rim spokes"),Ts(b,r,D,"Raised tire tread"),E.push({pivot:X,wheel:b,front:L})}let P=0,A=0,R=0,z=0;function F(U,L=0){e.position.set(U.x,U.y??ot,U.z),e.rotation.y=U.yaw??0;let X=Number.isFinite(U.speed)?U.speed:0,b=Number.isFinite(U.wheelAngle)?U.wheelAngle:(U.steer||0)*.5;P=(P+X*Math.max(0,Math.min(.1,L))/.077)%(Math.PI*2);for(let N of E)N.pivot.rotation.y=N.front?b:0,N.wheel.rotation.x=-P;let H=L>.001?Ve.clamp((X-A)/L,-7,7):0;R=uc(R,Ve.clamp(-b*X*.075,-.11,.11),L),z=uc(z,H*.005,L),t.rotation.z=R,t.rotation.x=z,t.position.y=Math.abs(X)>.08?Math.sin(P*1.7)*.0015:0,A=X}return F({x:0,z:0,yaw:0,speed:0},0),{root:e,wheels:E,body:t,shadow:v,update:F}}function Tp(s,e,t,n,i,r){let o=new ut;o.moveTo(0,.16),o.lineTo(.125,-.005),o.lineTo(.05,-.005),o.lineTo(.05,-.14),o.lineTo(-.05,-.14),o.lineTo(-.05,-.005),o.lineTo(-.125,-.005),o.closePath();let a=Vr(s,new Ot(o),r,e,t);return a.rotation.z=Math.atan2(-n,-i),a.name="Clockwise racing arrow",a}function wp(s,e,t){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d");i.fillStyle="#102638",i.fillRect(0,0,128,128),i.strokeStyle="#8fe1c3",i.lineWidth=6,i.strokeRect(5,5,118,118),i.fillStyle="#f7fafc",i.font="bold 81px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(String(e+1),64,70);let r=new Ie(n);r.colorSpace=Ae;let o=Vr(s,new Le(.21,.21),new ve({map:r}),t.x-t.nx*.33,t.z-t.nz*.33);return o.rotation.z=Math.atan2(-t.nx,-t.nz),o.name="Checkpoint "+(e+1)+" number",o}function fc(s){let e=new pe;e.name="Warehouse RC racing circuit",s.add(e);let{minX:t,maxX:n,minZ:i,maxZ:r}=Mt.bounds,o=n-t,a=r-i,l=(t+n)/2,c=(i+r)/2,u=Lt("#132e40",.72),h=Lt("#29495b"),f=Lt("#f4e6bc",.6),d=Lt("#dd6574",.62),p=Lt("#f6d484",.5),g=Lt("#162a34",.9),M=new Se({color:"#8fe1c3",emissive:"#438b7e",emissiveIntensity:.26,roughness:.4});nt(e,u,o+.18,.021,a+.18,l,.0105,c).name="Raised circuit mat";let _=Vr(e,new Le(o,a),Sp(),l,c,ot);_.name="Asphalt racing surface";let C=[],v=[],m=[],x=[],I=[],S=[];for(let N of[t-.045,n+.045]){let D=nt(e,h,.09,.092,a+.18,N,ot+.046,c);D.name="RC boundary rail",C.push(D),nt(e,M,.058,.006,a+.1,N,ot+.095,c)}for(let N of[i-.045,r+.045]){let D=nt(e,h,o,.092,.09,l,ot+.046,N);D.name="RC boundary rail",C.push(D),nt(e,M,o,.006,.058,l,ot+.095,N)}for(let N of[t-.045,n+.045]){let D=Math.ceil(a/.22);for(let k=0;k<D;k++)(k%2?I:x).push([.085,.004,a/D-.003,N,ot+.097,i+(k+.5)*a/D])}for(let N of[i-.045,r+.045]){let D=Math.ceil(o/.22);for(let k=0;k<D;k++)(k%2?I:x).push([o/D-.003,.004,.085,t+(k+.5)*o/D,ot+.097,N])}let T=Bi();T.roughness=.85;for(let N of Mt.obstacles){let{x:D,z:k,halfX:W,halfZ:Y}=N,w=W*2,O=Y*2,q=new pe;q.name="Pallet shipping island",e.add(q),v.push(q),nt(q,u,w,.125,O,D,ot+.0625,k).name="Solid island barrier";for(let B of[-1,1]){let ne=Math.ceil(O/.22);for(let J=0;J<ne;J++)(J%2?I:x).push([.055,.018,O/ne-.003,D+B*(W-.0275),ot+.13,k-Y+(J+.5)*O/ne])}for(let B of[-1,1]){let ne=Math.ceil(w/.22);for(let J=0;J<ne;J++)(J%2?I:x).push([w/ne-.003,.018,.055,D-W+(J+.5)*w/ne,ot+.13,k+B*(Y-.0275)])}for(let B=0;B<7;B++)nt(q,T,(w-.16)/7-.011,.025,O-.18,D+(B-3)*(w-.16)/7,ot+.153,k);let K=Lt("#c1a274",.94),Z=Lt("#917b5e",.9);for(let[B,ne]of[-.93,0,.93].entries()){let J=.28+B%2*.13,ie=.68,G=.72,ee=ot+.18+J/2;nt(q,K,ie,J,G,D+(B===1?.1:-.09),ee,k+ne).name="Warehouse cargo crate",nt(q,Z,.037,.004,G+.004,D+(B===1?.1:-.09),ee+J/2+.002,k+ne);for(let Q of[-1,1])nt(q,Z,.007,J,.029,D+(B===1?.1:-.09)+Q*(ie/2+.004),ee,k+ne)}for(let B of[-1,1])for(let ne of[-1,1]){let J=D+B*(W-.14),ie=k+ne*(Y-.16);nt(q,g,.13,.015,.13,J,ot+.167,ie),qt(q,new tn(.054,.15,8),p,J,ot+.25,ie),qt(q,new ze(.032,.04,.022,8),f,J,ot+.245,ie)}}let E=Mt.checkpoints[0],P=Math.abs(E.nz)>.5,A=E.halfWidth*2;for(let N=0;N<2;N++)for(let D=0;D<12;D++){let k=-A/2+(D+.5)*A/12,W=(N-.5)*.085,Y=E.x+(P?k:W),w=E.z+(P?W:k);((N+D)%2?S:I).push([P?A/12-.002:.083,.001,P?.083:A/12-.002,Y,ot+.002,w])}Ts(e,f,I,"Cream curb and starting line tiles"),Ts(e,d,x,"Coral curb tiles"),Ts(e,u,S,"Chequered starting line");let R=7903914,z=9429443;Mt.checkpoints.forEach((N,D)=>{let k=new pe;k.name="RC checkpoint "+(D+1),e.add(k);let W=new ve({color:R,transparent:!0,opacity:.58,depthWrite:!1}),Y=Tp(k,N.x+N.nx*.35,N.z+N.nz*.35,N.nx,N.nz,W),w=-N.nz,O=N.nx,q=[new y(N.x-w*N.halfWidth,ot+.004,N.z-O*N.halfWidth),new y(N.x+w*N.halfWidth,ot+.004,N.z+O*N.halfWidth)],K=new wt(new Oe().setFromPoints(q),new gs({color:R,transparent:!0,opacity:.6,dashSize:.08,gapSize:.04}));K.computeLineDistances(),k.add(K),K.name="Checkpoint crossing",K.visible=D!==0,wp(k,D,N),m.push({root:k,arrow:Y,line:K,material:W})});let F=document.createElement("canvas");F.width=768,F.height=192;let U=F.getContext("2d");U.fillStyle="#102b40",U.fillRect(0,0,768,192),U.fillStyle="#8fe1c3",U.fillRect(0,0,768,9),U.fillStyle="#f7fafc",U.font="bold 73px Arial",U.textAlign="center",U.fillText("TFJ RC RACING",384,116),U.fillStyle="#f6d484",U.font="26px Arial",U.fillText("PALLET CIRCUIT \xB7 FOLLOW THE ARROWS",384,166);let L=new Ie(F);L.colorSpace=Ae;let X=Mt.obstacles[0].z+Mt.obstacles[0].halfZ;nt(e,u,1.2,.31,.026,0,.31,X-.014);for(let N of[-.5,.5])nt(e,h,.021,.21,.021,N,.205,X-.029);let b=qt(e,new Le(1.18,.295),new ve({map:L}),0,.31,X+.002);b.name="Pallet circuit fascia";function H(N){for(let D=0;D<m.length;D++){let k=m[D],W=D===N;k.material.color.setHex(W?z:R),k.material.opacity=W?.95:.45,k.line.material.color.setHex(W?z:R),k.line.material.opacity=W?.92:.3}}return H(1),{root:e,rails:C,obstacles:v,checkpoints:m,road:_,setCheckpoint:H,surfaceY:ot}}var pc="tfj-rc-best-lap-v1",mc="tfj-rc-best-race-v1",gc=s=>Ve.clamp(Number.isFinite(s?.value)?s.value:s?.pressed?1:0,0,1);function xc(s,e,t,n){let i=new pe;i.name="Warehouse RC car racing",i.visible=!1,e.add(i);let r=fc(i),o=hc(i),a=document.createElement("canvas");a.width=1280,a.height=768;let l=a.getContext("2d"),c=new Ie(a);c.colorSpace=Ae;let u=new me(new Le(2.7,1.62),new ve({map:c}));u.name="RC race scoreboard",u.position.set(0,2.05,Mt.bounds.minZ-.2),i.add(u);let h=new me(new Me(2.77,1.69,.055),new Se({color:1058613,roughness:.6}));h.position.copy(u.position),h.position.z-=.037,i.add(h);for(let D of[-1.34,1.34]){let k=new me(new Me(.038,2.92,.038),new Se({color:4019813,metalness:.3,roughness:.5}));k.position.set(D,1.46,u.position.z-.04),i.add(k)}let f=It("TFJ RC RACING","WAREHOUSE  /  THREE-LAP TIME TRIAL","play",j.blue,2.6);f.position.set(0,3.27,u.position.z),i.add(f);let d=[];for(let D=0;D<3;D++){let k=new me(new Xe(.065,12,8),new ve({color:2307910}));k.position.set((D-1)*.21,1.13,u.position.z+.03),i.add(k),d.push(k)}let p=null,g=null,M=!1,_=Da(),C=3,v=!1,m=!1,x=!1,I=null,S=null,T=0,E="Release trigger, then get ready!",P=!1;function A(D,k){try{let W=localStorage.getItem(D),Y=W===null||!W.trim()?NaN:Number(W);return Number.isSafeInteger(Y)&&Y>=k&&Y<=36e5?Y:null}catch{return null}}I=A(pc,1e3),S=A(mc,3e3);function R(){vt(l,1280,768),re(l,"TF JONES  /  PALLET CIRCUIT",36,46,26,j.blue,"700"),re(l,_.finished?"RACE COMPLETE":"THREE-LAP TIME TRIAL",36,108,49,j.ink,"700"),Ke(l,885,29,356,135,{top:"#214b54",bottom:"#102e40",stroke:j.mint}),re(l,"BEST LAP",909,73,26,j.mint,"700"),re(l,I===null?"\u2014":cn(I/1e3),909,137,53,j.gold,"700"),re(l,C>0?`READY  ${Math.ceil(C)}`:_.finished?"FINISH!":`LAP ${_.completedLaps+1} / ${3}`,36,210,55,j.gold,"700"),re(l,cn(_.elapsed),693,215,66,j.ink,"700"),re(l,`Current lap ${cn(_.lapTime)}`,37,263,32,j.mint,"600"),re(l,`Best race ${S===null?"\u2014":cn(S/1e3)}`,692,263,30,j.muted,"500");for(let D=0;D<3;D++){let k=36+D*404,W=_.laps[D]!==void 0;Ke(l,k,296,385,156,{top:W?"#285749":"#1c3f55",bottom:"#102b3e",stroke:W?j.mint:"#496679"}),re(l,`LAP ${D+1}`,k+22,337,25,W?j.mint:j.muted,"700"),re(l,W?cn(_.laps[D]):"\u2014",k+22,410,54,j.ink,"700")}re(l,E,37,503,30,j.ink,"600",1204),re(l,"LEFT STICK  STEER",37,562,28,j.blue,"700"),re(l,"RIGHT TRIGGER  GAS",638,562,28,j.gold,"700"),re(l,"RIGHT GRIP  BRAKE / REVERSE",37,612,25,j.muted),re(l,_.finished?"A  RACE AGAIN":"A  RESCUE CAR  (+2s)",638,612,25,j.mint,"700"),re(l,"X  RETURN TO DRIVER SPOT",37,690,25,j.muted),re(l,"Y  PAUSE / MENU   \xB7   B  LEAVE",638,690,25,j.muted),c.needsUpdate=!0,d.forEach((D,k)=>D.material.color.setHex(_.finished?9429443:C>2?k===0?15755368:2307910:C>1?k<=1?16176260:2307910:C>0?16176260:9429443))}function z(){let D=Mt.bounds;for(let k of[3,3.5,4,2.5,4.5])for(let W of[-26.5,-26,-27,-25.5]){let Y=!0;for(let w=D.minX-.11;w<=D.maxX+.11;w+=.3)for(let O=D.minZ-.3;O<=D.maxZ+.12;O+=.3)(s.blocked(k+w,W+O,0)||Math.abs(s.groundAt(k+w,W+O,.1))>.1)&&(Y=!1);if(Y)for(let w of[0,-.75,.75,-1.5,1.5]){let O=new y(k+w,0,W+D.maxZ+1.05),q=!0;for(let K of[-.25,0,.25])for(let Z of[-.25,0,.25])(s.blocked(O.x+K,O.z+Z,0)||Math.abs(s.groundAt(O.x+K,O.z+Z,.1))>.1)&&(q=!1);if(q)return{origin:new y(k,0,W),view:O}}}return null}function F(){_=Da(),C=3,v=!1,E="Release trigger. Follow the mint arrows clockwise.",T=0,P=!1,o.update(_,0),r.setCheckpoint(_.nextCheckpoint),R()}function U(){let D=z();return!D||!s.xrTeleport(D.view.x,0,D.view.z)?!1:(p=D.origin,g=D.view,i.position.copy(p),s.xrFace?.(0),M=i.visible=!0,m=x=!1,F(),t("RC racing! Left stick steers, right trigger drives. Grip brakes and reverses. A rescues the car."),!0)}function L(){v=!1}function X(){M=i.visible=!1,L()}function b(){return!g||!s.xrTeleport(g.x,0,g.z)?!1:(s.xrFace?.(0),L(),!0)}function H(D){let k=Math.round(D*1e3);if(!(k<1e3||k>36e5)&&(I===null||k<I)){I=k;try{localStorage.setItem(pc,String(k))}catch{}t(`New RC lap record! ${cn(k/1e3)}`)}}function N(D,k){if(!M)return;let W=Math.max(0,Math.min(.1,D.dt||0)),Y=!!D.right?.gamepad?.buttons[4]?.pressed,w=!!D.left?.gamepad?.buttons[4]?.pressed,O=Y&&!m,q=w&&!x;if(m=Y,x=w,k){L();return}if(!D.right?.gamepad||!D.left?.gamepad){L(),P||(P=!0,E="Reconnect both controllers. Race paused.",R());return}if(P&&(P=!1,E="Controller ready. Release trigger to resume.",R()),q&&(E=b()?"Driver viewpoint restored. Release trigger to drive.":"Driver spot is blocked. Use B to leave the race.",R()),O)if(_.finished){F();return}else C<=0&&cc(_)&&(E="Car rescued at your last gate. +2 seconds.",n(.2),R());let K=gc(D.right.gamepad.buttons[0]),Z=gc(D.right.gamepad.buttons[1]);K<.1&&Z<.1&&(v=!0);let B=W;if(C>0){let ie=Math.min(C,W);if(C-=ie,B-=ie,C<=0&&(E="GO! Drive through the mint gates in order.",n(.4)),T+=W,(T>=.1||C<=0)&&(T=0,R()),C>0)return}if(_.finished)return;let ne=Oi(Ms(D.left)[0]),J=_.collisions;if(lc(_,{steer:ne,throttle:v?K:0,brake:v?Z:0},B),o.update(_,B),r.setCheckpoint(_.nextCheckpoint),_.collisions!==J&&(n(.12),E="Bump! Ease off, reverse, or use A to rescue."),_.checkpointPassed!==null&&(E=`Gate ${_.checkpointPassed+1} cleared. Follow the mint arrow.`),_.justLap!==null&&(H(_.justLap),n(.4),E=`Lap ${_.completedLaps}: ${cn(_.justLap)}`,R()),_.justFinished){let ie=Math.round(_.elapsed*1e3);if(ie>=3e3&&ie<=36e5&&(S===null||ie<S)){S=ie;try{localStorage.setItem(mc,String(ie))}catch{}}let G=Math.min(..._.laps);E=`${G<=14?"Gold":G<=20?"Silver":"Bronze"} lap medal! Race ${cn(_.elapsed)}. A to replay.`,r.setCheckpoint(null),t(`RC race complete! ${cn(_.elapsed)} \xB7 A to race again.`),n(.7),R()}T+=W,T>=.1&&(T=0,R())}return R(),{root:i,track:r,car:o,board:u,start:U,stop:X,cancel:L,tick:N,returnToView:b,get active(){return M},get origin(){return p},get view(){return g},get state(){return _},get countdown(){return C},get bestLapMs(){return I},get bestRaceMs(){return S}}}var Wr="tfj-memory-bests-v1",Gr=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>{if(!["string","number"].includes(typeof s)||typeof s=="string"&&!s.trim())return null;let n=Number(s);return Number.isSafeInteger(n)&&n>=e&&n<=t?n:null};function Hr(s){let e=s;try{typeof e=="string"&&(e=JSON.parse(e))}catch{return{}}if(!e||typeof e!="object"||Array.isArray(e))return{};let t={};for(let n=2;n<=6;n++){let i=Gr(e[n],n,1e4);i!==null&&(t[n]=i)}return t}function yc(s,e=0,t={}){let n=v=>{try{return s?.getItem(v)??null}catch{return null}},i=(v,m,x,I=0,S=!1)=>{let T=Gr(n(v),I,x),E=Gr(t[m],I,x),P=[T,E].filter(A=>A!==null);return P.length?S?Math.min(...P):Math.max(...P):null},r=(v,m,x,I)=>v===null?0:v>=I?3:v>=x?2:v>=m?1:0,o=[],a=(v,m,x,I,S,T,E,P,A)=>{let R=i(x,v,I);o.push({id:v,title:m,value:R,score:R===null?"\u2014":String(R),detail:R===null?"Play a complete round":E,medal:r(R,...S),goal:`Gold: ${S[2]} ${T}`,icon:P,accent:A})};a("bowling","WAREHOUSE BOWLING","tfj-bowling-best-10-v1",100,[10,50,80],"pins","pins / 100 \xB7 ten frames","target","#8bc8f3"),a("darts","STAFF-ROOM DARTS","tfj-vr-darts-best-v1",540,[50,150,300],"points","points \xB7 nine darts","target","#8fe1c3");let l=i("tfj-mini-golf-best-v1","golf",48,6,!0);o.push({id:"golf",title:"WAREHOUSE MINI-GOLF",value:l,score:l===null?"\u2014":String(l),detail:l===null?"Finish all six holes":"strokes \xB7 six holes \xB7 lower wins",medal:l===null?0:l<=18?3:l<=24?2:1,goal:"Gold: 18 strokes or fewer",icon:"golf",accent:"#8fe1c3"}),a("basketball","BASKETBALL","tfj-basket-best",10,[2,5,8],"baskets","baskets / 10 throws","target","#f6d484"),a("planes","PAPER PLANES","tfj-planes-best-v1",150,[10,50,100],"points","points \xB7 five flights","play","#8bc8f3");let c=i("tfj-rc-best-lap-v1","rc",36e5,1e3,!0),u=c===null?0:Math.floor(c/6e4),h=c===null?0:Math.floor(c/1e3)%60,f=c===null?0:Math.floor(c/10)%100;o.push({id:"rc",title:"RC CAR RACING",value:c,score:c===null?"\u2014":`${u}:${String(h).padStart(2,"0")}.${String(f).padStart(2,"0")}`,detail:c===null?"Complete a lap":"best lap \xB7 lower wins",medal:c===null?0:c<=14e3?3:c<=2e4?2:1,goal:"Gold: lap in 14 seconds",icon:"car",accent:"#8bc8f3"});let d=Hr(n(Wr)),p=Hr(t.memory);for(let[v,m]of Object.entries(p))d[v]=Math.min(d[v]??1/0,m);let g=Object.keys(d).map(Number).sort((v,m)=>m-v)[0]??null,M=g===null?null:d[g];o.push({id:"memory",title:"MEMORY MATCH",value:M,pairs:g,score:M===null?"\u2014":String(M),detail:M===null?"Use your collected cards":`turns \xB7 ${g}-pair deck \xB7 lower wins`,medal:M===null?0:M===g?3:M<=g+2?2:1,goal:g===null?"Practice rounds do not count":`Gold: ${g} turns \xB7 perfect match`,icon:"book",accent:"#f3b2cf"});let _=Gr(e,0,18)??0;o.push({id:"cards",title:"MOLLIE\u2019S CARD ALBUM",value:_,score:`${_} / 18`,detail:_===18?"Collection complete!":"Cards found around the yard",medal:r(_,6,12,18),goal:"Gold: collect all 18 cards",icon:"book",accent:"#f6d484"});let C=i("tfj-vr-jigglypuff-rounds-v1","hide",Number.MAX_SAFE_INTEGER)??0;return o.push({id:"hide",title:"JIGGLYPUFF SEEKER",value:C,score:String(C),detail:"complete hide-and-seek rounds",medal:r(C,1,3,5),goal:"Gold: complete five hunts",icon:"puff",accent:"#f3b2cf"}),o}var Ua=s=>["TO EARN","BRONZE","SILVER","GOLD"][s];var zi=[5465977,12025936,13359585,16176260];function Ap(s){let e=s.colliders.map(t=>new qe(new y(t.min.x,t.min.y,t.min.z),new y(t.max.x,t.max.y,t.max.z)));for(let t of s.colliders){let{min:n,max:i}=t;if(n.x<7.5||i.x>9||i.x-n.x>.3||i.z-n.z<3.9||n.y>.1||i.y<2.78)continue;let r=(n.z+i.z)/2;for(let o of[r,r-.45,r+.45]){if(o-1.86<n.z||o+1.86>i.z)continue;let a=new y(n.x-.045,0,o),l=a.clone().add(new y(-2.45,0,0)),c=!0;for(let h of[-.3,0,.3])for(let f of[-.4,0,.4])(s.blocked(l.x+h,l.z+f,0)||Math.abs(s.groundAt(l.x+h,l.z+f,.1))>.1)&&(c=!1);let u=l.clone().add(new y(0,1.68,0));for(let h of[-1.7,-.6,.6,1.7])for(let f of[.8,1.7,2.65]){let d=a.clone().add(new y(-.052,f,h)),p=d.clone().sub(u),g=p.length(),M=new et(u,p.normalize()),_=new y;e.some(C=>M.intersectBox(C,_)&&_.distanceTo(u)<g-.015)&&(c=!1)}if(c)return{mount:a,view:l,heading:-Math.PI/2}}}return null}function _c(s,e,t,n){let i=new pe;i.name="Arcade wall of fame",e.add(i);let r=Ap(s);i.visible=!!r,r&&(i.position.copy(r.mount),i.rotation.y=-Math.PI/2);let o=document.createElement("canvas");o.width=2048,o.height=1152;let a=o.getContext("2d"),l=new Ie(o);l.colorSpace=Ae,l.anisotropy=4;let c=new me(new Le(3.6,2.025),new ve({map:l}));c.name="Mollie\u2019s personal records",c.position.set(0,1.7,.052),i.add(c);let u=(T,E,P,A,R)=>{let z=new me(T,E);return z.position.set(P,A,R),i.add(z),z},h=new Se({color:1058612,roughness:.7}),f=new Se({color:9215391,metalness:.6,roughness:.35});u(new Me(3.72,2.14,.075),h,0,1.7,0);let d=new ve({color:16176260});for(let T of[.626,2.774])u(new Me(3.74,.024,.045),d,0,T,.031);for(let T of[-1.862,1.862])u(new Me(.024,2.16,.045),d,T,1.7,.031);u(new Me(3.74,.045,.24),f,0,.32,.13);let p=[];for(let T=1;T<=3;T++){let E=new pe;E.name=`${Ua(T)} trophy`,E.position.set((T-2)*1.05,.346,.14),i.add(E);let P=new Se({color:zi[0],metalness:.68,roughness:.32}),A=[new me(new Me(.24,.044,.16),h),new me(new ze(.069,.088,.052,16),P),new me(new ze(.018,.029,.072,12),P),new me(new di([new he(.025,0),new he(.06,.045),new he(.089,.12),new he(.078,.13),new he(.049,.052),new he(.014,.021)],20),P)];A[0].position.y=.022,A[1].position.y=.069,A[2].position.y=.12,A[3].position.y=.15,E.add(...A);for(let R of[-.092,.092]){let z=new me(new At(.042,.008,6,14),P);z.position.set(R,.233,0),E.add(z)}p.push({trophy:E,material:P,tier:T})}let g=[],M=null,_=0,C=0,v=0;function m(){vt(a,2048,1152),re(a,"TF JONES  /  WAREHOUSE ARCADE",54,64,27,j.blue,"700"),re(a,"WALL OF FAME",52,154,86,j.ink,"700"),re(a,"Mollie\u2019s personal bests",54,213,35,j.gold,"600");let T=g.filter(P=>P.medal).length,E=g.filter(P=>P.medal===3).length;Ke(a,1535,46,456,174,{top:"#254f54",bottom:"#142f43",stroke:j.gold,radius:20}),re(a,`${T} / ${g.length}`,1567,145,67,j.gold,"700"),re(a,`MEDALS EARNED  \xB7  ${E} GOLD`,1567,191,26,j.ink,"700"),g.forEach((P,A)=>{let R=54+A%3*650,z=253+Math.floor(A/3)*256,F=638;Ke(a,R,z,F,244,{top:"#234955",bottom:"#0d2639",stroke:P.medal?`#${zi[P.medal].toString(16).padStart(6,"0")}`:"#466374",radius:18}),Tn(a,P.icon,R+39,z+36,40,P.accent),re(a,P.title,R+77,z+43,30,j.ink,"700",F-98),re(a,P.score,R+28,z+119,76,j.gold,"700",F-56),re(a,P.detail,R+28,z+153,25,j.muted,"500",F-56);let L=`#${zi[P.medal].toString(16).padStart(6,"0")}`;Ke(a,R+27,z+167,F-54,36,{top:P.medal?"#24474d":"#162c3c",bottom:"#172f3c",stroke:L,radius:10}),re(a,Ua(P.medal),R+44,z+194,26,P.medal?L:j.muted,"700"),re(a,P.goal,R+28,z+229,25,P.accent,"500",F-56)}),re(a,"YOUR SCORES \xB7 THIS BROWSER",54,1091,30,j.blue,"700"),re(a,"Play. Beat your best. Earn your place.",1160,1091,30,j.muted,"500"),l.needsUpdate=!0,v++;for(let P of p){let A=g.some(R=>R.medal>=P.tier);P.material.color.set(A?zi[P.tier]:zi[0]),P.material.emissive.set(A?zi[P.tier]:0),P.material.emissiveIntensity=A?.09:0}}function x(){let T;try{T=globalThis.localStorage}catch{}let E=yc(T,s.mollie.found.size,t()),P=JSON.stringify(E);if(P===M)return!1;let A=M!==null&&E.some((R,z)=>R.value!==null&&(g[z].value===null||R.id==="memory"&&R.pairs>g[z].pairs||(["golf","memory","rc"].includes(R.id)?R.value<g[z].value:R.value>g[z].value)||R.medal>g[z].medal));return g=E,M=P,A&&(C=2.5),m(),!0}function I(T){_-=T,_<=0&&(_=.75,x()),C=Math.max(0,C-T),d.color.set(C>0&&Math.sin(C*7)>0?9429443:16176260)}function S(){return x(),!r||!s.xrTeleport(r.view.x,0,r.view.z)?(n("The wall approach is blocked. Walk to the Unit 9 office divider."),!1):(s.xrFace?.(r.heading),n("Welcome to the wall of fame! Your personal records update as you play."),!0)}return x(),{root:i,panel:c,cups:p,site:r,refresh:x,tick:I,visit:S,get records(){return g},get draws(){return v},get celebrating(){return C>0}}}function Ep(s,e,t,n=.48){if(s.z<=t.z||e.z>t.z)return!1;let i=(s.z-t.z)/(s.z-e.z);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.y+(e.y-s.y)*i-t.y)<n}function Cp(s,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let r=-.25-1.1/Math.max(.5,i);return n.y+=(r-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:s.clone().addScaledVector(n,t),v:n}}function vc(s,e,t,n){let i=new pe;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let r=new pe;i.add(r);let o=W=>new Se({color:W,roughness:.7,side:tt}),a=new Oe;a.setAttribute("position",new Re([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new me(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new wt(new Oe().setFromPoints([new y(0,0,-.28),new y(0,.056,.1)]),new Tt({color:7576243}));l.add(c);let u=s.colliders.map(W=>new qe(new y(W.min.x,W.min.y,W.min.z),new y(W.max.x,W.max.y,W.max.z)).expandByScalar(.06)),h=document.createElement("canvas");h.width=1024,h.height=640;let f=h.getContext("2d"),d=new Ie(h);d.colorSpace=Ae;let p=new me(new Le(1.6,1),new ve({map:d}));p.name="Paper-plane scoreboard",i.add(p);let g=!1,M=!1,_=null,C=null,v=[],m=[],x=0,I=!1,S=!1,T=!1,E=0,P=0,A=0,R=0,z="Five planes. Aim through the hoops!";try{A=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function F(){vt(f,1024,640),re(f,"PAPER-PLANE CHALLENGE",35,68,44,j.gold),re(f,`${P} points`,35,190,72),re(f,`BEST ${A}`,660,180,35,j.mint),re(f,`${E} / 5 planes`,35,280,44),re(f,`Longest glide: ${R.toFixed(1)} m`,35,349,32,j.mint),re(f,z,35,428,29,j.ink,"600",950),re(f,E===5&&!_?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),re(f,"10 points per hoop \xB7 Y: pause/menu",35,590,27,j.muted),d.needsUpdate=!0}function U(){for(let W of[3,2,1.5,4,5])for(let Y of[-30,-29,-28]){let w=!0;for(let O=-1;O<=1;O+=.5)for(let q=0;q<=7.8;q+=.4)(s.blocked(W+O,Y+q,0)||Math.abs(s.groundAt(W+O,Y+q,.1))>.1)&&(w=!1);if(w)return new y(W,0,Y)}return null}function L(){for(let w of[...r.children])w.traverse(O=>{O.geometry?.dispose(),O.material?.dispose()}),r.remove(w);v=[];for(let w=0;w<3;w++){let O=C.clone().add(new y(0,1.5-w*.22,5-w*1.8)),q=new me(new At(.6,.035,12,48),o(w===0?"#f6d484":w===1?"#8fe1c3":"#8bc8f3"));q.position.copy(O),r.add(q),v.push({center:O,mesh:q});let K=new me(new ze(.018,.018,O.y,8),o("#36576a"));K.position.set(O.x-.64,O.y/2,O.z),r.add(K)}p.position.copy(C).add(new y(0,2.3,-.5));let W=It("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);W.position.copy(C).add(new y(0,3.18,-.5)),r.add(W);for(let w of[2,5]){let O=Xn(1.3);O.position.copy(C).add(new y(0,4.2,w)),r.add(O)}let Y=new me(new Me(2,.02,.045),o("#f6d484"));Y.position.copy(C).add(new y(0,.02,6.7)),r.add(Y)}function X(){E=P=R=0,_=null,M=!1,m=[],l.visible=!1,z="Five planes. Aim through the hoops!",v.forEach(W=>W.mesh.material.emissive?.set(0)),F()}function b(){let W=U();return!W||!s.xrTeleport(W.x,0,W.z+7.4)?!1:(C=W,L(),g=i.visible=!0,s.xrFace?.(0),I=!1,S=!0,X(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function H(){g=i.visible=M=l.visible=!1,_=null,m=[],I=!1}function N(){M=!1,m=[],I=!1,S=!0,_||(l.visible=!1)}function D(W){if(_){if(R=Math.max(R,_.distance),z=`${W} \xB7 ${_.hits.size} hoops \xB7 ${_.distance.toFixed(1)} m`,_=null,E===5){A=Math.max(A,P);try{localStorage.setItem("tfj-planes-best-v1",String(A))}catch{}t(`Paper planes complete! ${P} points. A to replay.`)}F()}}function k(W,Y){if(!g)return;let{dt:w,right:O,controller:q}=W;x+=w;let K=!!O?.gamepad?.buttons[0]?.pressed,Z=!!O?.gamepad?.buttons[4]?.pressed;if(Y){N();return}K||(I=!0),Z&&!T&&E===5&&!_&&X(),T=Z;let B=q&&q.visible!==!1?q.getWorldPosition(new y):null;if(B&&K&&!S&&I&&!_&&E<5){let ne=s.stats();Math.abs(ne.x-C.x)>1.2||ne.z<C.z+6.7||ne.z>C.z+8.2||ne.y>.15?t("Return behind the paper-plane launch line."):(M=!0,m=[],l.visible=!0)}if(M){if(!B)N();else if(l.position.copy(B),l.quaternion.copy(q.getWorldQuaternion(new be)),m.push({time:x,p:B.clone()}),m=m.filter(ne=>x-ne.time<.14),!K&&S){let ne=m.find(ie=>x-ie.time>=.04),J=ne?B.clone().sub(ne.p).divideScalar(x-ne.time).clampLength(0,10):new y;M=!1,J.length()<.8||J.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(E++,_={p:B.clone(),v:J,start:B.clone(),distance:0,age:0,hits:new Set},v.forEach(ie=>ie.mesh.material.emissive?.set(0)),z="In flight\u2026",F())}}if(_){let ne=Math.max(1,Math.ceil(w/.012)),J=w/ne;for(let ie=0;ie<ne&&_;ie++){let G=_,ee=Cp(G.p,G.v,J),Q=ee.p.clone().sub(G.p),oe=Q.length(),le=new et(G.p,Q.normalize()),ye=new y,de=!1;for(let we of u)if(we.containsPoint(G.p)||le.intersectBox(we,ye)&&ye.distanceTo(G.p)<=oe){de=!0;break}if(de){D("Hit scenery");break}for(let we=0;we<v.length;we++)!G.hits.has(we)&&Ep(G.p,ee.p,v[we].center)&&(G.hits.add(we),P+=10,v[we].mesh.material.emissive.set("#3ca58b"),n(.45),F());G.p.copy(ee.p),G.v.copy(ee.v),G.age+=J,G.distance=Math.max(G.distance,Math.hypot(G.p.x-G.start.x,G.p.z-G.start.z)),l.position.copy(G.p),l.quaternion.setFromUnitVectors(new y(0,0,-1),G.v.clone().normalize()),l.rotateZ(Math.sin(G.age*3)*.04),G.p.y<.07?(l.position.y=.07,l.rotation.x=0,D("Landed")):(G.age>10||G.distance>20)&&D("Glide complete")}}S=K}return{root:i,get best(){return A},start:b,stop:H,cancel:N,tick:k,get held(){return M},get flight(){return _},get origin(){return C},get rings(){return v},get throws(){return E},get score(){return P},get longest(){return R}}}function Mc(s,e){let t=new pe;t.name="Bowling supporters",e.add(t);let n=[],i=0,r=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(g){t.visible=!0,i=0,r=0;for(let _ of n)_.group.visible=!1,_.shadow&&(_.shadow.visible=!1);let M=[];for(let _ of[5.2,3.8,6])for(let C of[-1.9,1.9,-2.4,2.4]){if(M.length===4)break;let v=g.clone().add(new y(C,0,_));s.blocked(v.x,v.z,0)||Math.abs(s.groundAt(v.x,v.z,.1))>.1||M.some(m=>m.distanceTo(v)<1)||M.push(v)}for(let _=0;_<M.length;_++){if(!n[_]){let m=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][_]});m.group.name=`Bowling supporter ${_+1}`,m.group.scale.setScalar(.91+_*.025),m.bones=Object.fromEntries(l.map(x=>[x,m.model.getObjectByName(x)])),m.rest=Object.fromEntries(l.map(x=>[x,m.bones[x]?.quaternion.clone()])),m.shadow=sn(.9,.6),t.add(m.shadow,m.group),n.push(m)}let C=n[_];C.group.visible=!0,C.group.position.copy(M[_]),C.base=M[_].clone(),C.shadow.visible=!0,C.shadow.position.copy(M[_]).add(new y(0,.012,0));let v=s.stats();C.group.rotation.y=Math.atan2(v.x-M[_].x,v.z-M[_].z),C.gesture="idle",C.target=new y(v.x,v.y+1.6,v.z),C.mixer.setTime(_*.73)}}function u(g=!1){i=g?3.6:2.2,o=g,a=!1}function h(){i=1.8,o=!1,a=!0}function f(g,M,_){let C=g.bones[M];if(!C)return;let v=C.parent.getWorldQuaternion(new be),m=C.getWorldQuaternion(new be),x=new y(0,1,0).applyQuaternion(m),I=new y(..._).normalize().applyQuaternion(g.group.getWorldQuaternion(new be));C.quaternion.copy(v.invert().multiply(new be().setFromUnitVectors(x,I).multiply(m))),g.model.updateMatrixWorld(!0)}function d(g,M,_={}){if(M||!t.visible)return;r+=g,i=Math.max(0,i-g);let C=s.stats();n.forEach((v,m)=>{if(!v.group.visible)return;let x=r+m*1.4,I=(o?3.6:a?1.8:2.2)-i,S=i>0&&I>=m*.11,T=!_.ball&&!_.held&&!i&&Math.sin(x*.43)>.85,E=n[(m+1)%n.length],P=_.ball||_.eye||new y(C.x,C.y+1.6,C.z);T&&E?.group.visible&&(P=E.base.clone().add(new y(0,1.5,0))),S&&(P=_.eye||new y(C.x,C.y+1.6,C.z)),v.target.copy(P);let A=Math.atan2(P.x-v.base.x,P.z-v.base.z);v.group.rotation.y+=Math.atan2(Math.sin(A-v.group.rotation.y),Math.cos(A-v.group.rotation.y))*Math.min(1,g*2.8);let R=S?a?"wave":["clap","arms-up","fist-pump","wave"][m%4]:_.held?"anticipate":T?"chat":"idle";v.gesture=R;for(let F of l)v.bones[F]&&v.bones[F].quaternion.copy(v.rest[F]);if(v.animate(g,R==="wave"?"wave":"idle"),v.group.position.set(v.base.x,v.base.y+(S?Math.max(0,Math.sin(x*7))*(o?.11:.055):0),v.base.z),v.group.rotation.z=Math.sin(x*1.2)*.012,v.shadow.material.opacity=1-(v.group.position.y-v.base.y)*3,v.model.updateMatrixWorld(!0),R==="clap"){let F=Math.sin(x*13)*.25;f(v,"UpperArmL",[-.25,-.3,.65]),f(v,"UpperArmR",[.25,-.3,.65]),f(v,"LowerArmL",[.4+F,.35,.4]),f(v,"LowerArmR",[-.4-F,.35,.4])}if(R==="arms-up"&&(f(v,"UpperArmL",[-.65,.9,0]),f(v,"UpperArmR",[.65,.9,0]),f(v,"LowerArmL",[.15,1,.12]),f(v,"LowerArmR",[-.15,1,.12])),R==="fist-pump"){let F=.65+Math.sin(x*9)*.3;f(v,"UpperArmR",[.5,F,.3]),f(v,"LowerArmR",[-.2,1,.2])}R==="anticipate"&&(f(v,"UpperArmL",[-.2,-.6,.35]),f(v,"UpperArmR",[.2,-.6,.35]),f(v,"LowerArmL",[.3,.1,.6]),f(v,"LowerArmR",[-.3,.1,.6]));let z=v.bones.Head;if(z){let F=P.x-v.base.x,U=P.z-v.base.z,L=Math.atan2(Math.sin(A-v.group.rotation.y),Math.cos(A-v.group.rotation.y)),X=Math.atan2(P.y-(v.base.y+1.6),Math.hypot(F,U));z.rotateY(Ve.clamp(L,-.65,.65)),z.rotateX(-Ve.clamp(X,-.4,.3)+Math.sin(x*(T?3:1.1))*.035)}v.bones.Chest&&v.bones.Chest.rotateX(_.held?.065:Math.sin(x*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:u,encourage:h,tick:d,stop:p,get cheering(){return i>0},get people(){return n.filter(g=>g.group.visible)}}}function bc(s,e,t,n,i=()=>{}){let r=new pe;r.name="Warehouse bowling",r.visible=!1,e.add(r);let o=Mc(s,r),a=$=>new Se({color:$,roughness:.55}),l=($,V,se,ue,te,fe=r)=>{let Pe=new me($,V);return Pe.position.set(se,ue,te),fe.add(Pe),Pe},c=new pe;r.add(c);let u=null,h=[],f=!1,d=!1,p=null,g=[],M=0,_=!1,C=!1,v=!1,m=0,x=0,I=[],S=Array.from({length:10},()=>[]),T=0,E=0,P=0,A=!1;try{P=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let R=l(new Xe(.14,24,20),a("#5147b5"),0,.17,0);for(let[$,V,se]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new Xe(.023,8,8),a("#12162d"),$,V,se,R);R.visible=!1;let z=document.createElement("canvas");z.width=1536,z.height=1024;let F=z.getContext("2d"),U=new Ie(z);U.colorSpace=Ae;let L=l(new Le(3.2,3.2*2/3),new ve({map:U}),0,2,0);L.name="Warehouse bowling scoreboard";let X=()=>I.reduce(($,V)=>$+V,0)+T,b=new pe;b.name="Bowling scoring computer",r.add(b);let H=l(new Le(.96,.64),new ve({map:U}),0,0,.046,b);H.name="Bowling computer screen",l(new Me(1.02,.7,.08),a("#101a26"),0,0,0,b);let N=120,D=new Float32Array(N*3),k=new Float32Array(N*3),W=[],Y=new Oe;Y.setAttribute("position",new dt(D,3)),Y.setAttribute("color",new dt(k,3));let w=new Li({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:ia}),O=new as(Y,w);O.name="Strike fireworks",O.visible=!1,O.frustumCulled=!1,r.add(O);let q=0,K=0;function Z(){i(!0),o.cheer(!0),K++,q=2.6,O.visible=!0,w.opacity=1;for(let $=0;$<N;$++){let V=$%3,se=$*2.39996,ue=.65+$%11*.08,te=Math.sqrt(1-($%17/8-1)**2);D.set([u.x+(V-1)*.65,1.35+V*.22,u.z+1.2],$*3),W[$]=new y(Math.cos(se)*te*ue,.7+Math.abs(Math.sin(se))*1.2,Math.sin(se)*te*ue);let fe=new Be([16765286,7401417,16745144,9026559][$%4]);k.set([fe.r,fe.g,fe.b],$*3)}Y.attributes.position.needsUpdate=!0,Y.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function B($){if(!(q<=0)){q=Math.max(0,q-$),O.visible=q>0,w.opacity=Math.min(1,q/.9);for(let V=0;V<N;V++){let se=W[V];se.y-=1.5*$,D[V*3]+=se.x*$,D[V*3+1]+=se.y*$,D[V*3+2]+=se.z*$}Y.attributes.position.needsUpdate=!0}}function ne(){vt(F,1536,1024),re(F,"TFJ BOWL  /  LANE 01",48,72,38,j.blue,"700"),re(F,"WAREHOUSE BOWLING",48,143,61,j.ink,"700"),Ke(F,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:j.mint,radius:22}),re(F,"TOTAL PINS",1120,86,34,j.mint),re(F,String(X()),1120,237,125,j.ink,"700"),re(F,"/ 100",1320,233,42,j.muted),re(F,m===10?"ROUND COMPLETE":`FRAME ${m+1}  \u2022  BOWL ${x+1}`,48,230,51,j.gold,"700");let $=0;for(let V=0;V<10;V++){let se=48+V%5*288,ue=290+Math.floor(V/5)*244,te=V===m&&m<10,fe=S[V],Pe=fe.length>0;Ke(F,se,ue,272,225,{top:te?"#225568":"#142e43",bottom:"#0b2032",stroke:te?j.gold:"#55758c",radius:14}),re(F,String(V+1),se+18,ue+45,37,te?j.gold:j.muted,"700");let ge=fe[0]===10?"X":fe[0]===0?"\u2013":fe[0]??"",De=fe.length>1?fe[0]+fe[1]===10?"/":fe[1]===0?"\u2013":fe[1]:"";F.strokeStyle="#5c7b90",F.lineWidth=2,F.strokeRect(se+78,ue+8,89,77),F.strokeRect(se+167,ue+8,97,77),re(F,String(ge),se+96,ue+67,53,j.ink,"700"),re(F,String(De),se+190,ue+67,53,j.ink,"700"),$+=V<I.length?I[V]:V===m?T:0,re(F,Pe?String($):"\u2014",se+30,ue+189,89,te?j.gold:j.ink,"700")}re(F,`PERSONAL BEST  ${P} / 100`,48,837,38,j.mint,"700"),re(F,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,j.muted,"600"),re(F,m===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,j.gold,"700"),re(F,"Y  MENU",1270,957,34,j.ink,"700"),U.needsUpdate=!0}function J(){for(let $ of[3,2,1.5,4,5,6])for(let V of[-30,-29,-28,-27]){let se=!0;for(let ue=-1.1;ue<=1.1;ue+=.55)for(let te=0;te<=7.8;te+=.3)(s.blocked($+ue,V+te,0)||Math.abs(s.groundAt($+ue,V+te,.1))>.1)&&(se=!1);if(se)return new y($,0,V)}return null}function ie(){for(let te of[...c.children])te.traverse(fe=>{fe.geometry?.dispose(),fe.material&&fe.material.dispose()}),c.remove(te);c.position.copy(u),h=[],l(new Me(2.1,.025,7.3),Bi(),0,.018,3.25,c);for(let te=-4;te<=4;te++)l(new Me(.009,.003,7.3),a("#9c805f"),te*.22,.032,3.25,c);for(let te of[-1.15,1.15])l(new Me(.15,.05,7.3),a("#223747"),te,.02,3.25,c);for(let te of[-1.045,1.045]){let fe=l(new Me(.028,.025,7.3),new Se({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),te,.045,3.25,c);fe.name="Illuminated bowling edge"}let $=It("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",j.gold,2.8);$.position.set(0,4.38,2.5),c.add($);for(let te of[1,4.8]){let fe=Xn(1.8);fe.position.set(0,4.8,te),c.add(fe)}l(new Me(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new Me(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let te of[-.5,0,.5]){let fe=l(new tn(.065,.16,3),a("#30485a"),te,.04,4.7,c);fe.rotation.x=-Math.PI/2}let V=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([te,fe])=>new he(te,fe)),se=0;for(let te=0;te<4;te++)for(let fe=0;fe<=te;fe++){let Pe=sn(.29,.27);Pe.position.set((fe-te/2)*.3,.034,1.1-te*.29),c.add(Pe);let ge=new pe;ge.position.set((fe-te/2)*.3,.248,1.1-te*.29),c.add(ge),l(new di(V,20),a("#f8f6ea"),0,-.215,0,ge),l(new ze(.035,.039,.045,16),a("#dc4459"),0,.07,0,ge),h.push({mesh:ge,start:ge.position.clone(),v:new y,spin:new y,shadow:Pe,down:!1,id:se++})}L.position.copy(u).add(new y(0,2.95,2.5)),l(new Me(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let te of[-1.62,1.62])l(new Me(.06,3.92,.06),a("#223747"),te,1.96,2.42,c);let ue=[-1.4,1.4].find(te=>!s.blocked(u.x+te,u.z+7.1,0))??-1.2;b.position.copy(u).add(new y(ue,1.27,7.1)),b.lookAt(u.clone().add(new y(0,1.68,7.5))),l(new Me(.16,1.12,.16),a("#223747"),ue,.56,7.1,c),l(new Me(.65,.06,.48),a("#101a26"),ue,.03,7.1,c)}function G(){for(let $ of h)$.mesh.position.copy($.start),$.mesh.rotation.set(0,0,0),$.mesh.visible=!0,$.shadow.visible=!0,$.shadow.position.set($.start.x,.034,$.start.z),$.shadow.material.opacity=1,$.down=!1,$.v.set(0,0,0),$.spin.set(0,0,0)}function ee(){q=0,O.visible=!1,m=x=T=0,I=[],S=Array.from({length:10},()=>[]),p=null,E=0,d=!1,R.visible=!1,G(),ne()}function Q(){let $=J();return!$||!s.xrTeleport($.x,0,$.z+7.4)?!1:(u=$,ie(),o.setup(u),f=r.visible=!0,s.xrFace?.(0),ee(),C=!1,_=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function oe(){o.stop(),q=0,O.visible=!1,f=r.visible=d=R.visible=!1,p=null,E=0,g=[],C=!1}function le(){d=!1,g=[],C=!1,_=!0,p||(R.visible=!1)}function ye($,V){A||(A=!0,o.cheer(!1));let se=V.length();$.down=!0,$.v.add(V).clampLength(0,7),$.v.y=Math.max($.v.y,Math.min(3.4,.7+se*.42)),$.spin.add(new y(V.z*2.8,($.id%2?1:-1)*se*.8,-V.x*2.8)).clampLength(0,18)}function de($){let V=new y,se=new y,ue=new be;for(let te of h)if(te.down&&te.mesh.visible){te.v.y-=9.81*$,te.mesh.position.addScaledVector(te.v,$);let fe=te.spin.length();fe>.001&&(se.copy(te.spin).divideScalar(fe),ue.setFromAxisAngle(se,fe*$),te.mesh.quaternion.premultiply(ue).normalize()),V.set(0,1,0).applyQuaternion(te.mesh.quaternion);let Pe=.033+.08+.135*Math.abs(V.y);te.mesh.position.y<Pe?(te.mesh.position.y=Pe,te.v.y=te.v.y<-.65?-te.v.y*.32:0,te.v.x*=Math.exp(-4*$),te.v.z*=Math.exp(-4*$),te.spin.multiplyScalar(Math.exp(-5*$))):te.spin.multiplyScalar(Math.exp(-.3*$));for(let[ge,De,Ne]of[["x",-1.02,1.02],["z",-.35,2.2]])(te.mesh.position[ge]<De||te.mesh.position[ge]>Ne)&&(te.mesh.position[ge]=Ve.clamp(te.mesh.position[ge],De,Ne),te.v[ge]*=-.38)}for(let te=0;te<h.length;te++)for(let fe=te+1;fe<h.length;fe++){let Pe=h[te],ge=h[fe];if(!Pe.mesh.visible||!ge.mesh.visible||!Pe.down&&!ge.down)continue;let De=ge.mesh.position.clone().sub(Pe.mesh.position),Ne=De.length();if(Ne>=.29||Ne<.001)continue;let Ee=De.divideScalar(Ne),ce=Pe.v.clone().sub(ge.v).dot(Ee);if(ce>.18){let Ze=Ee.clone().multiplyScalar(ce*.7);ge.down?ge.v.add(Ze):ye(ge,Ze),Pe.down?Pe.v.sub(Ze):ye(Pe,Ze.clone().negate()),Pe.spin.x+=Ee.z*ce,ge.spin.z-=Ee.x*ce}let Ye=.29-Ne;Pe.down&&Pe.mesh.position.addScaledVector(Ee,-Ye*.5),ge.down&&ge.mesh.position.addScaledVector(Ee,Ye*.5)}}function we(){p=null,R.visible=!1;let $=h.filter(se=>se.down).length,V=$-T;if($===10&&x===0&&Z(),S[m].push(V),T=$,x++,V===0&&o.encourage(),V>0&&!($===10&&x===1)&&(o.cheer($===10),i($===10)),n($===10?.8:.25),$===10||x===2){let se=$===10?x===1?"Strike!":"Spare!":`${$} pins.`;if(I.push($),m++,x=T=0,t(m===10?`Bowling complete! ${X()} / 100 pins.`:`${se} Next frame.`),m===10){P=Math.max(P,X());try{localStorage.setItem("tfj-bowling-best-10-v1",String(P))}catch{}}else G()}else{for(let se of h)se.down&&(se.mesh.visible=!1,se.shadow.visible=!1);t(`${V} pins! One more bowl this frame.`)}ne()}function _e($,V){if(!f)return;let{dt:se,right:ue,controller:te}=$;M+=se,o.tick(se,V,{eye:$.eye,held:d,ball:p?R.position:null});let fe=!!ue?.gamepad?.buttons[0]?.pressed,Pe=!!ue?.gamepad?.buttons[4]?.pressed;if(V){le();return}B(se),fe||(C=!0),Pe&&!v&&m===10&&ee(),v=Pe;let ge=te&&te.visible!==!1?te.getWorldPosition(new y):null;if(fe&&!_&&C&&!p&&!E&&m<10&&ge){let De=s.stats();Math.abs(De.x-u.x)>1.1||De.z<u.z+6.7||De.z>u.z+8.2||De.y>.15?t("Return behind the yellow bowling line."):(d=!0,g=[],R.visible=!0)}if(d){if(!ge)le();else if(R.position.copy(ge),g.push({time:M,p:ge.clone()}),g=g.filter(De=>M-De.time<.14),!fe&&_){let De=g.find(Ee=>M-Ee.time>=.04),Ne=De?ge.clone().sub(De.p).divideScalar(M-De.time).clampLength(0,10):new y;d=!1,Ne.length()<.6||Ne.z>-.25?(R.visible=!1,t("Swing towards the pins before releasing.")):(A=!1,p={p:ge.clone().sub(u),v:Ne,age:0,gutter:!1})}}if(p||E){let De=Math.max(1,Math.ceil(se/.008)),Ne=se/De;for(let Ee=0;Ee<De;Ee++){if(p){let ce=p;ce.age+=Ne,ce.v.y-=9.81*Ne,ce.p.addScaledVector(ce.v,Ne),ce.p.y<.174&&(ce.p.y=.174,ce.v.y=Math.abs(ce.v.y)>.8?Math.abs(ce.v.y)*.18:0,ce.v.x*=Math.exp(-.25*Ne),ce.v.z*=Math.exp(-.25*Ne)),Math.abs(ce.p.x)>1&&(ce.gutter=!0,ce.p.x=Math.sign(ce.p.x)*1.15,ce.v.x=0),R.position.copy(ce.p).add(u),R.rotation.x+=ce.v.z*Ne/.14;for(let Ye of h)if(!Ye.down&&!ce.gutter&&ce.p.y<.6){let Ze=Ye.mesh.position.x-ce.p.x,ft=Ye.mesh.position.z-ce.p.z;Math.hypot(Ze,ft)<.23&&(ye(Ye,new y(ce.v.x,0,ce.v.z).multiplyScalar(.65)),ce.v.x*=.8,ce.v.z*=.84)}(ce.p.z<-.6||ce.age>7||Math.hypot(ce.v.x,ce.v.z)<.15)&&(p=null,E=2.6)}de(Ne);for(let ce of h)ce.shadow.position.x=ce.mesh.position.x,ce.shadow.position.z=ce.mesh.position.z,ce.shadow.material.opacity=Ve.clamp(1-(ce.mesh.position.y-.25),.15,1);if(E&&(E=Math.max(0,E-Ne),!E)){we();break}}}_=fe}return{root:r,get best(){return P},crowd:o,fireworks:O,get celebrations(){return K},start:Q,stop:oe,cancel:le,tick:_e,get held(){return d},get flight(){return p},get pins(){return h},get origin(){return u},get frame(){return m},get roll(){return x},get total(){return X()},get totals(){return I},get frameRolls(){return S}}}function Rp(s,e,t,n=.34){if(s.y<=t.y||e.y>t.y)return!1;let i=(s.y-t.y)/(s.y-e.y);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.z+(e.z-s.z)*i-t.z)<n}function Sc(s,e,t,n,i){let r=s.colliders.map(Z=>new qe(new y(Z.min.x,Z.min.y,Z.min.z),new y(Z.max.x,Z.max.y,Z.max.z))),o=new pe;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=Z=>new Se({color:Z,roughness:.6}),l=(Z,B,ne,J=o)=>{let ie=new me(Z,B);return ie.position.copy(ne),J.add(ie),ie},c=new y,u=null,h=!1,f=!1,d=!1,p=null,g=[],M=0,_=!1,C=!1,v=0,m=0,x=0,I=0,S=!1;try{x=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let T=s.mollie.balls[0].ball.clone();T.scale.setScalar(.48),T.visible=!1,e.add(T);let E=l(new Xe(.065,16,12),a("#ee528c"),new y,e);E.visible=!1,l(new Xe(.03,8,6),a("#6ac68d"),new y(0,.06,0),E).scale.set(1,.4,1.7);let A=new ut;A.moveTo(0,.02),A.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),A.bezierCurveTo(.23,-.03,.16,.18,0,.02);let R=new me(new Ot(A),new ve({color:16742315,side:tt,transparent:!0}));R.visible=!1,e.add(R);let z=0,F=0,U=0,L=document.createElement("canvas");L.width=768,L.height=384;let X=L.getContext("2d"),b=new Ie(L);b.colorSpace=Ae;let H=l(new Le(1.5,.75),new ve({map:b}),new y);function N(){vt(X,768,384),re(X,"POK\xC9 BALL BASKETBALL",30,62,38,j.gold),re(X,`${m} baskets \xB7 ${v}/10 throws`,30,139,46),re(X,`Best: ${x} baskets`,30,204,32,j.mint),re(X,v>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),re(X,"Y: games menu \xB7 B: leave",30,337,25,j.muted),b.needsUpdate=!0}function D(){for(let[Z,B]of[[-4,8],[5,9],[-8,8],[12,8]]){let ne=!0;for(let J=-1.5;J<=1.5;J+=.5)for(let ie=-2;ie<=2;ie+=.5)(s.blocked(Z+J,B+ie,0)||Math.abs(s.groundAt(Z+J,B+ie,.1))>.1)&&(ne=!1);if(ne)return new y(Z,0,B)}return null}function k(Z){if(c.set(Z.x,2.35,Z.z-1.5),H.position.set(Z.x+1.35,2,Z.z-1.75),o.children.length>1)for(let G of[...o.children])G!==H&&(o.remove(G),G.traverse(ee=>{ee.geometry?.dispose(),ee.material?.dispose()}));let B=It("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);B.position.set(Z.x,3.7,Z.z-1.93),o.add(B);let ne=Xn(1.1);ne.position.set(Z.x,4.1,Z.z-1.5),o.add(ne),l(new Me(.12,4.15,.12),a("#173d56"),new y(Z.x,2.075,Z.z-2)),l(new Me(.08,.08,.55),a("#173d56"),new y(Z.x,4.1,Z.z-1.75)),l(new Me(1.5,.95,.07),a("#e4f1f2"),new y(Z.x,2.65,Z.z-1.93));let J=l(new At(.42,.025,10,48),a("#f5ab44"),c);J.rotation.x=Math.PI/2;for(let G=0;G<12;G++){let ee=G/12*Math.PI*2,Q=new y(c.x+Math.cos(ee)*.41,c.y,c.z+Math.sin(ee)*.41),oe=new y(c.x+Math.cos(ee+.2)*.23,c.y-.48,c.z+Math.sin(ee+.2)*.23),le=new wt(new Oe().setFromPoints([Q,oe]),new Tt({color:16777215}));o.add(le)}l(new Me(.06,2.4,.06),a("#173d56"),new y(Z.x+1.35,1.2,Z.z-1.78)),l(new Me(1.56,.81,.045),a("#122538"),new y(Z.x+1.35,2,Z.z-1.78));let ie=l(new Me(2,.015,.04),a("#f6d484"),new y(Z.x,.012,Z.z+1.45))}function W(Z){if(Y(),Z==="friend")return f=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let B=D();return!B||!s.xrTeleport(B.x,0,B.z+1.9)?!1:(u=B,k(B),s.xrFace?.(0),h=o.visible=!0,v=m=0,N(),!0)}function Y(){h=f=d=!1,o.visible=T.visible=E.visible=R.visible=!1,p=null,g=[],C=!1,_=!1,z=0}function w(){d=!1,T.visible=E.visible=!1,g=[],C=!1,_=!0}function O(){if(p=null,T.visible=!1,v===10){x=Math.max(x,m);try{localStorage.setItem("tfj-basket-best",String(x))}catch{}n(`Basketball complete! ${m} baskets from 10 throws.`)}N()}function q(Z,B){t.react(B),z=1.5,R.visible=!0,I=2,i(.6),n(Z)}function K(Z,B){let{dt:ne,eye:J,controller:ie,right:G,leftController:ee}=Z;M+=ne,I=Math.max(0,I-ne);let Q=!!G?.gamepad?.buttons[0]?.pressed,oe=!!G?.gamepad?.buttons[4]?.pressed;if(B){w(),R.visible=!1;return}Q||(C=!0);let le=ie?.visible!==!1&&ie?ie.getWorldPosition(new y):null;if(f){if(t.group.updateMatrixWorld(!0),E.visible=!!le&&Q&&C,E.visible){E.position.copy(le);let de=t.group.localToWorld(new y(0,.43,.4));!I&&E.position.distanceTo(de)<.22&&(F++,q(`Yum! Jigglypuff loved berry ${F}.`,"feed"),C=!1,E.visible=!1)}t.group.updateMatrixWorld(!0);let ye=t.group.localToWorld(new y(.46,.58,.03));for(let de of[ie,ee])if(de&&de.visible!==!1&&!Q&&!I&&de.getWorldPosition(new y).distanceTo(ye)<.24){U++,q(`High-five! ${U} happy high-fives.`,"five");break}}else E.visible=!1;if(z>0?(z-=ne,R.visible=!0,R.position.copy(t.group.position).add(new y(0,1.3+(1.5-z)*.22,0)),R.lookAt(J),R.material.opacity=Math.min(1,z*2)):R.visible=!1,!h){_=Q;return}if(oe&&!S&&v===10&&!p&&(v=m=0,N()),S=oe,le&&Q&&!_&&C&&!p&&v<10&&(d=!0,g=[],T.visible=!0),d){if(!le)w();else if(T.position.copy(le),g.push({time:M,p:le.clone()}),g=g.filter(ye=>M-ye.time<.14),!Q&&_){let ye=g.find(we=>M-we.time>=.04),de=ye?le.clone().sub(ye.p).divideScalar(M-ye.time).clampLength(0,12):new y;d=!1,de.length()<.6?(T.visible=!1,n("Swing your hand upwards, then release.")):(v++,p={p:le.clone(),v:de,age:0,scored:!1},N())}}if(p){let ye=Math.max(1,Math.ceil(ne/.008)),de=ne/ye;for(let we=0;we<ye&&p;we++){let _e=p,$=_e.p.clone().addScaledVector(_e.v,de);$.y-=4.9*de*de,_e.v.y-=9.8*de;let V=$.clone().sub(_e.p),se=V.length(),ue=new et(_e.p,V.normalize()),te=new y;if(r.some(ge=>!ge.containsPoint(_e.p)&&ue.intersectBox(ge,te)&&te.distanceTo(_e.p)<=se)){O();break}!_e.scored&&Rp(_e.p,$,c)&&(_e.scored=!0,m++,i(.8),N());let fe=c.z-.4;(_e.p.z-fe)*($.z-fe)<0&&Math.abs($.x-c.x)<.8&&$.y>2.17&&$.y<3.15&&($.z=fe+Math.sign(_e.p.z-fe)*.1,_e.v.z*=-.65);let Pe=Math.hypot($.x-c.x,$.z-c.z);Math.abs($.y-c.y)<.1&&Pe>.33&&Pe<.53&&(_e.v.x+=($.x-c.x)*3,_e.v.z+=($.z-c.z)*3,_e.v.y=Math.abs(_e.v.y)*.45,$.y=c.y+.11),_e.p.copy($),_e.age+=de,T.position.copy($),T.rotation.x+=de*5,($.y<.09||_e.age>5)&&O()}}_=Q}return{root:o,get best(){return x},start:W,stop:Y,cancel:w,tick:K,get origin(){return u},get held(){return d},get shots(){return v},get score(){return m},get flight(){return p},get feeds(){return F},get fives(){return U},get berry(){return E},get hoop(){return c}}}function Tc(s,e,t){let n=new pe;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new pe;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d"),a=new Ie(r);a.colorSpace=Ae;let l=new me(new Le(1.75,.4375),new ve({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=It("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let u=s.colliders.map(L=>new qe(new y(L.min.x,L.min.y,L.min.z),new y(L.max.x,L.max.y,L.max.z))),h=[],f=[],d=[],p=[],g=new Set,M=0,_=0,C=!1,v=!1,m=[],x=null,I={};try{I=Hr(localStorage.getItem(Wr))}catch{}function S(){let L=f.length/2;if(!(v||M<L||M>=(I[L]??1/0))){I[L]=M;try{localStorage.setItem(Wr,JSON.stringify(I))}catch{}}}function T(){vt(o,1024,256),re(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,j.gold,"700"),re(o,`${g.size/2} / ${f.length/2} pairs  \xB7  ${M} turns`,28,101,38,j.ink,"700"),re(o,g.size===f.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,j.mint,"500"),re(o,v?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,j.muted,"400"),a.needsUpdate=!0}function E(){for(let L of h)L.geometry.dispose(),L.material.dispose();h=[];for(let L of d)for(let X of L.material)X.userData.memoryOwned&&X.dispose();i.clear(),d=[],x=null}function P(){E();let L=[...s.mollie.found];v=L.length<2,v&&(L=[0,1,2,3]);for(let b=L.length-1;b>0;b--){let H=Math.floor(Math.random()*(b+1));[L[b],L[H]]=[L[H],L[b]]}L=L.slice(0,6),f=[...L,...L];for(let b=f.length-1;b>0;b--){let H=Math.floor(Math.random()*(b+1));[f[b],f[H]]=[f[H],f[b]]}p=[],g.clear(),M=_=0;let X=Math.ceil(f.length/4);d=f.map((b,H)=>{let N=s.mollie.cards[b].clone();N.userData={index:H},N.material=N.material.map(k=>{let W=new ve(k.map?{map:k.map}:{color:15258527});return W.userData.memoryOwned=!0,W}),N.position.set((H%4-1.5)*.43,((X-1)/2-Math.floor(H/4))*.39,.012),N.rotation.set(0,Math.PI,0),N.scale.setScalar(.34/.62),N.visible=!0;let D=new me(new Le(.268,.36),new ve({color:2508378}));return D.position.copy(N.position),D.position.z=.003,h.push(D),i.add(D,N),N}),m=d.map(()=>Math.PI),T()}function A(){return s.xrTeleport(-21.8,0,-10.78)?(s.xrFace?.(0),C=n.visible=!0,P(),!0):!1}function R(){C=n.visible=!1,p=[],_=0}function z(L){return!C||_||!Number.isInteger(L)||L<0||L>=f.length||g.has(L)||p.includes(L)||g.size===f.length?!1:(p.push(L),m[L]=0,t(.18),p.length===2&&(M++,_=.85),T(),!0)}function F(L,X=!1){if(C){for(let b=0;b<d.length;b++)d[b].rotation.y=Ve.damp(d[b].rotation.y,m[b],16,L);if(!X&&_&&(_=Math.max(0,_-L),!_)){let[b,H]=p;f[b]===f[H]?(g.add(b),g.add(H),h[b].material.color.set(9429443),h[H].material.color.set(9429443),t(.55),g.size===f.length&&S()):m[b]=m[H]=Math.PI,p=[],T()}}}function U(L){if(x!==null&&h[x]&&h[x].material.color.set(g.has(x)?9429443:2508378),x=null,!C||!L)return null;n.updateMatrixWorld(!0);let X=new Sn(L.position,L.direction,0,3.8).intersectObjects(d)[0];if(!X)return null;let b=new et(L.position,L.direction),H=new y;for(let D of u)if(b.intersectBox(D,H)&&H.distanceTo(L.position)<X.distance-.025)return null;let N=X.object.userData.index;return x=N,g.has(N)||h[N].material.color.set(16176260),{point:X.point,action:()=>z(N)}}return{root:n,start:A,stop:R,reset:P,tick:F,point:U,select:z,get records(){return{...I}},get deck(){return f},get cards(){return d},get moves(){return M},get matched(){return g},get waiting(){return _},get active(){return C},get complete(){return C&&g.size===f.length},get practice(){return v}}}function Xr(){let s=new pe;s.name="Jigglypuff \xB7 3D";let e=v=>new Se({color:v,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),r=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(v,m,x,I=s)=>{let S=new me(v,m);return S.name=x,S.castShadow=S.receiveShadow=!0,I.add(S),S},c=(v,m,x,I,S,T,E,P,A=s)=>{let R=l(new Xe(1,32,24),E,P,A);return R.position.set(v,m,x),R.scale.set(I,S,T),R};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let v of[-1,1]){let m=new pe;m.position.set(v*.27,.86,-.005),m.rotation.z=-v*.21,s.add(m);let x=new ut;x.moveTo(-.135,0),x.quadraticCurveTo(-.115,.16,-.025,.34),x.quadraticCurveTo(0,.39,.025,.34),x.quadraticCurveTo(.12,.13,.135,0),x.quadraticCurveTo(0,-.07,-.135,0);let I=l(new nn(x,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",m);I.position.z=-.04;let S=new ut;S.moveTo(-.085,.025),S.quadraticCurveTo(-.06,.16,0,.29),S.quadraticCurveTo(.06,.16,.085,.025),S.quadraticCurveTo(0,-.005,-.085,.025);let T=l(new Ot(S,16),i,"Dark inner ear",m);T.position.z=.047,c(v*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let u=[];for(let v of[-1,1]){let m=new pe;m.position.set(v*.172,.625,.347),m.rotation.y=v*.24,s.add(m),u.push(m),c(0,0,0,.123,.153,.053,r,"Eye white",m),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",m),c(0,-.003,.063,.042,.079,.01,a,"Pupil",m),c(-.025,.045,.077,.024,.033,.007,r,"Eye sparkle",m),c(.022,-.045,.075,.011,.015,.005,r,"Small sparkle",m)}((v,m,x,I)=>l(new Fi(new kn(v.map(S=>new y(...S))),40,m,8,!1),x,I))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let f=[];for(let v=0;v<=36;v++){let m=v/36,x=Math.PI-m*Math.PI*2,I=.126*(1-.88*m);f.push(new y(.018+Math.cos(x)*I,.961+Math.sin(x)*I,.295+.035*m))}let d=new Fi(new kn(f),72,.042,12,!1),p=d.attributes.position,g=new kn(f);for(let v=0;v<=72;v++){let m=g.getPointAt(v/72),x=1-.66*(v/72)**2;for(let I=0;I<=12;I++){let S=v*13+I,T=new y().fromBufferAttribute(p,S).sub(m).multiplyScalar(x).add(m);p.setXYZ(S,T.x,T.y,T.z)}}d.computeVertexNormals(),l(d,n,"Curled fringe");let M=[];for(let v of[-1,1]){let m=new pe;m.position.set(v*.37,.48,.015),m.rotation.z=v*.6,s.add(m),c(v*.075,0,0,.14,.075,.075,t,"Little arm",m),M.push(m)}let _=0;function C(v,m=!1){_+=v,s.position.y=Math.max(0,Math.sin(_*2.5))*.028;let x=_%4.4>4.2?.09:1;u.forEach(I=>I.scale.y=x),M[1].rotation.z=.6+(m?Math.sin(_*4)*.25:Math.sin(_*2)*.04)}return{group:s,animate:C}}function wc(s,e){let t=Xr(),n=new pe;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,r=.52,o=[],a=null,l=!0,c=0,u=null,h=0,f=0,d="",p=(C,v)=>Math.hypot(C.x-v.x,C.z-v.z);function g(C,v){let m=new y(-v.z,0,v.x);for(let[x,I]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let S=C.x+v.x*x+m.x*I,T=C.z+v.z*x+m.z*I,E=s.groundAt(S,T,C.y+.2);if(Math.abs(E-C.y)<.35&&!s.blocked(S,T,E))return n.position.set(S,E,T),o=[],a=new y(C.x,C.y,C.z),c=0,u=null,h=.15,!0}return!1}function M(C,v,m,x=!1){C=Math.min(C,.05);let I=s.stats(),S=new y(I.x,I.y,I.z);if(m){n.visible=!1,l=!0,u=null;return}let T=new y(v.x,0,v.z).normalize();if(T.lengthSq()<.01&&T.set(0,0,-1),l||n.position.distanceTo(S)>8||a&&a.distanceTo(S)>3||p(n.position,S)<.9){if(!g(I,T)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(S)>.18)&&(o.push(S.clone()),a=S.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let E=x?1.05:i;h=Math.max(0,h-C);let P=p(n.position,S);if(!u&&h===0){let F=null,U=0;if(P<E?(F=n.position.clone().sub(S),F.y=0,F.normalize(),U=Math.min(.8,E+.2-P)):P>E+.35&&(o.length||x)&&(F=(x?S:o[0]).clone().sub(n.position),F.y=0,U=Math.min(.8,F.length(),P-E),F.normalize()),F&&U>.04){let L=n.position.clone(),X=L.clone().addScaledVector(F,U),b=!0,H=L.y;for(let N=1;N<=8;N++){let D=L.clone().lerp(X,N/8),k=s.groundAt(D.x,D.z,H+.22);if(Math.abs(k-H)>.35||s.blocked(D.x,D.z,k)||p(D,S)<Math.min(E,P)-.01){b=!1;break}H=k}X.y=H,b?(u={from:L,to:X,time:0},c=0):(c+=C,c>2.5&&g(I,T))}else c=0}let A=0,R=0;if(u){u.time+=C;let F=Math.min(1,u.time/r),U=u.from.clone().lerp(u.to,F),L=p(n.position,S);p(U,S)>=Math.min(E,L)-.001&&!s.blocked(U.x,U.z,U.y)&&n.position.copy(U),A=Math.sin(Math.PI*F)*.3,R=Math.sin(Math.PI*F)*.08,F===1&&(u=null,h=.14)}else h>0&&(R=-Math.sin(Math.PI*Math.min(1,h/.14))*.1);let z=Math.atan2(I.x-n.position.x,I.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(z-n.rotation.y),Math.cos(z-n.rotation.y))*Math.min(1,C*5),t.animate(C,P<3),t.group.position.y=A,t.group.scale.set(1-R*.5,1+R,1-R*.5),f>0){f=Math.max(0,f-C);let F=Math.abs(Math.sin(f*9));t.group.position.y+=F*(d==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(f*20)*.06}}function _(){l=!0,n.visible=!1,o=[],a=null,u=null}return{group:n,tick:M,summon:_,radius:i,react(C){f=1.3,d=C},get hopping(){return!!u},get trail(){return o},get hidden(){return l}}}function Ac(s,e,t){let n=new pe;n.name="Mollie\u2019s VR book",s.add(n),n.visible=!1;let i=new pe;n.add(i);let r=[],o=-1,a=null,l=!1,c=1,u=null,h=null,f=null,d=null,p=new be,g=new ve({color:16446169}),M=new ve({color:1455692}),_=new ve({color:13944999}),C=new ve({color:15386989});function v(b,H,N,D,k,W,Y=0){let w=new me(new Me(b,H,N),D);return w.position.set(k,W,Y),i.add(w),w}function m(b,H,N,D,k,W=44,Y=null,w="#17364b",O=null){let q=document.createElement("canvas");q.width=1024,q.height=Math.round(1024*N/H);let K=q.getContext("2d"),Z;function B(ie=!1){if(K.clearRect(0,0,q.width,q.height),Y){let G=Y==="#eac96d";Ke(K,4,4,1016,q.height-8,{top:G?"#ffe8ac":ie?"#365e76":"#24475f",bottom:G?"#d9b66c":"#142e43",stroke:ie?"#ffe09a":G?"#fff0c7":"#597b91",radius:Math.min(28,q.height/5)})}K.textAlign="center",K.textBaseline="middle",K.fillStyle=Y==="#eac96d"?"#17364b":ie?j.gold:w,K.font=`bold ${W}px Arial`,b.forEach((G,ee)=>K.fillText(G,512,q.height*(ee+1)/(b.length+1),944)),Z&&(Z.needsUpdate=!0)}B(),Z=new Ie(q),Z.colorSpace=Ae;let ne=new ve({map:Z,transparent:!0,side:tt}),J=new me(new Le(H,N),ne);return J.position.set(D,k,.06),i.add(J),O&&(J.userData.action=O,J.userData.paint=B,r.push(J)),J}function x(){let b=document.createElement("canvas");b.width=b.height=256;let H=b.getContext("2d");H.fillStyle="#203f53",H.beginPath(),H.arc(128,128,112,0,Math.PI*2),H.fill(),H.strokeStyle="#b99b5c",H.lineWidth=3,H.stroke(),Tn(H,"ball",128,128,185,j.gold);let N=new Ie(b);N.colorSpace=Ae;let D=new me(new Le(.2,.2),new ve({map:N,transparent:!0}));D.position.set(.02,.015,.061),i.add(D)}function I(){i.traverse(b=>{b.userData.borrowed||(b.geometry&&b.geometry.dispose(),b.material&&!Array.isArray(b.material)&&![g,M,_,C].includes(b.material)&&(b.material.map?.dispose(),b.material.dispose()))}),i.clear(),r.length=0,h=null}function S(b,H,N,D,k){let W=e.mollie.cards[b].clone();return W.userData={borrowed:!0},W.material=W.material.map(Y=>{if(!Y.map)return Y;let w=new ve({map:Y.map});return w.userData.albumOwned=!0,w}),W.position.set(H,N,.085),W.scale.setScalar(D/.62),W.rotation.set(0,0,0),W.visible=!0,k&&(W.userData.action=k,r.push(W)),i.add(W),W}function T(){i.traverse(b=>{if(b.userData.borrowed)for(let H of b.material)H.userData.albumOwned&&H.dispose()}),I()}function E(){if(T(),d=null,n.position.z=a!==null?.38:0,a!==null){m([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),h=S(a,-.28,0,1.05*c),h.rotation.y=l?Math.PI:0,p.copy(h.quaternion),m(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new y(0,1,0),l?Math.PI:0)}),m(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>P(.12)),m(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>P(-.12)),m(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",z),m(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){v(1.04,1.33,.06,M,0,0),v(.038,1.29,.07,C,-.47,0,.025),m(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),m([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),x(),m(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>A(0)),m(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}v(2.1,1.37,.055,M,0,0,-.02),v(2.02,1.3,.045,_,0,0,.005),v(.98,1.26,.018,g,-.502,0,.036),v(.98,1.26,.018,g,.502,0,.036),v(.025,1.29,.02,_,0,0,.055);for(let b of[-1,1]){let H=o*2+(b===1?1:0),N=b*.5;m([e.mollie.found.has(H)?e.xrGames.names[H]:`Mystery card ${H+1}`],.88,.12,N,.53,56),e.mollie.found.has(H)?S(H,N,-.005,.8,()=>R(H)):(v(.58,.8,.006,new ve({color:14476515}),N,-.005,.062),m(["?"],.5,.6,N,-.005,300,null,"#89a2ab")),m([`${H+1} / 18`],.7,.09,N,-.54,52)}m(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>A(o-1)),m([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),m(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>A(Math.min(8,o+1))),m(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),m(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function P(b){c=Ve.clamp(c+b,.72,1.12),h.scale.setScalar(1.05*c/.62)}function A(b){if(u||b===o)return;b=Ve.clamp(b,-1,8);let H=new pe;H.name="Turning album page",n.add(H);let N=new me(new Me(.99,1.27,.012),g);if(N.position.x=b>o?.495:-.495,N.userData.pageTurnOwned=!0,H.add(N),o>=0){for(let D of i.children)if(D.position.z>.045&&Math.abs(D.position.y)<.64&&(b>o?D.position.x>.05:D.position.x<-.05)){let k=D.clone();k.userData={},H.add(k)}}H.position.z=.16,u={leaf:H,next:b,elapsed:0,direction:b>o?-1:1}}function R(b){return e.mollie.found.has(b)?(a=b,l=!1,c=1,f=null,E(),!0):!1}function z(){a!==null?(a=null,f=null,E()):t()}function F(){o=-1,a=null,n.visible=!0,E()}function U(){u&&(u.leaf.traverse(b=>{b.userData.pageTurnOwned&&b.geometry?.dispose()}),n.remove(u.leaf),u=null),f=null,n.visible=!1}function L(b){var D;if(!b||u)return null;n.updateMatrixWorld(!0);let H=new Sn(b.position,b.direction,0,5).intersectObjects(r)[0],N=H?.object||null;return N!==d&&(d&&(d.userData.paint?.(!1),d.userData.restScale&&d.scale.copy(d.userData.restScale)),d=N,d&&(d.userData.paint?.(!0),(D=d.userData).restScale??(D.restScale=d.scale.clone()),d.scale.copy(d.userData.restScale).multiplyScalar(1.025))),H?{point:H.point,action:H.object.userData.action}:null}function X(b,H,N){if(u){u.elapsed+=b;let D=Math.min(1,u.elapsed/.48);u.leaf.rotation.y=u.direction*Math.PI*(D*D*(3-2*D)),D>=1&&(n.remove(u.leaf),u.leaf.traverse(k=>{k.userData.pageTurnOwned&&k.geometry?.dispose()}),o=u.next,u=null,E())}if(h)if(H&&N){f||(f={hand:N.clone().invert(),start:h.quaternion.clone()});let D=N.clone().multiply(f.hand),k=i.getWorldQuaternion(new be);h.quaternion.copy(k.clone().invert().multiply(D).multiply(k).multiply(f.start))}else f?(f=null,p.copy(h.quaternion)):h.quaternion.slerp(p,1-Math.exp(-10*b))}return{root:n,open:F,close:U,point:L,tick:X,back:z,inspect:R,change:A,get page(){return o},get inspected(){return a},get card(){return h},get turning(){return!!u}}}var gt={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},Pp=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function Ip(s,e){let t=Math.hypot(s,e)*384/gt.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(s,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=Pp[Math.floor(n/(Math.PI/10))],r=t>=268?2:t>=163&&t<=184?3:1;return{score:i*r,label:`${r===3?"Triple ":r===2?"Double ":""}${i} \xB7 ${i*r}`}}function Lp(s){let e=s.at(-1);if(!e)return new y;let t=s.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new y}function Dp(s,e,t){let n=s.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function Up(s,e){if(s.x<=gt.x||e.x>gt.x)return null;let t=(gt.x-s.x)/(e.x-s.x),n=s.clone().lerp(e,t);return Math.hypot(n.y-gt.y,n.z-gt.z)<=.47?{point:n,...Ip(-(n.z-gt.z),n.y-gt.y)}:null}function Ec(s,e,t){let n=new pe;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new Se({color:12044498,metalness:.75,roughness:.28}),r=new Se({color:2112336,roughness:.45}),o=new Se({color:16764759,side:tt,roughness:.8}),a=[];function l(Y,w){return a.push(Y),new me(Y,w)}function c(){let Y=new pe;Y.name="3D dart";let w=l(new tn(.004,.035,8),i);w.rotation.x=-Math.PI/2,w.position.z=.0175,Y.add(w);let O=l(new ze(.006,.007,.045,10),i);O.rotation.x=Math.PI/2,O.position.z=.0575,Y.add(O);for(let K=0;K<5;K++){let Z=l(new At(.007,8e-4,4,10),r);Z.position.z=.043+K*.007,Y.add(Z)}let q=l(new ze(.003,.003,.06,8),r);q.rotation.x=Math.PI/2,q.position.z=.11,Y.add(q);for(let K=0;K<2;K++){let Z=l(new Me(.044,.001,.05),o);Z.rotation.z=K*Math.PI/2,Z.position.z=.15,Y.add(Z)}return Y}let u=c();n.add(u),u.visible=!1;let h=document.createElement("canvas");h.width=1024,h.height=640;let f=h.getContext("2d"),d=new Ie(h);d.colorSpace=Ae;let p=new me(new Le(.95,.594),new ve({map:d}));p.name="Wall-mounted darts scoreboard",p.position.set(gt.x+.05,1.8,gt.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let g=new me(new Me(1.01,.654,.035),new Se({color:1517105,roughness:.7}));g.name="Darts scoreboard frame",g.position.copy(p.position),g.position.x-=.022,g.rotation.copy(p.rotation),n.add(g);let M=It("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);M.position.set(gt.x+.065,2.43,gt.z),M.rotation.y=Math.PI/2,n.add(M);let _=Xn(.9);_.position.set(gt.x+.55,2.75,gt.z),n.add(_);let C=s.colliders.map(Y=>new qe(new y(Y.min.x,Y.min.y,Y.min.z),new y(Y.max.x,Y.max.y,Y.max.z))),v=!1,m=!1,x=null,I=[],S=0,T=!1,E=!1,P=!1,A=0,R=0,z="Hold trigger, throw, release.",F=0,U=[];try{F=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function L(){jl(f,{total:A,throws:R,best:F,last:z}),d.needsUpdate=!0}function X(Y=!1){m=!1,I=[],u.visible=!1,x&&!Y&&(n.remove(x.mesh),x=null),T=!0,E=!1}function b(){X();for(let Y of U)n.remove(Y);U=[],R=A=0,z="Nine darts. Make them count!",L()}function H(){let w=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([O,q])=>!s.blocked(O,q,0));return!w||!s.xrTeleport(w[0],0,w[1])?!1:(s.xrFace?.(Math.PI/2),n.visible=v=!0,b(),!0)}function N(){X(),v=!1,n.visible=!1}function D(Y,w){let O=x;if(O){if(O.mesh.position.copy(w),U.push(O.mesh),x=null,R++,A+=Y.score,z=Y.label,t(Y.score>0?.6:.12),R===9&&A>F){F=A;try{localStorage.setItem("tfj-vr-darts-best-v1",String(F))}catch{}}L()}}function k(Y,w){let O=u.clone();O.visible=!0,O.position.copy(Y),O.quaternion.setFromUnitVectors(new y(0,0,-1),w.clone().normalize()),n.add(O),x={mesh:O,position:Y.clone(),velocity:w.clone(),age:0},u.visible=!1,m=!1,I=[]}function W(Y,w,O,q,K=!1){if(S+=Y,!!v){if(K){m&&X();return}if(O||(E=!0),q&&!P&&R===9&&b(),P=q,w&&O&&!T&&E&&!x&&R<9){let Z=s.stats();Z.x<gt.ocheX-.04||Z.x>gt.ocheX+1.6||Math.abs(Z.z-gt.z)>1||Z.y>.15?(z="Stand behind the yellow line.",L()):(m=!0,I=[],u.visible=!0,t(.12))}if(m&&w&&(u.position.copy(w.position).addScaledVector(w.direction,.07),u.quaternion.setFromUnitVectors(new y(0,0,-1),w.direction),I.push({time:S,position:w.position.clone()}),I=I.filter(Z=>S-Z.time<.15),!O&&T)){let Z=Lp(I);Z.length()<.6?(m=!1,u.visible=!1,z="Swing your hand before releasing.",L()):k(u.position,Z)}if(m&&!w&&X(),T=O,x){let Z=Math.max(1,Math.ceil(Y/.004166666666666667)),B=Y/Z;for(let ne=0;ne<Z&&x;ne++){let J=x,ie=Dp(J.position,J.velocity,B),G=Up(J.position,ie.position),ee=ie.position.clone().sub(J.position),Q=ee.length(),oe=new et(J.position,ee.clone().normalize()),le=new y,ye=null,de=Q+1e-8;for(let we of C){if(we.containsPoint(J.position)){ye=J.position.clone(),de=0;break}if(oe.intersectBox(we,le)){let _e=le.distanceTo(J.position);_e<=de&&(de=_e,ye=le.clone())}}if(G&&(!ye||G.point.distanceTo(J.position)<=de)){D(G,G.point);break}if(ye){D({score:0,label:"Miss \xB7 hit scenery"},ye);break}if(ie.position.y<=.025){let we=Ve.clamp((J.position.y-.025)/(J.position.y-ie.position.y),0,1),_e=J.position.clone().lerp(ie.position,we);J.mesh.quaternion.setFromUnitVectors(new y(0,0,-1),new y(J.velocity.x,0,J.velocity.z).normalize()),D({score:0,label:"Miss \xB7 floor"},_e);break}if(J.position.copy(ie.position),J.velocity.copy(ie.velocity),J.mesh.position.copy(J.position),J.mesh.quaternion.slerp(new be().setFromUnitVectors(new y(0,0,-1),J.velocity.clone().normalize()),1-Math.exp(-18*B)),J.age+=B,J.age>4){D({score:0,label:"Miss"},J.position);break}}}}}return{root:n,get best(){return F},start:H,stop:N,cancel:X,reset:b,update:W,launch:k,get active(){return v},get held(){return m},get flight(){return x},get total(){return A},get throws(){return R},get last(){return z},get resting(){return U}}}function Cc(s,e,t,n,i=.35){let r=e.clone().sub(s),o=r.length();if(o<1e-7)return null;let a=new et(s,r.multiplyScalar(1/o)),l=new y,c=o+1e-6,u=null;for(let h of t){let f=h.clone().expandByScalar(.045);if(f.containsPoint(s))return{type:"wall",point:s.clone(),distance:0};if(a.intersectBox(f,l)){let d=l.distanceTo(s);d<=c&&(c=d,u={type:"wall",point:l.clone(),distance:d})}}for(let h of n)if(a.intersectSphere(new Xt(h.position,i),l)){let f=l.distanceTo(s);f<c&&(c=f,u={type:"target",id:h.id,point:l.clone(),distance:f})}return u}function Np(s,e){let t=s.at(-1),n=s.find(r=>t.time-r.time<=.12&&t.time-r.time>=.045),i=new y;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new y(0,1.3,0)),i.clampLength(0,9)}function Rc(s){let e=s.worldScene,t=new pe;t.name="VR games",t.visible=!1,e.add(t);let n=ec(t),i=new pe;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let ae of[...s.mollie.balls.map(Te=>Te.ball),...s.mollie.cards,s.mollie.thrownBall])ae?.isObject3D&&i.attach(ae);let r=s.colliders.map(ae=>new qe(new y(ae.min.x,ae.min.y,ae.min.z),new y(ae.max.x,ae.max.y,ae.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new Ie(o);l.colorSpace=Ae;let c=new pe;t.add(c);let u=new me(new Le(1.6,1.2),new ve({map:l,side:tt}));c.add(u),c.visible=!1;let h=new me(new Me(1.64,1.24,.035),new ve({color:3561833}));h.position.z=-.025,c.add(h);let f=new pe;c.add(f);let d=new wt(new Oe().setFromPoints([new y,new y(0,0,-1)]),new Tt({color:16769946}));d.visible=!1,t.add(d);let p=new me(new Xe(.012,8,6),new ve({color:16769946}));p.visible=!1,t.add(p);let g=s.mollie.balls[0].ball.clone();g.scale.setScalar(.43),g.visible=!1,t.add(g);let M=Xr();M.group.visible=!1,t.add(M.group);let _=document.createElement("canvas");_.width=768,_.height=192;let C=_.getContext("2d"),v=new Ie(_);v.colorSpace=Ae;let m=new me(new Le(.95,.2375),new ve({map:v,transparent:!0,depthTest:!1,depthWrite:!1}));m.name="Adventure notification",m.renderOrder=1e3,t.add(m),m.visible=!1;let x="explore",I="menu",S=[],T=null,E=null,P=0,A=!1,R=null,z=!1,F=null,U=[],L=0,X=!1,b=!1,H=!1,N=!0,D=[],k=0,W=0,Y="Welcome, Mollie!",w="",O=0,q=!1,K=null,Z=0,B=0;try{B=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let ne=(ae,Te=.3)=>{try{ae?.gamepad?.hapticActuators?.[0]?.pulse(Te,70)?.catch?.(()=>{})}catch{}},J=Ac(c,s,()=>{I="menu",J.close(),u.visible=h.visible=!0,N=!0,ce()}),ie=Ec(s,t,ae=>ne(R?.right,ae)),G=Tc(s,t,ae=>ne(R?.right,ae)),ee=wc(s,t),Q=vc(s,t,Ut,ae=>ne(R?.right,ae)),oe=oc(s,t,Ut,ae=>ne(R?.right,ae)),le=xc(s,t,Ut,ae=>ne(R?.right,ae)),ye=0,de=!0;try{de=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function we(ae){de=!!ae;try{localStorage.setItem("tfj-companion-enabled",String(de))}catch{}de?ee.summon():(x==="friend"&&ti(),ee.group.visible=!1),ce()}let _e=bc(s,t,Ut,ae=>ne(R?.right,ae),ge),$=Sc(s,t,ee,Ut,ae=>ne(R?.right,ae)),V=_c(s,e,()=>({bowling:_e.best||null,darts:ie.best||null,golf:oe.best,rc:le.bestLapMs,basketball:$.best||null,planes:Q.best||null,memory:G.records,hide:B}),Ut),se=!1,ue=!1;function te(){if(x==="jigglypuff"){Y="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",ft();return}ee.summon(),st()}function fe(){ei(),I="album",u.visible=h.visible=!1,f.clear(),J.open(),N=!0}function Pe(){try{K??(K=new(window.AudioContext||window.webkitAudioContext)),K.resume()?.catch(()=>{})}catch{}}function ge(ae){if(!(!K||K.state!=="running"))try{let Te=Math.floor(K.sampleRate*.07),Ge=K.createBuffer(1,Te,K.sampleRate),lt=Ge.getChannelData(0);for(let Ce=0;Ce<Te;Ce++)lt[Ce]=(Math.random()*2-1)*Math.exp(-Ce/Te*5);for(let Ce=0;Ce<(ae?12:7);Ce++){let xt=K.createBufferSource(),rt=K.createGain(),dn=K.createBiquadFilter();xt.buffer=Ge,dn.type="highpass",dn.frequency.value=650,rt.gain.value=.055+Ce%3*.012,xt.connect(dn),dn.connect(rt),rt.connect(K.destination),xt.start(K.currentTime+Ce*.095+Ce%2*.025),xt.onended=()=>{xt.disconnect(),dn.disconnect(),rt.disconnect()}}}catch{}}function De(){if(!K||K.state!=="running")return;let ae=M.group.position;try{let Te=K.createPanner();Te.panningModel="HRTF",Te.distanceModel="inverse",Te.refDistance=2,Te.maxDistance=25,Te.positionX.value=ae.x,Te.positionY.value=ae.y+.6,Te.positionZ.value=ae.z,Te.connect(K.destination),[523.25,659.25,587.33].forEach((Ge,lt)=>{let Ce=K.createOscillator(),xt=K.createGain(),rt=K.currentTime+lt*.18;Ce.type="sine",Ce.frequency.value=Ge,xt.gain.setValueAtTime(0,rt),xt.gain.linearRampToValueAtTime(.09,rt+.025),xt.gain.exponentialRampToValueAtTime(.001,rt+.17),Ce.connect(xt),xt.connect(Te),Ce.start(rt),Ce.stop(rt+.18),Ce.onended=()=>{Ce.disconnect(),xt.disconnect()}}),setTimeout(()=>Te.disconnect(),1200)}catch{}}function Ne(ae,Te,Ge,lt=32,Ce="#fff"){a.font=`${lt>=40?"bold ":""}${lt}px Arial`,a.fillStyle=Ce,a.fillText(ae,Te,Ge)}function Ee(ae,Te,Ge,lt,Ce){S.push({label:ae,x:Te,y:Ge,w:lt,h:72,action:Ce}),Zl(a,ae,Te,Ge,lt,T===ae)}function ce(){I!=="album"&&(S=[],$l(a,Ga()),ye===0?(Ee("Pok\xE9mon throwing hunt",44,196,455,()=>$t("hunt")),Ee("Jigglypuff hide-and-seek",519,196,461,()=>$t("jigglypuff")),Ee("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>$t("darts")),Ee("Memory match \xB7 staff-room table",519,280,461,()=>$t("memory")),Ee(`Open the card album \xB7 ${s.mollie.found.size} / 18`,44,364,455,fe),Ee("Play with Jigglypuff",519,364,461,()=>$t("friend")),Ee("Pok\xE9 Ball basketball",44,448,455,()=>$t("basketball")),Ee("Warehouse bowling",519,448,461,()=>$t("bowling"))):(Ee("Paper-plane challenge",44,196,455,()=>$t("planes")),Ee("RC car racing",519,196,461,()=>$t("rc")),Ee("Warehouse mini-golf",44,280,936,()=>$t("golf")),Ee("Arcade wall of fame",44,364,455,Vi),Ee("Back to exploring",519,364,461,()=>{ti(),st()}),Ee(de?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>we(!de))),Ee("Resume",44,548,445,st),Ee(ye===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{ye=1-ye,ce()}),Jl(a,x==="rc"),l.needsUpdate=!0)}function Ye(){f.clear()}function Ze(){if(!R){q=!0;return}q=!1;let ae=R.forward.clone();ae.y=0,ae.normalize(),c.position.copy(R.eye).addScaledVector(ae,1.9),c.position.y=Math.max(R.eye.y-.1,s.stats().y+.85),c.rotation.set(0,Math.atan2(-ae.x,-ae.z),0)}function ft(){ye=0,O=0,m.visible=!1,ei(),J.close(),u.visible=h.visible=!0,I="menu",Ye(),c.visible=!0,N=!0,T=null,Ze(),ce()}function st(){J.close(),I="menu",u.visible=h.visible=!0,c.visible=!1,d.visible=p.visible=!1,N=!0,T=null}function Vi(){ti(),st();let ae=V.visit();return ae&&(x="fame",ue=!0),ae}function ei(ae=!1){le.cancel(),oe.cancel(),Q.cancel(),_e.cancel(),$.cancel(),ie.cancel(ae),z=!1,F=null,U=[],g.visible=!1}function ti(){n.update("explore",null),i.visible=!0,le.stop(),oe.stop(),Q.stop(),_e.stop(),$.stop(),O=0,m.visible=!1,G.stop(),ie.stop(),x="explore",M.group.visible=!1,W=0,ei(),Y="Choose an adventure whenever you like."}function ka(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([Te,Ge,lt])=>{for(let[Ce,xt]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let rt=new y(Te+Ce,0,Ge+xt);if(!s.blocked(rt.x,rt.z,0)&&s.groundAt(rt.x,rt.z,.1)===0&&s.mollie.balls.every(dn=>dn.ball.position.distanceTo(rt)>1.3))return[{point:rt,clue:lt}]}return[]})}function Va(){M.group.position.copy(D[k].point),M.group.visible=!0,Z=L+1,Y=`Try ${D[k].clue}.`,Ut(Y)}function $t(ae){if(ti(),x=ae,x==="rc"){if(!le.start()){x="explore",Y="No clear warehouse circuit available.",ce();return}i.visible=!1,st();return}if(x==="golf"){if(!oe.start()){x="explore",Y="No clear warehouse green available.",ce();return}i.visible=!1,st();return}if(x==="friend"&&!de&&we(!0),x==="planes"){if(!Q.start()){x="explore",Y="The plane course is blocked. Try again.",ce();return}st();return}if(x==="bowling"){if(!_e.start()){x="explore",Y="The warehouse lane is blocked. Try again.",ce();return}i.visible=!1,st();return}if(x==="friend"||x==="basketball"){if(!$.start(x)){x="explore",Y="No clear basketball space available.",ce();return}st();return}if(x==="memory"){if(!G.start()){x="explore",Y="The table is not accessible. Try again.",ce();return}st();return}if(x==="darts"){if(!ie.start()){x="explore",Y="The throwing line is blocked. Try again.",ce();return}Y="Nine darts. Hold trigger, throw and release.",st();return}if(x==="hunt")s.xrGames.start(),Y="Hold trigger, swing gently and release!";else{D=ka();for(let Te=D.length-1;Te>0;Te--){let Ge=Math.floor(Math.random()*(Te+1));[D[Te],D[Ge]]=[D[Ge],D[Te]]}if(D=D.slice(0,3),k=0,D.length<3){x="explore",Y="No clear hiding spots. Please try again.",ce();return}Va()}st()}function Zc(){if(x!=="jigglypuff"||W||!M.group.visible)return!1;if(k++,M.group.visible=!1,ne(R?.right,.6),k===3){B++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(B))}catch{}x="explore",Y="You found Jigglypuff 3 times! Champion!",Ut(Y)}else W=1.5,Y=`Found ${k} / 3! Finding a new hiding spot\u2026`,Ut(Y);return!0}function Ga(){return x==="rc"?le.state.finished?"RC race complete \xB7 A to race again":`RC racing: lap ${le.state.completedLaps+1}/3 \xB7 ${le.state.elapsed.toFixed(1)}s \xB7 A rescues car`:x==="fame"?`Wall of fame: ${V.records.filter(ae=>ae.medal).length} / ${V.records.length} medals earned`:x==="golf"?oe.complete?`Mini-golf complete: ${oe.total} strokes \xB7 Best ${oe.best}`:`Mini-golf: hole ${oe.hole+1}/6 \xB7 ${oe.strokes} strokes \xB7 Par ${oe.layout.par}`:x==="planes"?`Paper planes: ${Q.score} points \xB7 ${Q.throws}/5 throws \xB7 Longest ${Q.longest.toFixed(1)} m`:x==="bowling"?`Bowling: ${_e.total} / 100 pins \xB7 ${_e.frame===10?"Complete":`Frame ${_e.frame+1} \xB7 Bowl ${_e.roll+1}`}`:x==="basketball"?`Basketball: ${$.score} baskets \xB7 ${$.shots}/10 throws`:x==="friend"?`Berries: ${$.feeds} \xB7 High-fives: ${$.fives} \xB7 Offer a berry or touch her raised hand`:x==="hunt"?`Pok\xE9mon: ${s.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:x==="jigglypuff"?W?Y:`Found ${k}/3 \xB7 Try ${D[k].clue}`:x==="darts"?`Darts: ${ie.total} points \xB7 ${ie.throws}/9 darts \xB7 ${ie.last}`:x==="memory"?`Memory: ${G.matched.size/2}/${G.deck.length/2} pairs \xB7 ${G.moves} turns`:Y}function Ut(ae){w=ae,Kl(C,ae),v.needsUpdate=!0,O=3}function $c(ae){if(m.visible=!c.visible&&O>0,!m.visible)return;let Te=ae.headOrientation||new be().setFromUnitVectors(new y(0,0,-1),ae.forward.clone().normalize());m.position.set(0,-.28,-2.1).applyQuaternion(Te).add(ae.eye),m.quaternion.copy(Te),m.material.opacity=Math.min(1,O/.5),O=Math.max(0,O-ae.dt)}function Jc(ae){return!ae||ae.visible===!1?null:{position:ae.getWorldPosition(new y),direction:new y(0,0,-1).applyQuaternion(ae.getWorldQuaternion(new be))}}function Kc(ae){if(!ae)return null;if(I==="album"){let Ce=J.point(ae);return d.geometry.setFromPoints([ae.position,Ce?Ce.point:ae.position.clone().addScaledVector(ae.direction,2)]),d.visible=!0,p.visible=!!Ce,Ce&&p.position.copy(Ce.point),Ce?{...Ce,label:"album"}:null}c.updateMatrixWorld(!0);let Te=new Sn(ae.position,ae.direction,0,4).intersectObject(u)[0];if(d.geometry.setFromPoints([ae.position,Te?Te.point:ae.position.clone().addScaledVector(ae.direction,2)]),d.visible=!0,p.visible=!!Te,Te&&p.position.copy(Te.point),!Te)return null;let Ge=Te.uv.x*1024,lt=(1-Te.uv.y)*768;return S.find(Ce=>Ge>=Ce.x&&Ge<=Ce.x+Ce.w&&lt>=Ce.y&&lt<=Ce.y+Ce.h)}function jc(ae){if(!ae||!M.group.visible)return!1;let Te=M.group.position.clone().add(new y(0,.58,0)),Ge=ae.position.clone().addScaledVector(ae.direction,4);return Cc(ae.position,Ge,r,[{id:0,position:Te}],.5)?.type==="target"&&ae.position.distanceTo(Te)<3.3}function Qc(ae){R=ae,q&&Ze();let{dt:Te,eye:Ge,forward:lt,right:Ce,left:xt,controller:rt}=ae,dn=ie.throws,iu=G.complete;L+=Te;let Cn=!!Ce?.gamepad?.buttons[0]?.pressed,Ha=!!xt?.gamepad?.buttons[5]?.pressed,Wa=!!Ce?.gamepad?.buttons[5]?.pressed,Jt=Jc(rt);if(Ha&&!b&&(c.visible?st():ft()),Wa&&!H&&(c.visible&&I==="album"?(J.back(),N=!0):c.visible?st():(ti(),ft())),b=Ha,H=Wa,Cn||(N=!1),c.visible){I==="album"&&J.tick(Te,!!Ce?.gamepad?.buttons[1]?.pressed,rt?.getWorldQuaternion(new be));let bt=Kc(Jt);T=bt?.label||null,T!==E&&(E=T,ce()),Cn&&!X&&!N&&bt&&(ne(Ce),bt.action(),N=!0),m.visible=!1}else d.visible=p.visible=!1,x==="darts"&&ie.update(Te,N?null:Jt,!N&&Cn,!!Ce?.gamepad?.buttons[4]?.pressed),x==="hunt"&&Jt&&(Cn&&!X&&!N&&!F&&(z=!0,U=[],g.visible=!0,ne(Ce,.15)),z&&(g.position.copy(Jt.position).addScaledVector(Jt.direction,.09),U.push({time:L,position:Jt.position.clone()}),U=U.filter(bt=>L-bt.time<.16),!Cn&&X&&(F={position:g.position.clone(),velocity:Np(U,Jt.direction),life:0},z=!1,U=[],ne(Ce,.2)))),x==="jigglypuff"&&(M.animate(Te,!1),W?(W-=Te,W<=0&&(W=0,Va())):M.group.visible&&(M.group.rotation.y=Math.atan2(Ge.x-M.group.position.x,Ge.z-M.group.position.z),jc(Jt)&&(d.geometry.setFromPoints([Jt.position,M.group.position.clone().add(new y(0,.6,0))]),d.visible=!0,Cn&&!X&&!N&&Zc()),L>Z&&(De(),Z=L+6)));if(x==="memory"){G.tick(Te,c.visible);let bt=!!Ce?.gamepad?.buttons[4]?.pressed;if(bt&&!se&&G.complete&&!c.visible&&G.reset(),se=bt,!c.visible){let Pt=G.point(Jt);Pt&&(d.geometry.setFromPoints([Jt.position,Pt.point]),d.visible=!0,p.position.copy(Pt.point),p.visible=!0,Cn&&!X&&!N&&Pt.action())}}if(n.update(x,x==="rc"?le.origin:x==="golf"?oe.origin:x==="bowling"?_e.origin:x==="planes"?Q.origin:x==="basketball"?$.origin:null),i.visible=!["bowling","golf","rc"].includes(x),x==="fame"&&!ue&&V.site&&Math.hypot(Ge.x-V.site.view.x,Ge.z-V.site.view.z)>7&&(x="explore"),ue=!1,ee.tick(Te,lt,!de||["fame","jigglypuff","darts","basketball","bowling","planes","memory","golf","rc"].includes(x),x==="friend"),$.tick(ae,c.visible),_e.tick(ae,c.visible),Q.tick(ae,c.visible),oe.tick(ae,c.visible),le.tick(ae,c.visible),V.tick(Te),!rt&&z&&ei(),F&&!c.visible){let bt=Math.max(1,Math.ceil(Te/.012)),Pt=Te/bt;for(let Is=0;Is<bt&&F;Is++){let ni=F,Gi=ni.position.clone().addScaledVector(ni.velocity,Pt);Gi.y-=4.9*Pt*Pt;let su=s.mollie.balls.flatMap((ru,Xa)=>s.mollie.found.has(Xa)?[]:[{id:Xa,position:ru.ball.position}]),Ls=Cc(ni.position,Gi,r,su);if(Ls){Ls.type==="target"&&s.xrGames.collect(Ls.id)&&(Y=`${s.xrGames.names[Ls.id]} found! ${s.mollie.found.size}/18 cards.`,Ut(Y),ne(Ce,.8),s.mollie.found.size===18&&(Y="All 18 cards found! Brilliant, Mollie!",Ut(Y))),ei();break}ni.position.copy(Gi),ni.velocity.y-=9.8*Pt,ni.life+=Pt,g.position.copy(Gi),g.rotation.x+=Pt*7,(Gi.y<0||ni.life>3)&&ei()}}if(K?.listener)try{let bt=K.listener;for(let[Pt,Is]of Object.entries({positionX:Ge.x,positionY:Ge.y,positionZ:Ge.z,forwardX:lt.x,forwardY:lt.y,forwardZ:lt.z,upX:0,upY:1,upZ:0}))bt[Pt]&&(bt[Pt].value=Is)}catch{}return x==="darts"&&dn<9&&ie.throws===9&&Ut(`Round complete! ${ie.total} points. A to play again.`),x==="memory"&&!iu&&G.complete&&Ut(`All pairs matched in ${G.moves} turns!`),$c(ae),X=Cn,{consumeTrigger:c.visible||x!=="explore"||N,blockTeleport:oe.held||x==="rc",blockMovement:x==="rc"||c.visible||z||ie.held||$.held||_e.held||Q.held||oe.held}}function eu(){ee.summon(),t.visible=!0,x="explore",X=b=H=!1,N=!0,Y="Choose a game, or resume exploring.",ft()}function tu(){ti(),st(),m.visible=!1,t.visible=!1,R=null,K?.suspend()?.catch(()=>{})}function nu(){ei(!0),X=!0,N=!0}return{pokemonLayer:i,setCompanionEnabled:we,get companionEnabled(){return de},fame:V,visitFame:Vi,rc:le,golf:oe,planes:Q,bowling:_e,play:$,memory:G,companion:ee,progress:Ga,callCompanion:te,album:J,darts:ie,showAlbum:fe,tick:Qc,begin:eu,end:tu,enableAudio:Pe,open:ft,close:st,start:$t,stop:ti,interrupt:nu,chooseSpots:ka,get mode(){return x},get driving(){return x==="rc"&&le.active},get menuOpen(){return c.visible},get found(){return k},get route(){return D},get held(){return z||ie.held||$.held||_e.held||Q.held||oe.held},get flight(){return F},get board(){return c},get root(){return t},puff:M.group,ball:g}}var Ct={};function Yr(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Fp(s){let e=2166136261;for(let t of String(s))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function Bp(s){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=Yr(813+s*431),i=[["#456840","#66884e","#355b38","#789353"],["#3e613c","#587747","#304f34","#70884e"],["#516d3e","#738c4b","#405c37","#8b9b56"]][s];t.clearRect(0,0,256,256),t.lineCap="round",t.lineJoin="round";function r(a,l,c,u,h){t.save(),t.translate(a,l),t.rotate(u),t.fillStyle=i[h%4],t.beginPath(),t.moveTo(0,-c),t.bezierCurveTo(c*.74,-c*.5,c*.82,c*.3,0,c*.83),t.bezierCurveTo(-c*.6,c*.24,-c*.68,-c*.58,0,-c),t.fill(),t.strokeStyle=h%2?"rgba(186,194,129,.26)":"rgba(166,184,115,.22)",t.lineWidth=.7,t.beginPath(),t.moveTo(0,c*.67),t.lineTo(0,-c*.74),t.stroke(),t.restore()}for(let a=0;a<5;a++){let l=103+n()*34,c=218+n()*20,u=38+a*41+(n()-.5)*22,h=35+n()*53;t.strokeStyle="rgba(66,61,41,.92)",t.lineWidth=1.5+n(),t.beginPath(),t.moveTo(l,c),t.quadraticCurveTo((l+u)*.5+(n()-.5)*20,(c+h)*.5,u,h),t.stroke();for(let f=0;f<8;f++){let d=.14+f*.103,p=l+(u-l)*d,g=c+(h-c)*d,M=f%2?1:-1,_=7+n()*11,C=9+n()*8;t.strokeStyle="rgba(82,76,43,.72)",t.lineWidth=1,t.beginPath(),t.moveTo(p,g),t.lineTo(p+M*_,g-3),t.stroke(),r(p+M*_,g-7,C,M*(.4+n()*.55),f+a+s)}}let o=new Ie(e);return o.colorSpace=Ae,o.anisotropy=2,o}function Op(){let s=document.createElement("canvas");s.width=128,s.height=256;let e=s.getContext("2d"),t=Yr(731);e.fillStyle="#726f59",e.fillRect(0,0,128,256);for(let i=0;i<125;i++){let r=t()*128,o=t()*256,a=14+t()*116;e.strokeStyle=i%3?"rgba(33,39,30,.34)":"rgba(174,169,137,.26)",e.lineWidth=.6+t()*2.5,e.beginPath(),e.moveTo(r,o),e.bezierCurveTo(r+(t()-.5)*7,o+a*.3,r+(t()-.5)*8,o+a*.65,r+(t()-.5)*7,o+a),e.stroke()}let n=new Ie(s);return n.colorSpace=Ae,n.wrapS=n.wrapT=Wt,n.repeat.set(1,2),n}function zp(s){let e=document.createElement("canvas"),t=document.createElement("canvas");e.width=e.height=t.width=t.height=512;let n=e.getContext("2d"),i=t.getContext("2d"),r=Yr(9147+s*319),o=[["#4e7146","#3a5b38","#789155","#597e48"],["#486843","#345536","#738c53","#58774a"],["#577342","#405e37","#8a995b","#66814a"]][s];n.fillStyle=o[0],n.fillRect(0,0,512,512),i.fillStyle="#777777",i.fillRect(0,0,512,512);for(let c=0;c<180;c++){let u=r()*512,h=r()*512,f=10+r()*36;n.fillStyle=c%2?"rgba(21,45,28,.14)":"rgba(172,179,118,.12)",n.beginPath(),n.ellipse(u,h,f,f*.7,r()*Math.PI,0,Math.PI*2),n.fill()}for(let c=0;c<1450;c++){let u=r()*512,h=r()*512,f=3+r()*5,d=r()*Math.PI*2;for(let[p,g]of[[n,o[c%4]],[i,c%2?"#9a9a9a":"#555555"]])p.save(),p.translate(u,h),p.rotate(d),p.fillStyle=g,p.beginPath(),p.moveTo(0,-f),p.bezierCurveTo(f*.7,-f*.4,f*.8,f*.3,0,f*.85),p.bezierCurveTo(-f*.6,f*.2,-f*.6,-f*.5,0,-f),p.fill(),p.restore()}let a=new Ie(e),l=new Ie(t);a.colorSpace=Ae;for(let c of[a,l])c.wrapS=c.wrapT=Wt,c.repeat.set(3,2),c.anisotropy=2;return{texture:a,height:l}}function kp(){if(!Ct.trunk){Ct.trunk=new ze(.38,1,1,8,2,!1);let s=Ct.trunk.attributes.position;for(let n=0;n<s.count;n++){let i=s.getX(n),r=s.getY(n),o=s.getZ(n),a=Math.atan2(o,i),l=1+.045*Math.sin(a*5+r*9)+.025*Math.cos(a*3-r*11);s.setXYZ(n,i*l,r,o*l)}Ct.trunk.computeVertexNormals(),Ct.branch=new ze(.24,1,1,5,1,!0),Ct.leaf=new Le(1,1),Ct.crown=new Xe(1,8,5);let e=Ct.crown.attributes.position;for(let n=0;n<e.count;n++){let i=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.atan2(o,i),l=Math.sqrt(i*i+o*o),c=.94+.085*Math.sin(a*3+r*2)*l+.045*Math.cos(a*5-r*4)*l;e.setXYZ(n,i*c,r*(1+.04*Math.sin(a*3)*l),o*c)}Ct.crown.computeVertexNormals(),Ct.crown.computeBoundingBox(),Ct.crown.computeBoundingSphere();let t=Op();Ct.wood=new Se({map:t,color:16777215,roughness:1,metalness:0}),Ct.leaves=[0,1,2].map(n=>new Se({map:Bp(n),color:16777215,alphaTest:.38,transparent:!1,side:tt,roughness:.96,metalness:0})),Ct.crowns=[0,1,2].map(n=>{let{texture:i,height:r}=zp(n);return new Se({map:i,bumpMap:r,bumpScale:.035,color:16777215,transparent:!1,roughness:.96,metalness:0})})}return Ct}var Vp=`
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
`,Gp=`
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
`;function Na(s,e,t){let n=s.clone();return n.onBeforeCompile=i=>{i.vertexShader.includes("#include <begin_vertex>")&&(i.uniforms.tfjWindTime=e,i.vertexShader=`#define TFJ_LEAF_FLUTTER ${t.toFixed(2)}
`+Vp+i.vertexShader.replace("#include <begin_vertex>",Gp))},n.customProgramCacheKey=()=>`tfj-tree-wind-v1-${t}`,n}function qr(s,e,t,n,i,r=!1){if(!i.length)return null;if(r){t=t.clone();let l=new Float32Array(i.length*2);for(let c=0;c<i.length;c++)l.set(i[c].wind,c*2);t.setAttribute("tfjTreeWind",new zn(l,2))}let o=new pt(t,n,i.length);o.name=e,o.castShadow=o.receiveShadow=!1;let a=new We;for(let l=0;l<i.length;l++){let c=i[l];a.position.copy(c.position),a.quaternion.copy(c.quaternion),a.scale.copy(c.scale),a.updateMatrix(),o.setMatrixAt(l,a.matrix),o.setColorAt(l,c.color)}if(o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,o.computeBoundingBox(),o.computeBoundingSphere(),r){let l=i.reduce((u,h)=>Math.max(u,h.wind[0]),0),c=new y(l*.016,0,l*.0075);o.boundingBox.expandByVector(c),o.boundingSphere.radius+=c.length(),o.userData.windPadding=c}return s.add(o),o}function Pc(s,e=[]){let t=new pe;t.name="Natural exterior trees",s.add(t);let n=kp(),i=[],r=[],o=[[],[],[]],a=[[],[],[]],l=new y(0,1,0),c=new y,u=[],h={value:0},f=0,d,p=e.filter(m=>Number.isFinite(m?.x)&&Number.isFinite(m?.z)).length,g=p>64,M=g?15:22,_=4,C=Math.max(8,Math.min(g?96:144,Math.floor((99e3/Math.max(1,p)-n.trunk.index.count/3-M*n.branch.index.count/3-_*n.crown.index.count/3)/2)));function v(m,x,I,S,T){let E=I.clone().sub(x);m.push({position:x.clone().add(I).multiplyScalar(.5),quaternion:new be().setFromUnitVectors(l,E.clone().normalize()),scale:new y(S,E.length(),S),color:T,wind:d})}for(let m=0;m<e.length;m++){let x=e[m];if(!Number.isFinite(x?.x)||!Number.isFinite(x?.z))continue;let I=Fp(x.seed??`${x.x},${x.z}`),S=Yr(I),T=Number.isFinite(x.height)&&x.height>0?x.height:6,E=Number.isFinite(x.width)&&x.width>0?x.width:4,P=x.x,A=x.z,R=(S()-.5)*T*.075,z=(S()-.5)*T*.065,F=T*(.027+S()*.006),U=new Be().setRGB(.72+S()*.16,.73+S()*.12,.69+S()*.13);d=[T,I/4294967296*Math.PI*2];let L=new y(P,0,A),X=new y(P+R,T*.56,A+z),b=new y(P+R*.95,T*.84,A+z*.95);v(i,L,X,F,U),v(r,X,b,F*.4,U);let H=g?2:3;for(let w=0;w<H;w++){let O=w*Math.PI*2/H+S()*.5,q=F*(1.8+S());v(r,new y(P,F*1.3,A),new y(P+Math.cos(O)*q,-.025,A+Math.sin(O)*q),F*.48,U)}let N=[{center:b,radiusX:E*.2,radiusY:T*.135,radiusZ:E*.2}],D=S()*Math.PI*2,k=.8+S()*.26;for(let w=0;w<6;w++){let O=D+w*Math.PI*2/6+(S()-.5)*.45,q=E*(.21+S()*.09),K=new y(P+R*.75+Math.cos(O)*q*k,T*(.55+w%3*.085+S()*.055),A+z*.75+Math.sin(O)*q),Z=T*(.23+S()*.29),B=new y(P+R*Z/(T*.56),Z,A+z*Z/(T*.56));v(r,B,K,F*(.24+S()*.1),U);for(let ne of g?[w%2?1:-1]:[-1,1]){let J=O+ne*(.38+S()*.35),ie=K.clone().add(new y(Math.cos(J)*E*.095,T*(.045+S()*.075),Math.sin(J)*E*.095));v(r,B.clone().lerp(K,.66),ie,F*.1,U)}N.push({center:K,radiusX:E*(.16+S()*.07),radiusY:T*(.105+S()*.055),radiusZ:E*(.17+S()*.05)})}let W=.9+S()*.1;for(let w=0;w<_;w++){let O=w===0?N[0]:N[1+(w-1)*2],q=O.center.clone(),K=E*(w===0?.275:.245+S()*.025),Z=T*(w===0?.158:.16+S()*.015),B=E*(.235+S()*.035),ne=E*.5-Math.max(K,B)*1.04,J=q.x-P,ie=q.z-A,G=Math.hypot(J,ie);G>ne&&(q.x=P+J*ne/G,q.z=A+ie*ne/G),a[w%3].push({position:q,quaternion:new be().setFromEuler(new en((S()-.5)*.16,S()*Math.PI*2,(S()-.5)*.14)),scale:new y(K,Z,B),color:new Be().setRGB(W*(.94+S()*.06),W,W*(.92+S()*.06)),wind:d})}let Y=Math.max(8,C-Math.floor(S()*(g?12:20)));for(let w=0;w<Y;w++){let O=N[w%N.length],q=S()*Math.PI*2,K=S()*2-1,Z=Math.cbrt(S()),B=Math.sqrt(1-K*K),ne=O.center.clone().add(new y(Math.cos(q)*B*Z*O.radiusX,K*Z*O.radiusY,Math.sin(q)*B*Z*O.radiusZ)),J=E*((g?.115:.092)+S()*.035),ie=J*(.9+S()*.24),G=ne.x-P,ee=ne.z-A,Q=Math.hypot(G,ee),oe=Math.max(E*.1,E*.5-Math.hypot(J,ie)*.5);Q>oe&&(ne.x=P+G*oe/Q,ne.z=A+ee*oe/Q),ne.y=Ve.clamp(ne.y,T*.34,T*.965),ne.y=Math.min(ne.y,T-ie*.55),c.set(Math.cos(q),(.5-S())*1.35,Math.sin(q)).normalize();let le=new be().setFromUnitVectors(new y(0,0,1),c);le.multiply(new be().setFromAxisAngle(new y(0,0,1),(S()-.5)*1.4));let ye=W*(.83+S()*.17),de=new Be().setRGB(ye*(.94+S()*.06),ye,ye*(.91+S()*.08));o[w%3].push({position:ne,quaternion:le,scale:new y(J,ie,1),color:de,wind:d})}u.push({x:P,z:A,height:T,width:E,seed:I,leafCount:Y})}return qr(t,"Tapered bark trunks",n.trunk,n.wood,i),qr(t,"Forked branches and root flares",n.branch,Na(n.wood,h,0),r,!0),a.forEach((m,x)=>qr(t,"Opaque leaf crowns "+(x+1),n.crown,Na(n.crowns[x],h,.2),m,!0)),o.forEach((m,x)=>qr(t,"Leaf sprays "+(x+1),n.leaf,Na(n.leaves[x],h,1),m,!0)),t.userData.treeCount=i.length,t.userData.foliageInstances=o.reduce((m,x)=>m+x.length,0),t.userData.branchInstances=r.length,t.userData.crownInstances=a.reduce((m,x)=>m+x.length,0),t.userData.opaqueCrownCoverage=1,t.userData.triangles=i.length*n.trunk.index.count/3+r.length*n.branch.index.count/3+t.userData.crownInstances*n.crown.index.count/3+t.userData.foliageInstances*2,t.userData.drawCalls=t.children.length,t.userData.placements=u,t.update=m=>{!Number.isFinite(m)||m<=0||(f+=Math.min(m,.1),h.value=f%(Math.PI*20))},t.userData.wind={gpu:!0,animatedMeshes:t.children.filter(m=>m.geometry.hasAttribute("tfjTreeWind")).length,cpuMatrixUpdates:0,get elapsed(){return f},get shaderTime(){return h.value},maxHorizontalFraction:.016},t}var Rt=32,kt=26,at=6.5,Hp=26.35,Ic=[{name:"Neighbour workshop",left:-60,right:-24,door:-40,office:-53,ridge:.64,muted:!0},{name:"A&M Ceramics Ltd",left:-24,right:8,door:-3.5,office:-18,ridge:.82,brand:"am"},{name:"Neil Signs",left:8,right:40,door:19.5,office:34,ridge:.82,brand:"neil"},{name:"Neighbour warehouse",left:40,right:60,door:54,office:44,ridge:.55,muted:!0}];function Wp(s){let e=document.createElement("canvas");e.width=s==="neil"?1536:1792,e.height=256;let t=e.getContext("2d");if(t.fillStyle="#f7f7f2",t.fillRect(0,0,e.width,256),s==="neil"){let i="#852477",r="#b5d735";for(let[a,l,c]of[[105,44,i],[162,44,r],[219,44,i],[105,101,r],[162,101,i],[219,101,r],[162,158,r],[219,158,i]])t.save(),t.translate(a,l),t.rotate(Math.PI/4),t.fillStyle=c,t.fillRect(-19,-19,38,38),t.restore();t.textAlign="left",t.fillStyle=i,t.font="italic 600 158px Arial",t.fillText("neil",315,165);let o=t.measureText("neil").width;t.fillStyle=r,t.font="italic 700 149px Arial",t.fillText("signs",325+o,164),t.fillStyle="#626267",t.font="39px Arial",t.fillText("signmakers & vehicle graphics",322,225)}else t.fillStyle="#26789e",t.fillRect(38,51,113,122),t.fillStyle="#a8c9d7",t.fillRect(47,60,44,99),t.fillStyle="#f7f7f2",t.fillRect(98,60,43,45),t.fillStyle="#1a3456",t.textAlign="left",t.font="italic 700 108px Arial",t.fillText("A&M Ceramics Ltd",222,145,1330),t.font="36px Arial",t.fillText("UNIT 4  \xB7  KETTERER COURT",225,213),t.fillStyle="#146cba",t.fillRect(1612,0,180,256),t.fillStyle="#ffffff",t.textAlign="center",t.font="italic 700 175px Arial",t.fillText("4",1702,193);let n=new Ie(e);return n.colorSpace=Ae,n.anisotropy=4,new ve({map:n,color:16777215,side:tt})}function Lc(s){let e=new pe;e.name="Ketterer Court \xB7 opposite industrial units",s.add(e);let t=(S,T=.8,E=0)=>new Se({color:S,roughness:T,metalness:E}),n={cladding:t("#b0b7bc",.82,.18),muted:t("#97a4ae",.9,.12),ribs:t("#c0c5c7",.8,.17),blue:t("#095d9e",.6,.22),mutedBlue:t("#416880",.74,.2),door:t("#116caf",.7,.17),roof:t("#6a7b84",.83,.26),roofRib:t("#82909a",.79,.25),tan:t("#a99883",.96),dark:t("#263b49",.7,.28),steel:t("#697d87",.65,.5),glass:t("#28485c",.2,.52),glassReflection:t("#728c98",.36,.3),white:t("#eceade",.95),concrete:t("#8d9494",1),black:t("#273032",.95),lamp:new Se({color:"#e4e8df",emissive:"#bcc8c7",emissiveIntensity:.2,roughness:.5})},i=document.createElement("canvas");i.width=256,i.height=8;let r=i.getContext("2d"),o=r.createImageData(256,8);for(let S=0;S<8;S++)for(let T=0;T<256;T++){let E=Math.sin(T/8*Math.PI*2)*.6,P=Math.sqrt(1-E*E),A=(S*256+T)*4;o.data[A]=(E*.5+.5)*255,o.data[A+1]=128,o.data[A+2]=(P*.5+.5)*255,o.data[A+3]=255}r.putImageData(o,0,0);let a=new Ie(i);a.wrapS=a.wrapT=Wt,a.repeat.set(8,1),a.anisotropy=4;for(let S of[n.cladding,n.muted])S.normalMap=a,S.normalScale.set(.7,.7);let l=new Map,c=new We,u=new Me(1,1,1),h=[];function f(S,T,E,P,A,R,z,F=0,U=0,L=0){l.has(S)||l.set(S,[]),l.get(S).push({w:T,h:E,d:P,x:A,y:R,z,rx:F,ry:U,rz:L})}function d(S,T,E,P,A=P){let R=new y(...T),z=new y(...E),F=z.clone().sub(R),U=R.clone().add(z).multiplyScalar(.5),L=new be().setFromUnitVectors(new y(1,0,0),F.clone().normalize());l.has(S)||l.set(S,[]),l.get(S).push({w:F.length(),h:P,d:A,x:U.x,y:U.y,z:U.z,quaternion:L})}function p(S,T,E){let P=(S+T)/2;for(let A of[Rt-.006,Rt+kt+.006])A<Rt?h.push(S,at,A,P,at+E,A,T,at,A):h.push(T,at,A,P,at+E,A,S,at,A)}function g(S,T,E,P){let A=Rt-.2;f(n.dark,T+.37,E+.18,.13,S,E/2,A+.025),f(P,T,E,.08,S,E/2+.035,A-.06);for(let R=.15;R<E;R+=.2)f(n.blue,T-.035,.022,.026,S,R,A-.12);for(let R of[-1,1])f(n.blue,.18,E+.25,.24,S+R*(T/2+.11),(E+.25)/2,A-.08);f(n.blue,T+.58,.37,.42,S,E+.22,A-.1),f(n.dark,T,.07,.15,S,.055,A-.08),f(n.steel,.3,.055,.035,S,.93,A-.13),f(n.black,T+.6,.018,.24,S,.017,30.72);for(let R=0;R<18;R++)f(n.steel,.035,.011,.2,S-(T+.4)/2+(R+.5)*(T+.4)/18,.031,30.72)}function M(S,T,E){let P=Rt-.22,A=.78,R=2.9,z=S-T*.25;f(n.tan,T,.78,.16,S,.39,P),f(n.dark,T,R-A,.1,S,(R+A)/2,P-.035),f(n.glass,T-.12,R-A-.14,.033,S,(R+A)/2,P-.095),f(n.glassReflection,T-.17,.31,.01,S,2.52,P-.116);for(let F=0;F<=6;F++)f(E,.065,R-A+.06,.075,S-T/2+F*T/6,(R+A)/2,P-.135);for(let F of[A,1.82,R])f(E,T+.1,.077,.088,S,F,P-.145);f(n.dark,1.02,2.29,.055,z,1.145,P-.155),f(n.glass,.87,2.13,.014,z,1.135,P-.191);for(let F of[-1,1])f(E,.066,2.36,.052,z+F*.53,1.18,P-.2);f(E,1.12,.075,.059,z,2.36,P-.2),f(n.steel,.028,.43,.065,z+.37,1.1,P-.232),f(E,T+.37,.24,.92,S,3.045,P-.26),f(n.tan,T+.1,.055,.43,S,.041,P-.24)}function _(S,T){f(n.dark,.43,.28,.2,S,T,31.57,.13),f(n.lamp,.355,.185,.016,S,T-.007,31.455,.13),d(n.steel,[S,T,31.93],[S,T,31.64],.045)}function C(S,T,E,P,A){f(n.dark,P+.13,A+.13,.085,T,E,31.57);let R=new me(new Le(P,A),Wp(S));return R.name=S==="neil"?"Neil Signs \xB7 reference wordmark":"A&M Ceramics Ltd \xB7 unit 4",R.position.set(T,E,31.51),R.rotation.y=Math.PI,e.add(R),{name:R.name,x:T,y:E,z:31.51,yaw:Math.PI,width:P,height:A}}let v=[];for(let S of Ic){let{left:T,right:E,ridge:P}=S,A=E-T,R=(T+E)/2,z=S.muted?n.mutedBlue:n.blue;f(S.muted?n.muted:n.cladding,A,at,kt,R,at/2,Rt+kt/2),f(n.tan,A,.78,.08,R,.39,Rt-.045);for(let F=T+.22;F<E;F+=.49)f(S.muted?n.muted:n.ribs,.035,at-.83,.036,F,(at+.83)/2,Rt-.04);p(T,E,P);for(let F of[-1,1]){let U=A/2+.22,L=P+.02,X=Math.hypot(U,L),b=-F*Math.atan2(L,U),H=R+F*A/4;f(n.roof,X,.095,kt+.54,H,at+P/2+.05,Rt+kt/2,0,0,b),d(z,[R+F*(A/2+.25),at+.08,31.71],[R,at+P+.11,31.71],.13,.18);for(let N=R+F*.45;F>0?N<E:N>T;N+=F*.88){let D=at+P*(1-Math.abs(N-R)/(A/2))+.12;f(n.roofRib,.025,.035,kt+.38,N,D,Rt+kt/2,0,0,b)}}f(z,.15,.15,kt+.6,R,at+P+.13,Rt+kt/2);for(let F of[T+.09,E-.09]){f(z,.19,at,.17,F,at/2,31.87),f(n.dark,.16,.15,kt+.2,F,at-.01,Rt+kt/2),f(n.dark,.11,5.92,.11,F,.23+5.92/2,31.73);for(let U of[.4,2.2,4.1,5.8])f(n.steel,.17,.07,.15,F,U,31.73);f(n.dark,.14,.14,.37,F,.19,31.62)}f(z,A+.22,.32,.14,R,6.22,31.87),g(S.door,S.muted?5.5:6.2,4.45,S.muted?n.mutedBlue:n.door),M(S.office,S.muted?4.2:8.8,z),_(T+A*.12,5.65),_(T+A*.88,5.65),S.brand==="neil"&&v.push(C("neil",26.45,5.62,9.15,1.52)),S.brand==="am"&&v.push(C("am",-12,5.62,10.65,1.52))}for(let S of[-60.03,60.03])for(let T=Rt+.3;T<Rt+kt;T+=.7)f(n.ribs,.035,at-.83,.035,S,(at+.83)/2,T);f(n.concrete,120,.012,5.4,0,.003,29.08);for(let S of[-58,-54,-50,-22,-18,-14,12,16,20,30,34,38,46,50,54,58])f(n.white,.065,.007,3,S,.016,28.65);for(let[S,T]of[[-54,8],[-18,8],[16,8],[34,8],[52,12]])f(n.white,T,.007,.065,S,.016,27.15);for(let S of[-18,34])for(let T=0;T<7;T++)f(n.white,2.2,.007,.1,S,.017,29.72+T*.19);let m=[];for(let S of[-58,-25,7,39,59])f(n.steel,.085,7.78,.085,S,3.89,27.25),f(n.steel,.09,.09,.68,S,7.77,26.97),f(n.dark,.24,.125,.55,S,7.8,26.69),f(n.lamp,.185,.016,.47,S,7.735,26.69),f(n.dark,.17,.2,.17,S,.1,27.25),m.push({x:S,z:27.25,height:7.86});if(h.length){let S=new Oe;S.setAttribute("position",new Re(h,3)),S.computeVertexNormals();let T=new me(S,n.cladding);T.name="Shallow pitched facade gables",e.add(T)}for(let[S,T]of l){let E=new pt(u,S,T.length);E.name="Estate detail batch \xB7 "+Object.keys(n).find(P=>n[P]===S);for(let P=0;P<T.length;P++){let A=T[P];c.position.set(A.x,A.y,A.z),c.scale.set(A.w,A.h,A.d),A.quaternion?c.quaternion.copy(A.quaternion):c.rotation.set(A.rx,A.ry,A.rz),c.updateMatrix(),E.setMatrixAt(P,c.matrix)}E.instanceMatrix.needsUpdate=!0,E.computeBoundingBox(),E.computeBoundingSphere(),E.castShadow=!1,E.receiveShadow=!0,e.add(E)}let x=0,I=0;return e.traverse(S=>{S.isMesh&&(I++,x+=(S.geometry.index?.count||S.geometry.attributes.position.count)/3*(S.isInstancedMesh?S.count:1))}),e.userData={...e.userData,frontZ:Rt,minZ:Hp,depth:kt,eaves:at,units:Ic.map(S=>({...S})),signs:v,lampPosts:m,triangles:x,drawCalls:I,collidersAdded:0},e.updateMatrixWorld(!0),e}function gi(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Oe,c=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=s[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Dc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let g=0;g<o[u].length;++g)d.push(o[u][g][f]);let p=Dc(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Dc(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new dt(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let g=u.getComponent(f,p);a.setComponent(f+h,p,g)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}var Xp=Math.PI*2,qp=[{x:-20,y:7.3651,z:-8.42,yaw:Math.PI},{x:-7,y:7.9067,z:-8.42,yaw:Math.PI},{x:18,y:7.4484,z:-10.82,yaw:Math.PI},{x:-8,y:7.525,z:32,yaw:0},{x:24,y:7.525,z:32,yaw:0},{x:50,y:7.255,z:32,yaw:0}],Uc=[{x:-17,y:15.5,z:6,radiusX:19,radiusZ:11,count:6,speed:7.5,phase:.3,heightVariation:.8},{x:20,y:18,z:12,radiusX:21,radiusZ:14,count:6,speed:8.4,phase:2.6,heightVariation:1},{x:0,y:21,z:18,radiusX:35,radiusZ:16.6,count:6,speed:9.2,phase:4.3,heightVariation:.9}],ws=s=>new Be(s);function As(s,e,t,n=0,i=0,r=0,o=8,a=5){return new Xe(1,o,a).scale(s,e,t).translate(n,i,r)}function Nc(s,e,t=.004){let n=new y(...s),i=new y(...e),r=i.clone().sub(n),o=new ze(t,t,r.length(),3,1,!0);return o.applyQuaternion(new be().setFromUnitVectors(new y(0,1,0),r.normalize())),o.translate((n.x+i.x)*.5,(n.y+i.y)*.5,(n.z+i.z)*.5)}function Fa(s,e=!1){let t=new ut;s.forEach(([o,a],l)=>l?t.lineTo(o,-a):t.moveTo(o,-a)),t.closePath();let n=new Ot(t);n.rotateX(-Math.PI/2);let i=n.attributes.position,r=[];for(let o=0;o<i.count;o++){let a=e&&i.getX(o)>.17?.22:1;r.push(a,a,a)}return n.setAttribute("color",new Re(r,3)),n}function Yp(){let s=gi([As(.077,.073,.155),As(.043,.06,.07,0,.053,-.114,6,4)]),e=As(.052,.047,.055,0,0,0,6,5),t=new tn(.012,.055,5,1);t.rotateX(-Math.PI/2),t.translate(0,-.006,-.073);let n=gi([As(.0048,.0048,.0048,-.0495,.01,-.019,5,3),As(.0048,.0048,.0048,.0495,.01,-.019,5,3)]),i=Fa([[0,-.072],[.135,-.087],[.22,-.05],[.215,.062],[.09,.106],[0,.077]]),r=Fa([[0,-.05],[.13,-.069],[.232,-.025],[.27,.014],[.212,.04],[.251,.06],[.161,.069],[.225,.095],[.113,.103],[.178,.126],[.075,.115],[0,.071]],!0),o=Fa([[-.035,.12],[.035,.12],[.071,.255],[.024,.239],[0,.268],[-.024,.239],[-.071,.255]]),a=[];for(let l of[-1,1]){let c=l*.028;a.push(Nc([c,-.052,.025],[c,-.112,.023],.004));for(let u of[-1,0,1])a.push(Nc([c,-.112,.023],[c+u*.014,-.118,-.01-Math.abs(u)*.01],.0025))}return{body:s,head:e,beak:t,eyes:n,inner:i,outer:r,tail:o,feet:gi(a)}}function $n(s,e,t,n,i){let r=new pt(t,n,i);return r.name=e,r.castShadow=r.receiveShadow=!1,r.frustumCulled=!1,r.instanceMatrix.setUsage(xa),s.add(r),r}function rn(s,e){return Number.isFinite(s)?s:e}function Fc(s,{perches:e=qp,routes:t=Uc}={}){let n=new pe;n.name="Yard birds \xB7 roof visitors and small flocks",s.add(n);let i=[],r=t.map((L,X)=>({x:rn(L.x??L.center?.x,Uc[X%3].x),y:Math.max(13.5,rn(L.y??L.center?.y,18)),z:rn(L.z??L.center?.z,12),radiusX:Math.max(4,rn(L.radiusX,20)),radiusZ:Math.max(4,rn(L.radiusZ,12)),speed:Ve.clamp(rn(L.speed,8),3,13),phase:rn(L.phase,X*2.2),heightVariation:Ve.clamp(rn(L.heightVariation,.9),0,1.5),count:Math.max(0,Math.min(12,Math.floor(rn(L.count,6))))}));for(let L of r){let X=L.z+L.radiusZ+3.5>50;L.y=Math.max(L.y,(X?24:12.5)+L.heightVariation+.25)}let o=e.filter(L=>Number.isFinite(L?.x)&&Number.isFinite(L?.y)&&Number.isFinite(L?.z)).map(L=>({x:L.x,y:L.y+.003,z:L.z,yaw:rn(L.yaw,0)}));function a(L,X,b,H){let N=i.length,D=L?N%3!==0:N%5===0,k=D?.77:.92,W=N*2.399963229728653,Y=X?(X.radiusX+X.radiusZ)*.5:0,w=Math.ceil(b/2),O=b===0?0:(b%2?-1:1)*w*.58,q={id:N,perched:L,species:D?"pigeon":"gull",position:new y,velocity:new y,quaternion:new be,headQuaternion:new be,wingAngles:[0,0],gliding:!1,headTurn:0,hop:0,scale:k,phase:W,route:X,perch:H,lane:O,trail:w*.9,omega:X?X.speed/Y:0,flapHz:D?4.6:3.1,bodyColor:ws(D?"#9ca7ad":"#e7e9e1"),headColor:ws(D?"#818f99":"#f3f2e9"),wingColor:ws(D?"#727f8b":"#dfe3dc"),beakColor:ws(D?"#696660":"#d6b966"),feetColor:ws(D?"#a66f69":"#a99e78"),_previous:new y};i.push(q)}r.forEach(L=>{for(let X=0;X<L.count;X++)a(!1,L,X,null)}),o.forEach(L=>a(!0,null,0,L));let l=Yp(),c=i.length,u=new Se({color:16777215,roughness:.93}),h=new Se({color:16777215,roughness:.93,side:tt,vertexColors:!0}),f=new ve({color:1514013}),d={body:$n(n,"Bird bodies and necks",l.body,u,c),head:$n(n,"Turning bird heads",l.head,u,c),beak:$n(n,"Bird beaks",l.beak,u,c),eyes:$n(n,"Bird eyes",l.eyes,f,c),inner:$n(n,"Articulated inner wings",l.inner,h,c*2),outer:$n(n,"Feather-tipped outer wings",l.outer,h,c*2),tail:$n(n,"Bird tail feathers",l.tail,h,c),feet:$n(n,"Bird feet and tucked legs",l.feet,u,c)},p=Object.values(d);i.forEach((L,X)=>{d.body.setColorAt(X,L.bodyColor),d.head.setColorAt(X,L.headColor),d.beak.setColorAt(X,L.beakColor),d.feet.setColorAt(X,L.feetColor),d.tail.setColorAt(X,L.wingColor);for(let b=0;b<2;b++)d.inner.setColorAt(X*2+b,L.wingColor),d.outer.setColorAt(X*2+b,L.wingColor)});for(let L of p)L.instanceColor&&(L.instanceColor.needsUpdate=!0);let g=new We,M=new y,_=new y,C=new y,v=new y,m=new be,x=new be,I=new be,S=new en(0,0,0,"YXZ"),T=new y(0,0,1),E=new y(0,1,0),P=new y(1,0,0),A=0;function R(L,X,b,H,N,D=N,k=N){g.position.copy(b),g.quaternion.copy(H),g.scale.set(N,D,k),g.updateMatrix(),L.setMatrixAt(X,g.matrix)}function z(L=0){let X=Math.max(0,Math.min(.1,rn(L,0)));A+=X;for(let b of i){b._previous.copy(b.position);let H=0,N=0,D=0;if(b.perched){let k=b.perch,W=(A+b.phase*2)%17;b.hop=W<.42?Math.sin(W/.42*Math.PI)*.055:0,b.position.set(k.x+Math.sin(A*.17+b.phase)*.025,k.y+.118*b.scale+b.hop,k.z+Math.sin(A*.13+b.phase)*.018),H=k.yaw+Math.sin(A*.15+b.phase)*.14,b.headTurn=Math.sin(A*.47+b.phase)*.56+Math.sin(A*.93+b.phase)*.15,b.gliding=!1,b.wingAngles[0]=-.16,b.wingAngles[1]=0,b.velocity.copy(b.position).sub(b._previous),X?b.velocity.divideScalar(X):b.velocity.set(0,0,0)}else{let k=b.route,W=A*b.omega+k.phase-b.trail/((k.radiusX+k.radiusZ)*.5),Y=k.radiusX+b.lane,w=k.radiusZ+b.lane,O=Math.sin(W),q=Math.cos(W),K=W*.63+b.phase;b.position.set(k.x+O*Y,k.y+Math.sin(K)*k.heightVariation+Math.sin(b.phase)*.22,k.z+q*w),b.position.y=Math.max(b.position.z>50?24:12.5,b.position.y),b.velocity.set(q*Y*b.omega,Math.cos(K)*k.heightVariation*b.omega*.63,-O*w*b.omega);let Z=Math.hypot(b.velocity.x,b.velocity.z),B=-O*Y*b.omega*b.omega,ne=-q*w*b.omega*b.omega,J=(b.velocity.z*B-b.velocity.x*ne)/(Z*Z);H=Math.atan2(-b.velocity.x,-b.velocity.z),N=Math.atan2(b.velocity.y,Z),D=Ve.clamp(Math.atan2(Z*J,9.81),-.43,.43),b.gliding=(A*.075+b.phase*.14)%1>.46;let ie=A*b.flapHz*Xp+b.phase;b.wingAngles[0]=b.gliding?.08:Math.sin(ie)*.63,b.wingAngles[1]=b.gliding?.015:Math.sin(ie+.58)*.2,b.headTurn=Math.sin(A*.39+b.phase)*.07,b.hop=0}b.quaternion.setFromEuler(S.set(N,H,D,"YXZ")),R(d.body,b.id,b.position,b.quaternion,b.scale),M.set(0,.104,-.183).multiplyScalar(b.scale).applyQuaternion(b.quaternion),_.copy(b.position).add(M),b.headQuaternion.copy(b.quaternion).multiply(I.setFromAxisAngle(E,b.headTurn)),b.headQuaternion.multiply(I.setFromAxisAngle(P,b.perched?Math.sin(A*.7+b.phase)*.09:0)),R(d.head,b.id,_,b.headQuaternion,b.scale),R(d.beak,b.id,_,b.headQuaternion,b.scale,b.scale,b.scale*(b.species==="pigeon"?.72:1)),R(d.eyes,b.id,_,b.headQuaternion,b.scale),R(d.tail,b.id,b.position,b.quaternion,b.scale),I.copy(b.quaternion),b.perched||I.multiply(x.setFromAxisAngle(P,-.9)),R(d.feet,b.id,b.position,I,b.scale);for(let k=0;k<2;k++){let W=k===0?1:-1,Y=b.id*2+k,w=b.scale*(b.species==="gull"?1.13:1.03);M.set(W*.062,.025,-.018).multiplyScalar(b.scale).applyQuaternion(b.quaternion),v.copy(b.position).add(M),m.copy(b.quaternion),b.perched?(m.multiply(I.setFromAxisAngle(E,-W*1.3)),m.multiply(I.setFromAxisAngle(T,W>0?-.16:Math.PI+.16))):m.multiply(I.setFromAxisAngle(T,W>0?b.wingAngles[0]:Math.PI-b.wingAngles[0])),R(d.inner,Y,v,m,w),M.set(.215*w,0,0).applyQuaternion(m),C.copy(v).add(M),x.copy(m),b.perched?x.multiply(I.setFromAxisAngle(E,-W*2.55)):x.multiply(I.setFromAxisAngle(T,W*b.wingAngles[1])),R(d.outer,Y,C,x,w)}}for(let b of p)b.instanceMatrix.needsUpdate=!0;U.clock=A}let F=Object.entries(l).reduce((L,[X,b])=>L+(b.index?.count||b.attributes.position.count)/3*(X==="inner"||X==="outer"?c*2:c),0),U={flying:i.filter(L=>!L.perched).length,perched:o.length,triangles:F,drawCalls:n.children.length,clock:0};return z(0),{root:n,states:i,update:z,stats:U,meshes:d,routes:r,perches:o}}var Zp=()=>{let s=globalThis.AudioContext||globalThis.webkitAudioContext;return s?new s:null},Es=s=>s&&[s.x,s.y,s.z].every(Number.isFinite)?{x:s.x,y:s.y,z:s.z}:null,Ba=(s,e)=>(s.x-e.x)**2+(s.y-e.y)**2+(s.z-e.z)**2;function Bc({isMuted:s=()=>!1,listener:e=()=>null,contextFactory:t=Zp,random:n=Math.random}={}){let i=null,r=null,o=null,a=!1,l=!1,c=!1,u=0,h=0,f=null,d=new Set,p=()=>{let A=n();return Number.isFinite(A)?Math.max(0,Math.min(.999999,A)):.5},g=()=>{try{return!!s()}catch{return!0}};function M(){if(r&&i)try{r.gain.cancelScheduledValues(i.currentTime),r.gain.setValueAtTime(0,i.currentTime)}catch{}for(let A of[...d])A.cleanup(!0);c=!1,u=0}function _(A,R,z){let F=!1,U=z.length,L={kind:A,nodes:R,sources:z,cleanup(X=!1){if(!F){F=!0,d.delete(L);for(let b of z)if(b.onended=null,X)try{b.stop()}catch{}for(let b of R)try{b.disconnect()}catch{}}}};for(let X of z)X.onended=()=>{--U<=0&&L.cleanup()};return d.add(L),L}function C(A,R){if(A.positionX&&A.positionY&&A.positionZ)for(let z of["x","y","z"])A["position"+z.toUpperCase()].setValueAtTime(R[z],i.currentTime);else A.setPosition?.(R.x,R.y,R.z)}function v(A){if(!i.createPanner)return null;let R=i.createPanner();return R.panningModel="HRTF",R.distanceModel="inverse",R.refDistance=5,R.maxDistance=80,R.rolloffFactor=.65,C(R,A),R.connect(r),R}function m(A,R){let z=i.listener;if(!z)return;if(z.positionX)for(let L of["x","y","z"])z["position"+L.toUpperCase()].setValueAtTime(A[L],i.currentTime);else z.setPosition?.(A.x,A.y,A.z);let F=Math.hypot(R.x,R.y,R.z)||1,U={x:R.x/F,y:R.y/F,z:R.z/F};if(z.forwardX)for(let L of["x","y","z"])z["forward"+L.toUpperCase()].setValueAtTime(U[L],i.currentTime),z["up"+L.toUpperCase()].setValueAtTime(L==="y"?1:0,i.currentTime);else z.setOrientation?.(U.x,U.y,U.z,0,1,0)}function x(){if([...d].some(z=>z.kind==="breeze"))return;if(!o){o=i.createBuffer(1,Math.round(i.sampleRate*2),i.sampleRate);let z=o.getChannelData(0),F=0;for(let U=0;U<z.length;U++)F=F*.965+(p()*2-1)*.035,z[U]=F}let A=i.createBufferSource(),R=i.createGain();A.buffer=o,A.loop=!0,R.gain.setValueAtTime(0,i.currentTime),R.gain.linearRampToValueAtTime(.009,i.currentTime+1.5),A.connect(R),R.connect(r),_("breeze",[A,R],[A]),A.start()}function I(A,R){if([...d].filter(w=>w.kind==="bird").length>=2)return;let z=(Array.isArray(R)?R:[]).map(w=>Es(w?.position||w)).filter(w=>w&&Ba(w,A)<=80**2).sort((w,O)=>Ba(w,A)-Ba(O,A)),F=p()*Math.PI*2,U=9+p()*11,L=z.length?z[Math.floor(p()*Math.min(3,z.length))]:{x:A.x+Math.sin(F)*U,y:A.y+2+p()*4,z:A.z+Math.cos(F)*U},X=i.createOscillator(),b=i.createGain(),H=v(L),N=i.currentTime+.015,D=2+Math.floor(p()*2),k=2200+p()*900,W=.07+p()*.035;X.type="sine",X.connect(b),b.connect(H||r),b.gain.setValueAtTime(1e-4,i.currentTime);let Y=N;for(let w=0;w<D;w++){let O=Y+(w?.025+p()*.045:0),q=.07+p()*.065,K=k*(.94+p()*.12);X.frequency.setValueAtTime(K,O),X.frequency.exponentialRampToValueAtTime(K*(1.17+p()*.19),O+.025),X.frequency.exponentialRampToValueAtTime(K*(.88+p()*.1),O+q),b.gain.setValueAtTime(1e-4,O),b.gain.linearRampToValueAtTime(W,O+.015),b.gain.exponentialRampToValueAtTime(1e-4,O+q),Y=O+q}_("bird",[X,b,...H?[H]:[]],[X]),X.start(N),X.stop(Y+.02),h++,f={...L}}async function S(){if(l||g())return!1;try{if(!i||i.state==="closed"){if(i=t(),!i)return!1;r=i.createGain(),r.gain.setValueAtTime(0,i.currentTime),r.connect(i.destination),o=null}let A=i.state==="suspended"?i.resume():null;return a=!0,A&&await A,a}catch{return a=!1,M(),!1}}function T(A,R={}){if(!a||!i||i.state!=="running"||!R.outside||!R.active||R.muted||g()||globalThis.document?.hidden){(c||d.size)&&M();return}try{let z=e()||{},F=Es(R.eye)||Es(z.eye)||{x:0,y:1.7,z:0},U=Es(R.forward)||Es(z.forward)||{x:0,y:0,z:-1};m(F,U),c||(c=!0,u=2.5+p()*3.5,r.gain.setTargetAtTime(.16,i.currentTime,.15),x());let L=Number.isFinite(A)?Math.max(0,Math.min(.1,A)):0;u-=L,u<=0&&(I(F,R.sources),u=6+p()*9)}catch{a=!1,M()}}function E(){a=!1,M()}function P(){if(!l){E(),l=!0;try{r?.disconnect()}catch{}try{i?.close()?.catch?.(()=>{})}catch{}i=r=o=null}}return{enableAudio:S,update:T,disable:E,dispose:P,get enabled(){return a},get stats(){return{enabled:a,audible:c,disposed:l,contextState:i?.state??"unavailable",voiceCount:d.size,nodeCount:[...d].reduce((A,R)=>A+R.nodes.length,r?1:0),birdVoices:[...d].filter(A=>A.kind==="bird").length,breezeActive:[...d].some(A=>A.kind==="breeze"),birdsPlayed:h,lastBirdPosition:f&&{...f}}}}}function $p(s){if(!s||![s.x,s.y,s.z].every(Number.isFinite))return!1;let e=s.x>=-26&&s.x<=-2&&s.z>=-38&&s.z<=-8,t=s.x>=-2&&s.x<=28&&s.z>=-38&&s.z<=-10.5;return!(e||t)||s.y>9}function Oc(s){let e=new pe;e.name="Ketterer Court exterior",s.worldScene.add(e);let t=window.yardExteriorTreeSites||[],n=t.map(h=>{let f=h.z>50&&Math.abs(h.x)<65,d=f?Math.max(18,h.height+7):h.height;return{...h,height:d,width:d*.88,z:f?Math.max(61,h.z+5):h.z}}),i=Pc(e,n),r=Lc(e),o=new Se({color:6450762,roughness:1});for(let[h,f,d,p]of[[0,-52,195,26],[-83,10,22,116],[88,10,20,116],[0,71,195,24]]){let g=new me(new Le(d,p),o);g.rotation.x=-Math.PI/2,g.position.set(h,.004,f),g.name="Exterior grass verge",e.add(g)}let a=Fc(e),l=()=>document.querySelector("#soundBtn")?.getAttribute?.("aria-pressed")==="false",c=Bc({isMuted:l}),u=a.states.map(h=>h.position);return{root:e,trees:i,buildings:r,birds:a,audio:c,enableAudio:()=>c.enableAudio(),update(h,f={}){if(f.hidden)return c.update(h,{active:!1,outside:!1});i.update(h),a.update(h),c.update(h,{...f,outside:$p(f.eye),muted:l(),sources:u})}}}var Cs=.3,zc=1.15,Jp=1.1,Kp=.9,jp=.48,Qp=[{minX:-1,maxX:9,minZ:-34,maxZ:-18,minY:0,maxY:2.8},{minX:-25,maxX:-17,minZ:-15,maxZ:-8,minY:0,maxY:2.8}],em={Lee:{offsets:[[0,.9]],activity:"frontage",yaw:0},"Stores team":{offsets:[[0,-.75],[-.65,-.75]],activity:"inspection",yaw:Math.PI/2},"Workshop team":{offsets:[[-.55,-.55]],activity:"inspection",yaw:-Math.PI/2},Dan:{offsets:[[.55,.13]],activity:"coffee",yaw:Math.PI,partner:"Sam"},Sam:{offsets:[[-.4,.2]],activity:"chat",yaw:-Math.PI/2,partner:"Dan"}},tm=["Head","Chest","Torso","UpperArmL","UpperArmR","LowerArmL","LowerArmR","WristL","WristR","Middle1R"],Rs=s=>Math.atan2(Math.sin(s),Math.cos(s)),Jn=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),Zr=s=>s&&Number.isFinite(s.x)&&Number.isFinite(s.y)&&Number.isFinite(s.z),nm=(s,e,t)=>s.max.y>e.y+.08&&s.min.y<e.y+1.82&&Math.hypot(Math.max(s.min.x-e.x,0,e.x-s.max.x),Math.max(s.min.z-e.z,0,e.z-s.max.z))<t;function im(s,e){let t=e.y||0;return s.colliders.find(n=>Math.abs(n.min.x-(e.x-.3))<1e-4&&Math.abs(n.max.x-(e.x+.3))<1e-4&&Math.abs(n.min.z-(e.z-.3))<1e-4&&Math.abs(n.max.z-(e.z+.3))<1e-4&&Math.abs(n.min.y-t)<1e-4&&Math.abs(n.max.y-t-(e.seated?1.5:1.95))<1e-4)}function kc(s,e=s.worldScene){let t=new pe;t.name="TF Jones staff routines",e?.add(t);let n=(s.staff||[]).filter(w=>w.person?.group&&w.person?.model&&typeof w.person.animate=="function").map((w,O)=>{let q=w.person,K=q.group.position.clone(),Z=Object.fromEntries(tm.map(ne=>[ne,q.model.getObjectByName(ne)])),B={...w,record:w,index:O,name:w.spec.name,home:K,position:K.clone(),yaw:q.group.rotation.y,collider:im(s,w.spec),seated:!!w.spec.seated,routine:em[w.spec.name],route:[],routeIndex:0,wait:3+O*1.6,speed:0,state:w.spec.seated?"typing":"idle",activity:"idle",wave:0,cooldown:0,near:!1,bones:Z,basePose:new Map,originalAnimate:q.animate,originalLabelOffset:w.label.position.clone().sub(K)};return B.restore=()=>{for(let[ne,J]of B.basePose)ne.quaternion.copy(J)},B.capture=()=>{for(let ne of Object.values(Z))ne&&(B.basePose.has(ne)?B.basePose.get(ne).copy(ne.quaternion):B.basePose.set(ne,ne.quaternion.clone()))},B.capture(),B.wrapper=()=>{},q.animate=B.wrapper,B.animate=(ne,J="idle")=>B.originalAnimate.call(q,ne,J,2.9),B}),i=new Set(n.map(w=>w.collider).filter(Boolean)),r=s.colliders.filter(w=>!i.has(w)),o=0,a=!1,l=!1,c=0,u=0,h=n.find(w=>w.name==="Dan"),f=new pe;f.name="Dan's coffee mug",f.visible=!1;let d=new ze(.043,.036,.095,10,1,!0),p=new At(.027,.007,5,10),g=new ui(.035,10),M=new Se({color:15265264,roughness:.5}),_=new Se({color:3745307,roughness:.7}),C=new me(d,M),v=new me(p,M),m=new me(g,_);v.position.x=-.054,m.rotation.x=-Math.PI/2,m.position.y=.039,f.add(C,v,m),h?.bones.WristR&&t.add(f);let x={actorCount:n.length,seated:n.filter(w=>w.seated).length,drawCalls:t.children.length?3:0,triangles:t.children.length?130:0,get time(){return o},get moving(){return n.filter(w=>w.speed>0).length},get greetings(){return c},get distance(){return u},get routes(){return n.filter(w=>w.route.length>1).length},get active(){return a}};function I(w){return Qp.some(O=>w.y<O.maxY&&w.y+1.82>O.minY&&w.x>O.minX-Cs&&w.x<O.maxX+Cs&&w.z>O.minZ-Cs&&w.z<O.maxZ+Cs)}function S(w){if(!Zr(w)||I(w))return!1;let O=s.bounds;return O&&(w.x<O.minX||w.x>O.maxX||w.z<O.minZ||w.z>O.maxZ)||Math.abs(s.groundAt(w.x,w.z,w.y+.12)-w.y)>.12?!1:!r.some(q=>nm(q,w,Cs))}function T(w,O){let q=Math.max(1,Math.ceil(Jn(w,O)/.05)),K=new y;for(let Z=0;Z<=q;Z++)if(!S(K.copy(w).lerp(O,Z/q)))return!1;return!0}for(let w of n){if(w.seated||!w.routine||!w.collider||!S(w.home))continue;let O=[w.home.clone()];for(let[q,K]of w.routine.offsets){let Z=w.home.clone().add(new y(q,0,K));if(!T(O.at(-1),Z))break;O.push(Z)}O.length>1&&(w.route=[...O,...O.slice(0,-1).reverse().map(q=>q.clone())]),w.routeIndex=1}let E=new y,P=new y,A=new y,R=new y,z=new et,F=new qe,U=new y;function L(w,O,q=!1){return Math.abs(O.y-w.home.y-(q?1.65:0))<1.35}function X(w){if(Zr(w.companion))return w.companion;let O=s.vrGames?.companion?.group;if(!O?.visible)return null;for(let q=O;q;q=q.parent)if(!q.visible)return null;return O.getWorldPosition(new y)}function b(w,O,q){if(P.y<=w.home.y+2.4&&P.y+1.75>w.home.y&&Jn(O,P)<zc||L(w,E,!0)&&Jn(O,E)<zc)return!1;let K=X(q);return K&&L(w,K)&&Jn(O,K)<Jp?!1:!n.some(Z=>Z!==w&&Math.abs(Z.home.y-w.home.y)<1.35&&Jn(O,Z.position)<Kp)}function H(w){if(!L(w,E,!0)||Jn(w.position,E)>2.8)return!1;w.person.group.updateMatrixWorld(!0),w.bones.Head?.getWorldPosition(A),w.bones.Head||A.copy(w.position).add(new y(0,1.55,0));let O=A.distanceTo(E);return z.set(A,R.copy(E).sub(A).normalize()),!r.some(q=>(F.min.copy(q.min),F.max.copy(q.max),F.containsPoint(A)?!1:z.intersectBox(F,U)&&A.distanceTo(U)<O-.08))}function N(w){w.person.group.position.copy(w.position),w.person.group.rotation.set(0,w.yaw,0),w.spec.x=w.position.x,w.spec.y=w.position.y,w.spec.z=w.position.z,w.label.position.copy(w.position).add(w.originalLabelOffset),Zr(E)&&w.label.lookAt(E),w.collider&&!w.seated&&(w.collider.min.set(w.position.x-.3,w.position.y,w.position.z-.3),w.collider.max.set(w.position.x+.3,w.position.y+1.95,w.position.z+.3))}function D(w,O,q){let K=w.bones[O];if(!K)return;let Z=K.parent.getWorldQuaternion(new be),B=K.getWorldQuaternion(new be),ne=new y(0,1,0).applyQuaternion(B),J=new y(...q).normalize().applyQuaternion(w.person.group.getWorldQuaternion(new be));K.quaternion.copy(Z.invert().multiply(new be().setFromUnitVectors(ne,J).multiply(B))),w.person.model.updateMatrixWorld(!0)}function k(w,O){let q=o+w.index*.73,K=w.bones.Head,Z=w.bones.Chest||w.bones.Torso;if(w.seated){for(let B of["L","R"])w.bones["LowerArm"+B]?.rotateX(Math.sin(q*8+(B==="L"?0:2))*.026),w.bones["Wrist"+B]?.rotateZ(Math.sin(q*11+(B==="L"?0:2))*.018);Z?.rotateX(.018+Math.sin(q*.9)*.008)}else w.activity==="coffee"&&!w.speed&&!w.wave?(D(w,"UpperArmR",[.18,-.4,.45]),D(w,"LowerArmR",[-.18,.7,.35])):w.activity==="inspection"&&!w.speed&&!w.wave?(Z?.rotateX(.055),w.bones.LowerArmR?.rotateX(Math.sin(q*1.4)*.045)):w.activity==="chat"&&!w.speed&&!w.wave&&w.bones.LowerArmL?.rotateZ(Math.sin(q*1.7)*.06);if(K)if(O){w.person.model.updateMatrixWorld(!0),K.getWorldPosition(A);let B=Math.atan2(E.x-w.position.x,E.z-w.position.z),ne=Math.atan2(E.y-A.y,Jn(w.position,E));K.rotateY(Ve.clamp(Rs(B-w.yaw),-.5,.5)),K.rotateX(-Ve.clamp(ne,-.28,.28))}else K.rotateX(Math.sin(q*(w.activity==="chat"?2.3:.8))*.018+(w.seated?.06:w.activity==="inspection"?.08:0))}function W(w,O={}){if(l)return;let q=s.stats(),K=O.active??q.playing,Z=K&&!O.hidden&&(!O.mode||O.mode==="explore");if(P.set(q.x,q.y,q.z),E.copy(Zr(O.eye)?O.eye:new y(q.x,q.y+1.65,q.z)),!Z){if(a)for(let B of n)B.speed=0;a=!1;for(let B of n)N(B);return}if(a=!0,!Number.isFinite(w)||w<=0){for(let B of n)N(B);return}w=Math.min(w,.1),o+=w;for(let B of n){B.restore();let ne=H(B);if(B.cooldown=Math.max(0,B.cooldown-w),ne&&!B.near&&!B.cooldown&&!B.seated&&(B.wave=1.6,B.cooldown=14,c++),B.near=ne,B.wave=Math.max(0,B.wave-w),B.speed=0,B.wave)B.state="greeting",B.activity="greeting",B.yaw+=Rs(Math.atan2(E.x-B.position.x,E.z-B.position.z)-B.yaw)*Math.min(1,w*4);else if(B.seated)B.state="typing",B.activity="typing";else if(B.route.length>1)if(B.wait=Math.max(0,B.wait-w),B.wait){B.state=B.activity;let J=B.activity==="chat"&&n.find(G=>G.name===B.routine.partner),ie=J?Math.atan2(J.position.x-B.position.x,J.position.z-B.position.z):B.routine.yaw??B.spec.rot??0;B.yaw+=Rs(ie-B.yaw)*Math.min(1,w*2)}else{let J=B.route[B.routeIndex],ie=Jn(B.position,J),G=Math.atan2(J.x-B.position.x,J.z-B.position.z);if(ie<.015)B.position.copy(J),B.activity=B.routeIndex===B.route.length-1?"chat":B.routine.activity,B.wait=B.routeIndex===B.route.length-1?9:B.routine.activity==="coffee"?6:4,B.routeIndex=B.routeIndex===B.route.length-1?1:B.routeIndex+1,B.state=B.activity;else if(B.yaw+=Rs(G-B.yaw)*Math.min(1,w*5),B.state="waiting",Math.abs(Rs(G-B.yaw))<.2){let ee=Math.min(ie,jp*w),Q=B.position.clone().lerp(J,ee/ie);T(B.position,Q)&&b(B,Q,O)&&(B.position.copy(Q),B.speed=ee/w,B.state="walking",B.activity="walking",u+=ee)}}else B.state="idle",B.activity="idle";N(B),B.animate(B.speed?w*B.speed/1.2:w,B.wave?"wave":B.speed?"walk":"idle"),B.capture(),B.person.group.updateMatrixWorld(!0),k(B,ne)}f.visible=!!h?.bones.WristR&&h.activity==="coffee"&&!h.speed&&!h.wave,f.visible&&(h.person.group.updateMatrixWorld(!0),(h.bones.Middle1R||h.bones.WristR).getWorldPosition(A),A.add(R.set(.054,-.012,0).applyQuaternion(h.person.group.getWorldQuaternion(new be))),t.updateMatrixWorld(!0),f.position.copy(t.worldToLocal(A)),f.quaternion.copy(t.getWorldQuaternion(new be).invert().multiply(h.person.group.getWorldQuaternion(new be))))}function Y(){if(!l){l=!0;for(let w of n)w.restore(),w.person.animate===w.wrapper&&(w.person.animate=w.originalAnimate);t.removeFromParent();for(let w of[d,p,g])w.dispose();M.dispose(),_.dispose()}}return t.userData={actors:n.length,addedModels:0,drawCalls:x.drawCalls},{root:t,update:W,stats:x,actors:n,dispose:Y,clear:S,segmentClear:T,mug:f}}var Dt=1391958,sm=2391723,Ps=16765794,on=15791089,Yt=2107441,Vt=9016987,Oa=13080691,jn=.014,An=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),Zt=s=>s*s*(3-2*s),$r=new Me(1,1,1),Gc=new Xe(1,10,6),Hc=new Se({vertexColors:!0,roughness:.72,metalness:.04}),rm=new Se({color:2639705,roughness:.24,metalness:.16}),xi;function om(){if(xi)return xi;let s=globalThis.document?.createElement?.("canvas"),e=s?.getContext?.("2d");if(!e)return null;s.width=1024,s.height=256,xi=new Ie(s),xi.colorSpace=Ae;let t=globalThis.document?.querySelector?.(".brand img"),n=()=>{e.clearRect(0,0,1024,256),t?.complete&&t.naturalWidth>0?(e.drawImage(t,0,0,t.naturalWidth,t.naturalHeight*.53,60,32,904,172),e.globalCompositeOperation="source-in",e.fillStyle="#ffffff",e.fillRect(0,0,1024,256),e.globalCompositeOperation="source-over"):(e.fillStyle="#ffffff",e.font="italic 900 160px Arial",e.textAlign="center",e.fillText("TFJONES",512,188)),e.globalCompositeOperation="destination-over",e.fillStyle="#153d56",e.fillRect(0,0,1024,256),e.globalCompositeOperation="source-over",e.fillStyle="#ffd362",e.fillRect(36,223,952,8),xi.needsUpdate=!0};return n(),t&&!t.complete&&t.addEventListener?.("load",n,{once:!0}),xi}function Wc(s,e){let t=new Float32Array(s.attributes.position.count*3),n=new Be(e);for(let i=0;i<t.length;i+=3)t[i]=n.r,t[i+1]=n.g,t[i+2]=n.b;return s.setAttribute("color",new dt(t,3)),s}function ki(s,e,t=Hc){let n=[],i=new We;return{add(r,o,a,l,c,u,h,f,d=0,p=0,g=0){i.position.set(o,a,l),i.rotation.set(d,p,g),i.scale.set(c,u,h),i.updateMatrix(),n.push(Wc(r.clone().applyMatrix4(i.matrix),f))},box(r,o,a,l,c,u,h,f=0,d=0,p=0){this.add($r,r,o,a,l,c,u,h,f,d,p)},finish(){let r=gi(n);for(let a of n)a.dispose();let o=new me(r,t);return o.name=e,o.castShadow=o.receiveShadow=!1,s.add(o),o}}}function za(s,e,t,n,i,r,o=0){let a=new ve({map:om(),color:xi?16777215:Dt}),l=new me(new Le(i,r),a);return l.position.set(e,t,n),l.rotation.y=o,l.name="TF Jones delivery wordmark",s.add(l),l}function am(s){let e=new pe;e.name="TF Jones delivery van",e.scale.x=.9,s.add(e);let t=ki(e,"Delivery van body, trim and fittings");t.box(0,.48,-.07,1.87,.24,4.9,Yt),t.box(0,.91,-2.11,1.9,.42,.95,Dt),t.box(0,1.52,-1.54,1.9,1.54,1.74,Dt),t.box(0,2.32,-1.45,1.93,.14,1.75,on),t.box(-.94,1.49,.55,.07,1.91,3.37,on),t.box(.94,1.49,.55,.07,1.91,3.37,on),t.box(0,2.43,.55,1.94,.1,3.37,on),t.box(0,.59,.55,1.94,.12,3.37,Vt),t.box(0,1.49,-1.1,1.87,1.9,.08,Yt);for(let x of[-1,1])t.box(x*.982,1.59,.49,.017,.89,2.98,Dt),t.box(x*.996,1.07,.48,.014,.09,3.04,Ps),t.box(x*.992,.77,.48,.016,.14,3.22,sm),t.box(x*.988,1.34,-1.43,.025,.038,.23,Vt),t.box(x*1.04,1.71,-2.04,.21,.16,.15,Yt),t.box(x*1.015,.49,-1.43,.16,.1,.64,Vt);t.box(0,.55,-2.64,1.96,.22,.16,Yt),t.box(0,.89,-2.597,.98,.24,.015,Yt);for(let x=0;x<4;x++)t.box(0,.805+x*.047,-2.612,.88,.017,.022,Vt);t.box(0,.63,2.37,1.96,.16,.26,Yt),t.box(0,.57,2.47,.91,.065,.22,Vt),t.box(0,2.31,2.259,1.86,.12,.04,Dt),t.box(0,.565,-2.729,.4,.105,.012,on),t.box(0,.515,2.512,.4,.105,.012,Ps),t.finish();let n=ki(e,"Van glazed cab",rm);n.box(0,1.91,-2.388,1.69,.73,.028,on,.17);for(let x of[-1,1])n.box(x*.965,1.9,-1.56,.028,.67,.98,on);n.finish(),za(e,-.996,1.63,.54,2.77,.69,-Math.PI/2),za(e,.996,1.63,.54,2.77,.69,Math.PI/2);let i=[];for(let x of[-1,1]){let I=new pe;I.position.set(x*.94,1.5,2.247),e.add(I);let S=ki(I,"Hinged delivery cargo door");S.box(-x*.47,0,0,.928,1.84,.053,on),S.box(-x*.47,.36,.03,.9,.6,.007,Dt),S.box(-x*.47,-.24,.03,.88,.062,.009,Ps),S.box(-x*.08,.04,.037,.048,.29,.04,Yt);for(let T of[-.66,.65])S.box(0,T,.025,.051,.18,.082,Vt);S.finish(),za(I,-x*.47,.37,.042,.84,.21),i.push({pivot:I,side:x})}let r=new pt(new ze(.36,.36,.24,14,1),new Se({color:Yt,roughness:.94}),4),o=[],a=new We,l=(x,I,S,T,E,P,A,R)=>{a.position.set(I,S,T),a.scale.set(E,P,A),a.rotation.set(0,0,0),a.updateMatrix(),o.push(Wc(x.applyMatrix4(a.matrix),R))};l(new ze(.22,.22,.245,12),0,0,0,1,1,1,Vt);for(let x of[-1,1])for(let I=0;I<6;I++){let S=I*Math.PI/3;l($r.clone(),Math.sin(S)*.125,x*.125,Math.cos(S)*.125,.055,.022,.055,Yt)}let c=new pt(gi(o),Hc,4);for(let x of o)x.dispose();r.name="Delivery tyres",c.name="Delivery wheel hubs",e.add(r,c);let u=[];for(let x of[-1.61,1.52])for(let I of[-1,1]){let S=new We;S.position.set(I*.97,.36,x),e.add(S),u.push(S)}let h=ki(e,"Van headlights and tail lamps",new ve({vertexColors:!0}));for(let x of[-1,1])h.box(x*.69,1.013,-2.604,.41,.18,.035,16772550),h.box(x*.88,1.43,2.275,.13,.42,.035,14959159);h.finish();let f=new pt($r,new ve({color:16777215}),4),d=[[-.89,1.014,-2.61],[.89,1.014,-2.61],[-.88,1.71,2.28],[.88,1.71,2.28]];for(let x=0;x<4;x++)a.position.set(...d[x]),a.rotation.set(0,0,0),a.scale.set(.1,.09,.042),a.updateMatrix(),f.setMatrixAt(x,a.matrix);e.add(f),f.name="Delivery indicators";let p=sn(3.5,6.2);p.position.y=.009,e.add(p);let g=new He,M=new be,_=new be().setFromAxisAngle(new y(0,0,1),Math.PI/2),C=new Be(16758062),v=new Be(8411438),m=0;return{root:e,doors:i,tires:r,rims:c,indicators:f,wheelNodes:u,update(x,I,S,T){m-=x/.36;for(let E=0;E<4;E++)M.setFromAxisAngle(new y(1,0,0),m).multiply(_),g.compose(u[E].position,M,new y(1,1,1)),r.setMatrixAt(E,g),c.setMatrixAt(E,g),f.setColorAt(E,S&&Math.sin(T*9)>0?C:v);r.instanceMatrix.needsUpdate=c.instanceMatrix.needsUpdate=!0,f.instanceColor.needsUpdate=!0;for(let E of i)E.pivot.rotation.y=E.side*I*1.48},get wheelAngle(){return m}}}function Xc(s,e){let t=new pe;t.name=e,s.add(t);let n=ki(t,e+" cardboard and tape");return n.box(0,0,0,.36,.31,.29,11701334),n.box(0,.159,0,.057,.011,.291,14862744),n.box(0,0,-.15,.058,.31,.011,14862744),n.box(.093,.065,-.158,.091,.056,.005,on),n.finish(),t}function lm(s){let e=new pe;e.name="TF Jones delivery courier",s.add(e);let t=[],n=[],i={};function r(M,_,C,v,m){let x=new We;return x.position.set(C,v,m),_.add(x),i[M]=x,x}function o(M,_,C,v,m,x,I,S,T){let E=new We;E.position.set(C,v,m),E.scale.set(x,I,S),M.add(E),(_==="round"?n:t).push({p:E,color:T})}let a=r("hips",e,0,.9,0),l=r("spine",e,0,1.02,0),c=r("head",l,0,.59,0);o(a,"box",0,.01,0,.31,.2,.19,Dt),o(l,"box",0,.19,0,.38,.48,.22,Dt),o(l,"box",-.127,.21,-.12,.077,.43,.025,Ps),o(l,"box",.127,.21,-.12,.077,.43,.025,Ps),o(l,"box",0,.09,-.132,.37,.047,.014,on),o(l,"box",0,.3,.124,.37,.047,.014,on),o(c,"round",0,.015,0,.113,.135,.103,Oa),o(c,"box",0,.121,0,.226,.06,.211,Dt),o(c,"box",0,.102,-.11,.22,.019,.104,Dt),o(c,"round",0,.015,-.099,.025,.024,.029,Oa);for(let M of[-1,1]){o(c,"box",M*.045,.047,-.102,.019,.017,.012,Yt);let _=r("thigh"+M,a,M*.095,-.035,0),C=r("knee"+M,_,0,-.4,0),v=r("ankle"+M,C,0,-.4,0);o(_,"box",0,-.2,0,.135,.41,.16,Dt),o(C,"box",0,-.2,0,.119,.41,.136,Dt),o(v,"box",0,-.015,-.049,.145,.1,.24,Yt);let m=r("shoulder"+M,l,M*.22,.36,0),x=r("elbow"+M,m,0,-.28,0);o(m,"box",0,-.14,0,.125,.29,.135,Dt),o(x,"box",0,-.13,0,.105,.27,.115,Dt),o(x,"round",0,-.285,0,.064,.075,.049,Oa)}let u=new pt($r,new Se({vertexColors:!1,roughness:.9}),t.length),h=new pt(Gc,u.material,n.length);for(let[M,_]of[[t,u],[n,h]])for(let C=0;C<M.length;C++)_.setColorAt(C,new Be(M[C].color));e.add(u,h),u.name="Courier uniform and limbs",h.name="Courier face and hands";let f=Xc(e,"Carried delivery parcel");f.position.set(0,1.14,-.35);let d=new He,p=new He,g=sn(.55,.48);return g.position.y=.008,e.add(g),{root:e,held:f,bones:i,update(M,_,C,v){let m=M!==0,x=v*8;a.position.y=.9+(m?Math.abs(Math.sin(x))*.015:0),l.position.y=1.02+(m?Math.abs(Math.sin(x))*.015:0),l.rotation.x=-C*.18,c.rotation.y=m?Math.sin(v*.7)*.08:Math.sin(v*.8)*.12;for(let I of[-1,1]){let S=m?Math.sin(x)*I*.33:0;i["thigh"+I].rotation.x=S,i["knee"+I].rotation.x=m?Math.max(0,-S)*.8:0,i["shoulder"+I].rotation.x=_?.64-C*.27:-S*.8,i["elbow"+I].rotation.x=_?.91-C*.23:.12}f.visible=_,f.position.y=1.14-C*.34,e.updateMatrixWorld(!0),d.copy(e.matrixWorld).invert();for(let[I,S]of[[t,u],[n,h]]){for(let T=0;T<I.length;T++)p.multiplyMatrices(d,I[T].p.matrixWorld),S.setMatrixAt(T,p);S.instanceMatrix.needsUpdate=!0}u.computeBoundingSphere(),h.computeBoundingSphere()}}}function Jr(s){return 28.42+.33*Zt(An((s-14)/6))+1.58*Zt(An((-64-s)/11))}function cm(s){return Math.atan2(1,(Jr(s+.002)-Jr(s-.002))/.004)}function Kr(s){return 28.65+1.35*Zt(An((s-64)/11))+.1*Zt(An((30-s)/10))}function um(s){return Math.atan2(1,(Kr(s+.002)-Kr(s-.002))/.004)}function hm(s,e){return new y(s,jn,e)}function fm(){let s=new Ui,e=(t,n)=>hm(t,n);return s.add(new Mn(e(-110,30),e(-120,30),e(-120,34),e(-120,45))),s.add(new Vn(e(-120,45),e(-120,73))),s.add(new Mn(e(-120,73),e(-120,89),e(-115,89),e(-104,89))),s.add(new Vn(e(-104,89),e(104,89))),s.add(new Mn(e(104,89),e(115,89),e(120,89),e(120,73))),s.add(new Vn(e(120,73),e(120,45))),s.add(new Mn(e(120,45),e(120,34),e(120,30),e(110,30))),s}var Qn=[new y(21.1,.6,28.75),new y(22.29,.6,28.75),new y(23.11,.24,28.75),new y(23.74,jn,28.75),new y(24,jn,30.5),new y(19.5,jn,30.83)],Kn=[0];for(let s=1;s<Qn.length;s++)Kn.push(Kn[s-1]+Qn[s].distanceTo(Qn[s-1]));function Vc(s,e){let t=An(s)*Kn.at(-1),n=1;for(;n<Kn.length-1&&t>Kn[n];)n++;let i=Qn[n-1],r=Qn[n];return e.lerpVectors(i,r,(t-Kn[n-1])/(Kn[n]-Kn[n-1])),Math.atan2(i.x-r.x,i.z-r.z)}var un=[["arriving",22],["parked",1.4],["opening",1.8],["unloading",8.5],["dropping",2.1],["returning",8.5],["closing",1.8],["departing",29],["estate loop",68],["waiting",92]];function qc(s,e){let t=new pe;t.name="Occasional TF Jones deliveries",e.add(t);let n=am(t),i=lm(t),r=Xc(t,"Delivered parcel");i.root.visible=r.visible=!1;let o=ki(t,"Neil Signs delivery stand");o.box(19.5,.625,31.18,.64,.065,.51,Vt);for(let T of[19.24,19.76])for(let E of[30.97,31.37])o.box(T,.34,E,.036,.57,.036,Vt),o.add(Gc,T,.065,E,.065,.065,.065,Yt);o.box(19.5,.2,31.18,.58,.042,.46,Vt),o.box(19.5,.8,31.45,.59,.036,.036,Vt),o.box(19.23,.7,31.45,.035,.23,.035,Vt),o.box(19.77,.7,31.45,.035,.23,.035,Vt),o.finish(),r.position.set(19.5,.814,31.18);let a=fm(),l=new y,c=new y,u=new y,h=0,f=0,d=0,p=0,g=0,M=!1,_=0,C=!1,v={clock:0,phase:un[0][0],cycles:0,deliveries:0,yielding:!1,doorOpen:0,drawCalls:0,triangles:0};function m(T){let E=T.eye;if(!E||![E.x,E.y,E.z].every(Number.isFinite))return!1;u.subVectors(r.position,E);let P=u.length();if(P>45)return!1;let A=T.forward;return A&&[A.x,A.y,A.z].every(Number.isFinite)?u.normalize().dot(A)>.2:P<30}function x(T,E,P){let A=E.eye;return A&&Math.abs(A.y-T.y)<3.6&&Math.hypot(A.x-T.x,A.z-T.z)<P}function I(T,E,P){if(T===0){let A=110-90*Zt(E);return P.set(A,jn,Kr(A)),um(A)}if(T===7){let A=20-130*Zt(E);return P.set(A,jn,Jr(A)),cm(A)}return T===8?(a.getPointAt(Zt(E),P),a.getTangentAt(Zt(E),u),Math.atan2(-u.x,-u.z)):T===9?(P.set(110,jn,30),Math.PI/2):(P.set(20,jn,28.75),Math.PI/2)}function S(T=0){let E=An(f/un[h][1]);n.root.rotation.y=I(h,E,n.root.position),_=h===2?Zt(E):h>=3&&h<=5?1:h===6?1-Zt(E):0,i.root.visible=h>=2&&h<=6;let P=0,A=h<=4,R=0,z=-Math.PI/2;h===3?(z=Vc(E,i.root.position),P=1):h===4?(i.root.position.copy(Qn.at(-1)),z=Math.PI/2+Math.PI/2*Zt(An(E/.3)),R=Zt(An((E-.15)/.65)),A=!C):h===5?(z=Vc(1-E,i.root.position)+Math.PI,P=1,A=!1):(i.root.position.copy(Qn[0]),h===6&&(z=Math.PI/2));let F=Math.atan2(Math.sin(z-i.root.rotation.y),Math.cos(z-i.root.rotation.y));i.root.rotation.y+=T?F*(1-Math.exp(-T*12)):F,i.update(M?0:P,A,R,d),v.phase=un[h][0],v.clock=d,v.cycles=p,v.deliveries=g,v.yielding=M,v.doorOpen=_}return S(),n.update(0,0,!1,0),t.traverse(T=>{T.isMesh&&(T.castShadow=T.receiveShadow=!1,v.drawCalls++,v.triangles+=(T.geometry.index?.count||T.geometry.attributes.position.count)/3*(T.isInstancedMesh?T.count:1))}),t.userData.delivery={park:{x:20,z:28.75},station:{x:19.5,z:31.18},noColliders:!0},{root:t,van:n,courier:i,parcel:r,stats:v,route:{lane:Jr,approach:Kr,loop:a,walk:Qn.map(T=>T.clone()),phases:un.map(T=>[...T])},update(T,E={}){if(E.hidden||E.active===!1||E.mode&&E.mode!=="explore"||!Number.isFinite(T)||T<=0)return;T=Math.min(T,.1),c.copy(n.root.position),M=!1;let P=h===0||h===7||h===8;if(P&&(I(h,An((f+T)/un[h][1]),l),M=x(n.root.position,E,5.5)||x(l,E,5.5)),(h===3||h===5)&&(M=x(i.root.position,E,1.3)),h===9&&r.visible&&!m(E)&&(r.visible=!1),h===9&&r.visible&&f+T>=un[h][1]&&(M=!0),d+=T,!M)for(f+=T,h===4&&!C&&f/un[h][1]>=.82&&(C=!0,r.visible=!0,g++);f>=un[h][1];)f-=un[h][1],h++,h===un.length&&(h=0,p++,C=!1);S(T);let A=n.root.position.distanceTo(c);n.update(P&&!M?A:0,_,h>=1&&h<=6||M,d)}}}var fn=s=>document.querySelector(s),hn=fn("#questEnter"),En=fn("#questStatus"),jr=fn("#questPanel");fn("#questPreview").onclick=()=>{jr.hidden=!0,fn("#questReturn").hidden=!1};fn("#questReturn").onclick=()=>{window.yardDebug?.pause(),jr.hidden=!1};async function dm(s){let e=s.renderer,t=s.worldScene,n=s.worldCamera;s.exterior=Oc(s);let i=Rc(s);s.vrGames=i;let r=kc(s,t),o=qc(s,s.exterior.root);s.life={staff:r,deliveries:o},fn("#enter").addEventListener("click",()=>s.exterior.enableAudio()),fn("#soundBtn").addEventListener("click",()=>s.exterior.enableAudio());let a=new y,l=new y,c=new y(0,1,0),u={eye:a,forward:l,active:!1,hidden:!1,mode:"explore"};e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let h=new pe;h.name="Quest player rig",t.add(h);let f=[e.xr.getController(0),e.xr.getController(1)],d=f.map((b,H)=>e.xr.getControllerGrip?.(H)||b);for(let b of d)f.includes(b)||h.add(b);let p=new Map;f.forEach(b=>{h.add(b),b.addEventListener("connected",N=>p.set(b,N.data)),b.addEventListener("disconnected",()=>p.delete(b));let H=new me(new Xe(.018,8,6),new ve({color:16769946}));b.add(H)});let g=new wt(new Oe,new Tt({color:8645568}));g.frustumCulled=!1,g.visible=!1,t.add(g);let M=new me(new bn(.22,.3,32),new ve({color:8645568,side:2,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.visible=!1,t.add(M);let _=s.colliders.map(b=>new qe(new y(b.min.x,b.min.y,b.min.z),new y(b.max.x,b.max.y,b.max.z))),C=r.actors.filter(b=>b.collider).map(b=>({source:b.collider,box:_[s.colliders.indexOf(b.collider)]})).filter(b=>b.box),v=new Set(C.map(b=>b.box)),m=0,x=new y,I=new be,S=null,T=!1,E=!1,P=!1,A=null,R,z,F=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),U=()=>{let b=s.stats(),H=Pa(x.x,x.z,m);h.position.set(b.x-H.x,b.y+(window.yardFloorOffset||0),b.z-H.z),h.rotation.y=m,n.position.set(0,0,0),n.quaternion.identity(),h.updateMatrixWorld(!0)};s.xrFace=b=>{let H=new y(0,0,-1).applyQuaternion(I);m=b-Math.atan2(-H.x,-H.z),S=null,U()};function L(b){for(let{source:q,box:K}of C)K.min.copy(q.min),K.max.copy(q.max);if(A=null,!b){g.visible=M.visible=!1;return}let H=b.getWorldPosition(new y),D=new y(0,0,-1).applyQuaternion(b.getWorldQuaternion(new be)).multiplyScalar(6);D.y+=2;let k=[H.clone()],W=new et,Y=new y,w=H.clone(),O=null;for(let q=1;q<=32;q++){let K=q*.05,Z=H.clone().addScaledVector(D,K);Z.y-=4.9*K*K;let B=Z.clone().sub(w),ne=B.length();W.set(w,B.normalize());let J=ne,ie=null,G=!1;for(let ee of _){if(ee.containsPoint(w))continue;let Q=W.intersectBox(ee,Y);if(Q){let oe=Q.distanceTo(w);oe<J&&(J=oe,ie=Q.clone(),G=!v.has(ee)&&Math.abs(Q.y-ee.max.y)<.015)}}if(w.y>=0&&Z.y<=0){let ee=w.clone().lerp(Z,w.y/(w.y-Z.y));ee.distanceTo(w)<J&&(ie=ee,G=!0)}if(ie){k.push(ie),O=ie,G&&!s.blocked(ie.x,ie.z,ie.y)&&Math.abs(s.groundAt(ie.x,ie.z,ie.y+.05)-ie.y)<.12&&(A=ie);break}k.push(Z),w=Z}g.geometry.dispose(),g.geometry=new Oe().setFromPoints(k),g.visible=!0,g.material.color.set(A?8645568:16746618),M.visible=!!A,A&&M.position.copy(A).add(new y(0,.025,0))}let X=window.questBridge={frame:null,sample(b){let H=e.xr.getSession(),N=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!N||H?.visibilityState==="hidden")return S=null,i.interrupt(),F();if(x.set(N.transform.position.x,N.transform.position.y,N.transform.position.z),I.copy(N.transform.orientation),S){let Q=Pa(x.x-S.x,x.z-S.z,m);Math.hypot(Q.x,Q.z)<.8&&s.xrPhysical(Q.x,Q.z)}S=x.clone();let D,k;for(let Q of H.inputSources)Q.handedness==="left"&&(D=Q),Q.handedness==="right"&&(k=Q);let[W,Y]=Ms(D),[w]=Ms(k),O=ac(w,fn("#questTurning").value,b,T);!i.menuOpen&&!i.held&&!i.driving&&(m+=O.angle,O.angle&&i.interrupt()),T=O.latched;let q=!!D?.gamepad?.buttons[4]?.pressed;q&&!P&&!i.driving&&(i.interrupt(),s.resetPosition(),m=0,S=null,i.close()),P=q,U();let K=f.find(Q=>p.get(Q)?.handedness==="right"),Z=new y(0,0,-1).applyQuaternion(I),B=Z.clone().applyAxisAngle(new y(0,1,0),m),ne=i.tick({dt:b,eye:x.clone().applyMatrix4(h.matrixWorld),forward:B,headOrientation:h.getWorldQuaternion(new be).multiply(I),left:D,right:k,controller:K,rightGripController:d[f.findIndex(Q=>p.get(Q)?.handedness==="right")],leftController:d[f.findIndex(Q=>p.get(Q)?.handedness==="left")]}),J=!ne.blockTeleport&&!i.menuOpen&&(!!k?.gamepad?.buttons[1]?.pressed||!ne.consumeTrigger&&!!k?.gamepad?.buttons[0]?.pressed);J&&(i.interrupt(),L(K)),!J&&E&&(A&&!i.menuOpen&&!ne.blockTeleport&&s.xrTeleport(A.x,A.y,A.z),A=null,g.visible=M.visible=!1),E=J;let ie=m+Math.atan2(-Z.x,-Z.z);s.xrHeading(ie);let G=F(),ee=Number(fn("#questSpeed").value)/2.9;return G.fwd=-Oi(Y)*ee,G.strafe=Oi(W)*ee,(J||ne.blockMovement)&&(G.fwd=G.strafe=0),G},beforeRender(b,H){e.xr.isPresenting?(U(),a.copy(x).applyMatrix4(h.matrixWorld),l.set(0,0,-1).applyQuaternion(I).applyAxisAngle(c,m)):(n.getWorldPosition(a),n.getWorldDirection(l));let N=e.xr.isPresenting?e.xr.getSession():null;u.active=s.stats().playing&&!i.menuOpen,u.hidden=document.hidden||N?.visibilityState==="hidden",u.mode=i.mode,s.exterior.update(H,u),r.update(H,{...u,active:u.active&&!s.truck?.driving}),o.update(H,u)}};if(e.xr.addEventListener("sessionstart",()=>{z=n.parent,R=e.shadowMap.enabled,e.shadowMap.enabled=!1,h.add(n),m=0,x.set(0,0,0),S=null,T=E=P=!1,s.xrBegin(),U(),i.begin(),document.body.classList.add("questActive"),jr.hidden=!0,En.textContent="VR is running. Use the Meta menu to exit.",hn.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),h.remove(n),z&&z.add(n),e.shadowMap.enabled=R,g.visible=M.visible=!1,S=null,s.xrEnd(),document.body.classList.remove("questActive"),jr.hidden=!1,hn.disabled=!1,hn.textContent="Enter VR again",En.textContent="You have left VR."}),hn.onclick=async()=>{hn.disabled=!0;let b;try{i.enableAudio(),s.exterior.enableAudio(),b=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),b.addEventListener("visibilitychange",()=>{S=null}),await e.xr.setSession(b)}catch(H){b&&await b.end().catch(()=>{}),hn.disabled=!1,En.textContent="Could not enter VR: "+H.message}},!window.isSecureContext){hn.textContent="HTTPS hosting needed",En.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){hn.textContent="Open in your Quest browser",En.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let b=await navigator.xr.isSessionSupported("immersive-vr");hn.disabled=!b,hn.textContent=b?"Enter VR":"VR headset not detected",En.textContent=b?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(b){En.textContent="VR availability check failed: "+b.message}}var pm=0,Yc=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(Yc),dm(window.yardDebug).catch(s=>{En.textContent="VR setup failed: "+s.message,console.error(s)})):++pm>1200&&(clearInterval(Yc),En.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
