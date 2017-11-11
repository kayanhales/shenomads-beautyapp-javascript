describe( "Beauty App Validator", function () {
    describe( "skin care validator", function () {
      it("validates whether user chose skin care", function () {
        expect(makeASelection("1")).toEqual("You've chosen skincare.");
      });
    });
    describe( "nail art validator", function () {
      it("validates whether user chose nail art", function () {
        expect(makeASelection("2")).toEqual("You've chosen nail art.");
      });
    });
    describe( "makeup validator", function () {
      it("validates whether user chose makeup", function () {
        expect(makeASelection("3")).toEqual("You've chosen makeup.");
      });
    });
    describe( "inappropriate value", function () {
      it("validates whether user chose an invalid value", function () {
        expect(makeASelection("4")).toEqual("You didn't pick an appropriate value.");
      });
    });
});
