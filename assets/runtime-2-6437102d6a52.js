(()=>{var Jl=1;var Kl=3,vr=0,Ql=1,at=2;var Ho=1,va=2;var Wo=100;var Xo=204,qo=205;var Yo=0,Zo=1,$o=2,hs=3,Jo=4,Ko=5,Qo=6,jo=7,Ma=0,jl=1,ec=2;var ba=1,Sa=2,Ta=3,wa=4,Aa=5,Ea=6,Ca=7;var Ra=300,tc=301,Pa=302;var nc=306,Jt=1e3,rs=1001,ea=1002,ta=1003;var ic=1006;var sc=1008;var Ia=1009;var La=1015;var rc=1023;var oc=1028;var ds=2300,Mr=2301,yr=2302,na=2303,ia=2400,sa=2401,ra=2402;var ac=0;var Da="",Pe="srgb",oa="srgb-linear",aa="linear",_r="srgb";var xi=7680;var la=519;var ca=35044,Na=35048;var Qn=2e3,fs=2001;function Zu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $u(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ua(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var ml={},br=null;function lc(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=lc(s);let e="THREE."+s.shift();if(br)br("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Qe(...s){s=lc(s);let e="THREE."+s.shift();if(br)br("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function zi(...s){let e=s.join(" ");e in ml||(ml[e]=!0,st(...s))}var Ju={[Yo]:Zo,[$o]:Qo,[Jo]:jo,[hs]:Ko,[Zo]:Yo,[Qo]:$o,[jo]:Jo,[Ko]:hs},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=1234567,as=Math.PI/180,ps=180/Math.PI;function Si(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function Ua(s,e){return(s%e+e)%e}function Ku(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Qu(s,e,t){return s!==e?(t-s)/(e-s):0}function ls(s,e,t){return(1-t)*s+t*e}function ju(s,e,t,n){return ls(s,e,1-Math.exp(-t*n))}function eh(s,e=1){return e-Math.abs(Ua(s,e*2)-e)}function th(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function nh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ih(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sh(s,e){return s+Math.random()*(e-s)}function rh(s){return s*(.5-Math.random())}function oh(s){s!==void 0&&(gl=s);let e=gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ah(s){return s*as}function lh(s){return s*ps}function ch(s){return(s&s-1)===0&&s!==0}function uh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function hh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dh(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*u,a*c);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var qe={DEG2RAD:as,RAD2DEG:ps,generateUUID:Si,clamp:Ve,euclideanModulo:Ua,mapLinear:Ku,inverseLerp:Qu,lerp:ls,damp:ju,pingpong:eh,smoothstep:th,smootherstep:nh,randInt:ih,randFloat:sh,randFloatSpread:rh,seededRandom:oh,degToRad:ah,radToDeg:lh,isPowerOfTwo:ch,ceilPowerOfTwo:uh,floorPowerOfTwo:hh,setQuaternionFromProperEuler:dh,normalize:Rt,denormalize:Oi},za=class za{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};za.prototype.isVector2=!0;var de=za,Me=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],m=r[o+3];if(h!==m||l!==d||c!==f||u!==p){let M=l*d+c*f+u*p+h*m;M<0&&(d=-d,f=-f,p=-p,m=-m,M=-M);let _=1-a;if(M<.9995){let w=Math.acos(M),b=Math.sin(w);_=Math.sin(_*w)/b,a=Math.sin(a*w)/b,l=l*_+d*a,c=c*_+f*a,u=u*_+p*a,h=h*_+m*a}else{l=l*_+d*a,c=c*_+f*a,u=u*_+p*a,h=h*_+m*a;let w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ka=class ka{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xo.copy(this).projectOnVector(e),this.sub(xo)}reflect(e){return this.sub(xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ka.prototype.isVector3=!0;var x=ka,xo=new x,xl=new Me,Va=class Va{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],m=i[0],M=i[3],_=i[6],w=i[1],b=i[4],y=i[7],v=i[2],N=i[5],S=i[8];return r[0]=o*m+a*w+l*v,r[3]=o*M+a*b+l*N,r[6]=o*_+a*y+l*S,r[1]=c*m+u*w+h*v,r[4]=c*M+u*b+h*N,r[7]=c*_+u*y+h*S,r[2]=d*m+f*w+p*v,r[5]=d*M+f*b+p*N,r[8]=d*_+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(a*n-i*o)*m,e[3]=d*m,e[4]=(u*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yo.makeScale(e,t)),this}rotate(e){return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Va.prototype.isMatrix3=!0;var Fe=Va,yo=new Fe,yl=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_l=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fh(){let s={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_r&&(i.r=Pn(i.r),i.g=Pn(i.g),i.b=Pn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_r&&(i.r=ki(i.r),i.g=ki(i.g),i.b=ki(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Da?aa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[oa]:{primaries:e,whitePoint:n,transfer:aa,toXYZ:yl,fromXYZ:_l,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:e,whitePoint:n,transfer:_r,toXYZ:yl,fromXYZ:_l,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),s}var $t=fh();function Pn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ki(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ei,Sr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ei===void 0&&(Ei=ua("canvas")),Ei.width=e.width,Ei.height=e.height;let i=Ei.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ei}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ph=1e6,Tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_o(i[o].image)):r.push(_o(i[o]))}else r=_o(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function _o(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var mh=1e6,vo=new x,mn=class s extends jn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=rs,i=rs,r=ic,o=sc,a=rc,l=Ia,c=s.DEFAULT_ANISOTROPY,u=Da){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Si(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vo).x}get height(){return this.source.getSize(vo).y}get depth(){return this.source.getSize(vo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ra)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jt:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jt:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Ra;mn.DEFAULT_ANISOTROPY=1;var Ga=class Ga{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],m=l[2],M=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-m)<.01&&Math.abs(p-M)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+m)<.1&&Math.abs(p+M)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(f+1)/2,v=(_+1)/2,N=(u+d)/4,S=(h+m)/4,E=(p+M)/4;return b>y&&b>v?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=N/n,r=S/n):y>v?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=N/i,r=E/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=S/r,i=E/r),this.set(n,i,r,t),this}let w=Math.sqrt((M-p)*(M-p)+(h-m)*(h-m)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(M-p)/w,this.y=(h-m)/w,this.z=(d-u)/w,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ga.prototype.isVector4=!0;var yi=Ga;var qr=class qr{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,p,m,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,p,m,M)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,p,m,M){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=d,_[3]=f,_[7]=p,_[11]=m,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qr().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ci.setFromMatrixColumn(e,0).length(),r=1/Ci.setFromMatrixColumn(e,1).length(),o=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,m=c*h;t[0]=d+m*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,m=c*h;t[0]=d-m*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,m=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+m,t[1]=l*h,t[5]=m*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,m=a*c;t[0]=l*u,t[4]=m-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-m*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+m,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=m*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,xh)}lookAt(e,t,n){let i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Xn.crossVectors(n,Vt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Xn.crossVectors(n,Vt)),Xn.normalize(),Xs.crossVectors(Vt,Xn),i[0]=Xn.x,i[4]=Xs.x,i[8]=Vt.x,i[1]=Xn.y,i[5]=Xs.y,i[9]=Vt.y,i[2]=Xn.z,i[6]=Xs.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],m=n[6],M=n[10],_=n[14],w=n[3],b=n[7],y=n[11],v=n[15],N=i[0],S=i[4],E=i[8],C=i[12],L=i[1],R=i[5],P=i[9],k=i[13],z=i[2],B=i[6],F=i[10],Z=i[14],g=i[3],Y=i[7],D=i[11],A=i[15];return r[0]=o*N+a*L+l*z+c*g,r[4]=o*S+a*R+l*B+c*Y,r[8]=o*E+a*P+l*F+c*D,r[12]=o*C+a*k+l*Z+c*A,r[1]=u*N+h*L+d*z+f*g,r[5]=u*S+h*R+d*B+f*Y,r[9]=u*E+h*P+d*F+f*D,r[13]=u*C+h*k+d*Z+f*A,r[2]=p*N+m*L+M*z+_*g,r[6]=p*S+m*R+M*B+_*Y,r[10]=p*E+m*P+M*F+_*D,r[14]=p*C+m*k+M*Z+_*A,r[3]=w*N+b*L+y*z+v*g,r[7]=w*S+b*R+y*B+v*Y,r[11]=w*E+b*P+y*F+v*D,r[15]=w*C+b*k+y*Z+v*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],m=e[7],M=e[11],_=e[15],w=l*f-c*d,b=a*f-c*h,y=a*d-l*h,v=o*f-c*u,N=o*d-l*u,S=o*h-a*u;return t*(m*w-M*b+_*y)-n*(p*w-M*v+_*N)+i*(p*b-m*v+_*S)-r*(p*y-m*N+M*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],m=e[13],M=e[14],_=e[15],w=t*a-n*o,b=t*l-i*o,y=t*c-r*o,v=n*l-i*a,N=n*c-r*a,S=i*c-r*l,E=u*m-h*p,C=u*M-d*p,L=u*_-f*p,R=h*M-d*m,P=h*_-f*m,k=d*_-f*M,z=w*k-b*P+y*R+v*L-N*C+S*E;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/z;return e[0]=(a*k-l*P+c*R)*B,e[1]=(i*P-n*k-r*R)*B,e[2]=(m*S-M*N+_*v)*B,e[3]=(d*N-h*S-f*v)*B,e[4]=(l*L-o*k-c*C)*B,e[5]=(t*k-i*L+r*C)*B,e[6]=(M*y-p*S-_*b)*B,e[7]=(u*S-d*y+f*b)*B,e[8]=(o*P-a*L+c*E)*B,e[9]=(n*L-t*P-r*E)*B,e[10]=(p*N-m*y+_*w)*B,e[11]=(h*y-u*N-f*w)*B,e[12]=(a*C-o*R-l*E)*B,e[13]=(t*R-n*C+i*E)*B,e[14]=(m*b-p*v-M*w)*B,e[15]=(u*v-h*b+d*w)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,m=o*u,M=o*h,_=a*h,w=l*c,b=l*u,y=l*h,v=n.x,N=n.y,S=n.z;return i[0]=(1-(m+_))*v,i[1]=(f+y)*v,i[2]=(p-b)*v,i[3]=0,i[4]=(f-y)*N,i[5]=(1-(d+_))*N,i[6]=(M+w)*N,i[7]=0,i[8]=(p+b)*S,i[9]=(M-w)*S,i[10]=(1-(d+m))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ci.set(i[0],i[1],i[2]).length(),a=Ci.set(i[4],i[5],i[6]).length(),l=Ci.set(i[8],i[9],i[10]).length();r<0&&(o=-o),on.copy(this);let c=1/o,u=1/a,h=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Qn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),p,m;if(l)p=r/(o-r),m=o*r/(o-r);else if(a===Qn)p=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===fs)p=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Qn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),p,m;if(l)p=1/(o-r),m=o/(o-r);else if(a===Qn)p=-2/(o-r),m=-(o+r)/(o-r);else if(a===fs)p=-1/(o-r),m=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};qr.prototype.isMatrix4=!0;var $e=qr,Ci=new x,on=new $e,gh=new x(0,0,0),xh=new x(1,1,1),Xn=new x,Xs=new x,Vt=new x,vl=new $e,Ml=new Me,cn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var ms=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yh=1e6,bl=new x,Ri=new Me,Tn=new $e,qs=new x,Qi=new x,_h=new x,vh=new Me,Sl=new x(1,0,0),Tl=new x(0,1,0),wl=new x(0,0,1),Al={type:"added"},Mh={type:"removed"},Pi={type:"childadded",child:null},Mo={type:"childremoved",child:null},Ye=class s extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new x,t=new cn,n=new Me,i=new x(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $e},normalMatrix:{value:new Fe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Sl,e)}rotateY(e){return this.rotateOnAxis(Tl,e)}rotateZ(e){return this.rotateOnAxis(wl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sl,e)}translateY(e){return this.translateOnAxis(Tl,e)}translateZ(e){return this.translateOnAxis(wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qs.copy(e):qs.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Qi,qs,this.up):Tn.lookAt(qs,Qi,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Al),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mh),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Al),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,_h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,vh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ye.DEFAULT_UP=new x(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}};var cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function bo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$t.workingColorSpace){return this.r=e,this.g=t,this.b=n,$t.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$t.workingColorSpace){if(e=Ua(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=bo(o,r,e+1/3),this.g=bo(o,r,e),this.b=bo(o,r,e-1/3)}return $t.colorSpaceToWorking(this,i),this}setStyle(e,t=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pe){let n=cc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pe){return $t.workingToColorSpace(Tt.copy(this),e),Math.round(Ve(Tt.r*255,0,255))*65536+Math.round(Ve(Tt.g*255,0,255))*256+Math.round(Ve(Tt.b*255,0,255))}getHexString(e=Pe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$t.workingColorSpace){$t.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,i=Tt.g,r=Tt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$t.workingColorSpace){return $t.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Pe){$t.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,i=Tt.b;return e!==Pe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Ys);let n=ls(qn.h,Ys.h,t),i=ls(qn.s,Ys.s,t),r=ls(qn.l,Ys.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new Ue;Ue.NAMES=cc;var an=new x,wn=new x,So=new x,An=new x,Ii=new x,Li=new x,El=new x,To=new x,wo=new x,Ao=new x,Eo=new yi,Co=new yi,Ro=new yi,Kn=class s{constructor(e=new x,t=new x,n=new x){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),wn.subVectors(n,t),So.subVectors(e,t);let o=an.dot(an),a=an.dot(wn),l=an.dot(So),c=wn.dot(wn),u=wn.dot(So),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Eo.setScalar(0),Co.setScalar(0),Ro.setScalar(0),Eo.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Ro.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Eo,r.x),o.addScaledVector(Co,r.y),o.addScaledVector(Ro,r.z),o}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),wn.subVectors(e,t),an.cross(wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ii.subVectors(i,n),Li.subVectors(r,n),To.subVectors(e,n);let l=Ii.dot(To),c=Li.dot(To);if(l<=0&&c<=0)return t.copy(n);wo.subVectors(e,i);let u=Ii.dot(wo),h=Li.dot(wo);if(u>=0&&h<=u)return t.copy(i);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ii,o);Ao.subVectors(e,r);let f=Ii.dot(Ao),p=Li.dot(Ao);if(p>=0&&f<=p)return t.copy(r);let m=f*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Li,a);let M=u*p-f*h;if(M<=0&&h-u>=0&&f-p>=0)return El.subVectors(r,i),a=(h-u)/(h-u+(f-p)),t.copy(i).addScaledVector(El,a);let _=1/(M+m+d);return o=m*_,a=d*_,t.copy(n).addScaledVector(Ii,o).addScaledVector(Li,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},We=class{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),$s.subVectors(this.max,ji),Di.subVectors(e.a,ji),Ni.subVectors(e.b,ji),Ui.subVectors(e.c,ji),Yn.subVectors(Ni,Di),Zn.subVectors(Ui,Ni),fi.subVectors(Di,Ui);let t=[0,-Yn.z,Yn.y,0,-Zn.z,Zn.y,0,-fi.z,fi.y,Yn.z,0,-Yn.x,Zn.z,0,-Zn.x,fi.z,0,-fi.x,-Yn.y,Yn.x,0,-Zn.y,Zn.x,0,-fi.y,fi.x,0];return!Po(t,Di,Ni,Ui,$s)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,Di,Ni,Ui,$s))?!1:(Js.crossVectors(Yn,Zn),t=[Js.x,Js.y,Js.z],Po(t,Di,Ni,Ui,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},En=[new x,new x,new x,new x,new x,new x,new x,new x],ln=new x,Zs=new We,Di=new x,Ni=new x,Ui=new x,Yn=new x,Zn=new x,fi=new x,ji=new x,$s=new x,Js=new x,pi=new x;function Po(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){pi.fromArray(s,r);let a=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),u=n.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var mt=new x,Ks=new de,bh=1e6,ht=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ca,this.updateRanges=[],this.gpuType=La,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ca&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ar=class extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sh=new We,es=new x,Io=new x,Kt=class{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);let t=es.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Io)),this.expandByPoint(es.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Th=1e6,Zt=new $e,Lo=new Ye,Fi=new x,Gt=new We,ts=new We,gt=new x,Be=class s extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zu(e)?Ar:wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Gt.min,ts.min),Gt.expandByPoint(gt),gt.addVectors(Gt.max,ts.max),Gt.expandByPoint(gt)):(Gt.expandByPoint(ts.min),Gt.expandByPoint(ts.max))}Gt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(e,c),gt.add(Fi)),i=Math.max(i,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new x,l[E]=new x;let c=new x,u=new x,h=new x,d=new de,f=new de,p=new de,m=new x,M=new x;function _(E,C,L){c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,L),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,L),u.sub(c),h.sub(c),f.sub(d),p.sub(d);let R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(m.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(R),M.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),a[E].add(m),a[C].add(m),a[L].add(m),l[E].add(M),l[C].add(M),l[L].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,C=w.length;E<C;++E){let L=w[E],R=L.start,P=L.count;for(let k=R,z=R+P;k<z;k+=3)_(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let b=new x,y=new x,v=new x,N=new x;function S(E){v.fromBufferAttribute(i,E),N.copy(v);let C=a[E];b.copy(C),b.sub(v.multiplyScalar(v.dot(C))).normalize(),y.crossVectors(N,C);let R=y.dot(l[E])<0?-1:1;o.setXYZW(E,b.x,b.y,b.z,R)}for(let E=0,C=w.length;E<C;++E){let L=w[E],R=L.start,P=L.count;for(let k=R,z=R+P;k<z;k+=3)S(e.getX(k+0)),S(e.getX(k+1)),S(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new x,r=new x,o=new x,a=new x,l=new x,c=new x,u=new x,h=new x;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),m=e.getX(d+1),M=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,M),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(M,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let m=0,M=l.length;m<M;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*u;for(let _=0;_<u;_++)d[p++]=c[f++]}return new ht(d,u,h)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var wh=1e6,_i=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Ho,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=Wo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=la,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ho&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==Wo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==la&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Cn=new x,Do=new x,Qs=new x,$n=new x,No=new x,js=new x,Uo=new x,rt=class{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Do.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(Do);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Qs),a=$n.dot(this.direction),l=-$n.dot(Qs),c=$n.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let m=1/u;h*=m,d*=m,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Do).addScaledVector(Qs,d),f}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);let n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,r){No.subVectors(t,e),js.subVectors(n,e),Uo.crossVectors(No,js);let o=this.direction.dot(Uo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);let l=a*this.direction.dot(js.crossVectors($n,js));if(l<0)return null;let c=a*this.direction.dot(No.cross($n));if(c<0||l+c>o)return null;let u=-a*$n.dot(Uo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cl=new $e,mi=new rt,er=new Kt,Rl=new x,tr=new x,nr=new x,ir=new x,Fo=new x,sr=new x,Pl=new x,rr=new x,xe=class extends Ye{constructor(e=new Be,t=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Fo.fromBufferAttribute(h,e),o?sr.addScaledVector(Fo,u):sr.addScaledVector(Fo.sub(t),u))}t.add(sr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(er.containsPoint(mi.origin)===!1&&(mi.intersectSphere(er,Rl)===null||mi.origin.distanceToSquared(Rl)>(e.far-e.near)**2))&&(Cl.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,m=d.length;p<m;p++){let M=d[p],_=o[M.materialIndex],w=Math.max(M.start,f.start),b=Math.min(a.count,Math.min(M.start+M.count,f.start+f.count));for(let y=w,v=b;y<v;y+=3){let N=a.getX(y),S=a.getX(y+1),E=a.getX(y+2);i=or(this,_,e,n,c,u,h,N,S,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let M=p,_=m;M<_;M+=3){let w=a.getX(M),b=a.getX(M+1),y=a.getX(M+2);i=or(this,o,e,n,c,u,h,w,b,y),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,m=d.length;p<m;p++){let M=d[p],_=o[M.materialIndex],w=Math.max(M.start,f.start),b=Math.min(l.count,Math.min(M.start+M.count,f.start+f.count));for(let y=w,v=b;y<v;y+=3){let N=y,S=y+1,E=y+2;i=or(this,_,e,n,c,u,h,N,S,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=M.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let M=p,_=m;M<_;M+=3){let w=M,b=M+1,y=M+2;i=or(this,o,e,n,c,u,h,w,b,y),i&&(i.faceIndex=Math.floor(M/3),t.push(i))}}}};function Ah(s,e,t,n,i,r,o,a){let l;if(e.side===Ql?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===vr,a),l===null)return null;rr.copy(a),rr.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(rr);return c<t.near||c>t.far?null:{distance:c,point:rr.clone(),object:s}}function or(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,tr),s.getVertexPosition(l,nr),s.getVertexPosition(c,ir);let u=Ah(s,e,t,n,tr,nr,ir,Pl);if(u){let h=new x;Kn.getBarycoord(Pl,tr,nr,ir,h),i&&(u.uv=Kn.getInterpolatedAttribute(i,a,l,c,h,new de)),r&&(u.uv1=Kn.getInterpolatedAttribute(r,a,l,c,h,new de)),o&&(u.normal=Kn.getInterpolatedAttribute(o,a,l,c,h,new x),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new x,materialIndex:0};Kn.getNormal(tr,nr,ir,d.normal),u.face=d,u.barycoord=h}return u}var Er=class extends mn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=ta,u=ta,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class extends ht{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Bi=new $e,Il=new $e,ar=[],Ll=new We,Eh=new $e,ns=new xe,is=new Kt,_t=class extends xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ei(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Eh)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new We),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),Ll.copy(e.boundingBox).applyMatrix4(Bi),this.boundingBox.union(Ll)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),is.copy(e.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),e.ray.intersectsSphere(is)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bi),Il.multiplyMatrices(n,Bi),ns.matrixWorld=Il,ns.raycast(e,ar);for(let o=0,a=ar.length;o<a;o++){let l=ar[o];l.instanceId=r,l.object=this,t.push(l)}ar.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ei(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Er(new Float32Array(i*this.count),i,this.count,oc,La));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bo=new x,Ch=new x,Rh=new Fe,Rn=class{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Bo.subVectors(n,t).cross(Ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rh.getNormalMatrix(e),i=this.coplanarPoint(Bo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gi=new Kt,Ph=new de(.5,.5),lr=new x,Cr=class{constructor(e=new Rn,t=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],m=r[9],M=r[10],_=r[11],w=r[12],b=r[13],y=r[14],v=r[15];if(i[0].setComponents(c-o,f-u,_-p,v-w).normalize(),i[1].setComponents(c+o,f+u,_+p,v+w).normalize(),i[2].setComponents(c+a,f+h,_+m,v+b).normalize(),i[3].setComponents(c-a,f-h,_-m,v-b).normalize(),n)i[4].setComponents(l,d,M,y).normalize(),i[5].setComponents(c-l,f-d,_-M,v-y).normalize();else if(i[4].setComponents(c-l,f-d,_-M,v-y).normalize(),t===Qn)i[5].setComponents(c+l,f+d,_+M,v+y).normalize();else if(t===fs)i[5].setComponents(l,d,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);let t=Ph.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(lr.x=i.normal.x>0?e.max.x:e.min.x,lr.y=i.normal.y>0?e.max.y:e.min.y,lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pt=class extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rr=new x,Pr=new x,Dl=new $e,ss=new rt,cr=new Kt,Oo=new x,Nl=new x,It=class extends Ye{constructor(e=new Be,t=new Pt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rr.fromBufferAttribute(t,i-1),Pr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rr.distanceTo(Pr);e.setAttribute("lineDistance",new Re(n,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(i),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;Dl.copy(i).invert(),ss.copy(e.ray).applyMatrix4(Dl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=f,M=p-1;m<M;m+=c){let _=u.getX(m),w=u.getX(m+1),b=ur(this,e,ss,l,_,w,m);b&&t.push(b)}if(this.isLineLoop){let m=u.getX(p-1),M=u.getX(f),_=ur(this,e,ss,l,m,M,p-1);_&&t.push(_)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=f,M=p-1;m<M;m+=c){let _=ur(this,e,ss,l,m,m+1,m);_&&t.push(_)}if(this.isLineLoop){let m=ur(this,e,ss,l,p-1,f,p-1);m&&t.push(m)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ur(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Rr.fromBufferAttribute(a,i),Pr.fromBufferAttribute(a,r),t.distanceSqToSegment(Rr,Pr,Oo,Nl)>n)return;Oo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Oo);if(!(c<e.near||c>e.far))return{distance:c,point:Nl.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Vi=class extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ul=new $e,ha=new rt,hr=new Kt,dr=new x,gs=class extends Ye{constructor(e=new Be,t=new Vi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,e.ray.intersectsSphere(hr)===!1)return;Ul.copy(i).invert(),ha.copy(e.ray).applyMatrix4(Ul);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,m=f;p<m;p++){let M=c.getX(p);dr.fromBufferAttribute(h,M),Fl(dr,M,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,m=f;p<m;p++)dr.fromBufferAttribute(h,p),Fl(dr,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fl(s,e,t,n,i,r,o){let a=ha.distanceSqToPoint(s);if(a<t){let l=new x;ha.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var De=class extends mn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _e=class s extends Be{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2));function p(m,M,_,w,b,y,v,N,S,E,C){let L=y/S,R=v/E,P=y/2,k=v/2,z=N/2,B=S+1,F=E+1,Z=0,g=0,Y=new x;for(let D=0;D<F;D++){let A=D*R-k;for(let U=0;U<B;U++){let O=U*L-P;Y[m]=O*w,Y[M]=A*b,Y[_]=z,c.push(Y.x,Y.y,Y.z),Y[m]=0,Y[M]=0,Y[_]=N>0?1:-1,u.push(Y.x,Y.y,Y.z),h.push(U/S),h.push(1-D/E),Z+=1}}for(let D=0;D<E;D++)for(let A=0;A<S;A++){let U=d+A+B*D,O=d+A+B*(D+1),W=d+(A+1)+B*(D+1),T=d+(A+1)+B*D;l.push(U,O,T),l.push(O,W,T),g+=6}a.addGroup(f,g,C),f+=g,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xs=class s extends Be{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,p=n*2+r,m=i+1,M=new x,_=new x;for(let w=0;w<=p;w++){let b=0,y=0,v=0,N=0;if(w<=n){let C=w/n,L=C*Math.PI/2;y=-u-e*Math.cos(L),v=e*Math.sin(L),N=-e*Math.cos(L),b=C*h}else if(w<=n+r){let C=(w-n)/r;y=-u+C*t,v=e,N=0,b=h+C*d}else{let C=(w-n-r)/n,L=C*Math.PI/2;y=u+e*Math.sin(L),v=e*Math.cos(L),N=e*Math.sin(L),b=h+d+C*h}let S=Math.max(0,Math.min(1,b/f)),E=0;w===0?E=.5/i:w===p&&(E=-.5/i);for(let C=0;C<=i;C++){let L=C/i,R=L*Math.PI*2,P=Math.sin(R),k=Math.cos(R);_.x=-v*k,_.y=y,_.z=v*P,a.push(_.x,_.y,_.z),M.set(-v*k,N,v*P),M.normalize(),l.push(M.x,M.y,M.z),c.push(L+E,S)}if(w>0){let C=(w-1)*m;for(let L=0;L<i;L++){let R=C+L,P=C+L+1,k=w*m+L,z=w*m+L+1;o.push(R,P,k),o.push(P,z,k)}}}this.setIndex(o),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},vi=class s extends Be{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new x,u=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ze=class s extends Be{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,m=[],M=n/2,_=0;w(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function w(){let y=new x,v=new x,N=0,S=(t-e)/n;for(let E=0;E<=r;E++){let C=[],L=E/r,R=L*(t-e)+e;for(let P=0;P<=i;P++){let k=P/i,z=k*l+a,B=Math.sin(z),F=Math.cos(z);v.x=R*B,v.y=-L*n+M,v.z=R*F,h.push(v.x,v.y,v.z),y.set(B,S,F).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-L),C.push(p++)}m.push(C)}for(let E=0;E<i;E++)for(let C=0;C<r;C++){let L=m[C][E],R=m[C+1][E],P=m[C+1][E+1],k=m[C][E+1];(e>0||C!==0)&&(u.push(L,R,k),N+=3),(t>0||C!==r-1)&&(u.push(R,P,k),N+=3)}c.addGroup(_,N,0),_+=N}function b(y){let v=p,N=new de,S=new x,E=0,C=y===!0?e:t,L=y===!0?1:-1;for(let P=1;P<=i;P++)h.push(0,M*L,0),d.push(0,L,0),f.push(.5,.5),p++;let R=p;for(let P=0;P<=i;P++){let z=P/i*l+a,B=Math.cos(z),F=Math.sin(z);S.x=C*F,S.y=M*L,S.z=C*B,h.push(S.x,S.y,S.z),d.push(0,L,0),N.x=B*.5+.5,N.y=F*.5*L+.5,f.push(N.x,N.y),p++}for(let P=0;P<i;P++){let k=v+P,z=R+P;y===!0?u.push(z,z+1,k):u.push(z+1,z,k),E+=3}c.addGroup(_,E,y===!0?1:2),_+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},un=class s extends ze{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ht=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new de:new x);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new x,i=[],r=[],o=[],a=new x,l=new $e;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new x)}r[0]=new x,o[0]=new x;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Ve(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ve(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Gi=class extends Ht{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ir=class extends Gi{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Fa(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Bl=new x,Ol=new x,zo=new Fa,ko=new Fa,Vo=new Fa,ti=class extends Ht{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new x){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(Ol.subVectors(i[0],i[1]).add(i[0]),c=Ol);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Bl.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Bl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f);m<1e-4&&(m=1),p<1e-4&&(p=m),M<1e-4&&(M=m),zo.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,m,M),ko.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,m,M),Vo.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,m,M)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ko.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Vo.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(zo.calc(l),ko.calc(l),Vo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new x().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zl(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Ih(s,e){let t=1-s;return t*t*e}function Lh(s,e){return 2*(1-s)*s*e}function Dh(s,e){return s*s*e}function cs(s,e,t,n){return Ih(s,e)+Lh(s,t)+Dh(s,n)}function Nh(s,e){let t=1-s;return t*t*t*e}function Uh(s,e){let t=1-s;return 3*t*t*s*e}function Fh(s,e){return 3*(1-s)*s*s*e}function Bh(s,e){return s*s*s*e}function us(s,e,t,n,i){return Nh(s,e)+Uh(s,t)+Fh(s,n)+Bh(s,i)}var ys=class extends Ht{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(us(e,i.x,r.x,o.x,a.x),us(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},In=class extends Ht{constructor(e=new x,t=new x,n=new x,i=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new x){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(us(e,i.x,r.x,o.x,a.x),us(e,i.y,r.y,o.y,a.y),us(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_s=class extends Ht{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gn=class extends Ht{constructor(e=new x,t=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new x){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new x){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vs=class extends Ht{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(cs(e,i.x,r.x,o.x),cs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mi=class extends Ht{constructor(e=new x,t=new x,n=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new x){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(cs(e,i.x,r.x,o.x),cs(e,i.y,r.y,o.y),cs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ms=class extends Ht{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(zl(a,l.x,c.x,u.x,h.x),zl(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new de().fromArray(i))}return this}},Lr=Object.freeze({__proto__:null,ArcCurve:Ir,CatmullRomCurve3:ti,CubicBezierCurve:ys,CubicBezierCurve3:In,EllipseCurve:Gi,LineCurve:_s,LineCurve3:gn,QuadraticBezierCurve:vs,QuadraticBezierCurve3:Mi,SplineCurve:Ms}),Hi=class extends Ht{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Lr[i.type]().fromJSON(i))}return this}},Ln=class extends Hi{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _s(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new vs(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new ys(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ms(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Gi(e,t,n,i,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ot=class extends Ln{constructor(e){super(e),this.uuid=Si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ln().fromJSON(i))}return this}};function Oh(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=uc(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Hh(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let u=a,h=l;for(let d=t;d<i;d+=t){let f=s[d],p=s[d+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>h&&(h=p)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return bs(r,o,t,a,l,c,0),o}function uc(s,e,t,n,i){let r;if(i===ed(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=kl(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=kl(o/n|0,s[o],s[o+1],r);return r&&Wi(r,r.next)&&(Ts(r),r=r.next),r}function bi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Wi(t,t.next)||it(t.prev,t,t.next)===0)){if(Ts(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function bs(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Zh(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?kh(s,n,i,r):zh(s)){e.push(l.i,s.i,c.i),Ts(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Vh(bi(s),e),bs(s,e,t,n,i,r,2)):o===2&&Gh(s,e,t,n,i,r):bs(bi(s),e,t,n,i,r,1);break}}}function zh(s){let e=s.prev,t=s,n=s.next;if(it(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),h=Math.min(a,l,c),d=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&os(i,a,r,l,o,c,p.x,p.y)&&it(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kh(s,e,t,n){let i=s.prev,r=s,o=s.next;if(it(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(u,h,d),m=Math.max(a,l,c),M=Math.max(u,h,d),_=da(f,p,e,t,n),w=da(m,M,e,t,n),b=s.prevZ,y=s.nextZ;for(;b&&b.z>=_&&y&&y.z<=w;){if(b.x>=f&&b.x<=m&&b.y>=p&&b.y<=M&&b!==i&&b!==o&&os(a,u,l,h,c,d,b.x,b.y)&&it(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=m&&y.y>=p&&y.y<=M&&y!==i&&y!==o&&os(a,u,l,h,c,d,y.x,y.y)&&it(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=_;){if(b.x>=f&&b.x<=m&&b.y>=p&&b.y<=M&&b!==i&&b!==o&&os(a,u,l,h,c,d,b.x,b.y)&&it(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=M&&y!==i&&y!==o&&os(a,u,l,h,c,d,y.x,y.y)&&it(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Vh(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Wi(n,i)&&dc(n,t,t.next,i)&&Ss(n,i)&&Ss(i,n)&&(e.push(n.i,t.i,i.i),Ts(t),Ts(t.next),t=s=i),t=t.next}while(t!==s);return bi(t)}function Gh(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kh(o,a)){let l=fc(o,a);o=bi(o,o.next),l=bi(l,l.next),bs(o,e,t,n,i,r,0),bs(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Hh(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=uc(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Jh(c))}i.sort(Wh);for(let r=0;r<i.length;r++)t=Xh(i[r],t);return t}function Wh(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Xh(s,e){let t=qh(s,e);if(!t)return e;let n=fc(t,s);return bi(n,n.next),bi(t,t.next)}function qh(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Wi(s,t))return t;do{if(Wi(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&hc(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);Ss(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Yh(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Yh(s,e){return it(s.prev,s,e.prev)<0&&it(e.next,s,s.next)<0}function Zh(s,e,t,n){let i=s;do i.z===0&&(i.z=da(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,$h(i)}function $h(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function da(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Jh(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function hc(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function os(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&hc(s,e,t,n,i,r,o,a)}function Kh(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Qh(s,e)&&(Ss(s,e)&&Ss(e,s)&&jh(s,e)&&(it(s.prev,s,e.prev)||it(s,e.prev,e))||Wi(s,e)&&it(s.prev,s,s.next)>0&&it(e.prev,e,e.next)>0)}function it(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Wi(s,e){return s.x===e.x&&s.y===e.y}function dc(s,e,t,n){let i=pr(it(s,e,t)),r=pr(it(s,e,n)),o=pr(it(t,n,s)),a=pr(it(t,n,e));return!!(i!==r&&o!==a||i===0&&fr(s,t,e)||r===0&&fr(s,n,e)||o===0&&fr(t,s,n)||a===0&&fr(t,e,n))}function fr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function pr(s){return s>0?1:s<0?-1:0}function Qh(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&dc(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ss(s,e){return it(s.prev,s,s.next)<0?it(s,e,s.next)>=0&&it(s,s.prev,e)>=0:it(s,e,s.prev)<0||it(s,s.next,e)<0}function jh(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function fc(s,e){let t=fa(s.i,s.x,s.y),n=fa(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kl(s,e,t,n){let i=fa(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ts(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fa(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ed(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var pa=class{static triangulate(e,t,n=2){return Oh(e,t,n)}},pn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Vl(e),Gl(n,e);let o=e.length;t.forEach(Vl);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Gl(n,t[l]);let a=pa.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Vl(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Gl(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Bt=class s extends Be{constructor(e=new ot([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:td,b,y=!1,v,N,S,E;if(_){b=_.getSpacedPoints(u),y=!0,d=!1;let q=_.isCatmullRomCurve3?_.closed:!1;v=_.computeFrenetFrames(u,q),N=new x,S=new x,E=new x}d||(M=0,f=0,p=0,m=0);let C=a.extractPoints(c),L=C.shape,R=C.holes;if(!pn.isClockWise(L)){L=L.reverse();for(let q=0,oe=R.length;q<oe;q++){let ne=R[q];pn.isClockWise(ne)&&(R[q]=ne.reverse())}}function k(q){let ne=10000000000000001e-36,ue=q[0];for(let re=1;re<=q.length;re++){let ye=re%q.length,me=q[ye],Ee=me.x-ue.x,I=me.y-ue.y,X=Ee*Ee+I*I,G=Math.max(Math.abs(me.x),Math.abs(me.y),Math.abs(ue.x),Math.abs(ue.y)),Q=ne*G*G;if(X<=Q){q.splice(ye,1),re--;continue}ue=me}}k(L),R.forEach(k);let z=R.length,B=L;for(let q=0;q<z;q++){let oe=R[q];L=L.concat(oe)}function F(q,oe,ne){return oe||Qe("ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(oe,ne)}let Z=L.length;function g(q,oe,ne){let ue,re,ye,me=q.x-oe.x,Ee=q.y-oe.y,I=ne.x-q.x,X=ne.y-q.y,G=me*me+Ee*Ee,Q=me*X-Ee*I;if(Math.abs(Q)>Number.EPSILON){let te=Math.sqrt(G),j=Math.sqrt(I*I+X*X),le=oe.x-Ee/te,Te=oe.y+me/te,pe=ne.x-X/j,Ce=ne.y+I/j,Ie=((pe-le)*X-(Ce-Te)*I)/(me*X-Ee*I);ue=le+me*Ie-q.x,re=Te+Ee*Ie-q.y;let we=ue*ue+re*re;if(we<=2)return new de(ue,re);ye=Math.sqrt(we/2)}else{let te=!1;me>Number.EPSILON?I>Number.EPSILON&&(te=!0):me<-Number.EPSILON?I<-Number.EPSILON&&(te=!0):Math.sign(Ee)===Math.sign(X)&&(te=!0),te?(ue=-Ee,re=me,ye=Math.sqrt(G)):(ue=me,re=Ee,ye=Math.sqrt(G/2))}return new de(ue/ye,re/ye)}let Y=[];for(let q=0,oe=B.length,ne=oe-1,ue=q+1;q<oe;q++,ne++,ue++)ne===oe&&(ne=0),ue===oe&&(ue=0),Y[q]=g(B[q],B[ne],B[ue]);let D=[],A,U=Y.concat();for(let q=0,oe=z;q<oe;q++){let ne=R[q];A=[];for(let ue=0,re=ne.length,ye=re-1,me=ue+1;ue<re;ue++,ye++,me++)ye===re&&(ye=0),me===re&&(me=0),A[ue]=g(ne[ue],ne[ye],ne[me]);D.push(A),U=U.concat(A)}let O;if(M===0)O=pn.triangulateShape(B,R);else{let q=[],oe=[];for(let ne=0;ne<M;ne++){let ue=ne/M,re=f*Math.cos(ue*Math.PI/2),ye=p*Math.sin(ue*Math.PI/2)+m;for(let me=0,Ee=B.length;me<Ee;me++){let I=F(B[me],Y[me],ye);J(I.x,I.y,-re),ue===0&&q.push(I)}for(let me=0,Ee=z;me<Ee;me++){let I=R[me];A=D[me];let X=[];for(let G=0,Q=I.length;G<Q;G++){let te=F(I[G],A[G],ye);J(te.x,te.y,-re),ue===0&&X.push(te)}ue===0&&oe.push(X)}}O=pn.triangulateShape(q,oe)}let W=O.length,T=p+m;for(let q=0;q<Z;q++){let oe=d?F(L[q],U[q],T):L[q];y?(S.copy(v.normals[0]).multiplyScalar(oe.x),N.copy(v.binormals[0]).multiplyScalar(oe.y),E.copy(b[0]).add(S).add(N),J(E.x,E.y,E.z)):J(oe.x,oe.y,0)}for(let q=1;q<=u;q++)for(let oe=0;oe<Z;oe++){let ne=d?F(L[oe],U[oe],T):L[oe];y?(S.copy(v.normals[q]).multiplyScalar(ne.x),N.copy(v.binormals[q]).multiplyScalar(ne.y),E.copy(b[q]).add(S).add(N),J(E.x,E.y,E.z)):J(ne.x,ne.y,h/u*q)}for(let q=M-1;q>=0;q--){let oe=q/M,ne=f*Math.cos(oe*Math.PI/2),ue=p*Math.sin(oe*Math.PI/2)+m;for(let re=0,ye=B.length;re<ye;re++){let me=F(B[re],Y[re],ue);J(me.x,me.y,h+ne)}for(let re=0,ye=R.length;re<ye;re++){let me=R[re];A=D[re];for(let Ee=0,I=me.length;Ee<I;Ee++){let X=F(me[Ee],A[Ee],ue);y?J(X.x,X.y+b[u-1].y,b[u-1].x+ne):J(X.x,X.y,h+ne)}}}V(),$();function V(){let q=i.length/3;if(d){let oe=0,ne=Z*oe;for(let ue=0;ue<W;ue++){let re=O[ue];H(re[2]+ne,re[1]+ne,re[0]+ne)}oe=u+M*2,ne=Z*oe;for(let ue=0;ue<W;ue++){let re=O[ue];H(re[0]+ne,re[1]+ne,re[2]+ne)}}else{for(let oe=0;oe<W;oe++){let ne=O[oe];H(ne[2],ne[1],ne[0])}for(let oe=0;oe<W;oe++){let ne=O[oe];H(ne[0]+Z*u,ne[1]+Z*u,ne[2]+Z*u)}}n.addGroup(q,i.length/3-q,0)}function $(){let q=i.length/3,oe=0;K(B,oe),oe+=B.length;for(let ne=0,ue=R.length;ne<ue;ne++){let re=R[ne];K(re,oe),oe+=re.length}n.addGroup(q,i.length/3-q,1)}function K(q,oe){let ne=q.length;for(;--ne>=0;){let ue=ne,re=ne-1;re<0&&(re=q.length-1);for(let ye=0,me=u+M*2;ye<me;ye++){let Ee=Z*ye,I=Z*(ye+1),X=oe+ue+Ee,G=oe+re+Ee,Q=oe+re+I,te=oe+ue+I;se(X,G,Q,te)}}}function J(q,oe,ne){l.push(q),l.push(oe),l.push(ne)}function H(q,oe,ne){ee(q),ee(oe),ee(ne);let ue=i.length/3,re=w.generateTopUV(n,i,ue-3,ue-2,ue-1);ae(re[0]),ae(re[1]),ae(re[2])}function se(q,oe,ne,ue){ee(q),ee(oe),ee(ue),ee(oe),ee(ne),ee(ue);let re=i.length/3,ye=w.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);ae(ye[0]),ae(ye[1]),ae(ye[3]),ae(ye[1]),ae(ye[2]),ae(ye[3])}function ee(q){i.push(l[q*3+0]),i.push(l[q*3+1]),i.push(l[q*3+2])}function ae(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return nd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lr[i.type]().fromJSON(i)),new s(n,e.options)}},td={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new de(r,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],m=e[r*3],M=e[r*3+1],_=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(d,1-p),new de(m,1-_)]:[new de(a,1-l),new de(u,1-h),new de(f,1-p),new de(M,1-_)]}};function nd(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Dn=class s extends Be{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ve(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new x,d=new de,f=new x,p=new x,m=new x,M=0,_=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:M=e[w+1].x-e[w].x,_=e[w+1].y-e[w].y,f.x=_*1,f.y=-M,f.z=_*0,m.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:M=e[w+1].x-e[w].x,_=e[w+1].y-e[w].y,f.x=_*1,f.y=-M,f.z=_*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),l.push(f.x,f.y,f.z),m.copy(p)}for(let w=0;w<=t;w++){let b=n+w*u*i,y=Math.sin(b),v=Math.cos(b);for(let N=0;N<=e.length-1;N++){h.x=e[N].x*y,h.y=e[N].y,h.z=e[N].x*v,o.push(h.x,h.y,h.z),d.x=w/t,d.y=N/(e.length-1),a.push(d.x,d.y);let S=l[3*N+0]*y,E=l[3*N+1],C=l[3*N+0]*v;c.push(S,E,C)}}for(let w=0;w<t;w++)for(let b=0;b<e.length-1;b++){let y=b+w*e.length,v=y,N=y+e.length,S=y+e.length+1,E=y+1;r.push(v,N,E),r.push(S,E,N)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ne=class s extends Be{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],m=[],M=[];for(let _=0;_<u;_++){let w=_*d-o;for(let b=0;b<c;b++){let y=b*h-r;p.push(y,-w,0),m.push(0,0,1),M.push(b/a),M.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){let b=w+c*_,y=w+c*(_+1),v=w+1+c*(_+1),N=w+1+c*_;f.push(b,y,N),f.push(y,v,N)}this.setIndex(f),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(m,3)),this.setAttribute("uv",new Re(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Nn=class s extends Be{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/i,f=new x,p=new de;for(let m=0;m<=i;m++){for(let M=0;M<=n;M++){let _=r+M/n*o;f.x=h*Math.cos(_),f.y=h*Math.sin(_),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let m=0;m<i;m++){let M=m*(n+1);for(let _=0;_<n;_++){let w=_+M,b=w,y=w+n+1,v=w+n+2,N=w+1;a.push(b,y,N),a.push(y,v,N)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Wt=class s extends Be{constructor(e=new ot([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(o,2));function c(u){let h=i.length/3,d=u.extractPoints(t),f=d.shape,p=d.holes;pn.isClockWise(f)===!1&&(f=f.reverse());for(let M=0,_=p.length;M<_;M++){let w=p[M];pn.isClockWise(w)===!0&&(p[M]=w.reverse())}let m=pn.triangulateShape(f,p);for(let M=0,_=p.length;M<_;M++){let w=p[M];f=f.concat(w)}for(let M=0,_=f.length;M<_;M++){let w=f[M];i.push(w.x,w.y,0),r.push(0,0,1),o.push(w.x,w.y)}for(let M=0,_=m.length;M<_;M++){let w=m[M],b=w[0]+h,y=w[1]+h,v=w[2]+h;n.push(b,y,v),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return id(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function id(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Ze=class s extends Be{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new x,d=new x,f=[],p=[],m=[],M=[];for(let _=0;_<=n;_++){let w=[],b=_/n,y=o+b*a,v=e*Math.cos(y),N=Math.sqrt(e*e-v*v),S=0;_===0&&o===0?S=.5/t:_===n&&l===Math.PI&&(S=-.5/t);for(let E=0;E<=t;E++){let C=E/t,L=i+C*r;h.x=-N*Math.cos(L),h.y=v,h.z=N*Math.sin(L),p.push(h.x,h.y,h.z),d.copy(h).normalize(),m.push(d.x,d.y,d.z),M.push(C+S,1-b),w.push(c++)}u.push(w)}for(let _=0;_<n;_++)for(let w=0;w<t;w++){let b=u[_][w+1],y=u[_][w],v=u[_+1][w],N=u[_+1][w+1];(_!==0||o>0)&&f.push(b,y,N),(_!==n-1||l<Math.PI)&&f.push(y,v,N)}this.setIndex(f),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(m,3)),this.setAttribute("uv",new Re(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xt=class s extends Be{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],h=[],d=new x,f=new x,p=new x;for(let m=0;m<=n;m++){let M=o+m/n*a;for(let _=0;_<=i;_++){let w=_/i*r;f.x=(e+t*Math.cos(M))*Math.cos(w),f.y=(e+t*Math.cos(M))*Math.sin(w),f.z=t*Math.sin(M),c.push(f.x,f.y,f.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(_/i),h.push(m/n)}}for(let m=1;m<=n;m++)for(let M=1;M<=i;M++){let _=(i+1)*m+M-1,w=(i+1)*(m-1)+M-1,b=(i+1)*(m-1)+M,y=(i+1)*m+M;l.push(_,w,y),l.push(w,b,y)}this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Xi=class s extends Be{constructor(e=new Mi(new x(-1,-1,0),new x(-1,1,0),new x(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new x,l=new x,c=new de,u=new x,h=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function m(){for(let b=0;b<t;b++)M(b);M(r===!1?t:0),w(),_()}function M(b){u=e.getPointAt(b/t,u);let y=o.normals[b],v=o.binormals[b];for(let N=0;N<=i;N++){let S=N/i*Math.PI*2,E=Math.sin(S),C=-Math.cos(S);l.x=C*y.x+E*v.x,l.y=C*y.y+E*v.y,l.z=C*y.z+E*v.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function _(){for(let b=1;b<=t;b++)for(let y=1;y<=i;y++){let v=(i+1)*(b-1)+(y-1),N=(i+1)*b+(y-1),S=(i+1)*b+y,E=(i+1)*(b-1)+y;p.push(v,N,E),p.push(N,S,E)}}function w(){for(let b=0;b<=t;b++)for(let y=0;y<=i;y++)c.x=b/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Lr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function pc(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Hl(i))i.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Hl(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Lt(s){let e={};for(let t=0;t<s.length;t++){let n=pc(s[t]);for(let i in n)e[i]=n[i]}return e}function Hl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}var be=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ws=class extends Pt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function mr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var ni=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dr=class extends ni{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ia,endingEnd:ia}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sa:r=e,a=2*t-n;break;case ra:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sa:o=e,l=2*n-t;break;case ra:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),m=p*p,M=m*p,_=-d*M+2*d*m-d*p,w=(1+d)*M+(-1.5-2*d)*m+(-.5+d)*p+1,b=(-1-f)*M+(1.5+f)*m+.5*p,y=f*M-f*m;for(let v=0;v!==a;++v)r[v]=_*o[u+v]+w*o[c+v]+b*o[l+v]+y*o[h+v];return r}},Nr=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Ur=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Fr=class extends ni{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(i-t),m=1-p;for(let M=0;M!==a;++M)r[M]=o[c+M]*m+o[l+M]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let m=o[c+p],M=o[l+p],_=f*d+p*2,w=h[_],b=h[_+1],y=e*d+p*2,v=u[y],N=u[y+1],S=(n-t)/(i-t),E,C,L,R,P;for(let k=0;k<8;k++){E=S*S,C=E*S,L=1-S,R=L*L,P=R*L;let B=P*t+3*R*S*w+3*L*E*v+C*i-n;if(Math.abs(B)<1e-10)break;let F=3*R*(w-t)+6*L*S*(v-w)+3*E*(i-v);if(Math.abs(F)<1e-10)break;S=S-B/F,S=Math.max(0,Math.min(1,S))}r[p]=P*m+3*R*S*b+3*L*E*N+C*M}return r}},Xt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mr(t,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:mr(e.times,Array),values:mr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ur(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Nr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Fr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case yr:t=this.InterpolantFactoryMethodSmooth;break;case na:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return st("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return yr;case this.InterpolantFactoryMethodBezier:return na}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&$u(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yr,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[d+p]||m!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Xt.prototype.ValueTypeName="";Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=Mr;var ii=class extends Xt{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="bool";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=ds;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends Xt{constructor(e,t,n,i){super(e,t,n,i)}};Br.prototype.ValueTypeName="color";var Or=class extends Xt{constructor(e,t,n,i){super(e,t,n,i)}};Or.prototype.ValueTypeName="number";var zr=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Me.slerpFlat(r,0,o,c-a,o,c,l);return r}},As=class extends Xt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new zr(this.times,this.values,this.getValueSize(),e)}};As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;var si=class extends Xt{constructor(e,t,n){super(e,t,n)}};si.prototype.ValueTypeName="string";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=ds;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends Xt{constructor(e,t,n,i){super(e,t,n,i)}};kr.prototype.ValueTypeName="vector";var Vr=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mc=new Vr,Gr=class{constructor(e){this.manager=e!==void 0?e:mc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Go=new $e,Wl=new x,Xl=new x,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Ia,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new yi(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wl),Xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xl),t.updateMatrixWorld(),Go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gr=new x,xr=new Me,fn=new x,Wr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gr,xr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,xr,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(gr,xr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,xr,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Jn=new x,ql=new de,Yl=new de,Xr=class extends Wr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(as*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(as*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,ql,Yl),t.subVectors(Yl,ql)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(as*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ga=class extends ma{constructor(){super(new Xr(90,1,.5,500)),this.isPointLightShadow=!0}},Es=class extends Hr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ga}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var Ba="\\[\\]\\.:\\/",sd=new RegExp("["+Ba+"]","g"),Oa="[^"+Ba+"]",rd="[^"+Ba.replace("\\.","")+"]",od=/((?:WC+[\/:])*)/.source.replace("WC",Oa),ad=/(WCOD+)?/.source.replace("WCOD",rd),ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oa),cd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oa),ud=new RegExp("^"+od+ad+ld+cd+"$"),hd=["material","materials","bones","map"],xa=class{constructor(e,t,n){let i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ke=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sd,"")}static parseTrackName(e){let t=ud.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);hd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=xa;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var b0=new Float32Array(1);var Zl=new $e,Un=class{constructor(e,t,n=0,i=1/0){this.ray=new rt(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zl),this}intersectObject(e,t=!0,n=[]){return ya(e,this,n,t),n.sort($l),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ya(e[i],this,n,t);return n.sort($l),n}};function $l(s,e){return s.distance-e.distance}function ya(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)ya(r[o],e,t,!0)}}var Ha=class Ha{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Ha.prototype.isMatrix2=!0;var _a=Ha;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var xd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
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
#endif`,Ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pd=`#ifdef USE_IRIDESCENCE
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
#endif`,Id=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kd=`#define PI 3.141592653589793
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,uf=`#ifdef USE_ENVMAP
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
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
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
#endif`,gf=`uniform sampler2D dfgLUT;
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
}`,xf=`
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cf=`#if defined( USE_POINTS_UV )
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
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`#ifdef USE_MORPHTARGETS
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
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
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
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
}`,Ap=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`uniform float scale;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Lp=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Np=`#define LAMBERT
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
}`,Up=`#define LAMBERT
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
}`,Fp=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,Op=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,kp=`#define PHONG
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
}`,Vp=`#define PHONG
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
}`,Gp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
}`,Wp=`#define TOON
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
}`,Xp=`#define TOON
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
}`,qp=`uniform float size;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,$p=`uniform vec3 color;
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
}`,Jp=`uniform float rotation;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:xd,alphahash_pars_fragment:yd,alphamap_fragment:_d,alphamap_pars_fragment:vd,alphatest_fragment:Md,alphatest_pars_fragment:bd,aomap_fragment:Sd,aomap_pars_fragment:Td,batching_pars_vertex:wd,batching_vertex:Ad,begin_vertex:Ed,beginnormal_vertex:Cd,bsdfs:Rd,iridescence_fragment:Pd,bumpmap_pars_fragment:Id,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Nd,clipping_planes_vertex:Ud,color_fragment:Fd,color_pars_fragment:Bd,color_pars_vertex:Od,color_vertex:zd,common:kd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:Zd,envmap_fragment:$d,envmap_common_pars_fragment:Jd,envmap_pars_fragment:Kd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:uf,envmap_vertex:jd,fog_vertex:ef,fog_pars_vertex:tf,fog_fragment:nf,fog_pars_fragment:sf,gradientmap_pars_fragment:rf,lightmap_pars_fragment:of,lights_lambert_fragment:af,lights_lambert_pars_fragment:lf,lights_pars_begin:cf,lights_toon_fragment:hf,lights_toon_pars_fragment:df,lights_phong_fragment:ff,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:xf,lights_fragment_maps:yf,lights_fragment_end:_f,lightprobes_pars_fragment:vf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:Tf,map_fragment:wf,map_pars_fragment:Af,map_particle_fragment:Ef,map_particle_pars_fragment:Cf,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Pf,morphinstance_vertex:If,morphcolor_vertex:Lf,morphnormal_vertex:Df,morphtarget_pars_vertex:Nf,morphtarget_vertex:Uf,normal_fragment_begin:Ff,normal_fragment_maps:Bf,normal_pars_fragment:Of,normal_pars_vertex:zf,normal_vertex:kf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:Xf,opaque_fragment:qf,packing:Yf,premultiplied_alpha_fragment:Zf,project_vertex:$f,dithering_fragment:Jf,dithering_pars_fragment:Kf,roughnessmap_fragment:Qf,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:tp,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:op,skinnormal_vertex:ap,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:up,tonemapping_pars_fragment:hp,transmission_fragment:dp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:xp,background_vert:yp,background_frag:_p,backgroundCube_vert:vp,backgroundCube_frag:Mp,cube_vert:bp,cube_frag:Sp,depth_vert:Tp,depth_frag:wp,distance_vert:Ap,distance_frag:Ep,equirect_vert:Cp,equirect_frag:Rp,linedashed_vert:Pp,linedashed_frag:Ip,meshbasic_vert:Lp,meshbasic_frag:Dp,meshlambert_vert:Np,meshlambert_frag:Up,meshmatcap_vert:Fp,meshmatcap_frag:Bp,meshnormal_vert:Op,meshnormal_frag:zp,meshphong_vert:kp,meshphong_frag:Vp,meshphysical_vert:Gp,meshphysical_frag:Hp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:Yp,shadow_vert:Zp,shadow_frag:$p,sprite_vert:Jp,sprite_frag:Kp},ve={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},gc={basic:{uniforms:Lt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Lt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Lt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Lt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Lt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Lt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Lt([ve.points,ve.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Lt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Lt([ve.common,ve.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Lt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Lt([ve.sprite,ve.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Lt([ve.common,ve.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Lt([ve.lights,ve.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};gc.physical={uniforms:Lt([gc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Qp=new Fe;Qp.set(-1,0,0,0,1,0,0,0,1);var I_={[ba]:"LINEAR_TONE_MAPPING",[Sa]:"REINHARD_TONE_MAPPING",[Ta]:"CINEON_TONE_MAPPING",[wa]:"ACES_FILMIC_TONE_MAPPING",[Ea]:"AGX_TONE_MAPPING",[Ca]:"NEUTRAL_TONE_MAPPING",[Aa]:"CUSTOM_TONE_MAPPING"};var L_=new Float32Array(16),D_=new Float32Array(9),N_=new Float32Array(4);var U_={[ba]:"Linear",[Sa]:"Reinhard",[Ta]:"Cineon",[wa]:"ACESFilmic",[Ea]:"AgX",[Ca]:"Neutral",[Aa]:"Custom"};var F_={[Jl]:"SHADOWMAP_TYPE_PCF",[Kl]:"SHADOWMAP_TYPE_VSM"};var B_={[tc]:"ENVMAP_TYPE_CUBE",[Pa]:"ENVMAP_TYPE_CUBE",[nc]:"ENVMAP_TYPE_CUBE_UV"};var O_={[Pa]:"ENVMAP_MODE_REFRACTION"};var z_={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[jl]:"ENVMAP_BLENDING_MIX",[ec]:"ENVMAP_BLENDING_ADD"};var jp=new Fe;jp.set(-1,0,0,0,1,0,0,0,1);var k_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var ie={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function Ti(s,e,t,n,i,r=16){r=Math.min(r,n/2,i/2),s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.quadraticCurveTo(e+n,t,e+n,t+r),s.lineTo(e+n,t+i-r),s.quadraticCurveTo(e+n,t+i,e+n-r,t+i),s.lineTo(e+r,t+i),s.quadraticCurveTo(e,t+i,e,t+i-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath()}function et(s,e,t,n,i,{top:r="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=s.createLinearGradient(e,t,e,t+i);c.addColorStop(0,r),c.addColorStop(1,o),s.fillStyle=c,Ti(s,e,t,n,i,l),s.fill(),s.strokeStyle=a,s.lineWidth=1.5,s.stroke()}function wt(s,e,t){let n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),s.fillStyle=n,s.fillRect(0,0,e,t),s.save(),s.globalAlpha=.13,s.strokeStyle="#79b3d1",s.lineWidth=1;for(let i=0;i<8;i++)s.beginPath(),s.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),s.stroke();s.restore(),s.fillStyle=ie.gold,s.fillRect(32,0,96,4)}function ce(s,e,t,n,i=28,r=ie.ink,o="600",a){s.font=`${o} ${i}px Arial`,s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Number.isFinite(a)?s.fillText(e,t,n,a):s.fillText(e,t,n)}function Fn(s,e,t,n,i,r=ie.gold){if(s.save(),s.translate(t,n),s.scale(i/48,i/48),s.lineWidth=2.8,s.lineCap="round",s.lineJoin="round",s.strokeStyle=r,s.fillStyle=r,e==="ball")s.beginPath(),s.arc(0,0,18,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-18,0),s.lineTo(18,0),s.stroke(),s.fillStyle="#183a51",s.beginPath(),s.arc(0,0,6,0,Math.PI*2),s.fill(),s.stroke();else if(e==="puff"){s.beginPath(),s.arc(0,3,16,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-14,-5),s.lineTo(-15,-19),s.lineTo(-5,-11),s.moveTo(14,-5),s.lineTo(15,-19),s.lineTo(5,-11),s.stroke(),s.beginPath(),s.arc(0,-8,5,0,Math.PI*1.5),s.stroke();for(let o of[-6,6])s.beginPath(),s.arc(o,3,2,0,Math.PI*2),s.fill();s.beginPath(),s.arc(0,7,5,.2,Math.PI-.2),s.stroke()}else if(e==="book")Ti(s,-20,-15,40,32,4),s.stroke(),s.beginPath(),s.moveTo(0,-15),s.lineTo(0,17),s.moveTo(-14,-6),s.lineTo(-5,-6),s.moveTo(5,-6),s.lineTo(14,-6),s.stroke();else if(e==="trophy")s.beginPath(),s.moveTo(-13,-17),s.lineTo(13,-17),s.lineTo(9,-3),s.quadraticCurveTo(0,8,-9,-3),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(0,5),s.lineTo(0,16),s.moveTo(-10,18),s.lineTo(10,18),s.moveTo(-13,-13),s.quadraticCurveTo(-25,-16,-19,-5),s.lineTo(-9,0),s.moveTo(13,-13),s.quadraticCurveTo(25,-16,19,-5),s.lineTo(9,0),s.stroke();else if(e==="golf")s.beginPath(),s.ellipse(0,13,18,6,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-3,13),s.lineTo(-3,-20),s.lineTo(15,-14),s.lineTo(-3,-7),s.stroke(),s.beginPath(),s.arc(10,8,3,0,Math.PI*2),s.fill();else if(e==="car"){Ti(s,-19,-15,38,30,5),s.stroke(),Ti(s,-11,-9,22,14,3),s.stroke();for(let o of[-22,18])for(let a of[-13,7])Ti(s,o,a,4,7,1),s.fill();s.beginPath(),s.moveTo(-12,10),s.lineTo(12,10),s.moveTo(0,-15),s.lineTo(0,-23),s.stroke()}else if(e==="target"){for(let o of[19,12,4])s.beginPath(),s.arc(0,0,o,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(0,0),s.lineTo(20,-20),s.moveTo(12,-20),s.lineTo(20,-20),s.lineTo(20,-12),s.stroke()}else s.beginPath(),s.moveTo(-6,-12),s.lineTo(12,0),s.lineTo(-6,12),s.closePath(),s.fill();s.restore()}function xc(s,e,t,n,i,r){let o=e==="RC car racing"?{title:"RC car racing",sub:"Three laps \xB7 steer, race and beat your best",icon:"car",accent:ie.blue}:e==="Arcade wall of fame"?{title:"Arcade wall of fame",sub:"Personal bests \xB7 medals \xB7 trophy shelf",icon:"trophy",accent:ie.gold}:e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:ie.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:ie.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:ie.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:ie.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:ie.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:ie.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:ie.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:ie.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:ie.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:ie.pink}:null;if(o)et(s,t,n,i,72,{top:r?"#365c70":"#21465e",bottom:r?"#25465a":"#19364b",stroke:r?o.accent:"#3b5c71"}),s.fillStyle=o.accent,Ti(s,t+1,n+15,4,42,2),s.fill(),Fn(s,o.icon,t+41,n+36,42,o.accent),ce(s,o.title,t+82,n+31,i<600?26:29,ie.ink,"700"),ce(s,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,ie.muted,"400",i-125),ce(s,"\u203A",t+i-35,n+47,42,r?o.accent:ie.muted,"400");else{let a=e==="Resume";et(s,t,n,i,72,{top:a?r?"#fff0c2":"#f8df9e":r?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":r?ie.gold:"#496379"}),a&&Fn(s,"play",t+33,n+36,25,"#173247"),ce(s,e,t+(a?60:24),n+46,28,a?"#122c40":ie.ink,"700")}}function yc(s,e){wt(s,1024,768),ce(s,"TF JONES  /  PLAY IN THE YARD",44,37,19,ie.blue,"700"),ce(s,"Mollie\u2019s adventures",44,93,48,ie.ink,"700"),ce(s,"Point with your right hand, then pull the trigger.",44,132,24,ie.muted,"400"),et(s,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),ce(s,e,60,172,23,ie.mint,"500",900)}function Wa(s,e,t,n,i){et(s,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),ce(s,e,n+9,i,21,ie.gold,"700"),ce(s,t,n+45,i,21,ie.muted,"400")}function _c(s,e=!1){Wa(s,"Y","Games menu",44,663),Wa(s,"B","Back",325,663),Wa(s,"A",e?"Rescue / replay":"Replay round",548,663),s.strokeStyle="#355168",s.beginPath(),s.moveTo(44,692),s.lineTo(980,692),s.stroke(),ce(s,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,ie.blue,"700"),ce(s,e?"Race paused \xB7 grip brakes":"Right grip to teleport",674,731,21,ie.muted,"400")}function vc(s,e){s.clearRect(0,0,768,192),et(s,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),s.fillStyle=ie.gold,Ti(s,23,27,5,138,2),s.fill(),s.font="600 32px Arial";let t=[],n="";for(let r of e.split(/\s+/)){let o=n?n+" "+r:r;s.measureText(o).width>660&&n?(t.push(n),n=r):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((r,o)=>ce(s,r,47,i+o*42,32,ie.ink,"600"))}function Mc(s,{total:e,throws:t,best:n,last:i}){wt(s,1024,640),Fn(s,"target",72,66,55,ie.mint),ce(s,"STAFF-ROOM DARTS",119,79,40,ie.ink,"700"),ce(s,"NINE DART CHALLENGE",39,136,24,ie.muted,"700"),ce(s,String(e),36,281,142,ie.gold,"700"),ce(s,"POINTS",280,277,32,ie.muted,"700"),et(s,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),ce(s,"PERSONAL BEST",721,203,24,ie.muted,"600"),ce(s,String(n),721,264,52,ie.mint,"700");for(let r=0;r<9;r++){let o=r<t;et(s,40+r*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),ce(s,String(r+1),72+r*104,358,28,o?"#132e41":ie.muted,"700")}et(s,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),ce(s,i,61,458,36,ie.ink,"600",890),ce(s,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,ie.mint,"600"),ce(s,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,ie.muted,"400")}var bc=new Map;function Ot(s,e,t="target",n=ie.gold,i=1.7){let r=[s,e,t,n].join("|"),o=bc.get(r);if(!o){let u=document.createElement("canvas");u.width=1024,u.height=256;let h=u.getContext("2d");h.fillStyle="#0a1b2c",h.fillRect(0,0,1024,256),et(h,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),h.fillStyle=n,h.fillRect(32,36,5,182),Fn(h,t,110,128,88,n),ce(h,s,192,123,58,ie.ink,"700",790),ce(h,e,194,186,26,n,"600",775),o=new De(u),o.colorSpace=Pe,bc.set(r,o)}let a=new ge;a.name=s+" \xB7 activity sign";let l=new xe(new Ne(i,i/4),new Se({map:o}));a.add(l);let c=new xe(new _e(i+.055,i/4+.055,.04),new be({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var Cs;function qi(){if(!Cs){let s=document.createElement("canvas");s.width=512,s.height=1024;let e=s.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let r=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(r,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(r,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=r+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(r,Math.floor((l+n())*341),o,1)}Cs=new De(s),Cs.colorSpace=Pe,Cs.anisotropy=4}return new be({map:Cs,color:16777215,roughness:.28,metalness:.04})}var Xa;function Qt(s=.5,e=.32){if(!Xa){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,64);r.addColorStop(0,"rgba(4,12,20,.48)"),r.addColorStop(.55,"rgba(4,12,20,.2)"),r.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),Xa=new De(n)}let t=new xe(new Ne(s,e),new Se({map:Xa,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function ri(s=1.4){let e=new ge;e.name="Warm arcade light fitting";let t=new xe(new _e(s,.09,.17),new be({color:2504518,roughness:.6}));e.add(t);let n=new xe(new Ne(s-.1,.115),new Se({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function Sc(s){let e=new Es(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,s.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new x(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new x(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var vt={left:-1.03,right:1.03,front:.08,back:6.95},Rs=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function oi(s,e,t){let n=.033,i=0,r=0;for(let o of t.ramps){let a=s-o.x,l=e-o.z,c=o.w/2,u=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=u)continue;let h=Math.min(.16,c*.3),d=Math.min(1,(c-Math.abs(a))/h),f=1-Math.abs(l)/u,p=o.h*d*f;.033+p>n&&(n=.033+p,i=d<1?-Math.sign(a)*o.h*f/h:0,r=-Math.sign(l||1e-4)*o.h*d/u)}return{height:n,gx:i,gz:r}}function em(s,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,s.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,s.z)),i=s.x-t,r=s.z-n,o=Math.hypot(i,r);if(o>=.038)return;if(o<1e-9){let l=[[s.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-s.x,1,0],[s.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-s.z,0,1]].sort((c,u)=>c[0]-u[0]);[,i,r]=l[0],s.x+=i*(l[0][0]+.038+1e-4),s.z+=r*(l[0][0]+.038+1e-4)}else i/=o,r/=o,s.x+=i*(.038-o+1e-4),s.z+=r*(.038-o+1e-4);let a=s.vx*i+s.vz*r;a<0&&(s.vx-=1.68*a*i,s.vz-=1.68*a*r)}function tm(s,e,t,n,i,r){let o=i-t,a=r-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((s-t)*o+(e-n)*a)/l)):0;return Math.hypot(s-t-o*c,e-n-a*c)}function wc(s,e,t){if(s.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),r=n/i;for(let o=0;o<i;o++){let a=s.x,l=s.z,c=oi(s.x,s.z,e);s.vx-=7*c.gx*r,s.vz-=7*c.gz*r;let u=Math.hypot(s.vx,s.vz),h=Math.max(0,u-.4*r);u&&(s.vx*=h/u,s.vz*=h/u),s.x+=s.vx*r,s.z+=s.vz*r;for(let[d,f,p,m]of[["x","vx",vt.left+.038,vt.right-.038],["z","vz",vt.front+.038,vt.back-.038]])s[d]<p&&(s[d]=p,s[f]<0&&(s[f]*=-.72)),s[d]>m&&(s[d]=m,s[f]>0&&(s[f]*=-.72));for(let d of[...e.crates,...e.walls||[]])em(s,d);if(s.distance=(s.distance||0)+Math.hypot(s.x-a,s.z-l),s.y=oi(s.x,s.z,e).height+.038,Math.hypot(s.vx,s.vz)<=1.15&&tm(e.cup.x,e.cup.z,a,l,s.x,s.z)<.115-.038*.6){s.sunk=!0,s.x=e.cup.x,s.z=e.cup.z,s.vx=s.vz=0;break}Math.hypot(s.vx,s.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(s.vx=s.vz=0)}}var Yr=s=>{let e=Math.hypot(s.x,s.y,s.z);return e>1e-5?{x:s.x/e,y:s.y/e,z:s.z/e}:null},qa=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),Zr=(s,e)=>s.x*e.x+s.y*e.y+s.z*e.z,Tc=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x});function Ac(s,e,t,n,i=null){if(n<=0||n>.1)return null;let r=(e.x-s.x)/n,o=(e.y-s.y)/n,a=(e.z-s.z)/n;if(Math.hypot(r,o,a)>8||Zr(s.forward,e.forward)<.4)return null;let l=i||{x:r,y:o,z:a};if(Math.hypot(l.x,l.y,l.z)>8)return null;let c=Math.hypot(e.x-s.x,e.y-s.y,e.z-s.z),u=Math.hypot(e.forward.x-s.forward.x,e.forward.y-s.forward.y,e.forward.z-s.forward.z),h=Math.max(1,Math.ceil((c+u*.12)/.008));for(let d=0;d<=h;d++){let f=d/h,p=qa(s,e,f),m=Yr(qa(s.forward,e.forward,f)),M=Yr(qa(s.side,e.side,f));if(!m||!M)continue;let _=Yr(Tc(M,m)),w=_&&Yr(Tc(m,_));if(!w)continue;let b={x:t.x-p.x,y:t.y-p.y,z:t.z-p.z},y=Zr(b,w),v=Zr(b,_),N=Zr(b,m);if(Math.hypot(Math.max(0,Math.abs(y)-.104),Math.max(0,Math.abs(v)-.027),Math.max(0,Math.abs(N)-.058))>.038+.01)continue;let E=N>=0?1:-1,C={x:m.x*E,z:m.z*E},L=Math.hypot(C.x,C.z);if(L<.65)continue;C.x/=L,C.z/=L;let R=l.x*C.x+l.z*C.z;if(R<.07)continue;let P=Math.min(3.6,R*.92);return{vx:C.x*P,vz:C.z*P}}return null}var nm=new Me().setFromAxisAngle(new x(1,0,0),-Math.PI/2);function Ec(s){let e=s.rightGripController,t=e&&e!==s.controller?e:s.controller;if(!t||t.visible===!1)return null;let n=t.getWorldPosition(new x),i=t.getWorldQuaternion(new Me);return e&&e!==s.controller&&i.multiply(nm),{position:n,quaternion:i,down:new x(0,-1,0).applyQuaternion(i)}}function Cc(s){let e=new ge;e.name="Controller putter",s.add(e);let t=new be({color:12964307,metalness:.72,roughness:.23}),n=new be({color:1518388,roughness:.9}),i=(M,_,w=e)=>{let b=new xe(M,_);return w.add(b),b},r=i(new ze(.008,.009,1,10),t),o=i(new ze(.017,.02,.17,14),n);o.position.y=-.025;for(let M=0;M<5;M++){let _=i(new xt(.018,.0011,4,12),new be({color:5005926,roughness:.8}),o);_.rotation.x=Math.PI/2,_.position.y=-.065+M*.03}let a=new ge;a.name="Mallet putter head",e.add(a);let l=new ot;l.moveTo(-.083,-.05),l.lineTo(.083,-.05),l.quadraticCurveTo(.099,-.05,.099,-.03),l.lineTo(.099,.035),l.quadraticCurveTo(.099,.053,.077,.053),l.lineTo(-.077,.053),l.quadraticCurveTo(-.099,.053,-.099,.035),l.lineTo(-.099,-.03),l.quadraticCurveTo(-.099,-.05,-.083,-.05);let c=i(new Bt(l,{depth:.041,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:6}),t,a);c.rotation.x=Math.PI/2,c.position.y=.0205;let u=i(new _e(.18,.032,.004),new be({color:3432035,roughness:.65}),a);u.position.z=-.055,i(new _e(.085,.003,.073),n,a).position.set(0,.026,.006);for(let M of[-.021,.021])i(new _e(.005,.002,.068),new Se({color:16248017}),a).position.set(M,.028,.004);i(new ze(.012,.014,.046,10),t,a).position.set(-.055,.026,.014);let f=.86;e.visible=!1;function p(M){f=qe.clamp(M,.3,1.6),a.position.set(0,-f,0);let _=new x(-.055,-f+.044,.014);r.position.copy(_).multiplyScalar(.5),r.scale.y=_.length(),r.quaternion.setFromUnitVectors(new x(0,1,0),_.clone().normalize())}p(f);function m(M){e.position.copy(M.position),e.quaternion.copy(M.quaternion),e.updateMatrixWorld(!0);let _=a.getWorldPosition(new x),w=a.getWorldQuaternion(new Me);return{x:_.x,y:_.y,z:_.z,forward:new x(0,0,-1).applyQuaternion(w),side:new x(1,0,0).applyQuaternion(w),up:new x(0,1,0).applyQuaternion(w)}}return{root:e,head:a,face:u,size:p,update:m,get length(){return f}}}var Bn;function im(){if(!Bn){let s=document.createElement("canvas");s.width=256,s.height=512;let e=s.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,r,1,2)}Bn=new De(s),Bn.colorSpace=Pe,Bn.wrapS=Bn.wrapT=Jt,Bn.repeat.set(1/(vt.right-vt.left),1/(vt.back-vt.front)),Bn.offset.set(.5,1.02),Bn.anisotropy=4}return new be({map:Bn,roughness:.95})}function Rc(s,e,t,n){let i=new ge;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let r=new ge;r.name="Six-hole warehouse course",i.add(r);let o=G=>new be({color:G,roughness:.65}),a=(G,Q,te,j,le,Te=r)=>{let pe=new xe(G,Q);return pe.position.set(te,j,le),Te.add(pe),pe},l=a(new Ze(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=Qt(.16,.16);i.add(c);let u=Cc(i),h=u.root,d=u.head,f=new Se({color:16766588,transparent:!0,opacity:.78,depthWrite:!1,side:at}),p=a(new Nn(.13,.142,40),f,0,0,0,i);p.name="Putter contact guide",p.rotation.x=-Math.PI/2,p.visible=!1;let m=new It(new Be().setFromPoints([new x,new x]),new Pt({color:8645568,transparent:!0,opacity:.7,depthWrite:!1}));m.name="Putter face direction",m.visible=!1,i.add(m);let M=document.createElement("canvas");M.width=1024,M.height=640;let _=M.getContext("2d"),w=new De(M);w.colorSpace=Pe;let b=a(new Ne(2.2,1.375),new Se({map:w}),0,0,0,i);b.name="Mini-golf scorecard";let y=null,v=!1,N=0,S=0,E=[],C=null,L=!1,R=!1,P=null,k=!1,z=!1,B=!1,F=0,Z="Hold trigger and brush the putter through the ball.",g=null,Y=!0,D=[],A=0,U=new Me,O=()=>E.reduce((G,Q)=>G+Q,0),W=Rs.reduce((G,Q)=>G+Q.par,0),T=()=>Rs[N];try{let G=localStorage.getItem("tfj-mini-golf-best-v1"),Q=Number(G);G!==null&&Number.isFinite(Q)&&Q>=6&&(C=Q)}catch{}function V(){wt(_,1024,640),ce(_,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,ie.mint,"700"),ce(_,B?"COURSE COMPLETE":`${N+1} / 6  \xB7  ${T().name.toUpperCase()}`,32,117,42,ie.ink,"700",954),ce(_,B?`${O()} strokes  \xB7  Par ${W}`:`${S} strokes  \xB7  Par ${T().par}`,32,190,43,ie.gold,"700");for(let G=0;G<6;G++){let Q=32+G*161,te=G===N;et(_,Q,227,151,177,{top:te?"#26594a":"#183d43",bottom:"#0d2934",stroke:te?ie.gold:"#527779"}),ce(_,`HOLE ${G+1}`,Q+13,260,24,te?ie.gold:ie.muted),ce(_,E[G]===void 0?"\u2014":String(E[G]),Q+18,334,58,ie.ink,"700"),ce(_,`PAR ${Rs[G].par}`,Q+13,382,22,ie.muted)}ce(_,`TOTAL ${O()+(z?0:S)}  \xB7  BEST ${C??"\u2014"}`,32,459,32,ie.mint,"700"),ce(_,Z,32,513,26,ie.ink,"600",954),ce(_,B?"A  PLAY AGAIN":z?"A  NEXT HOLE":"A  MOVE & FIT CLUB",32,578,27,ie.gold,"700"),ce(_,"Y  PAUSE / MENU",684,578,26,ie.muted),w.needsUpdate=!0}function $(){for(let G of[3,2,1.5,4,5,6])for(let Q of[-30,-29,-28,-27]){let te=!0;for(let j=-1.1;j<=1.1;j+=.275)for(let le=0;le<=7.8;le+=.25)(s.blocked(G+j,Q+le,0)||Math.abs(s.groundAt(G+j,Q+le,.1))>.1)&&(te=!1);if(te)return new x(G,0,Q)}return null}function K(){let G=qi();return G.roughness=.78,G}function J(G){let Q=a(new _e(G.w,.25,G.d),K(),G.x,.155,G.z);Q.name="Pallet obstacle";for(let te=0;te<4;te++)a(new _e(G.w/4-.018,.026,G.d+.01),K(),G.x+(te-1.5)*G.w/4,.293,G.z);for(let te of[-1,1])a(new _e(.025,.18,G.d+.018),o("#8d724d"),G.x+te*(G.w/2-.018),.165,G.z)}function H(G){let j=[],le=[],Te=[];for(let we=0;we<=20;we++)for(let he=0;he<=12;he++){let ke=G.x-G.w/2+G.w*he/12,Oe=G.z-G.d/2+G.d*we/20;j.push(ke,oi(ke,Oe,T()).height+.002,Oe),le.push(ke,-Oe)}for(let we=0;we<20;we++)for(let he=0;he<12;he++){let ke=we*13+he,Oe=ke+1,ct=ke+12+1,Xe=ct+1;Te.push(ke,ct,Oe,Oe,ct,Xe)}let pe=new Be;pe.setAttribute("position",new Re(j,3)),pe.setAttribute("uv",new Re(le,2)),pe.setIndex(Te),pe.computeVertexNormals();let Ce=K();Ce.side=at;let Ie=new xe(pe,Ce);Ie.name="Loading ramp",r.add(Ie)}function se(){for(let he of[...r.children])he.traverse(ke=>{ke.geometry?.dispose(),ke.material?.dispose()}),r.remove(he);r.position.copy(y);let G=T(),Q=new ot;Q.moveTo(vt.left,-vt.front),Q.lineTo(vt.right,-vt.front),Q.lineTo(vt.right,-vt.back),Q.lineTo(vt.left,-vt.back),Q.closePath();let te=new Ln;te.absarc(G.cup.x,-G.cup.z,.115,0,Math.PI*2,!1),Q.holes.push(te),a(new _e(2.2,.027,7),o("#173848"),0,.016,3.51);let j=a(new Wt(Q,40),im(),0,.033,0);j.rotation.x=-Math.PI/2,j.name="Putting green";for(let he of[-1.065,1.065])a(new _e(.07,.14,7),o("#203c4b"),he,.099,3.51),a(new _e(.045,.006,7),new be({color:15320952,emissive:11770199,emissiveIntensity:.25}),he,.172,3.51);for(let he of[.045,6.985])a(new _e(2.2,.14,.07),o("#203c4b"),0,.099,he);let le=a(new vi(.115,40),new Se({color:398620}),G.cup.x,.034,G.cup.z);le.rotation.x=-Math.PI/2;let Te=a(new Nn(.115,.115+.015,40),new Se({color:16768133,side:at}),G.cup.x,.035,G.cup.z);Te.rotation.x=-Math.PI/2,a(new ze(.009,.009,.68,8),o("#e2e7d7"),G.cup.x,.37,G.cup.z);let pe=new Be;pe.setAttribute("position",new Re([0,0,0,.23,-.035,0,0,-.14,0],3)),pe.computeVertexNormals();let Ce=a(pe,new Se({color:16176260,side:at}),G.cup.x,.7,G.cup.z);Ce.name="Hole flag";let Ie=a(new Nn(.105,.123,32),new Se({color:16049069,side:at}),G.tee.x,.035,G.tee.z);if(Ie.rotation.x=-Math.PI/2,G.crates.forEach(J),G.ramps.forEach(H),G.pipe){let he=new ot;for(let Oe=0;Oe<=32;Oe++){let ct=Math.PI-Oe*Math.PI/32,Xe=Math.cos(ct)*.43,Ut=Math.sin(ct)*.43;Oe?he.lineTo(Xe,Ut):he.moveTo(Xe,Ut)}for(let Oe=0;Oe<=32;Oe++){let ct=Oe*Math.PI/32;he.lineTo(Math.cos(ct)*.34,Math.sin(ct)*.34)}he.closePath();let ke=a(new Bt(he,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);ke.name="Warehouse pipe tunnel"}b.position.copy(y).add(new x(0,2.42,.3)),a(new _e(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let he of[-1.09,1.09])a(new _e(.035,3.55,.035),o("#254252"),he,1.78,.26);let we=Ot("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",ie.mint,2.05);we.position.set(0,3.5,.3),r.add(we)}function ee(){return g&&!g.sunk&&Math.hypot(g.vx,g.vz)>.04}function ae(G,Q){return!s.blocked(y.x+G,y.z+Q,0)&&Math.abs(s.groundAt(y.x+G,y.z+Q,.1))<.1&&![...T().crates,...T().walls||[]].some(te=>Math.abs(G-te.x)<te.w/2+.2&&Math.abs(Q-te.z)<te.d/2+.2)}function q(){if(!g||ee()||z)return!1;let G=[[-.28,.78],[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[Q,te]of G){let j=g.x+Q,le=g.z+te;if(ae(j,le)&&s.xrTeleport(y.x+j,0,y.z+le))return s.xrFace?.(0),ue(),Y=!0,!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function oe(){S=0,z=B=!1,F=0,L=R=!1,P=null,D=[],Y=!0;let G=T();g={x:G.tee.x,z:G.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,se(),me(),Z="Hold your hand comfortably. A moves and fits your club.",q(),V()}function ne(){let G=$();return!G||!s.xrTeleport(G.x,0,G.z+7.03)?!1:(y=G,N=0,E=[],v=i.visible=!0,k=!1,U.identity(),oe(),t("Mini-golf! Hold your controller comfortably and look down the green. A moves and fits the club. Hold trigger to putt."),!0)}function ue(){L=R=!1,P=null,D=[],h.visible=p.visible=m.visible=!1}function re(){v=i.visible=!1,ue()}function ye(G){if(z)return;z=!0,ue(),E.push(S),F=G?.8:0;let Q=T(),te=G?S===1?"Hole in one!":S<Q.par?"Under par!":S===Q.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(B=N===Rs.length-1,B){let j=O(),le=j<=W?"Gold":j<=W+6?"Silver":"Bronze";C=C===null?j:Math.min(C,j);try{localStorage.setItem("tfj-mini-golf-best-v1",String(C))}catch{}Z=`${le} medal! ${j} strokes across six holes.`,t(Z)}else Z=`${te} ${S} strokes. A for hole ${N+2}.`,t(Z);n(G?.7:.2),V()}function me(){l.position.set(y.x+g.x,y.y+g.y,y.z+g.z),c.position.set(y.x+g.x,y.y+oi(g.x,g.z,T()).height+.003,y.z+g.z)}function Ee(G){let Q=Ec(G);if(!Q)return ue(),null;if(Y){let j=G.forward.clone();j.y=0,j.lengthSq()<.01&&j.set(0,0,-1),j.normalize();let le=new Me().setFromAxisAngle(new x(0,1,0),Math.atan2(-j.x,-j.z)),Te=oi(Q.position.x-y.x,Q.position.z-y.z,T()).height,pe=Q.position.y-y.y-Te-.028;if(pe<.3||pe>1.6)return ue(),null;U.copy(Q.quaternion).invert().multiply(le),u.size(pe),Y=!1,P=null,D=[],Z="Club fitted. Mint guide = level face. Hold trigger to putt.",V()}Q.quaternion.multiply(U);let te=u.update(Q);return te.x-=y.x,te.y-=y.y,te.z-=y.z,h.visible=!z,te}function I(G){if(p.visible=!!G&&!ee()&&!z,m.visible=!1,!p.visible)return;p.position.set(y.x+g.x,y.y+oi(g.x,g.z,T()).height+.004,y.z+g.z);let Q=Math.hypot(G.x-g.x,G.z-g.z)<.7,te=Math.hypot(G.forward.x,G.forward.z),j=Math.abs(G.y-g.y)<.07&&Math.abs(G.up.y)>.8&&te>.8;if(f.color.set(Q&&j?8645568:16766588),u.face.material.color.set(Q&&j?8636851:3432035),!Q||!j)return;m.visible=!0;let le=G.forward.x/te,Te=G.forward.z/te,pe=m.geometry.attributes.position;for(let Ce=0;Ce<2;Ce++){let Ie=Ce?.52:.07,we=G.x+le*Ie,he=G.z+Te*Ie;pe.setXYZ(Ce,y.x+we,y.y+oi(we,he,T()).height+.005,y.z+he)}pe.needsUpdate=!0,m.geometry.computeBoundingSphere()}function X(G,Q){if(!v)return;let te=Math.max(0,Math.min(.1,G.dt)),j=!!G.right?.gamepad?.buttons[0]?.pressed,le=!!G.right?.gamepad?.buttons[4]?.pressed,Te=le&&!k;if(k=le,A+=te,Q){ue();return}if(Te){if(z){B?(N=0,E=[]):N++,oe();return}else if(!ee()){q();return}}j?L=!z:(L=!1,R=!0,P=null,D=[]);let pe=Ee(G);if(I(pe),j&&R&&!z&&!ee()&&pe&&P){for(D.push({time:A,p:pe});D.length>2&&A-D[1].time>.045;)D.shift();let Ce=D[0],Ie=A-Ce.time,we=Ie>0?{x:(pe.x-Ce.p.x)/Ie,y:(pe.y-Ce.p.y)/Ie,z:(pe.z-Ce.p.z)/Ie}:null,he=Ac(P,pe,g,te,we);he&&(g.vx=he.vx,g.vz=he.vz,S++,R=!1,n(.3),Z=`Putt ${S} \xB7 wait for the ball to stop.`,V())}if(P=j&&pe?pe:null,j&&pe&&!D.length&&D.push({time:A,p:pe}),!z){let Ce=g.x,Ie=g.z;wc(g,T(),te);let we=g.x-Ce,he=g.z-Ie,ke=Math.hypot(we,he);ke&&l.rotateOnWorldAxis(new x(he,0,-we).normalize(),ke/.038),me(),g.sunk?ye(!0):!ee()&&S>=8?ye(!1):!ee()&&Z.startsWith("Putt")&&(Z="Ball stopped. A moves beside it and refits your club.",V())}F>0&&(F=Math.max(0,F-te),l.position.y=y.y+.033+.038-(.8-F)*.2,l.scale.setScalar(Math.max(.12,F/.8)),c.visible=!1,F||(l.visible=!1))}return{root:i,course:r,putter:h,head:d,board:b,ball:l,ballGuide:p,aimLine:m,start:ne,stop:re,cancel:ue,tick:X,moveBesideBall:q,get clubLength(){return u.length},get active(){return v},get origin(){return y},get held(){return L},get state(){return g},get hole(){return N},get strokes(){return S},get scores(){return E},get total(){return O()},get holeReady(){return z},get complete(){return B},get best(){return C},get layout(){return T()}}}function Yi(s,e=.18){return Math.abs(s)<=e?0:Math.sign(s)*(Math.abs(s)-e)/(1-e)}function Ps(s){let e=s?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function Pc(s,e,t,n){Math.abs(s)<.25&&(n=!1);let i=0;return e==="smooth"?i=-Yi(s)*Math.PI/3*t:Math.abs(s)>.65&&!n&&(i=-Math.sign(s)*Math.PI/6,n=!0),{angle:i,latched:n}}function Ya(s,e,t){return{x:s*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-s*Math.sin(t)}}var At={bounds:{minX:-2.05,maxX:2.05,minZ:-3.3,maxZ:3.3},obstacles:[{x:0,z:0,halfX:.68,halfZ:1.75}],start:{x:-1.37,z:1.62,yaw:0},checkpoints:[{x:-1.37,z:1.95,nx:0,nz:-1,halfWidth:.66},{x:-1.37,z:-1.35,nx:0,nz:-1,halfWidth:.66},{x:0,z:-2.52,nx:1,nz:0,halfWidth:.77},{x:1.37,z:-1.35,nx:0,nz:1,halfWidth:.66},{x:1.37,z:1.35,nx:0,nz:1,halfWidth:.66},{x:0,z:2.52,nx:-1,nz:0,halfWidth:.77}]},Za=1/240,sm=.29,rm=.49,Ls=(s,e,t)=>Math.max(e,Math.min(t,s)),$a=(s,e,t)=>Number.isFinite(s)?Ls(s,e,t):0,om=s=>Math.atan2(Math.sin(s),Math.cos(s));function Ja(){return{...At.start,speed:0,wheelAngle:0,completedLaps:0,nextCheckpoint:1,lastCheckpoint:0,lapTime:0,elapsed:0,laps:[],finished:!1,collisions:0,rescues:0,distance:0,justLap:null,justFinished:!1,checkpointPassed:null,justCollision:!1,_accumulator:0,_contactCooldown:0}}function Is(s,e,t){let n=-Math.sin(s.yaw),i=-Math.cos(s.yaw),r=s.speed*(n*e+i*t);r>=-.015||(s.speed=Ls(s.speed-1.25*r*(n*e+i*t),-1.1,2.8),s._contactCooldown<=0&&(s.collisions++,s.justCollision=!0,s._contactCooldown=.18))}function am(s){let e=At.bounds,t=.28;s.x<e.minX+t&&(s.x=e.minX+t,Is(s,1,0)),s.x>e.maxX-t&&(s.x=e.maxX-t,Is(s,-1,0)),s.z<e.minZ+t&&(s.z=e.minZ+t,Is(s,0,1)),s.z>e.maxZ-t&&(s.z=e.maxZ-t,Is(s,0,-1));for(let n of At.obstacles){let i=Ls(s.x,n.x-n.halfX,n.x+n.halfX),r=Ls(s.z,n.z-n.halfZ,n.z+n.halfZ),o=s.x-i,a=s.z-r,l=Math.hypot(o,a);if(!(l>=t)){if(l<1e-9){let c=[[s.x-n.x+n.halfX,-1,0],[n.x+n.halfX-s.x,1,0],[s.z-n.z+n.halfZ,0,-1],[n.z+n.halfZ-s.z,0,1]].sort((f,p)=>f[0]-p[0]),[u,h,d]=c[0];o=h,a=d,s.x+=o*(u+t+1e-5),s.z+=a*(u+t+1e-5)}else o/=l,a/=l,s.x+=o*(t-l+1e-5),s.z+=a*(t-l+1e-5);Is(s,o,a)}}}function lm(s,e,t){let n=At.checkpoints[s.nextCheckpoint],i=(e-n.x)*n.nx+(t-n.z)*n.nz,r=(s.x-n.x)*n.nx+(s.z-n.z)*n.nz;if(i>0||r<=0||r-i<1e-9)return null;let o=-i/(r-i),a=e+(s.x-e)*o,l=t+(s.z-t)*o;return Math.abs((a-n.x)*-n.nz+(l-n.z)*n.nx)>n.halfWidth?null:{fraction:o,x:a,z:l}}function cm(s,e,t){s._contactCooldown=Math.max(0,s._contactCooldown-t),s.wheelAngle+=(-e.steer*rm-s.wheelAngle)*(1-Math.exp(-12*t));let n=s.speed,i=.32+.15*Math.abs(s.speed);e.brake>.01?s.speed>.025?s.speed=Math.max(0,s.speed-(5.8*e.brake+i)*t):s.speed=Math.min(0,Math.max(-1.1,s.speed-(2.4*e.brake-i)*t)):e.throttle>.01?s.speed<0?s.speed=Math.min(0,s.speed+(3.6*e.throttle+i)*t):s.speed=Math.max(0,Math.min(2.8,s.speed+(3.6*e.throttle-i)*t)):s.speed=Math.sign(s.speed)*Math.max(0,Math.abs(s.speed)-i*t),s.speed=Ls(s.speed,-1.1,2.8);let r=(n+s.speed)/2,o=r*Math.tan(s.wheelAngle)/sm,a=s.yaw+o*t/2,l=s.x,c=s.z;s.x-=Math.sin(a)*r*t,s.z-=Math.cos(a)*r*t,s.yaw=om(s.yaw+o*t),am(s),s.distance+=Math.hypot(s.x-l,s.z-c);let u=lm(s,l,c);if(u){let h=s.nextCheckpoint;if(s.checkpointPassed=h,s.lastCheckpoint=h,s.nextCheckpoint=(h+1)%At.checkpoints.length,h===0){let d=s.lapTime+t*u.fraction;if(s.laps.push(d),s.completedLaps++,s.justLap=d,s.lapTime=-t*u.fraction,s.completedLaps>=3){s.finished=!0,s.justFinished=!0,s.x=u.x,s.z=u.z,s.speed=0,s.elapsed+=t*u.fraction,s.lapTime=0;return}}}s.elapsed+=t,s.lapTime+=t}function Ic(s,e={},t=0){if(s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,s.finished||!Number.isFinite(t)||t<=0)return s;let n={steer:$a(e.steer,-1,1),throttle:$a(e.throttle,0,1),brake:$a(e.brake,0,1)};for(s._accumulator+=Math.min(.1,t);s._accumulator>=Za-1e-12&&!s.finished;)s._accumulator=Math.max(0,s._accumulator-Za),cm(s,n,Za);return s.finished&&(s._accumulator=0),s}function Lc(s){if(s.finished)return!1;let e=At.checkpoints[s.lastCheckpoint];return s.x=e.x+e.nx*.25,s.z=e.z+e.nz*.25,s.yaw=Math.atan2(-e.nx,-e.nz),s.speed=0,s.wheelAngle=0,s.elapsed+=2,s.lapTime+=2,s.rescues++,s._accumulator=0,s._contactCooldown=0,s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,!0}function xn(s){if(!Number.isFinite(s)||s<0)return"\u2014";let e=Math.floor(s*100),t=Math.floor(e/6e3),n=e%6e3;return`${t}:${String(Math.floor(n/100)).padStart(2,"0")}.${String(n%100).padStart(2,"0")}`}var dt=.025,zt=(s,e=.6,t=0)=>new be({color:s,roughness:e,metalness:t}),Dc=(s,e,t,n=10)=>s+(e-s)*(1-Math.exp(-Math.max(0,t)*n));function jt(s,e,t,n=0,i=0,r=0){let o=new xe(e,t);return o.position.set(n,i,r),s.add(o),o}function lt(s,e,t,n,i,r,o,a){return jt(s,new _e(t,n,i),e,r,o,a)}function Ds(s,e,t,n){let i=new _t(new _e(1,1,1),e,t.length),r=new Ye;i.name=n;for(let o=0;o<t.length;o++){let[a,l,c,u,h,d,f=0]=t[o];r.position.set(u,h,d),r.scale.set(a,l,c),r.rotation.set(f,0,0),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}return i.instanceMatrix.needsUpdate=!0,i.computeBoundingSphere(),s.add(i),i}function ai(s,e,t,n,i=.005){let r=new x(...t),o=new x(...n),a=jt(s,new ze(i,i,r.distanceTo(o),6),e);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new x(0,1,0),o.sub(r).normalize()),a}function jr(s,e,t,n,i,r=dt+.001){let o=jt(s,e,t,n,r,i);return o.rotation.x=-Math.PI/2,o}var Qr,li;function um(){if(!Qr){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d");e.fillStyle="#f8e6aa",e.beginPath(),e.arc(64,64,59,0,Math.PI*2),e.fill(),e.strokeStyle="#16364a",e.lineWidth=7,e.stroke(),e.fillStyle="#133348",e.font="bold 94px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("7",64,71),Qr=new De(s),Qr.colorSpace=Pe}return new Se({map:Qr,transparent:!0,depthWrite:!1})}function hm(){if(!li){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#334b5b",e.fillRect(0,0,256,256);let t=47;for(let n=0;n<7e3;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%256;e.fillStyle=n%2?"rgba(175,204,211,.065)":"rgba(10,26,42,.15)",e.fillRect(i,r,1,1)}li=new De(s),li.colorSpace=Pe,li.wrapS=li.wrapT=Jt,li.repeat.set(4,6),li.anisotropy=2}return new be({map:li,roughness:.9})}function Nc(s){let e=new ge;e.name="TF Jones seven \xB7 RC rally buggy",s.add(e);let t=new ge;t.name="Sprung rally body",e.add(t);let n=zt("#217db6",.32,.16),i=zt("#0f2d3d",.52),r=zt("#0c1720",.85),o=zt("#e4edf2",.3,.55),a=zt("#ffd66b",.38,.1),l=zt("#244e68",.18,.55),c=document.querySelector?.(".brand img"),u=[];function h(B,F=.5,Z=""){let g=document.createElement("canvas");g.width=1024,g.height=B;let Y=new De(g);Y.colorSpace=Pe,Y.anisotropy=2;function D(){let A=g.getContext("2d");A.clearRect(0,0,1024,B),A.fillStyle="#0f2d3d",A.fillRect(0,0,1024,B),B>=224&&(A.fillStyle="#ffd66b",A.fillRect(24,16,976,9),A.fillRect(24,B-25,976,9));let U=B*F-85;if(c?.naturalWidth>0&&c?.naturalHeight>0){let O=document.createElement("canvas");O.width=1024,O.height=192;let W=O.getContext("2d");W.drawImage(c,0,0,c.naturalWidth,c.naturalHeight*.53,62,11,900,171),W.globalCompositeOperation="source-in",W.fillStyle="#fff",W.fillRect(0,0,1024,192),W.globalCompositeOperation="source-over",A.drawImage(O,0,U-11)}else A.fillStyle="#fff",A.font="italic 900 162px Arial",A.textAlign="center",A.textBaseline="middle",A.fillText("TFJONES",512,U+85,900);Z&&(A.fillStyle="#ffd66b",A.font="bold 60px Arial",A.textAlign="center",A.textBaseline="middle",A.fillText(Z,512,B*.84,900)),Y.needsUpdate=!0}return u.push(D),D(),new be({map:Y,roughness:.4,metalness:.05})}function d(B,F,Z,g,Y,D,A){let U=lt(t,B,F,Z,g,Y,D,A),O=U.geometry,W=[...O.groups],T=[...new Set(B)],V=[];O.clearGroups();for(let $=0;$<T.length;$++){let K=V.length;for(let J of W)if(B[J.materialIndex]===T[$])for(let H=J.start;H<J.start+J.count;H++)V.push(O.index.array[H]);O.addGroup(K,V.length-K,$)}return O.setIndex(V),U.material=T,U}let f=h(512,.44,"RACING 07"),p=h(720,.73),m=h(192),M=h(224);c&&!c.complete&&c.addEventListener?.("load",()=>u.forEach(B=>B()),{once:!0});let _=new be({color:"#fff1bb",emissive:"#ffe3a0",emissiveIntensity:.75,roughness:.28}),w=new be({color:"#ff4156",emissive:"#e62347",emissiveIntensity:.55,roughness:.3}),b=Qt(.49,.59);b.position.y=.002,e.add(b),lt(t,i,.252,.029,.382,0,.111,0).name="Buggy chassis";let y=new ot;for(let[B,[F,Z]]of[[-.081,-.204],[.081,-.204],[.123,-.122],[.12,.161],[.091,.19],[-.091,.19],[-.12,.161],[-.123,-.122]].entries())B===0?y.moveTo(F,-Z):y.lineTo(F,-Z);y.closePath();let v=jt(t,new Bt(y,{depth:.054,bevelEnabled:!0,bevelSize:.009,bevelThickness:.006,bevelSegments:2,steps:1}),n,0,.122,0);v.rotation.x=-Math.PI/2,v.name="Blue rally body shell",d([i,i,p,i,i,i],.17,.017,.12,0,.185,-.128).name="TF Jones branded bonnet";for(let B of[-.071,.071])lt(t,a,.015,.002,.12,B,.194,-.13);lt(t,i,.284,.038,.027,0,.108,-.211).name="Front crash bumper",lt(t,i,.26,.03,.026,0,.108,.211);for(let B of[-1,1])d([m,m,a,a,i,i],.016,.034,.18,B*.128,.157,.033).name=B<0?"TF Jones left side panel":"TF Jones right side panel",ai(t,o,[B*.126,.14,-.1],[B*.126,.16,.13],.006),ai(t,i,[B*.065,.113,-.13],[B*.146,.087,-.136],.011),ai(t,i,[B*.065,.113,.13],[B*.146,.087,.136],.011);let N=lt(t,l,.167,.085,.008,0,.226,-.037);N.rotation.x=-.34,lt(t,l,.16,.07,.006,0,.224,.077).rotation.x=.12,lt(t,i,.18,.008,.097,0,.269,.021);for(let B of[-.091,.091])ai(t,a,[B,.177,-.054],[B,.272,-.008],.006),ai(t,a,[B,.177,.09],[B,.272,.065],.006),ai(t,a,[B,.272,-.008],[B,.272,.065],.006);d([n,n,f,i,n,n],.187,.01,.091,0,.279,.025).name="TF Jones racing roof";let S=jr(t,new Ne(.063,.063),um(),0,-.166,.195);S.name="Race number seven";for(let B of[-.069,.069]){ai(t,i,[B,.174,.146],[B,.245,.195],.008);let F=jt(t,new ze(.014,.014,.009,10),_,B,.16,-.202);F.rotation.x=Math.PI/2,lt(t,w,.033,.014,.008,B,.158,.195)}d([i,i,M,i,i,i],.29,.016,.063,0,.249,.202).name="TF Jones rear rally spoiler";for(let B of[-.14,.14])lt(t,a,.012,.03,.065,B,.257,.202);let E=ai(t,i,[.072,.18,.094],[.085,.374,.118],.0018);E.name="RC receiver antenna",jt(t,new Ze(.005,6,4),a,.085,.375,.118);let C=[];for(let B of[-1,1])for(let F of[!0,!1]){let Z=new ge;Z.name=F?"Steering wheel pivot":"Rear axle",Z.position.set(B*.146,.078,F?-.137:.137),e.add(Z);let g=new ge;g.name=(F?"Front":"Rear")+(B<0?" left":" right")+" tire",Z.add(g);let Y=jt(g,new ze(.077,.077,.055,16),r);Y.rotation.z=Math.PI/2;let D=[],A=[];for(let U of[-1,1]){let O=jt(g,new ze(.043,.043,.005,12),o,U*.028,0,0);O.rotation.z=Math.PI/2;let W=jt(g,new ze(.015,.015,.007,10),a,U*.032,0,0);W.rotation.z=Math.PI/2;for(let T=0;T<5;T++){let V=T*Math.PI*2/5;D.push([.003,.011,.028,U*.032,Math.cos(V)*.024,Math.sin(V)*.024,-V])}}for(let U=0;U<10;U++){let O=U*Math.PI*2/10;A.push([.05,.006,.019,0,Math.cos(O)*.077,Math.sin(O)*.077,O])}Ds(g,i,D,"Rim spokes"),Ds(g,r,A,"Raised tire tread"),C.push({pivot:Z,wheel:g,front:F})}let L=0,R=0,P=0,k=0;function z(B,F=0){e.position.set(B.x,B.y??dt,B.z),e.rotation.y=B.yaw??0;let Z=Number.isFinite(B.speed)?B.speed:0,g=Number.isFinite(B.wheelAngle)?B.wheelAngle:(B.steer||0)*.5;L=(L+Z*Math.max(0,Math.min(.1,F))/.077)%(Math.PI*2);for(let D of C)D.pivot.rotation.y=D.front?g:0,D.wheel.rotation.x=-L;let Y=F>.001?qe.clamp((Z-R)/F,-7,7):0;P=Dc(P,qe.clamp(-g*Z*.075,-.11,.11),F),k=Dc(k,Y*.005,F),t.rotation.z=P,t.rotation.x=k,t.position.y=Math.abs(Z)>.08?Math.sin(L*1.7)*.0015:0,R=Z}return z({x:0,z:0,yaw:0,speed:0},0),{root:e,wheels:C,body:t,shadow:b,update:z}}function dm(s,e,t,n,i,r){let o=new ot;o.moveTo(0,.16),o.lineTo(.125,-.005),o.lineTo(.05,-.005),o.lineTo(.05,-.14),o.lineTo(-.05,-.14),o.lineTo(-.05,-.005),o.lineTo(-.125,-.005),o.closePath();let a=jr(s,new Wt(o),r,e,t);return a.rotation.z=Math.atan2(-n,-i),a.name="Clockwise racing arrow",a}function fm(s,e,t){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d");i.fillStyle="#102638",i.fillRect(0,0,128,128),i.strokeStyle="#8fe1c3",i.lineWidth=6,i.strokeRect(5,5,118,118),i.fillStyle="#f7fafc",i.font="bold 81px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(String(e+1),64,70);let r=new De(n);r.colorSpace=Pe;let o=jr(s,new Ne(.21,.21),new Se({map:r}),t.x-t.nx*.33,t.z-t.nz*.33);return o.rotation.z=Math.atan2(-t.nx,-t.nz),o.name="Checkpoint "+(e+1)+" number",o}function Uc(s){let e=new ge;e.name="Warehouse RC racing circuit",s.add(e);let{minX:t,maxX:n,minZ:i,maxZ:r}=At.bounds,o=n-t,a=r-i,l=(t+n)/2,c=(i+r)/2,u=zt("#132e40",.72),h=zt("#29495b"),d=zt("#f4e6bc",.6),f=zt("#dd6574",.62),p=zt("#f6d484",.5),m=zt("#162a34",.9),M=new be({color:"#8fe1c3",emissive:"#438b7e",emissiveIntensity:.26,roughness:.4});lt(e,u,o+.18,.021,a+.18,l,.0105,c).name="Raised circuit mat";let _=jr(e,new Ne(o,a),hm(),l,c,dt);_.name="Asphalt racing surface";let w=[],b=[],y=[],v=[],N=[],S=[];for(let D of[t-.045,n+.045]){let A=lt(e,h,.09,.092,a+.18,D,dt+.046,c);A.name="RC boundary rail",w.push(A),lt(e,M,.058,.006,a+.1,D,dt+.095,c)}for(let D of[i-.045,r+.045]){let A=lt(e,h,o,.092,.09,l,dt+.046,D);A.name="RC boundary rail",w.push(A),lt(e,M,o,.006,.058,l,dt+.095,D)}for(let D of[t-.045,n+.045]){let A=Math.ceil(a/.22);for(let U=0;U<A;U++)(U%2?N:v).push([.085,.004,a/A-.003,D,dt+.097,i+(U+.5)*a/A])}for(let D of[i-.045,r+.045]){let A=Math.ceil(o/.22);for(let U=0;U<A;U++)(U%2?N:v).push([o/A-.003,.004,.085,t+(U+.5)*o/A,dt+.097,D])}let E=qi();E.roughness=.85;for(let D of At.obstacles){let{x:A,z:U,halfX:O,halfZ:W}=D,T=O*2,V=W*2,$=new ge;$.name="Pallet shipping island",e.add($),b.push($),lt($,u,T,.125,V,A,dt+.0625,U).name="Solid island barrier";for(let H of[-1,1]){let se=Math.ceil(V/.22);for(let ee=0;ee<se;ee++)(ee%2?N:v).push([.055,.018,V/se-.003,A+H*(O-.0275),dt+.13,U-W+(ee+.5)*V/se])}for(let H of[-1,1]){let se=Math.ceil(T/.22);for(let ee=0;ee<se;ee++)(ee%2?N:v).push([T/se-.003,.018,.055,A-O+(ee+.5)*T/se,dt+.13,U+H*(W-.0275)])}for(let H=0;H<7;H++)lt($,E,(T-.16)/7-.011,.025,V-.18,A+(H-3)*(T-.16)/7,dt+.153,U);let K=zt("#c1a274",.94),J=zt("#917b5e",.9);for(let[H,se]of[-.93,0,.93].entries()){let ee=.28+H%2*.13,ae=.68,q=.72,oe=dt+.18+ee/2;lt($,K,ae,ee,q,A+(H===1?.1:-.09),oe,U+se).name="Warehouse cargo crate",lt($,J,.037,.004,q+.004,A+(H===1?.1:-.09),oe+ee/2+.002,U+se);for(let ne of[-1,1])lt($,J,.007,ee,.029,A+(H===1?.1:-.09)+ne*(ae/2+.004),oe,U+se)}for(let H of[-1,1])for(let se of[-1,1]){let ee=A+H*(O-.14),ae=U+se*(W-.16);lt($,m,.13,.015,.13,ee,dt+.167,ae),jt($,new un(.054,.15,8),p,ee,dt+.25,ae),jt($,new ze(.032,.04,.022,8),d,ee,dt+.245,ae)}}let C=At.checkpoints[0],L=Math.abs(C.nz)>.5,R=C.halfWidth*2;for(let D=0;D<2;D++)for(let A=0;A<12;A++){let U=-R/2+(A+.5)*R/12,O=(D-.5)*.085,W=C.x+(L?U:O),T=C.z+(L?O:U);((D+A)%2?S:N).push([L?R/12-.002:.083,.001,L?.083:R/12-.002,W,dt+.002,T])}Ds(e,d,N,"Cream curb and starting line tiles"),Ds(e,f,v,"Coral curb tiles"),Ds(e,u,S,"Chequered starting line");let P=7903914,k=9429443;At.checkpoints.forEach((D,A)=>{let U=new ge;U.name="RC checkpoint "+(A+1),e.add(U);let O=new Se({color:P,transparent:!0,opacity:.58,depthWrite:!1}),W=dm(U,D.x+D.nx*.35,D.z+D.nz*.35,D.nx,D.nz,O),T=-D.nz,V=D.nx,$=[new x(D.x-T*D.halfWidth,dt+.004,D.z-V*D.halfWidth),new x(D.x+T*D.halfWidth,dt+.004,D.z+V*D.halfWidth)],K=new It(new Be().setFromPoints($),new ws({color:P,transparent:!0,opacity:.6,dashSize:.08,gapSize:.04}));K.computeLineDistances(),U.add(K),K.name="Checkpoint crossing",K.visible=A!==0,fm(U,A,D),y.push({root:U,arrow:W,line:K,material:O})});let z=document.createElement("canvas");z.width=768,z.height=192;let B=z.getContext("2d");B.fillStyle="#102b40",B.fillRect(0,0,768,192),B.fillStyle="#8fe1c3",B.fillRect(0,0,768,9),B.fillStyle="#f7fafc",B.font="bold 73px Arial",B.textAlign="center",B.fillText("TFJ RC RACING",384,116),B.fillStyle="#f6d484",B.font="26px Arial",B.fillText("PALLET CIRCUIT \xB7 FOLLOW THE ARROWS",384,166);let F=new De(z);F.colorSpace=Pe;let Z=At.obstacles[0].z+At.obstacles[0].halfZ;lt(e,u,1.2,.31,.026,0,.31,Z-.014);for(let D of[-.5,.5])lt(e,h,.021,.21,.021,D,.205,Z-.029);let g=jt(e,new Ne(1.18,.295),new Se({map:F}),0,.31,Z+.002);g.name="Pallet circuit fascia";function Y(D){for(let A=0;A<y.length;A++){let U=y[A],O=A===D;U.material.color.setHex(O?k:P),U.material.opacity=O?.95:.45,U.line.material.color.setHex(O?k:P),U.line.material.opacity=O?.92:.3}}return Y(1),{root:e,rails:w,obstacles:b,checkpoints:y,road:_,setCheckpoint:Y,surfaceY:dt}}var Bc="tfj-rc-best-lap-v1",Oc="tfj-rc-best-race-v1",zc=s=>qe.clamp(Number.isFinite(s?.value)?s.value:s?.pressed?1:0,0,1);function kc(s,e,t,n){let i=new ge;i.name="Warehouse RC car racing",i.visible=!1,e.add(i);let r=Uc(i),o=Nc(i),a=document.createElement("canvas");a.width=1280,a.height=768;let l=a.getContext("2d"),c=new De(a);c.colorSpace=Pe;let u=new xe(new Ne(2.7,1.62),new Se({map:c}));u.name="RC race scoreboard",u.position.set(0,2.05,At.bounds.minZ-.2),i.add(u);let h=new xe(new _e(2.77,1.69,.055),new be({color:1058613,roughness:.6}));h.position.copy(u.position),h.position.z-=.037,i.add(h);for(let A of[-1.34,1.34]){let U=new xe(new _e(.038,2.92,.038),new be({color:4019813,metalness:.3,roughness:.5}));U.position.set(A,1.46,u.position.z-.04),i.add(U)}let d=Ot("TFJ RC RACING","WAREHOUSE  /  THREE-LAP TIME TRIAL","play",ie.blue,2.6);d.position.set(0,3.27,u.position.z),i.add(d);let f=[];for(let A=0;A<3;A++){let U=new xe(new Ze(.065,12,8),new Se({color:2307910}));U.position.set((A-1)*.21,1.13,u.position.z+.03),i.add(U),f.push(U)}let p=null,m=null,M=!1,_=Ja(),w=3,b=!1,y=!1,v=!1,N=null,S=null,E=0,C="Release trigger, then get ready!",L=!1;function R(A,U){try{let O=localStorage.getItem(A),W=O===null||!O.trim()?NaN:Number(O);return Number.isSafeInteger(W)&&W>=U&&W<=36e5?W:null}catch{return null}}N=R(Bc,1e3),S=R(Oc,3e3);function P(){wt(l,1280,768),ce(l,"TF JONES  /  PALLET CIRCUIT",36,46,26,ie.blue,"700"),ce(l,_.finished?"RACE COMPLETE":"THREE-LAP TIME TRIAL",36,108,49,ie.ink,"700"),et(l,885,29,356,135,{top:"#214b54",bottom:"#102e40",stroke:ie.mint}),ce(l,"BEST LAP",909,73,26,ie.mint,"700"),ce(l,N===null?"\u2014":xn(N/1e3),909,137,53,ie.gold,"700"),ce(l,w>0?`READY  ${Math.ceil(w)}`:_.finished?"FINISH!":`LAP ${_.completedLaps+1} / ${3}`,36,210,55,ie.gold,"700"),ce(l,xn(_.elapsed),693,215,66,ie.ink,"700"),ce(l,`Current lap ${xn(_.lapTime)}`,37,263,32,ie.mint,"600"),ce(l,`Best race ${S===null?"\u2014":xn(S/1e3)}`,692,263,30,ie.muted,"500");for(let A=0;A<3;A++){let U=36+A*404,O=_.laps[A]!==void 0;et(l,U,296,385,156,{top:O?"#285749":"#1c3f55",bottom:"#102b3e",stroke:O?ie.mint:"#496679"}),ce(l,`LAP ${A+1}`,U+22,337,25,O?ie.mint:ie.muted,"700"),ce(l,O?xn(_.laps[A]):"\u2014",U+22,410,54,ie.ink,"700")}ce(l,C,37,503,30,ie.ink,"600",1204),ce(l,"LEFT STICK  STEER",37,562,28,ie.blue,"700"),ce(l,"RIGHT TRIGGER  GAS",638,562,28,ie.gold,"700"),ce(l,"RIGHT GRIP  BRAKE / REVERSE",37,612,25,ie.muted),ce(l,_.finished?"A  RACE AGAIN":"A  RESCUE CAR  (+2s)",638,612,25,ie.mint,"700"),ce(l,"X  RETURN TO DRIVER SPOT",37,690,25,ie.muted),ce(l,"Y  PAUSE / MENU   \xB7   B  LEAVE",638,690,25,ie.muted),c.needsUpdate=!0,f.forEach((A,U)=>A.material.color.setHex(_.finished?9429443:w>2?U===0?15755368:2307910:w>1?U<=1?16176260:2307910:w>0?16176260:9429443))}function k(){let A=At.bounds;for(let U of[3,3.5,4,2.5,4.5])for(let O of[-26.5,-26,-27,-25.5]){let W=!0;for(let T=A.minX-.11;T<=A.maxX+.11;T+=.3)for(let V=A.minZ-.3;V<=A.maxZ+.12;V+=.3)(s.blocked(U+T,O+V,0)||Math.abs(s.groundAt(U+T,O+V,.1))>.1)&&(W=!1);if(W)for(let T of[0,-.75,.75,-1.5,1.5]){let V=new x(U+T,0,O+A.maxZ+1.05),$=!0;for(let K of[-.25,0,.25])for(let J of[-.25,0,.25])(s.blocked(V.x+K,V.z+J,0)||Math.abs(s.groundAt(V.x+K,V.z+J,.1))>.1)&&($=!1);if($)return{origin:new x(U,0,O),view:V}}}return null}function z(){_=Ja(),w=3,b=!1,C="Release trigger. Follow the mint arrows clockwise.",E=0,L=!1,o.update(_,0),r.setCheckpoint(_.nextCheckpoint),P()}function B(){let A=k();return!A||!s.xrTeleport(A.view.x,0,A.view.z)?!1:(p=A.origin,m=A.view,i.position.copy(p),s.xrFace?.(0),M=i.visible=!0,y=v=!1,z(),t("RC racing! Left stick steers, right trigger drives. Grip brakes and reverses. A rescues the car."),!0)}function F(){b=!1}function Z(){M=i.visible=!1,F()}function g(){return!m||!s.xrTeleport(m.x,0,m.z)?!1:(s.xrFace?.(0),F(),!0)}function Y(A){let U=Math.round(A*1e3);if(!(U<1e3||U>36e5)&&(N===null||U<N)){N=U;try{localStorage.setItem(Bc,String(U))}catch{}t(`New RC lap record! ${xn(U/1e3)}`)}}function D(A,U){if(!M)return;let O=Math.max(0,Math.min(.1,A.dt||0)),W=!!A.right?.gamepad?.buttons[4]?.pressed,T=!!A.left?.gamepad?.buttons[4]?.pressed,V=W&&!y,$=T&&!v;if(y=W,v=T,U){F();return}if(!A.right?.gamepad||!A.left?.gamepad){F(),L||(L=!0,C="Reconnect both controllers. Race paused.",P());return}if(L&&(L=!1,C="Controller ready. Release trigger to resume.",P()),$&&(C=g()?"Driver viewpoint restored. Release trigger to drive.":"Driver spot is blocked. Use B to leave the race.",P()),V)if(_.finished){z();return}else w<=0&&Lc(_)&&(C="Car rescued at your last gate. +2 seconds.",n(.2),P());let K=zc(A.right.gamepad.buttons[0]),J=zc(A.right.gamepad.buttons[1]);K<.1&&J<.1&&(b=!0);let H=O;if(w>0){let ae=Math.min(w,O);if(w-=ae,H-=ae,w<=0&&(C="GO! Drive through the mint gates in order.",n(.4)),E+=O,(E>=.1||w<=0)&&(E=0,P()),w>0)return}if(_.finished)return;let se=Yi(Ps(A.left)[0]),ee=_.collisions;if(Ic(_,{steer:se,throttle:b?K:0,brake:b?J:0},H),o.update(_,H),r.setCheckpoint(_.nextCheckpoint),_.collisions!==ee&&(n(.12),C="Bump! Ease off, reverse, or use A to rescue."),_.checkpointPassed!==null&&(C=`Gate ${_.checkpointPassed+1} cleared. Follow the mint arrow.`),_.justLap!==null&&(Y(_.justLap),n(.4),C=`Lap ${_.completedLaps}: ${xn(_.justLap)}`,P()),_.justFinished){let ae=Math.round(_.elapsed*1e3);if(ae>=3e3&&ae<=36e5&&(S===null||ae<S)){S=ae;try{localStorage.setItem(Oc,String(ae))}catch{}}let q=Math.min(..._.laps);C=`${q<=14?"Gold":q<=20?"Silver":"Bronze"} lap medal! Race ${xn(_.elapsed)}. A to replay.`,r.setCheckpoint(null),t(`RC race complete! ${xn(_.elapsed)} \xB7 A to race again.`),n(.7),P()}E+=O,E>=.1&&(E=0,P())}return P(),{root:i,track:r,car:o,board:u,start:B,stop:Z,cancel:F,tick:D,returnToView:g,get active(){return M},get origin(){return p},get view(){return m},get state(){return _},get countdown(){return w},get bestLapMs(){return N},get bestRaceMs(){return S}}}var no="tfj-memory-bests-v1",eo=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>{if(!["string","number"].includes(typeof s)||typeof s=="string"&&!s.trim())return null;let n=Number(s);return Number.isSafeInteger(n)&&n>=e&&n<=t?n:null};function to(s){let e=s;try{typeof e=="string"&&(e=JSON.parse(e))}catch{return{}}if(!e||typeof e!="object"||Array.isArray(e))return{};let t={};for(let n=2;n<=6;n++){let i=eo(e[n],n,1e4);i!==null&&(t[n]=i)}return t}function Vc(s,e=0,t={}){let n=b=>{try{return s?.getItem(b)??null}catch{return null}},i=(b,y,v,N=0,S=!1)=>{let E=eo(n(b),N,v),C=eo(t[y],N,v),L=[E,C].filter(R=>R!==null);return L.length?S?Math.min(...L):Math.max(...L):null},r=(b,y,v,N)=>b===null?0:b>=N?3:b>=v?2:b>=y?1:0,o=[],a=(b,y,v,N,S,E,C,L,R)=>{let P=i(v,b,N);o.push({id:b,title:y,value:P,score:P===null?"\u2014":String(P),detail:P===null?"Play a complete round":C,medal:r(P,...S),goal:`Gold: ${S[2]} ${E}`,icon:L,accent:R})};a("bowling","WAREHOUSE BOWLING","tfj-bowling-best-10-v1",100,[10,50,80],"pins","pins / 100 \xB7 ten frames","target","#8bc8f3"),a("darts","STAFF-ROOM DARTS","tfj-vr-darts-best-v1",540,[50,150,300],"points","points \xB7 nine darts","target","#8fe1c3");let l=i("tfj-mini-golf-best-v1","golf",48,6,!0);o.push({id:"golf",title:"WAREHOUSE MINI-GOLF",value:l,score:l===null?"\u2014":String(l),detail:l===null?"Finish all six holes":"strokes \xB7 six holes \xB7 lower wins",medal:l===null?0:l<=18?3:l<=24?2:1,goal:"Gold: 18 strokes or fewer",icon:"golf",accent:"#8fe1c3"}),a("basketball","BASKETBALL","tfj-basket-best",10,[2,5,8],"baskets","baskets / 10 throws","target","#f6d484"),a("planes","PAPER PLANES","tfj-planes-best-v1",150,[10,50,100],"points","points \xB7 five flights","play","#8bc8f3");let c=i("tfj-rc-best-lap-v1","rc",36e5,1e3,!0),u=c===null?0:Math.floor(c/6e4),h=c===null?0:Math.floor(c/1e3)%60,d=c===null?0:Math.floor(c/10)%100;o.push({id:"rc",title:"RC CAR RACING",value:c,score:c===null?"\u2014":`${u}:${String(h).padStart(2,"0")}.${String(d).padStart(2,"0")}`,detail:c===null?"Complete a lap":"best lap \xB7 lower wins",medal:c===null?0:c<=14e3?3:c<=2e4?2:1,goal:"Gold: lap in 14 seconds",icon:"car",accent:"#8bc8f3"});let f=to(n(no)),p=to(t.memory);for(let[b,y]of Object.entries(p))f[b]=Math.min(f[b]??1/0,y);let m=Object.keys(f).map(Number).sort((b,y)=>y-b)[0]??null,M=m===null?null:f[m];o.push({id:"memory",title:"MEMORY MATCH",value:M,pairs:m,score:M===null?"\u2014":String(M),detail:M===null?"Use your collected cards":`turns \xB7 ${m}-pair deck \xB7 lower wins`,medal:M===null?0:M===m?3:M<=m+2?2:1,goal:m===null?"Practice rounds do not count":`Gold: ${m} turns \xB7 perfect match`,icon:"book",accent:"#f3b2cf"});let _=eo(e,0,18)??0;o.push({id:"cards",title:"MOLLIE\u2019S CARD ALBUM",value:_,score:`${_} / 18`,detail:_===18?"Collection complete!":"Cards found around the yard",medal:r(_,6,12,18),goal:"Gold: collect all 18 cards",icon:"book",accent:"#f6d484"});let w=i("tfj-vr-jigglypuff-rounds-v1","hide",Number.MAX_SAFE_INTEGER)??0;return o.push({id:"hide",title:"JIGGLYPUFF SEEKER",value:w,score:String(w),detail:"complete hide-and-seek rounds",medal:r(w,1,3,5),goal:"Gold: complete five hunts",icon:"puff",accent:"#f3b2cf"}),o}var Ka=s=>["TO EARN","BRONZE","SILVER","GOLD"][s];var Zi=[5465977,12025936,13359585,16176260];function pm(s){let e=s.colliders.map(t=>new We(new x(t.min.x,t.min.y,t.min.z),new x(t.max.x,t.max.y,t.max.z)));for(let t of s.colliders){let{min:n,max:i}=t;if(n.x<7.5||i.x>9||i.x-n.x>.3||i.z-n.z<3.9||n.y>.1||i.y<2.78)continue;let r=(n.z+i.z)/2;for(let o of[r,r-.45,r+.45]){if(o-1.86<n.z||o+1.86>i.z)continue;let a=new x(n.x-.045,0,o),l=a.clone().add(new x(-2.45,0,0)),c=!0;for(let h of[-.3,0,.3])for(let d of[-.4,0,.4])(s.blocked(l.x+h,l.z+d,0)||Math.abs(s.groundAt(l.x+h,l.z+d,.1))>.1)&&(c=!1);let u=l.clone().add(new x(0,1.68,0));for(let h of[-1.7,-.6,.6,1.7])for(let d of[.8,1.7,2.65]){let f=a.clone().add(new x(-.052,d,h)),p=f.clone().sub(u),m=p.length(),M=new rt(u,p.normalize()),_=new x;e.some(w=>M.intersectBox(w,_)&&_.distanceTo(u)<m-.015)&&(c=!1)}if(c)return{mount:a,view:l,heading:-Math.PI/2}}}return null}function Gc(s,e,t,n){let i=new ge;i.name="Arcade wall of fame",e.add(i);let r=pm(s);i.visible=!!r,r&&(i.position.copy(r.mount),i.rotation.y=-Math.PI/2);let o=document.createElement("canvas");o.width=2048,o.height=1152;let a=o.getContext("2d"),l=new De(o);l.colorSpace=Pe,l.anisotropy=4;let c=new xe(new Ne(3.6,2.025),new Se({map:l}));c.name="Mollie\u2019s personal records",c.position.set(0,1.7,.052),i.add(c);let u=(E,C,L,R,P)=>{let k=new xe(E,C);return k.position.set(L,R,P),i.add(k),k},h=new be({color:1058612,roughness:.7}),d=new be({color:9215391,metalness:.6,roughness:.35});u(new _e(3.72,2.14,.075),h,0,1.7,0);let f=new Se({color:16176260});for(let E of[.626,2.774])u(new _e(3.74,.024,.045),f,0,E,.031);for(let E of[-1.862,1.862])u(new _e(.024,2.16,.045),f,E,1.7,.031);u(new _e(3.74,.045,.24),d,0,.32,.13);let p=[];for(let E=1;E<=3;E++){let C=new ge;C.name=`${Ka(E)} trophy`,C.position.set((E-2)*1.05,.346,.14),i.add(C);let L=new be({color:Zi[0],metalness:.68,roughness:.32}),R=[new xe(new _e(.24,.044,.16),h),new xe(new ze(.069,.088,.052,16),L),new xe(new ze(.018,.029,.072,12),L),new xe(new Dn([new de(.025,0),new de(.06,.045),new de(.089,.12),new de(.078,.13),new de(.049,.052),new de(.014,.021)],20),L)];R[0].position.y=.022,R[1].position.y=.069,R[2].position.y=.12,R[3].position.y=.15,C.add(...R);for(let P of[-.092,.092]){let k=new xe(new xt(.042,.008,6,14),L);k.position.set(P,.233,0),C.add(k)}p.push({trophy:C,material:L,tier:E})}let m=[],M=null,_=0,w=0,b=0;function y(){wt(a,2048,1152),ce(a,"TF JONES  /  WAREHOUSE ARCADE",54,64,27,ie.blue,"700"),ce(a,"WALL OF FAME",52,154,86,ie.ink,"700"),ce(a,"Mollie\u2019s personal bests",54,213,35,ie.gold,"600");let E=m.filter(L=>L.medal).length,C=m.filter(L=>L.medal===3).length;et(a,1535,46,456,174,{top:"#254f54",bottom:"#142f43",stroke:ie.gold,radius:20}),ce(a,`${E} / ${m.length}`,1567,145,67,ie.gold,"700"),ce(a,`MEDALS EARNED  \xB7  ${C} GOLD`,1567,191,26,ie.ink,"700"),m.forEach((L,R)=>{let P=54+R%3*650,k=253+Math.floor(R/3)*256,z=638;et(a,P,k,z,244,{top:"#234955",bottom:"#0d2639",stroke:L.medal?`#${Zi[L.medal].toString(16).padStart(6,"0")}`:"#466374",radius:18}),Fn(a,L.icon,P+39,k+36,40,L.accent),ce(a,L.title,P+77,k+43,30,ie.ink,"700",z-98),ce(a,L.score,P+28,k+119,76,ie.gold,"700",z-56),ce(a,L.detail,P+28,k+153,25,ie.muted,"500",z-56);let F=`#${Zi[L.medal].toString(16).padStart(6,"0")}`;et(a,P+27,k+167,z-54,36,{top:L.medal?"#24474d":"#162c3c",bottom:"#172f3c",stroke:F,radius:10}),ce(a,Ka(L.medal),P+44,k+194,26,L.medal?F:ie.muted,"700"),ce(a,L.goal,P+28,k+229,25,L.accent,"500",z-56)}),ce(a,"YOUR SCORES \xB7 THIS BROWSER",54,1091,30,ie.blue,"700"),ce(a,"Play. Beat your best. Earn your place.",1160,1091,30,ie.muted,"500"),l.needsUpdate=!0,b++;for(let L of p){let R=m.some(P=>P.medal>=L.tier);L.material.color.set(R?Zi[L.tier]:Zi[0]),L.material.emissive.set(R?Zi[L.tier]:0),L.material.emissiveIntensity=R?.09:0}}function v(){let E;try{E=globalThis.localStorage}catch{}let C=Vc(E,s.mollie.found.size,t()),L=JSON.stringify(C);if(L===M)return!1;let R=M!==null&&C.some((P,k)=>P.value!==null&&(m[k].value===null||P.id==="memory"&&P.pairs>m[k].pairs||(["golf","memory","rc"].includes(P.id)?P.value<m[k].value:P.value>m[k].value)||P.medal>m[k].medal));return m=C,M=L,R&&(w=2.5),y(),!0}function N(E){_-=E,_<=0&&(_=.75,v()),w=Math.max(0,w-E),f.color.set(w>0&&Math.sin(w*7)>0?9429443:16176260)}function S(){return v(),!r||!s.xrTeleport(r.view.x,0,r.view.z)?(n("The wall approach is blocked. Walk to the Unit 9 office divider."),!1):(s.xrFace?.(r.heading),n("Welcome to the wall of fame! Your personal records update as you play."),!0)}return v(),{root:i,panel:c,cups:p,site:r,refresh:v,tick:N,visit:S,get records(){return m},get draws(){return b},get celebrating(){return w>0}}}function mm(s,e,t,n=.48){if(s.z<=t.z||e.z>t.z)return!1;let i=(s.z-t.z)/(s.z-e.z);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.y+(e.y-s.y)*i-t.y)<n}function gm(s,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let r=-.25-1.1/Math.max(.5,i);return n.y+=(r-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:s.clone().addScaledVector(n,t),v:n}}function Hc(s,e,t,n){let i=new ge;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let r=new ge;i.add(r);let o=O=>new be({color:O,roughness:.7,side:at}),a=new Be;a.setAttribute("position",new Re([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new xe(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new It(new Be().setFromPoints([new x(0,0,-.28),new x(0,.056,.1)]),new Pt({color:7576243}));l.add(c);let u=s.colliders.map(O=>new We(new x(O.min.x,O.min.y,O.min.z),new x(O.max.x,O.max.y,O.max.z)).expandByScalar(.06)),h=document.createElement("canvas");h.width=1024,h.height=640;let d=h.getContext("2d"),f=new De(h);f.colorSpace=Pe;let p=new xe(new Ne(1.6,1),new Se({map:f}));p.name="Paper-plane scoreboard",i.add(p);let m=!1,M=!1,_=null,w=null,b=[],y=[],v=0,N=!1,S=!1,E=!1,C=0,L=0,R=0,P=0,k="Five planes. Aim through the hoops!";try{R=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function z(){wt(d,1024,640),ce(d,"PAPER-PLANE CHALLENGE",35,68,44,ie.gold),ce(d,`${L} points`,35,190,72),ce(d,`BEST ${R}`,660,180,35,ie.mint),ce(d,`${C} / 5 planes`,35,280,44),ce(d,`Longest glide: ${P.toFixed(1)} m`,35,349,32,ie.mint),ce(d,k,35,428,29,ie.ink,"600",950),ce(d,C===5&&!_?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),ce(d,"10 points per hoop \xB7 Y: pause/menu",35,590,27,ie.muted),f.needsUpdate=!0}function B(){for(let O of[3,2,1.5,4,5])for(let W of[-30,-29,-28]){let T=!0;for(let V=-1;V<=1;V+=.5)for(let $=0;$<=7.8;$+=.4)(s.blocked(O+V,W+$,0)||Math.abs(s.groundAt(O+V,W+$,.1))>.1)&&(T=!1);if(T)return new x(O,0,W)}return null}function F(){for(let T of[...r.children])T.traverse(V=>{V.geometry?.dispose(),V.material?.dispose()}),r.remove(T);b=[];for(let T=0;T<3;T++){let V=w.clone().add(new x(0,1.5-T*.22,5-T*1.8)),$=new xe(new xt(.6,.035,12,48),o(T===0?"#f6d484":T===1?"#8fe1c3":"#8bc8f3"));$.position.copy(V),r.add($),b.push({center:V,mesh:$});let K=new xe(new ze(.018,.018,V.y,8),o("#36576a"));K.position.set(V.x-.64,V.y/2,V.z),r.add(K)}p.position.copy(w).add(new x(0,2.3,-.5));let O=Ot("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);O.position.copy(w).add(new x(0,3.18,-.5)),r.add(O);for(let T of[2,5]){let V=ri(1.3);V.position.copy(w).add(new x(0,4.2,T)),r.add(V)}let W=new xe(new _e(2,.02,.045),o("#f6d484"));W.position.copy(w).add(new x(0,.02,6.7)),r.add(W)}function Z(){C=L=P=0,_=null,M=!1,y=[],l.visible=!1,k="Five planes. Aim through the hoops!",b.forEach(O=>O.mesh.material.emissive?.set(0)),z()}function g(){let O=B();return!O||!s.xrTeleport(O.x,0,O.z+7.4)?!1:(w=O,F(),m=i.visible=!0,s.xrFace?.(0),N=!1,S=!0,Z(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function Y(){m=i.visible=M=l.visible=!1,_=null,y=[],N=!1}function D(){M=!1,y=[],N=!1,S=!0,_||(l.visible=!1)}function A(O){if(_){if(P=Math.max(P,_.distance),k=`${O} \xB7 ${_.hits.size} hoops \xB7 ${_.distance.toFixed(1)} m`,_=null,C===5){R=Math.max(R,L);try{localStorage.setItem("tfj-planes-best-v1",String(R))}catch{}t(`Paper planes complete! ${L} points. A to replay.`)}z()}}function U(O,W){if(!m)return;let{dt:T,right:V,controller:$}=O;v+=T;let K=!!V?.gamepad?.buttons[0]?.pressed,J=!!V?.gamepad?.buttons[4]?.pressed;if(W){D();return}K||(N=!0),J&&!E&&C===5&&!_&&Z(),E=J;let H=$&&$.visible!==!1?$.getWorldPosition(new x):null;if(H&&K&&!S&&N&&!_&&C<5){let se=s.stats();Math.abs(se.x-w.x)>1.2||se.z<w.z+6.7||se.z>w.z+8.2||se.y>.15?t("Return behind the paper-plane launch line."):(M=!0,y=[],l.visible=!0)}if(M){if(!H)D();else if(l.position.copy(H),l.quaternion.copy($.getWorldQuaternion(new Me)),y.push({time:v,p:H.clone()}),y=y.filter(se=>v-se.time<.14),!K&&S){let se=y.find(ae=>v-ae.time>=.04),ee=se?H.clone().sub(se.p).divideScalar(v-se.time).clampLength(0,10):new x;M=!1,ee.length()<.8||ee.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(C++,_={p:H.clone(),v:ee,start:H.clone(),distance:0,age:0,hits:new Set},b.forEach(ae=>ae.mesh.material.emissive?.set(0)),k="In flight\u2026",z())}}if(_){let se=Math.max(1,Math.ceil(T/.012)),ee=T/se;for(let ae=0;ae<se&&_;ae++){let q=_,oe=gm(q.p,q.v,ee),ne=oe.p.clone().sub(q.p),ue=ne.length(),re=new rt(q.p,ne.normalize()),ye=new x,me=!1;for(let Ee of u)if(Ee.containsPoint(q.p)||re.intersectBox(Ee,ye)&&ye.distanceTo(q.p)<=ue){me=!0;break}if(me){A("Hit scenery");break}for(let Ee=0;Ee<b.length;Ee++)!q.hits.has(Ee)&&mm(q.p,oe.p,b[Ee].center)&&(q.hits.add(Ee),L+=10,b[Ee].mesh.material.emissive.set("#3ca58b"),n(.45),z());q.p.copy(oe.p),q.v.copy(oe.v),q.age+=ee,q.distance=Math.max(q.distance,Math.hypot(q.p.x-q.start.x,q.p.z-q.start.z)),l.position.copy(q.p),l.quaternion.setFromUnitVectors(new x(0,0,-1),q.v.clone().normalize()),l.rotateZ(Math.sin(q.age*3)*.04),q.p.y<.07?(l.position.y=.07,l.rotation.x=0,A("Landed")):(q.age>10||q.distance>20)&&A("Glide complete")}}S=K}return{root:i,get best(){return R},start:g,stop:Y,cancel:D,tick:U,get held(){return M},get flight(){return _},get origin(){return w},get rings(){return b},get throws(){return C},get score(){return L},get longest(){return P}}}function Wc(s,e){let t=new ge;t.name="Bowling supporters",e.add(t);let n=[],i=0,r=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(m){t.visible=!0,i=0,r=0;for(let _ of n)_.group.visible=!1,_.shadow&&(_.shadow.visible=!1);let M=[];for(let _ of[5.2,3.8,6])for(let w of[-1.9,1.9,-2.4,2.4]){if(M.length===4)break;let b=m.clone().add(new x(w,0,_));s.blocked(b.x,b.z,0)||Math.abs(s.groundAt(b.x,b.z,.1))>.1||M.some(y=>y.distanceTo(b)<1)||M.push(b)}for(let _=0;_<M.length;_++){if(!n[_]){let y=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][_]});y.group.name=`Bowling supporter ${_+1}`,y.group.scale.setScalar(.91+_*.025),y.bones=Object.fromEntries(l.map(v=>[v,y.model.getObjectByName(v)])),y.rest=Object.fromEntries(l.map(v=>[v,y.bones[v]?.quaternion.clone()])),y.shadow=Qt(.9,.6),t.add(y.shadow,y.group),n.push(y)}let w=n[_];w.group.visible=!0,w.group.position.copy(M[_]),w.base=M[_].clone(),w.shadow.visible=!0,w.shadow.position.copy(M[_]).add(new x(0,.012,0));let b=s.stats();w.group.rotation.y=Math.atan2(b.x-M[_].x,b.z-M[_].z),w.gesture="idle",w.target=new x(b.x,b.y+1.6,b.z),w.mixer.setTime(_*.73)}}function u(m=!1){i=m?3.6:2.2,o=m,a=!1}function h(){i=1.8,o=!1,a=!0}function d(m,M,_){let w=m.bones[M];if(!w)return;let b=w.parent.getWorldQuaternion(new Me),y=w.getWorldQuaternion(new Me),v=new x(0,1,0).applyQuaternion(y),N=new x(..._).normalize().applyQuaternion(m.group.getWorldQuaternion(new Me));w.quaternion.copy(b.invert().multiply(new Me().setFromUnitVectors(v,N).multiply(y))),m.model.updateMatrixWorld(!0)}function f(m,M,_={}){if(M||!t.visible)return;r+=m,i=Math.max(0,i-m);let w=s.stats();n.forEach((b,y)=>{if(!b.group.visible)return;let v=r+y*1.4,N=(o?3.6:a?1.8:2.2)-i,S=i>0&&N>=y*.11,E=!_.ball&&!_.held&&!i&&Math.sin(v*.43)>.85,C=n[(y+1)%n.length],L=_.ball||_.eye||new x(w.x,w.y+1.6,w.z);E&&C?.group.visible&&(L=C.base.clone().add(new x(0,1.5,0))),S&&(L=_.eye||new x(w.x,w.y+1.6,w.z)),b.target.copy(L);let R=Math.atan2(L.x-b.base.x,L.z-b.base.z);b.group.rotation.y+=Math.atan2(Math.sin(R-b.group.rotation.y),Math.cos(R-b.group.rotation.y))*Math.min(1,m*2.8);let P=S?a?"wave":["clap","arms-up","fist-pump","wave"][y%4]:_.held?"anticipate":E?"chat":"idle";b.gesture=P;for(let z of l)b.bones[z]&&b.bones[z].quaternion.copy(b.rest[z]);if(b.animate(m,P==="wave"?"wave":"idle"),b.group.position.set(b.base.x,b.base.y+(S?Math.max(0,Math.sin(v*7))*(o?.11:.055):0),b.base.z),b.group.rotation.z=Math.sin(v*1.2)*.012,b.shadow.material.opacity=1-(b.group.position.y-b.base.y)*3,b.model.updateMatrixWorld(!0),P==="clap"){let z=Math.sin(v*13)*.25;d(b,"UpperArmL",[-.25,-.3,.65]),d(b,"UpperArmR",[.25,-.3,.65]),d(b,"LowerArmL",[.4+z,.35,.4]),d(b,"LowerArmR",[-.4-z,.35,.4])}if(P==="arms-up"&&(d(b,"UpperArmL",[-.65,.9,0]),d(b,"UpperArmR",[.65,.9,0]),d(b,"LowerArmL",[.15,1,.12]),d(b,"LowerArmR",[-.15,1,.12])),P==="fist-pump"){let z=.65+Math.sin(v*9)*.3;d(b,"UpperArmR",[.5,z,.3]),d(b,"LowerArmR",[-.2,1,.2])}P==="anticipate"&&(d(b,"UpperArmL",[-.2,-.6,.35]),d(b,"UpperArmR",[.2,-.6,.35]),d(b,"LowerArmL",[.3,.1,.6]),d(b,"LowerArmR",[-.3,.1,.6]));let k=b.bones.Head;if(k){let z=L.x-b.base.x,B=L.z-b.base.z,F=Math.atan2(Math.sin(R-b.group.rotation.y),Math.cos(R-b.group.rotation.y)),Z=Math.atan2(L.y-(b.base.y+1.6),Math.hypot(z,B));k.rotateY(qe.clamp(F,-.65,.65)),k.rotateX(-qe.clamp(Z,-.4,.3)+Math.sin(v*(E?3:1.1))*.035)}b.bones.Chest&&b.bones.Chest.rotateX(_.held?.065:Math.sin(v*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:u,encourage:h,tick:f,stop:p,get cheering(){return i>0},get people(){return n.filter(m=>m.group.visible)}}}function Xc(s,e,t,n,i=()=>{}){let r=new ge;r.name="Warehouse bowling",r.visible=!1,e.add(r);let o=Wc(s,r),a=X=>new be({color:X,roughness:.55}),l=(X,G,Q,te,j,le=r)=>{let Te=new xe(X,G);return Te.position.set(Q,te,j),le.add(Te),Te},c=new ge;r.add(c);let u=null,h=[],d=!1,f=!1,p=null,m=[],M=0,_=!1,w=!1,b=!1,y=0,v=0,N=[],S=Array.from({length:10},()=>[]),E=0,C=0,L=0,R=!1;try{L=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let P=l(new Ze(.14,24,20),a("#5147b5"),0,.17,0);for(let[X,G,Q]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new Ze(.023,8,8),a("#12162d"),X,G,Q,P);P.visible=!1;let k=document.createElement("canvas");k.width=1536,k.height=1024;let z=k.getContext("2d"),B=new De(k);B.colorSpace=Pe;let F=l(new Ne(3.2,3.2*2/3),new Se({map:B}),0,2,0);F.name="Warehouse bowling scoreboard";let Z=()=>N.reduce((X,G)=>X+G,0)+E,g=new ge;g.name="Bowling scoring computer",r.add(g);let Y=l(new Ne(.96,.64),new Se({map:B}),0,0,.046,g);Y.name="Bowling computer screen",l(new _e(1.02,.7,.08),a("#101a26"),0,0,0,g);let D=120,A=new Float32Array(D*3),U=new Float32Array(D*3),O=[],W=new Be;W.setAttribute("position",new ht(A,3)),W.setAttribute("color",new ht(U,3));let T=new Vi({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:va}),V=new gs(W,T);V.name="Strike fireworks",V.visible=!1,V.frustumCulled=!1,r.add(V);let $=0,K=0;function J(){i(!0),o.cheer(!0),K++,$=2.6,V.visible=!0,T.opacity=1;for(let X=0;X<D;X++){let G=X%3,Q=X*2.39996,te=.65+X%11*.08,j=Math.sqrt(1-(X%17/8-1)**2);A.set([u.x+(G-1)*.65,1.35+G*.22,u.z+1.2],X*3),O[X]=new x(Math.cos(Q)*j*te,.7+Math.abs(Math.sin(Q))*1.2,Math.sin(Q)*j*te);let le=new Ue([16765286,7401417,16745144,9026559][X%4]);U.set([le.r,le.g,le.b],X*3)}W.attributes.position.needsUpdate=!0,W.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function H(X){if(!($<=0)){$=Math.max(0,$-X),V.visible=$>0,T.opacity=Math.min(1,$/.9);for(let G=0;G<D;G++){let Q=O[G];Q.y-=1.5*X,A[G*3]+=Q.x*X,A[G*3+1]+=Q.y*X,A[G*3+2]+=Q.z*X}W.attributes.position.needsUpdate=!0}}function se(){wt(z,1536,1024),ce(z,"TFJ BOWL  /  LANE 01",48,72,38,ie.blue,"700"),ce(z,"WAREHOUSE BOWLING",48,143,61,ie.ink,"700"),et(z,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:ie.mint,radius:22}),ce(z,"TOTAL PINS",1120,86,34,ie.mint),ce(z,String(Z()),1120,237,125,ie.ink,"700"),ce(z,"/ 100",1320,233,42,ie.muted),ce(z,y===10?"ROUND COMPLETE":`FRAME ${y+1}  \u2022  BOWL ${v+1}`,48,230,51,ie.gold,"700");let X=0;for(let G=0;G<10;G++){let Q=48+G%5*288,te=290+Math.floor(G/5)*244,j=G===y&&y<10,le=S[G],Te=le.length>0;et(z,Q,te,272,225,{top:j?"#225568":"#142e43",bottom:"#0b2032",stroke:j?ie.gold:"#55758c",radius:14}),ce(z,String(G+1),Q+18,te+45,37,j?ie.gold:ie.muted,"700");let pe=le[0]===10?"X":le[0]===0?"\u2013":le[0]??"",Ce=le.length>1?le[0]+le[1]===10?"/":le[1]===0?"\u2013":le[1]:"";z.strokeStyle="#5c7b90",z.lineWidth=2,z.strokeRect(Q+78,te+8,89,77),z.strokeRect(Q+167,te+8,97,77),ce(z,String(pe),Q+96,te+67,53,ie.ink,"700"),ce(z,String(Ce),Q+190,te+67,53,ie.ink,"700"),X+=G<N.length?N[G]:G===y?E:0,ce(z,Te?String(X):"\u2014",Q+30,te+189,89,j?ie.gold:ie.ink,"700")}ce(z,`PERSONAL BEST  ${L} / 100`,48,837,38,ie.mint,"700"),ce(z,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,ie.muted,"600"),ce(z,y===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,ie.gold,"700"),ce(z,"Y  MENU",1270,957,34,ie.ink,"700"),B.needsUpdate=!0}function ee(){for(let X of[3,2,1.5,4,5,6])for(let G of[-30,-29,-28,-27]){let Q=!0;for(let te=-1.1;te<=1.1;te+=.55)for(let j=0;j<=7.8;j+=.3)(s.blocked(X+te,G+j,0)||Math.abs(s.groundAt(X+te,G+j,.1))>.1)&&(Q=!1);if(Q)return new x(X,0,G)}return null}function ae(){for(let j of[...c.children])j.traverse(le=>{le.geometry?.dispose(),le.material&&le.material.dispose()}),c.remove(j);c.position.copy(u),h=[],l(new _e(2.1,.025,7.3),qi(),0,.018,3.25,c);for(let j=-4;j<=4;j++)l(new _e(.009,.003,7.3),a("#9c805f"),j*.22,.032,3.25,c);for(let j of[-1.15,1.15])l(new _e(.15,.05,7.3),a("#223747"),j,.02,3.25,c);for(let j of[-1.045,1.045]){let le=l(new _e(.028,.025,7.3),new be({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),j,.045,3.25,c);le.name="Illuminated bowling edge"}let X=Ot("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",ie.gold,2.8);X.position.set(0,4.38,2.5),c.add(X);for(let j of[1,4.8]){let le=ri(1.8);le.position.set(0,4.8,j),c.add(le)}l(new _e(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new _e(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let j of[-.5,0,.5]){let le=l(new un(.065,.16,3),a("#30485a"),j,.04,4.7,c);le.rotation.x=-Math.PI/2}let G=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([j,le])=>new de(j,le)),Q=0;for(let j=0;j<4;j++)for(let le=0;le<=j;le++){let Te=Qt(.29,.27);Te.position.set((le-j/2)*.3,.034,1.1-j*.29),c.add(Te);let pe=new ge;pe.position.set((le-j/2)*.3,.248,1.1-j*.29),c.add(pe),l(new Dn(G,20),a("#f8f6ea"),0,-.215,0,pe),l(new ze(.035,.039,.045,16),a("#dc4459"),0,.07,0,pe),h.push({mesh:pe,start:pe.position.clone(),v:new x,spin:new x,shadow:Te,down:!1,id:Q++})}F.position.copy(u).add(new x(0,2.95,2.5)),l(new _e(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let j of[-1.62,1.62])l(new _e(.06,3.92,.06),a("#223747"),j,1.96,2.42,c);let te=[-1.4,1.4].find(j=>!s.blocked(u.x+j,u.z+7.1,0))??-1.2;g.position.copy(u).add(new x(te,1.27,7.1)),g.lookAt(u.clone().add(new x(0,1.68,7.5))),l(new _e(.16,1.12,.16),a("#223747"),te,.56,7.1,c),l(new _e(.65,.06,.48),a("#101a26"),te,.03,7.1,c)}function q(){for(let X of h)X.mesh.position.copy(X.start),X.mesh.rotation.set(0,0,0),X.mesh.visible=!0,X.shadow.visible=!0,X.shadow.position.set(X.start.x,.034,X.start.z),X.shadow.material.opacity=1,X.down=!1,X.v.set(0,0,0),X.spin.set(0,0,0)}function oe(){$=0,V.visible=!1,y=v=E=0,N=[],S=Array.from({length:10},()=>[]),p=null,C=0,f=!1,P.visible=!1,q(),se()}function ne(){let X=ee();return!X||!s.xrTeleport(X.x,0,X.z+7.4)?!1:(u=X,ae(),o.setup(u),d=r.visible=!0,s.xrFace?.(0),oe(),w=!1,_=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function ue(){o.stop(),$=0,V.visible=!1,d=r.visible=f=P.visible=!1,p=null,C=0,m=[],w=!1}function re(){f=!1,m=[],w=!1,_=!0,p||(P.visible=!1)}function ye(X,G){R||(R=!0,o.cheer(!1));let Q=G.length();X.down=!0,X.v.add(G).clampLength(0,7),X.v.y=Math.max(X.v.y,Math.min(3.4,.7+Q*.42)),X.spin.add(new x(G.z*2.8,(X.id%2?1:-1)*Q*.8,-G.x*2.8)).clampLength(0,18)}function me(X){let G=new x,Q=new x,te=new Me;for(let j of h)if(j.down&&j.mesh.visible){j.v.y-=9.81*X,j.mesh.position.addScaledVector(j.v,X);let le=j.spin.length();le>.001&&(Q.copy(j.spin).divideScalar(le),te.setFromAxisAngle(Q,le*X),j.mesh.quaternion.premultiply(te).normalize()),G.set(0,1,0).applyQuaternion(j.mesh.quaternion);let Te=.033+.08+.135*Math.abs(G.y);j.mesh.position.y<Te?(j.mesh.position.y=Te,j.v.y=j.v.y<-.65?-j.v.y*.32:0,j.v.x*=Math.exp(-4*X),j.v.z*=Math.exp(-4*X),j.spin.multiplyScalar(Math.exp(-5*X))):j.spin.multiplyScalar(Math.exp(-.3*X));for(let[pe,Ce,Ie]of[["x",-1.02,1.02],["z",-.35,2.2]])(j.mesh.position[pe]<Ce||j.mesh.position[pe]>Ie)&&(j.mesh.position[pe]=qe.clamp(j.mesh.position[pe],Ce,Ie),j.v[pe]*=-.38)}for(let j=0;j<h.length;j++)for(let le=j+1;le<h.length;le++){let Te=h[j],pe=h[le];if(!Te.mesh.visible||!pe.mesh.visible||!Te.down&&!pe.down)continue;let Ce=pe.mesh.position.clone().sub(Te.mesh.position),Ie=Ce.length();if(Ie>=.29||Ie<.001)continue;let we=Ce.divideScalar(Ie),he=Te.v.clone().sub(pe.v).dot(we);if(he>.18){let Oe=we.clone().multiplyScalar(he*.7);pe.down?pe.v.add(Oe):ye(pe,Oe),Te.down?Te.v.sub(Oe):ye(Te,Oe.clone().negate()),Te.spin.x+=we.z*he,pe.spin.z-=we.x*he}let ke=.29-Ie;Te.down&&Te.mesh.position.addScaledVector(we,-ke*.5),pe.down&&pe.mesh.position.addScaledVector(we,ke*.5)}}function Ee(){p=null,P.visible=!1;let X=h.filter(Q=>Q.down).length,G=X-E;if(X===10&&v===0&&J(),S[y].push(G),E=X,v++,G===0&&o.encourage(),G>0&&!(X===10&&v===1)&&(o.cheer(X===10),i(X===10)),n(X===10?.8:.25),X===10||v===2){let Q=X===10?v===1?"Strike!":"Spare!":`${X} pins.`;if(N.push(X),y++,v=E=0,t(y===10?`Bowling complete! ${Z()} / 100 pins.`:`${Q} Next frame.`),y===10){L=Math.max(L,Z());try{localStorage.setItem("tfj-bowling-best-10-v1",String(L))}catch{}}else q()}else{for(let Q of h)Q.down&&(Q.mesh.visible=!1,Q.shadow.visible=!1);t(`${G} pins! One more bowl this frame.`)}se()}function I(X,G){if(!d)return;let{dt:Q,right:te,controller:j}=X;M+=Q,o.tick(Q,G,{eye:X.eye,held:f,ball:p?P.position:null});let le=!!te?.gamepad?.buttons[0]?.pressed,Te=!!te?.gamepad?.buttons[4]?.pressed;if(G){re();return}H(Q),le||(w=!0),Te&&!b&&y===10&&oe(),b=Te;let pe=j&&j.visible!==!1?j.getWorldPosition(new x):null;if(le&&!_&&w&&!p&&!C&&y<10&&pe){let Ce=s.stats();Math.abs(Ce.x-u.x)>1.1||Ce.z<u.z+6.7||Ce.z>u.z+8.2||Ce.y>.15?t("Return behind the yellow bowling line."):(f=!0,m=[],P.visible=!0)}if(f){if(!pe)re();else if(P.position.copy(pe),m.push({time:M,p:pe.clone()}),m=m.filter(Ce=>M-Ce.time<.14),!le&&_){let Ce=m.find(we=>M-we.time>=.04),Ie=Ce?pe.clone().sub(Ce.p).divideScalar(M-Ce.time).clampLength(0,10):new x;f=!1,Ie.length()<.6||Ie.z>-.25?(P.visible=!1,t("Swing towards the pins before releasing.")):(R=!1,p={p:pe.clone().sub(u),v:Ie,age:0,gutter:!1})}}if(p||C){let Ce=Math.max(1,Math.ceil(Q/.008)),Ie=Q/Ce;for(let we=0;we<Ce;we++){if(p){let he=p;he.age+=Ie,he.v.y-=9.81*Ie,he.p.addScaledVector(he.v,Ie),he.p.y<.174&&(he.p.y=.174,he.v.y=Math.abs(he.v.y)>.8?Math.abs(he.v.y)*.18:0,he.v.x*=Math.exp(-.25*Ie),he.v.z*=Math.exp(-.25*Ie)),Math.abs(he.p.x)>1&&(he.gutter=!0,he.p.x=Math.sign(he.p.x)*1.15,he.v.x=0),P.position.copy(he.p).add(u),P.rotation.x+=he.v.z*Ie/.14;for(let ke of h)if(!ke.down&&!he.gutter&&he.p.y<.6){let Oe=ke.mesh.position.x-he.p.x,ct=ke.mesh.position.z-he.p.z;Math.hypot(Oe,ct)<.23&&(ye(ke,new x(he.v.x,0,he.v.z).multiplyScalar(.65)),he.v.x*=.8,he.v.z*=.84)}(he.p.z<-.6||he.age>7||Math.hypot(he.v.x,he.v.z)<.15)&&(p=null,C=2.6)}me(Ie);for(let he of h)he.shadow.position.x=he.mesh.position.x,he.shadow.position.z=he.mesh.position.z,he.shadow.material.opacity=qe.clamp(1-(he.mesh.position.y-.25),.15,1);if(C&&(C=Math.max(0,C-Ie),!C)){Ee();break}}}_=le}return{root:r,get best(){return L},crowd:o,fireworks:V,get celebrations(){return K},start:ne,stop:ue,cancel:re,tick:I,get held(){return f},get flight(){return p},get pins(){return h},get origin(){return u},get frame(){return y},get roll(){return v},get total(){return Z()},get totals(){return N},get frameRolls(){return S}}}function xm(s,e,t,n=.34){if(s.y<=t.y||e.y>t.y)return!1;let i=(s.y-t.y)/(s.y-e.y);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.z+(e.z-s.z)*i-t.z)<n}function qc(s,e,t,n,i){let r=s.colliders.map(J=>new We(new x(J.min.x,J.min.y,J.min.z),new x(J.max.x,J.max.y,J.max.z))),o=new ge;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=J=>new be({color:J,roughness:.6}),l=(J,H,se,ee=o)=>{let ae=new xe(J,H);return ae.position.copy(se),ee.add(ae),ae},c=new x,u=null,h=!1,d=!1,f=!1,p=null,m=[],M=0,_=!1,w=!1,b=0,y=0,v=0,N=0,S=!1;try{v=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let E=s.mollie.balls[0].ball.clone();E.scale.setScalar(.48),E.visible=!1,e.add(E);let C=l(new Ze(.065,16,12),a("#ee528c"),new x,e);C.visible=!1,l(new Ze(.03,8,6),a("#6ac68d"),new x(0,.06,0),C).scale.set(1,.4,1.7);let R=new ot;R.moveTo(0,.02),R.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),R.bezierCurveTo(.23,-.03,.16,.18,0,.02);let P=new xe(new Wt(R),new Se({color:16742315,side:at,transparent:!0}));P.visible=!1,e.add(P);let k=0,z=0,B=0,F=document.createElement("canvas");F.width=768,F.height=384;let Z=F.getContext("2d"),g=new De(F);g.colorSpace=Pe;let Y=l(new Ne(1.5,.75),new Se({map:g}),new x);function D(){wt(Z,768,384),ce(Z,"POK\xC9 BALL BASKETBALL",30,62,38,ie.gold),ce(Z,`${y} baskets \xB7 ${b}/10 throws`,30,139,46),ce(Z,`Best: ${v} baskets`,30,204,32,ie.mint),ce(Z,b>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),ce(Z,"Y: games menu \xB7 B: leave",30,337,25,ie.muted),g.needsUpdate=!0}function A(){for(let[J,H]of[[-4,8],[5,9],[-8,8],[12,8]]){let se=!0;for(let ee=-1.5;ee<=1.5;ee+=.5)for(let ae=-2;ae<=2;ae+=.5)(s.blocked(J+ee,H+ae,0)||Math.abs(s.groundAt(J+ee,H+ae,.1))>.1)&&(se=!1);if(se)return new x(J,0,H)}return null}function U(J){if(c.set(J.x,2.35,J.z-1.5),Y.position.set(J.x+1.35,2,J.z-1.75),o.children.length>1)for(let q of[...o.children])q!==Y&&(o.remove(q),q.traverse(oe=>{oe.geometry?.dispose(),oe.material?.dispose()}));let H=Ot("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);H.position.set(J.x,3.7,J.z-1.93),o.add(H);let se=ri(1.1);se.position.set(J.x,4.1,J.z-1.5),o.add(se),l(new _e(.12,4.15,.12),a("#173d56"),new x(J.x,2.075,J.z-2)),l(new _e(.08,.08,.55),a("#173d56"),new x(J.x,4.1,J.z-1.75)),l(new _e(1.5,.95,.07),a("#e4f1f2"),new x(J.x,2.65,J.z-1.93));let ee=l(new xt(.42,.025,10,48),a("#f5ab44"),c);ee.rotation.x=Math.PI/2;for(let q=0;q<12;q++){let oe=q/12*Math.PI*2,ne=new x(c.x+Math.cos(oe)*.41,c.y,c.z+Math.sin(oe)*.41),ue=new x(c.x+Math.cos(oe+.2)*.23,c.y-.48,c.z+Math.sin(oe+.2)*.23),re=new It(new Be().setFromPoints([ne,ue]),new Pt({color:16777215}));o.add(re)}l(new _e(.06,2.4,.06),a("#173d56"),new x(J.x+1.35,1.2,J.z-1.78)),l(new _e(1.56,.81,.045),a("#122538"),new x(J.x+1.35,2,J.z-1.78));let ae=l(new _e(2,.015,.04),a("#f6d484"),new x(J.x,.012,J.z+1.45))}function O(J){if(W(),J==="friend")return d=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let H=A();return!H||!s.xrTeleport(H.x,0,H.z+1.9)?!1:(u=H,U(H),s.xrFace?.(0),h=o.visible=!0,b=y=0,D(),!0)}function W(){h=d=f=!1,o.visible=E.visible=C.visible=P.visible=!1,p=null,m=[],w=!1,_=!1,k=0}function T(){f=!1,E.visible=C.visible=!1,m=[],w=!1,_=!0}function V(){if(p=null,E.visible=!1,b===10){v=Math.max(v,y);try{localStorage.setItem("tfj-basket-best",String(v))}catch{}n(`Basketball complete! ${y} baskets from 10 throws.`)}D()}function $(J,H){t.react(H),k=1.5,P.visible=!0,N=2,i(.6),n(J)}function K(J,H){let{dt:se,eye:ee,controller:ae,right:q,leftController:oe}=J;M+=se,N=Math.max(0,N-se);let ne=!!q?.gamepad?.buttons[0]?.pressed,ue=!!q?.gamepad?.buttons[4]?.pressed;if(H){T(),P.visible=!1;return}ne||(w=!0);let re=ae?.visible!==!1&&ae?ae.getWorldPosition(new x):null;if(d){if(t.group.updateMatrixWorld(!0),C.visible=!!re&&ne&&w,C.visible){C.position.copy(re);let me=t.group.localToWorld(new x(0,.43,.4));!N&&C.position.distanceTo(me)<.22&&(z++,$(`Yum! Jigglypuff loved berry ${z}.`,"feed"),w=!1,C.visible=!1)}t.group.updateMatrixWorld(!0);let ye=t.group.localToWorld(new x(.46,.58,.03));for(let me of[ae,oe])if(me&&me.visible!==!1&&!ne&&!N&&me.getWorldPosition(new x).distanceTo(ye)<.24){B++,$(`High-five! ${B} happy high-fives.`,"five");break}}else C.visible=!1;if(k>0?(k-=se,P.visible=!0,P.position.copy(t.group.position).add(new x(0,1.3+(1.5-k)*.22,0)),P.lookAt(ee),P.material.opacity=Math.min(1,k*2)):P.visible=!1,!h){_=ne;return}if(ue&&!S&&b===10&&!p&&(b=y=0,D()),S=ue,re&&ne&&!_&&w&&!p&&b<10&&(f=!0,m=[],E.visible=!0),f){if(!re)T();else if(E.position.copy(re),m.push({time:M,p:re.clone()}),m=m.filter(ye=>M-ye.time<.14),!ne&&_){let ye=m.find(Ee=>M-Ee.time>=.04),me=ye?re.clone().sub(ye.p).divideScalar(M-ye.time).clampLength(0,12):new x;f=!1,me.length()<.6?(E.visible=!1,n("Swing your hand upwards, then release.")):(b++,p={p:re.clone(),v:me,age:0,scored:!1},D())}}if(p){let ye=Math.max(1,Math.ceil(se/.008)),me=se/ye;for(let Ee=0;Ee<ye&&p;Ee++){let I=p,X=I.p.clone().addScaledVector(I.v,me);X.y-=4.9*me*me,I.v.y-=9.8*me;let G=X.clone().sub(I.p),Q=G.length(),te=new rt(I.p,G.normalize()),j=new x;if(r.some(pe=>!pe.containsPoint(I.p)&&te.intersectBox(pe,j)&&j.distanceTo(I.p)<=Q)){V();break}!I.scored&&xm(I.p,X,c)&&(I.scored=!0,y++,i(.8),D());let le=c.z-.4;(I.p.z-le)*(X.z-le)<0&&Math.abs(X.x-c.x)<.8&&X.y>2.17&&X.y<3.15&&(X.z=le+Math.sign(I.p.z-le)*.1,I.v.z*=-.65);let Te=Math.hypot(X.x-c.x,X.z-c.z);Math.abs(X.y-c.y)<.1&&Te>.33&&Te<.53&&(I.v.x+=(X.x-c.x)*3,I.v.z+=(X.z-c.z)*3,I.v.y=Math.abs(I.v.y)*.45,X.y=c.y+.11),I.p.copy(X),I.age+=me,E.position.copy(X),E.rotation.x+=me*5,(X.y<.09||I.age>5)&&V()}}_=ne}return{root:o,get best(){return v},start:O,stop:W,cancel:T,tick:K,get origin(){return u},get held(){return f},get shots(){return b},get score(){return y},get flight(){return p},get feeds(){return z},get fives(){return B},get berry(){return C},get hoop(){return c}}}function Yc(s,e,t){let n=new ge;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new ge;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d"),a=new De(r);a.colorSpace=Pe;let l=new xe(new Ne(1.75,.4375),new Se({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=Ot("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let u=s.colliders.map(F=>new We(new x(F.min.x,F.min.y,F.min.z),new x(F.max.x,F.max.y,F.max.z))),h=[],d=[],f=[],p=[],m=new Set,M=0,_=0,w=!1,b=!1,y=[],v=null,N={};try{N=to(localStorage.getItem(no))}catch{}function S(){let F=d.length/2;if(!(b||M<F||M>=(N[F]??1/0))){N[F]=M;try{localStorage.setItem(no,JSON.stringify(N))}catch{}}}function E(){wt(o,1024,256),ce(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,ie.gold,"700"),ce(o,`${m.size/2} / ${d.length/2} pairs  \xB7  ${M} turns`,28,101,38,ie.ink,"700"),ce(o,m.size===d.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,ie.mint,"500"),ce(o,b?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,ie.muted,"400"),a.needsUpdate=!0}function C(){for(let F of h)F.geometry.dispose(),F.material.dispose();h=[];for(let F of f)for(let Z of F.material)Z.userData.memoryOwned&&Z.dispose();i.clear(),f=[],v=null}function L(){C();let F=[...s.mollie.found];b=F.length<2,b&&(F=[0,1,2,3]);for(let g=F.length-1;g>0;g--){let Y=Math.floor(Math.random()*(g+1));[F[g],F[Y]]=[F[Y],F[g]]}F=F.slice(0,6),d=[...F,...F];for(let g=d.length-1;g>0;g--){let Y=Math.floor(Math.random()*(g+1));[d[g],d[Y]]=[d[Y],d[g]]}p=[],m.clear(),M=_=0;let Z=Math.ceil(d.length/4);f=d.map((g,Y)=>{let D=s.mollie.cards[g].clone();D.userData={index:Y},D.material=D.material.map(U=>{let O=new Se(U.map?{map:U.map}:{color:15258527});return O.userData.memoryOwned=!0,O}),D.position.set((Y%4-1.5)*.43,((Z-1)/2-Math.floor(Y/4))*.39,.012),D.rotation.set(0,Math.PI,0),D.scale.setScalar(.34/.62),D.visible=!0;let A=new xe(new Ne(.268,.36),new Se({color:2508378}));return A.position.copy(D.position),A.position.z=.003,h.push(A),i.add(A,D),D}),y=f.map(()=>Math.PI),E()}function R(){return s.xrTeleport(-21.8,0,-10.78)?(s.xrFace?.(0),w=n.visible=!0,L(),!0):!1}function P(){w=n.visible=!1,p=[],_=0}function k(F){return!w||_||!Number.isInteger(F)||F<0||F>=d.length||m.has(F)||p.includes(F)||m.size===d.length?!1:(p.push(F),y[F]=0,t(.18),p.length===2&&(M++,_=.85),E(),!0)}function z(F,Z=!1){if(w){for(let g=0;g<f.length;g++)f[g].rotation.y=qe.damp(f[g].rotation.y,y[g],16,F);if(!Z&&_&&(_=Math.max(0,_-F),!_)){let[g,Y]=p;d[g]===d[Y]?(m.add(g),m.add(Y),h[g].material.color.set(9429443),h[Y].material.color.set(9429443),t(.55),m.size===d.length&&S()):y[g]=y[Y]=Math.PI,p=[],E()}}}function B(F){if(v!==null&&h[v]&&h[v].material.color.set(m.has(v)?9429443:2508378),v=null,!w||!F)return null;n.updateMatrixWorld(!0);let Z=new Un(F.position,F.direction,0,3.8).intersectObjects(f)[0];if(!Z)return null;let g=new rt(F.position,F.direction),Y=new x;for(let A of u)if(g.intersectBox(A,Y)&&Y.distanceTo(F.position)<Z.distance-.025)return null;let D=Z.object.userData.index;return v=D,m.has(D)||h[D].material.color.set(16176260),{point:Z.point,action:()=>k(D)}}return{root:n,start:R,stop:P,reset:L,tick:z,point:B,select:k,get records(){return{...N}},get deck(){return d},get cards(){return f},get moves(){return M},get matched(){return m},get waiting(){return _},get active(){return w},get complete(){return w&&m.size===d.length},get practice(){return b}}}function io(){let s=new ge;s.name="Jigglypuff \xB7 3D";let e=b=>new be({color:b,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),r=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(b,y,v,N=s)=>{let S=new xe(b,y);return S.name=v,S.castShadow=S.receiveShadow=!0,N.add(S),S},c=(b,y,v,N,S,E,C,L,R=s)=>{let P=l(new Ze(1,32,24),C,L,R);return P.position.set(b,y,v),P.scale.set(N,S,E),P};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let b of[-1,1]){let y=new ge;y.position.set(b*.27,.86,-.005),y.rotation.z=-b*.21,s.add(y);let v=new ot;v.moveTo(-.135,0),v.quadraticCurveTo(-.115,.16,-.025,.34),v.quadraticCurveTo(0,.39,.025,.34),v.quadraticCurveTo(.12,.13,.135,0),v.quadraticCurveTo(0,-.07,-.135,0);let N=l(new Bt(v,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",y);N.position.z=-.04;let S=new ot;S.moveTo(-.085,.025),S.quadraticCurveTo(-.06,.16,0,.29),S.quadraticCurveTo(.06,.16,.085,.025),S.quadraticCurveTo(0,-.005,-.085,.025);let E=l(new Wt(S,16),i,"Dark inner ear",y);E.position.z=.047,c(b*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let u=[];for(let b of[-1,1]){let y=new ge;y.position.set(b*.172,.625,.347),y.rotation.y=b*.24,s.add(y),u.push(y),c(0,0,0,.123,.153,.053,r,"Eye white",y),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",y),c(0,-.003,.063,.042,.079,.01,a,"Pupil",y),c(-.025,.045,.077,.024,.033,.007,r,"Eye sparkle",y),c(.022,-.045,.075,.011,.015,.005,r,"Small sparkle",y)}((b,y,v,N)=>l(new Xi(new ti(b.map(S=>new x(...S))),40,y,8,!1),v,N))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let d=[];for(let b=0;b<=36;b++){let y=b/36,v=Math.PI-y*Math.PI*2,N=.126*(1-.88*y);d.push(new x(.018+Math.cos(v)*N,.961+Math.sin(v)*N,.295+.035*y))}let f=new Xi(new ti(d),72,.042,12,!1),p=f.attributes.position,m=new ti(d);for(let b=0;b<=72;b++){let y=m.getPointAt(b/72),v=1-.66*(b/72)**2;for(let N=0;N<=12;N++){let S=b*13+N,E=new x().fromBufferAttribute(p,S).sub(y).multiplyScalar(v).add(y);p.setXYZ(S,E.x,E.y,E.z)}}f.computeVertexNormals(),l(f,n,"Curled fringe");let M=[];for(let b of[-1,1]){let y=new ge;y.position.set(b*.37,.48,.015),y.rotation.z=b*.6,s.add(y),c(b*.075,0,0,.14,.075,.075,t,"Little arm",y),M.push(y)}let _=0;function w(b,y=!1){_+=b,s.position.y=Math.max(0,Math.sin(_*2.5))*.028;let v=_%4.4>4.2?.09:1;u.forEach(N=>N.scale.y=v),M[1].rotation.z=.6+(y?Math.sin(_*4)*.25:Math.sin(_*2)*.04)}return{group:s,animate:w}}function Zc(s,e){let t=io(),n=new ge;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,r=.52,o=[],a=null,l=!0,c=0,u=null,h=0,d=0,f="",p=(w,b)=>Math.hypot(w.x-b.x,w.z-b.z);function m(w,b){let y=new x(-b.z,0,b.x);for(let[v,N]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let S=w.x+b.x*v+y.x*N,E=w.z+b.z*v+y.z*N,C=s.groundAt(S,E,w.y+.2);if(Math.abs(C-w.y)<.35&&!s.blocked(S,E,C))return n.position.set(S,C,E),o=[],a=new x(w.x,w.y,w.z),c=0,u=null,h=.15,!0}return!1}function M(w,b,y,v=!1){w=Math.min(w,.05);let N=s.stats(),S=new x(N.x,N.y,N.z);if(y){n.visible=!1,l=!0,u=null;return}let E=new x(b.x,0,b.z).normalize();if(E.lengthSq()<.01&&E.set(0,0,-1),l||n.position.distanceTo(S)>8||a&&a.distanceTo(S)>3||p(n.position,S)<.9){if(!m(N,E)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(S)>.18)&&(o.push(S.clone()),a=S.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let C=v?1.05:i;h=Math.max(0,h-w);let L=p(n.position,S);if(!u&&h===0){let z=null,B=0;if(L<C?(z=n.position.clone().sub(S),z.y=0,z.normalize(),B=Math.min(.8,C+.2-L)):L>C+.35&&(o.length||v)&&(z=(v?S:o[0]).clone().sub(n.position),z.y=0,B=Math.min(.8,z.length(),L-C),z.normalize()),z&&B>.04){let F=n.position.clone(),Z=F.clone().addScaledVector(z,B),g=!0,Y=F.y;for(let D=1;D<=8;D++){let A=F.clone().lerp(Z,D/8),U=s.groundAt(A.x,A.z,Y+.22);if(Math.abs(U-Y)>.35||s.blocked(A.x,A.z,U)||p(A,S)<Math.min(C,L)-.01){g=!1;break}Y=U}Z.y=Y,g?(u={from:F,to:Z,time:0},c=0):(c+=w,c>2.5&&m(N,E))}else c=0}let R=0,P=0;if(u){u.time+=w;let z=Math.min(1,u.time/r),B=u.from.clone().lerp(u.to,z),F=p(n.position,S);p(B,S)>=Math.min(C,F)-.001&&!s.blocked(B.x,B.z,B.y)&&n.position.copy(B),R=Math.sin(Math.PI*z)*.3,P=Math.sin(Math.PI*z)*.08,z===1&&(u=null,h=.14)}else h>0&&(P=-Math.sin(Math.PI*Math.min(1,h/.14))*.1);let k=Math.atan2(N.x-n.position.x,N.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(k-n.rotation.y),Math.cos(k-n.rotation.y))*Math.min(1,w*5),t.animate(w,L<3),t.group.position.y=R,t.group.scale.set(1-P*.5,1+P,1-P*.5),d>0){d=Math.max(0,d-w);let z=Math.abs(Math.sin(d*9));t.group.position.y+=z*(f==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(d*20)*.06}}function _(){l=!0,n.visible=!1,o=[],a=null,u=null}return{group:n,tick:M,summon:_,radius:i,react(w){d=1.3,f=w},get hopping(){return!!u},get trail(){return o},get hidden(){return l}}}function $c(s,e,t){let n=new ge;n.name="Mollie\u2019s VR book",s.add(n),n.visible=!1;let i=new ge;n.add(i);let r=[],o=-1,a=null,l=!1,c=1,u=null,h=null,d=null,f=null,p=new Me,m=new Se({color:16446169}),M=new Se({color:1455692}),_=new Se({color:13944999}),w=new Se({color:15386989});function b(g,Y,D,A,U,O,W=0){let T=new xe(new _e(g,Y,D),A);return T.position.set(U,O,W),i.add(T),T}function y(g,Y,D,A,U,O=44,W=null,T="#17364b",V=null){let $=document.createElement("canvas");$.width=1024,$.height=Math.round(1024*D/Y);let K=$.getContext("2d"),J;function H(ae=!1){if(K.clearRect(0,0,$.width,$.height),W){let q=W==="#eac96d";et(K,4,4,1016,$.height-8,{top:q?"#ffe8ac":ae?"#365e76":"#24475f",bottom:q?"#d9b66c":"#142e43",stroke:ae?"#ffe09a":q?"#fff0c7":"#597b91",radius:Math.min(28,$.height/5)})}K.textAlign="center",K.textBaseline="middle",K.fillStyle=W==="#eac96d"?"#17364b":ae?ie.gold:T,K.font=`bold ${O}px Arial`,g.forEach((q,oe)=>K.fillText(q,512,$.height*(oe+1)/(g.length+1),944)),J&&(J.needsUpdate=!0)}H(),J=new De($),J.colorSpace=Pe;let se=new Se({map:J,transparent:!0,side:at}),ee=new xe(new Ne(Y,D),se);return ee.position.set(A,U,.06),i.add(ee),V&&(ee.userData.action=V,ee.userData.paint=H,r.push(ee)),ee}function v(){let g=document.createElement("canvas");g.width=g.height=256;let Y=g.getContext("2d");Y.fillStyle="#203f53",Y.beginPath(),Y.arc(128,128,112,0,Math.PI*2),Y.fill(),Y.strokeStyle="#b99b5c",Y.lineWidth=3,Y.stroke(),Fn(Y,"ball",128,128,185,ie.gold);let D=new De(g);D.colorSpace=Pe;let A=new xe(new Ne(.2,.2),new Se({map:D,transparent:!0}));A.position.set(.02,.015,.061),i.add(A)}function N(){i.traverse(g=>{g.userData.borrowed||(g.geometry&&g.geometry.dispose(),g.material&&!Array.isArray(g.material)&&![m,M,_,w].includes(g.material)&&(g.material.map?.dispose(),g.material.dispose()))}),i.clear(),r.length=0,h=null}function S(g,Y,D,A,U){let O=e.mollie.cards[g].clone();return O.userData={borrowed:!0},O.material=O.material.map(W=>{if(!W.map)return W;let T=new Se({map:W.map});return T.userData.albumOwned=!0,T}),O.position.set(Y,D,.085),O.scale.setScalar(A/.62),O.rotation.set(0,0,0),O.visible=!0,U&&(O.userData.action=U,r.push(O)),i.add(O),O}function E(){i.traverse(g=>{if(g.userData.borrowed)for(let Y of g.material)Y.userData.albumOwned&&Y.dispose()}),N()}function C(){if(E(),f=null,n.position.z=a!==null?.38:0,a!==null){y([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),h=S(a,-.28,0,1.05*c),h.rotation.y=l?Math.PI:0,p.copy(h.quaternion),y(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new x(0,1,0),l?Math.PI:0)}),y(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>L(.12)),y(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>L(-.12)),y(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",k),y(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){b(1.04,1.33,.06,M,0,0),b(.038,1.29,.07,w,-.47,0,.025),y(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),y([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),v(),y(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>R(0)),y(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}b(2.1,1.37,.055,M,0,0,-.02),b(2.02,1.3,.045,_,0,0,.005),b(.98,1.26,.018,m,-.502,0,.036),b(.98,1.26,.018,m,.502,0,.036),b(.025,1.29,.02,_,0,0,.055);for(let g of[-1,1]){let Y=o*2+(g===1?1:0),D=g*.5;y([e.mollie.found.has(Y)?e.xrGames.names[Y]:`Mystery card ${Y+1}`],.88,.12,D,.53,56),e.mollie.found.has(Y)?S(Y,D,-.005,.8,()=>P(Y)):(b(.58,.8,.006,new Se({color:14476515}),D,-.005,.062),y(["?"],.5,.6,D,-.005,300,null,"#89a2ab")),y([`${Y+1} / 18`],.7,.09,D,-.54,52)}y(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>R(o-1)),y([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),y(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>R(Math.min(8,o+1))),y(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),y(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function L(g){c=qe.clamp(c+g,.72,1.12),h.scale.setScalar(1.05*c/.62)}function R(g){if(u||g===o)return;g=qe.clamp(g,-1,8);let Y=new ge;Y.name="Turning album page",n.add(Y);let D=new xe(new _e(.99,1.27,.012),m);if(D.position.x=g>o?.495:-.495,D.userData.pageTurnOwned=!0,Y.add(D),o>=0){for(let A of i.children)if(A.position.z>.045&&Math.abs(A.position.y)<.64&&(g>o?A.position.x>.05:A.position.x<-.05)){let U=A.clone();U.userData={},Y.add(U)}}Y.position.z=.16,u={leaf:Y,next:g,elapsed:0,direction:g>o?-1:1}}function P(g){return e.mollie.found.has(g)?(a=g,l=!1,c=1,d=null,C(),!0):!1}function k(){a!==null?(a=null,d=null,C()):t()}function z(){o=-1,a=null,n.visible=!0,C()}function B(){u&&(u.leaf.traverse(g=>{g.userData.pageTurnOwned&&g.geometry?.dispose()}),n.remove(u.leaf),u=null),d=null,n.visible=!1}function F(g){var A;if(!g||u)return null;n.updateMatrixWorld(!0);let Y=new Un(g.position,g.direction,0,5).intersectObjects(r)[0],D=Y?.object||null;return D!==f&&(f&&(f.userData.paint?.(!1),f.userData.restScale&&f.scale.copy(f.userData.restScale)),f=D,f&&(f.userData.paint?.(!0),(A=f.userData).restScale??(A.restScale=f.scale.clone()),f.scale.copy(f.userData.restScale).multiplyScalar(1.025))),Y?{point:Y.point,action:Y.object.userData.action}:null}function Z(g,Y,D){if(u){u.elapsed+=g;let A=Math.min(1,u.elapsed/.48);u.leaf.rotation.y=u.direction*Math.PI*(A*A*(3-2*A)),A>=1&&(n.remove(u.leaf),u.leaf.traverse(U=>{U.userData.pageTurnOwned&&U.geometry?.dispose()}),o=u.next,u=null,C())}if(h)if(Y&&D){d||(d={hand:D.clone().invert(),start:h.quaternion.clone()});let A=D.clone().multiply(d.hand),U=i.getWorldQuaternion(new Me);h.quaternion.copy(U.clone().invert().multiply(A).multiply(U).multiply(d.start))}else d?(d=null,p.copy(h.quaternion)):h.quaternion.slerp(p,1-Math.exp(-10*g))}return{root:n,open:z,close:B,point:F,tick:Z,back:k,inspect:P,change:R,get page(){return o},get inspected(){return a},get card(){return h},get turning(){return!!u}}}var Mt={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},ym=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function _m(s,e){let t=Math.hypot(s,e)*384/Mt.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(s,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=ym[Math.floor(n/(Math.PI/10))],r=t>=268?2:t>=163&&t<=184?3:1;return{score:i*r,label:`${r===3?"Triple ":r===2?"Double ":""}${i} \xB7 ${i*r}`}}function vm(s){let e=s.at(-1);if(!e)return new x;let t=s.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new x}function Mm(s,e,t){let n=s.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function bm(s,e){if(s.x<=Mt.x||e.x>Mt.x)return null;let t=(Mt.x-s.x)/(e.x-s.x),n=s.clone().lerp(e,t);return Math.hypot(n.y-Mt.y,n.z-Mt.z)<=.47?{point:n,..._m(-(n.z-Mt.z),n.y-Mt.y)}:null}function Jc(s,e,t){let n=new ge;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new be({color:12044498,metalness:.75,roughness:.28}),r=new be({color:2112336,roughness:.45}),o=new be({color:16764759,side:at,roughness:.8}),a=[];function l(W,T){return a.push(W),new xe(W,T)}function c(){let W=new ge;W.name="3D dart";let T=l(new un(.004,.035,8),i);T.rotation.x=-Math.PI/2,T.position.z=.0175,W.add(T);let V=l(new ze(.006,.007,.045,10),i);V.rotation.x=Math.PI/2,V.position.z=.0575,W.add(V);for(let K=0;K<5;K++){let J=l(new xt(.007,8e-4,4,10),r);J.position.z=.043+K*.007,W.add(J)}let $=l(new ze(.003,.003,.06,8),r);$.rotation.x=Math.PI/2,$.position.z=.11,W.add($);for(let K=0;K<2;K++){let J=l(new _e(.044,.001,.05),o);J.rotation.z=K*Math.PI/2,J.position.z=.15,W.add(J)}return W}let u=c();n.add(u),u.visible=!1;let h=document.createElement("canvas");h.width=1024,h.height=640;let d=h.getContext("2d"),f=new De(h);f.colorSpace=Pe;let p=new xe(new Ne(.95,.594),new Se({map:f}));p.name="Wall-mounted darts scoreboard",p.position.set(Mt.x+.05,1.8,Mt.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let m=new xe(new _e(1.01,.654,.035),new be({color:1517105,roughness:.7}));m.name="Darts scoreboard frame",m.position.copy(p.position),m.position.x-=.022,m.rotation.copy(p.rotation),n.add(m);let M=Ot("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);M.position.set(Mt.x+.065,2.43,Mt.z),M.rotation.y=Math.PI/2,n.add(M);let _=ri(.9);_.position.set(Mt.x+.55,2.75,Mt.z),n.add(_);let w=s.colliders.map(W=>new We(new x(W.min.x,W.min.y,W.min.z),new x(W.max.x,W.max.y,W.max.z))),b=!1,y=!1,v=null,N=[],S=0,E=!1,C=!1,L=!1,R=0,P=0,k="Hold trigger, throw, release.",z=0,B=[];try{z=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function F(){Mc(d,{total:R,throws:P,best:z,last:k}),f.needsUpdate=!0}function Z(W=!1){y=!1,N=[],u.visible=!1,v&&!W&&(n.remove(v.mesh),v=null),E=!0,C=!1}function g(){Z();for(let W of B)n.remove(W);B=[],P=R=0,k="Nine darts. Make them count!",F()}function Y(){let T=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([V,$])=>!s.blocked(V,$,0));return!T||!s.xrTeleport(T[0],0,T[1])?!1:(s.xrFace?.(Math.PI/2),n.visible=b=!0,g(),!0)}function D(){Z(),b=!1,n.visible=!1}function A(W,T){let V=v;if(V){if(V.mesh.position.copy(T),B.push(V.mesh),v=null,P++,R+=W.score,k=W.label,t(W.score>0?.6:.12),P===9&&R>z){z=R;try{localStorage.setItem("tfj-vr-darts-best-v1",String(z))}catch{}}F()}}function U(W,T){let V=u.clone();V.visible=!0,V.position.copy(W),V.quaternion.setFromUnitVectors(new x(0,0,-1),T.clone().normalize()),n.add(V),v={mesh:V,position:W.clone(),velocity:T.clone(),age:0},u.visible=!1,y=!1,N=[]}function O(W,T,V,$,K=!1){if(S+=W,!!b){if(K){y&&Z();return}if(V||(C=!0),$&&!L&&P===9&&g(),L=$,T&&V&&!E&&C&&!v&&P<9){let J=s.stats();J.x<Mt.ocheX-.04||J.x>Mt.ocheX+1.6||Math.abs(J.z-Mt.z)>1||J.y>.15?(k="Stand behind the yellow line.",F()):(y=!0,N=[],u.visible=!0,t(.12))}if(y&&T&&(u.position.copy(T.position).addScaledVector(T.direction,.07),u.quaternion.setFromUnitVectors(new x(0,0,-1),T.direction),N.push({time:S,position:T.position.clone()}),N=N.filter(J=>S-J.time<.15),!V&&E)){let J=vm(N);J.length()<.6?(y=!1,u.visible=!1,k="Swing your hand before releasing.",F()):U(u.position,J)}if(y&&!T&&Z(),E=V,v){let J=Math.max(1,Math.ceil(W/.004166666666666667)),H=W/J;for(let se=0;se<J&&v;se++){let ee=v,ae=Mm(ee.position,ee.velocity,H),q=bm(ee.position,ae.position),oe=ae.position.clone().sub(ee.position),ne=oe.length(),ue=new rt(ee.position,oe.clone().normalize()),re=new x,ye=null,me=ne+1e-8;for(let Ee of w){if(Ee.containsPoint(ee.position)){ye=ee.position.clone(),me=0;break}if(ue.intersectBox(Ee,re)){let I=re.distanceTo(ee.position);I<=me&&(me=I,ye=re.clone())}}if(q&&(!ye||q.point.distanceTo(ee.position)<=me)){A(q,q.point);break}if(ye){A({score:0,label:"Miss \xB7 hit scenery"},ye);break}if(ae.position.y<=.025){let Ee=qe.clamp((ee.position.y-.025)/(ee.position.y-ae.position.y),0,1),I=ee.position.clone().lerp(ae.position,Ee);ee.mesh.quaternion.setFromUnitVectors(new x(0,0,-1),new x(ee.velocity.x,0,ee.velocity.z).normalize()),A({score:0,label:"Miss \xB7 floor"},I);break}if(ee.position.copy(ae.position),ee.velocity.copy(ae.velocity),ee.mesh.position.copy(ee.position),ee.mesh.quaternion.slerp(new Me().setFromUnitVectors(new x(0,0,-1),ee.velocity.clone().normalize()),1-Math.exp(-18*H)),ee.age+=H,ee.age>4){A({score:0,label:"Miss"},ee.position);break}}}}}return{root:n,get best(){return z},start:Y,stop:D,cancel:Z,reset:g,update:O,launch:U,get active(){return b},get held(){return y},get flight(){return v},get total(){return R},get throws(){return P},get last(){return k},get resting(){return B}}}function Kc(s,e,t,n,i=.35){let r=e.clone().sub(s),o=r.length();if(o<1e-7)return null;let a=new rt(s,r.multiplyScalar(1/o)),l=new x,c=o+1e-6,u=null;for(let h of t){let d=h.clone().expandByScalar(.045);if(d.containsPoint(s))return{type:"wall",point:s.clone(),distance:0};if(a.intersectBox(d,l)){let f=l.distanceTo(s);f<=c&&(c=f,u={type:"wall",point:l.clone(),distance:f})}}for(let h of n)if(a.intersectSphere(new Kt(h.position,i),l)){let d=l.distanceTo(s);d<c&&(c=d,u={type:"target",id:h.id,point:l.clone(),distance:d})}return u}function Sm(s,e){let t=s.at(-1),n=s.find(r=>t.time-r.time<=.12&&t.time-r.time>=.045),i=new x;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new x(0,1.3,0)),i.clampLength(0,9)}function Qc(s){let e=s.worldScene,t=new ge;t.name="VR games",t.visible=!1,e.add(t);let n=Sc(t),i=new ge;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let fe of[...s.mollie.balls.map(Ae=>Ae.ball),...s.mollie.cards,s.mollie.thrownBall])fe?.isObject3D&&i.attach(fe);let r=s.colliders.map(fe=>new We(new x(fe.min.x,fe.min.y,fe.min.z),new x(fe.max.x,fe.max.y,fe.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new De(o);l.colorSpace=Pe;let c=new ge;t.add(c);let u=new xe(new Ne(1.6,1.2),new Se({map:l,side:at}));c.add(u),c.visible=!1;let h=new xe(new _e(1.64,1.24,.035),new Se({color:3561833}));h.position.z=-.025,c.add(h);let d=new ge;c.add(d);let f=new It(new Be().setFromPoints([new x,new x(0,0,-1)]),new Pt({color:16769946}));f.visible=!1,t.add(f);let p=new xe(new Ze(.012,8,6),new Se({color:16769946}));p.visible=!1,t.add(p);let m=s.mollie.balls[0].ball.clone();m.scale.setScalar(.43),m.visible=!1,t.add(m);let M=io();M.group.visible=!1,t.add(M.group);let _=document.createElement("canvas");_.width=768,_.height=192;let w=_.getContext("2d"),b=new De(_);b.colorSpace=Pe;let y=new xe(new Ne(.95,.2375),new Se({map:b,transparent:!0,depthTest:!1,depthWrite:!1}));y.name="Adventure notification",y.renderOrder=1e3,t.add(y),y.visible=!1;let v="explore",N="menu",S=[],E=null,C=null,L=0,R=!1,P=null,k=!1,z=null,B=[],F=0,Z=!1,g=!1,Y=!1,D=!0,A=[],U=0,O=0,W="Welcome, Mollie!",T="",V=0,$=!1,K=null,J=0,H=0;try{H=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let se=(fe,Ae=.3)=>{try{fe?.gamepad?.hapticActuators?.[0]?.pulse(Ae,70)?.catch?.(()=>{})}catch{}},ee=$c(c,s,()=>{N="menu",ee.close(),u.visible=h.visible=!0,D=!0,he()}),ae=Jc(s,t,fe=>se(P?.right,fe)),q=Yc(s,t,fe=>se(P?.right,fe)),oe=Zc(s,t),ne=Hc(s,t,kt,fe=>se(P?.right,fe)),ue=Rc(s,t,kt,fe=>se(P?.right,fe)),re=kc(s,t,kt,fe=>se(P?.right,fe)),ye=0,me=!0;try{me=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function Ee(fe){me=!!fe;try{localStorage.setItem("tfj-companion-enabled",String(me))}catch{}me?oe.summon():(v==="friend"&&Et(),oe.group.visible=!1),he()}let I=Xc(s,t,kt,fe=>se(P?.right,fe),pe),X=qc(s,t,oe,kt,fe=>se(P?.right,fe)),G=Gc(s,e,()=>({bowling:I.best||null,darts:ae.best||null,golf:ue.best,rc:re.bestLapMs,basketball:X.best||null,planes:ne.best||null,memory:q.records,hide:H}),kt),Q=!1,te=!1;function j(){if(v==="jigglypuff"){W="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",ct();return}oe.summon(),Xe()}function le(){He(),N="album",u.visible=h.visible=!1,d.clear(),ee.open(),D=!0}function Te(){try{K??(K=new(window.AudioContext||window.webkitAudioContext)),K.resume()?.catch(()=>{})}catch{}}function pe(fe){if(!(!K||K.state!=="running"))try{let Ae=Math.floor(K.sampleRate*.07),Je=K.createBuffer(1,Ae,K.sampleRate),pt=Je.getChannelData(0);for(let Le=0;Le<Ae;Le++)pt[Le]=(Math.random()*2-1)*Math.exp(-Le/Ae*5);for(let Le=0;Le<(fe?12:7);Le++){let bt=K.createBufferSource(),ut=K.createGain(),Sn=K.createBiquadFilter();bt.buffer=Je,Sn.type="highpass",Sn.frequency.value=650,ut.gain.value=.055+Le%3*.012,bt.connect(Sn),Sn.connect(ut),ut.connect(K.destination),bt.start(K.currentTime+Le*.095+Le%2*.025),bt.onended=()=>{bt.disconnect(),Sn.disconnect(),ut.disconnect()}}}catch{}}function Ce(){if(!K||K.state!=="running")return;let fe=M.group.position;try{let Ae=K.createPanner();Ae.panningModel="HRTF",Ae.distanceModel="inverse",Ae.refDistance=2,Ae.maxDistance=25,Ae.positionX.value=fe.x,Ae.positionY.value=fe.y+.6,Ae.positionZ.value=fe.z,Ae.connect(K.destination),[523.25,659.25,587.33].forEach((Je,pt)=>{let Le=K.createOscillator(),bt=K.createGain(),ut=K.currentTime+pt*.18;Le.type="sine",Le.frequency.value=Je,bt.gain.setValueAtTime(0,ut),bt.gain.linearRampToValueAtTime(.09,ut+.025),bt.gain.exponentialRampToValueAtTime(.001,ut+.17),Le.connect(bt),bt.connect(Ae),Le.start(ut),Le.stop(ut+.18),Le.onended=()=>{Le.disconnect(),bt.disconnect()}}),setTimeout(()=>Ae.disconnect(),1200)}catch{}}function Ie(fe,Ae,Je,pt=32,Le="#fff"){a.font=`${pt>=40?"bold ":""}${pt}px Arial`,a.fillStyle=Le,a.fillText(fe,Ae,Je)}function we(fe,Ae,Je,pt,Le){S.push({label:fe,x:Ae,y:Je,w:pt,h:72,action:Le}),xc(a,fe,Ae,Je,pt,E===fe)}function he(){N!=="album"&&(S=[],yc(a,hl()),ye===0?(we("Pok\xE9mon throwing hunt",44,196,455,()=>sn("hunt")),we("Jigglypuff hide-and-seek",519,196,461,()=>sn("jigglypuff")),we("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>sn("darts")),we("Memory match \xB7 staff-room table",519,280,461,()=>sn("memory")),we(`Open the card album \xB7 ${s.mollie.found.size} / 18`,44,364,455,le),we("Play with Jigglypuff",519,364,461,()=>sn("friend")),we("Pok\xE9 Ball basketball",44,448,455,()=>sn("basketball")),we("Warehouse bowling",519,448,461,()=>sn("bowling"))):(we("Paper-plane challenge",44,196,455,()=>sn("planes")),we("RC car racing",519,196,461,()=>sn("rc")),we("Warehouse mini-golf",44,280,936,()=>sn("golf")),we("Arcade wall of fame",44,364,455,Ut),we("Back to exploring",519,364,461,()=>{Et(),Xe()}),we(me?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>Ee(!me))),we("Resume",44,548,445,Xe),we(ye===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{ye=1-ye,he()}),_c(a,v==="rc"),l.needsUpdate=!0)}function ke(){d.clear()}function Oe(){if(!P){$=!0;return}$=!1;let fe=P.forward.clone();fe.y=0,fe.normalize(),c.position.copy(P.eye).addScaledVector(fe,1.9),c.position.y=Math.max(P.eye.y-.1,s.stats().y+.85),c.rotation.set(0,Math.atan2(-fe.x,-fe.z),0)}function ct(){ye=0,V=0,y.visible=!1,He(),ee.close(),u.visible=h.visible=!0,N="menu",ke(),c.visible=!0,D=!0,E=null,Oe(),he()}function Xe(){ee.close(),N="menu",u.visible=h.visible=!0,c.visible=!1,f.visible=p.visible=!1,D=!0,E=null}function Ut(){Et(),Xe();let fe=G.visit();return fe&&(v="fame",te=!0),fe}function He(fe=!1){re.cancel(),ue.cancel(),ne.cancel(),I.cancel(),X.cancel(),ae.cancel(fe),k=!1,z=null,B=[],m.visible=!1}function Et(){n.update("explore",null),i.visible=!0,re.stop(),ue.stop(),ne.stop(),I.stop(),X.stop(),V=0,y.visible=!1,q.stop(),ae.stop(),v="explore",M.group.visible=!1,O=0,He(),W="Choose an adventure whenever you like."}function Ji(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([Ae,Je,pt])=>{for(let[Le,bt]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let ut=new x(Ae+Le,0,Je+bt);if(!s.blocked(ut.x,ut.z,0)&&s.groundAt(ut.x,ut.z,.1)===0&&s.mollie.balls.every(Sn=>Sn.ball.position.distanceTo(ut)>1.3))return[{point:ut,clue:pt}]}return[]})}function Gs(){M.group.position.copy(A[U].point),M.group.visible=!0,J=F+1,W=`Try ${A[U].clue}.`,kt(W)}function sn(fe){if(Et(),v=fe,v==="rc"){if(!re.start()){v="explore",W="No clear warehouse circuit available.",he();return}i.visible=!1,Xe();return}if(v==="golf"){if(!ue.start()){v="explore",W="No clear warehouse green available.",he();return}i.visible=!1,Xe();return}if(v==="friend"&&!me&&Ee(!0),v==="planes"){if(!ne.start()){v="explore",W="The plane course is blocked. Try again.",he();return}Xe();return}if(v==="bowling"){if(!I.start()){v="explore",W="The warehouse lane is blocked. Try again.",he();return}i.visible=!1,Xe();return}if(v==="friend"||v==="basketball"){if(!X.start(v)){v="explore",W="No clear basketball space available.",he();return}Xe();return}if(v==="memory"){if(!q.start()){v="explore",W="The table is not accessible. Try again.",he();return}Xe();return}if(v==="darts"){if(!ae.start()){v="explore",W="The throwing line is blocked. Try again.",he();return}W="Nine darts. Hold trigger, throw and release.",Xe();return}if(v==="hunt")s.xrGames.start(),W="Hold trigger, swing gently and release!";else{A=Ji();for(let Ae=A.length-1;Ae>0;Ae--){let Je=Math.floor(Math.random()*(Ae+1));[A[Ae],A[Je]]=[A[Je],A[Ae]]}if(A=A.slice(0,3),U=0,A.length<3){v="explore",W="No clear hiding spots. Please try again.",he();return}Gs()}Xe()}function Fu(){if(v!=="jigglypuff"||O||!M.group.visible)return!1;if(U++,M.group.visible=!1,se(P?.right,.6),U===3){H++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(H))}catch{}v="explore",W="You found Jigglypuff 3 times! Champion!",kt(W)}else O=1.5,W=`Found ${U} / 3! Finding a new hiding spot\u2026`,kt(W);return!0}function hl(){return v==="rc"?re.state.finished?"RC race complete \xB7 A to race again":`RC racing: lap ${re.state.completedLaps+1}/3 \xB7 ${re.state.elapsed.toFixed(1)}s \xB7 A rescues car`:v==="fame"?`Wall of fame: ${G.records.filter(fe=>fe.medal).length} / ${G.records.length} medals earned`:v==="golf"?ue.complete?`Mini-golf complete: ${ue.total} strokes \xB7 Best ${ue.best}`:`Mini-golf: hole ${ue.hole+1}/6 \xB7 ${ue.strokes} strokes \xB7 Par ${ue.layout.par}`:v==="planes"?`Paper planes: ${ne.score} points \xB7 ${ne.throws}/5 throws \xB7 Longest ${ne.longest.toFixed(1)} m`:v==="bowling"?`Bowling: ${I.total} / 100 pins \xB7 ${I.frame===10?"Complete":`Frame ${I.frame+1} \xB7 Bowl ${I.roll+1}`}`:v==="basketball"?`Basketball: ${X.score} baskets \xB7 ${X.shots}/10 throws`:v==="friend"?`Berries: ${X.feeds} \xB7 High-fives: ${X.fives} \xB7 Offer a berry or touch her raised hand`:v==="hunt"?`Pok\xE9mon: ${s.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:v==="jigglypuff"?O?W:`Found ${U}/3 \xB7 Try ${A[U].clue}`:v==="darts"?`Darts: ${ae.total} points \xB7 ${ae.throws}/9 darts \xB7 ${ae.last}`:v==="memory"?`Memory: ${q.matched.size/2}/${q.deck.length/2} pairs \xB7 ${q.moves} turns`:W}function kt(fe){T=fe,vc(w,fe),b.needsUpdate=!0,V=3}function Bu(fe){if(y.visible=!c.visible&&V>0,!y.visible)return;let Ae=fe.headOrientation||new Me().setFromUnitVectors(new x(0,0,-1),fe.forward.clone().normalize());y.position.set(0,-.28,-2.1).applyQuaternion(Ae).add(fe.eye),y.quaternion.copy(Ae),y.material.opacity=Math.min(1,V/.5),V=Math.max(0,V-fe.dt)}function Ou(fe){return!fe||fe.visible===!1?null:{position:fe.getWorldPosition(new x),direction:new x(0,0,-1).applyQuaternion(fe.getWorldQuaternion(new Me))}}function zu(fe){if(!fe)return null;if(N==="album"){let Le=ee.point(fe);return f.geometry.setFromPoints([fe.position,Le?Le.point:fe.position.clone().addScaledVector(fe.direction,2)]),f.visible=!0,p.visible=!!Le,Le&&p.position.copy(Le.point),Le?{...Le,label:"album"}:null}c.updateMatrixWorld(!0);let Ae=new Un(fe.position,fe.direction,0,4).intersectObject(u)[0];if(f.geometry.setFromPoints([fe.position,Ae?Ae.point:fe.position.clone().addScaledVector(fe.direction,2)]),f.visible=!0,p.visible=!!Ae,Ae&&p.position.copy(Ae.point),!Ae)return null;let Je=Ae.uv.x*1024,pt=(1-Ae.uv.y)*768;return S.find(Le=>Je>=Le.x&&Je<=Le.x+Le.w&&pt>=Le.y&&pt<=Le.y+Le.h)}function ku(fe){if(!fe||!M.group.visible)return!1;let Ae=M.group.position.clone().add(new x(0,.58,0)),Je=fe.position.clone().addScaledVector(fe.direction,4);return Kc(fe.position,Je,r,[{id:0,position:Ae}],.5)?.type==="target"&&fe.position.distanceTo(Ae)<3.3}function Vu(fe){P=fe,$&&Oe();let{dt:Ae,eye:Je,forward:pt,right:Le,left:bt,controller:ut}=fe,Sn=ae.throws,Xu=q.complete;F+=Ae;let Wn=!!Le?.gamepad?.buttons[0]?.pressed,dl=!!bt?.gamepad?.buttons[5]?.pressed,fl=!!Le?.gamepad?.buttons[5]?.pressed,rn=Ou(ut);if(dl&&!g&&(c.visible?Xe():ct()),fl&&!Y&&(c.visible&&N==="album"?(ee.back(),D=!0):c.visible?Xe():(Et(),ct())),g=dl,Y=fl,Wn||(D=!1),c.visible){N==="album"&&ee.tick(Ae,!!Le?.gamepad?.buttons[1]?.pressed,ut?.getWorldQuaternion(new Me));let Ct=zu(rn);E=Ct?.label||null,E!==C&&(C=E,he()),Wn&&!Z&&!D&&Ct&&(se(Le),Ct.action(),D=!0),y.visible=!1}else f.visible=p.visible=!1,v==="darts"&&ae.update(Ae,D?null:rn,!D&&Wn,!!Le?.gamepad?.buttons[4]?.pressed),v==="hunt"&&rn&&(Wn&&!Z&&!D&&!z&&(k=!0,B=[],m.visible=!0,se(Le,.15)),k&&(m.position.copy(rn.position).addScaledVector(rn.direction,.09),B.push({time:F,position:rn.position.clone()}),B=B.filter(Ct=>F-Ct.time<.16),!Wn&&Z&&(z={position:m.position.clone(),velocity:Sm(B,rn.direction),life:0},k=!1,B=[],se(Le,.2)))),v==="jigglypuff"&&(M.animate(Ae,!1),O?(O-=Ae,O<=0&&(O=0,Gs())):M.group.visible&&(M.group.rotation.y=Math.atan2(Je.x-M.group.position.x,Je.z-M.group.position.z),ku(rn)&&(f.geometry.setFromPoints([rn.position,M.group.position.clone().add(new x(0,.6,0))]),f.visible=!0,Wn&&!Z&&!D&&Fu()),F>J&&(Ce(),J=F+6)));if(v==="memory"){q.tick(Ae,c.visible);let Ct=!!Le?.gamepad?.buttons[4]?.pressed;if(Ct&&!Q&&q.complete&&!c.visible&&q.reset(),Q=Ct,!c.visible){let Ft=q.point(rn);Ft&&(f.geometry.setFromPoints([rn.position,Ft.point]),f.visible=!0,p.position.copy(Ft.point),p.visible=!0,Wn&&!Z&&!D&&Ft.action())}}if(n.update(v,v==="rc"?re.origin:v==="golf"?ue.origin:v==="bowling"?I.origin:v==="planes"?ne.origin:v==="basketball"?X.origin:null),i.visible=!["bowling","golf","rc"].includes(v),v==="fame"&&!te&&G.site&&Math.hypot(Je.x-G.site.view.x,Je.z-G.site.view.z)>7&&(v="explore"),te=!1,oe.tick(Ae,pt,!me||["fame","jigglypuff","darts","basketball","bowling","planes","memory","golf","rc"].includes(v),v==="friend"),X.tick(fe,c.visible),I.tick(fe,c.visible),ne.tick(fe,c.visible),ue.tick(fe,c.visible),re.tick(fe,c.visible),G.tick(Ae),!ut&&k&&He(),z&&!c.visible){let Ct=Math.max(1,Math.ceil(Ae/.012)),Ft=Ae/Ct;for(let Hs=0;Hs<Ct&&z;Hs++){let di=z,Ki=di.position.clone().addScaledVector(di.velocity,Ft);Ki.y-=4.9*Ft*Ft;let qu=s.mollie.balls.flatMap((Yu,pl)=>s.mollie.found.has(pl)?[]:[{id:pl,position:Yu.ball.position}]),Ws=Kc(di.position,Ki,r,qu);if(Ws){Ws.type==="target"&&s.xrGames.collect(Ws.id)&&(W=`${s.xrGames.names[Ws.id]} found! ${s.mollie.found.size}/18 cards.`,kt(W),se(Le,.8),s.mollie.found.size===18&&(W="All 18 cards found! Brilliant, Mollie!",kt(W))),He();break}di.position.copy(Ki),di.velocity.y-=9.8*Ft,di.life+=Ft,m.position.copy(Ki),m.rotation.x+=Ft*7,(Ki.y<0||di.life>3)&&He()}}if(K?.listener)try{let Ct=K.listener;for(let[Ft,Hs]of Object.entries({positionX:Je.x,positionY:Je.y,positionZ:Je.z,forwardX:pt.x,forwardY:pt.y,forwardZ:pt.z,upX:0,upY:1,upZ:0}))Ct[Ft]&&(Ct[Ft].value=Hs)}catch{}return v==="darts"&&Sn<9&&ae.throws===9&&kt(`Round complete! ${ae.total} points. A to play again.`),v==="memory"&&!Xu&&q.complete&&kt(`All pairs matched in ${q.moves} turns!`),Bu(fe),Z=Wn,{consumeTrigger:c.visible||v!=="explore"||D,blockTeleport:ue.held||v==="rc",blockMovement:v==="rc"||c.visible||k||ae.held||X.held||I.held||ne.held||ue.held}}function Gu(){oe.summon(),t.visible=!0,v="explore",Z=g=Y=!1,D=!0,W="Choose a game, or resume exploring.",ct()}function Hu(){Et(),Xe(),y.visible=!1,t.visible=!1,P=null,K?.suspend()?.catch(()=>{})}function Wu(){He(!0),Z=!0,D=!0}return{pokemonLayer:i,setCompanionEnabled:Ee,get companionEnabled(){return me},fame:G,visitFame:Ut,rc:re,golf:ue,planes:ne,bowling:I,play:X,memory:q,companion:oe,progress:hl,callCompanion:j,album:ee,darts:ae,showAlbum:le,tick:Vu,begin:Gu,end:Hu,enableAudio:Te,open:ct,close:Xe,start:sn,stop:Et,interrupt:Wu,chooseSpots:Ji,get mode(){return v},get driving(){return v==="rc"&&re.active},get menuOpen(){return c.visible},get found(){return U},get route(){return A},get held(){return k||ae.held||X.held||I.held||ne.held||ue.held},get flight(){return z},get board(){return c},get root(){return t},puff:M.group,ball:m}}var Dt={};function ro(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Tm(s){let e=2166136261;for(let t of String(s))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function wm(s){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=ro(813+s*431),i=[["#456840","#66884e","#355b38","#789353"],["#3e613c","#587747","#304f34","#70884e"],["#516d3e","#738c4b","#405c37","#8b9b56"]][s];t.clearRect(0,0,256,256),t.lineCap="round",t.lineJoin="round";function r(a,l,c,u,h){t.save(),t.translate(a,l),t.rotate(u),t.fillStyle=i[h%4],t.beginPath(),t.moveTo(0,-c),t.bezierCurveTo(c*.74,-c*.5,c*.82,c*.3,0,c*.83),t.bezierCurveTo(-c*.6,c*.24,-c*.68,-c*.58,0,-c),t.fill(),t.strokeStyle=h%2?"rgba(186,194,129,.26)":"rgba(166,184,115,.22)",t.lineWidth=.7,t.beginPath(),t.moveTo(0,c*.67),t.lineTo(0,-c*.74),t.stroke(),t.restore()}for(let a=0;a<5;a++){let l=103+n()*34,c=218+n()*20,u=38+a*41+(n()-.5)*22,h=35+n()*53;t.strokeStyle="rgba(66,61,41,.92)",t.lineWidth=1.5+n(),t.beginPath(),t.moveTo(l,c),t.quadraticCurveTo((l+u)*.5+(n()-.5)*20,(c+h)*.5,u,h),t.stroke();for(let d=0;d<8;d++){let f=.14+d*.103,p=l+(u-l)*f,m=c+(h-c)*f,M=d%2?1:-1,_=7+n()*11,w=9+n()*8;t.strokeStyle="rgba(82,76,43,.72)",t.lineWidth=1,t.beginPath(),t.moveTo(p,m),t.lineTo(p+M*_,m-3),t.stroke(),r(p+M*_,m-7,w,M*(.4+n()*.55),d+a+s)}}let o=new De(e);return o.colorSpace=Pe,o.anisotropy=2,o}function Am(){let s=document.createElement("canvas");s.width=128,s.height=256;let e=s.getContext("2d"),t=ro(731);e.fillStyle="#726f59",e.fillRect(0,0,128,256);for(let i=0;i<125;i++){let r=t()*128,o=t()*256,a=14+t()*116;e.strokeStyle=i%3?"rgba(33,39,30,.34)":"rgba(174,169,137,.26)",e.lineWidth=.6+t()*2.5,e.beginPath(),e.moveTo(r,o),e.bezierCurveTo(r+(t()-.5)*7,o+a*.3,r+(t()-.5)*8,o+a*.65,r+(t()-.5)*7,o+a),e.stroke()}let n=new De(s);return n.colorSpace=Pe,n.wrapS=n.wrapT=Jt,n.repeat.set(1,2),n}function Em(s){let e=document.createElement("canvas"),t=document.createElement("canvas");e.width=e.height=t.width=t.height=512;let n=e.getContext("2d"),i=t.getContext("2d"),r=ro(9147+s*319),o=[["#4e7146","#3a5b38","#789155","#597e48"],["#486843","#345536","#738c53","#58774a"],["#577342","#405e37","#8a995b","#66814a"]][s];n.fillStyle=o[0],n.fillRect(0,0,512,512),i.fillStyle="#777777",i.fillRect(0,0,512,512);for(let c=0;c<180;c++){let u=r()*512,h=r()*512,d=10+r()*36;n.fillStyle=c%2?"rgba(21,45,28,.14)":"rgba(172,179,118,.12)",n.beginPath(),n.ellipse(u,h,d,d*.7,r()*Math.PI,0,Math.PI*2),n.fill()}for(let c=0;c<1450;c++){let u=r()*512,h=r()*512,d=3+r()*5,f=r()*Math.PI*2;for(let[p,m]of[[n,o[c%4]],[i,c%2?"#9a9a9a":"#555555"]])p.save(),p.translate(u,h),p.rotate(f),p.fillStyle=m,p.beginPath(),p.moveTo(0,-d),p.bezierCurveTo(d*.7,-d*.4,d*.8,d*.3,0,d*.85),p.bezierCurveTo(-d*.6,d*.2,-d*.6,-d*.5,0,-d),p.fill(),p.restore()}let a=new De(e),l=new De(t);a.colorSpace=Pe;for(let c of[a,l])c.wrapS=c.wrapT=Jt,c.repeat.set(3,2),c.anisotropy=2;return{texture:a,height:l}}function Cm(){if(!Dt.trunk){Dt.trunk=new ze(.38,1,1,8,2,!1);let s=Dt.trunk.attributes.position;for(let n=0;n<s.count;n++){let i=s.getX(n),r=s.getY(n),o=s.getZ(n),a=Math.atan2(o,i),l=1+.045*Math.sin(a*5+r*9)+.025*Math.cos(a*3-r*11);s.setXYZ(n,i*l,r,o*l)}Dt.trunk.computeVertexNormals(),Dt.branch=new ze(.24,1,1,5,1,!0),Dt.leaf=new Ne(1,1),Dt.crown=new Ze(1,8,5);let e=Dt.crown.attributes.position;for(let n=0;n<e.count;n++){let i=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.atan2(o,i),l=Math.sqrt(i*i+o*o),c=.94+.085*Math.sin(a*3+r*2)*l+.045*Math.cos(a*5-r*4)*l;e.setXYZ(n,i*c,r*(1+.04*Math.sin(a*3)*l),o*c)}Dt.crown.computeVertexNormals(),Dt.crown.computeBoundingBox(),Dt.crown.computeBoundingSphere();let t=Am();Dt.wood=new be({map:t,color:16777215,roughness:1,metalness:0}),Dt.leaves=[0,1,2].map(n=>new be({map:wm(n),color:16777215,alphaTest:.38,transparent:!1,side:at,roughness:.96,metalness:0})),Dt.crowns=[0,1,2].map(n=>{let{texture:i,height:r}=Em(n);return new be({map:i,bumpMap:r,bumpScale:.035,color:16777215,transparent:!1,roughness:.96,metalness:0})})}return Dt}var Rm=`
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
`,Pm=`
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
`;function Qa(s,e,t){let n=s.clone();return n.onBeforeCompile=i=>{i.vertexShader.includes("#include <begin_vertex>")&&(i.uniforms.tfjWindTime=e,i.vertexShader=`#define TFJ_LEAF_FLUTTER ${t.toFixed(2)}
`+Rm+i.vertexShader.replace("#include <begin_vertex>",Pm))},n.customProgramCacheKey=()=>`tfj-tree-wind-v1-${t}`,n}function so(s,e,t,n,i,r=!1){if(!i.length)return null;if(r){t=t.clone();let l=new Float32Array(i.length*2);for(let c=0;c<i.length;c++)l.set(i[c].wind,c*2);t.setAttribute("tfjTreeWind",new ei(l,2))}let o=new _t(t,n,i.length);o.name=e,o.castShadow=o.receiveShadow=!1;let a=new Ye;for(let l=0;l<i.length;l++){let c=i[l];a.position.copy(c.position),a.quaternion.copy(c.quaternion),a.scale.copy(c.scale),a.updateMatrix(),o.setMatrixAt(l,a.matrix),o.setColorAt(l,c.color)}if(o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,o.computeBoundingBox(),o.computeBoundingSphere(),r){let l=i.reduce((u,h)=>Math.max(u,h.wind[0]),0),c=new x(l*.016,0,l*.0075);o.boundingBox.expandByVector(c),o.boundingSphere.radius+=c.length(),o.userData.windPadding=c}return s.add(o),o}function jc(s,e=[]){let t=new ge;t.name="Natural exterior trees",s.add(t);let n=Cm(),i=[],r=[],o=[[],[],[]],a=[[],[],[]],l=new x(0,1,0),c=new x,u=[],h={value:0},d=0,f,p=e.filter(y=>Number.isFinite(y?.x)&&Number.isFinite(y?.z)).length,m=p>64,M=m?15:22,_=4,w=Math.max(8,Math.min(m?96:144,Math.floor((99e3/Math.max(1,p)-n.trunk.index.count/3-M*n.branch.index.count/3-_*n.crown.index.count/3)/2)));function b(y,v,N,S,E){let C=N.clone().sub(v);y.push({position:v.clone().add(N).multiplyScalar(.5),quaternion:new Me().setFromUnitVectors(l,C.clone().normalize()),scale:new x(S,C.length(),S),color:E,wind:f})}for(let y=0;y<e.length;y++){let v=e[y];if(!Number.isFinite(v?.x)||!Number.isFinite(v?.z))continue;let N=Tm(v.seed??`${v.x},${v.z}`),S=ro(N),E=Number.isFinite(v.height)&&v.height>0?v.height:6,C=Number.isFinite(v.width)&&v.width>0?v.width:4,L=v.x,R=v.z,P=(S()-.5)*E*.075,k=(S()-.5)*E*.065,z=E*(.027+S()*.006),B=new Ue().setRGB(.72+S()*.16,.73+S()*.12,.69+S()*.13);f=[E,N/4294967296*Math.PI*2];let F=new x(L,0,R),Z=new x(L+P,E*.56,R+k),g=new x(L+P*.95,E*.84,R+k*.95);b(i,F,Z,z,B),b(r,Z,g,z*.4,B);let Y=m?2:3;for(let T=0;T<Y;T++){let V=T*Math.PI*2/Y+S()*.5,$=z*(1.8+S());b(r,new x(L,z*1.3,R),new x(L+Math.cos(V)*$,-.025,R+Math.sin(V)*$),z*.48,B)}let D=[{center:g,radiusX:C*.2,radiusY:E*.135,radiusZ:C*.2}],A=S()*Math.PI*2,U=.8+S()*.26;for(let T=0;T<6;T++){let V=A+T*Math.PI*2/6+(S()-.5)*.45,$=C*(.21+S()*.09),K=new x(L+P*.75+Math.cos(V)*$*U,E*(.55+T%3*.085+S()*.055),R+k*.75+Math.sin(V)*$),J=E*(.23+S()*.29),H=new x(L+P*J/(E*.56),J,R+k*J/(E*.56));b(r,H,K,z*(.24+S()*.1),B);for(let se of m?[T%2?1:-1]:[-1,1]){let ee=V+se*(.38+S()*.35),ae=K.clone().add(new x(Math.cos(ee)*C*.095,E*(.045+S()*.075),Math.sin(ee)*C*.095));b(r,H.clone().lerp(K,.66),ae,z*.1,B)}D.push({center:K,radiusX:C*(.16+S()*.07),radiusY:E*(.105+S()*.055),radiusZ:C*(.17+S()*.05)})}let O=.9+S()*.1;for(let T=0;T<_;T++){let V=T===0?D[0]:D[1+(T-1)*2],$=V.center.clone(),K=C*(T===0?.275:.245+S()*.025),J=E*(T===0?.158:.16+S()*.015),H=C*(.235+S()*.035),se=C*.5-Math.max(K,H)*1.04,ee=$.x-L,ae=$.z-R,q=Math.hypot(ee,ae);q>se&&($.x=L+ee*se/q,$.z=R+ae*se/q),a[T%3].push({position:$,quaternion:new Me().setFromEuler(new cn((S()-.5)*.16,S()*Math.PI*2,(S()-.5)*.14)),scale:new x(K,J,H),color:new Ue().setRGB(O*(.94+S()*.06),O,O*(.92+S()*.06)),wind:f})}let W=Math.max(8,w-Math.floor(S()*(m?12:20)));for(let T=0;T<W;T++){let V=D[T%D.length],$=S()*Math.PI*2,K=S()*2-1,J=Math.cbrt(S()),H=Math.sqrt(1-K*K),se=V.center.clone().add(new x(Math.cos($)*H*J*V.radiusX,K*J*V.radiusY,Math.sin($)*H*J*V.radiusZ)),ee=C*((m?.115:.092)+S()*.035),ae=ee*(.9+S()*.24),q=se.x-L,oe=se.z-R,ne=Math.hypot(q,oe),ue=Math.max(C*.1,C*.5-Math.hypot(ee,ae)*.5);ne>ue&&(se.x=L+q*ue/ne,se.z=R+oe*ue/ne),se.y=qe.clamp(se.y,E*.34,E*.965),se.y=Math.min(se.y,E-ae*.55),c.set(Math.cos($),(.5-S())*1.35,Math.sin($)).normalize();let re=new Me().setFromUnitVectors(new x(0,0,1),c);re.multiply(new Me().setFromAxisAngle(new x(0,0,1),(S()-.5)*1.4));let ye=O*(.83+S()*.17),me=new Ue().setRGB(ye*(.94+S()*.06),ye,ye*(.91+S()*.08));o[T%3].push({position:se,quaternion:re,scale:new x(ee,ae,1),color:me,wind:f})}u.push({x:L,z:R,height:E,width:C,seed:N,leafCount:W})}return so(t,"Tapered bark trunks",n.trunk,n.wood,i),so(t,"Forked branches and root flares",n.branch,Qa(n.wood,h,0),r,!0),a.forEach((y,v)=>so(t,"Opaque leaf crowns "+(v+1),n.crown,Qa(n.crowns[v],h,.2),y,!0)),o.forEach((y,v)=>so(t,"Leaf sprays "+(v+1),n.leaf,Qa(n.leaves[v],h,1),y,!0)),t.userData.treeCount=i.length,t.userData.foliageInstances=o.reduce((y,v)=>y+v.length,0),t.userData.branchInstances=r.length,t.userData.crownInstances=a.reduce((y,v)=>y+v.length,0),t.userData.opaqueCrownCoverage=1,t.userData.triangles=i.length*n.trunk.index.count/3+r.length*n.branch.index.count/3+t.userData.crownInstances*n.crown.index.count/3+t.userData.foliageInstances*2,t.userData.drawCalls=t.children.length,t.userData.placements=u,t.update=y=>{!Number.isFinite(y)||y<=0||(d+=Math.min(y,.1),h.value=d%(Math.PI*20))},t.userData.wind={gpu:!0,animatedMeshes:t.children.filter(y=>y.geometry.hasAttribute("tfjTreeWind")).length,cpuMatrixUpdates:0,get elapsed(){return d},get shaderTime(){return h.value},maxHorizontalFraction:.016},t}var Nt=32,qt=26,ft=6.5,Im=26.35,eu=[{name:"Neighbour workshop",left:-60,right:-24,door:-40,office:-53,ridge:.64,muted:!0},{name:"A&M Ceramics Ltd",left:-24,right:8,door:-3.5,office:-18,ridge:.82,brand:"am"},{name:"Neil Signs",left:8,right:40,door:19.5,office:34,ridge:.82,brand:"neil"},{name:"Neighbour warehouse",left:40,right:60,door:54,office:44,ridge:.55,muted:!0}];function Lm(s){let e=document.createElement("canvas");e.width=s==="neil"?1536:1792,e.height=256;let t=e.getContext("2d");if(t.fillStyle="#f7f7f2",t.fillRect(0,0,e.width,256),s==="neil"){let i="#852477",r="#b5d735";for(let[a,l,c]of[[105,44,i],[162,44,r],[219,44,i],[105,101,r],[162,101,i],[219,101,r],[162,158,r],[219,158,i]])t.save(),t.translate(a,l),t.rotate(Math.PI/4),t.fillStyle=c,t.fillRect(-19,-19,38,38),t.restore();t.textAlign="left",t.fillStyle=i,t.font="italic 600 158px Arial",t.fillText("neil",315,165);let o=t.measureText("neil").width;t.fillStyle=r,t.font="italic 700 149px Arial",t.fillText("signs",325+o,164),t.fillStyle="#626267",t.font="39px Arial",t.fillText("signmakers & vehicle graphics",322,225)}else t.fillStyle="#26789e",t.fillRect(38,51,113,122),t.fillStyle="#a8c9d7",t.fillRect(47,60,44,99),t.fillStyle="#f7f7f2",t.fillRect(98,60,43,45),t.fillStyle="#1a3456",t.textAlign="left",t.font="italic 700 108px Arial",t.fillText("A&M Ceramics Ltd",222,145,1330),t.font="36px Arial",t.fillText("UNIT 4  \xB7  KETTERER COURT",225,213),t.fillStyle="#146cba",t.fillRect(1612,0,180,256),t.fillStyle="#ffffff",t.textAlign="center",t.font="italic 700 175px Arial",t.fillText("4",1702,193);let n=new De(e);return n.colorSpace=Pe,n.anisotropy=4,new Se({map:n,color:16777215,side:at})}function tu(s){let e=new ge;e.name="Ketterer Court \xB7 opposite industrial units",s.add(e);let t=(S,E=.8,C=0)=>new be({color:S,roughness:E,metalness:C}),n={cladding:t("#b0b7bc",.82,.18),muted:t("#97a4ae",.9,.12),ribs:t("#c0c5c7",.8,.17),blue:t("#095d9e",.6,.22),mutedBlue:t("#416880",.74,.2),door:t("#116caf",.7,.17),roof:t("#6a7b84",.83,.26),roofRib:t("#82909a",.79,.25),tan:t("#a99883",.96),dark:t("#263b49",.7,.28),steel:t("#697d87",.65,.5),glass:t("#28485c",.2,.52),glassReflection:t("#728c98",.36,.3),white:t("#eceade",.95),concrete:t("#8d9494",1),black:t("#273032",.95),lamp:new be({color:"#e4e8df",emissive:"#bcc8c7",emissiveIntensity:.2,roughness:.5})},i=document.createElement("canvas");i.width=256,i.height=8;let r=i.getContext("2d"),o=r.createImageData(256,8);for(let S=0;S<8;S++)for(let E=0;E<256;E++){let C=Math.sin(E/8*Math.PI*2)*.6,L=Math.sqrt(1-C*C),R=(S*256+E)*4;o.data[R]=(C*.5+.5)*255,o.data[R+1]=128,o.data[R+2]=(L*.5+.5)*255,o.data[R+3]=255}r.putImageData(o,0,0);let a=new De(i);a.wrapS=a.wrapT=Jt,a.repeat.set(8,1),a.anisotropy=4;for(let S of[n.cladding,n.muted])S.normalMap=a,S.normalScale.set(.7,.7);let l=new Map,c=new Ye,u=new _e(1,1,1),h=[];function d(S,E,C,L,R,P,k,z=0,B=0,F=0){l.has(S)||l.set(S,[]),l.get(S).push({w:E,h:C,d:L,x:R,y:P,z:k,rx:z,ry:B,rz:F})}function f(S,E,C,L,R=L){let P=new x(...E),k=new x(...C),z=k.clone().sub(P),B=P.clone().add(k).multiplyScalar(.5),F=new Me().setFromUnitVectors(new x(1,0,0),z.clone().normalize());l.has(S)||l.set(S,[]),l.get(S).push({w:z.length(),h:L,d:R,x:B.x,y:B.y,z:B.z,quaternion:F})}function p(S,E,C){let L=(S+E)/2;for(let R of[Nt-.006,Nt+qt+.006])R<Nt?h.push(S,ft,R,L,ft+C,R,E,ft,R):h.push(E,ft,R,L,ft+C,R,S,ft,R)}function m(S,E,C,L){let R=Nt-.2;d(n.dark,E+.37,C+.18,.13,S,C/2,R+.025),d(L,E,C,.08,S,C/2+.035,R-.06);for(let P=.15;P<C;P+=.2)d(n.blue,E-.035,.022,.026,S,P,R-.12);for(let P of[-1,1])d(n.blue,.18,C+.25,.24,S+P*(E/2+.11),(C+.25)/2,R-.08);d(n.blue,E+.58,.37,.42,S,C+.22,R-.1),d(n.dark,E,.07,.15,S,.055,R-.08),d(n.steel,.3,.055,.035,S,.93,R-.13),d(n.black,E+.6,.018,.24,S,.017,30.72);for(let P=0;P<18;P++)d(n.steel,.035,.011,.2,S-(E+.4)/2+(P+.5)*(E+.4)/18,.031,30.72)}function M(S,E,C){let L=Nt-.22,R=.78,P=2.9,k=S-E*.25;d(n.tan,E,.78,.16,S,.39,L),d(n.dark,E,P-R,.1,S,(P+R)/2,L-.035),d(n.glass,E-.12,P-R-.14,.033,S,(P+R)/2,L-.095),d(n.glassReflection,E-.17,.31,.01,S,2.52,L-.116);for(let z=0;z<=6;z++)d(C,.065,P-R+.06,.075,S-E/2+z*E/6,(P+R)/2,L-.135);for(let z of[R,1.82,P])d(C,E+.1,.077,.088,S,z,L-.145);d(n.dark,1.02,2.29,.055,k,1.145,L-.155),d(n.glass,.87,2.13,.014,k,1.135,L-.191);for(let z of[-1,1])d(C,.066,2.36,.052,k+z*.53,1.18,L-.2);d(C,1.12,.075,.059,k,2.36,L-.2),d(n.steel,.028,.43,.065,k+.37,1.1,L-.232),d(C,E+.37,.24,.92,S,3.045,L-.26),d(n.tan,E+.1,.055,.43,S,.041,L-.24)}function _(S,E){d(n.dark,.43,.28,.2,S,E,31.57,.13),d(n.lamp,.355,.185,.016,S,E-.007,31.455,.13),f(n.steel,[S,E,31.93],[S,E,31.64],.045)}function w(S,E,C,L,R){d(n.dark,L+.13,R+.13,.085,E,C,31.57);let P=new xe(new Ne(L,R),Lm(S));return P.name=S==="neil"?"Neil Signs \xB7 reference wordmark":"A&M Ceramics Ltd \xB7 unit 4",P.position.set(E,C,31.51),P.rotation.y=Math.PI,e.add(P),{name:P.name,x:E,y:C,z:31.51,yaw:Math.PI,width:L,height:R}}let b=[];for(let S of eu){let{left:E,right:C,ridge:L}=S,R=C-E,P=(E+C)/2,k=S.muted?n.mutedBlue:n.blue;d(S.muted?n.muted:n.cladding,R,ft,qt,P,ft/2,Nt+qt/2),d(n.tan,R,.78,.08,P,.39,Nt-.045);for(let z=E+.22;z<C;z+=.49)d(S.muted?n.muted:n.ribs,.035,ft-.83,.036,z,(ft+.83)/2,Nt-.04);p(E,C,L);for(let z of[-1,1]){let B=R/2+.22,F=L+.02,Z=Math.hypot(B,F),g=-z*Math.atan2(F,B),Y=P+z*R/4;d(n.roof,Z,.095,qt+.54,Y,ft+L/2+.05,Nt+qt/2,0,0,g),f(k,[P+z*(R/2+.25),ft+.08,31.71],[P,ft+L+.11,31.71],.13,.18);for(let D=P+z*.45;z>0?D<C:D>E;D+=z*.88){let A=ft+L*(1-Math.abs(D-P)/(R/2))+.12;d(n.roofRib,.025,.035,qt+.38,D,A,Nt+qt/2,0,0,g)}}d(k,.15,.15,qt+.6,P,ft+L+.13,Nt+qt/2);for(let z of[E+.09,C-.09]){d(k,.19,ft,.17,z,ft/2,31.87),d(n.dark,.16,.15,qt+.2,z,ft-.01,Nt+qt/2),d(n.dark,.11,5.92,.11,z,.23+5.92/2,31.73);for(let B of[.4,2.2,4.1,5.8])d(n.steel,.17,.07,.15,z,B,31.73);d(n.dark,.14,.14,.37,z,.19,31.62)}d(k,R+.22,.32,.14,P,6.22,31.87),m(S.door,S.muted?5.5:6.2,4.45,S.muted?n.mutedBlue:n.door),M(S.office,S.muted?4.2:8.8,k),_(E+R*.12,5.65),_(E+R*.88,5.65),S.brand==="neil"&&b.push(w("neil",26.45,5.62,9.15,1.52)),S.brand==="am"&&b.push(w("am",-12,5.62,10.65,1.52))}for(let S of[-60.03,60.03])for(let E=Nt+.3;E<Nt+qt;E+=.7)d(n.ribs,.035,ft-.83,.035,S,(ft+.83)/2,E);d(n.concrete,120,.012,5.4,0,.003,29.08);for(let S of[-58,-54,-50,-22,-18,-14,12,16,20,30,34,38,46,50,54,58])d(n.white,.065,.007,3,S,.016,28.65);for(let[S,E]of[[-54,8],[-18,8],[16,8],[34,8],[52,12]])d(n.white,E,.007,.065,S,.016,27.15);for(let S of[-18,34])for(let E=0;E<7;E++)d(n.white,2.2,.007,.1,S,.017,29.72+E*.19);let y=[];for(let S of[-58,-25,7,39,59])d(n.steel,.085,7.78,.085,S,3.89,27.25),d(n.steel,.09,.09,.68,S,7.77,26.97),d(n.dark,.24,.125,.55,S,7.8,26.69),d(n.lamp,.185,.016,.47,S,7.735,26.69),d(n.dark,.17,.2,.17,S,.1,27.25),y.push({x:S,z:27.25,height:7.86});if(h.length){let S=new Be;S.setAttribute("position",new Re(h,3)),S.computeVertexNormals();let E=new xe(S,n.cladding);E.name="Shallow pitched facade gables",e.add(E)}for(let[S,E]of l){let C=new _t(u,S,E.length);C.name="Estate detail batch \xB7 "+Object.keys(n).find(L=>n[L]===S);for(let L=0;L<E.length;L++){let R=E[L];c.position.set(R.x,R.y,R.z),c.scale.set(R.w,R.h,R.d),R.quaternion?c.quaternion.copy(R.quaternion):c.rotation.set(R.rx,R.ry,R.rz),c.updateMatrix(),C.setMatrixAt(L,c.matrix)}C.instanceMatrix.needsUpdate=!0,C.computeBoundingBox(),C.computeBoundingSphere(),C.castShadow=!1,C.receiveShadow=!0,e.add(C)}let v=0,N=0;return e.traverse(S=>{S.isMesh&&(N++,v+=(S.geometry.index?.count||S.geometry.attributes.position.count)/3*(S.isInstancedMesh?S.count:1))}),e.userData={...e.userData,frontZ:Nt,minZ:Im,depth:qt,eaves:ft,units:eu.map(S=>({...S})),signs:b,lampPosts:y,triangles:v,drawCalls:N,collidersAdded:0},e.updateMatrixWorld(!0),e}function yn(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Be,c=0;for(let u=0;u<s.length;++u){let h=s[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=nu(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let m=0;m<o[u].length;++m)f.push(o[u][m][d]);let p=nu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function nu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new ht(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let m=u.getComponent(d,p);a.setComponent(d+h,p,m)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}var Dm=Math.PI*2,Nm=[{x:-20,y:7.3651,z:-8.42,yaw:Math.PI},{x:-7,y:7.9067,z:-8.42,yaw:Math.PI},{x:18,y:7.4484,z:-10.82,yaw:Math.PI},{x:-8,y:7.525,z:32,yaw:0},{x:24,y:7.525,z:32,yaw:0},{x:50,y:7.255,z:32,yaw:0}],iu=[{x:-17,y:15.5,z:6,radiusX:19,radiusZ:11,count:6,speed:7.5,phase:.3,heightVariation:.8},{x:20,y:18,z:12,radiusX:21,radiusZ:14,count:6,speed:8.4,phase:2.6,heightVariation:1},{x:0,y:21,z:18,radiusX:35,radiusZ:16.6,count:6,speed:9.2,phase:4.3,heightVariation:.9}],Ns=s=>new Ue(s);function Us(s,e,t,n=0,i=0,r=0,o=8,a=5){return new Ze(1,o,a).scale(s,e,t).translate(n,i,r)}function su(s,e,t=.004){let n=new x(...s),i=new x(...e),r=i.clone().sub(n),o=new ze(t,t,r.length(),3,1,!0);return o.applyQuaternion(new Me().setFromUnitVectors(new x(0,1,0),r.normalize())),o.translate((n.x+i.x)*.5,(n.y+i.y)*.5,(n.z+i.z)*.5)}function ja(s,e=!1){let t=new ot;s.forEach(([o,a],l)=>l?t.lineTo(o,-a):t.moveTo(o,-a)),t.closePath();let n=new Wt(t);n.rotateX(-Math.PI/2);let i=n.attributes.position,r=[];for(let o=0;o<i.count;o++){let a=e&&i.getX(o)>.17?.22:1;r.push(a,a,a)}return n.setAttribute("color",new Re(r,3)),n}function Um(){let s=yn([Us(.077,.073,.155),Us(.043,.06,.07,0,.053,-.114,6,4)]),e=Us(.052,.047,.055,0,0,0,6,5),t=new un(.012,.055,5,1);t.rotateX(-Math.PI/2),t.translate(0,-.006,-.073);let n=yn([Us(.0048,.0048,.0048,-.0495,.01,-.019,5,3),Us(.0048,.0048,.0048,.0495,.01,-.019,5,3)]),i=ja([[0,-.072],[.135,-.087],[.22,-.05],[.215,.062],[.09,.106],[0,.077]]),r=ja([[0,-.05],[.13,-.069],[.232,-.025],[.27,.014],[.212,.04],[.251,.06],[.161,.069],[.225,.095],[.113,.103],[.178,.126],[.075,.115],[0,.071]],!0),o=ja([[-.035,.12],[.035,.12],[.071,.255],[.024,.239],[0,.268],[-.024,.239],[-.071,.255]]),a=[];for(let l of[-1,1]){let c=l*.028;a.push(su([c,-.052,.025],[c,-.112,.023],.004));for(let u of[-1,0,1])a.push(su([c,-.112,.023],[c+u*.014,-.118,-.01-Math.abs(u)*.01],.0025))}return{body:s,head:e,beak:t,eyes:n,inner:i,outer:r,tail:o,feet:yn(a)}}function ci(s,e,t,n,i){let r=new _t(t,n,i);return r.name=e,r.castShadow=r.receiveShadow=!1,r.frustumCulled=!1,r.instanceMatrix.setUsage(Na),s.add(r),r}function hn(s,e){return Number.isFinite(s)?s:e}function ru(s,{perches:e=Nm,routes:t=iu}={}){let n=new ge;n.name="Yard birds \xB7 roof visitors and small flocks",s.add(n);let i=[],r=t.map((F,Z)=>({x:hn(F.x??F.center?.x,iu[Z%3].x),y:Math.max(13.5,hn(F.y??F.center?.y,18)),z:hn(F.z??F.center?.z,12),radiusX:Math.max(4,hn(F.radiusX,20)),radiusZ:Math.max(4,hn(F.radiusZ,12)),speed:qe.clamp(hn(F.speed,8),3,13),phase:hn(F.phase,Z*2.2),heightVariation:qe.clamp(hn(F.heightVariation,.9),0,1.5),count:Math.max(0,Math.min(12,Math.floor(hn(F.count,6))))}));for(let F of r){let Z=F.z+F.radiusZ+3.5>50;F.y=Math.max(F.y,(Z?24:12.5)+F.heightVariation+.25)}let o=e.filter(F=>Number.isFinite(F?.x)&&Number.isFinite(F?.y)&&Number.isFinite(F?.z)).map(F=>({x:F.x,y:F.y+.003,z:F.z,yaw:hn(F.yaw,0)}));function a(F,Z,g,Y){let D=i.length,A=F?D%3!==0:D%5===0,U=A?.77:.92,O=D*2.399963229728653,W=Z?(Z.radiusX+Z.radiusZ)*.5:0,T=Math.ceil(g/2),V=g===0?0:(g%2?-1:1)*T*.58,$={id:D,perched:F,species:A?"pigeon":"gull",position:new x,velocity:new x,quaternion:new Me,headQuaternion:new Me,wingAngles:[0,0],gliding:!1,headTurn:0,hop:0,scale:U,phase:O,route:Z,perch:Y,lane:V,trail:T*.9,omega:Z?Z.speed/W:0,flapHz:A?4.6:3.1,bodyColor:Ns(A?"#9ca7ad":"#e7e9e1"),headColor:Ns(A?"#818f99":"#f3f2e9"),wingColor:Ns(A?"#727f8b":"#dfe3dc"),beakColor:Ns(A?"#696660":"#d6b966"),feetColor:Ns(A?"#a66f69":"#a99e78"),_previous:new x};i.push($)}r.forEach(F=>{for(let Z=0;Z<F.count;Z++)a(!1,F,Z,null)}),o.forEach(F=>a(!0,null,0,F));let l=Um(),c=i.length,u=new be({color:16777215,roughness:.93}),h=new be({color:16777215,roughness:.93,side:at,vertexColors:!0}),d=new Se({color:1514013}),f={body:ci(n,"Bird bodies and necks",l.body,u,c),head:ci(n,"Turning bird heads",l.head,u,c),beak:ci(n,"Bird beaks",l.beak,u,c),eyes:ci(n,"Bird eyes",l.eyes,d,c),inner:ci(n,"Articulated inner wings",l.inner,h,c*2),outer:ci(n,"Feather-tipped outer wings",l.outer,h,c*2),tail:ci(n,"Bird tail feathers",l.tail,h,c),feet:ci(n,"Bird feet and tucked legs",l.feet,u,c)},p=Object.values(f);i.forEach((F,Z)=>{f.body.setColorAt(Z,F.bodyColor),f.head.setColorAt(Z,F.headColor),f.beak.setColorAt(Z,F.beakColor),f.feet.setColorAt(Z,F.feetColor),f.tail.setColorAt(Z,F.wingColor);for(let g=0;g<2;g++)f.inner.setColorAt(Z*2+g,F.wingColor),f.outer.setColorAt(Z*2+g,F.wingColor)});for(let F of p)F.instanceColor&&(F.instanceColor.needsUpdate=!0);let m=new Ye,M=new x,_=new x,w=new x,b=new x,y=new Me,v=new Me,N=new Me,S=new cn(0,0,0,"YXZ"),E=new x(0,0,1),C=new x(0,1,0),L=new x(1,0,0),R=0;function P(F,Z,g,Y,D,A=D,U=D){m.position.copy(g),m.quaternion.copy(Y),m.scale.set(D,A,U),m.updateMatrix(),F.setMatrixAt(Z,m.matrix)}function k(F=0){let Z=Math.max(0,Math.min(.1,hn(F,0)));R+=Z;for(let g of i){g._previous.copy(g.position);let Y=0,D=0,A=0;if(g.perched){let U=g.perch,O=(R+g.phase*2)%17;g.hop=O<.42?Math.sin(O/.42*Math.PI)*.055:0,g.position.set(U.x+Math.sin(R*.17+g.phase)*.025,U.y+.118*g.scale+g.hop,U.z+Math.sin(R*.13+g.phase)*.018),Y=U.yaw+Math.sin(R*.15+g.phase)*.14,g.headTurn=Math.sin(R*.47+g.phase)*.56+Math.sin(R*.93+g.phase)*.15,g.gliding=!1,g.wingAngles[0]=-.16,g.wingAngles[1]=0,g.velocity.copy(g.position).sub(g._previous),Z?g.velocity.divideScalar(Z):g.velocity.set(0,0,0)}else{let U=g.route,O=R*g.omega+U.phase-g.trail/((U.radiusX+U.radiusZ)*.5),W=U.radiusX+g.lane,T=U.radiusZ+g.lane,V=Math.sin(O),$=Math.cos(O),K=O*.63+g.phase;g.position.set(U.x+V*W,U.y+Math.sin(K)*U.heightVariation+Math.sin(g.phase)*.22,U.z+$*T),g.position.y=Math.max(g.position.z>50?24:12.5,g.position.y),g.velocity.set($*W*g.omega,Math.cos(K)*U.heightVariation*g.omega*.63,-V*T*g.omega);let J=Math.hypot(g.velocity.x,g.velocity.z),H=-V*W*g.omega*g.omega,se=-$*T*g.omega*g.omega,ee=(g.velocity.z*H-g.velocity.x*se)/(J*J);Y=Math.atan2(-g.velocity.x,-g.velocity.z),D=Math.atan2(g.velocity.y,J),A=qe.clamp(Math.atan2(J*ee,9.81),-.43,.43),g.gliding=(R*.075+g.phase*.14)%1>.46;let ae=R*g.flapHz*Dm+g.phase;g.wingAngles[0]=g.gliding?.08:Math.sin(ae)*.63,g.wingAngles[1]=g.gliding?.015:Math.sin(ae+.58)*.2,g.headTurn=Math.sin(R*.39+g.phase)*.07,g.hop=0}g.quaternion.setFromEuler(S.set(D,Y,A,"YXZ")),P(f.body,g.id,g.position,g.quaternion,g.scale),M.set(0,.104,-.183).multiplyScalar(g.scale).applyQuaternion(g.quaternion),_.copy(g.position).add(M),g.headQuaternion.copy(g.quaternion).multiply(N.setFromAxisAngle(C,g.headTurn)),g.headQuaternion.multiply(N.setFromAxisAngle(L,g.perched?Math.sin(R*.7+g.phase)*.09:0)),P(f.head,g.id,_,g.headQuaternion,g.scale),P(f.beak,g.id,_,g.headQuaternion,g.scale,g.scale,g.scale*(g.species==="pigeon"?.72:1)),P(f.eyes,g.id,_,g.headQuaternion,g.scale),P(f.tail,g.id,g.position,g.quaternion,g.scale),N.copy(g.quaternion),g.perched||N.multiply(v.setFromAxisAngle(L,-.9)),P(f.feet,g.id,g.position,N,g.scale);for(let U=0;U<2;U++){let O=U===0?1:-1,W=g.id*2+U,T=g.scale*(g.species==="gull"?1.13:1.03);M.set(O*.062,.025,-.018).multiplyScalar(g.scale).applyQuaternion(g.quaternion),b.copy(g.position).add(M),y.copy(g.quaternion),g.perched?(y.multiply(N.setFromAxisAngle(C,-O*1.3)),y.multiply(N.setFromAxisAngle(E,O>0?-.16:Math.PI+.16))):y.multiply(N.setFromAxisAngle(E,O>0?g.wingAngles[0]:Math.PI-g.wingAngles[0])),P(f.inner,W,b,y,T),M.set(.215*T,0,0).applyQuaternion(y),w.copy(b).add(M),v.copy(y),g.perched?v.multiply(N.setFromAxisAngle(C,-O*2.55)):v.multiply(N.setFromAxisAngle(E,O*g.wingAngles[1])),P(f.outer,W,w,v,T)}}for(let g of p)g.instanceMatrix.needsUpdate=!0;B.clock=R}let z=Object.entries(l).reduce((F,[Z,g])=>F+(g.index?.count||g.attributes.position.count)/3*(Z==="inner"||Z==="outer"?c*2:c),0),B={flying:i.filter(F=>!F.perched).length,perched:o.length,triangles:z,drawCalls:n.children.length,clock:0};return k(0),{root:n,states:i,update:k,stats:B,meshes:f,routes:r,perches:o}}var Fm=()=>{let s=globalThis.AudioContext||globalThis.webkitAudioContext;return s?new s:null},Fs=s=>s&&[s.x,s.y,s.z].every(Number.isFinite)?{x:s.x,y:s.y,z:s.z}:null,el=(s,e)=>(s.x-e.x)**2+(s.y-e.y)**2+(s.z-e.z)**2;function ou({isMuted:s=()=>!1,listener:e=()=>null,contextFactory:t=Fm,random:n=Math.random}={}){let i=null,r=null,o=null,a=!1,l=!1,c=!1,u=0,h=0,d=null,f=new Set,p=()=>{let R=n();return Number.isFinite(R)?Math.max(0,Math.min(.999999,R)):.5},m=()=>{try{return!!s()}catch{return!0}};function M(){if(r&&i)try{r.gain.cancelScheduledValues(i.currentTime),r.gain.setValueAtTime(0,i.currentTime)}catch{}for(let R of[...f])R.cleanup(!0);c=!1,u=0}function _(R,P,k){let z=!1,B=k.length,F={kind:R,nodes:P,sources:k,cleanup(Z=!1){if(!z){z=!0,f.delete(F);for(let g of k)if(g.onended=null,Z)try{g.stop()}catch{}for(let g of P)try{g.disconnect()}catch{}}}};for(let Z of k)Z.onended=()=>{--B<=0&&F.cleanup()};return f.add(F),F}function w(R,P){if(R.positionX&&R.positionY&&R.positionZ)for(let k of["x","y","z"])R["position"+k.toUpperCase()].setValueAtTime(P[k],i.currentTime);else R.setPosition?.(P.x,P.y,P.z)}function b(R){if(!i.createPanner)return null;let P=i.createPanner();return P.panningModel="HRTF",P.distanceModel="inverse",P.refDistance=5,P.maxDistance=80,P.rolloffFactor=.65,w(P,R),P.connect(r),P}function y(R,P){let k=i.listener;if(!k)return;if(k.positionX)for(let F of["x","y","z"])k["position"+F.toUpperCase()].setValueAtTime(R[F],i.currentTime);else k.setPosition?.(R.x,R.y,R.z);let z=Math.hypot(P.x,P.y,P.z)||1,B={x:P.x/z,y:P.y/z,z:P.z/z};if(k.forwardX)for(let F of["x","y","z"])k["forward"+F.toUpperCase()].setValueAtTime(B[F],i.currentTime),k["up"+F.toUpperCase()].setValueAtTime(F==="y"?1:0,i.currentTime);else k.setOrientation?.(B.x,B.y,B.z,0,1,0)}function v(){if([...f].some(k=>k.kind==="breeze"))return;if(!o){o=i.createBuffer(1,Math.round(i.sampleRate*2),i.sampleRate);let k=o.getChannelData(0),z=0;for(let B=0;B<k.length;B++)z=z*.965+(p()*2-1)*.035,k[B]=z}let R=i.createBufferSource(),P=i.createGain();R.buffer=o,R.loop=!0,P.gain.setValueAtTime(0,i.currentTime),P.gain.linearRampToValueAtTime(.009,i.currentTime+1.5),R.connect(P),P.connect(r),_("breeze",[R,P],[R]),R.start()}function N(R,P){if([...f].filter(T=>T.kind==="bird").length>=2)return;let k=(Array.isArray(P)?P:[]).map(T=>Fs(T?.position||T)).filter(T=>T&&el(T,R)<=80**2).sort((T,V)=>el(T,R)-el(V,R)),z=p()*Math.PI*2,B=9+p()*11,F=k.length?k[Math.floor(p()*Math.min(3,k.length))]:{x:R.x+Math.sin(z)*B,y:R.y+2+p()*4,z:R.z+Math.cos(z)*B},Z=i.createOscillator(),g=i.createGain(),Y=b(F),D=i.currentTime+.015,A=2+Math.floor(p()*2),U=2200+p()*900,O=.07+p()*.035;Z.type="sine",Z.connect(g),g.connect(Y||r),g.gain.setValueAtTime(1e-4,i.currentTime);let W=D;for(let T=0;T<A;T++){let V=W+(T?.025+p()*.045:0),$=.07+p()*.065,K=U*(.94+p()*.12);Z.frequency.setValueAtTime(K,V),Z.frequency.exponentialRampToValueAtTime(K*(1.17+p()*.19),V+.025),Z.frequency.exponentialRampToValueAtTime(K*(.88+p()*.1),V+$),g.gain.setValueAtTime(1e-4,V),g.gain.linearRampToValueAtTime(O,V+.015),g.gain.exponentialRampToValueAtTime(1e-4,V+$),W=V+$}_("bird",[Z,g,...Y?[Y]:[]],[Z]),Z.start(D),Z.stop(W+.02),h++,d={...F}}async function S(){if(l||m())return!1;try{if(!i||i.state==="closed"){if(i=t(),!i)return!1;r=i.createGain(),r.gain.setValueAtTime(0,i.currentTime),r.connect(i.destination),o=null}let R=i.state==="suspended"?i.resume():null;return a=!0,R&&await R,a}catch{return a=!1,M(),!1}}function E(R,P={}){if(!a||!i||i.state!=="running"||!P.outside||!P.active||P.muted||m()||globalThis.document?.hidden){(c||f.size)&&M();return}try{let k=e()||{},z=Fs(P.eye)||Fs(k.eye)||{x:0,y:1.7,z:0},B=Fs(P.forward)||Fs(k.forward)||{x:0,y:0,z:-1};y(z,B),c||(c=!0,u=2.5+p()*3.5,r.gain.setTargetAtTime(.16,i.currentTime,.15),v());let F=Number.isFinite(R)?Math.max(0,Math.min(.1,R)):0;u-=F,u<=0&&(N(z,P.sources),u=6+p()*9)}catch{a=!1,M()}}function C(){a=!1,M()}function L(){if(!l){C(),l=!0;try{r?.disconnect()}catch{}try{i?.close()?.catch?.(()=>{})}catch{}i=r=o=null}}return{enableAudio:S,update:E,disable:C,dispose:L,get enabled(){return a},get stats(){return{enabled:a,audible:c,disposed:l,contextState:i?.state??"unavailable",voiceCount:f.size,nodeCount:[...f].reduce((R,P)=>R+P.nodes.length,r?1:0),birdVoices:[...f].filter(R=>R.kind==="bird").length,breezeActive:[...f].some(R=>R.kind==="breeze"),birdsPlayed:h,lastBirdPosition:d&&{...d}}}}}function Bm(s){if(!s||![s.x,s.y,s.z].every(Number.isFinite))return!1;let e=s.x>=-26&&s.x<=-2&&s.z>=-38&&s.z<=-8,t=s.x>=-2&&s.x<=28&&s.z>=-38&&s.z<=-10.5;return!(e||t)||s.y>9}function au(s){let e=new ge;e.name="Ketterer Court exterior",s.worldScene.add(e);let t=window.yardExteriorTreeSites||[],n=t.map(h=>{let d=h.z>50&&Math.abs(h.x)<65,f=d?Math.max(18,h.height+7):h.height;return{...h,height:f,width:f*.88,z:d?Math.max(61,h.z+5):h.z}}),i=jc(e,n),r=tu(e),o=new be({color:6450762,roughness:1});for(let[h,d,f,p]of[[0,-52,195,26],[-83,10,22,116],[88,10,20,116],[0,71,195,24]]){let m=new xe(new Ne(f,p),o);m.rotation.x=-Math.PI/2,m.position.set(h,.004,d),m.name="Exterior grass verge",e.add(m)}let a=ru(e),l=()=>document.querySelector("#soundBtn")?.getAttribute?.("aria-pressed")==="false",c=ou({isMuted:l}),u=a.states.map(h=>h.position);return{root:e,trees:i,buildings:r,birds:a,audio:c,enableAudio:()=>c.enableAudio(),update(h,d={}){if(d.hidden)return c.update(h,{active:!1,outside:!1});i.update(h),a.update(h),c.update(h,{...d,outside:Bm(d.eye),muted:l(),sources:u})}}}var Bs=.3,lu=1.15,Om=1.1,zm=.9,km=.48,Vm=[{minX:-1,maxX:9,minZ:-34,maxZ:-18,minY:0,maxY:2.8},{minX:-25,maxX:-17,minZ:-15,maxZ:-8,minY:0,maxY:2.8}],Gm={Lee:{offsets:[[0,.9]],activity:"frontage",yaw:0},"Stores team":{offsets:[[0,-.75],[-.65,-.75]],activity:"inspection",yaw:Math.PI/2},"Workshop team":{offsets:[[-.55,-.55]],activity:"inspection",yaw:-Math.PI/2},Dan:{offsets:[[.55,.13]],activity:"coffee",yaw:Math.PI,partner:"Sam"},Sam:{offsets:[[-.4,.2]],activity:"chat",yaw:-Math.PI/2,partner:"Dan"}},Hm=["Head","Chest","Torso","UpperArmL","UpperArmR","LowerArmL","LowerArmR","WristL","WristR","Middle1R"],Os=s=>Math.atan2(Math.sin(s),Math.cos(s)),ui=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),oo=s=>s&&Number.isFinite(s.x)&&Number.isFinite(s.y)&&Number.isFinite(s.z),Wm=(s,e,t)=>s.max.y>e.y+.08&&s.min.y<e.y+1.82&&Math.hypot(Math.max(s.min.x-e.x,0,e.x-s.max.x),Math.max(s.min.z-e.z,0,e.z-s.max.z))<t;function Xm(s,e){let t=e.y||0;return s.colliders.find(n=>Math.abs(n.min.x-(e.x-.3))<1e-4&&Math.abs(n.max.x-(e.x+.3))<1e-4&&Math.abs(n.min.z-(e.z-.3))<1e-4&&Math.abs(n.max.z-(e.z+.3))<1e-4&&Math.abs(n.min.y-t)<1e-4&&Math.abs(n.max.y-t-(e.seated?1.5:1.95))<1e-4)}function cu(s,e=s.worldScene){let t=new ge;t.name="TF Jones staff routines",e?.add(t);let n=(s.staff||[]).filter(T=>T.person?.group&&T.person?.model&&typeof T.person.animate=="function").map((T,V)=>{let $=T.person,K=$.group.position.clone(),J=Object.fromEntries(Hm.map(se=>[se,$.model.getObjectByName(se)])),H={...T,record:T,index:V,name:T.spec.name,home:K,position:K.clone(),yaw:$.group.rotation.y,collider:Xm(s,T.spec),seated:!!T.spec.seated,routine:Gm[T.spec.name],route:[],routeIndex:0,wait:3+V*1.6,speed:0,state:T.spec.seated?"typing":"idle",activity:"idle",wave:0,cooldown:0,near:!1,bones:J,basePose:new Map,originalAnimate:$.animate,originalLabelOffset:T.label.position.clone().sub(K)};return H.restore=()=>{for(let[se,ee]of H.basePose)se.quaternion.copy(ee)},H.capture=()=>{for(let se of Object.values(J))se&&(H.basePose.has(se)?H.basePose.get(se).copy(se.quaternion):H.basePose.set(se,se.quaternion.clone()))},H.capture(),H.wrapper=()=>{},$.animate=H.wrapper,H.animate=(se,ee="idle")=>H.originalAnimate.call($,se,ee,2.9),H}),i=new Set(n.map(T=>T.collider).filter(Boolean)),r=s.colliders.filter(T=>!i.has(T)),o=0,a=!1,l=!1,c=0,u=0,h=n.find(T=>T.name==="Dan"),d=new ge;d.name="Dan's coffee mug",d.visible=!1;let f=new ze(.043,.036,.095,10,1,!0),p=new xt(.027,.007,5,10),m=new vi(.035,10),M=new be({color:15265264,roughness:.5}),_=new be({color:3745307,roughness:.7}),w=new xe(f,M),b=new xe(p,M),y=new xe(m,_);b.position.x=-.054,y.rotation.x=-Math.PI/2,y.position.y=.039,d.add(w,b,y),h?.bones.WristR&&t.add(d);let v={actorCount:n.length,seated:n.filter(T=>T.seated).length,drawCalls:t.children.length?3:0,triangles:t.children.length?130:0,get time(){return o},get moving(){return n.filter(T=>T.speed>0).length},get greetings(){return c},get distance(){return u},get routes(){return n.filter(T=>T.route.length>1).length},get active(){return a}};function N(T){return Vm.some(V=>T.y<V.maxY&&T.y+1.82>V.minY&&T.x>V.minX-Bs&&T.x<V.maxX+Bs&&T.z>V.minZ-Bs&&T.z<V.maxZ+Bs)}function S(T){if(!oo(T)||N(T))return!1;let V=s.bounds;return V&&(T.x<V.minX||T.x>V.maxX||T.z<V.minZ||T.z>V.maxZ)||Math.abs(s.groundAt(T.x,T.z,T.y+.12)-T.y)>.12?!1:!r.some($=>Wm($,T,Bs))}function E(T,V){let $=Math.max(1,Math.ceil(ui(T,V)/.05)),K=new x;for(let J=0;J<=$;J++)if(!S(K.copy(T).lerp(V,J/$)))return!1;return!0}for(let T of n){if(T.seated||!T.routine||!T.collider||!S(T.home))continue;let V=[T.home.clone()];for(let[$,K]of T.routine.offsets){let J=T.home.clone().add(new x($,0,K));if(!E(V.at(-1),J))break;V.push(J)}V.length>1&&(T.route=[...V,...V.slice(0,-1).reverse().map($=>$.clone())]),T.routeIndex=1}let C=new x,L=new x,R=new x,P=new x,k=new rt,z=new We,B=new x;function F(T,V,$=!1){return Math.abs(V.y-T.home.y-($?1.65:0))<1.35}function Z(T){if(oo(T.companion))return T.companion;let V=s.vrGames?.companion?.group;if(!V?.visible)return null;for(let $=V;$;$=$.parent)if(!$.visible)return null;return V.getWorldPosition(new x)}function g(T,V,$){if(L.y<=T.home.y+2.4&&L.y+1.75>T.home.y&&ui(V,L)<lu||F(T,C,!0)&&ui(V,C)<lu)return!1;let K=Z($);return K&&F(T,K)&&ui(V,K)<Om?!1:!n.some(J=>J!==T&&Math.abs(J.home.y-T.home.y)<1.35&&ui(V,J.position)<zm)}function Y(T){if(!F(T,C,!0)||ui(T.position,C)>2.8)return!1;T.person.group.updateMatrixWorld(!0),T.bones.Head?.getWorldPosition(R),T.bones.Head||R.copy(T.position).add(new x(0,1.55,0));let V=R.distanceTo(C);return k.set(R,P.copy(C).sub(R).normalize()),!r.some($=>(z.min.copy($.min),z.max.copy($.max),z.containsPoint(R)?!1:k.intersectBox(z,B)&&R.distanceTo(B)<V-.08))}function D(T){T.person.group.position.copy(T.position),T.person.group.rotation.set(0,T.yaw,0),T.spec.x=T.position.x,T.spec.y=T.position.y,T.spec.z=T.position.z,T.label.position.copy(T.position).add(T.originalLabelOffset),oo(C)&&T.label.lookAt(C),T.collider&&!T.seated&&(T.collider.min.set(T.position.x-.3,T.position.y,T.position.z-.3),T.collider.max.set(T.position.x+.3,T.position.y+1.95,T.position.z+.3))}function A(T,V,$){let K=T.bones[V];if(!K)return;let J=K.parent.getWorldQuaternion(new Me),H=K.getWorldQuaternion(new Me),se=new x(0,1,0).applyQuaternion(H),ee=new x(...$).normalize().applyQuaternion(T.person.group.getWorldQuaternion(new Me));K.quaternion.copy(J.invert().multiply(new Me().setFromUnitVectors(se,ee).multiply(H))),T.person.model.updateMatrixWorld(!0)}function U(T,V){let $=o+T.index*.73,K=T.bones.Head,J=T.bones.Chest||T.bones.Torso;if(T.seated){for(let H of["L","R"])T.bones["LowerArm"+H]?.rotateX(Math.sin($*8+(H==="L"?0:2))*.026),T.bones["Wrist"+H]?.rotateZ(Math.sin($*11+(H==="L"?0:2))*.018);J?.rotateX(.018+Math.sin($*.9)*.008)}else T.activity==="coffee"&&!T.speed&&!T.wave?(A(T,"UpperArmR",[.18,-.4,.45]),A(T,"LowerArmR",[-.18,.7,.35])):T.activity==="inspection"&&!T.speed&&!T.wave?(J?.rotateX(.055),T.bones.LowerArmR?.rotateX(Math.sin($*1.4)*.045)):T.activity==="chat"&&!T.speed&&!T.wave&&T.bones.LowerArmL?.rotateZ(Math.sin($*1.7)*.06);if(K)if(V){T.person.model.updateMatrixWorld(!0),K.getWorldPosition(R);let H=Math.atan2(C.x-T.position.x,C.z-T.position.z),se=Math.atan2(C.y-R.y,ui(T.position,C));K.rotateY(qe.clamp(Os(H-T.yaw),-.5,.5)),K.rotateX(-qe.clamp(se,-.28,.28))}else K.rotateX(Math.sin($*(T.activity==="chat"?2.3:.8))*.018+(T.seated?.06:T.activity==="inspection"?.08:0))}function O(T,V={}){if(l)return;let $=s.stats(),K=V.active??$.playing,J=K&&!V.hidden&&(!V.mode||V.mode==="explore");if(L.set($.x,$.y,$.z),C.copy(oo(V.eye)?V.eye:new x($.x,$.y+1.65,$.z)),!J){if(a)for(let H of n)H.speed=0;a=!1;for(let H of n)D(H);return}if(a=!0,!Number.isFinite(T)||T<=0){for(let H of n)D(H);return}T=Math.min(T,.1),o+=T;for(let H of n){H.restore();let se=Y(H);if(H.cooldown=Math.max(0,H.cooldown-T),se&&!H.near&&!H.cooldown&&!H.seated&&(H.wave=1.6,H.cooldown=14,c++),H.near=se,H.wave=Math.max(0,H.wave-T),H.speed=0,H.wave)H.state="greeting",H.activity="greeting",H.yaw+=Os(Math.atan2(C.x-H.position.x,C.z-H.position.z)-H.yaw)*Math.min(1,T*4);else if(H.seated)H.state="typing",H.activity="typing";else if(H.route.length>1)if(H.wait=Math.max(0,H.wait-T),H.wait){H.state=H.activity;let ee=H.activity==="chat"&&n.find(q=>q.name===H.routine.partner),ae=ee?Math.atan2(ee.position.x-H.position.x,ee.position.z-H.position.z):H.routine.yaw??H.spec.rot??0;H.yaw+=Os(ae-H.yaw)*Math.min(1,T*2)}else{let ee=H.route[H.routeIndex],ae=ui(H.position,ee),q=Math.atan2(ee.x-H.position.x,ee.z-H.position.z);if(ae<.015)H.position.copy(ee),H.activity=H.routeIndex===H.route.length-1?"chat":H.routine.activity,H.wait=H.routeIndex===H.route.length-1?9:H.routine.activity==="coffee"?6:4,H.routeIndex=H.routeIndex===H.route.length-1?1:H.routeIndex+1,H.state=H.activity;else if(H.yaw+=Os(q-H.yaw)*Math.min(1,T*5),H.state="waiting",Math.abs(Os(q-H.yaw))<.2){let oe=Math.min(ae,km*T),ne=H.position.clone().lerp(ee,oe/ae);E(H.position,ne)&&g(H,ne,V)&&(H.position.copy(ne),H.speed=oe/T,H.state="walking",H.activity="walking",u+=oe)}}else H.state="idle",H.activity="idle";D(H),H.animate(H.speed?T*H.speed/1.2:T,H.wave?"wave":H.speed?"walk":"idle"),H.capture(),H.person.group.updateMatrixWorld(!0),U(H,se)}d.visible=!!h?.bones.WristR&&h.activity==="coffee"&&!h.speed&&!h.wave,d.visible&&(h.person.group.updateMatrixWorld(!0),(h.bones.Middle1R||h.bones.WristR).getWorldPosition(R),R.add(P.set(.054,-.012,0).applyQuaternion(h.person.group.getWorldQuaternion(new Me))),t.updateMatrixWorld(!0),d.position.copy(t.worldToLocal(R)),d.quaternion.copy(t.getWorldQuaternion(new Me).invert().multiply(h.person.group.getWorldQuaternion(new Me))))}function W(){if(!l){l=!0;for(let T of n)T.restore(),T.person.animate===T.wrapper&&(T.person.animate=T.originalAnimate);t.removeFromParent();for(let T of[f,p,m])T.dispose();M.dispose(),_.dispose()}}return t.userData={actors:n.length,addedModels:0,drawCalls:v.drawCalls},{root:t,update:O,stats:v,actors:n,dispose:W,clear:S,segmentClear:E,mug:d}}var uu=s=>Math.max(0,Math.min(1,s));function ao(s,e=.08){return s=uu(s),s<e?s*s/(2*e*(1-e)):s>1-e?1-(1-s)*(1-s)/(2*e*(1-e)):(s-e/2)/(1-e)}function hu(s){let e=[],t=new Map;for(let a=1;a<s.length-1;a++){let l=s[a-1],c=s[a],u=s[a+1];if(Math.abs(l.y-c.y)>1e-8||Math.abs(c.y-u.y)>1e-8)continue;let h=new x().subVectors(c,l),d=new x().subVectors(u,c),f=h.length(),p=d.length();if(h.normalize(),d.normalize(),h.dot(d)>.9995||h.dot(d)<-.9)continue;let m=Math.min(.32,f*.22,p*.22);t.set(a,{before:c.clone().addScaledVector(h,-m),after:c.clone().addScaledVector(d,m)})}let n=s[0];for(let a=1;a<s.length;a++){let l=t.get(a),c=l?.before||s[a];n.distanceTo(c)>1e-9&&e.push(new gn(n,c)),l?(e.push(new Mi(l.before,s[a],l.after)),n=l.after):n=c}let i=[0];for(let a of e)i.push(i.at(-1)+a.getLength());let r=new x,o=e.map(a=>{let l=a.getTangent(.5);return Math.hypot(l.x,l.z)>1e-7?Math.atan2(-l.x,-l.z):null});for(let a=0;a<o.length;a++)if(o[a]===null){let l=a-1;for(;l>=0&&o[l]===null;)l--;if(l>=0)o[a]=o[l];else{for(l=a+1;l<o.length&&o[l]===null;)l++;o[a]=o[l]??0}}return{points:s,length:i.at(-1),sample(a,l){let c=uu(a)*i.at(-1),u=0;for(;u<e.length-1&&c>i[u+1];)u++;let h=(c-i[u])/(i[u+1]-i[u]);return e[u].getPointAt(h,l),e[u].getTangentAt(h,r),Math.hypot(r.x,r.z)>1e-7?Math.atan2(-r.x,-r.z):o[u]}}}var zs=new x;function en(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;zs.copy(e),zs[n]=0,zs.normalize();let c=.5*o/(o+a),u=1-zs.angleTo(s)/l;return Math.sign(zs[t])===1?u*c:a/(o+a)+c+c*(1-u)}var lo=class s extends _e{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new x,c=new x,u=new x(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,m=new x,M=.5/o;for(let _=0,w=0;_<h.length;_+=3,w+=2)switch(l.fromArray(h,_),c.copy(l),c.x-=Math.sign(c.x)*M,c.y-=Math.sign(c.y)*M,c.z-=Math.sign(c.z)*M,c.normalize(),h[_+0]=u.x*Math.sign(l.x)+c.x*r,h[_+1]=u.y*Math.sign(l.y)+c.y*r,h[_+2]=u.z*Math.sign(l.z)+c.z*r,d[_+0]=c.x,d[_+1]=c.y,d[_+2]=c.z,Math.floor(_/p)){case 0:m.set(1,0,0),f[w+0]=en(m,c,"z","y",r,n),f[w+1]=1-en(m,c,"y","z",r,t);break;case 1:m.set(-1,0,0),f[w+0]=1-en(m,c,"z","y",r,n),f[w+1]=1-en(m,c,"y","z",r,t);break;case 2:m.set(0,1,0),f[w+0]=1-en(m,c,"x","z",r,e),f[w+1]=en(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),f[w+0]=1-en(m,c,"x","z",r,e),f[w+1]=1-en(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),f[w+0]=1-en(m,c,"x","y",r,e),f[w+1]=1-en(m,c,"y","x",r,t);break;case 5:m.set(0,0,-1),f[w+0]=en(m,c,"x","y",r,e),f[w+1]=1-en(m,c,"y","x",r,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var Yt=15791089,tt=2107441,qm=1382943,tl=10595763,co=11450557,du=3439/1235,xu=new _e(1,1,1),Ym=new ze(1,1,1,8),Zm=new x(1,1,1),$m=new x(1,0,0),Jm=new x(0,1,0),Km=new be({vertexColors:!0,roughness:.43,metalness:.12}),fu=new be({color:3032663,roughness:.19,metalness:.22}),Qm=new be({vertexColors:!0,roughness:.32,metalness:.64}),hi;function jm(){if(hi)return hi;let s=globalThis.document?.querySelector?.("img[data-delivery-logo]");!s&&globalThis.Image&&(s=new Image,s.src="./assets/tfj-delivery-logo.png");let e=new mn(s);e.colorSpace=Pe,hi={image:s,texture:e,ready:!!(s?.complete&&s.naturalWidth>0),panels:[]};let t=()=>{if(s?.naturalWidth>0){hi.ready=!0,e.needsUpdate=!0;for(let n of hi.panels)n.visible=!0}};return hi.ready?e.needsUpdate=!0:s?.addEventListener?.("load",t,{once:!0}),hi}function nl(s,e,t,n,i,r=0){let o=jm(),a=Math.abs(Math.sin(r))>.9,l=new Se({map:o.texture,color:16777215,alphaTest:.03,polygonOffset:!0,polygonOffsetFactor:-1}),c=new xe(new Ne(a?i:i/.9,i/du),l);return c.position.set(e,t,n),c.rotation.y=r,c.name="Full official TF Jones delivery logo",c.visible=o.ready,c.userData.logoRatio=du,o.panels.push(c),s.add(c),c}function pu(s,e){let t=new Ue(e),n=new Float32Array(s.attributes.position.count*3);for(let i=0;i<n.length;i+=3)n[i]=t.r,n[i+1]=t.g,n[i+2]=t.b;return s.setAttribute("color",new ht(n,3)),s}function On(s,e,t=Km){let n=[],i=new Ye;return{add(r,o,a,l,c,u,h,d,f=0,p=0,m=0){i.position.set(o,a,l),i.rotation.set(f,p,m),i.scale.set(c,u,h),i.updateMatrix();let M=pu(r.clone().applyMatrix4(i.matrix),d);n.push(M.index?M.toNonIndexed():M),M.index&&M.dispose()},box(r,o,a,l,c,u,h,d=0,f=0,p=0){this.add(xu,r,o,a,l,c,u,h,d,f,p)},rounded(r,o,a,l,c,u,h,d=.06,f=0,p=0,m=0){let M=new lo(l,c,u,1,d);this.add(M,r,o,a,1,1,1,h,f,p,m),M.dispose()},between(r,o,a,l){let c=o.clone().sub(r),u=new Me().setFromUnitVectors(Jm,c.clone().normalize());i.position.copy(r).add(o).multiplyScalar(.5),i.quaternion.copy(u),i.scale.set(a,c.length(),a),i.updateMatrix();let h=pu(Ym.clone().applyMatrix4(i.matrix),l);n.push(h.toNonIndexed()),h.dispose()},finish(){let r=yn(n);for(let a of n)a.dispose();r.computeBoundingBox(),r.computeBoundingSphere();let o=new xe(r,t);return o.name=e,o.castShadow=o.receiveShadow=!1,s?.add(o),o}}}function mu(s,e,t,n,i,r){let o=[[s,t],[s,n-.08],[s+.06,n],[e-.08,n],[e,n-.08],[e,t]],a=.444,l=Math.asin((t-.36)/a),c=Math.PI-l;o.push([i+a*Math.cos(l),t]);for(let u=1;u<=14;u++){let h=l+(c-l)*u/14;o.push([i+a*Math.cos(h),.36+a*Math.sin(h)])}return o.push([s,t]),uo(o,[],r,.04,.02)}function uo(s,e,t,n=.045,i=.012){let r=(l,c=new ot)=>{for(let u=0;u<l.length;u++){let[h,d]=l[u];c[u?"lineTo":"moveTo"](-t*h,d)}return c.closePath(),c},o=r(s);for(let l of e)o.holes.push(r(l,new Ln));let a=new Bt(o,{depth:n,steps:1,bevelEnabled:i>0,bevelSegments:1,bevelSize:i,bevelThickness:i*.65,curveSegments:6});return a.rotateY(t*Math.PI/2),a}function gu(s,e,t){let i=[];for(let r=0;r<=18;r++){let o=.28+(Math.PI-.56)*r/18;i.push(new x(e*.985,.36+Math.sin(o)*.447,t+Math.cos(o)*.447))}for(let r=1;r<i.length;r++)s.between(i[r-1],i[r],.027,qm)}function e0(){let s=[],e=[],t=[];for(let o=0;o<=4;o++)for(let a=0;a<=10;a++){let l=a/10,c=o/4,u=(l-.5)*1.67,h=1-.07*c;s.push(u*h,1.53+c*.73,-2.438+c*.365-.035*(1-(l*2-1)**2)),e.push(l,c)}for(let o=0;o<4;o++)for(let a=0;a<10;a++){let l=o*11+a,c=l+1,u=l+10+1,h=u+1;t.push(l,u,c,c,u,h)}let r=new Be;return r.setAttribute("position",new Re(s,3)),r.setAttribute("uv",new Re(e,2)),r.setIndex(t),r.computeVertexNormals(),r}function t0(){let s=On(null,"Tyre geometry"),e=[new de(.224,-.113),new de(.306,-.115),new de(.345,-.08),new de(.357,-.045),new de(.357,.045),new de(.345,.08),new de(.306,.115),new de(.224,.113)],t=new Dn(e,24);s.add(t,0,0,0,1,1,1,2172715),t.dispose();for(let n of[-1,1]){let i=new xt(.308,.009,3,18);s.add(i,0,n*.113,0,1,1,1,1119769,Math.PI/2),i.dispose()}for(let n=0;n<18;n++)for(let i of[-1,1]){let r=n*Math.PI*2/18,o=.346;s.box(Math.sin(r)*o,i*.042,Math.cos(r)*o,.04,.08,.025,1514528,0,r,i*.22)}return s.finish().geometry}function n0(){let s=On(null,"Wheel hub geometry"),e=new ze(.225,.225,.218,20);s.add(e,0,0,0,1,1,1,9016991),e.dispose();for(let t of[-1,1]){let n=new xt(.207,.011,3,18);s.add(n,0,t*.113,0,1,1,1,13357782,Math.PI/2),n.dispose();let i=new ze(.069,.069,.016,12);s.add(i,0,t*.115,0,1,1,1,11253179),i.dispose();for(let r=0;r<5;r++){let o=r*Math.PI*2/5;s.box(Math.sin(o)*.133,t*.114,Math.cos(o)*.133,.052,.01,.089,2502712,0,o);let a=new Ze(.011,6,4);s.add(a,Math.sin(o)*.047,t*.128,Math.cos(o)*.047,1,.4,1,13686490),a.dispose()}}return s.finish().geometry}function yu(s){let e=new ge;e.name="TF Jones delivery van",e.scale.x=.9,s.add(e);let t=On(e,"Delivery van body, trim and fittings");t.rounded(0,.49,-.07,1.77,.19,4.82,tt,.05),t.rounded(0,.63,-1.54,1.87,.12,1.74,tt,.028),t.rounded(0,2.325,-1.385,1.87,.135,1.46,Yt,.06),t.rounded(0,2.435,.55,1.9,.1,3.37,Yt,.047),t.box(0,.59,.55,1.88,.12,3.37,tl),t.box(0,1.48,-1.1,1.82,1.86,.075,tt),t.box(0,1.52,-.85,1.86,1.53,.072,Yt);let n=[[-2.6,.75],[-2.62,1.13],[-2.4,1.47],[-2.15,1.39],[-2.15,.75]],i=new ot;for(let g=0;g<n.length;g++){let[Y,D]=n[g];i[g?"lineTo":"moveTo"](Y,D)}i.closePath();let r=new Bt(i,{depth:1.74,bevelEnabled:!0,bevelSize:.045,bevelThickness:.045,bevelSegments:1,steps:1});r.rotateY(-Math.PI/2),t.add(r,.87,0,0,1,1,1,Yt),r.dispose();for(let g of[-1,1]){let Y=mu(-1.08,2.235,.5,2.42,1.52,g);t.add(Y,g*.915,0,0,1,1,1,Yt),Y.dispose();let D=mu(-2.41,-.87,.5,.9,-1.61,g);t.add(D,g*.915,0,0,1,1,1,Yt),D.dispose();let A=uo([[-2.405,.9],[-2.405,1.48],[-2.076,2.28],[-1.96,2.303],[-2.107,1.695],[-2.12,.9]],[],g,.03,.01);t.add(A,g*.919,0,0,1,1,1,Yt),A.dispose(),t.between(new x(g*.868,1.46,-2.44),new x(g*.868,2.28,-2.08),.051,Yt),t.rounded(g*.94,1.69,-.895,.069,1.18,.08,Yt,.025),t.rounded(g*1.005,1.79,-2.035,.15,.205,.19,tt,.046),t.between(new x(g*.948,1.7,-1.96),new x(g*1.006,1.765,-2.035),.024,tt),t.rounded(g*.985,.855,.57,.036,.083,3.22,tt,.015),t.box(g*.973,1.61,-.345,.009,1.19,.014,co),t.box(g*.973,1.02,.43,.009,.014,1.54,co),t.box(g*.973,2.2,.43,.009,.014,1.54,co),t.box(g*.973,1.61,1.205,.009,1.19,.014,co),t.rounded(g*.989,1.31,.7,.025,.036,.23,tt,.012),t.box(g*.982,2.18,.65,.014,.032,2.9,tt),gu(t,g,-1.61),gu(t,g,1.52),t.rounded(g*1.005,.49,-1.43,.13,.1,.63,tt,.025),t.rounded(g*.44,1.11,-1.43,.4,.16,.46,tt,.055),t.rounded(g*.44,1.47,-1.13,.39,.62,.1,tt,.039),t.rounded(g*.44,1.88,-1.12,.23,.19,.11,tt,.03)}t.rounded(0,1.26,-2.08,1.78,.24,.29,tt,.06),t.rounded(0,.63,-2.575,1.88,.25,.31,tt,.066),t.rounded(0,.995,-2.634,1,.277,.032,tt,.018);for(let g=0;g<5;g++)t.box(0,.892+g*.047,-2.655,.92,.017,.018,5661550);t.box(0,.645,-2.737,.4,.105,.009,Yt);for(let g of[-1,1])t.rounded(g*.681,1.235,-2.578,.437,.252,.067,10990523,.028,0,g*.1);t.rounded(0,.63,2.355,1.9,.15,.25,tt,.049),t.box(0,.58,2.465,.91,.075,.09,tl),t.box(0,.602,2.517,.4,.105,.006,16764247),t.rounded(0,2.32,2.238,1.85,.115,.045,Yt,.014);for(let g of[-1,1])t.rounded(g*.872,1.445,2.244,.135,.61,.08,tt,.019);let o=t.finish(),a=[o],l=On(e,"Van glazed cab",fu),c=e0();l.add(c,0,0,0,1,1,1,16777215),c.dispose();for(let g of[-1,1])l.box(g*1.006,1.79,-1.936,.118,.145,.006,16777215);l.finish();let u=On(e,"Windscreen wipers and trims");for(let g of[-1,1])u.box(g*.4,1.563,-2.455,.53,.022,.02,tt,0,g*.12),u.box(g*.12,1.536,-2.458,.016,.075,.015,tt);u.finish(),nl(e,-.983,1.64,.55,2.65,-Math.PI/2),nl(e,.983,1.64,.55,2.65,Math.PI/2);let h=[];for(let g of[-1,1]){let Y=new ge;Y.name=g===1?"Driver cab door":"Passenger cab door",Y.position.set(g*.953,1.33,-2.12),e.add(Y);let D=[[0,-.5],[1.18,-.5],[1.18,.91],[1.12,.973],[.16,.973],[.013,.365]],A=[[.07,.366],[.2,.902],[1.065,.902],[1.08,.366]],U=On(Y,"White cab door and window frame"),O=uo(D,[A],g,.033,.012);U.add(O,-g*.017,0,0,1,1,1,Yt),O.dispose(),U.box(g*.022,.348,.564,.048,.043,1.09,tt),U.rounded(g*.047,.02,.86,.025,.038,.22,tt,.009),U.box(g*.039,-.436,.578,.012,.045,1.1,tt),a.push(U.finish());let W=uo(A,[],g,.008,0),T=On(Y,"Cab door glass",fu);T.add(W,g*.011,0,0,1,1,1,16777215),W.dispose(),T.finish(),h.push({pivot:Y,side:g})}let d=[];for(let g of[-1,1]){let Y=new ge;Y.name="Rear cargo door",Y.position.set(g*.94,1.5,2.247),e.add(Y);let D=On(Y,"Hinged delivery cargo door");D.rounded(-g*.47,0,0,.928,1.84,.053,Yt,.023),D.box(-g*.47,-.68,.032,.885,.105,.018,tt),D.rounded(-g*.073,.04,.052,.057,.27,.035,tt,.012);for(let A of[-.66,.65])D.box(0,A,.025,.052,.18,.07,tl);a.push(D.finish()),nl(Y,-g*.47,.37,.048,.78),d.push({pivot:Y,side:g})}let f=new _t(t0(),new be({vertexColors:!0,roughness:.92}),4),p=new _t(n0(),Qm,4);f.name="Delivery tyres",p.name="Delivery wheel hubs",e.add(f,p);let m=[];for(let g of[-1.61,1.52])for(let Y of[-1,1]){let D=new Ye;D.position.set(Y*.97,.36,g),e.add(D),m.push(D)}let M=On(e,"Van headlights and tail lamps",new Se({vertexColors:!0}));for(let g of[-1,1])M.rounded(g*.68,1.255,-2.621,.355,.172,.012,15068656,.006,0,g*.1),M.box(g*.68,1.167,-2.629,.337,.02,.012,16774870,0,g*.1),M.rounded(g*.872,1.4,2.29,.093,.47,.01,13512755,.004),M.box(g*.872,1.238,2.3,.09,.067,.013,14935253);M.finish();let _=new _t(xu,new Se({color:16777215}),4),w=new Ye,b=[[-.849,1.254,-2.604],[.849,1.254,-2.604],[-.872,1.59,2.3],[.872,1.59,2.3]];for(let g=0;g<4;g++)w.position.set(...b[g]),w.scale.set(.053,.123,.014),w.updateMatrix(),_.setMatrixAt(g,w.matrix);_.name="Delivery indicators",e.add(_);let y=Qt(3.5,6.2);y.position.y=.009,e.add(y);let v=new $e,N=new Me,S=new Me().setFromAxisAngle(new x(0,0,1),Math.PI/2),E=new Ue(16758062),C=new Ue(8411438),L=0;function R(g,Y,D,A,U=0){L-=g/.36,N.setFromAxisAngle($m,L).multiply(S);for(let O=0;O<4;O++)v.compose(m[O].position,N,Zm),f.setMatrixAt(O,v),p.setMatrixAt(O,v),_.setColorAt(O,D&&Math.sin(A*9)>0?E:C);f.instanceMatrix.needsUpdate=p.instanceMatrix.needsUpdate=!0,_.instanceColor.needsUpdate=!0;for(let O of d)O.pivot.rotation.y=O.side*Y*1.48;for(let O of h)O.pivot.rotation.y=O.side*(O.side===1?U*1.35:0)}R(0,0,!1,0,0),e.updateMatrixWorld(!0);let P=new We,k=new We,z=new $e().copy(e.matrixWorld).invert(),B=new $e,F=0,Z=0;return e.traverse(g=>{if(g.isMesh&&(F++,Z+=(g.geometry.index?.count||g.geometry.attributes.position.count)/3*(g.isInstancedMesh?g.count:1),g.name!=="Soft contact shadow"))if(g.geometry.computeBoundingBox(),g.isInstancedMesh)for(let Y=0;Y<g.count;Y++)g.getMatrixAt(Y,B),B.premultiply(g.matrixWorld).premultiply(z),P.union(k.copy(g.geometry.boundingBox).applyMatrix4(B));else P.union(k.copy(g.geometry.boundingBox).applyMatrix4(B.multiplyMatrices(z,g.matrixWorld)))}),e.userData.van={drawCalls:F,triangles:Z,localBounds:{min:P.min.toArray(),max:P.max.toArray()},wheelRadius:.36,whitePanelVan:!0},{root:e,body:o,whitePanels:a,doors:d,cabDoors:h,tires:f,rims:p,indicators:_,wheelNodes:m,update:R,localBounds:P,stats:e.userData.van,get wheelAngle(){return L},get logoReady(){return!!hi?.ready}}}var zn=1653069,il=1386034,_u=14016322,vu=14016730,wi=13607035,sl=2435628,i0=3883589,rl=.82,Mu=.6,dn=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),ho=s=>(s=dn(s),s*s*(3-2*s)),fo=(s,e,t,n)=>s+(e-s)*(1-Math.exp(-t/n)),bu=s=>Math.atan2(Math.sin(s),Math.cos(s)),Su=new x(0,-1,0),s0=new x(0,1,0),r0=new x(1,0,0),o0=new x(0,0,1),ol=new _e(1,1,1),Tu=new Ze(1,8,6),wu=new xs(.5,.9,3,8).scale(1,1/1.9,1),Au=new ze(.5,.41,1,10,1);for(let s of[ol,Tu,wu,Au])s.computeBoundingBox();function a0(s){let e=new ge;e.name="Carried delivery parcel",s.add(e);let t=[],n=new Ye;for(let[r,o,a,l,c,u,h]of[[0,0,0,.36,.31,.29,11701334],[0,.159,0,.057,.011,.291,14862744],[0,0,-.15,.058,.31,.011,14862744],[.093,.065,-.158,.091,.056,.005,15791089]]){n.position.set(r,o,a),n.scale.set(l,c,u),n.updateMatrix();let d=ol.clone().applyMatrix4(n.matrix),f=new Ue(h),p=new Float32Array(d.attributes.position.count*3);for(let m=0;m<p.length;m+=3)p[m]=f.r,p[m+1]=f.g,p[m+2]=f.b;d.setAttribute("color",new ht(p,3)),t.push(d)}let i=new xe(yn(t),new be({vertexColors:!0,roughness:.88}));i.name="Carried delivery parcel cardboard and tape",e.add(i);for(let r of t)r.dispose();return e}function Eu(s){let e=new ge;e.name="TF Jones delivery courier",s.add(e);let t={},n=[],i={box:[],sphere:[],capsule:[],taper:[]},r={box:ol,sphere:Tu,capsule:wu,taper:Au};function o(I,X,G,Q,te){let j=new Ye;return j.name="Courier "+I,j.position.set(G,Q,te),X.add(j),t[I]=j,j}function a(I,X,G,Q,te,j,le,Te,pe,Ce,Ie=0,we=0,he=0){let ke=new Ye;ke.name=I,ke.position.set(Q,te,j),ke.rotation.set(Ie,we,he),ke.scale.set(le,Te,pe),G.add(ke);let Oe={name:I,kind:X,node:ke,geometry:r[X],color:Ce,batch:null,index:i[X].length,worldBox:new We};return i[X].push(Oe),n.push(Oe),Oe}let l=o("hips",e,0,.9,0),c=o("spine",e,0,1.03,0),u=o("head",c,0,.58,0);a("Work trousers waist","capsule",l,0,.025,0,.335,.23,.235,zn),a("Rounded work shirt","taper",c,0,.15,.005,.405,.48,.255,zn),a("Hi-vis vest body","taper",c,0,.175,-.018,.417,.415,.276,_u),a("Visible neck","capsule",c,0,.425,.003,.119,.135,.111,wi),a("Work shirt collar","capsule",c,0,.379,.001,.174,.067,.157,zn),a("Vest front opening","box",c,0,.18,-.162,.025,.395,.008,il);for(let I of[-1,1])a("Reflective shoulder "+I,"box",c,I*.123,.275,-.161,.036,.24,.009,vu),a("Vest front pocket "+I,"box",c,I*.125,.078,-.157,.085,.085,.012,11056438);for(let I of[-.163,.146])a("Reflective waist "+I,"box",c,0,.037,I,.37,.027,.008,vu);a("Face","sphere",u,0,.006,-.004,.115,.143,.108,wi),a("Jaw","sphere",u,0,-.073,-.027,.083,.058,.078,wi),a("Nose","sphere",u,0,.009,-.111,.023,.033,.031,12817265);for(let I of[-1,1])a("Ear "+I,"sphere",u,I*.111,-.002,.003,.019,.039,.027,wi),a("Eye white "+I,"sphere",u,I*.043,.04,-.104,.023,.014,.01,15001311),a("Eye pupil "+I,"sphere",u,I*.042,.039,-.112,.009,.01,.005,2699827),a("Eyebrow "+I,"capsule",u,I*.043,.064,-.105,.045,.01,.01,5784372,0,0,I*.06);a("Friendly smile","capsule",u,0,-.049,-.104,.047,.007,.009,8871497),a("Navy cap crown","sphere",u,0,.121,.004,.122,.063,.118,zn),a("Cap brim","capsule",u,0,.103,-.105,.215,.016,.134,zn),a("Cap badge","box",u,0,.136,-.11,.047,.024,.007,_u);let h=[],d=[],f={},p={};for(let I of[-1,1]){let X=I<0?"left":"right",G=o("thigh"+I,l,I*.1,-.04,0),Q=o("knee"+I,G,0,-.43,0),te=o("ankle"+I,Q,0,-.415,0);a("Thigh "+X,"capsule",G,0,-.215,0,.146,.455,.165,zn),a("Shin "+X,"capsule",Q,0,-.203,0,.121,.423,.145,zn),a("Knee patch "+X,"capsule",Q,0,-.025,-.068,.11,.108,.027,il);let j=a("Boot sole "+X,"box",te,0,-.063,-.045,.158,.024,.285,i0),le=a("Rounded safety boot "+X,"capsule",te,0,-.023,-.04,.152,.1,.27,sl,Math.PI/2);le.node.rotation.set(0,0,0),le.node.scale.set(.154,.105,.269);let Te=a("Boot toe "+X,"sphere",te,0,-.018,-.151,.076,.048,.064,sl),pe=a("Boot heel "+X,"box",te,0,-.038,.052,.14,.069,.071,sl),Ce=o("sole"+I,te,0,-.075,-.045),Ie={side:I,name:X,bone:te,hip:G,knee:Q,sole:Ce,part:j,parts:[j,le,Te,pe],phase:0,support:0,contact:!1,stanceId:0,world:new x,contactWorld:new x,ankleWorld:new x,plantWorld:new x,swingStart:new x,swingPhase:0,mode:"new",yaw:0,pitch:0,settle:0,swivelling:!1};h.push(Ie),f[X]=Ie.parts;let we=o("shoulder"+I,c,I*.222,.34,0),he=o("elbow"+I,we,0,-.3,0),ke=o("hand"+I,he,0,-.29,0);a("Upper sleeve "+X,"capsule",we,0,-.147,0,.132,.315,.143,zn),a("Lower sleeve "+X,"capsule",he,0,-.128,0,.107,.269,.123,zn),a("Sleeve cuff "+X,"capsule",he,0,-.269,0,.107,.033,.118,il);let Oe=a("Palm "+X,"sphere",ke,0,0,0,.04,.057,.03,wi),ct=[];for(let Ut=0;Ut<4;Ut++)ct.push(a("Finger "+X+" "+Ut,"capsule",ke,(Ut-1.5)*.015,-.056,-.006,.015,.046-Math.abs(Ut-1.5)*.005,.019,wi));ct.push(a("Thumb "+X,"capsule",ke,-I*.039,-.021,-.014,.021,.044,.026,wi,0,0,-I*.35));let Xe={side:I,name:X,bone:ke,shoulder:we,elbow:he,palm:Oe.node,part:Oe,parts:[Oe,...ct],world:new x,targetWorld:new x};d.push(Xe),p[X]=Xe.parts}let m=new be({color:16777215,roughness:.83,metalness:0}),M=[];for(let I of Object.keys(i)){let X=i[I];if(!X.length)continue;let G=new _t(r[I],m,X.length);G.name=I==="sphere"?"Courier face and hands":I==="capsule"?"Courier rounded clothing and limbs":"Courier "+I+" details",G.castShadow=G.receiveShadow=!1,G.frustumCulled=!1;for(let Q of X)Q.batch=G,G.setColorAt(Q.index,new Ue(Q.color));e.add(G),M.push(G)}let _=a0(e);_.position.set(0,1.14,-.35),_.visible=!1;let w=Qt(.52,.46);w.position.y=.008,e.add(w);let b=new We,y=new We,v=new $e,N=new $e,S=new x,E=new x,C=new Me,L=new Me,R=new Me,P=new Me,k=new x,z=new x,B=new x,F=new x,Z=new x,g=new x,Y=new x,D=new x,A=new x(0,-.075,-.045),U=null,O=0,W=0,T=0,V=0,$=0,K=1,J={distance:0,phase:0,speed:0,seated:1,carrying:!1,walking:!1,dt:0,stride:rl,direction:1};function H(){return e.getWorldQuaternion(C),Math.atan2(2*(C.w*C.y+C.x*C.z),1-2*(C.y*C.y+C.z*C.z))}function se(I,X){return X>=16.275&&X<=16.525?.123:X>16.525&&X<23.875?-.02:X<-8?.002:0}function ee(I){return se(I.x,I.z)+.075}function ae(I,X,G,Q){return Q.set(I,X,G).applyMatrix4(e.matrixWorld)}function q(I,X){I.parent.getWorldQuaternion(L),I.quaternion.copy(L.invert()).multiply(X),I.updateMatrixWorld(!0)}function oe(I,X,G,Q,te,j,le){I.getWorldPosition(k),B.subVectors(j,k);let Te=B.length();if(Te<1e-8)return;B.divideScalar(Te),Te=dn(Te,.015,Q+te-5e-4),F.copy(le).addScaledVector(B,-le.dot(B)),F.lengthSq()<1e-5&&F.set(1,0,0).addScaledVector(B,-B.x),F.normalize();let pe=dn((Te*Te+Q*Q-te*te)/(2*Te*Q),-1,1),Ce=Math.sqrt(Math.max(0,1-pe*pe));Z.copy(k).addScaledVector(B,Q*pe).addScaledVector(F,Q*Ce),z.subVectors(Z,k).normalize(),R.setFromUnitVectors(Su,z),q(I,R),X.getWorldPosition(k),z.subVectors(j,k).normalize(),R.setFromUnitVectors(Su,z),q(X,R)}function ne(){e.updateMatrixWorld(!0),v.copy(e.matrixWorld).invert(),b.makeEmpty();for(let I of n)N.multiplyMatrices(v,I.node.matrixWorld),I.batch.setMatrixAt(I.index,N),I.worldBox.copy(I.geometry.boundingBox).applyMatrix4(I.node.matrixWorld),b.union(I.worldBox);for(let I of M)I.instanceMatrix.needsUpdate=!0,I.computeBoundingBox(),I.computeBoundingSphere();_.visible&&b.union(y.setFromObject(_));for(let I of h)I.sole.getWorldPosition(I.world),I.contactWorld.copy(I.world);for(let I of d)I.palm.getWorldPosition(I.world);return b}function ue(I,X){I.swingStart.copy(I.ankleWorld),I.swingPhase=X,I.mode="swing",I.contact=!1}function re(I,X,G,Q,te){let j=(O+(I.side>0?.5:0))%1;if(I.phase=j,G>.1){ae(I.side*.1,.155,-.48,I.ankleWorld),I.yaw=te,I.pitch=0,I.support=0,I.contact=!1,I.mode="seated";return}if((I.mode==="new"||I.mode==="seated")&&(ae(I.side*.1,.075,-.045,I.ankleWorld),I.ankleWorld.y=ee(I.ankleWorld),I.plantWorld.copy(I.ankleWorld),I.yaw=te,I.mode="stance",I.stanceId++),X)if(j<Mu){I.mode==="swing"||I.mode==="settling"?(I.plantWorld.copy(I.ankleWorld),I.plantWorld.y=ee(I.plantWorld),I.mode="stance",I.stanceId++,I.yaw=te):I.mode==="stopped"&&(I.mode="stance",I.stanceId++),I.ankleWorld.copy(I.plantWorld);let le=j/Mu;I.pitch=le<.12?.09*K*(1-le/.12):le>.87?-.17*K*ho((le-.87)/.13):0,I.contact=le>=.12&&le<=.87,I.support=I.contact?1:le<.12?.45+.55*le/.12:1-.55*(le-.87)/.13}else{I.mode!=="swing"&&ue(I,j);let le=dn((j-I.swingPhase)/(1-I.swingPhase));ae(I.side*.1,.075,-.205*K,g),g.y=ee(g),I.ankleWorld.lerpVectors(I.swingStart,g,ho(le)),I.ankleWorld.y+=Math.sin(Math.PI*le)*.1,I.yaw+=bu(te-I.yaw)*(1-Math.exp(-Q*12)),I.pitch=-.12*K*Math.sin(Math.PI*le),I.contact=!1,I.support=0}else{I.mode==="swing"&&(I.swingStart.copy(I.ankleWorld),I.plantWorld.copy(I.ankleWorld),I.plantWorld.y=ee(I.plantWorld),I.settle=0,I.mode="settling",I.stanceId++),I.mode==="settling"?(I.settle=dn(I.settle+Q/.22),I.ankleWorld.lerpVectors(I.swingStart,I.plantWorld,ho(I.settle)),I.support=I.settle,I.contact=!1,I.settle===1&&(I.mode="stopped",I.stanceId++,I.contact=!0)):(I.mode!=="stopped"&&(I.mode="stopped",I.plantWorld.copy(I.ankleWorld),I.stanceId++),I.ankleWorld.copy(I.plantWorld),I.support=1,I.contact=!0);let le=bu(te-I.yaw);Math.abs(le)>.015?(I.swivelling||(I.swivelling=!0,I.stanceId++),I.yaw+=dn(le,-Q*1.7,Q*1.7),I.contact=!1,I.support=.7):(I.yaw=te,I.swivelling&&(I.swivelling=!1,I.stanceId++)),I.pitch=fo(I.pitch,0,Q,.08)}if(I.pitch!==0){let le=I.pitch>0?.0975:-.1875;I.ankleWorld.y=Math.max(I.ankleWorld.y,ee(I.ankleWorld)+Math.abs(Math.sin(I.pitch)*le))}G>0&&(ae(I.side*.1,.155,-.48,g),I.ankleWorld.lerp(g,ho(G/.1)),I.contact=!1,I.support=0)}function ye(I){if(J.seated>.1)return;let X=1/0,G=!1;for(let te of I.parts)te.worldBox.copy(te.geometry.boundingBox).applyMatrix4(te.node.matrixWorld),X=Math.min(X,te.worldBox.min.y),te.worldBox.max.z>16.275&&te.worldBox.min.z<16.525&&(G=!0);let Q=G?.123:se(I.ankleWorld.x,I.ankleWorld.z);if(X<Q-.001){let te=Q-X+.001;return I.bone.getWorldPosition(D),I.ankleWorld.y=Math.max(I.ankleWorld.y,D.y+te),(I.mode==="stance"||I.mode==="stopped")&&(I.plantWorld.y=I.ankleWorld.y),!0}return!1}let me={root:e,held:_,bones:t,obstacle:b,parts:n,batches:M,feet:h,hands:d,footParts:f,handParts:p,motion:J,updateWorldBounds:ne,update(I,X,G,Q,te=0,j=.35,le=.987){I=Number.isFinite(I)?Math.max(0,I):0,Q=Number.isFinite(Q)?Q:U??0;let Te=U===null,pe=Te?0:dn(Q-U,0,.1);U=Q,te=dn(te),G=dn(G),j=Number.isFinite(j)?dn(j,.2,.86):.35;let Ce=I>1e-6&&te<.95;W+=I,Ce&&(O=(O+I/rl)%1),T=fo(T,pe?I/pe:0,pe,.11),V=fo(V,Ce?1:0,pe,.12);let Ie=dn((j-.35)/.4),we=Math.max(X?1:0,Ie,G);$=Te?we:fo($,we,pe,.095);let he=X?1:Math.max($,Ie);Object.assign(J,{distance:W,phase:O,speed:T,seated:te,carrying:!!X,walking:Ce,dt:pe}),e.updateMatrixWorld(!0),e.getWorldPosition(S);let ke=H();if(!Te&&Ce){B.subVectors(S,E),F.set(0,0,-1).applyQuaternion(C);let He=B.dot(F);Math.abs(He)>I*.1&&(K=Math.sign(He))}J.direction=K;for(let He of h)re(He,Ce,te,pe,ke);let Oe=O*Math.PI*2,Xe=.9+-.01*Math.sin(Oe*2)**2*V;if(te<.1){for(let He of h)if(He.mode==="stance"||He.mode==="stopped"){let Et=He.ankleWorld.x-S.x,Ji=He.ankleWorld.z-S.z,Gs=Math.sqrt(Math.max(.2,.837**2-Et*Et-Ji*Ji));Xe=Math.min(Xe,He.ankleWorld.y-S.y+Gs+.04)}}Xe=qe.lerp(Xe,.52,te),l.position.set(Math.sin(Oe)*.013*V*(1-te),Xe,0),l.rotation.set(0,Math.sin(Oe)*.027*V*(1-te),Math.sin(Oe)*.017*V*(1-te)),c.position.set(0,1.03+(Xe-.9)+Math.sin(Q*1.75)*.0028*(1-te),-Ie*.1-G*.02),c.rotation.set(-Ie*.3-G*.15,-Math.sin(Oe)*.032*V*(1-te),-Math.sin(Oe)*.012*V*(1-te)),u.rotation.set(Math.sin(Q*.51)*.018,Math.sin(Q*.63)*.045,Math.sin(Q*.43)*.012),e.updateMatrixWorld(!0);for(let He of h){Ee(He);for(let Et=0;Et<3&&ye(He);Et++)Ee(He)}let Ut=1.14+(le-1.14)*G;_.position.set(0,Ut,-j),_.visible=!!X;for(let He of d){He.shoulder.getWorldPosition(k);let Et=Math.sin(Oe+(He.side>0?Math.PI:0))*.23*V*(1-te);ae(He.side*.245,.86+(Xe-.9),Math.sin(Et)*.48,Y),te>.1&&ae(He.side*.19,1.08+(Xe-.9),-.48,Y),ae(He.side*.213,Ut,-j,g),g.lerp(Y,1-he),He.targetWorld.copy(g),F.set(He.side,0,.24).applyQuaternion(C),oe(He.shoulder,He.elbow,He.bone,.3,.29,g,F),R.copy(C).multiply(L.setFromAxisAngle(o0,-He.side*.12)),q(He.bone,R)}ne(),E.copy(S)}};function Ee(I){F.set(0,0,-1).applyQuaternion(C),oe(I.hip,I.knee,I.bone,.43,.415,I.ankleWorld,F),P.setFromAxisAngle(s0,I.yaw).multiply(R.setFromAxisAngle(r0,I.pitch)),q(I.bone,P),e.updateMatrixWorld(!0)}return e.userData.courier={height:1.81,stride:rl,worldPlantedFeet:!0},me}var l0=15791089,c0=2107441,al=9016987,u0=.002,nn=-.019,Vn=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),yt=s=>s*s*(3-2*s),h0=new _e(1,1,1),d0=new Ze(1,10,6),f0=new be({vertexColors:!0,roughness:.72,metalness:.04});function p0(s,e){let t=new Float32Array(s.attributes.position.count*3),n=new Ue(e);for(let i=0;i<t.length;i+=3)t[i]=n.r,t[i+1]=n.g,t[i+2]=n.b;return s.setAttribute("color",new ht(t,3)),s}function cl(s,e,t=f0){let n=[],i=new Ye;return{add(r,o,a,l,c,u,h,d,f=0,p=0,m=0){i.position.set(o,a,l),i.rotation.set(f,p,m),i.scale.set(c,u,h),i.updateMatrix(),n.push(p0(r.clone().applyMatrix4(i.matrix),d))},box(r,o,a,l,c,u,h,d=0,f=0,p=0){this.add(h0,r,o,a,l,c,u,h,d,f,p)},finish(){let r=yn(n);for(let a of n)a.dispose();let o=new xe(r,t);return o.name=e,o.castShadow=o.receiveShadow=!1,s.add(o),o}}}function Cu(s,e){let t=new ge;t.name=e,s.add(t);let n=cl(t,e+" cardboard and tape");return n.box(0,0,0,.36,.31,.29,11701334),n.box(0,.159,0,.057,.011,.291,14862744),n.box(0,0,-.15,.058,.31,.011,14862744),n.box(.093,.065,-.158,.091,.056,.005,l0),n.finish(),t}var po=s=>(s=Vn(s),s*s*s*(6*s*s-15*s+10));function $i(s){return s>39?20.2+1.4*po((s-39)/10)-1.2*po((s-73)/10):s>-4?20.2:s>-14?18.3+1.9*po((s+14)/10):s>-21?18.3:s>-33?18.3+1.9*po((-21-s)/12):20.2}function Ru(s){return Math.atan2(1,($i(s+.002)-$i(s-.002))/.004)}function m0(s,e){return new x(s,nn,e)}function g0(){let s=new Hi,e=(t,n)=>m0(t,n);return s.add(new In(e(-110,20.2),e(-120,20.2),e(-120,34),e(-120,45))),s.add(new gn(e(-120,45),e(-120,73))),s.add(new In(e(-120,73),e(-120,89),e(-115,89),e(-104,89))),s.add(new gn(e(-104,89),e(104,89))),s.add(new In(e(104,89),e(115,89),e(120,89),e(120,73))),s.add(new gn(e(120,73),e(120,45))),s.add(new In(e(120,45),e(120,34),e(120,20.4),e(110,20.4))),s}var _n={x:-14,y:nn,z:18.3,yaw:Math.PI/2},kn={x:-10.6,y:.83,z:-12.9},vn={x:-10.45,y:.988,z:-12.9},nt=(s,e,t=u0)=>new x(s,t,e),x0=nt(-15.43,17.904,nn+.61),Ai=[x0,nt(-15.25,17.1,nn+.62),nt(-15.25,16.94,nn+.25),nt(-15.25,16.94,.122),nt(-15.25,16.9,.122),nt(-15.25,15.75,.122),nt(-15.25,15.7)],ul=[Ai.at(-1),nt(-10.2,15.7),nt(-10.2,15.75,.122),nt(-10.2,16.96,.122),nt(-10.2,17.12,nn),nt(-10.2,18.3,nn)],mo=nt(-11.17,18.3,nn),ks=ul.at(-1),Gn=[ks,nt(-10.2,17.12,nn),nt(-10.2,16.96,.122),nt(-10.2,15.75,.122),nt(-10.2,15.7),nt(-10,15.4),nt(-10,7),nt(-10,0),nt(-8.5,-2),nt(-8.5,-9.5),nt(-9.5,-12.8),nt(-9.75,-12.8)],Pu=[...Gn.slice(4).reverse(),Ai.at(-1)],Vs=hu,y0=Vs(Ai),Iu=Vs(ul),Lu=Vs(Gn),Du=Vs(Pu),_0=Vs([...Ai].reverse()),tn=[["arriving",24],["parked",1],["cab opening",1.2],["driver exiting",3.7],["cab closing",1.1],["walking to rear",Iu.length/1.05],["cargo opening",1.6],["taking parcel",4.1],["cargo closing",1.3],["delivering",Lu.length/1.05],["dropping",2.1],["returning",Du.length/1.05],["cab reopening",1.2],["driver entering",3.7],["cab shutting",1.1],["departing",24],["estate loop",68],["waiting",92]],ll=s=>s&&[s.x,s.y,s.z].every(Number.isFinite);function Nu(s,e){let t=new ge;t.name="TF Jones road delivery to Unit 8",e.add(t);let n=yu(t),i=Eu(t),r=Cu(t,"Delivered Unit 8 parcel"),o=Cu(n.root,"Parcel in delivery van");r.visible=!1,r.position.set(vn.x,vn.y,vn.z),o.position.set(0,1.14,2.08),o.scale.x=1/.9;let a=cl(n.root,"Cargo supporting carton");a.box(0,.812,2.08,.28,.335,.33,11701334),a.finish();let l=new ge;l.name="Unit 8 stores delivery bench",l.position.set(kn.x,0,kn.z),t.add(l);let c=cl(l,"Stores parcel bench");c.box(0,.8,0,.7,.06,.6,al);for(let A of[-.29,.29])for(let U of[-.24,.24])c.box(A,.41,U,.037,.78,.037,al),c.add(d0,A,.033,U,.032,.032,.032,c0);c.box(0,.15,0,.64,.037,.54,al),c.finish();let u={min:{x:kn.x-.35,y:0,z:kn.z-.3},max:{x:kn.x+.35,y:kn.y,z:kn.z+.3}},h=s.colliders?.find(A=>["x","y","z"].every(U=>A.min?.[U]===u.min[U]&&A.max?.[U]===u.max[U]))||u;Array.isArray(s.colliders)&&!s.colliders.includes(h)&&s.colliders.push(h);let d=g0(),f=new x,p=new x,m=new x,M=new x,_=new x,w=new x,b=Math.hypot(vn.x-Gn.at(-1).x,vn.z-Gn.at(-1).z),y=Math.atan2(Gn.at(-1).x-vn.x,Gn.at(-1).z-vn.z);r.rotation.y=y;let v=0,N=0,S=0,E=0,C=0,L=!1,R=0,P=0,k=!1,z=!1,B={clock:0,phase:tn[0][0],cycles:0,deliveries:0,yielding:!1,doorOpen:0,cabOpen:0,carrying:!1,seated:1,drawCalls:0,triangles:0,get logoReady(){return n.logoReady}};function F(A,U,O,W=U){let T=K=>ll(K)&&Math.abs(K.y-A.y)<3.3,V=(K,J)=>T(K)&&Math.hypot(K.x-A.x,K.z-A.z)<J;if(V(O.eye,U)||V(_,U))return!0;let $=s.vrGames?.companion?.group;if($&&$.visible){let K=!0;for(let J=$;J;J=J.parent)J.visible||(K=!1);if(K&&V($.getWorldPosition(w),U))return!0}for(let K of s.staff||[]){let J=K.person?.group;if(J?.visible&&V(J.getWorldPosition(w),W))return!0}return!1}function Z(A){let U=A.eye;if(!ll(U))return!1;M.subVectors(r.position,U);let O=M.length();if(O>45)return!1;let W=A.forward;return ll(W)?M.normalize().dot(W)>.2:O<30}function g(A,U,O){if(A===0){let W=110-124*yt(U);return O.set(W,nn,$i(W)),Ru(W)}if(A===15){let W=-14-96*yt(U);return O.set(W,nn,$i(W)),Ru(W)}return A===16?(d.getPointAt(yt(U),O),d.getTangentAt(yt(U),M),Math.atan2(-M.x,-M.z)):A===17?(O.set(110,nn,20.4),Math.PI/2):(O.set(_n.x,_n.y,_n.z),_n.yaw)}function Y(A,U,O){let W=_n.yaw,T=0,V=0,$=z&&!k,K=0,J=.35;return A===0||A===1||A===2||A>=14?(n.root.updateMatrix(),O.set(.44,.61,-1.43).applyMatrix4(n.root.matrix),W=n.root.rotation.y,V=1,$=!1):A===3?(W=y0.sample(U,O),T=1,V=1-yt(Vn(U/.62))):A===4?(O.copy(Ai.at(-1)),W=-Math.PI/2):A===5?(W=Iu.sample(ao(U),O),T=1):A===6?O.copy(ks):A===7?(U<.3?(O.lerpVectors(ks,mo,yt(U/.3)),T=1):U>.74?(O.lerpVectors(mo,ks,yt((U-.74)/.26)),T=1):O.copy(mo),J=.35+.4*yt(Vn(U<.5?(U-.3)/.18:(.74-U)/.24))):A===8?(O.copy(ks),W=_n.yaw*(1-yt(U))):A===9?(W=Lu.sample(ao(U),O),T=1):A===10?(O.copy(Gn.at(-1)),W=y,K=yt(Vn((U-.12)/.65)),J=.35+(b-.35)*K,$=!0,U>.8&&(W=y+(-Math.PI/2-y)*yt((U-.8)/.2))):A===11?(W=Du.sample(ao(U),O),T=1,$=!1):A===12?(O.copy(Ai.at(-1)),W=Math.PI,$=!1):A===13&&(W=_0.sample(U,O),T=1,V=yt(Vn((U-.38)/.62)),W+=Math.atan2(Math.sin(_n.yaw-W),Math.cos(_n.yaw-W))*V,$=!1),{yaw:W,walking:T,seated:V,carry:$,drop:K,reach:J}}function D(A=0){p.copy(i.root.position);let U=Vn(N/tn[v][1]);n.root.rotation.y=g(v,U,n.root.position),R=v===6?yt(U):v===7?1:v===8?1-yt(U):0,P=v===2?yt(U):v===3?1:v===4?1-yt(U):v===12?yt(U):v===13?1:v===14?1-yt(U):0,i.root.visible=!0;let O=Y(v,U,i.root.position),W=Math.atan2(Math.sin(O.yaw-i.root.rotation.y),Math.cos(O.yaw-i.root.rotation.y));v<=2||v>=14?i.root.rotation.y=O.yaw:i.root.rotation.y+=A?Vn(W*(1-Math.exp(-A*8)),-A*3.2,A*3.2):W;let T=A&&O.walking&&!L?i.root.position.distanceTo(p):0;i.update(T,O.carry,O.drop,S,O.seated,O.reach,vn.y-Gn.at(-1).y),v===10&&k&&(i.held.visible=!1),B.phase=tn[v][0],B.clock=S,B.cycles=E,B.deliveries=C,B.yielding=L,B.doorOpen=R,B.cabOpen=P,B.carrying=i.held.visible,B.seated=O.seated}return D(),n.update(0,0,!1,0,0),t.traverse(A=>{A.isMesh&&(A.castShadow=A.receiveShadow=!1,B.drawCalls++,B.triangles+=(A.geometry.index?.count||A.geometry.attributes.position.count)/3*(A.isInstancedMesh?A.count:1))}),t.userData.delivery={park:{..._n},station:{...kn},drop:{...vn},gate:{x:-10,z:12},destination:"Unit 8 stores / workshop",noMovingColliders:!0},{root:t,van:n,courier:i,parcel:r,cargoParcel:o,stand:l,benchCollider:h,stats:B,route:{lane:$i,approach:$i,loop:d,walk:Gn.map(A=>A.clone()),cabExit:Ai.map(A=>A.clone()),toRear:ul.map(A=>A.clone()),return:Pu.map(A=>A.clone()),pickup:mo.clone(),phases:tn.map(A=>[...A]),park:{..._n},station:{...kn},drop:{...vn}},update(A,U={}){if(U.hidden||U.active===!1||U.mode&&U.mode!=="explore"||!Number.isFinite(A)||A<=0)return;let O=typeof s.stats=="function"?s.stats():null;_.set(O?.x??NaN,O?.y??NaN,O?.z??NaN),A=Math.min(A,.1),m.copy(n.root.position),L=!1;let W=v===0||v===15||v===16;if(W?(g(v,Vn((N+A)/tn[v][1]),f),L=F(n.root.position,5.5,U)||F(f,5.5,U)):v>=2&&v<=13&&(Y(v,Vn((N+A)/tn[v][1]),f),L=F(i.root.position,1.15,U,.95)||F(f,1.15,U,.95)),v===17&&r.visible&&!Z(U)&&(r.visible=!1),v===17&&r.visible&&N+A>=tn[v][1]&&(L=!0),S+=A,!L)for(N+=A,v===7&&!z&&N/tn[v][1]>=.5&&(z=!0,o.visible=!1),v===10&&!k&&N/tn[v][1]>=.8&&(k=!0,r.visible=!0,C++);N>=tn[v][1];)N-=tn[v][1],v++,v===tn.length&&(v=0,E++,k=!1,z=!1,o.visible=!0);D(A);let T=n.root.position.distanceTo(m);n.update(W&&!L?T:0,R,v>0&&v<15||L,S,P)}}}var bn=s=>document.querySelector(s),Mn=bn("#questEnter"),Hn=bn("#questStatus"),go=bn("#questPanel");bn("#questPreview").onclick=()=>{go.hidden=!0,bn("#questReturn").hidden=!1};bn("#questReturn").onclick=()=>{window.yardDebug?.pause(),go.hidden=!1};async function v0(s){let e=s.renderer,t=s.worldScene,n=s.worldCamera;s.exterior=au(s);let i=Qc(s);s.vrGames=i;let r=Nu(s,s.exterior.root),o=cu(s,t);s.life={staff:o,deliveries:r},bn("#enter").addEventListener("click",()=>s.exterior.enableAudio()),bn("#soundBtn").addEventListener("click",()=>s.exterior.enableAudio());let a=new x,l=new x,c=new x(0,1,0),u={eye:a,forward:l,active:!1,hidden:!1,mode:"explore"};e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let h=new ge;h.name="Quest player rig",t.add(h);let d=[e.xr.getController(0),e.xr.getController(1)],f=d.map((D,A)=>e.xr.getControllerGrip?.(A)||D);for(let D of f)d.includes(D)||h.add(D);let p=new Map;d.forEach(D=>{h.add(D),D.addEventListener("connected",U=>p.set(D,U.data)),D.addEventListener("disconnected",()=>p.delete(D));let A=new xe(new Ze(.018,8,6),new Se({color:16769946}));D.add(A)});let m=new It(new Be,new Pt({color:8645568}));m.frustumCulled=!1,m.visible=!1,t.add(m);let M=new xe(new Nn(.22,.3,32),new Se({color:8645568,side:2,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.visible=!1,t.add(M);let _=s.colliders.map(D=>new We(new x(D.min.x,D.min.y,D.min.z),new x(D.max.x,D.max.y,D.max.z))),w=o.actors.filter(D=>D.collider).map(D=>({source:D.collider,box:_[s.colliders.indexOf(D.collider)]})).filter(D=>D.box),b=new We,y=[..._,b],v=new Set([...w.map(D=>D.box),b]),N=0,S=new x,E=new Me,C=null,L=!1,R=!1,P=!1,k=null,z,B,F=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),Z=()=>{let D=s.stats(),A=Ya(S.x,S.z,N);h.position.set(D.x-A.x,D.y+(window.yardFloorOffset||0),D.z-A.z),h.rotation.y=N,n.position.set(0,0,0),n.quaternion.identity(),h.updateMatrixWorld(!0)};s.xrFace=D=>{let A=new x(0,0,-1).applyQuaternion(E);N=D-Math.atan2(-A.x,-A.z),C=null,Z()};function g(D){for(let{source:H,box:se}of w)se.min.copy(H.min),se.max.copy(H.max);let A=r.courier;if(A.root.visible&&A.obstacle?b.copy(A.obstacle):b.makeEmpty(),k=null,!D){m.visible=M.visible=!1;return}let U=D.getWorldPosition(new x),W=new x(0,0,-1).applyQuaternion(D.getWorldQuaternion(new Me)).multiplyScalar(6);W.y+=2;let T=[U.clone()],V=new rt,$=new x,K=U.clone(),J=null;for(let H=1;H<=32;H++){let se=H*.05,ee=U.clone().addScaledVector(W,se);ee.y-=4.9*se*se;let ae=ee.clone().sub(K),q=ae.length();V.set(K,ae.normalize());let oe=q,ne=null,ue=!1;for(let re of y){if(re.isEmpty()||re.containsPoint(K))continue;let ye=V.intersectBox(re,$);if(ye){let me=ye.distanceTo(K);me<oe&&(oe=me,ne=ye.clone(),ue=!v.has(re)&&Math.abs(ye.y-re.max.y)<.015)}}if(K.y>=0&&ee.y<=0){let re=K.clone().lerp(ee,K.y/(K.y-ee.y));re.distanceTo(K)<oe&&(ne=re,ue=!0)}if(ne){T.push(ne),J=ne;let re=!A.root.visible||Math.abs(ne.y-A.root.position.y)>2.3||Math.hypot(ne.x-A.root.position.x,ne.z-A.root.position.z)>.9;ue&&re&&!s.blocked(ne.x,ne.z,ne.y)&&Math.abs(s.groundAt(ne.x,ne.z,ne.y+.05)-ne.y)<.12&&(k=ne);break}T.push(ee),K=ee}m.geometry.dispose(),m.geometry=new Be().setFromPoints(T),m.visible=!0,m.material.color.set(k?8645568:16746618),M.visible=!!k,k&&M.position.copy(k).add(new x(0,.025,0))}let Y=window.questBridge={frame:null,sample(D){let A=e.xr.getSession(),U=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!U||A?.visibilityState==="hidden")return C=null,i.interrupt(),F();if(S.set(U.transform.position.x,U.transform.position.y,U.transform.position.z),E.copy(U.transform.orientation),C){let re=Ya(S.x-C.x,S.z-C.z,N);Math.hypot(re.x,re.z)<.8&&s.xrPhysical(re.x,re.z)}C=S.clone();let O,W;for(let re of A.inputSources)re.handedness==="left"&&(O=re),re.handedness==="right"&&(W=re);let[T,V]=Ps(O),[$]=Ps(W),K=Pc($,bn("#questTurning").value,D,L);!i.menuOpen&&!i.held&&!i.driving&&(N+=K.angle,K.angle&&i.interrupt()),L=K.latched;let J=!!O?.gamepad?.buttons[4]?.pressed;J&&!P&&!i.driving&&(i.interrupt(),s.resetPosition(),N=0,C=null,i.close()),P=J,Z();let H=d.find(re=>p.get(re)?.handedness==="right"),se=new x(0,0,-1).applyQuaternion(E),ee=se.clone().applyAxisAngle(new x(0,1,0),N),ae=i.tick({dt:D,eye:S.clone().applyMatrix4(h.matrixWorld),forward:ee,headOrientation:h.getWorldQuaternion(new Me).multiply(E),left:O,right:W,controller:H,rightGripController:f[d.findIndex(re=>p.get(re)?.handedness==="right")],leftController:f[d.findIndex(re=>p.get(re)?.handedness==="left")]}),q=!ae.blockTeleport&&!i.menuOpen&&(!!W?.gamepad?.buttons[1]?.pressed||!ae.consumeTrigger&&!!W?.gamepad?.buttons[0]?.pressed);q&&(i.interrupt(),g(H)),!q&&R&&(k&&!i.menuOpen&&!ae.blockTeleport&&s.xrTeleport(k.x,k.y,k.z),k=null,m.visible=M.visible=!1),R=q;let oe=N+Math.atan2(-se.x,-se.z);s.xrHeading(oe);let ne=F(),ue=Number(bn("#questSpeed").value)/2.9;return ne.fwd=-Yi(V)*ue,ne.strafe=Yi(T)*ue,(q||ae.blockMovement)&&(ne.fwd=ne.strafe=0),ne},beforeRender(D,A){e.xr.isPresenting?(Z(),a.copy(S).applyMatrix4(h.matrixWorld),l.set(0,0,-1).applyQuaternion(E).applyAxisAngle(c,N)):(n.getWorldPosition(a),n.getWorldDirection(l));let U=e.xr.isPresenting?e.xr.getSession():null;u.active=s.stats().playing&&!i.menuOpen,u.hidden=document.hidden||U?.visibilityState==="hidden",u.mode=i.mode,s.exterior.update(A,u),o.update(A,{...u,active:u.active&&!s.truck?.driving}),r.update(A,{...u,active:u.active&&!s.truck?.driving})}};if(e.xr.addEventListener("sessionstart",()=>{B=n.parent,z=e.shadowMap.enabled,e.shadowMap.enabled=!1,h.add(n),N=0,S.set(0,0,0),C=null,L=R=P=!1,s.xrBegin(),Z(),i.begin(),document.body.classList.add("questActive"),go.hidden=!0,Hn.textContent="VR is running. Use the Meta menu to exit.",Mn.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),h.remove(n),B&&B.add(n),e.shadowMap.enabled=z,m.visible=M.visible=!1,C=null,s.xrEnd(),document.body.classList.remove("questActive"),go.hidden=!1,Mn.disabled=!1,Mn.textContent="Enter VR again",Hn.textContent="You have left VR."}),Mn.onclick=async()=>{Mn.disabled=!0;let D;try{i.enableAudio(),s.exterior.enableAudio(),D=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),D.addEventListener("visibilitychange",()=>{C=null}),await e.xr.setSession(D)}catch(A){D&&await D.end().catch(()=>{}),Mn.disabled=!1,Hn.textContent="Could not enter VR: "+A.message}},!window.isSecureContext){Mn.textContent="HTTPS hosting needed",Hn.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){Mn.textContent="Open in your Quest browser",Hn.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let D=await navigator.xr.isSessionSupported("immersive-vr");Mn.disabled=!D,Mn.textContent=D?"Enter VR":"VR headset not detected",Hn.textContent=D?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(D){Hn.textContent="VR availability check failed: "+D.message}}var M0=0,Uu=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(Uu),v0(window.yardDebug).catch(s=>{Hn.textContent="VR setup failed: "+s.message,console.error(s)})):++M0>1200&&(clearInterval(Uu),Hn.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
