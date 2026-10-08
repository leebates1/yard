(()=>{var sl=1;var rl=3,Gs=0,ol=1,je=2;var ro=1,Bo=2;var oo=100;var ao=204,lo=205;var co=0,uo=1,ho=2,Oi=3,fo=4,po=5,mo=6,go=7,Oo=0,al=1,ll=2;var zo=1,ko=2,Vo=3,Go=4,Ho=5,Wo=6,Xo=7;var qo=300,cl=301,Yo=302;var ul=306,Vt=1e3,Li=1001,xo=1002,_o=1003;var hl=1006;var fl=1008;var Zo=1009;var $o=1015;var dl=1023;var pl=1028;var zi=2300,Hs=2301,ks=2302,yo=2303,vo=2400,Mo=2401,bo=2402;var ml=0;var Jo="",Ee="srgb",So="srgb-linear",To="linear",Vs="srgb";var Yn=7680;var wo=519;var Ao=35044,Ko=35048;var En=2e3,ki=2001;function Rc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pc(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Eo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var Sa={},Ws=null;function gl(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ke(...s){s=gl(s);let e="THREE."+s.shift();if(Ws)Ws("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function qe(...s){s=gl(s);let e="THREE."+s.shift();if(Ws)Ws("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function di(...s){let e=s.join(" ");e in Sa||(Sa[e]=!0,Ke(...s))}var Ic={[co]:uo,[ho]:mo,[fo]:go,[Oi]:po,[uo]:co,[mo]:ho,[go]:fo,[po]:Oi},Cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ta=1234567,Ui=Math.PI/180,Vi=180/Math.PI;function jn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[s&255]+gt[s>>8&255]+gt[s>>16&255]+gt[s>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function Fe(s,e,t){return Math.max(e,Math.min(t,s))}function Qo(s,e){return(s%e+e)%e}function Lc(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Dc(s,e,t){return s!==e?(t-s)/(e-s):0}function Ni(s,e,t){return(1-t)*s+t*e}function Uc(s,e,t,n){return Ni(s,e,1-Math.exp(-t*n))}function Nc(s,e=1){return e-Math.abs(Qo(s,e*2)-e)}function Fc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Bc(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Oc(s,e){return s+Math.floor(Math.random()*(e-s+1))}function zc(s,e){return s+Math.random()*(e-s)}function kc(s){return s*(.5-Math.random())}function Vc(s){s!==void 0&&(Ta=s);let e=Ta+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gc(s){return s*Ui}function Hc(s){return s*Vi}function Wc(s){return(s&s-1)===0&&s!==0}function Xc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function qc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yc(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*f,l*h,a*c);break;case"YZY":s.set(l*h,a*u,l*f,a*c);break;case"ZXZ":s.set(l*f,l*h,a*u,a*c);break;case"XZX":s.set(a*u,l*p,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*p,a*c);break;case"ZYZ":s.set(l*p,l*d,a*u,a*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ge={DEG2RAD:Ui,RAD2DEG:Vi,generateUUID:jn,clamp:Fe,euclideanModulo:Qo,mapLinear:Lc,inverseLerp:Dc,lerp:Ni,damp:Uc,pingpong:Nc,smoothstep:Fc,smootherstep:Bc,randInt:Oc,randFloat:zc,randFloatSpread:kc,seededRandom:Vc,degToRad:Gc,radToDeg:Hc,isPowerOfTwo:Wc,ceilPowerOfTwo:Xc,floorPowerOfTwo:qc,setQuaternionFromProperEuler:Yc,normalize:Mt,denormalize:fi},na=class na{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};na.prototype.isVector2=!0;var ue=na,Te=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=r[o+0],d=r[o+1],p=r[o+2],g=r[o+3];if(f!==g||l!==h||c!==d||u!==p){let v=l*h+c*d+u*p+f*g;v<0&&(h=-h,d=-d,p=-p,g=-g,v=-v);let x=1-a;if(v<.9995){let M=Math.acos(v),y=Math.sin(M);x=Math.sin(x*M)/y,a=Math.sin(a*M)/y,l=l*x+h*a,c=c*x+d*a,u=u*x+p*a,f=f*x+g*a}else{l=l*x+h*a,c=c*x+d*a,u=u*x+p*a,f=f*x+g*a;let M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(r/2),h=l(n/2),d=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ia=class ia{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wa.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=i+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ia.prototype.isVector3=!0;var _=ia,Dr=new _,wa=new Te,sa=class sa{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],g=i[0],v=i[3],x=i[6],M=i[1],y=i[4],m=i[7],S=i[2],C=i[5],w=i[8];return r[0]=o*g+a*M+l*S,r[3]=o*v+a*y+l*C,r[6]=o*x+a*m+l*w,r[1]=c*g+u*M+f*S,r[4]=c*v+u*y+f*C,r[7]=c*x+u*m+f*w,r[2]=h*g+d*M+p*S,r[5]=h*v+d*y+p*C,r[8]=h*x+d*m+p*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,p=t*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sa.prototype.isMatrix3=!0;var De=sa,Ur=new De,Aa=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ea=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zc(){let s={enabled:!0,workingColorSpace:So,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Vs&&(i.r=dn(i.r),i.g=dn(i.g),i.b=dn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vs&&(i.r=pi(i.r),i.g=pi(i.g),i.b=pi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jo?To:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[So]:{primaries:e,whitePoint:n,transfer:To,toXYZ:Aa,fromXYZ:Ea,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:e,whitePoint:n,transfer:Vs,toXYZ:Aa,fromXYZ:Ea,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),s}var kt=Zc();function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ti,Xs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ti===void 0&&(ti=Eo("canvas")),ti.width=e.width,ti.height=e.height;let i=ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ti}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Eo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=dn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dn(t[n]/255)*255):t[n]=dn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$c=1e6,qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Nr(i[o].image)):r.push(Nr(i[o]))}else r=Nr(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xs.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var Jc=1e6,Fr=new _,Rn=class s extends Cn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Li,i=Li,r=hl,o=fl,a=dl,l=Zo,c=s.DEFAULT_ANISOTROPY,u=Jo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=jn(),this.name="",this.source=new qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fr).x}get height(){return this.source.getSize(Fr).y}get depth(){return this.source.getSize(Fr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vt:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vt:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=qo;Rn.DEFAULT_ANISOTROPY=1;var ra=class ra{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],g=l[2],v=l[6],x=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(p-v)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(p+v)<.1&&Math.abs(c+d+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,m=(d+1)/2,S=(x+1)/2,C=(u+h)/4,w=(f+g)/4,T=(p+v)/4;return y>m&&y>S?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=C/n,r=w/n):m>S?m<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(m),n=C/i,r=T/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=w/r,i=T/r),this.set(n,i,r,t),this}let M=Math.sqrt((v-p)*(v-p)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(v-p)/M,this.y=(f-g)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ra.prototype.isVector4=!0;var Zn=ra;var xr=class xr{constructor(e,t,n,i,r,o,a,l,c,u,f,h,d,p,g,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,f,h,d,p,g,v)}set(e,t,n,i,r,o,a,l,c,u,f,h,d,p,g,v){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=u,x[10]=f,x[14]=h,x[3]=d,x[7]=p,x[11]=g,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xr().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ni.setFromMatrixColumn(e,0).length(),r=1/ni.setFromMatrixColumn(e,1).length(),o=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,p=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,p=c*u,g=c*f;t[0]=h+g*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,p=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,p=a*u,g=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-g*f}else if(e.order==="XZY"){let h=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kc,e,Qc)}lookAt(e,t,n){let i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),vn.crossVectors(n,Lt),vn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),vn.crossVectors(n,Lt)),vn.normalize(),ds.crossVectors(Lt,vn),i[0]=vn.x,i[4]=ds.x,i[8]=Lt.x,i[1]=vn.y,i[5]=ds.y,i[9]=Lt.y,i[2]=vn.z,i[6]=ds.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],g=n[6],v=n[10],x=n[14],M=n[3],y=n[7],m=n[11],S=n[15],C=i[0],w=i[4],T=i[8],R=i[12],I=i[1],E=i[5],A=i[9],D=i[13],U=i[2],N=i[6],P=i[10],V=i[14],b=i[3],W=i[7],F=i[11],L=i[15];return r[0]=o*C+a*I+l*U+c*b,r[4]=o*w+a*E+l*N+c*W,r[8]=o*T+a*A+l*P+c*F,r[12]=o*R+a*D+l*V+c*L,r[1]=u*C+f*I+h*U+d*b,r[5]=u*w+f*E+h*N+d*W,r[9]=u*T+f*A+h*P+d*F,r[13]=u*R+f*D+h*V+d*L,r[2]=p*C+g*I+v*U+x*b,r[6]=p*w+g*E+v*N+x*W,r[10]=p*T+g*A+v*P+x*F,r[14]=p*R+g*D+v*V+x*L,r[3]=M*C+y*I+m*U+S*b,r[7]=M*w+y*E+m*N+S*W,r[11]=M*T+y*A+m*P+S*F,r[15]=M*R+y*D+m*V+S*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],g=e[7],v=e[11],x=e[15],M=l*d-c*h,y=a*d-c*f,m=a*h-l*f,S=o*d-c*u,C=o*h-l*u,w=o*f-a*u;return t*(g*M-v*y+x*m)-n*(p*M-v*S+x*C)+i*(p*y-g*S+x*w)-r*(p*m-g*C+v*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],g=e[13],v=e[14],x=e[15],M=t*a-n*o,y=t*l-i*o,m=t*c-r*o,S=n*l-i*a,C=n*c-r*a,w=i*c-r*l,T=u*g-f*p,R=u*v-h*p,I=u*x-d*p,E=f*v-h*g,A=f*x-d*g,D=h*x-d*v,U=M*D-y*A+m*E+S*I-C*R+w*T;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/U;return e[0]=(a*D-l*A+c*E)*N,e[1]=(i*A-n*D-r*E)*N,e[2]=(g*w-v*C+x*S)*N,e[3]=(h*C-f*w-d*S)*N,e[4]=(l*I-o*D-c*R)*N,e[5]=(t*D-i*I+r*R)*N,e[6]=(v*m-p*w-x*y)*N,e[7]=(u*w-h*m+d*y)*N,e[8]=(o*A-a*I+c*T)*N,e[9]=(n*I-t*A-r*T)*N,e[10]=(p*C-g*m+x*M)*N,e[11]=(f*m-u*C-d*M)*N,e[12]=(a*R-o*E-l*T)*N,e[13]=(t*E-n*R+i*T)*N,e[14]=(g*y-p*S-v*M)*N,e[15]=(u*S-f*y+h*M)*N,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,p=r*f,g=o*u,v=o*f,x=a*f,M=l*c,y=l*u,m=l*f,S=n.x,C=n.y,w=n.z;return i[0]=(1-(g+x))*S,i[1]=(d+m)*S,i[2]=(p-y)*S,i[3]=0,i[4]=(d-m)*C,i[5]=(1-(h+x))*C,i[6]=(v+M)*C,i[7]=0,i[8]=(p+y)*w,i[9]=(v-M)*w,i[10]=(1-(h+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ni.set(i[0],i[1],i[2]).length(),a=ni.set(i[4],i[5],i[6]).length(),l=ni.set(i[8],i[9],i[10]).length();r<0&&(o=-o),qt.copy(this);let c=1/o,u=1/a,f=1/l;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=u,qt.elements[5]*=u,qt.elements[6]*=u,qt.elements[8]*=f,qt.elements[9]*=f,qt.elements[10]*=f,t.setFromRotationMatrix(qt),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=En,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===En)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ki)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=En,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===En)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===ki)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};xr.prototype.isMatrix4=!0;var Qe=xr,ni=new _,qt=new Qe,Kc=new _(0,0,0),Qc=new _(1,1,1),vn=new _,ds=new _,Lt=new _,Ca=new Qe,Ra=new Te,$t=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ca,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$t.DEFAULT_ORDER="XYZ";var Gi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jc=1e6,Pa=new _,ii=new Te,an=new Qe,ps=new _,wi=new _,eu=new _,tu=new Te,Ia=new _(1,0,0),La=new _(0,1,0),Da=new _(0,0,1),Ua={type:"added"},nu={type:"removed"},si={type:"childadded",child:null},Br={type:"childremoved",child:null},it=class s extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new _,t=new $t,n=new Te,i=new _(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new De}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(La,e)}rotateZ(e){return this.rotateOnAxis(Da,e)}translateOnAxis(e,t){return Pa.copy(e).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(La,e)}translateZ(e){return this.translateOnAxis(Da,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ps.copy(e):ps.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(wi,ps,this.up):an.lookAt(ps,wi,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(an),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ua),si.child=e,this.dispatchEvent(si),si.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nu),Br.child=e,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ua),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,eu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,tu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};it.DEFAULT_UP=new _(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=class extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}};var xl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Or(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ee){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,kt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=kt.workingColorSpace){if(e=Qo(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Or(o,r,e+1/3),this.g=Or(o,r,e),this.b=Or(o,r,e-1/3)}return kt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ee){let n=xl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ee){return kt.workingToColorSpace(xt.copy(this),e),Math.round(Fe(xt.r*255,0,255))*65536+Math.round(Fe(xt.g*255,0,255))*256+Math.round(Fe(xt.b*255,0,255))}getHexString(e=Ee){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(xt.copy(this),t);let n=xt.r,i=xt.g,r=xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Ee){kt.workingToColorSpace(xt.copy(this),e);let t=xt.r,n=xt.g,i=xt.b;return e!==Ee?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(ms);let n=Ni(Mn.h,ms.h,t),i=Ni(Mn.s,ms.s,t),r=Ni(Mn.l,ms.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xt=new ze;ze.NAMES=xl;var Yt=new _,ln=new _,zr=new _,cn=new _,ri=new _,oi=new _,Na=new _,kr=new _,Vr=new _,Gr=new _,Hr=new Zn,Wr=new Zn,Xr=new Zn,An=class s{constructor(e=new _,t=new _,n=new _){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yt.subVectors(e,t),i.cross(Yt);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yt.subVectors(i,t),ln.subVectors(n,t),zr.subVectors(e,t);let o=Yt.dot(Yt),a=Yt.dot(ln),l=Yt.dot(zr),c=ln.dot(ln),u=ln.dot(zr),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Hr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),Hr.fromBufferAttribute(e,t),Wr.fromBufferAttribute(e,n),Xr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Hr,r.x),o.addScaledVector(Wr,r.y),o.addScaledVector(Xr,r.z),o}static isFrontFacing(e,t,n,i){return Yt.subVectors(n,t),ln.subVectors(e,t),Yt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Yt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ri.subVectors(i,n),oi.subVectors(r,n),kr.subVectors(e,n);let l=ri.dot(kr),c=oi.dot(kr);if(l<=0&&c<=0)return t.copy(n);Vr.subVectors(e,i);let u=ri.dot(Vr),f=oi.dot(Vr);if(u>=0&&f<=u)return t.copy(i);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ri,o);Gr.subVectors(e,r);let d=ri.dot(Gr),p=oi.dot(Gr);if(p>=0&&d<=p)return t.copy(r);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(oi,a);let v=u*p-d*f;if(v<=0&&f-u>=0&&d-p>=0)return Na.subVectors(r,i),a=(f-u)/(f-u+(d-p)),t.copy(i).addScaledVector(Na,a);let x=1/(v+g+h);return o=g*x,a=h*x,t.copy(n).addScaledVector(ri,o).addScaledVector(oi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ze=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(r,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),xs.subVectors(this.max,Ai),ai.subVectors(e.a,Ai),li.subVectors(e.b,Ai),ci.subVectors(e.c,Ai),bn.subVectors(li,ai),Sn.subVectors(ci,li),Hn.subVectors(ai,ci);let t=[0,-bn.z,bn.y,0,-Sn.z,Sn.y,0,-Hn.z,Hn.y,bn.z,0,-bn.x,Sn.z,0,-Sn.x,Hn.z,0,-Hn.x,-bn.y,bn.x,0,-Sn.y,Sn.x,0,-Hn.y,Hn.x,0];return!qr(t,ai,li,ci,xs)||(t=[1,0,0,0,1,0,0,0,1],!qr(t,ai,li,ci,xs))?!1:(_s.crossVectors(bn,Sn),t=[_s.x,_s.y,_s.z],qr(t,ai,li,ci,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},un=[new _,new _,new _,new _,new _,new _,new _,new _],Zt=new _,gs=new Ze,ai=new _,li=new _,ci=new _,bn=new _,Sn=new _,Hn=new _,Ai=new _,xs=new _,_s=new _,Wn=new _;function qr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Wn.fromArray(s,r);let a=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),u=n.dot(Wn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var lt=new _,ys=new ue,iu=1e6,bt=class extends Cn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=$o,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),i=Mt(i,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ao&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ys=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zs=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Re=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},su=new Ze,Ei=new _,Yr=new _,Gt=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):su.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ei.subVectors(e,this.center);let t=Ei.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ei,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ei.copy(e.center).add(Yr)),this.expandByPoint(Ei.copy(e.center).sub(Yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ru=1e6,zt=new Qe,Zr=new it,ui=new _,Dt=new Ze,Ci=new Ze,ht=new _,Be=class s extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?Zs:Ys)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Zr.lookAt(e),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ze);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(ht.addVectors(Dt.min,Ci.min),Dt.expandByPoint(ht),ht.addVectors(Dt.max,Ci.max),Dt.expandByPoint(ht)):(Dt.expandByPoint(Ci.min),Dt.expandByPoint(Ci.max))}Dt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ht));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ht.fromBufferAttribute(a,c),l&&(ui.fromBufferAttribute(e,c),ht.add(ui)),i=Math.max(i,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new _,l[T]=new _;let c=new _,u=new _,f=new _,h=new ue,d=new ue,p=new ue,g=new _,v=new _;function x(T,R,I){c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,I),h.fromBufferAttribute(r,T),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,I),u.sub(c),f.sub(c),d.sub(h),p.sub(h);let E=1/(d.x*p.y-p.x*d.y);isFinite(E)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(E),v.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(E),a[T].add(g),a[R].add(g),a[I].add(g),l[T].add(v),l[R].add(v),l[I].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let T=0,R=M.length;T<R;++T){let I=M[T],E=I.start,A=I.count;for(let D=E,U=E+A;D<U;D+=3)x(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let y=new _,m=new _,S=new _,C=new _;function w(T){S.fromBufferAttribute(i,T),C.copy(S);let R=a[T];y.copy(R),y.sub(S.multiplyScalar(S.dot(R))).normalize(),m.crossVectors(C,R);let E=m.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,E)}for(let T=0,R=M.length;T<R;++T){let I=M[T],E=I.start,A=I.count;for(let D=E,U=E+A;D<U;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let i=new _,r=new _,o=new _,a=new _,l=new _,c=new _,u=new _,f=new _;if(e)for(let h=0,d=e.count;h<d;h+=3){let p=e.getX(h+0),g=e.getX(h+1),v=e.getX(h+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,p=0;for(let g=0,v=l.length;g<v;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let x=0;x<u;x++)h[p++]=c[d++]}return new bt(h,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ou=1e6,$n=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=ro,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=lo,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(n.blending=this.blending),this.side!==Gs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==oo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var hn=new _,$r=new _,vs=new _,Tn=new _,Jr=new _,Ms=new _,Kr=new _,st=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$r.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub($r);let r=e.distanceTo(t)*.5,o=-this.direction.dot(vs),a=Tn.dot(this.direction),l=-Tn.dot(vs),c=Tn.lengthSq(),u=Math.abs(1-o*o),f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=r*u,f>=0)if(h>=-p)if(h<=p){let g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy($r).addScaledVector(vs,h),d}intersectSphere(e,t){hn.subVectors(e.center,this.origin);let n=hn.dot(this.direction),i=hn.dot(hn)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,i,r){Jr.subVectors(t,e),Ms.subVectors(n,e),Kr.crossVectors(Jr,Ms);let o=this.direction.dot(Kr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,e);let l=a*this.direction.dot(Ms.crossVectors(Tn,Ms));if(l<0)return null;let c=a*this.direction.dot(Jr.cross(Tn));if(c<0||l+c>o)return null;let u=-a*Tn.dot(Kr);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fa=new Qe,Xn=new st,bs=new Gt,Ba=new _,Ss=new _,Ts=new _,ws=new _,Qr=new _,As=new _,Oa=new _,Es=new _,xe=class extends it{constructor(e=new Be,t=new ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){As.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(Qr.fromBufferAttribute(f,e),o?As.addScaledVector(Qr,u):As.addScaledVector(Qr.sub(t),u))}t.add(As)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Xn.copy(e.ray).recast(e.near),!(bs.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(bs,Ba)===null||Xn.origin.distanceToSquared(Ba)>(e.far-e.near)**2))&&(Fa.copy(r).invert(),Xn.copy(e.ray).applyMatrix4(Fa),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=h.length;p<g;p++){let v=h[p],x=o[v.materialIndex],M=Math.max(v.start,d.start),y=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let m=M,S=y;m<S;m+=3){let C=a.getX(m),w=a.getX(m+1),T=a.getX(m+2);i=Cs(this,x,e,n,c,u,f,C,w,T),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let v=p,x=g;v<x;v+=3){let M=a.getX(v),y=a.getX(v+1),m=a.getX(v+2);i=Cs(this,o,e,n,c,u,f,M,y,m),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=h.length;p<g;p++){let v=h[p],x=o[v.materialIndex],M=Math.max(v.start,d.start),y=Math.min(l.count,Math.min(v.start+v.count,d.start+d.count));for(let m=M,S=y;m<S;m+=3){let C=m,w=m+1,T=m+2;i=Cs(this,x,e,n,c,u,f,C,w,T),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let v=p,x=g;v<x;v+=3){let M=v,y=v+1,m=v+2;i=Cs(this,o,e,n,c,u,f,M,y,m),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};function au(s,e,t,n,i,r,o,a){let l;if(e.side===ol?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Gs,a),l===null)return null;Es.copy(a),Es.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Es);return c<t.near||c>t.far?null:{distance:c,point:Es.clone(),object:s}}function Cs(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ss),s.getVertexPosition(l,Ts),s.getVertexPosition(c,ws);let u=au(s,e,t,n,Ss,Ts,ws,Oa);if(u){let f=new _;An.getBarycoord(Oa,Ss,Ts,ws,f),i&&(u.uv=An.getInterpolatedAttribute(i,a,l,c,f,new ue)),r&&(u.uv1=An.getInterpolatedAttribute(r,a,l,c,f,new ue)),o&&(u.normal=An.getInterpolatedAttribute(o,a,l,c,f,new _),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new _,materialIndex:0};An.getNormal(Ss,Ts,ws,h.normal),u.face=h,u.barycoord=f}return u}var $s=class extends Rn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=_o,u=_o,f,h){super(null,o,a,l,c,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mi=class extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hi=new Qe,za=new Qe,Rs=[],ka=new Ze,lu=new Qe,Ri=new xe,Pi=new Gt,Jt=class extends xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ze),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),ka.copy(e.boundingBox).applyMatrix4(hi),this.boundingBox.union(ka)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),Pi.copy(e.boundingSphere).applyMatrix4(hi),this.boundingSphere.union(Pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ri.geometry=this.geometry,Ri.material=this.material,Ri.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pi.copy(this.boundingSphere),Pi.applyMatrix4(n),e.ray.intersectsSphere(Pi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hi),za.multiplyMatrices(n,hi),Ri.matrixWorld=za,Ri.raycast(e,Rs);for(let o=0,a=Rs.length;o<a;o++){let l=Rs[o];l.instanceId=r,l.object=this,t.push(l)}Rs.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $s(new Float32Array(i*this.count),i,this.count,pl,$o));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jr=new _,cu=new _,uu=new De,fn=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=jr.subVectors(n,t).cross(cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(jr),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||uu.getNormalMatrix(e),i=this.coplanarPoint(jr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qn=new Gt,hu=new ue(.5,.5),Ps=new _,Js=class{constructor(e=new fn,t=new fn,n=new fn,i=new fn,r=new fn,o=new fn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],g=r[9],v=r[10],x=r[11],M=r[12],y=r[13],m=r[14],S=r[15];if(i[0].setComponents(c-o,d-u,x-p,S-M).normalize(),i[1].setComponents(c+o,d+u,x+p,S+M).normalize(),i[2].setComponents(c+a,d+f,x+g,S+y).normalize(),i[3].setComponents(c-a,d-f,x-g,S-y).normalize(),n)i[4].setComponents(l,h,v,m).normalize(),i[5].setComponents(c-l,d-h,x-v,S-m).normalize();else if(i[4].setComponents(c-l,d-h,x-v,S-m).normalize(),t===En)i[5].setComponents(c+l,d+h,x+v,S+m).normalize();else if(t===ki)i[5].setComponents(l,h,v,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){qn.center.set(0,0,0);let t=hu.distanceTo(e.center);return qn.radius=.7071067811865476+t,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ps.x=i.normal.x>0?e.max.x:e.min.x,Ps.y=i.normal.y>0?e.max.y:e.min.y,Ps.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var St=class extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ks=new _,Qs=new _,Va=new Qe,Ii=new st,Is=new Gt,eo=new _,Ga=new _,Tt=class extends it{constructor(e=new Be,t=new St){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ks.fromBufferAttribute(t,i-1),Qs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ks.distanceTo(Qs);e.setAttribute("lineDistance",new Re(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=r,e.ray.intersectsSphere(Is)===!1)return;Va.copy(i).invert(),Ii.copy(e.ray).applyMatrix4(Va);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,v=p-1;g<v;g+=c){let x=u.getX(g),M=u.getX(g+1),y=Ls(this,e,Ii,l,x,M,g);y&&t.push(y)}if(this.isLineLoop){let g=u.getX(p-1),v=u.getX(d),x=Ls(this,e,Ii,l,g,v,p-1);x&&t.push(x)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,v=p-1;g<v;g+=c){let x=Ls(this,e,Ii,l,g,g+1,g);x&&t.push(x)}if(this.isLineLoop){let g=Ls(this,e,Ii,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ls(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Ks.fromBufferAttribute(a,i),Qs.fromBufferAttribute(a,r),t.distanceSqToSegment(Ks,Qs,eo,Ga)>n)return;eo.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(eo);if(!(c<e.near||c>e.far))return{distance:c,point:Ga.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var gi=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ha=new Qe,Co=new st,Ds=new Gt,Us=new _,Hi=class extends it{constructor(e=new Be,t=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=r,e.ray.intersectsSphere(Ds)===!1)return;Ha.copy(i).invert(),Co.copy(e.ray).applyMatrix4(Ha);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,g=d;p<g;p++){let v=c.getX(p);Us.fromBufferAttribute(f,v),Wa(Us,v,l,i,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,g=d;p<g;p++)Us.fromBufferAttribute(f,p),Wa(Us,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wa(s,e,t,n,i,r,o){let a=Co.distanceSqToPoint(s);if(a<t){let l=new _;Co.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ie=class extends Rn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Me=class s extends Be{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(f,2));function p(g,v,x,M,y,m,S,C,w,T,R){let I=m/w,E=S/T,A=m/2,D=S/2,U=C/2,N=w+1,P=T+1,V=0,b=0,W=new _;for(let F=0;F<P;F++){let L=F*E-D;for(let B=0;B<N;B++){let k=B*I-A;W[g]=k*M,W[v]=L*y,W[x]=U,c.push(W.x,W.y,W.z),W[g]=0,W[v]=0,W[x]=C>0?1:-1,u.push(W.x,W.y,W.z),f.push(B/w),f.push(1-F/T),V+=1}}for(let F=0;F<T;F++)for(let L=0;L<w;L++){let B=h+L+N*F,k=h+L+N*(F+1),z=h+(L+1)+N*(F+1),H=h+(L+1)+N*F;l.push(B,k,H),l.push(k,z,H),b+=6}a.addGroup(d,b,R),d+=b,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Wi=class s extends Be{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new _,u=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let d=n+f/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ke=class s extends Be{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let u=[],f=[],h=[],d=[],p=0,g=[],v=n/2,x=0;M(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2));function M(){let m=new _,S=new _,C=0,w=(t-e)/n;for(let T=0;T<=r;T++){let R=[],I=T/r,E=I*(t-e)+e;for(let A=0;A<=i;A++){let D=A/i,U=D*l+a,N=Math.sin(U),P=Math.cos(U);S.x=E*N,S.y=-I*n+v,S.z=E*P,f.push(S.x,S.y,S.z),m.set(N,w,P).normalize(),h.push(m.x,m.y,m.z),d.push(D,1-I),R.push(p++)}g.push(R)}for(let T=0;T<i;T++)for(let R=0;R<r;R++){let I=g[R][T],E=g[R+1][T],A=g[R+1][T+1],D=g[R][T+1];(e>0||R!==0)&&(u.push(I,E,D),C+=3),(t>0||R!==r-1)&&(u.push(E,A,D),C+=3)}c.addGroup(x,C,0),x+=C}function y(m){let S=p,C=new ue,w=new _,T=0,R=m===!0?e:t,I=m===!0?1:-1;for(let A=1;A<=i;A++)f.push(0,v*I,0),h.push(0,I,0),d.push(.5,.5),p++;let E=p;for(let A=0;A<=i;A++){let U=A/i*l+a,N=Math.cos(U),P=Math.sin(U);w.x=R*P,w.y=v*I,w.z=R*N,f.push(w.x,w.y,w.z),h.push(0,I,0),C.x=N*.5+.5,C.y=P*.5*I+.5,d.push(C.x,C.y),p++}for(let A=0;A<i;A++){let D=S+A,U=E+A;m===!0?u.push(U,U+1,D):u.push(U+1,U,D),T+=3}c.addGroup(x,T,m===!0?1:2),x+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kt=class s extends ke{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ut=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let u=n[i],h=n[i+1]-u,d=(o-u)/h;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ue:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new _,i=[],r=[],o=[],a=new _,l=new Qe;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new _)}r[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Fe(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Fe(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xi=class extends Ut{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},js=class extends xi{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function jo(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,i(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Xa=new _,qa=new _,to=new jo,no=new jo,io=new jo,Pn=class extends Ut{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new _){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%r]:(qa.subVectors(i[0],i[1]).add(i[0]),c=qa);let f=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Xa.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Xa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(u),d);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),to.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,p,g,v),no.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,p,g,v),io.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,p,g,v)}else this.curveType==="catmullrom"&&(to.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),no.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),io.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(to.calc(l),no.calc(l),io.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ya(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function fu(s,e){let t=1-s;return t*t*e}function du(s,e){return 2*(1-s)*s*e}function pu(s,e){return s*s*e}function Fi(s,e,t,n){return fu(s,e)+du(s,t)+pu(s,n)}function mu(s,e){let t=1-s;return t*t*t*e}function gu(s,e){let t=1-s;return 3*t*t*s*e}function xu(s,e){return 3*(1-s)*s*s*e}function _u(s,e){return s*s*s*e}function Bi(s,e,t,n,i){return mu(s,e)+gu(s,t)+xu(s,n)+_u(s,i)}var Xi=class extends Ut{constructor(e=new ue,t=new ue,n=new ue,i=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bi(e,i.x,r.x,o.x,a.x),Bi(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},er=class extends Ut{constructor(e=new _,t=new _,n=new _,i=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bi(e,i.x,r.x,o.x,a.x),Bi(e,i.y,r.y,o.y,a.y),Bi(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qi=class extends Ut{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tr=class extends Ut{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yi=class extends Ut{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Fi(e,i.x,r.x,o.x),Fi(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zi=class extends Ut{constructor(e=new _,t=new _,n=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Fi(e,i.x,r.x,o.x),Fi(e,i.y,r.y,o.y),Fi(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$i=class extends Ut{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Ya(a,l.x,c.x,u.x,f.x),Ya(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ue().fromArray(i))}return this}},nr=Object.freeze({__proto__:null,ArcCurve:js,CatmullRomCurve3:Pn,CubicBezierCurve:Xi,CubicBezierCurve3:er,EllipseCurve:xi,LineCurve:qi,LineCurve3:tr,QuadraticBezierCurve:Yi,QuadraticBezierCurve3:Zi,SplineCurve:$i}),ir=class extends Ut{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new nr[i.type]().fromJSON(i))}return this}},Jn=class extends ir{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qi(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Yi(this.currentPoint.clone(),new ue(e,t),new ue(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Xi(this.currentPoint.clone(),new ue(e,t),new ue(n,i),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $i(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new xi(e,t,n,i,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ct=class extends Jn{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Jn().fromJSON(i))}return this}};function yu(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=_l(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Tu(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let u=a,f=l;for(let h=t;h<i;h+=t){let d=s[h],p=s[h+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Ji(r,o,t,a,l,c,0),o}function _l(s,e,t,n,i){let r;if(i===Nu(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Za(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Za(o/n|0,s[o],s[o+1],r);return r&&_i(r,r.next)&&(Qi(r),r=r.next),r}function Kn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(_i(t,t.next)||Je(t.prev,t,t.next)===0)){if(Qi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ji(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Ru(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Mu(s,n,i,r):vu(s)){e.push(l.i,s.i,c.i),Qi(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=bu(Kn(s),e),Ji(s,e,t,n,i,r,2)):o===2&&Su(s,e,t,n,i,r):Ji(Kn(s),e,t,n,i,r,1);break}}}function vu(s){let e=s.prev,t=s,n=s.next;if(Je(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),f=Math.min(a,l,c),h=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&Di(i,a,r,l,o,c,p.x,p.y)&&Je(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Mu(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Je(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,f=r.y,h=o.y,d=Math.min(a,l,c),p=Math.min(u,f,h),g=Math.max(a,l,c),v=Math.max(u,f,h),x=Ro(d,p,e,t,n),M=Ro(g,v,e,t,n),y=s.prevZ,m=s.nextZ;for(;y&&y.z>=x&&m&&m.z<=M;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=v&&y!==i&&y!==o&&Di(a,u,l,f,c,h,y.x,y.y)&&Je(y.prev,y,y.next)>=0||(y=y.prevZ,m.x>=d&&m.x<=g&&m.y>=p&&m.y<=v&&m!==i&&m!==o&&Di(a,u,l,f,c,h,m.x,m.y)&&Je(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;y&&y.z>=x;){if(y.x>=d&&y.x<=g&&y.y>=p&&y.y<=v&&y!==i&&y!==o&&Di(a,u,l,f,c,h,y.x,y.y)&&Je(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;m&&m.z<=M;){if(m.x>=d&&m.x<=g&&m.y>=p&&m.y<=v&&m!==i&&m!==o&&Di(a,u,l,f,c,h,m.x,m.y)&&Je(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function bu(s,e){let t=s;do{let n=t.prev,i=t.next.next;!_i(n,i)&&vl(n,t,t.next,i)&&Ki(n,i)&&Ki(i,n)&&(e.push(n.i,t.i,i.i),Qi(t),Qi(t.next),t=s=i),t=t.next}while(t!==s);return Kn(t)}function Su(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lu(o,a)){let l=Ml(o,a);o=Kn(o,o.next),l=Kn(l,l.next),Ji(o,e,t,n,i,r,0),Ji(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Tu(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=_l(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Iu(c))}i.sort(wu);for(let r=0;r<i.length;r++)t=Au(i[r],t);return t}function wu(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Au(s,e){let t=Eu(s,e);if(!t)return e;let n=Ml(t,s);return Kn(n,n.next),Kn(t,t.next)}function Eu(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(_i(s,t))return t;do{if(_i(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&yl(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let f=Math.abs(i-t.y)/(n-t.x);Ki(t,s)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&Cu(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function Cu(s,e){return Je(s.prev,s,e.prev)<0&&Je(e.next,s,s.next)<0}function Ru(s,e,t,n){let i=s;do i.z===0&&(i.z=Ro(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Pu(i)}function Pu(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Ro(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Iu(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function yl(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Di(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&yl(s,e,t,n,i,r,o,a)}function Lu(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Du(s,e)&&(Ki(s,e)&&Ki(e,s)&&Uu(s,e)&&(Je(s.prev,s,e.prev)||Je(s,e.prev,e))||_i(s,e)&&Je(s.prev,s,s.next)>0&&Je(e.prev,e,e.next)>0)}function Je(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _i(s,e){return s.x===e.x&&s.y===e.y}function vl(s,e,t,n){let i=Fs(Je(s,e,t)),r=Fs(Je(s,e,n)),o=Fs(Je(t,n,s)),a=Fs(Je(t,n,e));return!!(i!==r&&o!==a||i===0&&Ns(s,t,e)||r===0&&Ns(s,n,e)||o===0&&Ns(t,s,n)||a===0&&Ns(t,e,n))}function Ns(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Fs(s){return s>0?1:s<0?-1:0}function Du(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&vl(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ki(s,e){return Je(s.prev,s,s.next)<0?Je(s,e,s.next)>=0&&Je(s,s.prev,e)>=0:Je(s,e,s.prev)<0||Je(s,s.next,e)<0}function Uu(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ml(s,e){let t=Po(s.i,s.x,s.y),n=Po(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Za(s,e,t,n){let i=Po(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Po(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nu(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Io=class{static triangulate(e,t,n=2){return yu(e,t,n)}},tn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];$a(e),Ja(n,e);let o=e.length;t.forEach($a);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Ja(n,t[l]);let a=Io.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function $a(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ja(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Qt=class s extends Be{constructor(e=new ct([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Re(i,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Fu,y,m=!1,S,C,w,T;if(x){y=x.getSpacedPoints(u),m=!0,h=!1;let G=x.isCatmullRomCurve3?x.closed:!1;S=x.computeFrenetFrames(u,G),C=new _,w=new _,T=new _}h||(v=0,d=0,p=0,g=0);let R=a.extractPoints(c),I=R.shape,E=R.holes;if(!tn.isClockWise(I)){I=I.reverse();for(let G=0,Q=E.length;G<Q;G++){let ne=E[G];tn.isClockWise(ne)&&(E[G]=ne.reverse())}}function D(G){let ne=10000000000000001e-36,oe=G[0];for(let ae=1;ae<=G.length;ae++){let ye=ae%G.length,de=G[ye],we=de.x-oe.x,_e=de.y-oe.y,q=we*we+_e*_e,O=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(oe.x),Math.abs(oe.y)),K=ne*O*O;if(q<=K){G.splice(ye,1),ae--;continue}oe=de}}D(I),E.forEach(D);let U=E.length,N=I;for(let G=0;G<U;G++){let Q=E[G];I=I.concat(Q)}function P(G,Q,ne){return Q||qe("ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(Q,ne)}let V=I.length;function b(G,Q,ne){let oe,ae,ye,de=G.x-Q.x,we=G.y-Q.y,_e=ne.x-G.x,q=ne.y-G.y,O=de*de+we*we,K=de*q-we*_e;if(Math.abs(K)>Number.EPSILON){let ce=Math.sqrt(O),$=Math.sqrt(_e*_e+q*q),fe=Q.x-we/ce,Pe=Q.y+de/ce,pe=ne.x-q/$,Le=ne.y+_e/$,Ne=((pe-fe)*q-(Le-Pe)*_e)/(de*q-we*_e);oe=fe+de*Ne-G.x,ae=Pe+we*Ne-G.y;let Ae=oe*oe+ae*ae;if(Ae<=2)return new ue(oe,ae);ye=Math.sqrt(Ae/2)}else{let ce=!1;de>Number.EPSILON?_e>Number.EPSILON&&(ce=!0):de<-Number.EPSILON?_e<-Number.EPSILON&&(ce=!0):Math.sign(we)===Math.sign(q)&&(ce=!0),ce?(oe=-we,ae=de,ye=Math.sqrt(O)):(oe=de,ae=we,ye=Math.sqrt(O/2))}return new ue(oe/ye,ae/ye)}let W=[];for(let G=0,Q=N.length,ne=Q-1,oe=G+1;G<Q;G++,ne++,oe++)ne===Q&&(ne=0),oe===Q&&(oe=0),W[G]=b(N[G],N[ne],N[oe]);let F=[],L,B=W.concat();for(let G=0,Q=U;G<Q;G++){let ne=E[G];L=[];for(let oe=0,ae=ne.length,ye=ae-1,de=oe+1;oe<ae;oe++,ye++,de++)ye===ae&&(ye=0),de===ae&&(de=0),L[oe]=b(ne[oe],ne[ye],ne[de]);F.push(L),B=B.concat(L)}let k;if(v===0)k=tn.triangulateShape(N,E);else{let G=[],Q=[];for(let ne=0;ne<v;ne++){let oe=ne/v,ae=d*Math.cos(oe*Math.PI/2),ye=p*Math.sin(oe*Math.PI/2)+g;for(let de=0,we=N.length;de<we;de++){let _e=P(N[de],W[de],ye);Z(_e.x,_e.y,-ae),oe===0&&G.push(_e)}for(let de=0,we=U;de<we;de++){let _e=E[de];L=F[de];let q=[];for(let O=0,K=_e.length;O<K;O++){let ce=P(_e[O],L[O],ye);Z(ce.x,ce.y,-ae),oe===0&&q.push(ce)}oe===0&&Q.push(q)}}k=tn.triangulateShape(G,Q)}let z=k.length,H=p+g;for(let G=0;G<V;G++){let Q=h?P(I[G],B[G],H):I[G];m?(w.copy(S.normals[0]).multiplyScalar(Q.x),C.copy(S.binormals[0]).multiplyScalar(Q.y),T.copy(y[0]).add(w).add(C),Z(T.x,T.y,T.z)):Z(Q.x,Q.y,0)}for(let G=1;G<=u;G++)for(let Q=0;Q<V;Q++){let ne=h?P(I[Q],B[Q],H):I[Q];m?(w.copy(S.normals[G]).multiplyScalar(ne.x),C.copy(S.binormals[G]).multiplyScalar(ne.y),T.copy(y[G]).add(w).add(C),Z(T.x,T.y,T.z)):Z(ne.x,ne.y,f/u*G)}for(let G=v-1;G>=0;G--){let Q=G/v,ne=d*Math.cos(Q*Math.PI/2),oe=p*Math.sin(Q*Math.PI/2)+g;for(let ae=0,ye=N.length;ae<ye;ae++){let de=P(N[ae],W[ae],oe);Z(de.x,de.y,f+ne)}for(let ae=0,ye=E.length;ae<ye;ae++){let de=E[ae];L=F[ae];for(let we=0,_e=de.length;we<_e;we++){let q=P(de[we],L[we],oe);m?Z(q.x,q.y+y[u-1].y,y[u-1].x+ne):Z(q.x,q.y,f+ne)}}}X(),ee();function X(){let G=i.length/3;if(h){let Q=0,ne=V*Q;for(let oe=0;oe<z;oe++){let ae=k[oe];re(ae[2]+ne,ae[1]+ne,ae[0]+ne)}Q=u+v*2,ne=V*Q;for(let oe=0;oe<z;oe++){let ae=k[oe];re(ae[0]+ne,ae[1]+ne,ae[2]+ne)}}else{for(let Q=0;Q<z;Q++){let ne=k[Q];re(ne[2],ne[1],ne[0])}for(let Q=0;Q<z;Q++){let ne=k[Q];re(ne[0]+V*u,ne[1]+V*u,ne[2]+V*u)}}n.addGroup(G,i.length/3-G,0)}function ee(){let G=i.length/3,Q=0;J(N,Q),Q+=N.length;for(let ne=0,oe=E.length;ne<oe;ne++){let ae=E[ne];J(ae,Q),Q+=ae.length}n.addGroup(G,i.length/3-G,1)}function J(G,Q){let ne=G.length;for(;--ne>=0;){let oe=ne,ae=ne-1;ae<0&&(ae=G.length-1);for(let ye=0,de=u+v*2;ye<de;ye++){let we=V*ye,_e=V*(ye+1),q=Q+oe+we,O=Q+ae+we,K=Q+ae+_e,ce=Q+oe+_e;ie(q,O,K,ce)}}}function Z(G,Q,ne){l.push(G),l.push(Q),l.push(ne)}function re(G,Q,ne){j(G),j(Q),j(ne);let oe=i.length/3,ae=M.generateTopUV(n,i,oe-3,oe-2,oe-1);he(ae[0]),he(ae[1]),he(ae[2])}function ie(G,Q,ne,oe){j(G),j(Q),j(oe),j(Q),j(ne),j(oe);let ae=i.length/3,ye=M.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);he(ye[0]),he(ye[1]),he(ye[3]),he(ye[1]),he(ye[2]),he(ye[3])}function j(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function he(G){r.push(G.x),r.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bu(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new nr[i.type]().fromJSON(i)),new s(n,e.options)}},Fu={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new ue(r,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[i*3],d=e[i*3+1],p=e[i*3+2],g=e[r*3],v=e[r*3+1],x=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-f),new ue(h,1-p),new ue(g,1-x)]:[new ue(a,1-l),new ue(u,1-f),new ue(d,1-p),new ue(v,1-x)]}};function Bu(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qn=class s extends Be{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Fe(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,f=new _,h=new ue,d=new _,p=new _,g=new _,v=0,x=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:v=e[M+1].x-e[M].x,x=e[M+1].y-e[M].y,d.x=x*1,d.y=-v,d.z=x*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:v=e[M+1].x-e[M].x,x=e[M+1].y-e[M].y,d.x=x*1,d.y=-v,d.z=x*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(p)}for(let M=0;M<=t;M++){let y=n+M*u*i,m=Math.sin(y),S=Math.cos(y);for(let C=0;C<=e.length-1;C++){f.x=e[C].x*m,f.y=e[C].y,f.z=e[C].x*S,o.push(f.x,f.y,f.z),h.x=M/t,h.y=C/(e.length-1),a.push(h.x,h.y);let w=l[3*C+0]*m,T=l[3*C+1],R=l[3*C+0]*S;c.push(w,T,R)}}for(let M=0;M<t;M++)for(let y=0;y<e.length-1;y++){let m=y+M*e.length,S=m,C=m+e.length,w=m+e.length+1,T=m+1;r.push(S,C,T),r.push(w,T,C)}this.setIndex(r),this.setAttribute("position",new Re(o,3)),this.setAttribute("uv",new Re(a,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ue=class s extends Be{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],g=[],v=[];for(let x=0;x<u;x++){let M=x*h-o;for(let y=0;y<c;y++){let m=y*f-r;p.push(m,-M,0),g.push(0,0,1),v.push(y/a),v.push(1-x/l)}}for(let x=0;x<l;x++)for(let M=0;M<a;M++){let y=M+c*x,m=M+c*(x+1),S=M+1+c*(x+1),C=M+1+c*x;d.push(y,m,C),d.push(m,S,C)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},pn=class s extends Be{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],f=e,h=(t-e)/i,d=new _,p=new ue;for(let g=0;g<=i;g++){for(let v=0;v<=n;v++){let x=r+v/n*o;d.x=f*Math.cos(x),d.y=f*Math.sin(x),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}f+=h}for(let g=0;g<i;g++){let v=g*(n+1);for(let x=0;x<n;x++){let M=x+v,y=M,m=M+n+1,S=M+n+2,C=M+1;a.push(y,m,C),a.push(m,S,C)}}this.setIndex(a),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Nt=class s extends Be{constructor(e=new ct([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(i,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(o,2));function c(u){let f=i.length/3,h=u.extractPoints(t),d=h.shape,p=h.holes;tn.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,x=p.length;v<x;v++){let M=p[v];tn.isClockWise(M)===!0&&(p[v]=M.reverse())}let g=tn.triangulateShape(d,p);for(let v=0,x=p.length;v<x;v++){let M=p[v];d=d.concat(M)}for(let v=0,x=d.length;v<x;v++){let M=d[v];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let v=0,x=g.length;v<x;v++){let M=g[v],y=M[0]+f,m=M[1]+f,S=M[2]+f;n.push(y,m,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ou(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function Ou(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Ye=class s extends Be{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new _,h=new _,d=[],p=[],g=[],v=[];for(let x=0;x<=n;x++){let M=[],y=x/n,m=o+y*a,S=e*Math.cos(m),C=Math.sqrt(e*e-S*S),w=0;x===0&&o===0?w=.5/t:x===n&&l===Math.PI&&(w=-.5/t);for(let T=0;T<=t;T++){let R=T/t,I=i+R*r;f.x=-C*Math.cos(I),f.y=S,f.z=C*Math.sin(I),p.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),v.push(R+w,1-y),M.push(c++)}u.push(M)}for(let x=0;x<n;x++)for(let M=0;M<t;M++){let y=u[x][M+1],m=u[x][M],S=u[x+1][M],C=u[x+1][M+1];(x!==0||o>0)&&d.push(y,m,C),(x!==n-1||l<Math.PI)&&d.push(m,S,C)}this.setIndex(d),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(g,3)),this.setAttribute("uv",new Re(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ft=class s extends Be{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],f=[],h=new _,d=new _,p=new _;for(let g=0;g<=n;g++){let v=o+g/n*a;for(let x=0;x<=i;x++){let M=x/i*r;d.x=(e+t*Math.cos(v))*Math.cos(M),d.y=(e+t*Math.cos(v))*Math.sin(M),d.z=t*Math.sin(v),c.push(d.x,d.y,d.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),p.subVectors(d,h).normalize(),u.push(p.x,p.y,p.z),f.push(x/i),f.push(g/n)}}for(let g=1;g<=n;g++)for(let v=1;v<=i;v++){let x=(i+1)*g+v-1,M=(i+1)*(g-1)+v-1,y=(i+1)*(g-1)+v,m=(i+1)*g+v;l.push(x,M,m),l.push(M,y,m)}this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var yi=class s extends Be{constructor(e=new Zi(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new _,l=new _,c=new ue,u=new _,f=[],h=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(d,2));function g(){for(let y=0;y<t;y++)v(y);v(r===!1?t:0),M(),x()}function v(y){u=e.getPointAt(y/t,u);let m=o.normals[y],S=o.binormals[y];for(let C=0;C<=i;C++){let w=C/i*Math.PI*2,T=Math.sin(w),R=-Math.cos(w);l.x=R*m.x+T*S.x,l.y=R*m.y+T*S.y,l.z=R*m.z+T*S.z,l.normalize(),h.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,f.push(a.x,a.y,a.z)}}function x(){for(let y=1;y<=t;y++)for(let m=1;m<=i;m++){let S=(i+1)*(y-1)+(m-1),C=(i+1)*y+(m-1),w=(i+1)*y+m,T=(i+1)*(y-1)+m;p.push(S,C,T),p.push(C,w,T)}}function M(){for(let y=0;y<=t;y++)for(let m=0;m<=i;m++)c.x=y/t,c.y=m/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new nr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function bl(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Ka(i))i.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Ka(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function wt(s){let e={};for(let t=0;t<s.length;t++){let n=bl(s[t]);for(let i in n)e[i]=n[i]}return e}function Ka(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}var Se=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ji=class extends St{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Bs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}var In=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sr=class extends In{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vo,endingEnd:vo}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mo:r=e,a=2*t-n;break;case bo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mo:o=e,l=2*n-t;break;case bo:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),g=p*p,v=g*p,x=-h*v+2*h*g-h*p,M=(1+h)*v+(-1.5-2*h)*g+(-.5+h)*p+1,y=(-1-d)*v+(1.5+d)*g+.5*p,m=d*v-d*g;for(let S=0;S!==a;++S)r[S]=x*o[u+S]+M*o[c+S]+y*o[l+S]+m*o[f+S];return r}},rr=class extends In{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},or=class extends In{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ar=class extends In{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let p=(n-t)/(i-t),g=1-p;for(let v=0;v!==a;++v)r[v]=o[c+v]*g+o[l+v]*p;return r}let h=a*2,d=e-1;for(let p=0;p!==a;++p){let g=o[c+p],v=o[l+p],x=d*h+p*2,M=f[x],y=f[x+1],m=e*h+p*2,S=u[m],C=u[m+1],w=(n-t)/(i-t),T,R,I,E,A;for(let D=0;D<8;D++){T=w*w,R=T*w,I=1-w,E=I*I,A=E*I;let N=A*t+3*E*w*M+3*I*T*S+R*i-n;if(Math.abs(N)<1e-10)break;let P=3*E*(M-t)+6*I*w*(S-M)+3*T*(i-S);if(Math.abs(P)<1e-10)break;w=w-N/P,w=Math.max(0,Math.min(1,w))}r[p]=A*g+3*E*w*y+3*I*T*C+R*v}return r}},Bt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bs(t,this.TimeBufferType),this.values=Bs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bs(e.times,Array),values:Bs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new or(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ar(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zi:t=this.InterpolantFactoryMethodDiscrete;break;case Hs:t=this.InterpolantFactoryMethodLinear;break;case ks:t=this.InterpolantFactoryMethodSmooth;break;case yo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zi;case this.InterpolantFactoryMethodLinear:return Hs;case this.InterpolantFactoryMethodSmooth:return ks;case this.InterpolantFactoryMethodBezier:return yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Pc(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ks,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){let g=t[f+p];if(g!==t[h+p]||g!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Bt.prototype.ValueTypeName="";Bt.prototype.TimeBufferType=Float32Array;Bt.prototype.ValueBufferType=Float32Array;Bt.prototype.DefaultInterpolation=Hs;var Ln=class extends Bt{constructor(e,t,n){super(e,t,n)}};Ln.prototype.ValueTypeName="bool";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=zi;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends Bt{constructor(e,t,n,i){super(e,t,n,i)}};lr.prototype.ValueTypeName="color";var cr=class extends Bt{constructor(e,t,n,i){super(e,t,n,i)}};cr.prototype.ValueTypeName="number";var ur=class extends In{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Te.slerpFlat(r,0,o,c-a,o,c,l);return r}},es=class extends Bt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ur(this.times,this.values,this.getValueSize(),e)}};es.prototype.ValueTypeName="quaternion";es.prototype.InterpolantFactoryMethodSmooth=void 0;var Dn=class extends Bt{constructor(e,t,n){super(e,t,n)}};Dn.prototype.ValueTypeName="string";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=zi;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends Bt{constructor(e,t,n,i){super(e,t,n,i)}};hr.prototype.ValueTypeName="vector";var fr=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sl=new fr,dr=class{constructor(e){this.manager=e!==void 0?e:Sl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};dr.DEFAULT_MATERIAL_NAME="__DEFAULT";var pr=class extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var so=new Qe,Qa=new _,ja=new _,Lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Zo,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new Zn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Qa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qa),ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ja),t.updateMatrixWorld(),so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ki||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Os=new _,zs=new Te,en=new _,mr=class extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Os,zs,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,zs,en.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Os,zs,en),en.x===1&&en.y===1&&en.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Os,zs,en.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wn=new _,el=new ue,tl=new ue,gr=class extends mr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Vi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,el,tl),t.subVectors(tl,el)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Do=class extends Lo{constructor(){super(new gr(90,1,.5,500)),this.isPointLightShadow=!0}},ts=class extends pr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var ea="\\[\\]\\.:\\/",zu=new RegExp("["+ea+"]","g"),ta="[^"+ea+"]",ku="[^"+ea.replace("\\.","")+"]",Vu=/((?:WC+[\/:])*)/.source.replace("WC",ta),Gu=/(WCOD+)?/.source.replace("WCOD",ku),Hu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ta),Wu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ta),Xu=new RegExp("^"+Vu+Gu+Hu+Wu+"$"),qu=["material","materials","bones","map"],Uo=class{constructor(e,t,n){let i=n||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Xe=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zu,"")}static parseTrackName(e){let t=Xu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);qu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=Uo;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yp=new Float32Array(1);var nl=new Qe,mn=class{constructor(e,t,n=0,i=1/0){this.ray=new st(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Gi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nl),this}intersectObject(e,t=!0,n=[]){return No(e,this,n,t),n.sort(il),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)No(e[i],this,n,t);return n.sort(il),n}};function il(s,e){return s.distance-e.distance}function No(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)No(r[o],e,t,!0)}}var oa=class oa{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};oa.prototype.isMatrix2=!0;var Fo=oa;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ju=`#ifdef USE_ALPHAHASH
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
#endif`,eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ih=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
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
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh=`#ifdef USE_BATCHING
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
#endif`,ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hh=`#ifdef USE_IRIDESCENCE
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
#endif`,fh=`#ifdef USE_BUMPMAP
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
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_h=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vh=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mh=`#define PI 3.141592653589793
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
} // validated`,bh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sh=`vec3 transformedNormal = objectNormal;
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
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ch="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
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
#endif`,Nh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zh=`#ifdef USE_GRADIENTMAP
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
}`,kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Wh=`#ifdef USE_ENVMAP
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
#endif`,Xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
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
#endif`,Jh=`uniform sampler2D dfgLUT;
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
}`,Kh=`
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
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,jh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ef=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cf=`#if defined( USE_POINTS_UV )
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
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`#ifdef USE_MORPHTARGETS
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
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
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
#endif`,Sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,If=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Of=`float getShadowMask() {
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
}`,zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ed=`uniform sampler2D t2D;
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
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`#include <common>
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
}`,od=`#if DEPTH_PACKING == 3200
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
}`,ad=`#define DISTANCE
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
}`,ld=`#define DISTANCE
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
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
}`,fd=`uniform vec3 diffuse;
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
}`,dd=`#include <common>
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#define LAMBERT
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
}`,gd=`#define LAMBERT
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
}`,xd=`#define MATCAP
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
}`,_d=`#define MATCAP
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
}`,yd=`#define NORMAL
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
}`,vd=`#define NORMAL
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
}`,Md=`#define PHONG
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
}`,bd=`#define PHONG
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
}`,Sd=`#define STANDARD
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
}`,Td=`#define STANDARD
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
}`,wd=`#define TOON
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
}`,Ad=`#define TOON
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
}`,Ed=`uniform float size;
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Rd=`#include <common>
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
}`,Pd=`uniform vec3 color;
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
}`,Id=`uniform float rotation;
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:Qu,alphahash_pars_fragment:ju,alphamap_fragment:eh,alphamap_pars_fragment:th,alphatest_fragment:nh,alphatest_pars_fragment:ih,aomap_fragment:sh,aomap_pars_fragment:rh,batching_pars_vertex:oh,batching_vertex:ah,begin_vertex:lh,beginnormal_vertex:ch,bsdfs:uh,iridescence_fragment:hh,bumpmap_pars_fragment:fh,clipping_planes_fragment:dh,clipping_planes_pars_fragment:ph,clipping_planes_pars_vertex:mh,clipping_planes_vertex:gh,color_fragment:xh,color_pars_fragment:_h,color_pars_vertex:yh,color_vertex:vh,common:Mh,cube_uv_reflection_fragment:bh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:Th,displacementmap_vertex:wh,emissivemap_fragment:Ah,emissivemap_pars_fragment:Eh,colorspace_fragment:Ch,colorspace_pars_fragment:Rh,envmap_fragment:Ph,envmap_common_pars_fragment:Ih,envmap_pars_fragment:Lh,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Wh,envmap_vertex:Uh,fog_vertex:Nh,fog_pars_vertex:Fh,fog_fragment:Bh,fog_pars_fragment:Oh,gradientmap_pars_fragment:zh,lightmap_pars_fragment:kh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Gh,lights_pars_begin:Hh,lights_toon_fragment:Xh,lights_toon_pars_fragment:qh,lights_phong_fragment:Yh,lights_phong_pars_fragment:Zh,lights_physical_fragment:$h,lights_physical_pars_fragment:Jh,lights_fragment_begin:Kh,lights_fragment_maps:Qh,lights_fragment_end:jh,lightprobes_pars_fragment:ef,logdepthbuf_fragment:tf,logdepthbuf_pars_fragment:nf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:rf,map_fragment:of,map_pars_fragment:af,map_particle_fragment:lf,map_particle_pars_fragment:cf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:hf,morphinstance_vertex:ff,morphcolor_vertex:df,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:xf,normal_fragment_maps:_f,normal_pars_fragment:yf,normal_pars_vertex:vf,normal_vertex:Mf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:wf,iridescence_pars_fragment:Af,opaque_fragment:Ef,packing:Cf,premultiplied_alpha_fragment:Rf,project_vertex:Pf,dithering_fragment:If,dithering_pars_fragment:Lf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Bf,shadowmask_pars_fragment:Of,skinbase_vertex:zf,skinning_pars_vertex:kf,skinning_vertex:Vf,skinnormal_vertex:Gf,specularmap_fragment:Hf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:Zf,uv_pars_fragment:$f,uv_pars_vertex:Jf,uv_vertex:Kf,worldpos_vertex:Qf,background_vert:jf,background_frag:ed,backgroundCube_vert:td,backgroundCube_frag:nd,cube_vert:id,cube_frag:sd,depth_vert:rd,depth_frag:od,distance_vert:ad,distance_frag:ld,equirect_vert:cd,equirect_frag:ud,linedashed_vert:hd,linedashed_frag:fd,meshbasic_vert:dd,meshbasic_frag:pd,meshlambert_vert:md,meshlambert_frag:gd,meshmatcap_vert:xd,meshmatcap_frag:_d,meshnormal_vert:yd,meshnormal_frag:vd,meshphong_vert:Md,meshphong_frag:bd,meshphysical_vert:Sd,meshphysical_frag:Td,meshtoon_vert:wd,meshtoon_frag:Ad,points_vert:Ed,points_frag:Cd,shadow_vert:Rd,shadow_frag:Pd,sprite_vert:Id,sprite_frag:Ld},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new _},probesMax:{value:new _},probesResolution:{value:new _}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Tl={basic:{uniforms:wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:wt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:wt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:wt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:wt([me.points,me.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:wt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:wt([me.common,me.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:wt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:wt([me.sprite,me.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:wt([me.common,me.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:wt([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Tl.physical={uniforms:wt([Tl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var Dd=new De;Dd.set(-1,0,0,0,1,0,0,0,1);var R_={[zo]:"LINEAR_TONE_MAPPING",[ko]:"REINHARD_TONE_MAPPING",[Vo]:"CINEON_TONE_MAPPING",[Go]:"ACES_FILMIC_TONE_MAPPING",[Wo]:"AGX_TONE_MAPPING",[Xo]:"NEUTRAL_TONE_MAPPING",[Ho]:"CUSTOM_TONE_MAPPING"};var P_=new Float32Array(16),I_=new Float32Array(9),L_=new Float32Array(4);var D_={[zo]:"Linear",[ko]:"Reinhard",[Vo]:"Cineon",[Go]:"ACESFilmic",[Wo]:"AgX",[Xo]:"Neutral",[Ho]:"Custom"};var U_={[sl]:"SHADOWMAP_TYPE_PCF",[rl]:"SHADOWMAP_TYPE_VSM"};var N_={[cl]:"ENVMAP_TYPE_CUBE",[Yo]:"ENVMAP_TYPE_CUBE",[ul]:"ENVMAP_TYPE_CUBE_UV"};var F_={[Yo]:"ENVMAP_MODE_REFRACTION"};var B_={[Oo]:"ENVMAP_BLENDING_MULTIPLY",[al]:"ENVMAP_BLENDING_MIX",[ll]:"ENVMAP_BLENDING_ADD"};var Ud=new De;Ud.set(-1,0,0,0,1,0,0,0,1);var O_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var Y={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function ei(s,e,t,n,i,r=16){r=Math.min(r,n/2,i/2),s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.quadraticCurveTo(e+n,t,e+n,t+r),s.lineTo(e+n,t+i-r),s.quadraticCurveTo(e+n,t+i,e+n-r,t+i),s.lineTo(e+r,t+i),s.quadraticCurveTo(e,t+i,e,t+i-r),s.lineTo(e,t+r),s.quadraticCurveTo(e,t,e+r,t),s.closePath()}function $e(s,e,t,n,i,{top:r="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=s.createLinearGradient(e,t,e,t+i);c.addColorStop(0,r),c.addColorStop(1,o),s.fillStyle=c,ei(s,e,t,n,i,l),s.fill(),s.strokeStyle=a,s.lineWidth=1.5,s.stroke()}function _t(s,e,t){let n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),s.fillStyle=n,s.fillRect(0,0,e,t),s.save(),s.globalAlpha=.13,s.strokeStyle="#79b3d1",s.lineWidth=1;for(let i=0;i<8;i++)s.beginPath(),s.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),s.stroke();s.restore(),s.fillStyle=Y.gold,s.fillRect(32,0,96,4)}function te(s,e,t,n,i=28,r=Y.ink,o="600",a){s.font=`${o} ${i}px Arial`,s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",Number.isFinite(a)?s.fillText(e,t,n,a):s.fillText(e,t,n)}function gn(s,e,t,n,i,r=Y.gold){if(s.save(),s.translate(t,n),s.scale(i/48,i/48),s.lineWidth=2.8,s.lineCap="round",s.lineJoin="round",s.strokeStyle=r,s.fillStyle=r,e==="ball")s.beginPath(),s.arc(0,0,18,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-18,0),s.lineTo(18,0),s.stroke(),s.fillStyle="#183a51",s.beginPath(),s.arc(0,0,6,0,Math.PI*2),s.fill(),s.stroke();else if(e==="puff"){s.beginPath(),s.arc(0,3,16,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-14,-5),s.lineTo(-15,-19),s.lineTo(-5,-11),s.moveTo(14,-5),s.lineTo(15,-19),s.lineTo(5,-11),s.stroke(),s.beginPath(),s.arc(0,-8,5,0,Math.PI*1.5),s.stroke();for(let o of[-6,6])s.beginPath(),s.arc(o,3,2,0,Math.PI*2),s.fill();s.beginPath(),s.arc(0,7,5,.2,Math.PI-.2),s.stroke()}else if(e==="book")ei(s,-20,-15,40,32,4),s.stroke(),s.beginPath(),s.moveTo(0,-15),s.lineTo(0,17),s.moveTo(-14,-6),s.lineTo(-5,-6),s.moveTo(5,-6),s.lineTo(14,-6),s.stroke();else if(e==="trophy")s.beginPath(),s.moveTo(-13,-17),s.lineTo(13,-17),s.lineTo(9,-3),s.quadraticCurveTo(0,8,-9,-3),s.closePath(),s.stroke(),s.beginPath(),s.moveTo(0,5),s.lineTo(0,16),s.moveTo(-10,18),s.lineTo(10,18),s.moveTo(-13,-13),s.quadraticCurveTo(-25,-16,-19,-5),s.lineTo(-9,0),s.moveTo(13,-13),s.quadraticCurveTo(25,-16,19,-5),s.lineTo(9,0),s.stroke();else if(e==="golf")s.beginPath(),s.ellipse(0,13,18,6,0,0,Math.PI*2),s.stroke(),s.beginPath(),s.moveTo(-3,13),s.lineTo(-3,-20),s.lineTo(15,-14),s.lineTo(-3,-7),s.stroke(),s.beginPath(),s.arc(10,8,3,0,Math.PI*2),s.fill();else if(e==="car"){ei(s,-19,-15,38,30,5),s.stroke(),ei(s,-11,-9,22,14,3),s.stroke();for(let o of[-22,18])for(let a of[-13,7])ei(s,o,a,4,7,1),s.fill();s.beginPath(),s.moveTo(-12,10),s.lineTo(12,10),s.moveTo(0,-15),s.lineTo(0,-23),s.stroke()}else if(e==="target"){for(let o of[19,12,4])s.beginPath(),s.arc(0,0,o,0,Math.PI*2),s.stroke();s.beginPath(),s.moveTo(0,0),s.lineTo(20,-20),s.moveTo(12,-20),s.lineTo(20,-20),s.lineTo(20,-12),s.stroke()}else s.beginPath(),s.moveTo(-6,-12),s.lineTo(12,0),s.lineTo(-6,12),s.closePath(),s.fill();s.restore()}function wl(s,e,t,n,i,r){let o=e==="RC car racing"?{title:"RC car racing",sub:"Three laps \xB7 steer, race and beat your best",icon:"car",accent:Y.blue}:e==="Arcade wall of fame"?{title:"Arcade wall of fame",sub:"Personal bests \xB7 medals \xB7 trophy shelf",icon:"trophy",accent:Y.gold}:e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:Y.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:Y.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:Y.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:Y.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:Y.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:Y.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:Y.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:Y.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:Y.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:Y.pink}:null;if(o)$e(s,t,n,i,72,{top:r?"#365c70":"#21465e",bottom:r?"#25465a":"#19364b",stroke:r?o.accent:"#3b5c71"}),s.fillStyle=o.accent,ei(s,t+1,n+15,4,42,2),s.fill(),gn(s,o.icon,t+41,n+36,42,o.accent),te(s,o.title,t+82,n+31,i<600?26:29,Y.ink,"700"),te(s,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,Y.muted,"400",i-125),te(s,"\u203A",t+i-35,n+47,42,r?o.accent:Y.muted,"400");else{let a=e==="Resume";$e(s,t,n,i,72,{top:a?r?"#fff0c2":"#f8df9e":r?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":r?Y.gold:"#496379"}),a&&gn(s,"play",t+33,n+36,25,"#173247"),te(s,e,t+(a?60:24),n+46,28,a?"#122c40":Y.ink,"700")}}function Al(s,e){_t(s,1024,768),te(s,"TF JONES  /  PLAY IN THE YARD",44,37,19,Y.blue,"700"),te(s,"Mollie\u2019s adventures",44,93,48,Y.ink,"700"),te(s,"Point with your right hand, then pull the trigger.",44,132,24,Y.muted,"400"),$e(s,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),te(s,e,60,172,23,Y.mint,"500",900)}function aa(s,e,t,n,i){$e(s,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),te(s,e,n+9,i,21,Y.gold,"700"),te(s,t,n+45,i,21,Y.muted,"400")}function El(s,e=!1){aa(s,"Y","Games menu",44,663),aa(s,"B","Back",325,663),aa(s,"A",e?"Rescue / replay":"Replay round",548,663),s.strokeStyle="#355168",s.beginPath(),s.moveTo(44,692),s.lineTo(980,692),s.stroke(),te(s,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,Y.blue,"700"),te(s,e?"Race paused \xB7 grip brakes":"Right grip to teleport",674,731,21,Y.muted,"400")}function Cl(s,e){s.clearRect(0,0,768,192),$e(s,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),s.fillStyle=Y.gold,ei(s,23,27,5,138,2),s.fill(),s.font="600 32px Arial";let t=[],n="";for(let r of e.split(/\s+/)){let o=n?n+" "+r:r;s.measureText(o).width>660&&n?(t.push(n),n=r):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((r,o)=>te(s,r,47,i+o*42,32,Y.ink,"600"))}function Rl(s,{total:e,throws:t,best:n,last:i}){_t(s,1024,640),gn(s,"target",72,66,55,Y.mint),te(s,"STAFF-ROOM DARTS",119,79,40,Y.ink,"700"),te(s,"NINE DART CHALLENGE",39,136,24,Y.muted,"700"),te(s,String(e),36,281,142,Y.gold,"700"),te(s,"POINTS",280,277,32,Y.muted,"700"),$e(s,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),te(s,"PERSONAL BEST",721,203,24,Y.muted,"600"),te(s,String(n),721,264,52,Y.mint,"700");for(let r=0;r<9;r++){let o=r<t;$e(s,40+r*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),te(s,String(r+1),72+r*104,358,28,o?"#132e41":Y.muted,"700")}$e(s,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),te(s,i,61,458,36,Y.ink,"600",890),te(s,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,Y.mint,"600"),te(s,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,Y.muted,"400")}var Pl=new Map;function Rt(s,e,t="target",n=Y.gold,i=1.7){let r=[s,e,t,n].join("|"),o=Pl.get(r);if(!o){let u=document.createElement("canvas");u.width=1024,u.height=256;let f=u.getContext("2d");f.fillStyle="#0a1b2c",f.fillRect(0,0,1024,256),$e(f,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),f.fillStyle=n,f.fillRect(32,36,5,182),gn(f,t,110,128,88,n),te(f,s,192,123,58,Y.ink,"700",790),te(f,e,194,186,26,n,"600",775),o=new Ie(u),o.colorSpace=Ee,Pl.set(r,o)}let a=new ge;a.name=s+" \xB7 activity sign";let l=new xe(new Ue(i,i/4),new ve({map:o}));a.add(l);let c=new xe(new Me(i+.055,i/4+.055,.04),new Se({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var ns;function vi(){if(!ns){let s=document.createElement("canvas");s.width=512,s.height=1024;let e=s.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let r=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(r,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(r,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=r+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(r,Math.floor((l+n())*341),o,1)}ns=new Ie(s),ns.colorSpace=Ee,ns.anisotropy=4}return new Se({map:ns,color:16777215,roughness:.28,metalness:.04})}var la;function Un(s=.5,e=.32){if(!la){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),r=i.createRadialGradient(64,64,4,64,64,64);r.addColorStop(0,"rgba(4,12,20,.48)"),r.addColorStop(.55,"rgba(4,12,20,.2)"),r.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=r,i.fillRect(0,0,128,128),la=new Ie(n)}let t=new xe(new Ue(s,e),new ve({map:la,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function Nn(s=1.4){let e=new ge;e.name="Warm arcade light fitting";let t=new xe(new Me(s,.09,.17),new Se({color:2504518,roughness:.6}));e.add(t);let n=new xe(new Ue(s-.1,.115),new ve({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function Il(s){let e=new ts(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,s.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new _(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new _(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var dt={left:-1.03,right:1.03,front:.08,back:6.95},is=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function Fn(s,e,t){let n=.033,i=0,r=0;for(let o of t.ramps){let a=s-o.x,l=e-o.z,c=o.w/2,u=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=u)continue;let f=Math.min(.16,c*.3),h=Math.min(1,(c-Math.abs(a))/f),d=1-Math.abs(l)/u,p=o.h*h*d;.033+p>n&&(n=.033+p,i=h<1?-Math.sign(a)*o.h*d/f:0,r=-Math.sign(l||1e-4)*o.h*h/u)}return{height:n,gx:i,gz:r}}function Nd(s,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,s.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,s.z)),i=s.x-t,r=s.z-n,o=Math.hypot(i,r);if(o>=.038)return;if(o<1e-9){let l=[[s.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-s.x,1,0],[s.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-s.z,0,1]].sort((c,u)=>c[0]-u[0]);[,i,r]=l[0],s.x+=i*(l[0][0]+.038+1e-4),s.z+=r*(l[0][0]+.038+1e-4)}else i/=o,r/=o,s.x+=i*(.038-o+1e-4),s.z+=r*(.038-o+1e-4);let a=s.vx*i+s.vz*r;a<0&&(s.vx-=1.68*a*i,s.vz-=1.68*a*r)}function Fd(s,e,t,n,i,r){let o=i-t,a=r-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((s-t)*o+(e-n)*a)/l)):0;return Math.hypot(s-t-o*c,e-n-a*c)}function Dl(s,e,t){if(s.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),r=n/i;for(let o=0;o<i;o++){let a=s.x,l=s.z,c=Fn(s.x,s.z,e);s.vx-=7*c.gx*r,s.vz-=7*c.gz*r;let u=Math.hypot(s.vx,s.vz),f=Math.max(0,u-.4*r);u&&(s.vx*=f/u,s.vz*=f/u),s.x+=s.vx*r,s.z+=s.vz*r;for(let[h,d,p,g]of[["x","vx",dt.left+.038,dt.right-.038],["z","vz",dt.front+.038,dt.back-.038]])s[h]<p&&(s[h]=p,s[d]<0&&(s[d]*=-.72)),s[h]>g&&(s[h]=g,s[d]>0&&(s[d]*=-.72));for(let h of[...e.crates,...e.walls||[]])Nd(s,h);if(s.distance=(s.distance||0)+Math.hypot(s.x-a,s.z-l),s.y=Fn(s.x,s.z,e).height+.038,Math.hypot(s.vx,s.vz)<=1.15&&Fd(e.cup.x,e.cup.z,a,l,s.x,s.z)<.115-.038*.6){s.sunk=!0,s.x=e.cup.x,s.z=e.cup.z,s.vx=s.vz=0;break}Math.hypot(s.vx,s.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(s.vx=s.vz=0)}}var _r=s=>{let e=Math.hypot(s.x,s.y,s.z);return e>1e-5?{x:s.x/e,y:s.y/e,z:s.z/e}:null},ca=(s,e,t)=>({x:s.x+(e.x-s.x)*t,y:s.y+(e.y-s.y)*t,z:s.z+(e.z-s.z)*t}),yr=(s,e)=>s.x*e.x+s.y*e.y+s.z*e.z,Ll=(s,e)=>({x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x});function Ul(s,e,t,n,i=null){if(n<=0||n>.1)return null;let r=(e.x-s.x)/n,o=(e.y-s.y)/n,a=(e.z-s.z)/n;if(Math.hypot(r,o,a)>8||yr(s.forward,e.forward)<.4)return null;let l=i||{x:r,y:o,z:a};if(Math.hypot(l.x,l.y,l.z)>8)return null;let c=Math.hypot(e.x-s.x,e.y-s.y,e.z-s.z),u=Math.hypot(e.forward.x-s.forward.x,e.forward.y-s.forward.y,e.forward.z-s.forward.z),f=Math.max(1,Math.ceil((c+u*.12)/.008));for(let h=0;h<=f;h++){let d=h/f,p=ca(s,e,d),g=_r(ca(s.forward,e.forward,d)),v=_r(ca(s.side,e.side,d));if(!g||!v)continue;let x=_r(Ll(v,g)),M=x&&_r(Ll(g,x));if(!M)continue;let y={x:t.x-p.x,y:t.y-p.y,z:t.z-p.z},m=yr(y,M),S=yr(y,x),C=yr(y,g);if(Math.hypot(Math.max(0,Math.abs(m)-.104),Math.max(0,Math.abs(S)-.027),Math.max(0,Math.abs(C)-.058))>.038+.01)continue;let T=C>=0?1:-1,R={x:g.x*T,z:g.z*T},I=Math.hypot(R.x,R.z);if(I<.65)continue;R.x/=I,R.z/=I;let E=l.x*R.x+l.z*R.z;if(E<.07)continue;let A=Math.min(3.6,E*.92);return{vx:R.x*A,vz:R.z*A}}return null}var Bd=new Te().setFromAxisAngle(new _(1,0,0),-Math.PI/2);function Nl(s){let e=s.rightGripController,t=e&&e!==s.controller?e:s.controller;if(!t||t.visible===!1)return null;let n=t.getWorldPosition(new _),i=t.getWorldQuaternion(new Te);return e&&e!==s.controller&&i.multiply(Bd),{position:n,quaternion:i,down:new _(0,-1,0).applyQuaternion(i)}}function Fl(s){let e=new ge;e.name="Controller putter",s.add(e);let t=new Se({color:12964307,metalness:.72,roughness:.23}),n=new Se({color:1518388,roughness:.9}),i=(v,x,M=e)=>{let y=new xe(v,x);return M.add(y),y},r=i(new ke(.008,.009,1,10),t),o=i(new ke(.017,.02,.17,14),n);o.position.y=-.025;for(let v=0;v<5;v++){let x=i(new Ft(.018,.0011,4,12),new Se({color:5005926,roughness:.8}),o);x.rotation.x=Math.PI/2,x.position.y=-.065+v*.03}let a=new ge;a.name="Mallet putter head",e.add(a);let l=new ct;l.moveTo(-.083,-.05),l.lineTo(.083,-.05),l.quadraticCurveTo(.099,-.05,.099,-.03),l.lineTo(.099,.035),l.quadraticCurveTo(.099,.053,.077,.053),l.lineTo(-.077,.053),l.quadraticCurveTo(-.099,.053,-.099,.035),l.lineTo(-.099,-.03),l.quadraticCurveTo(-.099,-.05,-.083,-.05);let c=i(new Qt(l,{depth:.041,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:6}),t,a);c.rotation.x=Math.PI/2,c.position.y=.0205;let u=i(new Me(.18,.032,.004),new Se({color:3432035,roughness:.65}),a);u.position.z=-.055,i(new Me(.085,.003,.073),n,a).position.set(0,.026,.006);for(let v of[-.021,.021])i(new Me(.005,.002,.068),new ve({color:16248017}),a).position.set(v,.028,.004);i(new ke(.012,.014,.046,10),t,a).position.set(-.055,.026,.014);let d=.86;e.visible=!1;function p(v){d=Ge.clamp(v,.3,1.6),a.position.set(0,-d,0);let x=new _(-.055,-d+.044,.014);r.position.copy(x).multiplyScalar(.5),r.scale.y=x.length(),r.quaternion.setFromUnitVectors(new _(0,1,0),x.clone().normalize())}p(d);function g(v){e.position.copy(v.position),e.quaternion.copy(v.quaternion),e.updateMatrixWorld(!0);let x=a.getWorldPosition(new _),M=a.getWorldQuaternion(new Te);return{x:x.x,y:x.y,z:x.z,forward:new _(0,0,-1).applyQuaternion(M),side:new _(1,0,0).applyQuaternion(M),up:new _(0,1,0).applyQuaternion(M)}}return{root:e,head:a,face:u,size:p,update:g,get length(){return d}}}var xn;function Od(){if(!xn){let s=document.createElement("canvas");s.width=256,s.height=512;let e=s.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,r,1,2)}xn=new Ie(s),xn.colorSpace=Ee,xn.wrapS=xn.wrapT=Vt,xn.repeat.set(1/(dt.right-dt.left),1/(dt.back-dt.front)),xn.offset.set(.5,1.02),xn.anisotropy=4}return new Se({map:xn,roughness:.95})}function Bl(s,e,t,n){let i=new ge;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let r=new ge;r.name="Six-hole warehouse course",i.add(r);let o=O=>new Se({color:O,roughness:.65}),a=(O,K,ce,$,fe,Pe=r)=>{let pe=new xe(O,K);return pe.position.set(ce,$,fe),Pe.add(pe),pe},l=a(new Ye(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=Un(.16,.16);i.add(c);let u=Fl(i),f=u.root,h=u.head,d=new ve({color:16766588,transparent:!0,opacity:.78,depthWrite:!1,side:je}),p=a(new pn(.13,.142,40),d,0,0,0,i);p.name="Putter contact guide",p.rotation.x=-Math.PI/2,p.visible=!1;let g=new Tt(new Be().setFromPoints([new _,new _]),new St({color:8645568,transparent:!0,opacity:.7,depthWrite:!1}));g.name="Putter face direction",g.visible=!1,i.add(g);let v=document.createElement("canvas");v.width=1024,v.height=640;let x=v.getContext("2d"),M=new Ie(v);M.colorSpace=Ee;let y=a(new Ue(2.2,1.375),new ve({map:M}),0,0,0,i);y.name="Mini-golf scorecard";let m=null,S=!1,C=0,w=0,T=[],R=null,I=!1,E=!1,A=null,D=!1,U=!1,N=!1,P=0,V="Hold trigger and brush the putter through the ball.",b=null,W=!0,F=[],L=0,B=new Te,k=()=>T.reduce((O,K)=>O+K,0),z=is.reduce((O,K)=>O+K.par,0),H=()=>is[C];try{let O=localStorage.getItem("tfj-mini-golf-best-v1"),K=Number(O);O!==null&&Number.isFinite(K)&&K>=6&&(R=K)}catch{}function X(){_t(x,1024,640),te(x,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,Y.mint,"700"),te(x,N?"COURSE COMPLETE":`${C+1} / 6  \xB7  ${H().name.toUpperCase()}`,32,117,42,Y.ink,"700",954),te(x,N?`${k()} strokes  \xB7  Par ${z}`:`${w} strokes  \xB7  Par ${H().par}`,32,190,43,Y.gold,"700");for(let O=0;O<6;O++){let K=32+O*161,ce=O===C;$e(x,K,227,151,177,{top:ce?"#26594a":"#183d43",bottom:"#0d2934",stroke:ce?Y.gold:"#527779"}),te(x,`HOLE ${O+1}`,K+13,260,24,ce?Y.gold:Y.muted),te(x,T[O]===void 0?"\u2014":String(T[O]),K+18,334,58,Y.ink,"700"),te(x,`PAR ${is[O].par}`,K+13,382,22,Y.muted)}te(x,`TOTAL ${k()+(U?0:w)}  \xB7  BEST ${R??"\u2014"}`,32,459,32,Y.mint,"700"),te(x,V,32,513,26,Y.ink,"600",954),te(x,N?"A  PLAY AGAIN":U?"A  NEXT HOLE":"A  MOVE & FIT CLUB",32,578,27,Y.gold,"700"),te(x,"Y  PAUSE / MENU",684,578,26,Y.muted),M.needsUpdate=!0}function ee(){for(let O of[3,2,1.5,4,5,6])for(let K of[-30,-29,-28,-27]){let ce=!0;for(let $=-1.1;$<=1.1;$+=.275)for(let fe=0;fe<=7.8;fe+=.25)(s.blocked(O+$,K+fe,0)||Math.abs(s.groundAt(O+$,K+fe,.1))>.1)&&(ce=!1);if(ce)return new _(O,0,K)}return null}function J(){let O=vi();return O.roughness=.78,O}function Z(O){let K=a(new Me(O.w,.25,O.d),J(),O.x,.155,O.z);K.name="Pallet obstacle";for(let ce=0;ce<4;ce++)a(new Me(O.w/4-.018,.026,O.d+.01),J(),O.x+(ce-1.5)*O.w/4,.293,O.z);for(let ce of[-1,1])a(new Me(.025,.18,O.d+.018),o("#8d724d"),O.x+ce*(O.w/2-.018),.165,O.z)}function re(O){let $=[],fe=[],Pe=[];for(let Ae=0;Ae<=20;Ae++)for(let le=0;le<=12;le++){let He=O.x-O.w/2+O.w*le/12,We=O.z-O.d/2+O.d*Ae/20;$.push(He,Fn(He,We,H()).height+.002,We),fe.push(He,-We)}for(let Ae=0;Ae<20;Ae++)for(let le=0;le<12;le++){let He=Ae*13+le,We=He+1,ft=He+12+1,tt=ft+1;Pe.push(He,ft,We,We,ft,tt)}let pe=new Be;pe.setAttribute("position",new Re($,3)),pe.setAttribute("uv",new Re(fe,2)),pe.setIndex(Pe),pe.computeVertexNormals();let Le=J();Le.side=je;let Ne=new xe(pe,Le);Ne.name="Loading ramp",r.add(Ne)}function ie(){for(let le of[...r.children])le.traverse(He=>{He.geometry?.dispose(),He.material?.dispose()}),r.remove(le);r.position.copy(m);let O=H(),K=new ct;K.moveTo(dt.left,-dt.front),K.lineTo(dt.right,-dt.front),K.lineTo(dt.right,-dt.back),K.lineTo(dt.left,-dt.back),K.closePath();let ce=new Jn;ce.absarc(O.cup.x,-O.cup.z,.115,0,Math.PI*2,!1),K.holes.push(ce),a(new Me(2.2,.027,7),o("#173848"),0,.016,3.51);let $=a(new Nt(K,40),Od(),0,.033,0);$.rotation.x=-Math.PI/2,$.name="Putting green";for(let le of[-1.065,1.065])a(new Me(.07,.14,7),o("#203c4b"),le,.099,3.51),a(new Me(.045,.006,7),new Se({color:15320952,emissive:11770199,emissiveIntensity:.25}),le,.172,3.51);for(let le of[.045,6.985])a(new Me(2.2,.14,.07),o("#203c4b"),0,.099,le);let fe=a(new Wi(.115,40),new ve({color:398620}),O.cup.x,.034,O.cup.z);fe.rotation.x=-Math.PI/2;let Pe=a(new pn(.115,.115+.015,40),new ve({color:16768133,side:je}),O.cup.x,.035,O.cup.z);Pe.rotation.x=-Math.PI/2,a(new ke(.009,.009,.68,8),o("#e2e7d7"),O.cup.x,.37,O.cup.z);let pe=new Be;pe.setAttribute("position",new Re([0,0,0,.23,-.035,0,0,-.14,0],3)),pe.computeVertexNormals();let Le=a(pe,new ve({color:16176260,side:je}),O.cup.x,.7,O.cup.z);Le.name="Hole flag";let Ne=a(new pn(.105,.123,32),new ve({color:16049069,side:je}),O.tee.x,.035,O.tee.z);if(Ne.rotation.x=-Math.PI/2,O.crates.forEach(Z),O.ramps.forEach(re),O.pipe){let le=new ct;for(let We=0;We<=32;We++){let ft=Math.PI-We*Math.PI/32,tt=Math.cos(ft)*.43,Si=Math.sin(ft)*.43;We?le.lineTo(tt,Si):le.moveTo(tt,Si)}for(let We=0;We<=32;We++){let ft=We*Math.PI/32;le.lineTo(Math.cos(ft)*.34,Math.sin(ft)*.34)}le.closePath();let He=a(new Qt(le,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);He.name="Warehouse pipe tunnel"}y.position.copy(m).add(new _(0,2.42,.3)),a(new Me(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let le of[-1.09,1.09])a(new Me(.035,3.55,.035),o("#254252"),le,1.78,.26);let Ae=Rt("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",Y.mint,2.05);Ae.position.set(0,3.5,.3),r.add(Ae)}function j(){return b&&!b.sunk&&Math.hypot(b.vx,b.vz)>.04}function he(O,K){return!s.blocked(m.x+O,m.z+K,0)&&Math.abs(s.groundAt(m.x+O,m.z+K,.1))<.1&&![...H().crates,...H().walls||[]].some(ce=>Math.abs(O-ce.x)<ce.w/2+.2&&Math.abs(K-ce.z)<ce.d/2+.2)}function G(){if(!b||j()||U)return!1;let O=[[-.28,.78],[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[K,ce]of O){let $=b.x+K,fe=b.z+ce;if(he($,fe)&&s.xrTeleport(m.x+$,0,m.z+fe))return s.xrFace?.(0),oe(),W=!0,!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function Q(){w=0,U=N=!1,P=0,I=E=!1,A=null,F=[],W=!0;let O=H();b={x:O.tee.x,z:O.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,ie(),de(),V="Hold your hand comfortably. A moves and fits your club.",G(),X()}function ne(){let O=ee();return!O||!s.xrTeleport(O.x,0,O.z+7.03)?!1:(m=O,C=0,T=[],S=i.visible=!0,D=!1,B.identity(),Q(),t("Mini-golf! Hold your controller comfortably and look down the green. A moves and fits the club. Hold trigger to putt."),!0)}function oe(){I=E=!1,A=null,F=[],f.visible=p.visible=g.visible=!1}function ae(){S=i.visible=!1,oe()}function ye(O){if(U)return;U=!0,oe(),T.push(w),P=O?.8:0;let K=H(),ce=O?w===1?"Hole in one!":w<K.par?"Under par!":w===K.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(N=C===is.length-1,N){let $=k(),fe=$<=z?"Gold":$<=z+6?"Silver":"Bronze";R=R===null?$:Math.min(R,$);try{localStorage.setItem("tfj-mini-golf-best-v1",String(R))}catch{}V=`${fe} medal! ${$} strokes across six holes.`,t(V)}else V=`${ce} ${w} strokes. A for hole ${C+2}.`,t(V);n(O?.7:.2),X()}function de(){l.position.set(m.x+b.x,m.y+b.y,m.z+b.z),c.position.set(m.x+b.x,m.y+Fn(b.x,b.z,H()).height+.003,m.z+b.z)}function we(O){let K=Nl(O);if(!K)return oe(),null;if(W){let $=O.forward.clone();$.y=0,$.lengthSq()<.01&&$.set(0,0,-1),$.normalize();let fe=new Te().setFromAxisAngle(new _(0,1,0),Math.atan2(-$.x,-$.z)),Pe=Fn(K.position.x-m.x,K.position.z-m.z,H()).height,pe=K.position.y-m.y-Pe-.028;if(pe<.3||pe>1.6)return oe(),null;B.copy(K.quaternion).invert().multiply(fe),u.size(pe),W=!1,A=null,F=[],V="Club fitted. Mint guide = level face. Hold trigger to putt.",X()}K.quaternion.multiply(B);let ce=u.update(K);return ce.x-=m.x,ce.y-=m.y,ce.z-=m.z,f.visible=!U,ce}function _e(O){if(p.visible=!!O&&!j()&&!U,g.visible=!1,!p.visible)return;p.position.set(m.x+b.x,m.y+Fn(b.x,b.z,H()).height+.004,m.z+b.z);let K=Math.hypot(O.x-b.x,O.z-b.z)<.7,ce=Math.hypot(O.forward.x,O.forward.z),$=Math.abs(O.y-b.y)<.07&&Math.abs(O.up.y)>.8&&ce>.8;if(d.color.set(K&&$?8645568:16766588),u.face.material.color.set(K&&$?8636851:3432035),!K||!$)return;g.visible=!0;let fe=O.forward.x/ce,Pe=O.forward.z/ce,pe=g.geometry.attributes.position;for(let Le=0;Le<2;Le++){let Ne=Le?.52:.07,Ae=O.x+fe*Ne,le=O.z+Pe*Ne;pe.setXYZ(Le,m.x+Ae,m.y+Fn(Ae,le,H()).height+.005,m.z+le)}pe.needsUpdate=!0,g.geometry.computeBoundingSphere()}function q(O,K){if(!S)return;let ce=Math.max(0,Math.min(.1,O.dt)),$=!!O.right?.gamepad?.buttons[0]?.pressed,fe=!!O.right?.gamepad?.buttons[4]?.pressed,Pe=fe&&!D;if(D=fe,L+=ce,K){oe();return}if(Pe){if(U){N?(C=0,T=[]):C++,Q();return}else if(!j()){G();return}}$?I=!U:(I=!1,E=!0,A=null,F=[]);let pe=we(O);if(_e(pe),$&&E&&!U&&!j()&&pe&&A){for(F.push({time:L,p:pe});F.length>2&&L-F[1].time>.045;)F.shift();let Le=F[0],Ne=L-Le.time,Ae=Ne>0?{x:(pe.x-Le.p.x)/Ne,y:(pe.y-Le.p.y)/Ne,z:(pe.z-Le.p.z)/Ne}:null,le=Ul(A,pe,b,ce,Ae);le&&(b.vx=le.vx,b.vz=le.vz,w++,E=!1,n(.3),V=`Putt ${w} \xB7 wait for the ball to stop.`,X())}if(A=$&&pe?pe:null,$&&pe&&!F.length&&F.push({time:L,p:pe}),!U){let Le=b.x,Ne=b.z;Dl(b,H(),ce);let Ae=b.x-Le,le=b.z-Ne,He=Math.hypot(Ae,le);He&&l.rotateOnWorldAxis(new _(le,0,-Ae).normalize(),He/.038),de(),b.sunk?ye(!0):!j()&&w>=8?ye(!1):!j()&&V.startsWith("Putt")&&(V="Ball stopped. A moves beside it and refits your club.",X())}P>0&&(P=Math.max(0,P-ce),l.position.y=m.y+.033+.038-(.8-P)*.2,l.scale.setScalar(Math.max(.12,P/.8)),c.visible=!1,P||(l.visible=!1))}return{root:i,course:r,putter:f,head:h,board:y,ball:l,ballGuide:p,aimLine:g,start:ne,stop:ae,cancel:oe,tick:q,moveBesideBall:G,get clubLength(){return u.length},get active(){return S},get origin(){return m},get held(){return I},get state(){return b},get hole(){return C},get strokes(){return w},get scores(){return T},get total(){return k()},get holeReady(){return U},get complete(){return N},get best(){return R},get layout(){return H()}}}function Mi(s,e=.18){return Math.abs(s)<=e?0:Math.sign(s)*(Math.abs(s)-e)/(1-e)}function ss(s){let e=s?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function Ol(s,e,t,n){Math.abs(s)<.25&&(n=!1);let i=0;return e==="smooth"?i=-Mi(s)*Math.PI/3*t:Math.abs(s)>.65&&!n&&(i=-Math.sign(s)*Math.PI/6,n=!0),{angle:i,latched:n}}function ua(s,e,t){return{x:s*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-s*Math.sin(t)}}var yt={bounds:{minX:-2.05,maxX:2.05,minZ:-3.3,maxZ:3.3},obstacles:[{x:0,z:0,halfX:.68,halfZ:1.75}],start:{x:-1.37,z:1.62,yaw:0},checkpoints:[{x:-1.37,z:1.95,nx:0,nz:-1,halfWidth:.66},{x:-1.37,z:-1.35,nx:0,nz:-1,halfWidth:.66},{x:0,z:-2.52,nx:1,nz:0,halfWidth:.77},{x:1.37,z:-1.35,nx:0,nz:1,halfWidth:.66},{x:1.37,z:1.35,nx:0,nz:1,halfWidth:.66},{x:0,z:2.52,nx:-1,nz:0,halfWidth:.77}]},ha=1/240,zd=.29,kd=.49,os=(s,e,t)=>Math.max(e,Math.min(t,s)),fa=(s,e,t)=>Number.isFinite(s)?os(s,e,t):0,Vd=s=>Math.atan2(Math.sin(s),Math.cos(s));function da(){return{...yt.start,speed:0,wheelAngle:0,completedLaps:0,nextCheckpoint:1,lastCheckpoint:0,lapTime:0,elapsed:0,laps:[],finished:!1,collisions:0,rescues:0,distance:0,justLap:null,justFinished:!1,checkpointPassed:null,justCollision:!1,_accumulator:0,_contactCooldown:0}}function rs(s,e,t){let n=-Math.sin(s.yaw),i=-Math.cos(s.yaw),r=s.speed*(n*e+i*t);r>=-.015||(s.speed=os(s.speed-1.25*r*(n*e+i*t),-1.1,2.8),s._contactCooldown<=0&&(s.collisions++,s.justCollision=!0,s._contactCooldown=.18))}function Gd(s){let e=yt.bounds,t=.28;s.x<e.minX+t&&(s.x=e.minX+t,rs(s,1,0)),s.x>e.maxX-t&&(s.x=e.maxX-t,rs(s,-1,0)),s.z<e.minZ+t&&(s.z=e.minZ+t,rs(s,0,1)),s.z>e.maxZ-t&&(s.z=e.maxZ-t,rs(s,0,-1));for(let n of yt.obstacles){let i=os(s.x,n.x-n.halfX,n.x+n.halfX),r=os(s.z,n.z-n.halfZ,n.z+n.halfZ),o=s.x-i,a=s.z-r,l=Math.hypot(o,a);if(!(l>=t)){if(l<1e-9){let c=[[s.x-n.x+n.halfX,-1,0],[n.x+n.halfX-s.x,1,0],[s.z-n.z+n.halfZ,0,-1],[n.z+n.halfZ-s.z,0,1]].sort((d,p)=>d[0]-p[0]),[u,f,h]=c[0];o=f,a=h,s.x+=o*(u+t+1e-5),s.z+=a*(u+t+1e-5)}else o/=l,a/=l,s.x+=o*(t-l+1e-5),s.z+=a*(t-l+1e-5);rs(s,o,a)}}}function Hd(s,e,t){let n=yt.checkpoints[s.nextCheckpoint],i=(e-n.x)*n.nx+(t-n.z)*n.nz,r=(s.x-n.x)*n.nx+(s.z-n.z)*n.nz;if(i>0||r<=0||r-i<1e-9)return null;let o=-i/(r-i),a=e+(s.x-e)*o,l=t+(s.z-t)*o;return Math.abs((a-n.x)*-n.nz+(l-n.z)*n.nx)>n.halfWidth?null:{fraction:o,x:a,z:l}}function Wd(s,e,t){s._contactCooldown=Math.max(0,s._contactCooldown-t),s.wheelAngle+=(-e.steer*kd-s.wheelAngle)*(1-Math.exp(-12*t));let n=s.speed,i=.32+.15*Math.abs(s.speed);e.brake>.01?s.speed>.025?s.speed=Math.max(0,s.speed-(5.8*e.brake+i)*t):s.speed=Math.min(0,Math.max(-1.1,s.speed-(2.4*e.brake-i)*t)):e.throttle>.01?s.speed<0?s.speed=Math.min(0,s.speed+(3.6*e.throttle+i)*t):s.speed=Math.max(0,Math.min(2.8,s.speed+(3.6*e.throttle-i)*t)):s.speed=Math.sign(s.speed)*Math.max(0,Math.abs(s.speed)-i*t),s.speed=os(s.speed,-1.1,2.8);let r=(n+s.speed)/2,o=r*Math.tan(s.wheelAngle)/zd,a=s.yaw+o*t/2,l=s.x,c=s.z;s.x-=Math.sin(a)*r*t,s.z-=Math.cos(a)*r*t,s.yaw=Vd(s.yaw+o*t),Gd(s),s.distance+=Math.hypot(s.x-l,s.z-c);let u=Hd(s,l,c);if(u){let f=s.nextCheckpoint;if(s.checkpointPassed=f,s.lastCheckpoint=f,s.nextCheckpoint=(f+1)%yt.checkpoints.length,f===0){let h=s.lapTime+t*u.fraction;if(s.laps.push(h),s.completedLaps++,s.justLap=h,s.lapTime=-t*u.fraction,s.completedLaps>=3){s.finished=!0,s.justFinished=!0,s.x=u.x,s.z=u.z,s.speed=0,s.elapsed+=t*u.fraction,s.lapTime=0;return}}}s.elapsed+=t,s.lapTime+=t}function zl(s,e={},t=0){if(s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,s.finished||!Number.isFinite(t)||t<=0)return s;let n={steer:fa(e.steer,-1,1),throttle:fa(e.throttle,0,1),brake:fa(e.brake,0,1)};for(s._accumulator+=Math.min(.1,t);s._accumulator>=ha-1e-12&&!s.finished;)s._accumulator=Math.max(0,s._accumulator-ha),Wd(s,n,ha);return s.finished&&(s._accumulator=0),s}function kl(s){if(s.finished)return!1;let e=yt.checkpoints[s.lastCheckpoint];return s.x=e.x+e.nx*.25,s.z=e.z+e.nz*.25,s.yaw=Math.atan2(-e.nx,-e.nz),s.speed=0,s.wheelAngle=0,s.elapsed+=2,s.lapTime+=2,s.rescues++,s._accumulator=0,s._contactCooldown=0,s.justLap=null,s.justFinished=!1,s.checkpointPassed=null,s.justCollision=!1,!0}function nn(s){if(!Number.isFinite(s)||s<0)return"\u2014";let e=Math.floor(s*100),t=Math.floor(e/6e3),n=e%6e3;return`${t}:${String(Math.floor(n/100)).padStart(2,"0")}.${String(n%100).padStart(2,"0")}`}var rt=.025,Pt=(s,e=.6,t=0)=>new Se({color:s,roughness:e,metalness:t}),Vl=(s,e,t,n=10)=>s+(e-s)*(1-Math.exp(-Math.max(0,t)*n));function Ht(s,e,t,n=0,i=0,r=0){let o=new xe(e,t);return o.position.set(n,i,r),s.add(o),o}function et(s,e,t,n,i,r,o,a){return Ht(s,new Me(t,n,i),e,r,o,a)}function as(s,e,t,n){let i=new Jt(new Me(1,1,1),e,t.length),r=new it;i.name=n;for(let o=0;o<t.length;o++){let[a,l,c,u,f,h,d=0]=t[o];r.position.set(u,f,h),r.scale.set(a,l,c),r.rotation.set(d,0,0),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}return i.instanceMatrix.needsUpdate=!0,i.computeBoundingSphere(),s.add(i),i}function Bn(s,e,t,n,i=.005){let r=new _(...t),o=new _(...n),a=Ht(s,new ke(i,i,r.distanceTo(o),6),e);return a.position.copy(r).add(o).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new _(0,1,0),o.sub(r).normalize()),a}function Tr(s,e,t,n,i,r=rt+.001){let o=Ht(s,e,t,n,r,i);return o.rotation.x=-Math.PI/2,o}var Sr,On;function Xd(){if(!Sr){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d");e.fillStyle="#f8e6aa",e.beginPath(),e.arc(64,64,59,0,Math.PI*2),e.fill(),e.strokeStyle="#16364a",e.lineWidth=7,e.stroke(),e.fillStyle="#133348",e.font="bold 94px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("7",64,71),Sr=new Ie(s),Sr.colorSpace=Ee}return new ve({map:Sr,transparent:!0,depthWrite:!1})}function qd(){if(!On){let s=document.createElement("canvas");s.width=s.height=256;let e=s.getContext("2d");e.fillStyle="#334b5b",e.fillRect(0,0,256,256);let t=47;for(let n=0;n<7e3;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let r=t%256;e.fillStyle=n%2?"rgba(175,204,211,.065)":"rgba(10,26,42,.15)",e.fillRect(i,r,1,1)}On=new Ie(s),On.colorSpace=Ee,On.wrapS=On.wrapT=Vt,On.repeat.set(4,6),On.anisotropy=2}return new Se({map:On,roughness:.9})}function Gl(s){let e=new ge;e.name="TF Jones seven \xB7 RC rally buggy",s.add(e);let t=new ge;t.name="Sprung rally body",e.add(t);let n=Pt("#217db6",.32,.16),i=Pt("#0f2d3d",.52),r=Pt("#0c1720",.85),o=Pt("#e4edf2",.3,.55),a=Pt("#ffd66b",.38,.1),l=Pt("#244e68",.18,.55),c=document.querySelector?.(".brand img"),u=[];function f(N,P=.5,V=""){let b=document.createElement("canvas");b.width=1024,b.height=N;let W=new Ie(b);W.colorSpace=Ee,W.anisotropy=2;function F(){let L=b.getContext("2d");L.clearRect(0,0,1024,N),L.fillStyle="#0f2d3d",L.fillRect(0,0,1024,N),N>=224&&(L.fillStyle="#ffd66b",L.fillRect(24,16,976,9),L.fillRect(24,N-25,976,9));let B=N*P-85;if(c?.naturalWidth>0&&c?.naturalHeight>0){let k=document.createElement("canvas");k.width=1024,k.height=192;let z=k.getContext("2d");z.drawImage(c,0,0,c.naturalWidth,c.naturalHeight*.53,62,11,900,171),z.globalCompositeOperation="source-in",z.fillStyle="#fff",z.fillRect(0,0,1024,192),z.globalCompositeOperation="source-over",L.drawImage(k,0,B-11)}else L.fillStyle="#fff",L.font="italic 900 162px Arial",L.textAlign="center",L.textBaseline="middle",L.fillText("TFJONES",512,B+85,900);V&&(L.fillStyle="#ffd66b",L.font="bold 60px Arial",L.textAlign="center",L.textBaseline="middle",L.fillText(V,512,N*.84,900)),W.needsUpdate=!0}return u.push(F),F(),new Se({map:W,roughness:.4,metalness:.05})}function h(N,P,V,b,W,F,L){let B=et(t,N,P,V,b,W,F,L),k=B.geometry,z=[...k.groups],H=[...new Set(N)],X=[];k.clearGroups();for(let ee=0;ee<H.length;ee++){let J=X.length;for(let Z of z)if(N[Z.materialIndex]===H[ee])for(let re=Z.start;re<Z.start+Z.count;re++)X.push(k.index.array[re]);k.addGroup(J,X.length-J,ee)}return k.setIndex(X),B.material=H,B}let d=f(512,.44,"RACING 07"),p=f(720,.73),g=f(192),v=f(224);c&&!c.complete&&c.addEventListener?.("load",()=>u.forEach(N=>N()),{once:!0});let x=new Se({color:"#fff1bb",emissive:"#ffe3a0",emissiveIntensity:.75,roughness:.28}),M=new Se({color:"#ff4156",emissive:"#e62347",emissiveIntensity:.55,roughness:.3}),y=Un(.49,.59);y.position.y=.002,e.add(y),et(t,i,.252,.029,.382,0,.111,0).name="Buggy chassis";let m=new ct;for(let[N,[P,V]]of[[-.081,-.204],[.081,-.204],[.123,-.122],[.12,.161],[.091,.19],[-.091,.19],[-.12,.161],[-.123,-.122]].entries())N===0?m.moveTo(P,-V):m.lineTo(P,-V);m.closePath();let S=Ht(t,new Qt(m,{depth:.054,bevelEnabled:!0,bevelSize:.009,bevelThickness:.006,bevelSegments:2,steps:1}),n,0,.122,0);S.rotation.x=-Math.PI/2,S.name="Blue rally body shell",h([i,i,p,i,i,i],.17,.017,.12,0,.185,-.128).name="TF Jones branded bonnet";for(let N of[-.071,.071])et(t,a,.015,.002,.12,N,.194,-.13);et(t,i,.284,.038,.027,0,.108,-.211).name="Front crash bumper",et(t,i,.26,.03,.026,0,.108,.211);for(let N of[-1,1])h([g,g,a,a,i,i],.016,.034,.18,N*.128,.157,.033).name=N<0?"TF Jones left side panel":"TF Jones right side panel",Bn(t,o,[N*.126,.14,-.1],[N*.126,.16,.13],.006),Bn(t,i,[N*.065,.113,-.13],[N*.146,.087,-.136],.011),Bn(t,i,[N*.065,.113,.13],[N*.146,.087,.136],.011);let C=et(t,l,.167,.085,.008,0,.226,-.037);C.rotation.x=-.34,et(t,l,.16,.07,.006,0,.224,.077).rotation.x=.12,et(t,i,.18,.008,.097,0,.269,.021);for(let N of[-.091,.091])Bn(t,a,[N,.177,-.054],[N,.272,-.008],.006),Bn(t,a,[N,.177,.09],[N,.272,.065],.006),Bn(t,a,[N,.272,-.008],[N,.272,.065],.006);h([n,n,d,i,n,n],.187,.01,.091,0,.279,.025).name="TF Jones racing roof";let w=Tr(t,new Ue(.063,.063),Xd(),0,-.166,.195);w.name="Race number seven";for(let N of[-.069,.069]){Bn(t,i,[N,.174,.146],[N,.245,.195],.008);let P=Ht(t,new ke(.014,.014,.009,10),x,N,.16,-.202);P.rotation.x=Math.PI/2,et(t,M,.033,.014,.008,N,.158,.195)}h([i,i,v,i,i,i],.29,.016,.063,0,.249,.202).name="TF Jones rear rally spoiler";for(let N of[-.14,.14])et(t,a,.012,.03,.065,N,.257,.202);let T=Bn(t,i,[.072,.18,.094],[.085,.374,.118],.0018);T.name="RC receiver antenna",Ht(t,new Ye(.005,6,4),a,.085,.375,.118);let R=[];for(let N of[-1,1])for(let P of[!0,!1]){let V=new ge;V.name=P?"Steering wheel pivot":"Rear axle",V.position.set(N*.146,.078,P?-.137:.137),e.add(V);let b=new ge;b.name=(P?"Front":"Rear")+(N<0?" left":" right")+" tire",V.add(b);let W=Ht(b,new ke(.077,.077,.055,16),r);W.rotation.z=Math.PI/2;let F=[],L=[];for(let B of[-1,1]){let k=Ht(b,new ke(.043,.043,.005,12),o,B*.028,0,0);k.rotation.z=Math.PI/2;let z=Ht(b,new ke(.015,.015,.007,10),a,B*.032,0,0);z.rotation.z=Math.PI/2;for(let H=0;H<5;H++){let X=H*Math.PI*2/5;F.push([.003,.011,.028,B*.032,Math.cos(X)*.024,Math.sin(X)*.024,-X])}}for(let B=0;B<10;B++){let k=B*Math.PI*2/10;L.push([.05,.006,.019,0,Math.cos(k)*.077,Math.sin(k)*.077,k])}as(b,i,F,"Rim spokes"),as(b,r,L,"Raised tire tread"),R.push({pivot:V,wheel:b,front:P})}let I=0,E=0,A=0,D=0;function U(N,P=0){e.position.set(N.x,N.y??rt,N.z),e.rotation.y=N.yaw??0;let V=Number.isFinite(N.speed)?N.speed:0,b=Number.isFinite(N.wheelAngle)?N.wheelAngle:(N.steer||0)*.5;I=(I+V*Math.max(0,Math.min(.1,P))/.077)%(Math.PI*2);for(let F of R)F.pivot.rotation.y=F.front?b:0,F.wheel.rotation.x=-I;let W=P>.001?Ge.clamp((V-E)/P,-7,7):0;A=Vl(A,Ge.clamp(-b*V*.075,-.11,.11),P),D=Vl(D,W*.005,P),t.rotation.z=A,t.rotation.x=D,t.position.y=Math.abs(V)>.08?Math.sin(I*1.7)*.0015:0,E=V}return U({x:0,z:0,yaw:0,speed:0},0),{root:e,wheels:R,body:t,shadow:y,update:U}}function Yd(s,e,t,n,i,r){let o=new ct;o.moveTo(0,.16),o.lineTo(.125,-.005),o.lineTo(.05,-.005),o.lineTo(.05,-.14),o.lineTo(-.05,-.14),o.lineTo(-.05,-.005),o.lineTo(-.125,-.005),o.closePath();let a=Tr(s,new Nt(o),r,e,t);return a.rotation.z=Math.atan2(-n,-i),a.name="Clockwise racing arrow",a}function Zd(s,e,t){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d");i.fillStyle="#102638",i.fillRect(0,0,128,128),i.strokeStyle="#8fe1c3",i.lineWidth=6,i.strokeRect(5,5,118,118),i.fillStyle="#f7fafc",i.font="bold 81px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(String(e+1),64,70);let r=new Ie(n);r.colorSpace=Ee;let o=Tr(s,new Ue(.21,.21),new ve({map:r}),t.x-t.nx*.33,t.z-t.nz*.33);return o.rotation.z=Math.atan2(-t.nx,-t.nz),o.name="Checkpoint "+(e+1)+" number",o}function Hl(s){let e=new ge;e.name="Warehouse RC racing circuit",s.add(e);let{minX:t,maxX:n,minZ:i,maxZ:r}=yt.bounds,o=n-t,a=r-i,l=(t+n)/2,c=(i+r)/2,u=Pt("#132e40",.72),f=Pt("#29495b"),h=Pt("#f4e6bc",.6),d=Pt("#dd6574",.62),p=Pt("#f6d484",.5),g=Pt("#162a34",.9),v=new Se({color:"#8fe1c3",emissive:"#438b7e",emissiveIntensity:.26,roughness:.4});et(e,u,o+.18,.021,a+.18,l,.0105,c).name="Raised circuit mat";let x=Tr(e,new Ue(o,a),qd(),l,c,rt);x.name="Asphalt racing surface";let M=[],y=[],m=[],S=[],C=[],w=[];for(let F of[t-.045,n+.045]){let L=et(e,f,.09,.092,a+.18,F,rt+.046,c);L.name="RC boundary rail",M.push(L),et(e,v,.058,.006,a+.1,F,rt+.095,c)}for(let F of[i-.045,r+.045]){let L=et(e,f,o,.092,.09,l,rt+.046,F);L.name="RC boundary rail",M.push(L),et(e,v,o,.006,.058,l,rt+.095,F)}for(let F of[t-.045,n+.045]){let L=Math.ceil(a/.22);for(let B=0;B<L;B++)(B%2?C:S).push([.085,.004,a/L-.003,F,rt+.097,i+(B+.5)*a/L])}for(let F of[i-.045,r+.045]){let L=Math.ceil(o/.22);for(let B=0;B<L;B++)(B%2?C:S).push([o/L-.003,.004,.085,t+(B+.5)*o/L,rt+.097,F])}let T=vi();T.roughness=.85;for(let F of yt.obstacles){let{x:L,z:B,halfX:k,halfZ:z}=F,H=k*2,X=z*2,ee=new ge;ee.name="Pallet shipping island",e.add(ee),y.push(ee),et(ee,u,H,.125,X,L,rt+.0625,B).name="Solid island barrier";for(let re of[-1,1]){let ie=Math.ceil(X/.22);for(let j=0;j<ie;j++)(j%2?C:S).push([.055,.018,X/ie-.003,L+re*(k-.0275),rt+.13,B-z+(j+.5)*X/ie])}for(let re of[-1,1]){let ie=Math.ceil(H/.22);for(let j=0;j<ie;j++)(j%2?C:S).push([H/ie-.003,.018,.055,L-k+(j+.5)*H/ie,rt+.13,B+re*(z-.0275)])}for(let re=0;re<7;re++)et(ee,T,(H-.16)/7-.011,.025,X-.18,L+(re-3)*(H-.16)/7,rt+.153,B);let J=Pt("#c1a274",.94),Z=Pt("#917b5e",.9);for(let[re,ie]of[-.93,0,.93].entries()){let j=.28+re%2*.13,he=.68,G=.72,Q=rt+.18+j/2;et(ee,J,he,j,G,L+(re===1?.1:-.09),Q,B+ie).name="Warehouse cargo crate",et(ee,Z,.037,.004,G+.004,L+(re===1?.1:-.09),Q+j/2+.002,B+ie);for(let ne of[-1,1])et(ee,Z,.007,j,.029,L+(re===1?.1:-.09)+ne*(he/2+.004),Q,B+ie)}for(let re of[-1,1])for(let ie of[-1,1]){let j=L+re*(k-.14),he=B+ie*(z-.16);et(ee,g,.13,.015,.13,j,rt+.167,he),Ht(ee,new Kt(.054,.15,8),p,j,rt+.25,he),Ht(ee,new ke(.032,.04,.022,8),h,j,rt+.245,he)}}let R=yt.checkpoints[0],I=Math.abs(R.nz)>.5,E=R.halfWidth*2;for(let F=0;F<2;F++)for(let L=0;L<12;L++){let B=-E/2+(L+.5)*E/12,k=(F-.5)*.085,z=R.x+(I?B:k),H=R.z+(I?k:B);((F+L)%2?w:C).push([I?E/12-.002:.083,.001,I?.083:E/12-.002,z,rt+.002,H])}as(e,h,C,"Cream curb and starting line tiles"),as(e,d,S,"Coral curb tiles"),as(e,u,w,"Chequered starting line");let A=7903914,D=9429443;yt.checkpoints.forEach((F,L)=>{let B=new ge;B.name="RC checkpoint "+(L+1),e.add(B);let k=new ve({color:A,transparent:!0,opacity:.58,depthWrite:!1}),z=Yd(B,F.x+F.nx*.35,F.z+F.nz*.35,F.nx,F.nz,k),H=-F.nz,X=F.nx,ee=[new _(F.x-H*F.halfWidth,rt+.004,F.z-X*F.halfWidth),new _(F.x+H*F.halfWidth,rt+.004,F.z+X*F.halfWidth)],J=new Tt(new Be().setFromPoints(ee),new ji({color:A,transparent:!0,opacity:.6,dashSize:.08,gapSize:.04}));J.computeLineDistances(),B.add(J),J.name="Checkpoint crossing",J.visible=L!==0,Zd(B,L,F),m.push({root:B,arrow:z,line:J,material:k})});let U=document.createElement("canvas");U.width=768,U.height=192;let N=U.getContext("2d");N.fillStyle="#102b40",N.fillRect(0,0,768,192),N.fillStyle="#8fe1c3",N.fillRect(0,0,768,9),N.fillStyle="#f7fafc",N.font="bold 73px Arial",N.textAlign="center",N.fillText("TFJ RC RACING",384,116),N.fillStyle="#f6d484",N.font="26px Arial",N.fillText("PALLET CIRCUIT \xB7 FOLLOW THE ARROWS",384,166);let P=new Ie(U);P.colorSpace=Ee;let V=yt.obstacles[0].z+yt.obstacles[0].halfZ;et(e,u,1.2,.31,.026,0,.31,V-.014);for(let F of[-.5,.5])et(e,f,.021,.21,.021,F,.205,V-.029);let b=Ht(e,new Ue(1.18,.295),new ve({map:P}),0,.31,V+.002);b.name="Pallet circuit fascia";function W(F){for(let L=0;L<m.length;L++){let B=m[L],k=L===F;B.material.color.setHex(k?D:A),B.material.opacity=k?.95:.45,B.line.material.color.setHex(k?D:A),B.line.material.opacity=k?.92:.3}}return W(1),{root:e,rails:M,obstacles:y,checkpoints:m,road:x,setCheckpoint:W,surfaceY:rt}}var Xl="tfj-rc-best-lap-v1",ql="tfj-rc-best-race-v1",Yl=s=>Ge.clamp(Number.isFinite(s?.value)?s.value:s?.pressed?1:0,0,1);function Zl(s,e,t,n){let i=new ge;i.name="Warehouse RC car racing",i.visible=!1,e.add(i);let r=Hl(i),o=Gl(i),a=document.createElement("canvas");a.width=1280,a.height=768;let l=a.getContext("2d"),c=new Ie(a);c.colorSpace=Ee;let u=new xe(new Ue(2.7,1.62),new ve({map:c}));u.name="RC race scoreboard",u.position.set(0,2.05,yt.bounds.minZ-.2),i.add(u);let f=new xe(new Me(2.77,1.69,.055),new Se({color:1058613,roughness:.6}));f.position.copy(u.position),f.position.z-=.037,i.add(f);for(let L of[-1.34,1.34]){let B=new xe(new Me(.038,2.92,.038),new Se({color:4019813,metalness:.3,roughness:.5}));B.position.set(L,1.46,u.position.z-.04),i.add(B)}let h=Rt("TFJ RC RACING","WAREHOUSE  /  THREE-LAP TIME TRIAL","play",Y.blue,2.6);h.position.set(0,3.27,u.position.z),i.add(h);let d=[];for(let L=0;L<3;L++){let B=new xe(new Ye(.065,12,8),new ve({color:2307910}));B.position.set((L-1)*.21,1.13,u.position.z+.03),i.add(B),d.push(B)}let p=null,g=null,v=!1,x=da(),M=3,y=!1,m=!1,S=!1,C=null,w=null,T=0,R="Release trigger, then get ready!",I=!1;function E(L,B){try{let k=localStorage.getItem(L),z=k===null||!k.trim()?NaN:Number(k);return Number.isSafeInteger(z)&&z>=B&&z<=36e5?z:null}catch{return null}}C=E(Xl,1e3),w=E(ql,3e3);function A(){_t(l,1280,768),te(l,"TF JONES  /  PALLET CIRCUIT",36,46,26,Y.blue,"700"),te(l,x.finished?"RACE COMPLETE":"THREE-LAP TIME TRIAL",36,108,49,Y.ink,"700"),$e(l,885,29,356,135,{top:"#214b54",bottom:"#102e40",stroke:Y.mint}),te(l,"BEST LAP",909,73,26,Y.mint,"700"),te(l,C===null?"\u2014":nn(C/1e3),909,137,53,Y.gold,"700"),te(l,M>0?`READY  ${Math.ceil(M)}`:x.finished?"FINISH!":`LAP ${x.completedLaps+1} / ${3}`,36,210,55,Y.gold,"700"),te(l,nn(x.elapsed),693,215,66,Y.ink,"700"),te(l,`Current lap ${nn(x.lapTime)}`,37,263,32,Y.mint,"600"),te(l,`Best race ${w===null?"\u2014":nn(w/1e3)}`,692,263,30,Y.muted,"500");for(let L=0;L<3;L++){let B=36+L*404,k=x.laps[L]!==void 0;$e(l,B,296,385,156,{top:k?"#285749":"#1c3f55",bottom:"#102b3e",stroke:k?Y.mint:"#496679"}),te(l,`LAP ${L+1}`,B+22,337,25,k?Y.mint:Y.muted,"700"),te(l,k?nn(x.laps[L]):"\u2014",B+22,410,54,Y.ink,"700")}te(l,R,37,503,30,Y.ink,"600",1204),te(l,"LEFT STICK  STEER",37,562,28,Y.blue,"700"),te(l,"RIGHT TRIGGER  GAS",638,562,28,Y.gold,"700"),te(l,"RIGHT GRIP  BRAKE / REVERSE",37,612,25,Y.muted),te(l,x.finished?"A  RACE AGAIN":"A  RESCUE CAR  (+2s)",638,612,25,Y.mint,"700"),te(l,"X  RETURN TO DRIVER SPOT",37,690,25,Y.muted),te(l,"Y  PAUSE / MENU   \xB7   B  LEAVE",638,690,25,Y.muted),c.needsUpdate=!0,d.forEach((L,B)=>L.material.color.setHex(x.finished?9429443:M>2?B===0?15755368:2307910:M>1?B<=1?16176260:2307910:M>0?16176260:9429443))}function D(){let L=yt.bounds;for(let B of[3,3.5,4,2.5,4.5])for(let k of[-26.5,-26,-27,-25.5]){let z=!0;for(let H=L.minX-.11;H<=L.maxX+.11;H+=.3)for(let X=L.minZ-.3;X<=L.maxZ+.12;X+=.3)(s.blocked(B+H,k+X,0)||Math.abs(s.groundAt(B+H,k+X,.1))>.1)&&(z=!1);if(z)for(let H of[0,-.75,.75,-1.5,1.5]){let X=new _(B+H,0,k+L.maxZ+1.05),ee=!0;for(let J of[-.25,0,.25])for(let Z of[-.25,0,.25])(s.blocked(X.x+J,X.z+Z,0)||Math.abs(s.groundAt(X.x+J,X.z+Z,.1))>.1)&&(ee=!1);if(ee)return{origin:new _(B,0,k),view:X}}}return null}function U(){x=da(),M=3,y=!1,R="Release trigger. Follow the mint arrows clockwise.",T=0,I=!1,o.update(x,0),r.setCheckpoint(x.nextCheckpoint),A()}function N(){let L=D();return!L||!s.xrTeleport(L.view.x,0,L.view.z)?!1:(p=L.origin,g=L.view,i.position.copy(p),s.xrFace?.(0),v=i.visible=!0,m=S=!1,U(),t("RC racing! Left stick steers, right trigger drives. Grip brakes and reverses. A rescues the car."),!0)}function P(){y=!1}function V(){v=i.visible=!1,P()}function b(){return!g||!s.xrTeleport(g.x,0,g.z)?!1:(s.xrFace?.(0),P(),!0)}function W(L){let B=Math.round(L*1e3);if(!(B<1e3||B>36e5)&&(C===null||B<C)){C=B;try{localStorage.setItem(Xl,String(B))}catch{}t(`New RC lap record! ${nn(B/1e3)}`)}}function F(L,B){if(!v)return;let k=Math.max(0,Math.min(.1,L.dt||0)),z=!!L.right?.gamepad?.buttons[4]?.pressed,H=!!L.left?.gamepad?.buttons[4]?.pressed,X=z&&!m,ee=H&&!S;if(m=z,S=H,B){P();return}if(!L.right?.gamepad||!L.left?.gamepad){P(),I||(I=!0,R="Reconnect both controllers. Race paused.",A());return}if(I&&(I=!1,R="Controller ready. Release trigger to resume.",A()),ee&&(R=b()?"Driver viewpoint restored. Release trigger to drive.":"Driver spot is blocked. Use B to leave the race.",A()),X)if(x.finished){U();return}else M<=0&&kl(x)&&(R="Car rescued at your last gate. +2 seconds.",n(.2),A());let J=Yl(L.right.gamepad.buttons[0]),Z=Yl(L.right.gamepad.buttons[1]);J<.1&&Z<.1&&(y=!0);let re=k;if(M>0){let he=Math.min(M,k);if(M-=he,re-=he,M<=0&&(R="GO! Drive through the mint gates in order.",n(.4)),T+=k,(T>=.1||M<=0)&&(T=0,A()),M>0)return}if(x.finished)return;let ie=Mi(ss(L.left)[0]),j=x.collisions;if(zl(x,{steer:ie,throttle:y?J:0,brake:y?Z:0},re),o.update(x,re),r.setCheckpoint(x.nextCheckpoint),x.collisions!==j&&(n(.12),R="Bump! Ease off, reverse, or use A to rescue."),x.checkpointPassed!==null&&(R=`Gate ${x.checkpointPassed+1} cleared. Follow the mint arrow.`),x.justLap!==null&&(W(x.justLap),n(.4),R=`Lap ${x.completedLaps}: ${nn(x.justLap)}`,A()),x.justFinished){let he=Math.round(x.elapsed*1e3);if(he>=3e3&&he<=36e5&&(w===null||he<w)){w=he;try{localStorage.setItem(ql,String(he))}catch{}}let G=Math.min(...x.laps);R=`${G<=14?"Gold":G<=20?"Silver":"Bronze"} lap medal! Race ${nn(x.elapsed)}. A to replay.`,r.setCheckpoint(null),t(`RC race complete! ${nn(x.elapsed)} \xB7 A to race again.`),n(.7),A()}T+=k,T>=.1&&(T=0,A())}return A(),{root:i,track:r,car:o,board:u,start:N,stop:V,cancel:P,tick:F,returnToView:b,get active(){return v},get origin(){return p},get view(){return g},get state(){return x},get countdown(){return M},get bestLapMs(){return C},get bestRaceMs(){return w}}}var Er="tfj-memory-bests-v1",wr=(s,e=0,t=Number.MAX_SAFE_INTEGER)=>{if(!["string","number"].includes(typeof s)||typeof s=="string"&&!s.trim())return null;let n=Number(s);return Number.isSafeInteger(n)&&n>=e&&n<=t?n:null};function Ar(s){let e=s;try{typeof e=="string"&&(e=JSON.parse(e))}catch{return{}}if(!e||typeof e!="object"||Array.isArray(e))return{};let t={};for(let n=2;n<=6;n++){let i=wr(e[n],n,1e4);i!==null&&(t[n]=i)}return t}function $l(s,e=0,t={}){let n=y=>{try{return s?.getItem(y)??null}catch{return null}},i=(y,m,S,C=0,w=!1)=>{let T=wr(n(y),C,S),R=wr(t[m],C,S),I=[T,R].filter(E=>E!==null);return I.length?w?Math.min(...I):Math.max(...I):null},r=(y,m,S,C)=>y===null?0:y>=C?3:y>=S?2:y>=m?1:0,o=[],a=(y,m,S,C,w,T,R,I,E)=>{let A=i(S,y,C);o.push({id:y,title:m,value:A,score:A===null?"\u2014":String(A),detail:A===null?"Play a complete round":R,medal:r(A,...w),goal:`Gold: ${w[2]} ${T}`,icon:I,accent:E})};a("bowling","WAREHOUSE BOWLING","tfj-bowling-best-10-v1",100,[10,50,80],"pins","pins / 100 \xB7 ten frames","target","#8bc8f3"),a("darts","STAFF-ROOM DARTS","tfj-vr-darts-best-v1",540,[50,150,300],"points","points \xB7 nine darts","target","#8fe1c3");let l=i("tfj-mini-golf-best-v1","golf",48,6,!0);o.push({id:"golf",title:"WAREHOUSE MINI-GOLF",value:l,score:l===null?"\u2014":String(l),detail:l===null?"Finish all six holes":"strokes \xB7 six holes \xB7 lower wins",medal:l===null?0:l<=18?3:l<=24?2:1,goal:"Gold: 18 strokes or fewer",icon:"golf",accent:"#8fe1c3"}),a("basketball","BASKETBALL","tfj-basket-best",10,[2,5,8],"baskets","baskets / 10 throws","target","#f6d484"),a("planes","PAPER PLANES","tfj-planes-best-v1",150,[10,50,100],"points","points \xB7 five flights","play","#8bc8f3");let c=i("tfj-rc-best-lap-v1","rc",36e5,1e3,!0),u=c===null?0:Math.floor(c/6e4),f=c===null?0:Math.floor(c/1e3)%60,h=c===null?0:Math.floor(c/10)%100;o.push({id:"rc",title:"RC CAR RACING",value:c,score:c===null?"\u2014":`${u}:${String(f).padStart(2,"0")}.${String(h).padStart(2,"0")}`,detail:c===null?"Complete a lap":"best lap \xB7 lower wins",medal:c===null?0:c<=14e3?3:c<=2e4?2:1,goal:"Gold: lap in 14 seconds",icon:"car",accent:"#8bc8f3"});let d=Ar(n(Er)),p=Ar(t.memory);for(let[y,m]of Object.entries(p))d[y]=Math.min(d[y]??1/0,m);let g=Object.keys(d).map(Number).sort((y,m)=>m-y)[0]??null,v=g===null?null:d[g];o.push({id:"memory",title:"MEMORY MATCH",value:v,pairs:g,score:v===null?"\u2014":String(v),detail:v===null?"Use your collected cards":`turns \xB7 ${g}-pair deck \xB7 lower wins`,medal:v===null?0:v===g?3:v<=g+2?2:1,goal:g===null?"Practice rounds do not count":`Gold: ${g} turns \xB7 perfect match`,icon:"book",accent:"#f3b2cf"});let x=wr(e,0,18)??0;o.push({id:"cards",title:"MOLLIE\u2019S CARD ALBUM",value:x,score:`${x} / 18`,detail:x===18?"Collection complete!":"Cards found around the yard",medal:r(x,6,12,18),goal:"Gold: collect all 18 cards",icon:"book",accent:"#f6d484"});let M=i("tfj-vr-jigglypuff-rounds-v1","hide",Number.MAX_SAFE_INTEGER)??0;return o.push({id:"hide",title:"JIGGLYPUFF SEEKER",value:M,score:String(M),detail:"complete hide-and-seek rounds",medal:r(M,1,3,5),goal:"Gold: complete five hunts",icon:"puff",accent:"#f3b2cf"}),o}var pa=s=>["TO EARN","BRONZE","SILVER","GOLD"][s];var bi=[5465977,12025936,13359585,16176260];function $d(s){let e=s.colliders.map(t=>new Ze(new _(t.min.x,t.min.y,t.min.z),new _(t.max.x,t.max.y,t.max.z)));for(let t of s.colliders){let{min:n,max:i}=t;if(n.x<7.5||i.x>9||i.x-n.x>.3||i.z-n.z<3.9||n.y>.1||i.y<2.78)continue;let r=(n.z+i.z)/2;for(let o of[r,r-.45,r+.45]){if(o-1.86<n.z||o+1.86>i.z)continue;let a=new _(n.x-.045,0,o),l=a.clone().add(new _(-2.45,0,0)),c=!0;for(let f of[-.3,0,.3])for(let h of[-.4,0,.4])(s.blocked(l.x+f,l.z+h,0)||Math.abs(s.groundAt(l.x+f,l.z+h,.1))>.1)&&(c=!1);let u=l.clone().add(new _(0,1.68,0));for(let f of[-1.7,-.6,.6,1.7])for(let h of[.8,1.7,2.65]){let d=a.clone().add(new _(-.052,h,f)),p=d.clone().sub(u),g=p.length(),v=new st(u,p.normalize()),x=new _;e.some(M=>v.intersectBox(M,x)&&x.distanceTo(u)<g-.015)&&(c=!1)}if(c)return{mount:a,view:l,heading:-Math.PI/2}}}return null}function Jl(s,e,t,n){let i=new ge;i.name="Arcade wall of fame",e.add(i);let r=$d(s);i.visible=!!r,r&&(i.position.copy(r.mount),i.rotation.y=-Math.PI/2);let o=document.createElement("canvas");o.width=2048,o.height=1152;let a=o.getContext("2d"),l=new Ie(o);l.colorSpace=Ee,l.anisotropy=4;let c=new xe(new Ue(3.6,2.025),new ve({map:l}));c.name="Mollie\u2019s personal records",c.position.set(0,1.7,.052),i.add(c);let u=(T,R,I,E,A)=>{let D=new xe(T,R);return D.position.set(I,E,A),i.add(D),D},f=new Se({color:1058612,roughness:.7}),h=new Se({color:9215391,metalness:.6,roughness:.35});u(new Me(3.72,2.14,.075),f,0,1.7,0);let d=new ve({color:16176260});for(let T of[.626,2.774])u(new Me(3.74,.024,.045),d,0,T,.031);for(let T of[-1.862,1.862])u(new Me(.024,2.16,.045),d,T,1.7,.031);u(new Me(3.74,.045,.24),h,0,.32,.13);let p=[];for(let T=1;T<=3;T++){let R=new ge;R.name=`${pa(T)} trophy`,R.position.set((T-2)*1.05,.346,.14),i.add(R);let I=new Se({color:bi[0],metalness:.68,roughness:.32}),E=[new xe(new Me(.24,.044,.16),f),new xe(new ke(.069,.088,.052,16),I),new xe(new ke(.018,.029,.072,12),I),new xe(new Qn([new ue(.025,0),new ue(.06,.045),new ue(.089,.12),new ue(.078,.13),new ue(.049,.052),new ue(.014,.021)],20),I)];E[0].position.y=.022,E[1].position.y=.069,E[2].position.y=.12,E[3].position.y=.15,R.add(...E);for(let A of[-.092,.092]){let D=new xe(new Ft(.042,.008,6,14),I);D.position.set(A,.233,0),R.add(D)}p.push({trophy:R,material:I,tier:T})}let g=[],v=null,x=0,M=0,y=0;function m(){_t(a,2048,1152),te(a,"TF JONES  /  WAREHOUSE ARCADE",54,64,27,Y.blue,"700"),te(a,"WALL OF FAME",52,154,86,Y.ink,"700"),te(a,"Mollie\u2019s personal bests",54,213,35,Y.gold,"600");let T=g.filter(I=>I.medal).length,R=g.filter(I=>I.medal===3).length;$e(a,1535,46,456,174,{top:"#254f54",bottom:"#142f43",stroke:Y.gold,radius:20}),te(a,`${T} / ${g.length}`,1567,145,67,Y.gold,"700"),te(a,`MEDALS EARNED  \xB7  ${R} GOLD`,1567,191,26,Y.ink,"700"),g.forEach((I,E)=>{let A=54+E%3*650,D=253+Math.floor(E/3)*256,U=638;$e(a,A,D,U,244,{top:"#234955",bottom:"#0d2639",stroke:I.medal?`#${bi[I.medal].toString(16).padStart(6,"0")}`:"#466374",radius:18}),gn(a,I.icon,A+39,D+36,40,I.accent),te(a,I.title,A+77,D+43,30,Y.ink,"700",U-98),te(a,I.score,A+28,D+119,76,Y.gold,"700",U-56),te(a,I.detail,A+28,D+153,25,Y.muted,"500",U-56);let P=`#${bi[I.medal].toString(16).padStart(6,"0")}`;$e(a,A+27,D+167,U-54,36,{top:I.medal?"#24474d":"#162c3c",bottom:"#172f3c",stroke:P,radius:10}),te(a,pa(I.medal),A+44,D+194,26,I.medal?P:Y.muted,"700"),te(a,I.goal,A+28,D+229,25,I.accent,"500",U-56)}),te(a,"YOUR SCORES \xB7 THIS BROWSER",54,1091,30,Y.blue,"700"),te(a,"Play. Beat your best. Earn your place.",1160,1091,30,Y.muted,"500"),l.needsUpdate=!0,y++;for(let I of p){let E=g.some(A=>A.medal>=I.tier);I.material.color.set(E?bi[I.tier]:bi[0]),I.material.emissive.set(E?bi[I.tier]:0),I.material.emissiveIntensity=E?.09:0}}function S(){let T;try{T=globalThis.localStorage}catch{}let R=$l(T,s.mollie.found.size,t()),I=JSON.stringify(R);if(I===v)return!1;let E=v!==null&&R.some((A,D)=>A.value!==null&&(g[D].value===null||A.id==="memory"&&A.pairs>g[D].pairs||(["golf","memory","rc"].includes(A.id)?A.value<g[D].value:A.value>g[D].value)||A.medal>g[D].medal));return g=R,v=I,E&&(M=2.5),m(),!0}function C(T){x-=T,x<=0&&(x=.75,S()),M=Math.max(0,M-T),d.color.set(M>0&&Math.sin(M*7)>0?9429443:16176260)}function w(){return S(),!r||!s.xrTeleport(r.view.x,0,r.view.z)?(n("The wall approach is blocked. Walk to the Unit 9 office divider."),!1):(s.xrFace?.(r.heading),n("Welcome to the wall of fame! Your personal records update as you play."),!0)}return S(),{root:i,panel:c,cups:p,site:r,refresh:S,tick:C,visit:w,get records(){return g},get draws(){return y},get celebrating(){return M>0}}}function Jd(s,e,t,n=.48){if(s.z<=t.z||e.z>t.z)return!1;let i=(s.z-t.z)/(s.z-e.z);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.y+(e.y-s.y)*i-t.y)<n}function Kd(s,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let r=-.25-1.1/Math.max(.5,i);return n.y+=(r-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:s.clone().addScaledVector(n,t),v:n}}function Kl(s,e,t,n){let i=new ge;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let r=new ge;i.add(r);let o=k=>new Se({color:k,roughness:.7,side:je}),a=new Be;a.setAttribute("position",new Re([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new xe(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new Tt(new Be().setFromPoints([new _(0,0,-.28),new _(0,.056,.1)]),new St({color:7576243}));l.add(c);let u=s.colliders.map(k=>new Ze(new _(k.min.x,k.min.y,k.min.z),new _(k.max.x,k.max.y,k.max.z)).expandByScalar(.06)),f=document.createElement("canvas");f.width=1024,f.height=640;let h=f.getContext("2d"),d=new Ie(f);d.colorSpace=Ee;let p=new xe(new Ue(1.6,1),new ve({map:d}));p.name="Paper-plane scoreboard",i.add(p);let g=!1,v=!1,x=null,M=null,y=[],m=[],S=0,C=!1,w=!1,T=!1,R=0,I=0,E=0,A=0,D="Five planes. Aim through the hoops!";try{E=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function U(){_t(h,1024,640),te(h,"PAPER-PLANE CHALLENGE",35,68,44,Y.gold),te(h,`${I} points`,35,190,72),te(h,`BEST ${E}`,660,180,35,Y.mint),te(h,`${R} / 5 planes`,35,280,44),te(h,`Longest glide: ${A.toFixed(1)} m`,35,349,32,Y.mint),te(h,D,35,428,29,Y.ink,"600",950),te(h,R===5&&!x?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),te(h,"10 points per hoop \xB7 Y: pause/menu",35,590,27,Y.muted),d.needsUpdate=!0}function N(){for(let k of[3,2,1.5,4,5])for(let z of[-30,-29,-28]){let H=!0;for(let X=-1;X<=1;X+=.5)for(let ee=0;ee<=7.8;ee+=.4)(s.blocked(k+X,z+ee,0)||Math.abs(s.groundAt(k+X,z+ee,.1))>.1)&&(H=!1);if(H)return new _(k,0,z)}return null}function P(){for(let H of[...r.children])H.traverse(X=>{X.geometry?.dispose(),X.material?.dispose()}),r.remove(H);y=[];for(let H=0;H<3;H++){let X=M.clone().add(new _(0,1.5-H*.22,5-H*1.8)),ee=new xe(new Ft(.6,.035,12,48),o(H===0?"#f6d484":H===1?"#8fe1c3":"#8bc8f3"));ee.position.copy(X),r.add(ee),y.push({center:X,mesh:ee});let J=new xe(new ke(.018,.018,X.y,8),o("#36576a"));J.position.set(X.x-.64,X.y/2,X.z),r.add(J)}p.position.copy(M).add(new _(0,2.3,-.5));let k=Rt("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);k.position.copy(M).add(new _(0,3.18,-.5)),r.add(k);for(let H of[2,5]){let X=Nn(1.3);X.position.copy(M).add(new _(0,4.2,H)),r.add(X)}let z=new xe(new Me(2,.02,.045),o("#f6d484"));z.position.copy(M).add(new _(0,.02,6.7)),r.add(z)}function V(){R=I=A=0,x=null,v=!1,m=[],l.visible=!1,D="Five planes. Aim through the hoops!",y.forEach(k=>k.mesh.material.emissive?.set(0)),U()}function b(){let k=N();return!k||!s.xrTeleport(k.x,0,k.z+7.4)?!1:(M=k,P(),g=i.visible=!0,s.xrFace?.(0),C=!1,w=!0,V(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function W(){g=i.visible=v=l.visible=!1,x=null,m=[],C=!1}function F(){v=!1,m=[],C=!1,w=!0,x||(l.visible=!1)}function L(k){if(x){if(A=Math.max(A,x.distance),D=`${k} \xB7 ${x.hits.size} hoops \xB7 ${x.distance.toFixed(1)} m`,x=null,R===5){E=Math.max(E,I);try{localStorage.setItem("tfj-planes-best-v1",String(E))}catch{}t(`Paper planes complete! ${I} points. A to replay.`)}U()}}function B(k,z){if(!g)return;let{dt:H,right:X,controller:ee}=k;S+=H;let J=!!X?.gamepad?.buttons[0]?.pressed,Z=!!X?.gamepad?.buttons[4]?.pressed;if(z){F();return}J||(C=!0),Z&&!T&&R===5&&!x&&V(),T=Z;let re=ee&&ee.visible!==!1?ee.getWorldPosition(new _):null;if(re&&J&&!w&&C&&!x&&R<5){let ie=s.stats();Math.abs(ie.x-M.x)>1.2||ie.z<M.z+6.7||ie.z>M.z+8.2||ie.y>.15?t("Return behind the paper-plane launch line."):(v=!0,m=[],l.visible=!0)}if(v){if(!re)F();else if(l.position.copy(re),l.quaternion.copy(ee.getWorldQuaternion(new Te)),m.push({time:S,p:re.clone()}),m=m.filter(ie=>S-ie.time<.14),!J&&w){let ie=m.find(he=>S-he.time>=.04),j=ie?re.clone().sub(ie.p).divideScalar(S-ie.time).clampLength(0,10):new _;v=!1,j.length()<.8||j.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(R++,x={p:re.clone(),v:j,start:re.clone(),distance:0,age:0,hits:new Set},y.forEach(he=>he.mesh.material.emissive?.set(0)),D="In flight\u2026",U())}}if(x){let ie=Math.max(1,Math.ceil(H/.012)),j=H/ie;for(let he=0;he<ie&&x;he++){let G=x,Q=Kd(G.p,G.v,j),ne=Q.p.clone().sub(G.p),oe=ne.length(),ae=new st(G.p,ne.normalize()),ye=new _,de=!1;for(let we of u)if(we.containsPoint(G.p)||ae.intersectBox(we,ye)&&ye.distanceTo(G.p)<=oe){de=!0;break}if(de){L("Hit scenery");break}for(let we=0;we<y.length;we++)!G.hits.has(we)&&Jd(G.p,Q.p,y[we].center)&&(G.hits.add(we),I+=10,y[we].mesh.material.emissive.set("#3ca58b"),n(.45),U());G.p.copy(Q.p),G.v.copy(Q.v),G.age+=j,G.distance=Math.max(G.distance,Math.hypot(G.p.x-G.start.x,G.p.z-G.start.z)),l.position.copy(G.p),l.quaternion.setFromUnitVectors(new _(0,0,-1),G.v.clone().normalize()),l.rotateZ(Math.sin(G.age*3)*.04),G.p.y<.07?(l.position.y=.07,l.rotation.x=0,L("Landed")):(G.age>10||G.distance>20)&&L("Glide complete")}}w=J}return{root:i,get best(){return E},start:b,stop:W,cancel:F,tick:B,get held(){return v},get flight(){return x},get origin(){return M},get rings(){return y},get throws(){return R},get score(){return I},get longest(){return A}}}function Ql(s,e){let t=new ge;t.name="Bowling supporters",e.add(t);let n=[],i=0,r=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(g){t.visible=!0,i=0,r=0;for(let x of n)x.group.visible=!1,x.shadow&&(x.shadow.visible=!1);let v=[];for(let x of[5.2,3.8,6])for(let M of[-1.9,1.9,-2.4,2.4]){if(v.length===4)break;let y=g.clone().add(new _(M,0,x));s.blocked(y.x,y.z,0)||Math.abs(s.groundAt(y.x,y.z,.1))>.1||v.some(m=>m.distanceTo(y)<1)||v.push(y)}for(let x=0;x<v.length;x++){if(!n[x]){let m=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][x]});m.group.name=`Bowling supporter ${x+1}`,m.group.scale.setScalar(.91+x*.025),m.bones=Object.fromEntries(l.map(S=>[S,m.model.getObjectByName(S)])),m.rest=Object.fromEntries(l.map(S=>[S,m.bones[S]?.quaternion.clone()])),m.shadow=Un(.9,.6),t.add(m.shadow,m.group),n.push(m)}let M=n[x];M.group.visible=!0,M.group.position.copy(v[x]),M.base=v[x].clone(),M.shadow.visible=!0,M.shadow.position.copy(v[x]).add(new _(0,.012,0));let y=s.stats();M.group.rotation.y=Math.atan2(y.x-v[x].x,y.z-v[x].z),M.gesture="idle",M.target=new _(y.x,y.y+1.6,y.z),M.mixer.setTime(x*.73)}}function u(g=!1){i=g?3.6:2.2,o=g,a=!1}function f(){i=1.8,o=!1,a=!0}function h(g,v,x){let M=g.bones[v];if(!M)return;let y=M.parent.getWorldQuaternion(new Te),m=M.getWorldQuaternion(new Te),S=new _(0,1,0).applyQuaternion(m),C=new _(...x).normalize().applyQuaternion(g.group.getWorldQuaternion(new Te));M.quaternion.copy(y.invert().multiply(new Te().setFromUnitVectors(S,C).multiply(m))),g.model.updateMatrixWorld(!0)}function d(g,v,x={}){if(v||!t.visible)return;r+=g,i=Math.max(0,i-g);let M=s.stats();n.forEach((y,m)=>{if(!y.group.visible)return;let S=r+m*1.4,C=(o?3.6:a?1.8:2.2)-i,w=i>0&&C>=m*.11,T=!x.ball&&!x.held&&!i&&Math.sin(S*.43)>.85,R=n[(m+1)%n.length],I=x.ball||x.eye||new _(M.x,M.y+1.6,M.z);T&&R?.group.visible&&(I=R.base.clone().add(new _(0,1.5,0))),w&&(I=x.eye||new _(M.x,M.y+1.6,M.z)),y.target.copy(I);let E=Math.atan2(I.x-y.base.x,I.z-y.base.z);y.group.rotation.y+=Math.atan2(Math.sin(E-y.group.rotation.y),Math.cos(E-y.group.rotation.y))*Math.min(1,g*2.8);let A=w?a?"wave":["clap","arms-up","fist-pump","wave"][m%4]:x.held?"anticipate":T?"chat":"idle";y.gesture=A;for(let U of l)y.bones[U]&&y.bones[U].quaternion.copy(y.rest[U]);if(y.animate(g,A==="wave"?"wave":"idle"),y.group.position.set(y.base.x,y.base.y+(w?Math.max(0,Math.sin(S*7))*(o?.11:.055):0),y.base.z),y.group.rotation.z=Math.sin(S*1.2)*.012,y.shadow.material.opacity=1-(y.group.position.y-y.base.y)*3,y.model.updateMatrixWorld(!0),A==="clap"){let U=Math.sin(S*13)*.25;h(y,"UpperArmL",[-.25,-.3,.65]),h(y,"UpperArmR",[.25,-.3,.65]),h(y,"LowerArmL",[.4+U,.35,.4]),h(y,"LowerArmR",[-.4-U,.35,.4])}if(A==="arms-up"&&(h(y,"UpperArmL",[-.65,.9,0]),h(y,"UpperArmR",[.65,.9,0]),h(y,"LowerArmL",[.15,1,.12]),h(y,"LowerArmR",[-.15,1,.12])),A==="fist-pump"){let U=.65+Math.sin(S*9)*.3;h(y,"UpperArmR",[.5,U,.3]),h(y,"LowerArmR",[-.2,1,.2])}A==="anticipate"&&(h(y,"UpperArmL",[-.2,-.6,.35]),h(y,"UpperArmR",[.2,-.6,.35]),h(y,"LowerArmL",[.3,.1,.6]),h(y,"LowerArmR",[-.3,.1,.6]));let D=y.bones.Head;if(D){let U=I.x-y.base.x,N=I.z-y.base.z,P=Math.atan2(Math.sin(E-y.group.rotation.y),Math.cos(E-y.group.rotation.y)),V=Math.atan2(I.y-(y.base.y+1.6),Math.hypot(U,N));D.rotateY(Ge.clamp(P,-.65,.65)),D.rotateX(-Ge.clamp(V,-.4,.3)+Math.sin(S*(T?3:1.1))*.035)}y.bones.Chest&&y.bones.Chest.rotateX(x.held?.065:Math.sin(S*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:u,encourage:f,tick:d,stop:p,get cheering(){return i>0},get people(){return n.filter(g=>g.group.visible)}}}function jl(s,e,t,n,i=()=>{}){let r=new ge;r.name="Warehouse bowling",r.visible=!1,e.add(r);let o=Ql(s,r),a=q=>new Se({color:q,roughness:.55}),l=(q,O,K,ce,$,fe=r)=>{let Pe=new xe(q,O);return Pe.position.set(K,ce,$),fe.add(Pe),Pe},c=new ge;r.add(c);let u=null,f=[],h=!1,d=!1,p=null,g=[],v=0,x=!1,M=!1,y=!1,m=0,S=0,C=[],w=Array.from({length:10},()=>[]),T=0,R=0,I=0,E=!1;try{I=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let A=l(new Ye(.14,24,20),a("#5147b5"),0,.17,0);for(let[q,O,K]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new Ye(.023,8,8),a("#12162d"),q,O,K,A);A.visible=!1;let D=document.createElement("canvas");D.width=1536,D.height=1024;let U=D.getContext("2d"),N=new Ie(D);N.colorSpace=Ee;let P=l(new Ue(3.2,3.2*2/3),new ve({map:N}),0,2,0);P.name="Warehouse bowling scoreboard";let V=()=>C.reduce((q,O)=>q+O,0)+T,b=new ge;b.name="Bowling scoring computer",r.add(b);let W=l(new Ue(.96,.64),new ve({map:N}),0,0,.046,b);W.name="Bowling computer screen",l(new Me(1.02,.7,.08),a("#101a26"),0,0,0,b);let F=120,L=new Float32Array(F*3),B=new Float32Array(F*3),k=[],z=new Be;z.setAttribute("position",new bt(L,3)),z.setAttribute("color",new bt(B,3));let H=new gi({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Bo}),X=new Hi(z,H);X.name="Strike fireworks",X.visible=!1,X.frustumCulled=!1,r.add(X);let ee=0,J=0;function Z(){i(!0),o.cheer(!0),J++,ee=2.6,X.visible=!0,H.opacity=1;for(let q=0;q<F;q++){let O=q%3,K=q*2.39996,ce=.65+q%11*.08,$=Math.sqrt(1-(q%17/8-1)**2);L.set([u.x+(O-1)*.65,1.35+O*.22,u.z+1.2],q*3),k[q]=new _(Math.cos(K)*$*ce,.7+Math.abs(Math.sin(K))*1.2,Math.sin(K)*$*ce);let fe=new ze([16765286,7401417,16745144,9026559][q%4]);B.set([fe.r,fe.g,fe.b],q*3)}z.attributes.position.needsUpdate=!0,z.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function re(q){if(!(ee<=0)){ee=Math.max(0,ee-q),X.visible=ee>0,H.opacity=Math.min(1,ee/.9);for(let O=0;O<F;O++){let K=k[O];K.y-=1.5*q,L[O*3]+=K.x*q,L[O*3+1]+=K.y*q,L[O*3+2]+=K.z*q}z.attributes.position.needsUpdate=!0}}function ie(){_t(U,1536,1024),te(U,"TFJ BOWL  /  LANE 01",48,72,38,Y.blue,"700"),te(U,"WAREHOUSE BOWLING",48,143,61,Y.ink,"700"),$e(U,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:Y.mint,radius:22}),te(U,"TOTAL PINS",1120,86,34,Y.mint),te(U,String(V()),1120,237,125,Y.ink,"700"),te(U,"/ 100",1320,233,42,Y.muted),te(U,m===10?"ROUND COMPLETE":`FRAME ${m+1}  \u2022  BOWL ${S+1}`,48,230,51,Y.gold,"700");let q=0;for(let O=0;O<10;O++){let K=48+O%5*288,ce=290+Math.floor(O/5)*244,$=O===m&&m<10,fe=w[O],Pe=fe.length>0;$e(U,K,ce,272,225,{top:$?"#225568":"#142e43",bottom:"#0b2032",stroke:$?Y.gold:"#55758c",radius:14}),te(U,String(O+1),K+18,ce+45,37,$?Y.gold:Y.muted,"700");let pe=fe[0]===10?"X":fe[0]===0?"\u2013":fe[0]??"",Le=fe.length>1?fe[0]+fe[1]===10?"/":fe[1]===0?"\u2013":fe[1]:"";U.strokeStyle="#5c7b90",U.lineWidth=2,U.strokeRect(K+78,ce+8,89,77),U.strokeRect(K+167,ce+8,97,77),te(U,String(pe),K+96,ce+67,53,Y.ink,"700"),te(U,String(Le),K+190,ce+67,53,Y.ink,"700"),q+=O<C.length?C[O]:O===m?T:0,te(U,Pe?String(q):"\u2014",K+30,ce+189,89,$?Y.gold:Y.ink,"700")}te(U,`PERSONAL BEST  ${I} / 100`,48,837,38,Y.mint,"700"),te(U,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,Y.muted,"600"),te(U,m===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,Y.gold,"700"),te(U,"Y  MENU",1270,957,34,Y.ink,"700"),N.needsUpdate=!0}function j(){for(let q of[3,2,1.5,4,5,6])for(let O of[-30,-29,-28,-27]){let K=!0;for(let ce=-1.1;ce<=1.1;ce+=.55)for(let $=0;$<=7.8;$+=.3)(s.blocked(q+ce,O+$,0)||Math.abs(s.groundAt(q+ce,O+$,.1))>.1)&&(K=!1);if(K)return new _(q,0,O)}return null}function he(){for(let $ of[...c.children])$.traverse(fe=>{fe.geometry?.dispose(),fe.material&&fe.material.dispose()}),c.remove($);c.position.copy(u),f=[],l(new Me(2.1,.025,7.3),vi(),0,.018,3.25,c);for(let $=-4;$<=4;$++)l(new Me(.009,.003,7.3),a("#9c805f"),$*.22,.032,3.25,c);for(let $ of[-1.15,1.15])l(new Me(.15,.05,7.3),a("#223747"),$,.02,3.25,c);for(let $ of[-1.045,1.045]){let fe=l(new Me(.028,.025,7.3),new Se({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),$,.045,3.25,c);fe.name="Illuminated bowling edge"}let q=Rt("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",Y.gold,2.8);q.position.set(0,4.38,2.5),c.add(q);for(let $ of[1,4.8]){let fe=Nn(1.8);fe.position.set(0,4.8,$),c.add(fe)}l(new Me(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new Me(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let $ of[-.5,0,.5]){let fe=l(new Kt(.065,.16,3),a("#30485a"),$,.04,4.7,c);fe.rotation.x=-Math.PI/2}let O=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([$,fe])=>new ue($,fe)),K=0;for(let $=0;$<4;$++)for(let fe=0;fe<=$;fe++){let Pe=Un(.29,.27);Pe.position.set((fe-$/2)*.3,.034,1.1-$*.29),c.add(Pe);let pe=new ge;pe.position.set((fe-$/2)*.3,.248,1.1-$*.29),c.add(pe),l(new Qn(O,20),a("#f8f6ea"),0,-.215,0,pe),l(new ke(.035,.039,.045,16),a("#dc4459"),0,.07,0,pe),f.push({mesh:pe,start:pe.position.clone(),v:new _,spin:new _,shadow:Pe,down:!1,id:K++})}P.position.copy(u).add(new _(0,2.95,2.5)),l(new Me(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let $ of[-1.62,1.62])l(new Me(.06,3.92,.06),a("#223747"),$,1.96,2.42,c);let ce=[-1.4,1.4].find($=>!s.blocked(u.x+$,u.z+7.1,0))??-1.2;b.position.copy(u).add(new _(ce,1.27,7.1)),b.lookAt(u.clone().add(new _(0,1.68,7.5))),l(new Me(.16,1.12,.16),a("#223747"),ce,.56,7.1,c),l(new Me(.65,.06,.48),a("#101a26"),ce,.03,7.1,c)}function G(){for(let q of f)q.mesh.position.copy(q.start),q.mesh.rotation.set(0,0,0),q.mesh.visible=!0,q.shadow.visible=!0,q.shadow.position.set(q.start.x,.034,q.start.z),q.shadow.material.opacity=1,q.down=!1,q.v.set(0,0,0),q.spin.set(0,0,0)}function Q(){ee=0,X.visible=!1,m=S=T=0,C=[],w=Array.from({length:10},()=>[]),p=null,R=0,d=!1,A.visible=!1,G(),ie()}function ne(){let q=j();return!q||!s.xrTeleport(q.x,0,q.z+7.4)?!1:(u=q,he(),o.setup(u),h=r.visible=!0,s.xrFace?.(0),Q(),M=!1,x=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function oe(){o.stop(),ee=0,X.visible=!1,h=r.visible=d=A.visible=!1,p=null,R=0,g=[],M=!1}function ae(){d=!1,g=[],M=!1,x=!0,p||(A.visible=!1)}function ye(q,O){E||(E=!0,o.cheer(!1));let K=O.length();q.down=!0,q.v.add(O).clampLength(0,7),q.v.y=Math.max(q.v.y,Math.min(3.4,.7+K*.42)),q.spin.add(new _(O.z*2.8,(q.id%2?1:-1)*K*.8,-O.x*2.8)).clampLength(0,18)}function de(q){let O=new _,K=new _,ce=new Te;for(let $ of f)if($.down&&$.mesh.visible){$.v.y-=9.81*q,$.mesh.position.addScaledVector($.v,q);let fe=$.spin.length();fe>.001&&(K.copy($.spin).divideScalar(fe),ce.setFromAxisAngle(K,fe*q),$.mesh.quaternion.premultiply(ce).normalize()),O.set(0,1,0).applyQuaternion($.mesh.quaternion);let Pe=.033+.08+.135*Math.abs(O.y);$.mesh.position.y<Pe?($.mesh.position.y=Pe,$.v.y=$.v.y<-.65?-$.v.y*.32:0,$.v.x*=Math.exp(-4*q),$.v.z*=Math.exp(-4*q),$.spin.multiplyScalar(Math.exp(-5*q))):$.spin.multiplyScalar(Math.exp(-.3*q));for(let[pe,Le,Ne]of[["x",-1.02,1.02],["z",-.35,2.2]])($.mesh.position[pe]<Le||$.mesh.position[pe]>Ne)&&($.mesh.position[pe]=Ge.clamp($.mesh.position[pe],Le,Ne),$.v[pe]*=-.38)}for(let $=0;$<f.length;$++)for(let fe=$+1;fe<f.length;fe++){let Pe=f[$],pe=f[fe];if(!Pe.mesh.visible||!pe.mesh.visible||!Pe.down&&!pe.down)continue;let Le=pe.mesh.position.clone().sub(Pe.mesh.position),Ne=Le.length();if(Ne>=.29||Ne<.001)continue;let Ae=Le.divideScalar(Ne),le=Pe.v.clone().sub(pe.v).dot(Ae);if(le>.18){let We=Ae.clone().multiplyScalar(le*.7);pe.down?pe.v.add(We):ye(pe,We),Pe.down?Pe.v.sub(We):ye(Pe,We.clone().negate()),Pe.spin.x+=Ae.z*le,pe.spin.z-=Ae.x*le}let He=.29-Ne;Pe.down&&Pe.mesh.position.addScaledVector(Ae,-He*.5),pe.down&&pe.mesh.position.addScaledVector(Ae,He*.5)}}function we(){p=null,A.visible=!1;let q=f.filter(K=>K.down).length,O=q-T;if(q===10&&S===0&&Z(),w[m].push(O),T=q,S++,O===0&&o.encourage(),O>0&&!(q===10&&S===1)&&(o.cheer(q===10),i(q===10)),n(q===10?.8:.25),q===10||S===2){let K=q===10?S===1?"Strike!":"Spare!":`${q} pins.`;if(C.push(q),m++,S=T=0,t(m===10?`Bowling complete! ${V()} / 100 pins.`:`${K} Next frame.`),m===10){I=Math.max(I,V());try{localStorage.setItem("tfj-bowling-best-10-v1",String(I))}catch{}}else G()}else{for(let K of f)K.down&&(K.mesh.visible=!1,K.shadow.visible=!1);t(`${O} pins! One more bowl this frame.`)}ie()}function _e(q,O){if(!h)return;let{dt:K,right:ce,controller:$}=q;v+=K,o.tick(K,O,{eye:q.eye,held:d,ball:p?A.position:null});let fe=!!ce?.gamepad?.buttons[0]?.pressed,Pe=!!ce?.gamepad?.buttons[4]?.pressed;if(O){ae();return}re(K),fe||(M=!0),Pe&&!y&&m===10&&Q(),y=Pe;let pe=$&&$.visible!==!1?$.getWorldPosition(new _):null;if(fe&&!x&&M&&!p&&!R&&m<10&&pe){let Le=s.stats();Math.abs(Le.x-u.x)>1.1||Le.z<u.z+6.7||Le.z>u.z+8.2||Le.y>.15?t("Return behind the yellow bowling line."):(d=!0,g=[],A.visible=!0)}if(d){if(!pe)ae();else if(A.position.copy(pe),g.push({time:v,p:pe.clone()}),g=g.filter(Le=>v-Le.time<.14),!fe&&x){let Le=g.find(Ae=>v-Ae.time>=.04),Ne=Le?pe.clone().sub(Le.p).divideScalar(v-Le.time).clampLength(0,10):new _;d=!1,Ne.length()<.6||Ne.z>-.25?(A.visible=!1,t("Swing towards the pins before releasing.")):(E=!1,p={p:pe.clone().sub(u),v:Ne,age:0,gutter:!1})}}if(p||R){let Le=Math.max(1,Math.ceil(K/.008)),Ne=K/Le;for(let Ae=0;Ae<Le;Ae++){if(p){let le=p;le.age+=Ne,le.v.y-=9.81*Ne,le.p.addScaledVector(le.v,Ne),le.p.y<.174&&(le.p.y=.174,le.v.y=Math.abs(le.v.y)>.8?Math.abs(le.v.y)*.18:0,le.v.x*=Math.exp(-.25*Ne),le.v.z*=Math.exp(-.25*Ne)),Math.abs(le.p.x)>1&&(le.gutter=!0,le.p.x=Math.sign(le.p.x)*1.15,le.v.x=0),A.position.copy(le.p).add(u),A.rotation.x+=le.v.z*Ne/.14;for(let He of f)if(!He.down&&!le.gutter&&le.p.y<.6){let We=He.mesh.position.x-le.p.x,ft=He.mesh.position.z-le.p.z;Math.hypot(We,ft)<.23&&(ye(He,new _(le.v.x,0,le.v.z).multiplyScalar(.65)),le.v.x*=.8,le.v.z*=.84)}(le.p.z<-.6||le.age>7||Math.hypot(le.v.x,le.v.z)<.15)&&(p=null,R=2.6)}de(Ne);for(let le of f)le.shadow.position.x=le.mesh.position.x,le.shadow.position.z=le.mesh.position.z,le.shadow.material.opacity=Ge.clamp(1-(le.mesh.position.y-.25),.15,1);if(R&&(R=Math.max(0,R-Ne),!R)){we();break}}}x=fe}return{root:r,get best(){return I},crowd:o,fireworks:X,get celebrations(){return J},start:ne,stop:oe,cancel:ae,tick:_e,get held(){return d},get flight(){return p},get pins(){return f},get origin(){return u},get frame(){return m},get roll(){return S},get total(){return V()},get totals(){return C},get frameRolls(){return w}}}function Qd(s,e,t,n=.34){if(s.y<=t.y||e.y>t.y)return!1;let i=(s.y-t.y)/(s.y-e.y);return Math.hypot(s.x+(e.x-s.x)*i-t.x,s.z+(e.z-s.z)*i-t.z)<n}function ec(s,e,t,n,i){let r=s.colliders.map(Z=>new Ze(new _(Z.min.x,Z.min.y,Z.min.z),new _(Z.max.x,Z.max.y,Z.max.z))),o=new ge;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=Z=>new Se({color:Z,roughness:.6}),l=(Z,re,ie,j=o)=>{let he=new xe(Z,re);return he.position.copy(ie),j.add(he),he},c=new _,u=null,f=!1,h=!1,d=!1,p=null,g=[],v=0,x=!1,M=!1,y=0,m=0,S=0,C=0,w=!1;try{S=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let T=s.mollie.balls[0].ball.clone();T.scale.setScalar(.48),T.visible=!1,e.add(T);let R=l(new Ye(.065,16,12),a("#ee528c"),new _,e);R.visible=!1,l(new Ye(.03,8,6),a("#6ac68d"),new _(0,.06,0),R).scale.set(1,.4,1.7);let E=new ct;E.moveTo(0,.02),E.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),E.bezierCurveTo(.23,-.03,.16,.18,0,.02);let A=new xe(new Nt(E),new ve({color:16742315,side:je,transparent:!0}));A.visible=!1,e.add(A);let D=0,U=0,N=0,P=document.createElement("canvas");P.width=768,P.height=384;let V=P.getContext("2d"),b=new Ie(P);b.colorSpace=Ee;let W=l(new Ue(1.5,.75),new ve({map:b}),new _);function F(){_t(V,768,384),te(V,"POK\xC9 BALL BASKETBALL",30,62,38,Y.gold),te(V,`${m} baskets \xB7 ${y}/10 throws`,30,139,46),te(V,`Best: ${S} baskets`,30,204,32,Y.mint),te(V,y>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),te(V,"Y: games menu \xB7 B: leave",30,337,25,Y.muted),b.needsUpdate=!0}function L(){for(let[Z,re]of[[-4,8],[5,9],[-8,8],[12,8]]){let ie=!0;for(let j=-1.5;j<=1.5;j+=.5)for(let he=-2;he<=2;he+=.5)(s.blocked(Z+j,re+he,0)||Math.abs(s.groundAt(Z+j,re+he,.1))>.1)&&(ie=!1);if(ie)return new _(Z,0,re)}return null}function B(Z){if(c.set(Z.x,2.35,Z.z-1.5),W.position.set(Z.x+1.35,2,Z.z-1.75),o.children.length>1)for(let G of[...o.children])G!==W&&(o.remove(G),G.traverse(Q=>{Q.geometry?.dispose(),Q.material?.dispose()}));let re=Rt("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);re.position.set(Z.x,3.7,Z.z-1.93),o.add(re);let ie=Nn(1.1);ie.position.set(Z.x,4.1,Z.z-1.5),o.add(ie),l(new Me(.12,4.15,.12),a("#173d56"),new _(Z.x,2.075,Z.z-2)),l(new Me(.08,.08,.55),a("#173d56"),new _(Z.x,4.1,Z.z-1.75)),l(new Me(1.5,.95,.07),a("#e4f1f2"),new _(Z.x,2.65,Z.z-1.93));let j=l(new Ft(.42,.025,10,48),a("#f5ab44"),c);j.rotation.x=Math.PI/2;for(let G=0;G<12;G++){let Q=G/12*Math.PI*2,ne=new _(c.x+Math.cos(Q)*.41,c.y,c.z+Math.sin(Q)*.41),oe=new _(c.x+Math.cos(Q+.2)*.23,c.y-.48,c.z+Math.sin(Q+.2)*.23),ae=new Tt(new Be().setFromPoints([ne,oe]),new St({color:16777215}));o.add(ae)}l(new Me(.06,2.4,.06),a("#173d56"),new _(Z.x+1.35,1.2,Z.z-1.78)),l(new Me(1.56,.81,.045),a("#122538"),new _(Z.x+1.35,2,Z.z-1.78));let he=l(new Me(2,.015,.04),a("#f6d484"),new _(Z.x,.012,Z.z+1.45))}function k(Z){if(z(),Z==="friend")return h=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let re=L();return!re||!s.xrTeleport(re.x,0,re.z+1.9)?!1:(u=re,B(re),s.xrFace?.(0),f=o.visible=!0,y=m=0,F(),!0)}function z(){f=h=d=!1,o.visible=T.visible=R.visible=A.visible=!1,p=null,g=[],M=!1,x=!1,D=0}function H(){d=!1,T.visible=R.visible=!1,g=[],M=!1,x=!0}function X(){if(p=null,T.visible=!1,y===10){S=Math.max(S,m);try{localStorage.setItem("tfj-basket-best",String(S))}catch{}n(`Basketball complete! ${m} baskets from 10 throws.`)}F()}function ee(Z,re){t.react(re),D=1.5,A.visible=!0,C=2,i(.6),n(Z)}function J(Z,re){let{dt:ie,eye:j,controller:he,right:G,leftController:Q}=Z;v+=ie,C=Math.max(0,C-ie);let ne=!!G?.gamepad?.buttons[0]?.pressed,oe=!!G?.gamepad?.buttons[4]?.pressed;if(re){H(),A.visible=!1;return}ne||(M=!0);let ae=he?.visible!==!1&&he?he.getWorldPosition(new _):null;if(h){if(t.group.updateMatrixWorld(!0),R.visible=!!ae&&ne&&M,R.visible){R.position.copy(ae);let de=t.group.localToWorld(new _(0,.43,.4));!C&&R.position.distanceTo(de)<.22&&(U++,ee(`Yum! Jigglypuff loved berry ${U}.`,"feed"),M=!1,R.visible=!1)}t.group.updateMatrixWorld(!0);let ye=t.group.localToWorld(new _(.46,.58,.03));for(let de of[he,Q])if(de&&de.visible!==!1&&!ne&&!C&&de.getWorldPosition(new _).distanceTo(ye)<.24){N++,ee(`High-five! ${N} happy high-fives.`,"five");break}}else R.visible=!1;if(D>0?(D-=ie,A.visible=!0,A.position.copy(t.group.position).add(new _(0,1.3+(1.5-D)*.22,0)),A.lookAt(j),A.material.opacity=Math.min(1,D*2)):A.visible=!1,!f){x=ne;return}if(oe&&!w&&y===10&&!p&&(y=m=0,F()),w=oe,ae&&ne&&!x&&M&&!p&&y<10&&(d=!0,g=[],T.visible=!0),d){if(!ae)H();else if(T.position.copy(ae),g.push({time:v,p:ae.clone()}),g=g.filter(ye=>v-ye.time<.14),!ne&&x){let ye=g.find(we=>v-we.time>=.04),de=ye?ae.clone().sub(ye.p).divideScalar(v-ye.time).clampLength(0,12):new _;d=!1,de.length()<.6?(T.visible=!1,n("Swing your hand upwards, then release.")):(y++,p={p:ae.clone(),v:de,age:0,scored:!1},F())}}if(p){let ye=Math.max(1,Math.ceil(ie/.008)),de=ie/ye;for(let we=0;we<ye&&p;we++){let _e=p,q=_e.p.clone().addScaledVector(_e.v,de);q.y-=4.9*de*de,_e.v.y-=9.8*de;let O=q.clone().sub(_e.p),K=O.length(),ce=new st(_e.p,O.normalize()),$=new _;if(r.some(pe=>!pe.containsPoint(_e.p)&&ce.intersectBox(pe,$)&&$.distanceTo(_e.p)<=K)){X();break}!_e.scored&&Qd(_e.p,q,c)&&(_e.scored=!0,m++,i(.8),F());let fe=c.z-.4;(_e.p.z-fe)*(q.z-fe)<0&&Math.abs(q.x-c.x)<.8&&q.y>2.17&&q.y<3.15&&(q.z=fe+Math.sign(_e.p.z-fe)*.1,_e.v.z*=-.65);let Pe=Math.hypot(q.x-c.x,q.z-c.z);Math.abs(q.y-c.y)<.1&&Pe>.33&&Pe<.53&&(_e.v.x+=(q.x-c.x)*3,_e.v.z+=(q.z-c.z)*3,_e.v.y=Math.abs(_e.v.y)*.45,q.y=c.y+.11),_e.p.copy(q),_e.age+=de,T.position.copy(q),T.rotation.x+=de*5,(q.y<.09||_e.age>5)&&X()}}x=ne}return{root:o,get best(){return S},start:k,stop:z,cancel:H,tick:J,get origin(){return u},get held(){return d},get shots(){return y},get score(){return m},get flight(){return p},get feeds(){return U},get fives(){return N},get berry(){return R},get hoop(){return c}}}function tc(s,e,t){let n=new ge;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new ge;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let r=document.createElement("canvas");r.width=1024,r.height=256;let o=r.getContext("2d"),a=new Ie(r);a.colorSpace=Ee;let l=new xe(new Ue(1.75,.4375),new ve({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=Rt("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let u=s.colliders.map(P=>new Ze(new _(P.min.x,P.min.y,P.min.z),new _(P.max.x,P.max.y,P.max.z))),f=[],h=[],d=[],p=[],g=new Set,v=0,x=0,M=!1,y=!1,m=[],S=null,C={};try{C=Ar(localStorage.getItem(Er))}catch{}function w(){let P=h.length/2;if(!(y||v<P||v>=(C[P]??1/0))){C[P]=v;try{localStorage.setItem(Er,JSON.stringify(C))}catch{}}}function T(){_t(o,1024,256),te(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,Y.gold,"700"),te(o,`${g.size/2} / ${h.length/2} pairs  \xB7  ${v} turns`,28,101,38,Y.ink,"700"),te(o,g.size===h.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,Y.mint,"500"),te(o,y?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,Y.muted,"400"),a.needsUpdate=!0}function R(){for(let P of f)P.geometry.dispose(),P.material.dispose();f=[];for(let P of d)for(let V of P.material)V.userData.memoryOwned&&V.dispose();i.clear(),d=[],S=null}function I(){R();let P=[...s.mollie.found];y=P.length<2,y&&(P=[0,1,2,3]);for(let b=P.length-1;b>0;b--){let W=Math.floor(Math.random()*(b+1));[P[b],P[W]]=[P[W],P[b]]}P=P.slice(0,6),h=[...P,...P];for(let b=h.length-1;b>0;b--){let W=Math.floor(Math.random()*(b+1));[h[b],h[W]]=[h[W],h[b]]}p=[],g.clear(),v=x=0;let V=Math.ceil(h.length/4);d=h.map((b,W)=>{let F=s.mollie.cards[b].clone();F.userData={index:W},F.material=F.material.map(B=>{let k=new ve(B.map?{map:B.map}:{color:15258527});return k.userData.memoryOwned=!0,k}),F.position.set((W%4-1.5)*.43,((V-1)/2-Math.floor(W/4))*.39,.012),F.rotation.set(0,Math.PI,0),F.scale.setScalar(.34/.62),F.visible=!0;let L=new xe(new Ue(.268,.36),new ve({color:2508378}));return L.position.copy(F.position),L.position.z=.003,f.push(L),i.add(L,F),F}),m=d.map(()=>Math.PI),T()}function E(){return s.xrTeleport(-21.8,0,-10.78)?(s.xrFace?.(0),M=n.visible=!0,I(),!0):!1}function A(){M=n.visible=!1,p=[],x=0}function D(P){return!M||x||!Number.isInteger(P)||P<0||P>=h.length||g.has(P)||p.includes(P)||g.size===h.length?!1:(p.push(P),m[P]=0,t(.18),p.length===2&&(v++,x=.85),T(),!0)}function U(P,V=!1){if(M){for(let b=0;b<d.length;b++)d[b].rotation.y=Ge.damp(d[b].rotation.y,m[b],16,P);if(!V&&x&&(x=Math.max(0,x-P),!x)){let[b,W]=p;h[b]===h[W]?(g.add(b),g.add(W),f[b].material.color.set(9429443),f[W].material.color.set(9429443),t(.55),g.size===h.length&&w()):m[b]=m[W]=Math.PI,p=[],T()}}}function N(P){if(S!==null&&f[S]&&f[S].material.color.set(g.has(S)?9429443:2508378),S=null,!M||!P)return null;n.updateMatrixWorld(!0);let V=new mn(P.position,P.direction,0,3.8).intersectObjects(d)[0];if(!V)return null;let b=new st(P.position,P.direction),W=new _;for(let L of u)if(b.intersectBox(L,W)&&W.distanceTo(P.position)<V.distance-.025)return null;let F=V.object.userData.index;return S=F,g.has(F)||f[F].material.color.set(16176260),{point:V.point,action:()=>D(F)}}return{root:n,start:E,stop:A,reset:I,tick:U,point:N,select:D,get records(){return{...C}},get deck(){return h},get cards(){return d},get moves(){return v},get matched(){return g},get waiting(){return x},get active(){return M},get complete(){return M&&g.size===h.length},get practice(){return y}}}function Cr(){let s=new ge;s.name="Jigglypuff \xB7 3D";let e=y=>new Se({color:y,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),r=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(y,m,S,C=s)=>{let w=new xe(y,m);return w.name=S,w.castShadow=w.receiveShadow=!0,C.add(w),w},c=(y,m,S,C,w,T,R,I,E=s)=>{let A=l(new Ye(1,32,24),R,I,E);return A.position.set(y,m,S),A.scale.set(C,w,T),A};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let y of[-1,1]){let m=new ge;m.position.set(y*.27,.86,-.005),m.rotation.z=-y*.21,s.add(m);let S=new ct;S.moveTo(-.135,0),S.quadraticCurveTo(-.115,.16,-.025,.34),S.quadraticCurveTo(0,.39,.025,.34),S.quadraticCurveTo(.12,.13,.135,0),S.quadraticCurveTo(0,-.07,-.135,0);let C=l(new Qt(S,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",m);C.position.z=-.04;let w=new ct;w.moveTo(-.085,.025),w.quadraticCurveTo(-.06,.16,0,.29),w.quadraticCurveTo(.06,.16,.085,.025),w.quadraticCurveTo(0,-.005,-.085,.025);let T=l(new Nt(w,16),i,"Dark inner ear",m);T.position.z=.047,c(y*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let u=[];for(let y of[-1,1]){let m=new ge;m.position.set(y*.172,.625,.347),m.rotation.y=y*.24,s.add(m),u.push(m),c(0,0,0,.123,.153,.053,r,"Eye white",m),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",m),c(0,-.003,.063,.042,.079,.01,a,"Pupil",m),c(-.025,.045,.077,.024,.033,.007,r,"Eye sparkle",m),c(.022,-.045,.075,.011,.015,.005,r,"Small sparkle",m)}((y,m,S,C)=>l(new yi(new Pn(y.map(w=>new _(...w))),40,m,8,!1),S,C))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let h=[];for(let y=0;y<=36;y++){let m=y/36,S=Math.PI-m*Math.PI*2,C=.126*(1-.88*m);h.push(new _(.018+Math.cos(S)*C,.961+Math.sin(S)*C,.295+.035*m))}let d=new yi(new Pn(h),72,.042,12,!1),p=d.attributes.position,g=new Pn(h);for(let y=0;y<=72;y++){let m=g.getPointAt(y/72),S=1-.66*(y/72)**2;for(let C=0;C<=12;C++){let w=y*13+C,T=new _().fromBufferAttribute(p,w).sub(m).multiplyScalar(S).add(m);p.setXYZ(w,T.x,T.y,T.z)}}d.computeVertexNormals(),l(d,n,"Curled fringe");let v=[];for(let y of[-1,1]){let m=new ge;m.position.set(y*.37,.48,.015),m.rotation.z=y*.6,s.add(m),c(y*.075,0,0,.14,.075,.075,t,"Little arm",m),v.push(m)}let x=0;function M(y,m=!1){x+=y,s.position.y=Math.max(0,Math.sin(x*2.5))*.028;let S=x%4.4>4.2?.09:1;u.forEach(C=>C.scale.y=S),v[1].rotation.z=.6+(m?Math.sin(x*4)*.25:Math.sin(x*2)*.04)}return{group:s,animate:M}}function nc(s,e){let t=Cr(),n=new ge;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,r=.52,o=[],a=null,l=!0,c=0,u=null,f=0,h=0,d="",p=(M,y)=>Math.hypot(M.x-y.x,M.z-y.z);function g(M,y){let m=new _(-y.z,0,y.x);for(let[S,C]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let w=M.x+y.x*S+m.x*C,T=M.z+y.z*S+m.z*C,R=s.groundAt(w,T,M.y+.2);if(Math.abs(R-M.y)<.35&&!s.blocked(w,T,R))return n.position.set(w,R,T),o=[],a=new _(M.x,M.y,M.z),c=0,u=null,f=.15,!0}return!1}function v(M,y,m,S=!1){M=Math.min(M,.05);let C=s.stats(),w=new _(C.x,C.y,C.z);if(m){n.visible=!1,l=!0,u=null;return}let T=new _(y.x,0,y.z).normalize();if(T.lengthSq()<.01&&T.set(0,0,-1),l||n.position.distanceTo(w)>8||a&&a.distanceTo(w)>3||p(n.position,w)<.9){if(!g(C,T)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(w)>.18)&&(o.push(w.clone()),a=w.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let R=S?1.05:i;f=Math.max(0,f-M);let I=p(n.position,w);if(!u&&f===0){let U=null,N=0;if(I<R?(U=n.position.clone().sub(w),U.y=0,U.normalize(),N=Math.min(.8,R+.2-I)):I>R+.35&&(o.length||S)&&(U=(S?w:o[0]).clone().sub(n.position),U.y=0,N=Math.min(.8,U.length(),I-R),U.normalize()),U&&N>.04){let P=n.position.clone(),V=P.clone().addScaledVector(U,N),b=!0,W=P.y;for(let F=1;F<=8;F++){let L=P.clone().lerp(V,F/8),B=s.groundAt(L.x,L.z,W+.22);if(Math.abs(B-W)>.35||s.blocked(L.x,L.z,B)||p(L,w)<Math.min(R,I)-.01){b=!1;break}W=B}V.y=W,b?(u={from:P,to:V,time:0},c=0):(c+=M,c>2.5&&g(C,T))}else c=0}let E=0,A=0;if(u){u.time+=M;let U=Math.min(1,u.time/r),N=u.from.clone().lerp(u.to,U),P=p(n.position,w);p(N,w)>=Math.min(R,P)-.001&&!s.blocked(N.x,N.z,N.y)&&n.position.copy(N),E=Math.sin(Math.PI*U)*.3,A=Math.sin(Math.PI*U)*.08,U===1&&(u=null,f=.14)}else f>0&&(A=-Math.sin(Math.PI*Math.min(1,f/.14))*.1);let D=Math.atan2(C.x-n.position.x,C.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(D-n.rotation.y),Math.cos(D-n.rotation.y))*Math.min(1,M*5),t.animate(M,I<3),t.group.position.y=E,t.group.scale.set(1-A*.5,1+A,1-A*.5),h>0){h=Math.max(0,h-M);let U=Math.abs(Math.sin(h*9));t.group.position.y+=U*(d==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(h*20)*.06}}function x(){l=!0,n.visible=!1,o=[],a=null,u=null}return{group:n,tick:v,summon:x,radius:i,react(M){h=1.3,d=M},get hopping(){return!!u},get trail(){return o},get hidden(){return l}}}function ic(s,e,t){let n=new ge;n.name="Mollie\u2019s VR book",s.add(n),n.visible=!1;let i=new ge;n.add(i);let r=[],o=-1,a=null,l=!1,c=1,u=null,f=null,h=null,d=null,p=new Te,g=new ve({color:16446169}),v=new ve({color:1455692}),x=new ve({color:13944999}),M=new ve({color:15386989});function y(b,W,F,L,B,k,z=0){let H=new xe(new Me(b,W,F),L);return H.position.set(B,k,z),i.add(H),H}function m(b,W,F,L,B,k=44,z=null,H="#17364b",X=null){let ee=document.createElement("canvas");ee.width=1024,ee.height=Math.round(1024*F/W);let J=ee.getContext("2d"),Z;function re(he=!1){if(J.clearRect(0,0,ee.width,ee.height),z){let G=z==="#eac96d";$e(J,4,4,1016,ee.height-8,{top:G?"#ffe8ac":he?"#365e76":"#24475f",bottom:G?"#d9b66c":"#142e43",stroke:he?"#ffe09a":G?"#fff0c7":"#597b91",radius:Math.min(28,ee.height/5)})}J.textAlign="center",J.textBaseline="middle",J.fillStyle=z==="#eac96d"?"#17364b":he?Y.gold:H,J.font=`bold ${k}px Arial`,b.forEach((G,Q)=>J.fillText(G,512,ee.height*(Q+1)/(b.length+1),944)),Z&&(Z.needsUpdate=!0)}re(),Z=new Ie(ee),Z.colorSpace=Ee;let ie=new ve({map:Z,transparent:!0,side:je}),j=new xe(new Ue(W,F),ie);return j.position.set(L,B,.06),i.add(j),X&&(j.userData.action=X,j.userData.paint=re,r.push(j)),j}function S(){let b=document.createElement("canvas");b.width=b.height=256;let W=b.getContext("2d");W.fillStyle="#203f53",W.beginPath(),W.arc(128,128,112,0,Math.PI*2),W.fill(),W.strokeStyle="#b99b5c",W.lineWidth=3,W.stroke(),gn(W,"ball",128,128,185,Y.gold);let F=new Ie(b);F.colorSpace=Ee;let L=new xe(new Ue(.2,.2),new ve({map:F,transparent:!0}));L.position.set(.02,.015,.061),i.add(L)}function C(){i.traverse(b=>{b.userData.borrowed||(b.geometry&&b.geometry.dispose(),b.material&&!Array.isArray(b.material)&&![g,v,x,M].includes(b.material)&&(b.material.map?.dispose(),b.material.dispose()))}),i.clear(),r.length=0,f=null}function w(b,W,F,L,B){let k=e.mollie.cards[b].clone();return k.userData={borrowed:!0},k.material=k.material.map(z=>{if(!z.map)return z;let H=new ve({map:z.map});return H.userData.albumOwned=!0,H}),k.position.set(W,F,.085),k.scale.setScalar(L/.62),k.rotation.set(0,0,0),k.visible=!0,B&&(k.userData.action=B,r.push(k)),i.add(k),k}function T(){i.traverse(b=>{if(b.userData.borrowed)for(let W of b.material)W.userData.albumOwned&&W.dispose()}),C()}function R(){if(T(),d=null,n.position.z=a!==null?.38:0,a!==null){m([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),f=w(a,-.28,0,1.05*c),f.rotation.y=l?Math.PI:0,p.copy(f.quaternion),m(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new _(0,1,0),l?Math.PI:0)}),m(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>I(.12)),m(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>I(-.12)),m(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",D),m(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){y(1.04,1.33,.06,v,0,0),y(.038,1.29,.07,M,-.47,0,.025),m(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),m([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),S(),m(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>E(0)),m(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}y(2.1,1.37,.055,v,0,0,-.02),y(2.02,1.3,.045,x,0,0,.005),y(.98,1.26,.018,g,-.502,0,.036),y(.98,1.26,.018,g,.502,0,.036),y(.025,1.29,.02,x,0,0,.055);for(let b of[-1,1]){let W=o*2+(b===1?1:0),F=b*.5;m([e.mollie.found.has(W)?e.xrGames.names[W]:`Mystery card ${W+1}`],.88,.12,F,.53,56),e.mollie.found.has(W)?w(W,F,-.005,.8,()=>A(W)):(y(.58,.8,.006,new ve({color:14476515}),F,-.005,.062),m(["?"],.5,.6,F,-.005,300,null,"#89a2ab")),m([`${W+1} / 18`],.7,.09,F,-.54,52)}m(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>E(o-1)),m([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),m(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>E(Math.min(8,o+1))),m(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),m(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function I(b){c=Ge.clamp(c+b,.72,1.12),f.scale.setScalar(1.05*c/.62)}function E(b){if(u||b===o)return;b=Ge.clamp(b,-1,8);let W=new ge;W.name="Turning album page",n.add(W);let F=new xe(new Me(.99,1.27,.012),g);if(F.position.x=b>o?.495:-.495,F.userData.pageTurnOwned=!0,W.add(F),o>=0){for(let L of i.children)if(L.position.z>.045&&Math.abs(L.position.y)<.64&&(b>o?L.position.x>.05:L.position.x<-.05)){let B=L.clone();B.userData={},W.add(B)}}W.position.z=.16,u={leaf:W,next:b,elapsed:0,direction:b>o?-1:1}}function A(b){return e.mollie.found.has(b)?(a=b,l=!1,c=1,h=null,R(),!0):!1}function D(){a!==null?(a=null,h=null,R()):t()}function U(){o=-1,a=null,n.visible=!0,R()}function N(){u&&(u.leaf.traverse(b=>{b.userData.pageTurnOwned&&b.geometry?.dispose()}),n.remove(u.leaf),u=null),h=null,n.visible=!1}function P(b){var L;if(!b||u)return null;n.updateMatrixWorld(!0);let W=new mn(b.position,b.direction,0,5).intersectObjects(r)[0],F=W?.object||null;return F!==d&&(d&&(d.userData.paint?.(!1),d.userData.restScale&&d.scale.copy(d.userData.restScale)),d=F,d&&(d.userData.paint?.(!0),(L=d.userData).restScale??(L.restScale=d.scale.clone()),d.scale.copy(d.userData.restScale).multiplyScalar(1.025))),W?{point:W.point,action:W.object.userData.action}:null}function V(b,W,F){if(u){u.elapsed+=b;let L=Math.min(1,u.elapsed/.48);u.leaf.rotation.y=u.direction*Math.PI*(L*L*(3-2*L)),L>=1&&(n.remove(u.leaf),u.leaf.traverse(B=>{B.userData.pageTurnOwned&&B.geometry?.dispose()}),o=u.next,u=null,R())}if(f)if(W&&F){h||(h={hand:F.clone().invert(),start:f.quaternion.clone()});let L=F.clone().multiply(h.hand),B=i.getWorldQuaternion(new Te);f.quaternion.copy(B.clone().invert().multiply(L).multiply(B).multiply(h.start))}else h?(h=null,p.copy(f.quaternion)):f.quaternion.slerp(p,1-Math.exp(-10*b))}return{root:n,open:U,close:N,point:P,tick:V,back:D,inspect:A,change:E,get page(){return o},get inspected(){return a},get card(){return f},get turning(){return!!u}}}var pt={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},jd=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function ep(s,e){let t=Math.hypot(s,e)*384/pt.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(s,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=jd[Math.floor(n/(Math.PI/10))],r=t>=268?2:t>=163&&t<=184?3:1;return{score:i*r,label:`${r===3?"Triple ":r===2?"Double ":""}${i} \xB7 ${i*r}`}}function tp(s){let e=s.at(-1);if(!e)return new _;let t=s.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new _}function np(s,e,t){let n=s.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function ip(s,e){if(s.x<=pt.x||e.x>pt.x)return null;let t=(pt.x-s.x)/(e.x-s.x),n=s.clone().lerp(e,t);return Math.hypot(n.y-pt.y,n.z-pt.z)<=.47?{point:n,...ep(-(n.z-pt.z),n.y-pt.y)}:null}function sc(s,e,t){let n=new ge;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new Se({color:12044498,metalness:.75,roughness:.28}),r=new Se({color:2112336,roughness:.45}),o=new Se({color:16764759,side:je,roughness:.8}),a=[];function l(z,H){return a.push(z),new xe(z,H)}function c(){let z=new ge;z.name="3D dart";let H=l(new Kt(.004,.035,8),i);H.rotation.x=-Math.PI/2,H.position.z=.0175,z.add(H);let X=l(new ke(.006,.007,.045,10),i);X.rotation.x=Math.PI/2,X.position.z=.0575,z.add(X);for(let J=0;J<5;J++){let Z=l(new Ft(.007,8e-4,4,10),r);Z.position.z=.043+J*.007,z.add(Z)}let ee=l(new ke(.003,.003,.06,8),r);ee.rotation.x=Math.PI/2,ee.position.z=.11,z.add(ee);for(let J=0;J<2;J++){let Z=l(new Me(.044,.001,.05),o);Z.rotation.z=J*Math.PI/2,Z.position.z=.15,z.add(Z)}return z}let u=c();n.add(u),u.visible=!1;let f=document.createElement("canvas");f.width=1024,f.height=640;let h=f.getContext("2d"),d=new Ie(f);d.colorSpace=Ee;let p=new xe(new Ue(.95,.594),new ve({map:d}));p.name="Wall-mounted darts scoreboard",p.position.set(pt.x+.05,1.8,pt.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let g=new xe(new Me(1.01,.654,.035),new Se({color:1517105,roughness:.7}));g.name="Darts scoreboard frame",g.position.copy(p.position),g.position.x-=.022,g.rotation.copy(p.rotation),n.add(g);let v=Rt("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);v.position.set(pt.x+.065,2.43,pt.z),v.rotation.y=Math.PI/2,n.add(v);let x=Nn(.9);x.position.set(pt.x+.55,2.75,pt.z),n.add(x);let M=s.colliders.map(z=>new Ze(new _(z.min.x,z.min.y,z.min.z),new _(z.max.x,z.max.y,z.max.z))),y=!1,m=!1,S=null,C=[],w=0,T=!1,R=!1,I=!1,E=0,A=0,D="Hold trigger, throw, release.",U=0,N=[];try{U=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function P(){Rl(h,{total:E,throws:A,best:U,last:D}),d.needsUpdate=!0}function V(z=!1){m=!1,C=[],u.visible=!1,S&&!z&&(n.remove(S.mesh),S=null),T=!0,R=!1}function b(){V();for(let z of N)n.remove(z);N=[],A=E=0,D="Nine darts. Make them count!",P()}function W(){let H=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([X,ee])=>!s.blocked(X,ee,0));return!H||!s.xrTeleport(H[0],0,H[1])?!1:(s.xrFace?.(Math.PI/2),n.visible=y=!0,b(),!0)}function F(){V(),y=!1,n.visible=!1}function L(z,H){let X=S;if(X){if(X.mesh.position.copy(H),N.push(X.mesh),S=null,A++,E+=z.score,D=z.label,t(z.score>0?.6:.12),A===9&&E>U){U=E;try{localStorage.setItem("tfj-vr-darts-best-v1",String(U))}catch{}}P()}}function B(z,H){let X=u.clone();X.visible=!0,X.position.copy(z),X.quaternion.setFromUnitVectors(new _(0,0,-1),H.clone().normalize()),n.add(X),S={mesh:X,position:z.clone(),velocity:H.clone(),age:0},u.visible=!1,m=!1,C=[]}function k(z,H,X,ee,J=!1){if(w+=z,!!y){if(J){m&&V();return}if(X||(R=!0),ee&&!I&&A===9&&b(),I=ee,H&&X&&!T&&R&&!S&&A<9){let Z=s.stats();Z.x<pt.ocheX-.04||Z.x>pt.ocheX+1.6||Math.abs(Z.z-pt.z)>1||Z.y>.15?(D="Stand behind the yellow line.",P()):(m=!0,C=[],u.visible=!0,t(.12))}if(m&&H&&(u.position.copy(H.position).addScaledVector(H.direction,.07),u.quaternion.setFromUnitVectors(new _(0,0,-1),H.direction),C.push({time:w,position:H.position.clone()}),C=C.filter(Z=>w-Z.time<.15),!X&&T)){let Z=tp(C);Z.length()<.6?(m=!1,u.visible=!1,D="Swing your hand before releasing.",P()):B(u.position,Z)}if(m&&!H&&V(),T=X,S){let Z=Math.max(1,Math.ceil(z/.004166666666666667)),re=z/Z;for(let ie=0;ie<Z&&S;ie++){let j=S,he=np(j.position,j.velocity,re),G=ip(j.position,he.position),Q=he.position.clone().sub(j.position),ne=Q.length(),oe=new st(j.position,Q.clone().normalize()),ae=new _,ye=null,de=ne+1e-8;for(let we of M){if(we.containsPoint(j.position)){ye=j.position.clone(),de=0;break}if(oe.intersectBox(we,ae)){let _e=ae.distanceTo(j.position);_e<=de&&(de=_e,ye=ae.clone())}}if(G&&(!ye||G.point.distanceTo(j.position)<=de)){L(G,G.point);break}if(ye){L({score:0,label:"Miss \xB7 hit scenery"},ye);break}if(he.position.y<=.025){let we=Ge.clamp((j.position.y-.025)/(j.position.y-he.position.y),0,1),_e=j.position.clone().lerp(he.position,we);j.mesh.quaternion.setFromUnitVectors(new _(0,0,-1),new _(j.velocity.x,0,j.velocity.z).normalize()),L({score:0,label:"Miss \xB7 floor"},_e);break}if(j.position.copy(he.position),j.velocity.copy(he.velocity),j.mesh.position.copy(j.position),j.mesh.quaternion.slerp(new Te().setFromUnitVectors(new _(0,0,-1),j.velocity.clone().normalize()),1-Math.exp(-18*re)),j.age+=re,j.age>4){L({score:0,label:"Miss"},j.position);break}}}}}return{root:n,get best(){return U},start:W,stop:F,cancel:V,reset:b,update:k,launch:B,get active(){return y},get held(){return m},get flight(){return S},get total(){return E},get throws(){return A},get last(){return D},get resting(){return N}}}function rc(s,e,t,n,i=.35){let r=e.clone().sub(s),o=r.length();if(o<1e-7)return null;let a=new st(s,r.multiplyScalar(1/o)),l=new _,c=o+1e-6,u=null;for(let f of t){let h=f.clone().expandByScalar(.045);if(h.containsPoint(s))return{type:"wall",point:s.clone(),distance:0};if(a.intersectBox(h,l)){let d=l.distanceTo(s);d<=c&&(c=d,u={type:"wall",point:l.clone(),distance:d})}}for(let f of n)if(a.intersectSphere(new Gt(f.position,i),l)){let h=l.distanceTo(s);h<c&&(c=h,u={type:"target",id:f.id,point:l.clone(),distance:h})}return u}function sp(s,e){let t=s.at(-1),n=s.find(r=>t.time-r.time<=.12&&t.time-r.time>=.045),i=new _;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new _(0,1.3,0)),i.clampLength(0,9)}function oc(s){let e=s.worldScene,t=new ge;t.name="VR games",t.visible=!1,e.add(t);let n=Il(t),i=new ge;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let se of[...s.mollie.balls.map(be=>be.ball),...s.mollie.cards,s.mollie.thrownBall])se?.isObject3D&&i.attach(se);let r=s.colliders.map(se=>new Ze(new _(se.min.x,se.min.y,se.min.z),new _(se.max.x,se.max.y,se.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new Ie(o);l.colorSpace=Ee;let c=new ge;t.add(c);let u=new xe(new Ue(1.6,1.2),new ve({map:l,side:je}));c.add(u),c.visible=!1;let f=new xe(new Me(1.64,1.24,.035),new ve({color:3561833}));f.position.z=-.025,c.add(f);let h=new ge;c.add(h);let d=new Tt(new Be().setFromPoints([new _,new _(0,0,-1)]),new St({color:16769946}));d.visible=!1,t.add(d);let p=new xe(new Ye(.012,8,6),new ve({color:16769946}));p.visible=!1,t.add(p);let g=s.mollie.balls[0].ball.clone();g.scale.setScalar(.43),g.visible=!1,t.add(g);let v=Cr();v.group.visible=!1,t.add(v.group);let x=document.createElement("canvas");x.width=768,x.height=192;let M=x.getContext("2d"),y=new Ie(x);y.colorSpace=Ee;let m=new xe(new Ue(.95,.2375),new ve({map:y,transparent:!0,depthTest:!1,depthWrite:!1}));m.name="Adventure notification",m.renderOrder=1e3,t.add(m),m.visible=!1;let S="explore",C="menu",w=[],T=null,R=null,I=0,E=!1,A=null,D=!1,U=null,N=[],P=0,V=!1,b=!1,W=!1,F=!0,L=[],B=0,k=0,z="Welcome, Mollie!",H="",X=0,ee=!1,J=null,Z=0,re=0;try{re=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let ie=(se,be=.3)=>{try{se?.gamepad?.hapticActuators?.[0]?.pulse(be,70)?.catch?.(()=>{})}catch{}},j=ic(c,s,()=>{C="menu",j.close(),u.visible=f.visible=!0,F=!0,le()}),he=sc(s,t,se=>ie(A?.right,se)),G=tc(s,t,se=>ie(A?.right,se)),Q=nc(s,t),ne=Kl(s,t,It,se=>ie(A?.right,se)),oe=Bl(s,t,It,se=>ie(A?.right,se)),ae=Zl(s,t,It,se=>ie(A?.right,se)),ye=0,de=!0;try{de=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function we(se){de=!!se;try{localStorage.setItem("tfj-companion-enabled",String(de))}catch{}de?Q.summon():(S==="friend"&&Vn(),Q.group.visible=!1),le()}let _e=jl(s,t,It,se=>ie(A?.right,se),pe),q=ec(s,t,Q,It,se=>ie(A?.right,se)),O=Jl(s,e,()=>({bowling:_e.best||null,darts:he.best||null,golf:oe.best,rc:ae.bestLapMs,basketball:q.best||null,planes:ne.best||null,memory:G.records,hide:re}),It),K=!1,ce=!1;function $(){if(S==="jigglypuff"){z="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",ft();return}Q.summon(),tt()}function fe(){kn(),C="album",u.visible=f.visible=!1,h.clear(),j.open(),F=!0}function Pe(){try{J??(J=new(window.AudioContext||window.webkitAudioContext)),J.resume()?.catch(()=>{})}catch{}}function pe(se){if(!(!J||J.state!=="running"))try{let be=Math.floor(J.sampleRate*.07),Ve=J.createBuffer(1,be,J.sampleRate),at=Ve.getChannelData(0);for(let Ce=0;Ce<be;Ce++)at[Ce]=(Math.random()*2-1)*Math.exp(-Ce/be*5);for(let Ce=0;Ce<(se?12:7);Ce++){let mt=J.createBufferSource(),nt=J.createGain(),on=J.createBiquadFilter();mt.buffer=Ve,on.type="highpass",on.frequency.value=650,nt.gain.value=.055+Ce%3*.012,mt.connect(on),on.connect(nt),nt.connect(J.destination),mt.start(J.currentTime+Ce*.095+Ce%2*.025),mt.onended=()=>{mt.disconnect(),on.disconnect(),nt.disconnect()}}}catch{}}function Le(){if(!J||J.state!=="running")return;let se=v.group.position;try{let be=J.createPanner();be.panningModel="HRTF",be.distanceModel="inverse",be.refDistance=2,be.maxDistance=25,be.positionX.value=se.x,be.positionY.value=se.y+.6,be.positionZ.value=se.z,be.connect(J.destination),[523.25,659.25,587.33].forEach((Ve,at)=>{let Ce=J.createOscillator(),mt=J.createGain(),nt=J.currentTime+at*.18;Ce.type="sine",Ce.frequency.value=Ve,mt.gain.setValueAtTime(0,nt),mt.gain.linearRampToValueAtTime(.09,nt+.025),mt.gain.exponentialRampToValueAtTime(.001,nt+.17),Ce.connect(mt),mt.connect(be),Ce.start(nt),Ce.stop(nt+.18),Ce.onended=()=>{Ce.disconnect(),mt.disconnect()}}),setTimeout(()=>be.disconnect(),1200)}catch{}}function Ne(se,be,Ve,at=32,Ce="#fff"){a.font=`${at>=40?"bold ":""}${at}px Arial`,a.fillStyle=Ce,a.fillText(se,be,Ve)}function Ae(se,be,Ve,at,Ce){w.push({label:se,x:be,y:Ve,w:at,h:72,action:Ce}),wl(a,se,be,Ve,at,T===se)}function le(){C!=="album"&&(w=[],Al(a,ya()),ye===0?(Ae("Pok\xE9mon throwing hunt",44,196,455,()=>Wt("hunt")),Ae("Jigglypuff hide-and-seek",519,196,461,()=>Wt("jigglypuff")),Ae("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>Wt("darts")),Ae("Memory match \xB7 staff-room table",519,280,461,()=>Wt("memory")),Ae(`Open the card album \xB7 ${s.mollie.found.size} / 18`,44,364,455,fe),Ae("Play with Jigglypuff",519,364,461,()=>Wt("friend")),Ae("Pok\xE9 Ball basketball",44,448,455,()=>Wt("basketball")),Ae("Warehouse bowling",519,448,461,()=>Wt("bowling"))):(Ae("Paper-plane challenge",44,196,455,()=>Wt("planes")),Ae("RC car racing",519,196,461,()=>Wt("rc")),Ae("Warehouse mini-golf",44,280,936,()=>Wt("golf")),Ae("Arcade wall of fame",44,364,455,Si),Ae("Back to exploring",519,364,461,()=>{Vn(),tt()}),Ae(de?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>we(!de))),Ae("Resume",44,548,445,tt),Ae(ye===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{ye=1-ye,le()}),El(a,S==="rc"),l.needsUpdate=!0)}function He(){h.clear()}function We(){if(!A){ee=!0;return}ee=!1;let se=A.forward.clone();se.y=0,se.normalize(),c.position.copy(A.eye).addScaledVector(se,1.9),c.position.y=Math.max(A.eye.y-.1,s.stats().y+.85),c.rotation.set(0,Math.atan2(-se.x,-se.z),0)}function ft(){ye=0,X=0,m.visible=!1,kn(),j.close(),u.visible=f.visible=!0,C="menu",He(),c.visible=!0,F=!0,T=null,We(),le()}function tt(){j.close(),C="menu",u.visible=f.visible=!0,c.visible=!1,d.visible=p.visible=!1,F=!0,T=null}function Si(){Vn(),tt();let se=O.visit();return se&&(S="fame",ce=!0),se}function kn(se=!1){ae.cancel(),oe.cancel(),ne.cancel(),_e.cancel(),q.cancel(),he.cancel(se),D=!1,U=null,N=[],g.visible=!1}function Vn(){n.update("explore",null),i.visible=!0,ae.stop(),oe.stop(),ne.stop(),_e.stop(),q.stop(),X=0,m.visible=!1,G.stop(),he.stop(),S="explore",v.group.visible=!1,k=0,kn(),z="Choose an adventure whenever you like."}function xa(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([be,Ve,at])=>{for(let[Ce,mt]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let nt=new _(be+Ce,0,Ve+mt);if(!s.blocked(nt.x,nt.z,0)&&s.groundAt(nt.x,nt.z,.1)===0&&s.mollie.balls.every(on=>on.ball.position.distanceTo(nt)>1.3))return[{point:nt,clue:at}]}return[]})}function _a(){v.group.position.copy(L[B].point),v.group.visible=!0,Z=P+1,z=`Try ${L[B].clue}.`,It(z)}function Wt(se){if(Vn(),S=se,S==="rc"){if(!ae.start()){S="explore",z="No clear warehouse circuit available.",le();return}i.visible=!1,tt();return}if(S==="golf"){if(!oe.start()){S="explore",z="No clear warehouse green available.",le();return}i.visible=!1,tt();return}if(S==="friend"&&!de&&we(!0),S==="planes"){if(!ne.start()){S="explore",z="The plane course is blocked. Try again.",le();return}tt();return}if(S==="bowling"){if(!_e.start()){S="explore",z="The warehouse lane is blocked. Try again.",le();return}i.visible=!1,tt();return}if(S==="friend"||S==="basketball"){if(!q.start(S)){S="explore",z="No clear basketball space available.",le();return}tt();return}if(S==="memory"){if(!G.start()){S="explore",z="The table is not accessible. Try again.",le();return}tt();return}if(S==="darts"){if(!he.start()){S="explore",z="The throwing line is blocked. Try again.",le();return}z="Nine darts. Hold trigger, throw and release.",tt();return}if(S==="hunt")s.xrGames.start(),z="Hold trigger, swing gently and release!";else{L=xa();for(let be=L.length-1;be>0;be--){let Ve=Math.floor(Math.random()*(be+1));[L[be],L[Ve]]=[L[Ve],L[be]]}if(L=L.slice(0,3),B=0,L.length<3){S="explore",z="No clear hiding spots. Please try again.",le();return}_a()}tt()}function xc(){if(S!=="jigglypuff"||k||!v.group.visible)return!1;if(B++,v.group.visible=!1,ie(A?.right,.6),B===3){re++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(re))}catch{}S="explore",z="You found Jigglypuff 3 times! Champion!",It(z)}else k=1.5,z=`Found ${B} / 3! Finding a new hiding spot\u2026`,It(z);return!0}function ya(){return S==="rc"?ae.state.finished?"RC race complete \xB7 A to race again":`RC racing: lap ${ae.state.completedLaps+1}/3 \xB7 ${ae.state.elapsed.toFixed(1)}s \xB7 A rescues car`:S==="fame"?`Wall of fame: ${O.records.filter(se=>se.medal).length} / ${O.records.length} medals earned`:S==="golf"?oe.complete?`Mini-golf complete: ${oe.total} strokes \xB7 Best ${oe.best}`:`Mini-golf: hole ${oe.hole+1}/6 \xB7 ${oe.strokes} strokes \xB7 Par ${oe.layout.par}`:S==="planes"?`Paper planes: ${ne.score} points \xB7 ${ne.throws}/5 throws \xB7 Longest ${ne.longest.toFixed(1)} m`:S==="bowling"?`Bowling: ${_e.total} / 100 pins \xB7 ${_e.frame===10?"Complete":`Frame ${_e.frame+1} \xB7 Bowl ${_e.roll+1}`}`:S==="basketball"?`Basketball: ${q.score} baskets \xB7 ${q.shots}/10 throws`:S==="friend"?`Berries: ${q.feeds} \xB7 High-fives: ${q.fives} \xB7 Offer a berry or touch her raised hand`:S==="hunt"?`Pok\xE9mon: ${s.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:S==="jigglypuff"?k?z:`Found ${B}/3 \xB7 Try ${L[B].clue}`:S==="darts"?`Darts: ${he.total} points \xB7 ${he.throws}/9 darts \xB7 ${he.last}`:S==="memory"?`Memory: ${G.matched.size/2}/${G.deck.length/2} pairs \xB7 ${G.moves} turns`:z}function It(se){H=se,Cl(M,se),y.needsUpdate=!0,X=3}function _c(se){if(m.visible=!c.visible&&X>0,!m.visible)return;let be=se.headOrientation||new Te().setFromUnitVectors(new _(0,0,-1),se.forward.clone().normalize());m.position.set(0,-.28,-2.1).applyQuaternion(be).add(se.eye),m.quaternion.copy(be),m.material.opacity=Math.min(1,X/.5),X=Math.max(0,X-se.dt)}function yc(se){return!se||se.visible===!1?null:{position:se.getWorldPosition(new _),direction:new _(0,0,-1).applyQuaternion(se.getWorldQuaternion(new Te))}}function vc(se){if(!se)return null;if(C==="album"){let Ce=j.point(se);return d.geometry.setFromPoints([se.position,Ce?Ce.point:se.position.clone().addScaledVector(se.direction,2)]),d.visible=!0,p.visible=!!Ce,Ce&&p.position.copy(Ce.point),Ce?{...Ce,label:"album"}:null}c.updateMatrixWorld(!0);let be=new mn(se.position,se.direction,0,4).intersectObject(u)[0];if(d.geometry.setFromPoints([se.position,be?be.point:se.position.clone().addScaledVector(se.direction,2)]),d.visible=!0,p.visible=!!be,be&&p.position.copy(be.point),!be)return null;let Ve=be.uv.x*1024,at=(1-be.uv.y)*768;return w.find(Ce=>Ve>=Ce.x&&Ve<=Ce.x+Ce.w&&at>=Ce.y&&at<=Ce.y+Ce.h)}function Mc(se){if(!se||!v.group.visible)return!1;let be=v.group.position.clone().add(new _(0,.58,0)),Ve=se.position.clone().addScaledVector(se.direction,4);return rc(se.position,Ve,r,[{id:0,position:be}],.5)?.type==="target"&&se.position.distanceTo(be)<3.3}function bc(se){A=se,ee&&We();let{dt:be,eye:Ve,forward:at,right:Ce,left:mt,controller:nt}=se,on=he.throws,Ac=G.complete;P+=be;let yn=!!Ce?.gamepad?.buttons[0]?.pressed,va=!!mt?.gamepad?.buttons[5]?.pressed,Ma=!!Ce?.gamepad?.buttons[5]?.pressed,Xt=yc(nt);if(va&&!b&&(c.visible?tt():ft()),Ma&&!W&&(c.visible&&C==="album"?(j.back(),F=!0):c.visible?tt():(Vn(),ft())),b=va,W=Ma,yn||(F=!1),c.visible){C==="album"&&j.tick(be,!!Ce?.gamepad?.buttons[1]?.pressed,nt?.getWorldQuaternion(new Te));let vt=vc(Xt);T=vt?.label||null,T!==R&&(R=T,le()),yn&&!V&&!F&&vt&&(ie(Ce),vt.action(),F=!0),m.visible=!1}else d.visible=p.visible=!1,S==="darts"&&he.update(be,F?null:Xt,!F&&yn,!!Ce?.gamepad?.buttons[4]?.pressed),S==="hunt"&&Xt&&(yn&&!V&&!F&&!U&&(D=!0,N=[],g.visible=!0,ie(Ce,.15)),D&&(g.position.copy(Xt.position).addScaledVector(Xt.direction,.09),N.push({time:P,position:Xt.position.clone()}),N=N.filter(vt=>P-vt.time<.16),!yn&&V&&(U={position:g.position.clone(),velocity:sp(N,Xt.direction),life:0},D=!1,N=[],ie(Ce,.2)))),S==="jigglypuff"&&(v.animate(be,!1),k?(k-=be,k<=0&&(k=0,_a())):v.group.visible&&(v.group.rotation.y=Math.atan2(Ve.x-v.group.position.x,Ve.z-v.group.position.z),Mc(Xt)&&(d.geometry.setFromPoints([Xt.position,v.group.position.clone().add(new _(0,.6,0))]),d.visible=!0,yn&&!V&&!F&&xc()),P>Z&&(Le(),Z=P+6)));if(S==="memory"){G.tick(be,c.visible);let vt=!!Ce?.gamepad?.buttons[4]?.pressed;if(vt&&!K&&G.complete&&!c.visible&&G.reset(),K=vt,!c.visible){let Ct=G.point(Xt);Ct&&(d.geometry.setFromPoints([Xt.position,Ct.point]),d.visible=!0,p.position.copy(Ct.point),p.visible=!0,yn&&!V&&!F&&Ct.action())}}if(n.update(S,S==="rc"?ae.origin:S==="golf"?oe.origin:S==="bowling"?_e.origin:S==="planes"?ne.origin:S==="basketball"?q.origin:null),i.visible=!["bowling","golf","rc"].includes(S),S==="fame"&&!ce&&O.site&&Math.hypot(Ve.x-O.site.view.x,Ve.z-O.site.view.z)>7&&(S="explore"),ce=!1,Q.tick(be,at,!de||["fame","jigglypuff","darts","basketball","bowling","planes","memory","golf","rc"].includes(S),S==="friend"),q.tick(se,c.visible),_e.tick(se,c.visible),ne.tick(se,c.visible),oe.tick(se,c.visible),ae.tick(se,c.visible),O.tick(be),!nt&&D&&kn(),U&&!c.visible){let vt=Math.max(1,Math.ceil(be/.012)),Ct=be/vt;for(let hs=0;hs<vt&&U;hs++){let Gn=U,Ti=Gn.position.clone().addScaledVector(Gn.velocity,Ct);Ti.y-=4.9*Ct*Ct;let Ec=s.mollie.balls.flatMap((Cc,ba)=>s.mollie.found.has(ba)?[]:[{id:ba,position:Cc.ball.position}]),fs=rc(Gn.position,Ti,r,Ec);if(fs){fs.type==="target"&&s.xrGames.collect(fs.id)&&(z=`${s.xrGames.names[fs.id]} found! ${s.mollie.found.size}/18 cards.`,It(z),ie(Ce,.8),s.mollie.found.size===18&&(z="All 18 cards found! Brilliant, Mollie!",It(z))),kn();break}Gn.position.copy(Ti),Gn.velocity.y-=9.8*Ct,Gn.life+=Ct,g.position.copy(Ti),g.rotation.x+=Ct*7,(Ti.y<0||Gn.life>3)&&kn()}}if(J?.listener)try{let vt=J.listener;for(let[Ct,hs]of Object.entries({positionX:Ve.x,positionY:Ve.y,positionZ:Ve.z,forwardX:at.x,forwardY:at.y,forwardZ:at.z,upX:0,upY:1,upZ:0}))vt[Ct]&&(vt[Ct].value=hs)}catch{}return S==="darts"&&on<9&&he.throws===9&&It(`Round complete! ${he.total} points. A to play again.`),S==="memory"&&!Ac&&G.complete&&It(`All pairs matched in ${G.moves} turns!`),_c(se),V=yn,{consumeTrigger:c.visible||S!=="explore"||F,blockTeleport:oe.held||S==="rc",blockMovement:S==="rc"||c.visible||D||he.held||q.held||_e.held||ne.held||oe.held}}function Sc(){Q.summon(),t.visible=!0,S="explore",V=b=W=!1,F=!0,z="Choose a game, or resume exploring.",ft()}function Tc(){Vn(),tt(),m.visible=!1,t.visible=!1,A=null,J?.suspend()?.catch(()=>{})}function wc(){kn(!0),V=!0,F=!0}return{pokemonLayer:i,setCompanionEnabled:we,get companionEnabled(){return de},fame:O,visitFame:Si,rc:ae,golf:oe,planes:ne,bowling:_e,play:q,memory:G,companion:Q,progress:ya,callCompanion:$,album:j,darts:he,showAlbum:fe,tick:bc,begin:Sc,end:Tc,enableAudio:Pe,open:ft,close:tt,start:Wt,stop:Vn,interrupt:wc,chooseSpots:xa,get mode(){return S},get driving(){return S==="rc"&&ae.active},get menuOpen(){return c.visible},get found(){return B},get route(){return L},get held(){return D||he.held||q.held||_e.held||ne.held||oe.held},get flight(){return U},get board(){return c},get root(){return t},puff:v.group,ball:g}}var At={};function Pr(s){let e=s>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function rp(s){let e=2166136261;for(let t of String(s))e^=t.charCodeAt(0),e=Math.imul(e,16777619);return e>>>0}function op(s){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),n=Pr(813+s*431),i=[["#456840","#66884e","#355b38","#789353"],["#3e613c","#587747","#304f34","#70884e"],["#516d3e","#738c4b","#405c37","#8b9b56"]][s];t.clearRect(0,0,256,256),t.lineCap="round",t.lineJoin="round";function r(a,l,c,u,f){t.save(),t.translate(a,l),t.rotate(u),t.fillStyle=i[f%4],t.beginPath(),t.moveTo(0,-c),t.bezierCurveTo(c*.74,-c*.5,c*.82,c*.3,0,c*.83),t.bezierCurveTo(-c*.6,c*.24,-c*.68,-c*.58,0,-c),t.fill(),t.strokeStyle=f%2?"rgba(186,194,129,.26)":"rgba(166,184,115,.22)",t.lineWidth=.7,t.beginPath(),t.moveTo(0,c*.67),t.lineTo(0,-c*.74),t.stroke(),t.restore()}for(let a=0;a<5;a++){let l=103+n()*34,c=218+n()*20,u=38+a*41+(n()-.5)*22,f=35+n()*53;t.strokeStyle="rgba(66,61,41,.92)",t.lineWidth=1.5+n(),t.beginPath(),t.moveTo(l,c),t.quadraticCurveTo((l+u)*.5+(n()-.5)*20,(c+f)*.5,u,f),t.stroke();for(let h=0;h<8;h++){let d=.14+h*.103,p=l+(u-l)*d,g=c+(f-c)*d,v=h%2?1:-1,x=7+n()*11,M=9+n()*8;t.strokeStyle="rgba(82,76,43,.72)",t.lineWidth=1,t.beginPath(),t.moveTo(p,g),t.lineTo(p+v*x,g-3),t.stroke(),r(p+v*x,g-7,M,v*(.4+n()*.55),h+a+s)}}let o=new Ie(e);return o.colorSpace=Ee,o.anisotropy=2,o}function ap(){let s=document.createElement("canvas");s.width=128,s.height=256;let e=s.getContext("2d"),t=Pr(731);e.fillStyle="#726f59",e.fillRect(0,0,128,256);for(let i=0;i<125;i++){let r=t()*128,o=t()*256,a=14+t()*116;e.strokeStyle=i%3?"rgba(33,39,30,.34)":"rgba(174,169,137,.26)",e.lineWidth=.6+t()*2.5,e.beginPath(),e.moveTo(r,o),e.bezierCurveTo(r+(t()-.5)*7,o+a*.3,r+(t()-.5)*8,o+a*.65,r+(t()-.5)*7,o+a),e.stroke()}let n=new Ie(s);return n.colorSpace=Ee,n.wrapS=n.wrapT=Vt,n.repeat.set(1,2),n}function lp(s){let e=document.createElement("canvas"),t=document.createElement("canvas");e.width=e.height=t.width=t.height=512;let n=e.getContext("2d"),i=t.getContext("2d"),r=Pr(9147+s*319),o=[["#4e7146","#3a5b38","#789155","#597e48"],["#486843","#345536","#738c53","#58774a"],["#577342","#405e37","#8a995b","#66814a"]][s];n.fillStyle=o[0],n.fillRect(0,0,512,512),i.fillStyle="#777777",i.fillRect(0,0,512,512);for(let c=0;c<180;c++){let u=r()*512,f=r()*512,h=10+r()*36;n.fillStyle=c%2?"rgba(21,45,28,.14)":"rgba(172,179,118,.12)",n.beginPath(),n.ellipse(u,f,h,h*.7,r()*Math.PI,0,Math.PI*2),n.fill()}for(let c=0;c<1450;c++){let u=r()*512,f=r()*512,h=3+r()*5,d=r()*Math.PI*2;for(let[p,g]of[[n,o[c%4]],[i,c%2?"#9a9a9a":"#555555"]])p.save(),p.translate(u,f),p.rotate(d),p.fillStyle=g,p.beginPath(),p.moveTo(0,-h),p.bezierCurveTo(h*.7,-h*.4,h*.8,h*.3,0,h*.85),p.bezierCurveTo(-h*.6,h*.2,-h*.6,-h*.5,0,-h),p.fill(),p.restore()}let a=new Ie(e),l=new Ie(t);a.colorSpace=Ee;for(let c of[a,l])c.wrapS=c.wrapT=Vt,c.repeat.set(3,2),c.anisotropy=2;return{texture:a,height:l}}function cp(){if(!At.trunk){At.trunk=new ke(.38,1,1,8,2,!1);let s=At.trunk.attributes.position;for(let n=0;n<s.count;n++){let i=s.getX(n),r=s.getY(n),o=s.getZ(n),a=Math.atan2(o,i),l=1+.045*Math.sin(a*5+r*9)+.025*Math.cos(a*3-r*11);s.setXYZ(n,i*l,r,o*l)}At.trunk.computeVertexNormals(),At.branch=new ke(.24,1,1,5,1,!0),At.leaf=new Ue(1,1),At.crown=new Ye(1,8,5);let e=At.crown.attributes.position;for(let n=0;n<e.count;n++){let i=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.atan2(o,i),l=Math.sqrt(i*i+o*o),c=.94+.085*Math.sin(a*3+r*2)*l+.045*Math.cos(a*5-r*4)*l;e.setXYZ(n,i*c,r*(1+.04*Math.sin(a*3)*l),o*c)}At.crown.computeVertexNormals(),At.crown.computeBoundingBox(),At.crown.computeBoundingSphere();let t=ap();At.wood=new Se({map:t,color:16777215,roughness:1,metalness:0}),At.leaves=[0,1,2].map(n=>new Se({map:op(n),color:16777215,alphaTest:.38,transparent:!1,side:je,roughness:.96,metalness:0})),At.crowns=[0,1,2].map(n=>{let{texture:i,height:r}=lp(n);return new Se({map:i,bumpMap:r,bumpScale:.035,color:16777215,transparent:!1,roughness:.96,metalness:0})})}return At}function Rr(s,e,t,n,i){if(!i.length)return null;let r=new Jt(t,n,i.length);r.name=e,r.castShadow=r.receiveShadow=!1;let o=new it;for(let a=0;a<i.length;a++){let l=i[a];o.position.copy(l.position),o.quaternion.copy(l.quaternion),o.scale.copy(l.scale),o.updateMatrix(),r.setMatrixAt(a,o.matrix),r.setColorAt(a,l.color)}return r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,r.computeBoundingBox(),r.computeBoundingSphere(),s.add(r),r}function ac(s,e=[]){let t=new ge;t.name="Natural exterior trees",s.add(t);let n=cp(),i=[],r=[],o=[[],[],[]],a=[[],[],[]],l=new _(0,1,0),c=new _,u=[],f=e.filter(x=>Number.isFinite(x?.x)&&Number.isFinite(x?.z)).length,h=f>64,d=h?15:22,p=4,g=Math.max(8,Math.min(h?96:144,Math.floor((99e3/Math.max(1,f)-n.trunk.index.count/3-d*n.branch.index.count/3-p*n.crown.index.count/3)/2)));function v(x,M,y,m,S){let C=y.clone().sub(M);x.push({position:M.clone().add(y).multiplyScalar(.5),quaternion:new Te().setFromUnitVectors(l,C.clone().normalize()),scale:new _(m,C.length(),m),color:S})}for(let x=0;x<e.length;x++){let M=e[x];if(!Number.isFinite(M?.x)||!Number.isFinite(M?.z))continue;let y=rp(M.seed??`${M.x},${M.z}`),m=Pr(y),S=Number.isFinite(M.height)&&M.height>0?M.height:6,C=Number.isFinite(M.width)&&M.width>0?M.width:4,w=M.x,T=M.z,R=(m()-.5)*S*.075,I=(m()-.5)*S*.065,E=S*(.027+m()*.006),A=new ze().setRGB(.72+m()*.16,.73+m()*.12,.69+m()*.13),D=new _(w,0,T),U=new _(w+R,S*.56,T+I),N=new _(w+R*.95,S*.84,T+I*.95);v(i,D,U,E,A),v(r,U,N,E*.4,A);let P=h?2:3;for(let B=0;B<P;B++){let k=B*Math.PI*2/P+m()*.5,z=E*(1.8+m());v(r,new _(w,E*1.3,T),new _(w+Math.cos(k)*z,-.025,T+Math.sin(k)*z),E*.48,A)}let V=[{center:N,radiusX:C*.2,radiusY:S*.135,radiusZ:C*.2}],b=m()*Math.PI*2,W=.8+m()*.26;for(let B=0;B<6;B++){let k=b+B*Math.PI*2/6+(m()-.5)*.45,z=C*(.21+m()*.09),H=new _(w+R*.75+Math.cos(k)*z*W,S*(.55+B%3*.085+m()*.055),T+I*.75+Math.sin(k)*z),X=S*(.23+m()*.29),ee=new _(w+R*X/(S*.56),X,T+I*X/(S*.56));v(r,ee,H,E*(.24+m()*.1),A);for(let J of h?[B%2?1:-1]:[-1,1]){let Z=k+J*(.38+m()*.35),re=H.clone().add(new _(Math.cos(Z)*C*.095,S*(.045+m()*.075),Math.sin(Z)*C*.095));v(r,ee.clone().lerp(H,.66),re,E*.1,A)}V.push({center:H,radiusX:C*(.16+m()*.07),radiusY:S*(.105+m()*.055),radiusZ:C*(.17+m()*.05)})}let F=.9+m()*.1;for(let B=0;B<p;B++){let k=B===0?V[0]:V[1+(B-1)*2],z=k.center.clone(),H=C*(B===0?.275:.245+m()*.025),X=S*(B===0?.158:.16+m()*.015),ee=C*(.235+m()*.035),J=C*.5-Math.max(H,ee)*1.04,Z=z.x-w,re=z.z-T,ie=Math.hypot(Z,re);ie>J&&(z.x=w+Z*J/ie,z.z=T+re*J/ie),a[B%3].push({position:z,quaternion:new Te().setFromEuler(new $t((m()-.5)*.16,m()*Math.PI*2,(m()-.5)*.14)),scale:new _(H,X,ee),color:new ze().setRGB(F*(.94+m()*.06),F,F*(.92+m()*.06))})}let L=Math.max(8,g-Math.floor(m()*(h?12:20)));for(let B=0;B<L;B++){let k=V[B%V.length],z=m()*Math.PI*2,H=m()*2-1,X=Math.cbrt(m()),ee=Math.sqrt(1-H*H),J=k.center.clone().add(new _(Math.cos(z)*ee*X*k.radiusX,H*X*k.radiusY,Math.sin(z)*ee*X*k.radiusZ)),Z=C*((h?.115:.092)+m()*.035),re=Z*(.9+m()*.24),ie=J.x-w,j=J.z-T,he=Math.hypot(ie,j),G=Math.max(C*.1,C*.5-Math.hypot(Z,re)*.5);he>G&&(J.x=w+ie*G/he,J.z=T+j*G/he),J.y=Ge.clamp(J.y,S*.34,S*.965),J.y=Math.min(J.y,S-re*.55),c.set(Math.cos(z),(.5-m())*1.35,Math.sin(z)).normalize();let Q=new Te().setFromUnitVectors(new _(0,0,1),c);Q.multiply(new Te().setFromAxisAngle(new _(0,0,1),(m()-.5)*1.4));let ne=F*(.83+m()*.17),oe=new ze().setRGB(ne*(.94+m()*.06),ne,ne*(.91+m()*.08));o[B%3].push({position:J,quaternion:Q,scale:new _(Z,re,1),color:oe})}u.push({x:w,z:T,height:S,width:C,seed:y,leafCount:L})}return Rr(t,"Tapered bark trunks",n.trunk,n.wood,i),Rr(t,"Forked branches and root flares",n.branch,n.wood,r),a.forEach((x,M)=>Rr(t,"Opaque leaf crowns "+(M+1),n.crown,n.crowns[M],x)),o.forEach((x,M)=>Rr(t,"Leaf sprays "+(M+1),n.leaf,n.leaves[M],x)),t.userData.treeCount=i.length,t.userData.foliageInstances=o.reduce((x,M)=>x+M.length,0),t.userData.branchInstances=r.length,t.userData.crownInstances=a.reduce((x,M)=>x+M.length,0),t.userData.opaqueCrownCoverage=1,t.userData.triangles=i.length*n.trunk.index.count/3+r.length*n.branch.index.count/3+t.userData.crownInstances*n.crown.index.count/3+t.userData.foliageInstances*2,t.userData.drawCalls=t.children.length,t.userData.placements=u,t}var Et=32,Ot=26,ot=6.5,up=26.35,lc=[{name:"Neighbour workshop",left:-60,right:-24,door:-40,office:-53,ridge:.64,muted:!0},{name:"A&M Ceramics Ltd",left:-24,right:8,door:-3.5,office:-18,ridge:.82,brand:"am"},{name:"Neil Signs",left:8,right:40,door:19.5,office:34,ridge:.82,brand:"neil"},{name:"Neighbour warehouse",left:40,right:60,door:54,office:44,ridge:.55,muted:!0}];function hp(s){let e=document.createElement("canvas");e.width=s==="neil"?1536:1792,e.height=256;let t=e.getContext("2d");if(t.fillStyle="#f7f7f2",t.fillRect(0,0,e.width,256),s==="neil"){let i="#852477",r="#b5d735";for(let[a,l,c]of[[105,44,i],[162,44,r],[219,44,i],[105,101,r],[162,101,i],[219,101,r],[162,158,r],[219,158,i]])t.save(),t.translate(a,l),t.rotate(Math.PI/4),t.fillStyle=c,t.fillRect(-19,-19,38,38),t.restore();t.textAlign="left",t.fillStyle=i,t.font="italic 600 158px Arial",t.fillText("neil",315,165);let o=t.measureText("neil").width;t.fillStyle=r,t.font="italic 700 149px Arial",t.fillText("signs",325+o,164),t.fillStyle="#626267",t.font="39px Arial",t.fillText("signmakers & vehicle graphics",322,225)}else t.fillStyle="#26789e",t.fillRect(38,51,113,122),t.fillStyle="#a8c9d7",t.fillRect(47,60,44,99),t.fillStyle="#f7f7f2",t.fillRect(98,60,43,45),t.fillStyle="#1a3456",t.textAlign="left",t.font="italic 700 108px Arial",t.fillText("A&M Ceramics Ltd",222,145,1330),t.font="36px Arial",t.fillText("UNIT 4  \xB7  KETTERER COURT",225,213),t.fillStyle="#146cba",t.fillRect(1612,0,180,256),t.fillStyle="#ffffff",t.textAlign="center",t.font="italic 700 175px Arial",t.fillText("4",1702,193);let n=new Ie(e);return n.colorSpace=Ee,n.anisotropy=4,new ve({map:n,color:16777215,side:je})}function cc(s){let e=new ge;e.name="Ketterer Court \xB7 opposite industrial units",s.add(e);let t=(w,T=.8,R=0)=>new Se({color:w,roughness:T,metalness:R}),n={cladding:t("#b0b7bc",.82,.18),muted:t("#97a4ae",.9,.12),ribs:t("#c0c5c7",.8,.17),blue:t("#095d9e",.6,.22),mutedBlue:t("#416880",.74,.2),door:t("#116caf",.7,.17),roof:t("#6a7b84",.83,.26),roofRib:t("#82909a",.79,.25),tan:t("#a99883",.96),dark:t("#263b49",.7,.28),steel:t("#697d87",.65,.5),glass:t("#28485c",.2,.52),glassReflection:t("#728c98",.36,.3),white:t("#eceade",.95),concrete:t("#8d9494",1),black:t("#273032",.95),lamp:new Se({color:"#e4e8df",emissive:"#bcc8c7",emissiveIntensity:.2,roughness:.5})},i=document.createElement("canvas");i.width=256,i.height=8;let r=i.getContext("2d"),o=r.createImageData(256,8);for(let w=0;w<8;w++)for(let T=0;T<256;T++){let R=Math.sin(T/8*Math.PI*2)*.6,I=Math.sqrt(1-R*R),E=(w*256+T)*4;o.data[E]=(R*.5+.5)*255,o.data[E+1]=128,o.data[E+2]=(I*.5+.5)*255,o.data[E+3]=255}r.putImageData(o,0,0);let a=new Ie(i);a.wrapS=a.wrapT=Vt,a.repeat.set(8,1),a.anisotropy=4;for(let w of[n.cladding,n.muted])w.normalMap=a,w.normalScale.set(.7,.7);let l=new Map,c=new it,u=new Me(1,1,1),f=[];function h(w,T,R,I,E,A,D,U=0,N=0,P=0){l.has(w)||l.set(w,[]),l.get(w).push({w:T,h:R,d:I,x:E,y:A,z:D,rx:U,ry:N,rz:P})}function d(w,T,R,I,E=I){let A=new _(...T),D=new _(...R),U=D.clone().sub(A),N=A.clone().add(D).multiplyScalar(.5),P=new Te().setFromUnitVectors(new _(1,0,0),U.clone().normalize());l.has(w)||l.set(w,[]),l.get(w).push({w:U.length(),h:I,d:E,x:N.x,y:N.y,z:N.z,quaternion:P})}function p(w,T,R){let I=(w+T)/2;for(let E of[Et-.006,Et+Ot+.006])E<Et?f.push(w,ot,E,I,ot+R,E,T,ot,E):f.push(T,ot,E,I,ot+R,E,w,ot,E)}function g(w,T,R,I){let E=Et-.2;h(n.dark,T+.37,R+.18,.13,w,R/2,E+.025),h(I,T,R,.08,w,R/2+.035,E-.06);for(let A=.15;A<R;A+=.2)h(n.blue,T-.035,.022,.026,w,A,E-.12);for(let A of[-1,1])h(n.blue,.18,R+.25,.24,w+A*(T/2+.11),(R+.25)/2,E-.08);h(n.blue,T+.58,.37,.42,w,R+.22,E-.1),h(n.dark,T,.07,.15,w,.055,E-.08),h(n.steel,.3,.055,.035,w,.93,E-.13),h(n.black,T+.6,.018,.24,w,.017,30.72);for(let A=0;A<18;A++)h(n.steel,.035,.011,.2,w-(T+.4)/2+(A+.5)*(T+.4)/18,.031,30.72)}function v(w,T,R){let I=Et-.22,E=.78,A=2.9,D=w-T*.25;h(n.tan,T,.78,.16,w,.39,I),h(n.dark,T,A-E,.1,w,(A+E)/2,I-.035),h(n.glass,T-.12,A-E-.14,.033,w,(A+E)/2,I-.095),h(n.glassReflection,T-.17,.31,.01,w,2.52,I-.116);for(let U=0;U<=6;U++)h(R,.065,A-E+.06,.075,w-T/2+U*T/6,(A+E)/2,I-.135);for(let U of[E,1.82,A])h(R,T+.1,.077,.088,w,U,I-.145);h(n.dark,1.02,2.29,.055,D,1.145,I-.155),h(n.glass,.87,2.13,.014,D,1.135,I-.191);for(let U of[-1,1])h(R,.066,2.36,.052,D+U*.53,1.18,I-.2);h(R,1.12,.075,.059,D,2.36,I-.2),h(n.steel,.028,.43,.065,D+.37,1.1,I-.232),h(R,T+.37,.24,.92,w,3.045,I-.26),h(n.tan,T+.1,.055,.43,w,.041,I-.24)}function x(w,T){h(n.dark,.43,.28,.2,w,T,31.57,.13),h(n.lamp,.355,.185,.016,w,T-.007,31.455,.13),d(n.steel,[w,T,31.93],[w,T,31.64],.045)}function M(w,T,R,I,E){h(n.dark,I+.13,E+.13,.085,T,R,31.57);let A=new xe(new Ue(I,E),hp(w));return A.name=w==="neil"?"Neil Signs \xB7 reference wordmark":"A&M Ceramics Ltd \xB7 unit 4",A.position.set(T,R,31.51),A.rotation.y=Math.PI,e.add(A),{name:A.name,x:T,y:R,z:31.51,yaw:Math.PI,width:I,height:E}}let y=[];for(let w of lc){let{left:T,right:R,ridge:I}=w,E=R-T,A=(T+R)/2,D=w.muted?n.mutedBlue:n.blue;h(w.muted?n.muted:n.cladding,E,ot,Ot,A,ot/2,Et+Ot/2),h(n.tan,E,.78,.08,A,.39,Et-.045);for(let U=T+.22;U<R;U+=.49)h(w.muted?n.muted:n.ribs,.035,ot-.83,.036,U,(ot+.83)/2,Et-.04);p(T,R,I);for(let U of[-1,1]){let N=E/2+.22,P=I+.02,V=Math.hypot(N,P),b=-U*Math.atan2(P,N),W=A+U*E/4;h(n.roof,V,.095,Ot+.54,W,ot+I/2+.05,Et+Ot/2,0,0,b),d(D,[A+U*(E/2+.25),ot+.08,31.71],[A,ot+I+.11,31.71],.13,.18);for(let F=A+U*.45;U>0?F<R:F>T;F+=U*.88){let L=ot+I*(1-Math.abs(F-A)/(E/2))+.12;h(n.roofRib,.025,.035,Ot+.38,F,L,Et+Ot/2,0,0,b)}}h(D,.15,.15,Ot+.6,A,ot+I+.13,Et+Ot/2);for(let U of[T+.09,R-.09]){h(D,.19,ot,.17,U,ot/2,31.87),h(n.dark,.16,.15,Ot+.2,U,ot-.01,Et+Ot/2),h(n.dark,.11,5.92,.11,U,.23+5.92/2,31.73);for(let N of[.4,2.2,4.1,5.8])h(n.steel,.17,.07,.15,U,N,31.73);h(n.dark,.14,.14,.37,U,.19,31.62)}h(D,E+.22,.32,.14,A,6.22,31.87),g(w.door,w.muted?5.5:6.2,4.45,w.muted?n.mutedBlue:n.door),v(w.office,w.muted?4.2:8.8,D),x(T+E*.12,5.65),x(T+E*.88,5.65),w.brand==="neil"&&y.push(M("neil",26.45,5.62,9.15,1.52)),w.brand==="am"&&y.push(M("am",-12,5.62,10.65,1.52))}for(let w of[-60.03,60.03])for(let T=Et+.3;T<Et+Ot;T+=.7)h(n.ribs,.035,ot-.83,.035,w,(ot+.83)/2,T);h(n.concrete,120,.012,5.4,0,.003,29.08);for(let w of[-58,-54,-50,-22,-18,-14,12,16,20,30,34,38,46,50,54,58])h(n.white,.065,.007,3,w,.016,28.65);for(let[w,T]of[[-54,8],[-18,8],[16,8],[34,8],[52,12]])h(n.white,T,.007,.065,w,.016,27.15);for(let w of[-18,34])for(let T=0;T<7;T++)h(n.white,2.2,.007,.1,w,.017,29.72+T*.19);let m=[];for(let w of[-58,-25,7,39,59])h(n.steel,.085,7.78,.085,w,3.89,27.25),h(n.steel,.09,.09,.68,w,7.77,26.97),h(n.dark,.24,.125,.55,w,7.8,26.69),h(n.lamp,.185,.016,.47,w,7.735,26.69),h(n.dark,.17,.2,.17,w,.1,27.25),m.push({x:w,z:27.25,height:7.86});if(f.length){let w=new Be;w.setAttribute("position",new Re(f,3)),w.computeVertexNormals();let T=new xe(w,n.cladding);T.name="Shallow pitched facade gables",e.add(T)}for(let[w,T]of l){let R=new Jt(u,w,T.length);R.name="Estate detail batch \xB7 "+Object.keys(n).find(I=>n[I]===w);for(let I=0;I<T.length;I++){let E=T[I];c.position.set(E.x,E.y,E.z),c.scale.set(E.w,E.h,E.d),E.quaternion?c.quaternion.copy(E.quaternion):c.rotation.set(E.rx,E.ry,E.rz),c.updateMatrix(),R.setMatrixAt(I,c.matrix)}R.instanceMatrix.needsUpdate=!0,R.computeBoundingBox(),R.computeBoundingSphere(),R.castShadow=!1,R.receiveShadow=!0,e.add(R)}let S=0,C=0;return e.traverse(w=>{w.isMesh&&(C++,S+=(w.geometry.index?.count||w.geometry.attributes.position.count)/3*(w.isInstancedMesh?w.count:1))}),e.userData={...e.userData,frontZ:Et,minZ:up,depth:Ot,eaves:ot,units:lc.map(w=>({...w})),signs:y,lampPosts:m,triangles:S,drawCalls:C,collidersAdded:0},e.updateMatrixWorld(!0),e}function Ir(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Be,c=0;for(let u=0;u<s.length;++u){let f=s[u],h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0,f=[];for(let h=0;h<s.length;++h){let d=s[h].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+u);u+=s[h].attributes.position.count}l.setIndex(f)}for(let u in r){let f=uc(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let g=0;g<o[u].length;++g)d.push(o[u][g][h]);let p=uc(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function uc(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let u=s[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new bt(o,t,n),l=0;for(let c=0;c<s.length;++c){let u=s[c];if(u.isInterleavedBufferAttribute){let f=l/t;for(let h=0,d=u.count;h<d;h++)for(let p=0;p<t;p++){let g=u.getComponent(h,p);a.setComponent(h+f,p,g)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}var fp=Math.PI*2,dp=[{x:-20,y:7.3651,z:-8.42,yaw:Math.PI},{x:-7,y:7.9067,z:-8.42,yaw:Math.PI},{x:18,y:7.4484,z:-10.82,yaw:Math.PI},{x:-8,y:7.525,z:32,yaw:0},{x:24,y:7.525,z:32,yaw:0},{x:50,y:7.255,z:32,yaw:0}],hc=[{x:-17,y:15.5,z:6,radiusX:19,radiusZ:11,count:6,speed:7.5,phase:.3,heightVariation:.8},{x:20,y:18,z:12,radiusX:21,radiusZ:14,count:6,speed:8.4,phase:2.6,heightVariation:1},{x:0,y:21,z:18,radiusX:35,radiusZ:16.6,count:6,speed:9.2,phase:4.3,heightVariation:.9}],ls=s=>new ze(s);function cs(s,e,t,n=0,i=0,r=0,o=8,a=5){return new Ye(1,o,a).scale(s,e,t).translate(n,i,r)}function fc(s,e,t=.004){let n=new _(...s),i=new _(...e),r=i.clone().sub(n),o=new ke(t,t,r.length(),3,1,!0);return o.applyQuaternion(new Te().setFromUnitVectors(new _(0,1,0),r.normalize())),o.translate((n.x+i.x)*.5,(n.y+i.y)*.5,(n.z+i.z)*.5)}function ma(s,e=!1){let t=new ct;s.forEach(([o,a],l)=>l?t.lineTo(o,-a):t.moveTo(o,-a)),t.closePath();let n=new Nt(t);n.rotateX(-Math.PI/2);let i=n.attributes.position,r=[];for(let o=0;o<i.count;o++){let a=e&&i.getX(o)>.17?.22:1;r.push(a,a,a)}return n.setAttribute("color",new Re(r,3)),n}function pp(){let s=Ir([cs(.077,.073,.155),cs(.043,.06,.07,0,.053,-.114,6,4)]),e=cs(.052,.047,.055,0,0,0,6,5),t=new Kt(.012,.055,5,1);t.rotateX(-Math.PI/2),t.translate(0,-.006,-.073);let n=Ir([cs(.0048,.0048,.0048,-.0495,.01,-.019,5,3),cs(.0048,.0048,.0048,.0495,.01,-.019,5,3)]),i=ma([[0,-.072],[.135,-.087],[.22,-.05],[.215,.062],[.09,.106],[0,.077]]),r=ma([[0,-.05],[.13,-.069],[.232,-.025],[.27,.014],[.212,.04],[.251,.06],[.161,.069],[.225,.095],[.113,.103],[.178,.126],[.075,.115],[0,.071]],!0),o=ma([[-.035,.12],[.035,.12],[.071,.255],[.024,.239],[0,.268],[-.024,.239],[-.071,.255]]),a=[];for(let l of[-1,1]){let c=l*.028;a.push(fc([c,-.052,.025],[c,-.112,.023],.004));for(let u of[-1,0,1])a.push(fc([c,-.112,.023],[c+u*.014,-.118,-.01-Math.abs(u)*.01],.0025))}return{body:s,head:e,beak:t,eyes:n,inner:i,outer:r,tail:o,feet:Ir(a)}}function zn(s,e,t,n,i){let r=new Jt(t,n,i);return r.name=e,r.castShadow=r.receiveShadow=!1,r.frustumCulled=!1,r.instanceMatrix.setUsage(Ko),s.add(r),r}function jt(s,e){return Number.isFinite(s)?s:e}function dc(s,{perches:e=dp,routes:t=hc}={}){let n=new ge;n.name="Yard birds \xB7 roof visitors and small flocks",s.add(n);let i=[],r=t.map((P,V)=>({x:jt(P.x??P.center?.x,hc[V%3].x),y:Math.max(13.5,jt(P.y??P.center?.y,18)),z:jt(P.z??P.center?.z,12),radiusX:Math.max(4,jt(P.radiusX,20)),radiusZ:Math.max(4,jt(P.radiusZ,12)),speed:Ge.clamp(jt(P.speed,8),3,13),phase:jt(P.phase,V*2.2),heightVariation:Ge.clamp(jt(P.heightVariation,.9),0,1.5),count:Math.max(0,Math.min(12,Math.floor(jt(P.count,6))))}));for(let P of r){let V=P.z+P.radiusZ+3.5>50;P.y=Math.max(P.y,(V?24:12.5)+P.heightVariation+.25)}let o=e.filter(P=>Number.isFinite(P?.x)&&Number.isFinite(P?.y)&&Number.isFinite(P?.z)).map(P=>({x:P.x,y:P.y+.003,z:P.z,yaw:jt(P.yaw,0)}));function a(P,V,b,W){let F=i.length,L=P?F%3!==0:F%5===0,B=L?.77:.92,k=F*2.399963229728653,z=V?(V.radiusX+V.radiusZ)*.5:0,H=Math.ceil(b/2),X=b===0?0:(b%2?-1:1)*H*.58,ee={id:F,perched:P,species:L?"pigeon":"gull",position:new _,velocity:new _,quaternion:new Te,headQuaternion:new Te,wingAngles:[0,0],gliding:!1,headTurn:0,hop:0,scale:B,phase:k,route:V,perch:W,lane:X,trail:H*.9,omega:V?V.speed/z:0,flapHz:L?4.6:3.1,bodyColor:ls(L?"#9ca7ad":"#e7e9e1"),headColor:ls(L?"#818f99":"#f3f2e9"),wingColor:ls(L?"#727f8b":"#dfe3dc"),beakColor:ls(L?"#696660":"#d6b966"),feetColor:ls(L?"#a66f69":"#a99e78"),_previous:new _};i.push(ee)}r.forEach(P=>{for(let V=0;V<P.count;V++)a(!1,P,V,null)}),o.forEach(P=>a(!0,null,0,P));let l=pp(),c=i.length,u=new Se({color:16777215,roughness:.93}),f=new Se({color:16777215,roughness:.93,side:je,vertexColors:!0}),h=new ve({color:1514013}),d={body:zn(n,"Bird bodies and necks",l.body,u,c),head:zn(n,"Turning bird heads",l.head,u,c),beak:zn(n,"Bird beaks",l.beak,u,c),eyes:zn(n,"Bird eyes",l.eyes,h,c),inner:zn(n,"Articulated inner wings",l.inner,f,c*2),outer:zn(n,"Feather-tipped outer wings",l.outer,f,c*2),tail:zn(n,"Bird tail feathers",l.tail,f,c),feet:zn(n,"Bird feet and tucked legs",l.feet,u,c)},p=Object.values(d);i.forEach((P,V)=>{d.body.setColorAt(V,P.bodyColor),d.head.setColorAt(V,P.headColor),d.beak.setColorAt(V,P.beakColor),d.feet.setColorAt(V,P.feetColor),d.tail.setColorAt(V,P.wingColor);for(let b=0;b<2;b++)d.inner.setColorAt(V*2+b,P.wingColor),d.outer.setColorAt(V*2+b,P.wingColor)});for(let P of p)P.instanceColor&&(P.instanceColor.needsUpdate=!0);let g=new it,v=new _,x=new _,M=new _,y=new _,m=new Te,S=new Te,C=new Te,w=new $t(0,0,0,"YXZ"),T=new _(0,0,1),R=new _(0,1,0),I=new _(1,0,0),E=0;function A(P,V,b,W,F,L=F,B=F){g.position.copy(b),g.quaternion.copy(W),g.scale.set(F,L,B),g.updateMatrix(),P.setMatrixAt(V,g.matrix)}function D(P=0){let V=Math.max(0,Math.min(.1,jt(P,0)));E+=V;for(let b of i){b._previous.copy(b.position);let W=0,F=0,L=0;if(b.perched){let B=b.perch,k=(E+b.phase*2)%17;b.hop=k<.42?Math.sin(k/.42*Math.PI)*.055:0,b.position.set(B.x+Math.sin(E*.17+b.phase)*.025,B.y+.118*b.scale+b.hop,B.z+Math.sin(E*.13+b.phase)*.018),W=B.yaw+Math.sin(E*.15+b.phase)*.14,b.headTurn=Math.sin(E*.47+b.phase)*.56+Math.sin(E*.93+b.phase)*.15,b.gliding=!1,b.wingAngles[0]=-.16,b.wingAngles[1]=0,b.velocity.copy(b.position).sub(b._previous),V?b.velocity.divideScalar(V):b.velocity.set(0,0,0)}else{let B=b.route,k=E*b.omega+B.phase-b.trail/((B.radiusX+B.radiusZ)*.5),z=B.radiusX+b.lane,H=B.radiusZ+b.lane,X=Math.sin(k),ee=Math.cos(k),J=k*.63+b.phase;b.position.set(B.x+X*z,B.y+Math.sin(J)*B.heightVariation+Math.sin(b.phase)*.22,B.z+ee*H),b.position.y=Math.max(b.position.z>50?24:12.5,b.position.y),b.velocity.set(ee*z*b.omega,Math.cos(J)*B.heightVariation*b.omega*.63,-X*H*b.omega);let Z=Math.hypot(b.velocity.x,b.velocity.z),re=-X*z*b.omega*b.omega,ie=-ee*H*b.omega*b.omega,j=(b.velocity.z*re-b.velocity.x*ie)/(Z*Z);W=Math.atan2(-b.velocity.x,-b.velocity.z),F=Math.atan2(b.velocity.y,Z),L=Ge.clamp(Math.atan2(Z*j,9.81),-.43,.43),b.gliding=(E*.075+b.phase*.14)%1>.46;let he=E*b.flapHz*fp+b.phase;b.wingAngles[0]=b.gliding?.08:Math.sin(he)*.63,b.wingAngles[1]=b.gliding?.015:Math.sin(he+.58)*.2,b.headTurn=Math.sin(E*.39+b.phase)*.07,b.hop=0}b.quaternion.setFromEuler(w.set(F,W,L,"YXZ")),A(d.body,b.id,b.position,b.quaternion,b.scale),v.set(0,.104,-.183).multiplyScalar(b.scale).applyQuaternion(b.quaternion),x.copy(b.position).add(v),b.headQuaternion.copy(b.quaternion).multiply(C.setFromAxisAngle(R,b.headTurn)),b.headQuaternion.multiply(C.setFromAxisAngle(I,b.perched?Math.sin(E*.7+b.phase)*.09:0)),A(d.head,b.id,x,b.headQuaternion,b.scale),A(d.beak,b.id,x,b.headQuaternion,b.scale,b.scale,b.scale*(b.species==="pigeon"?.72:1)),A(d.eyes,b.id,x,b.headQuaternion,b.scale),A(d.tail,b.id,b.position,b.quaternion,b.scale),C.copy(b.quaternion),b.perched||C.multiply(S.setFromAxisAngle(I,-.9)),A(d.feet,b.id,b.position,C,b.scale);for(let B=0;B<2;B++){let k=B===0?1:-1,z=b.id*2+B,H=b.scale*(b.species==="gull"?1.13:1.03);v.set(k*.062,.025,-.018).multiplyScalar(b.scale).applyQuaternion(b.quaternion),y.copy(b.position).add(v),m.copy(b.quaternion),b.perched?(m.multiply(C.setFromAxisAngle(R,-k*1.3)),m.multiply(C.setFromAxisAngle(T,k>0?-.16:Math.PI+.16))):m.multiply(C.setFromAxisAngle(T,k>0?b.wingAngles[0]:Math.PI-b.wingAngles[0])),A(d.inner,z,y,m,H),v.set(.215*H,0,0).applyQuaternion(m),M.copy(y).add(v),S.copy(m),b.perched?S.multiply(C.setFromAxisAngle(R,-k*2.55)):S.multiply(C.setFromAxisAngle(T,k*b.wingAngles[1])),A(d.outer,z,M,S,H)}}for(let b of p)b.instanceMatrix.needsUpdate=!0;N.clock=E}let U=Object.entries(l).reduce((P,[V,b])=>P+(b.index?.count||b.attributes.position.count)/3*(V==="inner"||V==="outer"?c*2:c),0),N={flying:i.filter(P=>!P.perched).length,perched:o.length,triangles:U,drawCalls:n.children.length,clock:0};return D(0),{root:n,states:i,update:D,stats:N,meshes:d,routes:r,perches:o}}var mp=()=>{let s=globalThis.AudioContext||globalThis.webkitAudioContext;return s?new s:null},us=s=>s&&[s.x,s.y,s.z].every(Number.isFinite)?{x:s.x,y:s.y,z:s.z}:null,ga=(s,e)=>(s.x-e.x)**2+(s.y-e.y)**2+(s.z-e.z)**2;function pc({isMuted:s=()=>!1,listener:e=()=>null,contextFactory:t=mp,random:n=Math.random}={}){let i=null,r=null,o=null,a=!1,l=!1,c=!1,u=0,f=0,h=null,d=new Set,p=()=>{let E=n();return Number.isFinite(E)?Math.max(0,Math.min(.999999,E)):.5},g=()=>{try{return!!s()}catch{return!0}};function v(){if(r&&i)try{r.gain.cancelScheduledValues(i.currentTime),r.gain.setValueAtTime(0,i.currentTime)}catch{}for(let E of[...d])E.cleanup(!0);c=!1,u=0}function x(E,A,D){let U=!1,N=D.length,P={kind:E,nodes:A,sources:D,cleanup(V=!1){if(!U){U=!0,d.delete(P);for(let b of D)if(b.onended=null,V)try{b.stop()}catch{}for(let b of A)try{b.disconnect()}catch{}}}};for(let V of D)V.onended=()=>{--N<=0&&P.cleanup()};return d.add(P),P}function M(E,A){if(E.positionX&&E.positionY&&E.positionZ)for(let D of["x","y","z"])E["position"+D.toUpperCase()].setValueAtTime(A[D],i.currentTime);else E.setPosition?.(A.x,A.y,A.z)}function y(E){if(!i.createPanner)return null;let A=i.createPanner();return A.panningModel="HRTF",A.distanceModel="inverse",A.refDistance=5,A.maxDistance=80,A.rolloffFactor=.65,M(A,E),A.connect(r),A}function m(E,A){let D=i.listener;if(!D)return;if(D.positionX)for(let P of["x","y","z"])D["position"+P.toUpperCase()].setValueAtTime(E[P],i.currentTime);else D.setPosition?.(E.x,E.y,E.z);let U=Math.hypot(A.x,A.y,A.z)||1,N={x:A.x/U,y:A.y/U,z:A.z/U};if(D.forwardX)for(let P of["x","y","z"])D["forward"+P.toUpperCase()].setValueAtTime(N[P],i.currentTime),D["up"+P.toUpperCase()].setValueAtTime(P==="y"?1:0,i.currentTime);else D.setOrientation?.(N.x,N.y,N.z,0,1,0)}function S(){if([...d].some(D=>D.kind==="breeze"))return;if(!o){o=i.createBuffer(1,Math.round(i.sampleRate*2),i.sampleRate);let D=o.getChannelData(0),U=0;for(let N=0;N<D.length;N++)U=U*.965+(p()*2-1)*.035,D[N]=U}let E=i.createBufferSource(),A=i.createGain();E.buffer=o,E.loop=!0,A.gain.setValueAtTime(0,i.currentTime),A.gain.linearRampToValueAtTime(.009,i.currentTime+1.5),E.connect(A),A.connect(r),x("breeze",[E,A],[E]),E.start()}function C(E,A){if([...d].filter(H=>H.kind==="bird").length>=2)return;let D=(Array.isArray(A)?A:[]).map(H=>us(H?.position||H)).filter(H=>H&&ga(H,E)<=80**2).sort((H,X)=>ga(H,E)-ga(X,E)),U=p()*Math.PI*2,N=9+p()*11,P=D.length?D[Math.floor(p()*Math.min(3,D.length))]:{x:E.x+Math.sin(U)*N,y:E.y+2+p()*4,z:E.z+Math.cos(U)*N},V=i.createOscillator(),b=i.createGain(),W=y(P),F=i.currentTime+.015,L=2+Math.floor(p()*2),B=2200+p()*900,k=.07+p()*.035;V.type="sine",V.connect(b),b.connect(W||r),b.gain.setValueAtTime(1e-4,i.currentTime);let z=F;for(let H=0;H<L;H++){let X=z+(H?.025+p()*.045:0),ee=.07+p()*.065,J=B*(.94+p()*.12);V.frequency.setValueAtTime(J,X),V.frequency.exponentialRampToValueAtTime(J*(1.17+p()*.19),X+.025),V.frequency.exponentialRampToValueAtTime(J*(.88+p()*.1),X+ee),b.gain.setValueAtTime(1e-4,X),b.gain.linearRampToValueAtTime(k,X+.015),b.gain.exponentialRampToValueAtTime(1e-4,X+ee),z=X+ee}x("bird",[V,b,...W?[W]:[]],[V]),V.start(F),V.stop(z+.02),f++,h={...P}}async function w(){if(l||g())return!1;try{if(!i||i.state==="closed"){if(i=t(),!i)return!1;r=i.createGain(),r.gain.setValueAtTime(0,i.currentTime),r.connect(i.destination),o=null}let E=i.state==="suspended"?i.resume():null;return a=!0,E&&await E,a}catch{return a=!1,v(),!1}}function T(E,A={}){if(!a||!i||i.state!=="running"||!A.outside||!A.active||A.muted||g()||globalThis.document?.hidden){(c||d.size)&&v();return}try{let D=e()||{},U=us(A.eye)||us(D.eye)||{x:0,y:1.7,z:0},N=us(A.forward)||us(D.forward)||{x:0,y:0,z:-1};m(U,N),c||(c=!0,u=2.5+p()*3.5,r.gain.setTargetAtTime(.16,i.currentTime,.15),S());let P=Number.isFinite(E)?Math.max(0,Math.min(.1,E)):0;u-=P,u<=0&&(C(U,A.sources),u=6+p()*9)}catch{a=!1,v()}}function R(){a=!1,v()}function I(){if(!l){R(),l=!0;try{r?.disconnect()}catch{}try{i?.close()?.catch?.(()=>{})}catch{}i=r=o=null}}return{enableAudio:w,update:T,disable:R,dispose:I,get enabled(){return a},get stats(){return{enabled:a,audible:c,disposed:l,contextState:i?.state??"unavailable",voiceCount:d.size,nodeCount:[...d].reduce((E,A)=>E+A.nodes.length,r?1:0),birdVoices:[...d].filter(E=>E.kind==="bird").length,breezeActive:[...d].some(E=>E.kind==="breeze"),birdsPlayed:f,lastBirdPosition:h&&{...h}}}}}function gp(s){if(!s||![s.x,s.y,s.z].every(Number.isFinite))return!1;let e=s.x>=-26&&s.x<=-2&&s.z>=-38&&s.z<=-8,t=s.x>=-2&&s.x<=28&&s.z>=-38&&s.z<=-10.5;return!(e||t)||s.y>9}function mc(s){let e=new ge;e.name="Ketterer Court exterior",s.worldScene.add(e);let t=window.yardExteriorTreeSites||[],n=t.map(f=>{let h=f.z>50&&Math.abs(f.x)<65,d=h?Math.max(18,f.height+7):f.height;return{...f,height:d,width:d*.88,z:h?Math.max(61,f.z+5):f.z}}),i=ac(e,n),r=cc(e),o=new Se({color:6450762,roughness:1});for(let[f,h,d,p]of[[0,-52,195,26],[-83,10,22,116],[88,10,20,116],[0,71,195,24]]){let g=new xe(new Ue(d,p),o);g.rotation.x=-Math.PI/2,g.position.set(f,.004,h),g.name="Exterior grass verge",e.add(g)}let a=dc(e),l=()=>document.querySelector("#soundBtn")?.getAttribute?.("aria-pressed")==="false",c=pc({isMuted:l}),u=a.states.map(f=>f.position);return{root:e,trees:i,buildings:r,birds:a,audio:c,enableAudio:()=>c.enableAudio(),update(f,h={}){if(h.hidden)return c.update(f,{active:!1,outside:!1});a.update(f),c.update(f,{...h,outside:gp(h.eye),muted:l(),sources:u})}}}var rn=s=>document.querySelector(s),sn=rn("#questEnter"),_n=rn("#questStatus"),Lr=rn("#questPanel");rn("#questPreview").onclick=()=>{Lr.hidden=!0,rn("#questReturn").hidden=!1};rn("#questReturn").onclick=()=>{window.yardDebug?.pause(),Lr.hidden=!1};async function xp(s){let e=s.renderer,t=s.worldScene,n=s.worldCamera;s.exterior=mc(s);let i=oc(s);s.vrGames=i,rn("#enter").addEventListener("click",()=>s.exterior.enableAudio()),rn("#soundBtn").addEventListener("click",()=>s.exterior.enableAudio());let r=new _,o=new _,a=new _(0,1,0);e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let l=new ge;l.name="Quest player rig",t.add(l);let c=[e.xr.getController(0),e.xr.getController(1)],u=c.map((D,U)=>e.xr.getControllerGrip?.(U)||D);for(let D of u)c.includes(D)||l.add(D);let f=new Map;c.forEach(D=>{l.add(D),D.addEventListener("connected",N=>f.set(D,N.data)),D.addEventListener("disconnected",()=>f.delete(D));let U=new xe(new Ye(.018,8,6),new ve({color:16769946}));D.add(U)});let h=new Tt(new Be,new St({color:8645568}));h.frustumCulled=!1,h.visible=!1,t.add(h);let d=new xe(new pn(.22,.3,32),new ve({color:8645568,side:2,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.visible=!1,t.add(d);let p=s.colliders.map(D=>new Ze(new _(D.min.x,D.min.y,D.min.z),new _(D.max.x,D.max.y,D.max.z))),g=0,v=new _,x=new Te,M=null,y=!1,m=!1,S=!1,C=null,w,T,R=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),I=()=>{let D=s.stats(),U=ua(v.x,v.z,g);l.position.set(D.x-U.x,D.y+(window.yardFloorOffset||0),D.z-U.z),l.rotation.y=g,n.position.set(0,0,0),n.quaternion.identity(),l.updateMatrixWorld(!0)};s.xrFace=D=>{let U=new _(0,0,-1).applyQuaternion(x);g=D-Math.atan2(-U.x,-U.z),M=null,I()};function E(D){if(C=null,!D){h.visible=d.visible=!1;return}let U=D.getWorldPosition(new _),P=new _(0,0,-1).applyQuaternion(D.getWorldQuaternion(new Te)).multiplyScalar(6);P.y+=2;let V=[U.clone()],b=new st,W=new _,F=U.clone(),L=null;for(let B=1;B<=32;B++){let k=B*.05,z=U.clone().addScaledVector(P,k);z.y-=4.9*k*k;let H=z.clone().sub(F),X=H.length();b.set(F,H.normalize());let ee=X,J=null,Z=!1;for(let re of p){if(re.containsPoint(F))continue;let ie=b.intersectBox(re,W);if(ie){let j=ie.distanceTo(F);j<ee&&(ee=j,J=ie.clone(),Z=Math.abs(ie.y-re.max.y)<.015)}}if(F.y>=0&&z.y<=0){let re=F.clone().lerp(z,F.y/(F.y-z.y));re.distanceTo(F)<ee&&(J=re,Z=!0)}if(J){V.push(J),L=J,Z&&!s.blocked(J.x,J.z,J.y)&&Math.abs(s.groundAt(J.x,J.z,J.y+.05)-J.y)<.12&&(C=J);break}V.push(z),F=z}h.geometry.dispose(),h.geometry=new Be().setFromPoints(V),h.visible=!0,h.material.color.set(C?8645568:16746618),d.visible=!!C,C&&d.position.copy(C).add(new _(0,.025,0))}let A=window.questBridge={frame:null,sample(D){let U=e.xr.getSession(),N=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!N||U?.visibilityState==="hidden")return M=null,i.interrupt(),R();if(v.set(N.transform.position.x,N.transform.position.y,N.transform.position.z),x.copy(N.transform.orientation),M){let ie=ua(v.x-M.x,v.z-M.z,g);Math.hypot(ie.x,ie.z)<.8&&s.xrPhysical(ie.x,ie.z)}M=v.clone();let P,V;for(let ie of U.inputSources)ie.handedness==="left"&&(P=ie),ie.handedness==="right"&&(V=ie);let[b,W]=ss(P),[F]=ss(V),L=Ol(F,rn("#questTurning").value,D,y);!i.menuOpen&&!i.held&&!i.driving&&(g+=L.angle,L.angle&&i.interrupt()),y=L.latched;let B=!!P?.gamepad?.buttons[4]?.pressed;B&&!S&&!i.driving&&(i.interrupt(),s.resetPosition(),g=0,M=null,i.close()),S=B,I();let k=c.find(ie=>f.get(ie)?.handedness==="right"),z=new _(0,0,-1).applyQuaternion(x),H=z.clone().applyAxisAngle(new _(0,1,0),g),X=i.tick({dt:D,eye:v.clone().applyMatrix4(l.matrixWorld),forward:H,headOrientation:l.getWorldQuaternion(new Te).multiply(x),left:P,right:V,controller:k,rightGripController:u[c.findIndex(ie=>f.get(ie)?.handedness==="right")],leftController:u[c.findIndex(ie=>f.get(ie)?.handedness==="left")]}),ee=!X.blockTeleport&&!i.menuOpen&&(!!V?.gamepad?.buttons[1]?.pressed||!X.consumeTrigger&&!!V?.gamepad?.buttons[0]?.pressed);ee&&(i.interrupt(),E(k)),!ee&&m&&(C&&!i.menuOpen&&!X.blockTeleport&&s.xrTeleport(C.x,C.y,C.z),C=null,h.visible=d.visible=!1),m=ee;let J=g+Math.atan2(-z.x,-z.z);s.xrHeading(J);let Z=R(),re=Number(rn("#questSpeed").value)/2.9;return Z.fwd=-Mi(W)*re,Z.strafe=Mi(b)*re,(ee||X.blockMovement)&&(Z.fwd=Z.strafe=0),Z},beforeRender(D,U){e.xr.isPresenting?(I(),r.copy(v).applyMatrix4(l.matrixWorld),o.set(0,0,-1).applyQuaternion(x).applyAxisAngle(a,g)):(n.getWorldPosition(r),n.getWorldDirection(o));let N=e.xr.isPresenting?e.xr.getSession():null;s.exterior.update(U,{eye:r,forward:o,active:s.stats().playing&&!i.menuOpen,hidden:document.hidden||N?.visibilityState==="hidden"})}};if(e.xr.addEventListener("sessionstart",()=>{T=n.parent,w=e.shadowMap.enabled,e.shadowMap.enabled=!1,l.add(n),g=0,v.set(0,0,0),M=null,y=m=S=!1,s.xrBegin(),I(),i.begin(),document.body.classList.add("questActive"),Lr.hidden=!0,_n.textContent="VR is running. Use the Meta menu to exit.",sn.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),l.remove(n),T&&T.add(n),e.shadowMap.enabled=w,h.visible=d.visible=!1,M=null,s.xrEnd(),document.body.classList.remove("questActive"),Lr.hidden=!1,sn.disabled=!1,sn.textContent="Enter VR again",_n.textContent="You have left VR."}),sn.onclick=async()=>{sn.disabled=!0;let D;try{i.enableAudio(),s.exterior.enableAudio(),D=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),D.addEventListener("visibilitychange",()=>{M=null}),await e.xr.setSession(D)}catch(U){D&&await D.end().catch(()=>{}),sn.disabled=!1,_n.textContent="Could not enter VR: "+U.message}},!window.isSecureContext){sn.textContent="HTTPS hosting needed",_n.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){sn.textContent="Open in your Quest browser",_n.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let D=await navigator.xr.isSessionSupported("immersive-vr");sn.disabled=!D,sn.textContent=D?"Enter VR":"VR headset not detected",_n.textContent=D?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(D){_n.textContent="VR availability check failed: "+D.message}}var _p=0,gc=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(gc),xp(window.yardDebug).catch(s=>{_n.textContent="VR setup failed: "+s.message,console.error(s)})):++_p>1200&&(clearInterval(gc),_n.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
