import{u as C}from"./asyncData.4e30b45e.js";import{i as k,k as U,q as v}from"./entry.9a0680c0.js";const F={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function O(s,r={}){r={...F,...r};const n=j(r);return n.dispatch(s),n.toString()}function j(s){const r=[];let n=[];const t=e=>{r.push(e)};return{toString(){return r.join("")},getContext(){return n},dispatch(e){return s.replacer&&(e=s.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const o=/\[object (.*)]/i,a=Object.prototype.toString.call(e),c=o.exec(a),i=c?c[1].toLowerCase():"unknown:["+a.toLowerCase()+"]";let l=null;if((l=n.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+l+"]");if(n.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")if(this["_"+i])this["_"+i](e);else{if(s.ignoreUnknown)return t("["+i+"]");throw new Error('Unknown object type "'+i+'"')}else{let u=Object.keys(e);s.unorderedObjects&&(u=u.sort()),s.respectType!==!1&&!z(e)&&u.splice(0,0,"prototype","__proto__","letructor"),s.excludeKeys&&(u=u.filter(function(f){return!s.excludeKeys(f)})),t("object:"+u.length+":");for(const f of u)this.dispatch(f),t(":"),s.excludeValues||this.dispatch(e[f]),t(",")}},_array(e,o){if(o=typeof o<"u"?o:s.unorderedArrays!==!1,t("array:"+e.length+":"),!o||e.length<=1){for(const i of e)this.dispatch(i);return}const a=[],c=e.map(i=>{const l=j(s);return l.dispatch(i),a.push(l.getContext()),l.toString()});return n=[...n,...a],c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),z(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const o=[...e];return this._array(o,s.unorderedSets!==!1)},_set(e){t("set:");const o=[...e];return this._array(o,s.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function z(s){return typeof s!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}class m{constructor(r,n){r=this.words=r||[],this.sigBytes=n!==void 0?n:r.length*4}toString(r){return(r||H).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let n=0;n<r.sigBytes;n++){const t=r.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=t<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<r.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=r.words[n>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new m([...this.words])}}const H={stringify(s){const r=[];for(let n=0;n<s.sigBytes;n++){const t=s.words[n>>>2]>>>24-n%4*8&255;r.push((t>>>4).toString(16),(t&15).toString(16))}return r.join("")}},D={stringify(s){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,o=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,a=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|o<<8|a;for(let i=0;i<4&&t*8+i*6<s.sigBytes*8;i++)n.push(r.charAt(c>>>6*(3-i)&63))}return n.join("")}},L={parse(s){const r=s.length,n=[];for(let t=0;t<r;t++)n[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new m(n,r)}},R={parse(s){return L.parse(unescape(encodeURIComponent(s)))}};class T{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new m,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=R.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,n){}_process(r){let n,t=this._data.sigBytes/(this.blockSize*4);r?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,o=Math.min(e*4,this._data.sigBytes);if(e){for(let a=0;a<e;a+=this.blockSize)this._doProcessBlock(this._data.words,a);n=this._data.words.splice(0,e),this._data.sigBytes-=o}return new m(n,o)}}class M extends T{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const N=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],P=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],_=[];class W extends M{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new m([...N])}_doProcessBlock(r,n){const t=this._hash.words;let e=t[0],o=t[1],a=t[2],c=t[3],i=t[4],l=t[5],u=t[6],f=t[7];for(let h=0;h<64;h++){if(h<16)_[h]=r[n+h]|0;else{const g=_[h-15],d=(g<<25|g>>>7)^(g<<14|g>>>18)^g>>>3,y=_[h-2],A=(y<<15|y>>>17)^(y<<13|y>>>19)^y>>>10;_[h]=d+_[h-7]+A+_[h-16]}const B=i&l^~i&u,S=e&o^e&a^o&a,x=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),w=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),b=f+w+B+P[h]+_[h],p=x+S;f=u,u=l,l=i,i=c+b|0,c=a,a=o,o=e,e=b+p|0}t[0]=t[0]+e|0,t[1]=t[1]+o|0,t[2]=t[2]+a|0,t[3]=t[3]+c|0,t[4]=t[4]+i|0,t[5]=t[5]+l|0,t[6]=t[6]+u|0,t[7]=t[7]+f|0}finalize(r){super.finalize(r);const n=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(t+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function $(s){return new W().finalize(s).toString(D)}function E(s,r={}){const n=typeof s=="string"?s:O(s,r);return $(n).slice(0,10)}function q(s,r,n){const[t={},e]=typeof r=="string"?[{},r]:[r,n],o=t.key||E([e,k(t.baseURL),typeof s=="string"?s:"",k(t.params||t.query)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const a=o===e?"$f"+o:o,c=U(()=>{let d=s;return typeof d=="function"&&(d=d()),k(d)}),{server:i,lazy:l,default:u,transform:f,pick:h,watch:B,immediate:S,...x}=t,w=v({...x,cache:typeof t.cache=="boolean"?void 0:t.cache}),b={server:i,lazy:l,default:u,transform:f,pick:h,immediate:S,watch:[w,c,...B||[]]};let p;return C(a,()=>{var y;return(y=p==null?void 0:p.abort)==null||y.call(p),p=typeof AbortController<"u"?new AbortController:{},typeof c.value=="string"&&c.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(c.value,{signal:p.signal,...w})},b)}export{q as u};
