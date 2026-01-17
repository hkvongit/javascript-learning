// INTERFACE SEGREGATION PRINCIPLE (ISP)
// Goal: Clients should not be forced to depend on methods they do not use.

// BASE CLASS: Contains only common properties shared by all machines.
class Machine {
  constructor(name) {
    this.name = name;
  }
}

// SEGREGATED INTERFACES (Feature Objects)
// Instead of one giant "Machine" interface with print, scan, and copy,
// we break them into small, specific "interfaces" or plugins.

const printFeatObj = {
  print() {
    console.log(`${this.name} can print`);
  },
};

const scanFeatObj = {
  scan() {
    console.log(`${this.name} can scan`);
  },
};

const copyFeatObj = {
  copy: function () {
    console.log(`${this.name} can copy`);
  },
};

// IMPLEMENTATION 1: EconomicPrinter
// This client only needs printing. By using ISP, it is NOT forced
// to have empty or throwing-error scan() and copy() methods.
class EconomicPrinter extends Machine {
  constructor(name) {
    super(name);
    // Only "implements" the printing interface
    Object.assign(this, printFeatObj);
  }
}

// IMPLEMENTATION 2: AllInMachine
// This client needs everything. It can "implement" multiple small interfaces
// to build its full functionality.
class AllInMachine extends Machine {
  constructor(name) {
    super(name);
    // Implements all three interfaces
    Object.assign(this, printFeatObj, copyFeatObj, scanFeatObj);
  }
}

// TESTING THE PRINCIPLE
const cheapPrinter = new EconomicPrinter("Canon Printer");
cheapPrinter.print(); // Works
// cheapPrinter.scan(); // ⚠️ Error! This is GOOD - ISP prevents unused methods from cluttering the object.

const expensiveMachine = new AllInMachine("Xerox Machine");
expensiveMachine.print(); // Works
expensiveMachine.scan(); // Works
expensiveMachine.copy(); // Works
