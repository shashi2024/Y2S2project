import Asset from "../model/asset.model";
import logger from "../../utils/logger";

export const createAsset = async (req, res) => {
  const assetData = req.body;

  try {
    const asset = new Asset(assetData);
    await asset.save();

    // eslint-disable-next-line no-underscore-dangle
    logger.info(`Asset with ID: ${asset._id} created.`);
    res.status(201).send(asset);
  } catch (error) {
    logger.error(`Create asset failed with error: ${error.message}`);
    res.status(500).send({ error: error.message });
  }
};

export const getAssets = () => {};
