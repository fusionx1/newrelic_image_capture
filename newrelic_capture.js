var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1094, height: 665};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://login.newrelic.com/login');
   casper.waitForSelector("form#login input[name='login[email]']",
       function success() {
           test.assertExists("form#login input[name='login[email]']");
           this.click("form#login input[name='login[email]']");
       },
       function fail() {
           test.assertExists("form#login input[name='login[email]']");
   });
   casper.waitForSelector("input[name='login[email]']",
       function success() {
           this.sendKeys("input[name='login[email]']", "**************");
       },
       function fail() {
           test.assertExists("input[name='login[email]']");
   });
   casper.waitForSelector("form#login input[name='login[password]']",
       function success() {
           test.assertExists("form#login input[name='login[password]']");
           this.click("form#login input[name='login[password]']");
       },
       function fail() {
           test.assertExists("form#login input[name='login[password]']");
   });
   casper.waitForSelector("input[name='login[password]']",
       function success() {
           this.sendKeys("input[name='login[password]']", "*************");
       },
       function fail() {
           test.assertExists("input[name='login[password]']");
   });
   casper.waitForSelector("form#login input[type=submit][value='Sign in']",
       function success() {
           test.assertExists("form#login input[type=submit][value='Sign in']");
           this.click("form#login input[type=submit][value='Sign in']");
           this.capture('screenshots/final_newrelic_login.png', {
               top: 0,
               left: 0,
               width: casper.evaluate(function () {
                   return document.body.scrollWidth;
               }),
               height: casper.evaluate(function () {
                   return document.body.scrollHeight;
               })
           }, {
               format: 'png',
               quality: 100
           });
       },
       function fail() {
           test.assertExists("form#login input[type=submit][value='Sign in']");
   });


   /* submit form */
   casper.waitForSelector(x("//a[normalize-space(text())='wpmanila (dev)']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='wpmanila (dev)']"));
           this.click(x("//a[normalize-space(text())='wpmanila (dev)']"));
           this.capture('screenshots/final_newrelic_overview.png', {
               top: 0,
               left: 0,
               width: casper.evaluate(function () {
                   return document.body.scrollWidth;
               }),
               height: casper.evaluate(function () {
                   return document.body.scrollHeight;
               })
           }, {
               format: 'png',
               quality: 100
           });
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='wpmanila (dev)']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='SLA']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='SLA']"));
           this.click(x("//a[normalize-space(text())='SLA']"));
           this.capture('screenshots/final_newrelic_sla.png', {
               top: 0,
               left: 0,
               width: casper.evaluate(function () {
                   return document.body.scrollWidth;
               }),
               height: casper.evaluate(function () {
                   return document.body.scrollHeight;
               })
           }, {
               format: 'png',
               quality: 100
           });
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='SLA']"));
   });
   casper.then(function() {
       this.mouse.click(573, 250);
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Transactions']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Transactions']"));
           this.click(x("//a[normalize-space(text())='Transactions']"));
           this.capture('screenshots/final_newrelic_transactions.png', {
               top: 0,
               left: 0,
               width: casper.evaluate(function () {
                   return document.body.scrollWidth;
               }),
               height: casper.evaluate(function () {
                   return document.body.scrollHeight;
               })
           }, {
               format: 'png',
               quality: 100
           });
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Transactions']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Hooks']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Hooks']"));
           this.click(x("//a[normalize-space(text())='Hooks']"));
           this.capture('screenshots/final_newrelic_hooks.png', {
               top: 0,
               left: 0,
               width: casper.evaluate(function () {
                   return document.body.scrollWidth;
               }),
               height: casper.evaluate(function () {
                   return document.body.scrollHeight;
               })
           }, {
               format: 'png',
               quality: 100
           });
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Hooks']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Plugins and themes']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Plugins and themes']"));
           this.click(x("//a[normalize-space(text())='Plugins and themes']"));
           this.capture('screenshots/final_newrelic_plugins.png', {
               top: 0,
               left: 0,
               width: casper.evaluate(function () {
                   return document.body.scrollWidth;
               }),
               height: casper.evaluate(function () {
                   return document.body.scrollHeight;
               })
           }, {
               format: 'png',
               quality: 100
           });
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Plugins and themes']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Databases']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Databases']"));
           this.click(x("//a[normalize-space(text())='Databases']"));
           this.capture('screenshots/final_newrelic_databases.png', {
               top: 0,
               left: 0,
               width: casper.evaluate(function () {
                   return document.body.scrollWidth;
               }),
               height: casper.evaluate(function () {
                   return document.body.scrollHeight;
               })
           }, {
               format: 'png',
               quality: 100
           });
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Databases']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='External services']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='External services']"));
           this.click(x("//a[normalize-space(text())='External services']"));
           this.capture('screenshots/final_newrelic_external_calls.png', {
               top: 0,
               left: 0,
               width: casper.evaluate(function () {
                   return document.body.scrollWidth;
               }),
               height: casper.evaluate(function () {
                   return document.body.scrollHeight;
               })
           }, {
               format: 'png',
               quality: 100
           });
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='External services']"));
   });

   casper.run(function() {test.done();});
});
