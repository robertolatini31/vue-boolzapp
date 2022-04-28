const app = new Vue ({
    el: '#app',
    data: {
        activeChat: 0,
        newMessage: '',
        finder: '',
        writingCheck: false,
        onlineCheck: false,
        listAphorisms: [
            'Le risposte sincere non sono mai nette né rapide',
            'Il talento vero è possedere le risposte quando ancora non esistono le domande',
            'Mi dispiace, le mie risposte sono limitate. Devi farmi le domande giuste',
            'Vi sono risposte che non avrei la forza di ascoltare e perciò evito di porre le domande',
            'Poni le domande giuste se stai cercando le risposte giuste'
        ],
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        bannerSingleMessage: false,
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        bannerSingleMessage: false,
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        bannerSingleMessage: false,
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    },
    methods: {
        activeMyChat(index) {
            this.activeChat = index;
        },
        addMessage() {
            const options = { year: "numeric", month: "2-digit", day: "2-digit",};
            const newDate = new Date().toLocaleDateString(undefined, options);
            const newTime = new Date().toLocaleTimeString();
            let newMessageSpaceOnly = this.newMessage;
            // console.log(newDate, newTime);
            if (newMessageSpaceOnly.length>0 && newMessageSpaceOnly.replace(/\s/g, '').length!=0) {
                const objNewMessage = {
                    bannerSingleMessage: false,
                    date: newDate + ' ' + newTime, 
                    message: this.newMessage,
                    status: 'sent'
                }
                this.contacts[this.activeChat].messages.push(objNewMessage);
                this.newMessage = '';
                this.writingCheck = true;
                let self = this;
                setTimeout(function () {
                    const options = { year: "numeric", month: "2-digit", day: "2-digit",};
                    const newDate = new Date().toLocaleDateString(undefined, options);
                    const newTime = new Date().toLocaleTimeString();
                    // console.log(newDate, newTime);
                    const newAnswer = self.listAphorisms[self.getRndInt(0, self.listAphorisms.length)];
                    const objNewMessage = {
                        bannerSingleMessage: false,
                        date: newDate + ' ' + newTime, 
                        message: newAnswer,
                        status: 'received'
                    }
                    self.writingCheck = false;
                    self.onlineCheck = true;
                    self.contacts[self.activeChat].messages.push(objNewMessage);
                }, 3000)
                setInterval(function(){
                    self.onlineCheck = false;
                }, 5000)
            }
        },
        showLastMessage(index){
            let position = this.contacts[index].messages.length - 1;
            
            while (position >= 0) {
                if (this.contacts[index].messages[position].message.length !== 0) {
                    return this.contacts[index].messages[position].message;
                }
                position--;
            }
        },
        showLastMessageTime(index) {
            const position = this.contacts[index].messages.length - 1;
            return this.contacts[index].messages[position].date.substr(10, 6);
        },
        showTimeMessage(index) {
            return this.contacts[this.activeChat].messages[index].date.substr(10, 6);
        },
        showLastAccess(){
            let lastAccessTime = 'sconosciuto';
            this.contacts[this.activeChat].messages.forEach(message => {
                if (message.status === 'received') {
                    lastAccessTime = message.date.substr(10, 6);
                }
            });
            return lastAccessTime;
        },
        findContact(){
            this.contacts.forEach(contact => {
                if (!contact.name.toLowerCase().includes(this.finder.toLowerCase()) && this.finder.length !== 0) {
                    contact.visible = false;
                } else {
                    contact.visible = true;
                }
            });
        },
        bannerSingle(index) {
            if (this.contacts[this.activeChat].messages[index].bannerSingleMessage) {
              // console.log('era true metto false');
              this.contacts[this.activeChat].messages[index].bannerSingleMessage = false;
            } else {
              // console.log('era false metto true');
              this.contacts[this.activeChat].messages[index].bannerSingleMessage = true;
            }
        },
        deleteMessage(index) {
            this.contacts[this.activeChat].messages[index].message = '';
        },
        getRndInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },
    }
})



