var 
point=function(W,D,M,HTML,hash,view,arg,LL,i,index,Regex,key,point){
	HTML=D.getElementsByTagName('html')[0];
	Regex=[];
	key='!';
	onhashchange=function(){
		point.hash=hash=location.hash.substring(key.length+1);

		arg=hash.split('/');

		i=Regex.length;
		while(i--)
			if(LL=hash.match(Regex[i])){
				arg[0]=Regex[i];
				break;
			}

		if(!point[arg[0]])
			arg[0]=index;
		
		if(point.pop)
			point.pop.apply(W,arg);

		point.lash=view=arg.shift();

		HTML.setAttribute('view',view);
         if(point[view]){
         	point[view].apply(W,arg);
         }else{
         	return;
         }
		
	};
	point={
		init:function(o){

			if(o.key!==undefined)
				key=o.key;

			index=o.index||'V';

			if(o.pop&&typeof o.pop=='function')
				point.pop=o.pop;

			onhashchange();

			return this
		},
		reg:function(r,u){
			if(!r)
				return;

			if(u == undefined)
				u=function(){};

			if(r instanceof RegExp){
				point[r]=u;
				Regex.push(r);
			}else if(r instanceof Array){//数组注册
				for(var i in r){
					L=[].concat(r[i]).concat(u);
					this.reg.apply(this,L);
				}
			}else if(typeof r=='string'){
				if(typeof u=='function')
					point[r]=u;
				else if(typeof u=='string'&&point[u])
					point[r]=point[u];
			}	
			
			return this
		},
		V:function(){
			return this
		},
		go:function(u){
			location.hash='#'+key+u;
			return this
		}
	};
	return point;
}(this,document);