angular.module('myApp')
    .component('headerComponent', {
        templateUrl: '../views/components/headerComponent.html',
        controller: function headerCtrl(){
            var self = this;

            // SHOW HIDE MODAL BACKGROUND
            self.toggleMenu = true;
            // TOGGLE CLASS FOR MENU ANIMATION
            self.isActive = false;

            self.openMenu = function(){
                self.toggleMenu = !self.toggleMenu;
                self.isActive = !self.isActive;
            }
        }
    })
