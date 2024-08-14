1. this in the global context

![alt text](<Screenshot from 2024-08-14 14-59-12.png>)

* this ကို global context (function အပြင်မှာ) မှာ သုံးရင်, JavaScript ရဲ့ global object ကို ညွှန်းတယ်။
* Browser ပေါ်မှာ run လိုက်ရင်, this က window object ကို ညွှန်းတယ်။
* ဒါကြောင့် console မှာ window object ဟာ ပြသလိမ့်မယ်။

2. this in a function

![alt text](<Screenshot from 2024-08-14 15-02-34.png>)

* this ကို function အတွင်းမှာ သုံးရင်, function ကို ဘယ်လိုခေါ်ဆိုတယ်ဆိုတဲ့အပေါ်မှာ မူတည်ပြီး this ရဲ့ တန်ဖိုးက သွေဖီနိုင်တယ်။
* Global context မှာ helloThis() ကို ခေါ်ဆိုတဲ့အခါ, this က global object ကို ညွှန်းတယ်။
* Browser ပေါ်မှာ run လိုက်ရင်, console မှာ "Inside this function, this is [object Window]" ဟာ ပြသလိမ့်မယ်။

3. this in an object method

![alt text](<Screenshot from 2024-08-14 15-06-36.png>)

* this ကို object method (object အတွင်းမှာ function သုံးတဲ့အခါ) မှာ သုံးရင်, this က function ကိုပိုင်တဲ့ object ကို ညွှန်းတယ်။
* ageTenYears ဆိုတဲ့ method ကို child object မှာ ခေါ်ဆိုတဲ့အခါ, this က child object ကို ညွှန်းတယ်။
* this.age က child.age (10) ဖြစ်တယ်။ 10 ကို 10 တိုးပြီဆို 20 ဖြစ်တယ်။
* Console မှာ 20 ဆိုပြီး ပြသလိမ့်မယ်။

4. this in a nested object method

![alt text](<Screenshot from 2024-08-14 15-10-54.png>)

* this ကို nested object method မှာ သုံးတဲ့အခါ, this က current method ကို ပိုင်တဲ့ object ကို ညွှန်းတယ်။
* investmentGrowth method ကို investment object မှာ ခေါ်ဆိုတဲ့အခါ, this က investment object ကို ညွှန်းတယ်။
* this.initialInvestment က investment.initialInvestment (5000) ဖြစ်တယ်။
5000 ကို 1.15 နဲ့ ပေါင်းပြီဆို 5750 ဖြစ်တယ်။
Console မှာ 5750 ဆိုပြီး ပြသလိမ့်မယ်။

5. Function and method calls

![alt text](<Screenshot from 2024-08-14 15-13-52.png>)

* helloThis() function ကို ခေါ်ဆိုတဲ့အခါ, "Inside this function, this is [object Window]" ဆိုပြီး console မှာ ပြလိမ့်မယ်။
* child.ageTenYears() method ကို ခေါ်ဆိုတဲ့အခါ, 20 ဆိုပြီး console မှာ ပြလိမ့်မယ်။
* investor.investment.investmentGrowth() method ကို ခေါ်ဆိုတဲ့အခါ, 5750 ဆိုပြီး console မှာ ပြလိမ့်မယ်။

# Summary
* Global context မှာ this က window object ကို ညွှန်းတယ်။
* Function context မှာ this က function ကို ခေါ်ဆိုတဲ့နေရာပေါ်မူတည်ပြီး ညွှန်းတယ်။
* Object method context မှာ this က method ကို ပိုင်တဲ့ object ကို ညွှန်းတယ်။