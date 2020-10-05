/*
 * HMPPS Offender Assessment API
 * OASys Data API.
 *
 * OpenAPI spec version: 2020-09-02
 * Contact: feedback@digital.justice.gov.uk
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HmppsOffenderAssessmentApi);
  }
}(this, function(expect, HmppsOffenderAssessmentApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SectionDto', function() {
      beforeEach(function() {
        instance = new HmppsOffenderAssessmentApi.SectionDto();
      });

      it('should create an instance of SectionDto', function() {
        // TODO: update the code to test SectionDto
        expect(instance).to.be.a(HmppsOffenderAssessmentApi.SectionDto);
      });

      it('should have the property assessmentId (base name: "assessmentId")', function() {
        // TODO: update the code to test the property assessmentId
        expect(instance).to.have.property('assessmentId');
        // expect(instance.assessmentId).to.be(expectedValueLiteral);
      });

      it('should have the property lowScoreAttentionNeeded (base name: "lowScoreAttentionNeeded")', function() {
        // TODO: update the code to test the property lowScoreAttentionNeeded
        expect(instance).to.have.property('lowScoreAttentionNeeded');
        // expect(instance.lowScoreAttentionNeeded).to.be(expectedValueLiteral);
      });

      it('should have the property questions (base name: "questions")', function() {
        // TODO: update the code to test the property questions
        expect(instance).to.have.property('questions');
        // expect(instance.questions).to.be(expectedValueLiteral);
      });

      it('should have the property refAssessmentVersionCode (base name: "refAssessmentVersionCode")', function() {
        // TODO: update the code to test the property refAssessmentVersionCode
        expect(instance).to.have.property('refAssessmentVersionCode');
        // expect(instance.refAssessmentVersionCode).to.be(expectedValueLiteral);
      });

      it('should have the property refSectionCode (base name: "refSectionCode")', function() {
        // TODO: update the code to test the property refSectionCode
        expect(instance).to.have.property('refSectionCode');
        // expect(instance.refSectionCode).to.be(expectedValueLiteral);
      });

      it('should have the property refSectionCrimNeedScoreThreshold (base name: "refSectionCrimNeedScoreThreshold")', function() {
        // TODO: update the code to test the property refSectionCrimNeedScoreThreshold
        expect(instance).to.have.property('refSectionCrimNeedScoreThreshold');
        // expect(instance.refSectionCrimNeedScoreThreshold).to.be(expectedValueLiteral);
      });

      it('should have the property refSectionVersionNumber (base name: "refSectionVersionNumber")', function() {
        // TODO: update the code to test the property refSectionVersionNumber
        expect(instance).to.have.property('refSectionVersionNumber');
        // expect(instance.refSectionVersionNumber).to.be(expectedValueLiteral);
      });

      it('should have the property sectionId (base name: "sectionId")', function() {
        // TODO: update the code to test the property sectionId
        expect(instance).to.have.property('sectionId');
        // expect(instance.sectionId).to.be(expectedValueLiteral);
      });

      it('should have the property sectionOgpRawScore (base name: "sectionOgpRawScore")', function() {
        // TODO: update the code to test the property sectionOgpRawScore
        expect(instance).to.have.property('sectionOgpRawScore');
        // expect(instance.sectionOgpRawScore).to.be(expectedValueLiteral);
      });

      it('should have the property sectionOgpWeightedScore (base name: "sectionOgpWeightedScore")', function() {
        // TODO: update the code to test the property sectionOgpWeightedScore
        expect(instance).to.have.property('sectionOgpWeightedScore');
        // expect(instance.sectionOgpWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property sectionOtherRawScore (base name: "sectionOtherRawScore")', function() {
        // TODO: update the code to test the property sectionOtherRawScore
        expect(instance).to.have.property('sectionOtherRawScore');
        // expect(instance.sectionOtherRawScore).to.be(expectedValueLiteral);
      });

      it('should have the property sectionOtherWeightedScore (base name: "sectionOtherWeightedScore")', function() {
        // TODO: update the code to test the property sectionOtherWeightedScore
        expect(instance).to.have.property('sectionOtherWeightedScore');
        // expect(instance.sectionOtherWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property sectionOvpRawScore (base name: "sectionOvpRawScore")', function() {
        // TODO: update the code to test the property sectionOvpRawScore
        expect(instance).to.have.property('sectionOvpRawScore');
        // expect(instance.sectionOvpRawScore).to.be(expectedValueLiteral);
      });

      it('should have the property sectionOvpWeightedScore (base name: "sectionOvpWeightedScore")', function() {
        // TODO: update the code to test the property sectionOvpWeightedScore
        expect(instance).to.have.property('sectionOvpWeightedScore');
        // expect(instance.sectionOvpWeightedScore).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));
