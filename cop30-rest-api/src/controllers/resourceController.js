const Resource = require('../models/resource');

exports.getAll = async (req, res) => {
  const resources = await Resource.findAll();
  res.json(resources);
};

exports.getById = async (req, res) => {
  const resource = await Resource.findByPk(req.params.id);
  if (!resource) return res.status(404).json({ error: 'Recurso não encontrado' });
  res.json(resource);
};

exports.create = async (req, res) => {
  const { name, type, description } = req.body;
  const resource = await Resource.create({ name, type, description });
  res.status(201).json(resource);
};

exports.update = async (req, res) => {
  const { name, type, description } = req.body;
  const resource = await Resource.findByPk(req.params.id);
  if (!resource) return res.status(404).json({ error: 'Recurso não encontrado' });
  await resource.update({ name, type, description });
  res.json(resource);
};

exports.delete = async (req, res) => {
  const resource = await Resource.findByPk(req.params.id);
  if (!resource) return res.status(404).json({ error: 'Recurso não encontrado' });
  await resource.destroy();
  res.status(204).send();
};