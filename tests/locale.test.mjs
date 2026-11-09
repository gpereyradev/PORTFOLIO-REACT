import { test } from 'node:test';
import assert from 'node:assert/strict';
import { detectLanguage, translate } from '../src/i18n/locale.js';
import { englishUI } from '../src/i18n/ui.en.js';
import { englishProjects } from '../src/i18n/projects.en.js';
import { projects } from '../src/data/projects.js';
test('language uses browser preference, regional variants, saved choice and Spanish fallback', () => {
  assert.equal(detectLanguage(null,['en-US','es-PE']),'en');
  assert.equal(detectLanguage(null,['es-PE','en']),'es');
  assert.equal(detectLanguage(null,['fr-FR','en-US']),'es');
  assert.equal(detectLanguage('en',['es-PE']),'en');
  assert.equal(detectLanguage('es',['en-GB']),'es');
  assert.equal(detectLanguage('fr',['en-GB']),'en');
  assert.equal(detectLanguage(null,[]),'es');
});
test('translation preserves source text and whitespace and leaves technology names intact', () => {
  assert.equal(translate('  VER PROYECTOS ','en',englishUI),'  VIEW PROJECTS ');
  assert.equal(translate('Sobre mí','es',englishUI),'Sobre mí');
  assert.equal(translate('React','en',englishUI),'React');
});
test('every project has English content for its complete reading flow', () => {
  for(const project of projects){
    const en=englishProjects[project.id];assert.ok(en,project.id);
    for(const key of ['label','summary','intro']) assert.ok(en[key],project.id+': '+key);
    for(const key of ['role','status','signal']) assert.ok(en.caseStudy[key],project.id+': '+key);
    if(!project.href){
      assert.ok(en.details.length,project.id+': details');
      for(const key of ['problem','decision','outcome','limit']) assert.ok(en.caseStudy[key],project.id+': '+key);
      assert.equal(en.caseStudy.decisions.length,project.caseStudy.decisions.length,project.id+': decisions');
      assert.equal(en.caseStudy.checks.length,project.caseStudy.checks.length,project.id+': checks');
      if(project.gallery)assert.equal(en.gallery.length,project.gallery.length,project.id+': gallery');
    }
  }
});
