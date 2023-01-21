class Class {
    constructor(race, ability){
        this.race = race;
        this.ability = ability;
    }
    describe(){
        return `${this.race} has ${this.ability}.`;
    }
}

class Clan {
    constructor(name){
        this.name = name;
        this.clanMembers = [];
    } 
    
    addClanMember(clanMember){
        if (clanMember instanceof Class){
            this.clanMembers.push(clanMember);
        } else {
        throw new Error(`You can only add an instance of clan member. Argument is not a clan member: ${clanMember}`);
    }
}

describe(){
    return `${this.clan} has ${this.clanMembers.length} clan members.`;
}
}


class Menu{
    constructor (){
        this.clans = [];
        this.selectedClan = null;
    }

    start(){
        let selection = this.showMainMenuOptions();

        while (selection != 0){
            switch (selection){
                case '1':
                    this.createClan();
                    break;
                case '2':
                    this.viewClan();
                    break;
                case '3':
                    this.deleteClan();
                    break;
                case '4':
                    this.displayClan();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new clan
        2) view clan
        3) delete clan
        4) display all clans
        `);
    }
showClanMenueOptions(clanInfo){
    return prompt(`
    0) back
    1) create class
    2) delete class
    ----------------------
    ${clanInfo}
    `); 
}

    displayClan(){
        let clanString = '';
        for (let i = 0; i < this.clans.length; i++){
            clanString += i + ') ' + this.clans[i].name + '\n';
        }
        alert(clanString);
    }
    createClan(){
        let name = prompt('Enter name for the new clan:');
        this.clans.push(new Clan(name));
    }
    viewClan(){
        let index = prompt('Enter the place of the clan you wish to view');
        if(index > -1 && index < this.clans.length){
            this.selectedClan = this.clans[index];
            let description = 'Clan Name: ' + this.selectedClan.race + '\n';
            for (let i = 0; i < this.selectedClan.clanMembers.length; i++){
                description += i + ') ' + this.selectedClan.clanMembers[i].race
                 + ' - ' + this.selectedClan.clanMembers[i].ability + '\n';
            }
            let selection = this.showClanMenueOptions(description);
            switch (selection){
                case '1':
                    this.createClass();
                    break;
                case '2':
                    this.deleteClass();
            }
        }
    }
    deleteClan(){
        let index = prompt('Enter the place of the clan you wish to delete:');
        if (index > -1 && index < this.clans.length) {
            this.clans.splice(index, 1);
        }
    }
    createClass(){
        let race = prompt('Enter race for new Class:');
        let ability = prompt('Enter ability for new Class:');
        this.selectedClan.clanMembers.push(new Class(race, ability));
    }

    deleteClass(){
        let index = prompt('Enter the place of the class you wish to delete:');
        if(index > -1 && index < this.selectedClan.clanMembers.length){
            this.selectedClan.clanMembers.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();