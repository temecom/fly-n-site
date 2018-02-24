//tealium universal tag - utag.890 ut4.0.201612061529, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.at_qsp_delim="/";u.lb_qsp_delim="&";u.kvp_delim="=";u.tagtype="ace-tag";u.acct="123792";u.site="";u.mnum="1516";u.betr="";u.betq="";if(u.tagtype=="ace-tag"){u.base_url="https://secure.ace-tag.advertising.com/action/type="+u.acct+"/bins=1/rich=0/mnum="+u.mnum+"/logs=0/";}else{u.base_url="//secure.leadback.advertising.com/adcedge/lb?site="+u.site+"&srvc=1&";}
if(u.tagtype=="ace-tag"&&u.site!=""){u.base_url+="site="+u.site+"/";}
if(u.betr!=""){u.base_url+="betr="+u.betr+(u.tagtype=="ace-tag"?u.at_qsp_delim:u.lb_qsp_delim);}
if(u.betq!=""){u.base_url+="betq="+u.betq+(u.tagtype=="ace-tag"?u.at_qsp_delim:u.lb_qsp_delim);}
u.map={"order_total_usd":"xssale","order_id":"xsmemid","oc_customer_type":"xsstr1","order_total_new_usd":"xsstr2"};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){c.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]))}}}
u.img=new Image();u.img.src=u.base_url+c.join(u.tagtype=="ace-tag"?u.at_qsp_delim:u.lb_qsp_delim);}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('890','godaddy.godaddy');}catch(e){}
