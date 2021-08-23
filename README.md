# TPP
Small Plugin which makes workflows in Trustpilot a bit easier

## Getting Started 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jonas-bautzmann/TPP.git
   ```
2. Install packages
   ```sh
   yarn install
   ```
3. Start development server
   ```sh
   yarn start
   ```
4. Open [Trustpilot Reviews Page](https://businessapp.b2b.trustpilot.com/reviews/)
5. Run js snipped
   ```js
   var script = document.createElement("script"); 
   script.setAttribute("src","http://localhost:8080/bundle.js");
   document.head.appendChild(script); 
   ```


## Links

- [GitHub Page](https://jonas-bautzmann.github.io/TPP)
- [Trustpilot Reviews Page](https://businessapp.b2b.trustpilot.com/reviews/)
