import {expect} from 'chai';
import { describe } from 'mocha';
import fs from 'fs';
import jsdom from 'jsdom';

describe("Our first test",()=>{
    it("should pass",()=>{
        expect(true).to.equal(true);
    });
});


describe("index.html",()=>{
    it("should return hellow pranav !",(done)=>{
        const file=fs.readFileSync("./src/index.html","utf-8");
        jsdom.env(file,(err,window)=>{
            const h1=window.document.getElementsByTagName("h1")[0];
            expect(h1.innerHTML).to.equal("Hellow Pranav !");
            done();
            window.close();
        });
    });
});