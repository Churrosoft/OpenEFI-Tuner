
int rpm,rpm1,temp,temp1;
bool rpm2,temp2;

void setup(){
    Serial.begin(115200);
}

void loop(){
    rpm2 = true;
    temp2 = true;
    rpm =  random(750, 7500);
    temp = random(-15, 130);
     do {
        RPM();
        TEMP();
    }while (rpm2 || temp); 
    delay(150);
    rpm = 0,rpm1 = 0,temp1 = 0;
    temp = 0;
}

void RPM(){
    if(rpm > rpm1 && rpm2 == true){
        rpm1 = rpm1 + 50;
        Serial.println( ("RPM " + (String) rpm1) );
    }else{
        rpm2 = false;
        rpm1 = 0;
    }
}

void TEMP(){
    if(temp > temp1 && temp2 == true){
        temp1 = temp1 + 5;
        Serial.println( ("TEMP " + (String) temp1) );
    }else{
        temp2 = false;
        temp1 = 0;
    }
}