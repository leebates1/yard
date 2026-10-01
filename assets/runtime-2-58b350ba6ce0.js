(()=>{var oa=1;var aa=3,ls=0,la=1,it=2;var vr=1,Zr=2;var yr=100;var Mr=204,br=205;var Sr=0,Tr=1,wr=2,ui=3,Ar=4,Er=5,Cr=6,Rr=7,Jr=0,ca=1,ha=2;var Kr=1,Qr=2,jr=3,eo=4,to=5,no=6,io=7;var so=300,ua=301,ro=302;var da=306,di=1e3,ri=1001,Pr=1002;var fa=1006;var pa=1008;var oo=1009;var ma=1015;var ga=1023;var fi=2300,cs=2301,os=2302,Ir=2303,Lr=2400,Dr=2401,Ur=2402;var xa=0;var ao="",Ne="srgb",Nr="srgb-linear",Fr="linear",as="srgb";var Tn=7680;var Br=519;var Or=35044;var cn=2e3,pi=2001;function hl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ul(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}var Eo={},hs=null;function _a(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function qe(...r){r=_a(r);let e="THREE."+r.shift();if(hs)hs("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function We(...r){r=_a(r);let e="THREE."+r.shift();if(hs)hs("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Xn(...r){let e=r.join(" ");e in Eo||(Eo[e]=!0,qe(...r))}var dl={[Sr]:Tr,[wr]:Cr,[Ar]:Rr,[ui]:Er,[Tr]:Sr,[Cr]:wr,[Rr]:Ar,[Er]:ui},hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Co=1234567,ai=Math.PI/180,mi=180/Math.PI;function Ln(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(lt[r&255]+lt[r>>8&255]+lt[r>>16&255]+lt[r>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function Pe(r,e,t){return Math.max(e,Math.min(t,r))}function lo(r,e){return(r%e+e)%e}function fl(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function pl(r,e,t){return r!==e?(t-r)/(e-r):0}function li(r,e,t){return(1-t)*r+t*e}function ml(r,e,t,n){return li(r,e,1-Math.exp(-t*n))}function gl(r,e=1){return e-Math.abs(lo(r,e*2)-e)}function xl(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function _l(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vl(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yl(r,e){return r+Math.random()*(e-r)}function Ml(r){return r*(.5-Math.random())}function bl(r){r!==void 0&&(Co=r);let e=Co+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sl(r){return r*ai}function Tl(r){return r*mi}function wl(r){return(r&r-1)===0&&r!==0}function Al(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function El(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cl(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*h,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ht={DEG2RAD:ai,RAD2DEG:mi,generateUUID:Ln,clamp:Pe,euclideanModulo:lo,mapLinear:fl,inverseLerp:pl,lerp:li,damp:ml,pingpong:gl,smoothstep:xl,smootherstep:_l,randInt:vl,randFloat:yl,randFloatSpread:Ml,seededRandom:bl,degToRad:Sl,radToDeg:Tl,isPowerOfTwo:wl,ceilPowerOfTwo:Al,floorPowerOfTwo:El,setQuaternionFromProperEuler:Cl,normalize:dt,denormalize:Wn},fo=class fo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fo.prototype.isVector2=!0;var oe=fo,Ie=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],p=s[o+2],g=s[o+3];if(u!==g||l!==f||c!==d||h!==p){let y=l*f+c*d+h*p+u*g;y<0&&(f=-f,d=-d,p=-p,g=-g,y=-y);let v=1-a;if(y<.9995){let M=Math.acos(y),x=Math.sin(M);v=Math.sin(v*M)/x,a=Math.sin(a*M)/x,l=l*v+f*a,c=c*v+d*a,h=h*v+p*a,u=u*v+g*a}else{l=l*v+f*a,c=c*v+d*a,h=h*v+p*a,u=u*v+g*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},po=class po{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ro.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ys.copy(this).projectOnVector(e),this.sub(Ys)}reflect(e){return this.sub(Ys.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Pe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};po.prototype.isVector3=!0;var _=po,Ys=new _,Ro=new Ie,mo=class mo{constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],g=i[0],y=i[3],v=i[6],M=i[1],x=i[4],m=i[7],b=i[2],S=i[5],E=i[8];return s[0]=o*g+a*M+l*b,s[3]=o*y+a*x+l*S,s[6]=o*v+a*m+l*E,s[1]=c*g+h*M+u*b,s[4]=c*y+h*x+u*S,s[7]=c*v+h*m+u*E,s[2]=f*g+d*M+p*b,s[5]=f*y+d*x+p*S,s[8]=f*v+d*m+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Xn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($s.makeScale(e,t)),this}rotate(e){return Xn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($s.makeRotation(-e)),this}translate(e,t){return Xn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($s.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mo.prototype.isMatrix3=!0;var Ce=mo,$s=new Ce,Po=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Io=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rl(){let r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===as&&(i.r=Yt(i.r),i.g=Yt(i.g),i.b=Yt(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===as&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ao?Fr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Xn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Xn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Nr]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:Po,fromXYZ:Io,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:e,whitePoint:n,transfer:as,toXYZ:Po,fromXYZ:Io,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),r}var wt=Rl();function Yt(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Un,us=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Un===void 0&&(Un=zr("canvas")),Un.width=e.width,Un.height=e.height;let i=Un.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Un}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yt(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yt(t[n]/255)*255):t[n]=Yt(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pl=0,ds=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Zs(i[o].image)):s.push(Zs(i[o]))}else s=Zs(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Zs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?us.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var Il=0,Js=new _,wn=class r extends hn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=ri,i=ri,s=fa,o=pa,a=ga,l=oo,c=r.DEFAULT_ANISOTROPY,h=ao){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=Ln(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Js).x}get height(){return this.source.getSize(Js).y}get depth(){return this.source.getSize(Js).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==so)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case di:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case Pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case di:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case Pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=so;wn.DEFAULT_ANISOTROPY=1;var go=class go{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],g=l[2],y=l[6],v=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(p-y)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(p+y)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,m=(d+1)/2,b=(v+1)/2,S=(h+f)/4,E=(u+g)/4,A=(p+y)/4;return x>m&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=E/n):m>b?m<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(m),n=S/i,s=A/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=E/s,i=A/s),this.set(n,i,s,t),this}let M=Math.sqrt((y-p)*(y-p)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(y-p)/M,this.y=(u-g)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pe(this.x,e.x,t.x),this.y=Pe(this.y,e.y,t.y),this.z=Pe(this.z,e.z,t.z),this.w=Pe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pe(this.x,e,t),this.y=Pe(this.y,e,t),this.z=Pe(this.z,e,t),this.w=Pe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Pe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};go.prototype.isVector4=!0;var An=go;var Fs=class Fs{constructor(e,t,n,i,s,o,a,l,c,h,u,f,d,p,g,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,f,d,p,g,y)}set(e,t,n,i,s,o,a,l,c,h,u,f,d,p,g,y){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=f,v[3]=d,v[7]=p,v[11]=g,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fs().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Nn.setFromMatrixColumn(e,0).length(),s=1/Nn.setFromMatrixColumn(e,1).length(),o=1/Nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,g=c*u;t[0]=f+g*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,g=c*u;t[0]=f-g*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,g=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=g-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-g*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ll,e,Dl)}lookAt(e,t,n){let i=this.elements;return xt.subVectors(e,t),xt.lengthSq()===0&&(xt.z=1),xt.normalize(),tn.crossVectors(n,xt),tn.lengthSq()===0&&(Math.abs(n.z)===1?xt.x+=1e-4:xt.z+=1e-4,xt.normalize(),tn.crossVectors(n,xt)),tn.normalize(),Ui.crossVectors(xt,tn),i[0]=tn.x,i[4]=Ui.x,i[8]=xt.x,i[1]=tn.y,i[5]=Ui.y,i[9]=xt.y,i[2]=tn.z,i[6]=Ui.z,i[10]=xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],g=n[6],y=n[10],v=n[14],M=n[3],x=n[7],m=n[11],b=n[15],S=i[0],E=i[4],A=i[8],I=i[12],C=i[1],N=i[5],L=i[9],X=i[13],T=i[2],F=i[6],q=i[10],H=i[14],P=i[3],V=i[7],O=i[11],k=i[15];return s[0]=o*S+a*C+l*T+c*P,s[4]=o*E+a*N+l*F+c*V,s[8]=o*A+a*L+l*q+c*O,s[12]=o*I+a*X+l*H+c*k,s[1]=h*S+u*C+f*T+d*P,s[5]=h*E+u*N+f*F+d*V,s[9]=h*A+u*L+f*q+d*O,s[13]=h*I+u*X+f*H+d*k,s[2]=p*S+g*C+y*T+v*P,s[6]=p*E+g*N+y*F+v*V,s[10]=p*A+g*L+y*q+v*O,s[14]=p*I+g*X+y*H+v*k,s[3]=M*S+x*C+m*T+b*P,s[7]=M*E+x*N+m*F+b*V,s[11]=M*A+x*L+m*q+b*O,s[15]=M*I+x*X+m*H+b*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],g=e[7],y=e[11],v=e[15],M=l*d-c*f,x=a*d-c*u,m=a*f-l*u,b=o*d-c*h,S=o*f-l*h,E=o*u-a*h;return t*(g*M-y*x+v*m)-n*(p*M-y*b+v*S)+i*(p*x-g*b+v*E)-s*(p*m-g*S+y*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],g=e[13],y=e[14],v=e[15],M=t*a-n*o,x=t*l-i*o,m=t*c-s*o,b=n*l-i*a,S=n*c-s*a,E=i*c-s*l,A=h*g-u*p,I=h*y-f*p,C=h*v-d*p,N=u*y-f*g,L=u*v-d*g,X=f*v-d*y,T=M*X-x*L+m*N+b*C-S*I+E*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/T;return e[0]=(a*X-l*L+c*N)*F,e[1]=(i*L-n*X-s*N)*F,e[2]=(g*E-y*S+v*b)*F,e[3]=(f*S-u*E-d*b)*F,e[4]=(l*C-o*X-c*I)*F,e[5]=(t*X-i*C+s*I)*F,e[6]=(y*m-p*E-v*x)*F,e[7]=(h*E-f*m+d*x)*F,e[8]=(o*L-a*C+c*A)*F,e[9]=(n*C-t*L-s*A)*F,e[10]=(p*S-g*m+v*M)*F,e[11]=(u*m-h*S-d*M)*F,e[12]=(a*I-o*N-l*A)*F,e[13]=(t*N-n*I+i*A)*F,e[14]=(g*x-p*b-y*M)*F,e[15]=(h*b-u*x+f*M)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,g=o*h,y=o*u,v=a*u,M=l*c,x=l*h,m=l*u,b=n.x,S=n.y,E=n.z;return i[0]=(1-(g+v))*b,i[1]=(d+m)*b,i[2]=(p-x)*b,i[3]=0,i[4]=(d-m)*S,i[5]=(1-(f+v))*S,i[6]=(y+M)*S,i[7]=0,i[8]=(p+x)*E,i[9]=(y-M)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Nn.set(i[0],i[1],i[2]).length(),a=Nn.set(i[4],i[5],i[6]).length(),l=Nn.set(i[8],i[9],i[10]).length();s<0&&(o=-o),It.copy(this);let c=1/o,h=1/a,u=1/l;return It.elements[0]*=c,It.elements[1]*=c,It.elements[2]*=c,It.elements[4]*=h,It.elements[5]*=h,It.elements[6]*=h,It.elements[8]*=u,It.elements[9]*=u,It.elements[10]*=u,t.setFromRotationMatrix(It),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=cn,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(l)p=s/(o-s),g=o*s/(o-s);else if(a===cn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===pi)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=cn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,g;if(l)p=1/(o-s),g=o/(o-s);else if(a===cn)p=-2/(o-s),g=-(o+s)/(o-s);else if(a===pi)p=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Fs.prototype.isMatrix4=!0;var Je=Fs,Nn=new _,It=new Je,Ll=new _(0,0,0),Dl=new _(1,1,1),tn=new _,Ui=new _,xt=new _,Lo=new Je,Do=new Ie,En=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var gi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ul=0,Uo=new _,Fn=new Ie,Vt=new Je,Ni=new _,ei=new _,Nl=new _,Fl=new Ie,No=new _(1,0,0),Fo=new _(0,1,0),Bo=new _(0,0,1),Oo={type:"added"},Bl={type:"removed"},Bn={type:"childadded",child:null},Ks={type:"childremoved",child:null},vt=class r extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new _,t=new En,n=new Ie,i=new _(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ce}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.multiply(Fn),this}rotateOnWorldAxis(e,t){return Fn.setFromAxisAngle(e,t),this.quaternion.premultiply(Fn),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(Fo,e)}rotateZ(e){return this.rotateOnAxis(Bo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(Fo,e)}translateZ(e){return this.translateOnAxis(Bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ni.copy(e):Ni.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vt.lookAt(ei,Ni,this.up):Vt.lookAt(Ni,ei,this.up),this.quaternion.setFromRotationMatrix(Vt),i&&(Vt.extractRotation(i.matrixWorld),Fn.setFromRotationMatrix(Vt),this.quaternion.premultiply(Fn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oo),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bl),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oo),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,e,Nl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,Fl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};vt.DEFAULT_UP=new _(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var va={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Fi={h:0,s:0,l:0};function Qs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=wt.workingColorSpace){if(e=lo(e,1),t=Pe(t,0,1),n=Pe(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Qs(o,s,e+1/3),this.g=Qs(o,s,e),this.b=Qs(o,s,e-1/3)}return wt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){let n=va[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}copyLinearToSRGB(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return wt.workingToColorSpace(ct.copy(this),e),Math.round(Pe(ct.r*255,0,255))*65536+Math.round(Pe(ct.g*255,0,255))*256+Math.round(Pe(ct.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(ct.copy(this),t);let n=ct.r,i=ct.g,s=ct.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(ct.copy(this),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=Ne){wt.workingToColorSpace(ct.copy(this),e);let t=ct.r,n=ct.g,i=ct.b;return e!==Ne?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(nn),this.setHSL(nn.h+e,nn.s+t,nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(Fi);let n=li(nn.h,Fi.h,t),i=li(nn.s,Fi.s,t),s=li(nn.l,Fi.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ct=new ze;ze.NAMES=va;var Lt=new _,Gt=new _,js=new _,Ht=new _,On=new _,zn=new _,zo=new _,er=new _,tr=new _,nr=new _,ir=new An,sr=new An,rr=new An,ln=class r{constructor(e=new _,t=new _,n=new _){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Lt.subVectors(e,t),i.cross(Lt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Lt.subVectors(i,t),Gt.subVectors(n,t),js.subVectors(e,t);let o=Lt.dot(Lt),a=Lt.dot(Gt),l=Lt.dot(js),c=Gt.dot(Gt),h=Gt.dot(js),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ht)===null?!1:Ht.x>=0&&Ht.y>=0&&Ht.x+Ht.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Ht)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ht.x),l.addScaledVector(o,Ht.y),l.addScaledVector(a,Ht.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ir.setScalar(0),sr.setScalar(0),rr.setScalar(0),ir.fromBufferAttribute(e,t),sr.fromBufferAttribute(e,n),rr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ir,s.x),o.addScaledVector(sr,s.y),o.addScaledVector(rr,s.z),o}static isFrontFacing(e,t,n,i){return Lt.subVectors(n,t),Gt.subVectors(e,t),Lt.cross(Gt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lt.subVectors(this.c,this.b),Gt.subVectors(this.a,this.b),Lt.cross(Gt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;On.subVectors(i,n),zn.subVectors(s,n),er.subVectors(e,n);let l=On.dot(er),c=zn.dot(er);if(l<=0&&c<=0)return t.copy(n);tr.subVectors(e,i);let h=On.dot(tr),u=zn.dot(tr);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(On,o);nr.subVectors(e,s);let d=On.dot(nr),p=zn.dot(nr);if(p>=0&&d<=p)return t.copy(s);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(zn,a);let y=h*p-d*u;if(y<=0&&u-h>=0&&d-p>=0)return zo.subVectors(s,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(zo,a);let v=1/(y+g+f);return o=g*v,a=f*v,t.copy(n).addScaledVector(On,o).addScaledVector(zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ke=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dt):Dt.fromBufferAttribute(s,o),Dt.applyMatrix4(e.matrixWorld),this.expandByPoint(Dt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bi.copy(n.boundingBox)),Bi.applyMatrix4(e.matrixWorld),this.union(Bi)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dt),Dt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ti),Oi.subVectors(this.max,ti),kn.subVectors(e.a,ti),Vn.subVectors(e.b,ti),Gn.subVectors(e.c,ti),sn.subVectors(Vn,kn),rn.subVectors(Gn,Vn),yn.subVectors(kn,Gn);let t=[0,-sn.z,sn.y,0,-rn.z,rn.y,0,-yn.z,yn.y,sn.z,0,-sn.x,rn.z,0,-rn.x,yn.z,0,-yn.x,-sn.y,sn.x,0,-rn.y,rn.x,0,-yn.y,yn.x,0];return!or(t,kn,Vn,Gn,Oi)||(t=[1,0,0,0,1,0,0,0,1],!or(t,kn,Vn,Gn,Oi))?!1:(zi.crossVectors(sn,rn),t=[zi.x,zi.y,zi.z],or(t,kn,Vn,Gn,Oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wt=[new _,new _,new _,new _,new _,new _,new _,new _],Dt=new _,Bi=new Ke,kn=new _,Vn=new _,Gn=new _,sn=new _,rn=new _,yn=new _,ti=new _,Oi=new _,zi=new _,Mn=new _;function or(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Mn.fromArray(r,s);let a=i.x*Math.abs(Mn.x)+i.y*Math.abs(Mn.y)+i.z*Math.abs(Mn.z),l=e.dot(Mn),c=t.dot(Mn),h=n.dot(Mn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ze=new _,ki=new oe,Ol=0,At=class extends hn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ol++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Or,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ki.fromBufferAttribute(this,t),ki.applyMatrix3(e),this.setXY(t,ki.x,ki.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Or&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var fs=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ps=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ee=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}},zl=new Ke,ni=new _,ar=new _,Ot=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ni.subVectors(e,this.center);let t=ni.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ni,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ni.copy(e.center).add(ar)),this.expandByPoint(ni.copy(e.center).sub(ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kl=0,Tt=new Je,lr=new vt,Hn=new _,_t=new Ke,ii=new Ke,et=new _,Fe=class r extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hl(e)?ps:fs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ce().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tt.makeRotationFromQuaternion(e),this.applyMatrix4(Tt),this}rotateX(e){return Tt.makeRotationX(e),this.applyMatrix4(Tt),this}rotateY(e){return Tt.makeRotationY(e),this.applyMatrix4(Tt),this}rotateZ(e){return Tt.makeRotationZ(e),this.applyMatrix4(Tt),this}translate(e,t,n){return Tt.makeTranslation(e,t,n),this.applyMatrix4(Tt),this}scale(e,t,n){return Tt.makeScale(e,t,n),this.applyMatrix4(Tt),this}lookAt(e){return lr.lookAt(e),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hn).negate(),this.translate(Hn.x,Hn.y,Hn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];_t.setFromBufferAttribute(s),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,_t.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,_t.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(_t.min),this.boundingBox.expandByPoint(_t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let n=this.boundingSphere.center;if(_t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(et.addVectors(_t.min,ii.min),_t.expandByPoint(et),et.addVectors(_t.max,ii.max),_t.expandByPoint(et)):(_t.expandByPoint(ii.min),_t.expandByPoint(ii.max))}_t.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(et));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)et.fromBufferAttribute(a,c),l&&(Hn.fromBufferAttribute(e,c),et.add(Hn)),i=Math.max(i,n.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new At(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new _,l[A]=new _;let c=new _,h=new _,u=new _,f=new oe,d=new oe,p=new oe,g=new _,y=new _;function v(A,I,C){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,C),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,C),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let N=1/(d.x*p.y-p.x*d.y);isFinite(N)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(N),y.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(N),a[A].add(g),a[I].add(g),a[C].add(g),l[A].add(y),l[I].add(y),l[C].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let A=0,I=M.length;A<I;++A){let C=M[A],N=C.start,L=C.count;for(let X=N,T=N+L;X<T;X+=3)v(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let x=new _,m=new _,b=new _,S=new _;function E(A){b.fromBufferAttribute(i,A),S.copy(b);let I=a[A];x.copy(I),x.sub(b.multiplyScalar(b.dot(I))).normalize(),m.crossVectors(S,I);let N=m.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,N)}for(let A=0,I=M.length;A<I;++A){let C=M[A],N=C.start,L=C.count;for(let X=N,T=N+L;X<T;X+=3)E(e.getX(X+0)),E(e.getX(X+1)),E(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new _,s=new _,o=new _,a=new _,l=new _,c=new _,h=new _,u=new _;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),g=e.getX(f+1),y=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,y),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(y,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)et.fromBufferAttribute(e,t),et.normalize(),e.setXYZ(t,et.x,et.y,et.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let g=0,y=l.length;g<y;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let v=0;v<h;v++)f[p++]=c[d++]}return new At(f,h,u)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Vl=0,Cn=class extends hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=vr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mr,this.blendDst=br,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Br,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tn,this.stencilZFail=Tn,this.stencilZPass=Tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==ls&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mr&&(n.blendSrc=this.blendSrc),this.blendDst!==br&&(n.blendDst=this.blendDst),this.blendEquation!==yr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Br&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Xt=new _,cr=new _,Vi=new _,on=new _,hr=new _,Gi=new _,ur=new _,Qe=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cr.copy(e).add(t).multiplyScalar(.5),Vi.copy(t).sub(e).normalize(),on.copy(this.origin).sub(cr);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Vi),a=on.dot(this.direction),l=-on.dot(Vi),c=on.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(cr).addScaledVector(Vi,f),d}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);let n=Xt.dot(this.direction),i=Xt.dot(Xt)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,i,s){hr.subVectors(t,e),Gi.subVectors(n,e),ur.crossVectors(hr,Gi);let o=this.direction.dot(ur),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;on.subVectors(this.origin,e);let l=a*this.direction.dot(Gi.crossVectors(on,Gi));if(l<0)return null;let c=a*this.direction.dot(hr.cross(on));if(c<0||l+c>o)return null;let h=-a*on.dot(ur);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Jr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ko=new Je,bn=new Qe,Hi=new Ot,Vo=new _,Wi=new _,Xi=new _,qi=new _,dr=new _,Yi=new _,Go=new _,$i=new _,Te=class extends vt{constructor(e=new Fe,t=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Yi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(dr.fromBufferAttribute(u,e),o?Yi.addScaledVector(dr,h):Yi.addScaledVector(dr.sub(t),h))}t.add(Yi)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(s),bn.copy(e.ray).recast(e.near),!(Hi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Hi,Vo)===null||bn.origin.distanceToSquared(Vo)>(e.far-e.near)**2))&&(ko.copy(s).invert(),bn.copy(e.ray).applyMatrix4(ko),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bn)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let y=f[p],v=o[y.materialIndex],M=Math.max(y.start,d.start),x=Math.min(a.count,Math.min(y.start+y.count,d.start+d.count));for(let m=M,b=x;m<b;m+=3){let S=a.getX(m),E=a.getX(m+1),A=a.getX(m+2);i=Zi(this,v,e,n,c,h,u,S,E,A),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let y=p,v=g;y<v;y+=3){let M=a.getX(y),x=a.getX(y+1),m=a.getX(y+2);i=Zi(this,o,e,n,c,h,u,M,x,m),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let y=f[p],v=o[y.materialIndex],M=Math.max(y.start,d.start),x=Math.min(l.count,Math.min(y.start+y.count,d.start+d.count));for(let m=M,b=x;m<b;m+=3){let S=m,E=m+1,A=m+2;i=Zi(this,v,e,n,c,h,u,S,E,A),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=y.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let y=p,v=g;y<v;y+=3){let M=y,x=y+1,m=y+2;i=Zi(this,o,e,n,c,h,u,M,x,m),i&&(i.faceIndex=Math.floor(y/3),t.push(i))}}}};function Gl(r,e,t,n,i,s,o,a){let l;if(e.side===la?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ls,a),l===null)return null;$i.copy(a),$i.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo($i);return c<t.near||c>t.far?null:{distance:c,point:$i.clone(),object:r}}function Zi(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Wi),r.getVertexPosition(l,Xi),r.getVertexPosition(c,qi);let h=Gl(r,e,t,n,Wi,Xi,qi,Go);if(h){let u=new _;ln.getBarycoord(Go,Wi,Xi,qi,u),i&&(h.uv=ln.getInterpolatedAttribute(i,a,l,c,u,new oe)),s&&(h.uv1=ln.getInterpolatedAttribute(s,a,l,c,u,new oe)),o&&(h.normal=ln.getInterpolatedAttribute(o,a,l,c,u,new _),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new _,materialIndex:0};ln.getNormal(Wi,Xi,qi,f.normal),h.face=f,h.barycoord=u}return h}var fr=new _,Hl=new _,Wl=new Ce,qt=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=fr.subVectors(n,t).cross(Hl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(fr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Wl.getNormalMatrix(e),i=this.coplanarPoint(fr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sn=new Ot,Xl=new oe(.5,.5),Ji=new _,ms=class{constructor(e=new qt,t=new qt,n=new qt,i=new qt,s=new qt,o=new qt){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],y=s[10],v=s[11],M=s[12],x=s[13],m=s[14],b=s[15];if(i[0].setComponents(c-o,d-h,v-p,b-M).normalize(),i[1].setComponents(c+o,d+h,v+p,b+M).normalize(),i[2].setComponents(c+a,d+u,v+g,b+x).normalize(),i[3].setComponents(c-a,d-u,v-g,b-x).normalize(),n)i[4].setComponents(l,f,y,m).normalize(),i[5].setComponents(c-l,d-f,v-y,b-m).normalize();else if(i[4].setComponents(c-l,d-f,v-y,b-m).normalize(),t===cn)i[5].setComponents(c+l,d+f,v+y,b+m).normalize();else if(t===pi)i[5].setComponents(l,f,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){Sn.center.set(0,0,0);let t=Xl.distanceTo(e.center);return Sn.radius=.7071067811865476+t,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ji.x=i.normal.x>0?e.max.x:e.min.x,Ji.y=i.normal.y>0?e.max.y:e.min.y,Ji.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ji)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gt=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gs=new _,xs=new _,Ho=new Je,si=new Qe,Ki=new Ot,pr=new _,Wo=new _,yt=class extends vt{constructor(e=new Fe,t=new gt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)gs.fromBufferAttribute(t,i-1),xs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gs.distanceTo(xs);e.setAttribute("lineDistance",new Ee(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(i),Ki.radius+=s,e.ray.intersectsSphere(Ki)===!1)return;Ho.copy(i).invert(),si.copy(e.ray).applyMatrix4(Ho);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,y=p-1;g<y;g+=c){let v=h.getX(g),M=h.getX(g+1),x=Qi(this,e,si,l,v,M,g);x&&t.push(x)}if(this.isLineLoop){let g=h.getX(p-1),y=h.getX(d),v=Qi(this,e,si,l,g,y,p-1);v&&t.push(v)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,y=p-1;g<y;g+=c){let v=Qi(this,e,si,l,g,g+1,g);v&&t.push(v)}if(this.isLineLoop){let g=Qi(this,e,si,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Qi(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(gs.fromBufferAttribute(a,i),xs.fromBufferAttribute(a,s),t.distanceSqToSegment(gs,xs,pr,Wo)>n)return;pr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(pr);if(!(c<e.near||c>e.far))return{distance:c,point:Wo.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var Yn=class extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xo=new Je,kr=new Qe,ji=new Ot,es=new _,xi=class extends vt{constructor(e=new Fe,t=new Yn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(i),ji.radius+=s,e.ray.intersectsSphere(ji)===!1)return;Xo.copy(i).invert(),kr.copy(e.ray).applyMatrix4(Xo);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,g=d;p<g;p++){let y=c.getX(p);es.fromBufferAttribute(u,y),qo(es,y,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,g=d;p<g;p++)es.fromBufferAttribute(u,p),qo(es,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function qo(r,e,t,n,i,s,o){let a=kr.distanceSqToPoint(r);if(a<t){let l=new _;kr.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ve=class extends wn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Me=class r extends Fe{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function p(g,y,v,M,x,m,b,S,E,A,I){let C=m/E,N=b/A,L=m/2,X=b/2,T=S/2,F=E+1,q=A+1,H=0,P=0,V=new _;for(let O=0;O<q;O++){let k=O*N-X;for(let ge=0;ge<F;ge++){let te=ge*C-L;V[g]=te*M,V[y]=k*x,V[v]=T,c.push(V.x,V.y,V.z),V[g]=0,V[y]=0,V[v]=S>0?1:-1,h.push(V.x,V.y,V.z),u.push(ge/E),u.push(1-O/A),H+=1}}for(let O=0;O<A;O++)for(let k=0;k<E;k++){let ge=f+k+F*O,te=f+k+F*(O+1),z=f+(k+1)+F*(O+1),W=f+(k+1)+F*O;l.push(ge,te,W),l.push(te,z,W),P+=6}a.addGroup(d,P,I),d+=P,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _i=class r extends Fe{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new _,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},tt=class r extends Fe{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],p=0,g=[],y=n/2,v=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(d,2));function M(){let m=new _,b=new _,S=0,E=(t-e)/n;for(let A=0;A<=s;A++){let I=[],C=A/s,N=C*(t-e)+e;for(let L=0;L<=i;L++){let X=L/i,T=X*l+a,F=Math.sin(T),q=Math.cos(T);b.x=N*F,b.y=-C*n+y,b.z=N*q,u.push(b.x,b.y,b.z),m.set(F,E,q).normalize(),f.push(m.x,m.y,m.z),d.push(X,1-C),I.push(p++)}g.push(I)}for(let A=0;A<i;A++)for(let I=0;I<s;I++){let C=g[I][A],N=g[I+1][A],L=g[I+1][A+1],X=g[I][A+1];(e>0||I!==0)&&(h.push(C,N,X),S+=3),(t>0||I!==s-1)&&(h.push(N,L,X),S+=3)}c.addGroup(v,S,0),v+=S}function x(m){let b=p,S=new oe,E=new _,A=0,I=m===!0?e:t,C=m===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,y*C,0),f.push(0,C,0),d.push(.5,.5),p++;let N=p;for(let L=0;L<=i;L++){let T=L/i*l+a,F=Math.cos(T),q=Math.sin(T);E.x=I*q,E.y=y*C,E.z=I*F,u.push(E.x,E.y,E.z),f.push(0,C,0),S.x=F*.5+.5,S.y=q*.5*C+.5,d.push(S.x,S.y),p++}for(let L=0;L<i;L++){let X=b+L,T=N+L;m===!0?h.push(T,T+1,X):h.push(T+1,T,X),A+=3}c.addGroup(v,A,m===!0?1:2),v+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class r extends tt{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Mt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new oe:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new _,i=[],s=[],o=[],a=new _,l=new Je;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new _)}s[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Pe(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Pe(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$n=class extends Mt{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_s=class extends $n{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function co(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Yo=new _,$o=new _,mr=new co,gr=new co,xr=new co,un=class extends Mt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new _){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:($o.subVectors(i[0],i[1]).add(i[0]),c=$o);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Yo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),y<1e-4&&(y=g),mr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,g,y),gr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,g,y),xr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,g,y)}else this.curveType==="catmullrom"&&(mr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),gr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),xr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(mr.calc(l),gr.calc(l),xr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Zo(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function ql(r,e){let t=1-r;return t*t*e}function Yl(r,e){return 2*(1-r)*r*e}function $l(r,e){return r*r*e}function ci(r,e,t,n){return ql(r,e)+Yl(r,t)+$l(r,n)}function Zl(r,e){let t=1-r;return t*t*t*e}function Jl(r,e){let t=1-r;return 3*t*t*r*e}function Kl(r,e){return 3*(1-r)*r*r*e}function Ql(r,e){return r*r*r*e}function hi(r,e,t,n,i){return Zl(r,e)+Jl(r,t)+Kl(r,n)+Ql(r,i)}var vi=class extends Mt{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(hi(e,i.x,s.x,o.x,a.x),hi(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vs=class extends Mt{constructor(e=new _,t=new _,n=new _,i=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(hi(e,i.x,s.x,o.x,a.x),hi(e,i.y,s.y,o.y,a.y),hi(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yi=class extends Mt{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ys=class extends Mt{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mi=class extends Mt{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ci(e,i.x,s.x,o.x),ci(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bi=class extends Mt{constructor(e=new _,t=new _,n=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ci(e,i.x,s.x,o.x),ci(e,i.y,s.y,o.y),ci(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Si=class extends Mt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Zo(a,l.x,c.x,h.x,u.x),Zo(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new oe().fromArray(i))}return this}},Ms=Object.freeze({__proto__:null,ArcCurve:_s,CatmullRomCurve3:un,CubicBezierCurve:vi,CubicBezierCurve3:vs,EllipseCurve:$n,LineCurve:yi,LineCurve3:ys,QuadraticBezierCurve:Mi,QuadraticBezierCurve3:bi,SplineCurve:Si}),bs=class extends Mt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ms[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ms[i.type]().fromJSON(i))}return this}},Pn=class extends bs{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new yi(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Mi(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new vi(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Si(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new $n(e,t,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ft=class extends Pn{constructor(e){super(e),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Pn().fromJSON(i))}return this}};function jl(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=ya(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=sc(r,e,s,t)),r.length>80*t){a=r[0],l=r[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=r[f],p=r[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ti(s,o,t,a,l,c,0),o}function ya(r,e,t,n,i){let s;if(i===mc(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=Jo(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Jo(o/n|0,r[o],r[o+1],s);return s&&Zn(s,s.next)&&(Ai(s),s=s.next),s}function In(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Zn(t,t.next)||Xe(t.prev,t,t.next)===0)){if(Ai(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ti(r,e,t,n,i,s,o){if(!r)return;!o&&s&&cc(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?tc(r,n,i,s):ec(r)){e.push(l.i,r.i,c.i),Ai(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=nc(In(r),e),Ti(r,e,t,n,i,s,2)):o===2&&ic(r,e,t,n,i,s):Ti(In(r),e,t,n,i,s,1);break}}}function ec(r){let e=r.prev,t=r,n=r.next;if(Xe(e,t,n)>=0)return!1;let i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&oi(i,a,s,l,o,c,p.x,p.y)&&Xe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function tc(r,e,t,n){let i=r.prev,s=r,o=r.next;if(Xe(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),g=Math.max(a,l,c),y=Math.max(h,u,f),v=Vr(d,p,e,t,n),M=Vr(g,y,e,t,n),x=r.prevZ,m=r.nextZ;for(;x&&x.z>=v&&m&&m.z<=M;){if(x.x>=d&&x.x<=g&&x.y>=p&&x.y<=y&&x!==i&&x!==o&&oi(a,h,l,u,c,f,x.x,x.y)&&Xe(x.prev,x,x.next)>=0||(x=x.prevZ,m.x>=d&&m.x<=g&&m.y>=p&&m.y<=y&&m!==i&&m!==o&&oi(a,h,l,u,c,f,m.x,m.y)&&Xe(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;x&&x.z>=v;){if(x.x>=d&&x.x<=g&&x.y>=p&&x.y<=y&&x!==i&&x!==o&&oi(a,h,l,u,c,f,x.x,x.y)&&Xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;m&&m.z<=M;){if(m.x>=d&&m.x<=g&&m.y>=p&&m.y<=y&&m!==i&&m!==o&&oi(a,h,l,u,c,f,m.x,m.y)&&Xe(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function nc(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Zn(n,i)&&ba(n,t,t.next,i)&&wi(n,i)&&wi(i,n)&&(e.push(n.i,t.i,i.i),Ai(t),Ai(t.next),t=r=i),t=t.next}while(t!==r);return In(t)}function ic(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dc(o,a)){let l=Sa(o,a);o=In(o,o.next),l=In(l,l.next),Ti(o,e,t,n,i,s,0),Ti(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function sc(r,e,t,n){let i=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=ya(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(uc(c))}i.sort(rc);for(let s=0;s<i.length;s++)t=oc(i[s],t);return t}function rc(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function oc(r,e){let t=ac(r,e);if(!t)return e;let n=Sa(t,r);return In(n,n.next),In(t,t.next)}function ac(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;if(Zn(r,t))return t;do{if(Zn(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ma(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);wi(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&lc(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function lc(r,e){return Xe(r.prev,r,e.prev)<0&&Xe(e.next,r,r.next)<0}function cc(r,e,t,n){let i=r;do i.z===0&&(i.z=Vr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,hc(i)}function hc(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Vr(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function uc(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ma(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function oi(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&Ma(r,e,t,n,i,s,o,a)}function dc(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!fc(r,e)&&(wi(r,e)&&wi(e,r)&&pc(r,e)&&(Xe(r.prev,r,e.prev)||Xe(r,e.prev,e))||Zn(r,e)&&Xe(r.prev,r,r.next)>0&&Xe(e.prev,e,e.next)>0)}function Xe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Zn(r,e){return r.x===e.x&&r.y===e.y}function ba(r,e,t,n){let i=ns(Xe(r,e,t)),s=ns(Xe(r,e,n)),o=ns(Xe(t,n,r)),a=ns(Xe(t,n,e));return!!(i!==s&&o!==a||i===0&&ts(r,t,e)||s===0&&ts(r,n,e)||o===0&&ts(t,r,n)||a===0&&ts(t,e,n))}function ts(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ns(r){return r>0?1:r<0?-1:0}function fc(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&ba(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function wi(r,e){return Xe(r.prev,r,r.next)<0?Xe(r,e,r.next)>=0&&Xe(r,r.prev,e)>=0:Xe(r,e,r.prev)<0||Xe(r,r.next,e)<0}function pc(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Sa(r,e){let t=Gr(r.i,r.x,r.y),n=Gr(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Jo(r,e,t,n){let i=Gr(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ai(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Gr(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mc(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Hr=class{static triangulate(e,t,n=2){return jl(e,t,n)}},Bt=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Ko(e),Qo(n,e);let o=e.length;t.forEach(Ko);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Qo(n,t[l]);let a=Hr.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Ko(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Qo(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var $t=class r extends Fe{constructor(e=new ft([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ee(i,3)),this.setAttribute("uv",new Ee(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:gc,x,m=!1,b,S,E,A;if(v){x=v.getSpacedPoints(h),m=!0,f=!1;let R=v.isCatmullRomCurve3?v.closed:!1;b=v.computeFrenetFrames(h,R),S=new _,E=new _,A=new _}f||(y=0,d=0,p=0,g=0);let I=a.extractPoints(c),C=I.shape,N=I.holes;if(!Bt.isClockWise(C)){C=C.reverse();for(let R=0,G=N.length;R<G;R++){let Y=N[R];Bt.isClockWise(Y)&&(N[R]=Y.reverse())}}function X(R){let Y=10000000000000001e-36,J=R[0];for(let ee=1;ee<=R.length;ee++){let ue=ee%R.length,le=R[ue],me=le.x-J.x,de=le.y-J.y,D=me*me+de*de,w=Math.max(Math.abs(le.x),Math.abs(le.y),Math.abs(J.x),Math.abs(J.y)),B=Y*w*w;if(D<=B){R.splice(ue,1),ee--;continue}J=le}}X(C),N.forEach(X);let T=N.length,F=C;for(let R=0;R<T;R++){let G=N[R];C=C.concat(G)}function q(R,G,Y){return G||We("ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(G,Y)}let H=C.length;function P(R,G,Y){let J,ee,ue,le=R.x-G.x,me=R.y-G.y,de=Y.x-R.x,D=Y.y-R.y,w=le*le+me*me,B=le*D-me*de;if(Math.abs(B)>Number.EPSILON){let K=Math.sqrt(w),U=Math.sqrt(de*de+D*D),re=G.x-me/K,Ae=G.y+le/K,j=Y.x-D/U,_e=Y.y+de/U,Re=((j-re)*D-(_e-Ae)*de)/(le*D-me*de);J=re+le*Re-R.x,ee=Ae+me*Re-R.y;let De=J*J+ee*ee;if(De<=2)return new oe(J,ee);ue=Math.sqrt(De/2)}else{let K=!1;le>Number.EPSILON?de>Number.EPSILON&&(K=!0):le<-Number.EPSILON?de<-Number.EPSILON&&(K=!0):Math.sign(me)===Math.sign(D)&&(K=!0),K?(J=-me,ee=le,ue=Math.sqrt(w)):(J=le,ee=me,ue=Math.sqrt(w/2))}return new oe(J/ue,ee/ue)}let V=[];for(let R=0,G=F.length,Y=G-1,J=R+1;R<G;R++,Y++,J++)Y===G&&(Y=0),J===G&&(J=0),V[R]=P(F[R],F[Y],F[J]);let O=[],k,ge=V.concat();for(let R=0,G=T;R<G;R++){let Y=N[R];k=[];for(let J=0,ee=Y.length,ue=ee-1,le=J+1;J<ee;J++,ue++,le++)ue===ee&&(ue=0),le===ee&&(le=0),k[J]=P(Y[J],Y[ue],Y[le]);O.push(k),ge=ge.concat(k)}let te;if(y===0)te=Bt.triangulateShape(F,N);else{let R=[],G=[];for(let Y=0;Y<y;Y++){let J=Y/y,ee=d*Math.cos(J*Math.PI/2),ue=p*Math.sin(J*Math.PI/2)+g;for(let le=0,me=F.length;le<me;le++){let de=q(F[le],V[le],ue);Z(de.x,de.y,-ee),J===0&&R.push(de)}for(let le=0,me=T;le<me;le++){let de=N[le];k=O[le];let D=[];for(let w=0,B=de.length;w<B;w++){let K=q(de[w],k[w],ue);Z(K.x,K.y,-ee),J===0&&D.push(K)}J===0&&G.push(D)}}te=Bt.triangulateShape(R,G)}let z=te.length,W=p+g;for(let R=0;R<H;R++){let G=f?q(C[R],ge[R],W):C[R];m?(E.copy(b.normals[0]).multiplyScalar(G.x),S.copy(b.binormals[0]).multiplyScalar(G.y),A.copy(x[0]).add(E).add(S),Z(A.x,A.y,A.z)):Z(G.x,G.y,0)}for(let R=1;R<=h;R++)for(let G=0;G<H;G++){let Y=f?q(C[G],ge[G],W):C[G];m?(E.copy(b.normals[R]).multiplyScalar(Y.x),S.copy(b.binormals[R]).multiplyScalar(Y.y),A.copy(x[R]).add(E).add(S),Z(A.x,A.y,A.z)):Z(Y.x,Y.y,u/h*R)}for(let R=y-1;R>=0;R--){let G=R/y,Y=d*Math.cos(G*Math.PI/2),J=p*Math.sin(G*Math.PI/2)+g;for(let ee=0,ue=F.length;ee<ue;ee++){let le=q(F[ee],V[ee],J);Z(le.x,le.y,u+Y)}for(let ee=0,ue=N.length;ee<ue;ee++){let le=N[ee];k=O[ee];for(let me=0,de=le.length;me<de;me++){let D=q(le[me],k[me],J);m?Z(D.x,D.y+x[h-1].y,x[h-1].x+Y):Z(D.x,D.y,u+Y)}}}ne(),fe();function ne(){let R=i.length/3;if(f){let G=0,Y=H*G;for(let J=0;J<z;J++){let ee=te[J];we(ee[2]+Y,ee[1]+Y,ee[0]+Y)}G=h+y*2,Y=H*G;for(let J=0;J<z;J++){let ee=te[J];we(ee[0]+Y,ee[1]+Y,ee[2]+Y)}}else{for(let G=0;G<z;G++){let Y=te[G];we(Y[2],Y[1],Y[0])}for(let G=0;G<z;G++){let Y=te[G];we(Y[0]+H*h,Y[1]+H*h,Y[2]+H*h)}}n.addGroup(R,i.length/3-R,0)}function fe(){let R=i.length/3,G=0;ie(F,G),G+=F.length;for(let Y=0,J=N.length;Y<J;Y++){let ee=N[Y];ie(ee,G),G+=ee.length}n.addGroup(R,i.length/3-R,1)}function ie(R,G){let Y=R.length;for(;--Y>=0;){let J=Y,ee=Y-1;ee<0&&(ee=R.length-1);for(let ue=0,le=h+y*2;ue<le;ue++){let me=H*ue,de=H*(ue+1),D=G+J+me,w=G+ee+me,B=G+ee+de,K=G+J+de;ve(D,w,B,K)}}}function Z(R,G,Y){l.push(R),l.push(G),l.push(Y)}function we(R,G,Y){ae(R),ae(G),ae(Y);let J=i.length/3,ee=M.generateTopUV(n,i,J-3,J-2,J-1);pe(ee[0]),pe(ee[1]),pe(ee[2])}function ve(R,G,Y,J){ae(R),ae(G),ae(J),ae(G),ae(Y),ae(J);let ee=i.length/3,ue=M.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);pe(ue[0]),pe(ue[1]),pe(ue[3]),pe(ue[1]),pe(ue[2]),pe(ue[3])}function ae(R){i.push(l[R*3+0]),i.push(l[R*3+1]),i.push(l[R*3+2])}function pe(R){s.push(R.x),s.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return xc(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ms[i.type]().fromJSON(i)),new r(n,e.options)}},gc={generateTopUV:function(r,e,t,n,i){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new oe(s,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],g=e[s*3],y=e[s*3+1],v=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-u),new oe(f,1-p),new oe(g,1-v)]:[new oe(a,1-l),new oe(h,1-u),new oe(d,1-p),new oe(y,1-v)]}};function xc(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ei=class r extends Fe{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Pe(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/t,u=new _,f=new oe,d=new _,p=new _,g=new _,y=0,v=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:y=e[M+1].x-e[M].x,v=e[M+1].y-e[M].y,d.x=v*1,d.y=-y,d.z=v*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:y=e[M+1].x-e[M].x,v=e[M+1].y-e[M].y,d.x=v*1,d.y=-y,d.z=v*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(p)}for(let M=0;M<=t;M++){let x=n+M*h*i,m=Math.sin(x),b=Math.cos(x);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*m,u.y=e[S].y,u.z=e[S].x*b,o.push(u.x,u.y,u.z),f.x=M/t,f.y=S/(e.length-1),a.push(f.x,f.y);let E=l[3*S+0]*m,A=l[3*S+1],I=l[3*S+0]*b;c.push(E,A,I)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){let m=x+M*e.length,b=m,S=m+e.length,E=m+e.length+1,A=m+1;s.push(b,S,A),s.push(E,A,S)}this.setIndex(s),this.setAttribute("position",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2)),this.setAttribute("normal",new Ee(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}};var ke=class r extends Fe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],g=[],y=[];for(let v=0;v<h;v++){let M=v*f-o;for(let x=0;x<c;x++){let m=x*u-s;p.push(m,-M,0),g.push(0,0,1),y.push(x/a),y.push(1-v/l)}}for(let v=0;v<l;v++)for(let M=0;M<a;M++){let x=M+c*v,m=M+c*(v+1),b=M+1+c*(v+1),S=M+1+c*v;d.push(x,m,S),d.push(m,b,S)}this.setIndex(d),this.setAttribute("position",new Ee(p,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Zt=class r extends Fe{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new _,p=new oe;for(let g=0;g<=i;g++){for(let y=0;y<=n;y++){let v=s+y/n*o;d.x=u*Math.cos(v),d.y=u*Math.sin(v),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let g=0;g<i;g++){let y=g*(n+1);for(let v=0;v<n;v++){let M=v+y,x=M,m=M+n+1,b=M+n+2,S=M+1;a.push(x,m,S),a.push(m,b,S)}}this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Jt=class r extends Fe{constructor(e=new ft([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ee(i,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;Bt.isClockWise(d)===!1&&(d=d.reverse());for(let y=0,v=p.length;y<v;y++){let M=p[y];Bt.isClockWise(M)===!0&&(p[y]=M.reverse())}let g=Bt.triangulateShape(d,p);for(let y=0,v=p.length;y<v;y++){let M=p[y];d=d.concat(M)}for(let y=0,v=d.length;y<v;y++){let M=d[y];i.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let y=0,v=g.length;y<v;y++){let M=g[y],x=M[0]+u,m=M[1]+u,b=M[2]+u;n.push(x,m,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return _c(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new r(n,e.curveSegments)}};function _c(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var nt=class r extends Fe{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new _,f=new _,d=[],p=[],g=[],y=[];for(let v=0;v<=n;v++){let M=[],x=v/n,m=o+x*a,b=e*Math.cos(m),S=Math.sqrt(e*e-b*b),E=0;v===0&&o===0?E=.5/t:v===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){let I=A/t,C=i+I*s;u.x=-S*Math.cos(C),u.y=b,u.z=S*Math.sin(C),p.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),y.push(I+E,1-x),M.push(c++)}h.push(M)}for(let v=0;v<n;v++)for(let M=0;M<t;M++){let x=h[v][M+1],m=h[v][M],b=h[v+1][M],S=h[v+1][M+1];(v!==0||o>0)&&d.push(x,m,S),(v!==n-1||l<Math.PI)&&d.push(m,b,S)}this.setIndex(d),this.setAttribute("position",new Ee(p,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ut=class r extends Fe{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new _,d=new _,p=new _;for(let g=0;g<=n;g++){let y=o+g/n*a;for(let v=0;v<=i;v++){let M=v/i*s;d.x=(e+t*Math.cos(y))*Math.cos(M),d.y=(e+t*Math.cos(y))*Math.sin(M),d.z=t*Math.sin(y),c.push(d.x,d.y,d.z),f.x=e*Math.cos(M),f.y=e*Math.sin(M),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(v/i),u.push(g/n)}}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){let v=(i+1)*g+y-1,M=(i+1)*(g-1)+y-1,x=(i+1)*(g-1)+y,m=(i+1)*g+y;l.push(v,M,m),l.push(M,x,m)}this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Jn=class r extends Fe{constructor(e=new bi(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new _,l=new _,c=new oe,h=new _,u=[],f=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(d,2));function g(){for(let x=0;x<t;x++)y(x);y(s===!1?t:0),M(),v()}function y(x){h=e.getPointAt(x/t,h);let m=o.normals[x],b=o.binormals[x];for(let S=0;S<=i;S++){let E=S/i*Math.PI*2,A=Math.sin(E),I=-Math.cos(E);l.x=I*m.x+A*b.x,l.y=I*m.y+A*b.y,l.z=I*m.z+A*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function v(){for(let x=1;x<=t;x++)for(let m=1;m<=i;m++){let b=(i+1)*(x-1)+(m-1),S=(i+1)*x+(m-1),E=(i+1)*x+m,A=(i+1)*(x-1)+m;p.push(b,S,A),p.push(S,E,A)}}function M(){for(let x=0;x<=t;x++)for(let m=0;m<=i;m++)c.x=x/t,c.y=m/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ms[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ta(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(jo(i))i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(jo(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function pt(r){let e={};for(let t=0;t<r.length;t++){let n=Ta(r[t]);for(let i in n)e[i]=n[i]}return e}function jo(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}var Oe=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function is(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var dn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ss=class extends dn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lr,endingEnd:Lr}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dr:s=e,a=2*t-n;break;case Ur:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dr:o=e,l=2*n-t;break;case Ur:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),g=p*p,y=g*p,v=-f*y+2*f*g-f*p,M=(1+f)*y+(-1.5-2*f)*g+(-.5+f)*p+1,x=(-1-d)*y+(1.5+d)*g+.5*p,m=d*y-d*g;for(let b=0;b!==a;++b)s[b]=v*o[h+b]+M*o[c+b]+x*o[l+b]+m*o[u+b];return s}},Ts=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},ws=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},As=class extends dn{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),g=1-p;for(let y=0;y!==a;++y)s[y]=o[c+y]*g+o[l+y]*p;return s}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let g=o[c+p],y=o[l+p],v=d*f+p*2,M=u[v],x=u[v+1],m=e*f+p*2,b=h[m],S=h[m+1],E=(n-t)/(i-t),A,I,C,N,L;for(let X=0;X<8;X++){A=E*E,I=A*E,C=1-E,N=C*C,L=N*C;let F=L*t+3*N*E*M+3*C*A*b+I*i-n;if(Math.abs(F)<1e-10)break;let q=3*N*(M-t)+6*C*E*(b-M)+3*A*(i-b);if(Math.abs(q)<1e-10)break;E=E-F/q,E=Math.max(0,Math.min(1,E))}s[p]=L*g+3*N*E*x+3*C*A*S+I*y}return s}},bt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ws(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ts(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ss(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new As(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case fi:t=this.InterpolantFactoryMethodDiscrete;break;case cs:t=this.InterpolantFactoryMethodLinear;break;case os:t=this.InterpolantFactoryMethodSmooth;break;case Ir:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fi;case this.InterpolantFactoryMethodLinear:return cs;case this.InterpolantFactoryMethodSmooth:return os;case this.InterpolantFactoryMethodBezier:return Ir}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ul(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===os,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let g=t[u+p];if(g!==t[f+p]||g!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};bt.prototype.ValueTypeName="";bt.prototype.TimeBufferType=Float32Array;bt.prototype.ValueBufferType=Float32Array;bt.prototype.DefaultInterpolation=cs;var fn=class extends bt{constructor(e,t,n){super(e,t,n)}};fn.prototype.ValueTypeName="bool";fn.prototype.ValueBufferType=Array;fn.prototype.DefaultInterpolation=fi;fn.prototype.InterpolantFactoryMethodLinear=void 0;fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends bt{constructor(e,t,n,i){super(e,t,n,i)}};Es.prototype.ValueTypeName="color";var Cs=class extends bt{constructor(e,t,n,i){super(e,t,n,i)}};Cs.prototype.ValueTypeName="number";var Rs=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ie.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ci=class extends bt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Rs(this.times,this.values,this.getValueSize(),e)}};Ci.prototype.ValueTypeName="quaternion";Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var pn=class extends bt{constructor(e,t,n){super(e,t,n)}};pn.prototype.ValueTypeName="string";pn.prototype.ValueBufferType=Array;pn.prototype.DefaultInterpolation=fi;pn.prototype.InterpolantFactoryMethodLinear=void 0;pn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends bt{constructor(e,t,n,i){super(e,t,n,i)}};Ps.prototype.ValueTypeName="vector";var Is=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wa=new Is,Ls=class{constructor(e){this.manager=e!==void 0?e:wa,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ls.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ds=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var _r=new Je,ea=new _,ta=new _,Wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=oo,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new An(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ea.setFromMatrixPosition(e.matrixWorld),t.position.copy(ea),ta.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ta),t.updateMatrixWorld(),_r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===pi||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ss=new _,rs=new Ie,Ft=new _,Us=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ss,rs,Ft),Ft.x===1&&Ft.y===1&&Ft.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,rs,Ft.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ss,rs,Ft),Ft.x===1&&Ft.y===1&&Ft.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,rs,Ft.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},an=new _,na=new oe,ia=new oe,Ns=class extends Us{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=mi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ai*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mi*2*Math.atan(Math.tan(ai*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){an.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(an.x,an.y).multiplyScalar(-e/an.z),an.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(an.x,an.y).multiplyScalar(-e/an.z)}getViewSize(e,t){return this.getViewBounds(e,na,ia),t.subVectors(ia,na)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ai*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Xr=class extends Wr{constructor(){super(new Ns(90,1,.5,500)),this.isPointLightShadow=!0}},Ri=class extends Ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xr}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var ho="\\[\\]\\.:\\/",vc=new RegExp("["+ho+"]","g"),uo="[^"+ho+"]",yc="[^"+ho.replace("\\.","")+"]",Mc=/((?:WC+[\/:])*)/.source.replace("WC",uo),bc=/(WCOD+)?/.source.replace("WCOD",yc),Sc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uo),Tc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uo),wc=new RegExp("^"+Mc+bc+Sc+Tc+"$"),Ac=["material","materials","bones","map"],qr=class{constructor(e,t,n){let i=n||He.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},He=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vc,"")}static parseTrackName(e){let t=wc.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Ac.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=qr;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Td=new Float32Array(1);var sa=new Je,Kt=class{constructor(e,t,n=0,i=1/0){this.ray=new Qe(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new gi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sa.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sa),this}intersectObject(e,t=!0,n=[]){return Yr(e,this,n,t),n.sort(ra),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Yr(e[i],this,n,t);return n.sort(ra),n}};function ra(r,e){return r.distance-e.distance}function Yr(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Yr(s[o],e,t,!0)}}var xo=class xo{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};xo.prototype.isMatrix2=!0;var $r=xo;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var Ec=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cc=`#ifdef USE_ALPHAHASH
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
#endif`,Rc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ic=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dc=`#ifdef USE_AOMAP
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
#endif`,Uc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nc=`#ifdef USE_BATCHING
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
#endif`,Fc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kc=`#ifdef USE_IRIDESCENCE
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
#endif`,Vc=`#ifdef USE_BUMPMAP
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
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$c=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jc=`#define PI 3.141592653589793
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
} // validated`,Kc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qc=`vec3 transformedNormal = objectNormal;
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
#endif`,jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",sh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rh=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ah=`#ifdef USE_ENVMAP
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
#endif`,lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
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
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ph=`#ifdef USE_GRADIENTMAP
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
}`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_h=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vh=`#ifdef USE_ENVMAP
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
#endif`,yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Th=`PhysicalMaterial material;
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
#endif`,wh=`uniform sampler2D dfgLUT;
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
}`,Ah=`
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
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ph=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ih=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bh=`#if defined( USE_POINTS_UV )
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
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hh=`#ifdef USE_MORPHTARGETS
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
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jh=`#ifdef USE_NORMALMAP
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
#endif`,Kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,su=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,du=`float getShadowMask() {
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
}`,fu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pu=`#ifdef USE_SKINNING
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
#endif`,mu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gu=`#ifdef USE_SKINNING
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
#endif`,xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mu=`#ifdef USE_TRANSMISSION
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
#endif`,bu=`#ifdef USE_TRANSMISSION
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
#endif`,Su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Au=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cu=`uniform sampler2D t2D;
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
}`,Ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Du=`#include <common>
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
}`,Uu=`#if DEPTH_PACKING == 3200
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
}`,Nu=`#define DISTANCE
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
}`,Fu=`#define DISTANCE
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
}`,Bu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zu=`uniform float scale;
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
}`,ku=`uniform vec3 diffuse;
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
}`,Vu=`#include <common>
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
}`,Gu=`uniform vec3 diffuse;
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
}`,Hu=`#define LAMBERT
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
}`,Wu=`#define LAMBERT
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
}`,Xu=`#define MATCAP
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
}`,qu=`#define MATCAP
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
}`,Yu=`#define NORMAL
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
}`,$u=`#define NORMAL
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
}`,Zu=`#define PHONG
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
}`,Ju=`#define PHONG
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
}`,Ku=`#define STANDARD
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
}`,Qu=`#define STANDARD
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
}`,ju=`#define TOON
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
}`,ed=`#define TOON
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
}`,td=`uniform float size;
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
}`,nd=`uniform vec3 diffuse;
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
}`,id=`#include <common>
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
}`,sd=`uniform vec3 color;
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
}`,rd=`uniform float rotation;
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
}`,od=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Ec,alphahash_pars_fragment:Cc,alphamap_fragment:Rc,alphamap_pars_fragment:Pc,alphatest_fragment:Ic,alphatest_pars_fragment:Lc,aomap_fragment:Dc,aomap_pars_fragment:Uc,batching_pars_vertex:Nc,batching_vertex:Fc,begin_vertex:Bc,beginnormal_vertex:Oc,bsdfs:zc,iridescence_fragment:kc,bumpmap_pars_fragment:Vc,clipping_planes_fragment:Gc,clipping_planes_pars_fragment:Hc,clipping_planes_pars_vertex:Wc,clipping_planes_vertex:Xc,color_fragment:qc,color_pars_fragment:Yc,color_pars_vertex:$c,color_vertex:Zc,common:Jc,cube_uv_reflection_fragment:Kc,defaultnormal_vertex:Qc,displacementmap_pars_vertex:jc,displacementmap_vertex:eh,emissivemap_fragment:th,emissivemap_pars_fragment:nh,colorspace_fragment:ih,colorspace_pars_fragment:sh,envmap_fragment:rh,envmap_common_pars_fragment:oh,envmap_pars_fragment:ah,envmap_pars_vertex:lh,envmap_physical_pars_fragment:vh,envmap_vertex:ch,fog_vertex:hh,fog_pars_vertex:uh,fog_fragment:dh,fog_pars_fragment:fh,gradientmap_pars_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:gh,lights_lambert_pars_fragment:xh,lights_pars_begin:_h,lights_toon_fragment:yh,lights_toon_pars_fragment:Mh,lights_phong_fragment:bh,lights_phong_pars_fragment:Sh,lights_physical_fragment:Th,lights_physical_pars_fragment:wh,lights_fragment_begin:Ah,lights_fragment_maps:Eh,lights_fragment_end:Ch,lightprobes_pars_fragment:Rh,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:Dh,map_fragment:Uh,map_pars_fragment:Nh,map_particle_fragment:Fh,map_particle_pars_fragment:Bh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:zh,morphinstance_vertex:kh,morphcolor_vertex:Vh,morphnormal_vertex:Gh,morphtarget_pars_vertex:Hh,morphtarget_vertex:Wh,normal_fragment_begin:Xh,normal_fragment_maps:qh,normal_pars_fragment:Yh,normal_pars_vertex:$h,normal_vertex:Zh,normalmap_pars_fragment:Jh,clearcoat_normal_fragment_begin:Kh,clearcoat_normal_fragment_maps:Qh,clearcoat_pars_fragment:jh,iridescence_pars_fragment:eu,opaque_fragment:tu,packing:nu,premultiplied_alpha_fragment:iu,project_vertex:su,dithering_fragment:ru,dithering_pars_fragment:ou,roughnessmap_fragment:au,roughnessmap_pars_fragment:lu,shadowmap_pars_fragment:cu,shadowmap_pars_vertex:hu,shadowmap_vertex:uu,shadowmask_pars_fragment:du,skinbase_vertex:fu,skinning_pars_vertex:pu,skinning_vertex:mu,skinnormal_vertex:gu,specularmap_fragment:xu,specularmap_pars_fragment:_u,tonemapping_fragment:vu,tonemapping_pars_fragment:yu,transmission_fragment:Mu,transmission_pars_fragment:bu,uv_pars_fragment:Su,uv_pars_vertex:Tu,uv_vertex:wu,worldpos_vertex:Au,background_vert:Eu,background_frag:Cu,backgroundCube_vert:Ru,backgroundCube_frag:Pu,cube_vert:Iu,cube_frag:Lu,depth_vert:Du,depth_frag:Uu,distance_vert:Nu,distance_frag:Fu,equirect_vert:Bu,equirect_frag:Ou,linedashed_vert:zu,linedashed_frag:ku,meshbasic_vert:Vu,meshbasic_frag:Gu,meshlambert_vert:Hu,meshlambert_frag:Wu,meshmatcap_vert:Xu,meshmatcap_frag:qu,meshnormal_vert:Yu,meshnormal_frag:$u,meshphong_vert:Zu,meshphong_frag:Ju,meshphysical_vert:Ku,meshphysical_frag:Qu,meshtoon_vert:ju,meshtoon_frag:ed,points_vert:td,points_frag:nd,shadow_vert:id,shadow_frag:sd,sprite_vert:rd,sprite_frag:od},he={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new _},probesMax:{value:new _},probesResolution:{value:new _}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Aa={basic:{uniforms:pt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:pt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:pt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:pt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:pt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:pt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:pt([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:pt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:pt([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:pt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:pt([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:pt([he.common,he.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:pt([he.lights,he.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Aa.physical={uniforms:pt([Aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var ad=new Ce;ad.set(-1,0,0,0,1,0,0,0,1);var Y0={[Kr]:"LINEAR_TONE_MAPPING",[Qr]:"REINHARD_TONE_MAPPING",[jr]:"CINEON_TONE_MAPPING",[eo]:"ACES_FILMIC_TONE_MAPPING",[no]:"AGX_TONE_MAPPING",[io]:"NEUTRAL_TONE_MAPPING",[to]:"CUSTOM_TONE_MAPPING"};var $0=new Float32Array(16),Z0=new Float32Array(9),J0=new Float32Array(4);var K0={[Kr]:"Linear",[Qr]:"Reinhard",[jr]:"Cineon",[eo]:"ACESFilmic",[no]:"AgX",[io]:"Neutral",[to]:"Custom"};var Q0={[oa]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};var j0={[ua]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[da]:"ENVMAP_TYPE_CUBE_UV"};var ex={[ro]:"ENVMAP_MODE_REFRACTION"};var tx={[Jr]:"ENVMAP_BLENDING_MULTIPLY",[ca]:"ENVMAP_BLENDING_MIX",[ha]:"ENVMAP_BLENDING_ADD"};var ld=new Ce;ld.set(-1,0,0,0,1,0,0,0,1);var nx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var $={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function Bs(r,e,t,n,i,s=16){s=Math.min(s,n/2,i/2),r.beginPath(),r.moveTo(e+s,t),r.lineTo(e+n-s,t),r.quadraticCurveTo(e+n,t,e+n,t+s),r.lineTo(e+n,t+i-s),r.quadraticCurveTo(e+n,t+i,e+n-s,t+i),r.lineTo(e+s,t+i),r.quadraticCurveTo(e,t+i,e,t+i-s),r.lineTo(e,t+s),r.quadraticCurveTo(e,t,e+s,t),r.closePath()}function st(r,e,t,n,i,{top:s="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=r.createLinearGradient(e,t,e,t+i);c.addColorStop(0,s),c.addColorStop(1,o),r.fillStyle=c,Bs(r,e,t,n,i,l),r.fill(),r.strokeStyle=a,r.lineWidth=1.5,r.stroke()}function Et(r,e,t){let n=r.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),r.fillStyle=n,r.fillRect(0,0,e,t),r.save(),r.globalAlpha=.13,r.strokeStyle="#79b3d1",r.lineWidth=1;for(let i=0;i<8;i++)r.beginPath(),r.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),r.stroke();r.restore(),r.fillStyle=$.gold,r.fillRect(32,0,96,4)}function ce(r,e,t,n,i=28,s=$.ink,o="600",a){r.font=`${o} ${i}px Arial`,r.fillStyle=s,r.textAlign="left",r.textBaseline="alphabetic",Number.isFinite(a)?r.fillText(e,t,n,a):r.fillText(e,t,n)}function Dn(r,e,t,n,i,s=$.gold){if(r.save(),r.translate(t,n),r.scale(i/48,i/48),r.lineWidth=2.8,r.lineCap="round",r.lineJoin="round",r.strokeStyle=s,r.fillStyle=s,e==="ball")r.beginPath(),r.arc(0,0,18,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(-18,0),r.lineTo(18,0),r.stroke(),r.fillStyle="#183a51",r.beginPath(),r.arc(0,0,6,0,Math.PI*2),r.fill(),r.stroke();else if(e==="puff"){r.beginPath(),r.arc(0,3,16,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(-14,-5),r.lineTo(-15,-19),r.lineTo(-5,-11),r.moveTo(14,-5),r.lineTo(15,-19),r.lineTo(5,-11),r.stroke(),r.beginPath(),r.arc(0,-8,5,0,Math.PI*1.5),r.stroke();for(let o of[-6,6])r.beginPath(),r.arc(o,3,2,0,Math.PI*2),r.fill();r.beginPath(),r.arc(0,7,5,.2,Math.PI-.2),r.stroke()}else if(e==="book")Bs(r,-20,-15,40,32,4),r.stroke(),r.beginPath(),r.moveTo(0,-15),r.lineTo(0,17),r.moveTo(-14,-6),r.lineTo(-5,-6),r.moveTo(5,-6),r.lineTo(14,-6),r.stroke();else if(e==="golf")r.beginPath(),r.ellipse(0,13,18,6,0,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(-3,13),r.lineTo(-3,-20),r.lineTo(15,-14),r.lineTo(-3,-7),r.stroke(),r.beginPath(),r.arc(10,8,3,0,Math.PI*2),r.fill();else if(e==="target"){for(let o of[19,12,4])r.beginPath(),r.arc(0,0,o,0,Math.PI*2),r.stroke();r.beginPath(),r.moveTo(0,0),r.lineTo(20,-20),r.moveTo(12,-20),r.lineTo(20,-20),r.lineTo(20,-12),r.stroke()}else r.beginPath(),r.moveTo(-6,-12),r.lineTo(12,0),r.lineTo(-6,12),r.closePath(),r.fill();r.restore()}function Ea(r,e,t,n,i,s){let o=e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:$.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:$.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:$.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:$.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:$.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:$.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:$.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:$.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:$.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:$.pink}:null;if(o)st(r,t,n,i,72,{top:s?"#365c70":"#21465e",bottom:s?"#25465a":"#19364b",stroke:s?o.accent:"#3b5c71"}),r.fillStyle=o.accent,Bs(r,t+1,n+15,4,42,2),r.fill(),Dn(r,o.icon,t+41,n+36,42,o.accent),ce(r,o.title,t+82,n+31,i<600?26:29,$.ink,"700"),ce(r,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,$.muted,"400",i-125),ce(r,"\u203A",t+i-35,n+47,42,s?o.accent:$.muted,"400");else{let a=e==="Resume";st(r,t,n,i,72,{top:a?s?"#fff0c2":"#f8df9e":s?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":s?$.gold:"#496379"}),a&&Dn(r,"play",t+33,n+36,25,"#173247"),ce(r,e,t+(a?60:24),n+46,28,a?"#122c40":$.ink,"700")}}function Ca(r,e){Et(r,1024,768),ce(r,"TF JONES  /  PLAY IN THE YARD",44,37,19,$.blue,"700"),ce(r,"Mollie\u2019s adventures",44,93,48,$.ink,"700"),ce(r,"Point with your right hand, then pull the trigger.",44,132,24,$.muted,"400"),st(r,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),ce(r,e,60,172,23,$.mint,"500",900)}function _o(r,e,t,n,i){st(r,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),ce(r,e,n+9,i,21,$.gold,"700"),ce(r,t,n+45,i,21,$.muted,"400")}function Ra(r){_o(r,"Y","Games menu",44,663),_o(r,"B","Back",325,663),_o(r,"A","Replay round",548,663),r.strokeStyle="#355168",r.beginPath(),r.moveTo(44,692),r.lineTo(980,692),r.stroke(),ce(r,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,$.blue,"700"),ce(r,"Right grip to teleport",704,731,21,$.muted,"400")}function Pa(r,e){r.clearRect(0,0,768,192),st(r,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),r.fillStyle=$.gold,Bs(r,23,27,5,138,2),r.fill(),r.font="600 32px Arial";let t=[],n="";for(let s of e.split(/\s+/)){let o=n?n+" "+s:s;r.measureText(o).width>660&&n?(t.push(n),n=s):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((s,o)=>ce(r,s,47,i+o*42,32,$.ink,"600"))}function Ia(r,{total:e,throws:t,best:n,last:i}){Et(r,1024,640),Dn(r,"target",72,66,55,$.mint),ce(r,"STAFF-ROOM DARTS",119,79,40,$.ink,"700"),ce(r,"NINE DART CHALLENGE",39,136,24,$.muted,"700"),ce(r,String(e),36,281,142,$.gold,"700"),ce(r,"POINTS",280,277,32,$.muted,"700"),st(r,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),ce(r,"PERSONAL BEST",721,203,24,$.muted,"600"),ce(r,String(n),721,264,52,$.mint,"700");for(let s=0;s<9;s++){let o=s<t;st(r,40+s*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),ce(r,String(s+1),72+s*104,358,28,o?"#132e41":$.muted,"700")}st(r,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),ce(r,i,61,458,36,$.ink,"600",890),ce(r,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,$.mint,"600"),ce(r,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,$.muted,"400")}var La=new Map;function Ct(r,e,t="target",n=$.gold,i=1.7){let s=[r,e,t,n].join("|"),o=La.get(s);if(!o){let h=document.createElement("canvas");h.width=1024,h.height=256;let u=h.getContext("2d");u.fillStyle="#0a1b2c",u.fillRect(0,0,1024,256),st(u,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),u.fillStyle=n,u.fillRect(32,36,5,182),Dn(u,t,110,128,88,n),ce(u,r,192,123,58,$.ink,"700",790),ce(u,e,194,186,26,n,"600",775),o=new Ve(h),o.colorSpace=Ne,La.set(s,o)}let a=new be;a.name=r+" \xB7 activity sign";let l=new Te(new ke(i,i/4),new Se({map:o}));a.add(l);let c=new Te(new Me(i+.055,i/4+.055,.04),new Oe({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var Pi;function Os(){if(!Pi){let r=document.createElement("canvas");r.width=512,r.height=1024;let e=r.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let s=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(s,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(s,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=s+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(s,Math.floor((l+n())*341),o,1)}Pi=new Ve(r),Pi.colorSpace=Ne,Pi.anisotropy=4}return new Oe({map:Pi,color:16777215,roughness:.28,metalness:.04})}var vo;function Kn(r=.5,e=.32){if(!vo){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),s=i.createRadialGradient(64,64,4,64,64,64);s.addColorStop(0,"rgba(4,12,20,.48)"),s.addColorStop(.55,"rgba(4,12,20,.2)"),s.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=s,i.fillRect(0,0,128,128),vo=new Ve(n)}let t=new Te(new ke(r,e),new Se({map:vo,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function mn(r=1.4){let e=new be;e.name="Warm arcade light fitting";let t=new Te(new Me(r,.09,.17),new Oe({color:2504518,roughness:.6}));e.add(t);let n=new Te(new ke(r-.1,.115),new Se({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function Da(r){let e=new Ri(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,r.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new _(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new _(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var rt={left:-1.03,right:1.03,front:.08,back:6.95},Ii=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function gn(r,e,t){let n=.033,i=0,s=0;for(let o of t.ramps){let a=r-o.x,l=e-o.z,c=o.w/2,h=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=h)continue;let u=Math.min(.16,c*.3),f=Math.min(1,(c-Math.abs(a))/u),d=1-Math.abs(l)/h,p=o.h*f*d;.033+p>n&&(n=.033+p,i=f<1?-Math.sign(a)*o.h*d/u:0,s=-Math.sign(l||1e-4)*o.h*f/h)}return{height:n,gx:i,gz:s}}function cd(r,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,r.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,r.z)),i=r.x-t,s=r.z-n,o=Math.hypot(i,s);if(o>=.038)return;if(o<1e-9){let l=[[r.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-r.x,1,0],[r.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-r.z,0,1]].sort((c,h)=>c[0]-h[0]);[,i,s]=l[0],r.x+=i*(l[0][0]+.038+1e-4),r.z+=s*(l[0][0]+.038+1e-4)}else i/=o,s/=o,r.x+=i*(.038-o+1e-4),r.z+=s*(.038-o+1e-4);let a=r.vx*i+r.vz*s;a<0&&(r.vx-=1.68*a*i,r.vz-=1.68*a*s)}function hd(r,e,t,n,i,s){let o=i-t,a=s-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((r-t)*o+(e-n)*a)/l)):0;return Math.hypot(r-t-o*c,e-n-a*c)}function Na(r,e,t){if(r.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),s=n/i;for(let o=0;o<i;o++){let a=r.x,l=r.z,c=gn(r.x,r.z,e);r.vx-=7*c.gx*s,r.vz-=7*c.gz*s;let h=Math.hypot(r.vx,r.vz),u=Math.max(0,h-.4*s);h&&(r.vx*=u/h,r.vz*=u/h),r.x+=r.vx*s,r.z+=r.vz*s;for(let[f,d,p,g]of[["x","vx",rt.left+.038,rt.right-.038],["z","vz",rt.front+.038,rt.back-.038]])r[f]<p&&(r[f]=p,r[d]<0&&(r[d]*=-.72)),r[f]>g&&(r[f]=g,r[d]>0&&(r[d]*=-.72));for(let f of[...e.crates,...e.walls||[]])cd(r,f);if(r.distance=(r.distance||0)+Math.hypot(r.x-a,r.z-l),r.y=gn(r.x,r.z,e).height+.038,Math.hypot(r.vx,r.vz)<=1.15&&hd(e.cup.x,e.cup.z,a,l,r.x,r.z)<.115-.038*.6){r.sunk=!0,r.x=e.cup.x,r.z=e.cup.z,r.vx=r.vz=0;break}Math.hypot(r.vx,r.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(r.vx=r.vz=0)}}var zs=r=>{let e=Math.hypot(r.x,r.y,r.z);return e>1e-5?{x:r.x/e,y:r.y/e,z:r.z/e}:null},yo=(r,e,t)=>({x:r.x+(e.x-r.x)*t,y:r.y+(e.y-r.y)*t,z:r.z+(e.z-r.z)*t}),ks=(r,e)=>r.x*e.x+r.y*e.y+r.z*e.z,Ua=(r,e)=>({x:r.y*e.z-r.z*e.y,y:r.z*e.x-r.x*e.z,z:r.x*e.y-r.y*e.x});function Fa(r,e,t,n,i=null){if(n<=0||n>.1)return null;let s=(e.x-r.x)/n,o=(e.y-r.y)/n,a=(e.z-r.z)/n;if(Math.hypot(s,o,a)>8||ks(r.forward,e.forward)<.4)return null;let l=i||{x:s,y:o,z:a};if(Math.hypot(l.x,l.y,l.z)>8)return null;let c=Math.hypot(e.x-r.x,e.y-r.y,e.z-r.z),h=Math.hypot(e.forward.x-r.forward.x,e.forward.y-r.forward.y,e.forward.z-r.forward.z),u=Math.max(1,Math.ceil((c+h*.12)/.008));for(let f=0;f<=u;f++){let d=f/u,p=yo(r,e,d),g=zs(yo(r.forward,e.forward,d)),y=zs(yo(r.side,e.side,d));if(!g||!y)continue;let v=zs(Ua(y,g)),M=v&&zs(Ua(g,v));if(!M)continue;let x={x:t.x-p.x,y:t.y-p.y,z:t.z-p.z},m=ks(x,M),b=ks(x,v),S=ks(x,g);if(Math.hypot(Math.max(0,Math.abs(m)-.104),Math.max(0,Math.abs(b)-.027),Math.max(0,Math.abs(S)-.058))>.038+.01)continue;let A=S>=0?1:-1,I={x:g.x*A,z:g.z*A},C=Math.hypot(I.x,I.z);if(C<.65)continue;I.x/=C,I.z/=C;let N=l.x*I.x+l.z*I.z;if(N<.07)continue;let L=Math.min(3.6,N*.92);return{vx:I.x*L,vz:I.z*L}}return null}var ud=new Ie().setFromAxisAngle(new _(1,0,0),-Math.PI/2);function Ba(r){let e=r.rightGripController,t=e&&e!==r.controller?e:r.controller;if(!t||t.visible===!1)return null;let n=t.getWorldPosition(new _),i=t.getWorldQuaternion(new Ie);return e&&e!==r.controller&&i.multiply(ud),{position:n,quaternion:i,down:new _(0,-1,0).applyQuaternion(i)}}function Oa(r){let e=new be;e.name="Controller putter",r.add(e);let t=new Oe({color:12964307,metalness:.72,roughness:.23}),n=new Oe({color:1518388,roughness:.9}),i=(y,v,M=e)=>{let x=new Te(y,v);return M.add(x),x},s=i(new tt(.008,.009,1,10),t),o=i(new tt(.017,.02,.17,14),n);o.position.y=-.025;for(let y=0;y<5;y++){let v=i(new Ut(.018,.0011,4,12),new Oe({color:5005926,roughness:.8}),o);v.rotation.x=Math.PI/2,v.position.y=-.065+y*.03}let a=new be;a.name="Mallet putter head",e.add(a);let l=new ft;l.moveTo(-.083,-.05),l.lineTo(.083,-.05),l.quadraticCurveTo(.099,-.05,.099,-.03),l.lineTo(.099,.035),l.quadraticCurveTo(.099,.053,.077,.053),l.lineTo(-.077,.053),l.quadraticCurveTo(-.099,.053,-.099,.035),l.lineTo(-.099,-.03),l.quadraticCurveTo(-.099,-.05,-.083,-.05);let c=i(new $t(l,{depth:.041,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:6}),t,a);c.rotation.x=Math.PI/2,c.position.y=.0205;let h=i(new Me(.18,.032,.004),new Oe({color:3432035,roughness:.65}),a);h.position.z=-.055,i(new Me(.085,.003,.073),n,a).position.set(0,.026,.006);for(let y of[-.021,.021])i(new Me(.005,.002,.068),new Se({color:16248017}),a).position.set(y,.028,.004);i(new tt(.012,.014,.046,10),t,a).position.set(-.055,.026,.014);let d=.86;e.visible=!1;function p(y){d=ht.clamp(y,.3,1.6),a.position.set(0,-d,0);let v=new _(-.055,-d+.044,.014);s.position.copy(v).multiplyScalar(.5),s.scale.y=v.length(),s.quaternion.setFromUnitVectors(new _(0,1,0),v.clone().normalize())}p(d);function g(y){e.position.copy(y.position),e.quaternion.copy(y.quaternion),e.updateMatrixWorld(!0);let v=a.getWorldPosition(new _),M=a.getWorldQuaternion(new Ie);return{x:v.x,y:v.y,z:v.z,forward:new _(0,0,-1).applyQuaternion(M),side:new _(1,0,0).applyQuaternion(M),up:new _(0,1,0).applyQuaternion(M)}}return{root:e,head:a,face:h,size:p,update:g,get length(){return d}}}var Qt;function dd(){if(!Qt){let r=document.createElement("canvas");r.width=256,r.height=512;let e=r.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let s=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,s,1,2)}Qt=new Ve(r),Qt.colorSpace=Ne,Qt.wrapS=Qt.wrapT=di,Qt.repeat.set(1/(rt.right-rt.left),1/(rt.back-rt.front)),Qt.offset.set(.5,1.02),Qt.anisotropy=4}return new Oe({map:Qt,roughness:.95})}function za(r,e,t,n){let i=new be;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let s=new be;s.name="Six-hole warehouse course",i.add(s);let o=w=>new Oe({color:w,roughness:.65}),a=(w,B,K,U,re,Ae=s)=>{let j=new Te(w,B);return j.position.set(K,U,re),Ae.add(j),j},l=a(new nt(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=Kn(.16,.16);i.add(c);let h=Oa(i),u=h.root,f=h.head,d=new Se({color:16766588,transparent:!0,opacity:.78,depthWrite:!1,side:it}),p=a(new Zt(.13,.142,40),d,0,0,0,i);p.name="Putter contact guide",p.rotation.x=-Math.PI/2,p.visible=!1;let g=new yt(new Fe().setFromPoints([new _,new _]),new gt({color:8645568,transparent:!0,opacity:.7,depthWrite:!1}));g.name="Putter face direction",g.visible=!1,i.add(g);let y=document.createElement("canvas");y.width=1024,y.height=640;let v=y.getContext("2d"),M=new Ve(y);M.colorSpace=Ne;let x=a(new ke(2.2,1.375),new Se({map:M}),0,0,0,i);x.name="Mini-golf scorecard";let m=null,b=!1,S=0,E=0,A=[],I=null,C=!1,N=!1,L=null,X=!1,T=!1,F=!1,q=0,H="Hold trigger and brush the putter through the ball.",P=null,V=!0,O=[],k=0,ge=new Ie,te=()=>A.reduce((w,B)=>w+B,0),z=Ii.reduce((w,B)=>w+B.par,0),W=()=>Ii[S];try{let w=localStorage.getItem("tfj-mini-golf-best-v1"),B=Number(w);w!==null&&Number.isFinite(B)&&B>=6&&(I=B)}catch{}function ne(){Et(v,1024,640),ce(v,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,$.mint,"700"),ce(v,F?"COURSE COMPLETE":`${S+1} / 6  \xB7  ${W().name.toUpperCase()}`,32,117,42,$.ink,"700",954),ce(v,F?`${te()} strokes  \xB7  Par ${z}`:`${E} strokes  \xB7  Par ${W().par}`,32,190,43,$.gold,"700");for(let w=0;w<6;w++){let B=32+w*161,K=w===S;st(v,B,227,151,177,{top:K?"#26594a":"#183d43",bottom:"#0d2934",stroke:K?$.gold:"#527779"}),ce(v,`HOLE ${w+1}`,B+13,260,24,K?$.gold:$.muted),ce(v,A[w]===void 0?"\u2014":String(A[w]),B+18,334,58,$.ink,"700"),ce(v,`PAR ${Ii[w].par}`,B+13,382,22,$.muted)}ce(v,`TOTAL ${te()+(T?0:E)}  \xB7  BEST ${I??"\u2014"}`,32,459,32,$.mint,"700"),ce(v,H,32,513,26,$.ink,"600",954),ce(v,F?"A  PLAY AGAIN":T?"A  NEXT HOLE":"A  MOVE & FIT CLUB",32,578,27,$.gold,"700"),ce(v,"Y  PAUSE / MENU",684,578,26,$.muted),M.needsUpdate=!0}function fe(){for(let w of[3,2,1.5,4,5,6])for(let B of[-30,-29,-28,-27]){let K=!0;for(let U=-1.1;U<=1.1;U+=.275)for(let re=0;re<=7.8;re+=.25)(r.blocked(w+U,B+re,0)||Math.abs(r.groundAt(w+U,B+re,.1))>.1)&&(K=!1);if(K)return new _(w,0,B)}return null}function ie(){let w=Os();return w.roughness=.78,w}function Z(w){let B=a(new Me(w.w,.25,w.d),ie(),w.x,.155,w.z);B.name="Pallet obstacle";for(let K=0;K<4;K++)a(new Me(w.w/4-.018,.026,w.d+.01),ie(),w.x+(K-1.5)*w.w/4,.293,w.z);for(let K of[-1,1])a(new Me(.025,.18,w.d+.018),o("#8d724d"),w.x+K*(w.w/2-.018),.165,w.z)}function we(w){let U=[],re=[],Ae=[];for(let De=0;De<=20;De++)for(let se=0;se<=12;se++){let Le=w.x-w.w/2+w.w*se/12,Be=w.z-w.d/2+w.d*De/20;U.push(Le,gn(Le,Be,W()).height+.002,Be),re.push(Le,-Be)}for(let De=0;De<20;De++)for(let se=0;se<12;se++){let Le=De*13+se,Be=Le+1,je=Le+12+1,_n=je+1;Ae.push(Le,je,Be,Be,je,_n)}let j=new Fe;j.setAttribute("position",new Ee(U,3)),j.setAttribute("uv",new Ee(re,2)),j.setIndex(Ae),j.computeVertexNormals();let _e=ie();_e.side=it;let Re=new Te(j,_e);Re.name="Loading ramp",s.add(Re)}function ve(){for(let se of[...s.children])se.traverse(Le=>{Le.geometry?.dispose(),Le.material?.dispose()}),s.remove(se);s.position.copy(m);let w=W(),B=new ft;B.moveTo(rt.left,-rt.front),B.lineTo(rt.right,-rt.front),B.lineTo(rt.right,-rt.back),B.lineTo(rt.left,-rt.back),B.closePath();let K=new Pn;K.absarc(w.cup.x,-w.cup.z,.115,0,Math.PI*2,!1),B.holes.push(K),a(new Me(2.2,.027,7),o("#173848"),0,.016,3.51);let U=a(new Jt(B,40),dd(),0,.033,0);U.rotation.x=-Math.PI/2,U.name="Putting green";for(let se of[-1.065,1.065])a(new Me(.07,.14,7),o("#203c4b"),se,.099,3.51),a(new Me(.045,.006,7),new Oe({color:15320952,emissive:11770199,emissiveIntensity:.25}),se,.172,3.51);for(let se of[.045,6.985])a(new Me(2.2,.14,.07),o("#203c4b"),0,.099,se);let re=a(new _i(.115,40),new Se({color:398620}),w.cup.x,.034,w.cup.z);re.rotation.x=-Math.PI/2;let Ae=a(new Zt(.115,.115+.015,40),new Se({color:16768133,side:it}),w.cup.x,.035,w.cup.z);Ae.rotation.x=-Math.PI/2,a(new tt(.009,.009,.68,8),o("#e2e7d7"),w.cup.x,.37,w.cup.z);let j=new Fe;j.setAttribute("position",new Ee([0,0,0,.23,-.035,0,0,-.14,0],3)),j.computeVertexNormals();let _e=a(j,new Se({color:16176260,side:it}),w.cup.x,.7,w.cup.z);_e.name="Hole flag";let Re=a(new Zt(.105,.123,32),new Se({color:16049069,side:it}),w.tee.x,.035,w.tee.z);if(Re.rotation.x=-Math.PI/2,w.crates.forEach(Z),w.ramps.forEach(we),w.pipe){let se=new ft;for(let Be=0;Be<=32;Be++){let je=Math.PI-Be*Math.PI/32,_n=Math.cos(je)*.43,Qn=Math.sin(je)*.43;Be?se.lineTo(_n,Qn):se.moveTo(_n,Qn)}for(let Be=0;Be<=32;Be++){let je=Be*Math.PI/32;se.lineTo(Math.cos(je)*.34,Math.sin(je)*.34)}se.closePath();let Le=a(new $t(se,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);Le.name="Warehouse pipe tunnel"}x.position.copy(m).add(new _(0,2.42,.3)),a(new Me(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let se of[-1.09,1.09])a(new Me(.035,3.55,.035),o("#254252"),se,1.78,.26);let De=Ct("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",$.mint,2.05);De.position.set(0,3.5,.3),s.add(De)}function ae(){return P&&!P.sunk&&Math.hypot(P.vx,P.vz)>.04}function pe(w,B){return!r.blocked(m.x+w,m.z+B,0)&&Math.abs(r.groundAt(m.x+w,m.z+B,.1))<.1&&![...W().crates,...W().walls||[]].some(K=>Math.abs(w-K.x)<K.w/2+.2&&Math.abs(B-K.z)<K.d/2+.2)}function R(){if(!P||ae()||T)return!1;let w=[[-.28,.78],[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[B,K]of w){let U=P.x+B,re=P.z+K;if(pe(U,re)&&r.xrTeleport(m.x+U,0,m.z+re))return r.xrFace?.(0),J(),V=!0,!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function G(){E=0,T=F=!1,q=0,C=N=!1,L=null,O=[],V=!0;let w=W();P={x:w.tee.x,z:w.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,ve(),le(),H="Hold your hand comfortably. A moves and fits your club.",R(),ne()}function Y(){let w=fe();return!w||!r.xrTeleport(w.x,0,w.z+7.03)?!1:(m=w,S=0,A=[],b=i.visible=!0,X=!1,ge.identity(),G(),t("Mini-golf! Hold your controller comfortably and look down the green. A moves and fits the club. Hold trigger to putt."),!0)}function J(){C=N=!1,L=null,O=[],u.visible=p.visible=g.visible=!1}function ee(){b=i.visible=!1,J()}function ue(w){if(T)return;T=!0,J(),A.push(E),q=w?.8:0;let B=W(),K=w?E===1?"Hole in one!":E<B.par?"Under par!":E===B.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(F=S===Ii.length-1,F){let U=te(),re=U<=z?"Gold":U<=z+6?"Silver":"Bronze";I=I===null?U:Math.min(I,U);try{localStorage.setItem("tfj-mini-golf-best-v1",String(I))}catch{}H=`${re} medal! ${U} strokes across six holes.`,t(H)}else H=`${K} ${E} strokes. A for hole ${S+2}.`,t(H);n(w?.7:.2),ne()}function le(){l.position.set(m.x+P.x,m.y+P.y,m.z+P.z),c.position.set(m.x+P.x,m.y+gn(P.x,P.z,W()).height+.003,m.z+P.z)}function me(w){let B=Ba(w);if(!B)return J(),null;if(V){let U=w.forward.clone();U.y=0,U.lengthSq()<.01&&U.set(0,0,-1),U.normalize();let re=new Ie().setFromAxisAngle(new _(0,1,0),Math.atan2(-U.x,-U.z)),Ae=gn(B.position.x-m.x,B.position.z-m.z,W()).height,j=B.position.y-m.y-Ae-.028;if(j<.3||j>1.6)return J(),null;ge.copy(B.quaternion).invert().multiply(re),h.size(j),V=!1,L=null,O=[],H="Club fitted. Mint guide = level face. Hold trigger to putt.",ne()}B.quaternion.multiply(ge);let K=h.update(B);return K.x-=m.x,K.y-=m.y,K.z-=m.z,u.visible=!T,K}function de(w){if(p.visible=!!w&&!ae()&&!T,g.visible=!1,!p.visible)return;p.position.set(m.x+P.x,m.y+gn(P.x,P.z,W()).height+.004,m.z+P.z);let B=Math.hypot(w.x-P.x,w.z-P.z)<.7,K=Math.hypot(w.forward.x,w.forward.z),U=Math.abs(w.y-P.y)<.07&&Math.abs(w.up.y)>.8&&K>.8;if(d.color.set(B&&U?8645568:16766588),h.face.material.color.set(B&&U?8636851:3432035),!B||!U)return;g.visible=!0;let re=w.forward.x/K,Ae=w.forward.z/K,j=g.geometry.attributes.position;for(let _e=0;_e<2;_e++){let Re=_e?.52:.07,De=w.x+re*Re,se=w.z+Ae*Re;j.setXYZ(_e,m.x+De,m.y+gn(De,se,W()).height+.005,m.z+se)}j.needsUpdate=!0,g.geometry.computeBoundingSphere()}function D(w,B){if(!b)return;let K=Math.max(0,Math.min(.1,w.dt)),U=!!w.right?.gamepad?.buttons[0]?.pressed,re=!!w.right?.gamepad?.buttons[4]?.pressed,Ae=re&&!X;if(X=re,k+=K,B){J();return}if(Ae){if(T){F?(S=0,A=[]):S++,G();return}else if(!ae()){R();return}}U?C=!T:(C=!1,N=!0,L=null,O=[]);let j=me(w);if(de(j),U&&N&&!T&&!ae()&&j&&L){for(O.push({time:k,p:j});O.length>2&&k-O[1].time>.045;)O.shift();let _e=O[0],Re=k-_e.time,De=Re>0?{x:(j.x-_e.p.x)/Re,y:(j.y-_e.p.y)/Re,z:(j.z-_e.p.z)/Re}:null,se=Fa(L,j,P,K,De);se&&(P.vx=se.vx,P.vz=se.vz,E++,N=!1,n(.3),H=`Putt ${E} \xB7 wait for the ball to stop.`,ne())}if(L=U&&j?j:null,U&&j&&!O.length&&O.push({time:k,p:j}),!T){let _e=P.x,Re=P.z;Na(P,W(),K);let De=P.x-_e,se=P.z-Re,Le=Math.hypot(De,se);Le&&l.rotateOnWorldAxis(new _(se,0,-De).normalize(),Le/.038),le(),P.sunk?ue(!0):!ae()&&E>=8?ue(!1):!ae()&&H.startsWith("Putt")&&(H="Ball stopped. A moves beside it and refits your club.",ne())}q>0&&(q=Math.max(0,q-K),l.position.y=m.y+.033+.038-(.8-q)*.2,l.scale.setScalar(Math.max(.12,q/.8)),c.visible=!1,q||(l.visible=!1))}return{root:i,course:s,putter:u,head:f,board:x,ball:l,ballGuide:p,aimLine:g,start:Y,stop:ee,cancel:J,tick:D,moveBesideBall:R,get clubLength(){return h.length},get active(){return b},get origin(){return m},get held(){return C},get state(){return P},get hole(){return S},get strokes(){return E},get scores(){return A},get total(){return te()},get holeReady(){return T},get complete(){return F},get best(){return I},get layout(){return W()}}}function fd(r,e,t,n=.48){if(r.z<=t.z||e.z>t.z)return!1;let i=(r.z-t.z)/(r.z-e.z);return Math.hypot(r.x+(e.x-r.x)*i-t.x,r.y+(e.y-r.y)*i-t.y)<n}function pd(r,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let s=-.25-1.1/Math.max(.5,i);return n.y+=(s-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:r.clone().addScaledVector(n,t),v:n}}function ka(r,e,t,n){let i=new be;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let s=new be;i.add(s);let o=te=>new Oe({color:te,roughness:.7,side:it}),a=new Fe;a.setAttribute("position",new Ee([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new Te(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new yt(new Fe().setFromPoints([new _(0,0,-.28),new _(0,.056,.1)]),new gt({color:7576243}));l.add(c);let h=r.colliders.map(te=>new Ke(new _(te.min.x,te.min.y,te.min.z),new _(te.max.x,te.max.y,te.max.z)).expandByScalar(.06)),u=document.createElement("canvas");u.width=1024,u.height=640;let f=u.getContext("2d"),d=new Ve(u);d.colorSpace=Ne;let p=new Te(new ke(1.6,1),new Se({map:d}));p.name="Paper-plane scoreboard",i.add(p);let g=!1,y=!1,v=null,M=null,x=[],m=[],b=0,S=!1,E=!1,A=!1,I=0,C=0,N=0,L=0,X="Five planes. Aim through the hoops!";try{N=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function T(){Et(f,1024,640),ce(f,"PAPER-PLANE CHALLENGE",35,68,44,$.gold),ce(f,`${C} points`,35,190,72),ce(f,`BEST ${N}`,660,180,35,$.mint),ce(f,`${I} / 5 planes`,35,280,44),ce(f,`Longest glide: ${L.toFixed(1)} m`,35,349,32,$.mint),ce(f,X,35,428,29,$.ink,"600",950),ce(f,I===5&&!v?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),ce(f,"10 points per hoop \xB7 Y: pause/menu",35,590,27,$.muted),d.needsUpdate=!0}function F(){for(let te of[3,2,1.5,4,5])for(let z of[-30,-29,-28]){let W=!0;for(let ne=-1;ne<=1;ne+=.5)for(let fe=0;fe<=7.8;fe+=.4)(r.blocked(te+ne,z+fe,0)||Math.abs(r.groundAt(te+ne,z+fe,.1))>.1)&&(W=!1);if(W)return new _(te,0,z)}return null}function q(){for(let W of[...s.children])W.traverse(ne=>{ne.geometry?.dispose(),ne.material?.dispose()}),s.remove(W);x=[];for(let W=0;W<3;W++){let ne=M.clone().add(new _(0,1.5-W*.22,5-W*1.8)),fe=new Te(new Ut(.6,.035,12,48),o(W===0?"#f6d484":W===1?"#8fe1c3":"#8bc8f3"));fe.position.copy(ne),s.add(fe),x.push({center:ne,mesh:fe});let ie=new Te(new tt(.018,.018,ne.y,8),o("#36576a"));ie.position.set(ne.x-.64,ne.y/2,ne.z),s.add(ie)}p.position.copy(M).add(new _(0,2.3,-.5));let te=Ct("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);te.position.copy(M).add(new _(0,3.18,-.5)),s.add(te);for(let W of[2,5]){let ne=mn(1.3);ne.position.copy(M).add(new _(0,4.2,W)),s.add(ne)}let z=new Te(new Me(2,.02,.045),o("#f6d484"));z.position.copy(M).add(new _(0,.02,6.7)),s.add(z)}function H(){I=C=L=0,v=null,y=!1,m=[],l.visible=!1,X="Five planes. Aim through the hoops!",x.forEach(te=>te.mesh.material.emissive?.set(0)),T()}function P(){let te=F();return!te||!r.xrTeleport(te.x,0,te.z+7.4)?!1:(M=te,q(),g=i.visible=!0,r.xrFace?.(0),S=!1,E=!0,H(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function V(){g=i.visible=y=l.visible=!1,v=null,m=[],S=!1}function O(){y=!1,m=[],S=!1,E=!0,v||(l.visible=!1)}function k(te){if(v){if(L=Math.max(L,v.distance),X=`${te} \xB7 ${v.hits.size} hoops \xB7 ${v.distance.toFixed(1)} m`,v=null,I===5){N=Math.max(N,C);try{localStorage.setItem("tfj-planes-best-v1",String(N))}catch{}t(`Paper planes complete! ${C} points. A to replay.`)}T()}}function ge(te,z){if(!g)return;let{dt:W,right:ne,controller:fe}=te;b+=W;let ie=!!ne?.gamepad?.buttons[0]?.pressed,Z=!!ne?.gamepad?.buttons[4]?.pressed;if(z){O();return}ie||(S=!0),Z&&!A&&I===5&&!v&&H(),A=Z;let we=fe&&fe.visible!==!1?fe.getWorldPosition(new _):null;if(we&&ie&&!E&&S&&!v&&I<5){let ve=r.stats();Math.abs(ve.x-M.x)>1.2||ve.z<M.z+6.7||ve.z>M.z+8.2||ve.y>.15?t("Return behind the paper-plane launch line."):(y=!0,m=[],l.visible=!0)}if(y){if(!we)O();else if(l.position.copy(we),l.quaternion.copy(fe.getWorldQuaternion(new Ie)),m.push({time:b,p:we.clone()}),m=m.filter(ve=>b-ve.time<.14),!ie&&E){let ve=m.find(pe=>b-pe.time>=.04),ae=ve?we.clone().sub(ve.p).divideScalar(b-ve.time).clampLength(0,10):new _;y=!1,ae.length()<.8||ae.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(I++,v={p:we.clone(),v:ae,start:we.clone(),distance:0,age:0,hits:new Set},x.forEach(pe=>pe.mesh.material.emissive?.set(0)),X="In flight\u2026",T())}}if(v){let ve=Math.max(1,Math.ceil(W/.012)),ae=W/ve;for(let pe=0;pe<ve&&v;pe++){let R=v,G=pd(R.p,R.v,ae),Y=G.p.clone().sub(R.p),J=Y.length(),ee=new Qe(R.p,Y.normalize()),ue=new _,le=!1;for(let me of h)if(me.containsPoint(R.p)||ee.intersectBox(me,ue)&&ue.distanceTo(R.p)<=J){le=!0;break}if(le){k("Hit scenery");break}for(let me=0;me<x.length;me++)!R.hits.has(me)&&fd(R.p,G.p,x[me].center)&&(R.hits.add(me),C+=10,x[me].mesh.material.emissive.set("#3ca58b"),n(.45),T());R.p.copy(G.p),R.v.copy(G.v),R.age+=ae,R.distance=Math.max(R.distance,Math.hypot(R.p.x-R.start.x,R.p.z-R.start.z)),l.position.copy(R.p),l.quaternion.setFromUnitVectors(new _(0,0,-1),R.v.clone().normalize()),l.rotateZ(Math.sin(R.age*3)*.04),R.p.y<.07?(l.position.y=.07,l.rotation.x=0,k("Landed")):(R.age>10||R.distance>20)&&k("Glide complete")}}E=ie}return{root:i,start:P,stop:V,cancel:O,tick:ge,get held(){return y},get flight(){return v},get origin(){return M},get rings(){return x},get throws(){return I},get score(){return C},get longest(){return L}}}function Va(r,e){let t=new be;t.name="Bowling supporters",e.add(t);let n=[],i=0,s=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(g){t.visible=!0,i=0,s=0;for(let v of n)v.group.visible=!1,v.shadow&&(v.shadow.visible=!1);let y=[];for(let v of[5.2,3.8,6])for(let M of[-1.9,1.9,-2.4,2.4]){if(y.length===4)break;let x=g.clone().add(new _(M,0,v));r.blocked(x.x,x.z,0)||Math.abs(r.groundAt(x.x,x.z,.1))>.1||y.some(m=>m.distanceTo(x)<1)||y.push(x)}for(let v=0;v<y.length;v++){if(!n[v]){let m=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][v]});m.group.name=`Bowling supporter ${v+1}`,m.group.scale.setScalar(.91+v*.025),m.bones=Object.fromEntries(l.map(b=>[b,m.model.getObjectByName(b)])),m.rest=Object.fromEntries(l.map(b=>[b,m.bones[b]?.quaternion.clone()])),m.shadow=Kn(.9,.6),t.add(m.shadow,m.group),n.push(m)}let M=n[v];M.group.visible=!0,M.group.position.copy(y[v]),M.base=y[v].clone(),M.shadow.visible=!0,M.shadow.position.copy(y[v]).add(new _(0,.012,0));let x=r.stats();M.group.rotation.y=Math.atan2(x.x-y[v].x,x.z-y[v].z),M.gesture="idle",M.target=new _(x.x,x.y+1.6,x.z),M.mixer.setTime(v*.73)}}function h(g=!1){i=g?3.6:2.2,o=g,a=!1}function u(){i=1.8,o=!1,a=!0}function f(g,y,v){let M=g.bones[y];if(!M)return;let x=M.parent.getWorldQuaternion(new Ie),m=M.getWorldQuaternion(new Ie),b=new _(0,1,0).applyQuaternion(m),S=new _(...v).normalize().applyQuaternion(g.group.getWorldQuaternion(new Ie));M.quaternion.copy(x.invert().multiply(new Ie().setFromUnitVectors(b,S).multiply(m))),g.model.updateMatrixWorld(!0)}function d(g,y,v={}){if(y||!t.visible)return;s+=g,i=Math.max(0,i-g);let M=r.stats();n.forEach((x,m)=>{if(!x.group.visible)return;let b=s+m*1.4,S=(o?3.6:a?1.8:2.2)-i,E=i>0&&S>=m*.11,A=!v.ball&&!v.held&&!i&&Math.sin(b*.43)>.85,I=n[(m+1)%n.length],C=v.ball||v.eye||new _(M.x,M.y+1.6,M.z);A&&I?.group.visible&&(C=I.base.clone().add(new _(0,1.5,0))),E&&(C=v.eye||new _(M.x,M.y+1.6,M.z)),x.target.copy(C);let N=Math.atan2(C.x-x.base.x,C.z-x.base.z);x.group.rotation.y+=Math.atan2(Math.sin(N-x.group.rotation.y),Math.cos(N-x.group.rotation.y))*Math.min(1,g*2.8);let L=E?a?"wave":["clap","arms-up","fist-pump","wave"][m%4]:v.held?"anticipate":A?"chat":"idle";x.gesture=L;for(let T of l)x.bones[T]&&x.bones[T].quaternion.copy(x.rest[T]);if(x.animate(g,L==="wave"?"wave":"idle"),x.group.position.set(x.base.x,x.base.y+(E?Math.max(0,Math.sin(b*7))*(o?.11:.055):0),x.base.z),x.group.rotation.z=Math.sin(b*1.2)*.012,x.shadow.material.opacity=1-(x.group.position.y-x.base.y)*3,x.model.updateMatrixWorld(!0),L==="clap"){let T=Math.sin(b*13)*.25;f(x,"UpperArmL",[-.25,-.3,.65]),f(x,"UpperArmR",[.25,-.3,.65]),f(x,"LowerArmL",[.4+T,.35,.4]),f(x,"LowerArmR",[-.4-T,.35,.4])}if(L==="arms-up"&&(f(x,"UpperArmL",[-.65,.9,0]),f(x,"UpperArmR",[.65,.9,0]),f(x,"LowerArmL",[.15,1,.12]),f(x,"LowerArmR",[-.15,1,.12])),L==="fist-pump"){let T=.65+Math.sin(b*9)*.3;f(x,"UpperArmR",[.5,T,.3]),f(x,"LowerArmR",[-.2,1,.2])}L==="anticipate"&&(f(x,"UpperArmL",[-.2,-.6,.35]),f(x,"UpperArmR",[.2,-.6,.35]),f(x,"LowerArmL",[.3,.1,.6]),f(x,"LowerArmR",[-.3,.1,.6]));let X=x.bones.Head;if(X){let T=C.x-x.base.x,F=C.z-x.base.z,q=Math.atan2(Math.sin(N-x.group.rotation.y),Math.cos(N-x.group.rotation.y)),H=Math.atan2(C.y-(x.base.y+1.6),Math.hypot(T,F));X.rotateY(ht.clamp(q,-.65,.65)),X.rotateX(-ht.clamp(H,-.4,.3)+Math.sin(b*(A?3:1.1))*.035)}x.bones.Chest&&x.bones.Chest.rotateX(v.held?.065:Math.sin(b*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:h,encourage:u,tick:d,stop:p,get cheering(){return i>0},get people(){return n.filter(g=>g.group.visible)}}}function Ga(r,e,t,n,i=()=>{}){let s=new be;s.name="Warehouse bowling",s.visible=!1,e.add(s);let o=Va(r,s),a=D=>new Oe({color:D,roughness:.55}),l=(D,w,B,K,U,re=s)=>{let Ae=new Te(D,w);return Ae.position.set(B,K,U),re.add(Ae),Ae},c=new be;s.add(c);let h=null,u=[],f=!1,d=!1,p=null,g=[],y=0,v=!1,M=!1,x=!1,m=0,b=0,S=[],E=Array.from({length:10},()=>[]),A=0,I=0,C=0,N=!1;try{C=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let L=l(new nt(.14,24,20),a("#5147b5"),0,.17,0);for(let[D,w,B]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new nt(.023,8,8),a("#12162d"),D,w,B,L);L.visible=!1;let X=document.createElement("canvas");X.width=1536,X.height=1024;let T=X.getContext("2d"),F=new Ve(X);F.colorSpace=Ne;let q=l(new ke(3.2,3.2*2/3),new Se({map:F}),0,2,0);q.name="Warehouse bowling scoreboard";let H=()=>S.reduce((D,w)=>D+w,0)+A,P=new be;P.name="Bowling scoring computer",s.add(P);let V=l(new ke(.96,.64),new Se({map:F}),0,0,.046,P);V.name="Bowling computer screen",l(new Me(1.02,.7,.08),a("#101a26"),0,0,0,P);let O=120,k=new Float32Array(O*3),ge=new Float32Array(O*3),te=[],z=new Fe;z.setAttribute("position",new At(k,3)),z.setAttribute("color",new At(ge,3));let W=new Yn({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Zr}),ne=new xi(z,W);ne.name="Strike fireworks",ne.visible=!1,ne.frustumCulled=!1,s.add(ne);let fe=0,ie=0;function Z(){i(!0),o.cheer(!0),ie++,fe=2.6,ne.visible=!0,W.opacity=1;for(let D=0;D<O;D++){let w=D%3,B=D*2.39996,K=.65+D%11*.08,U=Math.sqrt(1-(D%17/8-1)**2);k.set([h.x+(w-1)*.65,1.35+w*.22,h.z+1.2],D*3),te[D]=new _(Math.cos(B)*U*K,.7+Math.abs(Math.sin(B))*1.2,Math.sin(B)*U*K);let re=new ze([16765286,7401417,16745144,9026559][D%4]);ge.set([re.r,re.g,re.b],D*3)}z.attributes.position.needsUpdate=!0,z.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function we(D){if(!(fe<=0)){fe=Math.max(0,fe-D),ne.visible=fe>0,W.opacity=Math.min(1,fe/.9);for(let w=0;w<O;w++){let B=te[w];B.y-=1.5*D,k[w*3]+=B.x*D,k[w*3+1]+=B.y*D,k[w*3+2]+=B.z*D}z.attributes.position.needsUpdate=!0}}function ve(){Et(T,1536,1024),ce(T,"TFJ BOWL  /  LANE 01",48,72,38,$.blue,"700"),ce(T,"WAREHOUSE BOWLING",48,143,61,$.ink,"700"),st(T,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:$.mint,radius:22}),ce(T,"TOTAL PINS",1120,86,34,$.mint),ce(T,String(H()),1120,237,125,$.ink,"700"),ce(T,"/ 100",1320,233,42,$.muted),ce(T,m===10?"ROUND COMPLETE":`FRAME ${m+1}  \u2022  BOWL ${b+1}`,48,230,51,$.gold,"700");let D=0;for(let w=0;w<10;w++){let B=48+w%5*288,K=290+Math.floor(w/5)*244,U=w===m&&m<10,re=E[w],Ae=re.length>0;st(T,B,K,272,225,{top:U?"#225568":"#142e43",bottom:"#0b2032",stroke:U?$.gold:"#55758c",radius:14}),ce(T,String(w+1),B+18,K+45,37,U?$.gold:$.muted,"700");let j=re[0]===10?"X":re[0]===0?"\u2013":re[0]??"",_e=re.length>1?re[0]+re[1]===10?"/":re[1]===0?"\u2013":re[1]:"";T.strokeStyle="#5c7b90",T.lineWidth=2,T.strokeRect(B+78,K+8,89,77),T.strokeRect(B+167,K+8,97,77),ce(T,String(j),B+96,K+67,53,$.ink,"700"),ce(T,String(_e),B+190,K+67,53,$.ink,"700"),D+=w<S.length?S[w]:w===m?A:0,ce(T,Ae?String(D):"\u2014",B+30,K+189,89,U?$.gold:$.ink,"700")}ce(T,`PERSONAL BEST  ${C} / 100`,48,837,38,$.mint,"700"),ce(T,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,$.muted,"600"),ce(T,m===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,$.gold,"700"),ce(T,"Y  MENU",1270,957,34,$.ink,"700"),F.needsUpdate=!0}function ae(){for(let D of[3,2,1.5,4,5,6])for(let w of[-30,-29,-28,-27]){let B=!0;for(let K=-1.1;K<=1.1;K+=.55)for(let U=0;U<=7.8;U+=.3)(r.blocked(D+K,w+U,0)||Math.abs(r.groundAt(D+K,w+U,.1))>.1)&&(B=!1);if(B)return new _(D,0,w)}return null}function pe(){for(let U of[...c.children])U.traverse(re=>{re.geometry?.dispose(),re.material&&re.material.dispose()}),c.remove(U);c.position.copy(h),u=[],l(new Me(2.1,.025,7.3),Os(),0,.018,3.25,c);for(let U=-4;U<=4;U++)l(new Me(.009,.003,7.3),a("#9c805f"),U*.22,.032,3.25,c);for(let U of[-1.15,1.15])l(new Me(.15,.05,7.3),a("#223747"),U,.02,3.25,c);for(let U of[-1.045,1.045]){let re=l(new Me(.028,.025,7.3),new Oe({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),U,.045,3.25,c);re.name="Illuminated bowling edge"}let D=Ct("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",$.gold,2.8);D.position.set(0,4.38,2.5),c.add(D);for(let U of[1,4.8]){let re=mn(1.8);re.position.set(0,4.8,U),c.add(re)}l(new Me(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new Me(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let U of[-.5,0,.5]){let re=l(new Rn(.065,.16,3),a("#30485a"),U,.04,4.7,c);re.rotation.x=-Math.PI/2}let w=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([U,re])=>new oe(U,re)),B=0;for(let U=0;U<4;U++)for(let re=0;re<=U;re++){let Ae=Kn(.29,.27);Ae.position.set((re-U/2)*.3,.034,1.1-U*.29),c.add(Ae);let j=new be;j.position.set((re-U/2)*.3,.248,1.1-U*.29),c.add(j),l(new Ei(w,20),a("#f8f6ea"),0,-.215,0,j),l(new tt(.035,.039,.045,16),a("#dc4459"),0,.07,0,j),u.push({mesh:j,start:j.position.clone(),v:new _,spin:new _,shadow:Ae,down:!1,id:B++})}q.position.copy(h).add(new _(0,2.95,2.5)),l(new Me(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let U of[-1.62,1.62])l(new Me(.06,3.92,.06),a("#223747"),U,1.96,2.42,c);let K=[-1.4,1.4].find(U=>!r.blocked(h.x+U,h.z+7.1,0))??-1.2;P.position.copy(h).add(new _(K,1.27,7.1)),P.lookAt(h.clone().add(new _(0,1.68,7.5))),l(new Me(.16,1.12,.16),a("#223747"),K,.56,7.1,c),l(new Me(.65,.06,.48),a("#101a26"),K,.03,7.1,c)}function R(){for(let D of u)D.mesh.position.copy(D.start),D.mesh.rotation.set(0,0,0),D.mesh.visible=!0,D.shadow.visible=!0,D.shadow.position.set(D.start.x,.034,D.start.z),D.shadow.material.opacity=1,D.down=!1,D.v.set(0,0,0),D.spin.set(0,0,0)}function G(){fe=0,ne.visible=!1,m=b=A=0,S=[],E=Array.from({length:10},()=>[]),p=null,I=0,d=!1,L.visible=!1,R(),ve()}function Y(){let D=ae();return!D||!r.xrTeleport(D.x,0,D.z+7.4)?!1:(h=D,pe(),o.setup(h),f=s.visible=!0,r.xrFace?.(0),G(),M=!1,v=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function J(){o.stop(),fe=0,ne.visible=!1,f=s.visible=d=L.visible=!1,p=null,I=0,g=[],M=!1}function ee(){d=!1,g=[],M=!1,v=!0,p||(L.visible=!1)}function ue(D,w){N||(N=!0,o.cheer(!1));let B=w.length();D.down=!0,D.v.add(w).clampLength(0,7),D.v.y=Math.max(D.v.y,Math.min(3.4,.7+B*.42)),D.spin.add(new _(w.z*2.8,(D.id%2?1:-1)*B*.8,-w.x*2.8)).clampLength(0,18)}function le(D){let w=new _,B=new _,K=new Ie;for(let U of u)if(U.down&&U.mesh.visible){U.v.y-=9.81*D,U.mesh.position.addScaledVector(U.v,D);let re=U.spin.length();re>.001&&(B.copy(U.spin).divideScalar(re),K.setFromAxisAngle(B,re*D),U.mesh.quaternion.premultiply(K).normalize()),w.set(0,1,0).applyQuaternion(U.mesh.quaternion);let Ae=.033+.08+.135*Math.abs(w.y);U.mesh.position.y<Ae?(U.mesh.position.y=Ae,U.v.y=U.v.y<-.65?-U.v.y*.32:0,U.v.x*=Math.exp(-4*D),U.v.z*=Math.exp(-4*D),U.spin.multiplyScalar(Math.exp(-5*D))):U.spin.multiplyScalar(Math.exp(-.3*D));for(let[j,_e,Re]of[["x",-1.02,1.02],["z",-.35,2.2]])(U.mesh.position[j]<_e||U.mesh.position[j]>Re)&&(U.mesh.position[j]=ht.clamp(U.mesh.position[j],_e,Re),U.v[j]*=-.38)}for(let U=0;U<u.length;U++)for(let re=U+1;re<u.length;re++){let Ae=u[U],j=u[re];if(!Ae.mesh.visible||!j.mesh.visible||!Ae.down&&!j.down)continue;let _e=j.mesh.position.clone().sub(Ae.mesh.position),Re=_e.length();if(Re>=.29||Re<.001)continue;let De=_e.divideScalar(Re),se=Ae.v.clone().sub(j.v).dot(De);if(se>.18){let Be=De.clone().multiplyScalar(se*.7);j.down?j.v.add(Be):ue(j,Be),Ae.down?Ae.v.sub(Be):ue(Ae,Be.clone().negate()),Ae.spin.x+=De.z*se,j.spin.z-=De.x*se}let Le=.29-Re;Ae.down&&Ae.mesh.position.addScaledVector(De,-Le*.5),j.down&&j.mesh.position.addScaledVector(De,Le*.5)}}function me(){p=null,L.visible=!1;let D=u.filter(B=>B.down).length,w=D-A;if(D===10&&b===0&&Z(),E[m].push(w),A=D,b++,w===0&&o.encourage(),w>0&&!(D===10&&b===1)&&(o.cheer(D===10),i(D===10)),n(D===10?.8:.25),D===10||b===2){let B=D===10?b===1?"Strike!":"Spare!":`${D} pins.`;if(S.push(D),m++,b=A=0,t(m===10?`Bowling complete! ${H()} / 100 pins.`:`${B} Next frame.`),m===10){C=Math.max(C,H());try{localStorage.setItem("tfj-bowling-best-10-v1",String(C))}catch{}}else R()}else{for(let B of u)B.down&&(B.mesh.visible=!1,B.shadow.visible=!1);t(`${w} pins! One more bowl this frame.`)}ve()}function de(D,w){if(!f)return;let{dt:B,right:K,controller:U}=D;y+=B,o.tick(B,w,{eye:D.eye,held:d,ball:p?L.position:null});let re=!!K?.gamepad?.buttons[0]?.pressed,Ae=!!K?.gamepad?.buttons[4]?.pressed;if(w){ee();return}we(B),re||(M=!0),Ae&&!x&&m===10&&G(),x=Ae;let j=U&&U.visible!==!1?U.getWorldPosition(new _):null;if(re&&!v&&M&&!p&&!I&&m<10&&j){let _e=r.stats();Math.abs(_e.x-h.x)>1.1||_e.z<h.z+6.7||_e.z>h.z+8.2||_e.y>.15?t("Return behind the yellow bowling line."):(d=!0,g=[],L.visible=!0)}if(d){if(!j)ee();else if(L.position.copy(j),g.push({time:y,p:j.clone()}),g=g.filter(_e=>y-_e.time<.14),!re&&v){let _e=g.find(De=>y-De.time>=.04),Re=_e?j.clone().sub(_e.p).divideScalar(y-_e.time).clampLength(0,10):new _;d=!1,Re.length()<.6||Re.z>-.25?(L.visible=!1,t("Swing towards the pins before releasing.")):(N=!1,p={p:j.clone().sub(h),v:Re,age:0,gutter:!1})}}if(p||I){let _e=Math.max(1,Math.ceil(B/.008)),Re=B/_e;for(let De=0;De<_e;De++){if(p){let se=p;se.age+=Re,se.v.y-=9.81*Re,se.p.addScaledVector(se.v,Re),se.p.y<.174&&(se.p.y=.174,se.v.y=Math.abs(se.v.y)>.8?Math.abs(se.v.y)*.18:0,se.v.x*=Math.exp(-.25*Re),se.v.z*=Math.exp(-.25*Re)),Math.abs(se.p.x)>1&&(se.gutter=!0,se.p.x=Math.sign(se.p.x)*1.15,se.v.x=0),L.position.copy(se.p).add(h),L.rotation.x+=se.v.z*Re/.14;for(let Le of u)if(!Le.down&&!se.gutter&&se.p.y<.6){let Be=Le.mesh.position.x-se.p.x,je=Le.mesh.position.z-se.p.z;Math.hypot(Be,je)<.23&&(ue(Le,new _(se.v.x,0,se.v.z).multiplyScalar(.65)),se.v.x*=.8,se.v.z*=.84)}(se.p.z<-.6||se.age>7||Math.hypot(se.v.x,se.v.z)<.15)&&(p=null,I=2.6)}le(Re);for(let se of u)se.shadow.position.x=se.mesh.position.x,se.shadow.position.z=se.mesh.position.z,se.shadow.material.opacity=ht.clamp(1-(se.mesh.position.y-.25),.15,1);if(I&&(I=Math.max(0,I-Re),!I)){me();break}}}v=re}return{root:s,crowd:o,fireworks:ne,get celebrations(){return ie},start:Y,stop:J,cancel:ee,tick:de,get held(){return d},get flight(){return p},get pins(){return u},get origin(){return h},get frame(){return m},get roll(){return b},get total(){return H()},get totals(){return S},get frameRolls(){return E}}}function md(r,e,t,n=.34){if(r.y<=t.y||e.y>t.y)return!1;let i=(r.y-t.y)/(r.y-e.y);return Math.hypot(r.x+(e.x-r.x)*i-t.x,r.z+(e.z-r.z)*i-t.z)<n}function Ha(r,e,t,n,i){let s=r.colliders.map(Z=>new Ke(new _(Z.min.x,Z.min.y,Z.min.z),new _(Z.max.x,Z.max.y,Z.max.z))),o=new be;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=Z=>new Oe({color:Z,roughness:.6}),l=(Z,we,ve,ae=o)=>{let pe=new Te(Z,we);return pe.position.copy(ve),ae.add(pe),pe},c=new _,h=null,u=!1,f=!1,d=!1,p=null,g=[],y=0,v=!1,M=!1,x=0,m=0,b=0,S=0,E=!1;try{b=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let A=r.mollie.balls[0].ball.clone();A.scale.setScalar(.48),A.visible=!1,e.add(A);let I=l(new nt(.065,16,12),a("#ee528c"),new _,e);I.visible=!1,l(new nt(.03,8,6),a("#6ac68d"),new _(0,.06,0),I).scale.set(1,.4,1.7);let N=new ft;N.moveTo(0,.02),N.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),N.bezierCurveTo(.23,-.03,.16,.18,0,.02);let L=new Te(new Jt(N),new Se({color:16742315,side:it,transparent:!0}));L.visible=!1,e.add(L);let X=0,T=0,F=0,q=document.createElement("canvas");q.width=768,q.height=384;let H=q.getContext("2d"),P=new Ve(q);P.colorSpace=Ne;let V=l(new ke(1.5,.75),new Se({map:P}),new _);function O(){Et(H,768,384),ce(H,"POK\xC9 BALL BASKETBALL",30,62,38,$.gold),ce(H,`${m} baskets \xB7 ${x}/10 throws`,30,139,46),ce(H,`Best: ${b} baskets`,30,204,32,$.mint),ce(H,x>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),ce(H,"Y: games menu \xB7 B: leave",30,337,25,$.muted),P.needsUpdate=!0}function k(){for(let[Z,we]of[[-4,8],[5,9],[-8,8],[12,8]]){let ve=!0;for(let ae=-1.5;ae<=1.5;ae+=.5)for(let pe=-2;pe<=2;pe+=.5)(r.blocked(Z+ae,we+pe,0)||Math.abs(r.groundAt(Z+ae,we+pe,.1))>.1)&&(ve=!1);if(ve)return new _(Z,0,we)}return null}function ge(Z){if(c.set(Z.x,2.35,Z.z-1.5),V.position.set(Z.x+1.35,2,Z.z-1.75),o.children.length>1)for(let R of[...o.children])R!==V&&(o.remove(R),R.traverse(G=>{G.geometry?.dispose(),G.material?.dispose()}));let we=Ct("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);we.position.set(Z.x,3.7,Z.z-1.93),o.add(we);let ve=mn(1.1);ve.position.set(Z.x,4.1,Z.z-1.5),o.add(ve),l(new Me(.12,4.15,.12),a("#173d56"),new _(Z.x,2.075,Z.z-2)),l(new Me(.08,.08,.55),a("#173d56"),new _(Z.x,4.1,Z.z-1.75)),l(new Me(1.5,.95,.07),a("#e4f1f2"),new _(Z.x,2.65,Z.z-1.93));let ae=l(new Ut(.42,.025,10,48),a("#f5ab44"),c);ae.rotation.x=Math.PI/2;for(let R=0;R<12;R++){let G=R/12*Math.PI*2,Y=new _(c.x+Math.cos(G)*.41,c.y,c.z+Math.sin(G)*.41),J=new _(c.x+Math.cos(G+.2)*.23,c.y-.48,c.z+Math.sin(G+.2)*.23),ee=new yt(new Fe().setFromPoints([Y,J]),new gt({color:16777215}));o.add(ee)}l(new Me(.06,2.4,.06),a("#173d56"),new _(Z.x+1.35,1.2,Z.z-1.78)),l(new Me(1.56,.81,.045),a("#122538"),new _(Z.x+1.35,2,Z.z-1.78));let pe=l(new Me(2,.015,.04),a("#f6d484"),new _(Z.x,.012,Z.z+1.45))}function te(Z){if(z(),Z==="friend")return f=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let we=k();return!we||!r.xrTeleport(we.x,0,we.z+1.9)?!1:(h=we,ge(we),r.xrFace?.(0),u=o.visible=!0,x=m=0,O(),!0)}function z(){u=f=d=!1,o.visible=A.visible=I.visible=L.visible=!1,p=null,g=[],M=!1,v=!1,X=0}function W(){d=!1,A.visible=I.visible=!1,g=[],M=!1,v=!0}function ne(){if(p=null,A.visible=!1,x===10){b=Math.max(b,m);try{localStorage.setItem("tfj-basket-best",String(b))}catch{}n(`Basketball complete! ${m} baskets from 10 throws.`)}O()}function fe(Z,we){t.react(we),X=1.5,L.visible=!0,S=2,i(.6),n(Z)}function ie(Z,we){let{dt:ve,eye:ae,controller:pe,right:R,leftController:G}=Z;y+=ve,S=Math.max(0,S-ve);let Y=!!R?.gamepad?.buttons[0]?.pressed,J=!!R?.gamepad?.buttons[4]?.pressed;if(we){W(),L.visible=!1;return}Y||(M=!0);let ee=pe?.visible!==!1&&pe?pe.getWorldPosition(new _):null;if(f){if(t.group.updateMatrixWorld(!0),I.visible=!!ee&&Y&&M,I.visible){I.position.copy(ee);let le=t.group.localToWorld(new _(0,.43,.4));!S&&I.position.distanceTo(le)<.22&&(T++,fe(`Yum! Jigglypuff loved berry ${T}.`,"feed"),M=!1,I.visible=!1)}t.group.updateMatrixWorld(!0);let ue=t.group.localToWorld(new _(.46,.58,.03));for(let le of[pe,G])if(le&&le.visible!==!1&&!Y&&!S&&le.getWorldPosition(new _).distanceTo(ue)<.24){F++,fe(`High-five! ${F} happy high-fives.`,"five");break}}else I.visible=!1;if(X>0?(X-=ve,L.visible=!0,L.position.copy(t.group.position).add(new _(0,1.3+(1.5-X)*.22,0)),L.lookAt(ae),L.material.opacity=Math.min(1,X*2)):L.visible=!1,!u){v=Y;return}if(J&&!E&&x===10&&!p&&(x=m=0,O()),E=J,ee&&Y&&!v&&M&&!p&&x<10&&(d=!0,g=[],A.visible=!0),d){if(!ee)W();else if(A.position.copy(ee),g.push({time:y,p:ee.clone()}),g=g.filter(ue=>y-ue.time<.14),!Y&&v){let ue=g.find(me=>y-me.time>=.04),le=ue?ee.clone().sub(ue.p).divideScalar(y-ue.time).clampLength(0,12):new _;d=!1,le.length()<.6?(A.visible=!1,n("Swing your hand upwards, then release.")):(x++,p={p:ee.clone(),v:le,age:0,scored:!1},O())}}if(p){let ue=Math.max(1,Math.ceil(ve/.008)),le=ve/ue;for(let me=0;me<ue&&p;me++){let de=p,D=de.p.clone().addScaledVector(de.v,le);D.y-=4.9*le*le,de.v.y-=9.8*le;let w=D.clone().sub(de.p),B=w.length(),K=new Qe(de.p,w.normalize()),U=new _;if(s.some(j=>!j.containsPoint(de.p)&&K.intersectBox(j,U)&&U.distanceTo(de.p)<=B)){ne();break}!de.scored&&md(de.p,D,c)&&(de.scored=!0,m++,i(.8),O());let re=c.z-.4;(de.p.z-re)*(D.z-re)<0&&Math.abs(D.x-c.x)<.8&&D.y>2.17&&D.y<3.15&&(D.z=re+Math.sign(de.p.z-re)*.1,de.v.z*=-.65);let Ae=Math.hypot(D.x-c.x,D.z-c.z);Math.abs(D.y-c.y)<.1&&Ae>.33&&Ae<.53&&(de.v.x+=(D.x-c.x)*3,de.v.z+=(D.z-c.z)*3,de.v.y=Math.abs(de.v.y)*.45,D.y=c.y+.11),de.p.copy(D),de.age+=le,A.position.copy(D),A.rotation.x+=le*5,(D.y<.09||de.age>5)&&ne()}}v=Y}return{root:o,start:te,stop:z,cancel:W,tick:ie,get origin(){return h},get held(){return d},get shots(){return x},get score(){return m},get flight(){return p},get feeds(){return T},get fives(){return F},get berry(){return I},get hoop(){return c}}}function Wa(r,e,t){let n=new be;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new be;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let s=document.createElement("canvas");s.width=1024,s.height=256;let o=s.getContext("2d"),a=new Ve(s);a.colorSpace=Ne;let l=new Te(new ke(1.75,.4375),new Se({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=Ct("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let h=r.colliders.map(T=>new Ke(new _(T.min.x,T.min.y,T.min.z),new _(T.max.x,T.max.y,T.max.z))),u=[],f=[],d=[],p=[],g=new Set,y=0,v=0,M=!1,x=!1,m=[],b=null;function S(){Et(o,1024,256),ce(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,$.gold,"700"),ce(o,`${g.size/2} / ${f.length/2} pairs  \xB7  ${y} turns`,28,101,38,$.ink,"700"),ce(o,g.size===f.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,$.mint,"500"),ce(o,x?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,$.muted,"400"),a.needsUpdate=!0}function E(){for(let T of u)T.geometry.dispose(),T.material.dispose();u=[];for(let T of d)for(let F of T.material)F.userData.memoryOwned&&F.dispose();i.clear(),d=[],b=null}function A(){E();let T=[...r.mollie.found];x=T.length<2,x&&(T=[0,1,2,3]);for(let q=T.length-1;q>0;q--){let H=Math.floor(Math.random()*(q+1));[T[q],T[H]]=[T[H],T[q]]}T=T.slice(0,6),f=[...T,...T];for(let q=f.length-1;q>0;q--){let H=Math.floor(Math.random()*(q+1));[f[q],f[H]]=[f[H],f[q]]}p=[],g.clear(),y=v=0;let F=Math.ceil(f.length/4);d=f.map((q,H)=>{let P=r.mollie.cards[q].clone();P.userData={index:H},P.material=P.material.map(O=>{let k=new Se(O.map?{map:O.map}:{color:15258527});return k.userData.memoryOwned=!0,k}),P.position.set((H%4-1.5)*.43,((F-1)/2-Math.floor(H/4))*.39,.012),P.rotation.set(0,Math.PI,0),P.scale.setScalar(.34/.62),P.visible=!0;let V=new Te(new ke(.268,.36),new Se({color:2508378}));return V.position.copy(P.position),V.position.z=.003,u.push(V),i.add(V,P),P}),m=d.map(()=>Math.PI),S()}function I(){return r.xrTeleport(-21.8,0,-10.78)?(r.xrFace?.(0),M=n.visible=!0,A(),!0):!1}function C(){M=n.visible=!1,p=[],v=0}function N(T){return!M||v||!Number.isInteger(T)||T<0||T>=f.length||g.has(T)||p.includes(T)||g.size===f.length?!1:(p.push(T),m[T]=0,t(.18),p.length===2&&(y++,v=.85),S(),!0)}function L(T,F=!1){if(M){for(let q=0;q<d.length;q++)d[q].rotation.y=ht.damp(d[q].rotation.y,m[q],16,T);if(!F&&v&&(v=Math.max(0,v-T),!v)){let[q,H]=p;f[q]===f[H]?(g.add(q),g.add(H),u[q].material.color.set(9429443),u[H].material.color.set(9429443),t(.55)):m[q]=m[H]=Math.PI,p=[],S()}}}function X(T){if(b!==null&&u[b]&&u[b].material.color.set(g.has(b)?9429443:2508378),b=null,!M||!T)return null;n.updateMatrixWorld(!0);let F=new Kt(T.position,T.direction,0,3.8).intersectObjects(d)[0];if(!F)return null;let q=new Qe(T.position,T.direction),H=new _;for(let V of h)if(q.intersectBox(V,H)&&H.distanceTo(T.position)<F.distance-.025)return null;let P=F.object.userData.index;return b=P,g.has(P)||u[P].material.color.set(16176260),{point:F.point,action:()=>N(P)}}return{root:n,start:I,stop:C,reset:A,tick:L,point:X,select:N,get deck(){return f},get cards(){return d},get moves(){return y},get matched(){return g},get waiting(){return v},get active(){return M},get complete(){return M&&g.size===f.length},get practice(){return x}}}function Ws(){let r=new be;r.name="Jigglypuff \xB7 3D";let e=x=>new Oe({color:x,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),s=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(x,m,b,S=r)=>{let E=new Te(x,m);return E.name=b,E.castShadow=E.receiveShadow=!0,S.add(E),E},c=(x,m,b,S,E,A,I,C,N=r)=>{let L=l(new nt(1,32,24),I,C,N);return L.position.set(x,m,b),L.scale.set(S,E,A),L};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let x of[-1,1]){let m=new be;m.position.set(x*.27,.86,-.005),m.rotation.z=-x*.21,r.add(m);let b=new ft;b.moveTo(-.135,0),b.quadraticCurveTo(-.115,.16,-.025,.34),b.quadraticCurveTo(0,.39,.025,.34),b.quadraticCurveTo(.12,.13,.135,0),b.quadraticCurveTo(0,-.07,-.135,0);let S=l(new $t(b,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",m);S.position.z=-.04;let E=new ft;E.moveTo(-.085,.025),E.quadraticCurveTo(-.06,.16,0,.29),E.quadraticCurveTo(.06,.16,.085,.025),E.quadraticCurveTo(0,-.005,-.085,.025);let A=l(new Jt(E,16),i,"Dark inner ear",m);A.position.z=.047,c(x*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let h=[];for(let x of[-1,1]){let m=new be;m.position.set(x*.172,.625,.347),m.rotation.y=x*.24,r.add(m),h.push(m),c(0,0,0,.123,.153,.053,s,"Eye white",m),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",m),c(0,-.003,.063,.042,.079,.01,a,"Pupil",m),c(-.025,.045,.077,.024,.033,.007,s,"Eye sparkle",m),c(.022,-.045,.075,.011,.015,.005,s,"Small sparkle",m)}((x,m,b,S)=>l(new Jn(new un(x.map(E=>new _(...E))),40,m,8,!1),b,S))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let f=[];for(let x=0;x<=36;x++){let m=x/36,b=Math.PI-m*Math.PI*2,S=.126*(1-.88*m);f.push(new _(.018+Math.cos(b)*S,.961+Math.sin(b)*S,.295+.035*m))}let d=new Jn(new un(f),72,.042,12,!1),p=d.attributes.position,g=new un(f);for(let x=0;x<=72;x++){let m=g.getPointAt(x/72),b=1-.66*(x/72)**2;for(let S=0;S<=12;S++){let E=x*13+S,A=new _().fromBufferAttribute(p,E).sub(m).multiplyScalar(b).add(m);p.setXYZ(E,A.x,A.y,A.z)}}d.computeVertexNormals(),l(d,n,"Curled fringe");let y=[];for(let x of[-1,1]){let m=new be;m.position.set(x*.37,.48,.015),m.rotation.z=x*.6,r.add(m),c(x*.075,0,0,.14,.075,.075,t,"Little arm",m),y.push(m)}let v=0;function M(x,m=!1){v+=x,r.position.y=Math.max(0,Math.sin(v*2.5))*.028;let b=v%4.4>4.2?.09:1;h.forEach(S=>S.scale.y=b),y[1].rotation.z=.6+(m?Math.sin(v*4)*.25:Math.sin(v*2)*.04)}return{group:r,animate:M}}function Xa(r,e){let t=Ws(),n=new be;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,s=.52,o=[],a=null,l=!0,c=0,h=null,u=0,f=0,d="",p=(M,x)=>Math.hypot(M.x-x.x,M.z-x.z);function g(M,x){let m=new _(-x.z,0,x.x);for(let[b,S]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let E=M.x+x.x*b+m.x*S,A=M.z+x.z*b+m.z*S,I=r.groundAt(E,A,M.y+.2);if(Math.abs(I-M.y)<.35&&!r.blocked(E,A,I))return n.position.set(E,I,A),o=[],a=new _(M.x,M.y,M.z),c=0,h=null,u=.15,!0}return!1}function y(M,x,m,b=!1){M=Math.min(M,.05);let S=r.stats(),E=new _(S.x,S.y,S.z);if(m){n.visible=!1,l=!0,h=null;return}let A=new _(x.x,0,x.z).normalize();if(A.lengthSq()<.01&&A.set(0,0,-1),l||n.position.distanceTo(E)>8||a&&a.distanceTo(E)>3||p(n.position,E)<.9){if(!g(S,A)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(E)>.18)&&(o.push(E.clone()),a=E.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let I=b?1.05:i;u=Math.max(0,u-M);let C=p(n.position,E);if(!h&&u===0){let T=null,F=0;if(C<I?(T=n.position.clone().sub(E),T.y=0,T.normalize(),F=Math.min(.8,I+.2-C)):C>I+.35&&(o.length||b)&&(T=(b?E:o[0]).clone().sub(n.position),T.y=0,F=Math.min(.8,T.length(),C-I),T.normalize()),T&&F>.04){let q=n.position.clone(),H=q.clone().addScaledVector(T,F),P=!0,V=q.y;for(let O=1;O<=8;O++){let k=q.clone().lerp(H,O/8),ge=r.groundAt(k.x,k.z,V+.22);if(Math.abs(ge-V)>.35||r.blocked(k.x,k.z,ge)||p(k,E)<Math.min(I,C)-.01){P=!1;break}V=ge}H.y=V,P?(h={from:q,to:H,time:0},c=0):(c+=M,c>2.5&&g(S,A))}else c=0}let N=0,L=0;if(h){h.time+=M;let T=Math.min(1,h.time/s),F=h.from.clone().lerp(h.to,T),q=p(n.position,E);p(F,E)>=Math.min(I,q)-.001&&!r.blocked(F.x,F.z,F.y)&&n.position.copy(F),N=Math.sin(Math.PI*T)*.3,L=Math.sin(Math.PI*T)*.08,T===1&&(h=null,u=.14)}else u>0&&(L=-Math.sin(Math.PI*Math.min(1,u/.14))*.1);let X=Math.atan2(S.x-n.position.x,S.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(X-n.rotation.y),Math.cos(X-n.rotation.y))*Math.min(1,M*5),t.animate(M,C<3),t.group.position.y=N,t.group.scale.set(1-L*.5,1+L,1-L*.5),f>0){f=Math.max(0,f-M);let T=Math.abs(Math.sin(f*9));t.group.position.y+=T*(d==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(f*20)*.06}}function v(){l=!0,n.visible=!1,o=[],a=null,h=null}return{group:n,tick:y,summon:v,radius:i,react(M){f=1.3,d=M},get hopping(){return!!h},get trail(){return o},get hidden(){return l}}}function qa(r,e,t){let n=new be;n.name="Mollie\u2019s VR book",r.add(n),n.visible=!1;let i=new be;n.add(i);let s=[],o=-1,a=null,l=!1,c=1,h=null,u=null,f=null,d=null,p=new Ie,g=new Se({color:16446169}),y=new Se({color:1455692}),v=new Se({color:13944999}),M=new Se({color:15386989});function x(P,V,O,k,ge,te,z=0){let W=new Te(new Me(P,V,O),k);return W.position.set(ge,te,z),i.add(W),W}function m(P,V,O,k,ge,te=44,z=null,W="#17364b",ne=null){let fe=document.createElement("canvas");fe.width=1024,fe.height=Math.round(1024*O/V);let ie=fe.getContext("2d"),Z;function we(pe=!1){if(ie.clearRect(0,0,fe.width,fe.height),z){let R=z==="#eac96d";st(ie,4,4,1016,fe.height-8,{top:R?"#ffe8ac":pe?"#365e76":"#24475f",bottom:R?"#d9b66c":"#142e43",stroke:pe?"#ffe09a":R?"#fff0c7":"#597b91",radius:Math.min(28,fe.height/5)})}ie.textAlign="center",ie.textBaseline="middle",ie.fillStyle=z==="#eac96d"?"#17364b":pe?$.gold:W,ie.font=`bold ${te}px Arial`,P.forEach((R,G)=>ie.fillText(R,512,fe.height*(G+1)/(P.length+1),944)),Z&&(Z.needsUpdate=!0)}we(),Z=new Ve(fe),Z.colorSpace=Ne;let ve=new Se({map:Z,transparent:!0,side:it}),ae=new Te(new ke(V,O),ve);return ae.position.set(k,ge,.06),i.add(ae),ne&&(ae.userData.action=ne,ae.userData.paint=we,s.push(ae)),ae}function b(){let P=document.createElement("canvas");P.width=P.height=256;let V=P.getContext("2d");V.fillStyle="#203f53",V.beginPath(),V.arc(128,128,112,0,Math.PI*2),V.fill(),V.strokeStyle="#b99b5c",V.lineWidth=3,V.stroke(),Dn(V,"ball",128,128,185,$.gold);let O=new Ve(P);O.colorSpace=Ne;let k=new Te(new ke(.2,.2),new Se({map:O,transparent:!0}));k.position.set(.02,.015,.061),i.add(k)}function S(){i.traverse(P=>{P.userData.borrowed||(P.geometry&&P.geometry.dispose(),P.material&&!Array.isArray(P.material)&&![g,y,v,M].includes(P.material)&&(P.material.map?.dispose(),P.material.dispose()))}),i.clear(),s.length=0,u=null}function E(P,V,O,k,ge){let te=e.mollie.cards[P].clone();return te.userData={borrowed:!0},te.material=te.material.map(z=>{if(!z.map)return z;let W=new Se({map:z.map});return W.userData.albumOwned=!0,W}),te.position.set(V,O,.085),te.scale.setScalar(k/.62),te.rotation.set(0,0,0),te.visible=!0,ge&&(te.userData.action=ge,s.push(te)),i.add(te),te}function A(){i.traverse(P=>{if(P.userData.borrowed)for(let V of P.material)V.userData.albumOwned&&V.dispose()}),S()}function I(){if(A(),d=null,n.position.z=a!==null?.38:0,a!==null){m([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),u=E(a,-.28,0,1.05*c),u.rotation.y=l?Math.PI:0,p.copy(u.quaternion),m(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new _(0,1,0),l?Math.PI:0)}),m(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>C(.12)),m(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>C(-.12)),m(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",X),m(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){x(1.04,1.33,.06,y,0,0),x(.038,1.29,.07,M,-.47,0,.025),m(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),m([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),b(),m(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>N(0)),m(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}x(2.1,1.37,.055,y,0,0,-.02),x(2.02,1.3,.045,v,0,0,.005),x(.98,1.26,.018,g,-.502,0,.036),x(.98,1.26,.018,g,.502,0,.036),x(.025,1.29,.02,v,0,0,.055);for(let P of[-1,1]){let V=o*2+(P===1?1:0),O=P*.5;m([e.mollie.found.has(V)?e.xrGames.names[V]:`Mystery card ${V+1}`],.88,.12,O,.53,56),e.mollie.found.has(V)?E(V,O,-.005,.8,()=>L(V)):(x(.58,.8,.006,new Se({color:14476515}),O,-.005,.062),m(["?"],.5,.6,O,-.005,300,null,"#89a2ab")),m([`${V+1} / 18`],.7,.09,O,-.54,52)}m(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>N(o-1)),m([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),m(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>N(Math.min(8,o+1))),m(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),m(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function C(P){c=ht.clamp(c+P,.72,1.12),u.scale.setScalar(1.05*c/.62)}function N(P){if(h||P===o)return;P=ht.clamp(P,-1,8);let V=new be;V.name="Turning album page",n.add(V);let O=new Te(new Me(.99,1.27,.012),g);if(O.position.x=P>o?.495:-.495,O.userData.pageTurnOwned=!0,V.add(O),o>=0){for(let k of i.children)if(k.position.z>.045&&Math.abs(k.position.y)<.64&&(P>o?k.position.x>.05:k.position.x<-.05)){let ge=k.clone();ge.userData={},V.add(ge)}}V.position.z=.16,h={leaf:V,next:P,elapsed:0,direction:P>o?-1:1}}function L(P){return e.mollie.found.has(P)?(a=P,l=!1,c=1,f=null,I(),!0):!1}function X(){a!==null?(a=null,f=null,I()):t()}function T(){o=-1,a=null,n.visible=!0,I()}function F(){h&&(h.leaf.traverse(P=>{P.userData.pageTurnOwned&&P.geometry?.dispose()}),n.remove(h.leaf),h=null),f=null,n.visible=!1}function q(P){var k;if(!P||h)return null;n.updateMatrixWorld(!0);let V=new Kt(P.position,P.direction,0,5).intersectObjects(s)[0],O=V?.object||null;return O!==d&&(d&&(d.userData.paint?.(!1),d.userData.restScale&&d.scale.copy(d.userData.restScale)),d=O,d&&(d.userData.paint?.(!0),(k=d.userData).restScale??(k.restScale=d.scale.clone()),d.scale.copy(d.userData.restScale).multiplyScalar(1.025))),V?{point:V.point,action:V.object.userData.action}:null}function H(P,V,O){if(h){h.elapsed+=P;let k=Math.min(1,h.elapsed/.48);h.leaf.rotation.y=h.direction*Math.PI*(k*k*(3-2*k)),k>=1&&(n.remove(h.leaf),h.leaf.traverse(ge=>{ge.userData.pageTurnOwned&&ge.geometry?.dispose()}),o=h.next,h=null,I())}if(u)if(V&&O){f||(f={hand:O.clone().invert(),start:u.quaternion.clone()});let k=O.clone().multiply(f.hand),ge=i.getWorldQuaternion(new Ie);u.quaternion.copy(ge.clone().invert().multiply(k).multiply(ge).multiply(f.start))}else f?(f=null,p.copy(u.quaternion)):u.quaternion.slerp(p,1-Math.exp(-10*P))}return{root:n,open:T,close:F,point:q,tick:H,back:X,inspect:L,change:N,get page(){return o},get inspected(){return a},get card(){return u},get turning(){return!!h}}}var ot={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},gd=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function xd(r,e){let t=Math.hypot(r,e)*384/ot.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(r,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=gd[Math.floor(n/(Math.PI/10))],s=t>=268?2:t>=163&&t<=184?3:1;return{score:i*s,label:`${s===3?"Triple ":s===2?"Double ":""}${i} \xB7 ${i*s}`}}function _d(r){let e=r.at(-1);if(!e)return new _;let t=r.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new _}function vd(r,e,t){let n=r.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function yd(r,e){if(r.x<=ot.x||e.x>ot.x)return null;let t=(ot.x-r.x)/(e.x-r.x),n=r.clone().lerp(e,t);return Math.hypot(n.y-ot.y,n.z-ot.z)<=.47?{point:n,...xd(-(n.z-ot.z),n.y-ot.y)}:null}function Ya(r,e,t){let n=new be;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new Oe({color:12044498,metalness:.75,roughness:.28}),s=new Oe({color:2112336,roughness:.45}),o=new Oe({color:16764759,side:it,roughness:.8}),a=[];function l(z,W){return a.push(z),new Te(z,W)}function c(){let z=new be;z.name="3D dart";let W=l(new Rn(.004,.035,8),i);W.rotation.x=-Math.PI/2,W.position.z=.0175,z.add(W);let ne=l(new tt(.006,.007,.045,10),i);ne.rotation.x=Math.PI/2,ne.position.z=.0575,z.add(ne);for(let ie=0;ie<5;ie++){let Z=l(new Ut(.007,8e-4,4,10),s);Z.position.z=.043+ie*.007,z.add(Z)}let fe=l(new tt(.003,.003,.06,8),s);fe.rotation.x=Math.PI/2,fe.position.z=.11,z.add(fe);for(let ie=0;ie<2;ie++){let Z=l(new Me(.044,.001,.05),o);Z.rotation.z=ie*Math.PI/2,Z.position.z=.15,z.add(Z)}return z}let h=c();n.add(h),h.visible=!1;let u=document.createElement("canvas");u.width=1024,u.height=640;let f=u.getContext("2d"),d=new Ve(u);d.colorSpace=Ne;let p=new Te(new ke(.95,.594),new Se({map:d}));p.name="Wall-mounted darts scoreboard",p.position.set(ot.x+.05,1.8,ot.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let g=new Te(new Me(1.01,.654,.035),new Oe({color:1517105,roughness:.7}));g.name="Darts scoreboard frame",g.position.copy(p.position),g.position.x-=.022,g.rotation.copy(p.rotation),n.add(g);let y=Ct("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);y.position.set(ot.x+.065,2.43,ot.z),y.rotation.y=Math.PI/2,n.add(y);let v=mn(.9);v.position.set(ot.x+.55,2.75,ot.z),n.add(v);let M=r.colliders.map(z=>new Ke(new _(z.min.x,z.min.y,z.min.z),new _(z.max.x,z.max.y,z.max.z))),x=!1,m=!1,b=null,S=[],E=0,A=!1,I=!1,C=!1,N=0,L=0,X="Hold trigger, throw, release.",T=0,F=[];try{T=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function q(){Ia(f,{total:N,throws:L,best:T,last:X}),d.needsUpdate=!0}function H(z=!1){m=!1,S=[],h.visible=!1,b&&!z&&(n.remove(b.mesh),b=null),A=!0,I=!1}function P(){H();for(let z of F)n.remove(z);F=[],L=N=0,X="Nine darts. Make them count!",q()}function V(){let W=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([ne,fe])=>!r.blocked(ne,fe,0));return!W||!r.xrTeleport(W[0],0,W[1])?!1:(r.xrFace?.(Math.PI/2),n.visible=x=!0,P(),!0)}function O(){H(),x=!1,n.visible=!1}function k(z,W){let ne=b;if(ne){if(ne.mesh.position.copy(W),F.push(ne.mesh),b=null,L++,N+=z.score,X=z.label,t(z.score>0?.6:.12),L===9&&N>T){T=N;try{localStorage.setItem("tfj-vr-darts-best-v1",String(T))}catch{}}q()}}function ge(z,W){let ne=h.clone();ne.visible=!0,ne.position.copy(z),ne.quaternion.setFromUnitVectors(new _(0,0,-1),W.clone().normalize()),n.add(ne),b={mesh:ne,position:z.clone(),velocity:W.clone(),age:0},h.visible=!1,m=!1,S=[]}function te(z,W,ne,fe,ie=!1){if(E+=z,!!x){if(ie){m&&H();return}if(ne||(I=!0),fe&&!C&&L===9&&P(),C=fe,W&&ne&&!A&&I&&!b&&L<9){let Z=r.stats();Z.x<ot.ocheX-.04||Z.x>ot.ocheX+1.6||Math.abs(Z.z-ot.z)>1||Z.y>.15?(X="Stand behind the yellow line.",q()):(m=!0,S=[],h.visible=!0,t(.12))}if(m&&W&&(h.position.copy(W.position).addScaledVector(W.direction,.07),h.quaternion.setFromUnitVectors(new _(0,0,-1),W.direction),S.push({time:E,position:W.position.clone()}),S=S.filter(Z=>E-Z.time<.15),!ne&&A)){let Z=_d(S);Z.length()<.6?(m=!1,h.visible=!1,X="Swing your hand before releasing.",q()):ge(h.position,Z)}if(m&&!W&&H(),A=ne,b){let Z=Math.max(1,Math.ceil(z/.004166666666666667)),we=z/Z;for(let ve=0;ve<Z&&b;ve++){let ae=b,pe=vd(ae.position,ae.velocity,we),R=yd(ae.position,pe.position),G=pe.position.clone().sub(ae.position),Y=G.length(),J=new Qe(ae.position,G.clone().normalize()),ee=new _,ue=null,le=Y+1e-8;for(let me of M){if(me.containsPoint(ae.position)){ue=ae.position.clone(),le=0;break}if(J.intersectBox(me,ee)){let de=ee.distanceTo(ae.position);de<=le&&(le=de,ue=ee.clone())}}if(R&&(!ue||R.point.distanceTo(ae.position)<=le)){k(R,R.point);break}if(ue){k({score:0,label:"Miss \xB7 hit scenery"},ue);break}if(pe.position.y<=.025){let me=ht.clamp((ae.position.y-.025)/(ae.position.y-pe.position.y),0,1),de=ae.position.clone().lerp(pe.position,me);ae.mesh.quaternion.setFromUnitVectors(new _(0,0,-1),new _(ae.velocity.x,0,ae.velocity.z).normalize()),k({score:0,label:"Miss \xB7 floor"},de);break}if(ae.position.copy(pe.position),ae.velocity.copy(pe.velocity),ae.mesh.position.copy(ae.position),ae.mesh.quaternion.slerp(new Ie().setFromUnitVectors(new _(0,0,-1),ae.velocity.clone().normalize()),1-Math.exp(-18*we)),ae.age+=we,ae.age>4){k({score:0,label:"Miss"},ae.position);break}}}}}return{root:n,start:V,stop:O,cancel:H,reset:P,update:te,launch:ge,get active(){return x},get held(){return m},get flight(){return b},get total(){return N},get throws(){return L},get last(){return X},get resting(){return F}}}function $a(r,e,t,n,i=.35){let s=e.clone().sub(r),o=s.length();if(o<1e-7)return null;let a=new Qe(r,s.multiplyScalar(1/o)),l=new _,c=o+1e-6,h=null;for(let u of t){let f=u.clone().expandByScalar(.045);if(f.containsPoint(r))return{type:"wall",point:r.clone(),distance:0};if(a.intersectBox(f,l)){let d=l.distanceTo(r);d<=c&&(c=d,h={type:"wall",point:l.clone(),distance:d})}}for(let u of n)if(a.intersectSphere(new Ot(u.position,i),l)){let f=l.distanceTo(r);f<c&&(c=f,h={type:"target",id:u.id,point:l.clone(),distance:f})}return h}function Md(r,e){let t=r.at(-1),n=r.find(s=>t.time-s.time<=.12&&t.time-s.time>=.045),i=new _;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new _(0,1.3,0)),i.clampLength(0,9)}function Za(r){let e=r.worldScene,t=new be;t.name="VR games",t.visible=!1,e.add(t);let n=Da(t),i=new be;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let Q of[...r.mollie.balls.map(xe=>xe.ball),...r.mollie.cards,r.mollie.thrownBall])Q?.isObject3D&&i.attach(Q);let s=r.colliders.map(Q=>new Ke(new _(Q.min.x,Q.min.y,Q.min.z),new _(Q.max.x,Q.max.y,Q.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new Ve(o);l.colorSpace=Ne;let c=new be;t.add(c);let h=new Te(new ke(1.6,1.2),new Se({map:l,side:it}));c.add(h),c.visible=!1;let u=new Te(new Me(1.64,1.24,.035),new Se({color:3561833}));u.position.z=-.025,c.add(u);let f=new be;c.add(f);let d=new yt(new Fe().setFromPoints([new _,new _(0,0,-1)]),new gt({color:16769946}));d.visible=!1,t.add(d);let p=new Te(new nt(.012,8,6),new Se({color:16769946}));p.visible=!1,t.add(p);let g=r.mollie.balls[0].ball.clone();g.scale.setScalar(.43),g.visible=!1,t.add(g);let y=Ws();y.group.visible=!1,t.add(y.group);let v=document.createElement("canvas");v.width=768,v.height=192;let M=v.getContext("2d"),x=new Ve(v);x.colorSpace=Ne;let m=new Te(new ke(.95,.2375),new Se({map:x,transparent:!0,depthTest:!1,depthWrite:!1}));m.name="Adventure notification",m.renderOrder=1e3,t.add(m),m.visible=!1;let b="explore",S="menu",E=[],A=null,I=null,C=0,N=!1,L=null,X=!1,T=null,F=[],q=0,H=!1,P=!1,V=!1,O=!0,k=[],ge=0,te=0,z="Welcome, Mollie!",W="",ne=0,fe=!1,ie=null,Z=0,we=0;try{we=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let ve=(Q,xe=.3)=>{try{Q?.gamepad?.hapticActuators?.[0]?.pulse(xe,70)?.catch?.(()=>{})}catch{}},ae=qa(c,r,()=>{S="menu",ae.close(),h.visible=u.visible=!0,O=!0,_e()}),pe=Ya(r,t,Q=>ve(L?.right,Q)),R=Wa(r,t,Q=>ve(L?.right,Q)),G=Xa(r,t),Y=ka(r,t,Rt,Q=>ve(L?.right,Q)),J=za(r,t,Rt,Q=>ve(L?.right,Q)),ee=0,ue=!0;try{ue=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function le(Q){ue=!!Q;try{localStorage.setItem("tfj-companion-enabled",String(ue))}catch{}ue?G.summon():(b==="friend"&&je(),G.group.visible=!1),_e()}let me=Ga(r,t,Rt,Q=>ve(L?.right,Q),U),de=Ha(r,t,G,Rt,Q=>ve(L?.right,Q)),D=!1;function w(){if(b==="jigglypuff"){z="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",se();return}G.summon(),Le()}function B(){Be(),S="album",h.visible=u.visible=!1,f.clear(),ae.open(),O=!0}function K(){try{ie??(ie=new(window.AudioContext||window.webkitAudioContext)),ie.resume()?.catch(()=>{})}catch{}}function U(Q){if(!(!ie||ie.state!=="running"))try{let xe=Math.floor(ie.sampleRate*.07),Ge=ie.createBuffer(1,xe,ie.sampleRate),$e=Ge.getChannelData(0);for(let ye=0;ye<xe;ye++)$e[ye]=(Math.random()*2-1)*Math.exp(-ye/xe*5);for(let ye=0;ye<(Q?12:7);ye++){let at=ie.createBufferSource(),Ye=ie.createGain(),kt=ie.createBiquadFilter();at.buffer=Ge,kt.type="highpass",kt.frequency.value=650,Ye.gain.value=.055+ye%3*.012,at.connect(kt),kt.connect(Ye),Ye.connect(ie.destination),at.start(ie.currentTime+ye*.095+ye%2*.025),at.onended=()=>{at.disconnect(),kt.disconnect(),Ye.disconnect()}}}catch{}}function re(){if(!ie||ie.state!=="running")return;let Q=y.group.position;try{let xe=ie.createPanner();xe.panningModel="HRTF",xe.distanceModel="inverse",xe.refDistance=2,xe.maxDistance=25,xe.positionX.value=Q.x,xe.positionY.value=Q.y+.6,xe.positionZ.value=Q.z,xe.connect(ie.destination),[523.25,659.25,587.33].forEach((Ge,$e)=>{let ye=ie.createOscillator(),at=ie.createGain(),Ye=ie.currentTime+$e*.18;ye.type="sine",ye.frequency.value=Ge,at.gain.setValueAtTime(0,Ye),at.gain.linearRampToValueAtTime(.09,Ye+.025),at.gain.exponentialRampToValueAtTime(.001,Ye+.17),ye.connect(at),at.connect(xe),ye.start(Ye),ye.stop(Ye+.18),ye.onended=()=>{ye.disconnect(),at.disconnect()}}),setTimeout(()=>xe.disconnect(),1200)}catch{}}function Ae(Q,xe,Ge,$e=32,ye="#fff"){a.font=`${$e>=40?"bold ":""}${$e}px Arial`,a.fillStyle=ye,a.fillText(Q,xe,Ge)}function j(Q,xe,Ge,$e,ye){E.push({label:Q,x:xe,y:Ge,w:$e,h:72,action:ye}),Ea(a,Q,xe,Ge,$e,A===Q)}function _e(){S!=="album"&&(E=[],Ca(a,So()),ee===0?(j("Pok\xE9mon throwing hunt",44,196,455,()=>Nt("hunt")),j("Jigglypuff hide-and-seek",519,196,461,()=>Nt("jigglypuff")),j("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>Nt("darts")),j("Memory match \xB7 staff-room table",519,280,461,()=>Nt("memory")),j(`Open the card album \xB7 ${r.mollie.found.size} / 18`,44,364,455,B),j("Play with Jigglypuff",519,364,461,()=>Nt("friend")),j("Pok\xE9 Ball basketball",44,448,455,()=>Nt("basketball")),j("Warehouse bowling",519,448,461,()=>Nt("bowling"))):(j("Paper-plane challenge",44,196,936,()=>Nt("planes")),j("Warehouse mini-golf",44,280,936,()=>Nt("golf")),j("Back to exploring",44,364,936,()=>{je(),Le()}),j(ue?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>le(!ue))),j("Resume",44,548,445,Le),j(ee===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{ee=1-ee,_e()}),Ra(a),l.needsUpdate=!0)}function Re(){f.clear()}function De(){if(!L){fe=!0;return}fe=!1;let Q=L.forward.clone();Q.y=0,Q.normalize(),c.position.copy(L.eye).addScaledVector(Q,1.9),c.position.y=Math.max(L.eye.y-.1,r.stats().y+.85),c.rotation.set(0,Math.atan2(-Q.x,-Q.z),0)}function se(){ee=0,ne=0,m.visible=!1,Be(),ae.close(),h.visible=u.visible=!0,S="menu",Re(),c.visible=!0,O=!0,A=null,De(),_e()}function Le(){ae.close(),S="menu",h.visible=u.visible=!0,c.visible=!1,d.visible=p.visible=!1,O=!0,A=null}function Be(Q=!1){J.cancel(),Y.cancel(),me.cancel(),de.cancel(),pe.cancel(Q),X=!1,T=null,F=[],g.visible=!1}function je(){n.update("explore",null),i.visible=!0,J.stop(),Y.stop(),me.stop(),de.stop(),ne=0,m.visible=!1,R.stop(),pe.stop(),b="explore",y.group.visible=!1,te=0,Be(),z="Choose an adventure whenever you like."}function _n(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([xe,Ge,$e])=>{for(let[ye,at]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let Ye=new _(xe+ye,0,Ge+at);if(!r.blocked(Ye.x,Ye.z,0)&&r.groundAt(Ye.x,Ye.z,.1)===0&&r.mollie.balls.every(kt=>kt.ball.position.distanceTo(Ye)>1.3))return[{point:Ye,clue:$e}]}return[]})}function Qn(){y.group.position.copy(k[ge].point),y.group.visible=!0,Z=q+1,z=`Try ${k[ge].clue}.`,Rt(z)}function Nt(Q){if(je(),b=Q,b==="golf"){if(!J.start()){b="explore",z="No clear warehouse green available.",_e();return}i.visible=!1,Le();return}if(b==="friend"&&!ue&&le(!0),b==="planes"){if(!Y.start()){b="explore",z="The plane course is blocked. Try again.",_e();return}Le();return}if(b==="bowling"){if(!me.start()){b="explore",z="The warehouse lane is blocked. Try again.",_e();return}i.visible=!1,Le();return}if(b==="friend"||b==="basketball"){if(!de.start(b)){b="explore",z="No clear basketball space available.",_e();return}Le();return}if(b==="memory"){if(!R.start()){b="explore",z="The table is not accessible. Try again.",_e();return}Le();return}if(b==="darts"){if(!pe.start()){b="explore",z="The throwing line is blocked. Try again.",_e();return}z="Nine darts. Hold trigger, throw and release.",Le();return}if(b==="hunt")r.xrGames.start(),z="Hold trigger, swing gently and release!";else{k=_n();for(let xe=k.length-1;xe>0;xe--){let Ge=Math.floor(Math.random()*(xe+1));[k[xe],k[Ge]]=[k[Ge],k[xe]]}if(k=k.slice(0,3),ge=0,k.length<3){b="explore",z="No clear hiding spots. Please try again.",_e();return}Qn()}Le()}function Qa(){if(b!=="jigglypuff"||te||!y.group.visible)return!1;if(ge++,y.group.visible=!1,ve(L?.right,.6),ge===3){we++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(we))}catch{}b="explore",z="You found Jigglypuff 3 times! Champion!",Rt(z)}else te=1.5,z=`Found ${ge} / 3! Finding a new hiding spot\u2026`,Rt(z);return!0}function So(){return b==="golf"?J.complete?`Mini-golf complete: ${J.total} strokes \xB7 Best ${J.best}`:`Mini-golf: hole ${J.hole+1}/6 \xB7 ${J.strokes} strokes \xB7 Par ${J.layout.par}`:b==="planes"?`Paper planes: ${Y.score} points \xB7 ${Y.throws}/5 throws \xB7 Longest ${Y.longest.toFixed(1)} m`:b==="bowling"?`Bowling: ${me.total} / 100 pins \xB7 ${me.frame===10?"Complete":`Frame ${me.frame+1} \xB7 Bowl ${me.roll+1}`}`:b==="basketball"?`Basketball: ${de.score} baskets \xB7 ${de.shots}/10 throws`:b==="friend"?`Berries: ${de.feeds} \xB7 High-fives: ${de.fives} \xB7 Offer a berry or touch her raised hand`:b==="hunt"?`Pok\xE9mon: ${r.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:b==="jigglypuff"?te?z:`Found ${ge}/3 \xB7 Try ${k[ge].clue}`:b==="darts"?`Darts: ${pe.total} points \xB7 ${pe.throws}/9 darts \xB7 ${pe.last}`:b==="memory"?`Memory: ${R.matched.size/2}/${R.deck.length/2} pairs \xB7 ${R.moves} turns`:z}function Rt(Q){W=Q,Pa(M,Q),x.needsUpdate=!0,ne=3}function ja(Q){if(m.visible=!c.visible&&ne>0,!m.visible)return;let xe=Q.headOrientation||new Ie().setFromUnitVectors(new _(0,0,-1),Q.forward.clone().normalize());m.position.set(0,-.28,-2.1).applyQuaternion(xe).add(Q.eye),m.quaternion.copy(xe),m.material.opacity=Math.min(1,ne/.5),ne=Math.max(0,ne-Q.dt)}function el(Q){return!Q||Q.visible===!1?null:{position:Q.getWorldPosition(new _),direction:new _(0,0,-1).applyQuaternion(Q.getWorldQuaternion(new Ie))}}function tl(Q){if(!Q)return null;if(S==="album"){let ye=ae.point(Q);return d.geometry.setFromPoints([Q.position,ye?ye.point:Q.position.clone().addScaledVector(Q.direction,2)]),d.visible=!0,p.visible=!!ye,ye&&p.position.copy(ye.point),ye?{...ye,label:"album"}:null}c.updateMatrixWorld(!0);let xe=new Kt(Q.position,Q.direction,0,4).intersectObject(h)[0];if(d.geometry.setFromPoints([Q.position,xe?xe.point:Q.position.clone().addScaledVector(Q.direction,2)]),d.visible=!0,p.visible=!!xe,xe&&p.position.copy(xe.point),!xe)return null;let Ge=xe.uv.x*1024,$e=(1-xe.uv.y)*768;return E.find(ye=>Ge>=ye.x&&Ge<=ye.x+ye.w&&$e>=ye.y&&$e<=ye.y+ye.h)}function nl(Q){if(!Q||!y.group.visible)return!1;let xe=y.group.position.clone().add(new _(0,.58,0)),Ge=Q.position.clone().addScaledVector(Q.direction,4);return $a(Q.position,Ge,s,[{id:0,position:xe}],.5)?.type==="target"&&Q.position.distanceTo(xe)<3.3}function il(Q){L=Q,fe&&De();let{dt:xe,eye:Ge,forward:$e,right:ye,left:at,controller:Ye}=Q,kt=pe.throws,al=R.complete;q+=xe;let en=!!ye?.gamepad?.buttons[0]?.pressed,To=!!at?.gamepad?.buttons[5]?.pressed,wo=!!ye?.gamepad?.buttons[5]?.pressed,Pt=el(Ye);if(To&&!P&&(c.visible?Le():se()),wo&&!V&&(c.visible&&S==="album"?(ae.back(),O=!0):c.visible?Le():(je(),se())),P=To,V=wo,en||(O=!1),c.visible){S==="album"&&ae.tick(xe,!!ye?.gamepad?.buttons[1]?.pressed,Ye?.getWorldQuaternion(new Ie));let ut=tl(Pt);A=ut?.label||null,A!==I&&(I=A,_e()),en&&!H&&!O&&ut&&(ve(ye),ut.action(),O=!0),m.visible=!1}else d.visible=p.visible=!1,b==="darts"&&pe.update(xe,O?null:Pt,!O&&en,!!ye?.gamepad?.buttons[4]?.pressed),b==="hunt"&&Pt&&(en&&!H&&!O&&!T&&(X=!0,F=[],g.visible=!0,ve(ye,.15)),X&&(g.position.copy(Pt.position).addScaledVector(Pt.direction,.09),F.push({time:q,position:Pt.position.clone()}),F=F.filter(ut=>q-ut.time<.16),!en&&H&&(T={position:g.position.clone(),velocity:Md(F,Pt.direction),life:0},X=!1,F=[],ve(ye,.2)))),b==="jigglypuff"&&(y.animate(xe,!1),te?(te-=xe,te<=0&&(te=0,Qn())):y.group.visible&&(y.group.rotation.y=Math.atan2(Ge.x-y.group.position.x,Ge.z-y.group.position.z),nl(Pt)&&(d.geometry.setFromPoints([Pt.position,y.group.position.clone().add(new _(0,.6,0))]),d.visible=!0,en&&!H&&!O&&Qa()),q>Z&&(re(),Z=q+6)));if(b==="memory"){R.tick(xe,c.visible);let ut=!!ye?.gamepad?.buttons[4]?.pressed;if(ut&&!D&&R.complete&&!c.visible&&R.reset(),D=ut,!c.visible){let mt=R.point(Pt);mt&&(d.geometry.setFromPoints([Pt.position,mt.point]),d.visible=!0,p.position.copy(mt.point),p.visible=!0,en&&!H&&!O&&mt.action())}}if(n.update(b,b==="golf"?J.origin:b==="bowling"?me.origin:b==="planes"?Y.origin:b==="basketball"?de.origin:null),i.visible=!["bowling","golf"].includes(b),G.tick(xe,$e,!ue||["jigglypuff","darts","basketball","bowling","planes","memory","golf"].includes(b),b==="friend"),de.tick(Q,c.visible),me.tick(Q,c.visible),Y.tick(Q,c.visible),J.tick(Q,c.visible),!Ye&&X&&Be(),T&&!c.visible){let ut=Math.max(1,Math.ceil(xe/.012)),mt=xe/ut;for(let Li=0;Li<ut&&T;Li++){let vn=T,jn=vn.position.clone().addScaledVector(vn.velocity,mt);jn.y-=4.9*mt*mt;let ll=r.mollie.balls.flatMap((cl,Ao)=>r.mollie.found.has(Ao)?[]:[{id:Ao,position:cl.ball.position}]),Di=$a(vn.position,jn,s,ll);if(Di){Di.type==="target"&&r.xrGames.collect(Di.id)&&(z=`${r.xrGames.names[Di.id]} found! ${r.mollie.found.size}/18 cards.`,Rt(z),ve(ye,.8),r.mollie.found.size===18&&(z="All 18 cards found! Brilliant, Mollie!",Rt(z))),Be();break}vn.position.copy(jn),vn.velocity.y-=9.8*mt,vn.life+=mt,g.position.copy(jn),g.rotation.x+=mt*7,(jn.y<0||vn.life>3)&&Be()}}if(ie?.listener)try{let ut=ie.listener;for(let[mt,Li]of Object.entries({positionX:Ge.x,positionY:Ge.y,positionZ:Ge.z,forwardX:$e.x,forwardY:$e.y,forwardZ:$e.z,upX:0,upY:1,upZ:0}))ut[mt]&&(ut[mt].value=Li)}catch{}return b==="darts"&&kt<9&&pe.throws===9&&Rt(`Round complete! ${pe.total} points. A to play again.`),b==="memory"&&!al&&R.complete&&Rt(`All pairs matched in ${R.moves} turns!`),ja(Q),H=en,{consumeTrigger:c.visible||b!=="explore"||O,blockTeleport:J.held,blockMovement:c.visible||X||pe.held||de.held||me.held||Y.held||J.held}}function sl(){G.summon(),t.visible=!0,b="explore",H=P=V=!1,O=!0,z="Choose a game, or resume exploring.",se()}function rl(){je(),Le(),m.visible=!1,t.visible=!1,L=null,ie?.suspend()?.catch(()=>{})}function ol(){Be(!0),H=!0,O=!0}return{pokemonLayer:i,setCompanionEnabled:le,get companionEnabled(){return ue},golf:J,planes:Y,bowling:me,play:de,memory:R,companion:G,progress:So,callCompanion:w,album:ae,darts:pe,showAlbum:B,tick:il,begin:sl,end:rl,enableAudio:K,open:se,close:Le,start:Nt,stop:je,interrupt:ol,chooseSpots:_n,get mode(){return b},get menuOpen(){return c.visible},get found(){return ge},get route(){return k},get held(){return X||pe.held||de.held||me.held||Y.held||J.held},get flight(){return T},get board(){return c},get root(){return t},puff:y.group,ball:g}}function Xs(r,e=.18){return Math.abs(r)<=e?0:Math.sign(r)*(Math.abs(r)-e)/(1-e)}function Mo(r){let e=r?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function Ja(r,e,t,n){Math.abs(r)<.25&&(n=!1);let i=0;return e==="smooth"?i=-Xs(r)*Math.PI/3*t:Math.abs(r)>.65&&!n&&(i=-Math.sign(r)*Math.PI/6,n=!0),{angle:i,latched:n}}function bo(r,e,t){return{x:r*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-r*Math.sin(t)}}var xn=r=>document.querySelector(r),zt=xn("#questEnter"),jt=xn("#questStatus"),qs=xn("#questPanel");xn("#questPreview").onclick=()=>{qs.hidden=!0,xn("#questReturn").hidden=!1};xn("#questReturn").onclick=()=>{window.yardDebug?.pause(),qs.hidden=!1};async function bd(r){let e=r.renderer,t=r.worldScene,n=r.worldCamera,i=Za(r);r.vrGames=i,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let s=new be;s.name="Quest player rig",t.add(s);let o=[e.xr.getController(0),e.xr.getController(1)],a=o.map((C,N)=>e.xr.getControllerGrip?.(N)||C);for(let C of a)o.includes(C)||s.add(C);let l=new Map;o.forEach(C=>{s.add(C),C.addEventListener("connected",L=>l.set(C,L.data)),C.addEventListener("disconnected",()=>l.delete(C));let N=new Te(new nt(.018,8,6),new Se({color:16769946}));C.add(N)});let c=new yt(new Fe,new gt({color:8645568}));c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new Te(new Zt(.22,.3,32),new Se({color:8645568,side:2,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.visible=!1,t.add(h);let u=r.colliders.map(C=>new Ke(new _(C.min.x,C.min.y,C.min.z),new _(C.max.x,C.max.y,C.max.z))),f=0,d=new _,p=new Ie,g=null,y=!1,v=!1,M=!1,x=null,m,b,S=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),E=()=>{let C=r.stats(),N=bo(d.x,d.z,f);s.position.set(C.x-N.x,C.y+(window.yardFloorOffset||0),C.z-N.z),s.rotation.y=f,n.position.set(0,0,0),n.quaternion.identity(),s.updateMatrixWorld(!0)};r.xrFace=C=>{let N=new _(0,0,-1).applyQuaternion(p);f=C-Math.atan2(-N.x,-N.z),g=null,E()};function A(C){if(x=null,!C){c.visible=h.visible=!1;return}let N=C.getWorldPosition(new _),X=new _(0,0,-1).applyQuaternion(C.getWorldQuaternion(new Ie)).multiplyScalar(6);X.y+=2;let T=[N.clone()],F=new Qe,q=new _,H=N.clone(),P=null;for(let V=1;V<=32;V++){let O=V*.05,k=N.clone().addScaledVector(X,O);k.y-=4.9*O*O;let ge=k.clone().sub(H),te=ge.length();F.set(H,ge.normalize());let z=te,W=null,ne=!1;for(let fe of u){if(fe.containsPoint(H))continue;let ie=F.intersectBox(fe,q);if(ie){let Z=ie.distanceTo(H);Z<z&&(z=Z,W=ie.clone(),ne=Math.abs(ie.y-fe.max.y)<.015)}}if(H.y>=0&&k.y<=0){let fe=H.clone().lerp(k,H.y/(H.y-k.y));fe.distanceTo(H)<z&&(W=fe,ne=!0)}if(W){T.push(W),P=W,ne&&!r.blocked(W.x,W.z,W.y)&&Math.abs(r.groundAt(W.x,W.z,W.y+.05)-W.y)<.12&&(x=W);break}T.push(k),H=k}c.geometry.dispose(),c.geometry=new Fe().setFromPoints(T),c.visible=!0,c.material.color.set(x?8645568:16746618),h.visible=!!x,x&&h.position.copy(x).add(new _(0,.025,0))}let I=window.questBridge={frame:null,sample(C){let N=e.xr.getSession(),L=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!L||N?.visibilityState==="hidden")return g=null,i.interrupt(),S();if(d.set(L.transform.position.x,L.transform.position.y,L.transform.position.z),p.copy(L.transform.orientation),g){let ie=bo(d.x-g.x,d.z-g.z,f);Math.hypot(ie.x,ie.z)<.8&&r.xrPhysical(ie.x,ie.z)}g=d.clone();let X,T;for(let ie of N.inputSources)ie.handedness==="left"&&(X=ie),ie.handedness==="right"&&(T=ie);let[F,q]=Mo(X),[H]=Mo(T),P=Ja(H,xn("#questTurning").value,C,y);!i.menuOpen&&!i.held&&(f+=P.angle,P.angle&&i.interrupt()),y=P.latched;let V=!!X?.gamepad?.buttons[4]?.pressed;V&&!M&&(i.interrupt(),r.resetPosition(),f=0,g=null,i.close()),M=V,E();let O=o.find(ie=>l.get(ie)?.handedness==="right"),k=new _(0,0,-1).applyQuaternion(p),ge=k.clone().applyAxisAngle(new _(0,1,0),f),te=i.tick({dt:C,eye:d.clone().applyMatrix4(s.matrixWorld),forward:ge,headOrientation:s.getWorldQuaternion(new Ie).multiply(p),left:X,right:T,controller:O,rightGripController:a[o.findIndex(ie=>l.get(ie)?.handedness==="right")],leftController:a[o.findIndex(ie=>l.get(ie)?.handedness==="left")]}),z=!te.blockTeleport&&!i.menuOpen&&(!!T?.gamepad?.buttons[1]?.pressed||!te.consumeTrigger&&!!T?.gamepad?.buttons[0]?.pressed);z&&(i.interrupt(),A(O)),!z&&v&&(x&&!i.menuOpen&&!te.blockTeleport&&r.xrTeleport(x.x,x.y,x.z),x=null,c.visible=h.visible=!1),v=z;let W=f+Math.atan2(-k.x,-k.z);r.xrHeading(W);let ne=S(),fe=Number(xn("#questSpeed").value)/2.9;return ne.fwd=-Xs(q)*fe,ne.strafe=Xs(F)*fe,(z||te.blockMovement)&&(ne.fwd=ne.strafe=0),ne},beforeRender(){e.xr.isPresenting&&E()}};if(e.xr.addEventListener("sessionstart",()=>{b=n.parent,m=e.shadowMap.enabled,e.shadowMap.enabled=!1,s.add(n),f=0,d.set(0,0,0),g=null,y=v=M=!1,r.xrBegin(),E(),i.begin(),document.body.classList.add("questActive"),qs.hidden=!0,jt.textContent="VR is running. Use the Meta menu to exit.",zt.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),s.remove(n),b&&b.add(n),e.shadowMap.enabled=m,c.visible=h.visible=!1,g=null,r.xrEnd(),document.body.classList.remove("questActive"),qs.hidden=!1,zt.disabled=!1,zt.textContent="Enter VR again",jt.textContent="You have left VR."}),zt.onclick=async()=>{zt.disabled=!0;let C;try{i.enableAudio(),C=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),C.addEventListener("visibilitychange",()=>{g=null}),await e.xr.setSession(C)}catch(N){C&&await C.end().catch(()=>{}),zt.disabled=!1,jt.textContent="Could not enter VR: "+N.message}},!window.isSecureContext){zt.textContent="HTTPS hosting needed",jt.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){zt.textContent="Open in your Quest browser",jt.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let C=await navigator.xr.isSessionSupported("immersive-vr");zt.disabled=!C,zt.textContent=C?"Enter VR":"VR headset not detected",jt.textContent=C?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(C){jt.textContent="VR availability check failed: "+C.message}}var Sd=0,Ka=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(Ka),bd(window.yardDebug).catch(r=>{jt.textContent="VR setup failed: "+r.message,console.error(r)})):++Sd>1200&&(clearInterval(Ka),jt.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
