window.location.href = "www.naver.com";

mounted(){
    var query = this.searchToObject()
    var params = new URLSearchParams();
    var urls = 'https://'+query.mall_id+'.cafe24api.com/api/v2/oauth/authorize'
    params.append('response_type','code')
    params.append('client_id',"4X39PT10HBbt3fZqmetweV")
    params.append('state',"xyz")
    params.append('redirect_uri',"https://webrot360.tk:8080/#/web360")
    params.append('scope',"mall.read_product,mall.write_product,mall.read_design,mall.write_design")
    console.log(urls + "?" + params.toString());
    window.location.href = urls + "?" + params.toString(); //params.toString() 는 쿼리를 만들어 줍니다.

},methods:{
  searchToObject(){  //해당 코드는 window.location.search를 정리된 객체로 만들어 줍니다. 
        var pairs = window.location.search.substring(1).split("&"),
            obj = {},
            pair,
            i;

        for ( i in pairs ) {
            if ( pairs[i] === "" ) continue;

             pair = pairs[i].split("=");
              obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
          }

        return obj;
      }
  }