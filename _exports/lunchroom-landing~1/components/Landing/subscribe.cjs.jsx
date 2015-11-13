module.exports = function (Context) {
  // TODO: Remove this once we can inject 'React' automatically at build time.
  var React = Context.REACT;
  return (
    <form action="#" className="cta-form form">

      <div className="form-group">

        <div data-component-view="form">
          <div className="email-wrapper">
            <input type="email" name="email" data-component-prop="email" data-component-prop-target="email"/>
          </div>
          <div className="submit-wrapper">
            <button className="btn btn-primary" data:component:action="subscribe">Get notified</button>
          </div>
        </div>
        <div data-component-view="sent">
          <p className="form-explanation">Check your email to confirm your subscription!</p>
        </div>

      </div>
      <p className="form-explanation">Enter your email to receive daily menus when we launch!</p>
    
    </form>
  );
}