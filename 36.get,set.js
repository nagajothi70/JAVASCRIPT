 class Temp {
                 constructor(temp){
                    this._temp=temp
                 }
            
            get Temp(){ // LOWER CASE OR UPPER CAN BE USED
                return `temperature ${this._temp} degree celsius`
            };
            set Temp(temp){
                if(temp>100){
                    temp=100;
                }
                this._temp=temp;

            };
        }
        let temp1= new Temp(25)
        temp1.Temp=150;
        console.log(temp1.Temp)
