import initializer from 'simple-auth-cookie-store/initializer';
import Store from 'simple-auth-cookie-store/stores/cookie';

describe('the "simple-auth-cookie" initializer', function() {
  it('has the correct name', function() {
    expect(initializer.name).to.eq('simple-auth-cookie-store');
  });

  it('runs before the "simple-auth" initializer', function() {
    expect(initializer.before).to.eq('simple-auth');
  });

  describe('the initialize method', function() {
    beforeEach(function() {
      this.container = { register: function() {} };
      sinon.spy(this.container, 'register');
    });

    it('registers the store with the Ember container', function() {
      initializer.initialize(this.container);
      var spyCall = this.container.register.getCall(0);

      expect(spyCall.args[0]).to.eql('simple-auth-session-store:cookie');
      expect(spyCall.args[1]).to.eql(Store);
    });
  });
});
