describe('login component', function () {
    var $componentController;

    beforeEach(function () {
        module('app');
        inject(function (_$componentController_) {
            $componentController = _$componentController_;
        });

    });

    it('should have controller defined', function () {
        var controller = $componentController('login');
        expect(controller).toBeDefined
    });

    it('should disable submit button if username and/or password missing', function () {
        
    });

    it('should redirect if login successful');
    it('should have error message defined if invalid credentials');

});