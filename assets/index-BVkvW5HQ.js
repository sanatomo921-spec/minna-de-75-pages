(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Za="180",vu=0,Rc=1,xu=2,ah=1,Mu=2,Wn=3,ai=0,en=1,Ge=2,si=0,Qi=1,Gr=2,Pc=3,Lc=4,yu=5,vi=100,Su=101,bu=102,Eu=103,wu=104,Tu=200,Au=201,Cu=202,Ru=203,Jo=204,Ko=205,Pu=206,Lu=207,Iu=208,Du=209,Uu=210,Nu=211,Fu=212,Ou=213,Bu=214,jo=0,Qo=1,ta=2,is=3,ea=4,na=5,ia=6,sa=7,$a=0,zu=1,ku=2,ri=0,Gu=1,Hu=2,Vu=3,Wu=4,Xu=5,qu=6,Yu=7,ch=300,ss=301,rs=302,ra=303,oa=304,Jr=306,Fs=1e3,Mi=1001,aa=1002,cn=1003,Zu=1004,nr=1005,Pn=1006,io=1007,yi=1008,Fn=1009,lh=1010,hh=1011,Os=1012,Ja=1013,wi=1014,Ln=1015,Ks=1016,Ka=1017,ja=1018,Bs=1020,uh=35902,fh=35899,dh=1021,ph=1022,Sn=1023,zs=1026,ks=1027,Qa=1028,tc=1029,mh=1030,ec=1031,nc=1033,Fr=33776,Or=33777,Br=33778,zr=33779,ca=35840,la=35841,ha=35842,ua=35843,fa=36196,da=37492,pa=37496,ma=37808,ga=37809,_a=37810,va=37811,xa=37812,Ma=37813,ya=37814,Sa=37815,ba=37816,Ea=37817,wa=37818,Ta=37819,Aa=37820,Ca=37821,Ra=36492,Pa=36494,La=36495,Ia=36283,Da=36284,Ua=36285,Na=36286,$u=3200,Ju=3201,gh=0,Ku=1,ni="",ve="srgb",os="srgb-linear",Hr="linear",fe="srgb",Li=7680,Ic=519,ju=512,Qu=513,tf=514,_h=515,ef=516,nf=517,sf=518,rf=519,Fa=35044,Ls=35048,Dc="300 es",In=2e3,Vr=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],so=Math.PI/180,Oa=180/Math.PI;function Xn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[s&255]+Ve[s>>8&255]+Ve[s>>16&255]+Ve[s>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function of(s,t){return(s%t+t)%t}function ro(s,t,e){return(1-e)*s+e*t}function Cn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function de(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ft{constructor(t=0,e=0){ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,T=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const A=Math.sqrt(b),E=Math.atan2(A,p*T);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const v=a*T;if(c=c*m+f*v,l=l*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new L,Uc=new Un;class Kt{constructor(t,e,n,i,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],b=i[4],v=i[7],A=i[2],E=i[5],C=i[8];return r[0]=o*_+a*T+c*A,r[3]=o*m+a*b+c*E,r[6]=o*p+a*v+c*C,r[1]=l*_+h*T+u*A,r[4]=l*m+h*b+u*E,r[7]=l*p+h*v+u*C,r[2]=f*_+d*T+g*A,r[5]=f*m+d*b+g*E,r[8]=f*p+d*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ao.makeScale(t,e)),this}rotate(t){return this.premultiply(ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ao=new Kt;function vh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function af(){const s=Wr("canvas");return s.style.display="block",s}const Nc={};function Gs(s){s in Nc||(Nc[s]=!0,console.warn(s))}function cf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Fc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){const s={enabled:!0,workingColorSpace:os,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ni?Hr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[os]:{primaries:t,whitePoint:n,transfer:Hr,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}}),s}const ae=lf();function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ii;class hf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=Wr("canvas")),Ii.width=t.width,Ii.height=t.height;const i=Ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uf=0;class ic{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(co(i[o].image)):r.push(co(i[o]))}else r=co(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;const lo=new L;class Ue extends us{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=Mi,i=Mi,r=Pn,o=yi,a=Sn,c=Fn,l=Ue.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Xn(),this.name="",this.source=new ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lo).x}get height(){return this.source.getSize(lo).y}get depth(){return this.source.getSize(lo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fs:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fs:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=ch;Ue.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,n=0,i=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,v=(d+1)/2,A=(p+1)/2,E=(h+f)/4,C=(u+_)/4,I=(g+m)/4;return b>v&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=C/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=I/r),this.set(n,i,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends us{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new Ue(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ic(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends df{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xh extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends Ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),sr.subVectors(this.max,ms),Di.subVectors(t.a,ms),Ui.subVectors(t.b,ms),Ni.subVectors(t.c,ms),Zn.subVectors(Ui,Di),$n.subVectors(Ni,Ui),hi.subVectors(Di,Ni);let e=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-hi.z,hi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,hi.z,0,-hi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-hi.y,hi.x,0];return!ho(e,Di,Ui,Ni,sr)||(e=[1,0,0,0,1,0,0,0,1],!ho(e,Di,Ui,Ni,sr))?!1:(rr.crossVectors(Zn,$n),e=[rr.x,rr.y,rr.z],ho(e,Di,Ui,Ni,sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new L,new L,new L,new L,new L,new L,new L,new L],_n=new L,ir=new Ci,Di=new L,Ui=new L,Ni=new L,Zn=new L,$n=new L,hi=new L,ms=new L,sr=new L,rr=new L,ui=new L;function ho(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ui.fromArray(s,r);const a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),c=t.dot(ui),l=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const mf=new Ci,gs=new L,uo=new L;class fs{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);const e=gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(uo)),this.expandByPoint(gs.copy(t.center).sub(uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const kn=new L,fo=new L,or=new L,Jn=new L,po=new L,ar=new L,mo=new L;class Mh{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fo.copy(t).add(e).multiplyScalar(.5),or.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(fo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(or),a=Jn.dot(this.direction),c=-Jn.dot(or),l=Jn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fo).addScaledVector(or,f),d}intersectSphere(t,e){kn.subVectors(t.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,r){po.subVectors(e,t),ar.subVectors(n,t),mo.crossVectors(po,ar);let o=this.direction.dot(mo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,t);const c=a*this.direction.dot(ar.crossVectors(Jn,ar));if(c<0)return null;const l=a*this.direction.dot(po.cross(Jn));if(l<0||c+l>o)return null;const h=-a*Jn.dot(mo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gf,t,_f)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Kn.crossVectors(n,rn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Kn.crossVectors(n,rn)),Kn.normalize(),cr.crossVectors(rn,Kn),i[0]=Kn.x,i[4]=cr.x,i[8]=rn.x,i[1]=Kn.y,i[5]=cr.y,i[9]=rn.y,i[2]=Kn.z,i[6]=cr.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],b=n[7],v=n[11],A=n[15],E=i[0],C=i[4],I=i[8],S=i[12],M=i[1],P=i[5],O=i[9],B=i[13],q=i[2],H=i[6],X=i[10],K=i[14],V=i[3],ht=i[7],et=i[11],bt=i[15];return r[0]=o*E+a*M+c*q+l*V,r[4]=o*C+a*P+c*H+l*ht,r[8]=o*I+a*O+c*X+l*et,r[12]=o*S+a*B+c*K+l*bt,r[1]=h*E+u*M+f*q+d*V,r[5]=h*C+u*P+f*H+d*ht,r[9]=h*I+u*O+f*X+d*et,r[13]=h*S+u*B+f*K+d*bt,r[2]=g*E+_*M+m*q+p*V,r[6]=g*C+_*P+m*H+p*ht,r[10]=g*I+_*O+m*X+p*et,r[14]=g*S+_*B+m*K+p*bt,r[3]=T*E+b*M+v*q+A*V,r[7]=T*C+b*P+v*H+A*ht,r[11]=T*I+b*O+v*X+A*et,r[15]=T*S+b*B+v*K+A*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,b=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,v=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,E=e*T+n*b+i*v+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=T*C,t[1]=(_*f*r-u*m*r-_*i*d+n*m*d+u*i*p-n*f*p)*C,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*C,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*C,t[4]=b*C,t[5]=(h*m*r-g*f*r+g*i*d-e*m*d-h*i*p+e*f*p)*C,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*C,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*C,t[8]=v*C,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*C,t[12]=A*C,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,T=c*l,b=c*h,v=c*u,A=n.x,E=n.y,C=n.z;return i[0]=(1-(_+p))*A,i[1]=(d+v)*A,i[2]=(g-b)*A,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+p))*E,i[6]=(m+T)*E,i[7]=0,i[8]=(g+b)*C,i[9]=(m-T)*C,i[10]=(1-(f+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Fi.set(i[0],i[1],i[2]).length();const o=Fi.set(i[4],i[5],i[6]).length(),a=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],vn.copy(this);const l=1/r,h=1/o,u=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=In,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===In)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Vr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=In,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===In)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Vr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new L,vn=new se,gf=new L(0,0,0),_f=new L(1,1,1),Kn=new L,cr=new L,rn=new L,Bc=new se,zc=new Un;class ln{constructor(t=0,e=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zc.setFromEuler(this),this.setFromQuaternion(zc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vf=0;const kc=new L,Oi=new Un,Gn=new se,lr=new L,_s=new L,xf=new L,Mf=new Un,Gc=new L(1,0,0),Hc=new L(0,1,0),Vc=new L(0,0,1),Wc={type:"added"},yf={type:"removed"},Bi={type:"childadded",child:null},go={type:"childremoved",child:null};class Ne extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new L,e=new ln,n=new Un,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Vc,t)}translateOnAxis(t,e){return kc.copy(t).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lr.copy(t):lr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(_s,lr,this.up):Gn.lookAt(lr,_s,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf),go.child=t,this.dispatchEvent(go),go.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new L,Hn=new L,_o=new L,Vn=new L,zi=new L,ki=new L,Xc=new L,vo=new L,xo=new L,Mo=new L,yo=new Re,So=new Re,bo=new Re;class gn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){xn.subVectors(i,e),Hn.subVectors(n,e),_o.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(Hn),c=xn.dot(_o),l=Hn.dot(Hn),h=Hn.dot(_o),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return yo.setScalar(0),So.setScalar(0),bo.setScalar(0),yo.fromBufferAttribute(t,e),So.fromBufferAttribute(t,n),bo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(yo,r.x),o.addScaledVector(So,r.y),o.addScaledVector(bo,r.z),o}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),Hn.subVectors(t,e),xn.cross(Hn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),xn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;zi.subVectors(i,n),ki.subVectors(r,n),vo.subVectors(t,n);const c=zi.dot(vo),l=ki.dot(vo);if(c<=0&&l<=0)return e.copy(n);xo.subVectors(t,i);const h=zi.dot(xo),u=ki.dot(xo);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(zi,o);Mo.subVectors(t,r);const d=zi.dot(Mo),g=ki.dot(Mo);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ki,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Xc.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Xc,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(zi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Eo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=of(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Eo(o,r,t+1/3),this.g=Eo(o,r,t),this.b=Eo(o,r,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return ae.workingToColorSpace(We.copy(this),t),Math.round(Qt(We.r*255,0,255))*65536+Math.round(Qt(We.g*255,0,255))*256+Math.round(Qt(We.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(We.copy(this),e);const n=We.r,i=We.g,r=We.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=ve){ae.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,i=We.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(hr);const n=ro(jn.h,hr.h,e),i=ro(jn.s,hr.s,e),r=ro(jn.l,hr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Ht;Ht.NAMES=Sh;let Sf=0;class Ri extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Qi,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Ko,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Se extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new L,ur=new ft;let bf=0;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class bh extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eh extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ef=0;const fn=new se,wo=new Ne,Gi=new L,on=new Ci,vs=new Ci,Be=new L;class Ee extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?Eh:bh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(on.min,vs.min),on.expandByPoint(Be),Be.addVectors(on.max,vs.max),on.expandByPoint(Be)):(on.expandByPoint(vs.min),on.expandByPoint(vs.max))}on.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(t,l),Be.add(Gi)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;const l=new L,h=new L,u=new L,f=new ft,d=new ft,g=new ft,_=new L,m=new L;function p(I,S,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(_),a[S].add(_),a[M].add(_),c[I].add(m),c[S].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let I=0,S=T.length;I<S;++I){const M=T[I],P=M.start,O=M.count;for(let B=P,q=P+O;B<q;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const b=new L,v=new L,A=new L,E=new L;function C(I){A.fromBufferAttribute(i,I),E.copy(A);const S=a[I];b.copy(S),b.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(E,S);const P=v.dot(c[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,P)}for(let I=0,S=T.length;I<S;++I){const M=T[I],P=M.start,O=M.count;for(let B=P,q=P+O;B<q;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new He(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ee,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qc=new se,fi=new Mh,fr=new fs,Yc=new L,dr=new L,pr=new L,mr=new L,To=new L,gr=new L,Zc=new L,_r=new L;class pt extends Ne{constructor(t=new Ee,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(To.fromBufferAttribute(u,t),o?gr.addScaledVector(To,h):gr.addScaledVector(To.sub(e),h))}e.add(gr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(r),fi.copy(t.ray).recast(t.near),!(fr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(fr,Yc)===null||fi.origin.distanceToSquared(Yc)>(t.far-t.near)**2))&&(qc.copy(r).invert(),fi.copy(t.ray).applyMatrix4(qc),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,A=b;v<A;v+=3){const E=a.getX(v),C=a.getX(v+1),I=a.getX(v+2);i=vr(this,p,t,n,l,h,u,E,C,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);i=vr(this,o,t,n,l,h,u,T,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),b=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,A=b;v<A;v+=3){const E=v,C=v+1,I=v+2;i=vr(this,p,t,n,l,h,u,E,C,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,b=m+1,v=m+2;i=vr(this,o,t,n,l,h,u,T,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function wf(s,t,e,n,i,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===ai,a),c===null)return null;_r.copy(a),_r.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(_r);return l<e.near||l>e.far?null:{distance:l,point:_r.clone(),object:s}}function vr(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,dr),s.getVertexPosition(c,pr),s.getVertexPosition(l,mr);const h=wf(s,t,e,n,dr,pr,mr,Zc);if(h){const u=new L;gn.getBarycoord(Zc,dr,pr,mr,u),i&&(h.uv=gn.getInterpolatedAttribute(i,a,c,l,u,new ft)),r&&(h.uv1=gn.getInterpolatedAttribute(r,a,c,l,u,new ft)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new L,materialIndex:0};gn.getNormal(dr,pr,mr,f.normal),h.face=f,h.barycoord=u}return h}class yn extends Ee{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,p,T,b,v,A,E,C,I,S){const M=v/C,P=A/I,O=v/2,B=A/2,q=E/2,H=C+1,X=I+1;let K=0,V=0;const ht=new L;for(let et=0;et<X;et++){const bt=et*P-B;for(let qt=0;qt<H;qt++){const ee=qt*M-O;ht[_]=ee*T,ht[m]=bt*b,ht[p]=q,l.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=E>0?1:-1,h.push(ht.x,ht.y,ht.z),u.push(qt/C),u.push(1-et/I),K+=1}}for(let et=0;et<I;et++)for(let bt=0;bt<C;bt++){const qt=f+bt+H*et,ee=f+bt+H*(et+1),ce=f+(bt+1)+H*(et+1),re=f+(bt+1)+H*et;c.push(qt,ee,re),c.push(ee,ce,re),V+=6}a.addGroup(d,V,S),d+=V,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ze(s){const t={};for(let e=0;e<s.length;e++){const n=as(s[e]);for(const i in n)t[i]=n[i]}return t}function Tf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function wh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Af={clone:as,merge:Ze};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Th extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new L,$c=new ft,Jc=new ft;class dn extends Th{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,e){return this.getViewBounds(t,$c,Jc),e.subVectors(Jc,$c)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(so*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Vi=1;class Pf extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new dn(Hi,Vi,t,e);i.layers=this.layers,this.add(i);const r=new dn(Hi,Vi,t,e);r.layers=this.layers,this.add(r);const o=new dn(Hi,Vi,t,e);o.layers=this.layers,this.add(o);const a=new dn(Hi,Vi,t,e);a.layers=this.layers,this.add(a);const c=new dn(Hi,Vi,t,e);c.layers=this.layers,this.add(c);const l=new dn(Hi,Vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ah extends Ue{constructor(t=[],e=ss,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lf extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ah(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yn(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:si});r.uniforms.tEquirect.value=e;const o=new pt(i,r),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Pn),new Pf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class De extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const If={type:"move"};class Ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(If)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class sc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new sc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Df extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fa,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new L;class Xr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kr extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Wi;const xs=new L,Xi=new L,qi=new L,Yi=new ft,Ms=new ft,Ch=new se,xr=new L,ys=new L,Mr=new L,Kc=new ft,Co=new ft,jc=new ft;class qr extends Ne{constructor(t=new Kr){if(super(),this.isSprite=!0,this.type="Sprite",Wi===void 0){Wi=new Ee;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uf(e,5);Wi.setIndex([0,1,2,0,2,3]),Wi.setAttribute("position",new Xr(n,3,0,!1)),Wi.setAttribute("uv",new Xr(n,2,3,!1))}this.geometry=Wi,this.material=t,this.center=new ft(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xi.setFromMatrixScale(this.matrixWorld),Ch.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xi.multiplyScalar(-qi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;yr(xr.set(-.5,-.5,0),qi,o,Xi,i,r),yr(ys.set(.5,-.5,0),qi,o,Xi,i,r),yr(Mr.set(.5,.5,0),qi,o,Xi,i,r),Kc.set(0,0),Co.set(1,0),jc.set(1,1);let a=t.ray.intersectTriangle(xr,ys,Mr,!1,xs);if(a===null&&(yr(ys.set(-.5,.5,0),qi,o,Xi,i,r),Co.set(0,1),a=t.ray.intersectTriangle(xr,Mr,ys,!1,xs),a===null))return;const c=t.ray.origin.distanceTo(xs);c<t.near||c>t.far||e.push({distance:c,point:xs.clone(),uv:gn.getInterpolation(xs,xr,ys,Mr,Kc,Co,jc,new ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function yr(s,t,e,n,i,r){Yi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ms.x=r*Yi.x-i*Yi.y,Ms.y=i*Yi.x+r*Yi.y):Ms.copy(Yi),s.copy(t),s.x+=Ms.x,s.y+=Ms.y,s.applyMatrix4(Ch)}class Nf extends Ue{constructor(t=null,e=1,n=1,i,r,o,a,c,l=cn,h=cn,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qc extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Zi=new se,tl=new se,Sr=[],el=new Ci,Ff=new se,Ss=new pt,bs=new fs;class an extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ff)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),el.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(el)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),bs.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),t.ray.intersectsSphere(bs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Zi),tl.multiplyMatrices(n,Zi),Ss.matrixWorld=tl,Ss.raycast(t,Sr);for(let o=0,a=Sr.length;o<a;o++){const c=Sr[o];c.instanceId=r,c.object=this,e.push(c)}Sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nf(new Float32Array(i*this.count),i,this.count,Qa,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ro=new L,Of=new L,Bf=new Kt;class gi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ro.subVectors(n,e).cross(Of.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bf.getNormalMatrix(t),i=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new fs,zf=new ft(.5,.5),br=new L;class rc{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,o=new gi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],T=r[12],b=r[13],v=r[14],A=r[15];if(i[0].setComponents(l-o,d-h,p-g,A-T).normalize(),i[1].setComponents(l+o,d+h,p+g,A+T).normalize(),i[2].setComponents(l+a,d+u,p+_,A+b).normalize(),i[3].setComponents(l-a,d-u,p-_,A-b).normalize(),n)i[4].setComponents(c,f,m,v).normalize(),i[5].setComponents(l-c,d-f,p-m,A-v).normalize();else if(i[4].setComponents(l-c,d-f,p-m,A-v).normalize(),e===In)i[5].setComponents(l+c,d+f,p+m,A+v).normalize();else if(e===Vr)i[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){di.center.set(0,0,0);const e=zf.distanceTo(t.center);return di.radius=.7071067811865476+e,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(br.x=i.normal.x>0?t.max.x:t.min.x,br.y=i.normal.y>0?t.max.y:t.min.y,br.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oc extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nl=new se,Ba=new Mh,Er=new fs,wr=new L;class ac extends Ne{constructor(t=new Ee,e=new oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;nl.copy(i).invert(),Ba.copy(t.ray).applyMatrix4(nl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);wr.fromBufferAttribute(u,m),il(wr,m,c,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)wr.fromBufferAttribute(u,g),il(wr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function il(s,t,e,n,i,r,o){const a=Ba.distanceSqToPoint(s);if(a<e){const c=new L;Ba.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class tn extends Ue{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rh extends Ue{constructor(t,e,n=wi,i,r,o,a=cn,c=cn,l,h=zs,u=1){if(h!==zs&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ic(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ph extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class cc extends Ee{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,_=i+1,m=new L,p=new L;for(let T=0;T<=g;T++){let b=0,v=0,A=0,E=0;if(T<=n){const S=T/n,M=S*Math.PI/2;v=-h-t*Math.cos(M),A=t*Math.sin(M),E=-t*Math.cos(M),b=S*u}else if(T<=n+r){const S=(T-n)/r;v=-h+S*e,A=t,E=0,b=u+S*f}else{const S=(T-n-r)/n,M=S*Math.PI/2;v=h+t*Math.sin(M),A=t*Math.cos(M),E=t*Math.sin(M),b=u+f+S*u}const C=Math.max(0,Math.min(1,b/d));let I=0;T===0?I=.5/i:T===g&&(I=-.5/i);for(let S=0;S<=i;S++){const M=S/i,P=M*Math.PI*2,O=Math.sin(P),B=Math.cos(P);p.x=-A*B,p.y=v,p.z=A*O,a.push(p.x,p.y,p.z),m.set(-A*B,E,A*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+I,C)}if(T>0){const S=(T-1)*_;for(let M=0;M<i;M++){const P=S+M,O=S+M+1,B=T*_+M,q=T*_+M+1;o.push(P,O,B),o.push(O,q,B)}}}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class oi extends Ee{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,h=new ft;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class me extends Ee{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;T(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function T(){const v=new L,A=new L;let E=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const S=[],M=I/r,P=M*(e-t)+t;for(let O=0;O<=i;O++){const B=O/i,q=B*c+a,H=Math.sin(q),X=Math.cos(q);A.x=P*H,A.y=-M*n+m,A.z=P*X,u.push(A.x,A.y,A.z),v.set(H,C,X).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-M),S.push(g++)}_.push(S)}for(let I=0;I<i;I++)for(let S=0;S<r;S++){const M=_[S][I],P=_[S+1][I],O=_[S+1][I+1],B=_[S][I+1];(t>0||S!==0)&&(h.push(M,P,B),E+=3),(e>0||S!==r-1)&&(h.push(P,O,B),E+=3)}l.addGroup(p,E,0),p+=E}function b(v){const A=g,E=new ft,C=new L;let I=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const q=O/i*c+a,H=Math.cos(q),X=Math.sin(q);C.x=S*X,C.y=m*M,C.z=S*H,u.push(C.x,C.y,C.z),f.push(0,M,0),E.x=H*.5+.5,E.y=X*.5*M+.5,d.push(E.x,E.y),g++}for(let O=0;O<i;O++){const B=A+O,q=P+O;v===!0?h.push(q,q+1,B):h.push(q+1,q,B),I+=3}l.addGroup(p,I,v===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cs extends me{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new cs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new ft:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,i=[],r=[],o=[],a=new L,c=new se;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lc extends On{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ft){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class kf extends lc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function hc(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Tr=new L,Po=new hc,Lo=new hc,Io=new hc;class Lh extends On{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Tr.subVectors(i[0],i[1]).add(i[0]),l=Tr);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Tr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Po.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Lo.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Io.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Lo.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Io.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Po.calc(c),Lo.calc(c),Io.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sl(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Gf(s,t){const e=1-s;return e*e*t}function Hf(s,t){return 2*(1-s)*s*t}function Vf(s,t){return s*s*t}function Is(s,t,e,n){return Gf(s,t)+Hf(s,e)+Vf(s,n)}function Wf(s,t){const e=1-s;return e*e*e*t}function Xf(s,t){const e=1-s;return 3*e*e*s*t}function qf(s,t){return 3*(1-s)*s*s*t}function Yf(s,t){return s*s*s*t}function Ds(s,t,e,n,i){return Wf(s,t)+Xf(s,e)+qf(s,n)+Yf(s,i)}class Ih extends On{constructor(t=new ft,e=new ft,n=new ft,i=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ft){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,i.x,r.x,o.x,a.x),Ds(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zf extends On{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ds(t,i.x,r.x,o.x,a.x),Ds(t,i.y,r.y,o.y,a.y),Ds(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dh extends On{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $f extends On{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends On{constructor(t=new ft,e=new ft,n=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ft){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,i.x,r.x,o.x),Is(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nh extends On{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Is(t,i.x,r.x,o.x),Is(t,i.y,r.y,o.y),Is(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Fh extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(sl(a,c.x,l.x,h.x,u.x),sl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ft().fromArray(i))}return this}}var Yr=Object.freeze({__proto__:null,ArcCurve:kf,CatmullRomCurve3:Lh,CubicBezierCurve:Ih,CubicBezierCurve3:Zf,EllipseCurve:lc,LineCurve:Dh,LineCurve3:$f,QuadraticBezierCurve:Uh,QuadraticBezierCurve3:Nh,SplineCurve:Fh});class Jf extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Yr[i.type]().fromJSON(i))}return this}}class rl extends Jf{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Dh(this.currentPoint.clone(),new ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Uh(this.currentPoint.clone(),new ft(t,e),new ft(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Ih(this.currentPoint.clone(),new ft(t,e),new ft(n,i),new ft(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Fh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new lc(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class uc extends rl{constructor(t){super(t),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new rl().fromJSON(i))}return this}}function Kf(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Oh(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=nd(s,t,r,e)),s.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<i;f+=e){const d=s[f],g=s[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Hs(r,o,e,a,c,l,0),o}function Oh(s,t,e,n,i){let r;if(i===dd(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=ol(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=ol(o/n|0,s[o],s[o+1],r);return r&&ls(r,r.next)&&(Ws(r),r=r.next),r}function Ai(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ls(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hs(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ad(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Qf(s,n,i,r):jf(s)){t.push(c.i,s.i,l.i),Ws(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=td(Ai(s),t),Hs(s,t,e,n,i,r,2)):o===2&&ed(s,t,e,n,i,r):Hs(Ai(s),t,e,n,i,r,1);break}}}function jf(s){const t=s.prev,e=s,n=s.next;if(Ae(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(i,r,o),u=Math.min(a,c,l),f=Math.max(i,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Cs(i,a,r,c,o,l,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qf(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Ae(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),_=Math.max(a,c,l),m=Math.max(h,u,f),p=za(d,g,t,e,n),T=za(_,m,t,e,n);let b=s.prevZ,v=s.nextZ;for(;b&&b.z>=p&&v&&v.z<=T;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Cs(a,h,c,u,l,f,b.x,b.y)&&Ae(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Cs(a,h,c,u,l,f,v.x,v.y)&&Ae(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=p;){if(b.x>=d&&b.x<=_&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Cs(a,h,c,u,l,f,b.x,b.y)&&Ae(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=T;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Cs(a,h,c,u,l,f,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function td(s,t){let e=s;do{const n=e.prev,i=e.next.next;!ls(n,i)&&zh(n,e,e.next,i)&&Vs(n,i)&&Vs(i,n)&&(t.push(n.i,e.i,i.i),Ws(e),Ws(e.next),e=s=i),e=e.next}while(e!==s);return Ai(e)}function ed(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hd(o,a)){let c=kh(o,a);o=Ai(o,o.next),c=Ai(c,c.next),Hs(o,t,e,n,i,r,0),Hs(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function nd(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=Oh(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(ld(l))}i.sort(id);for(let r=0;r<i.length;r++)e=sd(i[r],e);return e}function id(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function sd(s,t){const e=rd(s,t);if(!e)return t;const n=kh(e,s);return Ai(n,n.next),Ai(e,e.next)}function rd(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(ls(s,e))return e;do{if(ls(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Bh(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Vs(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&od(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function od(s,t){return Ae(s.prev,s,t.prev)<0&&Ae(t.next,s,s.next)<0}function ad(s,t,e,n){let i=s;do i.z===0&&(i.z=za(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,cd(i)}function cd(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function za(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ld(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Bh(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Cs(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Bh(s,t,e,n,i,r,o,a)}function hd(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!ud(s,t)&&(Vs(s,t)&&Vs(t,s)&&fd(s,t)&&(Ae(s.prev,s,t.prev)||Ae(s,t.prev,t))||ls(s,t)&&Ae(s.prev,s,s.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ls(s,t){return s.x===t.x&&s.y===t.y}function zh(s,t,e,n){const i=Cr(Ae(s,t,e)),r=Cr(Ae(s,t,n)),o=Cr(Ae(e,n,s)),a=Cr(Ae(e,n,t));return!!(i!==r&&o!==a||i===0&&Ar(s,e,t)||r===0&&Ar(s,n,t)||o===0&&Ar(e,s,n)||a===0&&Ar(e,t,n))}function Ar(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Cr(s){return s>0?1:s<0?-1:0}function ud(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&zh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Vs(s,t){return Ae(s.prev,s,s.next)<0?Ae(s,t,s.next)>=0&&Ae(s,s.prev,t)>=0:Ae(s,t,s.prev)<0||Ae(s,s.next,t)<0}function fd(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function kh(s,t){const e=ka(s.i,s.x,s.y),n=ka(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ol(s,t,e,n){const i=ka(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ws(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ka(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dd(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class pd{static triangulate(t,e,n=2){return Kf(t,e,n)}}class Ki{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ki.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];al(t),cl(n,t);let o=t.length;e.forEach(al);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,cl(n,e[c]);const a=pd.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function al(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function cl(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class es extends Ee{constructor(t=new uc([new ft(.5,.5),new ft(-.5,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:md;let b,v=!1,A,E,C,I;p&&(b=p.getSpacedPoints(h),v=!0,f=!1,A=p.computeFrenetFrames(h,!1),E=new L,C=new L,I=new L),f||(m=0,d=0,g=0,_=0);const S=a.extractPoints(l);let M=S.shape;const P=S.holes;if(!Ki.isClockWise(M)){M=M.reverse();for(let tt=0,J=P.length;tt<J;tt++){const $=P[tt];Ki.isClockWise($)&&(P[tt]=$.reverse())}}function B(tt){const $=10000000000000001e-36;let Z=tt[0];for(let ut=1;ut<=tt.length;ut++){const it=ut%tt.length,ct=tt[it],St=ct.x-Z.x,Ot=ct.y-Z.y,w=St*St+Ot*Ot,x=Math.max(Math.abs(ct.x),Math.abs(ct.y),Math.abs(Z.x),Math.abs(Z.y)),F=$*x*x;if(w<=F){tt.splice(it,1),ut--;continue}Z=ct}}B(M),P.forEach(B);const q=P.length,H=M;for(let tt=0;tt<q;tt++){const J=P[tt];M=M.concat(J)}function X(tt,J,$){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(J,$)}const K=M.length;function V(tt,J,$){let Z,ut,it;const ct=tt.x-J.x,St=tt.y-J.y,Ot=$.x-tt.x,w=$.y-tt.y,x=ct*ct+St*St,F=ct*w-St*Ot;if(Math.abs(F)>Number.EPSILON){const G=Math.sqrt(x),nt=Math.sqrt(Ot*Ot+w*w),W=J.x-St/G,It=J.y+ct/G,lt=$.x-w/nt,Rt=$.y+Ot/nt,Pt=((lt-W)*w-(Rt-It)*Ot)/(ct*w-St*Ot);Z=W+ct*Pt-tt.x,ut=It+St*Pt-tt.y;const st=Z*Z+ut*ut;if(st<=2)return new ft(Z,ut);it=Math.sqrt(st/2)}else{let G=!1;ct>Number.EPSILON?Ot>Number.EPSILON&&(G=!0):ct<-Number.EPSILON?Ot<-Number.EPSILON&&(G=!0):Math.sign(St)===Math.sign(w)&&(G=!0),G?(Z=-St,ut=ct,it=Math.sqrt(x)):(Z=ct,ut=St,it=Math.sqrt(x/2))}return new ft(Z/it,ut/it)}const ht=[];for(let tt=0,J=H.length,$=J-1,Z=tt+1;tt<J;tt++,$++,Z++)$===J&&($=0),Z===J&&(Z=0),ht[tt]=V(H[tt],H[$],H[Z]);const et=[];let bt,qt=ht.concat();for(let tt=0,J=q;tt<J;tt++){const $=P[tt];bt=[];for(let Z=0,ut=$.length,it=ut-1,ct=Z+1;Z<ut;Z++,it++,ct++)it===ut&&(it=0),ct===ut&&(ct=0),bt[Z]=V($[Z],$[it],$[ct]);et.push(bt),qt=qt.concat(bt)}let ee;if(m===0)ee=Ki.triangulateShape(H,P);else{const tt=[],J=[];for(let $=0;$<m;$++){const Z=$/m,ut=d*Math.cos(Z*Math.PI/2),it=g*Math.sin(Z*Math.PI/2)+_;for(let ct=0,St=H.length;ct<St;ct++){const Ot=X(H[ct],ht[ct],it);Dt(Ot.x,Ot.y,-ut),Z===0&&tt.push(Ot)}for(let ct=0,St=q;ct<St;ct++){const Ot=P[ct];bt=et[ct];const w=[];for(let x=0,F=Ot.length;x<F;x++){const G=X(Ot[x],bt[x],it);Dt(G.x,G.y,-ut),Z===0&&w.push(G)}Z===0&&J.push(w)}}ee=Ki.triangulateShape(tt,J)}const ce=ee.length,re=g+_;for(let tt=0;tt<K;tt++){const J=f?X(M[tt],qt[tt],re):M[tt];v?(C.copy(A.normals[0]).multiplyScalar(J.x),E.copy(A.binormals[0]).multiplyScalar(J.y),I.copy(b[0]).add(C).add(E),Dt(I.x,I.y,I.z)):Dt(J.x,J.y,0)}for(let tt=1;tt<=h;tt++)for(let J=0;J<K;J++){const $=f?X(M[J],qt[J],re):M[J];v?(C.copy(A.normals[tt]).multiplyScalar($.x),E.copy(A.binormals[tt]).multiplyScalar($.y),I.copy(b[tt]).add(C).add(E),Dt(I.x,I.y,I.z)):Dt($.x,$.y,u/h*tt)}for(let tt=m-1;tt>=0;tt--){const J=tt/m,$=d*Math.cos(J*Math.PI/2),Z=g*Math.sin(J*Math.PI/2)+_;for(let ut=0,it=H.length;ut<it;ut++){const ct=X(H[ut],ht[ut],Z);Dt(ct.x,ct.y,u+$)}for(let ut=0,it=P.length;ut<it;ut++){const ct=P[ut];bt=et[ut];for(let St=0,Ot=ct.length;St<Ot;St++){const w=X(ct[St],bt[St],Z);v?Dt(w.x,w.y+b[h-1].y,b[h-1].x+$):Dt(w.x,w.y,u+$)}}}Y(),Q();function Y(){const tt=i.length/3;if(f){let J=0,$=K*J;for(let Z=0;Z<ce;Z++){const ut=ee[Z];Tt(ut[2]+$,ut[1]+$,ut[0]+$)}J=h+m*2,$=K*J;for(let Z=0;Z<ce;Z++){const ut=ee[Z];Tt(ut[0]+$,ut[1]+$,ut[2]+$)}}else{for(let J=0;J<ce;J++){const $=ee[J];Tt($[2],$[1],$[0])}for(let J=0;J<ce;J++){const $=ee[J];Tt($[0]+K*h,$[1]+K*h,$[2]+K*h)}}n.addGroup(tt,i.length/3-tt,0)}function Q(){const tt=i.length/3;let J=0;yt(H,J),J+=H.length;for(let $=0,Z=P.length;$<Z;$++){const ut=P[$];yt(ut,J),J+=ut.length}n.addGroup(tt,i.length/3-tt,1)}function yt(tt,J){let $=tt.length;for(;--$>=0;){const Z=$;let ut=$-1;ut<0&&(ut=tt.length-1);for(let it=0,ct=h+m*2;it<ct;it++){const St=K*it,Ot=K*(it+1),w=J+Z+St,x=J+ut+St,F=J+ut+Ot,G=J+Z+Ot;$t(w,x,F,G)}}}function Dt(tt,J,$){c.push(tt),c.push(J),c.push($)}function Tt(tt,J,$){he(tt),he(J),he($);const Z=i.length/3,ut=T.generateTopUV(n,i,Z-3,Z-2,Z-1);R(ut[0]),R(ut[1]),R(ut[2])}function $t(tt,J,$,Z){he(tt),he(J),he(Z),he(J),he($),he(Z);const ut=i.length/3,it=T.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);R(it[0]),R(it[1]),R(it[3]),R(it[1]),R(it[2]),R(it[3])}function he(tt){i.push(c[tt*3+0]),i.push(c[tt*3+1]),i.push(c[tt*3+2])}function R(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Yr[i.type]().fromJSON(i)),new es(n,t.options)}}const md={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ft(r,o),new ft(a,c),new ft(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ft(o,1-c),new ft(l,1-u),new ft(f,1-g),new ft(_,1-p)]:[new ft(a,1-c),new ft(h,1-u),new ft(d,1-g),new ft(m,1-p)]}};function gd(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class $e extends Ee{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*f-o;for(let b=0;b<l;b++){const v=b*u-r;g.push(v,-T,0),_.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const b=T+l*p,v=T+l*(p+1),A=T+1+l*(p+1),E=T+1+l*p;d.push(b,v,E),d.push(v,A,E)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xs extends Ee{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,d=new L,g=new ft;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const T=p+m,b=T,v=T+n+1,A=T+n+2,E=T+1;a.push(b,v,E),a.push(v,A,E)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Me extends Ee{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,f=new L,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const T=[],b=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(E+v,1-b),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const b=h[p][T+1],v=h[p][T],A=h[p+1][T],E=h[p+1][T+1];(p!==0||o>0)&&d.push(b,v,E),(p!==n-1||c<Math.PI)&&d.push(v,A,E)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pn extends Ee{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,T=(i+1)*d+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fc extends Ee{constructor(t=new Nh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new ft;let h=new L;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function _(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),T(),p()}function m(b){h=t.getPointAt(b/e,h);const v=o.normals[b],A=o.binormals[b];for(let E=0;E<=i;E++){const C=E/i*Math.PI*2,I=Math.sin(C),S=-Math.cos(C);c.x=S*v.x+I*A.x,c.y=S*v.y+I*A.y,c.z=S*v.z+I*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=e;b++)for(let v=1;v<=i;v++){const A=(i+1)*(b-1)+(v-1),E=(i+1)*b+(v-1),C=(i+1)*b+v,I=(i+1)*(b-1)+v;g.push(A,E,I),g.push(E,C,I)}}function T(){for(let b=0;b<=e;b++)for(let v=0;v<=i;v++)l.x=b/e,l.y=v/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new fc(new Yr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class At extends Ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _d extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vd extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gh extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xd extends Gh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Do=new se,ll=new L,hl=new L;class Md{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rc,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),hl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hl),e.updateMatrixWorld(),Do.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Do)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hh extends Th{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yd extends Md{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sd extends Gh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new yd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bd extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ul(s,t,e,n){const i=Ed(n);switch(e){case dh:return s*t;case Qa:return s*t/i.components*i.byteLength;case tc:return s*t/i.components*i.byteLength;case mh:return s*t*2/i.components*i.byteLength;case ec:return s*t*2/i.components*i.byteLength;case ph:return s*t*3/i.components*i.byteLength;case Sn:return s*t*4/i.components*i.byteLength;case nc:return s*t*4/i.components*i.byteLength;case Fr:case Or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Br:case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case la:case ua:return Math.max(s,16)*Math.max(t,8)/4;case ca:case ha:return Math.max(s,8)*Math.max(t,8)/2;case fa:case da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ga:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case _a:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case va:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ya:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ba:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Aa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ra:case Pa:case La:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ia:case Da:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ua:case Na:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ed(s){switch(s){case Fn:case lh:return{byteLength:1,components:1};case Os:case hh:case Ks:return{byteLength:2,components:1};case Ka:case ja:return{byteLength:2,components:4};case wi:case Ja:case Ln:return{byteLength:4,components:1};case uh:case fh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);function Vh(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function wd(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,kd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$d=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,vp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Ep=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,$p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,hm=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
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
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
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
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mm=`#ifdef USE_TRANSMISSION
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Im=`#if DEPTH_PACKING == 3200
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
}`,Dm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,km=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Vm=`#define MATCAP
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define NORMAL
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
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
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
}`,Zm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,$m=`#define STANDARD
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
}`,Jm=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Km=`#define TOON
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
}`,jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qm=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,i0=`uniform float rotation;
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
}`,s0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Td,alphahash_pars_fragment:Ad,alphamap_fragment:Cd,alphamap_pars_fragment:Rd,alphatest_fragment:Pd,alphatest_pars_fragment:Ld,aomap_fragment:Id,aomap_pars_fragment:Dd,batching_pars_vertex:Ud,batching_vertex:Nd,begin_vertex:Fd,beginnormal_vertex:Od,bsdfs:Bd,iridescence_fragment:zd,bumpmap_pars_fragment:kd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:Zd,common:$d,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:jd,displacementmap_vertex:Qd,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:vp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:fp,gradientmap_pars_fragment:dp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:xp,lights_toon_pars_fragment:Mp,lights_phong_fragment:yp,lights_phong_pars_fragment:Sp,lights_physical_fragment:bp,lights_physical_pars_fragment:Ep,lights_fragment_begin:wp,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Cp,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Lp,map_fragment:Ip,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:Bp,morphcolor_vertex:zp,morphnormal_vertex:kp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Hp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:$p,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:jp,opaque_fragment:Qp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:cm,shadowmap_vertex:lm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:fm,skinning_vertex:dm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:_m,tonemapping_pars_fragment:vm,transmission_fragment:xm,transmission_pars_fragment:Mm,uv_pars_fragment:ym,uv_pars_vertex:Sm,uv_vertex:bm,worldpos_vertex:Em,background_vert:wm,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Cm,cube_vert:Rm,cube_frag:Pm,depth_vert:Lm,depth_frag:Im,distanceRGBA_vert:Dm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:Bm,meshbasic_vert:zm,meshbasic_frag:km,meshlambert_vert:Gm,meshlambert_frag:Hm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:Zm,meshphysical_vert:$m,meshphysical_frag:Jm,meshtoon_vert:Km,meshtoon_frag:jm,points_vert:Qm,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},mt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},An={basic:{uniforms:Ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ze([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ze([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ze([mt.points,mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ze([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ze([mt.common,mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ze([mt.sprite,mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ze([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ze([mt.lights,mt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};An.physical={uniforms:Ze([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Rr={r:0,b:0,g:0},pi=new ln,r0=new se;function o0(s,t,e,n,i,r,o){const a=new Ht(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?e:t).get(v)),v}function _(b){let v=!1;const A=g(b);A===null?p(a,c):A&&A.isColor&&(p(A,1),v=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Jr)?(h===void 0&&(h=new pt(new yn(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:as(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),pi.copy(v.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(pi)),h.material.toneMapped=ae.getTransfer(A.colorSpace)!==fe,(u!==A||f!==A.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new pt(new $e(2,2),new Yn({name:"BackgroundMaterial",uniforms:as(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ae.getTransfer(A.colorSpace)!==fe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=A,f=A.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,v){b.getRGB(Rr,wh(s)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,v,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:_,addToRenderList:m,dispose:T}}function a0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(M,P,O,B,q){let H=!1;const X=u(B,O,P);r!==X&&(r=X,l(r.object)),H=d(M,B,O,q),H&&g(M,B,O,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(M,P,O,B),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,O){const B=O.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let H=q[P.id];H===void 0&&(H={},q[P.id]=H);let X=H[B];return X===void 0&&(X=f(c()),H[B]=X),X}function f(M){const P=[],O=[],B=[];for(let q=0;q<e;q++)P[q]=0,O[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:B,object:M,attributes:{},index:null}}function d(M,P,O,B){const q=r.attributes,H=P.attributes;let X=0;const K=O.getAttributes();for(const V in K)if(K[V].location>=0){const et=q[V];let bt=H[V];if(bt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),et===void 0||et.attribute!==bt||bt&&et.data!==bt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(M,P,O,B){const q={},H=P.attributes;let X=0;const K=O.getAttributes();for(const V in K)if(K[V].location>=0){let et=H[V];et===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));const bt={};bt.attribute=et,et&&et.data&&(bt.data=et.data),q[V]=bt,X++}r.attributes=q,r.attributesNum=X,r.index=B}function _(){const M=r.newAttributes;for(let P=0,O=M.length;P<O;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const O=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;O[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),q[M]!==P&&(s.vertexAttribDivisor(M,P),q[M]=P)}function T(){const M=r.newAttributes,P=r.enabledAttributes;for(let O=0,B=P.length;O<B;O++)P[O]!==M[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function b(M,P,O,B,q,H,X){X===!0?s.vertexAttribIPointer(M,P,O,q,H):s.vertexAttribPointer(M,P,O,B,q,H)}function v(M,P,O,B){_();const q=B.attributes,H=O.getAttributes(),X=P.defaultAttributeValues;for(const K in H){const V=H[K];if(V.location>=0){let ht=q[K];if(ht===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ht!==void 0){const et=ht.normalized,bt=ht.itemSize,qt=t.get(ht);if(qt===void 0)continue;const ee=qt.buffer,ce=qt.type,re=qt.bytesPerElement,Y=ce===s.INT||ce===s.UNSIGNED_INT||ht.gpuType===Ja;if(ht.isInterleavedBufferAttribute){const Q=ht.data,yt=Q.stride,Dt=ht.offset;if(Q.isInstancedInterleavedBuffer){for(let Tt=0;Tt<V.locationSize;Tt++)p(V.location+Tt,Q.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Tt=0;Tt<V.locationSize;Tt++)m(V.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Tt=0;Tt<V.locationSize;Tt++)b(V.location+Tt,bt/V.locationSize,ce,et,yt*re,(Dt+bt/V.locationSize*Tt)*re,Y)}else{if(ht.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,ht.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Q=0;Q<V.locationSize;Q++)b(V.location+Q,bt/V.locationSize,ce,et,bt*re,bt/V.locationSize*Q*re,Y)}}else if(X!==void 0){const et=X[K];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(V.location,et);break;case 3:s.vertexAttrib3fv(V.location,et);break;case 4:s.vertexAttrib4fv(V.location,et);break;default:s.vertexAttrib1fv(V.location,et)}}}}T()}function A(){I();for(const M in n){const P=n[M];for(const O in P){const B=P[O];for(const q in B)h(B[q].object),delete B[q];delete P[O]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const O in P){const B=P[O];for(const q in B)h(B[q].object),delete B[q];delete P[O]}delete n[M.id]}function C(M){for(const P in n){const O=n[P];if(O[M.id]===void 0)continue;const B=O[M.id];for(const q in B)h(B[q].object),delete B[q];delete O[M.id]}}function I(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function c0(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function l0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Sn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Fn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ln&&!I)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function h0(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new gi,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,b=T*4;let v=p.clippingState||null;c.value=v,v=h(g,f,b,d);for(let A=0;A!==b;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=d;b!==_;++b,v+=4)o.copy(u[b]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function u0(s){let t=new WeakMap;function e(o,a){return a===ra?o.mapping=ss:a===oa&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ra||a===oa)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lf(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ji=4,fl=[.125,.215,.35,.446,.526,.582],xi=20,Uo=new Hh,dl=new Ht;let No=null,Fo=0,Oo=0,Bo=!1;const _i=(1+Math.sqrt(5))/2,$i=1/_i,pl=[new L(-_i,$i,0),new L(_i,$i,0),new L(-$i,0,_i),new L($i,0,_i),new L(0,_i,-$i),new L(0,_i,$i),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],f0=new L;class ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=f0}=r;No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(No,Fo,Oo),this._renderer.xr.enabled=Bo,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Ks,format:Sn,colorSpace:os,depthBuffer:!1},i=gl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=p0(r,t,e)}return i}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,Uo)}_sceneToCubeUV(t,e,n,i,r){const c=new dn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(dl),u.toneMapping=ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new Se({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new pt(new yn,_);let p=!1;const T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,p=!0):(_.color.copy(dl),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):v===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const A=this._cubeSize;Pr(i,v*A,b>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ss||t.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Pr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Uo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pl[(i-r-1)%pl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new pt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):xi;m>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const p=[];let T=0;for(let C=0;C<xi;++C){const I=C/_,S=Math.exp(-I*I/2);p.push(S),C===0?T+=S:C<m&&(T+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const v=this._sizeLods[i],A=3*v*(i>b-ji?i-b+ji:0),E=4*(this._cubeSize-v);Pr(e,A,E,3*v,2*v),c.setRenderTarget(e),c.render(u,Uo)}}function d0(s){const t=[],e=[],n=[];let i=s;const r=s-ji+1+fl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-ji?c=fl[o-s+ji-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),b=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){const C=E%3*2/3-1,I=E>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];T.set(S,_*g*E),b.set(f,m*g*E);const M=[E,E,E,E,E,E];v.set(M,p*g*E)}const A=new Ee;A.setAttribute("position",new He(T,_)),A.setAttribute("uv",new He(b,m)),A.setAttribute("faceIndex",new He(v,p)),t.push(A),i>ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function gl(s,t,e){const n=new Ti(s,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function p0(s,t,e){const n=new Float32Array(xi),i=new L(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function _l(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function vl(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ra||c===oa,h=c===ss||c===rs;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ml(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new ml(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function g0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let b=0,v=T.length;b<v;b+=3){const A=T[b+0],E=T[b+1],C=T[b+2];f.push(A,E,E,C,C,A)}}else if(g!==void 0){const T=g.array;_=g.version;for(let b=0,v=T.length/3-1;b<v;b+=3){const A=b+0,E=b+1,C=b+2;f.push(A,E,E,C,C,A)}}else return;const m=new(vh(f)?Eh:bh)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function v0(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function M0(s,t,e){const n=new WeakMap,i=new Re;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*E*4*u),I=new xh(C,A,E,u);I.type=Ln,I.needsUpdate=!0;const S=v*4;for(let P=0;P<u;P++){const O=p[P],B=T[P],q=b[P],H=A*E*4*P;for(let X=0;X<O.count;X++){const K=X*S;g===!0&&(i.fromBufferAttribute(O,X),C[H+K+0]=i.x,C[H+K+1]=i.y,C[H+K+2]=i.z,C[H+K+3]=0),_===!0&&(i.fromBufferAttribute(B,X),C[H+K+4]=i.x,C[H+K+5]=i.y,C[H+K+6]=i.z,C[H+K+7]=0),m===!0&&(i.fromBufferAttribute(q,X),C[H+K+8]=i.x,C[H+K+9]=i.y,C[H+K+10]=i.z,C[H+K+11]=q.itemSize===4?i.w:1)}}f={count:u,texture:I,size:new ft(A,E)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function y0(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Wh=new Ue,xl=new Rh(1,1),Xh=new xh,qh=new pf,Yh=new Ah,Ml=[],yl=[],Sl=new Float32Array(16),bl=new Float32Array(9),El=new Float32Array(4);function ds(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ml[i];if(r===void 0&&(r=new Float32Array(i),Ml[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Oe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function jr(s,t){let e=yl[t];e===void 0&&(e=new Int32Array(t),yl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function S0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function b0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),Oe(e,t)}}function E0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),Oe(e,t)}}function w0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),Oe(e,t)}}function T0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;El.set(n),s.uniformMatrix2fv(this.addr,!1,El),Oe(e,n)}}function A0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;bl.set(n),s.uniformMatrix3fv(this.addr,!1,bl),Oe(e,n)}}function C0(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Sl.set(n),s.uniformMatrix4fv(this.addr,!1,Sl),Oe(e,n)}}function R0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function P0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),Oe(e,t)}}function L0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),Oe(e,t)}}function I0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),Oe(e,t)}}function D0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function U0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),Oe(e,t)}}function N0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),Oe(e,t)}}function F0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),Oe(e,t)}}function O0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(xl.compareFunction=_h,r=xl):r=Wh,e.setTexture2D(t||r,i)}function B0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||qh,i)}function z0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yh,i)}function k0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Xh,i)}function G0(s){switch(s){case 5126:return S0;case 35664:return b0;case 35665:return E0;case 35666:return w0;case 35674:return T0;case 35675:return A0;case 35676:return C0;case 5124:case 35670:return R0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}function H0(s,t){s.uniform1fv(this.addr,t)}function V0(s,t){const e=ds(t,this.size,2);s.uniform2fv(this.addr,e)}function W0(s,t){const e=ds(t,this.size,3);s.uniform3fv(this.addr,e)}function X0(s,t){const e=ds(t,this.size,4);s.uniform4fv(this.addr,e)}function q0(s,t){const e=ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Y0(s,t){const e=ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Z0(s,t){const e=ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function $0(s,t){s.uniform1iv(this.addr,t)}function J0(s,t){s.uniform2iv(this.addr,t)}function K0(s,t){s.uniform3iv(this.addr,t)}function j0(s,t){s.uniform4iv(this.addr,t)}function Q0(s,t){s.uniform1uiv(this.addr,t)}function tg(s,t){s.uniform2uiv(this.addr,t)}function eg(s,t){s.uniform3uiv(this.addr,t)}function ng(s,t){s.uniform4uiv(this.addr,t)}function ig(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Wh,r[o])}function sg(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||qh,r[o])}function rg(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Yh,r[o])}function og(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Xh,r[o])}function ag(s){switch(s){case 5126:return H0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return $0;case 35667:case 35671:return J0;case 35668:case 35672:return K0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=G0(e.type)}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function wl(s,t){s.seq.push(t),s.map[t.id]=t}function ug(s,t,e){const n=s.name,i=n.length;for(zo.lastIndex=0;;){const r=zo.exec(n),o=zo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){wl(e,l===void 0?new cg(a,s,t):new lg(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new hg(a),wl(e,u)),e=u}}}class kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ug(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Tl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const fg=37297;let dg=0;function pg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Al=new Kt;function mg(s){ae._getMatrix(Al,ae.workingColorSpace,s);const t=`mat3( ${Al.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case Hr:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Cl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+pg(s.getShaderSource(t),a)}else return r}function gg(s,t){const e=mg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _g(s,t){let e;switch(t){case Gu:e="Linear";break;case Hu:e="Reinhard";break;case Vu:e="Cineon";break;case Wu:e="ACESFilmic";break;case qu:e="AgX";break;case Yu:e="Neutral";break;case Xu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new L;function vg(){ae.getLuminanceCoefficients(Lr);const s=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Mg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yg(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Rs(s){return s!==""}function Rl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(s){return s.replace(Sg,Eg)}const bg=new Map;function Eg(s,t){let e=jt[t];if(e===void 0){const n=bg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ga(e)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(s){return s.replace(wg,Tg)}function Tg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Il(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ag(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Cg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rg(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===rs&&(t="ENVMAP_MODE_REFRACTION"),t}function Pg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $a:t="ENVMAP_BLENDING_MULTIPLY";break;case zu:t="ENVMAP_BLENDING_MIX";break;case ku:t="ENVMAP_BLENDING_ADD";break}return t}function Lg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ig(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Ag(e),l=Cg(e),h=Rg(e),u=Pg(e),f=Lg(e),d=xg(e),g=Mg(r),_=i.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[Il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?jt.tonemapping_pars_fragment:"",e.toneMapping!==ri?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Ga(o),o=Rl(o,e),o=Pl(o,e),a=Ga(a),a=Rl(a,e),a=Pl(a,e),o=Ll(o),a=Ll(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=T+m+o,v=T+p+a,A=Tl(i,i.VERTEX_SHADER,b),E=Tl(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(A)||"",q=i.getShaderInfoLog(E)||"",H=O.trim(),X=B.trim(),K=q.trim();let V=!0,ht=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,E);else{const et=Cl(i,A,"vertex"),bt=Cl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+et+`
`+bt)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||K==="")&&(ht=!1);ht&&(P.diagnostics={runnable:V,programLog:H,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:p}})}i.deleteShader(A),i.deleteShader(E),I=new kr(i,_),S=yg(i,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,fg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let Dg=0;class Ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ng(t),e.set(t,n)),n}}class Ng{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}}function Fg(s,t,e,n,i,r,o){const a=new yh,c=new Ug,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,O,B){const q=O.fog,H=B.geometry,X=S.isMeshStandardMaterial?O.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),V=K&&K.mapping===Jr?K.image.height:null,ht=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,bt=et!==void 0?et.length:0;let qt=0;H.morphAttributes.position!==void 0&&(qt=1),H.morphAttributes.normal!==void 0&&(qt=2),H.morphAttributes.color!==void 0&&(qt=3);let ee,ce,re,Y;if(ht){const le=An[ht];ee=le.vertexShader,ce=le.fragmentShader}else ee=S.vertexShader,ce=S.fragmentShader,c.update(S),re=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);const Q=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,Tt=B.isBatchedMesh===!0,$t=!!S.map,he=!!S.matcap,R=!!K,tt=!!S.aoMap,J=!!S.lightMap,$=!!S.bumpMap,Z=!!S.normalMap,ut=!!S.displacementMap,it=!!S.emissiveMap,ct=!!S.metalnessMap,St=!!S.roughnessMap,Ot=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,F=S.iridescence>0,G=S.sheen>0,nt=S.transmission>0,W=Ot&&!!S.anisotropyMap,It=w&&!!S.clearcoatMap,lt=w&&!!S.clearcoatNormalMap,Rt=w&&!!S.clearcoatRoughnessMap,Pt=F&&!!S.iridescenceMap,st=F&&!!S.iridescenceThicknessMap,xt=G&&!!S.sheenColorMap,Gt=G&&!!S.sheenRoughnessMap,Ut=!!S.specularMap,_t=!!S.specularColorMap,Jt=!!S.specularIntensityMap,D=nt&&!!S.transmissionMap,at=nt&&!!S.thicknessMap,dt=!!S.gradientMap,wt=!!S.alphaMap,rt=S.alphaTest>0,j=!!S.alphaHash,Lt=!!S.extensions;let Zt=ri;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Zt=s.toneMapping);const xe={shaderID:ht,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:ce,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:os,alphaToCoverage:!!S.alphaToCoverage,map:$t,matcap:he,envMap:R,envMapMode:R&&K.mapping,envMapCubeUVHeight:V,aoMap:tt,lightMap:J,bumpMap:$,normalMap:Z,displacementMap:f&&ut,emissiveMap:it,normalMapObjectSpace:Z&&S.normalMapType===Ku,normalMapTangentSpace:Z&&S.normalMapType===gh,metalnessMap:ct,roughnessMap:St,anisotropy:Ot,anisotropyMap:W,clearcoat:w,clearcoatMap:It,clearcoatNormalMap:lt,clearcoatRoughnessMap:Rt,dispersion:x,iridescence:F,iridescenceMap:Pt,iridescenceThicknessMap:st,sheen:G,sheenColorMap:xt,sheenRoughnessMap:Gt,specularMap:Ut,specularColorMap:_t,specularIntensityMap:Jt,transmission:nt,transmissionMap:D,thicknessMap:at,gradientMap:dt,opaque:S.transparent===!1&&S.blending===Qi&&S.alphaToCoverage===!1,alphaMap:wt,alphaTest:rt,alphaHash:j,combine:S.combine,mapUv:$t&&_(S.map.channel),aoMapUv:tt&&_(S.aoMap.channel),lightMapUv:J&&_(S.lightMap.channel),bumpMapUv:$&&_(S.bumpMap.channel),normalMapUv:Z&&_(S.normalMap.channel),displacementMapUv:ut&&_(S.displacementMap.channel),emissiveMapUv:it&&_(S.emissiveMap.channel),metalnessMapUv:ct&&_(S.metalnessMap.channel),roughnessMapUv:St&&_(S.roughnessMap.channel),anisotropyMapUv:W&&_(S.anisotropyMap.channel),clearcoatMapUv:It&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ut&&_(S.specularMap.channel),specularColorMapUv:_t&&_(S.specularColorMap.channel),specularIntensityMapUv:Jt&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:wt&&_(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Z||Ot),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&($t||wt),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:yt,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:qt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,decodeVideoTexture:$t&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===fe,decodeVideoTextureEmissive:it&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===fe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ge,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(T(M,S),b(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let P;if(M){const O=An[M];P=Af.clone(O.uniforms)}else P=S.uniforms;return P}function A(S,M){let P;for(let O=0,B=h.length;O<B;O++){const q=h[O];if(q.cacheKey===M){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Ig(s,M,S,r),h.push(P)),P}function E(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function Og(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Bg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Dl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ul(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Bg),n.length>1&&n.sort(f||Dl),i.length>1&&i.sort(f||Dl)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function zg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ul,s.set(n,[o])):i>=r.length?(o=new Ul,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function kg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Gg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Hg=0;function Vg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wg(s){const t=new kg,e=Gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new se,o=new se;function a(l){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,b=0,v=0,A=0,E=0,C=0;l.sort(Vg);for(let S=0,M=l.length;S<M;S++){const P=l[S],O=P.color,B=P.intensity,q=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],B);C++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,V=e.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=P.shadow.matrix,T++}n.directional[d]=X,d++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(O).multiplyScalar(B),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const K=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=H,v++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(O).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const K=P.shadow,V=e.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=A,I.numLightProbes=C,n.version=Hg++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const b=l[p];if(b.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(b.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Nl(s){const t=new Wg(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Xg(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Nl(s),t.set(i,[a])):r>=o.length?(a=new Nl(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zg(s,t,e){let n=new rc;const i=new ft,r=new ft,o=new Re,a=new _d({depthPacking:Ju}),c=new vd,l={},h=e.maxTextureSize,u={[ai]:en,[en]:ai,[Ge]:Ge},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ee;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(E,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(si),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=p!==Wn&&this.type===Wn,q=p===Wn&&this.type!==Wn;for(let H=0,X=E.length;H<X;H++){const K=E[H],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ht=V.getFrameExtents();if(i.multiply(ht),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ht.x),i.x=r.x*ht.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ht.y),i.y=r.y*ht.y,V.mapSize.y=r.y)),V.map===null||B===!0||q===!0){const bt=this.type!==Wn?{minFilter:cn,magFilter:cn}:{};V.map!==null&&V.map.dispose(),V.map=new Ti(i.x,i.y,bt),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const et=V.getViewportCount();for(let bt=0;bt<et;bt++){const qt=V.getViewport(bt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),O.viewport(o),V.updateMatrices(K,bt),n=V.getFrustum(),v(C,I,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Wn&&T(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,P)};function T(E,C){const I=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ti(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,I,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,I,d,_,null)}function b(E,C,I,S){let M=null;const P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=M.uuid,B=C.uuid;let q=l[O];q===void 0&&(q={},l[O]=q);let H=q[B];H===void 0&&(H=M.clone(),q[B]=H,C.addEventListener("dispose",A)),M=H}if(M.visible=C.visible,M.wireframe=C.wireframe,S===Wn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=s.properties.get(M);O.light=I}return M}function v(E,C,I,S,M){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Wn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const B=t.update(E),q=E.material;if(Array.isArray(q)){const H=B.groups;for(let X=0,K=H.length;X<K;X++){const V=H[X],ht=q[V.materialIndex];if(ht&&ht.visible){const et=b(E,ht,S,M);E.onBeforeShadow(s,E,C,I,B,et,V),s.renderBufferDirect(I,null,B,et,E,V),E.onAfterShadow(s,E,C,I,B,et,V)}}}else if(q.visible){const H=b(E,q,S,M);E.onBeforeShadow(s,E,C,I,B,H,null),s.renderBufferDirect(I,null,B,H,E,null),E.onAfterShadow(s,E,C,I,B,H,null)}}const O=E.children;for(let B=0,q=O.length;B<q;B++)v(O[B],C,I,S,M)}function A(E){E.target.removeEventListener("dispose",A);for(const I in l){const S=l[I],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const $g={[jo]:Qo,[ta]:ia,[ea]:sa,[is]:na,[Qo]:jo,[ia]:ta,[sa]:ea,[na]:is};function Jg(s,t){function e(){let D=!1;const at=new Re;let dt=null;const wt=new Re(0,0,0,0);return{setMask:function(rt){dt!==rt&&!D&&(s.colorMask(rt,rt,rt,rt),dt=rt)},setLocked:function(rt){D=rt},setClear:function(rt,j,Lt,Zt,xe){xe===!0&&(rt*=Zt,j*=Zt,Lt*=Zt),at.set(rt,j,Lt,Zt),wt.equals(at)===!1&&(s.clearColor(rt,j,Lt,Zt),wt.copy(at))},reset:function(){D=!1,dt=null,wt.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,dt=null,wt=null,rt=null;return{setReversed:function(j){if(at!==j){const Lt=t.get("EXT_clip_control");j?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),at=j;const Zt=rt;rt=null,this.setClear(Zt)}},getReversed:function(){return at},setTest:function(j){j?Q(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(j){dt!==j&&!D&&(s.depthMask(j),dt=j)},setFunc:function(j){if(at&&(j=$g[j]),wt!==j){switch(j){case jo:s.depthFunc(s.NEVER);break;case Qo:s.depthFunc(s.ALWAYS);break;case ta:s.depthFunc(s.LESS);break;case is:s.depthFunc(s.LEQUAL);break;case ea:s.depthFunc(s.EQUAL);break;case na:s.depthFunc(s.GEQUAL);break;case ia:s.depthFunc(s.GREATER);break;case sa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=j}},setLocked:function(j){D=j},setClear:function(j){rt!==j&&(at&&(j=1-j),s.clearDepth(j),rt=j)},reset:function(){D=!1,dt=null,wt=null,rt=null,at=!1}}}function i(){let D=!1,at=null,dt=null,wt=null,rt=null,j=null,Lt=null,Zt=null,xe=null;return{setTest:function(le){D||(le?Q(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(le){at!==le&&!D&&(s.stencilMask(le),at=le)},setFunc:function(le,Bn,bn){(dt!==le||wt!==Bn||rt!==bn)&&(s.stencilFunc(le,Bn,bn),dt=le,wt=Bn,rt=bn)},setOp:function(le,Bn,bn){(j!==le||Lt!==Bn||Zt!==bn)&&(s.stencilOp(le,Bn,bn),j=le,Lt=Bn,Zt=bn)},setLocked:function(le){D=le},setClear:function(le){xe!==le&&(s.clearStencil(le),xe=le)},reset:function(){D=!1,at=null,dt=null,wt=null,rt=null,j=null,Lt=null,Zt=null,xe=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,b=null,v=null,A=null,E=null,C=new Ht(0,0,0),I=0,S=!1,M=null,P=null,O=null,B=null,q=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=K>=2);let ht=null,et={};const bt=s.getParameter(s.SCISSOR_BOX),qt=s.getParameter(s.VIEWPORT),ee=new Re().fromArray(bt),ce=new Re().fromArray(qt);function re(D,at,dt,wt){const rt=new Uint8Array(4),j=s.createTexture();s.bindTexture(D,j),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<dt;Lt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,rt):s.texImage2D(at+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,rt);return j}const Y={};Y[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(s.DEPTH_TEST),o.setFunc(is),$(!1),Z(Rc),Q(s.CULL_FACE),tt(si);function Q(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function yt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Dt(D,at){return u[D]!==at?(s.bindFramebuffer(D,at),u[D]=at,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=at),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Tt(D,at){let dt=d,wt=!1;if(D){dt=f.get(at),dt===void 0&&(dt=[],f.set(at,dt));const rt=D.textures;if(dt.length!==rt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let j=0,Lt=rt.length;j<Lt;j++)dt[j]=s.COLOR_ATTACHMENT0+j;dt.length=rt.length,wt=!0}}else dt[0]!==s.BACK&&(dt[0]=s.BACK,wt=!0);wt&&s.drawBuffers(dt)}function $t(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const he={[vi]:s.FUNC_ADD,[Su]:s.FUNC_SUBTRACT,[bu]:s.FUNC_REVERSE_SUBTRACT};he[Eu]=s.MIN,he[wu]=s.MAX;const R={[Tu]:s.ZERO,[Au]:s.ONE,[Cu]:s.SRC_COLOR,[Jo]:s.SRC_ALPHA,[Uu]:s.SRC_ALPHA_SATURATE,[Iu]:s.DST_COLOR,[Pu]:s.DST_ALPHA,[Ru]:s.ONE_MINUS_SRC_COLOR,[Ko]:s.ONE_MINUS_SRC_ALPHA,[Du]:s.ONE_MINUS_DST_COLOR,[Lu]:s.ONE_MINUS_DST_ALPHA,[Nu]:s.CONSTANT_COLOR,[Fu]:s.ONE_MINUS_CONSTANT_COLOR,[Ou]:s.CONSTANT_ALPHA,[Bu]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(D,at,dt,wt,rt,j,Lt,Zt,xe,le){if(D===si){_===!0&&(yt(s.BLEND),_=!1);return}if(_===!1&&(Q(s.BLEND),_=!0),D!==yu){if(D!==m||le!==S){if((p!==vi||v!==vi)&&(s.blendEquation(s.FUNC_ADD),p=vi,v=vi),le)switch(D){case Qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gr:s.blendFunc(s.ONE,s.ONE);break;case Pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Pc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,b=null,A=null,E=null,C.set(0,0,0),I=0,m=D,S=le}return}rt=rt||at,j=j||dt,Lt=Lt||wt,(at!==p||rt!==v)&&(s.blendEquationSeparate(he[at],he[rt]),p=at,v=rt),(dt!==T||wt!==b||j!==A||Lt!==E)&&(s.blendFuncSeparate(R[dt],R[wt],R[j],R[Lt]),T=dt,b=wt,A=j,E=Lt),(Zt.equals(C)===!1||xe!==I)&&(s.blendColor(Zt.r,Zt.g,Zt.b,xe),C.copy(Zt),I=xe),m=D,S=!1}function J(D,at){D.side===Ge?yt(s.CULL_FACE):Q(s.CULL_FACE);let dt=D.side===en;at&&(dt=!dt),$(dt),D.blending===Qi&&D.transparent===!1?tt(si):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const wt=D.stencilWrite;a.setTest(wt),wt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),it(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Z(D){D!==vu?(Q(s.CULL_FACE),D!==P&&(D===Rc?s.cullFace(s.BACK):D===xu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),P=D}function ut(D){D!==O&&(X&&s.lineWidth(D),O=D)}function it(D,at,dt){D?(Q(s.POLYGON_OFFSET_FILL),(B!==at||q!==dt)&&(s.polygonOffset(at,dt),B=at,q=dt)):yt(s.POLYGON_OFFSET_FILL)}function ct(D){D?Q(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function St(D){D===void 0&&(D=s.TEXTURE0+H-1),ht!==D&&(s.activeTexture(D),ht=D)}function Ot(D,at,dt){dt===void 0&&(ht===null?dt=s.TEXTURE0+H-1:dt=ht);let wt=et[dt];wt===void 0&&(wt={type:void 0,texture:void 0},et[dt]=wt),(wt.type!==D||wt.texture!==at)&&(ht!==dt&&(s.activeTexture(dt),ht=dt),s.bindTexture(D,at||Y[D]),wt.type=D,wt.texture=at)}function w(){const D=et[ht];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(D){ee.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),ee.copy(D))}function Gt(D){ce.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ce.copy(D))}function Ut(D,at){let dt=l.get(at);dt===void 0&&(dt=new WeakMap,l.set(at,dt));let wt=dt.get(D);wt===void 0&&(wt=s.getUniformBlockIndex(at,D.name),dt.set(D,wt))}function _t(D,at){const wt=l.get(at).get(D);c.get(at)!==wt&&(s.uniformBlockBinding(at,wt,D.__bindingPointIndex),c.set(at,wt))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ht=null,et={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,b=null,v=null,A=null,E=null,C=new Ht(0,0,0),I=0,S=!1,M=null,P=null,O=null,B=null,q=null,ee.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:yt,bindFramebuffer:Dt,drawBuffers:Tt,useProgram:$t,setBlending:tt,setMaterial:J,setFlipSided:$,setCullFace:Z,setLineWidth:ut,setPolygonOffset:it,setScissorTest:ct,activeTexture:St,bindTexture:Ot,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Pt,texImage3D:st,updateUBOMapping:Ut,uniformBlockBinding:_t,texStorage2D:lt,texStorage3D:Rt,texSubImage2D:G,texSubImage3D:nt,compressedTexSubImage2D:W,compressedTexSubImage3D:It,scissor:xt,viewport:Gt,reset:Jt}}function Kg(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ft,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return d?new OffscreenCanvas(w,x):Wr("canvas")}function _(w,x,F){let G=1;const nt=Ot(w);if((nt.width>F||nt.height>F)&&(G=F/Math.max(nt.width,nt.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(G*nt.width),It=Math.floor(G*nt.height);u===void 0&&(u=g(W,It));const lt=x?g(W,It):u;return lt.width=W,lt.height=It,lt.getContext("2d").drawImage(w,0,0,W,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+W+"x"+It+")."),lt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,x,F,G,nt=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=x;if(x===s.RED&&(F===s.FLOAT&&(W=s.R32F),F===s.HALF_FLOAT&&(W=s.R16F),F===s.UNSIGNED_BYTE&&(W=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.R8UI),F===s.UNSIGNED_SHORT&&(W=s.R16UI),F===s.UNSIGNED_INT&&(W=s.R32UI),F===s.BYTE&&(W=s.R8I),F===s.SHORT&&(W=s.R16I),F===s.INT&&(W=s.R32I)),x===s.RG&&(F===s.FLOAT&&(W=s.RG32F),F===s.HALF_FLOAT&&(W=s.RG16F),F===s.UNSIGNED_BYTE&&(W=s.RG8)),x===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.RG8UI),F===s.UNSIGNED_SHORT&&(W=s.RG16UI),F===s.UNSIGNED_INT&&(W=s.RG32UI),F===s.BYTE&&(W=s.RG8I),F===s.SHORT&&(W=s.RG16I),F===s.INT&&(W=s.RG32I)),x===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.RGB8UI),F===s.UNSIGNED_SHORT&&(W=s.RGB16UI),F===s.UNSIGNED_INT&&(W=s.RGB32UI),F===s.BYTE&&(W=s.RGB8I),F===s.SHORT&&(W=s.RGB16I),F===s.INT&&(W=s.RGB32I)),x===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(W=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(W=s.RGBA16UI),F===s.UNSIGNED_INT&&(W=s.RGBA32UI),F===s.BYTE&&(W=s.RGBA8I),F===s.SHORT&&(W=s.RGBA16I),F===s.INT&&(W=s.RGBA32I)),x===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(W=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(W=s.R11F_G11F_B10F)),x===s.RGBA){const It=nt?Hr:ae.getTransfer(G);F===s.FLOAT&&(W=s.RGBA32F),F===s.HALF_FLOAT&&(W=s.RGBA16F),F===s.UNSIGNED_BYTE&&(W=It===fe?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(W=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(W=s.RGB5_A1)}return(W===s.R16F||W===s.R32F||W===s.RG16F||W===s.RG32F||W===s.RGBA16F||W===s.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(w,x){let F;return w?x===null||x===wi||x===Bs?F=s.DEPTH24_STENCIL8:x===Ln?F=s.DEPTH32F_STENCIL8:x===Os&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wi||x===Bs?F=s.DEPTH_COMPONENT24:x===Ln?F=s.DEPTH_COMPONENT32F:x===Os&&(F=s.DEPTH_COMPONENT16),F}function A(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==Pn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function E(w){const x=w.target;x.removeEventListener("dispose",E),I(x),x.isVideoTexture&&h.delete(x)}function C(w){const x=w.target;x.removeEventListener("dispose",C),M(x)}function I(w){const x=n.get(w);if(x.__webglInit===void 0)return;const F=w.source,G=f.get(F);if(G){const nt=G[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(w),Object.keys(G).length===0&&f.delete(F)}n.remove(w)}function S(w){const x=n.get(w);s.deleteTexture(x.__webglTexture);const F=w.source,G=f.get(F);delete G[x.__cacheKey],o.memory.textures--}function M(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let nt=0;nt<x.__webglFramebuffer[G].length;nt++)s.deleteFramebuffer(x.__webglFramebuffer[G][nt]);else s.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)s.deleteFramebuffer(x.__webglFramebuffer[G]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=w.textures;for(let G=0,nt=F.length;G<nt;G++){const W=n.get(F[G]);W.__webglTexture&&(s.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(F[G])}n.remove(w)}let P=0;function O(){P=0}function B(){const w=P;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),P+=1,w}function q(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function H(w,x){const F=n.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const G=w.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,w,x);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function X(w,x){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Y(F,w,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function K(w,x){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Y(F,w,x);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function V(w,x){const F=n.get(w);if(w.version>0&&F.__version!==w.version){Q(F,w,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const ht={[Fs]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[aa]:s.MIRRORED_REPEAT},et={[cn]:s.NEAREST,[Zu]:s.NEAREST_MIPMAP_NEAREST,[nr]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[io]:s.LINEAR_MIPMAP_NEAREST,[yi]:s.LINEAR_MIPMAP_LINEAR},bt={[ju]:s.NEVER,[rf]:s.ALWAYS,[Qu]:s.LESS,[_h]:s.LEQUAL,[tf]:s.EQUAL,[sf]:s.GEQUAL,[ef]:s.GREATER,[nf]:s.NOTEQUAL};function qt(w,x){if(x.type===Ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Pn||x.magFilter===io||x.magFilter===nr||x.magFilter===yi||x.minFilter===Pn||x.minFilter===io||x.minFilter===nr||x.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,ht[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,ht[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,ht[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,et[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,et[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===cn||x.minFilter!==nr&&x.minFilter!==yi||x.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ee(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",E));const G=x.source;let nt=f.get(G);nt===void 0&&(nt={},f.set(G,nt));const W=q(x);if(W!==w.__cacheKey){nt[W]===void 0&&(nt[W]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),nt[W].usedTimes++;const It=nt[w.__cacheKey];It!==void 0&&(nt[w.__cacheKey].usedTimes--,It.usedTimes===0&&S(x)),w.__cacheKey=W,w.__webglTexture=nt[W].texture}return F}function ce(w,x,F){return Math.floor(Math.floor(w/F)/x)}function re(w,x,F,G){const W=w.updateRanges;if(W.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,F,G,x.data);else{W.sort((st,xt)=>st.start-xt.start);let It=0;for(let st=1;st<W.length;st++){const xt=W[It],Gt=W[st],Ut=xt.start+xt.count,_t=ce(Gt.start,x.width,4),Jt=ce(xt.start,x.width,4);Gt.start<=Ut+1&&_t===Jt&&ce(Gt.start+Gt.count-1,x.width,4)===_t?xt.count=Math.max(xt.count,Gt.start+Gt.count-xt.start):(++It,W[It]=Gt)}W.length=It+1;const lt=s.getParameter(s.UNPACK_ROW_LENGTH),Rt=s.getParameter(s.UNPACK_SKIP_PIXELS),Pt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let st=0,xt=W.length;st<xt;st++){const Gt=W[st],Ut=Math.floor(Gt.start/4),_t=Math.ceil(Gt.count/4),Jt=Ut%x.width,D=Math.floor(Ut/x.width),at=_t,dt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Jt,D,at,dt,F,G,x.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,lt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Pt)}}function Y(w,x,F){let G=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=s.TEXTURE_3D);const nt=ee(w,x),W=x.source;e.bindTexture(G,w.__webglTexture,s.TEXTURE0+F);const It=n.get(W);if(W.version!==It.__version||nt===!0){e.activeTexture(s.TEXTURE0+F);const lt=ae.getPrimaries(ae.workingColorSpace),Rt=x.colorSpace===ni?null:ae.getPrimaries(x.colorSpace),Pt=x.colorSpace===ni||lt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let st=_(x.image,!1,i.maxTextureSize);st=St(x,st);const xt=r.convert(x.format,x.colorSpace),Gt=r.convert(x.type);let Ut=b(x.internalFormat,xt,Gt,x.colorSpace,x.isVideoTexture);qt(G,x);let _t;const Jt=x.mipmaps,D=x.isVideoTexture!==!0,at=It.__version===void 0||nt===!0,dt=W.dataReady,wt=A(x,st);if(x.isDepthTexture)Ut=v(x.format===ks,x.type),at&&(D?e.texStorage2D(s.TEXTURE_2D,1,Ut,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Gt,null));else if(x.isDataTexture)if(Jt.length>0){D&&at&&e.texStorage2D(s.TEXTURE_2D,wt,Ut,Jt[0].width,Jt[0].height);for(let rt=0,j=Jt.length;rt<j;rt++)_t=Jt[rt],D?dt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,_t.width,_t.height,xt,Gt,_t.data):e.texImage2D(s.TEXTURE_2D,rt,Ut,_t.width,_t.height,0,xt,Gt,_t.data);x.generateMipmaps=!1}else D?(at&&e.texStorage2D(s.TEXTURE_2D,wt,Ut,st.width,st.height),dt&&re(x,st,xt,Gt)):e.texImage2D(s.TEXTURE_2D,0,Ut,st.width,st.height,0,xt,Gt,st.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Ut,Jt[0].width,Jt[0].height,st.depth);for(let rt=0,j=Jt.length;rt<j;rt++)if(_t=Jt[rt],x.format!==Sn)if(xt!==null)if(D){if(dt)if(x.layerUpdates.size>0){const Lt=ul(_t.width,_t.height,x.format,x.type);for(const Zt of x.layerUpdates){const xe=_t.data.subarray(Zt*Lt/_t.data.BYTES_PER_ELEMENT,(Zt+1)*Lt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,Zt,_t.width,_t.height,1,xt,xe)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,st.depth,xt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,Ut,_t.width,_t.height,st.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?dt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,_t.width,_t.height,st.depth,xt,Gt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,Ut,_t.width,_t.height,st.depth,0,xt,Gt,_t.data)}else{D&&at&&e.texStorage2D(s.TEXTURE_2D,wt,Ut,Jt[0].width,Jt[0].height);for(let rt=0,j=Jt.length;rt<j;rt++)_t=Jt[rt],x.format!==Sn?xt!==null?D?dt&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,Ut,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?dt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,_t.width,_t.height,xt,Gt,_t.data):e.texImage2D(s.TEXTURE_2D,rt,Ut,_t.width,_t.height,0,xt,Gt,_t.data)}else if(x.isDataArrayTexture)if(D){if(at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Ut,st.width,st.height,st.depth),dt)if(x.layerUpdates.size>0){const rt=ul(st.width,st.height,x.format,x.type);for(const j of x.layerUpdates){const Lt=st.data.subarray(j*rt/st.data.BYTES_PER_ELEMENT,(j+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,xt,Gt,Lt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Gt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,st.width,st.height,st.depth,0,xt,Gt,st.data);else if(x.isData3DTexture)D?(at&&e.texStorage3D(s.TEXTURE_3D,wt,Ut,st.width,st.height,st.depth),dt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Gt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,st.width,st.height,st.depth,0,xt,Gt,st.data);else if(x.isFramebufferTexture){if(at)if(D)e.texStorage2D(s.TEXTURE_2D,wt,Ut,st.width,st.height);else{let rt=st.width,j=st.height;for(let Lt=0;Lt<wt;Lt++)e.texImage2D(s.TEXTURE_2D,Lt,Ut,rt,j,0,xt,Gt,null),rt>>=1,j>>=1}}else if(Jt.length>0){if(D&&at){const rt=Ot(Jt[0]);e.texStorage2D(s.TEXTURE_2D,wt,Ut,rt.width,rt.height)}for(let rt=0,j=Jt.length;rt<j;rt++)_t=Jt[rt],D?dt&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,xt,Gt,_t):e.texImage2D(s.TEXTURE_2D,rt,Ut,xt,Gt,_t);x.generateMipmaps=!1}else if(D){if(at){const rt=Ot(st);e.texStorage2D(s.TEXTURE_2D,wt,Ut,rt.width,rt.height)}dt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Gt,st)}else e.texImage2D(s.TEXTURE_2D,0,Ut,xt,Gt,st);m(x)&&p(G),It.__version=W.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Q(w,x,F){if(x.image.length!==6)return;const G=ee(w,x),nt=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);const W=n.get(nt);if(nt.version!==W.__version||G===!0){e.activeTexture(s.TEXTURE0+F);const It=ae.getPrimaries(ae.workingColorSpace),lt=x.colorSpace===ni?null:ae.getPrimaries(x.colorSpace),Rt=x.colorSpace===ni||It===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Pt=x.isCompressedTexture||x.image[0].isCompressedTexture,st=x.image[0]&&x.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!Pt&&!st?xt[j]=_(x.image[j],!0,i.maxCubemapSize):xt[j]=st?x.image[j].image:x.image[j],xt[j]=St(x,xt[j]);const Gt=xt[0],Ut=r.convert(x.format,x.colorSpace),_t=r.convert(x.type),Jt=b(x.internalFormat,Ut,_t,x.colorSpace),D=x.isVideoTexture!==!0,at=W.__version===void 0||G===!0,dt=nt.dataReady;let wt=A(x,Gt);qt(s.TEXTURE_CUBE_MAP,x);let rt;if(Pt){D&&at&&e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Jt,Gt.width,Gt.height);for(let j=0;j<6;j++){rt=xt[j].mipmaps;for(let Lt=0;Lt<rt.length;Lt++){const Zt=rt[Lt];x.format!==Sn?Ut!==null?D?dt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt,0,0,Zt.width,Zt.height,Ut,Zt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt,Jt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt,0,0,Zt.width,Zt.height,Ut,_t,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt,Jt,Zt.width,Zt.height,0,Ut,_t,Zt.data)}}}else{if(rt=x.mipmaps,D&&at){rt.length>0&&wt++;const j=Ot(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Jt,j.width,j.height)}for(let j=0;j<6;j++)if(st){D?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Ut,_t,xt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,xt[j].width,xt[j].height,0,Ut,_t,xt[j].data);for(let Lt=0;Lt<rt.length;Lt++){const xe=rt[Lt].image[j].image;D?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt+1,0,0,xe.width,xe.height,Ut,_t,xe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt+1,Jt,xe.width,xe.height,0,Ut,_t,xe.data)}}else{D?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ut,_t,xt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Jt,Ut,_t,xt[j]);for(let Lt=0;Lt<rt.length;Lt++){const Zt=rt[Lt];D?dt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt+1,0,0,Ut,_t,Zt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Lt+1,Jt,Ut,_t,Zt.image[j])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),W.__version=nt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function yt(w,x,F,G,nt,W){const It=r.convert(F.format,F.colorSpace),lt=r.convert(F.type),Rt=b(F.internalFormat,It,lt,F.colorSpace),Pt=n.get(x),st=n.get(F);if(st.__renderTarget=x,!Pt.__hasExternalTextures){const xt=Math.max(1,x.width>>W),Gt=Math.max(1,x.height>>W);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,W,Rt,xt,Gt,x.depth,0,It,lt,null):e.texImage2D(nt,W,Rt,xt,Gt,0,It,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),it(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,nt,st.__webglTexture,0,ut(x)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,nt,st.__webglTexture,W),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(w,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){const G=x.depthTexture,nt=G&&G.isDepthTexture?G.type:null,W=v(x.stencilBuffer,nt),It=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=ut(x);it(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,W,x.width,x.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,W,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,W,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,It,s.RENDERBUFFER,w)}else{const G=x.textures;for(let nt=0;nt<G.length;nt++){const W=G[nt],It=r.convert(W.format,W.colorSpace),lt=r.convert(W.type),Rt=b(W.internalFormat,It,lt,W.colorSpace),Pt=ut(x);F&&it(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,Rt,x.width,x.height):it(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt,Rt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const nt=G.__webglTexture,W=ut(x);if(x.depthTexture.format===zs)it(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(x.depthTexture.format===ks)it(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,W):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function $t(w){const x=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const nt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",nt)};G.addEventListener("dispose",nt),x.__depthDisposeCallback=nt}x.__boundDepthTexture=G}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const G=w.texture.mipmaps;G&&G.length>0?Tt(x.__webglFramebuffer[0],w):Tt(x.__webglFramebuffer,w)}else if(F){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=s.createRenderbuffer(),Dt(x.__webglDepthbuffer[G],w,!1);else{const nt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,W)}}else{const G=w.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Dt(x.__webglDepthbuffer,w,!1);else{const nt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,W),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,W)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function he(w,x,F){const G=n.get(w);x!==void 0&&yt(G.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&$t(w)}function R(w){const x=w.texture,F=n.get(w),G=n.get(x);w.addEventListener("dispose",C);const nt=w.textures,W=w.isWebGLCubeRenderTarget===!0,It=nt.length>1;if(It||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=x.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[lt]=[];for(let Rt=0;Rt<x.mipmaps.length;Rt++)F.__webglFramebuffer[lt][Rt]=s.createFramebuffer()}else F.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)F.__webglFramebuffer[lt]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(It)for(let lt=0,Rt=nt.length;lt<Rt;lt++){const Pt=n.get(nt[lt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&it(w)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let lt=0;lt<nt.length;lt++){const Rt=nt[lt];F.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[lt]);const Pt=r.convert(Rt.format,Rt.colorSpace),st=r.convert(Rt.type),xt=b(Rt.internalFormat,Pt,st,Rt.colorSpace,w.isXRRenderTarget===!0),Gt=ut(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,xt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,F.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Dt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(W){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),qt(s.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let Rt=0;Rt<x.mipmaps.length;Rt++)yt(F.__webglFramebuffer[lt][Rt],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt);else yt(F.__webglFramebuffer[lt],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(x)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let lt=0,Rt=nt.length;lt<Rt;lt++){const Pt=nt[lt],st=n.get(Pt);let xt=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(xt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,st.__webglTexture),qt(xt,Pt),yt(F.__webglFramebuffer,w,Pt,s.COLOR_ATTACHMENT0+lt,xt,0),m(Pt)&&p(xt)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(lt=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,G.__webglTexture),qt(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let Rt=0;Rt<x.mipmaps.length;Rt++)yt(F.__webglFramebuffer[Rt],w,x,s.COLOR_ATTACHMENT0,lt,Rt);else yt(F.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,lt,0);m(x)&&p(lt),e.unbindTexture()}w.depthBuffer&&$t(w)}function tt(w){const x=w.textures;for(let F=0,G=x.length;F<G;F++){const nt=x[F];if(m(nt)){const W=T(w),It=n.get(nt).__webglTexture;e.bindTexture(W,It),p(W),e.unbindTexture()}}}const J=[],$=[];function Z(w){if(w.samples>0){if(it(w)===!1){const x=w.textures,F=w.width,G=w.height;let nt=s.COLOR_BUFFER_BIT;const W=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=n.get(w),lt=x.length>1;if(lt)for(let Pt=0;Pt<x.length;Pt++)e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Rt=w.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Pt=0;Pt<x.length;Pt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const st=n.get(x[Pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,F,G,0,0,F,G,nt,s.NEAREST),c===!0&&(J.length=0,$.length=0,J.push(s.COLOR_ATTACHMENT0+Pt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(J.push(W),$.push(W),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let Pt=0;Pt<x.length;Pt++){e.bindFramebuffer(s.FRAMEBUFFER,It.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const st=n.get(x[Pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,It.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,st,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ut(w){return Math.min(i.maxSamples,w.samples)}function it(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(w){const x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function St(w,x){const F=w.colorSpace,G=w.format,nt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==os&&F!==ni&&(ae.getTransfer(F)===fe?(G!==Sn||nt!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function Ot(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=he,this.setupRenderTarget=R,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=it}function jg(s,t){function e(n,i=ni){let r;const o=ae.getTransfer(i);if(n===Fn)return s.UNSIGNED_BYTE;if(n===Ka)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return s.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===lh)return s.BYTE;if(n===hh)return s.SHORT;if(n===Os)return s.UNSIGNED_SHORT;if(n===Ja)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===Ks)return s.HALF_FLOAT;if(n===dh)return s.ALPHA;if(n===ph)return s.RGB;if(n===Sn)return s.RGBA;if(n===zs)return s.DEPTH_COMPONENT;if(n===ks)return s.DEPTH_STENCIL;if(n===Qa)return s.RED;if(n===tc)return s.RED_INTEGER;if(n===mh)return s.RG;if(n===ec)return s.RG_INTEGER;if(n===nc)return s.RGBA_INTEGER;if(n===Fr||n===Or||n===Br||n===zr)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===la||n===ha||n===ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===da||n===pa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===da)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===Sa||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===va)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ya)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ba)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ta)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Aa)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Pa||n===La)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ia||n===Da||n===Ua||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ph(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Yn({vertexShader:Qg,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n_ extends us{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new e_,p={},T=e.getContextAttributes();let b=null,v=null;const A=[],E=[],C=new ft;let I=null;const S=new dn;S.viewport=new Re;const M=new dn;M.viewport=new Re;const P=[S,M],O=new bd;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=A[Y];return Q===void 0&&(Q=new Ao,A[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=A[Y];return Q===void 0&&(Q=new Ao,A[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=A[Y];return Q===void 0&&(Q=new Ao,A[Y]=Q),Q.getHandSpace()};function H(Y){const Q=E.indexOf(Y.inputSource);if(Q===-1)return;const yt=A[Q];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,l||o),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let Y=0;Y<A.length;Y++){const Q=E[Y];Q!==null&&(E[Y]=null,A[Y].disconnect(Q))}B=null,q=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(b),d=null,f=null,u=null,i=null,v=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(b=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),T.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Dt=null,Tt=null;T.depth&&(Tt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=T.stencil?ks:zs,Dt=T.stencil?Bs:wi);const $t={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer($t),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ti(f.textureWidth,f.textureHeight,{format:Sn,type:Fn,depthTexture:new Rh(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const yt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ti(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Y){for(let Q=0;Q<Y.removed.length;Q++){const yt=Y.removed[Q],Dt=E.indexOf(yt);Dt>=0&&(E[Dt]=null,A[Dt].disconnect(yt))}for(let Q=0;Q<Y.added.length;Q++){const yt=Y.added[Q];let Dt=E.indexOf(yt);if(Dt===-1){for(let $t=0;$t<A.length;$t++)if($t>=E.length){E.push(yt),Dt=$t;break}else if(E[$t]===null){E[$t]=yt,Dt=$t;break}if(Dt===-1)break}const Tt=A[Dt];Tt&&Tt.connect(yt)}}const V=new L,ht=new L;function et(Y,Q,yt){V.setFromMatrixPosition(Q.matrixWorld),ht.setFromMatrixPosition(yt.matrixWorld);const Dt=V.distanceTo(ht),Tt=Q.projectionMatrix.elements,$t=yt.projectionMatrix.elements,he=Tt[14]/(Tt[10]-1),R=Tt[14]/(Tt[10]+1),tt=(Tt[9]+1)/Tt[5],J=(Tt[9]-1)/Tt[5],$=(Tt[8]-1)/Tt[0],Z=($t[8]+1)/$t[0],ut=he*$,it=he*Z,ct=Dt/(-$+Z),St=ct*-$;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(St),Y.translateZ(ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Tt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ot=he+ct,w=R+ct,x=ut-St,F=it+(Dt-St),G=tt*R/w*Ot,nt=J*R/w*Ot;Y.projectionMatrix.makePerspective(x,F,G,nt,Ot,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function bt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,yt=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),O.near=M.near=S.near=Q,O.far=M.far=S.far=yt,(B!==O.near||q!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,q=O.far),O.layers.mask=Y.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const Dt=Y.parent,Tt=O.cameras;bt(O,Dt);for(let $t=0;$t<Tt.length;$t++)bt(Tt[$t],Dt);Tt.length===2?et(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),qt(Y,O,Dt)};function qt(Y,Q,yt){yt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Oa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return p[Y]};let ee=null;function ce(Y,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Dt=!1;yt.length!==O.cameras.length&&(O.cameras.length=0,Dt=!0);for(let R=0;R<yt.length;R++){const tt=yt[R];let J=null;if(d!==null)J=d.getViewport(tt);else{const Z=u.getViewSubImage(f,tt);J=Z.viewport,R===0&&(t.setRenderTargetTextures(v,Z.colorTexture,Z.depthStencilTexture),t.setRenderTarget(v))}let $=P[R];$===void 0&&($=new dn,$.layers.enable(R),$.viewport=new Re,P[R]=$),$.matrix.fromArray(tt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(tt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(J.x,J.y,J.width,J.height),R===0&&(O.matrix.copy($.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Dt===!0&&O.cameras.push($)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const R=u.getDepthInformation(yt[0]);R&&R.isValid&&R.texture&&m.init(R,i.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let R=0;R<yt.length;R++){const tt=yt[R].camera;if(tt){let J=p[tt];J||(J=new Ph,p[tt]=J);const $=u.getCameraImage(tt);J.sourceTexture=$}}}}for(let yt=0;yt<A.length;yt++){const Dt=E[yt],Tt=A[yt];Dt!==null&&Tt!==void 0&&Tt.update(Dt,Q,l||o)}ee&&ee(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const re=new Vh;re.setAnimationLoop(ce),this.setAnimationLoop=function(Y){ee=Y},this.dispose=function(){}}}const mi=new ln,i_=new se;function s_(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),b=T.envMap,v=T.envMapRotation;b&&(m.envMap.value=b,mi.copy(v),mi.x*=-1,mi.y*=-1,mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(mi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function r_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,b){const v=b.program;n.uniformBlockBinding(T,v)}function l(T,b){let v=i[T.id];v===void 0&&(g(T),v=h(T),i[T.id]=v,T.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(T,A);const E=t.render.frame;r[T.id]!==E&&(f(T),r[T.id]=E)}function h(T){const b=u();T.__bindingPointIndex=b;const v=s.createBuffer(),A=T.__size,E=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=i[T.id],v=T.uniforms,A=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let E=0,C=v.length;E<C;E++){const I=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,M=I.length;S<M;S++){const P=I[S];if(d(P,E,S,A)===!0){const O=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let H=0;H<B.length;H++){const X=B[H],K=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,O+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(T,b,v,A){const E=T.value,C=b+"_"+v;if(A[C]===void 0)return typeof E=="number"||typeof E=="boolean"?A[C]=E:A[C]=E.clone(),!0;{const I=A[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(T){const b=T.uniforms;let v=0;const A=16;for(let C=0,I=b.length;C<I;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,P=S.length;M<P;M++){const O=S[M],B=Array.isArray(O.value)?O.value:[O.value];for(let q=0,H=B.length;q<H;q++){const X=B[q],K=_(X),V=v%A,ht=V%K.boundary,et=V+ht;v+=ht,et!==0&&A-et<K.storage&&(v+=A-et),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=K.storage}}}const E=v%A;return E>0&&(v+=A-E),T.__size=v,T.__cache={},this}function _(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){const b=T.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const T in i)s.deleteBuffer(i[T]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class o_{constructor(t={}){const{canvas:e=af(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=ve;let E=0,C=0,I=null,S=-1,M=null;const P=new Re,O=new Re;let B=null;const q=new Ht(0);let H=0,X=e.width,K=e.height,V=1,ht=null,et=null;const bt=new Re(0,0,X,K),qt=new Re(0,0,X,K);let ee=!1;const ce=new rc;let re=!1,Y=!1;const Q=new se,yt=new L,Dt=new Re,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function he(){return I===null?V:1}let R=n;function tt(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),R===null){const U="webgl2";if(R=tt(U,y),R===null)throw tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let J,$,Z,ut,it,ct,St,Ot,w,x,F,G,nt,W,It,lt,Rt,Pt,st,xt,Gt,Ut,_t,Jt;function D(){J=new g0(R),J.init(),Ut=new jg(R,J),$=new l0(R,J,t,Ut),Z=new Jg(R,J),$.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),ut=new x0(R),it=new Og,ct=new Kg(R,J,Z,it,$,Ut,ut),St=new u0(v),Ot=new m0(v),w=new wd(R),_t=new a0(R,w),x=new _0(R,w,ut,_t),F=new y0(R,x,w,ut),st=new M0(R,$,ct),lt=new h0(it),G=new Fg(v,St,Ot,J,$,_t,lt),nt=new s_(v,it),W=new zg,It=new Xg(J),Pt=new o0(v,St,Ot,Z,F,d,c),Rt=new Zg(v,F,$),Jt=new r_(R,ut,$,Z),xt=new c0(R,J,ut),Gt=new v0(R,J,ut),ut.programs=G.programs,v.capabilities=$,v.extensions=J,v.properties=it,v.renderLists=W,v.shadowMap=Rt,v.state=Z,v.info=ut}D();const at=new n_(v,R);this.xr=at,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=J.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=J.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(X,K,!1))},this.getSize=function(y){return y.set(X,K)},this.setSize=function(y,U,z=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=y,K=U,e.width=Math.floor(y*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(X*V,K*V).floor()},this.setDrawingBufferSize=function(y,U,z){X=y,K=U,V=z,e.width=Math.floor(y*z),e.height=Math.floor(U*z),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(bt)},this.setViewport=function(y,U,z,k){y.isVector4?bt.set(y.x,y.y,y.z,y.w):bt.set(y,U,z,k),Z.viewport(P.copy(bt).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(qt)},this.setScissor=function(y,U,z,k){y.isVector4?qt.set(y.x,y.y,y.z,y.w):qt.set(y,U,z,k),Z.scissor(O.copy(qt).multiplyScalar(V).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(y){Z.setScissorTest(ee=y)},this.setOpaqueSort=function(y){ht=y},this.setTransparentSort=function(y){et=y},this.getClearColor=function(y){return y.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,z=!0){let k=0;if(y){let N=!1;if(I!==null){const ot=I.texture.format;N=ot===nc||ot===ec||ot===tc}if(N){const ot=I.texture.type,vt=ot===Fn||ot===wi||ot===Os||ot===Bs||ot===Ka||ot===ja,Ct=Pt.getClearColor(),Et=Pt.getClearAlpha(),kt=Ct.r,Vt=Ct.g,Ft=Ct.b;vt?(g[0]=kt,g[1]=Vt,g[2]=Ft,g[3]=Et,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=kt,_[1]=Vt,_[2]=Ft,_[3]=Et,R.clearBufferiv(R.COLOR,0,_))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Pt.dispose(),W.dispose(),It.dispose(),it.dispose(),St.dispose(),Ot.dispose(),F.dispose(),_t.dispose(),Jt.dispose(),G.dispose(),at.dispose(),at.removeEventListener("sessionstart",bn),at.removeEventListener("sessionend",bc),ci.stop()};function dt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=ut.autoReset,U=Rt.enabled,z=Rt.autoUpdate,k=Rt.needsUpdate,N=Rt.type;D(),ut.autoReset=y,Rt.enabled=U,Rt.autoUpdate=z,Rt.needsUpdate=k,Rt.type=N}function rt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function j(y){const U=y.target;U.removeEventListener("dispose",j),Lt(U)}function Lt(y){Zt(y),it.remove(y)}function Zt(y){const U=it.get(y).programs;U!==void 0&&(U.forEach(function(z){G.releaseProgram(z)}),y.isShaderMaterial&&G.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,z,k,N,ot){U===null&&(U=Tt);const vt=N.isMesh&&N.matrixWorld.determinant()<0,Ct=fu(y,U,z,k,N);Z.setMaterial(k,vt);let Et=z.index,kt=1;if(k.wireframe===!0){if(Et=x.getWireframeAttribute(z),Et===void 0)return;kt=2}const Vt=z.drawRange,Ft=z.attributes.position;let ne=Vt.start*kt,ue=(Vt.start+Vt.count)*kt;ot!==null&&(ne=Math.max(ne,ot.start*kt),ue=Math.min(ue,(ot.start+ot.count)*kt)),Et!==null?(ne=Math.max(ne,0),ue=Math.min(ue,Et.count)):Ft!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,Ft.count));const Ce=ue-ne;if(Ce<0||Ce===1/0)return;_t.setup(N,k,Ct,z,Et);let ye,ge=xt;if(Et!==null&&(ye=w.get(Et),ge=Gt,ge.setIndex(ye)),N.isMesh)k.wireframe===!0?(Z.setLineWidth(k.wireframeLinewidth*he()),ge.setMode(R.LINES)):ge.setMode(R.TRIANGLES);else if(N.isLine){let zt=k.linewidth;zt===void 0&&(zt=1),Z.setLineWidth(zt*he()),N.isLineSegments?ge.setMode(R.LINES):N.isLineLoop?ge.setMode(R.LINE_LOOP):ge.setMode(R.LINE_STRIP)}else N.isPoints?ge.setMode(R.POINTS):N.isSprite&&ge.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ge.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const zt=N._multiDrawStarts,we=N._multiDrawCounts,oe=N._multiDrawCount,nn=Et?w.get(Et).bytesPerElement:1,Pi=it.get(k).currentProgram.getUniforms();for(let sn=0;sn<oe;sn++)Pi.setValue(R,"_gl_DrawID",sn),ge.render(zt[sn]/nn,we[sn])}else if(N.isInstancedMesh)ge.renderInstances(ne,Ce,N.count);else if(z.isInstancedBufferGeometry){const zt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,we=Math.min(z.instanceCount,zt);ge.renderInstances(ne,Ce,we)}else ge.render(ne,Ce)};function xe(y,U,z){y.transparent===!0&&y.side===Ge&&y.forceSinglePass===!1?(y.side=en,y.needsUpdate=!0,er(y,U,z),y.side=ai,y.needsUpdate=!0,er(y,U,z),y.side=Ge):er(y,U,z)}this.compile=function(y,U,z=null){z===null&&(z=y),p=It.get(z),p.init(U),b.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==z&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ot=N.material;if(ot)if(Array.isArray(ot))for(let vt=0;vt<ot.length;vt++){const Ct=ot[vt];xe(Ct,z,N),k.add(Ct)}else xe(ot,z,N),k.add(ot)}),p=b.pop(),k},this.compileAsync=function(y,U,z=null){const k=this.compile(y,U,z);return new Promise(N=>{function ot(){if(k.forEach(function(vt){it.get(vt).currentProgram.isReady()&&k.delete(vt)}),k.size===0){N(y);return}setTimeout(ot,10)}J.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let le=null;function Bn(y){le&&le(y)}function bn(){ci.stop()}function bc(){ci.start()}const ci=new Vh;ci.setAnimationLoop(Bn),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(y){le=y,at.setAnimationLoop(y),y===null?ci.stop():ci.start()},at.addEventListener("sessionstart",bn),at.addEventListener("sessionend",bc),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(U),U=at.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,U,I),p=It.get(y,b.length),p.init(U),b.push(p),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ce.setFromProjectionMatrix(Q,In,U.reversedDepth),Y=this.localClippingEnabled,re=lt.init(this.clippingPlanes,Y),m=W.get(y,T.length),m.init(),T.push(m),at.enabled===!0&&at.isPresenting===!0){const ot=v.xr.getDepthSensingMesh();ot!==null&&eo(ot,U,-1/0,v.sortObjects)}eo(y,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ht,et),$t=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,$t&&Pt.addToRenderList(m,y),this.info.render.frame++,re===!0&&lt.beginShadows();const z=p.state.shadowsArray;Rt.render(z,y,U),re===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ot=U.cameras;if(N.length>0)for(let vt=0,Ct=ot.length;vt<Ct;vt++){const Et=ot[vt];wc(k,N,y,Et)}$t&&Pt.render(y);for(let vt=0,Ct=ot.length;vt<Ct;vt++){const Et=ot[vt];Ec(m,y,Et,Et.viewport)}}else N.length>0&&wc(k,N,y,U),$t&&Pt.render(y),Ec(m,y,U);I!==null&&C===0&&(ct.updateMultisampleRenderTarget(I),ct.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(v,y,U),_t.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],re===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function eo(y,U,z,k){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||ce.intersectsSprite(y)){k&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Q);const vt=F.update(y),Ct=y.material;Ct.visible&&m.push(y,vt,Ct,z,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||ce.intersectsObject(y))){const vt=F.update(y),Ct=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Dt.copy(vt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(Q)),Array.isArray(Ct)){const Et=vt.groups;for(let kt=0,Vt=Et.length;kt<Vt;kt++){const Ft=Et[kt],ne=Ct[Ft.materialIndex];ne&&ne.visible&&m.push(y,vt,ne,z,Dt.z,Ft)}}else Ct.visible&&m.push(y,vt,Ct,z,Dt.z,null)}}const ot=y.children;for(let vt=0,Ct=ot.length;vt<Ct;vt++)eo(ot[vt],U,z,k)}function Ec(y,U,z,k){const N=y.opaque,ot=y.transmissive,vt=y.transparent;p.setupLightsView(z),re===!0&&lt.setGlobalState(v.clippingPlanes,z),k&&Z.viewport(P.copy(k)),N.length>0&&tr(N,U,z),ot.length>0&&tr(ot,U,z),vt.length>0&&tr(vt,U,z),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function wc(y,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Ti(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Ks:Fn,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ot=p.state.transmissionRenderTarget[k.id],vt=k.viewport||P;ot.setSize(vt.z*v.transmissionResolutionScale,vt.w*v.transmissionResolutionScale);const Ct=v.getRenderTarget(),Et=v.getActiveCubeFace(),kt=v.getActiveMipmapLevel();v.setRenderTarget(ot),v.getClearColor(q),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),$t&&Pt.render(z);const Vt=v.toneMapping;v.toneMapping=ri;const Ft=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),re===!0&&lt.setGlobalState(v.clippingPlanes,k),tr(y,z,k),ct.updateMultisampleRenderTarget(ot),ct.updateRenderTargetMipmap(ot),J.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let ue=0,Ce=U.length;ue<Ce;ue++){const ye=U[ue],ge=ye.object,zt=ye.geometry,we=ye.material,oe=ye.group;if(we.side===Ge&&ge.layers.test(k.layers)){const nn=we.side;we.side=en,we.needsUpdate=!0,Tc(ge,z,k,zt,we,oe),we.side=nn,we.needsUpdate=!0,ne=!0}}ne===!0&&(ct.updateMultisampleRenderTarget(ot),ct.updateRenderTargetMipmap(ot))}v.setRenderTarget(Ct,Et,kt),v.setClearColor(q,H),Ft!==void 0&&(k.viewport=Ft),v.toneMapping=Vt}function tr(y,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ot=y.length;N<ot;N++){const vt=y[N],Ct=vt.object,Et=vt.geometry,kt=vt.group;let Vt=vt.material;Vt.allowOverride===!0&&k!==null&&(Vt=k),Ct.layers.test(z.layers)&&Tc(Ct,U,z,Et,Vt,kt)}}function Tc(y,U,z,k,N,ot){y.onBeforeRender(v,U,z,k,N,ot),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(v,U,z,k,y,ot),N.transparent===!0&&N.side===Ge&&N.forceSinglePass===!1?(N.side=en,N.needsUpdate=!0,v.renderBufferDirect(z,U,k,N,y,ot),N.side=ai,N.needsUpdate=!0,v.renderBufferDirect(z,U,k,N,y,ot),N.side=Ge):v.renderBufferDirect(z,U,k,N,y,ot),y.onAfterRender(v,U,z,k,N,ot)}function er(y,U,z){U.isScene!==!0&&(U=Tt);const k=it.get(y),N=p.state.lights,ot=p.state.shadowsArray,vt=N.state.version,Ct=G.getParameters(y,N.state,ot,U,z),Et=G.getProgramCacheKey(Ct);let kt=k.programs;k.environment=y.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(y.isMeshStandardMaterial?Ot:St).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,kt===void 0&&(y.addEventListener("dispose",j),kt=new Map,k.programs=kt);let Vt=kt.get(Et);if(Vt!==void 0){if(k.currentProgram===Vt&&k.lightsStateVersion===vt)return Cc(y,Ct),Vt}else Ct.uniforms=G.getUniforms(y),y.onBeforeCompile(Ct,v),Vt=G.acquireProgram(Ct,Et),kt.set(Et,Vt),k.uniforms=Ct.uniforms;const Ft=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ft.clippingPlanes=lt.uniform),Cc(y,Ct),k.needsLights=pu(y),k.lightsStateVersion=vt,k.needsLights&&(Ft.ambientLightColor.value=N.state.ambient,Ft.lightProbe.value=N.state.probe,Ft.directionalLights.value=N.state.directional,Ft.directionalLightShadows.value=N.state.directionalShadow,Ft.spotLights.value=N.state.spot,Ft.spotLightShadows.value=N.state.spotShadow,Ft.rectAreaLights.value=N.state.rectArea,Ft.ltc_1.value=N.state.rectAreaLTC1,Ft.ltc_2.value=N.state.rectAreaLTC2,Ft.pointLights.value=N.state.point,Ft.pointLightShadows.value=N.state.pointShadow,Ft.hemisphereLights.value=N.state.hemi,Ft.directionalShadowMap.value=N.state.directionalShadowMap,Ft.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ft.spotShadowMap.value=N.state.spotShadowMap,Ft.spotLightMatrix.value=N.state.spotLightMatrix,Ft.spotLightMap.value=N.state.spotLightMap,Ft.pointShadowMap.value=N.state.pointShadowMap,Ft.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Vt,k.uniformsList=null,Vt}function Ac(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=kr.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Cc(y,U){const z=it.get(y);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function fu(y,U,z,k,N){U.isScene!==!0&&(U=Tt),ct.resetTextureUnits();const ot=U.fog,vt=k.isMeshStandardMaterial?U.environment:null,Ct=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:os,Et=(k.isMeshStandardMaterial?Ot:St).get(k.envMap||vt),kt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Vt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ft=!!z.morphAttributes.position,ne=!!z.morphAttributes.normal,ue=!!z.morphAttributes.color;let Ce=ri;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ce=v.toneMapping);const ye=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ge=ye!==void 0?ye.length:0,zt=it.get(k),we=p.state.lights;if(re===!0&&(Y===!0||y!==M)){const qe=y===M&&k.id===S;lt.setState(k,y,qe)}let oe=!1;k.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==we.state.version||zt.outputColorSpace!==Ct||N.isBatchedMesh&&zt.batching===!1||!N.isBatchedMesh&&zt.batching===!0||N.isBatchedMesh&&zt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&zt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&zt.instancing===!1||!N.isInstancedMesh&&zt.instancing===!0||N.isSkinnedMesh&&zt.skinning===!1||!N.isSkinnedMesh&&zt.skinning===!0||N.isInstancedMesh&&zt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&zt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&zt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&zt.instancingMorph===!1&&N.morphTexture!==null||zt.envMap!==Et||k.fog===!0&&zt.fog!==ot||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==lt.numPlanes||zt.numIntersection!==lt.numIntersection)||zt.vertexAlphas!==kt||zt.vertexTangents!==Vt||zt.morphTargets!==Ft||zt.morphNormals!==ne||zt.morphColors!==ue||zt.toneMapping!==Ce||zt.morphTargetsCount!==ge)&&(oe=!0):(oe=!0,zt.__version=k.version);let nn=zt.currentProgram;oe===!0&&(nn=er(k,U,N));let Pi=!1,sn=!1,ps=!1;const Te=nn.getUniforms(),hn=zt.uniforms;if(Z.useProgram(nn.program)&&(Pi=!0,sn=!0,ps=!0),k.id!==S&&(S=k.id,sn=!0),Pi||M!==y){Z.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Te.setValue(R,"projectionMatrix",y.projectionMatrix),Te.setValue(R,"viewMatrix",y.matrixWorldInverse);const Je=Te.map.cameraPosition;Je!==void 0&&Je.setValue(R,yt.setFromMatrixPosition(y.matrixWorld)),$.logarithmicDepthBuffer&&Te.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Te.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,sn=!0,ps=!0)}if(N.isSkinnedMesh){Te.setOptional(R,N,"bindMatrix"),Te.setOptional(R,N,"bindMatrixInverse");const qe=N.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),Te.setValue(R,"boneTexture",qe.boneTexture,ct))}N.isBatchedMesh&&(Te.setOptional(R,N,"batchingTexture"),Te.setValue(R,"batchingTexture",N._matricesTexture,ct),Te.setOptional(R,N,"batchingIdTexture"),Te.setValue(R,"batchingIdTexture",N._indirectTexture,ct),Te.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&Te.setValue(R,"batchingColorTexture",N._colorsTexture,ct));const un=z.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&st.update(N,z,nn),(sn||zt.receiveShadow!==N.receiveShadow)&&(zt.receiveShadow=N.receiveShadow,Te.setValue(R,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(hn.envMap.value=Et,hn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),sn&&(Te.setValue(R,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&du(hn,ps),ot&&k.fog===!0&&nt.refreshFogUniforms(hn,ot),nt.refreshMaterialUniforms(hn,k,V,K,p.state.transmissionRenderTarget[y.id]),kr.upload(R,Ac(zt),hn,ct)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(kr.upload(R,Ac(zt),hn,ct),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Te.setValue(R,"center",N.center),Te.setValue(R,"modelViewMatrix",N.modelViewMatrix),Te.setValue(R,"normalMatrix",N.normalMatrix),Te.setValue(R,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const qe=k.uniformsGroups;for(let Je=0,no=qe.length;Je<no;Je++){const li=qe[Je];Jt.update(li,nn),Jt.bind(li,nn)}}return nn}function du(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function pu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,U,z){const k=it.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),it.get(y.texture).__webglTexture=U,it.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const z=it.get(y);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const mu=R.createFramebuffer();this.setRenderTarget=function(y,U=0,z=0){I=y,E=U,C=z;let k=!0,N=null,ot=!1,vt=!1;if(y){const Et=it.get(y);if(Et.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(Et.__webglFramebuffer===void 0)ct.setupRenderTarget(y);else if(Et.__hasExternalTextures)ct.rebindTextures(y,it.get(y.texture).__webglTexture,it.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ft=y.depthTexture;if(Et.__boundDepthTexture!==Ft){if(Ft!==null&&it.has(Ft)&&(y.width!==Ft.image.width||y.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(y)}}const kt=y.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(vt=!0);const Vt=it.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][z]:N=Vt[U],ot=!0):y.samples>0&&ct.useMultisampledRTT(y)===!1?N=it.get(y).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[z]:N=Vt,P.copy(y.viewport),O.copy(y.scissor),B=y.scissorTest}else P.copy(bt).multiplyScalar(V).floor(),O.copy(qt).multiplyScalar(V).floor(),B=ee;if(z!==0&&(N=mu),Z.bindFramebuffer(R.FRAMEBUFFER,N)&&k&&Z.drawBuffers(y,N),Z.viewport(P),Z.scissor(O),Z.setScissorTest(B),ot){const Et=it.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,z)}else if(vt){const Et=U;for(let kt=0;kt<y.textures.length;kt++){const Vt=it.get(y.textures[kt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+kt,Vt.__webglTexture,z,Et)}}else if(y!==null&&z!==0){const Et=it.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Et.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(y,U,z,k,N,ot,vt,Ct=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=it.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){Z.bindFramebuffer(R.FRAMEBUFFER,Et);try{const kt=y.textures[Ct],Vt=kt.format,Ft=kt.type;if(!$.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-k&&z>=0&&z<=y.height-N&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ct),R.readPixels(U,z,k,N,Ut.convert(Vt),Ut.convert(Ft),ot))}finally{const kt=I!==null?it.get(I).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(y,U,z,k,N,ot,vt,Ct=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=it.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et)if(U>=0&&U<=y.width-k&&z>=0&&z<=y.height-N){Z.bindFramebuffer(R.FRAMEBUFFER,Et);const kt=y.textures[Ct],Vt=kt.format,Ft=kt.type;if(!$.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ne),R.bufferData(R.PIXEL_PACK_BUFFER,ot.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ct),R.readPixels(U,z,k,N,Ut.convert(Vt),Ut.convert(Ft),0);const ue=I!==null?it.get(I).__webglFramebuffer:null;Z.bindFramebuffer(R.FRAMEBUFFER,ue);const Ce=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await cf(R,Ce,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ne),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ot),R.deleteBuffer(ne),R.deleteSync(Ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,z=0){const k=Math.pow(2,-z),N=Math.floor(y.image.width*k),ot=Math.floor(y.image.height*k),vt=U!==null?U.x:0,Ct=U!==null?U.y:0;ct.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,vt,Ct,N,ot),Z.unbindTexture()};const gu=R.createFramebuffer(),_u=R.createFramebuffer();this.copyTextureToTexture=function(y,U,z=null,k=null,N=0,ot=null){ot===null&&(N!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=N,N=0):ot=0);let vt,Ct,Et,kt,Vt,Ft,ne,ue,Ce;const ye=y.isCompressedTexture?y.mipmaps[ot]:y.image;if(z!==null)vt=z.max.x-z.min.x,Ct=z.max.y-z.min.y,Et=z.isBox3?z.max.z-z.min.z:1,kt=z.min.x,Vt=z.min.y,Ft=z.isBox3?z.min.z:0;else{const un=Math.pow(2,-N);vt=Math.floor(ye.width*un),Ct=Math.floor(ye.height*un),y.isDataArrayTexture?Et=ye.depth:y.isData3DTexture?Et=Math.floor(ye.depth*un):Et=1,kt=0,Vt=0,Ft=0}k!==null?(ne=k.x,ue=k.y,Ce=k.z):(ne=0,ue=0,Ce=0);const ge=Ut.convert(U.format),zt=Ut.convert(U.type);let we;U.isData3DTexture?(ct.setTexture3D(U,0),we=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ct.setTexture2DArray(U,0),we=R.TEXTURE_2D_ARRAY):(ct.setTexture2D(U,0),we=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const oe=R.getParameter(R.UNPACK_ROW_LENGTH),nn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Pi=R.getParameter(R.UNPACK_SKIP_PIXELS),sn=R.getParameter(R.UNPACK_SKIP_ROWS),ps=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ye.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ye.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,kt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Vt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ft);const Te=y.isDataArrayTexture||y.isData3DTexture,hn=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const un=it.get(y),qe=it.get(U),Je=it.get(un.__renderTarget),no=it.get(qe.__renderTarget);Z.bindFramebuffer(R.READ_FRAMEBUFFER,Je.__webglFramebuffer),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,no.__webglFramebuffer);for(let li=0;li<Et;li++)Te&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,it.get(y).__webglTexture,N,Ft+li),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,it.get(U).__webglTexture,ot,Ce+li)),R.blitFramebuffer(kt,Vt,vt,Ct,ne,ue,vt,Ct,R.DEPTH_BUFFER_BIT,R.NEAREST);Z.bindFramebuffer(R.READ_FRAMEBUFFER,null),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||it.has(y)){const un=it.get(y),qe=it.get(U);Z.bindFramebuffer(R.READ_FRAMEBUFFER,gu),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,_u);for(let Je=0;Je<Et;Je++)Te?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,un.__webglTexture,N,Ft+Je):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,un.__webglTexture,N),hn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,qe.__webglTexture,ot,Ce+Je):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qe.__webglTexture,ot),N!==0?R.blitFramebuffer(kt,Vt,vt,Ct,ne,ue,vt,Ct,R.COLOR_BUFFER_BIT,R.NEAREST):hn?R.copyTexSubImage3D(we,ot,ne,ue,Ce+Je,kt,Vt,vt,Ct):R.copyTexSubImage2D(we,ot,ne,ue,kt,Vt,vt,Ct);Z.bindFramebuffer(R.READ_FRAMEBUFFER,null),Z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else hn?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(we,ot,ne,ue,Ce,vt,Ct,Et,ge,zt,ye.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(we,ot,ne,ue,Ce,vt,Ct,Et,ge,ye.data):R.texSubImage3D(we,ot,ne,ue,Ce,vt,Ct,Et,ge,zt,ye):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ot,ne,ue,vt,Ct,ge,zt,ye.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ot,ne,ue,ye.width,ye.height,ge,ye.data):R.texSubImage2D(R.TEXTURE_2D,ot,ne,ue,vt,Ct,ge,zt,ye);R.pixelStorei(R.UNPACK_ROW_LENGTH,oe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pi),R.pixelStorei(R.UNPACK_SKIP_ROWS,sn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ps),ot===0&&U.generateMipmaps&&R.generateMipmap(we),Z.unbindTexture()},this.initRenderTarget=function(y){it.get(y).__webglFramebuffer===void 0&&ct.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ct.setTextureCube(y,0):y.isData3DTexture?ct.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ct.setTexture2DArray(y,0):ct.setTexture2D(y,0),Z.unbindTexture()},this.resetState=function(){E=0,C=0,I=null,Z.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}const Zh={kidFace:"characters/kid_face_parts.png",bgStage1:"backgrounds/stage1_sky.png",bgStage2:"backgrounds/stage2_sky.png",bgStage3:"backgrounds/stage3_sky.png",bgStage4:"backgrounds/stage4_sky.png",bgStage5:"backgrounds/stage5_sky.png",bgStage6:"backgrounds/stage6_sky.png",bgStage7:"backgrounds/stage7_sky.png",bgStage8:"backgrounds/stage8_sky.png",bgStage9:"backgrounds/stage9_sky.png",bgStage10:"backgrounds/stage10_sky.png",gatePlus:"gates/gate_plus.png",gateMinus:"gates/gate_minus.png",titleDeco:"ui/title_deco.png",titleBg:"ui/title_bg.png",clearDeco:"ui/clear_deco.png",starOn:"ui/star_on.png",starOff:"ui/star_off.png",bubble:"effects/bubble.png",sparkle:"effects/sparkle.png",school:"anniversary/school.png"};function Ps(s){return`./assets/${Zh[s].replace(/\.png$/,".webp")}`}const hs=new Map;function $h(s){return hs.has(s)?Promise.resolve():new Promise(t=>{const e=new Image;e.onload=()=>{e.naturalWidth>0&&hs.set(s,e),t()},e.onerror=()=>t(),e.src=Ps(s)})}async function a_(){const s=Object.keys(Zh).filter(t=>t==="bgStage1"||!t.startsWith("bgStage"));await Promise.all(s.map($h))}function Si(s){return hs.has(s)}function pc(s){return hs.get(s)}function mc(s,t){const e=hs.get(s),n=e?new Ue(e):new tn(t());return n.colorSpace=ve,n.needsUpdate=!0,n}const Fl=new Map;function Ol(s){const t=hs.get(s);if(!t)return;const e=Fl.get(s);if(e)return e;const n=t.naturalWidth,i=t.naturalHeight,[r,o]=mn(n,i);o.drawImage(t,0,0);let a=n,c=i,l=-1,h=-1;try{const d=o.getImageData(0,0,n,i).data;for(let g=0;g<i;g+=2)for(let _=0;_<n;_+=2)d[(g*n+_)*4+3]>20&&(_<a&&(a=_),_>l&&(l=_),g<c&&(c=g),g>h&&(h=g))}catch{return r}if(l<0)return r;l=Math.min(n-1,l+2),h=Math.min(i-1,h+2);const[u,f]=mn(l-a+1,h-c+1);return f.drawImage(r,a,c,u.width,u.height,0,0,u.width,u.height),Fl.set(s,u),u}function mn(s,t){const e=document.createElement("canvas");e.width=s,e.height=t;const n=e.getContext("2d");return[e,n]}const Qr=(s,t)=>({op:s,v:t}),gt=s=>Qr("+",s),Ke=s=>Qr("-",s),_e=s=>Qr("x",s),Bl=s=>Qr("/",s),Mn=()=>({op:"p",v:1,k:"power"}),En=()=>({op:"p",v:1,k:"rapid"}),ti=()=>({op:"p",v:1,k:"big"}),ke=(s,t,e=0)=>({at:s,kind:t,x:e}),Mt=(s,...t)=>({at:s,gates:t}),Nt=(s,t,e,n={})=>({at:s,kind:t,x:e,...n}),ko={skyTop:"#7cc8ff",skyBottom:"#e6f6ff",ground:"#8fd26a",road:"#ffe2b8",roadLine:"#fff6e6",decor:"trees"},c_={skyTop:"#8fd0ff",skyBottom:"#ffeaf4",ground:"#9ad97a",road:"#ffffff",roadLine:"#ffffff",roadStyle:"rainbow",decor:"trees"},l_={skyTop:"#8f95e8",skyBottom:"#ffd6e6",ground:"#8ccf86",road:"#fff0cf",roadLine:"#ffe27a",decor:"trees",stars:!0,curb:"#ffe27a"},h_={skyTop:"#86d0ff",skyBottom:"#fff4fa",ground:"#9edb76",road:"#ffe8c6",roadLine:"#fff6e6",decor:"flowers",curb:"#ffb3d1"},u_={skyTop:"#9fd8ff",skyBottom:"#ffffff",ground:"#f4f8ff",road:"#ffe6f0",roadLine:"#ffffff",decor:"clouds",curb:"#b9dcff"},f_={skyTop:"#7fc6ff",skyBottom:"#fff3d9",ground:"#93d46c",road:"#ffffff",roadLine:"#ffffff",roadStyle:"rainbow",decor:"flowers"},d_={skyTop:"#76c3ff",skyBottom:"#fff6dc",ground:"#8fd26a",road:"#ffe9a8",roadLine:"#fffaf0",decor:"trees",curb:"#ffd54a"},p_={skyTop:"#7cc8ff",skyBottom:"#fff0f6",ground:"#9edb76",road:"#ffe2b8",roadLine:"#fff6e6",decor:"festival",curb:"#ffd54a"},Nn=[{id:1,name:"はじめてのおさんぽ",ready:!0,start:3,length:190,speed:7.5,stars:[35,50],rows:[Mt(25,gt(5),gt(10)),Mt(52,Mn(),En()),Mt(79,gt(5),gt(10)),Mt(106,gt(10),ti()),Mt(133,gt(10),gt(5)),Mt(160,gt(5),gt(10))],obstacles:[Nt(176,"boss",0,{n:55})],theme:ko},{id:2,name:"おともだちいっぱい",ready:!0,start:3,length:205,speed:7.5,stars:[40,50],rows:[Mt(25,gt(10),Ke(5)),Mt(50,Mn(),ti()),Mt(75,Ke(5),gt(10)),Mt(100,gt(10),Ke(10)),Mt(125,En(),Mn()),Mt(150,Ke(10),gt(10)),Mt(175,gt(10),gt(5))],obstacles:[Nt(191,"boss",0,{n:120})],theme:ko},{id:3,name:"にじいろロード",ready:!0,start:3,length:215,speed:7.8,stars:[125,195],rows:[Mt(25,gt(5),gt(10)),Mt(52,_e(2),gt(5)),Mt(79,gt(10),Mn()),Mt(106,_e(2),gt(10)),Mt(133,Ke(5),_e(2)),Mt(160,En(),ti()),Mt(187,_e(2),Ke(10))],obstacles:[Nt(201,"boss",0,{n:430})],items:[ke(118,"bottle")],theme:c_},{id:4,name:"おほしさまの道",ready:!0,start:3,length:225,speed:8,stars:[60,100],rows:[Mt(25,gt(10),gt(5)),Mt(62,_e(2),Ke(5)),Mt(100,gt(10),Mn()),Mt(140,_e(2),gt(10)),Mt(182,En(),gt(10)),Mt(205,_e(2),gt(10))],obstacles:[Nt(43,"cloud",0,{move:3,speed:1}),Nt(81,"balloon",2.5),Nt(81,"balloon",-2.5),Nt(120,"cloud",0,{move:3.5,speed:1.3}),Nt(161,"cloud",0,{move:3.5,speed:1.5}),Nt(125,"moko",2,{n:6}),Nt(172,"moko",-2,{n:8}),Nt(214,"boss",0,{n:300})],items:[ke(70,"umbrella"),ke(152,"bottle",-2)],theme:l_},{id:5,name:"おはなばたけ",ready:!0,start:3,length:225,speed:8,stars:[100,160],rows:[Mt(25,gt(5),gt(10),gt(20)),Mt(57,ti(),_e(2),gt(10)),Mt(89,gt(20),Ke(10),gt(5)),Mt(121,_e(2),Mn(),En()),Mt(153,gt(10),gt(20),_e(2)),Mt(185,Ke(10),gt(5),_e(2))],obstacles:[Nt(72,"puddle",0,{w:3}),Nt(137,"puddle",-3,{w:3}),Nt(169,"puddle",3,{w:3}),Nt(132,"moko",2,{n:10}),Nt(208,"boss",0,{n:200})],items:[ke(64,"umbrella"),ke(145,"bottle",2)],theme:h_},{id:6,name:"くものうえのおさんぽ",ready:!0,start:3,length:235,speed:8,stars:[80,130],curve:{amp:3,wave:120},bridges:[[173,196]],rows:[Mt(28,gt(10),gt(5)),Mt(63,_e(2),En()),Mt(98,gt(20),Mn()),Mt(133,Ke(10),_e(2)),Mt(168,gt(10),gt(5)),Mt(203,_e(2),gt(10))],obstacles:[Nt(46,"rain",-2.5),Nt(116,"rain",2.5),Nt(151,"cloud",0,{move:3,speed:1.2}),Nt(80,"mokos",2,{n:12}),Nt(118,"moko",-2,{n:12}),Nt(222,"boss",0,{n:260})],items:[ke(108,"bottle"),ke(140,"umbrella")],theme:u_},{id:7,name:"わくわくトンネル",ready:!0,start:3,length:225,speed:7.8,stars:[125,200],tunnel:[58,162],rows:[Mt(30,gt(10),gt(5)),Mt(66,En(),Ke(5)),Mt(78,gt(10),gt(5)),Mt(90,Ke(5),gt(10)),Mt(102,_e(2),Mn()),Mt(114,gt(10),Ke(10)),Mt(126,gt(5),_e(2)),Mt(138,ti(),gt(10)),Mt(150,gt(10),gt(5)),Mt(190,_e(2),gt(10))],obstacles:[Nt(120,"moko",-2,{n:8}),Nt(144,"moko",2,{n:12}),Nt(170,"mokos",0,{n:20}),Nt(211,"boss",0,{n:420})],items:[ke(84,"bottle",2),ke(158,"umbrella")],theme:ko},{id:8,name:"にじの大ぼうけん",ready:!0,start:3,length:240,speed:8.2,stars:[45,68],rows:[Mt(25,gt(10),gt(5)),Mt(62,_e(2),Mn()),Mt(105,gt(20),En()),Mt(140,_e(2),ti()),Mt(175,gt(10),_e(2)),Mt(212,gt(5),gt(20))],obstacles:[Nt(42,"block",2.5),Nt(54,"puddle",-2.5,{w:3.2}),Nt(84,"ring",0,{move:3,speed:1}),Nt(122,"balloon",2.5),Nt(122,"block",-3),Nt(158,"rain",0,{w:3}),Nt(166,"puddle",2.5,{w:3}),Nt(194,"cloud",0,{move:3.5,speed:1.4}),Nt(92,"mokos",-2,{n:15}),Nt(186,"mokos",2,{n:25}),Nt(226,"boss",0,{n:220})],items:[ke(34,"umbrella"),ke(150,"bottle"),ke(178,"umbrella")],theme:f_},{id:9,name:"75へのちょうせん",ready:!0,start:3,length:250,speed:8.4,stars:[140,220],rows:[Mt(25,gt(10),gt(5)),Mt(55,_e(3),gt(20)),Mt(88,En(),Bl(2)),Mt(120,gt(20),_e(2),Mn()),Mt(152,ti(),Bl(2)),Mt(185,_e(2),gt(20)),Mt(208,gt(10),_e(3))],obstacles:[Nt(40,"puddle",-2.5,{w:3}),Nt(104,"ring",0,{move:3.5,speed:1.2}),Nt(136,"block",2.5),Nt(136,"block",-2.5),Nt(168,"cloud",0,{move:3.5,speed:1.6}),Nt(196,"rain",2.5),Nt(100,"mokos",0,{n:20}),Nt(170,"mokos",-2,{n:20}),Nt(242,"boss",0,{n:380})],bridges:[[214,233]],items:[ke(70,"bottle"),ke(160,"umbrella")],theme:d_},{id:10,name:"75しゅうねんのおいわい",ready:!0,start:3,length:260,speed:8.2,stars:[75,105],rows:[Mt(25,gt(10),gt(5)),Mt(55,_e(2),gt(10)),Mt(88,gt(20),Mn(),En()),Mt(120,ti(),_e(2),gt(5)),Mt(155,gt(10),gt(20)),Mt(190,_e(2),gt(10)),Mt(228,gt(20),gt(10),Ke(5))],obstacles:[Nt(70,"balloon",-2.5),Nt(70,"balloon",2.5),Nt(104,"cloud",0,{move:3,speed:1.2}),Nt(138,"ring",0,{move:3.5,speed:1.1}),Nt(172,"block",0,{w:2.2}),Nt(210,"puddle",2.5,{w:3}),Nt(110,"moko",2,{n:10}),Nt(163,"mokos",-2,{n:25}),Nt(246,"boss",0,{n:180})],items:[ke(60,"umbrella"),ke(128,"bottle"),ke(150,"umbrella")],theme:p_}],Xt={steps:10,multipliers:[1,1.1,1.2,1.3,1.4,1.5,1.6,1.8,2,2.5,3],height:.55,depth:1.3,width:13},ii={perKids:5,upgrades:{start:{label:"はじめの にんずう",per:2,cost:[30,60,100,150,220]},bubble:{label:"はじめの つよさ",per:1,cost:[80,180]}}},Ha=[{power:0,rapid:0,big:0,kids:0,boss:1},{power:1,rapid:0,big:0,kids:5,boss:1},{power:2,rapid:1,big:0,kids:10,boss:.9},{power:2,rapid:1,big:1,kids:15,boss:.75},{power:3,rapid:2,big:2,kids:20,boss:.55},{power:3,rapid:3,big:3,kids:30,boss:.35}],gc=75,pe={roadWidth:10,maxVisible:180,spacing:.62,plazaDepth:38,obstacleMaxLoss:.25};function m_(s,t){let e=s;switch(t.op){case"p":e=s;break;case"+":e=s+t.v;break;case"-":e=s-t.v;break;case"x":e=s*t.v;break;case"/":e=Math.floor(s/t.v);break}return Math.max(1,e)}function Jh(s){return s.op==="p"?s.k==="rapid"?"かず UP":s.k==="big"?"おおきさ UP":"つよさ UP":`${{"+":"＋","-":"－",x:"×","/":"÷"}[s.op]}${s.v}`}function _c(s){return s.op==="+"||s.op==="x"||s.op==="p"}function zl(s,t,e){const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)}function g_(s,t){if(!s.curve)return 0;const{amp:e,wave:n}=s.curve,i=zl(8,35,t)*(1-zl(s.length-45,s.length-12,t));return Math.sin(t/n*Math.PI*2)*e*i}const Zr="#ffe0c8";function __(){const s=pc("kidFace");if(s){const[n,i]=mn(512,256);i.fillStyle=Zr,i.fillRect(0,0,512,256);const r=512*.34,o=r*s.naturalHeight/s.naturalWidth;i.drawImage(s,512*.75-r/2,256*.57-o/2,r,o);const a=new tn(n);return a.colorSpace=ve,a}return mc("kidFace",()=>{const[n,i]=mn(512,256);i.fillStyle=Zr,i.fillRect(0,0,512,256);const r=512*.75,o=256*.57;i.fillStyle="rgba(255,140,150,0.55)";for(const a of[-62,62])i.beginPath(),i.ellipse(r+a,o+26,20,12,0,0,Math.PI*2),i.fill();for(const a of[-34,34])i.fillStyle="#3a2a28",i.beginPath(),i.ellipse(r+a,o,11,17,0,0,Math.PI*2),i.fill(),i.fillStyle="#ffffff",i.beginPath(),i.arc(r+a+3,o-6,4.5,0,Math.PI*2),i.fill();return i.strokeStyle="#c0504d",i.lineWidth=5,i.lineCap="round",i.beginPath(),i.arc(r,o+20,13,.15*Math.PI,.85*Math.PI),i.stroke(),n})}const kl=["#2a2321","#33281f","#2a2321","#3d2c22"].map(s=>new Ht(s)),Gl={banzai:"みんなで ばんざい",byebye:"てを ふって バイバイ",wave:"みんなで ウェーブ",clap:"ぱちぱち はくしゅ",bow:"ぺこりと おじぎ"},v_=new Ht("#3f5fb5"),Hl=new Ht("#ff7fae"),x_=new Ht("#4f9ce8"),Vl=["#9b6bff","#ff4f9a","#ffbf1a"].map(s=>new Ht(s)),M_=new Ht("#cdb8ec"),Wt={hipY:.28,bodyH:.42,headY:.97,headR:.3,shoulderY:.64};class y_{group=new De;count=0;cx=0;cz=0;offsetX=0;squeeze=1;look={power:0,rapid:0,big:0};get lookTotal(){return this.look.power+this.look.rapid+this.look.big}formation=null;facing=0;facingTarget=0;mode="idle";pose="banzai";members=[];leaving=[];meshes={};cap;time=0;events;m4=new se;base=new se;part=new se;q=new Un;e=new ln;v=new L;s=new L;constructor(t={}){this.events=t,this.cap=pe.maxVisible+60,this.build()}build(){const t=new At({color:Zr,emissive:Zr,emissiveIntensity:.28}),e=new At({color:"#9fcbf2"}),n=new At({color:"#ffd84f"}),i=new At({color:"#ffffff"}),r=new At({color:"#ff9ab8"}),o=new At({color:"#ffffff"}),a=new At({color:"#ffffff"}),c=__(),l=new At({map:c,emissive:"#ffffff",emissiveMap:c,emissiveIntensity:.28}),h=new At({color:"#f58fb0"}),u=new Se({color:"#000000",transparent:!0,opacity:.16,depthWrite:!1}),f=new me(.075,.065,Wt.hipY,6,1,!0);f.translate(0,-.28/2,0);const d=new Me(.085,7,4);d.scale(1,.6,1.3),d.translate(0,-.28+.02,-.03);const g=new me(.17,.27,Wt.bodyH-.04,12);g.translate(0,Wt.hipY+.04+(Wt.bodyH-.04)/2,0);const _=new me(.22,.24,.14,12);_.translate(0,Wt.hipY+.02,0);const m=new me(.19,.21,.045,14);m.translate(0,Wt.hipY+Wt.bodyH-.01,0);const p=new Me(.075,7,5);p.scale(.6,1,.8);const T=Es([p.clone().translate(-.29,Wt.headY-.03,0),p.translate(.29,Wt.headY-.03,0)]),b=new me(.075,.07,.2,7,1);b.translate(0,-.1,0);const v=new Me(.065,7,5);v.translate(0,-.24,0);const A=new Me(Wt.headR,18,12);A.translate(0,Wt.headY,0);const E=new Me(Wt.headR*1.05,12,7,Math.PI*1.5+.95,Math.PI*2-1.9,0,Math.PI*.64);E.translate(0,Wt.headY,0);const C=new Me(Wt.headR*1.04,12,6,Math.PI*1.5+.95,Math.PI*2-1.9,0,Math.PI*.5);C.translate(0,Wt.headY,0);const I=new me(.18,.22,Wt.bodyH-.12,12);I.translate(0,Wt.hipY+.12+(Wt.bodyH-.12)/2,0);const S=new me(.1,.11,.17,10),M=Es([S.clone().translate(-.1,Wt.hipY+.03,0),S.translate(.1,Wt.hipY+.03,0),new me(.19,.2,.1,12).translate(0,Wt.hipY+.12,0)]),P=new Me(Wt.headR*1.12,14,6,0,Math.PI*2,0,Math.PI*.46);P.scale(1,1.08,1),P.translate(0,Wt.headY+.02,0);const O=new me(.34,.45,.07,16,1,!0);O.translate(0,Wt.headY+.1,0);const B=new Me(.1,7,5);B.scale(.9,1.2,.9);const q=B.clone().translate(.37,Wt.headY-.17,.07),H=B.translate(-.37,Wt.headY-.17,.07),X=Es([H,q]),K=new Me(.05,6,4),V=Es([K.clone().translate(-.31,Wt.headY-.08,.05),K.translate(.31,Wt.headY-.08,.05)]),ht=new oi(.34,12);ht.rotateX(-Math.PI/2),ht.translate(0,.02,0);const et=(St,Ot,w)=>{const x=new an(Ot,w,this.cap);return x.instanceMatrix.setUsage(Ls),x.count=0,x.frustumCulled=!1,this.meshes[St]=x,this.group.add(x),x};et("shadow",ht,u).renderOrder=-1,et("legL",f,t),et("legR",f,t),et("shoeL",d,h),et("shoeR",d,h);const bt=et("bottoms",_,o);et("body",g,e),et("bodyBoy",I,e);const qt=new me(Wt.headR*1.12,Wt.headR*1.14,.07,18,1,!0);qt.translate(0,Wt.headY+.16,0);const ee=et("hatBand",qt,new At({color:"#ffffff",emissive:"#ffffff",emissiveIntensity:.2}));for(let St=0;St<this.cap;St++)ee.setColorAt(St,Hl);et("shorts",M,new At({color:"#3f5fb5"})),et("collar",m,i),et("armL",b,e),et("armR",b,e),et("handL",v,t),et("handR",v,t),et("head",A,l),et("ears",T,t);const ce=et("hair",E,a),re=et("hairBoy",C,a),Y=et("tails",X,a);et("ties",V,r),et("hat",P,n),et("brim",O,n).material=new At({color:"#ffd84f",side:Ge});const Q=new me(.018,.018,.34,6);Q.rotateX(Math.PI/2),Q.translate(0,-.25,-.15);const yt=new pn(.09,.02,6,16);yt.translate(0,-.25,-.34),et("wandStick",Q,new At({color:"#ff9ec0"})),et("wandRing",yt,new At({color:"#c29bff",emissive:"#c29bff",emissiveIntensity:.6}));const Dt=new me(.2,.5,.62,16,1,!0,-1.1,2.2);Dt.translate(0,-.31,.02);const Tt=et("cape",Dt,new At({color:"#ffffff",emissive:"#ffffff",emissiveIntensity:.08,side:Ge}));for(let St=0;St<this.cap;St++)Tt.setColorAt(St,Vl[0]);const $t=new pn(.5,.035,6,24,2.2);$t.rotateX(Math.PI/2),$t.rotateY(-.4),$t.translate(0,-.62,.02);const he=new Me(.06,8,6);he.translate(0,0,-.17),et("capeTrim",Es([$t,he]),new At({color:"#fff6d0",emissive:"#ffe680",emissiveIntensity:.5}));const R=new uc;for(let St=0;St<10;St++){const Ot=Math.PI/2+St*Math.PI/5,w=St%2===0?.15:.065;St===0?R.moveTo(Math.cos(Ot)*w,Math.sin(Ot)*w):R.lineTo(Math.cos(Ot)*w,Math.sin(Ot)*w)}const tt=new es(R,{depth:.05,bevelEnabled:!1});tt.translate(0,.08,-.025),et("hatStar",tt,new At({color:"#ffd84a",emissive:"#ffb300",emissiveIntensity:.6}));const J=new Me(1,10,6);J.scale(.27,.17,.035);const $=J.clone().translate(.25,.06,0),Z=J.translate(-.25,.06,0),ut=new At({color:"#ffffff",emissive:"#e8f4ff",emissiveIntensity:.6});et("wingR",$,ut),et("wingL",Z,ut);const it=new pn(.2,.035,8,24);it.rotateX(Math.PI/2),et("halo",it,new At({color:"#ffe066",emissive:"#ffcc33",emissiveIntensity:.9}));const ct=new Ht("#ffffff");for(let St=0;St<this.cap;St++)ce.setColorAt(St,ct),re.setColorAt(St,ct),Y.setColorAt(St,ct),bt.setColorAt(St,ct)}reset(t){this.members=[],this.leaving=[],this.count=0,this.cx=0,this.cz=0,this.offsetX=0,this.squeeze=1,this.formation=null,this.facing=0,this.facingTarget=0,this.mode="idle",this.setCount(t,null);for(const e of this.members){e.state="run",e.scale=1;const[n,i]=this.slot(this.members.indexOf(e),this.members.length);e.ox=n,e.oz=i}}setCount(t,e){const n=this.members.length;this.count=t;const i=Math.min(t,pe.maxVisible);if(i>n){const r=i-n;for(let o=0;o<r;o++){const a=Math.random()<.5;this.members.push({ox:e?.x??0,oz:e?.z??0,y:0,scale:0,phase:Math.random()*Math.PI*2,girl:a,hair:kl[Math.floor(Math.random()*kl.length)],state:"pop",t:0,delay:Math.min(o*.035,.9),fromX:(e?.x??0)+(Math.random()-.5)*2.5,fromZ:(e?.z??0)+(Math.random()-.5)*.6,wx:0,wz:0})}}else i<n&&this.members.splice(i,n-i).forEach((o,a)=>{o.state="leave",o.t=0,o.delay=Math.min(a*.03,.6),o.wx=this.worldX+o.ox,o.wz=this.cz+o.oz,this.leaving.push(o)})}get worldX(){return this.offsetX+this.cx}removeHits(t,e){let n=0;for(let i=this.members.length-1;i>=0&&n<e&&!(this.count-n<=1);i--){const r=this.members[i];if(r.state==="pop"&&r.delay>0)continue;const o=this.worldX+r.ox,a=this.cz+r.oz;t(o,a)&&(this.members.splice(i,1),r.state="leave",r.t=0,r.delay=0,r.wx=o,r.wz=a,this.leaving.push(r),n++)}return n&&this.setCount(this.count-n,{x:0,z:.5}),n}radius(t=this.members.length){return this.spacing(t)*.95*Math.sqrt(Math.max(1,t))+.3}spacing(t){const e=pe.roadWidth/2-.4;return Math.min(pe.spacing,e/(.95*Math.sqrt(Math.max(1,t))))}slot(t,e){const i=this.spacing(e)*.95*Math.sqrt(t+.3),r=t*2.39996,o=Math.max(.2,this.squeeze);return[Math.cos(r)*i*o,Math.sin(r)*i*.85/o]}faceCamera(t){this.facingTarget=t?Math.PI:0}update(t){this.time+=t;const e=this.members.length;this.facing+=(this.facingTarget-this.facing)*Math.min(1,t*5);for(let n=0;n<e;n++){const i=this.members[n];let[r,o]=this.slot(n,e),a=0;if(this.formation&&([r,a,o]=this.formation(n,e)),i.state==="pop"){if(i.delay>0){i.delay-=t,i.scale=0,i.ox=i.fromX,i.oz=i.fromZ;continue}i.t===0&&(this.v.set(this.worldX+i.fromX,.8,this.cz+i.fromZ),this.events.onPop?.(this.v)),i.t+=t;const c=Math.min(1,i.t/.5);i.scale=S_(c),i.ox=i.fromX+(r-i.fromX)*Wl(c),i.oz=i.fromZ+(o-i.fromZ)*Wl(c),i.y=Math.sin(c*Math.PI)*1.1,c>=1&&(i.state="run")}else{const c=Math.min(1,t*(this.formation?6:12));i.ox+=(r-i.ox)*c,i.oz+=(o-i.oz)*c,i.scale+=(1-i.scale)*c,i.y+=(a-i.y)*c}}for(let n=this.leaving.length-1;n>=0;n--){const i=this.leaving[n];if(i.delay>0){i.delay-=t;continue}i.t+=t;const r=i.t/.6;i.y=r*1.6,i.scale=Math.max(0,1-r*1.1),r>=1&&(this.v.set(i.wx,i.y+.9,i.wz),this.events.onLeave?.(this.v),this.leaving.splice(n,1))}this.writeMatrices()}writeMatrices(){const t=this.members.concat(this.leaving),e=this.meshes,n=this.mode==="run",i=this.mode==="cheer";let r=0;for(const o of t){const a=o.state==="leave",c=this.time*11+o.phase;let l=0,h=0,u=0,f=-.25,d=0,g=.25,_=0;if(i&&!a){const A=this.time;switch(this.pose){case"banzai":{l=Math.max(0,Math.sin(A*7+o.phase))*.35;const E=2.4+Math.sin(A*14+o.phase)*.25;f=-E,g=E;break}case"byebye":{l=Math.abs(Math.sin(A*5+o.phase))*.06,g=2.5+Math.sin(A*11+o.phase)*.4,f=-.2;break}case"wave":{const E=Math.max(0,Math.sin(A*5-o.ox*.9));l=E*.45,f=-(.3+E*2.3),g=.3+E*2.3;break}case"clap":{const E=Math.abs(Math.sin(A*12+o.phase));u=d=1.25,f=.05+E*.35,g=-(.05+E*.35),l=Math.max(0,Math.sin(A*6+o.phase))*.1;break}case"bow":{_=-((Math.sin(A*2.2+o.ox*.15)+1)/2)*.75,f=-.15,g=.15;break}}}else if(n||a){h=Math.sin(c)*.75;const A=-Math.sin(c)*.7;u=A,d=-A,l=Math.abs(Math.cos(c))*.07}const m=a?o.wx:this.worldX+o.ox,p=a?o.wz:this.cz+o.oz;this.v.set(m,o.y+l,p),this.e.set(_,this.facing,a?Math.sin(o.t*20)*.3:0,"YXZ"),this.q.setFromEuler(this.e),this.e.order="XYZ";const T=Math.max(1e-4,o.scale*(1+Math.min(9,this.lookTotal)*.035));this.s.set(T,T,T),this.base.compose(this.v,this.q,this.s);const b=Math.max(1e-4,T*(1-Math.min(.6,(o.y+l)*.4)));this.v.set(m,0,p),this.q.identity(),this.s.set(b,1,b),this.m4.compose(this.v,this.q,this.s),e.shadow.setMatrixAt(r,this.m4),o.girl?(e.body.setMatrixAt(r,this.base),e.bottoms.setMatrixAt(r,this.base),this.hide(e.bodyBoy,r),this.hide(e.shorts,r)):(e.bodyBoy.setMatrixAt(r,this.base),e.shorts.setMatrixAt(r,this.base),this.hide(e.body,r),this.hide(e.bottoms,r)),e.bottoms.setColorAt(r,o.girl?M_:v_),e.hatBand.setMatrixAt(r,this.base),e.hatBand.setColorAt(r,o.girl?Hl:x_),e.collar.setMatrixAt(r,this.base),e.ears.setMatrixAt(r,this.base),e.head.setMatrixAt(r,this.base),o.girl?(e.hair.setMatrixAt(r,this.base),this.hide(e.hairBoy,r)):(e.hairBoy.setMatrixAt(r,this.base),this.hide(e.hair,r)),e.hairBoy.setColorAt(r,o.hair),e.hat.setMatrixAt(r,this.base),e.brim.setMatrixAt(r,this.base),e.hair.setColorAt(r,o.hair),o.girl?(e.tails.setMatrixAt(r,this.base),e.ties.setMatrixAt(r,this.base)):(this.m4.makeScale(0,0,0),e.tails.setMatrixAt(r,this.m4),e.ties.setMatrixAt(r,this.m4)),e.tails.setColorAt(r,o.hair),this.limb(e.legL,r,-.1,Wt.hipY,0,h,0),this.limb(e.shoeL,r,-.1,Wt.hipY,0,h,0),this.limb(e.legR,r,.1,Wt.hipY,0,-h,0),this.limb(e.shoeR,r,.1,Wt.hipY,0,-h,0),this.limb(e.armL,r,-.2,Wt.shoulderY,0,u,f),this.limb(e.armR,r,.2,Wt.shoulderY,0,d,g),this.limb(e.handL,r,-.2,Wt.shoulderY,0,u,f),this.limb(e.handR,r,.2,Wt.shoulderY,0,d,g);const v=this.look;if(this.lookTotal>=1?(this.limb(e.wandStick,r,.2,Wt.shoulderY,0,d,g),this.limb(e.wandRing,r,.2,Wt.shoulderY,0,d,g)):(this.hide(e.wandStick,r),this.hide(e.wandRing,r)),v.power>=1){const A=n?1+Math.abs(Math.sin(c*.5))*.25:i?.45+Math.abs(Math.sin(c*.5))*.2:.15,E=1+(v.power-1)*.25,C=1+(v.power-1)*.12;this.partAt(e.cape,r,0,Wt.shoulderY+.06,.06,-A,0,0,C,E),this.partAt(e.capeTrim,r,0,Wt.shoulderY+.06,.06,-A,0,0,C,E),e.cape.setColorAt(r,Vl[Math.min(2,v.power-1)])}else this.hide(e.cape,r),this.hide(e.capeTrim,r);if(v.rapid>=1){const A=.85+(v.rapid-1)*.35,E=Math.sin(this.time*(i?14:9+v.rapid*2)+o.phase)*.35;this.partAt(e.wingR,r,.06,Wt.shoulderY-.02,.2,0,-(.45+E),.3,A),this.partAt(e.wingL,r,-.06,Wt.shoulderY-.02,.2,0,.45+E,-.3,A)}else this.hide(e.wingR,r),this.hide(e.wingL,r);if(v.big>=1){const A=1+(v.big-1)*.3;this.partAt(e.hatStar,r,0,Wt.headY+.34,.02,0,0,Math.sin(this.time*4+o.phase)*.15,A)}else this.hide(e.hatStar,r);this.lookTotal>=7?this.partAt(e.halo,r,0,Wt.headY+.62+Math.sin(this.time*3+o.phase)*.03,0,0,0,0):this.hide(e.halo,r),r++}for(const o of Object.values(e))o.count=r,o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0)}hide(t,e){this.m4.makeScale(0,0,0),t.setMatrixAt(e,this.m4)}partAt(t,e,n,i,r,o,a,c,l=1,h=l){this.e.set(o,a,c),this.q.setFromEuler(this.e),this.v.set(n,i,r),this.s.set(l,h,l),this.part.compose(this.v,this.q,this.s),this.m4.multiplyMatrices(this.base,this.part),t.setMatrixAt(e,this.m4)}limb(t,e,n,i,r,o,a){this.e.set(o,0,a),this.q.setFromEuler(this.e),this.v.set(n,i,r),this.s.set(1,1,1),this.part.compose(this.v,this.q,this.s),this.m4.multiplyMatrices(this.base,this.part),t.setMatrixAt(e,this.m4)}get visibleCount(){return this.members.length}}function S_(s){return 1+2.9*Math.pow(s-1,3)+1.9*Math.pow(s-1,2)}function Wl(s){return 1-Math.pow(1-s,3)}function Es(s){const t=[],e=[],n=[],i=[];let r=0;for(const a of s){const c=a.getAttribute("position"),l=a.getAttribute("normal"),h=a.getAttribute("uv");for(let f=0;f<c.count;f++)t.push(c.getX(f),c.getY(f),c.getZ(f)),e.push(l.getX(f),l.getY(f),l.getZ(f)),n.push(h.getX(f),h.getY(f));const u=a.getIndex();if(u)for(let f=0;f<u.count;f++)i.push(u.getX(f)+r);r+=c.count}const o=new Ee;return o.setAttribute("position",new te(t,3)),o.setAttribute("normal",new te(e,3)),o.setAttribute("uv",new te(n,2)),o.setIndex(i),o}const je={rateBase:1.6,ratePerKid:.12,rateMax:6,speed:15,life:1.8,size:1.6,maxStat:3,rapidRate:.6,rapidMax:4,bigSize:.3,bigLife:.22,bigPad:.35},Go=220;function b_(){const[s,t]=mn(128,128),e=t.createRadialGradient(64,64,20,64,64,62);e.addColorStop(0,"rgba(230,248,255,0.25)"),e.addColorStop(.7,"rgba(190,232,255,0.4)"),e.addColorStop(.88,"rgba(255,170,230,0.95)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath(),t.arc(64,64,62,0,Math.PI*2),t.fill();const n=t.createLinearGradient(0,0,128,128);return n.addColorStop(0,"rgba(120,200,255,1)"),n.addColorStop(.5,"rgba(190,150,255,1)"),n.addColorStop(1,"rgba(255,150,200,1)"),t.strokeStyle=n,t.lineWidth=5,t.beginPath(),t.arc(64,64,56,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(255,255,255,0.95)",t.beginPath(),t.ellipse(44,40,13,8,-.7,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(84,88,4,0,Math.PI*2),t.fill(),s}let Ho=null;function vc(){return Ho||(Ho=mc("bubble",b_)),Ho}class E_{points;list=[];acc=0;pos=new Float32Array(Go*3);geo=new Ee;stats={power:0,rapid:0,big:0};get damage(){return 1+this.stats.power*2}get total(){return this.stats.power+this.stats.rapid+this.stats.big}get pad(){return .35+this.stats.big*je.bigPad}constructor(){this.geo.setAttribute("position",new He(this.pos,3).setUsage(Ls));const t=new oc({map:vc(),size:je.size,transparent:!0,depthWrite:!1,sizeAttenuation:!0});this.points=new ac(this.geo,t),this.points.frustumCulled=!1}setStats(t){const e=n=>Math.max(0,Math.min(je.maxStat,n));this.stats={power:e(t.power),rapid:e(t.rapid),big:e(t.big)},this.points.material.size=je.size*(1+this.stats.big*je.bigSize)}raise(t){return this.stats[t]>=je.maxStat?!1:(this.setStats({...this.stats,[t]:this.stats[t]+1}),!0)}volley(t,e,n,i=14){for(let r=0;r<i;r++)this.list.length>=Go&&this.list.shift(),this.list.push({x:t+(r/(i-1)*2-1)*Math.max(1.5,n),y:.9+Math.random()*.8,z:e-n*.6-Math.random()*1.5,vx:(Math.random()-.5)*.8,vy:.4+Math.random()*.4,t:0,wob:Math.random()*6})}clear(){this.setStats({power:0,rapid:0,big:0}),this.list=[],this.acc=0,this.geo.setDrawRange(0,0)}update(t,e,n,i,r,o,a,c,l){if(e){const u=this.stats.rapid,f=Math.min(je.rateMax+u*je.rapidMax,je.rateBase+o*je.ratePerKid)*(1+u*je.rapidRate);for(this.acc+=t*f;this.acc>=1;)this.acc-=1,this.list.length>=Go&&this.list.shift(),this.list.push({x:n+(Math.random()*2-1)*r*.8,y:1+Math.random()*.3,z:i-r*.6,vx:(Math.random()-.5)*.6,vy:.3+Math.random()*.3,t:0,wob:Math.random()*6})}else this.acc=0;const h=new L;for(let u=this.list.length-1;u>=0;u--){const f=this.list[u];if(f.t+=t,f.z-=(a+je.speed)*t,f.x+=(f.vx+Math.sin(f.t*6+f.wob)*.4)*t,f.y+=f.vy*t,c(f.x,f.z)){h.set(f.x,f.y,f.z),l(h),this.list.splice(u,1);continue}f.t>je.life*(1+this.stats.big*je.bigLife)&&this.list.splice(u,1)}this.list.forEach((u,f)=>{this.pos[f*3]=u.x,this.pos[f*3+1]=u.y,this.pos[f*3+2]=u.z}),this.geo.setDrawRange(0,this.list.length),this.geo.getAttribute("position").needsUpdate=!0}}function w_(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Ee;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Xl(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=Xl(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Xl(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new He(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const ql={puddle:6,rain:7,cloud:6,block:8,balloon:5,ring:7,moko:6,mokos:12,boss:40},Vo={approach:2.6,drift:.9,wake:45},T_=.1,Yl=()=>new Kr({map:vc(),transparent:!0,opacity:0,depthWrite:!1}),A_={puddle:3,rain:2.6,cloud:2.8,block:2,balloon:1.8,ring:2.6,moko:1.5,mokos:3,boss:pe.roadWidth},C_={puddle:1.5,rain:4.4,cloud:2.5,block:2.9,balloon:2.8,ring:3,moko:2.3,mokos:1.9,boss:7.4},ei=["#ffc6d9","#d6bff5","#aee8c9","#ffe9b0","#b9dcff"],R_="#d6bff5";function P_(s,t,e){const n=s.getContext("2d"),i=s.width,r=s.height;n.clearRect(0,0,i,r);const o=r/2-6;n.fillStyle="#ffffff",n.strokeStyle=e?"#ff7aa8":"#6cc0ff",n.lineWidth=8,n.beginPath(),n.moveTo(6+o,6),n.arcTo(i-6,6,i-6,r-6,o),n.arcTo(i-6,r-6,6,r-6,o),n.arcTo(6,r-6,6,6,o),n.arcTo(6,6,i-6,6,o),n.closePath(),n.fill(),n.stroke();const a=6+o+4,c=r/2;n.fillStyle="rgba(190,232,255,0.9)",n.beginPath(),n.arc(a,c,o*.62,0,Math.PI*2),n.fill(),n.strokeStyle="#b48cff",n.lineWidth=5,n.stroke(),n.fillStyle="#ffffff",n.beginPath(),n.ellipse(a-o*.22,c-o*.22,o*.18,o*.11,-.7,0,Math.PI*2),n.fill(),n.font=`900 ${Math.round(r*.66)}px 'M PLUS Rounded 1c','Hiragino Maru Gothic ProN','Meiryo',sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillStyle=e?"#e04f84":"#2a7fd0",n.fillText(String(t),(a+o*.7+i-6)/2,r/2+4)}function L_(){const s=document.createElement("canvas");s.width=256,s.height=112;const t=new tn(s);t.colorSpace=ve;const e=new qr(new Kr({map:t,transparent:!0,depthWrite:!1,depthTest:!1}));return e.renderOrder=10,e.visible=!1,e}const bi=new Me(1,16,12),Zl=new Me(1,8,6);function Tn(s,t=.15){return new At({color:s,emissive:s,emissiveIntensity:t})}const Kh=new Se({color:"#3a2a28"}),jh=new Se({color:"#ff9fb4"});function Ir(s,t,e,n=1){for(const i of[-1,1]){const r=new pt(Zl,Kh);r.scale.set(.07*n,.1*n,.05*n),r.position.set(i*.22*n,t,e);const o=new pt(Zl,jh);o.scale.set(.09*n,.05*n,.03*n),o.position.set(i*.4*n,t-.14*n,e-.02),s.add(r,o)}}function $l(s,t){const e=new De,n=Tn(s,.35),i=Math.max(3,Math.round(t/.8));for(let r=0;r<i;r++){const o=new pt(bi,n),a=i===1?.5:r/(i-1),c=.55+Math.sin(a*Math.PI)*.35;o.scale.set(c,c*.9,c*.85),o.position.set((a-.5)*(t-.6),Math.sin(a*Math.PI)*.25,0),e.add(o)}return e}class I_{group=new De;list=[];time=0;constructor(t,e){for(const n of t.obstacles??[]){const i=this.build(n,e(n.at));this.list.push(i),this.group.add(i.group)}}build(t,e){const n=t.w??A_[t.kind],i=new De,r={def:t,group:i,z:-t.at,baseX:e+t.x,x:e+t.x,hw:n/2,hd:.8,ellipse:!1,phase:t.at*.37,lost:0,cap:-1,bump:0,hp:-1,maxHp:-1,clearT:-1,wrap:new qr(Yl()),badge:L_(),badgeShown:-1,enemy:t.kind==="moko"||t.kind==="mokos"||t.kind==="boss",active:!1};switch(i.add(r.badge),r.wrap.position.y=1.1,r.wrap.scale.setScalar(.01),r.wrap.renderOrder=2,i.add(r.wrap),t.kind){case"puddle":{const a=new pt(new oi(1,32),new At({color:"#4aa9ec",emissive:"#4aa9ec",emissiveIntensity:.3}));a.rotation.x=-Math.PI/2,a.scale.set(n/2,1.25,1),a.position.y=.03;const c=new pt(new Xs(1,1.12,40),new Se({color:"#ffffff"}));c.rotation.x=-Math.PI/2,c.scale.set(n/2,1.25,1),c.position.y=.035,i.add(c);const l=new pt(new oi(1,24),new Se({color:"#ffffff",transparent:!0,opacity:.55}));l.rotation.x=-Math.PI/2,l.scale.set(n*.16,.22,1),l.position.set(-n*.12,.04,-.35);const h=new pt(new Xs(.85,1,32),new Se({color:"#ffffff",transparent:!0,opacity:.6}));h.rotation.x=-Math.PI/2,h.position.y=.045,i.add(a,l,h),r.hd=1.2,r.ellipse=!0,r.anim=u=>{const f=u*.7%1;h.scale.set(n/2*(.3+f*.7),1.25*(.3+f*.7),1),h.material.opacity=.6*(1-f)};break}case"rain":{const a=$l("#c9d4ea",n);a.position.y=3.1,Ir(a,-.05,.75,1.1);const c=new an(new cc(.04,.22,2,6),new Se({color:"#6fbcf0"}),18),l=Array.from({length:18},()=>[(Math.random()-.5)*(n-.4),(Math.random()-.5)*1.2,Math.random()]),h=new se,u=new pt(new oi(1,24),new Se({color:"#7cc8f5",transparent:!0,opacity:.35}));u.rotation.x=-Math.PI/2,u.scale.set(n/2,.9,1),u.position.y=.03,i.add(a,c,u),r.anim=f=>{l.forEach(([d,g,_],m)=>{const p=(f*1.6+_)%1;h.makeTranslation(d,2.6-p*2.6,g),c.setMatrixAt(m,h)}),c.instanceMatrix.needsUpdate=!0,a.position.y=3.1+Math.sin(f*1.5)*.08};break}case"cloud":{const a=$l("#fbf7ff",n);a.position.y=1.15,a.scale.set(1,1.1,1.1),Ir(a,.05,.85,1.15),i.add(a),r.hd=.9,r.ellipse=!0,r.anim=c=>{a.position.y=1.15+Math.sin(c*2.2)*.1};break}case"block":{const a=["#ff8a8a","#ffd54a","#6fc3ff","#7ddc8a","#c79bff"],c=Math.max(2,Math.round(n/.75)),l=n/c,h=new yn(l*.94,l*.94,l*.94);for(let f=0;f<c;f++){const d=new pt(h,Tn(a[f%a.length],.12));d.position.set(-n/2+l*(f+.5),l/2,0),d.rotation.y=(Math.random()-.5)*.2,i.add(d)}for(let f=0;f<c-1;f++){const d=new pt(h,Tn(a[(f+2)%a.length],.12));d.position.set(-n/2+l*(f+1),l*1.45,0),d.rotation.y=(Math.random()-.5)*.3,i.add(d)}const u=new pt(new cs(l*.5,l*.8,4),Tn("#ff9ab8",.12));u.position.set(0,l*2.3,0),u.rotation.y=Math.PI/4,i.add(u),Ir(i,l*.55,l*.5,l*1.2),r.hd=l*.55;break}case"balloon":{const a=["#ff8fb1","#ffd54a","#7cc8ff"],c=[],l=new Se({color:"#ffffff"});a.forEach((u,f)=>{const d=new pt(bi,Tn(u,.25));d.scale.set(.42,.5,.42);const g=(f-1)*.55;d.position.set(g,1.5+(f===1?.35:0),(f-1)*.1);const _=new pt(new me(.012,.012,1.2,4),l);_.position.set(g*.6,.6,0),i.add(d,_),c.push(d)}),Ir(c[1],0,.95,1.6);const h=new pt(bi,Tn("#ffffff",.2));h.scale.set(.15,.12,.15),h.position.y=.1,i.add(h),r.hd=.6,r.ellipse=!0,r.anim=u=>{c.forEach((f,d)=>{f.position.y=1.5+(d===1?.35:0)+Math.sin(u*2+d)*.12})};break}case"ring":{const a=new De;["#ff7a7a","#ffb05a","#ffe15a","#7ddc7a","#6cc0ff","#a98cff"].forEach((l,h)=>{const u=new pt(new pn(1.25-h*.09,.06,6,40),Tn(l,.35));a.add(u)}),a.position.y=1.35,i.add(a),r.hd=.45,r.anim=l=>{a.rotation.y=l*2.2,a.rotation.z=l*.8};break}case"moko":case"boss":{const a=t.kind==="boss",c=a?3.3:1,l=O_(a?R_:ei[Math.floor(t.at)%ei.length],a);l.scale.setScalar(c),i.add(l),r.hw=a?pe.roadWidth/2:.75,r.hd=a?2.2:.75,r.ellipse=!a,r.maxHp=r.hp=t.n??ql[t.kind],r.anim=h=>{const u=Math.abs(Math.sin(h*(a?3:7)+r.phase));l.position.y=u*(a?.5:r.active?.45:.15),l.scale.set(c*(1+(1-u)*.08),c*(1-(1-u)*.08),c)};break}case"mokos":{const a=t.n??12,c=Math.min(a,60),l=new an(bi,new At({map:tu("#ffffff"),emissive:"#ffffff",emissiveIntensity:.26}),c),h=new an(N_,Kh,c),u=new an(D_,new At({color:"#ffffff",emissive:"#ffffff",emissiveIntensity:.26}),c),f=new an(U_,jh,c),d=[],g=.42;for(let v=0;v<c;v++){const A=g*1.25*Math.sqrt(v+.3),E=v*2.39996;d.push([Math.cos(E)*A,Math.sin(E)*A*.8,Math.random()*6]),l.setColorAt(v,new Ht(ei[v%ei.length])),u.setColorAt(v,new Ht(ei[v%ei.length]))}i.add(l,h,u,f),r.herd={body:l,eyes:h,pos:d};const _=g*1.25*Math.sqrt(c)+g;r.hw=r.hd=_,r.ellipse=!0,r.maxHp=r.hp=a;const m=new se,p=new L,T=new Un,b=new L;r.anim=v=>{const A=Math.min(c,Math.max(0,Math.ceil(r.hp)));for(let E=0;E<c;E++){const[C,I,S]=d[E],M=E<A,P=Math.abs(Math.sin(v*6+S));p.set(C,g+P*.3,I),b.setScalar(M?g:1e-4),b.y*=1-(1-P)*.1,m.compose(p,T,b),l.setMatrixAt(E,m),u.setMatrixAt(E,m),f.setMatrixAt(E,m),p.set(C,g*1.12+P*.3,I+g*1),b.setScalar(M?1:1e-4),m.compose(p,T,b),h.setMatrixAt(E,m)}l.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0};break}}r.wrap.position.y={puddle:.6,rain:2.9,cloud:1.2,block:1,balloon:1.5,ring:1.35,moko:.9,mokos:.8,boss:2.6}[t.kind],r.badge.position.y=C_[t.kind];const o=t.kind==="boss"?3.6:2.3;return r.badge.scale.set(o,o*(112/256),1),i.position.set(r.x,0,r.z),r}lastHitBoss=!1;bubbleHit(t,e,n,i=.35){for(const r of this.list){if(r.clearT>=0||r.maxHp<0||Math.abs(e-r.z)>r.hd+.15+i||Math.abs(t-r.x)>r.hw+i)continue;const o=Math.ceil(r.hp);if(this.lastHitBoss=r.def.kind==="boss",r.hp=Math.max(0,r.hp-n),r.bump=1,r.herd){const a=o-Math.ceil(r.hp);for(let c=0;c<Math.min(a,6);c++){const l=Math.max(0,Math.min(r.herd.pos.length-1,Math.ceil(r.hp)+c)),[h,u]=r.herd.pos[l];this.float(r.x+h,r.z+u)}}return r.hp<=0&&(r.clearT=0,r.def.kind==="boss"&&this.bossResult==="none"&&(this.bossResult="win")),!0}return!1}bossResult="none";scaleBoss(t){const e=this.boss;e&&(e.maxHp=e.hp=Math.max(1,Math.ceil(e.hp*t)))}get boss(){return this.list.find(t=>t.def.kind==="boss")}blast(t,e,n){let i=0;for(const r of this.list){if(r.clearT>=0)continue;const o=t-r.z;if(!(o<-2||o>e)){if(r.def.kind==="boss"){if(r.maxHp<0)continue;r.hp=Math.max(0,r.hp-n),r.bump=1,r.hp<=0&&(r.clearT=0,this.bossResult==="none"&&(this.bossResult="win"))}else{if(r.herd)for(let a=0;a<Math.min(6,Math.ceil(Math.max(0,r.hp)));a++){const[c,l]=r.herd.pos[a];this.float(r.x+c,r.z+l)}r.hp=0,r.clearT=0}i++}}return i}clashTarget(t,e,n){for(const i of this.list){if(!i.herd||i.clearT>=0)continue;const r=(t-i.x)/(i.hw+n*.8),o=(e-i.z)/(i.hd+n*.8);if(r*r+o*o<1)return i}return null}clashStep(t){if(t.clearT>=0)return;const e=Math.max(0,Math.ceil(t.hp)-1),[n,i]=t.herd?t.herd.pos[Math.min(e,t.herd.pos.length-1)]:[0,0];this.float(t.x+n,t.z+i),t.hp=Math.max(0,t.hp-1),t.bump=1,t.hp<=0&&(t.clearT=0)}clashEnd(t){t.clearT<0&&(t.clearT=0)}floaters=[];float(t,e){const n=new De,i=new pt(bi,Tn(ei[Math.floor(Math.random()*ei.length)],.25));i.scale.setScalar(.38);const r=new qr(Yl());r.material.opacity=.9,r.scale.setScalar(1.2),n.add(i,r),n.position.set(t,.6,e),this.group.add(n),this.floaters.push({g:n,t:0})}get clearedCount(){return this.list.filter(t=>t.clearT>=0).length}get all(){return this.list}update(t,e,n){this.time+=t;for(const i of this.floaters)i.t+=t,i.g.position.y+=t*(1.5+i.t*2),i.g.position.x+=Math.sin(i.t*4)*t*.5,i.t>2&&(i.g.visible=!1);for(const i of this.list){if(i.def.kind==="moko"&&i.clearT<0&&(!i.active&&n-i.z<Vo.wake&&(i.active=!0),i.active)){i.z+=Vo.approach*t;const f=pe.roadWidth/2-1,d=i.baseX-i.def.x,g=Math.max(d-f,Math.min(d+f,e));i.x+=Math.max(-.9*t,Math.min(Vo.drift*t,g-i.x)),i.group.position.z=i.z}const r=i.wrap.material,o=i.maxHp>0?1-i.hp/i.maxHp:0,a=i.def.kind==="boss"?3.4:i.herd?i.hw*1.1:Math.max(i.hw,1),c=a*2.7*(.35+o*.65);if(i.clearT<0){const f=i.wrap.scale.x;i.wrap.scale.setScalar(f+(c-f)*Math.min(1,t*10)),r.opacity=o>0&&!i.herd?.45+o*.5:0}else{i.clearT+=t;const f=i.clearT;i.wrap.scale.setScalar(a*2.8),r.opacity=i.herd?0:Math.max(0,1-Math.max(0,f-1.6)*1),i.group.position.y=f*f*2.2+f*1.5,i.group.rotation.z=Math.sin(f*3)*.15,f>2.6&&(i.group.visible=!1)}const l=i.maxHp>0&&i.clearT<0&&n-i.z<40;i.badge.visible=l;const h=Math.ceil(i.hp);if(l&&h!==i.badgeShown){i.badgeShown=h;const f=i.badge.material;P_(f.map.image,h,i.enemy),f.map.needsUpdate=!0}const u=i.def.move??0;if(u){const f=pe.roadWidth/2-i.hw*.4;i.x=i.baseX+Math.sin(this.time*.9*(i.def.speed??1)+i.phase)*Math.min(u,f)}if(i.group.position.x=i.x,i.bump>0){i.bump=Math.max(0,i.bump-t*3);const f=1+Math.sin(i.bump*Math.PI)*.12;i.group.scale.set(f,1/f,f)}i.anim?.(this.time,i)}}collide(t,e,n,i,r,o=!1){let a=0;for(const c of this.list)c.maxHp<0&&e-c.z<34&&(c.maxHp=c.hp=Math.round(ql[c.def.kind]+i*T_));for(const c of this.list){if(c.clearT>=0||c.herd||o&&c.def.kind!=="boss")continue;if(c.enemy){const d=(t-c.x)/(c.hw+n*.8),g=(e-c.z)/(c.hd+n*.8);if(!(c.def.kind==="boss"?e-n*.8<=c.z+c.hd:d*d+g*g<1))continue;const m=Math.ceil(c.hp),p=m>0?r(()=>!0,m):0;a+=p,c.lost+=p,c.def.kind==="boss"&&this.bossResult==="none"&&(this.bossResult="lose"),c.clearT=0,c.wrap.visible=!1;continue}if(Math.abs(c.z-e)>7)continue;c.cap<0&&(c.cap=Math.max(2,Math.ceil(i*pe.obstacleMaxLoss)));const l=c.cap-c.lost;if(l<=0)continue;const h=.22,u=c.ellipse?(d,g)=>{const _=(d-c.x)/(c.hw+h),m=(g-c.z)/(c.hd+h);return _*_+m*m<1}:(d,g)=>Math.abs(d-c.x)<c.hw+h&&Math.abs(g-c.z)<c.hd+h,f=r(u,l);f>0&&(c.lost+=f,c.bump=1,a+=f)}return a}}const Qh=(s,t,e,n,i=1)=>{const r=o=>{const a=new Me(s,8,6);return a.scale(1,1,i),a.translate(o*t,e,n)};return w_([r(-1),r(1)])},D_=Qh(.32,.66,.8,0,.7),U_=Qh(.17,.52,-.08,.84,.4),N_=(()=>{const s=new Me(.075,6,4);s.scale(1,1.4,.6);const t=s.clone().translate(-.13,0,0),e=s.translate(.13,0,0),n=[...Array.from(t.getAttribute("position").array),...Array.from(e.getAttribute("position").array)],i=new Ee;i.setAttribute("position",new te(n,3));const r=t.getAttribute("position").count;return i.setIndex([...Array.from(t.getIndex().array),...Array.from(e.getIndex().array,o=>o+r)]),i})(),Jl=new Map;function tu(s){const t=Jl.get(s);if(t)return t;const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d");n.fillStyle=s,n.fillRect(0,0,256,256),n.lineCap="round";for(let r=0;r<2600;r++){const o=Math.random()*256,a=Math.random()*256,c=Math.PI/2+(Math.random()-.5)*.9,l=7+Math.random()*11;n.strokeStyle=Math.random()<.75?"rgba(255,255,255,0.3)":"rgba(150,110,160,0.05)",n.lineWidth=1+Math.random()*1.6,n.beginPath(),n.moveTo(o,a),n.lineTo(o+Math.cos(c)*l,a+Math.sin(c)*l),n.stroke()}const i=new tn(e);return i.colorSpace=ve,i.wrapS=i.wrapT=Fs,i.repeat.set(2,1),Jl.set(s,i),i}function Kl(s){const t=tu(s);return new At({map:t,emissive:"#ffffff",emissiveMap:t,emissiveIntensity:.45})}function F_(s){const t=document.createElement("canvas");t.width=256,t.height=160;const e=t.getContext("2d");e.fillStyle="rgba(255,130,150,0.65)";for(const r of[46,210])e.beginPath(),e.ellipse(r,92,25,19,0,0,Math.PI*2),e.fill();e.lineCap="round";for(const r of[80,176])s?(e.strokeStyle="#4a2c20",e.lineWidth=8,e.beginPath(),e.arc(r,66,19,Math.PI*1.15,Math.PI*1.85),e.stroke()):(e.fillStyle="#3a2420",e.beginPath(),e.ellipse(r,58,12,16,0,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.beginPath(),e.arc(r+3,51,4.5,0,Math.PI*2),e.fill());e.fillStyle="#d63a4a",e.beginPath(),e.moveTo(100,88),e.quadraticCurveTo(128,94,156,88),e.quadraticCurveTo(152,132,128,132),e.quadraticCurveTo(104,132,100,88),e.fill(),e.fillStyle="#ff8a94",e.beginPath(),e.ellipse(128,121,16,10,0,0,Math.PI*2),e.fill();const n=new tn(t);n.colorSpace=ve;const i=new pt(new $e(.98,.61),new Se({map:n,transparent:!0,depthWrite:!1}));return i.renderOrder=3,i}function O_(s,t){const e=new De,n=Kl(s),i=(c,l,h,u,f,d,g=n)=>{const _=new pt(bi,g);return _.scale.set(c,l,h),_.position.set(u,f,d),e.add(_),_};i(.68,.64,.64,0,.72,0);for(let c=0;c<16;c++){const l=c/16*Math.PI*2;i(.15,.15,.15,Math.cos(l)*.62,.72+Math.sin(l)*.58,-.05)}const r=new Ht(s).multiplyScalar(.88),o=new At({color:r,emissive:r,emissiveIntensity:.45});for(const c of[-1,1])i(.21,.21,.15,c*.44,1.26,0),i(.12,.12,.05,c*.44,1.25,.13,o),i(.19,.2,.19,c*.68,.62,.16),i(.2,.11,.24,c*.24,.1,.06,new At({color:s,emissive:s,emissiveIntensity:.45}));i(.2,.2,.2,0,.42,-.64,Kl("#ffffff"));const a=F_(t);if(a.position.set(0,.74,.66),e.add(a),t){const c=Tn("#ffc93a",.45),l=new pt(new me(.27,.24,.13,16,1,!0),c);l.material.side=Ge,l.position.y=1.4,e.add(l);for(let h=0;h<5;h++){const u=Math.PI/2+(h-2)/5*Math.PI*2,f=new pt(new cs(.1,.2,6),c);f.position.set(Math.cos(u)*.25,1.54,Math.sin(u)*.25);const d=new pt(bi,Tn("#ff8fb1",.45));d.scale.setScalar(.065),d.position.set(Math.cos(u)*.25,1.66,Math.sin(u)*.25),e.add(f,d)}}return e}const Dr="'M PLUS Rounded 1c','Hiragino Maru Gothic ProN','BIZ UDPGothic','Yu Gothic UI','Meiryo',sans-serif",wn={perStep:.13,toSchool:.6,rainbow:.9},Ur=1.6,eu=7.5,ws=["#ff8fb1","#ffd54a","#7ddc8a","#6cc0ff","#b79cff","#ffb070"];class jl{constructor(t,e,n){this.stage=t,this.onSky=n,this.goalZ=-t.length,this.plazaZ=this.goalZ-pe.plazaDepth*.55,this.buildSky(e),this.buildGround(),this.buildDecor(),t.tunnel&&this.buildTunnel(t.tunnel),this.buildBridges(),this.buildPickups(),this.buildItems(),this.buildGates(),this.obstacles=new I_(t,i=>this.px(i)),this.group.add(this.obstacles.group),this.buildGoal(),this.buildStairs(),this.buildSchool()}stage;onSky;group=new De;goalZ;plazaZ;obstacles;rows=[];time=0;clouds=[];celebrateT=-1;celebration=null;balloons=[];tunnelParts=[];disposed=!1;px(t){return g_(this.stage,t)}roadXAt(t){return this.px(-t)}buildSky(t){const e=this.stage.theme,n=`bgStage${this.stage.id}`,i=()=>{const c=new Ue(pc(n));c.colorSpace=ve,c.needsUpdate=!0,t.background=c};if(Si(n))i();else{$h(n).then(()=>{this.disposed||!Si(n)||(i(),this.onSky?.())});const[c,l]=mn(4,256),h=l.createLinearGradient(0,0,0,256);h.addColorStop(0,e.skyTop),h.addColorStop(1,e.skyBottom),l.fillStyle=h,l.fillRect(0,0,4,256);const u=new tn(c);u.colorSpace=ve,t.background=u}t.fog=new sc(e.skyBottom,45,115);const r=new At({color:"#ffffff",emissive:"#dfefff",emissiveIntensity:.5}),o=new Me(1,14,10),a=Math.ceil((this.stage.length+60)/18);for(let c=0;c<a;c++){const l=new De,h=3+Math.floor(Math.random()*3);for(let d=0;d<h;d++){const g=new pt(o,r),_=1.4+Math.random()*1.2;g.scale.set(_*1.3,_,_),g.position.set(d*1.9-h,Math.random()*.8,Math.random()),l.add(g)}const u=c%2===0?-1:1,f=-c*18-20;l.position.set(this.roadXAt(f)+u*(16+Math.random()*14),14+Math.random()*8,f),this.clouds.push(l),this.group.add(l)}if(e.stars){const[c,l]=mn(64,64);l.fillStyle="#fff6b0",l.beginPath();for(let g=0;g<10;g++){const _=-Math.PI/2+g*Math.PI/5,m=g%2===0?30:13;l.lineTo(32+Math.cos(_)*m,32+Math.sin(_)*m)}l.closePath(),l.fill();const h=new tn(c);h.colorSpace=ve;const u=[];for(let g=0;g<260;g++){const _=20-Math.random()*(this.stage.length+80);u.push(this.roadXAt(_)+(Math.random()-.5)*90,12+Math.random()*26,_-30)}const f=new Ee;f.setAttribute("position",new te(u,3));const d=new ac(f,new oc({map:h,size:1.6,transparent:!0,depthWrite:!1,fog:!1}));this.group.add(d)}}buildGround(){const t=this.stage.theme,e=this.stage.length+pe.plazaDepth+60,n=new pt(new $e(260,e+140),new At({color:t.ground}));n.rotation.x=-Math.PI/2,n.position.set(0,-.02,-e/2+30),this.group.add(n);const i=new tn(this.roadCanvas());i.colorSpace=ve,i.wrapS=i.wrapT=Fs;const r=this.stage.length+40;i.repeat.set(1,r/pe.roadWidth),i.anisotropy=4;const o=Math.ceil(r/2),a=new $e(pe.roadWidth,r,1,o);a.rotateX(-Math.PI/2),a.translate(0,0,-r/2+30);const c=a.getAttribute("position");for(let C=0;C<c.count;C++)c.setX(C,c.getX(C)+this.roadXAt(c.getZ(C)));a.computeVertexNormals();const l=new pt(a,new At({map:i}));this.group.add(l);const h=new yn(.45,.3,1.9),u=new At({color:"#ffffff"}),f=new At({color:t.curb??"#ff9eb8"}),d=Math.ceil(r/2),g=new an(h,u,d*2),_=new an(h,f,d*2),m=new se,p=new Un,T=new L,b=new L(1,1,1),v=new ln;let A=0,E=0;for(let C=0;C<d;C++){const I=30-C*2-1,S=this.roadXAt(I),M=(this.roadXAt(I-1)-this.roadXAt(I+1))/2;v.set(0,Math.atan(M),0),p.setFromEuler(v);for(const P of[-1,1])T.set(S+P*(pe.roadWidth/2+.22),.15,I),m.compose(T,p,b),C%2===0?g.setMatrixAt(A++,m):_.setMatrixAt(E++,m)}g.count=A,_.count=E,this.group.add(g,_)}roadCanvas(){const t=this.stage.theme,[e,n]=mn(256,256);if(t.roadStyle==="rainbow")return["#ffc2c2","#ffd9b0","#fff1a8","#c9f0b8","#bfe3ff","#d2c8ff","#f1c8ff"].forEach((r,o)=>{n.fillStyle=r,n.fillRect(o*256/7,0,256/7+1,256)}),n.fillStyle="rgba(255,255,255,0.75)",n.fillRect(124,30,8,80),n.fillRect(124,158,8,80),e;n.fillStyle=t.road,n.fillRect(0,0,256,256),n.fillStyle="rgba(255,255,255,0.35)";for(let i=0;i<40;i++)n.beginPath(),n.arc(Math.random()*256,Math.random()*256,2+Math.random()*4,0,Math.PI*2),n.fill();return n.fillStyle=t.roadLine,n.fillRect(124,30,8,80),n.fillRect(124,158,8,80),e}buildDecor(){const t=this.stage.theme.decor??"trees",e=this.stage.length+pe.plazaDepth+40,n=new se,i=new Un,r=new L,o=new L,a=(T,b,v,A)=>this.roadXAt(T)+b*(pe.roadWidth/2+v+Math.random()*(A-v));if(t==="clouds"){const T=new Me(1,12,8),b=new At({color:"#ffffff",emissive:"#eaf4ff",emissiveIntensity:.6}),v=Math.floor(e/4)*2*3,A=new an(T,b,v);let E=0;for(let C=20;C>-e&&E<v-6;C-=4)for(const I of[-1,1]){const S=a(C,I,1.5,9);for(let M=0;M<3;M++){const P=.8+Math.random()*1.1;r.set(S+(Math.random()-.5)*2,P*.3,C+(Math.random()-.5)*2),o.set(P*1.3,P,P),n.compose(r,i,o),A.setMatrixAt(E++,n)}}A.count=E,this.group.add(A),this.addFlowers(e,160,["#ffd6e8","#fff3b0","#d8ecff"]);return}const c=new me(.25,.32,1.6,8);c.translate(0,.8,0);const l=new Me(1.4,14,10);l.translate(0,2.6,0);const h=new At({color:"#b07a52"}),u=new At({color:"#ffffff"}),f=t==="flowers"?12:7,d=Math.floor(e/f)*2+2,g=new an(c,h,d),_=new an(l,u,d),m=(t==="flowers"?["#ffb7d0","#ffc9de","#ff9ec0","#fff0f6"]:["#5cbf5c","#7ad16b","#4fae6a","#ffb7d0"]).map(T=>new Ht(T));let p=0;for(let T=20;T>-e&&p<d-1;T-=f)for(const b of[-1,1]){const v=.8+Math.random()*.5;r.set(a(T,b,3,8),0,T+Math.random()*3),o.set(v,v,v),n.compose(r,i,o),g.setMatrixAt(p,n),_.setMatrixAt(p,n),_.setColorAt(p,m[Math.floor(Math.random()*m.length)]),p++}g.count=_.count=p,this.group.add(g,_),t==="flowers"?this.addFlowers(e,1600,["#ff7aa8","#ffd84a","#ffffff","#b38cff","#ff9a5a","#ff5f8f"]):this.addFlowers(e,500,["#ff7aa8","#ffd84a","#ffffff","#b38cff","#ff9a5a"]),t==="festival"&&this.addFestival()}addFlowers(t,e,n){const i=new Me(.18,8,6),r=new At({color:"#ffffff"}),o=new an(i,r,e),a=n.map(l=>new Ht(l)),c=new se;for(let l=0;l<e;l++){const h=Math.random()<.5?-1:1,u=20-Math.random()*t;c.makeTranslation(this.roadXAt(u)+h*(pe.roadWidth/2+.9+Math.random()*11),.12,u),o.setMatrixAt(l,c),o.setColorAt(l,a[l%a.length])}this.group.add(o)}addFestival(){const t=new At({color:"#ffffff"}),e=new me(.08,.1,3.6,8);e.translate(0,1.8,0);const n=new Me(.42,12,10);n.scale(1,1.2,1);const i=ws.map(o=>new At({color:o,emissive:o,emissiveIntensity:.25}));let r=0;for(let o=10;o>-this.stage.length;o-=14)for(const a of[-1,1]){const c=this.roadXAt(o)+a*(pe.roadWidth/2+1.2),l=new pt(e,t);l.position.set(c,0,o),this.group.add(l);for(let h=0;h<3;h++){const u=new pt(n,i[(r+h)%i.length]);u.position.set(c+(h-1)*.5,3.9+(h===1?.35:0),o),this.group.add(u)}r++}}buildTunnel([t,e]){const n=eu,i=new pn(n,.24,8,40,Math.PI),r=a=>new At({color:a,emissive:a,emissiveIntensity:.3,transparent:!0});let o=0;for(let a=t;a<=e;a+=4){const c=r(ws[o%ws.length]),l=new pt(i,c);l.position.set(this.px(a),0,-a),this.group.add(l),this.tunnelParts.push({mat:c,z:-a}),o++}for(const a of[t,e]){const c=r(ws[1]),l=new At({color:"#ffd54a",emissive:"#ffb300",emissiveIntensity:.5,transparent:!0});this.tunnelParts.push({mat:c,z:-a},{mat:l,z:-a});const h=new pt(new pn(n+.4,.6,10,40,Math.PI),c);h.position.set(this.px(a),0,-a);const u=new pt(new es(Wo(1.1,.5),{depth:.3,bevelEnabled:!1}),l);u.position.set(this.px(a),n+1.3,-a),this.group.add(h,u)}}buildGates(){for(const t of this.stage.rows){const e=new De,n=-t.at;e.position.set(this.px(t.at),0,n);const i=t.gates.length,r=pe.roadWidth/i,o=[];t.gates.forEach((l,h)=>{const u=-5+r*(h+.5),f=this.gateTexture(l),d=new Se({map:f,transparent:!0,opacity:.94,side:Ge,depthWrite:!1}),g=new pt(new $e(r-.35,2.1),d);g.position.set(u,1.45,0),e.add(g),o.push({gate:l,mesh:g,mat:d,x:u})});const a=new At({color:"#ffffff"}),c=new At({color:"#ffd54a",emissive:"#ffb300",emissiveIntensity:.3});for(let l=0;l<=i;l++){const h=-5+r*l,u=new pt(new me(.12,.14,2.6,10),a);u.position.set(h,1.3,0);const f=new pt(new Me(.26,14,10),c);f.position.set(h,2.75,0),e.add(u,f)}this.group.add(e),this.rows.push({row:t,z:n,group:e,panels:o,passed:!1,chosen:-1,fadeT:0})}}gateTexture(t){const e=_c(t),n=512,i=256,[r,o]=mn(n,i);if(t.op==="p")return this.powerGateTexture(r,o,t);const a=Ol(e?"gatePlus":"gateMinus");if(a)o.drawImage(a,0,0,n,i);else{const h=o.createLinearGradient(0,0,0,i);e?(h.addColorStop(0,"rgba(90,190,255,0.95)"),h.addColorStop(1,"rgba(150,225,255,0.85)")):(h.addColorStop(0,"rgba(255,170,120,0.95)"),h.addColorStop(1,"rgba(255,205,160,0.85)")),o.fillStyle=h,Ql(o,10,10,n-20,i-20,44),o.fill(),o.lineWidth=14,o.strokeStyle="rgba(255,255,255,0.95)",o.stroke(),o.fillStyle="rgba(255,255,255,0.7)",th(o,50,50,18),th(o,n-50,i-50,18)}const c=Jh(t);o.font=`900 150px ${Dr}`,o.textAlign="center",o.textBaseline="middle",o.lineJoin="round",o.lineWidth=24,o.strokeStyle=e?"#1f6fb8":"#c2552b",o.strokeText(c,n/2,i/2+10),o.fillStyle="#ffffff",o.fillText(c,n/2,i/2+10);const l=new tn(r);return l.colorSpace=ve,l.anisotropy=4,l}powerGateTexture(t,e,n){const i=t.width,r=t.height,o={power:{a:"rgba(255,140,180,0.96)",b:"rgba(255,190,140,0.92)",ink:"#c2386e",text:"つよさ"},rapid:{a:"rgba(120,190,255,0.96)",b:"rgba(190,160,255,0.92)",ink:"#2f62c4",text:"かず"},big:{a:"rgba(120,214,140,0.96)",b:"rgba(200,240,140,0.92)",ink:"#2f8a46",text:"おおきさ"}}[n.k??"power"],a=e.createLinearGradient(0,0,i,r);a.addColorStop(0,o.a),a.addColorStop(1,o.b),e.fillStyle=a,Ql(e,10,10,i-20,r-20,44),e.fill(),e.lineWidth=14,e.strokeStyle="rgba(255,255,255,0.95)",e.stroke();const c=120,l=r/2;for(const[u,f,d]of[[0,8,62],[70,-58,26],[-62,-64,18]])e.fillStyle="rgba(230,248,255,0.55)",e.beginPath(),e.arc(c+u,l+f,d,0,Math.PI*2),e.fill(),e.lineWidth=6,e.strokeStyle="#ffffff",e.stroke(),e.fillStyle="#ffffff",e.beginPath(),e.ellipse(c+u-d*.35,l+f-d*.35,d*.22,d*.13,-.7,0,Math.PI*2),e.fill();e.textAlign="center",e.textBaseline="middle",e.lineJoin="round",e.strokeStyle=o.ink,e.fillStyle="#ffffff",e.lineWidth=16,e.font=`900 ${o.text.length>3?70:88}px ${Dr}`,e.strokeText(o.text,340,r/2-36),e.fillText(o.text,340,r/2-36),e.font=`900 64px ${Dr}`,e.strokeText("アップ",340,r/2+54),e.fillText("アップ",340,r/2+54);const h=new tn(t);return h.colorSpace=ve,h.anisotropy=4,h}gateIndexAt(t,e){const n=t.gates.length,i=pe.roadWidth/n;return Math.max(0,Math.min(n-1,Math.floor((e+pe.roadWidth/2)/i)))}checkPass(t,e){for(const n of this.rows)if(!n.passed&&t<=n.z){n.passed=!0,n.chosen=this.gateIndexAt(n.row,e);const i=n.panels[n.chosen];return{gate:i.gate,x:i.x,z:n.z}}return null}progress(t){return Math.max(0,Math.min(1,-t/this.stage.length))}update(t,e,n){this.time+=t;const i=this.rows.find(r=>!r.passed);for(const r of this.rows){if(r.passed){r.fadeT+=t,r.panels.forEach((c,l)=>{if(l===r.chosen){const h=1+r.fadeT*2.2;c.mesh.scale.set(h,h,1),c.mat.opacity=Math.max(0,.9-r.fadeT*2.2)}else c.mat.opacity=Math.max(0,.9-r.fadeT*1.5)});continue}const o=r===i&&e-r.z<26,a=this.gateIndexAt(r.row,n);r.panels.forEach((c,l)=>{const h=o&&l===a,u=h?1.06+Math.sin(this.time*8)*.03:1;c.mesh.scale.set(u,u,1),c.mat.opacity=h?1:.94})}this.obstacles.update(t,this.roadXAt(e)+n,e),this.updatePickups(),this.updateItems();for(const r of this.tunnelParts){const o=r.z>e+.5?.18:1;r.mat.opacity+=(o-r.mat.opacity)*Math.min(1,t*8),r.mat.depthWrite=r.mat.opacity>.9}for(const r of this.clouds)r.position.x+=t*.4,r.position.x>this.roadXAt(r.position.z)+34&&(r.position.x-=68);this.updateCelebration(t),this.updateLight(t)}buildBridges(){const t=this.stage.theme.decor==="clouds";for(const[e,n]of this.stage.bridges??[]){const i=n-e,r=Math.ceil(i),o=this.stripMesh(e-1,n+1,pe.roadWidth+1.2,.05,r,new At({color:t?"#cfe9ff":"#5bb8f0",emissive:t?"#cfe9ff":"#5bb8f0",emissiveIntensity:t?.5:.25}));this.group.add(o);const a=this.stripMesh(e-1,n+1,Ur*2+.3,.16,r,new At({color:"#f3c99a"}));this.group.add(a);const c=new me(.07,.08,.9,6);c.translate(0,.45,0);const l=new At({color:"#ffffff"}),h=new At({color:"#ff9eb8"});for(let u=e-1;u<=n+1;u+=2)for(const f of[-1,1]){const d=new pt(c,l);d.position.set(this.px(u)+f*(Ur+.15),.16,-u),this.group.add(d)}for(const u of[-1,1]){const f=[];for(let g=e-1;g<=n+1;g+=1)f.push(new L(this.px(g)+u*(Ur+.15),1,-g));const d=new pt(new fc(new Lh(f),r*2,.05,6),h);this.group.add(d)}}}stripMesh(t,e,n,i,r,o){const a=e-t,c=new $e(n,a,1,r);c.rotateX(-Math.PI/2),c.translate(0,i,-(t+a/2));const l=c.getAttribute("position");for(let h=0;h<l.count;h++)l.setX(h,l.getX(h)+this.roadXAt(l.getZ(h)));return c.computeVertexNormals(),new pt(c,o)}bridgeHalfAt(t,e=0){for(const[n,i]of this.stage.bridges??[])if(t+e>=n-1&&t<=i+1)return Ur;return null}items=[];buildItems(){for(const t of this.stage.items??[]){const e=new De;if(t.kind==="bottle"){const r=new At({color:"#9fd8ff",emissive:"#7cc8ff",emissiveIntensity:.4}),o=new pt(new me(.32,.36,.7,14),r);o.position.y=.35;const a=new pt(new me(.14,.2,.22,12),r);a.position.y=.8;const c=new pt(new me(.17,.17,.14,12),new At({color:"#ff8fb1",emissive:"#ff8fb1",emissiveIntensity:.3}));c.position.y=.98;const l=new pt(new me(.365,.365,.26,14,1,!0),new At({color:"#ffffff",emissive:"#ffffff",emissiveIntensity:.3}));l.position.y=.36,e.add(o,a,c,l);for(let h=0;h<3;h++){const u=new qr(new Kr({map:vc(),transparent:!0,depthWrite:!1}));u.scale.setScalar(.45-h*.08),u.position.set(Math.cos(h*2.1)*.55,1.1+h*.25,Math.sin(h*2.1)*.3),e.add(u)}}else{const r=["#ff7a7a","#ffb05a","#ffe15a","#7ddc7a","#6cc0ff","#a98cff"];r.forEach((c,l)=>{const h=new pt(new cs(.9,.5,8,1,!0,l/r.length*Math.PI*2,Math.PI*2/r.length),new At({color:c,emissive:c,emissiveIntensity:.3,side:Ge}));h.position.y=1.35,e.add(h)});const o=new pt(new me(.04,.04,1.3,6),new At({color:"#ffffff"}));o.position.y=.75;const a=new pt(new pn(.12,.04,6,12,Math.PI),new At({color:"#ffffff"}));a.rotation.z=Math.PI,a.position.set(.12,.12,0),e.add(o,a)}const n=new pt(new Xs(.6,.78,28),new Se({color:"#fff3a0",transparent:!0,opacity:.8,side:Ge}));n.rotation.x=-Math.PI/2,n.position.y=.05,e.add(n);const i=this.px(t.at)+t.x;e.position.set(i,0,-t.at),e.scale.setScalar(1.3),this.group.add(e),this.items.push({def:t,group:e,x:i,z:-t.at,taken:!1})}}updateItems(){for(const t of this.items){if(t.taken){t.group.position.y+=.08,t.group.rotation.y+=.3,t.group.scale.multiplyScalar(.94),t.group.scale.x<.05&&(t.group.visible=!1);continue}t.group.rotation.y=this.time*1.5,t.group.position.y=Math.abs(Math.sin(this.time*3+t.z))*.25}}collectItems(t,e,n){const i=[];for(const r of this.items){if(r.taken||Math.abs(r.z-e)>n+1.2)continue;const o=r.x-t,a=r.z-e;o*o+a*a<(n+1)*(n+1)&&(r.taken=!0,i.push({kind:r.def.kind,at:new L(r.x,1.2,r.z)}))}return i}pickups=[];pickupMesh=null;buildPickups(){const t=this.stage,e=[...t.rows.map(c=>c.at),...(t.obstacles??[]).map(c=>c.at),...(t.items??[]).map(c=>c.at),...(t.bridges??[]).flatMap(([c,l])=>[c,(c+l)/2,l])],n=c=>e.every(l=>Math.abs(l-c)>6)&&c>12&&c<t.length-14;let i=t.id*9973;const r=()=>(i=i*16807%2147483647)/2147483647;for(let c=14;c<t.length-14;c+=4){if(!n(c)||!n(c+6))continue;const l=[-3,0,3][Math.floor(r()*3)];for(let h=0;h<5;h++)this.pickups.push({x:this.px(c+h*1.5)+l,z:-(c+h*1.5),taken:!1});c+=16}const o=new es(Wo(.38,.17),{depth:.12,bevelEnabled:!1});o.center();const a=new an(o,new At({color:"#ffd54a",emissive:"#ffb300",emissiveIntensity:.55}),Math.max(1,this.pickups.length));a.count=this.pickups.length,this.pickupMesh=a,this.group.add(a)}updatePickups(){const t=this.pickupMesh;if(!t)return;const e=new se,n=new Un,i=new ln,r=new L,o=new L;this.pickups.forEach((a,c)=>{i.set(0,this.time*3+c*.4,0),n.setFromEuler(i),r.set(a.x,.9+Math.sin(this.time*4+c)*.12,a.z),o.setScalar(a.taken?1e-4:1),e.compose(r,n,o),t.setMatrixAt(c,e)}),t.instanceMatrix.needsUpdate=!0}collectPickups(t,e,n){const i=[];for(const r of this.pickups){if(r.taken||Math.abs(r.z-e)>n+.6)continue;const o=r.x-t,a=r.z-e;o*o+a*a<(n+.5)*(n+.5)&&(r.taken=!0,i.push(new L(r.x,.9,r.z)))}return i}get pickupTotal(){return this.pickups.length}get stairsFrontZ(){return this.plazaZ+4}stepCenter(t){return[t*Xt.height,this.stairsFrontZ-(t-.5)*Xt.depth]}stepGlows=[];lightT=-1;lightRainbow=null;get schoolZ(){return this.stairsFrontZ-Xt.steps*Xt.depth-4}lightUp(){if(this.lightT>=0)return;this.lightT=0;const t=new De;["#ff6b6b","#ffa64d","#ffe14d","#6fdc6f","#5ab8ff","#8a7bff","#d38bff"].forEach((n,i)=>{const r=new pt(new pn(9-i*.45,.24,8,56,Math.PI),new Se({color:n,transparent:!0,opacity:.95}));t.add(r)}),t.position.set(0,Xt.steps*Xt.height,this.schoolZ-2.5),t.scale.set(.01,.01,1),this.lightRainbow=t,this.group.add(t)}lightPoint(){const t=this.lightT;if(t<0)return null;const e=wn.perStep,n=e*Xt.steps;if(t<n){const i=Math.min(Xt.steps,Math.floor(t/e)+1),[r,o]=this.stepCenter(i);return new L((Math.random()-.5)*Xt.width,r+.25,o+Xt.depth/2)}if(t<n+wn.toSchool){const i=(t-n)/wn.toSchool,r=Xt.steps*Xt.height,o=this.stairsFrontZ-Xt.steps*Xt.depth;return new L((Math.random()-.5)*2,r+.4+i*3,o+(this.schoolZ-o)*i)}return null}static lightDuration(){return wn.perStep*Xt.steps+wn.toSchool+wn.rainbow}updateLight(t){if(this.lightT<0)return;this.lightT+=t;const e=this.lightT;this.stepGlows.forEach((i,r)=>{const a=e>r*wn.perStep?.75+Math.sin(e*6-r*.6)*.25:0;i.opacity+=(a-i.opacity)*Math.min(1,t*12)});const n=wn.perStep*Xt.steps+wn.toSchool;if(this.lightRainbow&&e>n){const i=Math.min(1,(e-n)/wn.rainbow),r=1-Math.pow(1-i,3);this.lightRainbow.scale.set(r,r,1)}}buildStairs(){const t=["#ff9eb8","#ffb38a","#ffe07a","#b9eb8f","#8fd6ff","#a9b6ff","#d3a8ff","#ff9eb8","#ffe07a","#8fd6ff"];for(let r=1;r<=Xt.steps;r++){const o=r*Xt.height,[,a]=this.stepCenter(r),c=new pt(new yn(Xt.width,o,Xt.depth),new At({color:t[(r-1)%t.length],emissive:t[(r-1)%t.length],emissiveIntensity:.15}));c.position.set(0,o/2,a),this.group.add(c);const l=new Se({color:"#ffd84a",transparent:!0,opacity:0,depthWrite:!1,blending:Gr}),h=new pt(new $e(Xt.width,Xt.height),l);h.position.set(0,o-Xt.height/2,a+Xt.depth/2+.02),this.group.add(h);for(const m of[-1,1]){const p=new pt(new Me(.3,12,8),l);p.position.set(m*4.75,o+.35,a+.35),this.group.add(p)}this.stepGlows.push(l);const[u,f]=mn(256,64);f.font=`900 48px ${Dr}`,f.textAlign="center",f.textBaseline="middle",f.lineWidth=8,f.lineJoin="round",f.strokeStyle="rgba(120,80,140,0.6)";const d=`×${Xt.multipliers[r]}`;f.strokeText(d,128,34),f.fillStyle="#ffffff",f.fillText(d,128,34);const g=new tn(u);g.colorSpace=ve;const _=new pt(new $e(1.9,.48),new Se({map:g,transparent:!0}));_.position.set(4.3,o-Xt.height/2,a+Xt.depth/2+.01),this.group.add(_)}const e=Xt.steps*Xt.height,n=this.stairsFrontZ-Xt.steps*Xt.depth,i=new pt(new yn(30,e,14),new At({color:this.stage.theme.ground}));i.position.set(0,e/2-.01,n-7),this.group.add(i)}stairsReached(t){const e=this.stage.stars[1];let n=0;for(let i=1;i<=Xt.steps;i++)t>=Math.ceil(e*i/Xt.steps)&&(n=i);return n}buildGoal(){const t=this.goalZ;["#ff6b6b","#ffa64d","#ffe14d","#6fdc6f","#5ab8ff","#8a7bff","#d38bff"].forEach((u,f)=>{const d=6.4-f*.32,g=new pt(new pn(d,.17,8,48,Math.PI),new At({color:u,emissive:u,emissiveIntensity:.25}));g.position.set(0,0,t),this.group.add(g)});const[n,i]=mn(256,32),r=["#ffffff","#ff8fb1"];for(let u=0;u<16;u++)for(let f=0;f<2;f++)i.fillStyle=r[(u+f)%2],i.fillRect(u*16,f*16,16,16);const o=new tn(n);o.colorSpace=ve;const a=new pt(new $e(pe.roadWidth,1.2),new Se({map:o}));a.rotation.x=-Math.PI/2,a.position.set(0,.02,t),this.group.add(a);const c=new pt(new oi(15,40),new At({color:"#ffe9c7"}));c.rotation.x=-Math.PI/2,c.position.set(0,.01,this.plazaZ-2),this.group.add(c);const l=new Ee;l.setAttribute("position",new te([-.3,0,0,.3,0,0,0,-.6,0],3)),l.computeVertexNormals();const h=["#ff7aa8","#ffd84a","#6fdc6f","#5ab8ff","#b38cff"];for(let u=0;u<17;u++){const f=-8+u,d=new pt(l,new Se({color:h[u%h.length],side:Ge}));d.position.set(f,10.6-Math.sin(u/16*Math.PI)*.8,this.stairsFrontZ-Xt.steps*Xt.depth-1.5),this.group.add(d)}}buildSchool(){const t=this.stairsFrontZ-Xt.steps*Xt.depth-4,e=new De;e.position.set(0,Xt.steps*Xt.height,t);const n=Ol("school");if(n){const i=new tn(n);i.colorSpace=ve,i.anisotropy=4;const r=19,o=r*n.height/n.width,a=new pt(new $e(r,o),new Se({map:i,transparent:!0}));a.position.y=o/2,e.add(a)}else{const i=new At({color:"#fff3df"}),r=new At({color:"#f2857a"}),o=new At({color:"#8fd3ff",emissive:"#4aa8e0",emissiveIntensity:.2}),a=new At({color:"#c98b5a"}),c=new pt(new yn(16,4.4,4),i);c.position.y=2.2,e.add(c);const l=new me(2.6,2.6,17,3);l.rotateZ(Math.PI/2);const h=new pt(l,r);h.scale.set(1,.6,1),h.position.y=5,e.add(h);const u=new pt(new yn(3,3.2,3),i);u.position.set(0,6.4,.6),e.add(u);const f=new pt(new cs(2.4,2,4),r);f.rotation.y=Math.PI/4,f.position.set(0,9,.6),e.add(f);const d=new pt(new es(Wo(.7,.32),{depth:.2,bevelEnabled:!1}),new At({color:"#ffd54a",emissive:"#ffb300",emissiveIntensity:.5}));d.position.set(0,10.5,.6),e.add(d);const g=new pt(new oi(.8,24),new Se({color:"#ffffff"}));g.position.set(0,6.6,2.12),e.add(g);for(const m of[-6,-3.6,3.6,6]){const p=new pt(new $e(1.6,1.4),o);p.position.set(m,2.6,2.02),e.add(p)}const _=new pt(new $e(1.8,2.4),a);_.position.set(0,1.2,2.02),e.add(_)}this.group.add(e)}celebrate(){if(this.celebration)return;const t=new De,e=this.stairsFrontZ-Xt.steps*Xt.depth-8,n=["#ff6b6b","#ffa64d","#ffe14d","#6fdc6f","#5ab8ff","#8a7bff","#d38bff"];t.position.y=Xt.steps*Xt.height,n.forEach((c,l)=>{const h=new pt(new pn(15-l*.7,.36,8,64,Math.PI),new Se({color:c,transparent:!0,opacity:.9}));h.position.set(0,0,e),t.add(h)}),t.scale.set(.01,.01,1);const i=new Me(.5,14,10);i.scale(1,1.2,1);const r=new me(.015,.015,1.2,4);r.translate(0,-1.1,0);const o=new Se({color:"#ffffff"}),a=ws.map(c=>new At({color:c,emissive:c,emissiveIntensity:.3}));for(let c=0;c<70;c++){const l=new De;l.add(new pt(i,a[c%a.length]),new pt(r,o)),l.position.set((Math.random()-.5)*26,-2-Math.random()*8,this.plazaZ-2-Math.random()*12),this.group.add(l),this.balloons.push({mesh:l,vy:1.4+Math.random()*1.6,sway:Math.random()*6})}this.celebration=t,this.group.add(t),this.celebrateT=0}updateCelebration(t){if(this.celebrateT<0||!this.celebration)return;this.celebrateT+=t;const e=Math.min(1,this.celebrateT/1.4),n=1-Math.pow(1-e,3);this.celebration.scale.set(n,n,1);for(const i of this.balloons)i.mesh.position.y+=i.vy*t,i.mesh.position.x+=Math.sin(this.time*1.5+i.sway)*t*.4}dispose(){this.disposed=!0,this.group.traverse(t=>{const e=t;e.geometry&&e.geometry.dispose();const n=e.material;n&&(Array.isArray(n)?n:[n]).forEach(i=>{const r=i.map;r&&r.dispose(),i.dispose()})})}}function Ql(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function th(s,t,e,n){s.beginPath();for(let i=0;i<10;i++){const r=-Math.PI/2+i*Math.PI/5,o=i%2===0?n:n*.45;s.lineTo(t+Math.cos(r)*o,e+Math.sin(r)*o)}s.closePath(),s.fill()}function Wo(s,t){const e=new uc;for(let n=0;n<10;n++){const i=Math.PI/2+n*Math.PI/5,r=n%2===0?s:t,o=Math.cos(i)*r,a=Math.sin(i)*r;n===0?e.moveTo(o,a):e.lineTo(o,a)}return e.closePath(),e}const Nr=600;function B_(){const[s,t]=mn(64,64),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),t.fillStyle="rgba(255,255,255,1)",t.beginPath();for(let n=0;n<8;n++){const i=n/8*Math.PI*2,r=n%2===0?31:7;t.lineTo(32+Math.cos(i)*r,32+Math.sin(i)*r)}return t.closePath(),t.fill(),s}class z_{points;ps=[];pos=new Float32Array(Nr*3);col=new Float32Array(Nr*4);size=new Float32Array(Nr);geo=new Ee;constructor(){this.geo.setAttribute("position",new He(this.pos,3).setUsage(Ls)),this.geo.setAttribute("color4",new He(this.col,4).setUsage(Ls)),this.geo.setAttribute("size",new He(this.size,1).setUsage(Ls));const t=new Yn({uniforms:{map:{value:mc("sparkle",B_)},scale:{value:300}},vertexShader:`
        attribute float size;
        attribute vec4 color4;
        varying vec4 vColor;
        uniform float scale;
        void main() {
          vColor = color4;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * scale / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform sampler2D map;
        varying vec4 vColor;
        void main() {
          vec4 t = texture2D(map, gl_PointCoord);
          gl_FragColor = vec4(vColor.rgb, vColor.a * t.a);
          if (gl_FragColor.a < 0.01) discard;
        }`,transparent:!0,depthWrite:!1,blending:Gr});this.points=new ac(this.geo,t),this.points.frustumCulled=!1}setViewportHeight(t){this.points.material.uniforms.scale.value=t*.5}burst(t,e=6){const n=[[1,.95,.5],[1,.75,.9],[.7,.95,1],[1,1,1]];for(let i=0;i<e;i++){const r=n[i%n.length],o=Math.random()*Math.PI*2,a=1.5+Math.random()*2.5;this.add({x:t.x,y:t.y,z:t.z,vx:Math.cos(o)*a,vy:2+Math.random()*3,vz:Math.sin(o)*a,life:0,max:.6+Math.random()*.4,size:.5+Math.random()*.5,r:r[0],g:r[1],b:r[2],gravity:6})}}starUp(t){this.add({x:t.x,y:t.y,z:t.z,vx:(Math.random()-.5)*.6,vy:3.2,vz:0,life:0,max:1.3,size:1.1,r:1,g:.92,b:.45,gravity:-1})}add(t){this.ps.length>=Nr&&this.ps.shift(),this.ps.push(t)}update(t){let e=0;for(let n=this.ps.length-1;n>=0;n--){const i=this.ps[n];if(i.life+=t,i.life>=i.max){this.ps.splice(n,1);continue}i.vy-=i.gravity*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t}for(const n of this.ps){const i=n.life/n.max;this.pos[e*3]=n.x,this.pos[e*3+1]=n.y,this.pos[e*3+2]=n.z,this.col[e*4]=n.r,this.col[e*4+1]=n.g,this.col[e*4+2]=n.b,this.col[e*4+3]=1-i*i,this.size[e]=n.size*(1-i*.4)*(.85+.15*Math.sin(n.life*30)),e++}this.geo.setDrawRange(0,e);for(const n of["position","color4","size"])this.geo.getAttribute(n).needsUpdate=!0}clear(){this.ps=[]}}class k_{constructor(t){this.el=t,t.addEventListener("pointerdown",this.down),t.addEventListener("pointermove",this.move),window.addEventListener("pointerup",this.up),window.addEventListener("pointercancel",this.up),window.addEventListener("keydown",this.keydown),window.addEventListener("keyup",this.keyup)}el;targetX=0;touched=!1;onAnyInput=null;dragging=!1;startX=0;startTarget=0;keys=new Set;reset(){this.targetX=0,this.touched=!1,this.dragging=!1,this.keys.clear()}fire(){this.touched=!0,this.onAnyInput?.()}down=t=>{this.dragging=!0,this.startX=t.clientX,this.startTarget=this.targetX;try{this.el.setPointerCapture(t.pointerId)}catch{}this.fire()};move=t=>{const e=this.el.clientWidth||window.innerWidth;if(t.pointerType==="mouse"&&!this.dragging){const i=t.clientX/e*2-1;this.targetX=i*(pe.roadWidth/2)*1.1,this.clamp();return}if(!this.dragging)return;const n=(t.clientX-this.startX)/e;this.targetX=this.startTarget+n*pe.roadWidth*1.7,this.clamp()};up=()=>{this.dragging=!1};keydown=t=>{(t.key==="ArrowLeft"||t.key==="ArrowRight"||t.key==="a"||t.key==="d")&&(this.keys.add(t.key),this.fire(),t.preventDefault())};keyup=t=>{this.keys.delete(t.key)};update(t){let e=0;(this.keys.has("ArrowLeft")||this.keys.has("a"))&&(e-=1),(this.keys.has("ArrowRight")||this.keys.has("d"))&&(e+=1),e&&(this.targetX+=e*t*17,this.clamp())}clamp(){const t=pe.roadWidth/2;this.targetX=Math.max(-t,Math.min(t,this.targetX))}}function Qe(s,t,e,n,i,r,o,a,c=.01){const l=s.createOscillator(),h=s.createGain();l.type=e,l.frequency.setValueAtTime(n,i),a&&l.frequency.exponentialRampToValueAtTime(a,i+r),h.gain.setValueAtTime(1e-4,i),h.gain.exponentialRampToValueAtTime(o,i+c),h.gain.exponentialRampToValueAtTime(1e-4,i+r),l.connect(h),h.connect(t),l.start(i),l.stop(i+r+.03)}function Ts(s,t,e,n,i,r,o,a,c=.012){const l=s.createBiquadFilter();l.type="lowpass",l.frequency.value=a,l.connect(t),Qe(s,l,e,n,i,r,o,void 0,c)}const eh=new WeakMap;function Va(s,t,e,n,i,r){let o=eh.get(s);if(!o){o=s.createBuffer(1,Math.floor(s.sampleRate*.5),s.sampleRate);const h=o.getChannelData(0);for(let u=0;u<h.length;u++)h[u]=Math.random()*2-1;eh.set(s,o)}const a=s.createBufferSource();a.buffer=o;const c=s.createBiquadFilter();c.type="highpass",c.frequency.value=r;const l=s.createGain();l.gain.setValueAtTime(i,e),l.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(c),c.connect(l),l.connect(t),a.start(e),a.stop(e+n+.02)}const nu={title:{beats:3,chords:"C G Am G F C Dm G C G Am Em F C G C",melody:`E5:1 G5:1 C6:1 | B5:1.5 A5:.5 G5:1 | A5:1 C6:1 E6:1 | D6:1.5 C6:.5 B5:1 |
      C6:1 A5:1 F5:1 | E5:1 G5:1 C6:1 | F5:1 A5:1 D6:1 | B5:2 R:1 |
      E5:1 G5:1 C6:1 | D6:1 B5:1 G5:1 | C6:1.5 B5:.5 A5:1 | G5:1 B5:1 E6:1 |
      A5:1 C6:1 F6:1 | E6:1.5 D6:.5 C6:1 | D6:1 B5:1 G5:1 | C6:2 R:1`},stroll:{beats:4,chords:"C Am F G C Em F G Am Em F C Dm G C C",melody:`E5:2 G5:1 E5:1 | C5:2 E5:1 A5:1 | A5:1.5 G5:.5 F5:2 | D5:1 B4:1 G5:2 |
      E5:2 G5:1 C6:1 | B5:2 G5:1 E5:1 | F5:1 A5:1 C6:1.5 A5:.5 | G5:3 R:1 |
      A5:2 C6:1 A5:1 | G5:2 E5:1 B5:1 | A5:1 F5:1 C6:2 | G5:2 E5:1 C5:1 |
      D5:1 F5:1 A5:1 D6:1 | B5:1.5 A5:.5 G5:2 | E5:1 G5:1 C6:2 | C6:2 R:2`},march:{beats:4,chords:"C G Am F C F G C F G Em Am F G C C",melody:`G4:1 C5:.5 E5:.5 G5:1 E5:1 | D5:1 G5:.5 F5:.5 D5:2 | C5:1 E5:.5 A5:.5 G5:1 E5:1 | F5:.5 E5:.5 D5:.5 C5:.5 A4:2 |
      G4:1 C5:.5 E5:.5 G5:1 A5:1 | A5:.5 G5:.5 F5:.5 A5:.5 C6:2 | B5:1 A5:.5 G5:.5 F5:1 D5:1 | C5:2 R:2 |
      A4:.5 C5:.5 F5:1 A5:1 F5:1 | B4:.5 D5:.5 G5:1 B5:1 G5:1 | G5:1 E5:.5 G5:.5 B5:1 G5:1 | A5:1.5 G5:.5 E5:2 |
      F5:1 A5:1 C6:1 A5:1 | G5:1 B5:1 D6:1 B5:1 | C6:1.5 G5:.5 E5:1 G5:1 | C6:2 R:2`},hop:{beats:4,chords:"C F C G Am F G C F C Dm G Em Am G C",melody:`C5:.5 E5:.5 R:.5 G5:.5 R:.5 G5:.5 E5:1 | F5:.5 A5:.5 R:.5 C6:.5 R:.5 A5:.5 F5:1 |
      E5:.5 G5:.5 R:.5 C6:.5 R:.5 G5:.5 E5:1 | D5:.5 G5:.5 B5:1 A5:.5 G5:.5 D5:1 |
      C5:.5 E5:.5 R:.5 A5:.5 R:.5 A5:.5 G5:.5 E5:.5 | F5:.5 A5:.5 R:.5 C6:.5 R:.5 C6:.5 A5:1 |
      B5:.5 A5:.5 G5:.5 F5:.5 D5:1 G5:1 | E5:1 C5:1 R:2 |
      A5:1 A5:.5 C6:.5 R:.5 A5:.5 F5:1 | G5:1 G5:.5 C6:.5 R:.5 G5:.5 E5:1 |
      F5:1 F5:.5 A5:.5 R:.5 D6:.5 A5:1 | G5:.5 A5:.5 B5:.5 D6:.5 R:.5 B5:.5 G5:1 |
      E5:.5 G5:.5 B5:1 G5:.5 E5:.5 B5:1 | C6:.5 A5:.5 E5:1 A5:.5 C6:.5 E6:1 |
      D6:.5 B5:.5 G5:.5 B5:.5 D6:1 G5:1 | C6:1 G5:.5 E5:.5 C5:1 R:1`},star:{beats:4,chords:"C Em F C Am Em F G C Em F C Dm G C C",melody:`G5:1.5 E6:.5 D6:1 C6:1 | B5:1.5 G5:.5 E5:2 | A5:1.5 C6:.5 F6:1 C6:1 | G5:1.5 E5:.5 C5:2 |
      A5:1 C6:1 E6:1.5 D6:.5 | B5:1.5 G5:.5 B5:1 E6:1 | C6:1 A5:1 F5:1 A5:1 | D6:3 R:1 |
      G5:1.5 E6:.5 D6:1 C6:1 | B5:1.5 G5:.5 E6:2 | F6:1.5 E6:.5 C6:1 A5:1 | G5:1 C6:1 E6:2 |
      D6:1 A5:.5 F5:.5 A5:1 D6:1 | B5:1 D6:1 G6:2 | E6:1.5 D6:.5 C6:1 G5:1 | C6:2 R:2`},flower:{beats:3,chords:"C Am F G C Am Dm G F C Dm Am F C G C",melody:`G5:2 E5:1 | A5:2 C6:1 | C6:1 A5:1 F5:1 | G5:2 B5:1 |
      C6:2 G5:1 | A5:1 C6:1 E6:1 | F6:1.5 D6:.5 A5:1 | G5:2 R:1 |
      A5:1 C6:1 F6:1 | E6:1.5 D6:.5 C6:1 | D6:1 F6:1 A5:1 | C6:2 E6:1 |
      F6:1 C6:1 A5:1 | G5:1 C6:1 E6:1 | D6:1.5 C6:.5 B5:1 | C6:2 R:1`},cave:{beats:4,chords:"Am F Am G Am F G Am C G Am Em F C G G",melody:`A4:.5 R:.5 A4:.5 C5:.5 E5:1 C5:1 | F5:.5 R:.5 F5:.5 E5:.5 C5:1 A4:1 |
      A4:.5 R:.5 A4:.5 C5:.5 E5:.5 A5:.5 G5:1 | D5:.5 R:.5 D5:.5 G5:.5 B5:1 G5:1 |
      A5:.5 G5:.5 E5:.5 G5:.5 A5:1 E5:1 | F5:.5 E5:.5 C5:.5 E5:.5 F5:1 C5:1 |
      D5:.5 G5:.5 B5:.5 D6:.5 B5:1 G5:1 | A5:2 R:2 |
      G5:.5 E5:.5 C5:.5 E5:.5 G5:1 C6:1 | B5:.5 G5:.5 D5:.5 G5:.5 B5:1 D6:1 |
      C6:.5 A5:.5 E5:.5 A5:.5 C6:1 E6:1 | B5:1 G5:.5 E5:.5 G5:1 B5:1 |
      A5:.5 C6:.5 F6:1 C6:.5 A5:.5 F5:1 | G5:.5 C6:.5 E6:1 C6:.5 G5:.5 E5:1 |
      D6:1 B5:.5 G5:.5 D5:1 G5:1 | B5:.5 R:.5 B5:.5 R:.5 D6:1 R:1`},finale:{beats:4,chords:"C F G C Am Em F G F G Em Am F G C C",melody:`C5:1 E5:.5 G5:.5 C6:1.5 G5:.5 | A5:1 C6:.5 A5:.5 F5:2 | G5:1 B5:.5 D6:.5 G6:1.5 D6:.5 | E6:1 C6:1 G5:2 |
      A5:1 C6:.5 E6:.5 C6:1.5 A5:.5 | G5:1 B5:.5 E6:.5 B5:2 | C6:1 A5:.5 C6:.5 F6:1.5 E6:.5 | D6:3 R:1 |
      C6:1.5 A5:.5 F5:1 A5:1 | D6:1.5 B5:.5 G5:1 B5:1 | E6:1.5 B5:.5 G5:1 B5:1 | C6:1 E6:1 A6:2 |
      A6:1 F6:.5 A6:.5 C6:1 F6:1 | G6:1 D6:.5 G6:.5 B5:1 D6:1 | E6:.5 E6:.5 G6:1 E6:1 C6:1 | C6:2 R:2`},boss:{beats:4,chords:"Am F G C Am F G G",melody:`A4:.5 C5:.5 E5:.5 C5:.5 A5:1 E5:1 | F5:.5 A5:.5 C6:.5 A5:.5 F5:1 C5:1 | G5:.5 B5:.5 D6:.5 B5:.5 G5:1 D5:1 | E5:.5 G5:.5 C6:1 G5:1 E5:1 |
      A5:.5 G5:.5 E5:.5 G5:.5 A5:1 C6:1 | A5:.5 G5:.5 F5:.5 A5:.5 C6:1 A5:1 | B5:1 D6:1 G5:.5 A5:.5 B5:1 | D6:1 R:.5 D6:.5 D6:1 R:1`}},G_={walk:{bass:[[0,"r",.9],[1,"f",.9],[2,"o",.9],[3,"f",.9]],stab:[1.5,3.5],kick:[0],hat:1,arp:.5},march:{bass:[[0,"r",.8],[1,"o",.4],[2,"f",.8],[3,"o",.4]],stab:[1,3],kick:[0,2],snare:[1,3],hat:.5,arp:.5},pop:{bass:[[0,"r",.7],[1.5,"r",.4],[2,"f",.7],[3,"o",.4],[3.5,"f",.4]],stab:[.5,1.5,2.5,3.5],kick:[0,1.5,2],snare:[1,3],hat:.5,arp:.25},sparkle:{bass:[[0,"r",1.8],[2,"f",1.8]],kick:[0],hat:1,arp:.5},float:{bass:[[0,"r",3.6]],arp:.5},explore:{bass:[[0,"r",.4],[1,"r",.4],[1.5,"f",.4],[2.5,"r",.4],[3,"o",.4],[3.5,"f",.4]],stab:[2],kick:[0,2.5],snare:[1,3],hat:.5,arp:.25},drive:{bass:[[0,"r",.42],[.5,"r",.42],[1,"o",.42],[1.5,"r",.42],[2,"r",.42],[2.5,"r",.42],[3,"f",.42],[3.5,"o",.42]],stab:[.5,1.5,2.5,3.5],kick:[0,1,2,3],snare:[1,3],hat:.5,arp:.25},waltz:{bass:[[0,"r",.9],[2,"f",.5]],stab:[1,2],kick:[0],arp:.5}},H_={1:{theme:"stroll",groove:"walk",shift:0,bpm:116,lead:"flute",lead2:"pluck"},2:{theme:"march",groove:"march",shift:0,bpm:132,lead:"brass",lead2:"flute"},3:{theme:"hop",groove:"pop",shift:2,bpm:138,lead:"pluck",lead2:"square"},4:{theme:"star",groove:"sparkle",shift:-3,bpm:118,lead:"bell",lead2:"flute"},5:{theme:"flower",groove:"waltz",shift:5,bpm:168,lead:"flute",lead2:"box"},6:{theme:"stroll",groove:"float",shift:5,bpm:100,lead:"bell",lead2:"box"},7:{theme:"cave",groove:"explore",shift:0,bpm:140,lead:"pluck",lead2:"square"},8:{theme:"march",groove:"pop",shift:3,bpm:146,lead:"square",lead2:"brass"},9:{theme:"hop",groove:"drive",shift:-2,bpm:152,lead:"brass",lead2:"square"},10:{theme:"finale",groove:"march",shift:0,bpm:136,lead:"brass",lead2:"bell"}},qs={title:{theme:"title",groove:"waltz",shift:0,bpm:126,lead:"box",lead2:"bell"}};for(const[s,t]of Object.entries(H_))qs[`s${s}`]=t,qs[`b${s}`]={theme:"boss",groove:"drive",shift:t.shift,bpm:150+Number(s),lead:"square",lead2:"brass"};const V_=Object.keys(qs),W_={C:["C3","C4","E4","G4"],F:["F3","C4","F4","A4"],G:["G3","B3","D4","G4"],Am:["A3","C4","E4","A4"],Em:["E3","B3","E4","G4"],Dm:["D3","A3","D4","F4"]};function Xo(s){const t={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[s[0]];return 440*Math.pow(2,(12*(Number(s[1])+1)+t-69)/12)}const nh=new Map;function iu(s){const t=nh.get(s);if(t)return t;const e=qs[s],n=nu[e.theme],i=G_[e.groove],r=Math.pow(2,e.shift/12),o=n.melody.split("|"),a=n.chords.split(" "),c=o.length*n.beats,l=[];for(let u=0;u<2;u++)o.forEach((f,d)=>{const g=u*c+d*n.beats,_=(E,C,I,S,M)=>{E<n.beats&&l.push({b:g+E,v:C,f:I,d:S,g:M})};let m=0;for(const E of f.trim().split(/\s+/)){const[C,I]=E.split(":");C!=="R"&&_(m,u?e.lead2:e.lead,Xo(C)*r,Number(I),1),m+=Number(I)}const[p,...T]=W_[a[d]],b=T.map(E=>Xo(E)*r);let v=Xo(p)*r/2;for(;v<62;)v*=2;for(;v>120;)v/=2;const A={r:v,f:v*1.5,o:v*2};for(const[E,C,I]of i.bass)_(E,"bass",A[C],I,1);for(const E of i.stab??[])for(const C of b)_(E,"stab",C,.4,1);for(const E of i.kick??[])_(E,"kick",0,0,1);for(const E of i.snare??[])_(E,"snare",0,0,1);if(i.hat)for(let E=0;E<n.beats;E+=i.hat)_(E,"hat",0,0,E%1?1:.55);if(i.snare&&d%8===7)for(const E of[2.5,3,3.25,3.5,3.75])_(E,"snare",0,0,.8);if(u){const E=[0,1,2,1];let C=0;for(let I=0;I<n.beats;I+=i.arp)_(I,"arp",b[E[C++%4]]*2,i.arp*1.6,1)}});l.sort((u,f)=>u.b-f.b);const h={notes:l,len:c*2,spb:60/e.bpm};return nh.set(s,h),h}function X_(s){const t=nu[qs[s].theme],e=t.melody.split("|"),n=e.flatMap((i,r)=>i.trim().split(/\s+/).reduce((a,c)=>a+Number(c.split(":")[1]),0)===t.beats?[]:[r+1]);return{bars:e.length,chords:t.chords.split(" ").length,badBars:n}}function su(s,t,e,n,i){const r=e.d*i,o=Math.max(.16,r*.95);switch(e.v){case"flute":{const a=s.createOscillator(),c=s.createGain(),l=s.createOscillator(),h=s.createGain();a.frequency.value=5.2,c.gain.value=e.f*.006,l.type="sine",l.frequency.value=e.f,h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(.3,n+.04),h.gain.exponentialRampToValueAtTime(1e-4,n+o+.08),a.connect(c),c.connect(l.frequency),l.connect(h),h.connect(t),l.start(n),a.start(n),l.stop(n+o+.1),a.stop(n+o+.1),Qe(s,t,"triangle",e.f*2,n,o,.05,void 0,.04);break}case"brass":Ts(s,t,"sawtooth",e.f,n,o,.2,2e3,.02),Ts(s,t,"sawtooth",e.f*1.004,n,o,.12,1400,.02);break;case"square":Ts(s,t,"square",e.f,n,o,.13,2600),Qe(s,t,"triangle",e.f,n,o,.12);break;case"pluck":Ts(s,t,"sawtooth",e.f,n,.42,.24,2400,.004),Qe(s,t,"sine",e.f,n,.5,.16,void 0,.004);break;case"bell":Qe(s,t,"sine",e.f,n,1.2,.26,void 0,.004),Qe(s,t,"sine",e.f*2.76,n,.4,.06,void 0,.004);break;case"box":Qe(s,t,"sine",e.f,n,1.1,.3,void 0,.004),Qe(s,t,"sine",e.f*3,n,.35,.09,void 0,.004);break;case"bass":Qe(s,t,"sine",e.f,n,Math.max(.14,r),.34,void 0,.006),Ts(s,t,"sawtooth",e.f,n,Math.max(.14,r),.26,620,.006);break;case"stab":Qe(s,t,"triangle",e.f,n,.4*i+.06,.06);break;case"arp":Qe(s,t,"sine",e.f,n,Math.max(.2,r),.07,void 0,.004);break;case"kick":Qe(s,t,"sine",165,n,.16,.5,52,.003);break;case"snare":Va(s,t,n,.11,.13*e.g,1400),Qe(s,t,"triangle",210,n,.07,.1*e.g,void 0,.002);break;case"hat":Va(s,t,n,.04,.05*e.g,7e3);break}}const Ys={sfx:1.8,music:.85,duck:.3,out:.95};let ie=null,Zs=null,$s=null,Ei=null,js=!0,Wa=!1,ru=!1,xc=null;function q_(s){Wa=s}function ou(s){js=s,Mc()}function au(s,t){const e=s.createDynamicsCompressor();e.threshold.value=-10,e.ratio.value=8,e.attack.value=.003,e.release.value=.2,e.connect(t);const n=s.createGain(),i=s.createGain();n.gain.value=Ys.sfx,i.gain.value=Ys.music,n.connect(e),i.connect(e);const r=s.createDelay(1),o=s.createGain(),a=s.createGain();return r.delayTime.value=.23,o.gain.value=.28,a.gain.value=.16,i.connect(r),r.connect(o),o.connect(r),r.connect(a),a.connect(e),{sfx:n,music:i}}function Qs(){if(!ie){const s=window.AudioContext||window.webkitAudioContext;if(!s)return;ie=new s;const t=ie.createGain();t.gain.value=Wa?0:Ys.out,t.connect(ie.destination);let e=t;Wa&&(Ei=ie.createAnalyser(),Ei.fftSize=2048,Ei.connect(t),e=Ei);const n=au(ie,e);Zs=n.sfx,$s=n.music;const i=ie.createBufferSource();i.buffer=ie.createBuffer(1,1,22050),i.connect(ie.destination),i.start(0),window.setInterval(Y_,50),document.addEventListener("visibilitychange",()=>{ie&&(document.hidden?ie.suspend():ie.resume())})}ie.state!=="running"&&ie.resume(),Mc()}let Ie=null,cu=0;function Js(s){xc=s,Mc()}function $r(s){ru=s,ie&&$s&&$s.gain.setTargetAtTime(Ys.music*(s?Ys.duck:1),ie.currentTime,.05)}function Mc(){const s=ie&&js?xc:null;if((Ie?.name??null)===s)return;if(Ie&&ie){const e=Ie.bus;e.gain.setTargetAtTime(1e-4,ie.currentTime,.08),window.setTimeout(()=>e.disconnect(),600)}if(Ie=null,!s||!ie||!$s)return;const t=ie.createGain();t.connect($s),Ie={name:s,bus:t,...iu(s),i:0,loop0:ie.currentTime+.1}}function Y_(){if(!ie||!Ie||ie.state!=="running")return;const s=ie.currentTime;for(;;){const t=Ie.notes[Ie.i],e=Ie.loop0+t.b*Ie.spb;if(e>s+.25)break;e>=s&&(su(ie,Ie.bus,t,e,Ie.spb),cu++),++Ie.i>=Ie.notes.length&&(Ie.i=0,Ie.loop0+=Ie.len*Ie.spb)}}function ze(s,t,e,n,i,r){!ie||!Zs||!js||Qe(ie,Zs,n,s,ie.currentTime+t,e,i,r,.012)}const ih={};function qo(s,t){return!ie||ie.currentTime-(ih[s]??-1)<t?!1:(ih[s]=ie.currentTime,!0)}function Yo(s,t,e=.3,n=.25){s.forEach((i,r)=>{ze(i,r*t,e,"triangle",n),ze(i/2,r*t,e,"sine",n*.45)})}const Pe={pop(){if(!qo("pop",.06))return;const s=520+Math.random()*260;ze(s,0,.12,"sine",.25,s*1.8)},gateGood(){[784,988,1175,1568].forEach((s,t)=>ze(s,t*.06,.25,"triangle",.22))},gateSoft(){ze(660,0,.3,"sine",.2,440)},tap(){ze(880,0,.08,"triangle",.2)},coin(){qo("coin",.07)&&(ze(1319,0,.09,"triangle",.16),ze(1760,.05,.16,"triangle",.16))},hit(s){if(!qo("hit",.09))return;const t=s?300:460+Math.random()*120;ze(t,0,.08,"sine",.14,t*1.7)},powerUp(){Yo([523,659,784,1047,1319],.07,.24,.2)},special(){ze(260,0,.55,"sine",.3,1400),Yo([784,1047,1319,1568],.1,.32,.2),ie&&Zs&&js&&Va(ie,Zs,ie.currentTime,.5,.08,2500)},clash(){ze(240,0,.16,"sine",.3,420),ze(300,.14,.18,"sine",.26,520)},bossWin(){Yo([659,784,1047,784,1047,1319],.1,.34,.24)},goal(){const s=[523,659,784,1047,784,1047],t=[0,.12,.24,.36,.56,.68];s.forEach((e,n)=>{ze(e,t[n],.35,"triangle",.25),ze(e/2,t[n],.35,"sine",.12)})},celebrate(){const s=[523,523,523,659,784,659,784,1047,1319,1047,1568],t=[0,.14,.28,.42,.7,.98,1.12,1.4,1.68,1.96,2.24];s.forEach((e,n)=>{const i=n===s.length-1?1.1:.34;ze(e,t[n],i,"triangle",.26),ze(e/2,t[n],i,"sine",.13)})},star(s){ze(988+s*220,0,.35,"triangle",.25),ze(1976+s*440,.05,.25,"sine",.1)}};function Z_(){let s=0;if(Ei){const t=new Float32Array(Ei.fftSize);Ei.getFloatTimeDomainData(t);for(const e of t)s=Math.max(s,Math.abs(e))}return{state:ie?.state??"none",track:Ie?.name??null,wanted:xc,enabled:js,ducked:ru,played:cu,peak:s}}async function $_(s,t){const n=new OfflineAudioContext(1,44100*t,44100),i=au(n,n.destination),{notes:r,len:o,spb:a}=iu(s);for(let m=0;m*o*a<t;m++)for(const p of r){const T=m*o*a+p.b*a;T<t&&su(n,i.music,p,T,a)}const c=(await n.startRendering()).getChannelData(0);let l=0,h=0,u=0,f=0,d=0;const g=44100/2;for(let m=0;m+g<=c.length;m+=g){let p=0;for(let T=m;T<m+g;T++){const b=c[T];p+=b*b,d+=(b-d)*.021,f+=d*d,l=Math.max(l,Math.abs(b))}h+=p,Math.sqrt(p/g)<.005&&u++}const _=m=>Math.round(m*1e3)/1e3;return{name:s,...X_(s),notes:r.length,loopSec:Math.round(o*a),peak:_(l),rms:_(Math.sqrt(h/c.length)),low:_(Math.sqrt(f/c.length)),quietHalfSeconds:u}}const J_=V_,K_={follow:16},sh={rate:7,accel:14},j_=50,Ji={runIn:1.2,perStep:.28,cheer:1.6},Xe={charge:30,range:30,bossDamage:.3,perStar:2,perGate:4},Q_=6;class tv{constructor(t){this.host=t,this.renderer=new o_({antialias:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=ve,t.appendChild(this.renderer.domElement),this.input=new k_(this.renderer.domElement);const e=new xd("#ffffff","#9fd08a",1.6),n=new Sd("#fff6e0",1.6);n.position.set(-6,14,8),this.scene.add(e,n),this.crowd=new y_({onPop:l=>{this.sparkles.burst(l,5),Pe.pop()},onLeave:l=>this.sparkles.starUp(l)}),this.scene.add(this.crowd.group,this.sparkles.points,this.bubbles.points);const i=new Me(1,24,8,0,Math.PI*2,0,Math.PI*.42),r=["#ff7a7a","#ffb05a","#ffe15a","#7ddc7a","#6cc0ff","#a98cff"],o=[],a=i.getAttribute("position"),c=new Ht;for(let l=0;l<a.count;l++){const h=Math.atan2(a.getZ(l),a.getX(l))+Math.PI;c.set(r[Math.floor(h/(Math.PI*2)*r.length)%r.length]),o.push(c.r,c.g,c.b)}i.setAttribute("color",new te(o,3)),this.shieldMesh=new pt(i,new Se({vertexColors:!0,transparent:!0,opacity:.35,side:Ge,depthWrite:!1})),this.shieldMesh.visible=!1,this.scene.add(this.shieldMesh),window.addEventListener("resize",()=>this.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.resize(),200)),this.resize()}host;renderer;scene=new Df;camera=new dn(60,1,.1,400);crowd;sparkles=new z_;bubbles=new E_;input;course=null;stage=null;state="ready";paused=!1;bossTune="before";hooks={};goalView="panel";goalT=0;clash=null;clashT=0;clashAcc=0;clashFirstShown=!1;collected=0;stairsReached=0;stairsShown=0;special=0;shieldT=0;shieldMesh;lit=!1;lastPose=null;camPos=new L;camLook=new L;tmpPos=new L;tmpLook=new L;last=0;running=!1;autoLoop=!0;resize(){const t=this.host.clientWidth||window.innerWidth,e=this.host.clientHeight||window.innerHeight;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.fov=this.camera.aspect<.75?62:50,this.camera.updateProjectionMatrix(),this.sparkles.setViewportHeight(e*Math.min(window.devicePixelRatio||1,2)),this.fitBackground()}fitBackground(){const t=this.scene.background;if(!(t instanceof Ue)||t instanceof tn)return;const e=t.image;if(!e||!e.naturalWidth)return;const n=e.naturalWidth/e.naturalHeight,i=this.camera.aspect;if(t.matrixAutoUpdate=!0,i<n){const r=i/n;t.repeat.set(r,1),t.offset.set((1-r)/2,0)}else{const r=n/i;t.repeat.set(1,r),t.offset.set(0,(1-r)/2)}}loadStage(t,e={extraKids:0,startPower:0}){this.course&&(this.scene.remove(this.course.group),this.course.dispose()),this.stage=t,this.course=new jl(t,this.scene,()=>this.fitBackground()),this.scene.add(this.course.group),this.course.obstacles.scaleBoss(e.bossScale??1),this.fitBackground(),this.crowd.reset(t.start+e.extraKids),this.sparkles.clear(),this.bubbles.clear(),this.bubbles.setStats({power:e.startPower,rapid:e.startRapid??0,big:e.startBig??0}),this.crowd.look={...this.bubbles.stats},this.special=0,this.shieldT=0,this.shieldMesh.visible=!1,this.hooks.onSpecial?.(0,!1),this.clash=null,this.collected=0,this.stairsReached=0,this.stairsShown=0,this.hooks.onCoins?.(0,0),this.hooks.onPower?.(this.bubbles.stats,null),this.input.reset(),this.state="ready",this.paused=!1,this.goalT=0,this.cameraTarget(this.camPos,this.camLook),this.hooks.onCount?.(this.crowd.count,0,null),this.hooks.onProgress?.(0)}start(){this.state==="ready"&&(this.state="run",this.crowd.mode="run",this.bossTune="before",this.hooks.onMusic?.("run"))}startLoop(){if(this.running)return;this.running=!0,this.last=performance.now();const t=e=>{if(!this.running||(requestAnimationFrame(t),!this.autoLoop))return;const n=Math.min(1/20,(e-this.last)/1e3);this.last=e,this.frame(n)};requestAnimationFrame(t)}step(t,e=1/60){for(let n=0;n<t;n+=e)this.frame(e)}frame(t){!this.course||!this.stage||(this.paused||this.update(t),this.renderer.render(this.scene,this.camera))}update(t){const e=this.course,n=this.stage,i=this.crowd;if(this.input.update(t),this.state==="run"){this.clash||(i.cz-=n.speed*t);const o=-i.cz;i.offsetX=e.roadXAt(i.cz);const a=e.bridgeHalfAt(o,14),c=e.bridgeHalfAt(o,1),l=i.radius(),h=a?Math.min(1,(a-.3)/Math.max(.5,l)):1;i.squeeze+=(h-i.squeeze)*Math.min(1,t*4);let u=Math.max(pe.roadWidth*.37,pe.roadWidth/2-l*.85);c&&(u=Math.max(0,c-.4-l*i.squeeze*.6));const f=Math.max(-u,Math.min(u,this.input.targetX));i.cx+=(f-i.cx)*Math.min(1,t*K_.follow),c&&(i.cx=Math.max(-u-.2,Math.min(u+.2,i.cx)));const d=i.cz-Math.min(1.2,l*.5),g=e.checkPass(d,i.cx);g&&(this.applyGate(g.gate,g.x-i.cx,g.z-i.cz),this.chargeSpecial(Xe.perGate));const _=e.collectPickups(i.worldX,i.cz,l*i.squeeze+.2);if(_.length){this.collected+=_.length;for(const p of _)this.sparkles.burst(p,5);Pe.coin(),this.hooks.onCoins?.(this.collected,_.length,_),this.chargeSpecial(_.length*Xe.perStar)}for(const p of e.collectItems(i.worldX,i.cz,l*i.squeeze+.2))this.takeItem(p.kind,p.at);const m=this.shieldT>0;{if(!this.clash&&!m){const b=e.obstacles.clashTarget(i.worldX,i.cz,l);b&&(this.clash=b,this.clashT=0,this.clashAcc=0,this.clashFirstShown=!1)}this.clash&&this.updateClash(t);const p=i.count;e.obstacles.collide(i.worldX,i.cz,l,p,(b,v)=>i.removeHits(b,v),m)>0&&(Pe.gateSoft(),this.hooks.onCount?.(i.count,i.count-p,null))}if(this.updateBossTune(),this.hooks.onProgress?.(e.progress(i.cz)),i.cz<=e.goalZ){this.state="goal",this.goalT=0,this.clash=null,i.squeeze=1,this.stairsReached=e.stairsReached(i.count),this.lit=!1;const p=Object.keys(Gl).filter(T=>T!==this.lastPose);i.pose=p[Math.floor(Math.random()*p.length)],this.lastPose=i.pose,this.stairsShown=0,Pe.goal(),this.hooks.onMusic?.(null),this.hooks.onProgress?.(1)}}else this.state==="goal"&&this.updateGoal(t);if(this.bubbles.update(t,this.state==="run",i.worldX,i.cz,i.radius(),i.count,n.speed,(o,a)=>e.obstacles.bubbleHit(o,a,this.bubbles.damage,this.bubbles.pad),o=>{this.sparkles.burst(o,4),Pe.hit(e.obstacles.lastHitBoss),e.obstacles.lastHitBoss||this.chargeSpecial(1)}),this.shieldT>0){this.shieldT=Math.max(0,this.shieldT-t);const o=i.radius()+.8;this.shieldMesh.visible=!0,this.shieldMesh.position.set(i.worldX,.6,i.cz),this.shieldMesh.scale.set(o,o*.9,o),this.shieldMesh.rotation.y+=t*.8,this.shieldMesh.material.opacity=this.shieldT<1.5?Math.sin(this.shieldT*20)>0?.35:.1:.35,this.shieldT<=0&&(this.shieldMesh.visible=!1)}if(this.state==="run"&&this.special>=Xe.charge){const o=e.obstacles.boss;o&&o.clearT<0&&i.cz-o.z<Xe.range*.8&&this.fireSpecial()}if(this.state==="run"&&i.lookTotal>=7&&Math.random()<t*6){const o=i.radius();this.sparkles.burst(new L(i.worldX+(Math.random()-.5)*o*1.6,1.6,i.cz+(Math.random()-.5)*o),2)}i.update(t),e.update(t,i.cz,i.cx),this.sparkles.update(t),this.cameraTarget(this.tmpPos,this.tmpLook);const r=Math.min(1,t*(this.state==="run"||this.state==="ready"?6:1.8));this.camPos.lerp(this.tmpPos,r),this.camLook.lerp(this.tmpLook,r),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook)}updateClash(t){const e=this.clash,n=this.crowd,i=this.course.obstacles;this.clashT+=t;const r=sh.rate+this.clashT*sh.accel;this.clashAcc+=t*r;let o=0;for(;this.clashAcc>=1&&(this.clashAcc-=1,!(e.clearT>=0||e.hp<=0));){if(n.count<=1){i.clashEnd(e);break}if(i.clashStep(e),o+=n.removeHits(()=>!0,1),!this.clashFirstShown){this.clashFirstShown=!0;const a=new L((n.worldX+e.x)/2,1.2,n.cz-n.radius()*.6);this.sparkles.burst(a,26),this.hooks.onClash?.()}}o&&this.hooks.onCount?.(n.count,-o,null),(e.clearT>=0||e.hp<=0)&&(this.clash=null,this.sparkles.burst(new L(n.worldX,1.2,n.cz-1),16))}updateGoal(t){const e=this.course,n=this.stage,i=this.crowd;this.goalT+=t;const r=e.stairsFrontZ+2.2,o=this.goalT;if(o<Ji.runIn){const f=Math.min(1,t*2.6);i.cz+=(r-i.cz)*f,i.cx+=(0-i.cx)*f,i.offsetX=e.roadXAt(i.cz);return}i.cz+=(r-i.cz)*Math.min(1,t*4),i.cx*=1-Math.min(1,t*4),i.offsetX=0;const a=this.stairsReached,c=Math.min(a,Math.floor((o-Ji.runIn)/Ji.perStep)+1);a>0&&c>this.stairsShown&&(this.stairsShown=c,this.hooks.onStair?.(c,Xt.multipliers[c]),Pe.star(Math.min(2,c%3))),i.formation=a>0?this.stairsFormation(a,this.stairsShown,r):null,i.faceCamera(!0);const l=Ji.runIn+Math.max(1,a)*Ji.perStep;o>l+.3&&i.mode!=="cheer"&&(i.mode="cheer"),!this.lit&&o>l+.4&&i.count>=gc&&(this.lit=!0,e.lightUp(),this.hooks.onLight?.(),Pe.goal());const h=e.lightPoint();h&&this.sparkles.burst(h,3);const u=this.lit?jl.lightDuration()+.4:0;if(o>l+Ji.cheer+u){this.state="done";const f=Xt.multipliers[a],d=Math.round((this.collected+Math.floor(i.count/ii.perKids))*f),g=e.obstacles.bossResult!=="lose";this.hooks.onGoal?.({stage:n,count:i.count,stars:g?ev(n,i.count):0,cleared:g,bossLeft:Math.max(1,Math.ceil(e.obstacles.boss?.hp??1)),steps:a,multiplier:f,collected:this.collected,coins:d,pose:Gl[i.pose],lit:this.lit})}}stairsFormation(t,e,n){const i=this.course;return(r,o)=>{const a=Math.max(1,Math.ceil(o/t)),c=Math.min(t,Math.floor(r/a)+1),l=r-(c-1)*a,h=Math.min(a,12),u=Math.floor(l/h),f=l%h,d=Math.min(h,a-u*h),g=(f-(d-1)/2)*.62-.6;if(c>e)return[g,0,1.2+u*.6+(c-e)*.25];const[_,m]=i.stepCenter(c);return[g,_,m+.25-u*.55-n]}}chargeSpecial(t){this.state!=="run"||this.special>=Xe.charge||(this.special=Math.min(Xe.charge,this.special+t),this.hooks.onSpecial?.(this.special/Xe.charge,this.special>=Xe.charge))}fireSpecial(){if(this.state!=="run"||this.special<Xe.charge||!this.course)return;this.special=0;const t=this.crowd,e=this.course.obstacles.boss,n=e&&e.maxHp>0?Math.ceil(e.maxHp*Xe.bossDamage):0;this.course.obstacles.blast(t.cz,Xe.range,n);for(let i=2;i<Xe.range;i+=2.5)for(let r=-2;r<=2;r++)this.sparkles.burst(new L(t.worldX+r*2,1.2,t.cz-i),2);Pe.special(),this.hooks.onSpecial?.(0,!1),this.hooks.onSpecialFire?.()}updateBossTune(){if(this.bossTune==="end")return;const t=this.course.obstacles;t.bossResult!=="none"?(t.bossResult==="win"?Pe.bossWin():Pe.gateSoft(),this.bossTune==="on"&&this.hooks.onMusic?.("run"),this.bossTune="end"):this.bossTune==="before"&&t.boss&&this.crowd.cz-t.boss.z<j_&&(this.bossTune="on",this.hooks.onMusic?.("boss"))}takeItem(t,e){this.sparkles.burst(e,16),t==="bottle"?this.bubbles.raise("power")?(this.crowd.look={...this.bubbles.stats},this.hooks.onPower?.(this.bubbles.stats,"power")):(this.special=Math.min(Xe.charge,this.special+Xe.charge/2),this.hooks.onSpecial?.(this.special/Xe.charge,this.special>=Xe.charge)):this.shieldT=Q_,Pe.powerUp(),this.hooks.onItem?.(t)}applyGate(t,e,n){const i=this.crowd.count;if(t.op==="p"){const o=t.k??"power";this.bubbles.raise(o),this.crowd.look={...this.bubbles.stats};for(let a=0;a<6;a++)this.sparkles.burst(new L(this.crowd.worldX+(Math.random()-.5)*this.crowd.radius()*1.6,1.2,this.crowd.cz+(Math.random()-.5)*this.crowd.radius()*1.4),6);this.bubbles.volley(this.crowd.worldX,this.crowd.cz,this.crowd.radius()),this.sparkles.burst(new L(this.crowd.worldX+e,1.5,this.crowd.cz+n),24),Pe.powerUp(),this.hooks.onPower?.(this.bubbles.stats,o),this.hooks.onCount?.(i,0,t);return}const r=m_(i,t);this.crowd.setCount(r,{x:e,z:n}),_c(t)?Pe.gateGood():Pe.gateSoft(),this.hooks.onCount?.(r,r-i,t)}cameraTarget(t,e){const n=this.crowd,i=this.camera.aspect<.75;if(this.state==="goal"||this.state==="done"){const f=this.course.stairsFrontZ,d=Xt.steps*Xt.height;if(t.set(0,i?7:6,f+(i?14.5:13)),e.set(0,i?4.2:3.6,f-6),this.lit&&this.state==="goal"&&e.set(0,d+(i?1.5:.8),f-10),this.state==="done"&&this.goalView==="wide"){t.set(0,i?7.5:6.5,f+(i?15.5:14)),e.set(0,d+(i?4:2.5),f-14);return}this.state==="done"&&(e.y=i?-3.5:1.5);return}const r=n.radius();let o=(i?10.5:9)+r*1.3,a=(i?11.5:9.5)+r*1.1;const c=this.stage?.tunnel;if(c){const f=-n.cz,d=rh(c[0]-14,c[0]-2,f)*(1-rh(c[1]-4,c[1]+6,f));o+=(8.5-o)*d,a+=(eu-2.2-a)*d}const l=this.course,h=l.roadXAt(n.cz+o),u=(l.roadXAt(n.cz-7)+l.roadXAt(n.cz-24))/2;t.set(h+n.cx*.35,a,n.cz+o),e.set(u+n.cx*.25,0,n.cz-7)}}function rh(s,t,e){const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)}function ev(s,t){return t>=s.stars[1]?3:t>=s.stars[0]?2:1}const yc="minna75-save-v1",Zo={unlocked:1,stars:{},best:{},sound:!0,soundChosen:!1,seenGuide:!1,coins:0,upStart:0,upBubble:0,cheer:{}};function nv(){try{const s=localStorage.getItem(yc);if(!s)return structuredClone(Zo);const t={...structuredClone(Zo),...JSON.parse(s)};return t.soundChosen||(t.sound=!0),t}catch{return structuredClone(Zo)}}function to(s){try{localStorage.setItem(yc,JSON.stringify(s))}catch{}}function iv(){try{localStorage.removeItem(yc)}catch{}}const oh=["#ff7aa8","#ffd54a","#5ab8ff","#6fdc6f","#b38cff","#ff9a5a","#ffffff"];class sv{constructor(t){this.canvas=t,this.ctx=t.getContext("2d")}canvas;ctx;pieces=[];raf=0;last=0;burst(t=140){const e=this.canvas.getBoundingClientRect(),n=Math.min(window.devicePixelRatio||1,2);this.canvas.width=e.width*n,this.canvas.height=e.height*n,this.ctx.setTransform(n,0,0,n,0,0);for(let i=0;i<t;i++)this.pieces.push({x:Math.random()*e.width,y:-20-Math.random()*e.height*.6,vx:(Math.random()-.5)*60,vy:80+Math.random()*120,rot:Math.random()*Math.PI,vr:(Math.random()-.5)*10,w:7+Math.random()*6,h:10+Math.random()*8,color:oh[i%oh.length],life:0});this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))}tick=t=>{const e=Math.min(.05,(t-this.last)/1e3);this.last=t;const n=this.canvas.getBoundingClientRect();this.ctx.clearRect(0,0,n.width,n.height);for(let i=this.pieces.length-1;i>=0;i--){const r=this.pieces[i];if(r.life+=e,r.x+=(r.vx+Math.sin(r.life*3+r.rot)*40)*e,r.y+=r.vy*e,r.rot+=r.vr*e,r.y>n.height+30){this.pieces.splice(i,1);continue}this.ctx.save(),this.ctx.translate(r.x,r.y),this.ctx.rotate(r.rot),this.ctx.scale(1,Math.cos(r.life*6+r.rot)),this.ctx.fillStyle=r.color,this.ctx.fillRect(-r.w/2,-r.h/2,r.w,r.h),this.ctx.restore()}this.pieces.length?this.raf=requestAnimationFrame(this.tick):this.raf=0};clear(){this.pieces=[];const t=this.canvas.getBoundingClientRect();this.ctx.clearRect(0,0,t.width,t.height)}}const Bt=s=>document.getElementById(s),Yt=nv();ou(Yt.sound);new URLSearchParams(location.search).has("debug")&&q_(!0);for(const s of["pointerup","touchend","click","keydown"])window.addEventListener(s,Qs,{capture:!0,passive:!0});new URLSearchParams(location.search).has("all")&&(Yt.unlocked=Nn.length);const rv=["title","howto","select","hud","pause","clear","celebrate"];function Rn(...s){for(const t of rv)Bt(t).hidden=!s.includes(t)}let be,ns,Us=Nn[0],Dn=[];async function ov(){if(await a_(),await Promise.race([document.fonts?.load("900 92px 'M PLUS Rounded 1c'").catch(()=>{}),new Promise(s=>setTimeout(s,2500))]),be=new tv(Bt("stage3d")),ns=new sv(Bt("confetti")),be.hooks={onCount:lv,onProgress:vv,onGoal:xv,onPower:pv,onCoins:hv,onStair:dv,onClash:uv,onLight:fv,onSpecial:mv,onSpecialFire:gv,onItem:_v,onMusic:s=>Js(s&&`${s==="boss"?"b":"s"}${Us.id}`)},Bt("btn-special").addEventListener("pointerdown",s=>{s.stopPropagation(),be.fireSpecial()}),be.input.onAnyInput=()=>{be.state==="ready"&&!Bt("hud").hidden&&!be.paused&&(Qs(),be.start(),Bt("guide").hidden=!0,Yt.seenGuide||(Yt.seenGuide=!0,to(Yt)))},be.loadStage(Nn[0]),be.startLoop(),Si("titleDeco")){const s=Bt("title-deco");s.src=Ps("titleDeco"),s.hidden=!1}if(Si("clearDeco")){const s=Bt("clear-deco");s.src=Ps("clearDeco"),s.hidden=!1}Si("titleBg")&&(Bt("title").classList.add("has-bg"),Bt("title").style.backgroundImage=`url("${Ps("titleBg")}")`),document.querySelectorAll("#howto img[data-asset]").forEach(s=>{const t=s.dataset.asset;Si(t)?s.src=Ps(t):s.hidden=!0}),av(),Xa(),Js("title"),Bt("loading").hidden=!0,Rn("title"),new URLSearchParams(location.search).has("debug")&&Sv()}function av(){const s=(t,e)=>Bt(t).addEventListener("click",()=>{Qs(),Pe.tap(),e()});s("btn-play",As),s("btn-howto",()=>{Rn("howto"),Bt("howto").scrollTop=0}),s("btn-howto-back",()=>Rn("title")),s("btn-select-back",()=>Rn("title")),s("btn-pause",()=>{be.state!=="done"&&(be.paused=!0,$r(!0),Xa(),Rn("hud","pause"))}),s("btn-resume",()=>{be.paused=!1,$r(!1),Rn("hud")}),s("btn-retry-p",()=>Ns(Us)),s("btn-select-p",As);for(const t of["btn-sound","btn-sound-t"])s(t,()=>{Yt.sound=!Yt.sound,Yt.soundChosen=!0,ou(Yt.sound),to(Yt),Xa(),Pe.tap()});s("btn-retry",()=>Ns(Us)),s("btn-select-c",As),s("btn-shop",As),s("btn-next",()=>{const t=Nn.find(e=>e.id===Us.id+1);t&&t.ready?Ns(t):As()})}function Xa(){for(const s of["btn-sound","btn-sound-t"])Bt(s).textContent=Yt.sound?"♪ おと：オン":"♪ おと：オフ"}function As(){uu(),be.paused=!1,$r(!1),Js("title"),lu();const s=Bt("stage-list");s.innerHTML="";for(const t of Nn){const e=t.id<=Yt.unlocked,n=document.createElement("button");n.className="stage-btn";const i=document.createElement("span");i.className="stage-num",i.textContent=String(t.id);const r=document.createElement("span");if(r.className="stage-name",r.textContent=e?t.name:"？？？",n.append(i,r),!e)n.classList.add("locked"),n.disabled=!0;else if(t.ready){if(n.append(cv(Yt.stars[t.id]??0)),Yt.best[t.id]){const o=document.createElement("span");o.className="stage-best",o.textContent=`ベスト ${Yt.best[t.id]}にん`,n.append(o)}n.addEventListener("click",()=>{Qs(),Pe.tap(),Ns(t)})}else{n.classList.add("soon");const o=document.createElement("span");o.className="stage-tag",o.textContent="じゅんびちゅう",n.append(o),n.disabled=!0}s.append(n)}Rn("select")}function cv(s){const t=document.createElement("span");t.className="stage-stars";for(let e=0;e<3;e++)t.append(qa(e<s));return t}function qa(s){const t=document.createElement("span");t.className="star"+(s?" on":"");const e=s?"starOn":"starOff";return Si(e)&&(t.classList.add("img"),t.style.backgroundImage=`url("${pc(e).src}")`),t}function Ns(s){uu(),$r(!1),Js("title"),be.goalView="panel",Us=s;const t=Math.min(Yt.cheer[s.id]??0,Ha.length-1),e=Ha[t];be.loadStage(s,{extraKids:Yt.upStart*ii.upgrades.start.per+e.kids,startPower:Math.min(3,Math.max(e.power,Yt.upBubble*ii.upgrades.bubble.per)),startRapid:e.rapid,startBig:e.big,bossScale:e.boss}),Bt("guide-cheer").hidden=t===0,Bt("hud-stage").textContent=`ステージ${s.id}　${s.name}`,Bt("btn-special").classList.remove("ready");for(const n of["stair-pop","power-pop","count-pop"])Bt(n).classList.remove("show");document.querySelectorAll(".coin-fly").forEach(n=>n.remove()),Bt("guide").hidden=!1,Bt("guide").querySelector("p").hidden=Yt.seenGuide&&s.id>1,Rn("hud")}function lv(s,t,e){const n=Bt("count-num");if(n.textContent=String(s),t!==0&&(n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")),e?.op!=="p"&&(e||t<0)){const i=Bt("count-pop");i.textContent=e?Jh(e):`－${-t}`,i.classList.toggle("minus",e?!_c(e):!0),i.classList.remove("show"),i.offsetWidth,i.classList.add("show")}}function lu(){Bt("shop-coins").textContent=String(Yt.coins);const s=Bt("shop-items");s.innerHTML="";const t=i=>`${3+i*ii.upgrades.start.per}にん`,e=i=>`つよさ ${i*ii.upgrades.bubble.per}`,n=[{key:"upStart",up:ii.upgrades.start,text:t},{key:"upBubble",up:ii.upgrades.bubble,text:e}];for(const i of n){const r=Yt[i.key],o=i.up.cost[r],a=document.createElement("button");a.className="shop-btn";const c=o===void 0;a.innerHTML=`<span class="shop-label">${i.up.label}</span><span class="shop-now">いま ${i.text(r)}</span>`+(c?'<span class="shop-cost">さいこう！</span>':`<span class="shop-cost"><i class="coin"></i>${o}</span>`),a.disabled=c||Yt.coins<o,a.classList.toggle("can",!a.disabled),a.addEventListener("click",()=>{if(c||Yt.coins<o)return;Qs(),Pe.star(2),Yt.coins-=o,Yt[i.key]=r+1,to(Yt),lu();const l=Bt("shop-pop");l.innerHTML=`<small>${i.up.label}</small>${i.text(r)} → ${i.text(r+1)}！`,l.classList.remove("show"),l.offsetWidth,l.classList.add("show")}),s.append(a)}}function hv(s,t,e){const n=Bt("hud-coins"),i=()=>{n.querySelector("b").textContent=String(s),n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")};if(t<=0||!e?.length){n.querySelector("b").textContent=String(s);return}Dn.push(window.setTimeout(i,560));const r=Bt("app");if(r.querySelectorAll(".coin-fly").length>12)return;const o=r.getBoundingClientRect(),a=n.getBoundingClientRect(),c=a.left-o.left+12,l=a.top-o.top+a.height/2;e.slice(0,5).forEach((h,u)=>{const f=h.clone().project(be.camera),d=(f.x+1)/2*o.width,g=(1-f.y)/2*o.height,_=document.createElement("i");_.className="coin coin-fly",_.style.left=`${d}px`,_.style.top=`${g}px`,r.append(_);const m=_.animate([{transform:"translate(-50%, -50%) scale(1.6)",opacity:1},{transform:`translate(calc(${c-d}px - 50%), calc(${l-g}px - 50%)) scale(0.8)`,opacity:1}],{duration:550,delay:u*70,easing:"cubic-bezier(.5,0,.6,1)",fill:"backwards"});m.onfinish=()=>_.remove(),window.setTimeout(()=>_.remove(),700+u*70)})}function uv(){Pe.clash();const s=Bt("power-pop");s.innerHTML="おしくらまんじゅう！<small>いっしょに あそびに いくよ</small>",s.classList.remove("show"),s.offsetWidth,s.classList.add("show")}function fv(){const s=Bt("stair-pop");s.innerHTML="<small>かいだんから にじへ</small>75にん たっせい！",s.classList.remove("show"),s.offsetWidth,s.classList.add("show","gold")}function dv(s,t){const e=Bt("stair-pop");e.classList.remove("gold"),e.innerHTML=`<small>${s}だんめ</small>×${t}`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}const $o={power:{name:"つよさ",look:["","マント ゲット！","マントが ピンクに！","きんいろの マント！"]},rapid:{name:"かず",look:["","てんしの はね ゲット！","はねが おおきく！","おおきな はね！"]},big:{name:"おおきさ",look:["","ぼうしに ほし ゲット！","ほしが おおきく！","おおきな ほし！"]}};function pv(s,t){const e=Bt("hud-power");e.innerHTML="";for(const n of["power","rapid","big"]){const i=document.createElement("span");i.className=`power-row power-${n}`;const r=document.createElement("span");r.className="power-label",r.textContent=$o[n].name;const o=document.createElement("span");o.className="power-pips";for(let a=0;a<3;a++){const c=document.createElement("i");a<s[n]&&(c.className="on"),o.append(c)}i.append(r,o),e.append(i)}if(t){e.classList.remove("bump"),e.offsetWidth,e.classList.add("bump");const n=s[t];Sc(`${$o[t].name} レベル${n}！`,$o[t].look[n]??"")}}function Sc(s,t=""){const e=Bt("power-pop");e.innerHTML=`${s}${t?`<small>${t}</small>`:""}`,e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}function mv(s,t){const e=Bt("btn-special");e.style.setProperty("--charge",`${Math.round(s*360)}deg`),e.classList.toggle("ready",t)}function gv(){Sc("おおきな シャボン玉！","まえの みんなに とどいたよ")}function _v(s){s==="umbrella"&&Sc("にじの かさ！","しばらく まもって くれるよ")}function vv(s){const t=`${(s*100).toFixed(1)}%`;Bt("progress-fill").style.width=t,Bt("progress-kid").style.left=t}let Ya=0;function xv(s){if(Ya=Yt.best[s.stage.id]??0,Yt.coins+=s.coins,s.cleared?(Yt.stars[s.stage.id]=Math.max(Yt.stars[s.stage.id]??0,s.stars),Yt.best[s.stage.id]=Math.max(Yt.best[s.stage.id]??0,s.count),Yt.unlocked=Math.max(Yt.unlocked,Math.min(Nn.length,s.stage.id+1)),delete Yt.cheer[s.stage.id]):Yt.cheer[s.stage.id]=Math.min((Yt.cheer[s.stage.id]??0)+1,Ha.length-1),to(Yt),s.cleared&&s.stage.id===Nn[Nn.length-1].id){Mv(s);return}hu(s)}function Mv(s){be.goalView="wide",be.course?.celebrate();const t=s.count>=gc;Bt("cele-sub").textContent=t?`みんなで ${s.count}にん あつまったよ！`:"みんなで いっしょに おいわいしよう！",Bt("celebrate").classList.toggle("reached",t),Rn("celebrate"),Pe.celebrate(),ns.burst(220),Dn.push(window.setTimeout(()=>ns.burst(160),1600)),Dn.push(window.setTimeout(()=>ns.burst(160),3200));let e=!1;const n=()=>{e||(e=!0,be.goalView="panel",hu(s,!0))};Dn.push(window.setTimeout(()=>{Bt("celebrate").addEventListener("click",n,{once:!0})},1200)),Dn.push(window.setTimeout(n,6500))}function hu(s,t=!1){ns.burst(160),Dn.push(window.setTimeout(()=>Js("title"),2e3));const e=Bt("clear-stars");e.innerHTML="";const n=[0,1,2].map(()=>qa(!1));e.append(...n),n.forEach((f,d)=>{d>=s.stars||Dn.push(window.setTimeout(()=>{const g=qa(!0);g.classList.add("pop"),f.replaceWith(g),n[d]=g,Pe.star(d)},500+d*450))}),Bt("clear-title").textContent=s.cleared?"ゴール！":"おしい！",Bt("clear-count").innerHTML=`<b>${s.count}</b>にん あつまったよ！`,Bt("clear-msg").textContent=s.cleared?t?s.count>=gc?"75しゅうねん おめでとう！":"みんなで おいわい できたね！":s.stars===3?"すごい！ おともだち いっぱい！":s.stars===2?"たくさん あつまったね！":"ゴールできたね！ やったね！":`おやぶん あと ${s.bossLeft}！`,Bt("clear-pose").textContent=`きょうのポーズ：${s.pose}${s.lit?"　★75にん たっせい！":""}`,Bt("clear-coins").innerHTML=s.steps>0?`かいだん ${s.steps}だん（×${s.multiplier}）　<i class="coin"></i><b>+${s.coins}</b>`:`<i class="coin"></i><b>+${s.coins}</b>`,Bt("clear-help").hidden=s.cleared,Bt("btn-shop").hidden=s.cleared||!yv();const i=s.cleared?Yt.best[s.stage.id]??0:0,r=s.cleared&&s.count>Ya&&Ya>0;Bt("clear-best").innerHTML=r?`<span class="new-record">しんきろく！</span> ベスト ${i}にん`:i?`ベスト ${i}にん`:"";const[o,a]=s.stage.stars,c=s.cleared?s.stars===1?o:s.stars===2?a:0:0,l=Bt("clear-next");if(l.hidden=!c,c){Bt("clear-hint").textContent=`ほしが ${s.stars+1}つまで あと ${c-s.count}にん（${c}にん）`;const f=Bt("clear-bar-fill");f.style.width="0%";const d=`${Math.min(100,s.count/c*100).toFixed(1)}%`;Dn.push(window.setTimeout(()=>f.style.width=d,60))}const h=Nn.find(f=>f.id===s.stage.id+1),u=Bt("btn-next");u.hidden=!h||!s.cleared,u.textContent=h&&h.ready?"つぎの ステージへ":"つぎへ",Rn("clear")}function yv(){const{start:s,bubble:t}=ii.upgrades;return Yt.coins>=(s.cost[Yt.upStart]??1/0)||Yt.coins>=(t.cost[Yt.upBubble]??1/0)}function uu(){Dn.forEach(s=>clearTimeout(s)),Dn=[],ns?.clear()}function Sv(){window.__m75={game:be,save:Yt,startStage:s=>Ns(Nn.find(t=>t.id===s)),step:s=>be.step(s),setX:s=>{be.input.targetX=s},tap:()=>be.input.onAnyInput?.(),pauseLoop:s=>{be.autoLoop=!s},resetSave:iv,audioStatus:Z_,checkTrack:$_,allTracks:J_}}ov();
