function specialNumbers (input){
    //let age = Number(input[0]);
    //let gender = input[1];

    let n = Number(input[0]);
    let result = '';

            for (let l = 1; l <=9; l++)
            {
                for (let j = 1; j <=9; j++)
                {
                    for (let k = 1; k <= 9; k++)
                    {
                        for (let i = 1; i <=9; i++)
                        {
                            if (n % l === 0 && n % j === 0 && n % k === 0 && n % i === 0)
                            {
                            result += l.toString()+j.toString()+k.toString()+i.toString()+' ';
                            
                        }
                        
                    }
                }
            }
        }
        console.log(result);

}
specialNumbers (["16"])