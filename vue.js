const { createApp } = Vue

  createApp({
    data() {
      return {
        hist:'',
        digit:'0',
        num1:'',
        num2:'',
        op:'',
        floatD:false,
      }
    },
    methods:{
        stroke(key){
            switch(key){
                case '0':{
                    if(this.op=='' && this.digit!='0'){
                        this.num1=this.num1+'0'
                        this.digit=this.digit+'0'
                    }
                    else if(this.digit!='0'){
                        this.num2=this.num2+'0'
                        this.digit=this.digit+'0'
                    }
                }
                    break;
                case '1':{
                    if(this.op==''){
                        if(this.digit=='0')
                            this.digit='1'
                        else
                            this.digit=this.digit+'1'
                        this.num1=this.num1+'1'
                    }
                    else{
                        if(this.digit=='0')
                            this.digit='1'
                        else
                            this.digit=this.digit+'1'
                        this.num2=this.num2+'1'
                    }
                }
                    break;
                case '2':{
                    if(this.op==''){
                        if(this.digit=='0')
                            this.digit='2'
                        else
                            this.digit=this.digit+'2'
                        this.num1=this.num1+'2'
                    }
                    else{
                        if(this.digit=='0')
                            this.digit='2'
                        else
                            this.digit=this.digit+'2'
                        this.num2=this.num2+'2'
                    }
                }
                    break;
                case '3':{
                    if(this.op==''){
                        if(this.digit=='0')
                            this.digit='3'
                        else
                            this.digit=this.digit+'3'
                        this.num1=this.num1+'3'
                    }
                    else{
                        if(this.digit=='0')
                            this.digit='3'
                        else
                            this.digit=this.digit+'3'
                        this.num2=this.num2+'3'
                    }
                }
                    break;
                case '4':{
                    if(this.op==''){
                        if(this.digit=='0')
                            this.digit='4'
                        else
                            this.digit=this.digit+'4'
                        this.num1=this.num1+'4'
                    }
                    else{
                        if(this.digit=='0')
                            this.digit='4'
                        else
                            this.digit=this.digit+'4'
                        this.num2=this.num2+'4'
                    }
                }
                    break;
                case '5':{
                    if(this.op==''){
                        if(this.digit=='0')
                            this.digit='5'
                        else
                            this.digit=this.digit+'5'
                        this.num1=this.num1+'5'
                    }
                    else{
                        if(this.digit=='0')
                            this.digit='5'
                        else
                            this.digit=this.digit+'5'
                        this.num2=this.num2+'5'
                    }
                }
                    break;
                case '6':{
                    if(this.op==''){
                        if(this.digit=='0')
                            this.digit='6'
                        else
                            this.digit=this.digit+'6'
                        this.num1=this.num1+'6'
                    }
                    else{
                        if(this.digit=='0')
                            this.digit='6'
                        else
                            this.digit=this.digit+'6'
                        this.num2=this.num2+'6'
                    }
                }
                    break;
                case '7':{
                    if(this.op==''){
                        if(this.digit=='0')
                            this.digit='7'
                        else
                            this.digit=this.digit+'7'
                        this.num1=this.num1+'7'
                    }
                    else{
                        if(this.digit=='0')
                            this.digit='7'
                        else
                            this.digit=this.digit+'7'
                        this.num2=this.num2+'7'
                    }
                }
                    break;
                case '8':{
                    if(this.op==''){
                        if(this.digit=='0')
                            this.digit='8'
                        else
                            this.digit=this.digit+'8'
                        this.num1=this.num1+'8'
                    }
                    else{
                        if(this.digit=='0')
                            this.digit='8'
                        else
                            this.digit=this.digit+'8'
                        this.num2=this.num2+'8'
                    }
                }
                    break;
                case '9':{
                    if(this.op==''){
                        if(this.digit=='0')
                            this.digit='9'
                        else
                            this.digit=this.digit+'9'
                        this.num1=this.num1+'9'
                    }
                    else{
                        if(this.digit=='0')
                            this.digit='9'
                        else
                            this.digit=this.digit+'9'
                        this.num2=this.num2+'9'
                    }
                }
                    break;
                case '.':{
                    if(this.op=='' && !this.floatD){
                        this.num1=this.num1+'.'
                        this.digit=this.digit+'.'
                        this.floatD=true;
                    }
                    else if(!this.floatD){
                        this.num2=this.num2+'.'
                        this.digit=this.digit+'.'
                        this.floatD=true;
                    }
                }
                    break;
                case 'AC':{
                    if(this.op==''){
                        this.num1=''
                        this.digit='0'
                        this.floatD=false;
                    }
                    else{
                        if(this.num2==''){
                            this.hist=''
                            this.op=''
                        }
                        this.num2=''
                        this.digit='0'
                        this.floatD=false;
                    }
                }
                    break;
                case 'x':{
                    if(this.op==''){
                        this.op='mult'
                        this.hist=this.digit+'x'
                        this.digit=''
                        this.floatD=false
                    }
                    else{
                        if(this.num2==''||this.num2=='-'){
                            this.op='mult'
                            this.num2=''
                            this.digit='0'
                            this.hist=this.hist.slice(0,(this.hist.length-1))+'x'
                            break
                        }
                        this.num1 = this.solve().toString()
                        this.hist=this.num1
                        this.op='mult'
                        this.num2=''
                        this.floatD=false
                        this.digit='0'
                    }
                }
                    break;
                case '-':{
                    if(this.op==''){
                        this.op='sub'
                        this.hist=this.digit+'-'
                        this.digit='0'
                        this.floatD=false
                    }
                    else{
                        if(this.num2==''||this.num2=='-'){
                            this.num2='-'
                            this.digit='-'
                            break
                        }
                        this.num1 = this.solve().toString()
                        this.hist=this.num1
                        this.op='sub'
                        this.num2=''
                        this.floatD=false
                        this.digit='0'
                    }
                }
                    break;
                case '+':{
                    if(this.op==''){
                        this.op='sum'
                        this.hist=this.digit+'+'
                        this.digit='0'
                        this.floatD=false
                    }
                    else{
                        if(this.num2==''||this.num2=='-'){
                            this.op='sum'
                            this.num2=''
                            this.digit='0'
                            this.hist=this.hist.slice(0,(this.hist.length-1))+'+'
                            break
                        }
                        this.num1 = this.solve().toString()
                        this.hist=this.num1
                        this.op='sum'
                        this.num2=''
                        this.floatD=false
                        this.digit='0'
                    }
                }
                    break;
                case '/':{
                    if(this.op==''){
                        this.op='div'
                        this.hist=this.digit+'/'
                        this.digit='0'
                        this.floatD=false
                    }
                    else{
                        if(this.num2==''||this.num2=='-'){
                            this.op='div'
                            this.num2=''
                            this.digit='0'
                            this.hist=this.hist.slice(0,(this.hist.length-1))+'/'
                            break
                        }
                        this.num1 = this.solve().toString()
                        this.hist=this.num1
                        this.op='div'
                        this.num2=''
                        this.floatD=false
                        this.digit='0'
                    }
                }
                    break;
                case '=':{
                    this.digit = this.solve().toString()
                    this.num1=this.digit
                    this.op=''
                    this.num2=''
                    this.floatD=false
                    this.hist=''
                }
                    break;
                                                        
                    
            }
        },
        solve(){
            switch(this.op){
                case 'mult':
                    return parseFloat(this.num1)*parseFloat(this.num2)
                    break;
                case 'div':
                    return parseFloat(this.num1)/parseFloat(this.num2)
                    break;
                case 'sum':
                    return parseFloat(this.num1)+parseFloat(this.num2)
                    break;
                case 'sub':
                    return parseFloat(this.num1)-parseFloat(this.num2)
                    break;
                default: return
            }
        }
    }
  }).mount('#app');

