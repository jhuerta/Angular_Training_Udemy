export class LogActionService{
    activated: number = 0;
    deactivated: number = 0;

    newUserActivated(){
        this.activated++;
        console.log(`Users activated: ${this.activated}`);
    }

newUserDeactivated(){
        this.deactivated++;
        console.log(`Users deactivated: ${this.deactivated}`);
    }
}