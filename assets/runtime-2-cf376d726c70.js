(()=>{var ia=1;var sa=3,as=0,ra=1,ot=2;var mr=1,Xr=2;var gr=100;var xr=204,_r=205;var vr=0,yr=1,Mr=2,ci=3,br=4,Sr=5,Tr=6,wr=7,qr=0,oa=1,aa=2;var Yr=1,$r=2,Zr=3,Jr=4,Kr=5,Qr=6,jr=7;var eo=300,la=301,to=302;var ca=306,hi=1e3,ii=1001,Ar=1002;var ha=1006;var ua=1008;var no=1009;var da=1015;var fa=1023;var ui=2300,ls=2301,rs=2302,Er=2303,Cr=2400,Rr=2401,Pr=2402;var pa=0;var io="",Ie="srgb",Ir="srgb-linear",Lr="linear",os="srgb";var Mn=7680;var Dr=519;var Ur=35044;var an=2e3,di=2001;function sl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function rl(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}var To={},cs=null;function ma(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function He(...r){r=ma(r);let e="THREE."+r.shift();if(cs)cs("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ve(...r){r=ma(r);let e="THREE."+r.shift();if(cs)cs("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Hn(...r){let e=r.join(" ");e in To||(To[e]=!0,He(...r))}var ol={[vr]:yr,[Mr]:Tr,[br]:wr,[ci]:Sr,[yr]:vr,[Tr]:Mr,[wr]:br,[Sr]:ci},ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},st=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=1234567,ri=Math.PI/180,fi=180/Math.PI;function Pn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(st[r&255]+st[r>>8&255]+st[r>>16&255]+st[r>>24&255]+"-"+st[e&255]+st[e>>8&255]+"-"+st[e>>16&15|64]+st[e>>24&255]+"-"+st[t&63|128]+st[t>>8&255]+"-"+st[t>>16&255]+st[t>>24&255]+st[n&255]+st[n>>8&255]+st[n>>16&255]+st[n>>24&255]).toLowerCase()}function Re(r,e,t){return Math.max(e,Math.min(t,r))}function so(r,e){return(r%e+e)%e}function al(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ll(r,e,t){return r!==e?(t-r)/(e-r):0}function oi(r,e,t){return(1-t)*r+t*e}function cl(r,e,t,n){return oi(r,e,1-Math.exp(-t*n))}function hl(r,e=1){return e-Math.abs(so(r,e*2)-e)}function ul(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function dl(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function fl(r,e){return r+Math.floor(Math.random()*(e-r+1))}function pl(r,e){return r+Math.random()*(e-r)}function ml(r){return r*(.5-Math.random())}function gl(r){r!==void 0&&(wo=r);let e=wo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xl(r){return r*ri}function _l(r){return r*fi}function vl(r){return(r&r-1)===0&&r!==0}function yl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ml(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function bl(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*h,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ft={DEG2RAD:ri,RAD2DEG:fi,generateUUID:Pn,clamp:Re,euclideanModulo:so,mapLinear:al,inverseLerp:ll,lerp:oi,damp:cl,pingpong:hl,smoothstep:ul,smootherstep:dl,randInt:fl,randFloat:pl,randFloatSpread:ml,seededRandom:gl,degToRad:xl,radToDeg:_l,isPowerOfTwo:vl,ceilPowerOfTwo:yl,floorPowerOfTwo:Ml,setQuaternionFromProperEuler:bl,normalize:lt,denormalize:Gn},lo=class lo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Re(this.x,e.x,t.x),this.y=Re(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Re(this.x,e,t),this.y=Re(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Re(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lo.prototype.isVector2=!0;var re=lo,Le=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],p=s[o+2],g=s[o+3];if(u!==g||l!==f||c!==d||h!==p){let v=l*f+c*d+h*p+u*g;v<0&&(f=-f,d=-d,p=-p,g=-g,v=-v);let y=1-a;if(v<.9995){let b=Math.acos(v),m=Math.sin(b);y=Math.sin(y*b)/m,a=Math.sin(a*b)/m,l=l*y+f*a,c=c*y+d*a,h=h*y+p*a,u=u*y+g*a}else{l=l*y+f*a,c=c*y+d*a,h=h*y+p*a,u=u*y+g*a;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Re(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},co=class co{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ao.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ao.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Re(this.x,e.x,t.x),this.y=Re(this.y,e.y,t.y),this.z=Re(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Re(this.x,e,t),this.y=Re(this.y,e,t),this.z=Re(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hs.copy(this).projectOnVector(e),this.sub(Hs)}reflect(e){return this.sub(Hs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Re(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};co.prototype.isVector3=!0;var _=co,Hs=new _,Ao=new Le,ho=class ho{constructor(e,t,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],g=i[0],v=i[3],y=i[6],b=i[1],m=i[4],x=i[7],M=i[2],S=i[5],E=i[8];return s[0]=o*g+a*b+l*M,s[3]=o*v+a*m+l*S,s[6]=o*y+a*x+l*E,s[1]=c*g+h*b+u*M,s[4]=c*v+h*m+u*S,s[7]=c*y+h*x+u*E,s[2]=f*g+d*b+p*M,s[5]=f*v+d*m+p*S,s[8]=f*y+d*x+p*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ws.makeScale(e,t)),this}rotate(e){return Hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ws.makeRotation(-e)),this}translate(e,t){return Hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ws.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ho.prototype.isMatrix3=!0;var Ce=ho,Ws=new Ce,Eo=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Co=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sl(){let r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===os&&(i.r=Xt(i.r),i.g=Xt(i.g),i.b=Xt(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===os&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===io?Lr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Hn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Hn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ir]:{primaries:e,whitePoint:n,transfer:Lr,toXYZ:Eo,fromXYZ:Co,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:e,whitePoint:n,transfer:os,toXYZ:Eo,fromXYZ:Co,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),r}var Mt=Sl();function Xt(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wn(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ln,hs=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ln===void 0&&(Ln=Nr("canvas")),Ln.width=e.width,Ln.height=e.height;let i=Ln.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ln}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Xt(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xt(t[n]/255)*255):t[n]=Xt(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tl=0,us=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tl++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Xs(i[o].image)):s.push(Xs(i[o]))}else s=Xs(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Xs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var wl=0,qs=new _,bn=class r extends ln{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=ii,i=ii,s=ha,o=ua,a=fa,l=no,c=r.DEFAULT_ANISOTROPY,h=io){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=Pn(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qs).x}get height(){return this.source.getSize(qs).y}get depth(){return this.source.getSize(qs).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Ar:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Ar:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=eo;bn.DEFAULT_ANISOTROPY=1;var uo=class uo{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],g=l[2],v=l[6],y=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(p-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(p+v)<.1&&Math.abs(c+d+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let m=(c+1)/2,x=(d+1)/2,M=(y+1)/2,S=(h+f)/4,E=(u+g)/4,A=(p+v)/4;return m>x&&m>M?m<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(m),i=S/n,s=E/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=S/i,s=A/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=E/s,i=A/s),this.set(n,i,s,t),this}let b=Math.sqrt((v-p)*(v-p)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(v-p)/b,this.y=(u-g)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Re(this.x,e.x,t.x),this.y=Re(this.y,e.y,t.y),this.z=Re(this.z,e.z,t.z),this.w=Re(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Re(this.x,e,t),this.y=Re(this.y,e,t),this.z=Re(this.z,e,t),this.w=Re(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Re(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uo.prototype.isVector4=!0;var Sn=uo;var Ns=class Ns{constructor(e,t,n,i,s,o,a,l,c,h,u,f,d,p,g,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,f,d,p,g,v)}set(e,t,n,i,s,o,a,l,c,h,u,f,d,p,g,v){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=o,y[9]=a,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=f,y[3]=d,y[7]=p,y[11]=g,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ns().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Dn.setFromMatrixColumn(e,0).length(),s=1/Dn.setFromMatrixColumn(e,1).length(),o=1/Dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,g=c*u;t[0]=f+g*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,g=c*u;t[0]=f-g*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,g=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+g,t[1]=l*u,t[5]=g*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=g-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-g*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+g,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=g*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Al,e,El)}lookAt(e,t,n){let i=this.elements;return pt.subVectors(e,t),pt.lengthSq()===0&&(pt.z=1),pt.normalize(),jt.crossVectors(n,pt),jt.lengthSq()===0&&(Math.abs(n.z)===1?pt.x+=1e-4:pt.z+=1e-4,pt.normalize(),jt.crossVectors(n,pt)),jt.normalize(),Di.crossVectors(pt,jt),i[0]=jt.x,i[4]=Di.x,i[8]=pt.x,i[1]=jt.y,i[5]=Di.y,i[9]=pt.y,i[2]=jt.z,i[6]=Di.z,i[10]=pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],g=n[6],v=n[10],y=n[14],b=n[3],m=n[7],x=n[11],M=n[15],S=i[0],E=i[4],A=i[8],I=i[12],C=i[1],D=i[5],L=i[9],k=i[13],w=i[2],U=i[6],q=i[10],F=i[14],O=i[3],H=i[7],z=i[11],G=i[15];return s[0]=o*S+a*C+l*w+c*O,s[4]=o*E+a*D+l*U+c*H,s[8]=o*A+a*L+l*q+c*z,s[12]=o*I+a*k+l*F+c*G,s[1]=h*S+u*C+f*w+d*O,s[5]=h*E+u*D+f*U+d*H,s[9]=h*A+u*L+f*q+d*z,s[13]=h*I+u*k+f*F+d*G,s[2]=p*S+g*C+v*w+y*O,s[6]=p*E+g*D+v*U+y*H,s[10]=p*A+g*L+v*q+y*z,s[14]=p*I+g*k+v*F+y*G,s[3]=b*S+m*C+x*w+M*O,s[7]=b*E+m*D+x*U+M*H,s[11]=b*A+m*L+x*q+M*z,s[15]=b*I+m*k+x*F+M*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],g=e[7],v=e[11],y=e[15],b=l*d-c*f,m=a*d-c*u,x=a*f-l*u,M=o*d-c*h,S=o*f-l*h,E=o*u-a*h;return t*(g*b-v*m+y*x)-n*(p*b-v*M+y*S)+i*(p*m-g*M+y*E)-s*(p*x-g*S+v*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],g=e[13],v=e[14],y=e[15],b=t*a-n*o,m=t*l-i*o,x=t*c-s*o,M=n*l-i*a,S=n*c-s*a,E=i*c-s*l,A=h*g-u*p,I=h*v-f*p,C=h*y-d*p,D=u*v-f*g,L=u*y-d*g,k=f*y-d*v,w=b*k-m*L+x*D+M*C-S*I+E*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/w;return e[0]=(a*k-l*L+c*D)*U,e[1]=(i*L-n*k-s*D)*U,e[2]=(g*E-v*S+y*M)*U,e[3]=(f*S-u*E-d*M)*U,e[4]=(l*C-o*k-c*I)*U,e[5]=(t*k-i*C+s*I)*U,e[6]=(v*x-p*E-y*m)*U,e[7]=(h*E-f*x+d*m)*U,e[8]=(o*L-a*C+c*A)*U,e[9]=(n*C-t*L-s*A)*U,e[10]=(p*S-g*x+y*b)*U,e[11]=(u*x-h*S-d*b)*U,e[12]=(a*I-o*D-l*A)*U,e[13]=(t*D-n*I+i*A)*U,e[14]=(g*m-p*M-v*b)*U,e[15]=(h*M-u*m+f*b)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,p=s*u,g=o*h,v=o*u,y=a*u,b=l*c,m=l*h,x=l*u,M=n.x,S=n.y,E=n.z;return i[0]=(1-(g+y))*M,i[1]=(d+x)*M,i[2]=(p-m)*M,i[3]=0,i[4]=(d-x)*S,i[5]=(1-(f+y))*S,i[6]=(v+b)*S,i[7]=0,i[8]=(p+m)*E,i[9]=(v-b)*E,i[10]=(1-(f+g))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=Dn.set(i[0],i[1],i[2]).length(),a=Dn.set(i[4],i[5],i[6]).length(),l=Dn.set(i[8],i[9],i[10]).length();s<0&&(o=-o),Rt.copy(this);let c=1/o,h=1/a,u=1/l;return Rt.elements[0]*=c,Rt.elements[1]*=c,Rt.elements[2]*=c,Rt.elements[4]*=h,Rt.elements[5]*=h,Rt.elements[6]*=h,Rt.elements[8]*=u,Rt.elements[9]*=u,Rt.elements[10]*=u,t.setFromRotationMatrix(Rt),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,o,a=an,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(l)p=s/(o-s),g=o*s/(o-s);else if(a===an)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===di)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=an,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,g;if(l)p=1/(o-s),g=o/(o-s);else if(a===an)p=-2/(o-s),g=-(o+s)/(o-s);else if(a===di)p=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ns.prototype.isMatrix4=!0;var Ze=Ns,Dn=new _,Rt=new Ze,Al=new _(0,0,0),El=new _(1,1,1),jt=new _,Di=new _,pt=new _,Ro=new Ze,Po=new Le,Tn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Po.setFromEuler(this),this.setFromQuaternion(Po,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var pi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cl=0,Io=new _,Un=new Le,zt=new Ze,Ui=new _,Qn=new _,Rl=new _,Pl=new Le,Lo=new _(1,0,0),Do=new _(0,1,0),Uo=new _(0,0,1),No={type:"added"},Il={type:"removed"},Nn={type:"childadded",child:null},Ys={type:"childremoved",child:null},gt=class r extends ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new _,t=new Tn,n=new Le,i=new _(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Ce}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.multiply(Un),this}rotateOnWorldAxis(e,t){return Un.setFromAxisAngle(e,t),this.quaternion.premultiply(Un),this}rotateX(e){return this.rotateOnAxis(Lo,e)}rotateY(e){return this.rotateOnAxis(Do,e)}rotateZ(e){return this.rotateOnAxis(Uo,e)}translateOnAxis(e,t){return Io.copy(e).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lo,e)}translateY(e){return this.translateOnAxis(Do,e)}translateZ(e){return this.translateOnAxis(Uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ui.copy(e):Ui.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zt.lookAt(Qn,Ui,this.up):zt.lookAt(Ui,Qn,this.up),this.quaternion.setFromRotationMatrix(zt),i&&(zt.extractRotation(i.matrixWorld),Un.setFromRotationMatrix(zt),this.quaternion.premultiply(Un.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(No),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Il),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(zt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(No),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,e,Rl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,Pl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};gt.DEFAULT_UP=new _(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Te=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var ga={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function $s(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=so(e,1),t=Re(t,0,1),n=Re(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$s(o,s,e+1/3),this.g=$s(o,s,e),this.b=$s(o,s,e-1/3)}return Mt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ie){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=ga[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xt(e.r),this.g=Xt(e.g),this.b=Xt(e.b),this}copyLinearToSRGB(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return Mt.workingToColorSpace(rt.copy(this),e),Math.round(Re(rt.r*255,0,255))*65536+Math.round(Re(rt.g*255,0,255))*256+Math.round(Re(rt.b*255,0,255))}getHexString(e=Ie){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(rt.copy(this),t);let n=rt.r,i=rt.g,s=rt.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(rt.copy(this),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=Ie){Mt.workingToColorSpace(rt.copy(this),e);let t=rt.r,n=rt.g,i=rt.b;return e!==Ie?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(en),this.setHSL(en.h+e,en.s+t,en.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(en),e.getHSL(Ni);let n=oi(en.h,Ni.h,t),i=oi(en.s,Ni.s,t),s=oi(en.l,Ni.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rt=new Ne;Ne.NAMES=ga;var Pt=new _,kt=new _,Zs=new _,Vt=new _,Fn=new _,On=new _,Fo=new _,Js=new _,Ks=new _,Qs=new _,js=new Sn,er=new Sn,tr=new Sn,on=class r{constructor(e=new _,t=new _,n=new _){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pt.subVectors(e,t),i.cross(Pt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pt.subVectors(i,t),kt.subVectors(n,t),Zs.subVectors(e,t);let o=Pt.dot(Pt),a=Pt.dot(kt),l=Pt.dot(Zs),c=kt.dot(kt),h=kt.dot(Zs),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vt)===null?!1:Vt.x>=0&&Vt.y>=0&&Vt.x+Vt.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Vt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vt.x),l.addScaledVector(o,Vt.y),l.addScaledVector(a,Vt.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return js.setScalar(0),er.setScalar(0),tr.setScalar(0),js.fromBufferAttribute(e,t),er.fromBufferAttribute(e,n),tr.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(js,s.x),o.addScaledVector(er,s.y),o.addScaledVector(tr,s.z),o}static isFrontFacing(e,t,n,i){return Pt.subVectors(n,t),kt.subVectors(e,t),Pt.cross(kt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),kt.subVectors(this.a,this.b),Pt.cross(kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Fn.subVectors(i,n),On.subVectors(s,n),Js.subVectors(e,n);let l=Fn.dot(Js),c=On.dot(Js);if(l<=0&&c<=0)return t.copy(n);Ks.subVectors(e,i);let h=Fn.dot(Ks),u=On.dot(Ks);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Fn,o);Qs.subVectors(e,s);let d=Fn.dot(Qs),p=On.dot(Qs);if(p>=0&&d<=p)return t.copy(s);let g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(On,a);let v=h*p-d*u;if(v<=0&&u-h>=0&&d-p>=0)return Fo.subVectors(s,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Fo,a);let y=1/(v+g+f);return o=g*y,a=f*y,t.copy(n).addScaledVector(Fn,o).addScaledVector(On,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Je=class{constructor(e=new _(1/0,1/0,1/0),t=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(It.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(It.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=It.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,It):It.fromBufferAttribute(s,o),It.applyMatrix4(e.matrixWorld),this.expandByPoint(It);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fi.copy(n.boundingBox)),Fi.applyMatrix4(e.matrixWorld),this.union(Fi)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,It),It.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jn),Oi.subVectors(this.max,jn),Bn.subVectors(e.a,jn),zn.subVectors(e.b,jn),kn.subVectors(e.c,jn),tn.subVectors(zn,Bn),nn.subVectors(kn,zn),xn.subVectors(Bn,kn);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-xn.z,xn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,xn.z,0,-xn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-xn.y,xn.x,0];return!nr(t,Bn,zn,kn,Oi)||(t=[1,0,0,0,1,0,0,0,1],!nr(t,Bn,zn,kn,Oi))?!1:(Bi.crossVectors(tn,nn),t=[Bi.x,Bi.y,Bi.z],nr(t,Bn,zn,kn,Oi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,It).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(It).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gt=[new _,new _,new _,new _,new _,new _,new _,new _],It=new _,Fi=new Je,Bn=new _,zn=new _,kn=new _,tn=new _,nn=new _,xn=new _,jn=new _,Oi=new _,Bi=new _,_n=new _;function nr(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_n.fromArray(r,s);let a=i.x*Math.abs(_n.x)+i.y*Math.abs(_n.y)+i.z*Math.abs(_n.z),l=e.dot(_n),c=t.dot(_n),h=n.dot(_n);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $e=new _,zi=new re,Ll=0,bt=class extends ln{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ll++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ur,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyMatrix3(e),this.setXY(t,zi.x,zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ur&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ds=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fs=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ee=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Dl=new Je,ei=new _,ir=new _,Ft=class{constructor(e=new _,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dl.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ei.subVectors(e,this.center);let t=ei.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ei,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ei.copy(e.center).add(ir)),this.expandByPoint(ei.copy(e.center).sub(ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ul=0,yt=new Ze,sr=new gt,Vn=new _,mt=new Je,ti=new Je,Qe=new _,De=class r extends ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ul++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sl(e)?fs:ds)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ce().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,n){return yt.makeTranslation(e,t,n),this.applyMatrix4(yt),this}scale(e,t,n){return yt.makeScale(e,t,n),this.applyMatrix4(yt),this}lookAt(e){return sr.lookAt(e),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];mt.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,mt.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,mt.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(mt.min),this.boundingBox.expandByPoint(mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(e){let n=this.boundingSphere.center;if(mt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(mt.min,ti.min),mt.expandByPoint(Qe),Qe.addVectors(mt.max,ti.max),mt.expandByPoint(Qe)):(mt.expandByPoint(ti.min),mt.expandByPoint(ti.max))}mt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Qe.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qe));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Vn.fromBufferAttribute(e,c),Qe.add(Vn)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new _,l[A]=new _;let c=new _,h=new _,u=new _,f=new re,d=new re,p=new re,g=new _,v=new _;function y(A,I,C){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,C),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,I),p.fromBufferAttribute(s,C),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(D),v.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(D),a[A].add(g),a[I].add(g),a[C].add(g),l[A].add(v),l[I].add(v),l[C].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,I=b.length;A<I;++A){let C=b[A],D=C.start,L=C.count;for(let k=D,w=D+L;k<w;k+=3)y(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let m=new _,x=new _,M=new _,S=new _;function E(A){M.fromBufferAttribute(i,A),S.copy(M);let I=a[A];m.copy(I),m.sub(M.multiplyScalar(M.dot(I))).normalize(),x.crossVectors(S,I);let D=x.dot(l[A])<0?-1:1;o.setXYZW(A,m.x,m.y,m.z,D)}for(let A=0,I=b.length;A<I;++A){let C=b[A],D=C.start,L=C.count;for(let k=D,w=D+L;k<w;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new _,s=new _,o=new _,a=new _,l=new _,c=new _,h=new _,u=new _;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),g=e.getX(f+1),v=e.getX(f+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,v),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qe.fromBufferAttribute(e,t),Qe.normalize(),e.setXYZ(t,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let g=0,v=l.length;g<v;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*h;for(let y=0;y<h;y++)f[p++]=c[d++]}return new bt(f,h,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Nl=0,wn=class extends ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=mr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=_r,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mn,this.stencilZFail=Mn,this.stencilZPass=Mn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==as&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xr&&(n.blendSrc=this.blendSrc),this.blendDst!==_r&&(n.blendDst=this.blendDst),this.blendEquation!==gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ht=new _,rr=new _,ki=new _,sn=new _,or=new _,Vi=new _,ar=new _,Ke=class{constructor(e=new _,t=new _(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ht)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ht.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ht.copy(this.origin).addScaledVector(this.direction,t),Ht.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rr.copy(e).add(t).multiplyScalar(.5),ki.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(rr);let s=e.distanceTo(t)*.5,o=-this.direction.dot(ki),a=sn.dot(this.direction),l=-sn.dot(ki),c=sn.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=s*h,u>=0)if(f>=-p)if(f<=p){let g=1/h;u*=g,f*=g,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rr).addScaledVector(ki,f),d}intersectSphere(e,t){Ht.subVectors(e.center,this.origin);let n=Ht.dot(this.direction),i=Ht.dot(Ht)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ht)!==null}intersectTriangle(e,t,n,i,s){or.subVectors(t,e),Vi.subVectors(n,e),ar.crossVectors(or,Vi);let o=this.direction.dot(ar),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,e);let l=a*this.direction.dot(Vi.crossVectors(sn,Vi));if(l<0)return null;let c=a*this.direction.dot(or.cross(sn));if(c<0||l+c>o)return null;let h=-a*sn.dot(ar);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=qr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Oo=new Ze,vn=new Ke,Gi=new Ft,Bo=new _,Hi=new _,Wi=new _,Xi=new _,lr=new _,qi=new _,zo=new _,Yi=new _,Ae=class extends gt{constructor(e=new De,t=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){qi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(lr.fromBufferAttribute(u,e),o?qi.addScaledVector(lr,h):qi.addScaledVector(lr.sub(t),h))}t.add(qi)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(s),vn.copy(e.ray).recast(e.near),!(Gi.containsPoint(vn.origin)===!1&&(vn.intersectSphere(Gi,Bo)===null||vn.origin.distanceToSquared(Bo)>(e.far-e.near)**2))&&(Oo.copy(s).invert(),vn.copy(e.ray).applyMatrix4(Oo),!(n.boundingBox!==null&&vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vn)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let v=f[p],y=o[v.materialIndex],b=Math.max(v.start,d.start),m=Math.min(a.count,Math.min(v.start+v.count,d.start+d.count));for(let x=b,M=m;x<M;x+=3){let S=a.getX(x),E=a.getX(x+1),A=a.getX(x+2);i=$i(this,y,e,n,c,h,u,S,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let v=p,y=g;v<y;v+=3){let b=a.getX(v),m=a.getX(v+1),x=a.getX(v+2);i=$i(this,o,e,n,c,h,u,b,m,x),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=f.length;p<g;p++){let v=f[p],y=o[v.materialIndex],b=Math.max(v.start,d.start),m=Math.min(l.count,Math.min(v.start+v.count,d.start+d.count));for(let x=b,M=m;x<M;x+=3){let S=x,E=x+1,A=x+2;i=$i(this,y,e,n,c,h,u,S,E,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let v=p,y=g;v<y;v+=3){let b=v,m=v+1,x=v+2;i=$i(this,o,e,n,c,h,u,b,m,x),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};function Fl(r,e,t,n,i,s,o,a){let l;if(e.side===ra?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===as,a),l===null)return null;Yi.copy(a),Yi.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Yi);return c<t.near||c>t.far?null:{distance:c,point:Yi.clone(),object:r}}function $i(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Hi),r.getVertexPosition(l,Wi),r.getVertexPosition(c,Xi);let h=Fl(r,e,t,n,Hi,Wi,Xi,zo);if(h){let u=new _;on.getBarycoord(zo,Hi,Wi,Xi,u),i&&(h.uv=on.getInterpolatedAttribute(i,a,l,c,u,new re)),s&&(h.uv1=on.getInterpolatedAttribute(s,a,l,c,u,new re)),o&&(h.normal=on.getInterpolatedAttribute(o,a,l,c,u,new _),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new _,materialIndex:0};on.getNormal(Hi,Wi,Xi,f.normal),h.face=f,h.barycoord=u}return h}var cr=new _,Ol=new _,Bl=new Ce,Wt=class{constructor(e=new _(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=cr.subVectors(n,t).cross(Ol.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(cr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bl.getNormalMatrix(e),i=this.coplanarPoint(cr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yn=new Ft,zl=new re(.5,.5),Zi=new _,ps=class{constructor(e=new Wt,t=new Wt,n=new Wt,i=new Wt,s=new Wt,o=new Wt){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],p=s[8],g=s[9],v=s[10],y=s[11],b=s[12],m=s[13],x=s[14],M=s[15];if(i[0].setComponents(c-o,d-h,y-p,M-b).normalize(),i[1].setComponents(c+o,d+h,y+p,M+b).normalize(),i[2].setComponents(c+a,d+u,y+g,M+m).normalize(),i[3].setComponents(c-a,d-u,y-g,M-m).normalize(),n)i[4].setComponents(l,f,v,x).normalize(),i[5].setComponents(c-l,d-f,y-v,M-x).normalize();else if(i[4].setComponents(c-l,d-f,y-v,M-x).normalize(),t===an)i[5].setComponents(c+l,d+f,y+v,M+x).normalize();else if(t===di)i[5].setComponents(l,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(e){yn.center.set(0,0,0);let t=zl.distanceTo(e.center);return yn.radius=.7071067811865476+t,yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Zi.x=i.normal.x>0?e.max.x:e.min.x,Zi.y=i.normal.y>0?e.max.y:e.min.y,Zi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Zi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var St=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ms=new _,gs=new _,ko=new Ze,ni=new Ke,Ji=new Ft,hr=new _,Vo=new _,Lt=class extends gt{constructor(e=new De,t=new St){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ms.fromBufferAttribute(t,i-1),gs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ms.distanceTo(gs);e.setAttribute("lineDistance",new Ee(n,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(i),Ji.radius+=s,e.ray.intersectsSphere(Ji)===!1)return;ko.copy(i).invert(),ni.copy(e.ray).applyMatrix4(ko);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,v=p-1;g<v;g+=c){let y=h.getX(g),b=h.getX(g+1),m=Ki(this,e,ni,l,y,b,g);m&&t.push(m)}if(this.isLineLoop){let g=h.getX(p-1),v=h.getX(d),y=Ki(this,e,ni,l,g,v,p-1);y&&t.push(y)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p-1;g<v;g+=c){let y=Ki(this,e,ni,l,g,g+1,g);y&&t.push(y)}if(this.isLineLoop){let g=Ki(this,e,ni,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ki(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(ms.fromBufferAttribute(a,i),gs.fromBufferAttribute(a,s),t.distanceSqToSegment(ms,gs,hr,Vo)>n)return;hr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(hr);if(!(c<e.near||c>e.far))return{distance:c,point:Vo.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var Xn=class extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Go=new Ze,Fr=new Ke,Qi=new Ft,ji=new _,mi=class extends gt{constructor(e=new De,t=new Xn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(i),Qi.radius+=s,e.ray.intersectsSphere(Qi)===!1)return;Go.copy(i).invert(),Fr.copy(e.ray).applyMatrix4(Go);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,g=d;p<g;p++){let v=c.getX(p);ji.fromBufferAttribute(u,v),Ho(ji,v,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,g=d;p<g;p++)ji.fromBufferAttribute(u,p),Ho(ji,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ho(r,e,t,n,i,s,o){let a=Fr.distanceSqToPoint(r);if(a<t){let l=new _;Fr.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Be=class extends bn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Me=class r extends De{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function p(g,v,y,b,m,x,M,S,E,A,I){let C=x/E,D=M/A,L=x/2,k=M/2,w=S/2,U=E+1,q=A+1,F=0,O=0,H=new _;for(let z=0;z<q;z++){let G=z*D-k;for(let pe=0;pe<U;pe++){let ne=pe*C-L;H[g]=ne*b,H[v]=G*m,H[y]=w,c.push(H.x,H.y,H.z),H[g]=0,H[v]=0,H[y]=S>0?1:-1,h.push(H.x,H.y,H.z),u.push(pe/E),u.push(1-z/A),F+=1}}for(let z=0;z<A;z++)for(let G=0;G<E;G++){let pe=f+G+U*z,ne=f+G+U*(z+1),V=f+(G+1)+U*(z+1),ee=f+(G+1)+U*z;l.push(pe,ne,ee),l.push(ne,V,ee),O+=6}a.addGroup(d,O,I),d+=O,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var gi=class r extends De{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new _,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(a,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ct=class r extends De{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],p=0,g=[],v=n/2,y=0;b(),o===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(d,2));function b(){let x=new _,M=new _,S=0,E=(t-e)/n;for(let A=0;A<=s;A++){let I=[],C=A/s,D=C*(t-e)+e;for(let L=0;L<=i;L++){let k=L/i,w=k*l+a,U=Math.sin(w),q=Math.cos(w);M.x=D*U,M.y=-C*n+v,M.z=D*q,u.push(M.x,M.y,M.z),x.set(U,E,q).normalize(),f.push(x.x,x.y,x.z),d.push(k,1-C),I.push(p++)}g.push(I)}for(let A=0;A<i;A++)for(let I=0;I<s;I++){let C=g[I][A],D=g[I+1][A],L=g[I+1][A+1],k=g[I][A+1];(e>0||I!==0)&&(h.push(C,D,k),S+=3),(t>0||I!==s-1)&&(h.push(D,L,k),S+=3)}c.addGroup(y,S,0),y+=S}function m(x){let M=p,S=new re,E=new _,A=0,I=x===!0?e:t,C=x===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,v*C,0),f.push(0,C,0),d.push(.5,.5),p++;let D=p;for(let L=0;L<=i;L++){let w=L/i*l+a,U=Math.cos(w),q=Math.sin(w);E.x=I*q,E.y=v*C,E.z=I*U,u.push(E.x,E.y,E.z),f.push(0,C,0),S.x=U*.5+.5,S.y=q*.5*C+.5,d.push(S.x,S.y),p++}for(let L=0;L<i;L++){let k=M+L,w=D+L;x===!0?h.push(w,w+1,k):h.push(w+1,w,k),A+=3}c.addGroup(y,A,x===!0?1:2),y+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},An=class r extends ct{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var xt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new re:new _);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new _,i=[],s=[],o=[],a=new _,l=new Ze;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new _)}s[0]=new _,o[0]=new _;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Re(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Re(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qn=class extends xt{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new re){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xs=class extends qn{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ro(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Wo=new _,Xo=new _,ur=new ro,dr=new ro,fr=new ro,cn=class extends xt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new _){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Xo.subVectors(i[0],i[1]).add(i[0]),c=Xo);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Wo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),ur.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,g,v),dr.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,g,v),fr.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(ur.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),dr.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),fr.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ur.calc(l),dr.calc(l),fr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qo(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function kl(r,e){let t=1-r;return t*t*e}function Vl(r,e){return 2*(1-r)*r*e}function Gl(r,e){return r*r*e}function ai(r,e,t,n){return kl(r,e)+Vl(r,t)+Gl(r,n)}function Hl(r,e){let t=1-r;return t*t*t*e}function Wl(r,e){let t=1-r;return 3*t*t*r*e}function Xl(r,e){return 3*(1-r)*r*r*e}function ql(r,e){return r*r*r*e}function li(r,e,t,n,i){return Hl(r,e)+Wl(r,t)+Xl(r,n)+ql(r,i)}var xi=class extends xt{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(li(e,i.x,s.x,o.x,a.x),li(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_s=class extends xt{constructor(e=new _,t=new _,n=new _,i=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(li(e,i.x,s.x,o.x,a.x),li(e,i.y,s.y,o.y,a.y),li(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_i=class extends xt{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vs=class extends xt{constructor(e=new _,t=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new _){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vi=class extends xt{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ai(e,i.x,s.x,o.x),ai(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yi=class extends xt{constructor(e=new _,t=new _,n=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(ai(e,i.x,s.x,o.x),ai(e,i.y,s.y,o.y),ai(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mi=class extends xt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(qo(a,l.x,c.x,h.x,u.x),qo(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},ys=Object.freeze({__proto__:null,ArcCurve:xs,CatmullRomCurve3:cn,CubicBezierCurve:xi,CubicBezierCurve3:_s,EllipseCurve:qn,LineCurve:_i,LineCurve3:vs,QuadraticBezierCurve:vi,QuadraticBezierCurve3:yi,SplineCurve:Mi}),Ms=class extends xt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ys[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ys[i.type]().fromJSON(i))}return this}},En=class extends Ms{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _i(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new vi(this.currentPoint.clone(),new re(e,t),new re(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new xi(this.currentPoint.clone(),new re(e,t),new re(n,i),new re(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Mi(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new qn(e,t,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_t=class extends En{constructor(e){super(e),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new En().fromJSON(i))}return this}};function Yl(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=xa(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Ql(r,e,s,t)),r.length>80*t){a=r[0],l=r[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=r[f],p=r[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return bi(s,o,t,a,l,c,0),o}function xa(r,e,t,n,i){let s;if(i===cc(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=Yo(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Yo(o/n|0,r[o],r[o+1],s);return s&&Yn(s,s.next)&&(Ti(s),s=s.next),s}function Cn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Yn(t,t.next)||Ge(t.prev,t,t.next)===0)){if(Ti(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function bi(r,e,t,n,i,s,o){if(!r)return;!o&&s&&ic(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Zl(r,n,i,s):$l(r)){e.push(l.i,r.i,c.i),Ti(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Jl(Cn(r),e),bi(r,e,t,n,i,s,2)):o===2&&Kl(r,e,t,n,i,s):bi(Cn(r),e,t,n,i,s,1);break}}}function $l(r){let e=r.prev,t=r,n=r.next;if(Ge(e,t,n)>=0)return!1;let i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&si(i,a,s,l,o,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Zl(r,e,t,n){let i=r.prev,s=r,o=r.next;if(Ge(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),g=Math.max(a,l,c),v=Math.max(h,u,f),y=Or(d,p,e,t,n),b=Or(g,v,e,t,n),m=r.prevZ,x=r.nextZ;for(;m&&m.z>=y&&x&&x.z<=b;){if(m.x>=d&&m.x<=g&&m.y>=p&&m.y<=v&&m!==i&&m!==o&&si(a,h,l,u,c,f,m.x,m.y)&&Ge(m.prev,m,m.next)>=0||(m=m.prevZ,x.x>=d&&x.x<=g&&x.y>=p&&x.y<=v&&x!==i&&x!==o&&si(a,h,l,u,c,f,x.x,x.y)&&Ge(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;m&&m.z>=y;){if(m.x>=d&&m.x<=g&&m.y>=p&&m.y<=v&&m!==i&&m!==o&&si(a,h,l,u,c,f,m.x,m.y)&&Ge(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=g&&x.y>=p&&x.y<=v&&x!==i&&x!==o&&si(a,h,l,u,c,f,x.x,x.y)&&Ge(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Jl(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Yn(n,i)&&va(n,t,t.next,i)&&Si(n,i)&&Si(i,n)&&(e.push(n.i,t.i,i.i),Ti(t),Ti(t.next),t=r=i),t=t.next}while(t!==r);return Cn(t)}function Kl(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oc(o,a)){let l=ya(o,a);o=Cn(o,o.next),l=Cn(l,l.next),bi(o,e,t,n,i,s,0),bi(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Ql(r,e,t,n){let i=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=xa(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(rc(c))}i.sort(jl);for(let s=0;s<i.length;s++)t=ec(i[s],t);return t}function jl(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function ec(r,e){let t=tc(r,e);if(!t)return e;let n=ya(t,r);return Cn(n,n.next),Cn(t,t.next)}function tc(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;if(Yn(r,t))return t;do{if(Yn(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&_a(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Si(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&nc(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function nc(r,e){return Ge(r.prev,r,e.prev)<0&&Ge(e.next,r,r.next)<0}function ic(r,e,t,n){let i=r;do i.z===0&&(i.z=Or(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,sc(i)}function sc(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Or(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function rc(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function _a(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function si(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&_a(r,e,t,n,i,s,o,a)}function oc(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!ac(r,e)&&(Si(r,e)&&Si(e,r)&&lc(r,e)&&(Ge(r.prev,r,e.prev)||Ge(r,e.prev,e))||Yn(r,e)&&Ge(r.prev,r,r.next)>0&&Ge(e.prev,e,e.next)>0)}function Ge(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Yn(r,e){return r.x===e.x&&r.y===e.y}function va(r,e,t,n){let i=ts(Ge(r,e,t)),s=ts(Ge(r,e,n)),o=ts(Ge(t,n,r)),a=ts(Ge(t,n,e));return!!(i!==s&&o!==a||i===0&&es(r,t,e)||s===0&&es(r,n,e)||o===0&&es(t,r,n)||a===0&&es(t,e,n))}function es(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ts(r){return r>0?1:r<0?-1:0}function ac(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&va(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Si(r,e){return Ge(r.prev,r,r.next)<0?Ge(r,e,r.next)>=0&&Ge(r,r.prev,e)>=0:Ge(r,e,r.prev)<0||Ge(r,r.next,e)<0}function lc(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function ya(r,e){let t=Br(r.i,r.x,r.y),n=Br(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Yo(r,e,t,n){let i=Br(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ti(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Br(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cc(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var zr=class{static triangulate(e,t,n=2){return Yl(e,t,n)}},Nt=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];$o(e),Zo(n,e);let o=e.length;t.forEach($o);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Zo(n,t[l]);let a=zr.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function $o(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Zo(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Rn=class r extends De{constructor(e=new _t([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ee(i,3)),this.setAttribute("uv",new Ee(s,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,v=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:hc,m,x=!1,M,S,E,A;if(y){m=y.getSpacedPoints(h),x=!0,f=!1;let R=y.isCatmullRomCurve3?y.closed:!1;M=y.computeFrenetFrames(h,R),S=new _,E=new _,A=new _}f||(v=0,d=0,p=0,g=0);let I=a.extractPoints(c),C=I.shape,D=I.holes;if(!Nt.isClockWise(C)){C=C.reverse();for(let R=0,W=D.length;R<W;R++){let Y=D[R];Nt.isClockWise(Y)&&(D[R]=Y.reverse())}}function k(R){let Y=10000000000000001e-36,ie=R[0];for(let T=1;T<=R.length;T++){let N=T%R.length,B=R[N],$=B.x-ie.x,K=B.y-ie.y,P=$*$+K*K,Q=Math.max(Math.abs(B.x),Math.abs(B.y),Math.abs(ie.x),Math.abs(ie.y)),he=Y*Q*Q;if(P<=he){R.splice(N,1),T--;continue}ie=B}}k(C),D.forEach(k);let w=D.length,U=C;for(let R=0;R<w;R++){let W=D[R];C=C.concat(W)}function q(R,W,Y){return W||Ve("ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(W,Y)}let F=C.length;function O(R,W,Y){let ie,T,N,B=R.x-W.x,$=R.y-W.y,K=Y.x-R.x,P=Y.y-R.y,Q=B*B+$*$,he=B*P-$*K;if(Math.abs(he)>Number.EPSILON){let ge=Math.sqrt(Q),X=Math.sqrt(K*K+P*P),te=W.x-$/ge,_e=W.y+B/ge,ue=Y.x-P/X,Se=Y.y+K/X,Ue=((ue-te)*P-(Se-_e)*K)/(B*P-$*K);ie=te+B*Ue-R.x,T=_e+$*Ue-R.y;let qe=ie*ie+T*T;if(qe<=2)return new re(ie,T);N=Math.sqrt(qe/2)}else{let ge=!1;B>Number.EPSILON?K>Number.EPSILON&&(ge=!0):B<-Number.EPSILON?K<-Number.EPSILON&&(ge=!0):Math.sign($)===Math.sign(P)&&(ge=!0),ge?(ie=-$,T=B,N=Math.sqrt(Q)):(ie=B,T=$,N=Math.sqrt(Q/2))}return new re(ie/N,T/N)}let H=[];for(let R=0,W=U.length,Y=W-1,ie=R+1;R<W;R++,Y++,ie++)Y===W&&(Y=0),ie===W&&(ie=0),H[R]=O(U[R],U[Y],U[ie]);let z=[],G,pe=H.concat();for(let R=0,W=w;R<W;R++){let Y=D[R];G=[];for(let ie=0,T=Y.length,N=T-1,B=ie+1;ie<T;ie++,N++,B++)N===T&&(N=0),B===T&&(B=0),G[ie]=O(Y[ie],Y[N],Y[B]);z.push(G),pe=pe.concat(G)}let ne;if(v===0)ne=Nt.triangulateShape(U,D);else{let R=[],W=[];for(let Y=0;Y<v;Y++){let ie=Y/v,T=d*Math.cos(ie*Math.PI/2),N=p*Math.sin(ie*Math.PI/2)+g;for(let B=0,$=U.length;B<$;B++){let K=q(U[B],H[B],N);J(K.x,K.y,-T),ie===0&&R.push(K)}for(let B=0,$=w;B<$;B++){let K=D[B];G=z[B];let P=[];for(let Q=0,he=K.length;Q<he;Q++){let ge=q(K[Q],G[Q],N);J(ge.x,ge.y,-T),ie===0&&P.push(ge)}ie===0&&W.push(P)}}ne=Nt.triangulateShape(R,W)}let V=ne.length,ee=p+g;for(let R=0;R<F;R++){let W=f?q(C[R],pe[R],ee):C[R];x?(E.copy(M.normals[0]).multiplyScalar(W.x),S.copy(M.binormals[0]).multiplyScalar(W.y),A.copy(m[0]).add(E).add(S),J(A.x,A.y,A.z)):J(W.x,W.y,0)}for(let R=1;R<=h;R++)for(let W=0;W<F;W++){let Y=f?q(C[W],pe[W],ee):C[W];x?(E.copy(M.normals[R]).multiplyScalar(Y.x),S.copy(M.binormals[R]).multiplyScalar(Y.y),A.copy(m[R]).add(E).add(S),J(A.x,A.y,A.z)):J(Y.x,Y.y,u/h*R)}for(let R=v-1;R>=0;R--){let W=R/v,Y=d*Math.cos(W*Math.PI/2),ie=p*Math.sin(W*Math.PI/2)+g;for(let T=0,N=U.length;T<N;T++){let B=q(U[T],H[T],ie);J(B.x,B.y,u+Y)}for(let T=0,N=D.length;T<N;T++){let B=D[T];G=z[T];for(let $=0,K=B.length;$<K;$++){let P=q(B[$],G[$],ie);x?J(P.x,P.y+m[h-1].y,m[h-1].x+Y):J(P.x,P.y,u+Y)}}}se(),de();function se(){let R=i.length/3;if(f){let W=0,Y=F*W;for(let ie=0;ie<V;ie++){let T=ne[ie];be(T[2]+Y,T[1]+Y,T[0]+Y)}W=h+v*2,Y=F*W;for(let ie=0;ie<V;ie++){let T=ne[ie];be(T[0]+Y,T[1]+Y,T[2]+Y)}}else{for(let W=0;W<V;W++){let Y=ne[W];be(Y[2],Y[1],Y[0])}for(let W=0;W<V;W++){let Y=ne[W];be(Y[0]+F*h,Y[1]+F*h,Y[2]+F*h)}}n.addGroup(R,i.length/3-R,0)}function de(){let R=i.length/3,W=0;oe(U,W),W+=U.length;for(let Y=0,ie=D.length;Y<ie;Y++){let T=D[Y];oe(T,W),W+=T.length}n.addGroup(R,i.length/3-R,1)}function oe(R,W){let Y=R.length;for(;--Y>=0;){let ie=Y,T=Y-1;T<0&&(T=R.length-1);for(let N=0,B=h+v*2;N<B;N++){let $=F*N,K=F*(N+1),P=W+ie+$,Q=W+T+$,he=W+T+K,ge=W+ie+K;xe(P,Q,he,ge)}}}function J(R,W,Y){l.push(R),l.push(W),l.push(Y)}function be(R,W,Y){ae(R),ae(W),ae(Y);let ie=i.length/3,T=b.generateTopUV(n,i,ie-3,ie-2,ie-1);fe(T[0]),fe(T[1]),fe(T[2])}function xe(R,W,Y,ie){ae(R),ae(W),ae(ie),ae(W),ae(Y),ae(ie);let T=i.length/3,N=b.generateSideWallUV(n,i,T-6,T-3,T-2,T-1);fe(N[0]),fe(N[1]),fe(N[3]),fe(N[1]),fe(N[2]),fe(N[3])}function ae(R){i.push(l[R*3+0]),i.push(l[R*3+1]),i.push(l[R*3+2])}function fe(R){s.push(R.x),s.push(R.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return uc(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ys[i.type]().fromJSON(i)),new r(n,e.options)}},hc={generateTopUV:function(r,e,t,n,i){let s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new re(s,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],g=e[s*3],v=e[s*3+1],y=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(f,1-p),new re(g,1-y)]:[new re(a,1-l),new re(h,1-u),new re(d,1-p),new re(v,1-y)]}};function uc(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wi=class r extends De{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Re(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/t,u=new _,f=new re,d=new _,p=new _,g=new _,v=0,y=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:v=e[b+1].x-e[b].x,y=e[b+1].y-e[b].y,d.x=y*1,d.y=-v,d.z=y*0,g.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:v=e[b+1].x-e[b].x,y=e[b+1].y-e[b].y,d.x=y*1,d.y=-v,d.z=y*0,p.copy(d),d.x+=g.x,d.y+=g.y,d.z+=g.z,d.normalize(),l.push(d.x,d.y,d.z),g.copy(p)}for(let b=0;b<=t;b++){let m=n+b*h*i,x=Math.sin(m),M=Math.cos(m);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*x,u.y=e[S].y,u.z=e[S].x*M,o.push(u.x,u.y,u.z),f.x=b/t,f.y=S/(e.length-1),a.push(f.x,f.y);let E=l[3*S+0]*x,A=l[3*S+1],I=l[3*S+0]*M;c.push(E,A,I)}}for(let b=0;b<t;b++)for(let m=0;m<e.length-1;m++){let x=m+b*e.length,M=x,S=x+e.length,E=x+e.length+1,A=x+1;s.push(M,S,A),s.push(E,A,S)}this.setIndex(s),this.setAttribute("position",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2)),this.setAttribute("normal",new Ee(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}};var Fe=class r extends De{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],g=[],v=[];for(let y=0;y<h;y++){let b=y*f-o;for(let m=0;m<c;m++){let x=m*u-s;p.push(x,-b,0),g.push(0,0,1),v.push(m/a),v.push(1-y/l)}}for(let y=0;y<l;y++)for(let b=0;b<a;b++){let m=b+c*y,x=b+c*(y+1),M=b+1+c*(y+1),S=b+1+c*y;d.push(m,x,S),d.push(x,M,S)}this.setIndex(d),this.setAttribute("position",new Ee(p,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},hn=class r extends De{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new _,p=new re;for(let g=0;g<=i;g++){for(let v=0;v<=n;v++){let y=s+v/n*o;d.x=u*Math.cos(y),d.y=u*Math.sin(y),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let g=0;g<i;g++){let v=g*(n+1);for(let y=0;y<n;y++){let b=y+v,m=b,x=b+n+1,M=b+n+2,S=b+1;a.push(m,x,S),a.push(x,M,S)}}this.setIndex(a),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},qt=class r extends De{constructor(e=new _t([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ee(i,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;Nt.isClockWise(d)===!1&&(d=d.reverse());for(let v=0,y=p.length;v<y;v++){let b=p[v];Nt.isClockWise(b)===!0&&(p[v]=b.reverse())}let g=Nt.triangulateShape(d,p);for(let v=0,y=p.length;v<y;v++){let b=p[v];d=d.concat(b)}for(let v=0,y=d.length;v<y;v++){let b=d[v];i.push(b.x,b.y,0),s.push(0,0,1),o.push(b.x,b.y)}for(let v=0,y=g.length;v<y;v++){let b=g[v],m=b[0]+u,x=b[1]+u,M=b[2]+u;n.push(m,x,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return dc(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new r(n,e.curveSegments)}};function dc(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var je=class r extends De{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new _,f=new _,d=[],p=[],g=[],v=[];for(let y=0;y<=n;y++){let b=[],m=y/n,x=o+m*a,M=e*Math.cos(x),S=Math.sqrt(e*e-M*M),E=0;y===0&&o===0?E=.5/t:y===n&&l===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){let I=A/t,C=i+I*s;u.x=-S*Math.cos(C),u.y=M,u.z=S*Math.sin(C),p.push(u.x,u.y,u.z),f.copy(u).normalize(),g.push(f.x,f.y,f.z),v.push(I+E,1-m),b.push(c++)}h.push(b)}for(let y=0;y<n;y++)for(let b=0;b<t;b++){let m=h[y][b+1],x=h[y][b],M=h[y+1][b],S=h[y+1][b+1];(y!==0||o>0)&&d.push(m,x,S),(y!==n-1||l<Math.PI)&&d.push(x,M,S)}this.setIndex(d),this.setAttribute("position",new Ee(p,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yt=class r extends De{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new _,d=new _,p=new _;for(let g=0;g<=n;g++){let v=o+g/n*a;for(let y=0;y<=i;y++){let b=y/i*s;d.x=(e+t*Math.cos(v))*Math.cos(b),d.y=(e+t*Math.cos(v))*Math.sin(b),d.z=t*Math.sin(v),c.push(d.x,d.y,d.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(y/i),u.push(g/n)}}for(let g=1;g<=n;g++)for(let v=1;v<=i;v++){let y=(i+1)*g+v-1,b=(i+1)*(g-1)+v-1,m=(i+1)*(g-1)+v,x=(i+1)*g+v;l.push(y,b,x),l.push(b,m,x)}this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var $n=class r extends De{constructor(e=new yi(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new _,l=new _,c=new re,h=new _,u=[],f=[],d=[],p=[];g(),this.setIndex(p),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(d,2));function g(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),b(),y()}function v(m){h=e.getPointAt(m/t,h);let x=o.normals[m],M=o.binormals[m];for(let S=0;S<=i;S++){let E=S/i*Math.PI*2,A=Math.sin(E),I=-Math.cos(E);l.x=I*x.x+A*M.x,l.y=I*x.y+A*M.y,l.z=I*x.z+A*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function y(){for(let m=1;m<=t;m++)for(let x=1;x<=i;x++){let M=(i+1)*(m-1)+(x-1),S=(i+1)*m+(x-1),E=(i+1)*m+x,A=(i+1)*(m-1)+x;p.push(M,S,A),p.push(S,E,A)}}function b(){for(let m=0;m<=t;m++)for(let x=0;x<=i;x++)c.x=m/t,c.y=x/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new ys[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ma(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(Jo(i))i.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Jo(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function ht(r){let e={};for(let t=0;t<r.length;t++){let n=Ma(r[t]);for(let i in n)e[i]=n[i]}return e}function Jo(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}var Oe=class extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pa,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ns(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var un=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bs=class extends un{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cr,endingEnd:Cr}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rr:s=e,a=2*t-n;break;case Pr:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rr:o=e,l=2*n-t;break;case Pr:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),g=p*p,v=g*p,y=-f*v+2*f*g-f*p,b=(1+f)*v+(-1.5-2*f)*g+(-.5+f)*p+1,m=(-1-d)*v+(1.5+d)*g+.5*p,x=d*v-d*g;for(let M=0;M!==a;++M)s[M]=y*o[h+M]+b*o[c+M]+m*o[l+M]+x*o[u+M];return s}},Ss=class extends un{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},Ts=class extends un{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ws=class extends un{interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),g=1-p;for(let v=0;v!==a;++v)s[v]=o[c+v]*g+o[l+v]*p;return s}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let g=o[c+p],v=o[l+p],y=d*f+p*2,b=u[y],m=u[y+1],x=e*f+p*2,M=h[x],S=h[x+1],E=(n-t)/(i-t),A,I,C,D,L;for(let k=0;k<8;k++){A=E*E,I=A*E,C=1-E,D=C*C,L=D*C;let U=L*t+3*D*E*b+3*C*A*M+I*i-n;if(Math.abs(U)<1e-10)break;let q=3*D*(b-t)+6*C*E*(M-b)+3*A*(i-M);if(Math.abs(q)<1e-10)break;E=E-U/q,E=Math.max(0,Math.min(1,E))}s[p]=L*g+3*D*E*m+3*C*A*S+I*v}return s}},vt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ns(t,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ns(e.times,Array),values:ns(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ts(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ss(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ws(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ui:t=this.InterpolantFactoryMethodDiscrete;break;case ls:t=this.InterpolantFactoryMethodLinear;break;case rs:t=this.InterpolantFactoryMethodSmooth;break;case Er:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return He("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ui;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return rs;case this.InterpolantFactoryMethodBezier:return Er}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&rl(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===rs,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let g=t[u+p];if(g!==t[f+p]||g!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};vt.prototype.ValueTypeName="";vt.prototype.TimeBufferType=Float32Array;vt.prototype.ValueBufferType=Float32Array;vt.prototype.DefaultInterpolation=ls;var dn=class extends vt{constructor(e,t,n){super(e,t,n)}};dn.prototype.ValueTypeName="bool";dn.prototype.ValueBufferType=Array;dn.prototype.DefaultInterpolation=ui;dn.prototype.InterpolantFactoryMethodLinear=void 0;dn.prototype.InterpolantFactoryMethodSmooth=void 0;var As=class extends vt{constructor(e,t,n,i){super(e,t,n,i)}};As.prototype.ValueTypeName="color";var Es=class extends vt{constructor(e,t,n,i){super(e,t,n,i)}};Es.prototype.ValueTypeName="number";var Cs=class extends un{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Le.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ai=class extends vt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Cs(this.times,this.values,this.getValueSize(),e)}};Ai.prototype.ValueTypeName="quaternion";Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var fn=class extends vt{constructor(e,t,n){super(e,t,n)}};fn.prototype.ValueTypeName="string";fn.prototype.ValueBufferType=Array;fn.prototype.DefaultInterpolation=ui;fn.prototype.InterpolantFactoryMethodLinear=void 0;fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends vt{constructor(e,t,n,i){super(e,t,n,i)}};Rs.prototype.ValueTypeName="vector";var Ps=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ba=new Ps,Is=class{constructor(e){this.manager=e!==void 0?e:ba,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Is.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var pr=new Ze,Ko=new _,Qo=new _,kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=no,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ko),Qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qo),t.updateMatrixWorld(),pr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pr,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===di||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},is=new _,ss=new Le,Ut=new _,Ds=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(is,ss,Ut),Ut.x===1&&Ut.y===1&&Ut.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,ss,Ut.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(is,ss,Ut),Ut.x===1&&Ut.y===1&&Ut.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,ss,Ut.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rn=new _,jo=new re,ea=new re,Us=class extends Ds{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ri*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fi*2*Math.atan(Math.tan(ri*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rn.x,rn.y).multiplyScalar(-e/rn.z),rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rn.x,rn.y).multiplyScalar(-e/rn.z)}getViewSize(e,t){return this.getViewBounds(e,jo,ea),t.subVectors(ea,jo)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ri*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vr=class extends kr{constructor(){super(new Us(90,1,.5,500)),this.isPointLightShadow=!0}},Ei=class extends Ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vr}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var oo="\\[\\]\\.:\\/",fc=new RegExp("["+oo+"]","g"),ao="[^"+oo+"]",pc="[^"+oo.replace("\\.","")+"]",mc=/((?:WC+[\/:])*)/.source.replace("WC",ao),gc=/(WCOD+)?/.source.replace("WCOD",pc),xc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ao),_c=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ao),vc=new RegExp("^"+mc+gc+xc+_c+"$"),yc=["material","materials","bones","map"],Gr=class{constructor(e,t,n){let i=n||ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ke=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fc,"")}static parseTrackName(e){let t=vc.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);yc.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=Gr;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xd=new Float32Array(1);var ta=new Ze,$t=class{constructor(e,t,n=0,i=1/0){this.ray=new Ke(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new pi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ta.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ta),this}intersectObject(e,t=!0,n=[]){return Hr(e,this,n,t),n.sort(na),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Hr(e[i],this,n,t);return n.sort(na),n}};function na(r,e){return r.distance-e.distance}function Hr(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Hr(s[o],e,t,!0)}}var fo=class fo{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};fo.prototype.isMatrix2=!0;var Wr=fo;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");var Mc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bc=`#ifdef USE_ALPHAHASH
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
#endif`,Sc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ac=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ec=`#ifdef USE_AOMAP
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
#endif`,Cc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rc=`#ifdef USE_BATCHING
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
#endif`,Pc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ic=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uc=`#ifdef USE_IRIDESCENCE
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
#endif`,Nc=`#ifdef USE_BUMPMAP
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
#endif`,Fc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Vc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wc=`#define PI 3.141592653589793
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
} // validated`,Xc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qc=`vec3 transformedNormal = objectNormal;
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
#endif`,Yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jc=`#ifdef USE_ENVMAP
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
#endif`,eh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,th=`#ifdef USE_ENVMAP
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
#endif`,nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
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
#endif`,sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ah=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lh=`#ifdef USE_GRADIENTMAP
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
}`,ch=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dh=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fh=`#ifdef USE_ENVMAP
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
#endif`,ph=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_h=`PhysicalMaterial material;
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
#endif`,vh=`uniform sampler2D dfgLUT;
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
}`,yh=`
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
#endif`,Mh=`#if defined( RE_IndirectDiffuse )
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
#endif`,bh=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sh=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Th=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ah=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ch=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ih=`#if defined( USE_POINTS_UV )
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
#endif`,Lh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oh=`#ifdef USE_MORPHTARGETS
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
#endif`,Bh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wh=`#ifdef USE_NORMALMAP
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
#endif`,Xh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,su=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ru=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ou=`float getShadowMask() {
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
}`,au=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lu=`#ifdef USE_SKINNING
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
#endif`,cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hu=`#ifdef USE_SKINNING
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
#endif`,uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mu=`#ifdef USE_TRANSMISSION
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
#endif`,gu=`#ifdef USE_TRANSMISSION
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
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bu=`uniform sampler2D t2D;
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
}`,Su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Au=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`#include <common>
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
}`,Cu=`#if DEPTH_PACKING == 3200
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
}`,Ru=`#define DISTANCE
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
}`,Pu=`#define DISTANCE
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
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Du=`uniform float scale;
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
}`,Uu=`uniform vec3 diffuse;
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
}`,Nu=`#include <common>
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
}`,Fu=`uniform vec3 diffuse;
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
}`,Ou=`#define LAMBERT
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
}`,Bu=`#define LAMBERT
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
}`,zu=`#define MATCAP
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
}`,ku=`#define MATCAP
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
}`,Vu=`#define NORMAL
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
}`,Gu=`#define NORMAL
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
}`,Hu=`#define PHONG
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
}`,Wu=`#define PHONG
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
}`,Xu=`#define STANDARD
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
}`,qu=`#define STANDARD
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
}`,Yu=`#define TOON
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
}`,$u=`#define TOON
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
}`,Zu=`uniform float size;
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
}`,Ju=`uniform vec3 diffuse;
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
}`,Ku=`#include <common>
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
}`,Qu=`uniform vec3 color;
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
}`,ju=`uniform float rotation;
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
}`,ed=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:Mc,alphahash_pars_fragment:bc,alphamap_fragment:Sc,alphamap_pars_fragment:Tc,alphatest_fragment:wc,alphatest_pars_fragment:Ac,aomap_fragment:Ec,aomap_pars_fragment:Cc,batching_pars_vertex:Rc,batching_vertex:Pc,begin_vertex:Ic,beginnormal_vertex:Lc,bsdfs:Dc,iridescence_fragment:Uc,bumpmap_pars_fragment:Nc,clipping_planes_fragment:Fc,clipping_planes_pars_fragment:Oc,clipping_planes_pars_vertex:Bc,clipping_planes_vertex:zc,color_fragment:kc,color_pars_fragment:Vc,color_pars_vertex:Gc,color_vertex:Hc,common:Wc,cube_uv_reflection_fragment:Xc,defaultnormal_vertex:qc,displacementmap_pars_vertex:Yc,displacementmap_vertex:$c,emissivemap_fragment:Zc,emissivemap_pars_fragment:Jc,colorspace_fragment:Kc,colorspace_pars_fragment:Qc,envmap_fragment:jc,envmap_common_pars_fragment:eh,envmap_pars_fragment:th,envmap_pars_vertex:nh,envmap_physical_pars_fragment:fh,envmap_vertex:ih,fog_vertex:sh,fog_pars_vertex:rh,fog_fragment:oh,fog_pars_fragment:ah,gradientmap_pars_fragment:lh,lightmap_pars_fragment:ch,lights_lambert_fragment:hh,lights_lambert_pars_fragment:uh,lights_pars_begin:dh,lights_toon_fragment:ph,lights_toon_pars_fragment:mh,lights_phong_fragment:gh,lights_phong_pars_fragment:xh,lights_physical_fragment:_h,lights_physical_pars_fragment:vh,lights_fragment_begin:yh,lights_fragment_maps:Mh,lights_fragment_end:bh,lightprobes_pars_fragment:Sh,logdepthbuf_fragment:Th,logdepthbuf_pars_fragment:wh,logdepthbuf_pars_vertex:Ah,logdepthbuf_vertex:Eh,map_fragment:Ch,map_pars_fragment:Rh,map_particle_fragment:Ph,map_particle_pars_fragment:Ih,metalnessmap_fragment:Lh,metalnessmap_pars_fragment:Dh,morphinstance_vertex:Uh,morphcolor_vertex:Nh,morphnormal_vertex:Fh,morphtarget_pars_vertex:Oh,morphtarget_vertex:Bh,normal_fragment_begin:zh,normal_fragment_maps:kh,normal_pars_fragment:Vh,normal_pars_vertex:Gh,normal_vertex:Hh,normalmap_pars_fragment:Wh,clearcoat_normal_fragment_begin:Xh,clearcoat_normal_fragment_maps:qh,clearcoat_pars_fragment:Yh,iridescence_pars_fragment:$h,opaque_fragment:Zh,packing:Jh,premultiplied_alpha_fragment:Kh,project_vertex:Qh,dithering_fragment:jh,dithering_pars_fragment:eu,roughnessmap_fragment:tu,roughnessmap_pars_fragment:nu,shadowmap_pars_fragment:iu,shadowmap_pars_vertex:su,shadowmap_vertex:ru,shadowmask_pars_fragment:ou,skinbase_vertex:au,skinning_pars_vertex:lu,skinning_vertex:cu,skinnormal_vertex:hu,specularmap_fragment:uu,specularmap_pars_fragment:du,tonemapping_fragment:fu,tonemapping_pars_fragment:pu,transmission_fragment:mu,transmission_pars_fragment:gu,uv_pars_fragment:xu,uv_pars_vertex:_u,uv_vertex:vu,worldpos_vertex:yu,background_vert:Mu,background_frag:bu,backgroundCube_vert:Su,backgroundCube_frag:Tu,cube_vert:wu,cube_frag:Au,depth_vert:Eu,depth_frag:Cu,distance_vert:Ru,distance_frag:Pu,equirect_vert:Iu,equirect_frag:Lu,linedashed_vert:Du,linedashed_frag:Uu,meshbasic_vert:Nu,meshbasic_frag:Fu,meshlambert_vert:Ou,meshlambert_frag:Bu,meshmatcap_vert:zu,meshmatcap_frag:ku,meshnormal_vert:Vu,meshnormal_frag:Gu,meshphong_vert:Hu,meshphong_frag:Wu,meshphysical_vert:Xu,meshphysical_frag:qu,meshtoon_vert:Yu,meshtoon_frag:$u,points_vert:Zu,points_frag:Ju,shadow_vert:Ku,shadow_frag:Qu,sprite_vert:ju,sprite_frag:ed},ce={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new _},probesMax:{value:new _},probesResolution:{value:new _}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Sa={basic:{uniforms:ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:ht([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:ht([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:ht([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:ht([ce.points,ce.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:ht([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:ht([ce.common,ce.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:ht([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:ht([ce.sprite,ce.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distance:{uniforms:ht([ce.common,ce.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distance_vert,fragmentShader:Pe.distance_frag},shadow:{uniforms:ht([ce.lights,ce.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Sa.physical={uniforms:ht([Sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var td=new Ce;td.set(-1,0,0,0,1,0,0,0,1);var k0={[Yr]:"LINEAR_TONE_MAPPING",[$r]:"REINHARD_TONE_MAPPING",[Zr]:"CINEON_TONE_MAPPING",[Jr]:"ACES_FILMIC_TONE_MAPPING",[Qr]:"AGX_TONE_MAPPING",[jr]:"NEUTRAL_TONE_MAPPING",[Kr]:"CUSTOM_TONE_MAPPING"};var V0=new Float32Array(16),G0=new Float32Array(9),H0=new Float32Array(4);var W0={[Yr]:"Linear",[$r]:"Reinhard",[Zr]:"Cineon",[Jr]:"ACESFilmic",[Qr]:"AgX",[jr]:"Neutral",[Kr]:"Custom"};var X0={[ia]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};var q0={[la]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[ca]:"ENVMAP_TYPE_CUBE_UV"};var Y0={[to]:"ENVMAP_MODE_REFRACTION"};var $0={[qr]:"ENVMAP_BLENDING_MULTIPLY",[oa]:"ENVMAP_BLENDING_MIX",[aa]:"ENVMAP_BLENDING_ADD"};var nd=new Ce;nd.set(-1,0,0,0,1,0,0,0,1);var Z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var Z={ink:"#f7fafc",muted:"#acc3d3",navy:"#0c2033",gold:"#f6d484",pink:"#f3b2cf",mint:"#8fe1c3",blue:"#8bc8f3"};function Fs(r,e,t,n,i,s=16){s=Math.min(s,n/2,i/2),r.beginPath(),r.moveTo(e+s,t),r.lineTo(e+n-s,t),r.quadraticCurveTo(e+n,t,e+n,t+s),r.lineTo(e+n,t+i-s),r.quadraticCurveTo(e+n,t+i,e+n-s,t+i),r.lineTo(e+s,t+i),r.quadraticCurveTo(e,t+i,e,t+i-s),r.lineTo(e,t+s),r.quadraticCurveTo(e,t,e+s,t),r.closePath()}function et(r,e,t,n,i,{top:s="#254960",bottom:o="#18364c",stroke:a="#42647a",radius:l=16}={}){let c=r.createLinearGradient(e,t,e,t+i);c.addColorStop(0,s),c.addColorStop(1,o),r.fillStyle=c,Fs(r,e,t,n,i,l),r.fill(),r.strokeStyle=a,r.lineWidth=1.5,r.stroke()}function wt(r,e,t){let n=r.createLinearGradient(0,0,e,t);n.addColorStop(0,"#173d56"),n.addColorStop(.55,"#102b42"),n.addColorStop(1,"#081c2e"),r.fillStyle=n,r.fillRect(0,0,e,t),r.save(),r.globalAlpha=.13,r.strokeStyle="#79b3d1",r.lineWidth=1;for(let i=0;i<8;i++)r.beginPath(),r.arc(e*.98,t*.04,90+i*45,0,Math.PI*2),r.stroke();r.restore(),r.fillStyle=Z.gold,r.fillRect(32,0,96,4)}function le(r,e,t,n,i=28,s=Z.ink,o="600",a){r.font=`${o} ${i}px Arial`,r.fillStyle=s,r.textAlign="left",r.textBaseline="alphabetic",Number.isFinite(a)?r.fillText(e,t,n,a):r.fillText(e,t,n)}function In(r,e,t,n,i,s=Z.gold){if(r.save(),r.translate(t,n),r.scale(i/48,i/48),r.lineWidth=2.8,r.lineCap="round",r.lineJoin="round",r.strokeStyle=s,r.fillStyle=s,e==="ball")r.beginPath(),r.arc(0,0,18,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(-18,0),r.lineTo(18,0),r.stroke(),r.fillStyle="#183a51",r.beginPath(),r.arc(0,0,6,0,Math.PI*2),r.fill(),r.stroke();else if(e==="puff"){r.beginPath(),r.arc(0,3,16,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(-14,-5),r.lineTo(-15,-19),r.lineTo(-5,-11),r.moveTo(14,-5),r.lineTo(15,-19),r.lineTo(5,-11),r.stroke(),r.beginPath(),r.arc(0,-8,5,0,Math.PI*1.5),r.stroke();for(let o of[-6,6])r.beginPath(),r.arc(o,3,2,0,Math.PI*2),r.fill();r.beginPath(),r.arc(0,7,5,.2,Math.PI-.2),r.stroke()}else if(e==="book")Fs(r,-20,-15,40,32,4),r.stroke(),r.beginPath(),r.moveTo(0,-15),r.lineTo(0,17),r.moveTo(-14,-6),r.lineTo(-5,-6),r.moveTo(5,-6),r.lineTo(14,-6),r.stroke();else if(e==="golf")r.beginPath(),r.ellipse(0,13,18,6,0,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(-3,13),r.lineTo(-3,-20),r.lineTo(15,-14),r.lineTo(-3,-7),r.stroke(),r.beginPath(),r.arc(10,8,3,0,Math.PI*2),r.fill();else if(e==="target"){for(let o of[19,12,4])r.beginPath(),r.arc(0,0,o,0,Math.PI*2),r.stroke();r.beginPath(),r.moveTo(0,0),r.lineTo(20,-20),r.moveTo(12,-20),r.lineTo(20,-20),r.lineTo(20,-12),r.stroke()}else r.beginPath(),r.moveTo(-6,-12),r.lineTo(12,0),r.lineTo(-6,12),r.closePath(),r.fill();r.restore()}function Ta(r,e,t,n,i,s){let o=e==="Warehouse mini-golf"?{title:"Warehouse mini-golf",sub:"Six holes \xB7 swing your putter \xB7 lowest score wins",icon:"golf",accent:Z.mint}:e==="Paper-plane challenge"?{title:"Paper-plane challenge",sub:"Five glides \xB7 three hoops \xB7 beat your best",icon:"play",accent:Z.blue}:e==="Warehouse bowling"?{title:"Warehouse bowling",sub:"Ten pins \xB7 ten frames",icon:"target",accent:Z.blue}:e==="Play with Jigglypuff"?{title:"Jigglypuff playtime",sub:"Offer a berry or give her a high-five",icon:"puff",accent:Z.pink}:e==="Pok\xE9 Ball basketball"?{title:"Pok\xE9 Ball basketball",sub:"Ten throws \xB7 aim for the hoop",icon:"target",accent:Z.mint}:e.startsWith("Pok\xE9mon")?{title:"Pok\xE9mon hunt",sub:"Throw, discover and collect all 18 cards",icon:"ball",accent:Z.gold}:e==="Jigglypuff hide-and-seek"?{title:"Find Jigglypuff",sub:"A little hide-and-seek around the yard",icon:"puff",accent:Z.pink}:e.startsWith("Open the card")?{title:"Mollie\u2019s card album",sub:e.split(" \xB7 ")[1]+" collected \xB7 open, flip and inspect",icon:"book",accent:Z.blue}:e.startsWith("Darts")?{title:"Staff-room darts",sub:"Nine throws. How high can you score?",icon:"target",accent:Z.mint}:e.startsWith("Memory")?{title:"Memory match",sub:"Find the matching pairs",icon:"book",accent:Z.pink}:null;if(o)et(r,t,n,i,72,{top:s?"#365c70":"#21465e",bottom:s?"#25465a":"#19364b",stroke:s?o.accent:"#3b5c71"}),r.fillStyle=o.accent,Fs(r,t+1,n+15,4,42,2),r.fill(),In(r,o.icon,t+41,n+36,42,o.accent),le(r,o.title,t+82,n+31,i<600?26:29,Z.ink,"700"),le(r,i<600&&e.startsWith("Darts")?"Nine-dart challenge":o.sub,t+82,n+57,i<600?19:21,Z.muted,"400",i-125),le(r,"\u203A",t+i-35,n+47,42,s?o.accent:Z.muted,"400");else{let a=e==="Resume";et(r,t,n,i,72,{top:a?s?"#fff0c2":"#f8df9e":s?"#34566b":"#213f54",bottom:a?"#e5bd69":"#162e42",stroke:a?"#ffeabb":s?Z.gold:"#496379"}),a&&In(r,"play",t+33,n+36,25,"#173247"),le(r,e,t+(a?60:24),n+46,28,a?"#122c40":Z.ink,"700")}}function wa(r,e){wt(r,1024,768),le(r,"TF JONES  /  PLAY IN THE YARD",44,37,19,Z.blue,"700"),le(r,"Mollie\u2019s adventures",44,93,48,Z.ink,"700"),le(r,"Point with your right hand, then pull the trigger.",44,132,24,Z.muted,"400"),et(r,44,147,936,35,{top:"#173c4d",bottom:"#173c4d",stroke:"#31596a",radius:10}),le(r,e,60,172,23,Z.mint,"500",900)}function po(r,e,t,n,i){et(r,n,i-26,34,34,{top:"#355169",bottom:"#243f55",stroke:"#7190a4",radius:8}),le(r,e,n+9,i,21,Z.gold,"700"),le(r,t,n+45,i,21,Z.muted,"400")}function Aa(r){po(r,"Y","Games menu",44,663),po(r,"B","Back",325,663),po(r,"A","Replay round",548,663),r.strokeStyle="#355168",r.beginPath(),r.moveTo(44,692),r.lineTo(980,692),r.stroke(),le(r,"YOUR NEXT LITTLE ADVENTURE STARTS HERE",44,731,19,Z.blue,"700"),le(r,"Right grip to teleport",704,731,21,Z.muted,"400")}function Ea(r,e){r.clearRect(0,0,768,192),et(r,3,3,762,186,{top:"#193e54",bottom:"#102c40",stroke:"#628295",radius:24}),r.fillStyle=Z.gold,Fs(r,23,27,5,138,2),r.fill(),r.font="600 32px Arial";let t=[],n="";for(let s of e.split(/\s+/)){let o=n?n+" "+s:s;r.measureText(o).width>660&&n?(t.push(n),n=s):n=o}n&&t.push(n);let i=96-(Math.min(3,t.length)-1)*21+11;t.slice(0,3).forEach((s,o)=>le(r,s,47,i+o*42,32,Z.ink,"600"))}function Ca(r,{total:e,throws:t,best:n,last:i}){wt(r,1024,640),In(r,"target",72,66,55,Z.mint),le(r,"STAFF-ROOM DARTS",119,79,40,Z.ink,"700"),le(r,"NINE DART CHALLENGE",39,136,24,Z.muted,"700"),le(r,String(e),36,281,142,Z.gold,"700"),le(r,"POINTS",280,277,32,Z.muted,"700"),et(r,702,166,274,121,{top:"#234b5b",bottom:"#19384c",stroke:"#537382"}),le(r,"PERSONAL BEST",721,203,24,Z.muted,"600"),le(r,String(n),721,264,52,Z.mint,"700");for(let s=0;s<9;s++){let o=s<t;et(r,40+s*104,321,88,54,{top:o?"#e6c77e":"#23465b",bottom:o?"#c8a65e":"#18354a",stroke:o?"#ffe3a2":"#4a6679",radius:10}),le(r,String(s+1),72+s*104,358,28,o?"#132e41":Z.muted,"700")}et(r,40,405,936,82,{top:"#23465a",bottom:"#163349",stroke:"#466b7d"}),le(r,i,61,458,36,Z.ink,"600",890),le(r,t===9?"ROUND COMPLETE \xB7 Press A to play again":"Hold trigger \xB7 swing gently \xB7 release",40,542,32,Z.mint,"600"),le(r,t===9?"Y opens the games menu.":"Stand behind the yellow throwing line.",40,594,27,Z.muted,"400")}var Ra=new Map;function At(r,e,t="target",n=Z.gold,i=1.7){let s=[r,e,t,n].join("|"),o=Ra.get(s);if(!o){let h=document.createElement("canvas");h.width=1024,h.height=256;let u=h.getContext("2d");u.fillStyle="#0a1b2c",u.fillRect(0,0,1024,256),et(u,8,8,1008,240,{top:"#19394d",bottom:"#0b2032",stroke:n,radius:22}),u.fillStyle=n,u.fillRect(32,36,5,182),In(u,t,110,128,88,n),le(u,r,192,123,58,Z.ink,"700",790),le(u,e,194,186,26,n,"600",775),o=new Be(h),o.colorSpace=Ie,Ra.set(s,o)}let a=new Te;a.name=r+" \xB7 activity sign";let l=new Ae(new Fe(i,i/4),new we({map:o}));a.add(l);let c=new Ae(new Me(i+.055,i/4+.055,.04),new Oe({color:"#122538",roughness:.5}));return c.position.z=-.026,a.add(c),a}var Ci;function Os(){if(!Ci){let r=document.createElement("canvas");r.width=512,r.height=1024;let e=r.getContext("2d"),t=17,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296);for(let i=0;i<12;i++){let s=i*512/12,o=512/12,a=Math.floor(n()*16);e.fillStyle=`rgb(${202+a},${159+a},${102+a})`,e.fillRect(s,0,o,1024),e.fillStyle="rgba(90,54,23,.22)",e.fillRect(s,0,1,1024);for(let l=0;l<45;l++){e.strokeStyle=`rgba(103,63,28,${.035+n()*.07})`,e.lineWidth=.4+n()*.7,e.beginPath();let c=s+n()*o;e.moveTo(c,0),e.bezierCurveTo(c+n()*5,350,c-n()*5,700,c,1024),e.stroke()}for(let l=0;l<3;l++)e.fillStyle="rgba(83,51,23,.18)",e.fillRect(s,Math.floor((l+n())*341),o,1)}Ci=new Be(r),Ci.colorSpace=Ie,Ci.anisotropy=4}return new Oe({map:Ci,color:16777215,roughness:.28,metalness:.04})}var mo;function Zn(r=.5,e=.32){if(!mo){let n=document.createElement("canvas");n.width=n.height=128;let i=n.getContext("2d"),s=i.createRadialGradient(64,64,4,64,64,64);s.addColorStop(0,"rgba(4,12,20,.48)"),s.addColorStop(.55,"rgba(4,12,20,.2)"),s.addColorStop(1,"rgba(4,12,20,0)"),i.fillStyle=s,i.fillRect(0,0,128,128),mo=new Be(n)}let t=new Ae(new Fe(r,e),new we({map:mo,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1}));return t.rotation.x=-Math.PI/2,t.name="Soft contact shadow",t}function pn(r=1.4){let e=new Te;e.name="Warm arcade light fitting";let t=new Ae(new Me(r,.09,.17),new Oe({color:2504518,roughness:.6}));e.add(t);let n=new Ae(new Fe(r-.1,.115),new we({color:16770216}));return n.rotation.x=-Math.PI/2,n.position.y=-.047,e.add(n),e}function Pa(r){let e=new Ei(16768688,14,9,2);return e.name="Activity warm fill",e.castShadow=!1,e.visible=!1,r.add(e),{light:e,update(t,n){e.visible=!!n,n&&e.position.copy(n).add(new _(0,3,3.5)),t==="darts"?(e.position.set(-22.7,2.65,-11),e.visible=!0):t==="basketball"&&n?(e.position.copy(n).add(new _(0,3.3,-.8)),e.visible=!0):t==="memory"&&(e.position.set(-21.8,2.65,-12.8),e.visible=!0),e.intensity=t==="bowling"?18:12}}}var tt={left:-1.03,right:1.03,front:.08,back:6.95},Ri=[{name:"First delivery",par:2,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[]},{name:"Crate slalom",par:3,tee:{x:0,z:6.25},cup:{x:-.55,z:.72},crates:[{x:-.5,z:4.5,w:.83,d:.48},{x:.5,z:2.9,w:.83,d:.48}],ramps:[]},{name:"Loading ramp",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[],ramps:[{x:0,z:3.7,w:1.32,d:1.7,h:.23}]},{name:"Pipe pass",par:3,tee:{x:0,z:6.25},cup:{x:0,z:.72},crates:[{x:-.76,z:3.6,w:.52,d:.8},{x:.76,z:3.6,w:.52,d:.8}],walls:[{x:-.385,z:3.6,w:.09,d:1.2},{x:.385,z:3.6,w:.09,d:1.2}],ramps:[],pipe:!0},{name:"Bank holiday",par:3,tee:{x:-.5,z:6.25},cup:{x:.62,z:.72},crates:[{x:-.04,z:3.6,w:1.35,d:.28}],ramps:[]},{name:"Dispatch finale",par:4,tee:{x:.42,z:6.25},cup:{x:.5,z:.72},crates:[{x:.71,z:4.75,w:.58,d:.65},{x:-.58,z:2.05,w:.7,d:.5}],ramps:[{x:-.15,z:3.35,w:1.15,d:1.5,h:.18}]}];function Jn(r,e,t){let n=.033,i=0,s=0;for(let o of t.ramps){let a=r-o.x,l=e-o.z,c=o.w/2,h=o.d/2;if(Math.abs(a)>=c||Math.abs(l)>=h)continue;let u=Math.min(.16,c*.3),f=Math.min(1,(c-Math.abs(a))/u),d=1-Math.abs(l)/h,p=o.h*f*d;.033+p>n&&(n=.033+p,i=f<1?-Math.sign(a)*o.h*d/u:0,s=-Math.sign(l||1e-4)*o.h*f/h)}return{height:n,gx:i,gz:s}}function id(r,e){let t=Math.max(e.x-e.w/2,Math.min(e.x+e.w/2,r.x)),n=Math.max(e.z-e.d/2,Math.min(e.z+e.d/2,r.z)),i=r.x-t,s=r.z-n,o=Math.hypot(i,s);if(o>=.038)return;if(o<1e-9){let l=[[r.x-(e.x-e.w/2),-1,0],[e.x+e.w/2-r.x,1,0],[r.z-(e.z-e.d/2),0,-1],[e.z+e.d/2-r.z,0,1]].sort((c,h)=>c[0]-h[0]);[,i,s]=l[0],r.x+=i*(l[0][0]+.038+1e-4),r.z+=s*(l[0][0]+.038+1e-4)}else i/=o,s/=o,r.x+=i*(.038-o+1e-4),r.z+=s*(.038-o+1e-4);let a=r.vx*i+r.vz*s;a<0&&(r.vx-=1.68*a*i,r.vz-=1.68*a*s)}function sd(r,e,t,n,i,s){let o=i-t,a=s-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((r-t)*o+(e-n)*a)/l)):0;return Math.hypot(r-t-o*c,e-n-a*c)}function Ia(r,e,t){if(r.sunk)return;let n=Math.min(.25,Math.max(0,t)),i=Math.max(1,Math.ceil(n*240)),s=n/i;for(let o=0;o<i;o++){let a=r.x,l=r.z,c=Jn(r.x,r.z,e);r.vx-=7*c.gx*s,r.vz-=7*c.gz*s;let h=Math.hypot(r.vx,r.vz),u=Math.max(0,h-.4*s);h&&(r.vx*=u/h,r.vz*=u/h),r.x+=r.vx*s,r.z+=r.vz*s;for(let[f,d,p,g]of[["x","vx",tt.left+.038,tt.right-.038],["z","vz",tt.front+.038,tt.back-.038]])r[f]<p&&(r[f]=p,r[d]<0&&(r[d]*=-.72)),r[f]>g&&(r[f]=g,r[d]>0&&(r[d]*=-.72));for(let f of[...e.crates,...e.walls||[]])id(r,f);if(r.distance=(r.distance||0)+Math.hypot(r.x-a,r.z-l),r.y=Jn(r.x,r.z,e).height+.038,Math.hypot(r.vx,r.vz)<=1.15&&sd(e.cup.x,e.cup.z,a,l,r.x,r.z)<.115-.038*.6){r.sunk=!0,r.x=e.cup.x,r.z=e.cup.z,r.vx=r.vz=0;break}Math.hypot(r.vx,r.vz)<.035&&Math.hypot(c.gx,c.gz)<.001&&(r.vx=r.vz=0)}}function La(r,e,t,n,i){if(i<=0||i>.1)return null;let s=(e.x-r.x)/i,o=(e.z-r.z)/i,a=Math.hypot(s,o);if(a<.18||a>12)return null;let l=Math.max(1,Math.ceil(Math.hypot(e.x-r.x,e.z-r.z)/.012));for(let c=1;c<=l;c++){let h=r.x+(e.x-r.x)*c/l,u=r.z+(e.z-r.z)*c/l,f=Math.max(-.125,Math.min(.125,(n.x-h)*t.x+(n.z-u)*t.z)),d=n.x-h-t.x*f,p=n.z-u-t.z*f,g=Math.hypot(d,p);if(g>.072||g<1e-5)continue;let v=d/g,y=p/g,b=s*v+o*y;if(b<.18)continue;let m=Math.min(4.8,b*1.15);return{vx:v*m,vz:y*m}}return null}var Zt;function rd(){if(!Zt){let r=document.createElement("canvas");r.width=256,r.height=512;let e=r.getContext("2d");e.fillStyle="#337956",e.fillRect(0,0,256,512);for(let n=0;n<8;n++)e.fillStyle=n%2?"#387f59":"#327651",e.fillRect(0,n*64,256,64);let t=31;for(let n=0;n<8500;n++){t=t*1664525+1013904223>>>0;let i=t%256;t=t*1664525+1013904223>>>0;let s=t%512;e.fillStyle=n%3?"rgba(8,36,17,.08)":"rgba(187,213,139,.1)",e.fillRect(i,s,1,2)}Zt=new Be(r),Zt.colorSpace=Ie,Zt.wrapS=Zt.wrapT=hi,Zt.repeat.set(1/(tt.right-tt.left),1/(tt.back-tt.front)),Zt.offset.set(.5,1.02),Zt.anisotropy=4}return new Oe({map:Zt,roughness:.95})}function Da(r,e,t,n){let i=new Te;i.name="Warehouse mini-golf",i.visible=!1,e.add(i);let s=new Te;s.name="Six-hole warehouse course",i.add(s);let o=T=>new Oe({color:T,roughness:.65}),a=(T,N,B,$,K,P=s)=>{let Q=new Ae(T,N);return Q.position.set(B,$,K),P.add(Q),Q},l=a(new je(.038,20,16),o("#fff7dc"),0,0,0,i);l.name="Mini-golf ball";let c=Zn(.16,.16);i.add(c);let h=new Te;h.name="Controller putter",i.add(h);let u=a(new ct(.009,.009,1,8),new Oe({color:11978187,metalness:.65,roughness:.25}),0,0,0,h),f=a(new ct(.018,.018,.17,12),o("#172d41"),0,0,0,h),d=a(new Me(.25,.058,.068),new Oe({color:14148062,metalness:.55,roughness:.27}),0,0,0,h),p=a(new Me(.21,.026,.003),o("#245343"),0,0,-.035,d);a(new Me(.008,.003,.052),new we({color:16766588}),0,.03,0,d);let g=document.createElement("canvas");g.width=1024,g.height=640;let v=g.getContext("2d"),y=new Be(g);y.colorSpace=Ie;let b=a(new Fe(2.2,1.375),new we({map:y}),0,0,0,i);b.name="Mini-golf scorecard";let m=null,x=!1,M=0,S=0,E=[],A=null,I=!1,C=!1,D=null,L=!1,k=!1,w=!1,U=0,q="Hold trigger and swing the putter through the ball.",F=null,O=()=>E.reduce((T,N)=>T+N,0),H=Ri.reduce((T,N)=>T+N.par,0),z=()=>Ri[M];try{let T=localStorage.getItem("tfj-mini-golf-best-v1"),N=Number(T);T!==null&&Number.isFinite(N)&&N>=6&&(A=N)}catch{}function G(){wt(v,1024,640),le(v,"TFJ MINI GOLF  /  SIX HOLES",32,55,29,Z.mint,"700"),le(v,w?"COURSE COMPLETE":`${M+1} / 6  \xB7  ${z().name.toUpperCase()}`,32,117,42,Z.ink,"700",954),le(v,w?`${O()} strokes  \xB7  Par ${H}`:`${S} strokes  \xB7  Par ${z().par}`,32,190,43,Z.gold,"700");for(let T=0;T<6;T++){let N=32+T*161,B=T===M;et(v,N,227,151,177,{top:B?"#26594a":"#183d43",bottom:"#0d2934",stroke:B?Z.gold:"#527779"}),le(v,`HOLE ${T+1}`,N+13,260,24,B?Z.gold:Z.muted),le(v,E[T]===void 0?"\u2014":String(E[T]),N+18,334,58,Z.ink,"700"),le(v,`PAR ${Ri[T].par}`,N+13,382,22,Z.muted)}le(v,`TOTAL ${O()+(k?0:S)}  \xB7  BEST ${A??"\u2014"}`,32,459,32,Z.mint,"700"),le(v,q,32,513,26,Z.ink,"600",954),le(v,w?"A  PLAY AGAIN":k?"A  NEXT HOLE":"A  MOVE BESIDE BALL",32,578,27,Z.gold,"700"),le(v,"Y  PAUSE / MENU",684,578,26,Z.muted),y.needsUpdate=!0}function pe(){for(let T of[3,2,1.5,4,5,6])for(let N of[-30,-29,-28,-27]){let B=!0;for(let $=-1.1;$<=1.1;$+=.275)for(let K=0;K<=7.8;K+=.25)(r.blocked(T+$,N+K,0)||Math.abs(r.groundAt(T+$,N+K,.1))>.1)&&(B=!1);if(B)return new _(T,0,N)}return null}function ne(){let T=Os();return T.roughness=.78,T}function V(T){let N=a(new Me(T.w,.25,T.d),ne(),T.x,.155,T.z);N.name="Pallet obstacle";for(let B=0;B<4;B++)a(new Me(T.w/4-.018,.026,T.d+.01),ne(),T.x+(B-1.5)*T.w/4,.293,T.z);for(let B of[-1,1])a(new Me(.025,.18,T.d+.018),o("#8d724d"),T.x+B*(T.w/2-.018),.165,T.z)}function ee(T){let $=[],K=[],P=[];for(let X=0;X<=20;X++)for(let te=0;te<=12;te++){let _e=T.x-T.w/2+T.w*te/12,ue=T.z-T.d/2+T.d*X/20;$.push(_e,Jn(_e,ue,z()).height+.002,ue),K.push(_e,-ue)}for(let X=0;X<20;X++)for(let te=0;te<12;te++){let _e=X*13+te,ue=_e+1,Se=_e+12+1,Ue=Se+1;P.push(_e,Se,ue,ue,Se,Ue)}let Q=new De;Q.setAttribute("position",new Ee($,3)),Q.setAttribute("uv",new Ee(K,2)),Q.setIndex(P),Q.computeVertexNormals();let he=ne();he.side=ot;let ge=new Ae(Q,he);ge.name="Loading ramp",s.add(ge)}function se(){for(let te of[...s.children])te.traverse(_e=>{_e.geometry?.dispose(),_e.material?.dispose()}),s.remove(te);s.position.copy(m);let T=z(),N=new _t;N.moveTo(tt.left,-tt.front),N.lineTo(tt.right,-tt.front),N.lineTo(tt.right,-tt.back),N.lineTo(tt.left,-tt.back),N.closePath();let B=new En;B.absarc(T.cup.x,-T.cup.z,.115,0,Math.PI*2,!1),N.holes.push(B),a(new Me(2.2,.027,7),o("#173848"),0,.016,3.51);let $=a(new qt(N,40),rd(),0,.033,0);$.rotation.x=-Math.PI/2,$.name="Putting green";for(let te of[-1.065,1.065])a(new Me(.07,.14,7),o("#203c4b"),te,.099,3.51),a(new Me(.045,.006,7),new Oe({color:15320952,emissive:11770199,emissiveIntensity:.25}),te,.172,3.51);for(let te of[.045,6.985])a(new Me(2.2,.14,.07),o("#203c4b"),0,.099,te);let K=a(new gi(.115,40),new we({color:398620}),T.cup.x,.034,T.cup.z);K.rotation.x=-Math.PI/2;let P=a(new hn(.115,.115+.015,40),new we({color:16768133,side:ot}),T.cup.x,.035,T.cup.z);P.rotation.x=-Math.PI/2,a(new ct(.009,.009,.68,8),o("#e2e7d7"),T.cup.x,.37,T.cup.z);let Q=new De;Q.setAttribute("position",new Ee([0,0,0,.23,-.035,0,0,-.14,0],3)),Q.computeVertexNormals();let he=a(Q,new we({color:16176260,side:ot}),T.cup.x,.7,T.cup.z);he.name="Hole flag";let ge=a(new hn(.105,.123,32),new we({color:16049069,side:ot}),T.tee.x,.035,T.tee.z);if(ge.rotation.x=-Math.PI/2,T.crates.forEach(V),T.ramps.forEach(ee),T.pipe){let te=new _t;for(let ue=0;ue<=32;ue++){let Se=Math.PI-ue*Math.PI/32,Ue=Math.cos(Se)*.43,qe=Math.sin(Se)*.43;ue?te.lineTo(Ue,qe):te.moveTo(Ue,qe)}for(let ue=0;ue<=32;ue++){let Se=ue*Math.PI/32;te.lineTo(Math.cos(Se)*.34,Math.sin(Se)*.34)}te.closePath();let _e=a(new Rn(te,{depth:1.2,bevelEnabled:!1,steps:1}),o("#46839b"),0,.033,3);_e.name="Warehouse pipe tunnel"}b.position.copy(m).add(new _(0,2.42,.3)),a(new Me(2.28,1.45,.05),o("#11283b"),0,2.42,.26);for(let te of[-1.09,1.09])a(new Me(.035,3.55,.035),o("#254252"),te,1.78,.26);let X=At("TFJ MINI GOLF","WAREHOUSE  /  SIX-HOLE PUTTING CLUB","golf",Z.mint,2.05);X.position.set(0,3.5,.3),s.add(X)}function de(){return F&&!F.sunk&&Math.hypot(F.vx,F.vz)>.04}function oe(T,N){return!r.blocked(m.x+T,m.z+N,0)&&Math.abs(r.groundAt(m.x+T,m.z+N,.1))<.1&&![...z().crates,...z().walls||[]].some(B=>Math.abs(T-B.x)<B.w/2+.2&&Math.abs(N-B.z)<B.d/2+.2)}function J(){if(!F||de()||k)return!1;let T=[[0,.78],[-.65,.4],[.65,.4],[-.75,0],[.75,0],[0,-.75]];for(let[N,B]of T){let $=F.x+N,K=F.z+B;if(oe($,K)&&r.xrTeleport(m.x+$,0,m.z+K))return r.xrFace?.(Math.atan2(N,B)),ae(),!0}return t("Walk or teleport beside the ball to take your next putt."),!1}function be(){S=0,k=w=!1,U=0,I=C=!1,D=null;let T=z();F={x:T.tee.x,z:T.tee.z,y:.033+.038,vx:0,vz:0,sunk:!1,distance:0},l.visible=!0,l.scale.setScalar(1),c.visible=!0,se(),W(),q="Hold trigger and swing the putter through the ball.",J(),G()}function xe(){let T=pe();return!T||!r.xrTeleport(T.x,0,T.z+7.03)?!1:(m=T,M=0,E=[],x=i.visible=!0,L=!1,be(),t("Mini-golf! Hold trigger and putt. A moves you beside a stopped ball. Six holes to play."),!0)}function ae(){I=C=!1,D=null,h.visible=!1}function fe(){x=i.visible=I=!1,D=null,C=!1,h.visible=!1}function R(T){if(k)return;k=!0,I=C=!1,D=null,E.push(S),U=T?.8:0;let N=z(),B=T?S===1?"Hole in one!":S<N.par?"Under par!":S===N.par?"Par!":"Nice putt!":"Eight-stroke limit reached.";if(w=M===Ri.length-1,w){let $=O(),K=$<=H?"Gold":$<=H+6?"Silver":"Bronze";A=A===null?$:Math.min(A,$);try{localStorage.setItem("tfj-mini-golf-best-v1",String(A))}catch{}q=`${K} medal! ${$} strokes across six holes.`,t(q)}else q=`${B} ${S} strokes. A for hole ${M+2}.`,t(q);n(T?.7:.2),G()}function W(){l.position.set(m.x+F.x,m.y+F.y,m.z+F.z),c.position.set(m.x+F.x,m.y+Jn(F.x,F.z,z()).height+.003,m.z+F.z)}function Y(T){if(!T||T.visible===!1)return h.visible=!1,D=null,null;let N=T.getWorldPosition(new _),B=new _(0,0,-1).applyQuaternion(T.getWorldQuaternion(new Le));B.y=0,B.lengthSq()<.01&&B.set(0,0,-1),B.normalize();let $=N.clone().addScaledVector(B,.15);$.y=m.y+Jn($.x-m.x,$.z-m.z,z()).height+.038;let K=N.clone().sub($),P=K.length();return P<.12||P>1.9?(h.visible=!1,D=null,null):(h.visible=!k,d.position.copy($),d.rotation.set(0,Math.atan2(-B.x,-B.z),0),u.position.copy(N).add($).multiplyScalar(.5),u.quaternion.setFromUnitVectors(new _(0,1,0),K.clone().normalize()),u.scale.y=P,f.position.copy(N).addScaledVector(K.clone().normalize(),-.045),f.quaternion.copy(u.quaternion),{x:$.x-m.x,z:$.z-m.z,side:{x:-B.z,z:B.x}})}function ie(T,N){if(!x)return;let B=Math.max(0,Math.min(.1,T.dt)),$=!!T.right?.gamepad?.buttons[0]?.pressed,K=!!T.right?.gamepad?.buttons[4]?.pressed,P=K&&!L;if(L=K,N){ae();return}if(P)if(k){w?(M=0,E=[]):M++,be();return}else de()||J();$?I=!k:(I=!1,C=!0,D=null);let Q=Y(T.controller);if($&&C&&!k&&!de()&&Q&&D){let he=La(D,Q,Q.side,F,B);he&&(F.vx=he.vx,F.vz=he.vz,S++,C=!1,n(.3),q=`Putt ${S} \xB7 wait for the ball to stop.`,G())}if(D=$&&Q?{x:Q.x,z:Q.z}:null,!k){let he=F.x,ge=F.z;Ia(F,z(),B);let X=F.x-he,te=F.z-ge,_e=Math.hypot(X,te);_e&&l.rotateOnWorldAxis(new _(te,0,-X).normalize(),_e/.038),W(),F.sunk?R(!0):!de()&&S>=8?R(!1):!de()&&q.startsWith("Putt")&&(q="Ball stopped. A moves you beside it for the next putt.",G())}U>0&&(U=Math.max(0,U-B),l.position.y=m.y+.033+.038-(.8-U)*.2,l.scale.setScalar(Math.max(.12,U/.8)),c.visible=!1,U||(l.visible=!1))}return{root:i,course:s,putter:h,head:d,board:b,ball:l,start:xe,stop:fe,cancel:ae,tick:ie,moveBesideBall:J,get active(){return x},get origin(){return m},get held(){return I},get state(){return F},get hole(){return M},get strokes(){return S},get scores(){return E},get total(){return O()},get holeReady(){return k},get complete(){return w},get best(){return A},get layout(){return z()}}}function od(r,e,t,n=.48){if(r.z<=t.z||e.z>t.z)return!1;let i=(r.z-t.z)/(r.z-e.z);return Math.hypot(r.x+(e.x-r.x)*i-t.x,r.y+(e.y-r.y)*i-t.y)<n}function ad(r,e,t){let n=e.clone(),i=Math.hypot(n.x,n.z);n.x*=Math.exp(-.16*t),n.z*=Math.exp(-.16*t);let s=-.25-1.1/Math.max(.5,i);return n.y+=(s-n.y)*(1-Math.exp(-1.4*t)),i<1&&(n.y-=2.5*t),{p:r.clone().addScaledVector(n,t),v:n}}function Ua(r,e,t,n){let i=new Te;i.name="Warehouse paper-plane challenge",i.visible=!1,e.add(i);let s=new Te;i.add(s);let o=ne=>new Oe({color:ne,roughness:.7,side:ot}),a=new De;a.setAttribute("position",new Ee([0,0,-.28,-.25,0,.2,0,.055,.1,0,0,-.28,0,.055,.1,.25,0,.2,0,0,-.28,0,-.045,.17,0,.055,.1],3)),a.computeVertexNormals();let l=new Ae(a,o("#fff4cf"));l.name="Folded paper plane",l.visible=!1,i.add(l);let c=new Lt(new De().setFromPoints([new _(0,0,-.28),new _(0,.056,.1)]),new St({color:7576243}));l.add(c);let h=r.colliders.map(ne=>new Je(new _(ne.min.x,ne.min.y,ne.min.z),new _(ne.max.x,ne.max.y,ne.max.z)).expandByScalar(.06)),u=document.createElement("canvas");u.width=1024,u.height=640;let f=u.getContext("2d"),d=new Be(u);d.colorSpace=Ie;let p=new Ae(new Fe(1.6,1),new we({map:d}));p.name="Paper-plane scoreboard",i.add(p);let g=!1,v=!1,y=null,b=null,m=[],x=[],M=0,S=!1,E=!1,A=!1,I=0,C=0,D=0,L=0,k="Five planes. Aim through the hoops!";try{D=Number(localStorage.getItem("tfj-planes-best-v1"))||0}catch{}function w(){wt(f,1024,640),le(f,"PAPER-PLANE CHALLENGE",35,68,44,Z.gold),le(f,`${C} points`,35,190,72),le(f,`BEST ${D}`,660,180,35,Z.mint),le(f,`${I} / 5 planes`,35,280,44),le(f,`Longest glide: ${L.toFixed(1)} m`,35,349,32,Z.mint),le(f,k,35,428,29,Z.ink,"600",950),le(f,I===5&&!y?"Press A to fly another round":"Hold trigger \xB7 swing forwards \xB7 release",35,520,32),le(f,"10 points per hoop \xB7 Y: pause/menu",35,590,27,Z.muted),d.needsUpdate=!0}function U(){for(let ne of[3,2,1.5,4,5])for(let V of[-30,-29,-28]){let ee=!0;for(let se=-1;se<=1;se+=.5)for(let de=0;de<=7.8;de+=.4)(r.blocked(ne+se,V+de,0)||Math.abs(r.groundAt(ne+se,V+de,.1))>.1)&&(ee=!1);if(ee)return new _(ne,0,V)}return null}function q(){for(let ee of[...s.children])ee.traverse(se=>{se.geometry?.dispose(),se.material?.dispose()}),s.remove(ee);m=[];for(let ee=0;ee<3;ee++){let se=b.clone().add(new _(0,1.5-ee*.22,5-ee*1.8)),de=new Ae(new Yt(.6,.035,12,48),o(ee===0?"#f6d484":ee===1?"#8fe1c3":"#8bc8f3"));de.position.copy(se),s.add(de),m.push({center:se,mesh:de});let oe=new Ae(new ct(.018,.018,se.y,8),o("#36576a"));oe.position.set(se.x-.64,se.y/2,se.z),s.add(oe)}p.position.copy(b).add(new _(0,2.3,-.5));let ne=At("PAPER FLIGHT CLUB","WAREHOUSE  /  FIVE PLANES \xB7 THREE HOOPS","play","#8bc8f3",2);ne.position.copy(b).add(new _(0,3.18,-.5)),s.add(ne);for(let ee of[2,5]){let se=pn(1.3);se.position.copy(b).add(new _(0,4.2,ee)),s.add(se)}let V=new Ae(new Me(2,.02,.045),o("#f6d484"));V.position.copy(b).add(new _(0,.02,6.7)),s.add(V)}function F(){I=C=L=0,y=null,v=!1,x=[],l.visible=!1,k="Five planes. Aim through the hoops!",m.forEach(ne=>ne.mesh.material.emissive?.set(0)),w()}function O(){let ne=U();return!ne||!r.xrTeleport(ne.x,0,ne.z+7.4)?!1:(b=ne,q(),g=i.visible=!0,r.xrFace?.(0),S=!1,E=!0,F(),t("Paper planes! Hold trigger, swing forwards and release towards the hoops."),!0)}function H(){g=i.visible=v=l.visible=!1,y=null,x=[],S=!1}function z(){v=!1,x=[],S=!1,E=!0,y||(l.visible=!1)}function G(ne){if(y){if(L=Math.max(L,y.distance),k=`${ne} \xB7 ${y.hits.size} hoops \xB7 ${y.distance.toFixed(1)} m`,y=null,I===5){D=Math.max(D,C);try{localStorage.setItem("tfj-planes-best-v1",String(D))}catch{}t(`Paper planes complete! ${C} points. A to replay.`)}w()}}function pe(ne,V){if(!g)return;let{dt:ee,right:se,controller:de}=ne;M+=ee;let oe=!!se?.gamepad?.buttons[0]?.pressed,J=!!se?.gamepad?.buttons[4]?.pressed;if(V){z();return}oe||(S=!0),J&&!A&&I===5&&!y&&F(),A=J;let be=de&&de.visible!==!1?de.getWorldPosition(new _):null;if(be&&oe&&!E&&S&&!y&&I<5){let xe=r.stats();Math.abs(xe.x-b.x)>1.2||xe.z<b.z+6.7||xe.z>b.z+8.2||xe.y>.15?t("Return behind the paper-plane launch line."):(v=!0,x=[],l.visible=!0)}if(v){if(!be)z();else if(l.position.copy(be),l.quaternion.copy(de.getWorldQuaternion(new Le)),x.push({time:M,p:be.clone()}),x=x.filter(xe=>M-xe.time<.14),!oe&&E){let xe=x.find(fe=>M-fe.time>=.04),ae=xe?be.clone().sub(xe.p).divideScalar(M-xe.time).clampLength(0,10):new _;v=!1,ae.length()<.8||ae.z>-.3?(l.visible=!1,t("Give your plane a gentle forward throw.")):(I++,y={p:be.clone(),v:ae,start:be.clone(),distance:0,age:0,hits:new Set},m.forEach(fe=>fe.mesh.material.emissive?.set(0)),k="In flight\u2026",w())}}if(y){let xe=Math.max(1,Math.ceil(ee/.012)),ae=ee/xe;for(let fe=0;fe<xe&&y;fe++){let R=y,W=ad(R.p,R.v,ae),Y=W.p.clone().sub(R.p),ie=Y.length(),T=new Ke(R.p,Y.normalize()),N=new _,B=!1;for(let $ of h)if($.containsPoint(R.p)||T.intersectBox($,N)&&N.distanceTo(R.p)<=ie){B=!0;break}if(B){G("Hit scenery");break}for(let $=0;$<m.length;$++)!R.hits.has($)&&od(R.p,W.p,m[$].center)&&(R.hits.add($),C+=10,m[$].mesh.material.emissive.set("#3ca58b"),n(.45),w());R.p.copy(W.p),R.v.copy(W.v),R.age+=ae,R.distance=Math.max(R.distance,Math.hypot(R.p.x-R.start.x,R.p.z-R.start.z)),l.position.copy(R.p),l.quaternion.setFromUnitVectors(new _(0,0,-1),R.v.clone().normalize()),l.rotateZ(Math.sin(R.age*3)*.04),R.p.y<.07?(l.position.y=.07,l.rotation.x=0,G("Landed")):(R.age>10||R.distance>20)&&G("Glide complete")}}E=oe}return{root:i,start:O,stop:H,cancel:z,tick:pe,get held(){return v},get flight(){return y},get origin(){return b},get rings(){return m},get throws(){return I},get score(){return C},get longest(){return L}}}function Na(r,e){let t=new Te;t.name="Bowling supporters",e.add(t);let n=[],i=0,s=0,o=!1,a=!1,l=["Head","Chest","UpperArmL","UpperArmR","LowerArmL","LowerArmR"];function c(g){t.visible=!0,i=0,s=0;for(let y of n)y.group.visible=!1,y.shadow&&(y.shadow.visible=!1);let v=[];for(let y of[5.2,3.8,6])for(let b of[-1.9,1.9,-2.4,2.4]){if(v.length===4)break;let m=g.clone().add(new _(b,0,y));r.blocked(m.x,m.z,0)||Math.abs(r.groundAt(m.x,m.z,.1))>.1||v.some(x=>x.distanceTo(m)<1)||v.push(m)}for(let y=0;y<v.length;y++){if(!n[y]){let x=globalThis.TFJCharacters.create({director:!0,shirt:["#32647b","#873f58","#b47d35","#46745c"][y]});x.group.name=`Bowling supporter ${y+1}`,x.group.scale.setScalar(.91+y*.025),x.bones=Object.fromEntries(l.map(M=>[M,x.model.getObjectByName(M)])),x.rest=Object.fromEntries(l.map(M=>[M,x.bones[M]?.quaternion.clone()])),x.shadow=Zn(.9,.6),t.add(x.shadow,x.group),n.push(x)}let b=n[y];b.group.visible=!0,b.group.position.copy(v[y]),b.base=v[y].clone(),b.shadow.visible=!0,b.shadow.position.copy(v[y]).add(new _(0,.012,0));let m=r.stats();b.group.rotation.y=Math.atan2(m.x-v[y].x,m.z-v[y].z),b.gesture="idle",b.target=new _(m.x,m.y+1.6,m.z),b.mixer.setTime(y*.73)}}function h(g=!1){i=g?3.6:2.2,o=g,a=!1}function u(){i=1.8,o=!1,a=!0}function f(g,v,y){let b=g.bones[v];if(!b)return;let m=b.parent.getWorldQuaternion(new Le),x=b.getWorldQuaternion(new Le),M=new _(0,1,0).applyQuaternion(x),S=new _(...y).normalize().applyQuaternion(g.group.getWorldQuaternion(new Le));b.quaternion.copy(m.invert().multiply(new Le().setFromUnitVectors(M,S).multiply(x))),g.model.updateMatrixWorld(!0)}function d(g,v,y={}){if(v||!t.visible)return;s+=g,i=Math.max(0,i-g);let b=r.stats();n.forEach((m,x)=>{if(!m.group.visible)return;let M=s+x*1.4,S=(o?3.6:a?1.8:2.2)-i,E=i>0&&S>=x*.11,A=!y.ball&&!y.held&&!i&&Math.sin(M*.43)>.85,I=n[(x+1)%n.length],C=y.ball||y.eye||new _(b.x,b.y+1.6,b.z);A&&I?.group.visible&&(C=I.base.clone().add(new _(0,1.5,0))),E&&(C=y.eye||new _(b.x,b.y+1.6,b.z)),m.target.copy(C);let D=Math.atan2(C.x-m.base.x,C.z-m.base.z);m.group.rotation.y+=Math.atan2(Math.sin(D-m.group.rotation.y),Math.cos(D-m.group.rotation.y))*Math.min(1,g*2.8);let L=E?a?"wave":["clap","arms-up","fist-pump","wave"][x%4]:y.held?"anticipate":A?"chat":"idle";m.gesture=L;for(let w of l)m.bones[w]&&m.bones[w].quaternion.copy(m.rest[w]);if(m.animate(g,L==="wave"?"wave":"idle"),m.group.position.set(m.base.x,m.base.y+(E?Math.max(0,Math.sin(M*7))*(o?.11:.055):0),m.base.z),m.group.rotation.z=Math.sin(M*1.2)*.012,m.shadow.material.opacity=1-(m.group.position.y-m.base.y)*3,m.model.updateMatrixWorld(!0),L==="clap"){let w=Math.sin(M*13)*.25;f(m,"UpperArmL",[-.25,-.3,.65]),f(m,"UpperArmR",[.25,-.3,.65]),f(m,"LowerArmL",[.4+w,.35,.4]),f(m,"LowerArmR",[-.4-w,.35,.4])}if(L==="arms-up"&&(f(m,"UpperArmL",[-.65,.9,0]),f(m,"UpperArmR",[.65,.9,0]),f(m,"LowerArmL",[.15,1,.12]),f(m,"LowerArmR",[-.15,1,.12])),L==="fist-pump"){let w=.65+Math.sin(M*9)*.3;f(m,"UpperArmR",[.5,w,.3]),f(m,"LowerArmR",[-.2,1,.2])}L==="anticipate"&&(f(m,"UpperArmL",[-.2,-.6,.35]),f(m,"UpperArmR",[.2,-.6,.35]),f(m,"LowerArmL",[.3,.1,.6]),f(m,"LowerArmR",[-.3,.1,.6]));let k=m.bones.Head;if(k){let w=C.x-m.base.x,U=C.z-m.base.z,q=Math.atan2(Math.sin(D-m.group.rotation.y),Math.cos(D-m.group.rotation.y)),F=Math.atan2(C.y-(m.base.y+1.6),Math.hypot(w,U));k.rotateY(ft.clamp(q,-.65,.65)),k.rotateX(-ft.clamp(F,-.4,.3)+Math.sin(M*(A?3:1.1))*.035)}m.bones.Chest&&m.bones.Chest.rotateX(y.held?.065:Math.sin(M*.9)*.018)})}function p(){i=0,t.visible=!1}return{root:t,setup:c,cheer:h,encourage:u,tick:d,stop:p,get cheering(){return i>0},get people(){return n.filter(g=>g.group.visible)}}}function Fa(r,e,t,n,i=()=>{}){let s=new Te;s.name="Warehouse bowling",s.visible=!1,e.add(s);let o=Na(r,s),a=P=>new Oe({color:P,roughness:.55}),l=(P,Q,he,ge,X,te=s)=>{let _e=new Ae(P,Q);return _e.position.set(he,ge,X),te.add(_e),_e},c=new Te;s.add(c);let h=null,u=[],f=!1,d=!1,p=null,g=[],v=0,y=!1,b=!1,m=!1,x=0,M=0,S=[],E=Array.from({length:10},()=>[]),A=0,I=0,C=0,D=!1;try{C=Number(localStorage.getItem("tfj-bowling-best-10-v1"))||0}catch{}let L=l(new je(.14,24,20),a("#5147b5"),0,.17,0);for(let[P,Q,he]of[[-.045,.12,.06],[.035,.12,.065],[0,.085,.105]])l(new je(.023,8,8),a("#12162d"),P,Q,he,L);L.visible=!1;let k=document.createElement("canvas");k.width=1536,k.height=1024;let w=k.getContext("2d"),U=new Be(k);U.colorSpace=Ie;let q=l(new Fe(3.2,3.2*2/3),new we({map:U}),0,2,0);q.name="Warehouse bowling scoreboard";let F=()=>S.reduce((P,Q)=>P+Q,0)+A,O=new Te;O.name="Bowling scoring computer",s.add(O);let H=l(new Fe(.96,.64),new we({map:U}),0,0,.046,O);H.name="Bowling computer screen",l(new Me(1.02,.7,.08),a("#101a26"),0,0,0,O);let z=120,G=new Float32Array(z*3),pe=new Float32Array(z*3),ne=[],V=new De;V.setAttribute("position",new bt(G,3)),V.setAttribute("color",new bt(pe,3));let ee=new Xn({size:.055,vertexColors:!0,transparent:!0,opacity:1,depthWrite:!1,blending:Xr}),se=new mi(V,ee);se.name="Strike fireworks",se.visible=!1,se.frustumCulled=!1,s.add(se);let de=0,oe=0;function J(){i(!0),o.cheer(!0),oe++,de=2.6,se.visible=!0,ee.opacity=1;for(let P=0;P<z;P++){let Q=P%3,he=P*2.39996,ge=.65+P%11*.08,X=Math.sqrt(1-(P%17/8-1)**2);G.set([h.x+(Q-1)*.65,1.35+Q*.22,h.z+1.2],P*3),ne[P]=new _(Math.cos(he)*X*ge,.7+Math.abs(Math.sin(he))*1.2,Math.sin(he)*X*ge);let te=new Ne([16765286,7401417,16745144,9026559][P%4]);pe.set([te.r,te.g,te.b],P*3)}V.attributes.position.needsUpdate=!0,V.attributes.color.needsUpdate=!0,t("STRIKE! All ten pins!")}function be(P){if(!(de<=0)){de=Math.max(0,de-P),se.visible=de>0,ee.opacity=Math.min(1,de/.9);for(let Q=0;Q<z;Q++){let he=ne[Q];he.y-=1.5*P,G[Q*3]+=he.x*P,G[Q*3+1]+=he.y*P,G[Q*3+2]+=he.z*P}V.attributes.position.needsUpdate=!0}}function xe(){wt(w,1536,1024),le(w,"TFJ BOWL  /  LANE 01",48,72,38,Z.blue,"700"),le(w,"WAREHOUSE BOWLING",48,143,61,Z.ink,"700"),et(w,1090,32,398,246,{top:"#214c61",bottom:"#0d283d",stroke:Z.mint,radius:22}),le(w,"TOTAL PINS",1120,86,34,Z.mint),le(w,String(F()),1120,237,125,Z.ink,"700"),le(w,"/ 100",1320,233,42,Z.muted),le(w,x===10?"ROUND COMPLETE":`FRAME ${x+1}  \u2022  BOWL ${M+1}`,48,230,51,Z.gold,"700");let P=0;for(let Q=0;Q<10;Q++){let he=48+Q%5*288,ge=290+Math.floor(Q/5)*244,X=Q===x&&x<10,te=E[Q],_e=te.length>0;et(w,he,ge,272,225,{top:X?"#225568":"#142e43",bottom:"#0b2032",stroke:X?Z.gold:"#55758c",radius:14}),le(w,String(Q+1),he+18,ge+45,37,X?Z.gold:Z.muted,"700");let ue=te[0]===10?"X":te[0]===0?"\u2013":te[0]??"",Se=te.length>1?te[0]+te[1]===10?"/":te[1]===0?"\u2013":te[1]:"";w.strokeStyle="#5c7b90",w.lineWidth=2,w.strokeRect(he+78,ge+8,89,77),w.strokeRect(he+167,ge+8,97,77),le(w,String(ue),he+96,ge+67,53,Z.ink,"700"),le(w,String(Se),he+190,ge+67,53,Z.ink,"700"),P+=Q<S.length?S[Q]:Q===x?A:0,le(w,_e?String(P):"\u2014",he+30,ge+189,89,X?Z.gold:Z.ink,"700")}le(w,`PERSONAL BEST  ${C} / 100`,48,837,38,Z.mint,"700"),le(w,"10 FRAMES  \u2022  EACH PIN = 1 POINT",810,837,32,Z.muted,"600"),le(w,x===10?"A  PLAY AGAIN":"HOLD TRIGGER  \u2022  SWING UNDERARM  \u2022  RELEASE",48,957,36,Z.gold,"700"),le(w,"Y  MENU",1270,957,34,Z.ink,"700"),U.needsUpdate=!0}function ae(){for(let P of[3,2,1.5,4,5,6])for(let Q of[-30,-29,-28,-27]){let he=!0;for(let ge=-1.1;ge<=1.1;ge+=.55)for(let X=0;X<=7.8;X+=.3)(r.blocked(P+ge,Q+X,0)||Math.abs(r.groundAt(P+ge,Q+X,.1))>.1)&&(he=!1);if(he)return new _(P,0,Q)}return null}function fe(){for(let X of[...c.children])X.traverse(te=>{te.geometry?.dispose(),te.material&&te.material.dispose()}),c.remove(X);c.position.copy(h),u=[],l(new Me(2.1,.025,7.3),Os(),0,.018,3.25,c);for(let X=-4;X<=4;X++)l(new Me(.009,.003,7.3),a("#9c805f"),X*.22,.032,3.25,c);for(let X of[-1.15,1.15])l(new Me(.15,.05,7.3),a("#223747"),X,.02,3.25,c);for(let X of[-1.045,1.045]){let te=l(new Me(.028,.025,7.3),new Oe({color:14794096,emissive:16761699,emissiveIntensity:1.2,roughness:.35}),X,.045,3.25,c);te.name="Illuminated bowling edge"}let P=At("TFJ BOWL","LANE 01  /  TEN-FRAME CHALLENGE","target",Z.gold,2.8);P.position.set(0,4.38,2.5),c.add(P);for(let X of[1,4.8]){let te=pn(1.8);te.position.set(0,4.8,X),c.add(te)}l(new Me(2.25,.3,.08),a("#223747"),0,.15,-.53,c),l(new Me(2.1,.008,.04),a("#e9d36f"),0,.035,6.7,c);for(let X of[-.5,0,.5]){let te=l(new An(.065,.16,3),a("#30485a"),X,.04,4.7,c);te.rotation.x=-Math.PI/2}let Q=[[0,0],[.065,0],[.085,.05],[.085,.14],[.05,.24],[.033,.3],[.045,.35],[.048,.39],[.025,.42],[0,.43]].map(([X,te])=>new re(X,te)),he=0;for(let X=0;X<4;X++)for(let te=0;te<=X;te++){let _e=Zn(.29,.27);_e.position.set((te-X/2)*.3,.034,1.1-X*.29),c.add(_e);let ue=new Te;ue.position.set((te-X/2)*.3,.248,1.1-X*.29),c.add(ue),l(new wi(Q,20),a("#f8f6ea"),0,-.215,0,ue),l(new ct(.035,.039,.045,16),a("#dc4459"),0,.07,0,ue),u.push({mesh:ue,start:ue.position.clone(),v:new _,spin:new _,shadow:_e,down:!1,id:he++})}q.position.copy(h).add(new _(0,2.95,2.5)),l(new Me(3.34,2.27,.1),a("#101a26"),0,2.95,2.43,c);for(let X of[-1.62,1.62])l(new Me(.06,3.92,.06),a("#223747"),X,1.96,2.42,c);let ge=[-1.4,1.4].find(X=>!r.blocked(h.x+X,h.z+7.1,0))??-1.2;O.position.copy(h).add(new _(ge,1.27,7.1)),O.lookAt(h.clone().add(new _(0,1.68,7.5))),l(new Me(.16,1.12,.16),a("#223747"),ge,.56,7.1,c),l(new Me(.65,.06,.48),a("#101a26"),ge,.03,7.1,c)}function R(){for(let P of u)P.mesh.position.copy(P.start),P.mesh.rotation.set(0,0,0),P.mesh.visible=!0,P.shadow.visible=!0,P.shadow.position.set(P.start.x,.034,P.start.z),P.shadow.material.opacity=1,P.down=!1,P.v.set(0,0,0),P.spin.set(0,0,0)}function W(){de=0,se.visible=!1,x=M=A=0,S=[],E=Array.from({length:10},()=>[]),p=null,I=0,d=!1,L.visible=!1,R(),xe()}function Y(){let P=ae();return!P||!r.xrTeleport(P.x,0,P.z+7.4)?!1:(h=P,fe(),o.setup(h),f=s.visible=!0,r.xrFace?.(0),W(),b=!1,y=!0,t("Warehouse bowling! Stay behind the yellow line. Hold, swing underarm and release."),!0)}function ie(){o.stop(),de=0,se.visible=!1,f=s.visible=d=L.visible=!1,p=null,I=0,g=[],b=!1}function T(){d=!1,g=[],b=!1,y=!0,p||(L.visible=!1)}function N(P,Q){D||(D=!0,o.cheer(!1));let he=Q.length();P.down=!0,P.v.add(Q).clampLength(0,7),P.v.y=Math.max(P.v.y,Math.min(3.4,.7+he*.42)),P.spin.add(new _(Q.z*2.8,(P.id%2?1:-1)*he*.8,-Q.x*2.8)).clampLength(0,18)}function B(P){let Q=new _,he=new _,ge=new Le;for(let X of u)if(X.down&&X.mesh.visible){X.v.y-=9.81*P,X.mesh.position.addScaledVector(X.v,P);let te=X.spin.length();te>.001&&(he.copy(X.spin).divideScalar(te),ge.setFromAxisAngle(he,te*P),X.mesh.quaternion.premultiply(ge).normalize()),Q.set(0,1,0).applyQuaternion(X.mesh.quaternion);let _e=.033+.08+.135*Math.abs(Q.y);X.mesh.position.y<_e?(X.mesh.position.y=_e,X.v.y=X.v.y<-.65?-X.v.y*.32:0,X.v.x*=Math.exp(-4*P),X.v.z*=Math.exp(-4*P),X.spin.multiplyScalar(Math.exp(-5*P))):X.spin.multiplyScalar(Math.exp(-.3*P));for(let[ue,Se,Ue]of[["x",-1.02,1.02],["z",-.35,2.2]])(X.mesh.position[ue]<Se||X.mesh.position[ue]>Ue)&&(X.mesh.position[ue]=ft.clamp(X.mesh.position[ue],Se,Ue),X.v[ue]*=-.38)}for(let X=0;X<u.length;X++)for(let te=X+1;te<u.length;te++){let _e=u[X],ue=u[te];if(!_e.mesh.visible||!ue.mesh.visible||!_e.down&&!ue.down)continue;let Se=ue.mesh.position.clone().sub(_e.mesh.position),Ue=Se.length();if(Ue>=.29||Ue<.001)continue;let qe=Se.divideScalar(Ue),ye=_e.v.clone().sub(ue.v).dot(qe);if(ye>.18){let ut=qe.clone().multiplyScalar(ye*.7);ue.down?ue.v.add(ut):N(ue,ut),_e.down?_e.v.sub(ut):N(_e,ut.clone().negate()),_e.spin.x+=qe.z*ye,ue.spin.z-=qe.x*ye}let We=.29-Ue;_e.down&&_e.mesh.position.addScaledVector(qe,-We*.5),ue.down&&ue.mesh.position.addScaledVector(qe,We*.5)}}function $(){p=null,L.visible=!1;let P=u.filter(he=>he.down).length,Q=P-A;if(P===10&&M===0&&J(),E[x].push(Q),A=P,M++,Q===0&&o.encourage(),Q>0&&!(P===10&&M===1)&&(o.cheer(P===10),i(P===10)),n(P===10?.8:.25),P===10||M===2){let he=P===10?M===1?"Strike!":"Spare!":`${P} pins.`;if(S.push(P),x++,M=A=0,t(x===10?`Bowling complete! ${F()} / 100 pins.`:`${he} Next frame.`),x===10){C=Math.max(C,F());try{localStorage.setItem("tfj-bowling-best-10-v1",String(C))}catch{}}else R()}else{for(let he of u)he.down&&(he.mesh.visible=!1,he.shadow.visible=!1);t(`${Q} pins! One more bowl this frame.`)}xe()}function K(P,Q){if(!f)return;let{dt:he,right:ge,controller:X}=P;v+=he,o.tick(he,Q,{eye:P.eye,held:d,ball:p?L.position:null});let te=!!ge?.gamepad?.buttons[0]?.pressed,_e=!!ge?.gamepad?.buttons[4]?.pressed;if(Q){T();return}be(he),te||(b=!0),_e&&!m&&x===10&&W(),m=_e;let ue=X&&X.visible!==!1?X.getWorldPosition(new _):null;if(te&&!y&&b&&!p&&!I&&x<10&&ue){let Se=r.stats();Math.abs(Se.x-h.x)>1.1||Se.z<h.z+6.7||Se.z>h.z+8.2||Se.y>.15?t("Return behind the yellow bowling line."):(d=!0,g=[],L.visible=!0)}if(d){if(!ue)T();else if(L.position.copy(ue),g.push({time:v,p:ue.clone()}),g=g.filter(Se=>v-Se.time<.14),!te&&y){let Se=g.find(qe=>v-qe.time>=.04),Ue=Se?ue.clone().sub(Se.p).divideScalar(v-Se.time).clampLength(0,10):new _;d=!1,Ue.length()<.6||Ue.z>-.25?(L.visible=!1,t("Swing towards the pins before releasing.")):(D=!1,p={p:ue.clone().sub(h),v:Ue,age:0,gutter:!1})}}if(p||I){let Se=Math.max(1,Math.ceil(he/.008)),Ue=he/Se;for(let qe=0;qe<Se;qe++){if(p){let ye=p;ye.age+=Ue,ye.v.y-=9.81*Ue,ye.p.addScaledVector(ye.v,Ue),ye.p.y<.174&&(ye.p.y=.174,ye.v.y=Math.abs(ye.v.y)>.8?Math.abs(ye.v.y)*.18:0,ye.v.x*=Math.exp(-.25*Ue),ye.v.z*=Math.exp(-.25*Ue)),Math.abs(ye.p.x)>1&&(ye.gutter=!0,ye.p.x=Math.sign(ye.p.x)*1.15,ye.v.x=0),L.position.copy(ye.p).add(h),L.rotation.x+=ye.v.z*Ue/.14;for(let We of u)if(!We.down&&!ye.gutter&&ye.p.y<.6){let ut=We.mesh.position.x-ye.p.x,Kt=We.mesh.position.z-ye.p.z;Math.hypot(ut,Kt)<.23&&(N(We,new _(ye.v.x,0,ye.v.z).multiplyScalar(.65)),ye.v.x*=.8,ye.v.z*=.84)}(ye.p.z<-.6||ye.age>7||Math.hypot(ye.v.x,ye.v.z)<.15)&&(p=null,I=2.6)}B(Ue);for(let ye of u)ye.shadow.position.x=ye.mesh.position.x,ye.shadow.position.z=ye.mesh.position.z,ye.shadow.material.opacity=ft.clamp(1-(ye.mesh.position.y-.25),.15,1);if(I&&(I=Math.max(0,I-Ue),!I)){$();break}}}y=te}return{root:s,crowd:o,fireworks:se,get celebrations(){return oe},start:Y,stop:ie,cancel:T,tick:K,get held(){return d},get flight(){return p},get pins(){return u},get origin(){return h},get frame(){return x},get roll(){return M},get total(){return F()},get totals(){return S},get frameRolls(){return E}}}function ld(r,e,t,n=.34){if(r.y<=t.y||e.y>t.y)return!1;let i=(r.y-t.y)/(r.y-e.y);return Math.hypot(r.x+(e.x-r.x)*i-t.x,r.z+(e.z-r.z)*i-t.z)<n}function Oa(r,e,t,n,i){let s=r.colliders.map(J=>new Je(new _(J.min.x,J.min.y,J.min.z),new _(J.max.x,J.max.y,J.max.z))),o=new Te;o.name="Pok\xE9 Ball basketball",o.visible=!1,e.add(o);let a=J=>new Oe({color:J,roughness:.6}),l=(J,be,xe,ae=o)=>{let fe=new Ae(J,be);return fe.position.copy(xe),ae.add(fe),fe},c=new _,h=null,u=!1,f=!1,d=!1,p=null,g=[],v=0,y=!1,b=!1,m=0,x=0,M=0,S=0,E=!1;try{M=Number(localStorage.getItem("tfj-basket-best"))||0}catch{}let A=r.mollie.balls[0].ball.clone();A.scale.setScalar(.48),A.visible=!1,e.add(A);let I=l(new je(.065,16,12),a("#ee528c"),new _,e);I.visible=!1,l(new je(.03,8,6),a("#6ac68d"),new _(0,.06,0),I).scale.set(1,.4,1.7);let D=new _t;D.moveTo(0,.02),D.bezierCurveTo(-.16,.18,-.23,-.03,0,-.19),D.bezierCurveTo(.23,-.03,.16,.18,0,.02);let L=new Ae(new qt(D),new we({color:16742315,side:ot,transparent:!0}));L.visible=!1,e.add(L);let k=0,w=0,U=0,q=document.createElement("canvas");q.width=768,q.height=384;let F=q.getContext("2d"),O=new Be(q);O.colorSpace=Ie;let H=l(new Fe(1.5,.75),new we({map:O}),new _);function z(){wt(F,768,384),le(F,"POK\xC9 BALL BASKETBALL",30,62,38,Z.gold),le(F,`${x} baskets \xB7 ${m}/10 throws`,30,139,46),le(F,`Best: ${M} baskets`,30,204,32,Z.mint),le(F,m>=10&&!p?"Round complete \xB7 A to play again":"Hold trigger \xB7 swing up \xB7 release",30,280,28),le(F,"Y: games menu \xB7 B: leave",30,337,25,Z.muted),O.needsUpdate=!0}function G(){for(let[J,be]of[[-4,8],[5,9],[-8,8],[12,8]]){let xe=!0;for(let ae=-1.5;ae<=1.5;ae+=.5)for(let fe=-2;fe<=2;fe+=.5)(r.blocked(J+ae,be+fe,0)||Math.abs(r.groundAt(J+ae,be+fe,.1))>.1)&&(xe=!1);if(xe)return new _(J,0,be)}return null}function pe(J){if(c.set(J.x,2.35,J.z-1.5),H.position.set(J.x+1.35,2,J.z-1.75),o.children.length>1)for(let R of[...o.children])R!==H&&(o.remove(R),R.traverse(W=>{W.geometry?.dispose(),W.material?.dispose()}));let be=At("TFJ HOOPS","YARD COURT  /  TEN THROWS","ball","#f6d484",1.9);be.position.set(J.x,3.7,J.z-1.93),o.add(be);let xe=pn(1.1);xe.position.set(J.x,4.1,J.z-1.5),o.add(xe),l(new Me(.12,4.15,.12),a("#173d56"),new _(J.x,2.075,J.z-2)),l(new Me(.08,.08,.55),a("#173d56"),new _(J.x,4.1,J.z-1.75)),l(new Me(1.5,.95,.07),a("#e4f1f2"),new _(J.x,2.65,J.z-1.93));let ae=l(new Yt(.42,.025,10,48),a("#f5ab44"),c);ae.rotation.x=Math.PI/2;for(let R=0;R<12;R++){let W=R/12*Math.PI*2,Y=new _(c.x+Math.cos(W)*.41,c.y,c.z+Math.sin(W)*.41),ie=new _(c.x+Math.cos(W+.2)*.23,c.y-.48,c.z+Math.sin(W+.2)*.23),T=new Lt(new De().setFromPoints([Y,ie]),new St({color:16777215}));o.add(T)}l(new Me(.06,2.4,.06),a("#173d56"),new _(J.x+1.35,1.2,J.z-1.78)),l(new Me(1.56,.81,.045),a("#122538"),new _(J.x+1.35,2,J.z-1.78));let fe=l(new Me(2,.015,.04),a("#f6d484"),new _(J.x,.012,J.z+1.45))}function ne(J){if(V(),J==="friend")return f=!0,t.summon(),n("Hold trigger for a berry. Offer it to her mouth\u2014or release and high-five her raised hand."),!0;let be=G();return!be||!r.xrTeleport(be.x,0,be.z+1.9)?!1:(h=be,pe(be),r.xrFace?.(0),u=o.visible=!0,m=x=0,z(),!0)}function V(){u=f=d=!1,o.visible=A.visible=I.visible=L.visible=!1,p=null,g=[],b=!1,y=!1,k=0}function ee(){d=!1,A.visible=I.visible=!1,g=[],b=!1,y=!0}function se(){if(p=null,A.visible=!1,m===10){M=Math.max(M,x);try{localStorage.setItem("tfj-basket-best",String(M))}catch{}n(`Basketball complete! ${x} baskets from 10 throws.`)}z()}function de(J,be){t.react(be),k=1.5,L.visible=!0,S=2,i(.6),n(J)}function oe(J,be){let{dt:xe,eye:ae,controller:fe,right:R,leftController:W}=J;v+=xe,S=Math.max(0,S-xe);let Y=!!R?.gamepad?.buttons[0]?.pressed,ie=!!R?.gamepad?.buttons[4]?.pressed;if(be){ee(),L.visible=!1;return}Y||(b=!0);let T=fe?.visible!==!1&&fe?fe.getWorldPosition(new _):null;if(f){if(t.group.updateMatrixWorld(!0),I.visible=!!T&&Y&&b,I.visible){I.position.copy(T);let B=t.group.localToWorld(new _(0,.43,.4));!S&&I.position.distanceTo(B)<.22&&(w++,de(`Yum! Jigglypuff loved berry ${w}.`,"feed"),b=!1,I.visible=!1)}t.group.updateMatrixWorld(!0);let N=t.group.localToWorld(new _(.46,.58,.03));for(let B of[fe,W])if(B&&B.visible!==!1&&!Y&&!S&&B.getWorldPosition(new _).distanceTo(N)<.24){U++,de(`High-five! ${U} happy high-fives.`,"five");break}}else I.visible=!1;if(k>0?(k-=xe,L.visible=!0,L.position.copy(t.group.position).add(new _(0,1.3+(1.5-k)*.22,0)),L.lookAt(ae),L.material.opacity=Math.min(1,k*2)):L.visible=!1,!u){y=Y;return}if(ie&&!E&&m===10&&!p&&(m=x=0,z()),E=ie,T&&Y&&!y&&b&&!p&&m<10&&(d=!0,g=[],A.visible=!0),d){if(!T)ee();else if(A.position.copy(T),g.push({time:v,p:T.clone()}),g=g.filter(N=>v-N.time<.14),!Y&&y){let N=g.find($=>v-$.time>=.04),B=N?T.clone().sub(N.p).divideScalar(v-N.time).clampLength(0,12):new _;d=!1,B.length()<.6?(A.visible=!1,n("Swing your hand upwards, then release.")):(m++,p={p:T.clone(),v:B,age:0,scored:!1},z())}}if(p){let N=Math.max(1,Math.ceil(xe/.008)),B=xe/N;for(let $=0;$<N&&p;$++){let K=p,P=K.p.clone().addScaledVector(K.v,B);P.y-=4.9*B*B,K.v.y-=9.8*B;let Q=P.clone().sub(K.p),he=Q.length(),ge=new Ke(K.p,Q.normalize()),X=new _;if(s.some(ue=>!ue.containsPoint(K.p)&&ge.intersectBox(ue,X)&&X.distanceTo(K.p)<=he)){se();break}!K.scored&&ld(K.p,P,c)&&(K.scored=!0,x++,i(.8),z());let te=c.z-.4;(K.p.z-te)*(P.z-te)<0&&Math.abs(P.x-c.x)<.8&&P.y>2.17&&P.y<3.15&&(P.z=te+Math.sign(K.p.z-te)*.1,K.v.z*=-.65);let _e=Math.hypot(P.x-c.x,P.z-c.z);Math.abs(P.y-c.y)<.1&&_e>.33&&_e<.53&&(K.v.x+=(P.x-c.x)*3,K.v.z+=(P.z-c.z)*3,K.v.y=Math.abs(K.v.y)*.45,P.y=c.y+.11),K.p.copy(P),K.age+=B,A.position.copy(P),A.rotation.x+=B*5,(P.y<.09||K.age>5)&&se()}}y=Y}return{root:o,start:ne,stop:V,cancel:ee,tick:oe,get origin(){return h},get held(){return d},get shots(){return m},get score(){return x},get flight(){return p},get feeds(){return w},get fives(){return U},get berry(){return I},get hoop(){return c}}}function Ba(r,e,t){let n=new Te;n.name="Staff-room memory match",n.visible=!1,e.add(n);let i=new Te;i.position.set(-21.8,.87,-12.9),i.rotation.x=-Math.PI/2,n.add(i);let s=document.createElement("canvas");s.width=1024,s.height=256;let o=s.getContext("2d"),a=new Be(s);a.colorSpace=Ie;let l=new Ae(new Fe(1.75,.4375),new we({map:a}));l.position.set(-21.8,1.38,-13.55),n.add(l);let c=At("MATCH CLUB","STAFF ROOM  /  FIND THE PAIRS","book","#f3b2cf",1.65);c.position.set(-21.8,1.91,-13.55),n.add(c);let h=r.colliders.map(w=>new Je(new _(w.min.x,w.min.y,w.min.z),new _(w.max.x,w.max.y,w.max.z))),u=[],f=[],d=[],p=[],g=new Set,v=0,y=0,b=!1,m=!1,x=[],M=null;function S(){wt(o,1024,256),le(o,"MOLLIE\u2019S MEMORY MATCH",28,46,34,Z.gold,"700"),le(o,`${g.size/2} / ${f.length/2} pairs  \xB7  ${v} turns`,28,101,38,Z.ink,"700"),le(o,g.size===f.length?"Perfect pairing! Press A to play again.":"Point at a card and pull the trigger to flip it.",28,163,28,Z.mint,"500"),le(o,m?"Practice deck \xB7 collect two cards to play with your album.":"Made from your collected cards \xB7 Y opens the games menu.",28,220,23,Z.muted,"400"),a.needsUpdate=!0}function E(){for(let w of u)w.geometry.dispose(),w.material.dispose();u=[];for(let w of d)for(let U of w.material)U.userData.memoryOwned&&U.dispose();i.clear(),d=[],M=null}function A(){E();let w=[...r.mollie.found];m=w.length<2,m&&(w=[0,1,2,3]);for(let q=w.length-1;q>0;q--){let F=Math.floor(Math.random()*(q+1));[w[q],w[F]]=[w[F],w[q]]}w=w.slice(0,6),f=[...w,...w];for(let q=f.length-1;q>0;q--){let F=Math.floor(Math.random()*(q+1));[f[q],f[F]]=[f[F],f[q]]}p=[],g.clear(),v=y=0;let U=Math.ceil(f.length/4);d=f.map((q,F)=>{let O=r.mollie.cards[q].clone();O.userData={index:F},O.material=O.material.map(z=>{let G=new we(z.map?{map:z.map}:{color:15258527});return G.userData.memoryOwned=!0,G}),O.position.set((F%4-1.5)*.43,((U-1)/2-Math.floor(F/4))*.39,.012),O.rotation.set(0,Math.PI,0),O.scale.setScalar(.34/.62),O.visible=!0;let H=new Ae(new Fe(.268,.36),new we({color:2508378}));return H.position.copy(O.position),H.position.z=.003,u.push(H),i.add(H,O),O}),x=d.map(()=>Math.PI),S()}function I(){return r.xrTeleport(-21.8,0,-10.78)?(r.xrFace?.(0),b=n.visible=!0,A(),!0):!1}function C(){b=n.visible=!1,p=[],y=0}function D(w){return!b||y||!Number.isInteger(w)||w<0||w>=f.length||g.has(w)||p.includes(w)||g.size===f.length?!1:(p.push(w),x[w]=0,t(.18),p.length===2&&(v++,y=.85),S(),!0)}function L(w,U=!1){if(b){for(let q=0;q<d.length;q++)d[q].rotation.y=ft.damp(d[q].rotation.y,x[q],16,w);if(!U&&y&&(y=Math.max(0,y-w),!y)){let[q,F]=p;f[q]===f[F]?(g.add(q),g.add(F),u[q].material.color.set(9429443),u[F].material.color.set(9429443),t(.55)):x[q]=x[F]=Math.PI,p=[],S()}}}function k(w){if(M!==null&&u[M]&&u[M].material.color.set(g.has(M)?9429443:2508378),M=null,!b||!w)return null;n.updateMatrixWorld(!0);let U=new $t(w.position,w.direction,0,3.8).intersectObjects(d)[0];if(!U)return null;let q=new Ke(w.position,w.direction),F=new _;for(let H of h)if(q.intersectBox(H,F)&&F.distanceTo(w.position)<U.distance-.025)return null;let O=U.object.userData.index;return M=O,g.has(O)||u[O].material.color.set(16176260),{point:U.point,action:()=>D(O)}}return{root:n,start:I,stop:C,reset:A,tick:L,point:k,select:D,get deck(){return f},get cards(){return d},get moves(){return v},get matched(){return g},get waiting(){return y},get active(){return b},get complete(){return b&&g.size===f.length},get practice(){return m}}}function ks(){let r=new Te;r.name="Jigglypuff \xB7 3D";let e=m=>new Oe({color:m,roughness:.8}),t=e("#f4b2c8"),n=e("#ffc9d9"),i=e("#263946"),s=e("#fffdf8"),o=e("#239aac"),a=e("#163b50"),l=(m,x,M,S=r)=>{let E=new Ae(m,x);return E.name=M,E.castShadow=E.receiveShadow=!0,S.add(E),E},c=(m,x,M,S,E,A,I,C,D=r)=>{let L=l(new je(1,32,24),I,C,D);return L.position.set(m,x,M),L.scale.set(S,E,A),L};c(0,.54,0,.43,.44,.395,t,"Round pink body");for(let m of[-1,1]){let x=new Te;x.position.set(m*.27,.86,-.005),x.rotation.z=-m*.21,r.add(x);let M=new _t;M.moveTo(-.135,0),M.quadraticCurveTo(-.115,.16,-.025,.34),M.quadraticCurveTo(0,.39,.025,.34),M.quadraticCurveTo(.12,.13,.135,0),M.quadraticCurveTo(0,-.07,-.135,0);let S=l(new Rn(M,{depth:.065,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.018,bevelThickness:.018,curveSegments:12}),t,"Pointed ear",x);S.position.z=-.04;let E=new _t;E.moveTo(-.085,.025),E.quadraticCurveTo(-.06,.16,0,.29),E.quadraticCurveTo(.06,.16,.085,.025),E.quadraticCurveTo(0,-.005,-.085,.025);let A=l(new qt(E,16),i,"Dark inner ear",x);A.position.z=.047,c(m*.19,.065,.12,.15,.065,.18,t,"Oval foot")}let h=[];for(let m of[-1,1]){let x=new Te;x.position.set(m*.172,.625,.347),x.rotation.y=m*.24,r.add(x),h.push(x),c(0,0,0,.123,.153,.053,s,"Eye white",x),c(0,-.006,.047,.083,.112,.019,o,"Teal iris",x),c(0,-.003,.063,.042,.079,.01,a,"Pupil",x),c(-.025,.045,.077,.024,.033,.007,s,"Eye sparkle",x),c(.022,-.045,.075,.011,.015,.005,s,"Small sparkle",x)}((m,x,M,S)=>l(new $n(new cn(m.map(E=>new _(...E))),40,x,8,!1),M,S))([[-.055,.443,.389],[-.03,.422,.401],[0,.416,.408],[.031,.423,.401],[.055,.444,.389]],.008,i,"Little smile");let f=[];for(let m=0;m<=36;m++){let x=m/36,M=Math.PI-x*Math.PI*2,S=.126*(1-.88*x);f.push(new _(.018+Math.cos(M)*S,.961+Math.sin(M)*S,.295+.035*x))}let d=new $n(new cn(f),72,.042,12,!1),p=d.attributes.position,g=new cn(f);for(let m=0;m<=72;m++){let x=g.getPointAt(m/72),M=1-.66*(m/72)**2;for(let S=0;S<=12;S++){let E=m*13+S,A=new _().fromBufferAttribute(p,E).sub(x).multiplyScalar(M).add(x);p.setXYZ(E,A.x,A.y,A.z)}}d.computeVertexNormals(),l(d,n,"Curled fringe");let v=[];for(let m of[-1,1]){let x=new Te;x.position.set(m*.37,.48,.015),x.rotation.z=m*.6,r.add(x),c(m*.075,0,0,.14,.075,.075,t,"Little arm",x),v.push(x)}let y=0;function b(m,x=!1){y+=m,r.position.y=Math.max(0,Math.sin(y*2.5))*.028;let M=y%4.4>4.2?.09:1;h.forEach(S=>S.scale.y=M),v[1].rotation.z=.6+(x?Math.sin(y*4)*.25:Math.sin(y*2)*.04)}return{group:r,animate:b}}function za(r,e){let t=ks(),n=new Te;n.add(t.group),n.name="Jigglypuff \xB7 your friend",n.scale.setScalar(.9),e.add(n);let i=2,s=.52,o=[],a=null,l=!0,c=0,h=null,u=0,f=0,d="",p=(b,m)=>Math.hypot(b.x-m.x,b.z-m.z);function g(b,m){let x=new _(-m.z,0,m.x);for(let[M,S]of[[2.5,-.7],[2.5,.7],[1.5,-2],[1.5,2],[0,-2.5],[0,2.5],[-2.5,-.7],[-2.5,.7]]){let E=b.x+m.x*M+x.x*S,A=b.z+m.z*M+x.z*S,I=r.groundAt(E,A,b.y+.2);if(Math.abs(I-b.y)<.35&&!r.blocked(E,A,I))return n.position.set(E,I,A),o=[],a=new _(b.x,b.y,b.z),c=0,h=null,u=.15,!0}return!1}function v(b,m,x,M=!1){b=Math.min(b,.05);let S=r.stats(),E=new _(S.x,S.y,S.z);if(x){n.visible=!1,l=!0,h=null;return}let A=new _(m.x,0,m.z).normalize();if(A.lengthSq()<.01&&A.set(0,0,-1),l||n.position.distanceTo(E)>8||a&&a.distanceTo(E)>3||p(n.position,E)<.9){if(!g(S,A)){n.visible=!1,l=!0;return}l=!1}for(n.visible=!0,(!a||a.distanceTo(E)>.18)&&(o.push(E.clone()),a=E.clone(),o.length>160&&o.shift());o.length&&p(n.position,o[0])<.25;)o.shift();let I=M?1.05:i;u=Math.max(0,u-b);let C=p(n.position,E);if(!h&&u===0){let w=null,U=0;if(C<I?(w=n.position.clone().sub(E),w.y=0,w.normalize(),U=Math.min(.8,I+.2-C)):C>I+.35&&(o.length||M)&&(w=(M?E:o[0]).clone().sub(n.position),w.y=0,U=Math.min(.8,w.length(),C-I),w.normalize()),w&&U>.04){let q=n.position.clone(),F=q.clone().addScaledVector(w,U),O=!0,H=q.y;for(let z=1;z<=8;z++){let G=q.clone().lerp(F,z/8),pe=r.groundAt(G.x,G.z,H+.22);if(Math.abs(pe-H)>.35||r.blocked(G.x,G.z,pe)||p(G,E)<Math.min(I,C)-.01){O=!1;break}H=pe}F.y=H,O?(h={from:q,to:F,time:0},c=0):(c+=b,c>2.5&&g(S,A))}else c=0}let D=0,L=0;if(h){h.time+=b;let w=Math.min(1,h.time/s),U=h.from.clone().lerp(h.to,w),q=p(n.position,E);p(U,E)>=Math.min(I,q)-.001&&!r.blocked(U.x,U.z,U.y)&&n.position.copy(U),D=Math.sin(Math.PI*w)*.3,L=Math.sin(Math.PI*w)*.08,w===1&&(h=null,u=.14)}else u>0&&(L=-Math.sin(Math.PI*Math.min(1,u/.14))*.1);let k=Math.atan2(S.x-n.position.x,S.z-n.position.z);if(n.rotation.y+=Math.atan2(Math.sin(k-n.rotation.y),Math.cos(k-n.rotation.y))*Math.min(1,b*5),t.animate(b,C<3),t.group.position.y=D,t.group.scale.set(1-L*.5,1+L,1-L*.5),f>0){f=Math.max(0,f-b);let w=Math.abs(Math.sin(f*9));t.group.position.y+=w*(d==="feed"?.06:.2),t.group.scale.y*=1+Math.sin(f*20)*.06}}function y(){l=!0,n.visible=!1,o=[],a=null,h=null}return{group:n,tick:v,summon:y,radius:i,react(b){f=1.3,d=b},get hopping(){return!!h},get trail(){return o},get hidden(){return l}}}function ka(r,e,t){let n=new Te;n.name="Mollie\u2019s VR book",r.add(n),n.visible=!1;let i=new Te;n.add(i);let s=[],o=-1,a=null,l=!1,c=1,h=null,u=null,f=null,d=null,p=new Le,g=new we({color:16446169}),v=new we({color:1455692}),y=new we({color:13944999}),b=new we({color:15386989});function m(O,H,z,G,pe,ne,V=0){let ee=new Ae(new Me(O,H,z),G);return ee.position.set(pe,ne,V),i.add(ee),ee}function x(O,H,z,G,pe,ne=44,V=null,ee="#17364b",se=null){let de=document.createElement("canvas");de.width=1024,de.height=Math.round(1024*z/H);let oe=de.getContext("2d"),J;function be(fe=!1){if(oe.clearRect(0,0,de.width,de.height),V){let R=V==="#eac96d";et(oe,4,4,1016,de.height-8,{top:R?"#ffe8ac":fe?"#365e76":"#24475f",bottom:R?"#d9b66c":"#142e43",stroke:fe?"#ffe09a":R?"#fff0c7":"#597b91",radius:Math.min(28,de.height/5)})}oe.textAlign="center",oe.textBaseline="middle",oe.fillStyle=V==="#eac96d"?"#17364b":fe?Z.gold:ee,oe.font=`bold ${ne}px Arial`,O.forEach((R,W)=>oe.fillText(R,512,de.height*(W+1)/(O.length+1),944)),J&&(J.needsUpdate=!0)}be(),J=new Be(de),J.colorSpace=Ie;let xe=new we({map:J,transparent:!0,side:ot}),ae=new Ae(new Fe(H,z),xe);return ae.position.set(G,pe,.06),i.add(ae),se&&(ae.userData.action=se,ae.userData.paint=be,s.push(ae)),ae}function M(){let O=document.createElement("canvas");O.width=O.height=256;let H=O.getContext("2d");H.fillStyle="#203f53",H.beginPath(),H.arc(128,128,112,0,Math.PI*2),H.fill(),H.strokeStyle="#b99b5c",H.lineWidth=3,H.stroke(),In(H,"ball",128,128,185,Z.gold);let z=new Be(O);z.colorSpace=Ie;let G=new Ae(new Fe(.2,.2),new we({map:z,transparent:!0}));G.position.set(.02,.015,.061),i.add(G)}function S(){i.traverse(O=>{O.userData.borrowed||(O.geometry&&O.geometry.dispose(),O.material&&!Array.isArray(O.material)&&![g,v,y,b].includes(O.material)&&(O.material.map?.dispose(),O.material.dispose()))}),i.clear(),s.length=0,u=null}function E(O,H,z,G,pe){let ne=e.mollie.cards[O].clone();return ne.userData={borrowed:!0},ne.material=ne.material.map(V=>{if(!V.map)return V;let ee=new we({map:V.map});return ee.userData.albumOwned=!0,ee}),ne.position.set(H,z,.085),ne.scale.setScalar(G/.62),ne.rotation.set(0,0,0),ne.visible=!0,pe&&(ne.userData.action=pe,s.push(ne)),i.add(ne),ne}function A(){i.traverse(O=>{if(O.userData.borrowed)for(let H of O.material)H.userData.albumOwned&&H.dispose()}),S()}function I(){if(A(),d=null,n.position.z=a!==null?.38:0,a!==null){x([e.xrGames.names[a]],1.3,.13,-.22,.69,62,"#17364b","#ffe39a"),u=E(a,-.28,0,1.05*c),u.rotation.y=l?Math.PI:0,p.copy(u.quaternion),x(["Flip card"],.43,.16,.65,.41,72,"#17364b","#ffe39a",()=>{l=!l,p.setFromAxisAngle(new _(0,1,0),l?Math.PI:0)}),x(["Larger +"],.43,.16,.65,.19,72,"#17364b","#fff",()=>C(.12)),x(["Smaller \u2212"],.43,.16,.65,-.03,72,"#17364b","#fff",()=>C(-.12)),x(["Back to book"],.5,.16,.65,-.3,62,"#17364b","#fff",k),x(["Hold right grip and turn your hand to rotate","Point + trigger to select \xB7 B returns to the book"],1.85,.16,0,-.72,38,"#17364b","#fff");return}if(o<0){m(1.04,1.33,.06,v,0,0),m(.038,1.29,.07,b,-.47,0,.025),x(["MOLLIE\u2019S","POK\xC9MON ALBUM"],.9,.32,.02,.3,87,null,"#ffe39a"),x([`${e.mollie.found.size} / 18 discovered`],.85,.15,.02,-.16,64,null,"#e9f2f5"),M(),x(["Open the book"],.78,.18,.02,-.4,72,"#eac96d","#17364b",()=>D(0)),x(["Games menu"],.75,.15,0,-.8,61,"#17364b","#fff",t);return}m(2.1,1.37,.055,v,0,0,-.02),m(2.02,1.3,.045,y,0,0,.005),m(.98,1.26,.018,g,-.502,0,.036),m(.98,1.26,.018,g,.502,0,.036),m(.025,1.29,.02,y,0,0,.055);for(let O of[-1,1]){let H=o*2+(O===1?1:0),z=O*.5;x([e.mollie.found.has(H)?e.xrGames.names[H]:`Mystery card ${H+1}`],.88,.12,z,.53,56),e.mollie.found.has(H)?E(H,z,-.005,.8,()=>L(H)):(m(.58,.8,.006,new we({color:14476515}),z,-.005,.062),x(["?"],.5,.6,z,-.005,300,null,"#89a2ab")),x([`${H+1} / 18`],.7,.09,z,-.54,52)}x(["Previous"],.47,.16,-.77,-.8,67,"#17364b","#fff",()=>D(o-1)),x([`${o+1} / 9`],.28,.14,-.3,-.8,75,"#17364b","#ffe39a"),x(["Next"],.39,.16,.1,-.8,74,o===8?"#63737a":"#17364b","#fff",()=>D(Math.min(8,o+1))),x(["Menu"],.43,.16,.7,-.8,74,"#17364b","#fff",t),x(["Point at a collected card and pull the trigger to inspect"],1.85,.1,0,.76,39,"#17364b","#fff")}function C(O){c=ft.clamp(c+O,.72,1.12),u.scale.setScalar(1.05*c/.62)}function D(O){if(h||O===o)return;O=ft.clamp(O,-1,8);let H=new Te;H.name="Turning album page",n.add(H);let z=new Ae(new Me(.99,1.27,.012),g);if(z.position.x=O>o?.495:-.495,z.userData.pageTurnOwned=!0,H.add(z),o>=0){for(let G of i.children)if(G.position.z>.045&&Math.abs(G.position.y)<.64&&(O>o?G.position.x>.05:G.position.x<-.05)){let pe=G.clone();pe.userData={},H.add(pe)}}H.position.z=.16,h={leaf:H,next:O,elapsed:0,direction:O>o?-1:1}}function L(O){return e.mollie.found.has(O)?(a=O,l=!1,c=1,f=null,I(),!0):!1}function k(){a!==null?(a=null,f=null,I()):t()}function w(){o=-1,a=null,n.visible=!0,I()}function U(){h&&(h.leaf.traverse(O=>{O.userData.pageTurnOwned&&O.geometry?.dispose()}),n.remove(h.leaf),h=null),f=null,n.visible=!1}function q(O){var G;if(!O||h)return null;n.updateMatrixWorld(!0);let H=new $t(O.position,O.direction,0,5).intersectObjects(s)[0],z=H?.object||null;return z!==d&&(d&&(d.userData.paint?.(!1),d.userData.restScale&&d.scale.copy(d.userData.restScale)),d=z,d&&(d.userData.paint?.(!0),(G=d.userData).restScale??(G.restScale=d.scale.clone()),d.scale.copy(d.userData.restScale).multiplyScalar(1.025))),H?{point:H.point,action:H.object.userData.action}:null}function F(O,H,z){if(h){h.elapsed+=O;let G=Math.min(1,h.elapsed/.48);h.leaf.rotation.y=h.direction*Math.PI*(G*G*(3-2*G)),G>=1&&(n.remove(h.leaf),h.leaf.traverse(pe=>{pe.userData.pageTurnOwned&&pe.geometry?.dispose()}),o=h.next,h=null,I())}if(u)if(H&&z){f||(f={hand:z.clone().invert(),start:u.quaternion.clone()});let G=z.clone().multiply(f.hand),pe=i.getWorldQuaternion(new Le);u.quaternion.copy(pe.clone().invert().multiply(G).multiply(pe).multiply(f.start))}else f?(f=null,p.copy(u.quaternion)):u.quaternion.slerp(p,1-Math.exp(-10*O))}return{root:n,open:w,close:U,point:q,tick:F,back:k,inspect:L,change:D,get page(){return o},get inspected(){return a},get card(){return u},get turning(){return!!h}}}var nt={x:-24.475,y:1.73,z:-10.1,radius:.37,ocheX:-22.15},cd=[20,1,18,4,13,6,10,15,2,17,3,19,7,16,8,11,14,9,12,5];function hd(r,e){let t=Math.hypot(r,e)*384/nt.radius;if(t>290)return{score:0,label:"Miss"};if(t<=11)return{score:50,label:"Bullseye \xB7 50"};if(t<=24)return{score:25,label:"Outer bull \xB7 25"};let n=(Math.atan2(r,e)+Math.PI/20+Math.PI*2)%(Math.PI*2),i=cd[Math.floor(n/(Math.PI/10))],s=t>=268?2:t>=163&&t<=184?3:1;return{score:i*s,label:`${s===3?"Triple ":s===2?"Double ":""}${i} \xB7 ${i*s}`}}function ud(r){let e=r.at(-1);if(!e)return new _;let t=r.find(n=>e.time-n.time>=.035&&e.time-n.time<=.1);return t?e.position.clone().sub(t.position).divideScalar(e.time-t.time).clampLength(0,16):new _}function dd(r,e,t){let n=r.clone().addScaledVector(e,t);n.y-=.5*9.81*t*t;let i=e.clone();return i.y-=9.81*t,i.multiplyScalar(Math.exp(-.06*t)),{position:n,velocity:i}}function fd(r,e){if(r.x<=nt.x||e.x>nt.x)return null;let t=(nt.x-r.x)/(e.x-r.x),n=r.clone().lerp(e,t);return Math.hypot(n.y-nt.y,n.z-nt.z)<=.47?{point:n,...hd(-(n.z-nt.z),n.y-nt.y)}:null}function Va(r,e,t){let n=new Te;n.name="Staff-room VR darts",e.add(n),n.visible=!1;let i=new Oe({color:12044498,metalness:.75,roughness:.28}),s=new Oe({color:2112336,roughness:.45}),o=new Oe({color:16764759,side:ot,roughness:.8}),a=[];function l(V,ee){return a.push(V),new Ae(V,ee)}function c(){let V=new Te;V.name="3D dart";let ee=l(new An(.004,.035,8),i);ee.rotation.x=-Math.PI/2,ee.position.z=.0175,V.add(ee);let se=l(new ct(.006,.007,.045,10),i);se.rotation.x=Math.PI/2,se.position.z=.0575,V.add(se);for(let oe=0;oe<5;oe++){let J=l(new Yt(.007,8e-4,4,10),s);J.position.z=.043+oe*.007,V.add(J)}let de=l(new ct(.003,.003,.06,8),s);de.rotation.x=Math.PI/2,de.position.z=.11,V.add(de);for(let oe=0;oe<2;oe++){let J=l(new Me(.044,.001,.05),o);J.rotation.z=oe*Math.PI/2,J.position.z=.15,V.add(J)}return V}let h=c();n.add(h),h.visible=!1;let u=document.createElement("canvas");u.width=1024,u.height=640;let f=u.getContext("2d"),d=new Be(u);d.colorSpace=Ie;let p=new Ae(new Fe(.95,.594),new we({map:d}));p.name="Wall-mounted darts scoreboard",p.position.set(nt.x+.05,1.8,nt.z-1.08),p.rotation.y=Math.PI/2,n.add(p);let g=new Ae(new Me(1.01,.654,.035),new Oe({color:1517105,roughness:.7}));g.name="Darts scoreboard frame",g.position.copy(p.position),g.position.x-=.022,g.rotation.copy(p.rotation),n.add(g);let v=At("TFJ DARTS","STAFF ROOM  /  NINE DART CHALLENGE","target","#8fe1c3",1.3);v.position.set(nt.x+.065,2.43,nt.z),v.rotation.y=Math.PI/2,n.add(v);let y=pn(.9);y.position.set(nt.x+.55,2.75,nt.z),n.add(y);let b=r.colliders.map(V=>new Je(new _(V.min.x,V.min.y,V.min.z),new _(V.max.x,V.max.y,V.max.z))),m=!1,x=!1,M=null,S=[],E=0,A=!1,I=!1,C=!1,D=0,L=0,k="Hold trigger, throw, release.",w=0,U=[];try{w=Number(localStorage.getItem("tfj-vr-darts-best-v1"))||0}catch{}function q(){Ca(f,{total:D,throws:L,best:w,last:k}),d.needsUpdate=!0}function F(V=!1){x=!1,S=[],h.visible=!1,M&&!V&&(n.remove(M.mesh),M=null),A=!0,I=!1}function O(){F();for(let V of U)n.remove(V);U=[],L=D=0,k="Nine darts. Make them count!",q()}function H(){let ee=[[-21.98,-10.1],[-21.9,-10.35],[-21.9,-9.9]].find(([se,de])=>!r.blocked(se,de,0));return!ee||!r.xrTeleport(ee[0],0,ee[1])?!1:(r.xrFace?.(Math.PI/2),n.visible=m=!0,O(),!0)}function z(){F(),m=!1,n.visible=!1}function G(V,ee){let se=M;if(se){if(se.mesh.position.copy(ee),U.push(se.mesh),M=null,L++,D+=V.score,k=V.label,t(V.score>0?.6:.12),L===9&&D>w){w=D;try{localStorage.setItem("tfj-vr-darts-best-v1",String(w))}catch{}}q()}}function pe(V,ee){let se=h.clone();se.visible=!0,se.position.copy(V),se.quaternion.setFromUnitVectors(new _(0,0,-1),ee.clone().normalize()),n.add(se),M={mesh:se,position:V.clone(),velocity:ee.clone(),age:0},h.visible=!1,x=!1,S=[]}function ne(V,ee,se,de,oe=!1){if(E+=V,!!m){if(oe){x&&F();return}if(se||(I=!0),de&&!C&&L===9&&O(),C=de,ee&&se&&!A&&I&&!M&&L<9){let J=r.stats();J.x<nt.ocheX-.04||J.x>nt.ocheX+1.6||Math.abs(J.z-nt.z)>1||J.y>.15?(k="Stand behind the yellow line.",q()):(x=!0,S=[],h.visible=!0,t(.12))}if(x&&ee&&(h.position.copy(ee.position).addScaledVector(ee.direction,.07),h.quaternion.setFromUnitVectors(new _(0,0,-1),ee.direction),S.push({time:E,position:ee.position.clone()}),S=S.filter(J=>E-J.time<.15),!se&&A)){let J=ud(S);J.length()<.6?(x=!1,h.visible=!1,k="Swing your hand before releasing.",q()):pe(h.position,J)}if(x&&!ee&&F(),A=se,M){let J=Math.max(1,Math.ceil(V/.004166666666666667)),be=V/J;for(let xe=0;xe<J&&M;xe++){let ae=M,fe=dd(ae.position,ae.velocity,be),R=fd(ae.position,fe.position),W=fe.position.clone().sub(ae.position),Y=W.length(),ie=new Ke(ae.position,W.clone().normalize()),T=new _,N=null,B=Y+1e-8;for(let $ of b){if($.containsPoint(ae.position)){N=ae.position.clone(),B=0;break}if(ie.intersectBox($,T)){let K=T.distanceTo(ae.position);K<=B&&(B=K,N=T.clone())}}if(R&&(!N||R.point.distanceTo(ae.position)<=B)){G(R,R.point);break}if(N){G({score:0,label:"Miss \xB7 hit scenery"},N);break}if(fe.position.y<=.025){let $=ft.clamp((ae.position.y-.025)/(ae.position.y-fe.position.y),0,1),K=ae.position.clone().lerp(fe.position,$);ae.mesh.quaternion.setFromUnitVectors(new _(0,0,-1),new _(ae.velocity.x,0,ae.velocity.z).normalize()),G({score:0,label:"Miss \xB7 floor"},K);break}if(ae.position.copy(fe.position),ae.velocity.copy(fe.velocity),ae.mesh.position.copy(ae.position),ae.mesh.quaternion.slerp(new Le().setFromUnitVectors(new _(0,0,-1),ae.velocity.clone().normalize()),1-Math.exp(-18*be)),ae.age+=be,ae.age>4){G({score:0,label:"Miss"},ae.position);break}}}}}return{root:n,start:H,stop:z,cancel:F,reset:O,update:ne,launch:pe,get active(){return m},get held(){return x},get flight(){return M},get total(){return D},get throws(){return L},get last(){return k},get resting(){return U}}}function Ga(r,e,t,n,i=.35){let s=e.clone().sub(r),o=s.length();if(o<1e-7)return null;let a=new Ke(r,s.multiplyScalar(1/o)),l=new _,c=o+1e-6,h=null;for(let u of t){let f=u.clone().expandByScalar(.045);if(f.containsPoint(r))return{type:"wall",point:r.clone(),distance:0};if(a.intersectBox(f,l)){let d=l.distanceTo(r);d<=c&&(c=d,h={type:"wall",point:l.clone(),distance:d})}}for(let u of n)if(a.intersectSphere(new Ft(u.position,i),l)){let f=l.distanceTo(r);f<c&&(c=f,h={type:"target",id:u.id,point:l.clone(),distance:f})}return h}function pd(r,e){let t=r.at(-1),n=r.find(s=>t.time-s.time<=.12&&t.time-s.time>=.045),i=new _;return n&&i.copy(t.position).sub(n.position).multiplyScalar(1/(t.time-n.time)),i.length()<1.2&&i.copy(e).multiplyScalar(5.2).add(new _(0,1.3,0)),i.clampLength(0,9)}function Ha(r){let e=r.worldScene,t=new Te;t.name="VR games",t.visible=!1,e.add(t);let n=Pa(t),i=new Te;i.name="Pok\xE9mon hunt visuals",e.add(i);for(let j of[...r.mollie.balls.map(me=>me.ball),...r.mollie.cards,r.mollie.thrownBall])j?.isObject3D&&i.attach(j);let s=r.colliders.map(j=>new Je(new _(j.min.x,j.min.y,j.min.z),new _(j.max.x,j.max.y,j.max.z))),o=document.createElement("canvas");o.width=1024,o.height=768;let a=o.getContext("2d"),l=new Be(o);l.colorSpace=Ie;let c=new Te;t.add(c);let h=new Ae(new Fe(1.6,1.2),new we({map:l,side:ot}));c.add(h),c.visible=!1;let u=new Ae(new Me(1.64,1.24,.035),new we({color:3561833}));u.position.z=-.025,c.add(u);let f=new Te;c.add(f);let d=new Lt(new De().setFromPoints([new _,new _(0,0,-1)]),new St({color:16769946}));d.visible=!1,t.add(d);let p=new Ae(new je(.012,8,6),new we({color:16769946}));p.visible=!1,t.add(p);let g=r.mollie.balls[0].ball.clone();g.scale.setScalar(.43),g.visible=!1,t.add(g);let v=ks();v.group.visible=!1,t.add(v.group);let y=document.createElement("canvas");y.width=768,y.height=192;let b=y.getContext("2d"),m=new Be(y);m.colorSpace=Ie;let x=new Ae(new Fe(.95,.2375),new we({map:m,transparent:!0,depthTest:!1,depthWrite:!1}));x.name="Adventure notification",x.renderOrder=1e3,t.add(x),x.visible=!1;let M="explore",S="menu",E=[],A=null,I=null,C=0,D=!1,L=null,k=!1,w=null,U=[],q=0,F=!1,O=!1,H=!1,z=!0,G=[],pe=0,ne=0,V="Welcome, Mollie!",ee="",se=0,de=!1,oe=null,J=0,be=0;try{be=Number(localStorage.getItem("tfj-vr-jigglypuff-rounds-v1"))||0}catch{}let xe=(j,me=.3)=>{try{j?.gamepad?.hapticActuators?.[0]?.pulse(me,70)?.catch?.(()=>{})}catch{}},ae=ka(c,r,()=>{S="menu",ae.close(),h.visible=u.visible=!0,z=!0,Se()}),fe=Va(r,t,j=>xe(L?.right,j)),R=Ba(r,t,j=>xe(L?.right,j)),W=za(r,t),Y=Ua(r,t,Et,j=>xe(L?.right,j)),ie=Da(r,t,Et,j=>xe(L?.right,j)),T=0,N=!0;try{N=localStorage.getItem("tfj-companion-enabled")!=="false"}catch{}function B(j){N=!!j;try{localStorage.setItem("tfj-companion-enabled",String(N))}catch{}N?W.summon():(M==="friend"&&Kt(),W.group.visible=!1),Se()}let $=Fa(r,t,Et,j=>xe(L?.right,j),X),K=Oa(r,t,W,Et,j=>xe(L?.right,j)),P=!1;function Q(){if(M==="jigglypuff"){V="Jigglypuff is hiding! Finish hide-and-seek to bring your friend back.",ye();return}W.summon(),We()}function he(){ut(),S="album",h.visible=u.visible=!1,f.clear(),ae.open(),z=!0}function ge(){try{oe??(oe=new(window.AudioContext||window.webkitAudioContext)),oe.resume()?.catch(()=>{})}catch{}}function X(j){if(!(!oe||oe.state!=="running"))try{let me=Math.floor(oe.sampleRate*.07),ze=oe.createBuffer(1,me,oe.sampleRate),Ye=ze.getChannelData(0);for(let ve=0;ve<me;ve++)Ye[ve]=(Math.random()*2-1)*Math.exp(-ve/me*5);for(let ve=0;ve<(j?12:7);ve++){let it=oe.createBufferSource(),Xe=oe.createGain(),Bt=oe.createBiquadFilter();it.buffer=ze,Bt.type="highpass",Bt.frequency.value=650,Xe.gain.value=.055+ve%3*.012,it.connect(Bt),Bt.connect(Xe),Xe.connect(oe.destination),it.start(oe.currentTime+ve*.095+ve%2*.025),it.onended=()=>{it.disconnect(),Bt.disconnect(),Xe.disconnect()}}}catch{}}function te(){if(!oe||oe.state!=="running")return;let j=v.group.position;try{let me=oe.createPanner();me.panningModel="HRTF",me.distanceModel="inverse",me.refDistance=2,me.maxDistance=25,me.positionX.value=j.x,me.positionY.value=j.y+.6,me.positionZ.value=j.z,me.connect(oe.destination),[523.25,659.25,587.33].forEach((ze,Ye)=>{let ve=oe.createOscillator(),it=oe.createGain(),Xe=oe.currentTime+Ye*.18;ve.type="sine",ve.frequency.value=ze,it.gain.setValueAtTime(0,Xe),it.gain.linearRampToValueAtTime(.09,Xe+.025),it.gain.exponentialRampToValueAtTime(.001,Xe+.17),ve.connect(it),it.connect(me),ve.start(Xe),ve.stop(Xe+.18),ve.onended=()=>{ve.disconnect(),it.disconnect()}}),setTimeout(()=>me.disconnect(),1200)}catch{}}function _e(j,me,ze,Ye=32,ve="#fff"){a.font=`${Ye>=40?"bold ":""}${Ye}px Arial`,a.fillStyle=ve,a.fillText(j,me,ze)}function ue(j,me,ze,Ye,ve){E.push({label:j,x:me,y:ze,w:Ye,h:72,action:ve}),Ta(a,j,me,ze,Ye,A===j)}function Se(){S!=="album"&&(E=[],wa(a,yo()),T===0?(ue("Pok\xE9mon throwing hunt",44,196,455,()=>Dt("hunt")),ue("Jigglypuff hide-and-seek",519,196,461,()=>Dt("jigglypuff")),ue("Darts \xB7 go to the staff-room throwing line",44,280,455,()=>Dt("darts")),ue("Memory match \xB7 staff-room table",519,280,461,()=>Dt("memory")),ue(`Open the card album \xB7 ${r.mollie.found.size} / 18`,44,364,455,he),ue("Play with Jigglypuff",519,364,461,()=>Dt("friend")),ue("Pok\xE9 Ball basketball",44,448,455,()=>Dt("basketball")),ue("Warehouse bowling",519,448,461,()=>Dt("bowling"))):(ue("Paper-plane challenge",44,196,936,()=>Dt("planes")),ue("Warehouse mini-golf",44,280,936,()=>Dt("golf")),ue("Back to exploring",44,364,936,()=>{Kt(),We()}),ue(N?"Hide companion \xB7 Jigglypuff is on":"Show companion \xB7 Jigglypuff is off",44,448,936,()=>B(!N))),ue("Resume",44,548,445,We),ue(T===0?"More games & settings \u2192":"\u2190 Main games",509,548,471,()=>{T=1-T,Se()}),Aa(a),l.needsUpdate=!0)}function Ue(){f.clear()}function qe(){if(!L){de=!0;return}de=!1;let j=L.forward.clone();j.y=0,j.normalize(),c.position.copy(L.eye).addScaledVector(j,1.9),c.position.y=Math.max(L.eye.y-.1,r.stats().y+.85),c.rotation.set(0,Math.atan2(-j.x,-j.z),0)}function ye(){T=0,se=0,x.visible=!1,ut(),ae.close(),h.visible=u.visible=!0,S="menu",Ue(),c.visible=!0,z=!0,A=null,qe(),Se()}function We(){ae.close(),S="menu",h.visible=u.visible=!0,c.visible=!1,d.visible=p.visible=!1,z=!0,A=null}function ut(j=!1){ie.cancel(),Y.cancel(),$.cancel(),K.cancel(),fe.cancel(j),k=!1,w=null,U=[],g.visible=!1}function Kt(){n.update("explore",null),i.visible=!0,ie.stop(),Y.stop(),$.stop(),K.stop(),se=0,x.visible=!1,R.stop(),fe.stop(),M="explore",v.group.visible=!1,ne=0,ut(),V="Choose an adventure whenever you like."}function _o(){return[[-19,-18,"the Unit 8 workshop"],[-11,-13,"the front of Unit 8"],[-20,-28,"the rear of Unit 8"],[11.25,-21.5,"the downstairs offices"],[20,-28,"the back offices"],[5,-23,"the Unit 9 warehouse"],[-7,2,"the Unit 8 side of the yard"],[19,-3,"the Unit 9 frontage"]].flatMap(([me,ze,Ye])=>{for(let[ve,it]of[[1.8,0],[-1.8,0],[0,1.8],[0,-1.8]]){let Xe=new _(me+ve,0,ze+it);if(!r.blocked(Xe.x,Xe.z,0)&&r.groundAt(Xe.x,Xe.z,.1)===0&&r.mollie.balls.every(Bt=>Bt.ball.position.distanceTo(Xe)>1.3))return[{point:Xe,clue:Ye}]}return[]})}function vo(){v.group.position.copy(G[pe].point),v.group.visible=!0,J=q+1,V=`Try ${G[pe].clue}.`,Et(V)}function Dt(j){if(Kt(),M=j,M==="golf"){if(!ie.start()){M="explore",V="No clear warehouse green available.",Se();return}i.visible=!1,We();return}if(M==="friend"&&!N&&B(!0),M==="planes"){if(!Y.start()){M="explore",V="The plane course is blocked. Try again.",Se();return}We();return}if(M==="bowling"){if(!$.start()){M="explore",V="The warehouse lane is blocked. Try again.",Se();return}i.visible=!1,We();return}if(M==="friend"||M==="basketball"){if(!K.start(M)){M="explore",V="No clear basketball space available.",Se();return}We();return}if(M==="memory"){if(!R.start()){M="explore",V="The table is not accessible. Try again.",Se();return}We();return}if(M==="darts"){if(!fe.start()){M="explore",V="The throwing line is blocked. Try again.",Se();return}V="Nine darts. Hold trigger, throw and release.",We();return}if(M==="hunt")r.xrGames.start(),V="Hold trigger, swing gently and release!";else{G=_o();for(let me=G.length-1;me>0;me--){let ze=Math.floor(Math.random()*(me+1));[G[me],G[ze]]=[G[ze],G[me]]}if(G=G.slice(0,3),pe=0,G.length<3){M="explore",V="No clear hiding spots. Please try again.",Se();return}vo()}We()}function qa(){if(M!=="jigglypuff"||ne||!v.group.visible)return!1;if(pe++,v.group.visible=!1,xe(L?.right,.6),pe===3){be++;try{localStorage.setItem("tfj-vr-jigglypuff-rounds-v1",String(be))}catch{}M="explore",V="You found Jigglypuff 3 times! Champion!",Et(V)}else ne=1.5,V=`Found ${pe} / 3! Finding a new hiding spot\u2026`,Et(V);return!0}function yo(){return M==="golf"?ie.complete?`Mini-golf complete: ${ie.total} strokes \xB7 Best ${ie.best}`:`Mini-golf: hole ${ie.hole+1}/6 \xB7 ${ie.strokes} strokes \xB7 Par ${ie.layout.par}`:M==="planes"?`Paper planes: ${Y.score} points \xB7 ${Y.throws}/5 throws \xB7 Longest ${Y.longest.toFixed(1)} m`:M==="bowling"?`Bowling: ${$.total} / 100 pins \xB7 ${$.frame===10?"Complete":`Frame ${$.frame+1} \xB7 Bowl ${$.roll+1}`}`:M==="basketball"?`Basketball: ${K.score} baskets \xB7 ${K.shots}/10 throws`:M==="friend"?`Berries: ${K.feeds} \xB7 High-fives: ${K.fives} \xB7 Offer a berry or touch her raised hand`:M==="hunt"?`Pok\xE9mon: ${r.mollie.found.size}/18 \xB7 Hold trigger, swing and release`:M==="jigglypuff"?ne?V:`Found ${pe}/3 \xB7 Try ${G[pe].clue}`:M==="darts"?`Darts: ${fe.total} points \xB7 ${fe.throws}/9 darts \xB7 ${fe.last}`:M==="memory"?`Memory: ${R.matched.size/2}/${R.deck.length/2} pairs \xB7 ${R.moves} turns`:V}function Et(j){ee=j,Ea(b,j),m.needsUpdate=!0,se=3}function Ya(j){if(x.visible=!c.visible&&se>0,!x.visible)return;let me=j.headOrientation||new Le().setFromUnitVectors(new _(0,0,-1),j.forward.clone().normalize());x.position.set(0,-.28,-2.1).applyQuaternion(me).add(j.eye),x.quaternion.copy(me),x.material.opacity=Math.min(1,se/.5),se=Math.max(0,se-j.dt)}function $a(j){return!j||j.visible===!1?null:{position:j.getWorldPosition(new _),direction:new _(0,0,-1).applyQuaternion(j.getWorldQuaternion(new Le))}}function Za(j){if(!j)return null;if(S==="album"){let ve=ae.point(j);return d.geometry.setFromPoints([j.position,ve?ve.point:j.position.clone().addScaledVector(j.direction,2)]),d.visible=!0,p.visible=!!ve,ve&&p.position.copy(ve.point),ve?{...ve,label:"album"}:null}c.updateMatrixWorld(!0);let me=new $t(j.position,j.direction,0,4).intersectObject(h)[0];if(d.geometry.setFromPoints([j.position,me?me.point:j.position.clone().addScaledVector(j.direction,2)]),d.visible=!0,p.visible=!!me,me&&p.position.copy(me.point),!me)return null;let ze=me.uv.x*1024,Ye=(1-me.uv.y)*768;return E.find(ve=>ze>=ve.x&&ze<=ve.x+ve.w&&Ye>=ve.y&&Ye<=ve.y+ve.h)}function Ja(j){if(!j||!v.group.visible)return!1;let me=v.group.position.clone().add(new _(0,.58,0)),ze=j.position.clone().addScaledVector(j.direction,4);return Ga(j.position,ze,s,[{id:0,position:me}],.5)?.type==="target"&&j.position.distanceTo(me)<3.3}function Ka(j){L=j,de&&qe();let{dt:me,eye:ze,forward:Ye,right:ve,left:it,controller:Xe}=j,Bt=fe.throws,tl=R.complete;q+=me;let Qt=!!ve?.gamepad?.buttons[0]?.pressed,Mo=!!it?.gamepad?.buttons[5]?.pressed,bo=!!ve?.gamepad?.buttons[5]?.pressed,Ct=$a(Xe);if(Mo&&!O&&(c.visible?We():ye()),bo&&!H&&(c.visible&&S==="album"?(ae.back(),z=!0):c.visible?We():(Kt(),ye())),O=Mo,H=bo,Qt||(z=!1),c.visible){S==="album"&&ae.tick(me,!!ve?.gamepad?.buttons[1]?.pressed,Xe?.getWorldQuaternion(new Le));let at=Za(Ct);A=at?.label||null,A!==I&&(I=A,Se()),Qt&&!F&&!z&&at&&(xe(ve),at.action(),z=!0),x.visible=!1}else d.visible=p.visible=!1,M==="darts"&&fe.update(me,z?null:Ct,!z&&Qt,!!ve?.gamepad?.buttons[4]?.pressed),M==="hunt"&&Ct&&(Qt&&!F&&!z&&!w&&(k=!0,U=[],g.visible=!0,xe(ve,.15)),k&&(g.position.copy(Ct.position).addScaledVector(Ct.direction,.09),U.push({time:q,position:Ct.position.clone()}),U=U.filter(at=>q-at.time<.16),!Qt&&F&&(w={position:g.position.clone(),velocity:pd(U,Ct.direction),life:0},k=!1,U=[],xe(ve,.2)))),M==="jigglypuff"&&(v.animate(me,!1),ne?(ne-=me,ne<=0&&(ne=0,vo())):v.group.visible&&(v.group.rotation.y=Math.atan2(ze.x-v.group.position.x,ze.z-v.group.position.z),Ja(Ct)&&(d.geometry.setFromPoints([Ct.position,v.group.position.clone().add(new _(0,.6,0))]),d.visible=!0,Qt&&!F&&!z&&qa()),q>J&&(te(),J=q+6)));if(M==="memory"){R.tick(me,c.visible);let at=!!ve?.gamepad?.buttons[4]?.pressed;if(at&&!P&&R.complete&&!c.visible&&R.reset(),P=at,!c.visible){let dt=R.point(Ct);dt&&(d.geometry.setFromPoints([Ct.position,dt.point]),d.visible=!0,p.position.copy(dt.point),p.visible=!0,Qt&&!F&&!z&&dt.action())}}if(n.update(M,M==="golf"?ie.origin:M==="bowling"?$.origin:M==="planes"?Y.origin:M==="basketball"?K.origin:null),i.visible=!["bowling","golf"].includes(M),W.tick(me,Ye,!N||["jigglypuff","darts","basketball","bowling","planes","memory","golf"].includes(M),M==="friend"),K.tick(j,c.visible),$.tick(j,c.visible),Y.tick(j,c.visible),ie.tick(j,c.visible),!Xe&&k&&ut(),w&&!c.visible){let at=Math.max(1,Math.ceil(me/.012)),dt=me/at;for(let Ii=0;Ii<at&&w;Ii++){let gn=w,Kn=gn.position.clone().addScaledVector(gn.velocity,dt);Kn.y-=4.9*dt*dt;let nl=r.mollie.balls.flatMap((il,So)=>r.mollie.found.has(So)?[]:[{id:So,position:il.ball.position}]),Li=Ga(gn.position,Kn,s,nl);if(Li){Li.type==="target"&&r.xrGames.collect(Li.id)&&(V=`${r.xrGames.names[Li.id]} found! ${r.mollie.found.size}/18 cards.`,Et(V),xe(ve,.8),r.mollie.found.size===18&&(V="All 18 cards found! Brilliant, Mollie!",Et(V))),ut();break}gn.position.copy(Kn),gn.velocity.y-=9.8*dt,gn.life+=dt,g.position.copy(Kn),g.rotation.x+=dt*7,(Kn.y<0||gn.life>3)&&ut()}}if(oe?.listener)try{let at=oe.listener;for(let[dt,Ii]of Object.entries({positionX:ze.x,positionY:ze.y,positionZ:ze.z,forwardX:Ye.x,forwardY:Ye.y,forwardZ:Ye.z,upX:0,upY:1,upZ:0}))at[dt]&&(at[dt].value=Ii)}catch{}return M==="darts"&&Bt<9&&fe.throws===9&&Et(`Round complete! ${fe.total} points. A to play again.`),M==="memory"&&!tl&&R.complete&&Et(`All pairs matched in ${R.moves} turns!`),Ya(j),F=Qt,{consumeTrigger:c.visible||M!=="explore"||z,blockTeleport:ie.held,blockMovement:c.visible||k||fe.held||K.held||$.held||Y.held||ie.held}}function Qa(){W.summon(),t.visible=!0,M="explore",F=O=H=!1,z=!0,V="Choose a game, or resume exploring.",ye()}function ja(){Kt(),We(),x.visible=!1,t.visible=!1,L=null,oe?.suspend()?.catch(()=>{})}function el(){ut(!0),F=!0,z=!0}return{pokemonLayer:i,setCompanionEnabled:B,get companionEnabled(){return N},golf:ie,planes:Y,bowling:$,play:K,memory:R,companion:W,progress:yo,callCompanion:Q,album:ae,darts:fe,showAlbum:he,tick:Ka,begin:Qa,end:ja,enableAudio:ge,open:ye,close:We,start:Dt,stop:Kt,interrupt:el,chooseSpots:_o,get mode(){return M},get menuOpen(){return c.visible},get found(){return pe},get route(){return G},get held(){return k||fe.held||K.held||$.held||Y.held||ie.held},get flight(){return w},get board(){return c},get root(){return t},puff:v.group,ball:g}}function Vs(r,e=.18){return Math.abs(r)<=e?0:Math.sign(r)*(Math.abs(r)-e)/(1-e)}function go(r){let e=r?.gamepad?.axes||[];return e.length>=4?[e[2],e[3]]:[e[0]||0,e[1]||0]}function Wa(r,e,t,n){Math.abs(r)<.25&&(n=!1);let i=0;return e==="smooth"?i=-Vs(r)*Math.PI/3*t:Math.abs(r)>.65&&!n&&(i=-Math.sign(r)*Math.PI/6,n=!0),{angle:i,latched:n}}function xo(r,e,t){return{x:r*Math.cos(t)+e*Math.sin(t),z:e*Math.cos(t)-r*Math.sin(t)}}var mn=r=>document.querySelector(r),Ot=mn("#questEnter"),Jt=mn("#questStatus"),Gs=mn("#questPanel");mn("#questPreview").onclick=()=>{Gs.hidden=!0,mn("#questReturn").hidden=!1};mn("#questReturn").onclick=()=>{window.yardDebug?.pause(),Gs.hidden=!1};async function md(r){let e=r.renderer,t=r.worldScene,n=r.worldCamera,i=Ha(r);r.vrGames=i,e.xr.enabled=!0,e.xr.setReferenceSpaceType("local-floor"),e.xr.setFramebufferScaleFactor(.85),e.xr.setFoveation(1);let s=new Te;s.name="Quest player rig",t.add(s);let o=[e.xr.getController(0),e.xr.getController(1)],a=o.map((C,D)=>e.xr.getControllerGrip?.(D)||C);for(let C of a)o.includes(C)||s.add(C);let l=new Map;o.forEach(C=>{s.add(C),C.addEventListener("connected",L=>l.set(C,L.data)),C.addEventListener("disconnected",()=>l.delete(C));let D=new Ae(new je(.018,8,6),new we({color:16769946}));C.add(D)});let c=new Lt(new De,new St({color:8645568}));c.frustumCulled=!1,c.visible=!1,t.add(c);let h=new Ae(new hn(.22,.3,32),new we({color:8645568,side:2,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.visible=!1,t.add(h);let u=r.colliders.map(C=>new Je(new _(C.min.x,C.min.y,C.min.z),new _(C.max.x,C.max.y,C.max.z))),f=0,d=new _,p=new Le,g=null,v=!1,y=!1,b=!1,m=null,x,M,S=()=>({fwd:0,strafe:0,turn:0,run:!1,jump:!1,look:{dx:0,dy:0}}),E=()=>{let C=r.stats(),D=xo(d.x,d.z,f);s.position.set(C.x-D.x,C.y+(window.yardFloorOffset||0),C.z-D.z),s.rotation.y=f,n.position.set(0,0,0),n.quaternion.identity(),s.updateMatrixWorld(!0)};r.xrFace=C=>{let D=new _(0,0,-1).applyQuaternion(p);f=C-Math.atan2(-D.x,-D.z),g=null,E()};function A(C){if(m=null,!C){c.visible=h.visible=!1;return}let D=C.getWorldPosition(new _),k=new _(0,0,-1).applyQuaternion(C.getWorldQuaternion(new Le)).multiplyScalar(6);k.y+=2;let w=[D.clone()],U=new Ke,q=new _,F=D.clone(),O=null;for(let H=1;H<=32;H++){let z=H*.05,G=D.clone().addScaledVector(k,z);G.y-=4.9*z*z;let pe=G.clone().sub(F),ne=pe.length();U.set(F,pe.normalize());let V=ne,ee=null,se=!1;for(let de of u){if(de.containsPoint(F))continue;let oe=U.intersectBox(de,q);if(oe){let J=oe.distanceTo(F);J<V&&(V=J,ee=oe.clone(),se=Math.abs(oe.y-de.max.y)<.015)}}if(F.y>=0&&G.y<=0){let de=F.clone().lerp(G,F.y/(F.y-G.y));de.distanceTo(F)<V&&(ee=de,se=!0)}if(ee){w.push(ee),O=ee,se&&!r.blocked(ee.x,ee.z,ee.y)&&Math.abs(r.groundAt(ee.x,ee.z,ee.y+.05)-ee.y)<.12&&(m=ee);break}w.push(G),F=G}c.geometry.dispose(),c.geometry=new De().setFromPoints(w),c.visible=!0,c.material.color.set(m?8645568:16746618),h.visible=!!m,m&&h.position.copy(m).add(new _(0,.025,0))}let I=window.questBridge={frame:null,sample(C){let D=e.xr.getSession(),L=this.frame?.getViewerPose(e.xr.getReferenceSpace());if(!L||D?.visibilityState==="hidden")return g=null,i.interrupt(),S();if(d.set(L.transform.position.x,L.transform.position.y,L.transform.position.z),p.copy(L.transform.orientation),g){let oe=xo(d.x-g.x,d.z-g.z,f);Math.hypot(oe.x,oe.z)<.8&&r.xrPhysical(oe.x,oe.z)}g=d.clone();let k,w;for(let oe of D.inputSources)oe.handedness==="left"&&(k=oe),oe.handedness==="right"&&(w=oe);let[U,q]=go(k),[F]=go(w),O=Wa(F,mn("#questTurning").value,C,v);!i.menuOpen&&!i.held&&(f+=O.angle,O.angle&&i.interrupt()),v=O.latched;let H=!!k?.gamepad?.buttons[4]?.pressed;H&&!b&&(i.interrupt(),r.resetPosition(),f=0,g=null,i.close()),b=H,E();let z=o.find(oe=>l.get(oe)?.handedness==="right"),G=new _(0,0,-1).applyQuaternion(p),pe=G.clone().applyAxisAngle(new _(0,1,0),f),ne=i.tick({dt:C,eye:d.clone().applyMatrix4(s.matrixWorld),forward:pe,headOrientation:s.getWorldQuaternion(new Le).multiply(p),left:k,right:w,controller:z,leftController:a[o.findIndex(oe=>l.get(oe)?.handedness==="left")]}),V=!ne.blockTeleport&&!i.menuOpen&&(!!w?.gamepad?.buttons[1]?.pressed||!ne.consumeTrigger&&!!w?.gamepad?.buttons[0]?.pressed);V&&(i.interrupt(),A(z)),!V&&y&&(m&&!i.menuOpen&&!ne.blockTeleport&&r.xrTeleport(m.x,m.y,m.z),m=null,c.visible=h.visible=!1),y=V;let ee=f+Math.atan2(-G.x,-G.z);r.xrHeading(ee);let se=S(),de=Number(mn("#questSpeed").value)/2.9;return se.fwd=-Vs(q)*de,se.strafe=Vs(U)*de,(V||ne.blockMovement)&&(se.fwd=se.strafe=0),se},beforeRender(){e.xr.isPresenting&&E()}};if(e.xr.addEventListener("sessionstart",()=>{M=n.parent,x=e.shadowMap.enabled,e.shadowMap.enabled=!1,s.add(n),f=0,d.set(0,0,0),g=null,v=y=b=!1,r.xrBegin(),E(),i.begin(),document.body.classList.add("questActive"),Gs.hidden=!0,Jt.textContent="VR is running. Use the Meta menu to exit.",Ot.disabled=!0}),e.xr.addEventListener("sessionend",()=>{i.end(),s.remove(n),M&&M.add(n),e.shadowMap.enabled=x,c.visible=h.visible=!1,g=null,r.xrEnd(),document.body.classList.remove("questActive"),Gs.hidden=!1,Ot.disabled=!1,Ot.textContent="Enter VR again",Jt.textContent="You have left VR."}),Ot.onclick=async()=>{Ot.disabled=!0;let C;try{i.enableAudio(),C=await navigator.xr.requestSession("immersive-vr",{requiredFeatures:["local-floor"]}),C.addEventListener("visibilitychange",()=>{g=null}),await e.xr.setSession(C)}catch(D){C&&await C.end().catch(()=>{}),Ot.disabled=!1,Jt.textContent="Could not enter VR: "+D.message}},!window.isSecureContext){Ot.textContent="HTTPS hosting needed",Jt.textContent="This file is ready for hosting. Quest VR needs a secure HTTPS address; opening the HTML file directly is only a desktop preview.";return}if(!navigator.xr){Ot.textContent="Open in your Quest browser",Jt.textContent="VR is not available in this browser. After hosting, open the HTTPS link in the browser on your Quest 3.";return}try{let C=await navigator.xr.isSessionSupported("immersive-vr");Ot.disabled=!C,Ot.textContent=C?"Enter VR":"VR headset not detected",Jt.textContent=C?"Ready. Put on your headset and select Enter VR.":"Open the hosted page in your Quest 3 browser to enter VR."}catch(C){Jt.textContent="VR availability check failed: "+C.message}}var gd=0,Xa=setInterval(()=>{window.yardDebug?.renderer?(clearInterval(Xa),md(window.yardDebug).catch(r=>{Jt.textContent="VR setup failed: "+r.message,console.error(r)})):++gd>1200&&(clearInterval(Xa),Jt.textContent="The yard has not loaded. Reload the page and check that WebGL is enabled.")},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
