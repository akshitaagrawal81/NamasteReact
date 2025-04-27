import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us page test case", ()=> {

    it("should load heading of contact us page", ()=> {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    
    })
    
    it("should load button inside contact page", ()=> {
        render(<Contact />);
    
        const button = screen.getByRole("button");
        
        expect(button).toBeInTheDocument();
    })
    
    it("should load input text inside contact page", ()=> {
        render(<Contact />);
    
        const input = screen.getByPlaceholderText("name");
    
        expect(input).toBeInTheDocument();
    })
    
    it("should load 2 input text boxes in contact page", ()=> {
        render(<Contact />);
    
        const inputBox = screen.getAllByRole("textbox");
    
        expect(inputBox.length).toBe(2);
    })

})
