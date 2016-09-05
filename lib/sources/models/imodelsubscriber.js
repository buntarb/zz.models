/**
 * @fileoverview Provide zz.models.IModelSubscriber interface.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.models.IModelSubscriber' );

/**
 * Model subscriber interface.
 * @interface
 */
zz.models.IModelSubscriber = function( ){ };

/**
 * Process model changes and update view.
 * @param {zz.models.Message} message
 */
zz.models.IModelSubscriber.prototype.modelChanged = goog.abstractMethod;